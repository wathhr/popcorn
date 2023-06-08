import { comments, config } from '..';
import { rerenderSidebar, selectedFolder } from '@ui/tabs/QuickCss.svelte';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('QuickCSS');

export default class QuickCss {
  async start() {
    this.populateQuickCss();
    this.watchQuickCss();
    selectedFolder.set(window.Popcorn.quickCss);
  }

  async populateQuickCss() {
    // TODO: Fix @imports reloading every time quickcss changes
    function compileQuickCss(folder: QuickCssFolder) {
      let contents = '';
      const imports: string[] = [];

      const importRegex = /^@import\s+(?:url\(['"]?.*?['"]?\)|['"].*?['"])(\s+[^;]+?)?;$/gmi;
      for (const node of folder.files) {
        if ('files' in node) contents += compileQuickCss(node);
        else {
          const contentNoImports = node.content.replace(importRegex, (match) => {
            imports.push(match.replace(/;$/, '') + '; /* ' + node.location + ' */');
            return '';
          });

          if (!/^\s*$/.test(contentNoImports))
            contents += '\n\n/* ' + node.location + ' */\n' + contentNoImports;
        }
      }

      return imports.join('\n') + contents;
    }

    const compiledCss = compileQuickCss(Popcorn.quickCss);
    const style = document.getElementById('popcorn-quickcss');
    if (!style) {
      const style = document.createElement('style');
      style.id = 'popcorn-quickcss';
      style.textContent = compiledCss;
      style.dataset.popcorn = 'true';
      style.dataset.info =
        'This was added here so it can override the other styles.';
      comments.end.after(style);
    } else {
      style.textContent = compiledCss;
    }
  }

  async watchQuickCss() {
    PopcornNative.onQuickCssChange((updated) => {
      if (config.verbose) Logger.debug('QuickCSS Updated');

      // TODO: Use a proxy for this maybe?
      Popcorn.quickCss = updated;

      rerenderSidebar();
      this.populateQuickCss();
    });
  }

  async stop() {
    document.getElementById('popcorn-quickcss').remove();
  }
}
