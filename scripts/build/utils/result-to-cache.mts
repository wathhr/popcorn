#!/usr/bin/env false

export function resultToCache(result: import('esbuild').BuildResult<{ metafile: true }>): import('#build/plugins/custom-logs.mts').Cache {
  return {
    files: Object.entries(result.metafile.outputs).map(([path, file]) => ({
      path,
      size: file.bytes,
    })),
    warnings: result.warnings,
  };
}
