import { start, stop } from '#/content';
import { DomManager } from '#/common';

let DOM: DomManager; // TODO: Remove the need to do this

start(async () => {
  DOM = new DomManager('themes');

  for (const theme of await PopcornAPI.getThemes()) {
    if (PopcornAPI.isSplash && !theme.splash) continue;
    const path = PopcornAPI.isSplash ? theme.splash : theme.main;

    const element = document.createElement('link');
    element.rel = 'stylesheet';
    element.href = `popcorn://theme/${theme.id}/${path}`;

    DOM.addElement(element);
  }
});

stop(() => {
  for (const element of DOM.managedElements) element.remove();
});
