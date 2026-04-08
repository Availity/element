# Testing Conventions

- Framework: Jest 30 with `@nx/jest:jest` executor
- Preset: `@nx/jest/preset` extended via `jest.preset.js`
- Global config: `jest.config.global.js` — ts-jest transform, jsdom-global env, Testing Library setup
- Test files: `*.test.ts(x)` or `*.spec.ts(x)` co-located in `src/lib/`
- Setup: `@testing-library/jest-dom` (auto-imported via `setupFilesAfterEnv`)
- Polyfills: `jest.polyfills.global.js` (undici mocks for fetch/Request/Response/etc.)
- Module mapping: tsconfig paths mapped via `pathsToModuleNameMapper`, CSS → `identity-obj-proxy`
- Coverage: `json-summary` reporter, merged via `scripts/merge-coverage.js`
- Run all: `yarn test`
- Run affected: `yarn test:affected`
- CI matrix: Node 20, 22, 24 on ubuntu-latest + macos-latest
