import { lightTheme } from '@availity/theme';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import type {
  Palette,
  PaletteColor,
  PaletteOptions,
  SimplePaletteColorOptions,
  Theme,
  ThemeOptions,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['secondary'];
  }

  interface PaletteOptions {
    tertiary: PaletteOptions['secondary'];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

const defaultTheme = createTheme(lightTheme as ThemeOptions);

export interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: Theme;
}

export function ThemeProvider({ children, theme = defaultTheme }: ThemeProviderProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </LocalizationProvider>
  );
}

export default ThemeProvider;
