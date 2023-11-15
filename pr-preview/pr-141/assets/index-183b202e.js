import{l as o,t as r}from"./index-fd483b67.js";var n=e=>`${e} !important`,t=e=>({backgroundColor:o[`color${e}Main`],color:o[`color${e}Contrast`],"&:hover":{backgroundColor:o[`color${e}Dark`],boxShadow:"none",color:e==="Warning"&&o.colorTextInverse},"&:focus":{backgroundColor:o[`color${e}Dark`],outline:"2px solid white",boxShadow:`0 0 0px 4px ${o[`color${e}Dark`]}`,color:e==="Warning"&&o.colorTextInverse},"&:active":{backgroundColor:o[`color${e}Main`]},"&.Mui-disabled":{opacity:.65}}),l=e=>({"&:hover":{backgroundColor:`${o[`color${e}Main`]}21`},"&:focus":{outline:"2px solid white",boxShadow:`0 0 0px 4px ${o[`color${e}Main`]}`,backgroundColor:`${o[`color${e}Main`]}21`},"&:active":{backgroundColor:`${o[`color${e}Main`]}42`}}),s={mode:"light",palette:{primary:{main:o.colorPrimaryMain,light:o.colorPrimaryLight,dark:o.colorPrimaryDark,darker:o.colorPrimaryDarker},secondary:{main:o.colorSecondaryMain,light:o.colorSecondaryLight,dark:o.colorSecondaryDark,darker:o.colorSecondaryDarker},tertiary:{main:o.colorTertiaryMain,light:o.colorTertiaryLight,dark:o.colorTertiaryDark,darker:o.colorTertiaryDarker},error:{main:o.colorErrorMain,light:o.colorErrorLight,dark:o.colorErrorDark,darker:o.colorErrorDarker},warning:{main:o.colorWarningMain,light:o.colorWarningLight,dark:o.colorWarningDark,darker:o.colorWarningDarker},info:{main:o.colorInfoMain,light:o.colorInfoLight,dark:o.colorInfoDark,darker:o.colorInfoDarker},success:{main:o.colorSuccessMain,light:o.colorSuccessLight,dark:o.colorSuccessDark,darker:o.colorSuccessDarker},grey:{50:o.colorGrey50,100:o.colorGrey100,200:o.colorGrey200,300:o.colorGrey300,400:o.colorGrey400,500:o.colorGrey500,600:o.colorGrey600,700:o.colorGrey700,800:o.colorGrey800,900:o.colorGrey900},indigo:{50:o.colorIndigo50,100:o.colorIndigo100,200:o.colorIndigo200,300:o.colorIndigo300,400:o.colorIndigo400,500:o.colorIndigo500,600:o.colorIndigo600,700:o.colorIndigo700,800:o.colorIndigo800,900:o.colorIndigo900},purple:{50:o.colorPurple50,100:o.colorPurple100,200:o.colorPurple200,300:o.colorPurple300,400:o.colorPurple400,500:o.colorPurple500,600:o.colorPurple600,700:o.colorPurple700,800:o.colorPurple800,900:o.colorPurple900},blue:{50:o.colorBlue50,100:o.colorBlue100,200:o.colorBlue200,300:o.colorBlue300,400:o.colorBlue400,500:o.colorBlue500,600:o.colorBlue600,700:o.colorBlue700,800:o.colorBlue800,900:o.colorBlue900},contrastThreshold:4.5,contrastText:"#fff",tonalOffset:.2,text:{primary:o.colorTextPrimary,secondary:o.colorTextSecondary,disabled:o.colorTextDisabled,error:o.colorTextError,hint:"rgba(0, 0, 0, 0.38)",divider:"rgba(0, 0, 0, 0.12)",success:o.colorSuccessMain,info:o.colorTextPrimary,link:o.colorTextLink,inverse:o.colorCommonWhite,inverseSecondary:"#ffffff24"},border:{primary:o.borderPrimary,secondary:o.borderSecondary,error:o.borderError,disabled:o.borderDisabled,decorative:o.borderDecorative,input:o.borderInput,inputHover:o.borderInputHover,inputFocus:o.borderInputFocus,inverse:o.colorCommonWhite,inverseSecondary:"#ffffff24"},background:{canvas:o.colorBackgroundCanvas,paper:o.colorBackgroundPaper,header:o.colorBackgroundHeader,subnav:o.colorBackgroundSubnav,sidenav:o.colorBackgroundSidenav,accent:o.colorBackgroundAccent,border:o.colorBackgroundBorder,default:o.colorGrey100},action:{active:o.colorActionActive,hover:o.colorActionHover,hoverOpacity:.04,selected:o.colorActionSelected,selectedOpacity:.08,disabled:o.colorActionDisabled,disabledBackground:o.colorActionDisabledBg,disabledOpacity:.38,focus:o.colorActionFocus,focusOpacity:.12,activatedOpacity:.12}},typography:{htmlFontSize:16,fontFamily:"'Helvetica Neue', Helvetica, Arial, sans-serif",fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,d1:{fontSize:o.typographyD1FontSize,fontWeight:o.typographyD1FontWeight,fontFamily:o.typographyD1FontFamily,letterSpacing:o.typographyD1LetterSpacing,color:o.colorTextPrimary},d2:{fontSize:o.typographyD2FontSize,fontWeight:o.typographyD2FontWeight,fontFamily:o.typographyD2FontFamily,letterSpacing:o.typographyD2LetterSpacing,color:o.colorTextPrimary},h1:{fontSize:o.typographyH1FontSize,fontWeight:o.typographyH1FontWeight,fontFamily:o.typographyH1FontFamily,letterSpacing:o.typographyH1LetterSpacing,color:o.colorTextPrimary},h2:{fontSize:o.typographyH2FontSize,fontWeight:o.typographyH2FontWeight,fontFamily:o.typographyH2FontFamily,letterSpacing:o.typographyH2LetterSpacing,color:o.colorTextPrimary},h3:{fontSize:o.typographyH3FontSize,fontWeight:o.typographyH3FontWeight,fontFamily:o.typographyH3FontFamily,letterSpacing:o.typographyH3LetterSpacing,color:o.colorTextPrimary},h4:{fontSize:o.typographyH4FontSize,fontWeight:o.typographyH4FontWeight,fontFamily:o.typographyH4FontFamily,letterSpacing:o.typographyH4LetterSpacing,color:o.colorTextPrimary},h5:{fontSize:o.typographyH5FontSize,fontWeight:o.typographyH5FontWeight,fontFamily:o.typographyH5FontFamily,letterSpacing:o.typographyH5LetterSpacing,color:o.colorTextPrimary},h6:{fontSize:o.typographyH6FontSize,fontWeight:o.typographyH6FontWeight,fontFamily:o.typographyH6FontFamily,letterSpacing:o.typographyH6LetterSpacing,color:o.colorTextPrimary,lineHeight:o.lineHeightsH6},subtitle1:{fontSize:o.typographySubtitle1FontSize,fontWeight:o.typographySubtitle1FontWeight,fontFamily:o.typographySubtitle1FontFamily,letterSpacing:o.typographySubtitle1LetterSpacing,color:o.colorTextPrimary},subtitle2:{fontSize:o.typographySubtitle2FontSize,fontWeight:o.typographySubtitle2FontWeight,fontFamily:o.typographySubtitle2FontFamily,letterSpacing:o.typographySubtitle2LetterSpacing,color:o.colorTextPrimary,lineHeight:o.lineHeightsSubtitle2},body1:{fontSize:o.typographyBody1FontSize,fontWeight:o.typographyBody1FontWeight,fontFamily:o.typographyBody1FontFamily,letterSpacing:o.typographyBody1LetterSpacing,color:o.colorTextPrimary},body2:{fontSize:o.typographyBody2FontSize,fontWeight:o.typographyBody2FontWeight,fontFamily:o.typographyBody2FontFamily,letterSpacing:o.typographyBody2LetterSpacing,color:o.colorTextPrimary},button:{fontSize:o.fontSizesBody1,fontWeight:o.fontWeightsRegular,fontFamily:o.fontFamiliesBase,letterSpacing:.2},caption:{fontSize:o.typographyCaptionFontSize,fontWeight:o.typographyCaptionFontWeight,fontFamily:o.typographyCaptionFontFamily,letterSpacing:o.typographyCaptionLetterSpacing,color:o.colorTextPrimary},overline:{fontSize:o.typographyOverlineFontSize,fontWeight:o.typographyOverlineFontWeight,fontFamily:o.typographyOverlineFontFamily,letterSpacing:o.typographyOverlineLetterSpacing,color:o.colorTextPrimary}},components:{MuiAlert:{styleOverrides:{standardSuccess:{backgroundColor:o.colorSuccessMain,color:o.colorSuccessContrast},standardError:{backgroundColor:o.colorErrorMain,color:o.colorErrorContrast},standardWarning:{backgroundColor:o.colorWarningMain,color:o.colorWarningContrast,".MuiAlert-icon .MuiSvgIcon-root":{fill:o.colorWarningContrast}},standardInfo:{backgroundColor:o.colorInfoMain,color:o.colorInfoContrast},action:{margin:"-3px -3px -3px auto",padding:"0 0 0 8px",alignItems:"center",color:"inherit"},icon:{padding:"0",alignItems:"center",".MuiSvgIcon-root":{fill:o.colorPrimaryContrast,color:o.colorPrimaryContrast}},message:{color:"inherit",padding:0},root:{border:"none",fontSize:o.fontSizesBody1,lineHeight:o.lineHeightsBody1,padding:"0.75rem 1.25rem"}}},MuiAlertTitle:{styleOverrides:{root:{margin:0,fontWeight:o.fontWeightsBold,color:"inherit"},message:{fontSize:o.fontSizesBody1,lineHeight:o.lineHeightsBody1,padding:"8px"}}},MuiAvatar:{styleOverrides:{colorDefault:{backgroundColor:o.colorGrey300,color:o.colorTextSecondary}}},MuiBreadcrumbs:{styleOverrides:{root:{".MuiButtonBase-root":{backgroundColor:"transparent"},".breadcrumbs__collapsed-icon":{color:o.colorPrimaryMain}},separator:{".MuiSvgIcon-root":{width:"1rem",height:"1rem",marginX:".5rem",fontSize:"1rem"}}}},MuiButton:{defaultProps:{disableRipple:!0,disableElevation:!0,variant:"contained",size:"medium"},styleOverrides:{root:{lineHeight:"24px",boxShadow:"none",textTransform:"none",fontWeight:"500"},containedPrimary:{...t("Primary")},containedSecondary:{...t("Secondary")},containedTertiary:{...t("Tertiary"),"&:focus":{backgroundColor:o.colorTertiaryDark,outline:"2px solid white",boxShadow:`0 0 0px 4px ${o.colorSecondaryDark}`}},containedSuccess:{...t("Success")},containedWarning:{...t("Warning")},containedError:{...t("Error")},outlinedPrimary:{...l("Primary")},outlinedSecondary:{...l("Secondary")},outlinedTertiary:{color:o.colorSecondaryMain,...l("Secondary")},outlinedSuccess:{...l("Success")},outlinedWarning:{...l("Warning")},outlinedError:{...l("Error")},sizeSmall:{padding:"0.25rem 0.5rem",fontSize:".875rem",borderRadius:"0.2rem"},sizeMedium:{padding:"0.375rem 0.75rem",fontSize:"1rem",borderRadius:"0.25rem"},sizeLarge:{padding:"0.5rem 1rem",fontSize:"1.25rem",borderRadius:"0.3rem"}}},MuiButtonGroup:{defaultProps:{color:"secondary",variant:"contained",disableElevation:!0,disableRipple:!0},styleOverrides:{grouped:{"&:focus":{zIndex:"1"}},groupedContained:{borderColor:n(o.colorPrimaryContrast)},groupedContainedPrimary:{"&:focus:hover":{boxShadow:`0 0 0px 4px ${o.colorPrimaryDark}`}},groupedContainedSecondary:{"&:focus:hover":{boxShadow:`0 0 0px 4px ${o.colorSecondaryDark}`}},groupedContainedTertiary:{borderColor:n(o.colorSecondaryMain),"&:focus:hover":{boxShadow:`0 0 0px 4px ${o.colorSecondaryDark}`}}}},MuiCard:{defaultProps:{variant:"outlined"},styleOverrides:{root:{backgroundColor:o.colorBackgroundPaper,borderColor:o.colorGrey100}}},MuiCardActions:{styleOverrides:{root:{padding:"1.25rem",backgroundColor:o.colorGrey100}}},MuiCardContent:{styleOverrides:{root:{fontSize:o.typographyBody1FontSize,fontWeight:o.typographyBody1FontWeight,fontFamily:o.typographyBody1FontFamily,letterSpacing:o.typographyBody1LetterSpacing,color:o.colorTextPrimary,padding:"1.25rem"}}},MuiCardFooter:{styleOverrides:{root:{padding:"1.25rem"}}},MuiCardHeader:{styleOverrides:{root:{backgroundColor:o.colorGrey100,color:o.colorTextPrimary,padding:"1.25rem",lineHeight:"24px",".MuiCardHeader-title, .MuiCardHeader-subheader":{fontWeight:o.fontWeightsRegular}}}},MuiCardMedia:{styleOverrides:{padding:"1.25rem"}},MuiCheckbox:{defaultProps:{disableRipple:!0},styleOverrides:{root:{"&.Mui-focusVisible":{".MuiSvgIcon-root":{outline:`2px solid ${o.borderInputFocus}`,borderRadius:"3px"}},"&.MuiCheckbox-colorPrimary":{color:o.colorGrey500,"&:hover":{color:o.colorGrey900},"&.Mui-checked":{color:o.colorPrimaryMain,"&:hover":{color:o.colorPrimaryDark}},"&.Mui-disabled":{color:o.colorGrey300}},"&.MuiCheckbox-colorError":{color:o.colorGrey500,"&:hover":{color:o.colorGrey900},"&.Mui-checked":{color:o.colorErrorMain,"&:hover":{color:o.colorErrorDark}},"&.Mui-disabled":{color:o.colorGrey300}},".MuiSvgIcon-root":{fontSize:"1.25rem"}}}},MuiChip:{defaultProps:{color:"default"},styleOverrides:{root:{height:"auto",fontSize:".75rem",lineHeight:".75rem",borderRadius:".25rem","&.MuiChip-deletable":{"&:hover":{backgroundColor:o.colorActionFocus,boxShadow:"none",".MuiChip-deleteIcon":{color:o.colorSecondaryLight}},"&.Mui-focusVisible":{backgroundColor:o.colorActionFocus,outline:"2px solid white",boxShadow:`0 0 0px 4px ${o.colorSecondaryLight}`,".MuiChip-deleteIcon":{color:o.colorSecondaryLight}}}},avatar:{margin:"0 .2rem 0 -.2rem",height:"1rem",width:"1rem"},avatarColorDefault:{backgroundColor:o.colorGrey300},deleteIcon:{fontSize:"1rem",margin:"0 -.2rem 0 .2rem",transition:"color 300ms"},label:{fontSize:"inherit",padding:"0px"},colorDefault:{backgroundColor:o.colorGrey100},sizeSmall:{fontWeight:o.fontWeightsBold,verticalAlign:"text-bottom",padding:"0.25rem 0.4rem"},sizeMedium:{fontWeight:o.fontWeightsRegular,padding:"0.25rem 0.6rem"}}},MuiFormHelperText:{styleOverrides:{root:{marginLeft:"0px",fontSize:".875rem",color:o.colorTextSecondary,"&.Mui-error":{color:o.colorTextError},"&:not(&.Mui-error) .MuiSvgIcon-root":{display:"none"},".MuiSvgIcon-root":{verticalAlign:"text-bottom"}}}},MuiFormLabel:{styleOverrides:{root:{display:n("flex"),flexDirection:n("row-reverse"),justifyContent:n("flex-end"),"&.Mui-error, &.Mui-error.Mui-focused":{color:o.colorTextError},"&.Mui-disabled":{color:o.colorTextDisabled},"&.Mui-focused":{color:"inherit"}},asterisk:{color:o.colorErrorMain,fontWeight:o.fontWeightsBold,marginRight:".25rem",fontSize:"1.3rem",lineHeight:"100%"},children:{".MuiFormLabel-asterisk":{display:"none"}}}},MuiIconButton:{defaultProps:{disableRipple:!0,color:"secondary"},styleOverrides:{root:{borderRadius:"3px",opacity:.6,"&:hover, &:focus":{opacity:1},"&:focus":{outline:`2px solid ${o.colorCommonWhite}`,boxShadow:`0 0 0px 4px ${o.colorPrimaryMain}`}},colorSecondary:{border:o.colorSecondaryLight},colorPrimary:{border:o.colorPrimaryMain},sizeSmall:{padding:"0.25rem 0.5rem",fontSize:".875rem",borderRadius:"0.2rem"},sizeMedium:{padding:"0.375rem 0.75rem",fontSize:"1rem",borderRadius:"0.25rem"},sizeLarge:{padding:"0.5rem 1rem",fontSize:"1.25rem",borderRadius:"0.3rem"}}},MuiInputBase:{StyleOverrides:{root:{"label + &":{marginTop:".5rem"},borderRadius:4,position:"relative",fontSize:"1rem"},inputSizeSmall:{padding:".375rem .75rem"}}},MuiLink:{defaultProps:{underline:"hover"},styleOverrides:{root:{color:o.colorTextLink,fontWeight:o.fontWeightsBold,"&:active":{color:o.colorTextPrimary},"&:visited":{color:o.colorIndigo600}}}},MuiMenu:{defaultProps:{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}}},MuiOutlinedInput:{defaultProps:{size:"small"},styleOverrides:{root:{backgroundColor:o.colorCommonWhite,"&.Mui-focused":{".MuiOutlinedInput-notchedOutline":{borderColor:o.borderInputFocus,borderWidth:"1px",boxShadow:`0 0 0px .2rem ${o.borderInputFocus}`},"&.Mui-error":{".MuiOutlinedInput-notchedOutline":{boxShadow:`0 0 0px .2rem ${o.borderError}`}}},"&.Mui-error, &.Mui-error.Mui-focused":{".MuiOutlinedInput-notchedOutline":{borderColor:o.borderError}},"&.Mui-disabled":{backgroundColor:o.colorActionDisabledBg}},notchedOutline:{padding:0,border:"1px solid",borderColor:o.borderInput}}},MuiPagination:{defaultProps:{color:"primary",shape:"rounded",size:"small"}},MuiPaginationItem:{defaultProps:{disableRipple:!0},styleOverrides:{root:{borderRadius:"0",height:"auto",color:o.colorTextLink,textDecoration:"underline","&:focus":{boxShadow:`0 0 0px 2px ${o.colorPrimaryMain}`},"&.Mui-selected":{"&:focus":{outline:"1px solid white"},fontWeight:o.fontWeightsBold,backgroundColor:o.colorPrimaryMain,color:o.colorCommonWhite,textDecoration:"none"},"&.Mui-disabled":{color:o.colorTextPrimary,textDecoration:"none"}},ellipsis:{backgroundColor:"inherit",textDecoration:"none",color:o.colorTextPrimary,border:"none",margin:"0"},outlined:{padding:"0.5rem 0.75rem",lineHeight:"1.25rem",margin:"-1px",border:"1px solid #ccc",backgroundColor:o.colorBackgroundCanvas},text:{padding:"0.375rem",margin:"0px"}}},MuiPaper:{defaultProps:{variant:"outlined"},styleOverrides:{root:{borderColor:o.colorBackgroundBorder}}},MuiSelect:{styleOverrides:{root:{"&.Mui-error .MuiSelect-icon":{color:o.borderError}},icon:{color:o.borderInput},iconOpen:{transform:"scaleY(-1)"},select:{"&.MuiInputBase-input":{paddingRight:"2.5rem"}}}},MuiSvgIcon:{defaultProps:{fontSize:"inherit"},sizeXsmall:{fontSize:".875rem"},sizeSmall:{fontSize:".875rem"},sizeMedium:{fontSize:"1rem"},sizeLarge:{fontSize:"1.25rem"}},MuiTab:{styleOverrides:{root:{textTransform:"unset",fontSize:o.typographyBody1FontSize,fontWeight:o.typographyBody1FontWeight,fontFamily:o.typographyBody1FontFamily,letterSpacing:o.typographyBody1LetterSpacing,color:o.colorTextPrimary,padding:"11px 8px","&:hover":{backgroundColor:o.colorBackgroundBorder},"&:Mui-selected":{color:o.colorPrimaryMain}}}},MuiTabs:{styleOverrides:{root:{backgroundColor:o.colorBackgroundCanvas,height:"3rem"}}},MuiTextField:{defaultProps:{fullWidth:!0}},MuiToggleButton:{defaultProps:{size:"small"},styleOverrides:{root:{textTransform:"none",...t("Tertiary"),"&:focus":{boxShadow:`0 0 0px 4px ${o.colorSecondaryMain}`,outline:"2px solid white"},"&.Mui-selected":{backgroundColor:o.colorPrimaryMain,color:o.colorTextInverse,"&:hover":{backgroundColor:o.colorPrimaryDark},"&:focus":{backgroundColor:o.colorPrimaryDark,boxShadow:`0 0 0px 4px ${o.colorPrimaryDark}`}},".MuiSvgIcon-root":{fontSize:"1.125rem"}}}},MuiToggleButtonGroup:{defaultProps:{size:"small"}},MuiTooltip:{defaultProps:{arrow:!0},styleOverrides:{tooltip:{backgroundColor:o.colorGrey400,fontSize:".785rem",fontStyle:"normal",padding:"2px 8px"}}}}},c=e=>`${e} !important`,a=e=>({backgroundColor:r[`color${e}Main`],color:r[`color${e}Contrast`],"&:hover":{backgroundColor:r[`color${e}Dark`],boxShadow:"none"},"&:focus":{backgroundColor:r[`color${e}Dark`],outline:"2px solid white",boxShadow:`0 0 0px 4px ${r[`color${e}Dark`]}`},"&:active":{backgroundColor:r[`color${e}Main`]}}),d=e=>({"&:hover":{backgroundColor:`${r[`color${e}Main`]}21`},"&:focus":{outline:"2px solid white",boxShadow:`0 0 0px 4px ${r[`color${e}Main`]}`,backgroundColor:`${r[`color${e}Main`]}21`},"&:active":{backgroundColor:`${r[`color${e}Main`]}42`}}),i=e=>({fontSize:`${r[`typography${e}FontSize`]}`,fontWeight:`${r[`typography${e}FontWeight`]}`,fontFamily:`${r[`typography${e}FontFamily`]}`,letterSpacing:`${r[`typography${e}LetterSpacing`]}`,lineHeight:`${r[`lineHeights${e}`]}`}),g={mode:"light",palette:{primary:{main:r.colorPrimaryMain,light:r.colorPrimaryLight,dark:r.colorPrimaryDark,darker:r.colorPrimaryDarker},secondary:{main:r.colorSecondaryMain,light:r.colorSecondaryLight,dark:r.colorSecondaryDark,darker:r.colorSecondaryDarker},tertiary:{main:r.colorTertiaryMain,light:r.colorTertiaryLight,dark:r.colorTertiaryDark,darker:r.colorTertiaryDarker},error:{main:r.colorErrorMain,light:r.colorErrorLight,dark:r.colorErrorDark,darker:r.colorErrorDarker},warning:{main:r.colorWarningMain,light:r.colorWarningLight,dark:r.colorWarningDark,darker:r.colorWarningDarker},info:{main:r.colorInfoMain,light:r.colorInfoLight,dark:r.colorInfoDark,darker:r.colorInfoDarker},success:{main:r.colorSuccessMain,light:r.colorSuccessLight,dark:r.colorSuccessDark,darker:r.colorSuccessDarker},grey:{50:r.colorGrey50,100:r.colorGrey100,200:r.colorGrey200,300:r.colorGrey300,400:r.colorGrey400,500:r.colorGrey500,600:r.colorGrey600,700:r.colorGrey700,800:r.colorGrey800,900:r.colorGrey900},indigo:{50:r.colorIndigo50,100:r.colorIndigo100,200:r.colorIndigo200,300:r.colorIndigo300,400:r.colorIndigo400,500:r.colorIndigo500,600:r.colorIndigo600,700:r.colorIndigo700,800:r.colorIndigo800,900:r.colorIndigo900},purple:{50:r.colorPurple50,100:r.colorPurple100,200:r.colorPurple200,300:r.colorPurple300,400:r.colorPurple400,500:r.colorPurple500,600:r.colorPurple600,700:r.colorPurple700,800:r.colorPurple800,900:r.colorPurple900},blue:{50:r.colorBlue50,100:r.colorBlue100,200:r.colorBlue200,300:r.colorBlue300,400:r.colorBlue400,500:r.colorBlue500,600:r.colorBlue600,700:r.colorBlue700,800:r.colorBlue800,900:r.colorBlue900},contrastThreshold:4.5,contrastText:"#fff",tonalOffset:.2,text:{primary:r.colorTextPrimary,secondary:r.colorTextSecondary,disabled:r.colorTextDisabled,error:r.colorErrorMain,hint:"rgba(0, 0, 0, 0.38)",divider:"rgba(0, 0, 0, 0.12)",success:r.colorSuccessMain,info:r.colorTextPrimary,link:r.colorTextPrimary,inverse:r.colorCommonWhite,inverseSecondary:"#ffffff24"},border:{primary:r.colorPrimaryMain,secondary:r.colorGrey400,error:r.colorErrorMain,disabled:r.colorGrey300,decorative:r.colorGrey200,input:r.colorGrey400,inputHover:r.colorGrey600,inputFocus:r.colorPrimaryMain,inverse:r.colorCommonWhite,inverseSecondary:"#ffffff24"},background:{canvas:r.colorBackgroundCanvas,paper:r.colorBackgroundPaper,header:r.colorBackgroundHeader,subnav:r.colorBackgroundSubnav,sidenav:r.colorBackgroundSidenav,accent:r.colorBackgroundAccent,border:r.colorBackgroundBorder,default:r.colorGrey100},action:{active:r.colorActionActive,hover:r.colorActionHover,hoverOpacity:.04,selected:r.colorActionSelected,selectedOpacity:.08,disabled:r.colorActionDisabled,disabledBackground:r.colorActionDisabledBg,disabledOpacity:.38,focus:r.colorActionFocus,focusOpacity:.12,activatedOpacity:.12}},typography:{htmlFontSize:16,fontFamily:r.fontFamiliesBase,fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,d1:{...i("D1"),color:r.colorTextPrimary},d2:{...i("D2"),color:r.colorTextPrimary},h1:{...i("H1"),color:r.colorTextPrimary},h2:{...i("H2"),color:r.colorTextPrimary},h3:{...i("H3"),color:r.colorTextPrimary},h4:{...i("H4"),color:r.colorTextPrimary},h5:{...i("H5"),color:r.colorTextPrimary},h6:{...i("H6"),color:r.colorTextPrimary},subtitle1:{...i("Subtitle1"),color:r.colorTextPrimary},subtitle2:{...i("Subtitle2"),color:r.colorTextPrimary},body1:{...i("Body1"),color:r.colorTextPrimary},body2:{...i("Body2"),color:r.colorTextPrimary},button:{fontSize:"0.875rem",fontWeight:r.fontWeightsRegular,fontFamily:r.fontFamiliesBase,letterSpacing:.2},caption:{...i("Caption"),color:r.colorTextPrimary},overline:{...i("Overline"),color:r.colorTextPrimary}},components:{FeedbackContainer:{styleOverrides:{root:{maxWidth:c("490px"),padding:"16px"}}},MuiAlert:{styleOverrides:{standardSuccess:{backgroundColor:r.colorGreen100},standardError:{backgroundColor:r.colorRed50},standardWarning:{backgroundColor:r.colorYellow50},standardInfo:{backgroundColor:r.colorBlue50},action:{margin:"-3px -3px -3px auto",padding:"0 0 0 8px"},icon:({ownerState:e})=>({...e.severity==="success"&&{color:c(r.colorGreen600)},opacity:1,padding:"4px",margin:0,fontSize:r.fontSizesBody1}),message:{color:r.colorTextPrimary,padding:0},root:{border:"none",fontSize:r.fontSizesBody1,lineHeight:r.lineHeightsBody1,padding:"8px"}}},MuiAlertTitle:{styleOverrides:{root:{margin:0,fontWeight:r.fontWeightsBold},message:{fontSize:r.fontSizesBody1,lineHeight:r.lineHeightsBody1,padding:"8px"}}},MuiAvatar:{styleOverrides:{colorDefault:{backgroundColor:r.colorGrey300,color:r.colorTextSecondary}}},MuiBreadcrumbs:{styleOverrides:{root:{".MuiButtonBase-root":{backgroundColor:"transparent"},".breadcrumbs__collapsed-icon":{color:r.colorPrimaryMain}},separator:{marginLeft:".625rem",marginRight:".625rem"}}},MuiButton:{defaultProps:{disableRipple:!0,disableElevation:!0,variant:"contained"},styleOverrides:{root:{boxShadow:"none",fontWeight:r.fontWeightsBold,textTransform:"none",lineHeight:"1.375rem",fontSize:".875rem"},containedPrimary:{...a("Primary")},containedSecondary:{...a("Secondary")},containedTertiary:{"&.MuiButton-containedTertiary":{...a("Tertiary"),boxSizing:"border-box",border:`1px solid ${r.borderSecondary}`,color:r.colorTertiaryDark,"&:hover":{color:r.colorCommonWhite,border:"1px solid transparent",backgroundColor:r.colorTertiaryDark},"&:active, &.Mui-focused:active, &:focus:active":{color:r.colorCommonWhite,border:"1px solid transparent",backgroundColor:r.colorSecondaryLight},"&.Mui-focused, &:focus":{border:`1px solid ${r.borderSecondary}`,backgroundColor:r.colorTertiaryLight,color:r.colorTertiaryDark},"&.Mui-disabled, &:disabled":{border:`1px solid ${r.borderSecondary}`,backgroundColor:r.colorTertiaryLight,color:r.colorTertiaryDark}}},containedSuccess:{...a("Success")},containedWarning:{...a("Warning")},containedError:{...a("Error")},outlinedPrimary:{...d("Primary")},outlinedSecondary:{...d("Secondary")},outlinedTertiary:{color:r.colorSecondaryMain,"&.MuiButton-outlinedTertiary":{...a("Tertiary"),color:r.colorTertiaryDark,"&:hover":{color:r.colorCommonWhite,border:"1px solid transparent"},"&:active, &.Mui-focused:active, &:focus:active":{backgroundColor:r.colorSecondaryLight,color:r.colorCommonWhite,border:"1px solid transparent"},"&.Mui-focused, &:focus":{border:`1px solid ${r.borderSecondary}`,backgroundColor:r.colorTertiaryLight,color:r.colorTertiaryDark},"&.Mui-disabled, &:disabled":{border:`1px solid ${r.borderSecondary}`,backgroundColor:r.colorTertiaryLight,color:r.colorTertiaryDark}}},outlinedSuccess:{...d("Success")},outlinedWarning:{...d("Warning")},outlinedError:{...d("Error")},sizeSmall:{padding:"4px 16px","&.MuiButton-containedTertiary, &.MuiButton-outlined":{padding:"3px 15px"}},sizeMedium:{padding:"6px 18px","&.MuiButton-containedTertiary, &.MuiButton-outlined":{padding:"5px 17px"}},sizeLarge:{fontSize:".9375rem",lineHeight:"1.5rem",padding:"8px 22px","&.MuiButton-containedTertiary, &.MuiButton-outlined":{padding:"7px 21px"}}}},MuiCard:{defaultProps:{variant:"elevation",elevation:1},styleOverrides:{root:{backgroundColor:r.colorBackgroundPaper,maxWidth:"345px"}}},MuiCardActions:{styleOverrides:{root:{padding:"16px"}}},MuiCardContent:{styleOverrides:{root:{fontSize:r.typographyBody2FontSize,fontWeight:r.typographyBody2FontWeight,fontFamily:r.typographyBody2FontFamily,letterSpacing:r.typographyBody2LetterSpacing,color:r.colorTextPrimary}}},MuiCardHeader:{styleOverrides:{root:{backgroundColor:r.colorBackgroundCanvas,color:r.colorTextPrimary}}},MuiCardMedia:{styleOverrides:{maxHeight:"100px"}},MuiCheckbox:{defaultProps:{color:"primary"},styleOverrides:{root:{padding:"8px","&:hover":{backgroundColor:"#00000008"}}}},MuiChip:{defaultProps:{color:"default"},styleOverrides:{root:{height:"auto"},avatar:{margin:"0",height:"1.125rem",width:"1.125rem"},avatarColorDefault:{backgroundColor:r.colorGrey300},deleteIcon:{fontSize:"1rem",margin:"0",fill:r.colorGrey300,"&:hover":{fill:r.colorGrey700}},label:{fontSize:"inherit",padding:"0px 6px"},labelSmall:{padding:"0px 8px",fontSize:".75rem",lineHeight:"1.125rem"},colorDefault:{backgroundColor:r.colorBackgroundAccent,"&:focus":{backgroundColor:r.colorActionFocus}},sizeSmall:{verticalAlign:"text-bottom",borderRadius:"50px"},sizeMedium:{fontWeight:r.fontWeightsRegular,padding:"3px 4px"}}},MuiCircularProgress:{styleOverrides:{colorInherit:{color:r.colorGrey100}}},MuiPickersCalendarHeader:{styleOverrides:{root:{padding:"4px 16px 8px"}}},MuiDayPicker:{styleOverrides:{monthContainer:{padding:"12px 8px 0px"}}},MuiCalendarPicker:{styleOverrides:{root:{height:"328px",width:"310px",".MuiIconButton-root":{border:"0"}}}},MuiFormControl:{styleOverrides:{root:{marginBottom:".5rem"}}},MuiFormControlLabel:{defaultProps:{labelPlacement:"end"},styleOverrides:{root:{"&.Mui-error":{".MuiFormControlLabel-label":{color:r.colorTextError},".MuiButtonBase-root, .MuiSvgIcon-root":{color:r.colorTextError}}},asterisk:{display:"none"},labelPlacementEnd:{marginLeft:0,marginRight:0}}},MuiFormGroup:{styleOverrides:{root:{"&.MuiFormGroup-row":{".MuiBox-root:not(:last-of-type)":{marginRight:"16px"}}}}},MuiFormHelperText:{styleOverrides:{root:{marginLeft:"0px","&:not(&.Mui-error) .MuiSvgIcon-root":{display:"none"},".MuiSvgIcon-root":{verticalAlign:"text-bottom"}}}},MuiFormLabel:{styleOverrides:{root:{display:c("flex"),flexDirection:c("row-reverse"),justifyContent:c("flex-end"),marginBottom:"3px","&.Mui-disabled":{color:r.colorTextDisabled},"&.Mui-error, &.Mui-error.Mui-focused":{color:r.colorTextError},"&.Mui-focused":{color:r.colorTextPrimary}},asterisk:{color:r.colorTextError,marginRight:".25rem",marginLeft:"-.15rem"},children:{".MuiFormLabel-asterisk":{display:"none"}}}},MuiIconButton:{defaultProps:{color:"secondary"},styleOverrides:{colorSecondary:{borderColor:r.borderSecondary,"&:hover":{backgroundColor:r.colorActionHover},"&:focus":{backgroundColor:r.colorActionFocus}},colorPrimary:{borderColor:r.borderPrimary,"&:hover, &:focus":{backgroundColor:r.colorActionSelected}},sizeSmall:{fontSize:"1.5rem",padding:".25rem"},sizeMedium:{padding:".75rem"}}},MuiInputBase:{defaultProps:{size:"small"},styleOverrides:{root:{"&.MuiInputBase-root":{backgroundColor:"white","& > fieldset":{borderColor:r.colorGrey400},"&:hover > fieldset":{borderColor:r.borderInputHover},"&.Mui-focused > fieldset":{borderColor:r.borderInputFocus},"&.Mui-error > fieldset":{borderColor:r.colorErrorMain},"&.Mui-disabled > fieldset":{borderColor:r.borderDisabled,color:r.colorTextDisabled},".MuiInputBase-input":{padding:"8px 12px"},"&.MuiInputBase-adornedEnd":{paddingRight:"12px"},"&:hover":{".MuiIconButton-root":{color:r.colorGrey700}},"&.Mui-disabled":{".MuiIconButton-root":{color:r.colorTextDisabled}},".MuiIconButton-root":{border:"0",padding:"8px",color:r.colorGrey400}}},input:({ownerState:e})=>({width:"196px",height:e.size==="small"?"24px":"40px",borderRadius:"4px",color:r.colorGrey400,"&:hover":{color:r.colorGrey700}}),adornedEnd:{backgroundColor:"white",paddingRight:".75rem"},adornedStart:{paddingLeft:".75rem"}}},MuiLink:{defaultProps:{underline:"hover"},styleOverrides:{root:{fontWeight:r.fontWeightsBold,color:r.colorTextLink,"&:active":{color:r.colorTextPrimary}}}},MuiMenuItem:{styleOverrides:{root:{"&.Mui-selected":{backgroundColor:r.colorPrimaryMain,color:r.colorTextInverse,"&:hover":{backgroundColor:r.colorPrimaryDark},"&:active":{backgroundColor:r.colorPrimaryDarker},".MuiSvgIcon-root":{color:r.colorTextInverse}},"&:hover":{backgroundColor:r.colorActionHover},"&:active":{backgroundColor:"#00000016"},".MuiSvgIcon-root":{marginRight:"8px",color:r.colorSecondaryMain}}}},MuiPagination:{defaultProps:{color:"primary",shape:"rounded",size:"large"}},MuiPaginationItem:{defaultProps:{color:"primary",shape:"rounded",disableRipple:!0},styleOverrides:{root:{"&:active:not(.MuiPaginationItem-ellipsis)":{color:r.colorCommonWhite,backgroundColor:r.colorActionActive},"&.Mui-disabled":{opacity:"1",color:r.colorTextDisabled}},ellipsis:{backgroundColor:"transparent"},outlined:{backgroundColor:r.colorBackgroundPaper,borderColor:r.colorActionActive,"&.Mui-disabled":{borderColor:r.borderDisabled},"&.Mui-selected":{color:r.colorPrimaryMain,backgroundColor:r.colorActionSelected}}}},MuiPaper:{defaultProps:{variant:"outlined"},styleOverrides:{root:{borderColor:r.colorBackgroundBorder}}},MuiSelect:{styleOverrides:{iconOpen:{transform:"scaleY(-1)"},select:{"&.MuiInputBase-input":{paddingRight:"2.5rem"}}}},MuiSvgIcon:{defaultProps:{fontSize:"inherit"},styleOverrides:{fontSizeXsmall:{fontSize:"1rem"}}},MuiTab:{styleOverrides:{root:{textTransform:"unset",fontSize:r.typographyBody1FontSize,fontWeight:r.typographyBody1FontWeight,fontFamily:r.typographyBody1FontFamily,letterSpacing:r.typographyBody1LetterSpacing,color:r.colorTextPrimary,padding:"11px 8px","&:hover":{backgroundColor:r.colorBackgroundBorder},"&:Mui-selected":{color:r.colorPrimaryMain}}}},MuiTabs:{styleOverrides:{root:{backgroundColor:r.colorBackgroundCanvas,height:"3rem"}}},MuiToggleButton:{defaultProps:{size:"small"},styleOverrides:{root:{textTransform:"unset",backgroundColor:r.colorTertiaryMain,fontWeight:r.fontWeightsBold,color:r.colorTextPrimary,borderColor:r.borderSecondary,"&.Mui-selected":{backgroundColor:r.colorTertiaryDarker,color:r.colorTertiaryLight,borderColor:r.colorTertiaryDarker,"&:hover":{backgroundColor:r.colorTertiaryDark,color:r.colorTertiaryLight,borderColor:r.colorTertiaryMain}},"&:focus":{boxShadow:`0 0 0px 2px ${r.colorGrey700}78`,backgroundColor:r.colorTertiaryLight,color:r.colorTextPrimary,borderColor:r.colorGrey700},"&:hover":{backgroundColor:r.colorTertiaryDark,color:r.colorTertiaryLight,borderColor:r.colorTertiaryMain},"&.MuiToggleButton-sizeSmall":{padding:"8px 16px",height:"40px"},"&.MuiToggleButton-sizeMedium":{padding:"12px 16px",height:"48px"},"&.MuiToggleButton-sizeLarge":{padding:"16px",height:"56px"},"&.Mui-disabled":{backgroundColor:r.colorActionDisabledBg,borderColor:r.colorTertiaryMain,color:r.colorActionDisabled}}}},MuiToggleButtonGroup:{defaultProps:{size:"small"}},MuiTooltip:{defaultProps:{arrow:!0},styleOverrides:{tooltip:{backgroundColor:r.colorSecondaryMain,lineHeight:"1rem",fontSize:".75rem",fontStyle:"normal",padding:"4px 8px"},arrow:{color:r.colorSecondaryMain}}},SmileButtons:{styleOverrides:{root:{marginBottom:"8px",".MuiToggleButton-root":{margin:"8px","&:focus":{backgroundColor:r.colorActionFocus,color:r.colorTextPrimary,boxShadow:"none"},"&:hover":{backgroundColor:r.colorActionHover,color:r.colorTextPrimary,borderColor:r.colorGrey400},"&.Mui-selected":{backgroundColor:r.colorPrimaryMain,"&:active":{backgroundColor:r.colorPrimaryDarker},"&:focus":{boxShadow:"none"},"&:focus, &:hover":{backgroundColor:r.colorPrimaryDark,color:r.colorCommonWhite},"&.Mui-disabled":{backgroundColor:r.colorPrimaryMain20}},"&.MuiToggleButton-sizeMedium":{padding:"12px",height:"auto"}}}}}}};export{s as a,g as l};
//# sourceMappingURL=index-183b202e.js.map
