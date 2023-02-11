# Popcorn
A simple Kernel package for injecting themes into your client

## Config
The config is in [`index.json`](./index.json) in the `config` object

### Hotkey
This defines the hotkey you use to open the in-app UI
The contents should follow [this](https://betterprogramming.pub/full-featured-hotkeys-library-in-200-lines-of-javascript-code-81a74e3138cc#5241)

### Themes
This defines where Popcorn should search for themes' `index.json` files

## Writing themes for Popcorn
Themes are normal folders with an `index.json` file and any css file ([examples](./themes/))
