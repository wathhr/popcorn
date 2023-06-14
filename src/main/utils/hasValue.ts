export function hasValue(
  obj: Record<string, any>,
  key: string,
  value: any
): boolean {
  if (key in obj && obj[key] === value) return true;

  for (const prop in obj) {
    if (prop in obj && typeof obj[prop] === 'object') {
      const result = hasValue(obj[prop], key, value);
      if (result) return true;
    }
  }

  return false;
}
