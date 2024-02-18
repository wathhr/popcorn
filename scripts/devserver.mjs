#!/bin/usr/env false
// @ts-check

/** @typedef {import('../src/preload/devserver.ts').Message} Message */

import { WebSocketServer } from 'ws';

/** @param {any[]} args */
const log = (...args) => console.log('[dev]', ...args);

/** @param {string} text */
function parse(text) {
  try {
    return JSON.parse(text);
  } catch {
    log('Invalid JSON:', text);
    return null;
  }
}

export class DevServer {
  #wss;
  /** @type {import('ws').WebSocket} */
  #connection;
  /** @type {NodeJS.Timeout} */
  #connectionTimeout;

  constructor(port = 7331) {
    log('Starting on ws://localhost:' + port);
    this.#wss = new WebSocketServer({ port });

    this.#wss.on('connection', (ws) => {
      log('Received connection');
      this.#connection = ws;
      this.send('hello');

      ws.on('message', this.#handleMessage.bind(this));

      clearTimeout(this.#connectionTimeout);
      this.#connectionTimeout = setTimeout(() => {
        log('Did not receive response from client');
        ws.close();
      }, 30000);
    });
  }

  /** @param {import('ws').MessageEvent} message */
  #handleMessage(message) {
    const json = parse(message.toString());
    if (!json) return;

    switch (json.type) {
      case 'hello': {
        log('Connected');
        clearTimeout(this.#connectionTimeout);
      } break;

      case 'stop': {
        this.#connection.close();
      } break;

      default: {
        log('Received unknown message:', json);
      } break;
    }
  }

  /**
   * @param {Message['type']} type
   * @param {Message['data']} [data]
   */
  send(type, data) {
    if (!this.#connection) {
      log('Not connected');
      return false;
    }

    this.#connection.send(JSON.stringify({
      type,
      data,
    }));
  }

  stop() {
    this.#wss.close();
  }

  get connected() {
    return Boolean(this.#connection);
  }
}
