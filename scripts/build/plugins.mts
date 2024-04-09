import { basename, relative } from 'std/path/mod.ts';
import * as c from 'std/fmt/colors.ts';
import { args } from './args.mts';

function formatSize(size: number) {
  if (size < 1024) return `${size}b`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)}kb`;
  return `${(size / 1024 / 1024).toFixed(1)}mb`;
}

export const customLogs: import('esbuild').Plugin = {
  name: 'Custom logging',
  setup(build) {
    if (args['original-logs']) return;
    let start = Date.now();
    build.onStart(() => void (start = Date.now()));

    build.initialOptions.logLevel = 'error';

    if (args.watch) {
      build.onEnd((result) => {
        const warnings = result.warnings.length;
        if (warnings > 0) console.warn(`${warnings} warning${warnings > 1 ? 's' : ''}`);
        console.log('[watch] build finished, watching for changes...');
      });

      return;
    }

    build.onEnd((result) => {
      if (!result.outputFiles) return;

      const warnings = result.warnings.length;
      if (warnings > 0) console.warn(`${warnings} warning${warnings > 1 ? 's' : ''}`);

      console.log(); // new line
      const margin = '  ';

      const longestName = relative(
        Deno.cwd(),
        result.outputFiles.reduce((a, b) => a.path.length > b.path.length ? a : b, { path: '' }).path!,
      );

      const maxFiles = 8;
      for (const file of result.outputFiles.slice(0, maxFiles)) {
        const sizeString = formatSize(file.contents.byteLength);
        const relPath = relative(Deno.cwd(), file.path);

        const spacer = Math.max(
          longestName.length - relPath.length + 6 - sizeString.replace(/[A-Za-z]/g, '').length,
          1,
        );

        console.log(
          margin
          + relPath.replace(basename(file.path), '')
          + c.brightWhite(basename(file.path))
          + c.cyan(' '.repeat(spacer) + sizeString),
        );

        // console.log(
        //   `${margin}${relPath.replace(basename(file.path), '')}%c${basename(file.path)}%c${' '.repeat(spacer)}${sizeString}`,
        //   'color: white; font-weight: bold', // This is not the same as c.brightWhite,
        //   'color: cyan',
        // );
      }

      const unshownAmount = result.outputFiles.length - maxFiles;
      if (unshownAmount > 0)
        console.log(margin, `...and ${unshownAmount} more output file${unshownAmount > 1 ? 's' : ''}...`);

      const elapsed = Date.now() - start;
      console.log(); // new line
      console.log(`%c${Deno.build.os === 'windows' ? '' : '⚡ '}Done in ${elapsed}ms`, 'color: green');
    });
  },
};
