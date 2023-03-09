import { parseArgs } from 'util';
import * as esbuild from 'esbuild';

const options = {
  externalModules: { type: 'boolean' },
  minify: { type: 'boolean' },
  type: { type: 'string' },
  watch: { type: 'boolean' },
};
const {
  values: { externalModules = false, minify = false, type, watch = false },
} = parseArgs({ options });

const validTypes = ['main', 'preload', 'renderer'];
if (!validTypes.includes(type)) {
  console.error(`Invalid type: "${type}"`);
  process.exit(1);
}

const esbuildOptions = {
  entryPoints: [
    {
      in: `./src/${type}/index.ts`,
      out: type,
    },
  ],
  bundle: true,
  platform: 'node',
  format: type === 'renderer' ? 'esm' : 'cjs',
  minify: minify,
  write: true,
  outdir: 'dist',
  ...(externalModules && { external: ['./node_modules/*'] }),
  logLevel: 'info',
};

if (watch) {
  const context = await esbuild.context(esbuildOptions);

  await context.watch();
} else {
  await esbuild.build(esbuildOptions);
}
