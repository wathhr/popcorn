#!/usr/bin/env false
import pkg from '#pkg' with { type: 'json' };

export const aliasImport: import('esbuild').Plugin = {
  name: 'Alias importer',
  setup(build) {
    const packages = new Map<string, string>();

    const pkgPackages = { ...pkg.dependencies, ...pkg.devDependencies };
    for (const [name, version] of Object.entries(pkgPackages)) {
      if (!/^\w+:/.test(version)) continue;
      const realPackageName = version.replace(/@.+$|^\w+:/g, '');
      if (realPackageName in pkgPackages) packages.set(name, realPackageName);
    }

    const filter = new RegExp(`^${[...packages.keys()].join('|')}`);
    build.onResolve({ filter }, (args) => {
      const packageName = args.path.split('/')[0]!;
      const path = args.path.replace(packageName, packages.get(packageName)!);

      return {
        path,
        external: build.initialOptions.external?.includes(packageName) ?? false,
      };
    });
  },
};

export default aliasImport;
