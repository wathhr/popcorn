import Themes, { populateThemes } from './themes';
import QuickCss from './quickcss';
import UI from '@ui/index.svelte';

declare global {
  interface Window {
    Popcorn: Popcorn;
    PopcornNative: PopcornNative;
  }

  interface globalThis {
    PopcornUI: UI;
    PopcornThemes: Themes;
    PopcornQuickCss: QuickCss;
  }
}

export const shouldValidate = Boolean(PopcornNative.validateCSS);
export const comments = {
  start: document.createComment(' section:Popcorn '),
  end: document.createComment(' endsection '),
};

const renderer = new class Renderer {
  async start() {
    if (!document.getElementById('popcorn-styles')) {
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

    globalThis.UI = new UI({ target: document.body });
    globalThis.Themes = new Themes();
    globalThis.Themes.start();
    globalThis.QuickCss = new QuickCss();
    globalThis.QuickCss.start();
  }

  stop() {
    globalThis.UI.$destroy();
    globalThis.Themes.stop();
    globalThis.QuickCss.stop();

    comments.start.remove();
    comments.end.remove();
    delete window.Popcorn;
  }
};

export default renderer;

import './ipc';
if (NODE_ENV === 'development') new (await import('./devserver')).default();
