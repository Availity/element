# Git Conventions

- Default branch: `main`
- Commit format: Conventional Commits (`@commitlint/config-conventional` + `@commitlint/config-nx-scopes`)
- Scope = Nx project name (e.g. `fix(mui-button): ...`)
- Husky hooks:
  - `pre-commit`: `yarn lint:affected`
  - `commit-msg`: `npx --no -- commitlint --edit`
  - `pre-push`: `yarn lint:affected` + `yarn test:affected`
- lint-staged: `*.{js,ts,tsx}` → lint + prettier, `*.json` → prettier
- Branch prefixes: `feat/`, `fix/`, `chore/`, `docs/`, `release/`
- PRs target `main`
- CI skips on commit messages containing `skip ci` or `Release: Version Updates`
- Release flow: `nx affected --target version --parallel=1` → publish → auto-PR (`release/version-updates`) to `main`
