import { lightTheme } from '@availity/design-tokens';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';

// TODO: how do we add icon support?
// import '../styles/material-icons.css'

const defaultTheme = createTheme(lightTheme);

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
