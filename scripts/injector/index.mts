import { parseArgs } from 'https://deno.land/std@0.222.1/cli/mod.ts';
import { join } from 'https://deno.land/std@0.222.1/path/join.ts';
import { exists } from 'https://deno.land/std@0.222.1/fs/mod.ts';

const args = parseArgs(Deno.args, {
  boolean: [
    'kernel',
  ],
  string: [
    'asar',
    'kernel-path',
  ],
  alias: {
    a: 'asar',
    k: 'kernel',
    kp: 'kernel-path',
  },
  default: {
    kernel: false,
  },
});

const kernel = args.kernel || Boolean(args['kernel-path']);
const asar = args.asar ?? args._[0]?.toString();

if (!asar) {
  console.error('No path provided');
  Deno.exit(1);
}

if (!asar.endsWith('.asar')) {
  console.error('Path needs to point to an .asar file, usually located in /resources/app.asar');
  Deno.exit(1);
}

if (!kernel) throw new Error('Not implemented');
else injectKernel(asar, args['kernel-path']);

async function injectKernel(asarPath: string, kernelPath?: string | undefined) {
  const path = asarPath.replace('.asar', '');

  kernelPath ??= await (async () => {
    const dir = join(path, '..');
    const kernelAsar = join(dir, 'kernel.asar');
    if (await exists(kernelAsar)) return kernelAsar;

    console.log('Downloading kernel to', kernelAsar);
    const kernelAsarData = await fetch('https://github.com/kernel-mod/electron/releases/latest/download/kernel.asar').then(r => r.arrayBuffer());
    await Deno.writeFile(kernelAsar, new Uint8Array(kernelAsarData));
    return kernelAsar;
  })();

  Deno.rename(asarPath, asarPath.replace('.', '-original.'))
    .catch((e) => {
      if (e instanceof Deno.errors.NotFound) return;
      throw e;
    });

  Deno.mkdir(path)
    .catch((e) => {
      if (e instanceof Deno.errors.AlreadyExists) return;
      throw e;
    })
    .then(() => {
      Deno.writeTextFile(join(path, 'index.js'), [
        'const { join } = require("path");',
        '',
        'try {',
        `  const kernel = require("${kernelPath.replaceAll('\\', '\\\\')}");`,
        '  if (kernel?.default) kernel.default({ startOriginal: true });',
        '} catch (e) {',
        '  console.error("Kernel failed to load:", e.message);',
        '  require("module")._load(join(__dirname, "../app-original.asar"), null, true);',
        '}',
      ].join('\n'));
      Deno.writeTextFile(join(path, 'package.json'), JSON.stringify({
        name: 'kernel',
        main: 'index.js',
      }));
    });
}
