#!/bin/usr/env false

import { join } from 'std/path/join.ts';
import { args } from '#build/args.mts';

const __dirname = import.meta.dirname!;
const root = join(__dirname, '../..');

export default {
  platform: 'node',
  format: 'cjs',
  external: [
    'electron',
    join(root, 'config.json'),
  ],
  plugins: [
    {
      name: 'Nodemon ripoff',
      setup(build) {
        if (!args.executables || !args.dev) return;

        let command: Deno.ChildProcess | undefined;

        build.onEnd(() => {
          for (const executable of args.executables) {
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
