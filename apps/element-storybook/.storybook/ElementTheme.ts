import { create } from '@storybook/theming';

// https://storybook.js.org/docs/7/configure/user-interface/theming#create-a-theme-quickstart
export default create({
  base: 'light',
  brandTitle: 'Availity Element',
  brandUrl: 'https://zeroheight.com/2e36e50c7/p/15d54a-element-design-system',
  brandImage: 'https://cdn.zeroheight.com/styleguide_logos/80401-default/4af3be7723f7a3f5bc054865_availity-Element-Logo.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4uemVyb2hlaWdodC5jb20vc3R5bGVndWlkZV9sb2dvcy84MDQwMS1kZWZhdWx0LzRhZjNiZTc3MjNmN2EzZjViYzA1NDg2NV9hdmFpbGl0eS1FbGVtZW50LUxvZ28ucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzI4MDQ5NzM1fX19XX0_&Signature=MeoHVzwwWEhY3EqpIO4H90PBIv1dw947xlzITIt2zUlZhSsq4aPBOY86feHjjcwMauzzs0WMMnqELUnVzNeqxxS0fJFX~IMTWSew4OwVUX~Yt4YBoHpYe3L4-BUFkTxlFL39P0JoN2X8OrBvsF3eoRFQK5iEcSOrRgAp9Gel~2~~mc0PiwlYLkQKSf1VSLxHHB9L9t4QiA0qd9zgwP8QGKgzPyAVFD8sWJ4b~btThgcjhGt-jNNPinPP9V9YbafkWKhVTfhBCwrOd0QNWzEA2dDJjR-g46hkgRM8RvhmKKN~7sQwOm1IOvSXqryxGLz37xoNg7jk449zglWY57ylSw__&Key-Pair-Id=KDUNFXWNWK45P',
  brandTarget: '_self',

  //
  colorPrimary: '#FF66FF',
  colorSecondary: 'rgb(255, 103, 31)',

  // UI
  appBg: 'rgb(17, 49, 90)',

  // Text colors
  textColor: 'rgb(33, 33, 33)',
  textInverseColor: 'rgb(255, 103, 31)',
  textMutedColor: '#fafafa',

  // Toolbar default and active colors
  barTextColor: 'rgb(33, 33, 33)',
  barHoverColor: '#ff0000',
  barSelectedColor: 'rgb(255, 103, 31)',
  barBg: '#ffffff',
});
