import { RENDERER, PREFIXES } from '#common';
import * as renderer from '../..';

const messageHandler = (event: MessageEvent) => {
  if (!(event.source === window && event.data.startsWith(PREFIXES.main))) return;

  event.stopPropagation();
  switch (event.data) {
    case RENDERER.stop: renderer.stop();
  }
};

window.addEventListener('message', messageHandler);

export function stop() {
  window.removeEventListener('message', messageHandler);
}
