import autoBind from 'auto-bind';
import { rerenderTheme } from '@ui/tabs/Themes.svelte';
import { comments, config, shouldValidate } from '..';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('Themes');

export class Theme {
  private static readonly link = PopcornNative.isSplash ? 'popcorn://splash-theme/' : 'popcorn://theme/';

  public description: string;
  public id: string;
  public json: string;
  #element: HTMLLinkElement;

  constructor(id: string, themeData: SimpleTheme) {
    autoBind(this);

    this.description = themeData.description;
    this.id = id;
    this.json = themeData.json;
    this.#enabled = themeData.enabled;

    if (shouldValidate) this.#validate();
    if (themeData.enabled) this.enable(false);
  }

  #enabled: boolean;
  get enabled() {
    return this.#enabled;
  }
  set enabled(value) {
    value ? this.enable() : this.disable();
    this.#enabled = value;
  }

  enable(save = true) {
    if (this.#element) {
      Logger.log(`"${this.id}" is already enabled.`);
      return;
    }

    this.#enabled = true;

    const link = this.#element = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = this.id;
    link.href = Theme.link + this.id;
    link.dataset.popcorn = 'true';
    comments.end.before(link);

    Logger.log(`"${this.id}" enabled.`);
    rerenderTheme(this.id);
    if (save) PopcornNative.saveThemeState(this.id, true);
  }
  disable(save = true) {
    if (!this.#element) {
      Logger.warn(`"${this.id}" is not enabled.`);
      return;
    }

    this.#enabled = false;

    this.#element.remove();
    this.#element = null;

    Logger.log(`"${this.id}" disabled.`);
    rerenderTheme(this.id);
    if (save) PopcornNative.saveThemeState(this.id, false);
  }
  toggle(save = true) {
    if (this.enabled) this.disable(save);
    else this.enable(save);
  }

  private rev = 0;
  async update() {
    // TODO: Figure out why doing fetch() doesn't work
    this.#element.href = Theme.link + this.id + `?${++this.rev}`;

    const promise = await fetch(Theme.link + this.id, { cache: 'no-store' });
    const text = await promise.text();
    if (shouldValidate) this.#validate(text);
  }

  public valid: boolean | 'unknown' = 'unknown';
  public errors: cssValidatorErrors = [];
  async #validate(content?: string) {
    content ??= await (await fetch(Theme.link + this.id, { cache: 'no-store' })).text();

    PopcornNative.validateCSS(content)
      .then((result) => {
        if (config.verbose) Logger.debug(`Validated "${this.id}".`, result);

        this.valid = result.valid;
        this.errors = result.errors;
        rerenderTheme(this.id);
      })
      .catch((e) => {
        Logger.error(`Failed to validate "${this.id}".`, e);
      });
  }
}

export default class Themes {
  start() {
    this.watchThemes();
  }

  watchThemes() {
    PopcornNative.onThemeChange(({ id }) => {
      window.Popcorn.themes[id].update();
    });
  }
}

export function populateThemes(simpleThemes: { [id: string]: SimpleTheme }) {
  const themes: { [id: string]: Theme } = {};
  for (const id in simpleThemes) {
    themes[id] = new Theme(id, simpleThemes[id]);
  }

  return themes;
}
