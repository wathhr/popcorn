import { Type, Static } from '@sinclair/typebox';
import { TypeCompiler } from '@sinclair/typebox/compiler';

export type Theme = Static<typeof Theme>;
export const Theme = Type.Object({
  $schema: Type.Optional(Type.String()),
  id: Type.TemplateLiteral([Type.String(), Type.Literal('.'), Type.String()], {
    description: 'A unique identifier for the theme',
    example: 'author.theme-name',
  }),
  version: Type.Optional(
    Type.String({
      description: 'The version of the theme, in [semver](https://semver.org/) format\nThis determines when the theme should be updated',
      default: '0.1.0',
    }),
  ),
  main: Type.String({ description: 'Relative path to the theme\'s CSS file' }),
  name: Type.String(),
  description: Type.String(),
  metaLinks: Type.Optional(
    Type.Partial(
      Type.Object(
        {
          codeberg: Type.String(),
          discord: Type.String(),
          github: Type.String(),
          gitlab: Type.String()
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
