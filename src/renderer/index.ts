import Themes from './themes';
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

    const themes = new Themes();
    const quickCss = new QuickCss();
    const Popcorn = {
      themes: themes.populateThemes(await PopcornNative.getThemes()),
      quickCss: await PopcornNative.getQuickCss(),
    };
    window.Popcorn = Popcorn;

    new UI({ target: document.body });
    themes.start();
    quickCss.start();
  }
};
