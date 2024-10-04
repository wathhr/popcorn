#!/usr/bin/env false

import { aliasImport, corejs } from '#build/plugins/index.mts';
import pkg from '#pkg' with { type: 'json' };

const params = new URL(import.meta.url).searchParams;

export default {
  platform: 'node',
  format: 'cjs',
  external: ['electron'],
  plugins: [
    aliasImport,
    corejs(pkg.browserslist['electron-main']),
    {
      name: 'Nodemon ripoff',
      setup(build) {
        if (!params.get('executables') || params.get('dev') === 'false') return;

        const command: Record<string, Deno.ChildProcess> = {};

        build.onEnd(() => {
          const executables = params.get('executables') ?? '';

          for (const executable of executables.split(',')) {
            if (executable in command) try {
              command[executable].kill();
            } catch { /* omitted */ };

            const [cmd, ...args] = executable.split(' ');

            command[executable] = new Deno.Command(cmd, { args }).spawn();
          }
        });
      },
    },
  ],
} satisfies import('#build').DefaultExport;
