import { tokens } from '@availity/design-tokens';

const important = (style: string) => `${style} !important`;

const containedButtonStyles = (color: string) => ({
  backgroundColor: tokens[`color${color}Main` as keyof typeof tokens],
  color: tokens[`color${color}Contrast` as keyof typeof tokens],
  '&:hover': {
    backgroundColor: tokens[`color${color}Dark` as keyof typeof tokens],
    boxShadow: 'none',
  },
  '&:focus': {
    backgroundColor: tokens[`color${color}Dark` as keyof typeof tokens],
    outline: '2px solid white',
    boxShadow: `0 0 0px 4px ${tokens[`color${color}Dark` as keyof typeof tokens]}`,
  },
  '&:active': {
    backgroundColor: tokens[`color${color}Main` as keyof typeof tokens],
  },
});

const outlinedButtonStyles = (color: string) => ({
  '&:hover': {
    backgroundColor: `${tokens[`color${color}Main` as keyof typeof tokens]}21`,
  },
  '&:focus': {
    outline: '2px solid white',
    boxShadow: `0 0 0px 4px ${tokens[`color${color}Main` as keyof typeof tokens]}`,
    backgroundColor: `${tokens[`color${color}Main` as keyof typeof tokens]}21`,
  },
  '&:active': {
    backgroundColor: `${tokens[`color${color}Main` as keyof typeof tokens]}42`,
  },
});

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
      error: tokens.colorErrorMain,
      hint: 'rgba(0, 0, 0, 0.38)',
      divider: 'rgba(0, 0, 0, 0.12)',
      success: tokens.colorSuccessMain,
      info: tokens.colorTextPrimary,
      link: tokens.colorTextPrimary,
      inverse: tokens.colorCommonWhite,
      inverseSecondary: '#ffffff24',
    },
    border: {
      primary: tokens.colorPrimaryMain,
      secondary: tokens.colorGrey400,
      error: tokens.colorErrorMain,
      disabled: tokens.colorGrey300,
      decorative: tokens.colorGrey200,
      input: tokens.colorGrey400,
      inputHover: tokens.colorGrey600,
      inputFocus: tokens.colorPrimaryMain,
      inverse: tokens.colorCommonWhite,
      inverseSecondary: '#ffffff24',
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
      lineHeight: tokens.lineHeightsH6,
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
      lineHeight: tokens.lineHeightsSubtitle2,
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
        standardSuccess: {
          backgroundColor: tokens.colorGreen100,
        },
        standardError: {
          backgroundColor: tokens.colorRed50,
        },
        standardWarning: {
          backgroundColor: tokens.colorYellow50,
        },
        standardInfo: {
          backgroundColor: tokens.colorBlue50,
        },
        action: {
          margin: '-3px -3px -3px auto',
          padding: '0 0 0 8px',
        },
        icon: ({ ownerState }: { ownerState: any }) => ({
          ...(ownerState.severity === 'success' && {
            color: important(tokens.colorGreen600),
          }),
          opacity: 1,
          padding: '4px',
          margin: 0,
          fontSize: tokens.fontSizesBody1,
        }),
        message: {
          color: tokens.colorTextPrimary,
          padding: 0,
        },
        root: {
          border: 'none',
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
        message: {
          fontSize: tokens.fontSizesBody1,
          lineHeight: tokens.lineHeightsBody1,
          padding: '8px',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: tokens.colorGrey300,
          color: tokens.colorTextSecondary,
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          '.MuiButtonBase-root': {
            backgroundColor: 'transparent',
          },
          '.breadcrumbs__collapsed-icon': {
            color: tokens.colorPrimaryMain,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
        disableElevation: true,
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          boxShadow: 'none',
          fontWeight: tokens.fontWeightsBold,
          textTransform: 'none',
        },
        containedPrimary: { ...containedButtonStyles('Primary') },
        containedSecondary: { ...containedButtonStyles('Secondary') },
        containedTertiary: {
          ...containedButtonStyles('Tertiary'),
          '&:focus': {
            backgroundColor: tokens.colorTertiaryDark,
            outline: '2px solid white',
            boxShadow: `0 0 0px 4px ${tokens.colorSecondaryDark}`,
          },
        },
        containedSuccess: { ...containedButtonStyles('Success') },
        containedWarning: { ...containedButtonStyles('Warning') },
        containedError: { ...containedButtonStyles('Error') },
        outlinedPrimary: { ...outlinedButtonStyles('Primary') },
        outlinedSecondary: { ...outlinedButtonStyles('Secondary') },
        outlinedTertiary: {
          color: tokens.colorSecondaryMain,
          ...outlinedButtonStyles('Secondary'),
        }, // intended
        outlinedSuccess: { ...outlinedButtonStyles('Success') },
        outlinedWarning: { ...outlinedButtonStyles('Warning') },
        outlinedError: { ...outlinedButtonStyles('Error') },
      },
    },
    MuiCard: {
      defaultProps: {
        variant: 'elevation',
        elevation: 1,
      },
      styleOverrides: {
        root: {
          backgroundColor: tokens.colorBackgroundPaper,
          maxWidth: '345px',
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '16px',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          fontSize: tokens.typographyBody2FontSize,
          fontWeight: tokens.typographyBody2FontWeight,
          fontFamily: tokens.typographyBody2FontFamily,
          letterSpacing: tokens.typographyBody2LetterSpacing,
          color: tokens.colorTextPrimary,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.colorBackgroundCanvas,
          color: tokens.colorTextPrimary,
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        maxHeight: '100px',
      },
    },
    MuiChip: {
      defaultProps: {
        color: 'default',
      },
      styleOverrides: {
        root: {
          height: 'auto',
          // Bug with state styles being overwritten when not defined in root https://github.com/mui/material-ui/issues/29703#issuecomment-1548356589
          '&.MuiChip-deletable': {
            '&:hover': {
              backgroundColor: tokens.colorActionFocus,
              boxShadow: 'none',
              '.MuiChip-deleteIcon': {
                color: tokens.colorSecondaryLight,
              },
            },
            '&.Mui-focusVisible': {
              backgroundColor: tokens.colorActionFocus,
              outline: '2px solid white',
              boxShadow: `0 0 0px 4px ${tokens.colorSecondaryLight}`,
              '.MuiChip-deleteIcon': {
                color: tokens.colorSecondaryLight,
              },
            },
          },
        },
        avatar: {
          margin: '0',
          height: '1.125rem',
          width: '1.125rem',
        },
        avatarColorDefault: {
          backgroundColor: tokens.colorGrey300,
        },
        deleteIcon: {
          fontSize: '1rem',
          margin: '0',
          transition: 'color 300ms',
        },
        label: {
          fontSize: 'inherit',
          padding: '0px 6px',
        },
        colorDefault: {
          backgroundColor: tokens.colorGrey100,
        },
        sizeSmall: {
          fontWeight: tokens.fontWeightsBold,
          fontSize: '.75rem',
          verticalAlign: 'text-bottom',
          borderRadius: '50px',
        },
        sizeMedium: {
          fontWeight: tokens.fontWeightsRegular,
          padding: '3px 4px',
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: tokens.colorTertiaryDark,
          },
          '&:focus': {
            backgroundColor: tokens.colorTertiaryDark,
            outline: `2px solid ${tokens.colorCommonWhite}`,
            boxShadow: `0 0 0px 4px ${tokens.colorSecondaryLight}`,
          },
        },
        colorDefault: {
          color: tokens.colorTextPrimary,
        },
      },
    },
    MuiFormLabel: {
      defaultProps: {
        shrink: false,
      },
      styleOverrides: {
        root: {
          // move required asterisk before text
          display: 'flex',
          flexDirection: 'row-reverse',
          '&.Mui-error': {
            color: tokens.colorTextError,
          },
          '&.Mui-disabled': {
            color: tokens.colorTextDisabled,
          },
        },
        asterisk: {
          color: tokens.colorErrorMain,
          marginRight: '.25rem',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
      styleOverrides: {
        root: {
          fontWeight: tokens.fontWeightsBold,
          '&:active': {
            color: tokens.colorTextPrimary,
          },
          '&:visited': {
            color: tokens.colorIndigo600,
          },
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
      defaultProps: {
        fontSize: 'inherit',
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'unset',
          fontSize: tokens.typographyBody1FontSize,
          fontWeight: tokens.typographyBody1FontWeight,
          fontFamily: tokens.typographyBody1FontFamily,
          letterSpacing: tokens.typographyBody1LetterSpacing,
          color: tokens.colorTextPrimary,
          padding: '11px 8px',
          '&:hover': {
            backgroundColor: tokens.colorBackgroundBorder,
          },
          '&:Mui-selected': {
            color: tokens.colorPrimaryMain,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.colorBackgroundCanvas,
          height: '3rem',
        },
      },
    },
    MuiToggleButton: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          textTransform: 'unset',
          backgroundColor: tokens.colorTertiaryMain,
          fontWeight: tokens.fontWeightsBold,
          '&.Mui-selected': {
            backgroundColor: tokens.colorTertiaryDarker,
            borderColor: tokens.colorTertiaryDarker,
            color: tokens.colorTextInverse,
            '&:hover': {
              backgroundColor: tokens.colorTertiaryDark,
              borderColor: tokens.colorTertiaryMain,
              color: tokens.colorTextInverse,
            },
          },
          '&:focus': {
            boxShadow: `0 0 0px 2px ${tokens.colorTertiaryDark}50`,
          },
          '&:hover': {
            backgroundColor: tokens.colorTertiaryDark,
            borderColor: tokens.colorTertiaryMain,
            color: tokens.colorTextInverse,
          },
          '&.MuiToggleButton-sizeSmall': {
            padding: '8px 16px',
          },
          '&.MuiToggleButton-sizeMedium': {
            padding: '12px 16px',
          },
          '&.MuiToggleButton-sizeLarge': {
            padding: '16px',
          },
          '&.Mui-disabled': {
            backgroundColor: tokens.colorActionDisabledBg,
            borderColor: tokens.colorActionDisabledBg,
            color: tokens.colorActionDisabled,
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
      styleOverrides: {
        tooltip: {
          backgroundColor: tokens.colorGrey400,
          fontSize: '.785rem',
          fontStyle: 'normal',
          padding: '2px 8px',
        },
      },
    },
  },
};
