# AGENTS.md: Element (Availity design system)

Nx monorepo for `@availity/element` and related `@availity/mui-*`, `@availity/theme`, and `@availity/design-tokens` packages. Built on Material UI 7. This is the current design system; new UI work goes here.

## Branches

- Default and PR target: `main` (see `.github/workflows/pr-build.yml`).
- Check `git branch --show-current` before editing. Local clones can sit on feature branches (for example `feature/new-theme`). Compare to `origin/main` before treating local code as released.
- Never push to `main`. Work on `feature/<JIRA-###>-description`.

## Environment

- Node `^22 || ^24` (`.nvmrc` is 24).
- Yarn 4 (`packageManager: yarn@4.12.0`). Do not use npm or yarn 1.
- Install with `yarn install --immutable`. Do not hand-edit `yarn.lock`.

## Commands

| Task                                      | Command                             |
| ----------------------------------------- | ----------------------------------- |
| Build everything                          | `yarn build`                        |
| Build only what changed                   | `nx affected --target=build`        |
| Lint changed packages                     | `yarn lint:affected` (CI runs this) |
| Lint everything                           | `yarn lint`                         |
| Test changed packages                     | `yarn test:affected`                |
| Test with coverage (CI-style, single run) | `yarn test:ci`                      |
| Storybook                                 | `yarn start`                        |
| Scaffold a package                        | `yarn create:package <name>`        |

Before you say a change is done, run `yarn lint:affected`, `yarn test:affected`, and `yarn build` on the packages you touched.

## Commits

- Conventional commits, enforced by `commitlint.config.js` (`@commitlint/config-conventional` + `config-nx-scopes`).
- If you give a scope, it must be an Nx project name (for example `fix(button): ...`). `config-nx-scopes` enforces this through `scope-enum`. A scope is optional.
- The header length limit is not enforced. `header-max-length` is disabled in `commitlint.config.js`.
- The type drives version bumps. Use `!` after the type or a `BREAKING CHANGE:` footer for a major.
- Releases run through `nx affected --target version`. Do not run `publish`, `publish:affected`, or `version:affected` locally unless a human asks.

## Code rules

- Inside this repo, import from the individual `@availity/mui-*` packages directly, not from `@availity/element`. `@availity/element` re-exports those packages, so importing from it inside the monorepo creates a circular dependency.
- Style through the theme and `sx` with `@availity/design-tokens`. No hardcoded hex colors where a token exists.
- No Bootstrap classes or reactstrap/Formik. That is the legacy `availity-react` stack.
- Do not change the Node or Yarn engine pins without a human decision.

## Gotchas

- The local branch may not match `main`. Run `git log --oneline origin/main..HEAD` first.
- Major Element upgrades ship codemods: `npx @availity/mui-codemod@latest <transform> <path>`.
- Repo-wide `yarn build` and `yarn lint` are slow. Prefer the `affected` variants.
