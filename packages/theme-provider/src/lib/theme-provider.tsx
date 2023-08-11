import { lightTheme } from '@availity/theme';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import type { Theme, ThemeOptions } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';

// TODO: how do we add icon support?
// import '../styles/material-icons.css'

const defaultTheme = createTheme(lightTheme as ThemeOptions);

export interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: Theme;
}

export function ThemeProvider({ children, theme = defaultTheme }: ThemeProviderProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </LocalizationProvider>
  );
}

export default ThemeProvider;
