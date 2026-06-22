import { docsLightTheme } from './docs-light-theme';

export const docsDarkTheme = {
  ...docsLightTheme,
  palette: {
    ...docsLightTheme.palette,
    mode: 'dark' as const,
    text: {
      primary: '#EFF3FF',
      secondary: '#BBD5EA',
      disabled: '#5E616E',
    },
    background: {
      default: '#000C30',
      paper: '#061645',
    },
    divider: '#0F2A7C',
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          border: '1px solid #0F2A7C',
          backgroundColor: '#061645',
          overflow: 'hidden',
          '&:before': { display: 'none' },
          '&.Mui-expanded': { margin: 0 },
          '&.MuiAccordion-avFilled': {
            border: '1px solid #0F2A7C',
            backgroundColor: '#061645',
          },
          '&.MuiAccordion-avFilled > .MuiAccordion-heading .MuiAccordionSummary-root': {
            backgroundColor: '#0B1D4A',
          },
          '&.MuiAccordion-avFilled > .MuiAccordion-heading .MuiAccordionSummary-root:hover': {
            backgroundColor: '#0E2558',
          },
          '&.MuiAccordion-avFilled > .MuiAccordion-heading .MuiAccordionSummary-root:active': {
            backgroundColor: '#071A3E',
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
          color: '#FFFFFF',
          borderRadius: 'inherit',
          '&:hover': { backgroundColor: '#0B2A60' },
          '&:focus-visible': { boxShadow: 'inset 0 0 0 2px #369CFF' },
          '&:active': { backgroundColor: '#05204F' },
        },
        expandIconWrapper: { color: '#519EE6' },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '0 16px 16px 56px',
          fontFamily: 'Lato',
          fontSize: '18px',
          lineHeight: '26px',
          color: '#FFFFFF',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
          padding: '24px',
          backgroundColor: '#061645',
          border: '1px solid #0F2A7C',
          backgroundImage: 'none',
        },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#0B2A60',
          },
          '&:active': {
            backgroundColor: '#000C30',
          },
          '&:focus-visible': {
            border: '2px solid #369CFF',
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
          backgroundColor: '#052E2A',
          border: '1px solid #0C7368',
          color: '#CCFBF1',
        },
        colorInfo: {
          backgroundColor: '#061632',
          border: '1px solid #103E8E',
          color: '#EBF3F9',
        },
        colorWarning: {
          backgroundColor: '#2E2705',
          border: '1px solid #534609',
          color: '#FFF5BD',
        },
        colorError: {
          backgroundColor: '#381520',
          border: '1px solid #84153A',
          color: '#FFB6CE',
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
          backgroundColor: '#151823',
          border: '1px solid #363C4D',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#191F31',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: 'Lato',
          fontSize: '16px',
          lineHeight: '26px',
          borderColor: '#363C4D',
          color: 'rgba(239, 243, 255, 0.9)',
          backgroundColor: '#151823',
        },
        head: {
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '20px',
          color: '#FFFFFF',
          backgroundColor: '#191F31',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          padding: '8px 16px',
          height: '40px',
          backgroundColor: 'rgba(0, 12, 48, 0.9)',
          '& fieldset': {
            borderColor: '#1552BC',
          },
          '&:hover fieldset': {
            borderColor: '#519EE6',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#369CFF',
            borderWidth: '2px',
          },
          '&.Mui-disabled fieldset': {
            borderColor: '#1552BC',
          },
          '&.Mui-disabled': {
            opacity: 0.5,
          },
        },
        input: {
          padding: 0,
          fontSize: '15px',
          fontFamily: 'Lato',
          lineHeight: '24px',
          letterSpacing: '0.01em',
          color: '#FFFFFF',
          '&::placeholder': {
            color: '#FFFFFF',
            opacity: 0.8,
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#000C30',
          border: '1px solid #0F2A7C',
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
          color: '#FFFFFF',
          backgroundColor: '#000C30',
          '.MuiSvgIcon-root': {
            color: '#91B0DA',
          },
          '&:hover': {
            backgroundColor: '#0B2A60',
          },
          '&:focus-visible': {
            border: '1px solid #369CFF',
            borderRadius: '8px',
            backgroundColor: '#000C30',
          },
          '&:active': {
            backgroundColor: '#061645',
          },
          '&.Mui-disabled': {
            opacity: 0.5,
            backgroundColor: '#061645',
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
          color: '#91B0DA',
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
          backgroundColor: '#061645',
          border: '1px solid #519EE6',
          color: '#519EE6',
          '&:hover': {
            background: 'linear-gradient(90deg, rgba(145,176,218,0) 0%, rgba(145,176,218,0.3) 100%)',
            borderColor: '#FFFFFF',
            color: '#FFFFFF',
          },
          '&:focus-visible': {
            border: '2px solid #519EE6',
          },
          '&:active': {
            backgroundColor: '#061645',
            borderColor: '#519EE6',
            color: '#FFFFFF',
          },
          '&.Mui-disabled': {
            opacity: 0.5,
            border: '1px solid #519EE6',
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
            outline: '2px solid #369CFF',
          },
          '&:active': {
            background: '#FF671F',
          },
          '&.Mui-disabled': {
            background: '#838795',
            color: '#FFFFFF',
          },
        },
        outlinedSecondary: {
          borderColor: '#91B0DA',
          color: 'rgba(255, 255, 255, 0.9)',
          '&:hover': {
            background: 'linear-gradient(90deg, rgba(145,176,218,0) 0%, rgba(145,176,218,0.3) 100%)',
            borderColor: '#FFFFFF',
            color: '#FFFFFF',
          },
          '&:focus-visible': {
            outline: '2px solid #369CFF',
            border: '1px solid #FFFFFF',
          },
          '&:active': {
            borderColor: '#91B0DA',
          },
          '&.Mui-disabled': {
            background: '#838795',
            color: '#EEEFF2',
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
          color: '#FFFFFF',
          textDecoration: 'none',
          '&:hover': {
            color: '#FFD300',
            textDecoration: 'none',
          },
          '&:focus-visible': {
            outline: '2px solid #369CFF',
            borderRadius: '4px',
          },
          '&.Mui-disabled': {
            opacity: 0.5,
            color: '#FFFFFF',
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
          color: 'rgba(239, 243, 255, 0.9)',
          '&:hover': { backgroundColor: '#1F273C' },
          '&:active': { backgroundColor: '#191F31' },
          '&:focus-visible': { outline: '2px solid #369CFF' },
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
          backgroundColor: '#0F2A7C',
          color: '#FFFFFF',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#FFFFFF',
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
          color: 'rgba(239, 243, 255, 0.9)',
          borderRadius: 0,
          minHeight: '44px',
          '&:hover': {
            fontWeight: 700,
            color: '#FFFFFF',
          },
          '&:focus-visible': {
            border: '2px solid #369CFF',
            borderRadius: '8px',
          },
          '&.Mui-selected': {
            fontWeight: 700,
            color: 'rgba(239, 243, 255, 0.9)',
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
          backgroundColor: '#381520',
          border: '1px solid #84153A',
        },
        standardSuccess: {
          backgroundColor: '#052E2A',
          border: '1px solid #0C7368',
        },
        standardWarning: {
          backgroundColor: '#2E2705',
          border: '1px solid #534609',
        },
        standardInfo: {
          backgroundColor: '#061632',
          border: '1px solid #103E8E',
        },
      },
    },
  },
};
