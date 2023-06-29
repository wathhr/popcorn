import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { parseArgs } from 'util';
import * as esbuild from 'esbuild';
import sveltePlugin from 'esbuild-svelte';
import preprocess from 'svelte-preprocess';

/** @typedef {import('esbuild')} esbuild */

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

/** @type {('main' | 'preload' | 'renderer')[]} */
const actualTypes = [];

const validTypes = ['main', 'preload', 'renderer'];
const typesArray = types.split(',');
for (const i in typesArray) {
  const type = typesArray[i];
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

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, '..');

/** @type {esbuild.BuildOptions[]} */
const builds = [];
for (const type of actualTypes) {
  /** @type {esbuild.BuildOptions} */
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
    minify,
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
            cssHash: ({ css, hash }) => `PopcornUI-${hash(css)}`,
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
  return await esbuild.build(context);
});

process.on('SIGINT', () => {
  console.log('Stopping...');
  builds.map(async (build) => await build.dispose());

  process.exit(0);
});
