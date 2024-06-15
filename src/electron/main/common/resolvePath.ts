import { isAbsolute, join, normalize } from 'node:path';
import { configDir } from '#/common';

export function resolvePath(path: string, defaultPath = configDir) {
  const windowsRegex = /%([^%]+)%/g; // matches %variableName%
  const unixRegex = /\$(?:\{(?=[^}]*\}))?(\w+)\}?/g; // matches $variableName and ${variableName}

  const newPath = normalize((() => {
    if (process.platform === 'win32') return path.replace(windowsRegex, (_, name) => process.env[name] ?? `%${name}%`);
    else return path.replace(unixRegex, (_, name) => process.env[name] ?? `$${name}`);
  })());

  if (isAbsolute(newPath)) return newPath;
  else return join(defaultPath, newPath);
}
