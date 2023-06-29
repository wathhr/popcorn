import Themes, { populateThemes } from './themes';
import QuickCss from './quickcss';
import UI from '@ui/index.svelte';

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

const renderer = new class Renderer {
  UI: UI;
  Themes: Themes;
  QuickCss: QuickCss;

  async start() {
    if (!globalThis.PopcornInjected) {
      const style = document.createElement('style');
      style.id = 'popcorn-styles';
      style.textContent = await PopcornNative.getStyles();
      document.head.prepend(style);
    }

    document.head.append(comments.start, comments.end);

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
  }

  stop() {
    this.UI.$destroy();
    this.Themes.stop();
    this.QuickCss.stop();

    comments.start.remove();
    comments.end.remove();
    delete window.Popcorn;
  }
};

export default renderer;

import './ipc';
if (NODE_ENV === 'development' && !globalThis.PopcornInjected) new (await import('./devserver')).default(renderer);

if (!globalThis.PopcornInjected) Object.assign(globalThis, {
  PopcornInjected: true,
});
