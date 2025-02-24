import { create } from '@storybook/theming';
// eslint-disable-next-line @nx/enforce-module-boundaries
import ElementLogo from '../../../static/availity-Element-Logo.png'
// eslint-disable-next-line @nx/enforce-module-boundaries
import ElementPackageInfo from '../../../packages/element/package.json'

// https://storybook.js.org/docs/7/configure/user-interface/theming#create-a-theme-quickstart
export default create({
  base: 'light',
  brandTitle: `<img src="${ElementLogo}"/> <div class="version-number">${ElementPackageInfo?.version || 'prerelease'}</div>`,
  brandUrl: 'https://design.availity.com/2e36e50c7/p/15d54a-element-design-system',
  brandTarget: '_self',

  //
  colorPrimary: '#FF66FF',
  colorSecondary: 'rgb(255, 103, 31)',

  // UI
  // appBg: 'rgb(17, 49, 90)',

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
