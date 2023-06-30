import autoBind from 'auto-bind';
import { RENDERER } from '@common/constants';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('Dev Server');

function parse(text: string) {
  try {
    return JSON.parse(text);
  } catch (_) {
    Logger.error('Invalid JSON:', text);
    return null;
  }
}

interface Message {
  type: 'hello' | 'renderer.js' | 'renderer.css' | 'main.js' | 'preload.js';
  data?: any;
}

export default class WebServer {
  wss: WebSocket;

  constructor(port = 7331) {
    const ws = this.wss = new WebSocket(`ws://localhost:${port}`);

    autoBind(this);
    ws.onmessage = this.handleMessage;
  }

  private handleMessage(message: MessageEvent<string>) {
    const json: Message = parse(message.data);
    if (!json) return;

    switch (json.type) {
      case 'hello': {
        this.send('hello');
        Logger.info('Connected');
      } break;

      case 'renderer.js': {
        Logger.info('Reloading renderer.js');
        window.postMessage(RENDERER.stop, '*');
        document.getElementById('popcorn-core')?.remove();

        const script = document.createElement('script');
        script.id = 'popcorn-core';
        script.type = 'module';
        // This breaks if the code is minified because the renderer_default name gets minified
        script.textContent = json.data.content + ';\nrenderer_default.start();';

        document.head.prepend(script);
      } break;

      case 'renderer.css': {
        Logger.info('Reloading renderer.css');

        const style = document.getElementById('popcorn-styles');
        style.id = 'popcorn-styles';
        style.textContent = json.data.content;
      } break;

      case 'preload.js': {
        Logger.info('Reloading preload.js');
        location.reload();
      } break;

      case 'main.js': break;

      default: {
        Logger.info('Received unknown message:', json);
      }
    }
  }

  send(type: string, data?: any) {
    this.wss.send(JSON.stringify({
      type,
      data,
    }));
  }
}
