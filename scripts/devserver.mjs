#!/bin/usr/env node
// @ts-check

/** @typedef {import('../src/preload/devserver.ts').Message} Message */

import fs from 'fs';
import { dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';
import { WebSocketServer } from 'ws';
import chokidar from 'chokidar';

/** @param {any[]} args */
const log = (...args) => console.log('[Dev Server]', ...args);

/** @param {string} text */
function parse(text) {
  try {
    return JSON.parse(text);
  } catch (_) {
    log('Invalid JSON:', text);
    return null;
  }
}

/** @param {number} [port=7331] */
class DevServer {
  constructor(port = 7331) {
    log('Starting on ws://localhost:' + port);
    this.wss = new WebSocketServer({ port });

    this.wss.on('connection', (ws) => {
      log('Received connection');
      this.connection = ws;
      this.send('hello');

      ws.on('message', this.handleMessage.bind(this));

      this.connectionTimeout = setTimeout(() => {
        log('Did not receive response from client');
        ws.close();
      }, 30000);
    });
  }

  /** @param {import('ws').MessageEvent} message */
  handleMessage(message) {
    const json = parse(message.toString());
    if (!json) return;

    switch (json.type) {
      case 'hello': {
        log('Connected');
        clearTimeout(this.connectionTimeout);
      } break;

      case 'stop': {
        this.connection.close();
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
    if (!this.connection) return log('Not connected');

    this.connection.send(JSON.stringify({
      type,
      data,
    }));
  }
}

const devServer = new DevServer();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dist = join(__dirname, '../dist');

chokidar.watch(dist).on('change', (path) => {
  const relPath = relative(dist, path).replace('\\', '/');
  log('Caught change for', relPath);
  devServer.send(relPath, {
    content: fs.readFileSync(path, 'utf-8'),
  });
});
