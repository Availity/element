import { legacyTheme } from './legacy-theme';

/** Raw theme object (with component overrides removed for brevity).
 *
 * Useful for knowing what values are directly accessible through System Properties.
 */
export default {
  title: 'Design System/Theme/Legacy',
};

const { components: legacyComponents, ...legacyThemeWOOverrides } = legacyTheme;

export const RawTheme = {
  render: () => <pre>{JSON.stringify(legacyThemeWOOverrides, null, 2)}</pre>,
};
