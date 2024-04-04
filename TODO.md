# TODO

## Main
- [ ] Add userstyle support
  - https://github.com/openstyles/stylus/wiki/Writing-UserCSS#usercss-metadata
  - https://github.com/openstyles/usercss-meta
- [x] Add validation to user-defined objects (such as the config) using [typebox](https://github.com/sinclairzx81/typebox)

## Extension
- [x] Implement
- [ ] Add testing framework
  - [ ] [Playwright](https://playwright.dev/docs/chrome-extensions)
  - [ ] [Puppeteer](https://pptr.dev/guides/chrome-extensions)

## UI
- [ ] Implement
- [ ] Add testing framework
  - [Storybook](https://github.com/storybookjs/storybook)
  - [Testing library](https://github.com/testing-library/svelte-testing-library)

## Electron
- [x] Make a type-safe way to create IPC channels
  - [x] Creating listeners in the renderer
  - [x] Patch [`electron.d.ts`](./vendor/electron.d.ts) instead of exporting a different type
- [x] Add minimal electron application for easier testing
- [ ] Add auto-updater
- [ ] Add testing framework
  - [ ] [Vitest](https://github.com/vitest-dev/vitest)
- [ ] Create my own injector instead of relying on kernel
- [ ] Add kernel-specific stuff (maybe)
  - [ ] [Imports](https://github.com/kernel-mod/electron/blob/master/tsconfig.json#L9)
  - [ ] [IPC](https://github.com/kernel-mod/electron/blob/master/src/main/ipc.ts)

## Scripts
- [ ] Figure out a better way to add kernel-types, currently they are manually written
- [ ] Add macro support (https://github.com/unplugin/unplugin-macros) (specifically for constants)
- [ ] ~~Add a way to easily create patches~~
- [x] Support multiple connections on the dev server
- [x] Rewrite in TS instead of JS with JSDoc

## Misc
- [ ] ~~Use BiomeJS instead of eslint~~
  - [x] Use the new eslint configuration
    - [ ] https://github.com/jgchk/eslint-import-resolver-deno
- [x] Add github actions
  - [x] Linting
  - [x] Releases
    - [ ] Remove the need to add a tag, only use commit name
    - [ ] Automatically update version in [`package.json`](./package.json) if required
  - [ ] Testing
- [ ] Add documentation
