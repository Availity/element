import { lightTheme as lightThemeOptions, legacyTheme as legacyThemeOptions } from '@availity/theme';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import type { Theme, ThemeOptions } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';

const lightTheme = createTheme(lightThemeOptions as ThemeOptions);
const legacyTheme = createTheme(legacyThemeOptions as ThemeOptions);

export type ThemeProviderProps = {
  children: React.ReactNode;
  /** Availity theme to use */
  theme?: 'lightTheme' | 'legacyBS';
};
const themes: Record<string, Theme> = {
  lightTheme: lightTheme,
  legacyBS: legacyTheme,
};

export function ThemeProvider({ children, theme = 'lightTheme' }: ThemeProviderProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiThemeProvider theme={themes[theme]}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </LocalizationProvider>
  );
}

export default ThemeProvider;
