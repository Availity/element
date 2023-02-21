# availity-element

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

This is a collection of reusable React components intended to be used across multiple projects. These components use [@availity/design-tokens](./packages/design-tokens/) for styling and [Material UI](https://mui.com/) as the base.

Visit our [documentation site](https://zeroheight.com/07045d232/v/latest/p/753cd8-element) for more information on how to use the components.

## Installation

To install the library in your project, you can use either NPM or Yarn:

```
npm install @availity/element
```

OR

```
yarn add @availity/element
```

## Usage

The [@availity/element](./packages/element/) package contains all of the components and hooks for the design system. We recommend using this package when you want to use multiple components.

To use the components in your project, you will need to import them first:

```tsx
import { Button, ThemeProvider } from '@availity/element';
```

Make sure all of the components you use are inside the `ThemeProvider` component. We recommend placing it in your root `index.{js|tsx}` file.

```jsx
import { ThemePovider } from '@availity/element';

const App = () => {
  return <ThemeProvider>{/* Application code. Most likely a router. */}</ThemeProvider>;
};
```

## Development

The currently recommended version of node to use when developing in this repo is: `v16.16.0`. We recommend using [fnm](https://github.com/Schniz/fnm#readme) to have your node version automatically changed when you `cd` into the repo.

We use `yarn berry` (aka yarn v3) to manage dependencies. Install `yarn` globally:

```sh
npm i -g yarn
```

> This command will install yarn v1. When we run the next command then yarn v3 will be added.

Then install the dependencies:

```sh
yarn install
```

If you want to see the components in action as you develop then run the `storybook` server as you code

```sh
yarn start:storybook
```

Want to make sure you didn't break anything? Run the unit test script

```sh
yarn test
```

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
