import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { parseArgs } from 'util';
import * as esbuild from 'esbuild';
import sveltePlugin from 'esbuild-svelte';
import preprocess from 'svelte-preprocess';

const options = {
  minify: { type: 'boolean' },
  types: { type: 'string' },
  watch: { type: 'boolean' },
};
const {
  values: {
    minify = process.env.NODE_ENV === 'production',
    types = 'all',
    watch = false,
  },
} = parseArgs({ options });

const actualTypes = [];

const validTypes = ['main', 'preload', 'renderer'];
for (const i in types.split(',')) {
  const type = types.split(',')[i];
  if (types === 'all') {
    actualTypes.push(...validTypes);
    break;
  }

  if (!validTypes.includes(type)) console.warn(`Invalid type: ${type}`);
  else actualTypes.push(type);
}

if (!actualTypes) {
  console.warn('No types specified');
  process.exit(1);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const builds = [];
for (const type of actualTypes) {
  /** @type {import('esbuild').BuildOptions} */
  const options = {
    entryPoints: [
      {
        in: join(root, `src/${type}/index.ts`),
        out: type,
      },
    ],
    platform: 'node',
    bundle: true,
    format: type === 'renderer' ? 'esm' : 'cjs',
    minify: minify,
    write: true,
    outdir: 'dist',
    sourcemap: minify ? false : 'inline',
    define: {
      'NODE_ENV': process.env.NODE_ENV ? '\'' + process.env.NODE_ENV + '\'' : 'production',
    },
    external: [
      'electron',
      join(root, 'config.json'),
    ],
    ...(type === 'renderer' && {
      plugins: [
        sveltePlugin({
          preprocess: preprocess(),
          compilerOptions: {
            cssHash: ({ hash, css }) => `PopcornUI-${hash(css)}`,
            dev: !minify,
          },
        }),
      ],
    }),
    logLevel: 'info',
  };

  builds.push(options);
}

builds.map(async (context) => {
  if (watch) return (await esbuild.context(context)).watch();
  return esbuild.build(context);
});

process.on('SIGINT', () => {
  console.log('Stopping...');
  builds.map(async (build) => {
    return await build.dispose();
  });

  process.exit(0);
});
