#!/usr/bin/env false

import type * as esbuild from 'esbuild';
import { join, relative } from 'std/path/mod.ts';
import { minifyHTML } from 'https://deno.land/x/minify@1.0.1/mod.ts';
import { DOMParser } from 'https://deno.land/x/deno_dom@v0.1.45/deno-dom-wasm.ts';
import { addToGroup } from './custom-logs.mts';
import { resultToCache } from '#build/utils/mod.mts';

interface Opts {
  esbuildOptions?: esbuild.CommonOptions,
  buildOptions?: esbuild.BuildOptions,
  transformOptions?: esbuild.TransformOptions,
}

const pluginName = 'HTML';

export function html(opts: Opts = {}, $group?: string): esbuild.Plugin {
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

        const scripts = document.getElementsByTagName('script');
        for (const script of scripts) {
          const options: esbuild.CommonOptions = {
            ...build.initialOptions,
            logLevel: 'error',
            ...opts.esbuildOptions,
            format: script.getAttribute('type') === 'module' ? 'esm' : 'cjs',
            platform: 'browser',
          };

          if (script.hasAttribute('src')) {
            const src = script.getAttribute('src')!;

            const path = join(args.path, '..', src);
            watchFiles.push(path);

            const buildOptions = {
              ...options,
              ...opts.buildOptions,
              entryPoints: [path],
              metafile: true as const,
              outdir: join(build.initialOptions.outdir!, src, '..'),
            };

            const result = await build.esbuild.build(buildOptions);
            if (result.errors.length > 0) return { errors: result.errors, pluginName };
            const outputFile = Object.keys(result.metafile!.outputs)[0]!;

            watchFiles.push(...result.metafile!.outputs[outputFile]!.imports.map(input => input.path));
            if ($group) addToGroup(resultToCache(result), $group);

            script.setAttribute('src', relative(buildOptions.outdir!, outputFile));
          } else {
            if (!script.innerHTML) return {
              errors: [{
                id: 'no-content-or-src',
                text: 'Script has no content or src defined.',
                pluginName,
              }],
            };

            // this is stupid
            const initialOptionsCopy = structuredClone(build.initialOptions);
            const banner = initialOptionsCopy.banner?.js;
            const footer = initialOptionsCopy.footer?.js;
            delete initialOptionsCopy.banner;
            delete initialOptionsCopy.footer;

            const result = await build.esbuild.transform(script.innerHTML, {
              banner: banner!,
              footer: footer!,
              ...options,
              ...opts.transformOptions,
            });
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

          const result = await build.esbuild.build({
            bundle: true,
            ...build.initialOptions,
            ...opts.esbuildOptions,
            ...opts.buildOptions,
            entryPoints: [path],
            outdir: join(build.initialOptions.outdir!, link.getAttribute('href')!, '..'),
            metafile: true,
            loader: {
              '.css': link.getAttribute('local') === 'true' ? 'local-css' : 'css',
            },
          });

          if (result.errors.length > 0) return { errors: result.errors, pluginName };
          const outputFile = Object.keys(result.metafile!.outputs)[0]!;

          watchFiles.push(...Object.keys(result.metafile!.outputs[outputFile]!.inputs).map(p => join(Deno.cwd(), p)));
          if ($group) addToGroup(resultToCache(result), $group);

          link.setAttribute('href', relative(build.initialOptions.outdir!, outputFile));
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

          // this is stupid
          const initialOptionsCopy = structuredClone(build.initialOptions);
          const banner = initialOptionsCopy.banner?.css;
          const footer = initialOptionsCopy.footer?.css;
          delete initialOptionsCopy.banner;
          delete initialOptionsCopy.footer;

          const transformedInitialOptions: Omit<esbuild.TransformOptions, 'loader'> = {
            ...initialOptionsCopy,
            banner: banner!,
            footer: footer!,
          };

          const result = await build.esbuild.transform(style.innerHTML, {
            ...transformedInitialOptions,
            ...opts.esbuildOptions,
            ...opts.transformOptions,
            loader: style.getAttribute('local') === 'true' ? 'local-css' : 'css',
          });

          style.innerHTML = result.code.trim();
        }

        const firstLine = fileContent.split('\n')[0];
        const doctype = /^<!doctype/i.test(firstLine ?? '') ? `${firstLine}\n` : '';
        let contents = doctype + document.documentElement!.outerHTML;

        if (
          build.initialOptions.minify
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
