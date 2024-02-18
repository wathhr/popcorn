# TODO

## Main
- [ ] Add userstyle support
  - https://github.com/openstyles/stylus/wiki/Writing-UserCSS#usercss-metadata
  - https://github.com/openstyles/usercss-meta

## Extension
- [x] Implement
- [ ] Add settings UI

## Electron
- [x] Make a type-safe way to create IPC channels
  - [x] Creating listeners in the renderer
  - [x] Patch [`electron.d.ts`](./types/electron.d.ts) instead of exporting a different type
- [ ] Add minimal electron application for easier testing
- [ ] Add auto-updater

## Scripts
- [ ] Figure out a better way to add kernel-types, currently they are manually written
- [ ] Add macro support (https://github.com/unplugin/unplugin-macros) (specifically for constants)
- [ ] Add a way to easily create patches
- [ ] Support multiple connections on the dev server

## Misc
- [ ] Use BiomeJS instead of eslint
- [x] Allow for multiple entry points when building
  - [x] Allow arrays in `esbuild.config.mjs` default exports
