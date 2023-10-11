import { legacytokens as tokens } from '@availity/design-tokens';

const important = (style: string) => `${style} !important`;

const containedButtonStyles = (color: string) => ({
  backgroundColor: tokens[`color${color}Main` as keyof typeof tokens],
  color: tokens[`color${color}Contrast` as keyof typeof tokens],
  '&:hover': {
    backgroundColor: tokens[`color${color}Dark` as keyof typeof tokens],
    boxShadow: 'none',
    color: color === 'Warning' && tokens.colorTextInverse,
  },
  '&:focus': {
    backgroundColor: tokens[`color${color}Dark` as keyof typeof tokens],
    outline: '2px solid white',
    boxShadow: `0 0 0px 4px ${tokens[`color${color}Dark` as keyof typeof tokens]}`,
    color: color === 'Warning' && tokens.colorTextInverse,
  },
  '&:active': {
    backgroundColor: tokens[`color${color}Main` as keyof typeof tokens],
  },
  '&.Mui-disabled': {
    opacity: 0.65,
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

export const legacyTheme = {
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
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
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
      fontSize: tokens.fontSizesBody1,
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
          backgroundColor: tokens.colorSuccessMain,
          color: tokens.colorSuccessContrast,
        },
        standardError: {
          backgroundColor: tokens.colorErrorMain,
          color: tokens.colorErrorContrast,
        },
        standardWarning: {
          backgroundColor: tokens.colorWarningMain,
          color: tokens.colorWarningContrast,
          '.MuiAlert-icon .MuiSvgIcon-root': {
            fill: tokens.colorWarningContrast,
          },
        },
        standardInfo: {
          backgroundColor: tokens.colorPrimaryMain,
          color: tokens.colorPrimaryContrast,
        },
        action: {
          margin: '-3px -3px -3px auto',
          padding: '0 0 0 8px',
          alignItems: 'center',
          color: 'inherit',
        },
        icon: {
          padding: '0',
          alignItems: 'center',
          '.MuiSvgIcon-root': {
            fill: tokens.colorPrimaryContrast,
            color: tokens.colorPrimaryContrast,
          },
        },
        message: {
          color: 'inherit',
          padding: 0,
        },
        root: {
          border: 'none',
          fontSize: tokens.fontSizesBody1,
          lineHeight: tokens.lineHeightsBody1,
          padding: '0.75rem 1.25rem',
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          margin: 0,
          fontWeight: tokens.fontWeightsBold,
          color: 'inherit',
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
        separator: {
          '.MuiSvgIcon-root': {
            width: '1rem',
            height: '1rem',
            marginX: '.5rem',
            fontSize: '1rem',
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
        size: 'medium',
      },
      styleOverrides: {
        root: {
          lineHeight: 1.5,
          boxShadow: 'none',
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
        sizeSmall: {
          padding: '0.25rem 0.5rem',
          fontSize: '.875rem',
          borderRadius: '0.2rem',
        },
        sizeMedium: {
          padding: '0.375rem 0.75rem',
          fontSize: '1rem',
          borderRadius: '0.25rem',
        },
        sizeLarge: {
          padding: '0.5rem 1rem',
          fontSize: '1.25rem',
          borderRadius: '0.3rem',
        },
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        color: 'secondary',
        variant: 'contained',
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        grouped: {
          '&:focus': {
            zIndex: '1',
          },
        },
        groupedContained: { borderColor: important(tokens.colorPrimaryContrast) },
        groupedContainedPrimary: { '&:focus:hover': { boxShadow: `0 0 0px 4px ${tokens.colorPrimaryDark}` } },
        groupedContainedSecondary: { '&:focus:hover': { boxShadow: `0 0 0px 4px ${tokens.colorSecondaryDark}` } },
        groupedContainedTertiary: {
          borderColor: important(tokens.colorSecondaryMain),
          '&:focus:hover': {
            boxShadow: `0 0 0px 4px ${tokens.colorSecondaryDark}`,
          },
        },
      },
    },
    MuiCard: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          backgroundColor: tokens.colorBackgroundPaper,
          borderColor: tokens.colorGrey100,
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '1.25rem',
          backgroundColor: tokens.colorGrey100,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          fontSize: tokens.typographyBody1FontSize,
          fontWeight: tokens.typographyBody1FontWeight,
          fontFamily: tokens.typographyBody1FontFamily,
          letterSpacing: tokens.typographyBody1LetterSpacing,
          color: tokens.colorTextPrimary,
          padding: '1.25rem',
        },
      },
    },
    MuiCardFooter: {
      styleOverrides: {
        root: {
          padding: '1.25rem',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.colorGrey100,
          color: tokens.colorTextPrimary,
          padding: '1.25rem',
          lineHeight: '24px',
          '.MuiCardHeader-title, .MuiCardHeader-subheader': {
            fontWeight: tokens.fontWeightsRegular,
          },
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        padding: '1.25rem',
      },
    },
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': {
            '.MuiSvgIcon-root': {
              outline: `2px solid ${tokens.borderInputFocus}`,
              borderRadius: '3px',
            },
          },
          '&.MuiCheckbox-colorPrimary': {
            color: tokens.colorGrey500,
            '&:hover': {
              color: tokens.colorGrey900,
            },
            '&.Mui-checked': {
              color: tokens.colorPrimaryMain,
              '&:hover': {
                color: tokens.colorPrimaryDark,
              },
            },
            '&.Mui-disabled': {
              color: tokens.colorGrey300,
            },
          },
          '&.MuiCheckbox-colorError': {
            color: tokens.colorGrey500,
            '&:hover': {
              color: tokens.colorGrey900,
            },
            '&.Mui-checked': {
              color: tokens.colorErrorMain,
              '&:hover': {
                color: tokens.colorErrorDark,
              },
            },
            '&.Mui-disabled': {
              color: tokens.colorGrey300,
            },
          },
          '.MuiSvgIcon-root': {
            fontSize: '1.25rem',
          },
        },
      },
    },
    MuiChip: {
      defaultProps: {
        color: 'default',
      },
      styleOverrides: {
        root: {
          height: 'auto',
          fontSize: '.75rem',
          lineHeight: '.75rem',
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
          margin: '0 .2rem 0 -.2rem',
          height: '1rem',
          width: '1rem',
        },
        avatarColorDefault: {
          backgroundColor: tokens.colorGrey300,
        },
        deleteIcon: {
          fontSize: '1rem',
          margin: '0 -.2rem 0 .2rem',
          transition: 'color 300ms',
        },
        label: {
          fontSize: 'inherit',
          padding: '0px',
        },
        colorDefault: {
          backgroundColor: tokens.colorGrey100,
        },
        sizeSmall: {
          fontWeight: tokens.fontWeightsBold,
          verticalAlign: 'text-bottom',
          borderRadius: '.25rem',
          padding: '0.25rem 0.4rem',
        },
        sizeMedium: {
          fontWeight: tokens.fontWeightsRegular,
          borderRadius: '10rem',
          padding: '0.25rem 0.6rem',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          // move required asterisk before text
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'flex-end',
          '&.Mui-error': {
            color: tokens.colorTextError,
          },
          '&.Mui-disabled': {
            color: tokens.colorTextDisabled,
          },
        },
        asterisk: {
          color: tokens.colorTextError,
          fontWeight: tokens.fontWeightsBold,
          marginRight: '.25rem',
          fontSize: '1.3rem',
          lineHeight: '100%',
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
        color: 'secondary',
      },
      styleOverrides: {
        root: {
          // based on reactstrap close buttons for alert/modal
          borderRadius: '3px',
          opacity: 0.6,
          '&:hover, &:focus': {
            opacity: 1,
          },
          '&:focus': {
            outline: `2px solid ${tokens.colorCommonWhite}`,
            boxShadow: `0 0 0px 4px ${tokens.colorPrimaryMain}`,
          },
        },
        colorSecondary: {
          border: tokens.colorSecondaryLight,
        },
        colorPrimary: {
          border: tokens.colorPrimaryMain,
        },
        sizeSmall: {
          padding: '0.25rem 0.5rem',
          fontSize: '.875rem',
          borderRadius: '0.2rem',
        },
        sizeMedium: {
          padding: '0.375rem 0.75rem',
          fontSize: '1rem',
          borderRadius: '0.25rem',
        },
        sizeLarge: {
          padding: '0.5rem 1rem',
          fontSize: '1.25rem',
          borderRadius: '0.3rem',
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: {
          position: 'relative',
          display: 'flex',
          transform: 'none',
          transition: 'none',
          animation: 'none',
        },
      },
    },
    MuiInputBase: {
      StyleOverrides: {
        root: {
          'label + &': {
            marginTop: '.5rem',
          },
        },
        input: {
          borderRadius: 4,
          position: 'relative',
          border: '1px solid',
          borderColor: tokens.borderInput,
          fontSize: 16,
          width: 'auto',
          padding: '10px 12px',
          '&:focus': {
            boxShadow: `0 0 0px 4px ${tokens.borderInputFocus}`,
          },
          '&.Mui-error': {
            borderColor: tokens.borderError,
            '&:focus': {
              boxShadow: `0 0 0px 4px ${tokens.borderInputFocus}`,
            },
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
      styleOverrides: {
        root: {
          color: tokens.colorTextLink,
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
    MuiMenu: {
      defaultProps: {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiPagination: {
      defaultProps: {
        color: 'primary',
        shape: 'rounded',
        size: 'small',
      },
    },
    MuiPaginationItem: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: '0',
          height: 'auto',
          color: tokens.colorTextLink,
          textDecoration: 'underline',
          '&:focus': {
            boxShadow: `0 0 0px 2px ${tokens.colorPrimaryMain}`,
          },
          '&.Mui-selected': {
            '&:focus': {
              outline: '1px solid white',
            },
            fontWeight: tokens.fontWeightsBold,
            backgroundColor: tokens.colorPrimaryMain,
            color: tokens.colorCommonWhite,
            textDecoration: 'none',
          },
          '&.Mui-disabled': {
            color: tokens.colorTextPrimary,
            textDecoration: 'none',
          },
        },
        ellipsis: {
          backgroundColor: 'inherit',
          textDecoration: 'none',
          color: tokens.colorTextPrimary,
          border: 'none',
          margin: '0',
        },
        outlined: {
          padding: '0.5rem 0.75rem',
          lineHeight: '1.25rem',
          margin: '-1px',
          border: '1px solid #ccc',
          backgroundColor: tokens.colorBackgroundCanvas,
        },
        text: {
          padding: '0.375rem',
          margin: '0px',
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
      sizeXsmall: {
        fontSize: '.875rem',
      },
      sizeSmall: {
        fontSize: '.875rem',
      },
      sizeMedium: {
        fontSize: '1rem',
      },
      sizeLarge: {
        fontSize: '1.25rem',
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
          textTransform: 'none',
          ...containedButtonStyles('Tertiary'),
          '&:focus': {
            boxShadow: `0 0 0px 4px ${tokens.colorSecondaryMain}`,
            outline: '2px solid white',
          },
          '&.Mui-selected': {
            backgroundColor: tokens.colorPrimaryMain,
            color: tokens.colorTextInverse,
            '&:hover': {
              backgroundColor: tokens.colorPrimaryDark,
            },
            '&:focus': {
              backgroundColor: tokens.colorPrimaryDark,
              boxShadow: `0 0 0px 4px ${tokens.colorPrimaryDark}`,
            },
          },
          '.MuiSvgIcon-root': {
            fontSize: '1.125rem',
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
