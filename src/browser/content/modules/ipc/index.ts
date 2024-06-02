import * as renderer from '#/content';
import { ipc } from '#shared/constants';

function messageHandler(event: MessageEvent) {
  if (!(event.source === window && event.data.startsWith(ipc()))) return;

  event.stopPropagation();
  switch (event.data) {
    case ipc('stop'): renderer.stop();
  }
}

window.addEventListener('message', messageHandler);

export function stop() {
  window.removeEventListener('message', messageHandler);
}