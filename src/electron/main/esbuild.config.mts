#!/usr/bin/env false

import { exists } from 'std/fs/mod.ts';
import { join } from 'std/path/mod.ts';
import { corejs } from '#build/plugins/mod.mts';
import pkg from '#pkg' with { type: 'json' };

const params = new URL(import.meta.url).searchParams;

export default {
  platform: 'node',
  format: 'cjs',
  external: ['electron'],
  plugins: [
    corejs(pkg.browserslist['electron-main']),
    {
      name: 'Nodemon ripoff',
      async setup(build) {
        const executables = params.get('executable');
        if (!executables || params.get('dev') === 'false') return;

        const command: Record<string, Deno.ChildProcess> = {};

        const auto = await (async () => {
          const appSrcDist = join(import.meta.dirname ?? '', '../../../app-src/dist');
          if (!await exists(appSrcDist)) throw new Error('Test application is not built');

          for await (const child of Deno.readDir(appSrcDist))
            if (child.name.endsWith('-unpacked')) {
              const dir = join(appSrcDist, child.name);
              for await (const child of Deno.readDir(dir)) if (child.name.startsWith('popcorn')) return join(dir, child.name);
            }

          throw new Error('Could not find test application');
        })();

        build.onEnd(() => {
          for (const executable of executables.split(',')) {
            if (executable in command) try {
              command[executable]!.kill();
            } catch { /* omitted */ };

            const [cmd, ...args] = executable.split(' ');
            if (!cmd) continue;

            const exe = (() => {
              if (cmd === 'auto' && import.meta.dirname && auto) return auto;

              return cmd;
            })();

            command[executable] = new Deno.Command(exe, { args }).spawn();
          }
        });
      },
    },
  ],
} satisfies import('#build/mod.mts').DefaultExport;
