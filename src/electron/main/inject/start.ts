import { existsSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import Module from 'node:module';
import type { PackageJson } from 'type-fest';
import electron from 'electron';
import { CreateLogger } from '#/common';

const Logger = new CreateLogger('Injector');

const basePath = join(dirname(require.main!.filename), '..');
const baseFilename = basename(dirname(require.main!.filename)).replace(/\.asar$|[\\/]$/, '');
const paths = [`${baseFilename}-original.asar`, `${baseFilename}-original`];
const originalAsar = (() => {
  for (const path of paths) if (existsSync(join(basePath, path))) return path;

  return null;
})();

if (!originalAsar) {
  Logger.error('Could not find original asar. Tried the following:', paths.map(p => join(basePath, p)));
  electron.dialog.showErrorBox(
    'Could not find original asar',
    `Could not find original asar. Tried the following: ${paths.map(p => join(basePath, p)).join('\n')}`,
  );

  electron.app.quit();
  process.exit(1);
}

const originalPkg: PackageJson = require(join(basePath, originalAsar, 'package.json'));
const fullOriginalMain = join(basePath, originalAsar, originalPkg.main!);

// https://github.com/electron/electron/blob/0346e0a8bff7b712f86f51075b3effcc1d8358f1/lib/browser/init.ts#L115-L140
// eslint-disable-next-line ts/no-explicit-any
const { app: unsafeApp } = electron as any;

if (originalPkg.version != null) unsafeApp.setVersion(originalPkg.version);

// Set application's name.
if (originalPkg.productName != null) unsafeApp.name = `${originalPkg.productName}`.trim();
else if (originalPkg.name != null) unsafeApp.name = `${originalPkg.name}`.trim();

// Set application's desktop name.
if (originalPkg.desktopName != null) unsafeApp.setDesktopName(originalPkg.desktopName);
else unsafeApp.setDesktopName(`${unsafeApp.name}.desktop`);

// Set v8 flags, deliberately lazy load so that apps that do not use this
// feature do not pay the price
if (originalPkg.v8Flags != null) require('node:v8').setFlagsFromString(originalPkg.v8Flags);

require.main!.filename = fullOriginalMain;
unsafeApp.setAppPath(originalAsar);

// Module._load(file, Module, true) is used instead of require() because it lets you load the file as if it was the first file being run in the Node environment
// Using require could result in things breaking if the app ever uses require.main
// @ts-expect-error `Module._load` is not typed, check for yourself
Module._load(fullOriginalMain, Module, true);
