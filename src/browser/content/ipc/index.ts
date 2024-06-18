import renderer from '#/content';
import { ipc } from '#shared/constants';

export class IPC {
  private async messageHandler(event: MessageEvent) {
    if (!(event.source === window && event.data.startsWith(ipc()))) return;

    event.stopPropagation();
    switch (event.data) {
      case ipc('stop'): {
        await renderer.stop();
        window.postMessage(ipc('stopped'), '*');
      } break;
    }
  }

  start() {
    window.addEventListener('message', this.messageHandler);
  }

  stop() {
    window.removeEventListener('message', this.messageHandler);
  }
};

export default IPC;
