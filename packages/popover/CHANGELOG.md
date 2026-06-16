# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [3.0.0](https://github.com/Availity/element/compare/@availity/mui-popover@2.0.1...@availity/mui-popover@3.0.0) (2026-06-16)

### Dependency Updates

* `mui-typography` updated to version `2.0.1`

### ⚠ BREAKING CHANGES

* CJS builds removed, packages are ESM-only.

- Convert all packages to ESM (type: module)
- Replace Jest with Vitest for all test targets
- Migrate ESLint to v9 flat config (eslint.config.js)
- Build output ESM-only (removed CJS dist/index.js require path)
- Upgrade @tanstack/react-query from v4 to v5
- Upgrade @availity/api-axios to v13
- Drop Node 20 support (engines: ^22.0.0 || ^24.0.0)
- Bump React to 19.2.7, MUI to 7.3.11, TypeScript to 5.9.3
- Simplify CI caching with built-in yarn cache action + Nx cache
- Modernize nx.json configuration
- Update husky hooks to use yarn directly
- Replace lint-staged nx affected with direct eslint

### Features

* migrate to ESM, Vitest, and ESLint 9 flat config ([cc22bb4](https://github.com/Availity/element/commit/cc22bb4a230bc1f3b190f187c4e61249d015b25b))

## [2.0.1](https://github.com/Availity/element/compare/@availity/mui-popover@2.0.0...@availity/mui-popover@2.0.1) (2025-12-03)

### Dependency Updates

* `mui-typography` updated to version `2.0.0`
## [2.0.0](https://github.com/Availity/element/compare/@availity/mui-popover@1.0.3...@availity/mui-popover@2.0.0) (2025-11-17)

### Dependency Updates

* `mui-typography` updated to version `1.0.3`

### ⚠ BREAKING CHANGES

* @mui/material upgraded to v7
* @mui/x-* upgraded to v8
* react upgraded to v19

### Features

* upgrade material and react dependencies ([51602a4](https://github.com/Availity/element/commit/51602a48c5304db6f61e2c7e772c9a3a4aa3f65c))

## [1.0.3](https://github.com/Availity/element/compare/@availity/mui-popover@1.0.2...@availity/mui-popover@1.0.3) (2025-10-30)

### Dependency Updates

* `mui-typography` updated to version `1.0.2`
## [1.0.2](https://github.com/Availity/element/compare/@availity/mui-popover@1.0.1...@availity/mui-popover@1.0.2) (2025-04-11)

### Dependency Updates

* `mui-typography` updated to version `1.0.1`
## [1.0.1](https://github.com/Availity/element/compare/@availity/mui-popover@1.0.0...@availity/mui-popover@1.0.1) (2025-03-07)

### Dependency Updates

* `mui-typography` updated to version `1.0.0`
## [1.0.0](https://github.com/Availity/element/compare/@availity/mui-popover@1.0.0-alpha.0...@availity/mui-popover@1.0.0) (2025-02-25)

### Dependency Updates

* `mui-typography` updated to version `0.2.0`

### ⚠ BREAKING CHANGES

* upgrade to @mui/material v6

### Miscellaneous Chores

* element v1 release ([a6e3567](https://github.com/Availity/element/commit/a6e35671185b9f13d25c7a39c4488ecb8774633e))

## [1.0.0-alpha.0](https://github.com/Availity/element/compare/@availity/mui-popover@0.2.0...@availity/mui-popover@1.0.0-alpha.0) (2025-02-24)


### ⚠ BREAKING CHANGES

* upgraded to @mui/material v6
* **element:** upgraded to @mui/material v6

### Features

* **element:** upgrade to @mui/material v6 ([cb958bb](https://github.com/Availity/element/commit/cb958bba99a4f1ee6dab323f0ff54b69e6fd3493))
* upgrade @mui/material ([571453a](https://github.com/Availity/element/commit/571453a34b21c344594ab4c03bc497d19aba942b))
* upgrade to MUI v6 ([7febd6f](https://github.com/Availity/element/commit/7febd6fd4fd58e87e1c97a832cea3b4595a35d58))

## [0.2.0](https://github.com/Availity/element/compare/@availity/mui-popover@0.1.6...@availity/mui-popover@0.2.0) (2025-02-04)

### Dependency Updates

* `mui-typography` updated to version `0.1.6`

### Features

* configure package.json to allow esm to be used ([5a5393d](https://github.com/Availity/element/commit/5a5393de761f52608e714dd94a05106937dd95db))

## [0.1.6](https://github.com/Availity/element/compare/@availity/mui-popover@0.1.5...@availity/mui-popover@0.1.6) (2024-10-31)

### Dependency Updates

* `mui-typography` updated to version `0.1.5`
## [0.1.5](https://github.com/Availity/element/compare/@availity/mui-popover@0.1.4...@availity/mui-popover@0.1.5) (2024-06-14)

### Dependency Updates

* `mui-typography` updated to version `0.1.4`
## [0.1.4](https://github.com/Availity/element/compare/@availity/mui-popover@0.1.3...@availity/mui-popover@0.1.4) (2024-04-19)

### Dependency Updates

* `mui-typography` updated to version `0.1.3`
## [0.1.3](https://github.com/Availity/element/compare/@availity/mui-popover@0.1.2...@availity/mui-popover@0.1.3) (2024-04-04)

### Dependency Updates

* `mui-typography` updated to version `0.1.7`

### Performance Improvements

* **mui-popover:** use path imports for material deps ([8859fc7](https://github.com/Availity/element/commit/8859fc75b30e99886f48ddb3b10676975ab8f4a9))

## [0.1.2](https://github.com/Availity/element/compare/@availity/mui-popover@0.1.1...@availity/mui-popover@0.1.2) (2024-02-20)

### Dependency Updates

* `mui-typography` updated to version `0.1.6`
## [0.1.1](https://github.com/Availity/element/compare/@availity/mui-popover@0.1.0...@availity/mui-popover@0.1.1) (2023-11-16)

### Dependency Updates

- `mui-typography` updated to version `0.1.5`

## 0.1.0 (2023-11-09)

### Dependency Updates

- `mui-typography` updated to version `0.1.4`

### Features

- **mui-popover:** initial commit ([f36b454](https://github.com/Availity/element/commit/f36b45416551d24c2c840b1fd65489399b388835))
