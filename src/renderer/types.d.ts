/// <reference types="svelte" />

type Popcorn = {
  themes: { [id: string]: Theme };
  quickCss: QuickCssFolder;
};

type Renderer = {
  init(): void;
  start(): void;
  stop(): void;
};

type Theme = {
  description: string;
  id: string;
  json: string;
  enabled: boolean;

  enable(save?: boolean): void;
  disable(save?: boolean): void;
  toggle(save?: boolean): void;
  update(): Promise<void>;

  valid: boolean | 'unknown';
  errors: cssValidatorErrors;
}

type cssValidatorErrors = Awaited<ReturnType<PopcornNative['validateCSS']>>['errors'];

type QuickCssUIStatus = {
  type?: 'success' | 'error' | 'warning' | 'info';
  message?: string;
};

type QuickCssUIFileStatus = {
  unsaved?: boolean;
};
