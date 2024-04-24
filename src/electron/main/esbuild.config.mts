#!/bin/usr/env false

import { corejs, legacyImport } from '#build/plugins/index.mts';
import pkg from '#pkg' with { type: 'json' };

const params = new URL(import.meta.url).searchParams;

export default {
  platform: 'node',
  format: 'cjs',
  external: ['electron'],
  plugins: [
    legacyImport,
    corejs(pkg.browserslist['electron-main']),
    {
      name: 'Nodemon ripoff',
      setup(build) {
        if (!params.get('executables') || params.get('dev') === 'false') return;

        let command: Deno.ChildProcess | undefined;

        build.onEnd(() => {
          for (const executable of (params.get('executables') ?? '').split(',')) {
            if (command?.pid) Deno.kill(command.pid);

            const [cmd, ...args] = executable.split(' ');

            command = new Deno.Command(cmd, {
              args: ['--inspect', ...args],
            }).spawn();
          }
        });
      },
    },
  ],
} satisfies import('#build').DefaultExport;
