import { lightTheme as lightThemeOptions, legacyTheme as legacyThemeOptions } from '@availity/theme';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import type { Theme, ThemeOptions } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { enUS as enUSDate } from '@mui/x-date-pickers/locales';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

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
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={enUSDate.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <MuiThemeProvider theme={themes[theme]}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </LocalizationProvider>
  );
}

export default ThemeProvider;
