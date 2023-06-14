export const prefixes = {
  main: 'POPCORN_',
  quickCss: 'QUICKCSS_',
  themes: 'THEMES_',
};

export const IPC = prefixValues({
  // Misc
  getConfig: 'GET_CONFIG',
  statusMessage: 'STATUS_MESSAGE',
  log: 'LOG',

  // Themes
  getThemes: 'GET_THEMES',
  onThemeChange: 'ON_THEME_CHANGE',
  saveThemeState: 'SAVE_THEME_STATE',

  // QuickCSS
  getQuickCss: 'GET_QUICK_CSS',
  onQuickCssChange: 'ON_QUICK_CSS_CHANGE',
  createQuickCssNode: 'CREATE_QUICK_CSS_NODE',
  deleteQuickCssNode: 'DELETE_QUICK_CSS_NODE',
  renameQuickCssNode: 'RENAME_QUICK_CSS_NODE',
  updateQuickCssFile: 'SAVE_QUICK_CSS_FILE',
}, prefixes.main);

export const MESSAGES = {
  quickCss: prefixValues({
    created: 'QUICKCSS_CREATED',
    deleted: 'QUICKCSS_DELETED',
    renamed: 'QUICKCSS_RENAMED',
    updated: 'QUICKCSS_UPDATED',
  }, prefixes.quickCss),
};

function prefixValues<T extends Record<string, string>>(object: T, prefix: string) {
  const result = {} as Record<keyof T, string>;
  for (const key in object) {
    result[key] = prefix + object[key];
  }
  return result;
}
