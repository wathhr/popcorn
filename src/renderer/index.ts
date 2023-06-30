import Themes, { populateThemes } from './themes';
import QuickCss from './quickcss';
import UI from '@ui/index.svelte';
import { RENDERER } from '@common/constants';

declare global {
  interface Window {
    Popcorn: Popcorn;
    PopcornNative: PopcornNative;
  }

  interface globalThis {
    readonly PopcornInjected: boolean;
  }
}

export const shouldValidate = Boolean(PopcornNative.validateCSS);
export const comments = {
  start: document.createComment(' section:Popcorn '),
  end: document.createComment(' endsection '),
};

const messageHandler = (event: MessageEvent) => event.source === window && event.data === RENDERER.stop && renderer.stop();

const renderer = new class Renderer {
  UI: UI;
  Themes: Themes;
  QuickCss: QuickCss;

  constructor() {
    if (NODE_ENV === 'development') window.addEventListener('message', messageHandler);
  }

  async start() {
    document.head.append(comments.start, comments.end);
    if (!globalThis.PopcornInjected) {
      const style = document.createElement('style');
      style.id = 'popcorn-styles';
      style.textContent = await PopcornNative.getStyles();
      comments.start.after(style);
    }

    const themes = await PopcornNative.getThemes();
    const quickCss = await PopcornNative.getQuickCss();
    const Popcorn = {
      themes: populateThemes(themes),
      quickCss,
    };
    window.Popcorn = Popcorn;

    this.UI = new UI({ target: document.body });
    this.Themes = new Themes();
    this.Themes.start();
    this.QuickCss = new QuickCss();
    this.QuickCss.start();

    if (!globalThis.PopcornInjected) Object.assign(globalThis, {
      PopcornInjected: true,
    });
  }

  stop() {
    this.UI.$destroy();
    this.Themes.stop();
    this.QuickCss.stop();

    window.removeEventListener('message', messageHandler);
    comments.start.remove();
    comments.end.remove();
    delete window.Popcorn;
  }
};

export default renderer;

import './ipc';
