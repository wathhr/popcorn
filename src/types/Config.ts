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
    transparencyType: Type.Union([
      Type.Literal('none'),
      Type.Literal('mica'),
      Type.Literal('acrylic'),
      Type.Literal('tabbed'),
    ], {
      description: 'KERNEL NOT SUPPORTED\Setting this to anything other than `none` on non-Windows platforms will set the window\'s vibrancy to `fullscreen-ui`\n\nThe type of transparency the window should have\n\n- `none`: Don\'t draw any system backdrop\n- `mica`: Draw the backdrop material effect corresponding to a long-lived window.\n- `acrylic`: Draw the backdrop material effect corresponding to a transient window\n- `tabbed`: Draw the backdrop material effect corresponding to a window with a tabbed title bar',
    }),
    userStyles: Type.Array(Type.String(), {
      description: '`.user.css` files to load',
    }),
  }),
);

export const ConfigChecker = TypeCompiler.Compile(Config);
