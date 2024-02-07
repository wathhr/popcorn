import { RENDERER } from '#common';
import { createLogger } from '../renderer/common/';
import manifest from '../../index.json' assert { type: 'json' };

const Logger = new createLogger('DevServer');

export type Message = {
  type: string,
  data: {
    content: string,
  },
};

function parse(text: string) {
  try {
    return JSON.parse(text);
  } catch {
    Logger.error('Invalid JSON:', text);
    return null;
  }
}

class DevServer {
  wss: WebSocket;

  constructor(port = 7331) {
    const ws = this.wss = new WebSocket(`ws://localhost:${port}`);

    ws.onmessage = this.handleMessage.bind(this);
    ws.onclose = () => Logger.info('Disconnected');
  }

  private async handleMessage(message: MessageEvent<string>) {
    const json: Message = parse(message.data);
    if (!json) return;

    switch (json.type) {
      case 'hello': {
        this.send('hello');
        Logger.info('Connected');
      } break;

      case 'renderer/index.js': {
        Logger.info('Reloading the renderer script');
        window.postMessage(RENDERER.stop, '*');
        await import(`${kernel.importProtocol}://${kernel.packages.getPackages()[manifest.id]!.path}`);
      } break;

        // case 'renderer.css': {
        //   Logger.info('Reloading renderer.css');

        //   const style = document.getElementById('popcorn-styles');
        //   style.id = 'popcorn-styles';
        //   style.textContent = json.data.content;
        // } break;

      case 'preload/index.js': {
        location.reload();
      } break;
    }
  }

  send(type: string, data?: any) {
    this.wss.send(JSON.stringify({
      type,
      data,
    }));
  }
}

new DevServer();
