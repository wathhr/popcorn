import IPC from './ipc';
import QuickCss from './quickcss';
import Themes, { populateThemes } from './themes';
import UI from '@ui/index.svelte';

declare global {
  const PopcornNative: PopcornNative;

  interface Window {
    Popcorn: Popcorn;
    PopcornNative: PopcornNative;
    readonly PopcornInjected: boolean;
  }
}

export const shouldValidate = Boolean(PopcornNative.validateCSS);
export const comments = {
  start: document.createComment(' section:Popcorn '),
  end: document.createComment(' endsection '),
};

const renderer = new class Renderer implements Renderer {
  private IPC: IPC;
  private QuickCss: QuickCss;
  private Themes: Themes;
  private UI: UI;

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
    document.body.append(comments.start, comments.end); // appending to the body for a higher chance to overwrite the default styles
    if (!window.PopcornInjected) await this.init();

    const themes = await PopcornNative.getThemes();
    const quickCss = await PopcornNative.getQuickCss();
    window.Popcorn = {
      themes: populateThemes(themes),
      quickCss,
    };

    this.IPC = new IPC();
    this.QuickCss = new QuickCss();
    this.Themes = new Themes();
    this.UI = new UI({ target: document.body });
  }

  stop() {
    this.IPC?.stop();
    this.QuickCss?.stop();
    this.Themes?.stop();
    this.UI?.$destroy();

    comments.start.remove();
    comments.end.remove();

    delete window.Popcorn;
  }
};

export default renderer;
