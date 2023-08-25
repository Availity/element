import{l as o,t as r}from"./index-e84e717e.js";var c=e=>`${e} !important`,i=e=>({backgroundColor:o[`color${e}Main`],color:o[`color${e}Contrast`],"&:hover":{backgroundColor:o[`color${e}Dark`],boxShadow:"none"},"&:focus":{backgroundColor:o[`color${e}Dark`],outline:"2px solid white",boxShadow:`0 0 0px 4px ${o[`color${e}Dark`]}`},"&:active":{backgroundColor:o[`color${e}Main`]}}),a=e=>({"&:hover":{backgroundColor:`${o[`color${e}Main`]}21`},"&:focus":{outline:"2px solid white",boxShadow:`0 0 0px 4px ${o[`color${e}Main`]}`,backgroundColor:`${o[`color${e}Main`]}21`},"&:active":{backgroundColor:`${o[`color${e}Main`]}42`}}),g={mode:"light",palette:{primary:{main:o.colorPrimaryMain,light:o.colorPrimaryLight,dark:o.colorPrimaryDark,darker:o.colorPrimaryDarker},secondary:{main:o.colorSecondaryMain,light:o.colorSecondaryLight,dark:o.colorSecondaryDark,darker:o.colorSecondaryDarker},tertiary:{main:o.colorTertiaryMain,light:o.colorTertiaryLight,dark:o.colorTertiaryDark,darker:o.colorTertiaryDarker},error:{main:o.colorErrorMain,light:o.colorErrorLight,dark:o.colorErrorDark,darker:o.colorErrorDarker},warning:{main:o.colorWarningMain,light:o.colorWarningLight,dark:o.colorWarningDark,darker:o.colorWarningDarker},info:{main:o.colorInfoMain,light:o.colorInfoLight,dark:o.colorInfoDark,darker:o.colorInfoDarker},success:{main:o.colorSuccessMain,light:o.colorSuccessLight,dark:o.colorSuccessDark,darker:o.colorSuccessDarker},grey:{50:o.colorGrey50,100:o.colorGrey100,200:o.colorGrey200,300:o.colorGrey300,400:o.colorGrey400,500:o.colorGrey500,600:o.colorGrey600,700:o.colorGrey700,800:o.colorGrey800,900:o.colorGrey900},indigo:{50:o.colorIndigo50,100:o.colorIndigo100,200:o.colorIndigo200,300:o.colorIndigo300,400:o.colorIndigo400,500:o.colorIndigo500,600:o.colorIndigo600,700:o.colorIndigo700,800:o.colorIndigo800,900:o.colorIndigo900},purple:{50:o.colorPurple50,100:o.colorPurple100,200:o.colorPurple200,300:o.colorPurple300,400:o.colorPurple400,500:o.colorPurple500,600:o.colorPurple600,700:o.colorPurple700,800:o.colorPurple800,900:o.colorPurple900},blue:{50:o.colorBlue50,100:o.colorBlue100,200:o.colorBlue200,300:o.colorBlue300,400:o.colorBlue400,500:o.colorBlue500,600:o.colorBlue600,700:o.colorBlue700,800:o.colorBlue800,900:o.colorBlue900},contrastThreshold:4.5,contrastText:"#fff",tonalOffset:.2,text:{primary:o.colorTextPrimary,secondary:o.colorTextSecondary,disabled:o.colorTextDisabled,error:o.colorErrorMain,hint:"rgba(0, 0, 0, 0.38)",divider:"rgba(0, 0, 0, 0.12)",success:o.colorSuccessMain,info:o.colorTextPrimary,link:o.colorTextPrimary,inverse:o.colorCommonWhite,inverseSecondary:"#ffffff24"},border:{primary:o.colorPrimaryMain,secondary:o.colorGrey400,error:o.colorErrorMain,disabled:o.colorGrey300,decorative:o.colorGrey200,input:o.colorGrey400,inputHover:o.colorGrey600,inputFocus:o.colorPrimaryMain,inverse:o.colorCommonWhite,inverseSecondary:"#ffffff24"},background:{canvas:o.colorBackgroundCanvas,paper:o.colorBackgroundPaper,header:o.colorBackgroundHeader,subnav:o.colorBackgroundSubnav,sidenav:o.colorBackgroundSidenav,accent:o.colorBackgroundAccent,border:o.colorBackgroundBorder,default:o.colorGrey100},action:{active:o.colorActionActive,hover:o.colorActionHover,hoverOpacity:.04,selected:o.colorActionSelected,selectedOpacity:.08,disabled:o.colorActionDisabled,disabledBackground:o.colorActionDisabledBg,disabledOpacity:.38,focus:o.colorActionFocus,focusOpacity:.12,activatedOpacity:.12}},typography:{htmlFontSize:16,fontFamily:"'Helvetica Neue', Helvetica, Arial, sans-serif",fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,d1:{fontSize:o.typographyD1FontSize,fontWeight:o.typographyD1FontWeight,fontFamily:o.typographyD1FontFamily,letterSpacing:o.typographyD1LetterSpacing,color:o.colorTextPrimary},d2:{fontSize:o.typographyD2FontSize,fontWeight:o.typographyD2FontWeight,fontFamily:o.typographyD2FontFamily,letterSpacing:o.typographyD2LetterSpacing,color:o.colorTextPrimary},h1:{fontSize:o.typographyH1FontSize,fontWeight:o.typographyH1FontWeight,fontFamily:o.typographyH1FontFamily,letterSpacing:o.typographyH1LetterSpacing,color:o.colorTextPrimary},h2:{fontSize:o.typographyH2FontSize,fontWeight:o.typographyH2FontWeight,fontFamily:o.typographyH2FontFamily,letterSpacing:o.typographyH2LetterSpacing,color:o.colorTextPrimary},h3:{fontSize:o.typographyH3FontSize,fontWeight:o.typographyH3FontWeight,fontFamily:o.typographyH3FontFamily,letterSpacing:o.typographyH3LetterSpacing,color:o.colorTextPrimary},h4:{fontSize:o.typographyH4FontSize,fontWeight:o.typographyH4FontWeight,fontFamily:o.typographyH4FontFamily,letterSpacing:o.typographyH4LetterSpacing,color:o.colorTextPrimary},h5:{fontSize:o.typographyH5FontSize,fontWeight:o.typographyH5FontWeight,fontFamily:o.typographyH5FontFamily,letterSpacing:o.typographyH5LetterSpacing,color:o.colorTextPrimary},h6:{fontSize:o.typographyH6FontSize,fontWeight:o.typographyH6FontWeight,fontFamily:o.typographyH6FontFamily,letterSpacing:o.typographyH6LetterSpacing,color:o.colorTextPrimary,lineHeight:o.lineHeightsH6},subtitle1:{fontSize:o.typographySubtitle1FontSize,fontWeight:o.typographySubtitle1FontWeight,fontFamily:o.typographySubtitle1FontFamily,letterSpacing:o.typographySubtitle1LetterSpacing,color:o.colorTextPrimary},subtitle2:{fontSize:o.typographySubtitle2FontSize,fontWeight:o.typographySubtitle2FontWeight,fontFamily:o.typographySubtitle2FontFamily,letterSpacing:o.typographySubtitle2LetterSpacing,color:o.colorTextPrimary,lineHeight:o.lineHeightsSubtitle2},body1:{fontSize:o.typographyBody1FontSize,fontWeight:o.typographyBody1FontWeight,fontFamily:o.typographyBody1FontFamily,letterSpacing:o.typographyBody1LetterSpacing,color:o.colorTextPrimary},body2:{fontSize:o.typographyBody2FontSize,fontWeight:o.typographyBody2FontWeight,fontFamily:o.typographyBody2FontFamily,letterSpacing:o.typographyBody2LetterSpacing,color:o.colorTextPrimary},button:{fontSize:"0.875rem",fontWeight:o.fontWeightsRegular,fontFamily:o.fontFamiliesBase,letterSpacing:.2},caption:{fontSize:o.typographyCaptionFontSize,fontWeight:o.typographyCaptionFontWeight,fontFamily:o.typographyCaptionFontFamily,letterSpacing:o.typographyCaptionLetterSpacing,color:o.colorTextPrimary},overline:{fontSize:o.typographyOverlineFontSize,fontWeight:o.typographyOverlineFontWeight,fontFamily:o.typographyOverlineFontFamily,letterSpacing:o.typographyOverlineLetterSpacing,color:o.colorTextPrimary}},components:{MuiAlert:{styleOverrides:{standardSuccess:{backgroundColor:o.colorSuccessMain,color:o.colorSuccessContrast},standardError:{backgroundColor:o.colorErrorMain,color:o.colorErrorContrast},standardWarning:{backgroundColor:o.colorWarningMain,color:o.colorWarningContrast,".MuiAlert-icon .MuiSvgIcon-root":{fill:o.colorWarningContrast}},standardInfo:{backgroundColor:o.colorPrimaryMain,color:o.colorPrimaryContrast},action:{margin:"-3px -3px -3px auto",padding:"0 0 0 8px",alignItems:"center",color:"inherit"},icon:{padding:"0",alignItems:"center",".MuiSvgIcon-root":{fill:o.colorPrimaryContrast,color:o.colorPrimaryContrast}},message:{color:"inherit",padding:0},root:{border:"none",fontSize:o.fontSizesBody1,lineHeight:o.lineHeightsBody1,padding:"0.75rem 1.25rem"}}},MuiAlertTitle:{styleOverrides:{root:{margin:0,fontWeight:o.fontWeightsBold,color:"inherit"},message:{fontSize:o.fontSizesBody1,lineHeight:o.lineHeightsBody1,padding:"8px"}}},MuiAvatar:{styleOverrides:{colorDefault:{backgroundColor:o.colorGrey300,color:o.colorTextSecondary}}},MuiBreadcrumbs:{styleOverrides:{root:{".MuiButtonBase-root":{backgroundColor:"transparent"},".breadcrumbs__collapsed-icon":{color:o.colorPrimaryMain}},separator:{".MuiSvgIcon-root":{width:"1rem",height:"1rem",marginX:".5rem",fontSize:"1rem"}}}},MuiButton:{defaultProps:{disableRipple:!0,disableElevation:!0,variant:"contained"},styleOverrides:{root:{boxShadow:"none",fontWeight:o.fontWeightsBold,textTransform:"none"},containedPrimary:{...i("Primary")},containedSecondary:{...i("Secondary")},containedTertiary:{...i("Tertiary"),"&:focus":{backgroundColor:o.colorTertiaryDark,outline:"2px solid white",boxShadow:`0 0 0px 4px ${o.colorSecondaryDark}`}},containedSuccess:{...i("Success")},containedWarning:{...i("Warning")},containedError:{...i("Error")},outlinedPrimary:{...a("Primary")},outlinedSecondary:{...a("Secondary")},outlinedTertiary:{color:o.colorSecondaryMain,...a("Secondary")},outlinedSuccess:{...a("Success")},outlinedWarning:{...a("Warning")},outlinedError:{...a("Error")}}},MuiButtonGroup:{defaultProps:{color:"secondary",variant:"contained",disableElevation:!0,disableRipple:!0},styleOverrides:{grouped:{"&:focus":{zIndex:"1"}},groupedContained:{borderColor:c(o.colorPrimaryContrast)},groupedContainedPrimary:{"&:focus:hover":{boxShadow:`0 0 0px 4px ${o.colorPrimaryDark}`}},groupedContainedSecondary:{"&:focus:hover":{boxShadow:`0 0 0px 4px ${o.colorSecondaryDark}`}},groupedContainedTertiary:{borderColor:c(o.colorSecondaryMain),"&:focus:hover":{boxShadow:`0 0 0px 4px ${o.colorSecondaryDark}`}}}},MuiCard:{styleOverrides:{root:{backgroundColor:o.colorBackgroundPaper,maxWidth:"345px"}}},MuiCardActions:{styleOverrides:{root:{padding:"16px"}}},MuiCardContent:{styleOverrides:{root:{fontSize:o.typographyBody2FontSize,fontWeight:o.typographyBody2FontWeight,fontFamily:o.typographyBody2FontFamily,letterSpacing:o.typographyBody2LetterSpacing,color:o.colorTextPrimary}}},MuiCardHeader:{styleOverrides:{root:{backgroundColor:o.colorBackgroundCanvas,color:o.colorTextPrimary}}},MuiCardMedia:{styleOverrides:{maxHeight:"100px"}},MuiChip:{defaultProps:{color:"default"},styleOverrides:{root:{height:"auto",fontSize:".75rem",lineHeight:".75rem","&.MuiChip-deletable":{"&:hover":{backgroundColor:o.colorActionFocus,boxShadow:"none",".MuiChip-deleteIcon":{color:o.colorSecondaryLight}},"&.Mui-focusVisible":{backgroundColor:o.colorActionFocus,outline:"2px solid white",boxShadow:`0 0 0px 4px ${o.colorSecondaryLight}`,".MuiChip-deleteIcon":{color:o.colorSecondaryLight}}}},avatar:{margin:"0 .2rem 0 -.2rem",height:"1rem",width:"1rem"},avatarColorDefault:{backgroundColor:o.colorGrey300},deleteIcon:{fontSize:"1rem",margin:"0 -.2rem 0 .2rem",transition:"color 300ms"},label:{fontSize:"inherit",padding:"0px"},colorDefault:{backgroundColor:o.colorGrey100},sizeSmall:{fontWeight:o.fontWeightsBold,verticalAlign:"text-bottom",borderRadius:".25rem",padding:"0.25rem 0.4rem"},sizeMedium:{fontWeight:o.fontWeightsRegular,borderRadius:"10rem",padding:"0.25rem 0.6rem"}}},MuiIconButton:{defaultProps:{disableRipple:!0},styleOverrides:{root:{borderRadius:"3px","&:hover":{},"&:focus":{outline:`2px solid ${o.colorCommonWhite}`,boxShadow:`0 0 0px 4px ${o.colorPrimaryMain}`}},colorDefault:{color:o.colorTextPrimary}}},MuiFormLabel:{defaultProps:{shrink:!1},styleOverrides:{root:{display:"flex",flexDirection:"row-reverse",justifyContent:"flex-end","&.Mui-error":{color:o.colorTextError},"&.Mui-disabled":{color:o.colorTextDisabled}},asterisk:{color:o.colorTextError,fontWeight:o.fontWeightsBold,marginRight:".25rem",fontSize:"1.3rem",lineHeight:"100%"}}},MuiInputLabel:{defaultProps:{shrink:!0},styleOverrides:{root:{position:"relative",display:"flex",transform:"none",transition:"none",animation:"none"}}},MuiInputBase:{StyleOverrides:{root:{"label + &":{marginTop:".5rem"}},input:{borderRadius:4,position:"relative",border:"1px solid",borderColor:o.borderInput,fontSize:16,width:"auto",padding:"10px 12px","&:focus":{boxShadow:`0 0 0px 4px ${o.borderInputFocus}`},"&.Mui-error":{borderColor:o.borderError,"&:focus":{boxShadow:`0 0 0px 4px ${o.borderInputFocus}`}}}}},MuiLink:{defaultProps:{underline:"hover"},styleOverrides:{root:{color:o.colorTextLink,fontWeight:o.fontWeightsBold,"&:active":{color:o.colorTextPrimary},"&:visited":{color:o.colorIndigo600}}}},MuiMenu:{defaultProps:{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}}},MuiOutlinedInput:{defaultProps:{size:"small"}},MuiPaper:{defaultProps:{variant:"outlined"},styleOverrides:{root:{borderColor:o.colorBackgroundBorder}}},MuiSvgIcon:{defaultProps:{fontSize:"inherit"}},MuiTab:{styleOverrides:{root:{textTransform:"unset",fontSize:o.typographyBody1FontSize,fontWeight:o.typographyBody1FontWeight,fontFamily:o.typographyBody1FontFamily,letterSpacing:o.typographyBody1LetterSpacing,color:o.colorTextPrimary,padding:"11px 8px","&:hover":{backgroundColor:o.colorBackgroundBorder},"&:Mui-selected":{color:o.colorPrimaryMain}}}},MuiTabs:{styleOverrides:{root:{backgroundColor:o.colorBackgroundCanvas,height:"3rem"}}},MuiToggleButton:{defaultProps:{size:"small"},styleOverrides:{root:{textTransform:"none",fontWeight:o.fontWeightsBold,"&.MuiToggleButton-primary":{color:o.colorPrimaryMain,borderColor:o.colorPrimaryMain,...a("Primary"),"&.Mui-selected":{...i("Primary")},"&.Mui-disabled":{color:o.colorTextDisabled}},"&.MuiToggleButton-secondary":{color:o.colorSecondaryMain,borderColor:o.colorSecondaryMain,...a("Secondary"),"&.Mui-selected":{...i("Secondary")},"&.Mui-disabled":{color:o.colorTextDisabled}},"&.MuiToggleButton-standard":{color:o.colorSecondaryMain,borderColor:o.colorTertiaryMain,...a("Secondary"),"&.Mui-selected":{...i("Tertiary"),"&:focus":{boxShadow:c(`0 0 0px 4px ${o.colorSecondaryDark}`)}},"&.Mui-disabled":{color:o.colorTextDisabled}}}}},MuiToggleButtonGroup:{defaultProps:{size:"small"}},MuiTooltip:{defaultProps:{arrow:!0},styleOverrides:{tooltip:{backgroundColor:o.colorGrey400,fontSize:".785rem",fontStyle:"normal",padding:"2px 8px"}}}}},d=e=>`${e} !important`,l=e=>({backgroundColor:r[`color${e}Main`],color:r[`color${e}Contrast`],"&:hover":{backgroundColor:r[`color${e}Dark`],boxShadow:"none"},"&:focus":{backgroundColor:r[`color${e}Dark`],outline:"2px solid white",boxShadow:`0 0 0px 4px ${r[`color${e}Dark`]}`},"&:active":{backgroundColor:r[`color${e}Main`]}}),n=e=>({"&:hover":{backgroundColor:`${r[`color${e}Main`]}21`},"&:focus":{outline:"2px solid white",boxShadow:`0 0 0px 4px ${r[`color${e}Main`]}`,backgroundColor:`${r[`color${e}Main`]}21`},"&:active":{backgroundColor:`${r[`color${e}Main`]}42`}}),t=e=>({fontSize:`${r[`typography${e}FontSize`]}`,fontWeight:`${r[`typography${e}FontWeight`]}`,fontFamily:`${r[`typography${e}FontFamily`]}`,letterSpacing:`${r[`typography${e}LetterSpacing`]}`,lineHeight:`${r[`lineHeights${e}`]}`}),s={mode:"light",palette:{primary:{main:r.colorPrimaryMain,light:r.colorPrimaryLight,dark:r.colorPrimaryDark,darker:r.colorPrimaryDarker},secondary:{main:r.colorSecondaryMain,light:r.colorSecondaryLight,dark:r.colorSecondaryDark,darker:r.colorSecondaryDarker},tertiary:{main:r.colorTertiaryMain,light:r.colorTertiaryLight,dark:r.colorTertiaryDark,darker:r.colorTertiaryDarker},error:{main:r.colorErrorMain,light:r.colorErrorLight,dark:r.colorErrorDark,darker:r.colorErrorDarker},warning:{main:r.colorWarningMain,light:r.colorWarningLight,dark:r.colorWarningDark,darker:r.colorWarningDarker},info:{main:r.colorInfoMain,light:r.colorInfoLight,dark:r.colorInfoDark,darker:r.colorInfoDarker},success:{main:r.colorSuccessMain,light:r.colorSuccessLight,dark:r.colorSuccessDark,darker:r.colorSuccessDarker},grey:{50:r.colorGrey50,100:r.colorGrey100,200:r.colorGrey200,300:r.colorGrey300,400:r.colorGrey400,500:r.colorGrey500,600:r.colorGrey600,700:r.colorGrey700,800:r.colorGrey800,900:r.colorGrey900},indigo:{50:r.colorIndigo50,100:r.colorIndigo100,200:r.colorIndigo200,300:r.colorIndigo300,400:r.colorIndigo400,500:r.colorIndigo500,600:r.colorIndigo600,700:r.colorIndigo700,800:r.colorIndigo800,900:r.colorIndigo900},purple:{50:r.colorPurple50,100:r.colorPurple100,200:r.colorPurple200,300:r.colorPurple300,400:r.colorPurple400,500:r.colorPurple500,600:r.colorPurple600,700:r.colorPurple700,800:r.colorPurple800,900:r.colorPurple900},blue:{50:r.colorBlue50,100:r.colorBlue100,200:r.colorBlue200,300:r.colorBlue300,400:r.colorBlue400,500:r.colorBlue500,600:r.colorBlue600,700:r.colorBlue700,800:r.colorBlue800,900:r.colorBlue900},contrastThreshold:4.5,contrastText:"#fff",tonalOffset:.2,text:{primary:r.colorTextPrimary,secondary:r.colorTextSecondary,disabled:r.colorTextDisabled,error:r.colorErrorMain,hint:"rgba(0, 0, 0, 0.38)",divider:"rgba(0, 0, 0, 0.12)",success:r.colorSuccessMain,info:r.colorTextPrimary,link:r.colorTextPrimary,inverse:r.colorCommonWhite,inverseSecondary:"#ffffff24"},border:{primary:r.colorPrimaryMain,secondary:r.colorGrey400,error:r.colorErrorMain,disabled:r.colorGrey300,decorative:r.colorGrey200,input:r.colorGrey400,inputHover:r.colorGrey600,inputFocus:r.colorPrimaryMain,inverse:r.colorCommonWhite,inverseSecondary:"#ffffff24"},background:{canvas:r.colorBackgroundCanvas,paper:r.colorBackgroundPaper,header:r.colorBackgroundHeader,subnav:r.colorBackgroundSubnav,sidenav:r.colorBackgroundSidenav,accent:r.colorBackgroundAccent,border:r.colorBackgroundBorder,default:r.colorGrey100},action:{active:r.colorActionActive,hover:r.colorActionHover,hoverOpacity:.04,selected:r.colorActionSelected,selectedOpacity:.08,disabled:r.colorActionDisabled,disabledBackground:r.colorActionDisabledBg,disabledOpacity:.38,focus:r.colorActionFocus,focusOpacity:.12,activatedOpacity:.12}},typography:{htmlFontSize:16,fontFamily:r.fontFamiliesBase,fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,d1:{...t("D1"),color:r.colorTextPrimary},d2:{...t("D2"),color:r.colorTextPrimary},h1:{...t("H1"),color:r.colorTextPrimary},h2:{...t("H2"),color:r.colorTextPrimary},h3:{...t("H3"),color:r.colorTextPrimary},h4:{...t("H4"),color:r.colorTextPrimary},h5:{...t("H5"),color:r.colorTextPrimary},h6:{...t("H6"),color:r.colorTextPrimary},subtitle1:{...t("Subtitle1"),color:r.colorTextPrimary},subtitle2:{...t("Subtitle2"),color:r.colorTextPrimary},body1:{...t("Body1"),color:r.colorTextPrimary},body2:{...t("Body2"),color:r.colorTextPrimary},button:{fontSize:"0.875rem",fontWeight:r.fontWeightsRegular,fontFamily:r.fontFamiliesBase,letterSpacing:.2},caption:{...t("Caption"),color:r.colorTextPrimary},overline:{...t("Overline"),color:r.colorTextPrimary}},components:{MuiAlert:{styleOverrides:{standardSuccess:{backgroundColor:r.colorGreen100},standardError:{backgroundColor:r.colorRed50},standardWarning:{backgroundColor:r.colorYellow50},standardInfo:{backgroundColor:r.colorBlue50},action:{margin:"-3px -3px -3px auto",padding:"0 0 0 8px"},icon:({ownerState:e})=>({...e.severity==="success"&&{color:d(r.colorGreen600)},opacity:1,padding:"4px",margin:0,fontSize:r.fontSizesBody1}),message:{color:r.colorTextPrimary,padding:0},root:{border:"none",fontSize:r.fontSizesBody1,lineHeight:r.lineHeightsBody1,padding:"8px"}}},MuiAlertTitle:{styleOverrides:{root:{margin:0,fontWeight:r.fontWeightsBold},message:{fontSize:r.fontSizesBody1,lineHeight:r.lineHeightsBody1,padding:"8px"}}},MuiAvatar:{styleOverrides:{colorDefault:{backgroundColor:r.colorGrey300,color:r.colorTextSecondary}}},MuiBreadcrumbs:{styleOverrides:{root:{".MuiButtonBase-root":{backgroundColor:"transparent"},".breadcrumbs__collapsed-icon":{color:r.colorPrimaryMain}}}},MuiButton:{defaultProps:{disableRipple:!0,disableElevation:!0,variant:"contained"},styleOverrides:{root:{boxShadow:"none",fontWeight:r.fontWeightsBold,textTransform:"none"},containedPrimary:{...l("Primary")},containedSecondary:{...l("Secondary")},containedTertiary:{...l("Tertiary"),"&:focus":{backgroundColor:r.colorTertiaryDark,outline:"2px solid white",boxShadow:`0 0 0px 4px ${r.colorSecondaryDark}`}},containedSuccess:{...l("Success")},containedWarning:{...l("Warning")},containedError:{...l("Error")},outlinedPrimary:{...n("Primary")},outlinedSecondary:{...n("Secondary")},outlinedTertiary:{color:r.colorSecondaryMain,...n("Secondary")},outlinedSuccess:{...n("Success")},outlinedWarning:{...n("Warning")},outlinedError:{...n("Error")}}},MuiCard:{styleOverrides:{root:{backgroundColor:r.colorBackgroundPaper,maxWidth:"345px"}}},MuiCardActions:{styleOverrides:{root:{padding:"16px"}}},MuiCardContent:{styleOverrides:{root:{fontSize:r.typographyBody2FontSize,fontWeight:r.typographyBody2FontWeight,fontFamily:r.typographyBody2FontFamily,letterSpacing:r.typographyBody2LetterSpacing,color:r.colorTextPrimary}}},MuiCardHeader:{styleOverrides:{root:{backgroundColor:r.colorBackgroundCanvas,color:r.colorTextPrimary}}},MuiCardMedia:{styleOverrides:{maxHeight:"100px"}},MuiChip:{defaultProps:{color:"default"},styleOverrides:{root:{height:"auto","&.MuiChip-deletable":{"&:hover":{backgroundColor:r.colorActionFocus,boxShadow:"none",".MuiChip-deleteIcon":{color:r.colorSecondaryLight}},"&.Mui-focusVisible":{backgroundColor:r.colorActionFocus,outline:"2px solid white",boxShadow:`0 0 0px 4px ${r.colorSecondaryLight}`,".MuiChip-deleteIcon":{color:r.colorSecondaryLight}}}},avatar:{margin:"0",height:"1.125rem",width:"1.125rem"},avatarColorDefault:{backgroundColor:r.colorGrey300},deleteIcon:{fontSize:"1rem",margin:"0",transition:"color 300ms"},label:{fontSize:"inherit",padding:"0px 6px"},colorDefault:{backgroundColor:r.colorGrey100},sizeSmall:{fontWeight:r.fontWeightsBold,fontSize:".75rem",verticalAlign:"text-bottom",borderRadius:"50px"},sizeMedium:{fontWeight:r.fontWeightsRegular,padding:"3px 4px"}}},MuiIconButton:{defaultProps:{disableRipple:!0},styleOverrides:{root:{"&:hover":{backgroundColor:r.colorTertiaryDark},"&:focus":{backgroundColor:r.colorTertiaryDark,outline:`2px solid ${r.colorCommonWhite}`,boxShadow:`0 0 0px 4px ${r.colorSecondaryLight}`}},colorDefault:{color:r.colorTextPrimary}}},MuiFormControl:{styleOverrides:{root:{marginBottom:".5rem"}}},MuiFormControlLabel:{defaultProps:{labelPlacement:"end"},styleOverrides:{root:{"&.Mui-error":{".MuiFormControlLabel-label":{color:r.colorTextError},".MuiButtonBase-root, .MuiSvgIcon-root":{color:r.colorTextError}}},asterisk:{display:"none"},labelPlacementEnd:{marginLeft:0,marginRight:0}}},MuiFormLabel:{defaultProps:{shrink:!1},styleOverrides:{root:{display:"flex",flexDirection:"row-reverse",justifyContent:"flex-end","&.Mui-disabled":{color:r.colorTextDisabled},"&.Mui-error, &.Mui-error.Mui-focused":{color:r.colorTextError},"&.Mui-focused":{color:r.colorTextPrimary}},asterisk:{color:r.colorTextError,marginRight:".25rem",marginLeft:"-.15rem"}}},MuiLink:{defaultProps:{underline:"hover"},styleOverrides:{root:{fontWeight:r.fontWeightsBold,color:r.colorTextLink,"&:active":{color:r.colorTextPrimary},"&:visited":{color:r.colorIndigo600}}}},MuiPaper:{defaultProps:{variant:"outlined"},styleOverrides:{root:{borderColor:r.colorBackgroundBorder}}},MuiSvgIcon:{defaultProps:{fontSize:"inherit"}},MuiTab:{styleOverrides:{root:{textTransform:"unset",fontSize:r.typographyBody1FontSize,fontWeight:r.typographyBody1FontWeight,fontFamily:r.typographyBody1FontFamily,letterSpacing:r.typographyBody1LetterSpacing,color:r.colorTextPrimary,padding:"11px 8px","&:hover":{backgroundColor:r.colorBackgroundBorder},"&:Mui-selected":{color:r.colorPrimaryMain}}}},MuiTabs:{styleOverrides:{root:{backgroundColor:r.colorBackgroundCanvas,height:"3rem"}}},MuiToggleButton:{defaultProps:{size:"small"},styleOverrides:{root:{textTransform:"unset",backgroundColor:r.colorTertiaryMain,fontWeight:r.fontWeightsBold,color:r.colorTextPrimary,borderColor:r.colorGrey400,"&.Mui-selected":{backgroundColor:r.colorTertiaryDarker,color:r.colorTertiaryLight,borderColor:r.colorTertiaryDarker,"&:hover":{backgroundColor:r.colorTertiaryDark,color:r.colorTertiaryLight,borderColor:r.colorTertiaryMain}},"&:focus":{boxShadow:`0 0 0px 2px ${r.colorTertiaryDark}50`,backgroundColor:r.colorTertiaryLight,color:r.colorTextPrimary,borderColor:r.colorTertiaryDark},"&:hover":{backgroundColor:r.colorTertiaryDark,color:r.colorTertiaryLight,borderColor:r.colorTertiaryMain},"&.MuiToggleButton-sizeSmall":{padding:"8px 16px"},"&.MuiToggleButton-sizeMedium":{padding:"12px 16px"},"&.MuiToggleButton-sizeLarge":{padding:"16px"},"&.Mui-disabled":{backgroundColor:r.colorActionDisabledBg,borderColor:r.colorTertiaryMain,color:r.colorActionDisabled}}}},MuiToggleButtonGroup:{defaultProps:{size:"small"}},MuiTooltip:{defaultProps:{arrow:!0},styleOverrides:{tooltip:{backgroundColor:r.colorGrey400,fontSize:".785rem",fontStyle:"normal",padding:"2px 8px"}}}}};export{g as a,s as l};
//# sourceMappingURL=index-eb865a19.js.map
