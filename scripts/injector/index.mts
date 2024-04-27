import { parseArgs } from 'https://deno.land/std@0.222.1/cli/mod.ts';
import { join } from 'https://deno.land/std@0.222.1/path/join.ts';
import { copy, exists } from 'https://deno.land/std@0.222.1/fs/mod.ts';
import pkg from '../../package.json' with { type: 'json' };

const args = parseArgs(Deno.args, {
  boolean: [
    'kernel',
    'packed',
  ],
  negatable: [
    'packed',
  ],
  string: [
    'app-path',
    'kernel-path',
    'version',
  ],
  alias: {
    a: 'app-path',
    k: 'kernel',
    kp: 'kernel-path',
    p: 'packed',
    v: 'version',
  },
  default: {
    kernel: false,
    packed: true,
    version: `v${pkg.version}`,
  },
});

const kernel = args.kernel || Boolean(args['kernel-path']);
const appPath = args['app-path'] ?? args._[0]?.toString();

if (!appPath) {
  console.error('No path provided');
  Deno.exit(1);
}

const isLocal = Deno.mainModule.startsWith('file://');

await Deno.rename(appPath, appPath.replace(/(\.|$)/, '-original$1'))
  .catch((e) => {
    if (e instanceof Deno.errors.NotFound) return;
    console.error(`Failed to rename ${appPath}. Is the app still running?`);
    throw e;
  });

if (kernel) await injectKernel(appPath, args['kernel-path']);
else
  if (isLocal) await injectLocal(appPath, args.packed);
  else injectRemote(appPath, args.version.startsWith('v')
    ? args.version as `v${string}`
    : `v${pkg.version}`);

console.log('%c✔ Injected', 'color: green; font-weight: bold');

async function injectRemote(appPath: string, version: `v${string}`) {
  const popcornAsarData = await fetch(`https://github.com/wathhr/popcorn/releases/${version}/download/electron.asar`).then(r => r.arrayBuffer());
  await Deno.writeFile(join(appPath, '../app.asar'), new Uint8Array(popcornAsarData));
}

async function injectLocal(appPath: string, packed = true) {
  const popcornPath = join(import.meta.dirname!, '../../dist', packed ? 'electron/app.asar' : 'electron');

  if (!await exists(popcornPath)) {
    const { build } = await import('#build');

    await build('electron', { asar: packed })
      .catch((e) => {
        console.error('Failed to compile popcorn', e);
        Deno.exit(1);
      });
  }

  if (!packed)
    await Deno.remove(join(appPath, '../app'), { recursive: true })
      .catch((e) => {
        if (e instanceof Deno.errors.NotFound) return;
        throw e;
      });

  await copy(popcornPath, join(appPath, packed ? '..' : '../app'));
}

async function injectKernel(appPath: string, kernelPath?: string | undefined) {
  const appDir = appPath.replace('.asar', '');

  kernelPath ??= await (async () => {
    const kernelAsar = join(appDir, '../kernel.asar');
    if (await exists(kernelAsar)) return kernelAsar;

    console.log('Downloading kernel to', kernelAsar);
    const kernelAsarData = await fetch('https://github.com/kernel-mod/electron/releases/latest/download/kernel.asar').then(r => r.arrayBuffer());
    await Deno.writeFile(kernelAsar, new Uint8Array(kernelAsarData));
    return kernelAsar;
  })();

  await Deno.mkdir(appDir)
    .catch((e) => {
      if (e instanceof Deno.errors.AlreadyExists) return;
      throw e;
    })
    .then(() => {
      Deno.writeTextFile(join(appDir, 'index.js'), [
        'const { join } = require("path");',
        '',
        'try {',
        `  const kernel = require("${kernelPath.replaceAll('\\', '\\\\')}");`,
        '  if (kernel?.default) kernel.default({ startOriginal: true });',
        '} catch (e) {',
        '  console.error("Kernel failed to load:", e.message);',
        '  alert("Kernel failed to load: " + e.message);',
        '  const Module = require("module");',
        `  Module._load(join(__dirname, "../app-original${appDir === appPath ? '' : '.asar'}"), Module, true);`,
        '}',
      ].join('\n'));
      Deno.writeTextFile(join(appDir, 'package.json'), JSON.stringify({
        name: 'kernel',
        main: 'index.js',
      }));
    });
}
