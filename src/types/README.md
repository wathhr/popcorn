https://sinclairzx81.github.io/typebox-workbench/

# `*.json`
- Must have a `type` key that corresponds to a file exporting its appropriate type of the same name
- Its filename is used as the output file

# `*.ts`
- Must have an export of the same name (preferably both a variable and a type)
- Should export a checker variable of the same name (e.g. `ThemeChecker` for the `Theme` type)
- Must support both Node (for runtime checking) and Deno (for exporting the JSON Schema)
