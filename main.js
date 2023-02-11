const fs = require('fs');
const { join } = require('path');
const { BrowserWindow, ipcMain } = require('electron');
const chokidar = require('chokidar');
const fg = require('fast-glob');
const { log } = require('./utils/logger/main');
const { config } = require('./index.json');

const themeMappings = {};
const watcher = chokidar.watch([], { persistent: true });

module.exports.default = {
  async start() {
    this.ipc();
    this.watch();
  },

  async ipc() {
    ipcMain.handle('POPCORN_GET_ALL', (_, themesJson = config.themes) => {
      const processedThemes = themesJson.map((dir) => {
        const pathEnvResolve = dir.replace(/%([^%]+)%/g, (_, n) => process.env[n]);
        const consistentPathSep = pathEnvResolve.replace(/[\\\/]/g, '/');
        return consistentPathSep;
      });
      const themesGlob = fg.sync(processedThemes, { cwd: __dirname, absolute: true });

      let themes = {};
      themesGlob.forEach((themeJson) => {
        const meta = require(themeJson);
        const mainLocation = join(themeJson, '..', meta.main);
        watcher.add(mainLocation);
        themeMappings[meta.id] = {
          json: themeJson,
          main: mainLocation,
        };

        themes[meta.id] = {
          enabled: 'enabled' in meta ? meta.enabled : true,
          location: themeJson,
          cssLocation: mainLocation,
          css: fs.readFileSync(mainLocation).toString(),
        };
      });

      return {
        themes: themes,
      };
    });

    ipcMain.handle('POPCORN_GET', (_, theme) => {
      return this._getThemeByID(theme);
    });

    ipcMain.on('POPCORN_SAVE', (_, theme, setting, value) => {
      const location = themeMappings[theme].json;
      let meta = require(location);
      meta[setting] = value;
      fs.writeFile(location, JSON.stringify(meta, null, 2), (err) => {
        if (err) log.error(err);
        log(`Set the setting "${setting}" to ${value} for "${theme}" (${location})!`);
      });
    });
  },

  async watch() {
    try {
      watcher.on('change', (path) => {
        const theme = Object.keys(themeMappings).find((k) => themeMappings[k].main === path);
        BrowserWindow.getAllWindows().forEach((window) => window.send('POPCORN_CHANGE', theme));
      });
      log('Watching...');
    } catch (e) {
      log.error(e);
    }
  },

  _getThemeByID(id) {
    const meta = require(themeMappings[id].json);
    const mainLocation = join(themeMappings[id].json, '..', meta.main);

    return {
      enabled: 'enabled' in meta ? meta.enabled : true,
      location: themeMappings[id].json,
      cssLocation: mainLocation,
      css: fs.readFileSync(mainLocation).toString(),
    };
  },
};
