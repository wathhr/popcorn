# Popcorn
A Kernel package for injecting themes into your client

## Config
The config is located at `config.json`, if you don't create one then Popcorn will create one for you

### `hotkey`
This defines the hotkey you use to open the in-app UI
The contents should follow [this](https://betterprogramming.pub/full-featured-hotkeys-library-in-200-lines-of-javascript-code-81a74e3138cc#5241)

### `themeFiles`
This defines where Popcorn should search for themes' `.json` files
The contents should follow [this](https://github.com/micromatch/micromatch#matching-features)

### `enabled`
This defines the enabled themes, all themes are off by default

## Writing themes for Popcorn
Themes just need a `.json` file with 2 keys, `id` and `main`

### `id`
The identifier for your theme, every theme should have a different ID

### `main`
The file path to the theme's `.css` file, the path should be relative
