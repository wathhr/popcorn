import autoBind from 'auto-bind';
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

  constructor() {
    const startComment = document.createComment('section:Popcorn');
    const endComment = document.createComment('endsection');
    document.head.append(startComment, endComment);
    this.comments = {
      start: startComment,
      end: endComment,
    };

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

    await this.populateThemes();
  }

  private async populateThemes() {
    for (const theme of Object.keys(Popcorn.themes)) {
      const themeMeta = Popcorn.themes[theme];

      themeMeta.enable = (id: string, save = true) => this.enable(id, save);
      themeMeta.disable = (id: string, save = true) => this.disable(id, save);
      themeMeta.toggle = (id: string, save = true) => this.toggle(id, save);
      Logger.log(theme, themeMeta);

      if (themeMeta.enabled) await this.enable(theme, false);
    }
  }

  async enable(id: string, save = true) {
    const themeMeta = Popcorn.themes[id];
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

    if (save) Logger.log('🤯🤯🤯');
  }
  async disable(id: string, save = true) {
    const themeMeta = Popcorn.themes[id];
    themeMeta.enabled = false;

    const style = this.themeElements.get(id);
    if (!style) {
      Logger.warn(`"${id}" is not enabled.`);
      return;
    }
    this.themeElements.delete(id);
    style.remove();

    if (save) Logger.log('🤯🤯🤯');
  }
  async toggle(id: string, save = true) {
    const themeMeta = Popcorn.themes[id];
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
