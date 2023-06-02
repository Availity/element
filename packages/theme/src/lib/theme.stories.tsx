import { lightTheme } from './light-theme';

export const Default = {
  render: () => <pre>{JSON.stringify(lightTheme, null, 2)}</pre>,
};

export default {
  title: 'Design System/Theme',
};
