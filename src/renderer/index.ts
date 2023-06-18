import Themes, { populateThemes } from './themes';
import QuickCss from './quickcss';
import UI from '@ui/index.svelte';

declare global {
  interface Window {
    Popcorn: Popcorn;
    PopcornNative: PopcornNative;
  }
}

export const comments = {
  start: document.createComment(' section:Popcorn '),
  end: document.createComment(' endsection '),
};
export const config = await PopcornNative.config;
export const shouldValidate = Boolean(PopcornNative.validateCSS);

export default new class Renderer {
  async start() {
    document.head.append(comments.start, comments.end);

    const themes = await PopcornNative.getThemes();
    const quickCss = await PopcornNative.getQuickCss();
    const Popcorn = {
      themes: populateThemes(themes),
      quickCss,
    };
    window.Popcorn = Popcorn;

    new UI({ target: document.body });
    new Themes().start();
    new QuickCss().start();
  }
};

import './ipc';
