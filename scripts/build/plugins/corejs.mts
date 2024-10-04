#!/usr/bin/env false

import compat from 'npm:core-js-compat';
import browserslist from 'npm:browserslist';
import { basename, join } from 'std/path/mod.ts';
import pkg from '#pkg' with { type: 'json' };

export function corejs(target: ReturnType<typeof browserslist> | (keyof typeof pkg['browserslist'] & string)): import('esbuild').Plugin {
  return {
    name: 'corejs',
    setup(build) {
      let file: string | undefined;

      build.onStart(async () => {
        // @ts-expect-error this is correct i don't care what typescript says
        const targets: string[] = Array.isArray(target)
          ? browserslist(target)
          : target in pkg.browserslist
            ? browserslist(pkg.browserslist[target])
            : target;

        const { list } = compat({
          targets,
          modules: ['core-js/stable'],
        });

        const pathList = await Promise.all(
          list.map(async (path) => {
            return await build.resolve(`core-js/modules/${path}.js`, {
              kind: 'require-call',
              resolveDir: join(import.meta.dirname!, '../../../'),
            }).then(r => r.path.replaceAll('\\', '/'));
          }),
        );

        const imports = `import '${pathList.join('\';\nimport \'')}';`;

        file = await Deno.makeTempFile({ prefix: 'corejs-', suffix: '.js' });
        await Deno.writeTextFile(file, imports);

        build.initialOptions.inject &&= build.initialOptions.inject.filter(i => !basename(i).startsWith('corejs-'));
        build.initialOptions.inject ??= [];
        build.initialOptions.inject.push(file);
      });

      build.onEnd(() => void (file && Deno.removeSync(file)));
    },
  };
}

export default corejs;
