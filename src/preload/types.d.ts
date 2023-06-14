declare type PopcornNative = {
  // Misc
  config: Promise<Config>;
  validateCSS?: typeof import('w3c-css-validator').validateText;
  onStatusMessage(listener: (message: StatusMessage) => void): void;

  // Themes
  getThemes(): Promise<{ [id: string]: SimpleTheme }>;
  onThemeChange(listener: (change: { id: string; theme: SimpleTheme }) => void): void;
  saveThemeState(id: string, state: boolean): void;

  // QuickCSS
  getQuickCss(): Promise<QuickCssFolder>;
  onQuickCssChange(listener: (updated: QuickCssFolder) => void): void;
  createQuickCssNode(location: string, type: 'file' | 'folder'): void;
  deleteQuickCssNode(location: string): void;
  renameQuickCssNode(location: string, newLocation: string): void;
  updateQuickCssFile(location: string, content: string): void;
};
