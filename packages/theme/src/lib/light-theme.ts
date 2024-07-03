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

const typographyStyles = (type: string) => ({
  fontSize: `${tokens[`typography${type}FontSize` as keyof typeof tokens]}`,
  fontWeight: `${tokens[`typography${type}FontWeight` as keyof typeof tokens]}`,
  fontFamily: `${tokens[`typography${type}FontFamily` as keyof typeof tokens]}`,
  letterSpacing: `${tokens[`typography${type}LetterSpacing` as keyof typeof tokens]}`,
  lineHeight: `${tokens[`lineHeights${type}` as keyof typeof tokens]}`,
});

const statusAccentStyles = {
  borderLeft: `10px solid ${tokens.borderDecorative}`,
  '&:has(.MuiChip-colorSuccess)': {
    borderLeftColor: tokens.colorSuccessMain
  },
  '&:has(.MuiChip-colorError)': {
    borderLeftColor: tokens.colorErrorMain
  },
  '&:has(.MuiChip-colorWarning)': {
    borderLeftColor: tokens.colorWarningMain
  },
  '&:has(.MuiChip-colorInfo)': {
    borderLeftColor: tokens.colorInfoMain
  },
  '&:has(.MuiChip-colorDefault)': {
    borderLeftColor: tokens.colorBackgroundAccent
  },
  '&:has(.MuiChip-colorPrimary)': {
    borderLeftColor: tokens.colorPrimaryMain
  },
  '&:has(.MuiChip-colorSecondary)': {
    borderLeftColor: tokens.colorSecondaryMain
  }
};

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
      error: tokens.colorTextError,
      hint: 'rgba(0, 0, 0, 0.38)',
      divider: 'rgba(0, 0, 0, 0.12)',
      success: tokens.colorTextSuccess,
      info: tokens.colorTextInfo,
      link: tokens.colorTextLink,
      inverse: tokens.colorTextInverse,
      inverseSecondary: tokens.colorTextInverseSecondary,
    },
    border: {
      primary: tokens.borderPrimary,
      secondary: tokens.borderSecondary,
      error: tokens.borderError,
      disabled: tokens.borderDisabled,
      decorative: tokens.borderDecorative,
      input: tokens.borderInput,
      inputHover: tokens.borderInputHover,
      inputFocus: tokens.borderInputFocus,
      inverse: tokens.borderInverse,
      inverseSecondary: tokens.borderInverseSecondary,
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
      ...typographyStyles('D1'),
      color: tokens.colorTextPrimary,
    },
    d2: {
      ...typographyStyles('D2'),
      color: tokens.colorTextPrimary,
    },
    h1: {
      ...typographyStyles('H1'),
      color: tokens.colorTextPrimary,
    },
    h2: {
      ...typographyStyles('H2'),
      color: tokens.colorTextPrimary,
    },
    h3: {
      ...typographyStyles('H3'),
      color: tokens.colorTextPrimary,
    },
    h4: {
      ...typographyStyles('H4'),
      color: tokens.colorTextPrimary,
    },
    h5: {
      ...typographyStyles('H5'),
      color: tokens.colorTextPrimary,
    },
    h6: {
      ...typographyStyles('H6'),
      color: tokens.colorTextPrimary,
    },
    subtitle1: {
      ...typographyStyles('Subtitle1'),
      color: tokens.colorTextPrimary,
    },
    subtitle2: {
      ...typographyStyles('Subtitle2'),
      color: tokens.colorTextPrimary,
    },
    body1: {
      ...typographyStyles('Body1'),
      color: tokens.colorTextPrimary,
    },
    body2: {
      ...typographyStyles('Body2'),
      color: tokens.colorTextPrimary,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: tokens.fontWeightsRegular,
      fontFamily: tokens.fontFamiliesBase,
      letterSpacing: 0.2,
    },
    caption: {
      ...typographyStyles('Caption'),
      color: tokens.colorTextPrimary,
    },
    overline: {
      ...typographyStyles('Overline'),
      color: tokens.colorTextPrimary,
    },
    agreement: {
      maxHeight: '300px',
      overflowY: 'auto',
      overflowX: 'hidden',
      padding: '.2rem'
    }
  },
  components: {
    AvDisclaimer: {
      styleOverrides: {
        root: {
          padding: '16px',
        },
        accent: {
          borderLeft: `8px solid ${tokens.colorWarningDark}`,
        },
        dense: {
          padding: '12px 16px'
        }
      }
    },
    AvEmptyState: {
      defaultProps: {
        spacing: 2,
      },
      styleOverrides: {
        root: {
          ...typographyStyles('Body2'),
        },
        image: {
          width: '112px',
          height: '112px',
        },
      },
    },
    AvFeedbackContainer: {
      styleOverrides: {
        root: {
          maxWidth: '490px',
          padding: '16px',
          '@media (min-width: 600px)': {
            maxWidth: '490px',
            padding: '16px',
          },
        },
        smileButtons: {
          marginBottom: '16px',
          '.MuiToggleButton-root': {
            margin: '8px',
            '&:focus': {
              backgroundColor: tokens.colorActionFocus,
              color: tokens.colorTextPrimary,
              boxShadow: 'none',
            },
            '&:hover': {
              backgroundColor: tokens.colorActionHover,
              color: tokens.colorTextPrimary,
              borderColor: tokens.colorGrey400,
            },
            '&.Mui-selected': {
              backgroundColor: tokens.colorPrimaryMain,
              '&:active': {
                backgroundColor: tokens.colorPrimaryDarker,
              },
              '&:focus': {
                boxShadow: 'none',
              },
              '&:focus, &:hover': {
                backgroundColor: tokens.colorPrimaryDark,
                color: tokens.colorCommonWhite,
              },
              '&.Mui-disabled': {
                backgroundColor: tokens.colorPrimaryMain20,
              },
            },
            '&.MuiToggleButton-sizeMedium': {
              padding: '12px',
              height: 'auto',
            },
          },
        },
        formActions: {
          marginTop: '16px',
          '.MuiGrid-item': {
            flexBasis: '50%',
          },
          '.MuiButton-root': {
            width: '100%',
          },
        },
      },
    },
    AvGiveFeedbackButton: {
      defaultProps: {
        size: 'large',
      },
    },
    AvListItemStatusCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${tokens.borderDecorative}`,
          borderRadius: '4px',
          marginBottom: '4px',
          ...statusAccentStyles,
          '.MuiListItemButton-root': {
            borderRadius: '0 4px 4px 0',
            '&.Mui-focusVisible': {
              border: `2px solid ${tokens.colorPrimaryMain}`,
              marginRight: '-2px',
              borderLeftWidth: 0,
              boxShadow: 'none',
              '&:not(:hover):not(:active)': {
                backgroundColor: 'transparent'
              }
            },
            '&.Mui-selected': {
              backgroundColor: 'transparent',
              color: tokens.colorTextPrimary,
              boxShadow: tokens.shadows4,
              '~ .MuiListItemSecondaryAction-root .MuiIconButton-root' : {
                color: tokens.colorTextPrimary
              },
              '&:hover': {
                backgroundColor: tokens.colorActionHover
              },
            }
          },
          '@supports (selector(:has(a, b)))': {
            ':has(.MuiListItemButton-root.Mui-selected)': {
              boxShadow: tokens.shadows4,
              borderTopColor: tokens.borderSecondary,
              borderRightColor: tokens.borderSecondary,
              borderBottomColor: tokens.borderSecondary,
            },
            ':has(.MuiListItemButton-root.Mui-focusVisible)': {
              boxShadow: `0 0 0px 2px ${tokens.colorPrimaryMain}`,
              borderTopColor: tokens.colorPrimaryMain,
              borderRightColor: tokens.colorPrimaryMain,
              borderBottomColor: tokens.colorPrimaryMain,
              '.MuiListItemButton-root.Mui-focusVisible': {
                border: '0px',
                boxShadow: 'none'
              }
            },
            ':has(.MuiListItemButton-root.Mui-focusVisible.Mui-selected)': {
              boxShadow: `${tokens.shadows4}, 0 0 0px 2px ${tokens.colorPrimaryMain}`,
            },
          }
        }
      }
    },
    MuiAccordion: {
      defaultProps: {
        disableGutters: false,
        variant: 'elevation',
      },
      styleOverrides: {
        root: {
          '&:before': {
            content: 'none',
          },
          borderColor: tokens.colorBackgroundCanvas,
        },
      },
    },
    MuiAccordionActions: {
      styleOverrides: {
        root: {
          padding: '1.25rem',
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          minHeight: '1px',
          padding: '1.25rem',
          '.MuiAccordionSummary-root:not(.Mui-focusVisible, :hover, :active)': {
            backgroundColor: 'inherit',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.colorBackgroundCanvas,
          padding: '0px 20px',
          borderRadius: 'inherit',
          '&.Mui-expanded': {
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
            minHeight: '0px',
            '&.MuiAccordionSummary-gutters .MuiAccordionSummary-content.Mui-expanded': {
              margin: '12px 0px',
            },
          },
          '&:hover': {
            backgroundColor: tokens.colorActionHover,
          },
          '&:active': {
            backgroundColor: tokens.colorActionActive,
          },
          '&.Mui-focusVisible': {
            color: tokens.colorTextInverse,
            backgroundColor: tokens.colorActionActive,
          },
        },
        content: {
          order: 2,
          fontWeight: tokens.fontWeightsBold,
          margin: '12px 0px',
        },
        expandIconWrapper: {
          order: 1,
          marginRight: '8px',
          color: 'inherit',
        },
      },
    },
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
    MuiAutocomplete: {
      defaultProps: {
        size: 'small',
        fullWidth: true,
        clearOnEscape: true,
        filterSelectedOptions: true,
        ChipProps: {
          size: 'medium',
        },
        slotProps: {
          paper: {
            variant: 'elevation',
            elevation: 8,
          },
        },
      },
      styleOverrides: {
        root: {
          '&.Mui-error .MuiAutocomplete-popupIndicator': {
            color: tokens.borderError,
          },
          '&.MuiAutocomplete-hasPopupIcon': {
            '.MuiAutocomplete-endAdornment': {
              right: '4px',
            },
            '.MuiInputBase-root.MuiInputBase-adornedEnd': {
              paddingRight: '3rem',
            },
            '&.MuiAutocomplete-hasClearIcon': {
              '.MuiInputBase-root.MuiInputBase-adornedEnd': {
                paddingRight: '5rem',
              },
            },
          },
        },
        endAdornment: {
          transform: 'none',
          top: 'unset',
          right: '4px',
          height: 'calc(100% - 16px)',
          display: 'inline-flex',
          alignItems: 'center',
          '.MuiIconButton-root': {
            display: 'flex',
            marginRight: '0',
            width: '2.25rem',
            height: '2.25rem',
          },
        },
        popupIndicator: {
          color: tokens.borderInput,
        },
        popupIndicatorOpen: {
          transform: 'scaleY(-1)',
        },
        clearIndicator: {
          color: tokens.borderInput,
          marginTop: '-8px',
          marginBottom: '-8px',
        },
        option: {
          '&.MuiAutocomplete-option': {
            minHeight: 'unset',
            "&[aria-selected='true'], &[aria-selected='true'].Mui-focused": {
              color: tokens.colorCommonWhite,
              backgroundColor: tokens.colorPrimaryMain,
            },
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: tokens.colorBackgroundBorder,
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
          marginLeft: '.625rem',
          marginRight: '.625rem',
          color: tokens.colorGrey300,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
        disableElevation: true,
        variant: 'contained',
        size: 'large',
      },
      styleOverrides: {
        root: {
          boxShadow: 'none',
          fontWeight: tokens.fontWeightsBold,
          textTransform: 'none',
          lineHeight: '1.375rem',
          fontSize: '.875rem',
          '.MuiButton-startIcon, .MuiButton-endIcon': {
            '.MuiSvgIcon-fontSizeInherit': {
              fontSize: 'inherit',
            },
          },
        },
        containedPrimary: { ...containedButtonStyles('Primary') },
        containedSecondary: { ...containedButtonStyles('Secondary') },
        containedTertiary: {
          '&.MuiButton-containedTertiary': {
            ...containedButtonStyles('Tertiary'),
            boxSizing: 'border-box',
            border: `1px solid ${tokens.borderSecondary}`,
            color: tokens.colorTertiaryDark,
            '&:hover': {
              color: tokens.colorCommonWhite,
              border: '1px solid transparent',
              backgroundColor: tokens.colorTertiaryDark,
            },
            '&:active, &.Mui-focused:active, &:focus:active': {
              color: tokens.colorCommonWhite,
              border: '1px solid transparent',
              backgroundColor: tokens.colorSecondaryLight,
            },
            '&.Mui-focused, &:focus': {
              border: `1px solid ${tokens.borderSecondary}`,
              backgroundColor: tokens.colorTertiaryLight,
              color: tokens.colorTertiaryDark,
            },
            '&.Mui-disabled, &:disabled': {
              border: `1px solid ${tokens.borderSecondary}`,
              backgroundColor: tokens.colorTertiaryLight,
              color: tokens.colorTertiaryDark,
            },
          },
        },
        containedSuccess: { ...containedButtonStyles('Success') },
        containedWarning: { ...containedButtonStyles('Warning') },
        containedError: { ...containedButtonStyles('Error') },
        outlinedPrimary: { ...outlinedButtonStyles('Primary') },
        outlinedSecondary: { ...outlinedButtonStyles('Secondary') },
        outlinedTertiary: {
          color: tokens.colorSecondaryMain,
          '&.MuiButton-outlinedTertiary': {
            ...containedButtonStyles('Tertiary'),
            color: tokens.colorTertiaryDark,
            '&:hover': {
              color: tokens.colorCommonWhite,
              border: '1px solid transparent',
            },
            '&:active, &.Mui-focused:active, &:focus:active': {
              backgroundColor: tokens.colorSecondaryLight,
              color: tokens.colorCommonWhite,
              border: '1px solid transparent',
            },
            '&.Mui-focused, &:focus': {
              border: `1px solid ${tokens.borderSecondary}`,
              backgroundColor: tokens.colorTertiaryLight,
              color: tokens.colorTertiaryDark,
            },
            '&.Mui-disabled, &:disabled': {
              border: `1px solid ${tokens.borderSecondary}`,
              backgroundColor: tokens.colorTertiaryLight,
              color: tokens.colorTertiaryDark,
            },
          },
        },
        outlinedSuccess: { ...outlinedButtonStyles('Success') },
        outlinedWarning: { ...outlinedButtonStyles('Warning') },
        outlinedError: { ...outlinedButtonStyles('Error') },
        sizeSmall: {
          padding: '4px 16px',
          '&.MuiButton-containedTertiary, &.MuiButton-outlined': {
            // any buttons with border need padding decreased to accommodate
            padding: '3px 15px',
          },
        },
        sizeMedium: {
          padding: '6px 18px',
          '&.MuiButton-containedTertiary, &.MuiButton-outlined': {
            padding: '5px 17px',
          },
        },
        sizeLarge: {
          fontSize: '.9375rem',
          lineHeight: '1.5rem',
          padding: '8px 22px',
          '&.MuiButton-containedTertiary, &.MuiButton-outlined': {
            padding: '7px 21px',
          },
        },
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
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6',
        },
      },
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
    MuiCheckbox: {
      defaultProps: {
        color: 'primary',
      },
      styleOverrides: {
        root: {
          padding: '8px',
          '&:hover': {
            backgroundColor: '#00000008',
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
          fill: tokens.colorGrey300,
          '&:hover': {
            fill: tokens.colorGrey700,
          },
        },
        label: {
          fontSize: 'inherit',
          padding: '0px 6px',
        },
        labelSmall: {
          padding: '0px 8px',
          fontSize: '.75rem',
          lineHeight: '1.125rem',
        },
        colorDefault: {
          backgroundColor: tokens.colorBackgroundAccent,
          '&:focus': {
            backgroundColor: tokens.colorActionFocus,
          },
        },
        sizeSmall: {
          verticalAlign: 'text-bottom',
          borderRadius: '50px',
        },
        sizeMedium: {
          fontWeight: tokens.fontWeightsRegular,
          padding: '3px 4px',
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        colorInherit: {
          color: tokens.colorGrey100,
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          padding: '4px 16px 8px',
        },
      },
    },
    MuiDayPicker: {
      styleOverrides: {
        header: {
          paddingBottom: '12px',
        },
      },
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: '310px',
          '.MuiIconButton-root': {
            border: '0',
          },
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          '&.MuiPickersDay-today': {
            borderColor: tokens.colorBackgroundBorder,
          },
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        size: 'small',
        fullWidth: true,
      },
      styleOverrides: {
        marginDense: {
          margin: '0 0 .5rem',
        },
        marginNormal: {
          margin: '0 0 1rem',
        },
      },
    },
    MuiFormControlLabel: {
      defaultProps: {
        labelPlacement: 'end',
      },
      styleOverrides: {
        root: {
          '&.Mui-error': {
            '.MuiFormControlLabel-label': {
              color: tokens.colorTextError,
              '&.Mui-disabled': {
                color: tokens.colorErrorMain20,
              },
            },
            '.MuiButtonBase-root, .MuiSvgIcon-root': {
              color: tokens.colorTextError,
            },
            '.MuiRadio-root': {
              color: tokens.colorErrorMain,
              '&:hover, &.Mui-checked:hover': {
                backgroundColor: tokens.colorErrorMain20,
              },
            },
            '&.Mui-disabled': {
              '.MuiRadio-root .MuiSvgIcon-root': {
                color: tokens.colorErrorMain20,
              },
            },
          },
        },
        asterisk: {
          // required indicators shown on the group level
          display: 'none',
        },
        labelPlacementEnd: {
          marginLeft: 0,
          marginRight: 0,
        },
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          '&.MuiFormGroup-row': {
            '.MuiBox-root:not(:last-of-type)': {
              marginRight: '16px',
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        children: ' ',
      },
      styleOverrides: {
        root: {
          marginLeft: '0px',
          minHeight: '1.25rem',
          lineHeight: '1.25rem',
          '&:not(&.Mui-error) .MuiSvgIcon-root': {
            display: 'none',
          },
          '.MuiSvgIcon-root': {
            verticalAlign: 'text-bottom',
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          marginBottom: '3px',
          '&.Mui-disabled': {
            color: tokens.colorTextDisabled,
          },
          '&.Mui-error, &.Mui-error.Mui-focused': {
            color: tokens.colorTextError,
          },
          '&.Mui-focused': {
            color: tokens.colorTextPrimary,
          },
          // move required asterisk before text
          display: important('flex'),
          flexDirection: important('row-reverse'),
          justifyContent: important('flex-end'),
        },
        asterisk: {
          color: tokens.colorTextError,
          marginRight: '.25rem',
          marginLeft: '-.15rem',
        },
        avWrapper: {
          marginBottom: '3px',
          display: 'flex',
          flexDirection: 'row',
          '.MuiFormLabel-root': {
            marginBottom: '0px',
          },
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: 'secondary',
      },
      styleOverrides: {
        colorSecondary: {
          borderColor: tokens.borderSecondary,
          '&:hover': {
            backgroundColor: tokens.colorActionHover,
          },
        },
        colorPrimary: {
          borderColor: tokens.borderPrimary,
          '&:hover, &:focus': {
            backgroundColor: tokens.colorActionSelected,
          },
        },
        sizeSmall: {
          // UX wants size to only dictate padding so both sizes correlate to medium fontSize
          fontSize: '1.5rem',
          padding: '.25rem',
        },
        sizeMedium: {
          padding: '.75rem',
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        minRows: 2,
        maxRows: 3,
      },
      styleOverrides: {
        root: ({ ownerState }: { ownerState: { size: 'small' | 'medium'; fullWidth: boolean | undefined } }) => {
          return {
            boxSizing: 'border-box',
            '&.MuiInputBase-root, &.MuiInputBase-root.MuiAutocomplete-inputRoot': {
              width: ownerState.fullWidth ? '100%' : '220px',
              minHeight: ownerState.size === 'medium' ? '56px' : '40px',
            },
            '&.MuiInputBase-root': {
              backgroundColor: 'white',
              padding: '0px',
              '& > fieldset': {
                borderColor: tokens.colorGrey400,
              },
              '&:hover > fieldset': {
                borderColor: tokens.borderInputHover,
              },
              '&.Mui-focused > fieldset': {
                borderColor: tokens.borderInputFocus,
              },
              '&.Mui-error > fieldset': {
                borderColor: tokens.colorErrorMain,
              },
              '&.Mui-disabled > fieldset': {
                borderColor: tokens.borderDisabled,
                color: tokens.colorTextDisabled,
              },
              '.MuiInputBase-input': {
                padding: '8px 12px',
                lineHeight: '1.5rem',
                color: tokens.colorTextPrimary,
                '&::placeholder': {
                  opacity: 1,
                  color: tokens.colorGrey400,
                },
              },
              '.MuiInputBase-inputAdornedEnd': {
                paddingRight: '0',
              },
              '.MuiInputBase-inputAdornedStart': {
                paddingLeft: '0',
              },
              '&.MuiInputBase-adornedStart': {
                paddingLeft: '12px',
              },
              '&.MuiInputBase-adornedEnd': {
                paddingRight: '12px',
              },
              '.MuiSelect-avEndAdornmentDivider': {
                borderColor: tokens.colorBackgroundBorder,
                margin: '0 4px',
              },
              '&:hover': {
                '.MuiInputBase-input::placeholder': {
                  color: tokens.colorTextPrimary,
                },
                '.MuiIconButton-root': {
                  color: tokens.colorGrey700,
                },
              },
              '&.Mui-disabled': {
                '.MuiIconButton-root': {
                  color: tokens.colorTextDisabled,
                },
              },
              '.MuiIconButton-root': {
                border: '0',
                padding: '8px',
                color: tokens.colorGrey400,
              },
              '.MuiChip-label': {
                lineHeight: '1.125rem',
                fontSize: '.75rem',
              },
            },
          };
        },
        input: {
          borderRadius: '4px',
          color: tokens.colorGrey400,
          '&:hover': {
            color: tokens.colorGrey700,
          },
        },
        adornedEnd: {
          backgroundColor: 'white',
          paddingRight: '.75rem',
        },
        adornedStart: {
          paddingLeft: '.75rem',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
        variant: 'body1',
      },
      styleOverrides: {
        root: {
          color: tokens.colorTextLink,
          '&:active': {
            color: tokens.colorTextPrimary,
          },
          '&:not(.MuiTypography-inherit)': {
            fontWeight: tokens.fontWeightsBold,
          },
          '&.MuiTypography-inherit': {
            textDecoration: 'underline'
          },
          '&.MuiTypography-gutterBottom': {
            marginBottom: '.5rem'
          },
          '.MuiSvgIcon-root': {
            fontSize: 'smaller',
          }
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
            ".MuiListItem-divider:last-of-type": {
                borderBottom: 0,
            },
        }
      }
    },
    MuiListItem: {
      defaultProps: {
        divider: true,
      },
      styleOverrides: {
        root: {
          '.MuiListItemButton-root.Mui-selected': {
            '~ .MuiListItemSecondaryAction-root .MuiIconButton-root' : {
              color: tokens.colorCommonWhite
            }
          }
        },
        alignItemsFlexStart: {
          '.MuiListItemButton-root': {
            alignItems: 'flex-start',
            '> .MuiChip-root': {
              marginTop: '1.25rem',
              transform: 'translateY(-50%)'
            },
          },
          // no padding primarily used with ListItemButton
          '> .MuiIconButton-root, > .MuiChip-root': {
            transform: 'translateY(-50%)',
            marginTop: '1.75rem',
          },
          '.MuiListItemSecondaryAction-root': {
            top: '1.75rem'
          },
          '&.MuiListItem-padding > .MuiIconButton-root, > .MuiChip-root': {
            marginTop: '1.25rem',
          },
          '&.MuiListItem-dense': {
            '.MuiListItemButton-root > .MuiChip-root': {
              marginTop: '1.125rem',
            },
            '> .MuiIconButton-root, > .MuiChip-root': {
              marginTop: '1.5rem',
            },
            '.MuiListItemSecondaryAction-root': {
              top: '1.5rem'
            },
            '&.MuiListItem-padding': {
              '> .MuiIconButton-root, > .MuiChip-root': {
                marginTop: '1.25rem',
              },
            }
          }
        },
        dense: {
          '.MuiListItemAvatar-root': {
            minWidth: '3rem',
            '.MuiAvatar-root': {
              width: '1.5rem',
              height: '1.5rem',
              '.MuiSvgIcon-root': {
                fontSize: '.75rem'
              }
            }
          },
          '.MuiListItemIcon-root': {
            minWidth: '3rem',
            '+ .MuiListItemText-inset': {
              paddingLeft: '3rem'
            }
          }
        },
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '@supports (selector(:has(a, b)))': {
            ':has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root:nth-of-type(1))': {
              paddingRight: 'calc(1rem + 1 * (1.5rem) + 0.125rem)'
            },
            ':has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root:nth-of-type(2))': {
              paddingRight: 'calc(1rem + 2 * (1.5rem) + 0.125rem)'
            },
            ':has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root:nth-of-type(3))': {
              paddingRight: 'calc(1rem + 3 * (1.5rem) + 0.125rem)'
            },
            ':has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root:nth-of-type(4))': {
              paddingRight: 'calc(1rem + 4 * (1.5rem) + 0.125rem)'
            },
            ':has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root.MuiIconButton-sizeMedium:nth-of-type(1))': {
              paddingRight: 'calc(1rem + 1 * (2.5rem) + .375rem)'
            },
            ':has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root.MuiIconButton-sizeMedium:nth-of-type(2))': {
              paddingRight: 'calc(1rem + 2 * (2.5rem) + .375rem)'
            },
            ':has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root.MuiIconButton-sizeMedium:nth-of-type(3))': {
              paddingRight: 'calc(1rem + 3 * (2.5rem) + .375rem)'
            },
            ':has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root.MuiIconButton-sizeMedium:nth-of-type(4))': {
              paddingRight: 'calc(1rem + 4 * (2.5rem) + .375rem)'
            },
          },
          '@supports not (selector(:has(a, b)))': {
            '~ .MuiListItemSecondaryAction-root': {
              width: '3rem',
              right: '0px',
              flexWrap: 'wrap',
              '.MuiIconButton-root:not(:only-child)': {
                padding: '.25rem',
                '.MuiSvgIcon-root': {
                  fontSize: '1rem'
                }
              }
            },
          },
          '&.Mui-selected': {
            backgroundColor: tokens.colorPrimaryMain,
            color: tokens.colorTextInverse,
            '.MuiListItemText-root, .MuiListItemText-root *, .MuiListItemSubheader-root, .MuiListItemSubheader-root *, .MuiListItemIcon-root, .MuiListItemIcon-root *, .MuiListItemSecondaryAction-root, .MuiIconButton-root': {
              color: 'inherit'
            },
            '&.Mui-focusVisible': {
              backgroundColor: tokens.colorPrimaryDark,
              boxShadow: `inset 0 0 0px 1px ${tokens.colorPrimaryDark}, inset 0 0 0px 2px ${tokens.colorCommonWhite}`,
            },
            '&:hover': {
              backgroundColor: tokens.colorPrimaryDark,
            },
            '&:active': {
              backgroundColor: tokens.colorPrimaryDarker,
            },
            '.MuiSvgIcon-root': {
              color: tokens.colorTextInverse,
            },
          },
          '&.Mui-focusVisible': {
            boxShadow: `inset 0 0 0px 1px ${tokens.colorActionFocus}, inset 0 0 0px 2px ${tokens.colorCommonWhite}`,
          },
          '&:hover': {
            backgroundColor: tokens.colorActionHover,
          },
          '&:active': {
            backgroundColor: tokens.colorActionActive,
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          fontSize: '1.5rem',
          minWidth: '3.5rem',
          '+ .MuiListItemText-inset': {
            paddingLeft: '3.5rem'
          }
        }
      }
    },
    MuiListItemText: {
      defaultProps: {
        primaryTypographyProps: {
          variant: 'body1',
          component: 'div'
        },
        secondaryTypographyProps: {
          variant: 'body2',
          component: 'div'
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          fontWeight: tokens.fontWeightsBold
        }
      }
    },
    MuiMenu: {
      defaultProps: {
        slotProps: {
          paper: {
            variant: 'elevation',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: tokens.colorPrimaryMain,
            color: tokens.colorTextInverse,
            '&:hover': {
              backgroundColor: tokens.colorPrimaryDark,
            },
            '&:active': {
              backgroundColor: tokens.colorPrimaryDarker,
            },
            '.MuiSvgIcon-root': {
              color: tokens.colorTextInverse,
            },
          },
          '&:hover': {
            backgroundColor: tokens.colorActionHover,
          },
          '&:active': {
            backgroundColor: '#00000016',
          },
          '.MuiSvgIcon-root': {
            marginRight: '8px',
            color: tokens.colorSecondaryMain,
          },
        },
      },
    },
    MuiPagination: {
      defaultProps: {
        color: 'primary',
        shape: 'rounded',
        size: 'large',
      },
    },
    MuiPaginationItem: {
      defaultProps: {
        color: 'primary',
        shape: 'rounded',
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          '&:active:not(.MuiPaginationItem-ellipsis)': {
            color: tokens.colorCommonWhite,
            backgroundColor: tokens.colorActionActive,
          },
          '&.Mui-disabled': {
            opacity: '1',
            color: tokens.colorTextDisabled,
          },
        },
        ellipsis: {
          backgroundColor: 'transparent',
        },
        outlined: {
          backgroundColor: tokens.colorBackgroundPaper,
          borderColor: tokens.colorActionActive,
          '&.Mui-disabled': {
            borderColor: tokens.borderDisabled,
          },
          '&.Mui-selected': {
            color: tokens.colorPrimaryMain,
            backgroundColor: tokens.colorActionSelected,
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
    MuiPopover: {
      defaultProps: {
        PaperProps: {
          variant: 'elevation',
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        MenuProps: {
          slotProps: {
            paper: {
              variant: 'elevation',
              elevation: 8,
            },
          },
        },
      },
      styleOverrides: {
        avExpandIcon: {
          position: 'relative',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '1rem',
        },
        icon: {
          '&.MuiSvgIcon-root:not(.MuiTablePagination-selectIcon)': {
            width: '2rem',
            height: '2rem',
            top: 'unset',
          },
          '&.MuiStack-root': {
            right: '8px',
            height: '100%',
            padding: '8px 0px',
            '.MuiSvgIcon-root': {
              width: '2rem',
              paddingLeft: '4px',
            },
          },
        },
        iconOpen: {
          transform: 'scaleY(-1)',
        },
        select: {
          '&.MuiInputBase-input.MuiSelect-select.MuiOutlinedInput-input': {
            paddingRight: '4rem',
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          marginLeft: '-10px',
          padding: '10px',
          '&.MuiButtonBase-root': {
            '&:hover': {
              backgroundColor: tokens.colorActionHover,
              '&.Mui-checked': {
                backgroundColor: tokens.colorActionSelected,
              },
            },
            '&.Mui-focused': {
              backgroundColor: tokens.colorActionSelected,
            },
            '.MuiTouchRipple-child': {
              backgroundColor: tokens.colorActionSelected,
            },
          },
        },
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        fontSize: 'inherit',
      },
      styleOverrides: {
        fontSizeXsmall: {
          fontSize: '1rem',
        },
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
    MuiTable: {
      styleOverrides: {
        root: {
          border: `0px solid ${tokens.borderDecorative}`,
          backgroundColor: tokens.colorBackgroundPaper,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${tokens.borderDecorative}`,
          // higher specificity needed for footer padding
          '&.MuiTableCell-footer': {
            borderBottom: 'none',
            '&:first-of-type, &:only-child': {
              paddingTop: '1.25rem',
            },
            '&:last-of-type, &:only-child': {
              paddingBottom: '1.25rem',
            },
          },
        },
        head: {
          fontWeight: tokens.fontWeightsBold,
          borderBottomWidth: `2px`,
        },
        header: {
          borderBottom: '0px',
          padding: '1.25rem 1rem',
          width: '100%',
          display: 'block',
        },
        sizeMedium: {
          lineHeight: '1.25rem',
        },
      },
    },
    MuiTablePagination: {
      defaultProps: {
        colSpan: 12,
      },
      styleOverrides: {
        root: {
          '.MuiTablePagination-toolbar': {
            // overcome breakpoint padding presets
            padding: '0 .5rem 0 1rem',
          },
        },
        actions: {
          '&:not(:last-child)': {
            flexGrow: 1,
            marginRight: '.25rem',
          },
          marginLeft: '.25rem',
        },
        displayedRows: {
          flexGrow: 1,
        },
        input: {
          borderRadius: '.25rem',
          marginLeft: '.25rem',
          marginRight: '.75rem',
          '&.MuiInputBase-root': {
            width: 'auto',
          },
        },
        select: {
          '&.MuiTablePagination-select.MuiSelect-select': {
            paddingRight: '1.5rem',
            borderRadius: '.25rem',
          },
        },
        selectLabel: {},
        selectIcon: {
          fontSize: '1.5rem',
        },
        spacer: {
          display: 'none',
        },
        toolbar: {
          flexWrap: 'wrap',
          flexShrink: 1,
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          borderRadius: '.25rem',
          padding: '.25rem',
          margin: '-.25rem',
          '&:hover': {
            backgroundColor: tokens.colorActionHover,
            '.MuiTableSortLabel-icon': {
              opacity: 1,
            },
          },
          '&:focus': {
            backgroundColor: tokens.colorActionFocus,
          },
        },
        icon: {
          opacity: 1,
          transition: 'none',
          fontSize: '14px',
          color: tokens.colorTextSecondary,
          marginRight: '0px',
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
    MuiTextField: {
      defaultProps: {
        size: 'small',
        fullWidth: true,
        helperText: ' ',
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
          color: tokens.colorTextPrimary,
          borderColor: tokens.borderSecondary,
          '&.Mui-selected': {
            backgroundColor: tokens.colorTertiaryDarker,
            color: tokens.colorTertiaryLight,
            borderColor: tokens.colorTertiaryDarker,
            '&:hover': {
              backgroundColor: tokens.colorTertiaryDark,
              color: tokens.colorTertiaryLight,
              borderColor: tokens.colorTertiaryMain,
            },
          },
          '&:focus': {
            boxShadow: `0 0 0px 2px ${tokens.colorGrey700}78`,
            backgroundColor: tokens.colorTertiaryLight,
            color: tokens.colorTextPrimary,
            borderColor: tokens.colorGrey700,
          },
          '&:hover': {
            backgroundColor: tokens.colorTertiaryDark,
            color: tokens.colorTertiaryLight,
            borderColor: tokens.colorTertiaryMain,
          },
          '&.MuiToggleButton-sizeSmall': {
            padding: '8px 16px',
            height: '40px',
          },
          '&.MuiToggleButton-sizeMedium': {
            padding: '12px 16px',
            height: '48px',
          },
          '&.MuiToggleButton-sizeLarge': {
            padding: '16px',
            height: '56px',
          },
          '&.Mui-disabled': {
            backgroundColor: tokens.colorActionDisabledBg,
            borderColor: tokens.colorTertiaryMain,
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
          backgroundColor: tokens.colorSecondaryMain,
          lineHeight: '1rem',
          fontSize: '.75rem',
          fontStyle: 'normal',
          padding: '4px 8px',
        },
        arrow: {
          color: tokens.colorSecondaryMain,
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'div',
          subtitle2: 'div',
          body1: 'p',
          body2: 'p',
          inherit: 'p',
          agreement: 'div'
        },
      },
    },
  },
};
