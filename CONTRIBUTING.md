# Contributing
It would be great to have you as a contributor!
Here are the steps to get started:

- [Code of conduct](#code-of-conduct)
- [Pull requests](#pull-requests)
  - [Building the project](#building-the-project)
- [Questions](#questions)

## Code of conduct
The [Code of conduct](./CODE_OF_CONDUCT.md) should be honored by everyone who contributes to this project.
Acting inappropriately will not be tolerated.

## Pull requests
If you decide you want to fix and/or add something to Popcorn follow these tips
to have a better chance of your pull request to be merged:

- **Prioritize understanding over cleverness.**
  Write code clearly and concisely. Remember that source code usually gets written once and read often.
  Ensure the code is clear to the reader. The purpose and logic should be obvious to a reasonably skilled developer,
  otherwise you should add a comment that explains it.
- **Conventional commit messages.**
  Follow the [conventional commit spec](https://www.conventionalcommits.org).
- **Smaller is better.**
  Submit one pull request per bug fix or feature.
  A pull request should contain isolated changes pertaining to a single bug fix or feature implementation.
  Do not refactor or reformat code that is unrelated to your change.
  It is better to submit many small pull requests rather than a single large one.
  Enormous pull requests will take enormous amounts of time to review, or may be rejected altogether.
- **Coordinate bigger changes.**
  For large and non-trivial changes, open an issue to discuss a strategy with the maintainers.

### Building the project
<details>
<summary>Prerequisites</summary>

- [Deno](https://deno.com)
- [pnpm](https://pnpm.io)

</details>

```sh
# Install the dependencies
pnpm i

# Build a project
pnpm build [PROJECT]

# Build the test application
cd ./app-src
pnpm i
pnpm build:unpack
cd ..

# Inject the project into the test application
pnpm inject --location=auto --symlink

# Watch a project for changes (with live reload)
pnpm watch [PROJECT]

# Watch the browser extension (has to be ran in parallel with `pnpm watch browser`)
pnpm start:(chrome|firefox):(mv2|mv3)

# Watch the electron main process
pnpm watch electron --executable="auto" # any executable is allowed, "auto" means use the test application
```

- `[PROJECT]` can be a subdirectory of /src which also has an `esbuild.config.mts` file as a direct child.

After making a couple of changes you should run the following commands to see if everything follows the project's code style guidelines:
```sh
pnpm lint # Checks the code style
pnpm check # Runs type checks in `src/electron` and `src/browser`

# For browser extension builds
pnpm lint:(mv2|mv3)
```

## Questions
If you can't figure something out on your own you can feel free to [create an issue on GitHub](https://github.com/wathhr/popcorn/issues/new) to clear things up.
