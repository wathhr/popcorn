import type * as esbuild from 'esbuild';
import { join, relative } from 'std/path/mod.ts';
import { minifyHTML } from 'https://deno.land/x/minify/mod.ts';
import { DOMParser } from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts';

interface Opts {
  esbuildOptions?: esbuild.CommonOptions,
  buildOptions?: esbuild.BuildOptions,
  transformOptions?: esbuild.TransformOptions,
}

const pluginName = 'HTML';

export function html(opts: Opts = {}): esbuild.Plugin {
  return {
    name: pluginName,
    setup(build) {
      const parser = new DOMParser();

      build.onResolve({ filter: /\.html$/ }, args => ({ path: args.path, namespace: pluginName }));
      build.onLoad({ filter: /.*/, namespace: pluginName }, async (args) => {
        const watchFiles: string[] = [];

        const fileContent = await Deno.readTextFile(args.path);
        const document = parser.parseFromString(fileContent, 'text/html');
        if (!document) return {
          errors: [{
            id: 'invalid-html',
            text: 'Failed to parse HTML.',
            pluginName,
          }],
        };

        // TODO: Most of these are dropped because of transform which is not necessary, create a different object for transform and build
        const dropKeys = ['assetNames', 'bundle', 'chunkNames', 'entryPoints', 'entryNames', 'inject', 'metafile', 'outExtension', 'outbase', 'outdir', 'outfile', 'plugins', 'write'] as const satisfies (keyof esbuild.BuildOptions)[];
        const buildOptions = { ...build.initialOptions as esbuild.CommonOptions };
        for (const key of dropKeys) if (key in buildOptions) delete (buildOptions as esbuild.BuildOptions)[key];

        const scripts = document.getElementsByTagName('script');
        for (const script of scripts) {
          const options: esbuild.CommonOptions = {
            // The object is sorted like this so each option object can overwrite the previous keys
            format: script.getAttribute('type') === 'module' ? 'esm' : 'cjs',
            ...buildOptions,
            logLevel: 'error',
            ...opts.esbuildOptions,
            platform: 'browser',
          };

          if (script.hasAttribute('src')) {
            const src = script.getAttribute('src')!;

            const path = join(args.path, '..', src);
            watchFiles.push(path);

            const finalOptions = {
              ...options,
              ...opts.buildOptions,
              entryPoints: [path],
              metafile: true,
              outdir: join(build.initialOptions.outdir!, src, '..'),
            };

            const { errors, metafile } = await build.esbuild.build(finalOptions);
            if (errors.length > 0) return { errors, pluginName };
            watchFiles.push(...metafile!.outputs[Object.keys(metafile!.outputs)[0]].imports.map(input => input.path));

            script.setAttribute('src', relative(finalOptions.outdir!, Object.keys(metafile!.outputs)[0]));
          } else {
            if (!script.innerHTML) return {
              errors: [{
                id: 'no-content-or-src',
                text: 'Script has no content or src defined.',
                pluginName,
              }],
            };
            const result = await build.esbuild.transform(script.innerHTML, { ...options, ...opts.transformOptions });

            script.innerHTML = result.code.trim();
          }
        }

        const links = document.getElementsByTagName('link');
        for (const link of links) {
          if (link.getAttribute('rel') !== 'stylesheet') continue;

          if (!link.hasAttribute('href')) return {
            errors: [{
              id: 'no-href',
              text: 'Link has no href defined.',
              pluginName,
            }],
          };

          const path = join(args.path, '..', link.getAttribute('href')!);
          watchFiles.push(path);

          const { errors, metafile } = await build.esbuild.build({
            bundle: true,
            ...buildOptions,
            ...opts.esbuildOptions,
            ...opts.buildOptions,
            entryPoints: [path],
            outdir: join(build.initialOptions.outdir!, link.getAttribute('href')!, '..'),
            metafile: true,
            loader: {
              '.css': link.getAttribute('local') === 'true' ? 'local-css' : 'css',
            },
          });

          if (errors.length > 0) return { errors, pluginName };
          watchFiles.push(...Object.keys(metafile!.outputs[Object.keys(metafile!.outputs)[0]].inputs).map(p => join(Deno.cwd(), p)));

          link.setAttribute('href', relative(build.initialOptions.outdir!, Object.keys(metafile!.outputs)[0]));
        }

        const styles = document.getElementsByTagName('style');
        for (const style of styles) {
          if (!style.innerHTML) return {
            errors: [{
              id: 'no-content',
              text: 'Style has no content defined.',
              pluginName,
            }],
          };

          const result = await build.esbuild.transform(style.innerHTML, {
            ...buildOptions,
            ...opts.esbuildOptions,
            ...opts.transformOptions,
            loader: style.getAttribute('local') === 'true' ? 'local-css' : 'css',
          });

          style.innerHTML = result.code.trim();
        }

        const firstLine = fileContent.split('\n')[0];
        const doctype = /^<!doctype/i.test(firstLine) ? `${firstLine}\n` : '';
        let contents = doctype + document.documentElement!.outerHTML;

        if (
          buildOptions.minify
          || opts.esbuildOptions?.minify
          || opts.buildOptions?.minify
          || opts.transformOptions?.minify
        ) contents = minifyHTML(contents);

        return {
          contents,
          loader: 'copy',
          watchFiles,
          pluginName,
        };
      });
    },
  };
}
