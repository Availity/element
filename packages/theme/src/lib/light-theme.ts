import { tokens } from '@availity/design-tokens';

export const lightTheme = {
  mode: 'light',
  palette: {
    primary: {
      main: tokens.colorPrimaryMain,
      light: tokens.colorPrimaryLight,
      dark: tokens.colorPrimaryDark,
      darker: tokens.colorPrimaryDarker,
    },
    secondary: {
      main: tokens.colorSecondaryMain,
      light: tokens.colorSecondaryLight,
      dark: tokens.colorSecondaryDark,
      darker: tokens.colorSecondaryDarker,
    },
    tertiary: {
      main: tokens.colorTertiaryMain,
      light: tokens.colorTertiaryLight,
      dark: tokens.colorTertiaryDark,
      darker: tokens.colorTertiaryDarker,
    },
    error: {
      main: tokens.colorErrorMain,
      light: tokens.colorErrorLight,
      dark: tokens.colorErrorDark,
      darker: tokens.colorErrorDarker,
    },
    warning: {
      main: tokens.colorWarningMain,
      light: tokens.colorWarningLight,
      dark: tokens.colorWarningDark,
      darker: tokens.colorWarningDarker,
    },
    info: {
      main: tokens.colorInfoMain,
      light: tokens.colorInfoLight,
      dark: tokens.colorInfoDark,
      darker: tokens.colorInfoDarker,
    },
    success: {
      main: tokens.colorSuccessMain,
      light: tokens.colorSuccessLight,
      dark: tokens.colorSuccessDark,
      darker: tokens.colorSuccessDarker,
    },
    grey: {
      50: tokens.colorGrey50,
      100: tokens.colorGrey100,
      200: tokens.colorGrey200,
      300: tokens.colorGrey300,
      400: tokens.colorGrey400,
      500: tokens.colorGrey500,
      600: tokens.colorGrey600,
      700: tokens.colorGrey700,
      800: tokens.colorGrey800,
      900: tokens.colorGrey900,
    },
    indigo: {
      50: tokens.colorIndigo50,
      100: tokens.colorIndigo100,
      200: tokens.colorIndigo200,
      300: tokens.colorIndigo300,
      400: tokens.colorIndigo400,
      500: tokens.colorIndigo500,
      600: tokens.colorIndigo600,
      700: tokens.colorIndigo700,
      800: tokens.colorIndigo800,
      900: tokens.colorIndigo900,
    },
    purple: {
      50: tokens.colorPurple50,
      100: tokens.colorPurple100,
      200: tokens.colorPurple200,
      300: tokens.colorPurple300,
      400: tokens.colorPurple400,
      500: tokens.colorPurple500,
      600: tokens.colorPurple600,
      700: tokens.colorPurple700,
      800: tokens.colorPurple800,
      900: tokens.colorPurple900,
    },
    blue: {
      50: tokens.colorBlue50,
      100: tokens.colorBlue100,
      200: tokens.colorBlue200,
      300: tokens.colorBlue300,
      400: tokens.colorBlue400,
      500: tokens.colorBlue500,
      600: tokens.colorBlue600,
      700: tokens.colorBlue700,
      800: tokens.colorBlue800,
      900: tokens.colorBlue900,
    },
    contrastThreshold: 4.5,
    contrastText: '#fff',
    tonalOffset: 0.2,
    text: {
      primary: tokens.colorTextPrimary,
      secondary: tokens.colorTextSecondary,
      disabled: tokens.colorTextDisabled,
      hint: 'rgba(0, 0, 0, 0.38)',
      divider: 'rgba(0, 0, 0, 0.12)',
      inverse: '#fff',
      inverseSecondary: tokens.colorGrey300,
    },
    background: {
      canvas: tokens.colorBackgroundCanvas,
      paper: tokens.colorBackgroundPaper,
      header: tokens.colorBackgroundHeader,
      subnav: tokens.colorBackgroundSubnav,
      sidenav: tokens.colorBackgroundSidenav,
      accent: tokens.colorBackgroundAccent,
      border: tokens.colorBackgroundBorder,
      default: tokens.colorGrey100,
    },
    action: {
      active: tokens.colorActionActive,
      hover: tokens.colorActionHover,
      hoverOpacity: 0.04,
      selected: tokens.colorActionSelected,
      selectedOpacity: 0.08,
      disabled: tokens.colorActionDisabled,
      disabledBackground: tokens.colorActionDisabledBg,
      disabledOpacity: 0.38,
      focus: tokens.colorActionFocus,
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: tokens.fontFamiliesBase,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    d1: {
      fontSize: tokens.typographyD1FontSize,
      fontWeight: tokens.typographyD1FontWeight,
      fontFamily: tokens.typographyD1FontFamily,
      letterSpacing: tokens.typographyD1LetterSpacing,
      color: tokens.colorTextPrimary,
    },
    d2: {
      fontSize: tokens.typographyD2FontSize,
      fontWeight: tokens.typographyD2FontWeight,
      fontFamily: tokens.typographyD2FontFamily,
      letterSpacing: tokens.typographyD2LetterSpacing,
      color: tokens.colorTextPrimary,
    },
    h1: {
      fontSize: tokens.typographyH1FontSize,
      fontWeight: tokens.typographyH1FontWeight,
      fontFamily: tokens.typographyH1FontFamily,
      letterSpacing: tokens.typographyH1LetterSpacing,
      color: tokens.colorTextPrimary,
    },
    h2: {
      fontSize: tokens.typographyH2FontSize,
      fontWeight: tokens.typographyH2FontWeight,
      fontFamily: tokens.typographyH2FontFamily,
      letterSpacing: tokens.typographyH2LetterSpacing,
      color: tokens.colorTextPrimary,
    },
    h3: {
      fontSize: tokens.typographyH3FontSize,
      fontWeight: tokens.typographyH3FontWeight,
      fontFamily: tokens.typographyH3FontFamily,
      letterSpacing: tokens.typographyH3LetterSpacing,
      color: tokens.colorTextPrimary,
    },
    h4: {
      fontSize: tokens.typographyH4FontSize,
      fontWeight: tokens.typographyH4FontWeight,
      fontFamily: tokens.typographyH4FontFamily,
      letterSpacing: tokens.typographyH4LetterSpacing,
      color: tokens.colorTextPrimary,
    },
    h5: {
      fontSize: tokens.typographyH5FontSize,
      fontWeight: tokens.typographyH5FontWeight,
      fontFamily: tokens.typographyH5FontFamily,
      letterSpacing: tokens.typographyH5LetterSpacing,
      color: tokens.colorTextPrimary,
    },
    h6: {
      fontSize: tokens.typographyH6FontSize,
      fontWeight: tokens.typographyH6FontWeight,
      fontFamily: tokens.typographyH6FontFamily,
      letterSpacing: tokens.typographyH6LetterSpacing,
      color: tokens.colorTextPrimary,
    },
    subtitle1: {
      fontSize: tokens.typographySubtitle1FontSize,
      fontWeight: tokens.typographySubtitle1FontWeight,
      fontFamily: tokens.typographySubtitle1FontFamily,
      letterSpacing: tokens.typographySubtitle1LetterSpacing,
      color: tokens.colorTextPrimary,
    },
    subtitle2: {
      fontSize: tokens.typographySubtitle2FontSize,
      fontWeight: tokens.typographySubtitle2FontWeight,
      fontFamily: tokens.typographySubtitle2FontFamily,
      letterSpacing: tokens.typographySubtitle2LetterSpacing,
      color: tokens.colorTextPrimary,
    },
    body1: {
      fontSize: tokens.typographyBody1FontSize,
      fontWeight: tokens.typographyBody1FontWeight,
      fontFamily: tokens.typographyBody1FontFamily,
      letterSpacing: tokens.typographyBody1LetterSpacing,
      color: tokens.colorTextPrimary,
    },
    body2: {
      fontSize: tokens.typographyBody2FontSize,
      fontWeight: tokens.typographyBody2FontWeight,
      fontFamily: tokens.typographyBody2FontFamily,
      letterSpacing: tokens.typographyBody2LetterSpacing,
      color: tokens.colorTextPrimary,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: tokens.fontWeightsRegular,
      fontFamily: tokens.fontFamiliesBase,
      letterSpacing: 0.2,
    },
    caption: {
      fontSize: tokens.typographyCaptionFontSize,
      fontWeight: tokens.typographyCaptionFontWeight,
      fontFamily: tokens.typographyCaptionFontFamily,
      letterSpacing: tokens.typographyCaptionLetterSpacing,
      color: tokens.colorTextPrimary,
    },
    overline: {
      fontSize: tokens.typographyOverlineFontSize,
      fontWeight: tokens.typographyOverlineFontWeight,
      fontFamily: tokens.typographyOverlineFontFamily,
      letterSpacing: tokens.typographyOverlineLetterSpacing,
      color: tokens.colorTextPrimary,
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        action: {
          margin: '-3px -3px -3px auto',
          padding: '0 0 0 11px',
        },
        icon: {
          opacity: 1,
          padding: '4px',
          margin: 0,
          fontSize: tokens.fontSizesBody1,
        },
        message: {
          color: tokens.colorTextPrimary,
          padding: 0,
        },
        root: {
          fontSize: tokens.fontSizesBody1,
          lineHeight: tokens.lineHeightsBody1,
          padding: '8px',
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          margin: 0,
          fontWeight: tokens.fontWeightsBold,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          minWidth: '128px',
          textTransform: 'none',
        },
      },
      variants: [
        {
          props: { color: 'tertiary', variant: 'contained' },
          style: {
            backgroundColor: tokens.colorTertiaryMain,
            color: tokens.colorTertiaryContrast,
            '&:hover': {
              backgroundColor: tokens.colorTertiaryDark,
            },
            '&:focus': {
              backgroundColor: tokens.colorTertiaryDark,
              outline: '2px solid white',
              boxShadow: '0 0 0px 4px rgba(0,0,0,1)',
            },
            '&:active': {
              backgroundColor: tokens.colorTertiaryMain,
            },
          },
        },
        {
          props: { color: 'secondary' },
          style: {
            backgroundColor: tokens.colorSecondaryMain,
            color: tokens.colorSecondaryContrast,
            '&:hover': {
              backgroundColor: tokens.colorSecondaryDark,
            },
            '&:focus': {
              backgroundColor: tokens.colorSecondaryDarker,
              outline: '2px solid white',
              boxShadow: '0 0 0px 4px rgba(0,0,0,1)',
            },
            '&:active': {
              backgroundColor: tokens.colorSecondaryMain,
            },
          },
        },
        {
          props: { color: 'primary' },
          style: {
            backgroundColor: tokens.colorPrimaryMain,
            color: tokens.colorPrimaryContrast,
            '&:hover': {
              backgroundColor: tokens.colorPrimaryDark,
            },
            '&:focus': {
              backgroundColor: tokens.colorPrimaryMain,
              outline: '2px solid white',
              boxShadow: '0 0 0px 4px rgba(21,82,188,1)',
            },
            '&:active': {
              backgroundColor: tokens.colorPrimaryLight,
            },
          },
        },
        {
          props: { color: 'error', variant: 'contained' },
          style: {
            backgroundColor: tokens.colorErrorMain,
            color: tokens.colorErrorContrast,
            '&:hover': {
              backgroundColor: tokens.colorErrorDark,
            },
            '&:focus': {
              backgroundColor: tokens.colorErrorMain,
              outline: '2px solid white',
              boxShadow: '0 0 0px 4px rgba(21,82,188,1)',
            },
            '&:active': {
              backgroundColor: tokens.colorErrorLight,
            },
          },
        },
      ],
    },
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          position: 'relative',
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          borderColor: tokens.colorBackgroundBorder,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: 'inherit',
        },
      },
    },
  },
};
