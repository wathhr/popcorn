import renderer from '.';
import { handleQuickCssMessages } from './quickcss/ipc';
import { prefixes, RENDERER } from '@common/constants';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('IPC');

PopcornNative.onStatusMessage((message) => {
  if (PopcornNative.config.verbose) Logger.debug(message);

  if (message.type.startsWith(prefixes.quickCss)) handleQuickCssMessages(message);
});

class IPC {
  constructor() {
    window.addEventListener('message', this.messageHandler);
  }

  messageHandler(event: MessageEvent) {
    if (!(event.source === window && event.data.startsWith(prefixes.main))) return;

    switch (event.data) {
      case RENDERER.stop: {
        renderer.stop();
      } break;
    }
  }

  stop() {
    window.removeEventListener('message', this.messageHandler);
  }
}

export default IPC;
