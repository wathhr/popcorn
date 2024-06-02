#!/bin/usr/env false

export function getConfig() {
  const importPath = new Error('Figuring out where the function was called from')
    .stack!
    .split('\n')
    .find(line => line.includes('esbuild.config.mts'))
    ?.replace(/^.*file:\/\//, 'file://');

  if (!importPath) throw new Error('Could not find config file');
  const configLocation = new URL(importPath).pathname.replace(/^\/(\w):/, '$1:');

  return configLocation;
}
