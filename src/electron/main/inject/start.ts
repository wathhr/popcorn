import { existsSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import type { PackageJson } from 'type-fest';
import electron from 'electron';
import { CreateLogger } from '#/common';

// https://github.com/electron/electron/blob/94f2722fa38a6638bf95cdd81fc03adf097e1ad6/typings/internal-electron.d.ts#L16-L22
const app = electron.app as AppInternal;
interface AppInternal extends electron.App {
  setVersion(version: string): void,
  setDesktopName(name: string): void,
  setAppPath(path: string | null): void,
}

const Logger = new CreateLogger('Inject');

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
    'Original files not found',
    [
      'Could not find original .asar/folder of the app.',
      '',
      'Tried the following paths:',
      `  ${paths.map(p => join(basePath, p)).join('  \n')}`,
    ].join('\n'),
  );

  electron.app.quit();
  process.exit(1);
}

const originalPkg: PackageJson = require(join(basePath, originalAsar, 'package.json'));
const fullOriginalMain = join(basePath, originalAsar, originalPkg.main!);

// https://github.com/electron/electron/blob/0346e0a8bff7b712f86f51075b3effcc1d8358f1/lib/browser/init.ts#L115-L140
if (originalPkg.version != null) app.setVersion(originalPkg.version);

if (originalPkg.productName != null) app.name = `${originalPkg.productName}`.trim();
else if (originalPkg.name != null) app.name = `${originalPkg.name}`.trim();

if (originalPkg.desktopName != null) app.setDesktopName(originalPkg.desktopName as string);
else app.setDesktopName(`${app.name}.desktop`);

if (originalPkg.v8Flags != null) require('node:v8').setFlagsFromString(originalPkg.v8Flags);

// @ts-expect-error https://github.com/electron/electron/blob/94f2722fa38a6638bf95cdd81fc03adf097e1ad6/typings/internal-ambient.d.ts#L247
process._firstFileName = fullOriginalMain;
require.main!.filename = fullOriginalMain;
app.setAppPath(originalAsar);

// https://github.com/electron/electron/blob/94f2722fa38a6638bf95cdd81fc03adf097e1ad6/typings/internal-ambient.d.ts#L4-L13
interface ModuleInternal extends NodeJS.Module {
  new(id: string, parent?: NodeJS.Module | null): NodeJS.Module,
  _load(request: string, parent?: NodeJS.Module | null, isMain?: boolean): unknown,
  _resolveFilename(request: string, parent?: NodeJS.Module | null, isMain?: boolean, options?: { paths: string[] }): string,
  _preloadModules(requests: string[]): void,
  _nodeModulePaths(from: string): string[],
  _extensions: Record<string, (module: NodeJS.Module, filename: string) => unknown>,
  _cache: Record<string, NodeJS.Module>,
  wrapper: [string, string],
}

const Module: ModuleInternal = require('node:module');

Module._load(fullOriginalMain, Module, true);
