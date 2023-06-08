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
  start: document.createComment('section:Popcorn'),
  end: document.createComment('endsection'),
};
export const config = await PopcornNative.config;
export const shouldValidate = Boolean(PopcornNative.validateCSS);

export default new class Renderer {
  async start() {
    const Popcorn = {
      themes: (await PopcornNative.getThemes()) as { [id: string]: Theme },
      quickCss: await PopcornNative.getQuickCss(),
    };
    window.Popcorn = Popcorn;

    document.head.append(comments.start, comments.end);

    new UI({ target: document.body });
    new Themes().start();
    new QuickCss().start();
  }
};
