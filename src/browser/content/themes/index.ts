import { DomManager } from '#/common';

export class Themes {
  private DOM = new DomManager('themes');

  async start() {
    for (const theme of await PopcornAPI.getThemes()) {
      const element = document.createElement('link');
      element.rel = 'stylesheet';
      element.href = `popcorn://theme/${theme.id}/${theme.main}`;

      this.DOM.addElement(element);
    }
  }

  stop() {
    for (const element of this.DOM.managedElements) element.remove();
  }
}

export default Themes;
