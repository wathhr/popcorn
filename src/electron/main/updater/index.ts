import { dirname, join } from 'node:path';
import { writeFileSync } from 'node:original-fs';
import { compare, parse } from '@std/semver';
import { ipcMain } from 'electron';
import { type Release, ReleaseChecker } from './release-type';
import { CreateLogger } from '#/common';
import { PopcornError, ipc } from '&/common';

const Logger = new CreateLogger('Updater');

async function getRelease(version?: `v${string}`): Promise<Release> {
  const release = await fetch([
    'https://api.github.com/repos',
    pkg.author.name,
    pkg.name,
    'releases',
    version ? `tags/${version}` : 'latest',
  ].join('/')).then(res => res.json());
  if (!ReleaseChecker.Check(release)) throw new PopcornError('Failed to parse release');

  return release;
}

async function needsUpdate() {
  const currentVersion = parse(pkg.version);

  if (!currentVersion) {
    Logger.error('Failed to parse current version');
    return false;
  }

  const latestVersion = await getRelease().then(r => parse(r.tag_name));
  if (!latestVersion) {
    Logger.error('Failed to parse latest version');
    return false;
  }

  if (compare(currentVersion, latestVersion) <= 0) return false;
  return true;
}

async function installUpdate(_: unknown, version?: `v${string}`) {
  const release = await getRelease(version);
  const asar = release.assets.find(a => a.name.trim() === 'electron.asar');
  if (!asar) throw new PopcornError('Failed to find asar');

  const location = join(dirname(require.main!.filename), '..');
  const asarPath = location.endsWith('.asar') ? location : `${location}.asar`;

  Logger.info('Downloading update...');
  await fetch(asar.browser_download_url)
    .then(r => r.arrayBuffer())
    .then(data => writeFileSync(asarPath, new Uint8Array(data)));
}

ipcMain.handle(ipc('checkUpdate'), needsUpdate);
ipcMain.handle(ipc('installUpdate'), installUpdate);
