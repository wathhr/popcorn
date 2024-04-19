#!/bin/usr/env false

export const legacyImport: import('esbuild').Plugin = {
  name: 'Legacy import',
  setup(build) {
    build.onResolve({ filter: /.+-legacy/ }, (args) => {
      const path = args.path.replace(/(.+)-legacy/, '$1');

      return {
        path,
        external: build.initialOptions.external?.includes(path) ?? true,
      };
    });
  },
};

export default legacyImport;
