import fs from 'fs';

export const requireFile = (path: string) => {
  const file = fs.readFileSync(path, 'utf8');
  try {
    return JSON.parse(file);
  } catch (e) {}
  return file;
}
