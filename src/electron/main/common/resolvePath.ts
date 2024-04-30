import { normalize } from 'node:path';

export function resolvePath(path: string) {
  const windowsRegex = /%([^%]+)%/g; // matches %variableName%
  const unixRegex = /\$(?:{(?=[^}]*}))?(\w+)}?/g; // matches $variableName and ${variableName}

  const newPath = normalize((() => {
    if (process.platform === 'win32') return path.replace(windowsRegex, (_, name) => process.env[name] ?? `%${name}%`);
    else return path.replace(unixRegex, (_, name) => process.env[name] ?? `$${name}`);
  })());

  return newPath;
}
