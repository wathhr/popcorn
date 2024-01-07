import { RENDERER, PREFIXES } from '#common';
import { softStop as rendererSoftStop } from '../..';

const messageHandler = (event: MessageEvent) => {
  if (!(event.source === window && event.data.startsWith(PREFIXES.main))) return;

  event.stopPropagation();
  switch (event.data) {
    case RENDERER.softStop: rendererSoftStop();
  }
};

window.addEventListener('message', messageHandler);

export function softStop() {
  window.removeEventListener('message', messageHandler);
}

export const stop = softStop;

export default {
  softStop,
  stop,
};
