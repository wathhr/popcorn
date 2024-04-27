import compat from 'npm:core-js-compat';
import browserslist from 'npm:browserslist';
import { join } from 'std/path/mod.ts';
import pkg from '#pkg' with { type: 'json' };

export function corejs(target: ReturnType<typeof browserslist> | (keyof typeof pkg['browserslist'] & string)): import('esbuild').Plugin {
  return {
    name: 'corejs',
    async setup(build) {
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

      const dir = join(import.meta.dirname!, '../../../temp'); // needs to be in the project directory else esbuild can't resolve the imports
      await Deno.mkdir(dir, { recursive: true });

      const tempFile = await Deno.makeTempFile({ prefix: 'corejs', suffix: '.js', dir });
      await Deno.writeTextFile(tempFile, imports);

      build.initialOptions.inject = [
        ...(build.initialOptions.inject ?? []),
        tempFile,
      ];

      build.onDispose(async () => await Deno.remove(tempFile));
    },
  };
}

export default corejs;
