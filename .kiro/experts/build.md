# Build & Monorepo Conventions

- Nx 22.5.3 with `@nx/js`, `@nx/jest`, `@nx/eslint`, `@nx/react`, `@nx/storybook`, `@nx/vite`
- Yarn 4.12.0 workspaces: `packages/*`
- `nodeLinker: node-modules` (no PnP)
- Nx targets with caching: `build`, `test`, `lint`, `build-storybook`
- `build` depends on `^build` (dependency ordering)
- Run affected: `yarn nx affected --target=<target>` (base: `main`)
- Packages build with `tsup` — `tsup src/index.ts --format esm,cjs --dts`
- Storybook 10 in `apps/element-storybook/` — start with `yarn start:storybook`
- New packages: `yarn create:package <name>` (uses `@availity/nx-generator`)
- Versioning: `@jscutlery/semver` — independent per package, conventional changelog
- Tag format: `@availity/{projectName}@{version}`
- Publishing: `yarn npm publish --tolerate-republish --access public`
- `@nx/enforce-module-boundaries` enforced at root ESLint config
