/* eslint-disable @typescript-eslint/no-explicit-any */
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
  '&.Mui-focusVisible': {
    backgroundColor: tokens[`color${color}Dark` as keyof typeof tokens],
    outline: '2px solid white',
    boxShadow: `0 0 0px 4px ${
      color === 'Tertiary' ? tokens.colorSecondaryDark : tokens[`color${color}Dark` as keyof typeof tokens]
    }`,
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
    backgroundColor: `${tokens[`color${color}Main` as keyof typeof tokens]}${color === 'Tertiary' ? '' : '21'}`,
  },
  '&.Mui-focusVisible': {
    outline: '2px solid white',
    boxShadow: `0 0 0px 4px ${
      color === 'Tertiary' ? tokens.colorSecondaryMain : tokens[`color${color}Main` as keyof typeof tokens]
    }`,
    backgroundColor: `${tokens[`color${color}Main` as keyof typeof tokens]}${color === 'Tertiary' ? '' : '21'}`,
  },
  '&:active': {
    backgroundColor: `${tokens[`color${color}Main` as keyof typeof tokens]}${color === 'Tertiary' ? '' : '42'}`,
  },
});

const typographyStyles = (type: string) => ({
  fontSize: `${tokens[`typography${type}FontSize` as keyof typeof tokens]}`,
  fontWeight: `${tokens[`typography${type}FontWeight` as keyof typeof tokens]}`,
  fontFamily: `${tokens[`typography${type}FontFamily` as keyof typeof tokens]}`,
  letterSpacing: `${tokens[`typography${type}LetterSpacing` as keyof typeof tokens]}`,
  lineHeight: `${tokens[`lineHeights${type}` as keyof typeof tokens]}`,
});

export const legacyTheme = {
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
      hint: 'rgba(0, 0, 0, 0.38)',
      divider: 'rgba(0, 0, 0, 0.12)',
      success: tokens.colorSuccessMain,
      info: tokens.colorTextPrimary,
      link: tokens.colorTextLink,
      inverse: tokens.colorCommonWhite,
      inverseSecondary: '#ffffff24',
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
      default: tokens.colorGrey50,
    },
    action: {
      active: tokens.colorActionActive,
      hover: tokens.colorActionHover,
      hoverOpacity: 0.04,
      selected: tokens.colorActionSelected,
      // selected: 'rgb(50, 98, 175)',
      selectedOpacity: 0.08,
      disabled: tokens.colorActionDisabled,
      disabledBackground: tokens.colorActionDisabledBg,
      disabledOpacity: 0.38,
      readonlyBackground: tokens.colorActionReadonlyBg,
      focus: tokens.colorActionFocus,
      // focus: 'rgb(184, 212, 251)',
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
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
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
      fontSize: tokens.fontSizesBody1,
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
          borderLeft: `5px solid ${tokens.colorWarningMain}`,
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
    AvFavoriteHeart: {
      styleOverrides: {
        root: {
          display: 'inline-block',
          position: 'relative',
          '&:hover input': {
            backgroundColor: tokens.colorActionHover,
            '&[disabled]': {
              backgroundColor: 'transparent',
              cursor: 'initial'
            }
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
        },
        input: {
          appearance: 'none',
          cursor: 'pointer',
          margin: 0,
          borderRadius: '0.25rem',
          display: 'block',
        }
      }
    },
    AvFeedbackContainer: {
      styleOverrides: {
        root: {
          padding: important('0'),
          maxWidth: important('550px'),
          '.MuiFormControl-root': {
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            paddingBottom: '1.5rem',
          },
        },
        feedbackHeaderContainer: {
          backgroundColor: tokens.colorGrey100,
          padding: '15px 1.5rem',
          '.MuiButtonBase-root': {
            paddingRight: 0
          }
        },
        smileButtons: {
          padding: '2rem 1.5rem',
          width: '100%',
          div: {
            width: '100%',
            marginLeft: '8px',
            marginRight: '8px',
          },
          '.MuiToggleButton-root': {
            width: '100%',
            border: 0,
            borderRadius: tokens.borderRadiusMd,
            '&:focus': {
              backgroundColor: tokens.colorActionFocus,
              color: tokens.colorTextPrimary,
            },
            '&:hover': {
              backgroundColor: tokens.colorActionHover,
              color: tokens.colorTextPrimary,
            },
            '&.Mui-selected': {
              backgroundColor: tokens.colorPrimaryMain,
              '&:active': {
                backgroundColor: tokens.colorPrimaryDarker,
              },
              '&:focus, &:hover': {
                backgroundColor: tokens.colorPrimaryDark,
                color: tokens.colorCommonWhite,
              },
              '&.Mui-disabled': {
                backgroundColor: tokens.colorPrimaryMain20,
              },
            },
            '&.MuiToggleButton-sizeLarge': {
              padding: '.375rem .75rem',
              height: 'auto',
              '.MuiSvgIcon-root': {
                fontSize: '2em',
              },
            },
          },
        },
        formActions: {
          backgroundColor: tokens.colorGrey100,
          padding: '15px 1.5rem',
          justifyContent: 'flex-end',
          '.MuiGrid-item': {
            '&:first-of-type': {
              paddingRight: '8px',
            },
          },
        },
      },
    },
    AvFeedbackButton: {
      defaultProps: {
        size: 'medium',
      },
    },
    AvListItemStatusCard: {
      styleOverrides: {
        statusAccent: {
          backgroundColor: tokens.colorBackgroundBorder,
          width: '10px'
        },
        root: {
          borderColor: tokens.borderDecorative,
          paddingLeft: '10px',
          '&.MuiListItem-padding.MuiListItem-gutters': {
            paddingLeft: 'calc(1.25rem + 10px)',
            '&.MuiListItem-dense': {
              paddingLeft: 'calc(1rem + 10px)'
            }
          },
          '.MuiListItemButton-root': {
            borderRadius: '0 4px 4px 0',
            '&:active': {
              backgroundColor: tokens.colorActionFocus
            },
            '&.Mui-focusVisible': {
              border: `2px solid ${tokens.colorPrimaryMain}`,
              borderLeftWidth: 0,
              boxShadow: 'none',
              '&:not(:hover):not(:active)': {
                backgroundColor: 'transparent'
              }
            },
            '&.Mui-selected': {
              backgroundColor: tokens.colorActionHover,
              color: tokens.colorTextPrimary,
              borderColor: tokens.borderDisabled,
              '~ .MuiListItemSecondaryAction-root .MuiIconButton-root' : {
                color: tokens.colorTextPrimary
              },
              '&:hover': {
                backgroundColor: tokens.colorActionHover
              },
              '&:active': {
                backgroundColor: tokens.colorActionActive
              },
              '&.Mui-focusVisible': {
                backgroundColor: tokens.colorActionFocus
              },
            }
          },
          '@supports (selector(:has(a, b)))': {
            ':has(.MuiListItemButton-root.Mui-selected)': {
              borderColor: tokens.borderDisabled,
            },
            ':has(.MuiListItemButton-root.Mui-focusVisible)': {
              borderColor: tokens.colorPrimaryMain,
              boxShadow: `0 0 0px 1px ${tokens.colorPrimaryMain}`,
              '.MuiListItemButton-root.Mui-focusVisible': {
                border: '0px',
                boxShadow: 'none'
              }
            },
            ':has(.MuiListItemButton-root.Mui-focusVisible.Mui-selected)': {
              borderColor: tokens.colorPrimaryMain
            },
          }
        }
      }
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
              textDecoration: 'underline'
            }
          },
          'p': {
            marginBlockStart: 0,
            marginBlockEnd: 0
          }
        },
        avDateInfo: {
          minWidth: 'unset',
          whiteSpace: 'nowrap',
          '.MuiChip-root': {
            marginRight: '.25rem'
          }
        },
        avFavoriteHeart: {
          marginRight: '.25rem',
          marginLeft: '-.25rem',
          minWidth: 'auto'
        },
        iconLink: {
          marginRight: '.25rem',
          borderRadius: '50%',
          position: 'relative',
        }
      }
    },
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          borderColor: tokens.colorGrey100,
          '&:before': {
            content: 'none',
          },
        },
      },
    },
    MuiAccordionActions: {
      styleOverrides: {
        root: {
          padding: '1.25rem',
          flexWrap: 'wrap'
        },
        spacing: {
          rowGap: tokens.spacingBase
        }
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          minHeight: '1px',
          padding: '1.25rem',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          paddingY: '12px',
          paddingX: '20px',
          backgroundColor: tokens.colorGrey100,
          '&.Mui-focusVisible': {
            borderRadius: '4px',
            boxShadow: `inset 0 0 0px 2px ${tokens.colorSecondaryMain}, inset 0 0 0px 4px ${tokens.colorCommonWhite}`,
          },
        },
        content: {
          order: 2,
          fontWeight: tokens.fontWeightsBold,
        },
        avPrimaryContent: {
          fontWeight: tokens.fontWeightsBold,
        },
        expandIconWrapper: {
          order: 1,
          marginRight: '8px',
          padding: '2px',
          color: tokens.colorSecondaryMain,
          transform: 'rotate(-90deg)',
          '&.Mui-expanded': {
            transform: 'rotate(0deg)',
          },
        },
      },
    },
    MuiAlert: {
      defaultProps: {
        icon: false,
      },
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
        message: {
          color: 'inherit',
          padding: 0,
          wordBreak: 'break-word'
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
    MuiAutocomplete: {
      defaultProps: {
        size: 'small',
        fullWidth: true,
        clearOnEscape: true,
        ChipProps: {
          size: 'medium',
        },
      },
      styleOverrides: {
        root: {
          '.MuiOutlinedInput-root.MuiInputBase-sizeSmall': {
            paddingTop: '4px',
            paddingBottom: '4px'
          },
          '&.Mui-error .MuiAutocomplete-popupIndicator': {
            color: tokens.borderError,
          },
          '&.MuiAutocomplete-hasPopupIcon': {
            '.MuiAutocomplete-endAdornment': {
              right: '0px',
            },
            '.MuiInputBase-root.MuiInputBase-adornedEnd': {
              paddingRight: '2.5rem',
            },
            '&.MuiAutocomplete-hasClearIcon': {
              '.MuiInputBase-root.MuiInputBase-adornedEnd': {
                paddingRight: '4rem',
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
              top: 'unset',
              transform: 'unset',
            },
          },
        },
        inputRoot: {
          paddingTop: '4px',
          paddingBottom: '4px',
          '.MuiOutlinedInput-input.MuiAutocomplete-input': {
            minHeight: '24px',
            padding: '2px 6px',
          },
          '.MuiCircularProgress-root.MuiCircularProgress-indeterminate': {
            color: 'inherit',
            fontSize: '.5rem',
            marginRight: '-.5rem',
          },
          '.MuiChip-root.MuiChip-deletable': {
            flexDirection: 'row',
            backgroundColor: 'rgb(230, 230, 230)',
            '.MuiChip-label': {
              fontWeight: tokens.fontWeightsRegular,
            },
            '.MuiSvgIcon-root.MuiChip-deleteIcon': {
              margin:'0 -1px 0 5px',
              background: `radial-gradient(${tokens.colorTextPrimary}, ${tokens.colorTextPrimary}, rgb(230, 230, 230), rgb(230, 230, 230), rgb(230, 230, 230))`,
              color: 'rgb(230, 230, 230)',
              '&:hover': {
                background: `radial-gradient(${tokens.colorTextError}, ${tokens.colorTextError}, rgb(230, 230, 230), rgb(230, 230, 230), rgb(230, 230, 230))`,
                color: '#ffc0cb',
              }
            },
          }
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
              backgroundColor: 'rgba(50, 98, 175, 1)',
              fontWeight: 500,
            },
            '&.Mui-focused': {
              color: tokens.colorTextPrimary,
              backgroundColor: 'rgba(184, 212, 251,1)',
            },
          },
        },
        tag: {
          margin: '2px',
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
        li: {
          '.MuiLink-root:hover': {
            color: tokens.colorTextLink,
          },
        },
        separator: {
          marginLeft: '.25rem',
          marginRight: '.25rem',
          '.MuiSvgIcon-root': {
            width: '.8rem',
            height: '.8rem',
            marginBottom: '-2px',
            color: tokens.colorGrey400,
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
          lineHeight: '24px',
          boxShadow: 'none',
          textTransform: 'none',
          '.MuiButton-startIcon, .MuiButton-endIcon': {
            '.MuiSvgIcon-fontSizeInherit': {
              fontSize: 'inherit',
            },
          },
        },
        containedPrimary: { ...containedButtonStyles('Primary') },
        containedSecondary: { ...containedButtonStyles('Secondary') },
        containedTertiary: { ...containedButtonStyles('Tertiary') },
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
        root: {
          '&.MuiButtonGroup-horizontal.MuiButtonGroup-colorTertiary': {
            '.MuiButton-root:not(:first-of-type)': {
              borderLeft: '0'
            }
          },
          '&.MuiButtonGroup-vertical.MuiButtonGroup-colorTertiary': {
            '.MuiButton-root:not(:first-of-type)': {
              borderTop: '0'
            }
          }
        },
        grouped: {
          '&:focus': {
            zIndex: '1',
          },
        },
        groupedContained: { borderColor: important(tokens.colorPrimaryContrast) },
        groupedContainedPrimary: { border: 0, '&:focus:hover': { boxShadow: `0 0 0px 4px ${tokens.colorPrimaryDark}` } },
        groupedContainedSecondary: { border: 0, '&:focus:hover': { boxShadow: `0 0 0px 4px ${tokens.colorSecondaryDark}` } },
        groupedContainedTertiary: {
          borderColor: important(tokens.colorSecondaryMain),
          '&:focus:hover': {
            boxShadow: `0 0 0px 4px ${tokens.colorSecondaryDark}`,
            color: tokens.colorPrimaryContrast
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
          padding: '.75rem 1.25rem',
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
          padding: '2px 4px',
          '+ .MuiFormControlLabel-label, + div > .MuiFormControlLabel-label': {
            lineHeight: '1.25rem'
          },
          '&.PrivateSwitchBase-edgeStart': {
            marginLeft: '-4px'
          },
          '&.PrivateSwitchBase-edgeEnd': {
            marginRight: '-4px'
          },
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
              color: '#0075ff',
              '&:hover': {
                color: tokens.colorPrimaryMain,
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
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1em 1em' overflow='visible'%3E%3Crect x='16%' y='16%' rx='1' ry='1' width='68%' height='68%' stroke='transparent' fill='white' stroke-width='1' %3E%3C/rect%3E%3C/svg%3E")`,
            fontSize: '1rem',
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
          borderRadius: '.25rem',
          // Bug with state styles being overwritten when not defined in root https://github.com/mui/material-ui/issues/29703#issuecomment-1548356589
          '&.MuiChip-deletable': {
            flexDirection: 'row-reverse',
            '&:hover': {
              boxShadow: 'none',
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
          margin: '0 5px 0 -6px',
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
          padding: '0.25rem 0.4rem',
        },
        sizeMedium: {
          fontWeight: tokens.fontWeightsBold,
          padding: '0.25rem 0.6rem',
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        indeterminate: ({ ownerState }: { ownerState: any }) => {
          const fontSizeInPx = typeof ownerState.size === 'number' ? Math.round(ownerState.size / 2) : 16;
          const color = ownerState.color === 'inherit' ? 'currentColor' : '%2302a17c';
          return {
            '&.MuiCircularProgress-root.MuiCircularProgress-indeterminate': {
              display: 'inline-block',
              fontSize: `${fontSizeInPx}px`,
              height: important('1em'),
              width: important('calc(2.3em + 20px)'),
              marginRight: '-20px',
              animation: 'none',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1em 1em' font-size='${fontSizeInPx}px' overflow='visible'%3E%3Ctext dominant-baseline='central' fill='${color}' font-size='2em' y='.25em' x='0'%3E &%238226; %3Canimate attributeName='opacity' dur='3s' repeatCount='indefinite' values='0;1;1;0;0' keyTimes='0;0.3;0.6;0.8;1'/%3E%3CanimateTransform attributeName='transform' type='translate' values='20 0;0 0;0 0' keyTimes='0;0.3;1' dur='3s' repeatCount='indefinite' /%3E%3C/text%3E%3Ctext dominant-baseline='central' fill='${color}' font-size='2em' y='.25em' x='.4em'%3E &%238226; %3Canimate attributeName='opacity' dur='3s' repeatCount='indefinite' values='0;0;1;1;0;0' keyTimes='0;0.1;0.4;0.6;0.8;1'/%3E%3CanimateTransform attributeName='transform' type='translate' values='0 0;20 0;0 0;0 0' keyTimes='0;0.1;0.4;1' dur='3s' repeatCount='indefinite' /%3E%3C/text%3E%3Ctext dominant-baseline='central' fill='${color}' font-size='2em' y='.25em' x='.8em'%3E &%238226; %3Canimate attributeName='opacity' dur='3s' repeatCount='indefinite' values='0;0;1;1;0;0' keyTimes='0;0.2;0.5;0.6;0.8;1'/%3E%3CanimateTransform attributeName='transform' type='translate' values='0 0;20 0;0 0;0 0' keyTimes='0;0.2;0.5;1' dur='3s' repeatCount='indefinite' /%3E%3C/text%3E%3C/svg%3E%0A")`,
            },
          };
        },
        circleIndeterminate: {
          display: 'none',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
      styleOverrides: {
        root: {
          paddingLeft: '15px',
          paddingRight: '15px',
          '@media (min-width: 600px)': {
            paddingLeft: '15px',
            paddingRight: '15px',
          },
          '@media (min-width: 576px)': {
            maxWidth: '540px',
          },
          '@media (min-width: 768px)': {
            maxWidth: '720px',
          },
          '@media (min-width: 992px)': {
            maxWidth: '960px',
          },
          '@media (min-width: 1200px)': {
            maxWidth: '1140px',
          },
        },
      },
    },
    MuiDatePicker: {
      defaultProps: {
        disableHighlightToday: true,
      },
    },
    MuiDayCalendar: {
      styleOverrides: {
        root: {

        },
        weekDayLabel: {
          fontSize: '.75rem',
          width: '39px',
          height: '38px',
          border: `1px solid transparent`,
          margin: '0px -1px 0px 0px',
          color: tokens.colorSecondaryMain,
        },
        header: {
          margin: '0px 1px 1px 0px',
        },
        weekContainer: {
          margin: '0px 1px 0px 0px',
          '&:last-of-type': {
            marginBottom: '1px',
          },

        }
      }

    },
    MuiDialog: {
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '25rem'
        },
        maxWidthMd: {
          maxWidth: '39.75rem'
        },
        maxWidthLg: {
          maxWidth: '58.75rem'
        },
        maxWidthXl: {
          maxWidth: '71.25rem'
        },
        paper: {
          backgroundColor: tokens.colorGrey100
        },
        avCloseButton: {
          padding: '.75rem',
          '.MuiSvgIcon-root': {
            fontSize: '1.125rem',
          }
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.colorGrey100,
          padding: '1rem 1.5rem',
          flexWrap: 'wrap'
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
        dividers: true
      },
      styleOverrides: {
        root: {
          padding: '24px',
          backgroundColor: tokens.colorBackgroundPaper
        },
        divider: {
          borderColor: tokens.colorGrey100,
        }
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.colorGrey100,
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        size: 'small',
        fullWidth: true,
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          alignItems: 'start',
          marginLeft: '-4px',
          marginRight: '12px',
          '&.Mui-error': {
            '.MuiFormControlLabel-label': {
              color: tokens.colorTextError,
            },
          },
        },
        asterisk: {
          // required indicators shown on the group level
          display: 'none',
        },
        avWrapper: {
          display: 'flex',
          marginLeft: '-4px',
          marginRight: '12px',
          lineHeight: '1rem',
          // keep field help icon from wrapping
          textWrap: 'nowrap',
          '.MuiFormControlLabel-root': {
            margin: '0',
          },
        },
        label: {
          textWrap: 'wrap',
          overflowWrap: 'anywhere',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: '0px',
          fontSize: '.875rem',
          color: tokens.colorTextSecondary,
          '&.Mui-error': {
            color: tokens.colorTextError,
          },
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
          marginBottom: '.1rem',
          '&.Mui-error, &.Mui-error.Mui-focused, &.Mui-disabled': {
            color: tokens.colorTextPrimary,
          },
          '&.Mui-focused': {
            color: 'inherit',
          },
          // move required asterisk before text
          display: important('flex'),
          flexDirection: important('row-reverse'),
          justifyContent: important('flex-end'),
        },
        asterisk: {
          color: tokens.colorErrorMain,
          fontWeight: tokens.fontWeightsBold,
          marginRight: '.25rem',
          fontSize: '1.3rem',
          textWrapMode: 'nowrap',
        },
        avWrapper: {
          marginBottom: '.1rem',
          display: 'flex',
          flexDirection: 'row',
          lineHeight: '1.5rem',
          minHeight: '1.5rem',
          '.MuiFormLabel-root': {
            marginBottom: '0',
          },
          '&:has(legend), &:has(.legend), legend, .legend': {
            fontSize: '1.5rem',
            lineHeight: '2.25rem',
            marginBottom: '.5rem',
          },
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
    MuiInputBase: {
      defaultProps: {
        minRows: 2,
        maxRows: 3,
        size: 'small',
      },
      styleOverrides: {
        root: ({ ownerState }: { ownerState: { fullWidth: boolean | undefined } }) => {
          return {
            boxSizing: 'border-box',
            '&.MuiInputBase-root, &.MuiInputBase-root.MuiAutocomplete-inputRoot': {
              width: ownerState.fullWidth ? '100%' : '220px',
            },
            'label + &': {
              marginTop: '.5rem',
            },
            borderRadius: 4,
            position: 'relative',
            fontSize: '1rem',
            '.MuiOutlinedInput-input': {
              color: tokens.colorTextPrimary,
              '&::placeholder': {
                opacity: 1,
                color: tokens.colorTextDisabled,
              },
              '&.MuiInputBase-inputSizeSmall': {
                padding: '.375rem .75rem',
                lineHeight: '24px',
                minHeight: '24px',
              },
            },
            '.MuiSelect-avEndAdornmentDivider': {
              borderColor: tokens.borderDecorative,
              width: 'auto',
            },
            '.MuiChip-root': {
              lineHeight: '1.125rem',
              fontSize: '.875rem',
              padding: '3px 6px',
            },
          };
        },
        multiline: {
          padding: 0,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: '10px',
          borderRadius: '.25rem'
        },
        bar: {
          borderRadius: '.25rem'
        }
      }
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
        variant: 'body1',
      },
      styleOverrides: {
        root: {
          color: tokens.colorTextLink,
          '&:active, &:hover': {
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
              marginTop: '1rem',
              marginBottom: '-1rem',
              transform: 'translateY(-50%)'
            },
          },
          // no padding primarily used with ListItemButton
          '> .MuiIconButton-root, > .MuiChip-root': {
            transform: 'translateY(-50%)',
            marginTop: '1.5rem',
            marginBottom: '-1.5rem',
          },
          '.MuiListItemSecondaryAction-root': {
            top: '1.5rem'
          },
          '&.MuiListItem-padding > .MuiIconButton-root, > .MuiChip-root': {
            marginTop: '1rem',
            marginBottom: '-1rem',
          },
          '&.MuiListItem-dense': {
            '.MuiListItemButton-root > .MuiChip-root': {
              marginTop: '1.075rem',
              marginBottom: '-1.075rem',
            },
            '> .MuiIconButton-root, > .MuiChip-root': {
              marginTop: '1.375rem',
              marginBottom: '-1.375rem',
            },
            '.MuiListItemSecondaryAction-root': {
              top: '1.375rem'
            },
            '&.MuiListItem-padding': {
              '> .MuiIconButton-root, > .MuiChip-root': {
                marginTop: '1.075rem',
                marginBottom: '-1.075rem',
              },
            }
          }
        },
        dense: {
          '.MuiListItemText-inset': {
            paddingLeft: '2.5rem'
          },
          '.MuiListItemAvatar-root, .MuiListItemIcon-root': {
            minWidth: '2.5rem',
            '.MuiAvatar-root': {
              width: '1.5rem',
              height: '1.5rem',
              '.MuiSvgIcon-root': {
                fontSize: '.75rem'
              }
            }
          },
        },
        padding: {
          paddingTop: '.75rem',
          paddingBottom: '.75rem',
          '&.MuiListItem-gutters': {
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem'
          },
          '&.MuiListItem-dense': {
            paddingTop: '.25rem',
            paddingBottom: '.25rem',
            '&.MuiListItem-gutters': {
              paddingLeft: '1rem',
              paddingRight: '1rem'
            }
          }
        }
      }
    },
    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          '.MuiAvatar-root': {
            height: '2.5rem',
            width: '2.5rem',
            fontSize: '1rem'
          }
        },
      },
    },
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true
      },
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
            '.MuiListItemText-root, .MuiListItemText-root *, .MuiListItemSubheader-root, .MuiListItemSubheader-root *, .MuiListItemIcon-root, .MuiListItemIcon-root *, .MuiIconButton-root': {
              color: 'inherit'
            },
            '&.Mui-focusVisible': {
              backgroundColor: tokens.colorPrimaryDark,
              boxShadow: `inset 0 0 0px 2px ${tokens.colorPrimaryDark}, inset 0 0 0px 4px ${tokens.colorCommonWhite}`,
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
            '.MuiCheckbox-root .MuiSvgIcon-root': {
              backgroundImage: 'none'
            }
          },
          '&.Mui-focusVisible': {
            boxShadow: `inset 0 0 0px 2px ${tokens.colorSecondaryMain}, inset 0 0 0px 4px ${tokens.colorCommonWhite}`,
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
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        slotProps: {
          paper: {
            variant: 'outlined',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: tokens.colorActionSelected,
            color: tokens.colorTextInverse,
            '.MuiSvgIcon-root': {
              color: tokens.colorTextInverse,
            },
            '&:hover': {
              backgroundColor: tokens.colorActionSelected,
            },
          },
          '&:hover': {
            backgroundColor: tokens.colorActionHover,
          },
          '&:active': {
            backgroundColor: tokens.colorActionSelected,
          },
          '.MuiSvgIcon-root': {
            marginRight: '8px',
            color: tokens.colorSecondaryMain,
          },
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          backgroundColor: tokens.colorCommonWhite,
          '&.Mui-focused': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: tokens.borderInputFocus,
              borderWidth: '1px',
              boxShadow: `0 0 0px .2rem ${tokens.borderInputFocus}`,
            },
            '&.Mui-error': {
              '.MuiOutlinedInput-notchedOutline': {
                boxShadow: `0 0 0px .2rem ${tokens.borderError}`,
              },
            },
          },
          '&.Mui-error, &.Mui-error.Mui-focused': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: tokens.borderError,
            },
          },
          '&.Mui-disabled, &.Mui-readOnly': {
            backgroundColor: tokens.colorActionDisabledBg,
            borderColor: tokens.borderDisabled
          },
        },
        notchedOutline: {
          padding: 0,
          border: '1px solid',
          borderColor: tokens.borderInput,
        },
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
          lineHeight: '1.25rem',
          minWidth: 0,
          '.MuiSvgIcon-root': {
            fontSize: '.5rem',
          },
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
          margin: '-1px',
          border: '1px solid #ccc',
          backgroundColor: tokens.colorBackgroundCanvas,
          '&.Mui-selected:hover': {
            backgroundColor: tokens.colorPrimaryDark,
          },
        },
        text: {
          marginLeft: '-1px',
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
          borderColor: tokens.borderDecorative,
        },
      },
    },
    MuiPickersArrowSwitcher: {
      styleOverrides: {
        button: {
          width: '39px',
          height: '38px',
          margin: '0px 0px 0px -1px',
          padding: '0px',
          borderRadius: 0,
          border: `1px solid ${tokens.colorGrey200}`,
          fontSize: '1.5rem',
          '&.Mui-focused, &:focus': {
            outline: `none`,
            boxShadow: `0 0 0px 2px ${tokens.colorPrimaryDark} inset`,
          },
        },
        spacer: {
          width: 0,
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
        },
        labelContainer: {
          borderRadius: '4px',
          border: `1px solid ${tokens.borderInput}`,
          ':has(.Mui-focused), :focus-within': {
            outline: `2px solid ${tokens.colorPrimaryDark}`,
            boxShadow: 'none',
          },
        },
        label: {
          marginRight: '.25rem',
          marginLeft: '.25rem',
        },
        switchViewButton: {
          fontSize: '1.5rem',
          padding: '.25rem',
          '.Mui-focused, :focus': {
            outline: `none`,
            boxShadow: `none`,
          },
        },
      },
    },
    MuiPickersDay: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          width: '39px',
          height: '38px',
          margin: '0px -1px -1px 0px',
          borderRadius: 0,
          border: `1px solid ${tokens.colorGrey100}`,
          '.Mui-focused, :focus': {
            outline: `none`,
            boxShadow: `0 0 0px 2px ${tokens.colorPrimaryDark} inset`,
          },
          ':hover': {
            backgroundColor: tokens.colorGrey100,
          },
        },
        today: {
          '&:not(.Mui-selected), &:not(.Mui-focused)': {
            border: `1px solid ${tokens.colorGrey100}`
          }
        },
      },
    },
    MuiPickersMonth: {
      styleOverrides: {
        monthButton: {
          borderRadius: '4px',
          ':hover, :focus:not(.Mui-selected)': {
            backgroundColor: tokens.colorGrey100,
          },
        }
      }
    },
    MuiPickersPopper: {
      styleOverrides: {
        paper: {
          boxShadow: 'none',
          border: `1px solid ${tokens.borderDecorative}`,
        },
      },
    },
    MuiPickersYear: {
      styleOverrides: {
        yearButton: {
          borderRadius: '4px',
          ':hover, :focus:not(.Mui-selected)': {
            backgroundColor: tokens.colorGrey100,
          },
        }
      }
    },
    MuiPopover: {
      defaultProps: {
        elevation: 0,
        PaperProps: {
          variant: 'outlined',
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          padding: '4px',
          '.MuiSvgIcon-root': {
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1em 1em' overflow='visible'%3E%3Ccircle cx='50%' cy='50%' r='34%' stroke='transparent' fill='white' stroke-width='1' %3E%3C/circle%3E%3C/svg%3E")`,
            fontSize: '1rem',
          },
          '&.Mui-focusVisible .MuiSvgIcon-root:first-of-type': {
            boxShadow: `0 0 0px 2px ${tokens.colorPrimaryMain}`,
            borderRadius: '50%',
          },
          '&.MuiRadio-colorPrimary': {
            color: tokens.colorGrey500,
            '&:hover': {
              color: tokens.colorGrey900,
            },
            '&.Mui-checked': {
              color: '#0075ff',
              '&:hover': {
                color: tokens.colorPrimaryMain,
              },
            },
            '&.Mui-disabled': {
              color: tokens.colorGrey300,
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '&.Mui-error .MuiSelect-icon': {
            color: tokens.borderError,
          },
        },
        avExpandIcon: {
          position: 'relative',
          top: '50%',
          transform: 'translateY(-50%)',
        },
        icon: {
          color: tokens.borderInput,
          '&.MuiSvgIcon-root:not(.MuiTablePagination-selectIcon)': {
            width: '2rem',
            height: '2rem',
            top: 'unset',
          },
          '&.MuiStack-root': {
            right: '4px',
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
          '&.MuiInputBase-input': {
            paddingRight: '2.5rem',
          },
        },
      },
    },
    MuiStep: {
      styleOverrides: {
        vertical: {
          '+ .MuiStep-root': {
            // adding connector spacing when no connector present for legacy no bar styling
            marginTop: '16px'
          }
        }
      }
    },
    MuiStepButton: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          padding: '8px',
          margin: '-8px',
          '&:not(.Mui-disabled)': {
            ...outlinedButtonStyles('Tertiary'),
          },
        }
      }
    },
    MuiStepConnector: {
      styleOverrides: {
        root: {
          zIndex: 1,
          color: tokens.colorGrey300,
          '&.Mui-completed': {
            color: tokens.colorSuccessMain,
          },
          '&.Mui-active': {
            color: tokens.colorSuccessMain,
          },
        },
        line: {
          borderColor: 'inherit',
          borderWidth: '10px',
        },
        horizontal: {
          top: '10px',
          '&.MuiStepConnector-alternativeLabel': {
            left: 'calc(-50% + 10px)',
            right: 'calc(50% + 10px)'
          }
        },
        vertical: {
          '.MuiStepConnector-line': {
            // min-height 16px and negative 2px negative margin
            minHeight: '18px',
            borderWidth: '10px'
          },
          marginLeft: '10px',
          marginTop: '-1px',
          marginBottom: '-1px',
          '+ .MuiStep-vertical:not(:first-of-type) .MuiStepLabel-vertical:before': {
            content: '""',
            height: 'calc(50% - 14px)',
            width: '10px',
            left: '10px',
            top: '0px',
            backgroundColor: tokens.colorGrey300,
            zIndex: '-1',
            position: 'absolute'
          },
          '+ .MuiStep-vertical:not(:last-of-type) .MuiStepLabel-vertical:after': {
            content: '""',
            height: 'calc(50% - 14px)',
            width: '10px',
            left: '10px',
            bottom: '0px',
            backgroundColor: tokens.colorGrey300,
            zIndex: '-1',
            position: 'absolute'
          },
          '&.Mui-completed': {
            '+ .MuiStep-vertical:not(:first-of-type) .MuiStepLabel-vertical:before, + .MuiStep-vertical:not(:last-of-type) .MuiStepLabel-vertical:after': {
              backgroundColor: tokens.colorSuccessMain
            }
          },
          '&.Mui-active': {
            '+ .MuiStep-vertical:not(:first-of-type) .MuiStepLabel-vertical:before': {
              backgroundColor: tokens.colorSuccessMain
            }
          },
        }
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: tokens.colorCommonWhite,
          border: `2px solid ${tokens.colorSuccessMain}`,
          borderRadius: '50%',
          height: '30px',
          width: '30px',
          boxSizing: 'border-box',
          '&.Mui-active .MuiStepIcon-text': {
            fill: tokens.colorCommonWhite,
          },
          '&.Mui-active, &.Mui-completed': {
            color: tokens.colorSuccessMain,
          },
          '&.Mui-active, &.Mui-completed, &.Mui-error, &.MuiSvgIcon-colorWarning': {
            // keep borders to make icons smaller and maintain general size
            borderColor: 'currentColor',
            background: 'radial-gradient(transparent, transparent 65%, currentColor 65%)'
          },
        },
        text: {
          fill: tokens.colorTextPrimary,
          fontSize: '12px',
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignSelf: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 2
        },
        iconContainer: {
          '.MuiSvgIcon-colorWarning': {
            color: tokens.colorWarningDark,
          },
        },
        vertical: {
          padding: '0px'
        },
        label: {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          '&.MuiStepLabel-label.MuiStepLabel-alternativeLabel': {
            marginTop: '0px',
          },
          '&.Mui-active': {
            fontWeight: tokens.fontWeightsBold,
            color: tokens.colorSuccessMain
          },
          '&.Mui-completed:not(.Mui-active)': {
            fontWeight: tokens.fontWeightsRegular
          }
        },
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        fontSize: 'inherit',
      },
      styleOverrides: {
        colorInfo: {
          color: tokens.colorPrimaryMain,
        },
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
        size: 'small',
        disableRipple: true,
        disableFocusRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          height: '1.5em',
          width: '2.5em',
          padding: '.25em',
          '+ .MuiFormControlLabel-label, + div > .MuiFormControlLabel-label': {
            lineHeight: '1.5rem',
            paddingTop: '.375rem'
          },
          '.MuiSwitch-switchBase': {
            opacity: 1,
            padding: '0px',
            top: '.37em',
            left: '.37em',
            '.MuiSwitch-thumb': {
              color: tokens.borderInput,
              width: '.75em',
              height: '.75em',
            },
            '&.Mui-disabled': {
              opacity: .5,
              '+.MuiSwitch-track': {
                opacity: .5
              },
              '&.Mui-checked': {
                opacity: 1,
                '+.MuiSwitch-track': {
                  opacity: .5
                }
              }
            },
            '&.Mui-focusVisible+.MuiSwitch-track': {
              outline: '2px solid white',
              boxShadow: `0 0 0px 4px ${tokens.borderInput}`,
            },
            '&.Mui-checked': {
              transform: 'translateX(1em)',
              '.MuiSwitch-thumb': {
                color: tokens.colorCommonWhite,
                opacity: 1
              },
              '+ .MuiSwitch-track': {
                border: 'none',
                backgroundColor: '#0075ff',
                opacity: 'inherit'
              },
              '&.Mui-focusVisible+.MuiSwitch-track': {
                backgroundColor: tokens.colorPrimaryMain,
                boxShadow: `0 0 0px 4px ${tokens.colorPrimaryMain}`
              },
            },
          },
        },
        track: {
          backgroundColor: 'transparent',
          border: `1px solid ${tokens.borderInput}`,
          borderRadius: '.5em',
          opacity: 1
        },
        sizeSmall: {
          fontSize: '1rem',
          '+ .MuiFormControlLabel-label, + div > .MuiFormControlLabel-label': {
            paddingTop: '0px'
          },
        },
        sizeMedium: {
          fontSize: '1.5rem'
        },
      },
    },
    AvSwitchCheckedIcon: {
      styleOverrides: {
        root:{
          '& .Mui-checked': {
            '+ .MuiSwitch-track': {
              '&::before': {
                left: 7,
              }
            }
          }
        }
      }
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
          padding: '.75em 1em',
          borderTopLeftRadius: '.25rem',
          borderTopRightRadius: '.25rem',
          border: '1px solid',
          borderColor: 'transparent',
          marginBottom: '-1px',
          '&:hover': {
            borderColor: tokens.colorActionHover,
          },
          '&.Mui-focusVisible': {
            outline: `2px solid ${tokens.colorPrimaryMain}`,
            outlineOffset: '-2px',
            borderRadius: '.25rem',
          },
          '&.Mui-selected': {
            borderColor: tokens.borderDecorative,
            borderBottomColor: tokens.colorBackgroundPaper,
            color: tokens.colorTextPrimary,
          },
        },
        labelIcon: {
          minHeight: '3rem'
        }
      },
    },
    MuiTable: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          '&.striped': {
            '.MuiTableBody-root .MuiTableRow-root:nth-of-type(odd)': {
              backgroundColor: tokens.colorTertiaryLight,
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderTop: `1px solid ${tokens.colorGrey200}`,
          borderBottom: '0px',
          lineHeight: '1.5rem',
        },
        head: {
          fontWeight: tokens.fontWeightsBold,
        },
        header: {
          borderTop: '0px',
          paddingBottom: '.5rem',
          width: '100%',
          display: 'block',
        },
        sizeMedium: {
          padding: '.75rem',
          '&.MuiTableCell-header': {
            paddingBottom: '1.5rem',
          },
          '.MuiTableSortLabel-root': {
            width: '100%',
            height: '100%',
            margin: '-.75rem',
            padding: '.75rem',
          },
        },
        sizeSmall: {
          padding: '.25rem',
          '&.MuiTableCell-header': {
            paddingBottom: '.5rem',
          },
          '.MuiTableSortLabel-root': {
            width: '100%',
            height: '100%',
            margin: '-.25rem',
            padding: '.25rem',
          },
        },
      },
    },
    MuiTablePagination: {
      defaultProps: {
        rowsPerPageOptions: [],
        colSpan: 12,
      },
      styleOverrides: {
        actions: {
          order: 1,
          marginRight: '.5rem',
        },
        displayedRows: {
          order: 4,
          marginRight: '.5rem',
          marginTop: 'auto',
          marginBottom: 'auto',
        },
        input: {
          order: 3,
          borderRadius: '3px',
          border: `1px solid ${tokens.borderInput}`,
          marginLeft: '.25rem',
          marginRight: '.75rem',
          '&.MuiInputBase-root': {
            width: 'auto',
          },
        },
        select: {
          '&.MuiTablePagination-select.MuiSelect-select': {
            paddingBottom: '1px',
            paddingTop: '1px',
            paddingRight: '1.5rem',
            borderRadius: '.25rem',
            textAlignLast: 'center',
            marginTop: 'auto',
            marginBottom: 'auto',
          },
        },
        selectIcon: {
          fontSize: tokens.iconSizeXsmall,
        },
        selectLabel: {
          order: 2,
          marginTop: 'auto',
          marginBottom: 'auto',
        },
        spacer: {
          order: 0,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        head: {},
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          padding: '0px 6px',
          margin: '0px -6px',
          '&:hover': {
            backgroundColor: tokens.colorActionHover,
            '.MuiTableSortLabel-icon': {
              opacity: 1,
            },
          },
          '&:focus': {
            backgroundColor: tokens.colorActionFocus,
          },
          '&.Mui-active .MuiTableSortLabel-icon': {
            opacity: 1,
          },
        },
        icon: {
          fontSize: 'inherit',
          opacity: 0.4,
          transition: 'none',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          borderBottom: '1px solid #dee2e6',
        },
        indicator: {
          display: 'none',
        },
        avSecondary: {
          '.MuiTab-root:hover, .MuiTab-root:hover.Mui-selected': {
            backgroundColor: tokens.colorBackgroundPaper,
          },}
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
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
          backgroundColor: tokens.colorGrey700,
          fontSize: '.875rem',
          fontStyle: 'normal',
          padding: '5px',
        },
        arrow: {
          color: tokens.colorGrey700,
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
