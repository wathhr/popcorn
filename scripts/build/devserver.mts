#!/bin/usr/env false

import type { Message, MessageResponse } from '../../src/electron/preload/devserver.ts';

const log: Console['log'] = (...args) => {
  const [head, ...tail] = args;
  if (typeof head === 'string' && head.startsWith('[') && head.endsWith(']'))
    return console.log(`[DevServer > ${head.slice(1, -1)}]`, ...tail);

  return console.log('[DevServer]', ...args);
};

function parse<T extends keyof Message = keyof Message>(text: string): MessageResponse<T> {
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`Invalid JSON: ${text}`);
  }
}

export class DevServer {
  private server: Deno.HttpServer;
  private sockets = new Map<string, WebSocket>();
  private timers = new Map<number, number>();

  constructor(port = 7331) {
    this.server = Deno.serve({
      port,
      onError: (event) => {
        log(event);
        return new Response(null, { status: 500 });
      },
    }, (req) => {
      if (req.headers.get('upgrade') !== 'websocket') return new Response(null, { status: 501 });
      const { socket, response } = Deno.upgradeWebSocket(req);

      socket.onopen = () => {
        const nonce = Math.random();
        socket.send(JSON.stringify({ type: 'hello', data: { nonce } }));

        this.timers.set(nonce, setTimeout(() => {
          log('Timed out.');
          socket.close(1008);
        }, 5000));
      };

      const listener = (event: MessageEvent) => {
        const json = parse<'hello'>(event.data);

        if (json.type !== 'hello') {
          socket.close(1024, 'Invalid message');
          return;
        }

        log(`[${json.data.roles[1]}]`, 'Connected');
        clearTimeout(this.timers.get(json.data.nonce));
        this.timers.delete(json.data.nonce);
        for (const role of json.data.roles) this.sockets.set(role, socket);

        socket.removeEventListener('message', listener);
        socket.addEventListener('message', this.handleMessage(json.data.roles[0]));
        socket.addEventListener('close', () => {
          for (const role of json.data.roles) this.sockets.delete(role);
          log(`[${json.data.roles[0]}]`, 'Disconnected');
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

  send<T extends keyof Message>(name: string, type: T, data: Message[T]) {
    if (name === '*') {
      if (this.sockets.size === 0) {
        // log('No clients connected');
        return false;
      }

      for (const socket of this.sockets.keys()) this.send(socket, type, data);
      return true;
    }

    if (!this.sockets.has(name)) {
      // log(`[${name}]`, 'Not connected');
      return false;
    }

    this.sockets.get(name)!.send(JSON.stringify({
      type,
      data,
    }));

    return true;
  }

  stop() {
    this.sockets.forEach(socket => socket.close());
    this.server.shutdown();
  }

  get connections() {
    return this.sockets.keys();
  }
}
