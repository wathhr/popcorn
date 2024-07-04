import { compare, parse } from '@std/semver';
import { ipcMain } from 'electron';
import { type Release, ReleaseChecker } from './release-type';
import { CreateLogger } from '#/common';
import { ipc } from '&/common';

const Logger = new CreateLogger('Updater');

async function getLatestRelease(): Promise<Release> {
  const release = await fetch(`https://api.github.com/repos/${pkg.author.name}/${pkg.name}/releases/latest`).then(res => res.json());
  if (!ReleaseChecker.Check(release)) throw new Error('Failed to parse release');

  return release;
}

async function needsUpdate() {
  const currentVersion = parse(pkg.version);

  if (!currentVersion) {
    Logger.error('Failed to parse current version');
    return false;
  }

  const latestVersion = await getLatestRelease().then(r => parse(r.tag_name));
  if (!latestVersion) {
    Logger.error('Failed to parse latest version');
    return false;
  }

  if (compare(currentVersion, latestVersion) <= 0) return false;
  return true;
}

ipcMain.handle(ipc('checkUpdate'), needsUpdate);
