import dialogPolyfill from './node_modules/dialog-polyfill/dist/dialog-polyfill.esm.js';
import { createContext } from './utils/hotkeys';
import { log } from './utils/logger/renderer';

export default {
  async start() {
    const themes = await PopcornNative.getThemes();
    const Popcorn = {
      themes: themes.themes,
      enable: this.enableTheme,
      disable: this.disableTheme,
    };
    window.Popcorn = Popcorn;

    this.themesProxy = new Proxy(window.Popcorn.themes, this.proxyHandler);
    this.addStyles();
    this.populateThemes();
    this.watchThemes();
    this.createUI();
  },

  async addStyles() {
    const style = document.createElement('style');
    style.dataset.popcornTheme = true;
    style.textContent =
      '[class^=PopcornUI-]{box-sizing:border-box}.PopcornUI-dialog,.PopcornUI-dialog+.backdrop{z-index:2147483647}.PopcornUI-dialog{--pop-text-color:#e6e6e6;--pop-gray:#a6a6a6;--pop-red:#e23636;--pop-green:#00b318;background-color:#383838;min-height:clamp(12rem + 10vh,40vh,60vh);width:clamp(12rem + 10vw,40vw,60vw)}.PopcornUI-dialog+.backdrop,.PopcornUI-dialog::backdrop{background-color:rgba(0,0,0,.45)}.PopcornUI-wrapper{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(16rem,1fr))}.PopcornUI-item{background-color:rgba(0,0,0,.15);color:var(--pop-text-color);display:grid;font-size:1.5rem;grid-template-rows:auto 1fr auto;padding:.5rem;row-gap:.5rem}.PopcornUI-meta{border-top:.125rem solid var(--pop-text-color);font-size:1.25rem;padding-block-start:.5rem}.PopcornUI-valid[data-value=true]{color:var(--pop-green)}.PopcornUI-valid[data-value=true]:before{content:"\\2714  "}.PopcornUI-valid[data-value=false]{color:var(--pop-red)}.PopcornUI-valid[data-value=false]:before{content:"\\2718  "}.PopcornUI-valid[data-value=unknown]{color:var(--pop-gray)}.PopcornUI-valid[data-value=unknown]:before{content:"\\2049  "}.PopcornUI-toggle{all:unset;cursor:pointer;padding:.5rem;text-align:center}[data-enabled=true]>.PopcornUI-toggle{background-color:var(--pop-red)}[data-enabled=false]>.PopcornUI-toggle{background-color:var(--pop-green)}';

    document.head.append(
      document.createComment('section:Popcorn'),
      style,
      document.createComment('endsection')
    );
  },

  async populateThemes() {
    Object.keys(this.themesProxy).forEach(async (theme) => {
      const themeMeta = this.themesProxy[theme];
      this.populateTheme(theme);

      if (themeMeta.enabled) this.enableTheme(theme, false);
    });
  },
  populateTheme(theme) {
    const themeMeta = this.themesProxy[theme];

    themeMeta.id = theme;
    themeMeta.enable = (save = true) => this.enableTheme(theme, save);
    themeMeta.disable = (save = true) => this.disableTheme(theme, save);
    themeMeta.toggle = (save = true) => this.toggleTheme(theme, save);

    this.validateTheme(theme);
  },
  async watchThemes() {
    PopcornNative.onThemeChanges(async (theme) => {
      log(`Caught a change for "${theme}".`);

      const updatedTheme = await PopcornNative.getTheme(theme);
      this.themesProxy[theme] = updatedTheme;
      this.updateTheme(theme);
    });
  },
  updateTheme(theme) {
    const themeMeta = this.themesProxy[theme];

    const styleElement = document.getElementById(theme);
    if (!styleElement) this.enableTheme(theme, false);
    styleElement.textContent = themeMeta.css;
    this.populateTheme(theme);
  },

  enableTheme(theme, save = true) {
    const themeMeta = this.themesProxy[theme];

    if (document.getElementById(theme)) {
      log(`"${theme}" is already enabled, try using the update() function.`);
      return;
    }

    const style = document.createElement('style');
    style.textContent = themeMeta.css;
    style.dataset.popcornTheme = true;
    style.id = theme;

    const themes = document.querySelectorAll('[data-popcorn-theme]');
    themes[themes.length - 1].after(style);

    if (save) {
      themeMeta.enabled = true;
      PopcornNative.saveSetting(theme, 'enabled', true);
    }
    log(`Enabled "${theme}".`);
  },
  disableTheme(theme, save = true) {
    const themeMeta = this.themesProxy[theme];

    const styleElement = document.getElementById(theme);
    if (styleElement) styleElement.remove();
    themeMeta.enabled = false;

    if (save) PopcornNative.saveSetting(theme, 'enabled', false);
    log(`Disabled "${theme}".`);
  },
  toggleTheme(theme, save = true) {
    const themeMeta = this.themesProxy[theme];
    if (themeMeta.enabled) this.disableTheme(theme, save);
    else this.enableTheme(theme, save);
  },

  validateTheme(theme) {
    const themeMeta = this.themesProxy[theme];

    if (PopcornNative.validateCSS)
      PopcornNative.validateCSS(themeMeta.css)
        .then((result) => {
          themeMeta.valid = Boolean(result.valid);
        })
        .catch((e) => {
          log.error(`Failed to validate "${theme}".`, e);
          themeMeta.valid = 'unknown';
        });
    else return '"w3c-css-validator" is not installed.';
  },

  createUI() {
    const dialog = document.createElement('dialog');
    dialogPolyfill.registerDialog(dialog);
    dialog.classList.add('PopcornUI-dialog');
    const wrapper = document.createElement('div');
    wrapper.classList.add('PopcornUI-wrapper');
    dialog.appendChild(wrapper);
    this.populateItems(wrapper);

    document.body.prepend(dialog);

    createContext().register(PopcornNative.config.hotkey, (event) => {
      this.toggleUI();
      event.stopImmediatePropagation();
    });
    createContext().register('escape', (event) => {
      if (document.documentElement.dataset.popcornUiOpen) {
        this.toggleUI();
        event.stopImmediatePropagation();
      }
    });
  },
  toggleUI() {
    if (!document.documentElement.dataset.popcornUiOpen)
      document.documentElement.dataset.popcornUiOpen = 'true';
    else delete document.documentElement.dataset.popcornUiOpen;

    const wrapper = document.querySelector('.PopcornUI-dialog');

    if (wrapper.open) wrapper.close();
    else wrapper.showModal();
  },
  populateItems(wrapper) {
    for (const theme of Object.keys(this.themesProxy)) {
      const themeMeta = this.themesProxy[theme];

      const item = document.createElement('div');
      item.classList.add('PopcornUI-item');
      item.dataset.enabled = themeMeta.enabled;
      item.dataset.id = theme;
      item.textContent = theme;

      const meta = document.createElement('div');
      meta.classList.add('PopcornUI-meta');
      const valid = document.createElement('span');
      valid.classList.add('PopcornUI-valid');
      valid.dataset.value = themeMeta.valid;
      valid.textContent =
        themeMeta.valid === 'unknown' ? 'Validity Unknown' : themeMeta.valid ? 'Valid' : 'Invalid';
      meta.appendChild(valid);

      const toggle = document.createElement('button');
      toggle.classList.add('PopcornUI-toggle');
      toggle.textContent = themeMeta.enabled ? 'Disable' : 'Enable';
      toggle.addEventListener('click', () => this.toggleTheme(theme));

      item.append(meta, toggle);
      wrapper.appendChild(item);
    }
  },

  proxyHandler: {
    get(target, key) {
      if (typeof target[key] === 'object' && target[key] !== null) {
        return new Proxy(target[key], this);
      } else {
        return target[key];
      }
    },
    set: (target, key, value) => {
      const item = document.querySelector(`.PopcornUI-item[data-id="${target.id}"]`);

      switch (key) {
        case 'enabled':
          const toggle = item.querySelector('.PopcornUI-toggle');
          item.dataset.enabled = value;
          toggle.textContent = value ? 'Disable' : 'Enable';
          break;
        case 'valid':
          const valid = item.querySelector('.PopcornUI-valid');
          item.dataset.valid = value;
          valid.dataset.value = value;
          valid.textContent = value === 'unknown' ? 'Validity Unknown' : value ? 'Valid' : 'Invalid';
      }

      target[key] = value;
      return true;
    },
  },
};
