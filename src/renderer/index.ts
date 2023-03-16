import autoBind from 'auto-bind';
import proxyHandler from './proxy';
import LoggerModule from '@utils/logger';
const Logger = new LoggerModule('Renderer');

declare global {
  interface Window {
    Popcorn: Popcorn;
  }
}

// prettier adds these awesome ()() i love it
export default new (class Renderer {
  comments: { start: Comment; end: Comment };
  themeElements: Map<string, HTMLElement> = new Map();
  proxy: typeof Popcorn.themes;

  constructor() {
    autoBind(this);
  }

  async start() {
    const themes: { [id: string]: Theme } = await PopcornNative.getThemes();
    const Popcorn = {
      themes: themes,
      enable: this.enable,
      disable: this.disable,
      toggle: this.toggle,
    };
    window.Popcorn = Popcorn;
    this.proxy = new Proxy(Popcorn.themes, proxyHandler);
    window.Popcorn.themes = this.proxy;

    const startComment = document.createComment('section:Popcorn');
    const endComment = document.createComment('endsection');
    document.head.append(startComment, endComment);
    this.comments = {
      start: startComment,
      end: endComment,
    };

    this.populateThemes();
  }

  private async populateThemes() {
    for (const theme of Object.keys(this.proxy)) {
      const themeMeta = this.proxy[theme];

      this.populateTheme(theme);
      Logger.log(theme, themeMeta);

      if (themeMeta.enabled) await this.enable(theme, false);
    }
  }

  private async populateTheme(id: string) {
    const themeMeta = this.proxy[id];

    themeMeta.enable = (id: string, save = true) => this.enable(id, save);
    themeMeta.disable = (id: string, save = true) => this.disable(id, save);
    themeMeta.toggle = (id: string, save = true) => this.toggle(id, save);
  }

  private async enable(id: string, save = true) {
    const themeMeta = this.proxy[id];
    themeMeta.enabled = true;

    if (this.themeElements.has(id)) {
      Logger.log(`"${id}" is already enabled.`);
      return;
    }

    const style = document.createElement('style');
    style.id = id;
    style.textContent = themeMeta.css;
    style.dataset.popcorn = 'true';
    this.comments.end.before(style);

    this.themeElements.set(id, style);

    if (save) PopcornNative.saveState(id, true);
  }
  private async disable(id: string, save = true) {
    const themeMeta = this.proxy[id];
    themeMeta.enabled = false;

    const style = this.themeElements.get(id);
    if (!style) {
      Logger.warn(`"${id}" is not enabled.`);
      return;
    }
    this.themeElements.delete(id);
    style.remove();

    if (save) PopcornNative.saveState(id, false);
  }
  private async toggle(id: string, save = true) {
    const themeMeta = this.proxy[id];
    themeMeta.enabled = !themeMeta.enabled;

    if (themeMeta.enabled) await this.enable(id, save);
    else await this.disable(id, save);
  }

  async stop() {
    delete window.Popcorn;
    const elements = [
      ...document.querySelectorAll('[data-popcorn]'),
      ...Object.values(this.comments),
    ];

    for (const element of elements) {
      element.remove();
    }
  }
})();
