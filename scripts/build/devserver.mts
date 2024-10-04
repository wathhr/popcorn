#!/usr/bin/env false

import { type Message, is, parse } from '../../src/common/deveserver.ts';

const log: Console['log'] = (...args) => {
  const [head, ...tail] = args;
  if (typeof head === 'string' && head.startsWith('[') && head.endsWith(']'))
    return console.log(`[DevServer > ${head.slice(1, -1)}]`, ...tail);

  return console.log('[DevServer]', ...args);
};

export class DevServer {
  private server: Deno.HttpServer;
  private sockets = new Map<string, WebSocket>();
  private timers = new Map<number, number>();

  constructor(port = 7331) {
    this.server = Deno.serve({
      port,
      onError(event) {
        log(event);
        return new Response(null, { status: 500 });
      },
    }, (req) => {
      if (req.headers.get('upgrade') !== 'websocket') return new Response(null, { status: 501 });
      const { socket, response } = Deno.upgradeWebSocket(req);

      const nonce = this.sockets.size;
      socket.onopen = () => {
        socket.send(JSON.stringify({ type: 'hello', data: { nonce } }));

        this.timers.set(nonce, setTimeout(() => {
          log('Timed out.');
          socket.close(1008);
        }, 5000));
      };

      const listener = (event: MessageEvent) => {
        const json = parse(event.data);

        if (!is(json, 'hello')) return socket.close(1024, 'Invalid message');

        log(`[${json.data.roles[0]}]`, 'Connected');
        clearTimeout(this.timers.get(json.data.nonce));
        this.timers.delete(json.data.nonce);
        for (const i in json.data.roles) {
          json.data.roles[i] = `${json.data.roles[i]}-${nonce}`;
          this.sockets.set(json.data.roles[i], socket);
        }

        socket.removeEventListener('message', listener);
        socket.addEventListener('message', this.handleMessage(json.data.roles[0]));
        socket.addEventListener('close', () => {
          log(`[${json.data.roles[0]}]`, 'Disconnected');
          for (const role of json.data.roles) this.sockets.delete(role);
        });
      };

      socket.addEventListener('message', listener);

      return response;
    });
  }

  private handleMessage(type: string): (message: MessageEvent<string>) => void {
    const socket = this.sockets.get(type)!;

    return (message) => {
      const json = parse(message.data);

      switch (json.type) {
        case 'stop': {
          socket.close(1000);
        } break;

        default: {
          log(`[${type}]`, 'Received unknown message:', json);
        } break;
      }
    };
  }

  send<T extends keyof Message>(name: string, type: T, data: Message[T]): boolean {
    if (name === '*') {
      if (this.sockets.size === 0) return false;

      for (const socket of this.sockets.values()) socket.send(JSON.stringify({ type, data }));
      return true;
    }

    const sockets = [...this.sockets].filter(([socket]) => socket.startsWith(name));
    if (sockets.length === 0) return false;
    for (const [_, socket] of sockets) socket.send(JSON.stringify({ type, data }));

    return true;
  }

  async stop() {
    this.sockets.forEach(socket => socket.close());
    await this.server.shutdown();
  }

  get connections() {
    return this.sockets.keys();
  }
}
