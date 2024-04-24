import { webFrame } from 'electron';
import { CreateLogger } from '../renderer/common/logger';
import manifest from '~/index.json' assert { type: 'json' };
import { ipc, isKernel } from '#shared';

const Logger = new CreateLogger('DevServer');

export interface Message {
  hello: {
    name: string,
    roles?: string[],
    nonce: number,
  },
  stop: never,
  reload: {
    file: string,
    content: string,
  },
}

export interface MessageResponse<T extends keyof Message = keyof Message> {
  type: T,
  data: Message[T],
}

class DevServer {
  private wss: WebSocket;

  private parse(text: string) {
    try {
      return JSON.parse(text);
    } catch {
      throw new Error(`Invalid JSON: ${text}`);
    }
  }

  private is<T extends keyof Message>(json: MessageResponse, type: T): json is MessageResponse<T> {
    return json.type === type;
  }

  constructor(port = 7331) {
    const ws = this.wss = new WebSocket(`ws://localhost:${port}`);

    ws.onmessage = this.handleMessage.bind(this);
    ws.onclose = event => event.code === 1000 && Logger.info('Disconnected');
    ws.onerror = event => Logger.error(event);
  }

  private async handleMessage(message: MessageEvent<string>) {
    const json = this.parse(message.data);

    switch (true) {
      case this.is(json, 'hello'): {
        this.send('hello', { name: 'preload', roles: ['renderer'], nonce: json.data.nonce });
        Logger.info('Connected');
      } break;

      case this.is(json, 'reload'): {
        switch (json.data.file) {
          case 'renderer/index.js': {
            Logger.info('Reloading the renderer script');
            window.postMessage(ipc('stop'), '*');

            if (!process.contextIsolated && isKernel) await import(`${window.kernel.importProtocol}://${window.kernel.packages.getPackages()[manifest.id]!.path}`);
            else webFrame.top?.executeJavaScript(json.data.content);
          } break;
          case 'preload/index.js': {
            location.reload();
          } break;
        }
      } break;
    }
  }

  send<T extends keyof Message>(type: T, data: Message[T]) {
    this.wss.send(JSON.stringify({
      type,
      data,
    }));
  }
}

new DevServer();
