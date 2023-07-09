import fs from 'fs';
import { basename, join, relative } from 'path';
import config from '../config';
import LoggerModule from '@common/logger';
const Logger = new LoggerModule('Main > QuickCSS', 'ansi');

function getQuickCss(): QuickCssFolder {
  function createTree(directoryPath: string, regex = /./): QuickCssFolder {
    const node: QuickCssFolder = {
      name: basename(directoryPath),
      location: relative(config.quickCssDir, directoryPath),
      files: [],
    };

    const fileNames = fs.readdirSync(directoryPath);
    const directories: QuickCssFolder[] = [];
    const files: QuickCssFile[] = [];

    for (const fileName of fileNames) {
      const filePath = join(directoryPath, fileName);
      const stats = fs.statSync(filePath);

      let childNode: QuickCssFile | QuickCssFolder;
      if (stats.isDirectory()) {
        childNode = createTree(filePath, regex);
        directories.push(childNode);
      } else if (regex.test(fileName)) {
        try {
          childNode = {
            name: fileName,
            location: relative(config.quickCssDir, filePath),
            content: fs.readFileSync(filePath, 'utf-8'),
          };
          files.push(childNode);
        } catch (e) {
          Logger.error(`Error reading file ${filePath}`, e);
        }
      }
    }

    node.files = [...directories, ...files];
    return node;
  }

  return createTree(config.quickCssDir, /\.css/);
}

export let quickCss = getQuickCss();

export function updateQuickCss() {
  quickCss = getQuickCss();
}

import './ipc';
import './watcher';
