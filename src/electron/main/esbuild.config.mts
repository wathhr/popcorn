#!/bin/usr/env false

import { legacyImport } from '#build/plugins/index.mts';

const params = new URL(import.meta.url).searchParams;

export default {
  platform: 'node',
  format: 'cjs',
  external: ['electron'],
  plugins: [
    legacyImport,
    {
      name: 'Nodemon ripoff',
      setup(build) {
        if (!params.get('executables') || params.get('dev') === 'false') return;

        let command: Deno.ChildProcess | undefined;

        build.onEnd(() => {
          for (const executable of (params.get('executables') ?? '').split(',')) {
            if (command?.pid) Deno.kill(command.pid);
            command = new Deno.Command(executable, {
              args: ['--inspect'],
            }).spawn();
          }
        });
      },
    },
  ],
} satisfies import('#build').DefaultExport;
