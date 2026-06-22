export const docsLightTheme = {
  palette: {
    mode: 'light' as const,
    primary: {
      main: '#FF671F',
      light: '#FFA880',
      dark: '#CA4F16',
    },
    secondary: {
      main: '#FFD300',
    },
    tertiary: {
      main: '#F5F6F8',
      light: '#FFFFFF',
      dark: '#E8EAF0',
      contrastText: '#0F2A7C',
    },
    error: {
      main: '#C70002',
      light: '#FA7AA5',
      dark: '#84153A',
    },
    success: {
      main: '#0C7368',
      light: '#11A191',
      dark: '#052E2A',
    },
    warning: {
      main: '#806D0F',
      light: '#FFE762',
      dark: '#534609',
    },
    info: {
      main: '#1552BC',
      light: '#519EE6',
      dark: '#103E8E',
    },
    text: {
      primary: '#000C30',
      secondary: 'rgba(0, 12, 48, 0.9)',
      disabled: '#5E616E',
    },
    background: {
      default: '#F5F6F8',
      paper: '#FFFFFF',
    },
    divider: '#D3D5DC',
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
    h1: {
      fontFamily: 'Montserrat',
      fontSize: 56,
      fontWeight: 600,
      lineHeight: '68px',
    },
    h2: {
      fontFamily: 'Montserrat',
      fontSize: 36,
      fontWeight: 600,
      lineHeight: '48px',
    },
    h3: {
      fontFamily: 'Montserrat',
      fontSize: 28,
      fontWeight: 600,
      lineHeight: '40px',
    },
    h4: {
      fontFamily: 'Montserrat',
      fontSize: 24,
      fontWeight: 600,
      lineHeight: '32px',
    },
    h5: {
      fontFamily: 'Montserrat',
      fontSize: 20,
      fontWeight: 600,
      lineHeight: '24px',
    },
    h6: {
      fontFamily: 'Montserrat',
      fontSize: 16,
      fontWeight: 600,
      lineHeight: '22px',
    },
    body1: {
      fontFamily: 'Lato',
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '26px',
    },
    body2: {
      fontFamily: 'Lato',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '24px',
    },
    subtitle1: {
      fontFamily: 'Lato',
      fontSize: 18,
      fontWeight: 400,
      lineHeight: '26px',
    },
    subtitle2: {
      fontFamily: 'Lato',
      fontSize: 14,
      fontWeight: 600,
      lineHeight: '26px',
    },
    button: {
      fontFamily: 'Lato',
      fontSize: 16,
      fontWeight: 700,
      lineHeight: '24px',
      textTransform: 'none' as const,
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          border: '1px solid #D3D5DC',
          backgroundColor: '#FFFFFF',
          overflow: 'hidden',
          '&:before': { display: 'none' },
          '&.Mui-expanded': { margin: 0 },
          '&.MuiAccordion-avFilled': {
            border: '1px solid #E8EAF0',
            backgroundColor: '#FFFFFF',
          },
          '&.MuiAccordion-avFilled > .MuiAccordion-heading .MuiAccordionSummary-root': {
            backgroundColor: '#F5F6F8',
          },
          '&.MuiAccordion-avFilled > .MuiAccordion-heading .MuiAccordionSummary-root:hover': {
            backgroundColor: '#ECEEF3',
          },
          '&.MuiAccordion-avFilled > .MuiAccordion-heading .MuiAccordionSummary-root:active': {
            backgroundColor: '#E4E7EF',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: '16px',
          fontFamily: 'Montserrat',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '22px',
          color: '#0D2543',
          borderRadius: 'inherit',
          '&:hover': { backgroundColor: '#F5F6F8' },
          '&:focus-visible': { boxShadow: 'inset 0 0 0 2px #1B74CB' },
          '&:active': { backgroundColor: '#EFF3FF' },
        },
        expandIconWrapper: { color: '#0F2A7C' },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '0 16px 16px 56px',
          fontFamily: 'Lato',
          fontSize: '18px',
          lineHeight: '26px',
          color: '#0D2543',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
          padding: '24px',
          border: '1px solid #D3D5DC',
          backgroundImage: 'none',
        },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#F5F6F8',
          },
          '&:active': {
            backgroundColor: '#FFFFFF',
          },
          '&:focus-visible': {
            border: '2px solid #1B74CB',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          padding: '4px 8px',
          fontSize: '12px',
          lineHeight: '18px',
          fontFamily: 'Lato',
          height: 'auto',
        },
        colorSuccess: {
          backgroundColor: '#CCFBF1',
          border: '1px solid #11A191',
          color: '#07453F',
        },
        colorInfo: {
          backgroundColor: '#EBF3F9',
          border: '1px solid #94C4EB',
          color: '#103E8E',
        },
        colorWarning: {
          backgroundColor: '#FFF5BD',
          border: '1px solid #E6C400',
          color: '#534609',
        },
        colorError: {
          backgroundColor: '#FFD9E5',
          border: '1px solid #FF7DA8',
          color: '#822F4B',
        },
        colorDefault: {
          backgroundColor: '#5E616E',
          color: '#FFFFFF',
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          border: '1px solid #D3D5DC',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#F5F6F8',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: 'Lato',
          fontSize: '16px',
          lineHeight: '26px',
          borderColor: '#D3D5DC',
          color: '#0D2543',
        },
        head: {
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '20px',
          color: '#0D2543',
          backgroundColor: '#F5F6F8',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '0 12px',
          height: '40px',
          backgroundColor: '#FFFFFF',
          '& fieldset': {
            borderColor: '#6A7594',
          },
          '&:hover fieldset': {
            borderColor: '#0F2A7C',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#1B74CB',
            borderWidth: '2px',
          },
          '&.Mui-disabled fieldset': {
            borderColor: '#D3D5DC',
          },
        },
        input: {
          padding: '8px 0',
          fontSize: '18px',
          fontFamily: 'Lato',
          lineHeight: '26px',
          '&::placeholder': {
            color: '#838795',
            opacity: 1,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        avWrapper: {
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Lato',
          fontSize: '18px',
          lineHeight: '26px',
          fontWeight: 400,
          color: '#0D2543',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: 'Lato',
          fontSize: '12px',
          lineHeight: '18px',
          color: '#454754',
          display: 'flex',
          alignItems: 'center',
          marginLeft: 0,
          '& .MuiSvgIcon-root': {
            fontSize: '14px',
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#EFF3FF',
          borderRadius: '16px',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: '6px 16px',
          fontSize: '18px',
          fontFamily: 'Lato',
          lineHeight: '26px',
          color: '#0D2543',
          '.MuiSvgIcon-root': {
            color: '#0D2543',
          },
          '&:hover': {
            backgroundColor: '#BBD5EA',
          },
          '&:focus-visible': {
            border: '2px solid #1B74CB',
            borderRadius: '8px',
            backgroundColor: 'transparent',
          },
          '&:active': {
            backgroundColor: '#A6C5DE',
          },
          '&.Mui-disabled': {
            opacity: 0.5,
          },
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '22px',
          color: '#0D2543',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          padding: '8px 12px',
          width: '40px',
          height: '40px',
          border: '1px solid #0F2A7C',
          color: '#0F2A7C',
          '&:hover': {
            background: 'linear-gradient(90deg, rgba(145,176,218,0) 0%, rgba(145,176,218,0.5) 100%)',
            borderColor: '#0F2A7C',
          },
          '&:focus-visible': {
            border: '2px solid #1B74CB',
          },
          '&:active': {
            borderColor: '#0F2A7C',
          },
          '&.Mui-disabled': {
            opacity: 0.5,
            border: '1px solid #0F2A7C',
          },
        },
        sizeSmall: {
          width: 'auto',
          height: 'auto',
          padding: '2px',
          border: 'none',
          backgroundColor: 'transparent',
          '&:hover': {
            background: 'transparent',
            border: 'none',
          },
          '&:focus-visible': {
            border: 'none',
            outline: '2px solid #1B74CB',
            borderRadius: '4px',
          },
          '&:active': {
            border: 'none',
          },
          '&.Mui-disabled': {
            border: 'none',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        variant: 'contained',
        color: 'primary',
      },
      styleOverrides: {
        root: {
          borderRadius: '100px',
          padding: '8px 22px',
          textTransform: 'none' as const,
          fontWeight: 700,
          fontSize: '15px',
          lineHeight: '24px',
          letterSpacing: '0.01em',
        },
        containedPrimary: {
          background: 'linear-gradient(90deg, #FF9900 0%, #FF671F 100%)',
          color: '#0D2543',
          '&:hover': {
            background: 'linear-gradient(90deg, #FF671F 0%, #FF9900 100%)',
            borderColor: '#FFC300',
          },
          '&:focus-visible': {
            background: '#FF671F',
            outline: '2px solid #1B74CB',
          },
          '&:active': {
            background: '#FF671F',
          },
          '&.Mui-disabled': {
            background: '#838795',
            color: '#FFFFFF',
          },
        },
        outlinedPrimary: {
          borderColor: '#FF671F',
          color: '#CA4F16',
          '&:hover': {
            background: 'rgba(255, 103, 31, 0.08)',
            borderColor: '#CA4F16',
          },
          '&:focus-visible': {
            outline: '2px solid #1B74CB',
            border: '1px solid #FF671F',
          },
          '&:active': {
            borderColor: '#FF671F',
          },
          '&.Mui-disabled': {
            background: '#838795',
            color: '#FFFFFF',
            border: 'none',
          },
        },
        outlinedSecondary: {
          borderColor: '#B89600',
          color: '#806D0F',
          '&:hover': {
            background: 'rgba(255, 211, 0, 0.1)',
            borderColor: '#806D0F',
          },
          '&:focus-visible': {
            outline: '2px solid #1B74CB',
            border: '1px solid #B89600',
          },
          '&:active': {
            borderColor: '#B89600',
          },
          '&.Mui-disabled': {
            background: '#838795',
            color: '#FFFFFF',
            border: 'none',
          },
        },
        containedTertiary: {
          backgroundColor: 'transparent',
          color: '#0F2A7C',
          '&:hover': {
            backgroundColor: 'rgba(15, 42, 124, 0.08)',
          },
          '&:focus-visible': {
            outline: '2px solid #1B74CB',
          },
          '&:active': {
            backgroundColor: 'rgba(15, 42, 124, 0.12)',
          },
          '&.Mui-disabled': {
            background: '#838795',
            color: '#FFFFFF',
          },
        },
        outlinedTertiary: {
          borderColor: '#0F2A7C',
          color: '#0F2A7C',
          '&:hover': {
            backgroundColor: 'rgba(15, 42, 124, 0.08)',
            borderColor: '#0F2A7C',
          },
          '&:focus-visible': {
            outline: '2px solid #1B74CB',
            border: '1px solid #0F2A7C',
          },
          '&:active': {
            backgroundColor: 'rgba(15, 42, 124, 0.12)',
          },
          '&.Mui-disabled': {
            background: '#838795',
            color: '#FFFFFF',
            border: 'none',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: 'Lato',
          fontWeight: 700,
          fontSize: '16px',
          lineHeight: '24px',
          letterSpacing: '0.01em',
          color: '#0F2A7C',
          textDecoration: 'none',
          '&:hover': {
            color: '#CA4F16',
            textDecoration: 'none',
          },
          '&:focus-visible': {
            outline: '2px solid #1B74CB',
            borderRadius: '4px',
          },
          '&.Mui-disabled': {
            opacity: 0.5,
            color: '#0F2A7C',
          },
          '& .MuiSvgIcon-root': {
            fontSize: 'inherit',
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: '4px 8px',
          borderRadius: '8px',
          gap: '12px',
          fontFamily: 'Lato',
          fontSize: '16px',
          lineHeight: '24px',
          letterSpacing: '0.01em',
          color: '#0D2543',
          '&:hover': { backgroundColor: '#F5F6F8' },
          '&:active': { backgroundColor: '#EBECF2' },
          '&:focus-visible': { outline: '2px solid #1B74CB' },
          '&.Mui-disabled': { opacity: 0.5 },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 40,
          height: 40,
          fontFamily: 'Montserrat',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '22px',
          backgroundColor: '#D3D5DC',
          color: '#0D2543',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#0D2543',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: '10px 16px',
          fontFamily: 'Lato',
          fontWeight: 400,
          fontSize: '15px',
          lineHeight: '24px',
          letterSpacing: '0.01em',
          textTransform: 'none' as const,
          color: '#0D2543',
          borderRadius: 0,
          minHeight: '44px',
          '&:hover': {
            fontWeight: 700,
          },
          '&:focus-visible': {
            border: '2px solid #1B74CB',
            borderRadius: '8px',
          },
          '&.Mui-selected': {
            fontWeight: 700,
            color: '#0D2543',
          },
          '&.Mui-disabled': {
            opacity: 0.5,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '8px 8px 8px 16px',
        },
        standardError: {
          backgroundColor: '#FFCFDF',
          border: '1px solid #FA7AA5',
        },
        standardSuccess: {
          backgroundColor: '#CCFBF1',
          border: '1px solid #11A191',
        },
        standardWarning: {
          backgroundColor: '#FFF5BD',
        },
        standardInfo: {
          backgroundColor: '#EBF3F9',
          border: '1px solid #94C4EB',
        },
      },
    },
  },
};
