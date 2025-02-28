import { lightTheme } from './light-theme';

/** Raw theme object (with component overrides removed for brevity).
 *
 * Useful for knowing what values are directly accessible through System Properties.
 */
export default {
  title: 'Design System/Theme/Default',
};

const { components: lightComponents, ...lightThemeWOOverrides } = lightTheme;

export const RawTheme = {
  render: () => <pre>{JSON.stringify(lightThemeWOOverrides, null, 2)}</pre>,
};
