import renderer, { start, stop } from '#/content';
import { ipc } from '&/common';

async function messageHandler(event: MessageEvent) {
  if (!(event.source === window && event.data.startsWith(ipc()))) return;

  event.stopPropagation();
  switch (event.data) {
    case ipc('stop'): {
      await renderer.stop();
      window.postMessage(ipc('rendererStopped'), '*');
    } break;
  }
}

start(() => window.addEventListener('message', messageHandler));
stop(() => window.removeEventListener('message', messageHandler));
