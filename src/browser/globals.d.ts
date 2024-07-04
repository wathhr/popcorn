// eslint-disable-next-line no-var
declare var PopcornAPI: Omit<import('~/types').BrowserAPI, `$${string}`> | Omit<import('~/types').ElectronAPI, `$${string}`>;
