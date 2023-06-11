import { comments, config } from '..';
import { rerenderSidebar, selectedFolder } from '@ui/tabs/QuickCss.svelte';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('QuickCSS');

export default class QuickCss {
  private styleElements = new Map<'imports' | 'contents', HTMLStyleElement>();

  start() {
    this.populateQuickCss();
    this.watchQuickCss();
    selectedFolder.set(window.Popcorn.quickCss);
  }

  populateQuickCss() {
    function compileQuickCss(folder: QuickCssFolder) {
      let imports = '';
      let contents = '';

      const importRegex = /^@import\s+(?:url\(['"]?.*?['"]?\)|['"].*?['"])(\s+[^;]+?)?;$/gmi;
      for (const node of folder.files) {
        if ('files' in node) {
          const result = compileQuickCss(node);
          imports += result[0];
          contents += result[1];
        } else {
          const contentNoImports = node.content.replace(importRegex, (match) => {
            imports += match.replace(/;$/, '') + '; /* ' + node.location + ' */';
            return '';
          }).trim();

          if (contentNoImports)
            contents += '\n\n/* ' + node.location + ' */\n' + contentNoImports;
        }
      }

      return [imports, contents];
    }

    const [compiledImports, compiledContents] = compileQuickCss(Popcorn.quickCss);

    const importStyle = this.styleElements.get('imports');
    if (!importStyle) {
      const importStyle = document.createElement('style');
      importStyle.id = 'popcorn-quickcss-imports';
      importStyle.textContent = compiledImports;
      importStyle.dataset.popcorn = 'true';
      comments.end.after(importStyle);
      this.styleElements.set('imports', importStyle);
    } else if (compiledImports !== importStyle.textContent) {
      importStyle.textContent = compiledImports;
    }

    const contentStyle = this.styleElements.get('contents');
    if (!contentStyle) {
      const contentStyle = document.createElement('style');
      contentStyle.id = 'popcorn-quickcss-contents';
      contentStyle.textContent = compiledContents;
      contentStyle.dataset.popcorn = 'true';
      comments.end.after(contentStyle);
      this.styleElements.set('contents', contentStyle);
    } else if (compiledContents !== contentStyle.textContent) {
      contentStyle.textContent = compiledContents;
    }
  }

  watchQuickCss() {
    PopcornNative.onQuickCssChange((updated) => {
      if (config.verbose) Logger.debug('QuickCSS Updated');

      Popcorn.quickCss = updated;

      rerenderSidebar();
      this.populateQuickCss();
    });
  }
}
