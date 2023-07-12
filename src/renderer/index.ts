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

  async init() {
    Object.assign(window, {
      PopcornInjected: true,
    });

    const style = document.createElement('style');
    style.id = 'popcorn-styles';
    style.textContent = await PopcornNative.getStyles();
    comments.start.after(style);
  }

  async start() {
    document.head.prepend(comments.start, comments.end);
    if (!globalThis.PopcornInjected) await this.init();

    const themes = await PopcornNative.getThemes();
    const quickCss = await PopcornNative.getQuickCss();
    window.Popcorn = {
      themes: populateThemes(themes),
      quickCss,
    };

    this.UI = new UI({ target: document.body });
    this.Themes = new Themes();
    this.Themes.start();
    this.QuickCss = new QuickCss();
    this.QuickCss.start();
  }

  stop() {
    this.UI?.$destroy();
    this.Themes?.stop();
    this.QuickCss?.stop();

    comments.start.remove();
    comments.end.remove();

    window.removeEventListener('message', messageHandler);
    delete window.Popcorn;
  }
};

export default renderer;

import './ipc';
