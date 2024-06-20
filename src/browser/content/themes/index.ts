import { start, stop } from '#/content';
import { DomManager } from '#/common';

const DOM = new DomManager('themes');

start(async () => {
  for (const theme of await PopcornAPI.getThemes()) {
    const element = document.createElement('link');
    element.rel = 'stylesheet';
    element.href = `popcorn://theme/${theme.id}/${theme.main}`;

    DOM.addElement(element);
  }
});

stop(() => {
  for (const element of DOM.managedElements) element.remove();
});
