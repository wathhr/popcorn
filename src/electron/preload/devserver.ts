import { webFrame } from 'electron';
import type { EventName } from '~/types';
import { CreateLogger } from '&/browser/common/logger';
import { type Message, ipc, is, parse } from '&/common';

const Logger = new CreateLogger('DevServer');

class DevServer {
  private wss: WebSocket;

  constructor(port = 7331) {
    const ws = this.wss = new WebSocket(`ws://localhost:${port}`);

    ws.onmessage = this.handleMessage.bind(this);
    ws.onclose = event => event.code === 1000 && Logger.info('Disconnected');
    ws.onerror = event => Logger.error(event);
  }

  private rendererErrored = false;
  private async handleMessage(message: MessageEvent<string>) {
    const json = parse(message.data);

    switch (true) {
      case is(json, 'hello'): {
        this.send('hello', { roles: ['preload', 'renderer'], nonce: json.data.nonce });
        Logger.info('Connected');
      } break;

      case is(json, 'reload'): {
        const { data } = json; // typescript forgets what type json.data is without this why why why why

        switch (data.file) {
          case 'renderer.js': {
            const listener = async (event: MessageEvent<EventName>) => {
              if (event.data !== ipc('rendererStopped')) return;
              window.removeEventListener('message', listener);

              await webFrame.executeJavaScript(data.content)
                .then(() => this.rendererErrored = false)
                .catch(() => this.rendererErrored = true);
            };

            if (this.rendererErrored) await webFrame.executeJavaScript(data.content)
              .then(() => this.rendererErrored = false)
              .catch(() => this.rendererErrored = true);
            else {
              Logger.debug('Waiting for renderer to stop...');
              window.addEventListener('message', listener);
              window.postMessage(ipc('stop'), '*');
            }
          } break;

          case 'preload.js': {
            location.reload();
          } break;
        }
      } break;

      default: {
        Logger.warn('Unknown message:', json);
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
