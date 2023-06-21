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
    const { imports, contents } = compileQuickCss(window.Popcorn.quickCss);

    const importStyle = this.styleElements.get('imports');
    if (!importStyle) {
      const importStyle = document.createElement('style');
      importStyle.id = 'popcorn-quickcss-imports';
      importStyle.textContent = imports;
      importStyle.dataset.popcorn = 'true';
      comments.end.after(importStyle);

      this.styleElements.set('imports', importStyle);
    } else if (imports !== importStyle.textContent) {
      importStyle.textContent = imports;
    }

    const contentStyle = this.styleElements.get('contents');
    if (!contentStyle) {
      const contentStyle = document.createElement('style');
      contentStyle.id = 'popcorn-quickcss-contents';
      contentStyle.textContent = contents;
      contentStyle.dataset.popcorn = 'true';
      comments.end.after(contentStyle);

      this.styleElements.set('contents', contentStyle);
    } else if (contents !== contentStyle.textContent) {
      contentStyle.textContent = contents;
    }
  }

  watchQuickCss() {
    PopcornNative.onQuickCssChange((updated) => {
      if (config.verbose) Logger.debug('QuickCSS Updated');

      window.Popcorn.quickCss = updated;

      rerenderSidebar();
      this.populateQuickCss();
    });
  }
}

function compileQuickCss(folder: QuickCssFolder) {
  let imports = '';
  let contents = '';

  const importRegex = /^@import\s+(?:url\(['"]?.*?['"]?\)|['"].*?['"])(\s+[^;]+?)?;$/gmi;
  for (const node of folder.files) {
    if ('files' in node) {
      const result = compileQuickCss(node);
      imports += result.imports;
      contents += result.contents;
    } else {
      const contentNoImports = node.content.replace(importRegex, (match) => {
        imports += match.replace(/;$/, '') + `; /* ${node.location} */\n`;
        return '';
      }).trim();

      if (contentNoImports) contents += `\n\n/* ${node.location} */\n` + contentNoImports;
    }
  }

  return { imports, contents };
}

export function getQuickCssNode(location: string, node: QuickCssFolder = window.Popcorn.quickCss): QuickCssFile | QuickCssFolder {
  if (node.location === location) return node;

  for (const child of node.files) {
    if ('content' in child) {
      if (child.location === location) return child;
      else continue;
    }

    const result = getQuickCssNode(location, child);
    if (result) return result;
  }

  return null;
}
