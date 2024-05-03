import { type Static, Type } from '@sinclair/typebox';
import { TypeCompiler } from '@sinclair/typebox/compiler';
import { Theme } from './Theme.ts';

export type Config = Static<typeof Config>;
export const Config = Type.Partial(
  Type.Object({
    $schema: Type.Optional(Type.String()),
    configVersion: Type.Literal(1),
    hotkey: Type.String({
      description: 'The hotkey for opening and closing the Popcorn modal',
      example: 'ctrl+p ctrl+s',
      default: 'ctrl+shift+p',
    }),
    quickCssDir: Type.String({ description: 'The directory where QuickCSS files should be stored' }),
    themeDirs: Type.Array(Type.String(), {
      description: 'Directories to search for themes in\nBy default these are `./themes` and `%USERPROFILE%/discord/themes/` (on Windows) or `$HOME/discord/themes/` (on other operating systems)',
    }),
    enabled: Type.Record(Type.Index(Theme, Type.Literal('id')), Type.Boolean(), {
      description: 'Enabled or disabled themes by id',
    }),
    verbose: Type.Boolean(),
  }),
);

export const ConfigChecker = TypeCompiler.Compile(Config);
