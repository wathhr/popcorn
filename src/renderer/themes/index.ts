import autoBind from 'auto-bind';
import { rerenderTheme } from '@ui/tabs/Themes.svelte';
import { comments, config, shouldValidate } from '..';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('Themes');

export class Theme {
  public id: string;
  #element: HTMLLinkElement;

  constructor(id: string, enabled = true) {
    autoBind(this);

    this.id = id;
    this.#enabled = enabled;

    if (shouldValidate) this.#validate();
    if (enabled) this.enable(false);
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
    link.href = `popcorn://theme/${this.id}`;
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

  update() {
    const promise = fetch(`popcorn://theme/${this.id}`);
    this.#validate(promise);
  }

  // Use getters and setters here?
  public valid: boolean | 'unknown' = 'unknown';
  public errors: cssValidatorErrors = [];
  async #validate(content?: string | Promise<Response>) {
    content ??= fetch(`popcorn://theme/${this.id}`);
    let text: string;
    if (typeof content === 'string') text = content;
    else text = await (await content).text();

    PopcornNative.validateCSS(text)
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

  populateThemes(simpleThemes: { [id: string]: SimpleTheme }) {
    const themes: { [id: string]: Theme } = {};
    for (const id in simpleThemes) {
      themes[id] = new Theme(id, simpleThemes[id].enabled);
    }

    return themes;
  }

  watchThemes() {
    PopcornNative.onThemeChange(({ id }) => {
      window.Popcorn.themes[id].update();
    });
  }
}