import browser from 'eslint-config-availity/browser';
import nxPlugin from '@nx/eslint-plugin';
import storybook from 'eslint-plugin-storybook';

export default [
  ...browser,
  ...storybook.configs['flat/recommended'],
  {
    plugins: { '@nx': nxPlugin },
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [{ sourceTag: '*', onlyDependOnLibsWithTags: ['*'] }],
        },
      ],
      // MUI wrapping pattern uses `import { default as MuiX }` intentionally
      'unicorn/no-named-default': 'off',
      'import/no-named-default': 'off',
      // MUI component composition uses children prop pattern
      'react/no-children-prop': 'off',
      // Design system components wrap props through without destructuring
      'react/destructuring-assignment': 'off',
      // Circular deps are common in component re-exports (index.ts barrels)
      'import/no-cycle': 'off',
      // MUI overrides use consistent-return patterns
      'consistent-return': 'off',
      // MUI render prop patterns use nested components
      'react/no-unstable-nested-components': 'off',
      // Fragments needed for TypeScript generics in JSX
      'react/jsx-no-useless-fragment': 'off',
      // MUI default export re-export pattern
      'import/no-named-as-default': 'off',
      // Design system context providers construct values in render
      'react/jsx-no-constructed-context-values': 'warn',
      // MUI Link component wraps anchor
      'jsx-a11y/anchor-is-valid': 'warn',
      // Ref assignment patterns in design system
      'no-return-assign': 'off',
      // Design system uses array filtering patterns
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/prefer-array-some': 'warn',
    },
  },
  {
    ignores: [
      '.nx',
      '.yarn',
      '.storybook',
      'coverage',
      '**/dist',
      '**/node_modules',
      '**/storybook-static',
      '**/*.stories.@(js|jsx|ts|tsx|mdx)',
      // nx-generator uses CJS patterns — lint separately when modernized
      'packages/nx-generator/**',
    ],
  },
  {
    files: ['**/*.test.*', '**/*.spec.*'],
    rules: {
      // Test files commonly have button elements without explicit type
      'react/button-has-type': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      // Test files may import across module boundaries for integration tests
      '@nx/enforce-module-boundaries': 'warn',
      // Some tests verify rendering without explicit assertions
      'vitest/expect-expect': 'off',
    },
  },
  {
    files: ['packages/icon/**'],
    rules: {
      // Pre-existing pattern in icon SVG parsing
      'unicorn/no-unreadable-array-destructuring': 'off',
    },
  },
  {
    files: ['packages/spaces/**'],
    rules: {
      // Pre-existing conditional hook pattern — needs refactor (tracked)
      'react-hooks/rules-of-hooks': 'warn',
      'array-callback-return': 'warn',
    },
  },
  {
    files: ['packages/empty-state/**', '**/__mocks__/**'],
    rules: {
      'unicorn/prefer-module': 'off',
    },
  },
];
