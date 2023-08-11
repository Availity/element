import{t as o}from"./index-cbae4294.js";var i=r=>`${r} !important`,e=r=>({backgroundColor:o[`color${r}Main`],color:o[`color${r}Contrast`],"&:hover":{backgroundColor:o[`color${r}Dark`],boxShadow:"none"},"&:focus":{backgroundColor:o[`color${r}Dark`],outline:"2px solid white",boxShadow:`0 0 0px 4px ${o[`color${r}Dark`]}`},"&:active":{backgroundColor:o[`color${r}Main`]}}),t=r=>({"&:hover":{backgroundColor:`${o[`color${r}Main`]}21`},"&:focus":{outline:"2px solid white",boxShadow:`0 0 0px 4px ${o[`color${r}Main`]}`,backgroundColor:`${o[`color${r}Main`]}21`},"&:active":{backgroundColor:`${o[`color${r}Main`]}42`}}),l={mode:"light",palette:{primary:{main:o.colorPrimaryMain,light:o.colorPrimaryLight,dark:o.colorPrimaryDark,darker:o.colorPrimaryDarker},secondary:{main:o.colorSecondaryMain,light:o.colorSecondaryLight,dark:o.colorSecondaryDark,darker:o.colorSecondaryDarker},tertiary:{main:o.colorTertiaryMain,light:o.colorTertiaryLight,dark:o.colorTertiaryDark,darker:o.colorTertiaryDarker},error:{main:o.colorErrorMain,light:o.colorErrorLight,dark:o.colorErrorDark,darker:o.colorErrorDarker},warning:{main:o.colorWarningMain,light:o.colorWarningLight,dark:o.colorWarningDark,darker:o.colorWarningDarker},info:{main:o.colorInfoMain,light:o.colorInfoLight,dark:o.colorInfoDark,darker:o.colorInfoDarker},success:{main:o.colorSuccessMain,light:o.colorSuccessLight,dark:o.colorSuccessDark,darker:o.colorSuccessDarker},grey:{50:o.colorGrey50,100:o.colorGrey100,200:o.colorGrey200,300:o.colorGrey300,400:o.colorGrey400,500:o.colorGrey500,600:o.colorGrey600,700:o.colorGrey700,800:o.colorGrey800,900:o.colorGrey900},indigo:{50:o.colorIndigo50,100:o.colorIndigo100,200:o.colorIndigo200,300:o.colorIndigo300,400:o.colorIndigo400,500:o.colorIndigo500,600:o.colorIndigo600,700:o.colorIndigo700,800:o.colorIndigo800,900:o.colorIndigo900},purple:{50:o.colorPurple50,100:o.colorPurple100,200:o.colorPurple200,300:o.colorPurple300,400:o.colorPurple400,500:o.colorPurple500,600:o.colorPurple600,700:o.colorPurple700,800:o.colorPurple800,900:o.colorPurple900},blue:{50:o.colorBlue50,100:o.colorBlue100,200:o.colorBlue200,300:o.colorBlue300,400:o.colorBlue400,500:o.colorBlue500,600:o.colorBlue600,700:o.colorBlue700,800:o.colorBlue800,900:o.colorBlue900},contrastThreshold:4.5,contrastText:"#fff",tonalOffset:.2,text:{primary:o.colorTextPrimary,secondary:o.colorTextSecondary,disabled:o.colorTextDisabled,error:o.colorErrorMain,hint:"rgba(0, 0, 0, 0.38)",divider:"rgba(0, 0, 0, 0.12)",success:o.colorSuccessMain,info:o.colorTextPrimary,link:o.colorTextPrimary,inverse:o.colorCommonWhite,inverseSecondary:"#ffffff24"},border:{primary:o.colorPrimaryMain,secondary:o.colorGrey400,error:o.colorErrorMain,disabled:o.colorGrey300,decorative:o.colorGrey200,input:o.colorGrey400,inputHover:o.colorGrey600,inputFocus:o.colorPrimaryMain,inverse:o.colorCommonWhite,inverseSecondary:"#ffffff24"},background:{canvas:o.colorBackgroundCanvas,paper:o.colorBackgroundPaper,header:o.colorBackgroundHeader,subnav:o.colorBackgroundSubnav,sidenav:o.colorBackgroundSidenav,accent:o.colorBackgroundAccent,border:o.colorBackgroundBorder,default:o.colorGrey100},action:{active:o.colorActionActive,hover:o.colorActionHover,hoverOpacity:.04,selected:o.colorActionSelected,selectedOpacity:.08,disabled:o.colorActionDisabled,disabledBackground:o.colorActionDisabledBg,disabledOpacity:.38,focus:o.colorActionFocus,focusOpacity:.12,activatedOpacity:.12}},typography:{htmlFontSize:16,fontFamily:o.fontFamiliesBase,fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,d1:{fontSize:o.typographyD1FontSize,fontWeight:o.typographyD1FontWeight,fontFamily:o.typographyD1FontFamily,letterSpacing:o.typographyD1LetterSpacing,color:o.colorTextPrimary},d2:{fontSize:o.typographyD2FontSize,fontWeight:o.typographyD2FontWeight,fontFamily:o.typographyD2FontFamily,letterSpacing:o.typographyD2LetterSpacing,color:o.colorTextPrimary},h1:{fontSize:o.typographyH1FontSize,fontWeight:o.typographyH1FontWeight,fontFamily:o.typographyH1FontFamily,letterSpacing:o.typographyH1LetterSpacing,color:o.colorTextPrimary},h2:{fontSize:o.typographyH2FontSize,fontWeight:o.typographyH2FontWeight,fontFamily:o.typographyH2FontFamily,letterSpacing:o.typographyH2LetterSpacing,color:o.colorTextPrimary},h3:{fontSize:o.typographyH3FontSize,fontWeight:o.typographyH3FontWeight,fontFamily:o.typographyH3FontFamily,letterSpacing:o.typographyH3LetterSpacing,color:o.colorTextPrimary},h4:{fontSize:o.typographyH4FontSize,fontWeight:o.typographyH4FontWeight,fontFamily:o.typographyH4FontFamily,letterSpacing:o.typographyH4LetterSpacing,color:o.colorTextPrimary},h5:{fontSize:o.typographyH5FontSize,fontWeight:o.typographyH5FontWeight,fontFamily:o.typographyH5FontFamily,letterSpacing:o.typographyH5LetterSpacing,color:o.colorTextPrimary},h6:{fontSize:o.typographyH6FontSize,fontWeight:o.typographyH6FontWeight,fontFamily:o.typographyH6FontFamily,letterSpacing:o.typographyH6LetterSpacing,color:o.colorTextPrimary,lineHeight:o.lineHeightsH6},subtitle1:{fontSize:o.typographySubtitle1FontSize,fontWeight:o.typographySubtitle1FontWeight,fontFamily:o.typographySubtitle1FontFamily,letterSpacing:o.typographySubtitle1LetterSpacing,color:o.colorTextPrimary},subtitle2:{fontSize:o.typographySubtitle2FontSize,fontWeight:o.typographySubtitle2FontWeight,fontFamily:o.typographySubtitle2FontFamily,letterSpacing:o.typographySubtitle2LetterSpacing,color:o.colorTextPrimary,lineHeight:o.lineHeightsSubtitle2},body1:{fontSize:o.typographyBody1FontSize,fontWeight:o.typographyBody1FontWeight,fontFamily:o.typographyBody1FontFamily,letterSpacing:o.typographyBody1LetterSpacing,color:o.colorTextPrimary},body2:{fontSize:o.typographyBody2FontSize,fontWeight:o.typographyBody2FontWeight,fontFamily:o.typographyBody2FontFamily,letterSpacing:o.typographyBody2LetterSpacing,color:o.colorTextPrimary},button:{fontSize:"0.875rem",fontWeight:o.fontWeightsRegular,fontFamily:o.fontFamiliesBase,letterSpacing:.2},caption:{fontSize:o.typographyCaptionFontSize,fontWeight:o.typographyCaptionFontWeight,fontFamily:o.typographyCaptionFontFamily,letterSpacing:o.typographyCaptionLetterSpacing,color:o.colorTextPrimary},overline:{fontSize:o.typographyOverlineFontSize,fontWeight:o.typographyOverlineFontWeight,fontFamily:o.typographyOverlineFontFamily,letterSpacing:o.typographyOverlineLetterSpacing,color:o.colorTextPrimary}},components:{MuiAlert:{styleOverrides:{standardSuccess:{backgroundColor:o.colorGreen100},standardError:{backgroundColor:o.colorRed50},standardWarning:{backgroundColor:o.colorYellow50},standardInfo:{backgroundColor:o.colorBlue50},action:{margin:"-3px -3px -3px auto",padding:"0 0 0 8px"},icon:({ownerState:r})=>({...r.severity==="success"&&{color:i(o.colorGreen600)},opacity:1,padding:"4px",margin:0,fontSize:o.fontSizesBody1}),message:{color:o.colorTextPrimary,padding:0},root:{border:"none",fontSize:o.fontSizesBody1,lineHeight:o.lineHeightsBody1,padding:"8px"}}},MuiAlertTitle:{styleOverrides:{root:{margin:0,fontWeight:o.fontWeightsBold},message:{fontSize:o.fontSizesBody1,lineHeight:o.lineHeightsBody1,padding:"8px"}}},MuiAvatar:{styleOverrides:{colorDefault:{backgroundColor:o.colorGrey300,color:o.colorTextSecondary}}},MuiBreadcrumbs:{styleOverrides:{root:{".MuiButtonBase-root":{backgroundColor:"transparent"},".breadcrumbs__collapsed-icon":{color:o.colorPrimaryMain}}}},MuiButton:{defaultProps:{disableRipple:!0,disableElevation:!0,variant:"contained"},styleOverrides:{root:{boxShadow:"none",fontWeight:o.fontWeightsBold,textTransform:"none"},containedPrimary:{...e("Primary")},containedSecondary:{...e("Secondary")},containedTertiary:{...e("Tertiary"),"&:focus":{backgroundColor:o.colorTertiaryDark,outline:"2px solid white",boxShadow:`0 0 0px 4px ${o.colorSecondaryDark}`}},containedSuccess:{...e("Success")},containedWarning:{...e("Warning")},containedError:{...e("Error")},outlinedPrimary:{...t("Primary")},outlinedSecondary:{...t("Secondary")},outlinedTertiary:{color:o.colorSecondaryMain,...t("Secondary")},outlinedSuccess:{...t("Success")},outlinedWarning:{...t("Warning")},outlinedError:{...t("Error")}}},MuiCard:{styleOverrides:{root:{backgroundColor:o.colorBackgroundPaper,maxWidth:"345px"}}},MuiCardActions:{styleOverrides:{root:{padding:"16px"}}},MuiCardContent:{styleOverrides:{root:{fontSize:o.typographyBody2FontSize,fontWeight:o.typographyBody2FontWeight,fontFamily:o.typographyBody2FontFamily,letterSpacing:o.typographyBody2LetterSpacing,color:o.colorTextPrimary}}},MuiCardHeader:{styleOverrides:{root:{backgroundColor:o.colorBackgroundCanvas,color:o.colorTextPrimary}}},MuiCardMedia:{styleOverrides:{maxHeight:"100px"}},MuiChip:{defaultProps:{color:"default"},styleOverrides:{root:{height:"auto","&.MuiChip-deletable":{"&:hover":{backgroundColor:o.colorActionFocus,boxShadow:"none",".MuiChip-deleteIcon":{color:o.colorSecondaryLight}},"&.Mui-focusVisible":{backgroundColor:o.colorActionFocus,outline:"2px solid white",boxShadow:`0 0 0px 4px ${o.colorSecondaryLight}`,".MuiChip-deleteIcon":{color:o.colorSecondaryLight}}}},avatar:{margin:"0",height:"1.125rem",width:"1.125rem"},avatarColorDefault:{backgroundColor:o.colorGrey300},deleteIcon:{fontSize:"1rem",margin:"0",transition:"color 300ms"},label:{fontSize:"inherit",padding:"0px 6px"},colorDefault:{backgroundColor:o.colorGrey100},sizeSmall:{fontWeight:o.fontWeightsBold,fontSize:".75rem",verticalAlign:"text-bottom",borderRadius:"50px"},sizeMedium:{fontWeight:o.fontWeightsRegular,padding:"3px 4px"}}},MuiIconButton:{defaultProps:{disableRipple:!0},styleOverrides:{root:{color:o.colorTextPrimary,"&:hover":{backgroundColor:o.colorTertiaryDark},"&:focus":{backgroundColor:o.colorTertiaryDark,outline:`2px solid ${o.colorCommonWhite}`,boxShadow:`0 0 0px 4px ${o.colorSecondaryLight}`}}}},MuiLink:{defaultProps:{underline:"hover"},styleOverrides:{root:{fontWeight:o.fontWeightsBold,"&:active":{color:o.colorTextPrimary},"&:visited":{color:o.colorIndigo600}}}},MuiPaper:{defaultProps:{variant:"outlined"},styleOverrides:{root:{borderColor:o.colorBackgroundBorder}}},MuiSvgIcon:{defaultProps:{fontSize:"inherit"}},MuiTab:{styleOverrides:{root:{textTransform:"unset",fontSize:o.typographyBody1FontSize,fontWeight:o.typographyBody1FontWeight,fontFamily:o.typographyBody1FontFamily,letterSpacing:o.typographyBody1LetterSpacing,color:o.colorTextPrimary,padding:"11px 8px","&:hover":{backgroundColor:o.colorBackgroundBorder},"&:Mui-selected":{color:o.colorPrimaryMain}}}},MuiTabs:{styleOverrides:{root:{backgroundColor:o.colorBackgroundCanvas,height:"3rem"}}},MuiToggleButton:{defaultProps:{size:"small"},styleOverrides:{root:{textTransform:"unset",backgroundColor:o.colorTertiaryMain,fontWeight:o.fontWeightsBold,"&.Mui-selected":{backgroundColor:o.colorTertiaryDarker,borderColor:o.colorTertiaryDarker,color:o.colorTextInverse,"&:hover":{backgroundColor:o.colorTertiaryDark,borderColor:o.colorTertiaryMain,color:o.colorTextInverse}},"&:focus":{boxShadow:`0 0 0px 2px ${o.colorTertiaryDark}50`},"&:hover":{backgroundColor:o.colorTertiaryDark,borderColor:o.colorTertiaryMain,color:o.colorTextInverse},"&.MuiToggleButton-sizeSmall":{padding:"8px 16px"},"&.MuiToggleButton-sizeMedium":{padding:"12px 16px"},"&.MuiToggleButton-sizeLarge":{padding:"16px"},"&.Mui-disabled":{backgroundColor:o.colorActionDisabledBg,borderColor:o.colorActionDisabledBg,color:o.colorActionDisabled}}}},MuiToggleButtonGroup:{defaultProps:{size:"small"}},MuiTooltip:{defaultProps:{arrow:!0},styleOverrides:{tooltip:{backgroundColor:o.colorGrey400,fontSize:".785rem",fontStyle:"normal",padding:"2px 8px"}}}}};export{l};
//# sourceMappingURL=index-19306206.js.map
