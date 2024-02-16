# TODO

## Main
- [ ] Add userstyle support
  - https://github.com/openstyles/stylus/wiki/Writing-UserCSS#usercss-metadata
  - https://github.com/openstyles/usercss-meta

## Extension
- [χ] Implement
- [ ] Add settings UI

## Misc
- [ ] Use BiomeJS instead of eslint
- [x] Allow for multiple entry points when building
  - [x] Allow arrays in `esbuild.config.mjs` default exports
- [ ] Figure out a better way to add kernel-types, currently they are manually written
- [ ] Add macro support (https://github.com/unplugin/unplugin-macros) (specifically for constants)

## IPC
- [x] Make a type-safe way to create IPC channels
  - [ ] Creating listeners in the renderer
  - [ ] Patch [`electron.d.ts`](./types/electron.d.ts) instead of exporting a different type
