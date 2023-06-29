// @ts-check

import fs from 'fs';
import { basename, dirname, join } from 'path';
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
   * @param {string} type
   * @param {any} [data]
   */
  send(type, data) {
    if (!this.connection) {
      log('Not connected');
      return;
    }

    this.connection.send(JSON.stringify({
      type,
      data,
    }));
  }
}

const devServer = new DevServer();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
chokidar.watch(join(__dirname, '../dist')).on('change', (path) => {
  const fileName = basename(path);
  log('Caught change for', fileName);
  devServer.send(fileName, {
    content: fs.readFileSync(path, 'utf-8'),
  });
});
