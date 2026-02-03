import { tokens } from '@availity/design-tokens';
import type { Theme } from '@mui/material/styles';

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

export const lightTheme = {
  mode: 'light',
  palette: {
    contrastThreshold: 4.5,
    contrastText: '#fff',
    tonalOffset: 0.2,
    divider: tokens.borderDecorative,
    text: {
      primary: tokens.colorTextPrimary,
      secondary: tokens.colorTextSecondary,
      disabled: tokens.colorTextDisabled,
      error: tokens.colorTextError,
      warning: tokens.colorWarningDark,
      hint: 'rgba(0, 0, 0, 0.38)',
      divider: 'rgba(0, 0, 0, 0.12)',
      success: tokens.colorTextSuccess,
      info: tokens.colorTextInfo,
      link: tokens.colorTextLink,
      inverse: tokens.colorTextInverse,
      inverseSecondary: tokens.colorTextInverseSecondary,
      placeholder: tokens.colorTextPlaceholder,
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
      hover: tokens.colorInfoMain20,
    },
    background: {
      primary: tokens.colorPrimaryMain20,
      secondary: '#393B4621',
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
      readonlyBackground: tokens.colorActionReadonlyBg,
      focus: tokens.colorActionFocus,
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
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
      padding: '.2rem',
    },
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
          padding: '12px 16px',
        },
      },
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
    AvFavoriteHeart: {
      styleOverrides: {
        root: {
          display: 'inline-block',
          position: 'relative',
          '&:hover input': {
            backgroundColor: tokens.colorActionHover,
            '&[disabled]': {
              backgroundColor: 'transparent',
              cursor: 'initial',
            },
          },
        },
        icon: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '.MuiStack-root': {
            height: '24px',
          },
        },
        input: {
          appearance: 'none',
          cursor: 'pointer',
          margin: 0,
          borderRadius: '50%',
          display: 'block',
        },
      },
    },
    AvFeedbackContainer: {
      styleOverrides: {
        root: {
          maxWidth: '490px',
          padding: 0,
          '@media (min-width: 600px)': {
            maxWidth: '490px',
            padding: 0,
          },
          'form .MuiFormControl-root': {
            margin: '0px 16px',
          },
        },
        feedbackHeaderContainer: {
          marginTop: '14px',
          marginLeft: '16px',
          marginRight: '16px',
          marginBottom: '6px',
          width: 'auto',
          '.MuiButtonBase-root': {
            marginRight: '-10px',
            marginTop: '-8px',
          },
        },
        smileButtons: {
          marginTop: '2px',
          marginBottom: '8px',
          '.MuiToggleButton-root': {
            borderColor: tokens.colorSecondaryMain,
            borderRadius: tokens.borderRadiusMd,
            color: tokens.colorSecondaryMain,
            margin: '14px 12px',
            fontSize: '2rem',
            '&:active': {
              backgroundColor: '#00000020',
            },
            '&:hover, &:focus': {
              backgroundColor: '#00000008',
              color: tokens.colorSecondaryMain,
            },
            '&:hover:focus': {
              borderColor: tokens.colorPrimaryContrast,
            },
            '&:hover': {
              borderColor: tokens.colorSecondaryMain,
            },
            '&:focus': {
              borderColor: tokens.colorPrimaryContrast,
              boxShadow: `0px 0px 0px 2px ${tokens.borderSecondary}`,
            },
            '&.Mui-selected': {
              backgroundColor: tokens.colorPrimaryMain,
              borderColor: tokens.colorPrimaryMain,
              '&:active, &:hover': {
                backgroundColor: tokens.colorPrimaryDark,
              },
              '&:focus': {
                backgroundColor: tokens.colorPrimaryMain,
                borderColor: tokens.colorPrimaryContrast,
                boxShadow: `0px 0px 0px 2px ${tokens.colorPrimaryMain}`,
                color: tokens.colorPrimaryContrast,
              },
              '&.Mui-disabled': {
                color: tokens.colorActionDisabled,
                borderColor: tokens.borderDisabled,
              },
            },
            '&.MuiToggleButton-sizeLarge': {
              padding: '12px',
              width: '56px',
            },
          },
        },
        formActions: {
          margin: '14px 12px 8px',
          '.MuiGrid-item': {
            padding: '0px 4px 8px',
          },
          '.MuiButton-root': {
            width: '100%',
            whiteSpace: 'nowrap',
          },
        },
      },
    },
    AvFeedbackButton: {
      defaultProps: {
        size: 'large',
      },
    },
    AvListItemStatusCard: {
      styleOverrides: {
        statusAccent: {
          backgroundColor: tokens.colorBackgroundAccent,
        },
        root: {
          '.MuiListItemButton-root': {
            borderRadius: '0 4px 4px 0',
            '&:active': {
              backgroundColor: tokens.colorActionFocus,
            },
            '&.Mui-focusVisible': {
              border: `2px solid ${tokens.colorPrimaryMain}`,
              borderLeftWidth: 0,
              boxShadow: 'none',
              '&:not(:hover):not(:active)': {
                backgroundColor: 'transparent',
              },
            },
            '&.Mui-selected': {
              backgroundColor: tokens.colorActionSelected,
              color: tokens.colorTextPrimary,
              borderColor: tokens.borderPrimary,
              '~ .MuiListItemSecondaryAction-root .MuiIconButton-root': {
                color: tokens.colorTextPrimary,
              },
              '&:hover': {
                backgroundColor: tokens.colorActionHover,
              },
            },
          },
          '@supports (selector(:has(a, b)))': {
            ':has(.MuiListItemButton-root.Mui-selected)': {
              borderColor: tokens.borderPrimary,
            },
            ':has(.MuiListItemButton-root.Mui-focusVisible)': {
              borderColor: tokens.colorPrimaryMain,
              boxShadow: `0 0 0px 1px ${tokens.colorPrimaryMain}`,
              '.MuiListItemButton-root.Mui-focusVisible': {
                border: '0px',
                boxShadow: 'none',
              },
            },
            ':has(.MuiListItemButton-root.Mui-focusVisible.Mui-selected)': {
              borderColor: tokens.colorPrimaryMain,
            },
          },
        },
      },
    },
    AvSpacesLink: {
      styleOverrides: {
        root: {
          width: '100%',
          "[role='link']": {
            color: tokens.colorTextLink,
            textDecoration: 'none',
            backgroundColor: 'transparent',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
          p: {
            marginBlockStart: 0,
            marginBlockEnd: 0,
          },
        },
        avDateInfo: {
          minWidth: 'unset',
          whiteSpace: 'nowrap',
          '.MuiChip-root': {
            marginRight: '.25rem',
          },
        },
        iconLink: {
          height: '2.5rem',
          width: '2.5rem',
          fontSize: '1.5rem',
          marginTop: '-.5rem',
          marginRight: '.5rem',
          minWidth: '2.5rem',
          borderRadius: '50%',
          position: 'relative',
          '.MuiSvgIcon-root': {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: tokens.colorTextSecondary,
          },
          '&:hover': {
            backgroundColor: tokens.colorActionHover,
          },
        },
      },
    },
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          '&:before': {
            content: 'none',
          },
          '&:not(.Av-disableNested) .MuiAccordionDetails-root': {
            '.MuiAccordion-root:not(.Av-disableNested)': {
              border: 'none',
              '.MuiAccordionSummary-root:not(.Mui-focusVisible, :hover, :active)': {
                backgroundColor: 'inherit',
              },
              '> .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionDetails-root:first-of-type':
                {
                  borderTop: 'none',
                },
            },
          },
        },
        heading: {
          borderRadius: 'inherit'
        }
      },
    },
    MuiAccordionActions: {
      styleOverrides: {
        root: {
          padding: '1rem',
          flexWrap: 'wrap',
        },
        spacing: {
          rowGap: tokens.spacingBase,
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          minHeight: '1px',
          padding: '1rem',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.colorBackgroundCanvas,
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
            backgroundColor: tokens.colorActionSelected,
          },
          '&.Mui-focusVisible': {
            backgroundColor: tokens.colorGrey100,
            boxShadow: `inset 0 0 0px 2px ${tokens.colorSecondaryMain}`,
          },
        },
        content: {
          order: 2,
          fontWeight: tokens.fontWeightsBold,
          margin: '12px 0px',
          gap: 1,
        },
        expandIconWrapper: {
          order: 1,
          marginRight: '8px',
          color: tokens.colorSecondaryMain,
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
          '.MuiButton-root, .MuiLink-root': {
            padding: '2px 4px',
            margin: '0px -4px',
          },
          '.MuiIconButton-root': {
            marginRight: '-8px',
          },
          margin: '-2px 0px -2px auto',
          padding: '0 0 0 16px',
          gap: '16px',
        },
        icon: ({ ownerState }: { ownerState: any }) => ({
          ...(ownerState.severity === 'success' && {
            color: important(tokens.colorGreen600),
          }),
          opacity: 1,
          padding: '4px 8px 4px 0px',
          margin: 0,
          fontSize: tokens.fontSizesBody1,
        }),
        message: {
          color: tokens.colorTextPrimary,
          padding: 0,
          wordBreak: 'break-word'
        },
        root: {
          border: 'none',
          fontSize: tokens.fontSizesBody1,
          lineHeight: tokens.lineHeightsBody1,
          padding: '8px 16px',
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
            '.MuiSelect-avExpandIcon': {
              transform: 'unset',
              top: 'auto',
            },
          },
        },
        popupIndicator: {
          color: tokens.borderInput,

          padding: '.75rem',
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
          ...containedButtonStyles('Tertiary'),
          '&:not(.Mui-disabled)': {
            boxSizing: 'border-box',
            border: `1px solid ${tokens.borderSecondary}`,
            color: tokens.colorTertiaryDark,
          },
          '&.MuiButton-containedTertiary:hover': {
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
          '&.MuiButton-containedTertiary:not(.Mui-disabled), &.MuiButton-outlined': {
            // any buttons with border need padding decreased to accommodate
            padding: '3px 15px',
          },
        },
        sizeMedium: {
          padding: '6px 18px',
          '&.MuiButton-containedTertiary:not(.Mui-disabled), &.MuiButton-outlined': {
            padding: '5px 17px',
          },
        },
        sizeLarge: {
          fontSize: '.9375rem',
          lineHeight: '1.5rem',
          padding: '8px 22px',
          '&.MuiButton-containedTertiary:not(.Mui-disabled), &.MuiButton-outlined': {
            padding: '7px 21px',
          },
        },
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        color: 'tertiary',
        size: 'large'
      },
      styleOverrides: {
        root: {
          '.MuiButtonBase-root': {
            '&:hover, &:focus, &:active': {
              zIndex: 1
            },
            '&.Mui-disabled': {
              padding: '7px 21px',
            },
          },
          '&.MuiButtonGroup-horizontal.MuiButtonGroup-colorTertiary': {
            '.MuiButton-root:not(.MuiButtonGroup-firstButton)': {
              marginLeft: '-1px'
            }
          },
          '&.MuiButtonGroup-vertical.MuiButtonGroup-colorTertiary': {
            '.MuiButton-root:not(:first-of-type)': {
              marginTop: '-1px'
            }
          }
        },
        grouped: {
          ':focus': {
            boxShadow: `0 0 0px 4px ${tokens.colorTertiaryDark}`
          }
        },
        firstButton: {
          '&.Mui-disabled': {
            border: `1px solid transparent`,
          }
        },
        middleButton: {
          '&.Mui-disabled': {
            border: `1px solid transparent`,
          }
        },
        lastButton: {
          '&.Mui-disabled': {
            border: `1px solid transparent`,
          }
        }
      }
    },
    MuiCard: {
      defaultProps: {
        variant: 'elevation',
        elevation: 1,
      },
      styleOverrides: {
        root: ({ ownerState: { variant } }: { ownerState: { variant: 'outlined' | 'elevation' } }) => ({
          backgroundColor: tokens.colorBackgroundPaper,
          border: variant === 'outlined' ? `1px solid ${tokens.borderDecorative}` : 0,
          boxShadow: variant === 'elevation' ? tokens.shadows1 : 'none'
        }),
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: tokens.colorActionHover,

          },
          '&.Mui-focusVisible': {
            boxShadow: `inset 0 0 0px 2px ${tokens.colorPrimaryMain}`,
            paddingBottom: '1px',
            '.MuiCardActionArea-focusHighlight ': {
              opacity: 0
            },
            '.MuiCardHeader-root': {
              borderBottom: 0,
            },
          },
          '&:hover:active': {
            backgroundColor: tokens.colorActionFocus,
          }
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '16px',
          borderTop: `1px solid ${tokens.borderDecorative}`
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
          color: tokens.colorTextPrimary,
          borderBottom: `1px solid ${tokens.borderDecorative}`
        },
        action: {
          marginTop: 0,
          marginBottom: 0,
          display: 'flex',
          alignItems: 'center'
        }
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
          '+ .MuiFormControlLabel-label, + div > .MuiFormControlLabel-label': {
            paddingTop: '8px',
            lineHeight: '1.5rem'
          },
          '&:hover': {
            backgroundColor: '#00000008',
          },
        },
        sizeSmall: {
          '+ .MuiFormControlLabel-label, + div > .MuiFormControlLabel-label': {
            lineHeight: '1.25rem'
          },
        },
        sizeLarge: {
          '+ .MuiFormControlLabel-label, + div > .MuiFormControlLabel-label': {
            lineHeight: '2rem'
          },
        }
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
          height: 'min-content',
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
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: tokens.colorBackgroundCanvas,
        }
      }
    },
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          width: '310px',
        },
      },
    },
    MuiDatePicker: {
      styleOverrides: {
        root: {
          width: '310px',
          '.MuiIconButton-root': {
            border: '0',
          },
        },
      },
    },
    MuiDayCalendar: {
      styleOverrides: {
        header: {
          paddingBottom: '12px',
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        PaperProps: {
          variant: 'elevation',
          elevation: 4,
        },
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '25rem',
        },
        maxWidthMd: {
          maxWidth: '39.75rem',
        },
        maxWidthLg: {
          maxWidth: '58.75rem',
        },
        maxWidthXl: {
          maxWidth: '71.25rem',
        },
        avCloseButton: {
          '~ .MuiDialogTitle-root': {
            marginRight: '2.5rem',
          },
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '1rem',
          flexWrap: 'wrap',
        },
        spacing: {
          gap: '8px',
          '.MuiButton-root': {
            margin: 0,
          },
        },
      },
    },
    MuiDialogContent: {
      defaultProps: {
        dividers: true,
      },
      styleOverrides: {
        root: {
          padding: '1rem',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: '.5rem',
          paddingLeft: '1rem',
          minHeight: '3.5rem',
          display: 'flex',
          alignItems: 'center',
        },
      },
    },
    MuiDrawer: {
      defaultProps: {
        anchor: 'right',
        contentPadding: false,
      },
      styleOverrides: {
        avDrawerContent: {
          overflowY: 'auto',
        },
        avDrawerHeader: {
          padding: '16px 16px 24px 24px',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'nowrap',
          flexShrink: 0,
        },
        avDrawerHeaderText: {
          paddingTop: "12px"
        },
        paper: {
          overflow: 'hidden',
          '&.MuiPaper-elevation:not(.MuiPaper-elevation0)': {
            boxShadow: tokens.shadows16
          }
        }
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
          alignItems: 'start',
          display: 'flex',
          '> div': {
            display: 'flex'
          },
          '> .MuiIconButton-sizeSmall': {
            top: '2px',
          },
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
        avWrapper: {
          display: 'inline-flex',
          '> .MuiIconButton-root': {
            alignSelf: 'center'
          }
        },
        labelPlacementEnd: {
          marginLeft: 0,
          marginRight: 0,
          '.MuiSwitch-root': {
            marginRight: '4px'
          }
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
          '&.Mui-disabled': {
            color: tokens.colorTextPrimary,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          marginBottom: '3px',
          '&.Mui-error, &.Mui-error.Mui-focused': {
            color: tokens.colorTextError,
          },
          '&.Mui-focused, &.Mui-disabled': {
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
          textWrapMode: 'nowrap',
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
              '&.Mui-readOnly, > input[readonly]': {
                backgroundColor: tokens.colorActionReadonlyBg
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
                // padding: '8px',
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
    MuiLinearProgress: {
      styleOverrides: {
        barColorSuccess: {
          backgroundColor: tokens.colorSuccessLight,
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
            textDecoration: 'underline',
          },
          '&.MuiTypography-gutterBottom': {
            marginBottom: '.5rem',
          },
          '.MuiSvgIcon-root': {
            fontSize: 'smaller',
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          '.MuiListItem-divider:last-of-type': {
            borderBottom: 0,
          },
        },
      },
    },
    MuiListItem: {
      defaultProps: {
        divider: true,
      },
      styleOverrides: {
        root: {
          '.MuiListItemButton-root.Mui-selected': {
            '~ .MuiListItemSecondaryAction-root .MuiIconButton-root': {
              color: tokens.colorCommonWhite,
            },
          },
        },
        alignItemsFlexStart: {
          '.MuiListItemButton-root': {
            alignItems: 'flex-start',
            '> .MuiChip-root': {
              marginTop: '1.25rem',
              marginBottom: '-1.25rem',
              transform: 'translateY(-50%)',
            },
          },
          // no padding primarily used with ListItemButton
          '> .MuiIconButton-root, > .MuiChip-root': {
            transform: 'translateY(-50%)',
            marginTop: '1.75rem',
            marginBottom: '-1.75rem',
          },
          '.MuiListItemSecondaryAction-root': {
            top: '1.75rem',
          },
          '&.MuiListItem-padding:not(.MuiListItem-dense), &:not(.MuiListItem-padding):not(.MuiListItem-dense) .MuiListItemButton-root:not(.MuiListItemButton-dense)':
          {
            paddingTop: '.75rem',
            paddingBottom: '.75rem',
            '> .MuiIconButton-root, > .MuiChip-root': {
              marginTop: '1rem',
              marginBottom: '-1rem',
            },
          },
          '&.MuiListItem-dense': {
            '.MuiListItemButton-root > .MuiChip-root': {
              marginTop: '1rem',
              marginBottom: '-1rem',
            },
            '> .MuiIconButton-root, > .MuiChip-root': {
              marginTop: '1.5rem',
              marginBottom: '-1.5rem',
            },
            '.MuiListItemSecondaryAction-root': {
              top: '1.25rem',
            },
            '&.MuiListItem-padding': {
              '> .MuiIconButton-root, > .MuiChip-root': {
                marginTop: '1.25rem',
                marginBottom: '-1.25rem',
              },
            },
          },
        },
        dense: {
          '.MuiListItemAvatar-root': {
            minWidth: '3rem',
            '.MuiAvatar-root': {
              width: '1.5rem',
              height: '1.5rem',
              '.MuiSvgIcon-root': {
                fontSize: '.75rem',
              },
            },
          },
          '.MuiListItemIcon-root': {
            minWidth: '3rem',
            '+ .MuiListItemText-inset': {
              paddingLeft: '3rem',
            },
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '@supports (selector(:has(a, b)))': {
            ':has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root:nth-of-type(1))': {
              paddingRight: 'calc(1rem + 1 * (1.5rem) + 0.125rem)',
            },
            ':has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root:nth-of-type(2))': {
              paddingRight: 'calc(1rem + 2 * (1.5rem) + 0.125rem)',
            },
            ':has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root:nth-of-type(3))': {
              paddingRight: 'calc(1rem + 3 * (1.5rem) + 0.125rem)',
            },
            ':has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root:nth-of-type(4))': {
              paddingRight: 'calc(1rem + 4 * (1.5rem) + 0.125rem)',
            },
            ':has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root.MuiIconButton-sizeMedium:nth-of-type(1))': {
              paddingRight: 'calc(1rem + 1 * (2.5rem) + .375rem)',
            },
            ':has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root.MuiIconButton-sizeMedium:nth-of-type(2))': {
              paddingRight: 'calc(1rem + 2 * (2.5rem) + .375rem)',
            },
            ':has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root.MuiIconButton-sizeMedium:nth-of-type(3))': {
              paddingRight: 'calc(1rem + 3 * (2.5rem) + .375rem)',
            },
            ':has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root.MuiIconButton-sizeMedium:nth-of-type(4))': {
              paddingRight: 'calc(1rem + 4 * (2.5rem) + .375rem)',
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
                  fontSize: '1rem',
                },
              },
            },
          },
          '&.Mui-selected': {
            backgroundColor: tokens.colorPrimaryMain,
            color: tokens.colorTextInverse,
            '.MuiListItemText-root, .MuiListItemText-root *, .MuiListItemSubheader-root, .MuiListItemSubheader-root *, .MuiListItemIcon-root, .MuiListItemIcon-root *, .MuiListItemSecondaryAction-root, .MuiIconButton-root':
            {
              color: 'inherit',
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
            paddingLeft: '3.5rem',
          },
        },
      },
    },
    MuiListItemText: {
      defaultProps: {
        primaryTypographyProps: {
          variant: 'body1',
          component: 'div',
        },
        secondaryTypographyProps: {
          variant: 'body2',
          component: 'div',
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          fontWeight: tokens.fontWeightsBold,
        },
      },
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
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          padding: '4px 16px 8px',
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          '&.MuiPickersDay-today': {
            borderColor: tokens.borderDecorative,
          },
        },
      },
    },
    MuiPickersInputBase: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
          width: '220px',
          maxWidth: '100%',
          minHeight: '56px',
          '&.MuiPickersInputBase-inputSizeSmall': {
            minHeight: '40px',
          },
          '&.MuiPickersInputBase-fullWidth': {
            width: '100%',
          },
          // copied from MuiInputBase
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
          '&.Mui-readOnly, > input[readonly]': {
            backgroundColor: tokens.colorActionReadonlyBg
          },
          '.MuiPickersInputBase-input': {
            padding: '8px 12px',
            lineHeight: '1.5rem',
            color: tokens.colorTextPrimary,
            '&::placeholder': {
              opacity: 1,
              color: tokens.colorGrey400,
            },
          },
          '.MuiPickersInputBase-inputAdornedEnd': {
            paddingRight: '0',
          },
          '.MuiPickersInputBase-inputAdornedStart': {
            paddingLeft: '0',
          },
          '&.MuiPickersInputBase-adornedStart': {
            paddingLeft: '12px',
          },
          '&.MuiPickersInputBase-adornedEnd': {
            paddingRight: '12px',
          },
          '&:hover': {
            '.MuiPickersInputBase-input::placeholder': {
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
            // padding: '8px',
            color: tokens.colorGrey400,
          },
        },
      },
    },
    MuiPickersOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          'legend': {
            width: '0px',
          },
        },
      },
    },
    MuiPickersTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
        size: 'small'
      }
    },
    MuiPopover: {
      defaultProps: {
        PaperProps: {
          variant: 'elevation',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          marginLeft: '-10px',
          padding: '10px',
          '+ .MuiFormControlLabel-label, + div > .MuiFormControlLabel-label': {
            paddingTop: '10px'
          },
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
        sizeSmall: {
          '+ .MuiFormControlLabel-label, + div > .MuiFormControlLabel-label': {
            lineHeight: '1.25rem'
          },
        }
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
    MuiSnackbar: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          [theme.breakpoints.down('sm')]: {
            // full width
            left: '24px',
            right: '24px',
            '&.MuiSnackbar-anchorOriginBottomCenter, &.MuiSnackbar-anchorOriginBottomLeft, &.MuiSnackbar-anchorOriginBottomRight':
              {
                bottom: '24px',
              },
            '&.MuiSnackbar-anchorOriginTopCenter, &.MuiSnackbar-anchorOriginTopLeft, &.MuiSnackbar-anchorOriginTopRight':
              {
                top: '24px',
              },
          },
          [theme.breakpoints.up('sm')]: {
            maxWidth: '528px',
            minWidth: '352px',
          },
          '.MuiAlert-root': {
            width: '100%',
          },
          '.MuiAlert-root, .MuiSnackbarContent-root': {
            boxShadow: tokens.shadows24,
          },
        }),
        anchorOriginBottomCenter: {
          bottom: '40px',
        },
        anchorOriginBottomLeft: {
          bottom: '40px',
          left: '40px',
        },
        anchorOriginBottomRight: {
          bottom: '40px',
          right: '40px',
        },
        anchorOriginTopCenter: {
          top: '40px',
        },
        anchorOriginTopLeft: {
          top: '40px',
          left: '40px',
        },
        anchorOriginTopRight: {
          top: '40px',
          right: '40px',
        },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          // info alert styling
          backgroundColor: tokens.colorBlue50,
          color: tokens.colorTextPrimary,
        },
      },
    },
    MuiStep: {
      styleOverrides: {
        root: {
          minWidth: '71px',
          whiteSpace: 'wrap',
          '&:not(:first-of-type)': {
            '.MuiStepLabel-vertical': {
              '&::after': {
                content: '""',
                borderLeft: `4px solid ${tokens.colorGrey200}`,
                position: 'absolute',
                left: '26px',
                bottom: 'calc(50% + 14px)',
                top: 0,
              },
            }
          },
          '&:not(:last-of-type)': {
            '.MuiStepLabel-vertical': {
              ' &::before': {
                content: '""',
                borderLeft: `4px solid ${tokens.colorGrey200}`,
                position: 'absolute',
                left: '26px',
                bottom: 0,
                top: 'calc(50% + 14px)'
              }
            }
          },
          '&.Mui-completed': {
            '.MuiStepLabel-vertical': {
              '&::before, &::after': {
                borderColor: tokens.colorSuccessMain,
              }
            },
          },
          '&.Mui-active': {
            '.MuiStepLabel-vertical': {
              '&::before, &::after': {
                borderColor: tokens.colorSuccessMain,
              }
            },
          }
        },
      }
    },
    MuiStepButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: 0,
          padding: 0,
          '&:hover': {
            backgroundColor: tokens.colorActionHover,
          },
          '&:active': {
            backgroundColor: "#393B4626"
          },
          '&.Mui-focusVisible': {
            outline: `2px solid ${tokens.borderInputFocus}`
          },
        },
      }
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: tokens.colorCommonWhite,
          outline: `2px solid ${tokens.colorSuccessMain}`,
          outlineOffset: '-2px',
          borderRadius: '50%',
          height: '24px',
          width: '24px',
          '&.Mui-active': {
            color: tokens.colorSuccessMain,
            outline: 'none',
            '.MuiStepIcon-text': {
              fill: tokens.colorCommonWhite,
            },
          },
          '&.Mui-completed': {
            color: tokens.colorSuccessMain,
            outline: 'none',
          },
          '&.Mui-error': {
            outline: 'none',
          },
          '&.MuiSvgIcon-colorWarning': {
            outline: 'none',
          },
        },
        text: {
          fill: tokens.colorTextSuccess,
          fontSize: '14px',
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignSelf: 'center',
          justifyContent: 'center',
          padding: '24px 0',
        },
        iconContainer: {
          '.MuiSvgIcon-colorWarning': {
            color: tokens.colorWarningDark,
          },
        },
        vertical: {
          padding: '20px 16px',
          position: 'relative',
        }
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        root: {
          top: '34px',
          color: tokens.colorGrey200,
          left: 'calc(-50% + 14px)',
          right: 'calc(50% + 14px)',
          '&.Mui-completed': {
            color: tokens.colorSuccessMain,
          },
          '&.Mui-active': {
            color: tokens.colorSuccessMain,
          },
        },
        line: {
          borderColor: 'inherit',
          borderWidth: '4px',
        },
        vertical: {
          display: 'none',
          '&.Mui-active + .MuiStep-vertical .MuiStepLabel-vertical::after': {
            borderColor: tokens.colorSuccessMain,
          }
        },
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          flexGrow: 1,
          overflowX: 'auto',
          overflowY: 'hidden',
          whiteSpace: 'nowrap',
          scrollbarWidth: 'none',
          paddingTop: '2px',
          paddingBottom: '2px'
        },
        vertical: {
          alignItems: 'flex-start',
          overflow: 'visible'
        }
      }
    },
    MuiSvgIcon: {
      defaultProps: {
        fontSize: 'inherit',
      },
      styleOverrides: {
        colorPrimary: {
          color: tokens.colorTextPrimary,
        },
        colorWarning: {
          color: tokens.colorWarningDark,
        },
        fontSizeXxsmall: {
          fontSize: tokens.iconSizeXxsmall,
        },
        fontSizeXsmall: {
          fontSize: tokens.iconSizeXsmall,
        },
        fontSizeSmall: {
          fontSize: tokens.iconSizeSmall,
        },
        fontSizeMedium: {
          fontSize: tokens.iconSizeMedium,
        },
        fontSizeLarge: {
          fontSize: tokens.iconSizeLarge,
        },
        fontSizeXlarge: {
          fontSize: tokens.iconSizeXlarge,
        }
      },
    },
    MuiSwitch: {
      defaultProps: {
        disableRipple: true,
        disableFocusRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          padding: 'unset',
          height: '20px',
          width: '40px',
          overflow: 'initial',
          '+ .MuiFormControlLabel-label, + div > .MuiFormControlLabel-label': {
            lineHeight: '20px'
          },
          '.MuiSwitch-switchBase': {
            padding: '2px',
            '&.Mui-focusVisible': {
              '+ .MuiSwitch-track': {
                outlineWidth: tokens.borderWidthXs,
                outlineColor: tokens.colorTextInverse,
                outlineStyle: 'solid',
                boxShadow: `0 0 0px 4px ${tokens.borderPrimary}`,
              },
            },
            '&:hover': {
              '+ .MuiSwitch-track': {
                backgroundColor: tokens.colorSecondaryMain,
              },
            },
            '&.Mui-checked': {
              ' + .MuiSwitch-track': {
                backgroundColor: tokens.colorPrimaryLight,
                opacity: 1,
              },
              '&::hover': {
                '+ .MuiSwitch-track': {
                  backgroundColor: tokens.colorPrimaryDark,
                },
              },
            },
            '&.Mui-disabled, &.Mui-disabled.Mui-checked': {
              color: tokens.colorCommonWhite,
              '+ .MuiSwitch-track': {
                backgroundColor: tokens.colorTextDisabled,
                opacity: 1,
              },
            },
          },
        },
        thumb: {
          height: '16px',
          width: '16px',
          boxShadow: 'unset',
          backgroundColor: tokens.colorCommonWhite,
        },
        track: {
          borderRadius: '10px',
          background: tokens.colorSecondaryLight,
          opacity: 'unset',
        },
        sizeSmall: {
          height: '16px',
          width: '32px',
          '.MuiSwitch-switchBase': {
            '&.Mui-checked': {
              transform: 'translateX(16px)',
            },
          },
          '.MuiSwitch-thumb': {
            height: '12px',
            width: '12px',
          },
          '.MuiSwitch-track': {
            borderRadius: '8px',
          },
          '+ .MuiFormControlLabel-label, + div > .MuiFormControlLabel-label': {
            lineHeight: '16px'
          }
        },
      },
    },
    AvSwitchCheckedIcon: {
      styleOverrides: {
        root: {
          '& .Mui-checked': {
            '+ .MuiSwitch-track': {
              '&::before': {
                left: 4,
              },
            },
          },
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
        iconPosition: 'start'
      },
      styleOverrides: {
        root: {
          textTransform: 'unset',
          fontSize: tokens.typographyBody1FontSize,
          fontWeight: tokens.typographyBody1FontWeight,
          fontFamily: tokens.typographyBody1FontFamily,
          letterSpacing: tokens.typographyBody1LetterSpacing,
          color: tokens.colorTextPrimary,
          marginBottom: '-1px',
          padding: '11px 16px',
          '&:hover': {
            backgroundColor: tokens.colorActionHover,
          },
          '&.Mui-selected': {
            fontWeight: tokens.fontWeightsBold,
            '&:hover': {
              backgroundColor: tokens.colorActionSelected
            }
          },
          '&.Mui-focusVisible': {
            backgroundColor: tokens.colorActionFocus
          }
        },
        labelIcon: {
          minHeight: '3rem'
        }
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
          fontSize: tokens.iconSizeXxsmall,
          marginRight: '8px'
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
          fontSize: tokens.iconSizeXxsmall,
          color: tokens.colorTextSecondary,
          marginRight: '0px',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          height: '3rem',
        },
        flexContainer: {
          // mui v7: flexContainer becomes list
          borderBottom: `1px solid ${tokens.borderDecorative}`,
        },
        avSecondary: {
          '.MuiTab-root.Mui-selected:hover': {
            backgroundColor: tokens.colorActionSelected
          }
        }
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
    MuiTreeItem: {
      styleOverrides: {
        checkbox: {
          '&.MuiTreeItem-checkbox.Mui-checked': {
            color: tokens.colorTextInverse,
          },
        },
        content: {
          '&.MuiTreeItem-content, &.MuiSimpleTreeView-itemContent, &.MuiRichTreeView-itemContent':{
            borderRadius: 0,
            padding: '8px 16px',
            alignItems: 'start',
            '&:hover': {
              backgroundColor: tokens.colorActionHover,
            },
            '&:active': {
              backgroundColor: `${tokens.colorSecondaryDark}26`,
            },
            '&.Mui-focused': {
              outlineWidth: tokens.borderWidthXs,
              outlineColor: tokens.colorTextInverse,
              outlineStyle: 'solid',
              boxShadow: `0 0 0px 4px ${tokens.borderPrimary}`,
            },
            '&.Mui-selected': {
              backgroundColor: tokens.colorPrimaryMain,
              '.MuiTreeItem-iconContainer': {
                color: tokens.colorTextInverse,
              },
              '.MuiTreeItem-label': {
                color: tokens.colorTextInverse,
              },
              '&:hover': {
                backgroundColor: tokens.colorPrimaryDark,
              },
              '&:active': {
                backgroundColor: tokens.colorPrimaryDarker,
              },
            },
          }
        },
        iconContainer: {
          '&.MuiTreeItem-iconContainer, &.MuiSimpleTreeView-itemIconContainer, &.MuiRichTreeView-itemIconConainer':{
            color: tokens.colorSecondaryMain,
            paddingTop: '4px',
            svg: {
              fontSize: 'inherit',
              marginRight: '4px',
            },
          }
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
          agreement: 'div',
        },
      },
    },
  },
};
