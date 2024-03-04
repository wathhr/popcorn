const strictMemo = new Set<string>();
const seedMemo = new Set<`${number}:${number}|${string}`>();

export function generateId(options?: Partial<{
  length: number,
  seed: number,
  unique: 'strict' | boolean,
  chars: string,
}>) {
  const {
    length = 5,
    seed,
    unique = false,
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
  } = options ?? {};

  if (unique === 'strict') {
    if (seed === undefined) throw new Error('You need to specify a seed when using "strict"');
    if (seedMemo.has(`${length}:${seed}|${chars}`)) throw new Error('Duplicate seed');
  }

  const finalSeed = seed ?? Math.random();
  seedMemo.add(`${length}:${finalSeed}|${chars}`);

  function generate(n = 0) {
    let result = '';

    for (let i = 0; i < length; i++) {
      const sin = Math.sin(finalSeed + i + n) * 10000;
      const rand = sin - Math.floor(sin);
      result += chars[Math.floor(rand * chars.length)];
    }

    if (unique && strictMemo.has(result)) return generate(n + 1);

    return result;
  }

  const result = generate();
  strictMemo.add(result);

  return result;
}
