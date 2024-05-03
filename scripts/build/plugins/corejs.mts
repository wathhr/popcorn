import compat from 'npm:core-js-compat';
import browserslist from 'npm:browserslist';
import { join } from 'std/path/mod.ts';
import { exists } from 'std/fs/exists.ts';
import pkg from '#pkg' with { type: 'json' };

export function corejs(target: ReturnType<typeof browserslist> | (keyof typeof pkg['browserslist'] & string)): import('esbuild').Plugin {
  return {
    name: 'corejs',
    setup(build) {
      const dir = join(import.meta.dirname!, '../../../temp'); // needs to be in the project directory else esbuild can't resolve the imports

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

        const imports = `import 'core-js/modules/${list.join('.js\';\nimport \'core-js/modules/')}.js';`;

        const file = join(dir, `corejs-${Date.now()}.js`);
        if (!await exists(dir)) await Deno.mkdir(dir);
        await Deno.writeTextFile(file, imports);

        build.initialOptions.inject?.push(file);
      });

      build.onEnd(async () => await Deno.remove(dir, { recursive: true }));
    },
  };
}

export default corejs;
