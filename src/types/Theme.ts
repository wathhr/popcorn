import { type Static, Type } from '@sinclair/typebox';
import { TypeCompiler } from '@sinclair/typebox/compiler';

export type Theme = Static<typeof Theme>;
export const Theme = Type.Object({
  $schema: Type.Optional(Type.String()),
  manifestVersion: Type.Literal(1),
  id: Type.TemplateLiteral([Type.String(), Type.Literal('.'), Type.String()], {
    description: 'A unique identifier for the theme, used internally',
    example: 'author.theme-name',
  }),
  version: Type.Optional(
    Type.RegExp(/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-z-][0-9a-z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-z-][0-9a-z-]*))*))?(?:\+([0-9a-z-]+(?:\.[0-9a-z-]+)*))?$/i, { // regex from https://semver.org/
      description: 'The version of the theme, in [semver](https://semver.org/) format\nThis determines when the theme should be updated',
    }),
  ),
  main: Type.String({ description: 'Relative path to the theme\'s CSS file' }),
  name: Type.Optional(Type.String({ description: 'The name of the theme displayed on the UI' })),
  description: Type.Optional(Type.String()),
  metaLinks: Type.Optional(
    Type.Partial(
      Type.Object(
        {
          codeberg: Type.String(),
          discord: Type.String(),
          github: Type.String(),
          gitlab: Type.String(),
        },
        {
          additionalProperties: Type.String(),
          description: 'Links to resources related to the theme',
        },
      ),
    ),
  ),
});

export const ThemeChecker = TypeCompiler.Compile(Theme);
