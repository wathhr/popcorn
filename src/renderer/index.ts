import autoBind from 'auto-bind';
import proxyHandler from './proxy';
import UI from './ui/index.svelte';
import LoggerModule from '@utils/logger';
const Logger = new LoggerModule('Renderer');

declare global {
  interface Window {
    Popcorn: Popcorn;
  }
}

const config = await PopcornNative.config;

// prettier adds these awesome ()() i love it
export default new (class Renderer {
  comments: { start: Comment; end: Comment };
  themeCache: Map<string, HTMLElement> = new Map();
  themeProxy: typeof Popcorn.themes;
  shouldValidate: boolean;

  constructor() {
    this.shouldValidate = PopcornNative.validateCSS !== null;

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

    new UI({ target: document.body });
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
    const themeElement = this.themeCache.get(id);
    if (!themeElement) {
      Logger.warn(`No theme found with id: "${id}"`);
      return;
    };

    themeElement.textContent = this.themeProxy[id].css;
  }

  async populateTheme(id: string) {
    const themeMeta = this.themeProxy[id];

    themeMeta.enable = (save = true) => this.enable(id, save);
    themeMeta.disable = (save = true) => this.disable(id, save);
    themeMeta.toggle = (save = true) => this.toggle(id, save);

    themeMeta.valid = 'unknown';
    this.validateTheme(id);
  }

  async validateTheme(id: string) {
    if (!this.shouldValidate) return;

    const themeMeta = this.themeProxy[id];
    PopcornNative.validateCSS(themeMeta.css)
      .then((result) => {
        themeMeta.valid = Boolean(result.valid);
      })
      .catch((e) => {
        Logger.error(`Failed to validate "${id}".`, e);
        themeMeta.valid = 'unknown';
      });
  }

  enable(id: string, save = true) {
    const themeMeta = this.themeProxy[id];
    themeMeta.enabled = true;

    if (this.themeCache.has(id)) {
      Logger.log(`"${id}" is already enabled.`);
      return;
    }

    const style = document.createElement('style');
    style.id = id;
    style.textContent = themeMeta.css;
    style.dataset.popcorn = 'true';
    this.comments.end.before(style);

    this.themeCache.set(id, style);
    PopcornNative.watchTheme(JSON.stringify(themeMeta));

    Logger.log(`"${id}" enabled.`);
    if (save) PopcornNative.saveState(id, true);
  }
  disable(id: string, save = true) {
    const themeMeta = this.themeProxy[id];
    themeMeta.enabled = false;

    const style = this.themeCache.get(id);
    if (!style) {
      Logger.warn(`"${id}" is not enabled.`);
      return;
    }

    this.themeCache.delete(id);
    style.remove();
    PopcornNative.unwatchTheme(JSON.stringify(themeMeta));

    Logger.log(`"${id}" disabled.`);
    if (save) PopcornNative.saveState(id, false);
  }
  toggle(id: string, save = true) {
    const themeMeta = this.themeProxy[id];

    if (!themeMeta.enabled) this.enable(id, save);
    else this.disable(id, save);
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
