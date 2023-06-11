/// <reference types="user-agent-data-types" />
/// <reference types="svelte" />

declare const PopcornNative: PopcornNative;
declare const Popcorn: Popcorn;

declare type Popcorn = {
  themes: { [id: string]: Theme };
  quickCss: QuickCssFolder;
};

declare type Theme = import('./themes').Theme;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer R> ? R : any

declare type cssValidatorErrors = AsyncReturnType<typeof PopcornNative.validateCSS>['errors'];

declare type QuickCssUIStatus = {
  type?: 'success' | 'error' | 'warning' | 'info';
  message?: string;
};

declare type QuickCssUIFileStatus = {
  unsaved?: boolean;
};
