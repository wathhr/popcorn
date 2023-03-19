import autoBind from 'auto-bind';
import proxyHandler from './proxy';
import LoggerModule from '@utils/logger';
const Logger = new LoggerModule('Renderer');

declare global {
  interface Window {
    Popcorn: Popcorn;
  }
}

// @ts-expect-error
const config = await PopcornNative.config;

// prettier adds these awesome ()() i love it
export default new (class Renderer {
  comments: { start: Comment; end: Comment };
  themeElements: Map<string, HTMLElement> = new Map();
  themeProxy: typeof Popcorn.themes;

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
    this.themeProxy = new Proxy(Popcorn.themes, proxyHandler);
    Popcorn.themes = this.themeProxy;
    window.Popcorn = Popcorn;

    const startComment = document.createComment('section:Popcorn');
    const endComment = document.createComment('endsection');
    document.head.append(startComment, endComment);
    this.comments = {
      start: startComment,
      end: endComment,
    };

    this.populateThemes();
    this.watchThemes();
  }

  async populateThemes() {
    for (const theme of Object.keys(this.themeProxy)) {
      const themeMeta = this.themeProxy[theme];

      this.populateTheme(theme);

      if (themeMeta.enabled) await this.enable(theme, false);
    }
  }

  async watchThemes() {
    PopcornNative.onThemeChange(({id, theme}) => {
      if (config.verbose) Logger.debug(`Theme changed: ${id}`);
      this.themeProxy[id] = theme as Theme;
      this.populateTheme(id);
      this.updateTheme(id);
    });
  }

  async updateTheme(id: string) {
    const themeElement = this.themeElements.get(id);
    if (!themeElement) {
      Logger.warn(`No theme found with id: "${id}"`);
      return;
    };

    themeElement.textContent = this.themeProxy[id].css;
  }

  async populateTheme(id: string) {
    const themeMeta = this.themeProxy[id];

    themeMeta.enable = (id: string, save = true) => this.enable(id, save);
    themeMeta.disable = (id: string, save = true) => this.disable(id, save);
    themeMeta.toggle = (id: string, save = true) => this.toggle(id, save);
  }

  async enable(id: string, save = true) {
    const themeMeta = this.themeProxy[id];
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
    PopcornNative.watchTheme(JSON.stringify(themeMeta));

    Logger.log(`"${id}" enabled.`);
    if (save) PopcornNative.saveState(id, true);
  }
  async disable(id: string, save = true) {
    const themeMeta = this.themeProxy[id];
    themeMeta.enabled = false;

    const style = this.themeElements.get(id);
    if (!style) {
      Logger.warn(`"${id}" is not enabled.`);
      return;
    }
    this.themeElements.delete(id);
    style.remove();
    PopcornNative.unwatchTheme(JSON.stringify(themeMeta));

    Logger.log(`"${id}" disabled.`);
    if (save) PopcornNative.saveState(id, false);
  }
  async toggle(id: string, save = true) {
    const themeMeta = this.themeProxy[id];
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
