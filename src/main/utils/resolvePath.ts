import { platform } from 'os';
import { normalize } from 'path';

export function resolvePath(
  path: string,
  varTypes: { windows: boolean; unix: boolean } = {
    windows: platform() === 'win32',
    unix: platform() !== 'win32',
  }
) {
  const windowsRegex = /%([^%]+)%/g; // matches %variableName%
  const unixRegex = /\$(?:{(?=[^}]*}))?(\w+)}?/g; // matches $variableName and ${variableName}

  // TODO: don't change anything if no variable with that name exists
  if (varTypes.windows)
    path = path.replace(windowsRegex, (_, name) => process.env[name] ?? '');
  if (varTypes.unix)
    path = path.replace(unixRegex, (_, name) => process.env[name] ?? '');

  return normalize(path);
}
