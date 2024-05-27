import { webFrame } from 'electron';
import { CreateLogger } from '../../browser/common/logger';
import manifest from '~/index.json' assert { type: 'json' };
import { ipc, isKernel } from '#shared';

const Logger = new CreateLogger('DevServer');

export interface Message {
  hello: {
    roles: [string, ...string[]],
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

const is = <T extends keyof Message>(json: MessageResponse, type: T): json is MessageResponse<T> & boolean => json.type === type;

function parse(text: string) {
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`Invalid JSON: ${text}`);
  }
}

class DevServer {
  private wss: WebSocket;

  constructor(port = 7331) {
    const ws = this.wss = new WebSocket(`ws://localhost:${port}`);

    ws.onmessage = this.handleMessage.bind(this);
    ws.onclose = event => event.code === 1000 && Logger.info('Disconnected');
    ws.onerror = event => Logger.error(event);
  }

  private async handleMessage(message: MessageEvent<string>) {
    const json = parse(message.data);

    switch (true) {
      case is(json, 'hello'): {
        this.send('hello', { roles: ['preload', 'renderer'], nonce: json.data.nonce });
        Logger.info('Connected');
      } break;

      case is(json, 'reload'): {
        switch (json.data.file) {
          case 'renderer.js': {
            Logger.info('Reloading the renderer script');
            window.postMessage(ipc('stop'), '*');

            if (!process.contextIsolated && isKernel) await import(`${kernel.importProtocol}://${kernel.packages.getPackages()[manifest.id]!.path}`);
            else webFrame.executeJavaScript(await fetch('popcorn://core/renderer.js').then(res => res.text()));
          } break;
          case 'preload.js': {
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
