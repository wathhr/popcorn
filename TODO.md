# TODO

## Main
- [ ] Add userstyle support
  - https://github.com/openstyles/stylus/wiki/Writing-UserCSS#usercss-metadata
  - https://github.com/openstyles/usercss-meta
- [x] Add validation to user-defined objects (such as the config) using [typebox](https://github.com/sinclairzx81/typebox)

## Code management
- [x] Move `src/electron/renderer` to `src/browser` and use it from there instead

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
- [ ] Follow [VSCode's UX guidelines](https://code.visualstudio.com/api/ux-guidelines/overview)

## Electron
- [x] Make a type-safe way to create IPC channels
  - [x] Creating listeners in the renderer
  - [x] Patch [`electron.d.ts`](./vendor/electron.d.ts) instead of exporting a different type
- [x] Add minimal electron application for easier testing
- [ ] Add auto-updater
- [ ] Add testing framework
  - [ ] [Vitest](https://github.com/vitest-dev/vitest)
- [x] Create my own injector instead of relying on kernel
- [ ] ~~Add kernel-specific stuff (maybe)~~
  - [ ] ~~[Imports](https://github.com/kernel-mod/electron/blob/master/tsconfig.json#L9)~~
  - [ ] ~~[IPC](https://github.com/kernel-mod/electron/blob/master/src/main/ipc.ts)~~
- [x] Add the ability to import legacy versions of electron in case of deprecated stuff
  - [ ] ~~Do the same for node~~
  - [ ] For some reason typescript can't get type declarations when importing from `electron-legacy/[main,renderer,...]`
- [x] Add file system manager

## Scripts
- [ ] ~~Figure out a better way to add kernel-types, currently they are manually written~~
- [ ] Add macro support (https://github.com/unplugin/unplugin-macros) (specifically for constants)
- [ ] ~~Add a way to easily create patches~~
- [x] Support multiple connections on the dev server
- [x] Rewrite in TS instead of JS with JSDoc
- [x] Add symlink support for the injector
- [x] Improve logging from building
  - [x] Grouping builds
  - [x] Add custom output files

## Linting
- [ ] https://typescript-eslint.io/rules/no-base-to-string/
- [ ] https://github.com/jgchk/eslint-import-resolver-deno

## Misc
- [ ] ~~Use BiomeJS instead of eslint~~
  - [x] Use the new eslint configuration
- [x] Add github actions
  - [x] Linting
  - [x] Releases
    - [ ] Remove the need to add a tag, only use commit name
    - [ ] Automatically update version in [`package.json`](./package.json) if required
  - [ ] Testing
- [ ] Add documentation
