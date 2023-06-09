import autoBind from 'auto-bind';
import themeProxy from './proxy';
import { comments, config, shouldValidate } from '..';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('Themes');

export default class Themes {
  styleCache = new Map<string, HTMLLinkElement>();
  themeRevisions = new Map<string, number>();
  proxy: typeof Popcorn.themes;

  constructor() {
    this.proxy = new Proxy(window.Popcorn.themes, themeProxy);
    window.Popcorn.themes = this.proxy;

    autoBind(this);
  }

  start() {
    this.populateThemes();
    this.watchThemes();
  }

  private populateThemes() {
    for (const theme in this.proxy) {
      const themeMeta = this.proxy[theme];
      if (themeMeta.enabled) this.enable(theme, false);
    }
  }

  private watchThemes() {
    PopcornNative.onThemeChange(async ({ id, theme }) => {
      if (config.verbose) Logger.debug(`Theme changed: ${id}`);
      this.proxy[id] = this.populateTheme(theme);
      this.updateTheme(id);
    });
  }

  updateTheme(id: string) {
    const themeElement = this.styleCache.get(id);
    if (!themeElement) {
      Logger.warn(`No theme found with id: "${id}"`);
      return;
    }

    const rev = (this.themeRevisions.get(id) ?? 0) + 1;
    this.themeRevisions.set(id, rev);
    themeElement.href = `popcorn://theme/${id}?${rev}`;
  }

  populateTheme(theme: SimpleTheme): Theme {
    const id = theme.id;
    const convertedTheme: Theme = {
      ...theme,
      enable: (save = true) => this.enable(id, save),
      disable: (save = true) => this.disable(id, save),
      toggle: (save = true) => this.toggle(id, save),
      valid: 'unknown',
      errors: [],
    };

    if (shouldValidate) this.validateTheme(theme.id);

    return convertedTheme;
  }

  async validateTheme(id: string) {
    const themeMeta = this.proxy[id];
    const content = await (await fetch(`popcorn://theme/${id}`)).text();

    PopcornNative.validateCSS(content)
      .then((result) => {
        console.log(themeMeta.valid, this.proxy[id].valid);
        themeMeta.valid = result.valid;
        themeMeta.errors = result.errors;
        console.log(themeMeta.valid, this.proxy[id].valid);
      })
      .catch((e) => {
        Logger.error(`Failed to validate "${id}".`, e);
        themeMeta.valid = 'unknown';
      });
  }

  enable(id: string, save = true) {
    const themeMeta = this.proxy[id];

    if (this.styleCache.has(id)) {
      Logger.log(`"${id}" is already enabled.`);
      return;
    }

    themeMeta.enabled = true;

    const elem = document.createElement('link');
    elem.rel = 'stylesheet';
    elem.id = id;
    elem.href = `popcorn://theme/${id}`;
    elem.dataset.popcorn = 'true';
    comments.end.before(elem);

    this.styleCache.set(id, elem);

    Logger.log(`"${id}" enabled.`);
    if (save) PopcornNative.saveThemeState(id, true);
  }
  disable(id: string, save = true) {
    const themeMeta = this.proxy[id];

    const style = this.styleCache.get(id);
    if (!style) {
      Logger.warn(`"${id}" is not enabled.`);
      return;
    }

    themeMeta.enabled = false;

    this.styleCache.delete(id);
    style.remove();

    Logger.log(`"${id}" disabled.`);
    if (save) PopcornNative.saveThemeState(id, false);
  }
  toggle(id: string, save = true) {
    const themeMeta = this.proxy[id];

    if (!themeMeta.enabled) this.enable(id, save);
    else this.disable(id, save);
  }
}
