import{j as u}from"./jsx-runtime-CcL-W3nW.js";import{t as o}from"./index-DXGSQb0h.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";const t=r=>`${r} !important`,i=r=>({backgroundColor:o[`color${r}Main`],color:o[`color${r}Contrast`],"&:hover":{backgroundColor:o[`color${r}Dark`],boxShadow:"none"},"&:focus":{backgroundColor:o[`color${r}Dark`],outline:"2px solid white",boxShadow:`0 0 0px 4px ${o[`color${r}Dark`]}`},"&:active":{backgroundColor:o[`color${r}Main`]}}),a=r=>({"&:hover":{backgroundColor:`${o[`color${r}Main`]}21`},"&:focus":{outline:"2px solid white",boxShadow:`0 0 0px 4px ${o[`color${r}Main`]}`,backgroundColor:`${o[`color${r}Main`]}21`},"&:active":{backgroundColor:`${o[`color${r}Main`]}42`}}),e=r=>({fontSize:`${o[`typography${r}FontSize`]}`,fontWeight:`${o[`typography${r}FontWeight`]}`,fontFamily:`${o[`typography${r}FontFamily`]}`,letterSpacing:`${o[`typography${r}LetterSpacing`]}`,lineHeight:`${o[`lineHeights${r}`]}`}),s={mode:"light",palette:{contrastThreshold:4.5,contrastText:"#fff",tonalOffset:.2,divider:o.borderDecorative,text:{primary:o.colorTextPrimary,secondary:o.colorTextSecondary,disabled:o.colorTextDisabled,error:o.colorTextError,warning:o.colorWarningDark,hint:"rgba(0, 0, 0, 0.38)",divider:"rgba(0, 0, 0, 0.12)",success:o.colorTextSuccess,info:o.colorTextInfo,link:o.colorTextLink,inverse:o.colorTextInverse,inverseSecondary:o.colorTextInverseSecondary},border:{primary:o.borderPrimary,secondary:o.borderSecondary,error:o.borderError,disabled:o.borderDisabled,decorative:o.borderDecorative,input:o.borderInput,inputHover:o.borderInputHover,inputFocus:o.borderInputFocus,inverse:o.borderInverse,inverseSecondary:o.borderInverseSecondary,hover:o.colorInfoMain20},background:{primary:o.colorPrimaryMain20,secondary:"#393B4621",canvas:o.colorBackgroundCanvas,paper:o.colorBackgroundPaper,header:o.colorBackgroundHeader,subnav:o.colorBackgroundSubnav,sidenav:o.colorBackgroundSidenav,accent:o.colorBackgroundAccent,border:o.colorBackgroundBorder,default:o.colorGrey100},action:{active:o.colorActionActive,hover:o.colorActionHover,hoverOpacity:.04,selected:o.colorActionSelected,selectedOpacity:.08,disabled:o.colorActionDisabled,disabledBackground:o.colorActionDisabledBg,disabledOpacity:.38,focus:o.colorActionFocus,focusOpacity:.12,activatedOpacity:.12},primary:{main:o.colorPrimaryMain,light:o.colorPrimaryLight,dark:o.colorPrimaryDark,darker:o.colorPrimaryDarker},secondary:{main:o.colorSecondaryMain,light:o.colorSecondaryLight,dark:o.colorSecondaryDark,darker:o.colorSecondaryDarker},tertiary:{main:o.colorTertiaryMain,light:o.colorTertiaryLight,dark:o.colorTertiaryDark,darker:o.colorTertiaryDarker},error:{main:o.colorErrorMain,light:o.colorErrorLight,dark:o.colorErrorDark,darker:o.colorErrorDarker},warning:{main:o.colorWarningMain,light:o.colorWarningLight,dark:o.colorWarningDark,darker:o.colorWarningDarker},info:{main:o.colorInfoMain,light:o.colorInfoLight,dark:o.colorInfoDark,darker:o.colorInfoDarker},success:{main:o.colorSuccessMain,light:o.colorSuccessLight,dark:o.colorSuccessDark,darker:o.colorSuccessDarker},grey:{50:o.colorGrey50,100:o.colorGrey100,200:o.colorGrey200,300:o.colorGrey300,400:o.colorGrey400,500:o.colorGrey500,600:o.colorGrey600,700:o.colorGrey700,800:o.colorGrey800,900:o.colorGrey900},indigo:{50:o.colorIndigo50,100:o.colorIndigo100,200:o.colorIndigo200,300:o.colorIndigo300,400:o.colorIndigo400,500:o.colorIndigo500,600:o.colorIndigo600,700:o.colorIndigo700,800:o.colorIndigo800,900:o.colorIndigo900},purple:{50:o.colorPurple50,100:o.colorPurple100,200:o.colorPurple200,300:o.colorPurple300,400:o.colorPurple400,500:o.colorPurple500,600:o.colorPurple600,700:o.colorPurple700,800:o.colorPurple800,900:o.colorPurple900},blue:{50:o.colorBlue50,100:o.colorBlue100,200:o.colorBlue200,300:o.colorBlue300,400:o.colorBlue400,500:o.colorBlue500,600:o.colorBlue600,700:o.colorBlue700,800:o.colorBlue800,900:o.colorBlue900}},typography:{htmlFontSize:16,fontFamily:o.fontFamiliesBase,fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,d1:{...e("D1"),color:o.colorTextPrimary},d2:{...e("D2"),color:o.colorTextPrimary},h1:{...e("H1"),color:o.colorTextPrimary},h2:{...e("H2"),color:o.colorTextPrimary},h3:{...e("H3"),color:o.colorTextPrimary},h4:{...e("H4"),color:o.colorTextPrimary},h5:{...e("H5"),color:o.colorTextPrimary},h6:{...e("H6"),color:o.colorTextPrimary},subtitle1:{...e("Subtitle1"),color:o.colorTextPrimary},subtitle2:{...e("Subtitle2"),color:o.colorTextPrimary},body1:{...e("Body1"),color:o.colorTextPrimary},body2:{...e("Body2"),color:o.colorTextPrimary},button:{fontSize:"0.875rem",fontWeight:o.fontWeightsRegular,fontFamily:o.fontFamiliesBase,letterSpacing:.2},caption:{...e("Caption"),color:o.colorTextPrimary},overline:{...e("Overline"),color:o.colorTextPrimary},agreement:{maxHeight:"300px",overflowY:"auto",overflowX:"hidden",padding:".2rem"}},components:{AvDisclaimer:{styleOverrides:{root:{padding:"16px"},accent:{borderLeft:`8px solid ${o.colorWarningDark}`},dense:{padding:"12px 16px"}}},AvEmptyState:{defaultProps:{spacing:2},styleOverrides:{root:{...e("Body2")},image:{width:"112px",height:"112px"}}},AvFavoriteHeart:{styleOverrides:{root:{display:"inline-block",position:"relative","&:hover input":{backgroundColor:o.colorActionHover,"&[disabled]":{backgroundColor:"transparent",cursor:"initial"}}},icon:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",".MuiStack-root":{height:"24px"}},input:{appearance:"none",cursor:"pointer",margin:0,borderRadius:"50%",display:"block"}}},AvFeedbackContainer:{styleOverrides:{root:{maxWidth:"490px",padding:0,"@media (min-width: 600px)":{maxWidth:"490px",padding:0},"form .MuiFormControl-root":{margin:"0px 16px"}},feedbackHeaderContainer:{marginTop:"14px",marginLeft:"16px",marginRight:"16px",marginBottom:"6px",width:"auto",".MuiButtonBase-root":{marginRight:"-10px",marginTop:"-8px"}},smileButtons:{marginTop:"2px",marginBottom:"8px",".MuiToggleButton-root":{borderColor:o.colorSecondaryMain,borderRadius:o.borderRadiusMd,color:o.colorSecondaryMain,margin:"14px 12px",fontSize:"2rem","&:active":{backgroundColor:"#00000020"},"&:hover, &:focus":{backgroundColor:"#00000008",color:o.colorSecondaryMain},"&:hover:focus":{borderColor:o.colorPrimaryContrast},"&:hover":{borderColor:o.colorSecondaryMain},"&:focus":{borderColor:o.colorPrimaryContrast,boxShadow:`0px 0px 0px 2px ${o.borderSecondary}`},"&.Mui-selected":{backgroundColor:o.colorPrimaryMain,borderColor:o.colorPrimaryMain,"&:active, &:hover":{backgroundColor:o.colorPrimaryDark},"&:focus":{backgroundColor:o.colorPrimaryMain,borderColor:o.colorPrimaryContrast,boxShadow:`0px 0px 0px 2px ${o.colorPrimaryMain}`,color:o.colorPrimaryContrast},"&.Mui-disabled":{color:o.colorActionDisabled,borderColor:o.borderDisabled}},"&.MuiToggleButton-sizeLarge":{padding:"12px",width:"56px"}}},formActions:{margin:"14px 12px 8px",".MuiGrid-item":{padding:"0px 4px 8px"},".MuiButton-root":{width:"100%",whiteSpace:"nowrap"}}}},AvFeedbackButton:{defaultProps:{size:"large"}},AvListItemStatusCard:{styleOverrides:{statusAccent:{backgroundColor:o.colorBackgroundAccent},root:{".MuiListItemButton-root":{borderRadius:"0 4px 4px 0","&:active":{backgroundColor:o.colorActionFocus},"&.Mui-focusVisible":{border:`2px solid ${o.colorPrimaryMain}`,borderLeftWidth:0,boxShadow:"none","&:not(:hover):not(:active)":{backgroundColor:"transparent"}},"&.Mui-selected":{backgroundColor:o.colorActionSelected,color:o.colorTextPrimary,borderColor:o.borderPrimary,"~ .MuiListItemSecondaryAction-root .MuiIconButton-root":{color:o.colorTextPrimary},"&:hover":{backgroundColor:o.colorActionHover}}},"@supports (selector(:has(a, b)))":{":has(.MuiListItemButton-root.Mui-selected)":{borderColor:o.borderPrimary},":has(.MuiListItemButton-root.Mui-focusVisible)":{borderColor:o.colorPrimaryMain,boxShadow:`0 0 0px 1px ${o.colorPrimaryMain}`,".MuiListItemButton-root.Mui-focusVisible":{border:"0px",boxShadow:"none"}},":has(.MuiListItemButton-root.Mui-focusVisible.Mui-selected)":{borderColor:o.colorPrimaryMain}}}}},AvSpacesLink:{styleOverrides:{root:{width:"100%","[role='link']":{color:o.colorTextLink,textDecoration:"none",backgroundColor:"transparent","&:hover":{textDecoration:"underline"}},p:{marginBlockStart:0,marginBlockEnd:0}},avDateInfo:{".MuiChip-root":{marginRight:".25rem"}},avFavoriteHeart:{marginTop:"-.5rem",marginRight:".5rem",marginLeft:"-.5rem",minWidth:"auto"},iconLink:{height:"2.5rem",width:"2.5rem",fontSize:"1.5rem",marginTop:"-.5rem",marginRight:".5rem",minWidth:"2.5rem",borderRadius:"50%",position:"relative",".MuiSvgIcon-root":{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:o.colorTextSecondary},"&:hover":{backgroundColor:o.colorActionHover}}}},MuiAccordion:{defaultProps:{disableGutters:!0},styleOverrides:{root:{"&:before":{content:"none"},"&:not(.Av-disableNested) .MuiAccordionDetails-root":{".MuiAccordion-root:not(.Av-disableNested)":{border:"none",".MuiAccordionSummary-root:not(.Mui-focusVisible, :hover, :active)":{backgroundColor:"inherit"},"> .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionDetails-root:first-of-type":{borderTop:"none"}}}},heading:{borderRadius:"inherit"}}},MuiAccordionActions:{styleOverrides:{root:{padding:"1.25rem",flexWrap:"wrap"},spacing:{rowGap:o.spacingBase}}},MuiAccordionDetails:{styleOverrides:{root:{minHeight:"1px",padding:"1.25rem"}}},MuiAccordionSummary:{styleOverrides:{root:{backgroundColor:o.colorBackgroundCanvas,borderRadius:"inherit","&.Mui-expanded":{borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px",minHeight:"0px","&.MuiAccordionSummary-gutters .MuiAccordionSummary-content.Mui-expanded":{margin:"12px 0px"}},"&:hover":{backgroundColor:o.colorActionHover},"&:active":{backgroundColor:o.colorActionSelected},"&.Mui-focusVisible":{backgroundColor:o.colorGrey100,boxShadow:`inset 0 0 0px 2px ${o.colorSecondaryMain}`}},content:{order:2,fontWeight:o.fontWeightsBold,margin:"12px 0px",gap:1},expandIconWrapper:{order:1,marginRight:"8px",color:o.colorSecondaryMain}}},MuiAlert:{styleOverrides:{standardSuccess:{backgroundColor:o.colorGreen100},standardError:{backgroundColor:o.colorRed50},standardWarning:{backgroundColor:o.colorYellow50},standardInfo:{backgroundColor:o.colorBlue50},action:{".MuiButton-root, .MuiLink-root":{padding:"2px 4px",margin:"0px -4px"},".MuiIconButton-root":{marginRight:"-8px"},margin:"-2px 0px -2px auto",padding:"0 0 0 16px",gap:"16px"},icon:({ownerState:r})=>({...r.severity==="success"&&{color:t(o.colorGreen600)},opacity:1,padding:"4px 8px 4px 0px",margin:0,fontSize:o.fontSizesBody1}),message:{color:o.colorTextPrimary,padding:0},root:{border:"none",fontSize:o.fontSizesBody1,lineHeight:o.lineHeightsBody1,padding:"8px 16px"}}},MuiAlertTitle:{styleOverrides:{root:{margin:0,fontWeight:o.fontWeightsBold},message:{fontSize:o.fontSizesBody1,lineHeight:o.lineHeightsBody1,padding:"8px"}}},MuiAutocomplete:{defaultProps:{size:"small",fullWidth:!0,clearOnEscape:!0,filterSelectedOptions:!0,ChipProps:{size:"medium"},slotProps:{paper:{variant:"elevation",elevation:8}}},styleOverrides:{root:{"&.Mui-error .MuiAutocomplete-popupIndicator":{color:o.borderError},"&.MuiAutocomplete-hasPopupIcon":{".MuiAutocomplete-endAdornment":{right:"4px"},".MuiInputBase-root.MuiInputBase-adornedEnd":{paddingRight:"3rem"},"&.MuiAutocomplete-hasClearIcon":{".MuiInputBase-root.MuiInputBase-adornedEnd":{paddingRight:"5rem"}}}},endAdornment:{transform:"none",top:"unset",right:"4px",height:"calc(100% - 16px)",display:"inline-flex",alignItems:"center",".MuiIconButton-root":{display:"flex",marginRight:"0",width:"2.25rem",height:"2.25rem",".MuiSelect-avExpandIcon":{transform:"unset",top:"auto"}}},popupIndicator:{color:o.borderInput,padding:".75rem"},popupIndicatorOpen:{transform:"scaleY(-1)"},clearIndicator:{color:o.borderInput,marginTop:"-8px",marginBottom:"-8px"},option:{"&.MuiAutocomplete-option":{minHeight:"unset","&[aria-selected='true'], &[aria-selected='true'].Mui-focused":{color:o.colorCommonWhite,backgroundColor:o.colorPrimaryMain}}}}},MuiAvatar:{styleOverrides:{colorDefault:{backgroundColor:o.colorBackgroundBorder,color:o.colorTextSecondary}}},MuiBreadcrumbs:{styleOverrides:{root:{".MuiButtonBase-root":{backgroundColor:"transparent"},".breadcrumbs__collapsed-icon":{color:o.colorPrimaryMain}},separator:{marginLeft:".625rem",marginRight:".625rem",color:o.colorGrey300}}},MuiButton:{defaultProps:{disableRipple:!0,disableElevation:!0,variant:"contained",size:"large"},styleOverrides:{root:{boxShadow:"none",fontWeight:o.fontWeightsBold,textTransform:"none",lineHeight:"1.375rem",fontSize:".875rem",".MuiButton-startIcon, .MuiButton-endIcon":{".MuiSvgIcon-fontSizeInherit":{fontSize:"inherit"}}},containedPrimary:{...i("Primary")},containedSecondary:{...i("Secondary")},containedTertiary:{"&.MuiButton-containedTertiary":{...i("Tertiary"),boxSizing:"border-box",border:`1px solid ${o.borderSecondary}`,color:o.colorTertiaryDark,"&:hover":{color:o.colorCommonWhite,border:"1px solid transparent",backgroundColor:o.colorTertiaryDark},"&:active, &.Mui-focused:active, &:focus:active":{color:o.colorCommonWhite,border:"1px solid transparent",backgroundColor:o.colorSecondaryLight},"&.Mui-focused, &:focus":{border:`1px solid ${o.borderSecondary}`,backgroundColor:o.colorTertiaryLight,color:o.colorTertiaryDark},"&.Mui-disabled, &:disabled":{border:`1px solid ${o.borderSecondary}`,backgroundColor:o.colorTertiaryLight,color:o.colorTertiaryDark}}},containedSuccess:{...i("Success")},containedWarning:{...i("Warning")},containedError:{...i("Error")},outlinedPrimary:{...a("Primary")},outlinedSecondary:{...a("Secondary")},outlinedTertiary:{color:o.colorSecondaryMain,"&.MuiButton-outlinedTertiary":{...i("Tertiary"),color:o.colorTertiaryDark,"&:hover":{color:o.colorCommonWhite,border:"1px solid transparent"},"&:active, &.Mui-focused:active, &:focus:active":{backgroundColor:o.colorSecondaryLight,color:o.colorCommonWhite,border:"1px solid transparent"},"&.Mui-focused, &:focus":{border:`1px solid ${o.borderSecondary}`,backgroundColor:o.colorTertiaryLight,color:o.colorTertiaryDark},"&.Mui-disabled, &:disabled":{border:`1px solid ${o.borderSecondary}`,backgroundColor:o.colorTertiaryLight,color:o.colorTertiaryDark}}},outlinedSuccess:{...a("Success")},outlinedWarning:{...a("Warning")},outlinedError:{...a("Error")},sizeSmall:{padding:"4px 16px","&.MuiButton-containedTertiary, &.MuiButton-outlined":{padding:"3px 15px"}},sizeMedium:{padding:"6px 18px","&.MuiButton-containedTertiary, &.MuiButton-outlined":{padding:"5px 17px"}},sizeLarge:{fontSize:".9375rem",lineHeight:"1.5rem",padding:"8px 22px","&.MuiButton-containedTertiary, &.MuiButton-outlined":{padding:"7px 21px"}}}},MuiCard:{defaultProps:{variant:"elevation",elevation:1},styleOverrides:{root:({ownerState:{variant:r}})=>({backgroundColor:o.colorBackgroundPaper,border:r==="outlined"?`1px solid ${o.borderDecorative}`:0,boxShadow:r==="elevation"?o.shadows1:"none"})}},MuiCardActionArea:{styleOverrides:{root:{"&:hover":{backgroundColor:o.colorActionHover},"&.Mui-focusVisible":{boxShadow:`inset 0 0 0px 2px ${o.colorPrimaryMain}`,paddingBottom:"1px",".MuiCardActionArea-focusHighlight ":{opacity:0},".MuiCardHeader-root":{borderBottom:0}},"&:hover:active":{backgroundColor:o.colorActionFocus}}}},MuiCardActions:{styleOverrides:{root:{padding:"16px",borderTop:`1px solid ${o.borderDecorative}`}}},MuiCardContent:{styleOverrides:{root:{fontSize:o.typographyBody2FontSize,fontWeight:o.typographyBody2FontWeight,fontFamily:o.typographyBody2FontFamily,letterSpacing:o.typographyBody2LetterSpacing,color:o.colorTextPrimary}}},MuiCardHeader:{styleOverrides:{root:{color:o.colorTextPrimary,borderBottom:`1px solid ${o.borderDecorative}`},action:{marginTop:0,marginBottom:0,display:"flex",alignItems:"center"}}},MuiCardMedia:{styleOverrides:{maxHeight:"100px"}},MuiCheckbox:{defaultProps:{color:"primary"},styleOverrides:{root:{padding:"8px","&:hover":{backgroundColor:"#00000008"}}}},MuiChip:{defaultProps:{color:"default"},styleOverrides:{root:{height:"auto"},avatar:{margin:"0",height:"1.125rem",width:"1.125rem"},avatarColorDefault:{backgroundColor:o.colorGrey300},deleteIcon:{fontSize:"1rem",margin:"0",fill:o.colorGrey300,"&:hover":{fill:o.colorGrey700}},label:{fontSize:"inherit",padding:"0px 6px"},labelSmall:{padding:"0px 8px",fontSize:".75rem",lineHeight:"1.125rem"},colorDefault:{backgroundColor:o.colorBackgroundAccent,"&:focus":{backgroundColor:o.colorActionFocus}},sizeSmall:{verticalAlign:"text-bottom",borderRadius:"50px",height:"min-content"},sizeMedium:{fontWeight:o.fontWeightsRegular,padding:"3px 4px"}}},MuiCircularProgress:{styleOverrides:{colorInherit:{color:o.colorGrey100}}},MuiCssBaseline:{styleOverrides:{body:{backgroundColor:o.colorBackgroundCanvas}}},MuiDateCalendar:{styleOverrides:{root:{width:"310px"}}},MuiDatePicker:{styleOverrides:{root:{width:"310px",".MuiIconButton-root":{border:"0"}}}},MuiDayCalendar:{styleOverrides:{header:{paddingBottom:"12px"}}},MuiDialog:{defaultProps:{PaperProps:{variant:"elevation",elevation:4}},styleOverrides:{maxWidthSm:{maxWidth:"25rem"},maxWidthMd:{maxWidth:"39.75rem"},maxWidthLg:{maxWidth:"58.75rem"},maxWidthXl:{maxWidth:"71.25rem"},avCloseButton:{"~ .MuiDialogTitle-root":{marginRight:"2.5rem"}}}},MuiDialogActions:{styleOverrides:{root:{padding:"1rem",flexWrap:"wrap"},spacing:{gap:"8px",".MuiButton-root":{margin:0}}}},MuiDialogContent:{defaultProps:{dividers:!0},styleOverrides:{root:{padding:"1rem"}}},MuiDialogTitle:{styleOverrides:{root:{padding:".5rem",paddingLeft:"1rem",minHeight:"3.5rem",display:"flex",alignItems:"center"}}},MuiFormControl:{defaultProps:{size:"small",fullWidth:!0},styleOverrides:{marginDense:{margin:"0 0 .5rem"},marginNormal:{margin:"0 0 1rem"}}},MuiFormControlLabel:{defaultProps:{labelPlacement:"end"},styleOverrides:{root:{"&.Mui-error":{".MuiFormControlLabel-label":{color:o.colorTextError,"&.Mui-disabled":{color:o.colorErrorMain20}},".MuiButtonBase-root, .MuiSvgIcon-root":{color:o.colorTextError},".MuiRadio-root":{color:o.colorErrorMain,"&:hover, &.Mui-checked:hover":{backgroundColor:o.colorErrorMain20}},"&.Mui-disabled":{".MuiRadio-root .MuiSvgIcon-root":{color:o.colorErrorMain20}}}},asterisk:{display:"none"},labelPlacementEnd:{marginLeft:0,marginRight:0}}},MuiFormGroup:{styleOverrides:{root:{"&.MuiFormGroup-row":{".MuiBox-root:not(:last-of-type)":{marginRight:"16px"}}}}},MuiFormHelperText:{defaultProps:{children:" "},styleOverrides:{root:{marginLeft:"0px",minHeight:"1.25rem",lineHeight:"1.25rem","&:not(&.Mui-error) .MuiSvgIcon-root":{display:"none"},".MuiSvgIcon-root":{verticalAlign:"text-bottom"}}}},MuiFormLabel:{styleOverrides:{root:{marginBottom:"3px","&.Mui-disabled":{color:o.colorTextDisabled},"&.Mui-error, &.Mui-error.Mui-focused":{color:o.colorTextError},"&.Mui-focused":{color:o.colorTextPrimary},display:t("flex"),flexDirection:t("row-reverse"),justifyContent:t("flex-end")},asterisk:{color:o.colorTextError,marginRight:".25rem",marginLeft:"-.15rem"},avWrapper:{marginBottom:"3px",display:"flex",flexDirection:"row",".MuiFormLabel-root":{marginBottom:"0px"}}}},MuiIconButton:{defaultProps:{color:"secondary"},styleOverrides:{colorSecondary:{borderColor:o.borderSecondary,"&:hover":{backgroundColor:o.colorActionHover}},colorPrimary:{borderColor:o.borderPrimary,"&:hover, &:focus":{backgroundColor:o.colorActionSelected}},sizeSmall:{fontSize:"1.5rem",padding:".25rem"},sizeMedium:{padding:".75rem"}}},MuiInputBase:{defaultProps:{minRows:2,maxRows:3},styleOverrides:{root:({ownerState:r})=>({boxSizing:"border-box","&.MuiInputBase-root, &.MuiInputBase-root.MuiAutocomplete-inputRoot":{width:r.fullWidth?"100%":"220px",minHeight:r.size==="medium"?"56px":"40px"},"&.MuiInputBase-root":{backgroundColor:"white",padding:"0px","& > fieldset":{borderColor:o.colorGrey400},"&:hover > fieldset":{borderColor:o.borderInputHover},"&.Mui-focused > fieldset":{borderColor:o.borderInputFocus},"&.Mui-error > fieldset":{borderColor:o.colorErrorMain},"&.Mui-disabled > fieldset":{borderColor:o.borderDisabled,color:o.colorTextDisabled},".MuiInputBase-input":{padding:"8px 12px",lineHeight:"1.5rem",color:o.colorTextPrimary,"&::placeholder":{opacity:1,color:o.colorGrey400}},".MuiInputBase-inputAdornedEnd":{paddingRight:"0"},".MuiInputBase-inputAdornedStart":{paddingLeft:"0"},"&.MuiInputBase-adornedStart":{paddingLeft:"12px"},"&.MuiInputBase-adornedEnd":{paddingRight:"12px"},".MuiSelect-avEndAdornmentDivider":{margin:"0 4px"},"&:hover":{".MuiInputBase-input::placeholder":{color:o.colorTextPrimary},".MuiIconButton-root":{color:o.colorGrey700}},"&.Mui-disabled":{".MuiIconButton-root":{color:o.colorTextDisabled}},".MuiIconButton-root":{border:"0",color:o.colorGrey400},".MuiChip-label":{lineHeight:"1.125rem",fontSize:".75rem"}}}),input:{borderRadius:"4px",color:o.colorGrey400,"&:hover":{color:o.colorGrey700}},adornedEnd:{backgroundColor:"white",paddingRight:".75rem"},adornedStart:{paddingLeft:".75rem"}}},MuiLinearProgress:{styleOverrides:{barColorSuccess:{backgroundColor:o.colorSuccessLight}}},MuiLink:{defaultProps:{underline:"hover",variant:"body1"},styleOverrides:{root:{color:o.colorTextLink,"&:active":{color:o.colorTextPrimary},"&:not(.MuiTypography-inherit)":{fontWeight:o.fontWeightsBold},"&.MuiTypography-inherit":{textDecoration:"underline"},"&.MuiTypography-gutterBottom":{marginBottom:".5rem"},".MuiSvgIcon-root":{fontSize:"smaller"}}}},MuiList:{styleOverrides:{root:{".MuiListItem-divider:last-of-type":{borderBottom:0}}}},MuiListItem:{defaultProps:{divider:!0},styleOverrides:{root:{".MuiListItemButton-root.Mui-selected":{"~ .MuiListItemSecondaryAction-root .MuiIconButton-root":{color:o.colorCommonWhite}}},alignItemsFlexStart:{".MuiListItemButton-root":{alignItems:"flex-start","> .MuiChip-root":{marginTop:"1.25rem",marginBottom:"-1.25rem",transform:"translateY(-50%)"}},"> .MuiIconButton-root, > .MuiChip-root":{transform:"translateY(-50%)",marginTop:"1.75rem",marginBottom:"-1.75rem"},".MuiListItemSecondaryAction-root":{top:"1.75rem"},"&.MuiListItem-padding:not(.MuiListItem-dense), &:not(.MuiListItem-padding):not(.MuiListItem-dense) .MuiListItemButton-root:not(.MuiListItemButton-dense)":{paddingTop:".75rem",paddingBottom:".75rem","> .MuiIconButton-root, > .MuiChip-root":{marginTop:"1rem",marginBottom:"-1rem"}},"&.MuiListItem-dense":{".MuiListItemButton-root > .MuiChip-root":{marginTop:"1rem",marginBottom:"-1rem"},"> .MuiIconButton-root, > .MuiChip-root":{marginTop:"1.5rem",marginBottom:"-1.5rem"},".MuiListItemSecondaryAction-root":{top:"1.25rem"},"&.MuiListItem-padding":{"> .MuiIconButton-root, > .MuiChip-root":{marginTop:"1.25rem",marginBottom:"-1.25rem"}}}},dense:{".MuiListItemAvatar-root":{minWidth:"3rem",".MuiAvatar-root":{width:"1.5rem",height:"1.5rem",".MuiSvgIcon-root":{fontSize:".75rem"}}},".MuiListItemIcon-root":{minWidth:"3rem","+ .MuiListItemText-inset":{paddingLeft:"3rem"}}}}},MuiListItemButton:{styleOverrides:{root:{"@supports (selector(:has(a, b)))":{":has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root:nth-of-type(1))":{paddingRight:"calc(1rem + 1 * (1.5rem) + 0.125rem)"},":has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root:nth-of-type(2))":{paddingRight:"calc(1rem + 2 * (1.5rem) + 0.125rem)"},":has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root:nth-of-type(3))":{paddingRight:"calc(1rem + 3 * (1.5rem) + 0.125rem)"},":has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root:nth-of-type(4))":{paddingRight:"calc(1rem + 4 * (1.5rem) + 0.125rem)"},":has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root.MuiIconButton-sizeMedium:nth-of-type(1))":{paddingRight:"calc(1rem + 1 * (2.5rem) + .375rem)"},":has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root.MuiIconButton-sizeMedium:nth-of-type(2))":{paddingRight:"calc(1rem + 2 * (2.5rem) + .375rem)"},":has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root.MuiIconButton-sizeMedium:nth-of-type(3))":{paddingRight:"calc(1rem + 3 * (2.5rem) + .375rem)"},":has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root.MuiIconButton-sizeMedium:nth-of-type(4))":{paddingRight:"calc(1rem + 4 * (2.5rem) + .375rem)"}},"@supports not (selector(:has(a, b)))":{"~ .MuiListItemSecondaryAction-root":{width:"3rem",right:"0px",flexWrap:"wrap",".MuiIconButton-root:not(:only-child)":{padding:".25rem",".MuiSvgIcon-root":{fontSize:"1rem"}}}},"&.Mui-selected":{backgroundColor:o.colorPrimaryMain,color:o.colorTextInverse,".MuiListItemText-root, .MuiListItemText-root *, .MuiListItemSubheader-root, .MuiListItemSubheader-root *, .MuiListItemIcon-root, .MuiListItemIcon-root *, .MuiListItemSecondaryAction-root, .MuiIconButton-root":{color:"inherit"},"&.Mui-focusVisible":{backgroundColor:o.colorPrimaryDark,boxShadow:`inset 0 0 0px 1px ${o.colorPrimaryDark}, inset 0 0 0px 2px ${o.colorCommonWhite}`},"&:hover":{backgroundColor:o.colorPrimaryDark},"&:active":{backgroundColor:o.colorPrimaryDarker},".MuiSvgIcon-root":{color:o.colorTextInverse}},"&.Mui-focusVisible":{boxShadow:`inset 0 0 0px 1px ${o.colorActionFocus}, inset 0 0 0px 2px ${o.colorCommonWhite}`},"&:hover":{backgroundColor:o.colorActionHover},"&:active":{backgroundColor:o.colorActionActive}}}},MuiListItemIcon:{styleOverrides:{root:{fontSize:"1.5rem",minWidth:"3.5rem","+ .MuiListItemText-inset":{paddingLeft:"3.5rem"}}}},MuiListItemText:{defaultProps:{primaryTypographyProps:{variant:"body1",component:"div"},secondaryTypographyProps:{variant:"body2",component:"div"}}},MuiListSubheader:{styleOverrides:{root:{fontWeight:o.fontWeightsBold}}},MuiMenu:{defaultProps:{slotProps:{paper:{variant:"elevation"}}}},MuiMenuItem:{styleOverrides:{root:{"&.Mui-selected":{backgroundColor:o.colorPrimaryMain,color:o.colorTextInverse,"&:hover":{backgroundColor:o.colorPrimaryDark},"&:active":{backgroundColor:o.colorPrimaryDarker},".MuiSvgIcon-root":{color:o.colorTextInverse}},"&:hover":{backgroundColor:o.colorActionHover},"&:active":{backgroundColor:"#00000016"},".MuiSvgIcon-root":{marginRight:"8px",color:o.colorSecondaryMain}}}},MuiPagination:{defaultProps:{color:"primary",shape:"rounded",size:"large"}},MuiPaginationItem:{defaultProps:{color:"primary",shape:"rounded",disableRipple:!0},styleOverrides:{root:{"&:active:not(.MuiPaginationItem-ellipsis)":{color:o.colorCommonWhite,backgroundColor:o.colorActionActive},"&.Mui-disabled":{opacity:"1",color:o.colorTextDisabled}},ellipsis:{backgroundColor:"transparent"},outlined:{backgroundColor:o.colorBackgroundPaper,borderColor:o.colorActionActive,"&.Mui-disabled":{borderColor:o.borderDisabled},"&.Mui-selected":{color:o.colorPrimaryMain,backgroundColor:o.colorActionSelected}}}},MuiPaper:{defaultProps:{variant:"outlined"}},MuiPickersCalendarHeader:{styleOverrides:{root:{padding:"4px 16px 8px"}}},MuiPickersDay:{styleOverrides:{root:{"&.MuiPickersDay-today":{borderColor:o.borderDecorative}}}},MuiPopover:{defaultProps:{PaperProps:{variant:"elevation"}}},MuiRadio:{styleOverrides:{root:{marginLeft:"-10px",padding:"10px","&.MuiButtonBase-root":{"&:hover":{backgroundColor:o.colorActionHover,"&.Mui-checked":{backgroundColor:o.colorActionSelected}},"&.Mui-focused":{backgroundColor:o.colorActionSelected},".MuiTouchRipple-child":{backgroundColor:o.colorActionSelected}}}}},MuiSelect:{defaultProps:{MenuProps:{slotProps:{paper:{variant:"elevation",elevation:8}}}},styleOverrides:{avExpandIcon:{position:"relative",top:"50%",transform:"translateY(-50%)",fontSize:"1rem"},icon:{"&.MuiSvgIcon-root:not(.MuiTablePagination-selectIcon)":{width:"2rem",height:"2rem",top:"unset"},"&.MuiStack-root":{right:"8px",height:"100%",padding:"8px 0px",".MuiSvgIcon-root":{width:"2rem",paddingLeft:"4px"}}},iconOpen:{transform:"scaleY(-1)"},select:{"&.MuiInputBase-input.MuiSelect-select.MuiOutlinedInput-input":{paddingRight:"4rem"},":hover":{".MuiSelect-placeholder":{color:t(o.colorTextPrimary)}}}}},MuiSnackbar:{styleOverrides:{root:({theme:r})=>({[r.breakpoints.down("sm")]:{left:"24px",right:"24px","&.MuiSnackbar-anchorOriginBottomCenter, &.MuiSnackbar-anchorOriginBottomLeft, &.MuiSnackbar-anchorOriginBottomRight":{bottom:"24px"},"&.MuiSnackbar-anchorOriginTopCenter, &.MuiSnackbar-anchorOriginTopLeft, &.MuiSnackbar-anchorOriginTopRight":{top:"24px"}},[r.breakpoints.up("sm")]:{maxWidth:"528px",minWidth:"352px"},".MuiAlert-root":{width:"100%"},".MuiAlert-root, .MuiSnackbarContent-root":{boxShadow:o.shadows24}}),anchorOriginBottomCenter:{bottom:"40px"},anchorOriginBottomLeft:{bottom:"40px",left:"40px"},anchorOriginBottomRight:{bottom:"40px",right:"40px"},anchorOriginTopCenter:{top:"40px"},anchorOriginTopLeft:{top:"40px",left:"40px"},anchorOriginTopRight:{top:"40px",right:"40px"}}},MuiSnackbarContent:{styleOverrides:{root:{backgroundColor:o.colorBlue50,color:o.colorTextPrimary}}},MuiStep:{styleOverrides:{root:{minWidth:"71px",whiteSpace:"wrap","&:not(:first-of-type)":{".MuiStepLabel-vertical":{"&::after":{content:'""',borderLeft:`4px solid ${o.colorGrey200}`,position:"absolute",left:"26px",bottom:"calc(50% + 14px)",top:0}}},"&:not(:last-of-type)":{".MuiStepLabel-vertical":{" &::before":{content:'""',borderLeft:`4px solid ${o.colorGrey200}`,position:"absolute",left:"26px",bottom:0,top:"calc(50% + 14px)"}}},"&.Mui-completed":{".MuiStepLabel-vertical":{"&::before, &::after":{borderColor:o.colorSuccessMain}}},"&.Mui-active":{".MuiStepLabel-vertical":{"&::before, &::after":{borderColor:o.colorSuccessMain}}}}}},MuiStepButton:{styleOverrides:{root:{borderRadius:8,margin:0,padding:0,"&:hover":{backgroundColor:o.colorActionHover},"&:active":{backgroundColor:"#393B4626"},"&.Mui-focusVisible":{outline:`2px solid ${o.borderInputFocus}`}}}},MuiStepIcon:{styleOverrides:{root:{color:o.colorCommonWhite,outline:`2px solid ${o.colorSuccessMain}`,outlineOffset:"-2px",borderRadius:"50%",height:"24px",width:"24px","&.Mui-active":{color:o.colorSuccessMain,outline:"none",".MuiStepIcon-text":{fill:o.colorCommonWhite}},"&.Mui-completed":{color:o.colorSuccessMain,outline:"none"},"&.Mui-error":{outline:"none"},"&.MuiSvgIcon-colorWarning":{outline:"none"}},text:{fill:o.colorTextSuccess,fontSize:"14px"}}},MuiStepLabel:{styleOverrides:{root:{display:"flex",alignSelf:"center",justifyContent:"center",padding:"24px 0"},iconContainer:{".MuiSvgIcon-colorWarning":{color:o.colorWarningDark}},vertical:{padding:"20px 16px",position:"relative"}}},MuiStepConnector:{styleOverrides:{root:{top:"34px",color:o.colorGrey200,left:"calc(-50% + 14px)",right:"calc(50% + 14px)","&.Mui-completed":{color:o.colorSuccessMain},"&.Mui-active":{color:o.colorSuccessMain}},line:{borderColor:"inherit",borderWidth:"4px"},vertical:{display:"none","&.Mui-active + .MuiStep-vertical .MuiStepLabel-vertical::after":{borderColor:o.colorSuccessMain}}}},MuiStepper:{styleOverrides:{root:{flexGrow:1,overflowX:"auto",overflowY:"hidden",whiteSpace:"nowrap",scrollbarWidth:"none",paddingTop:"2px",paddingBottom:"2px"},vertical:{alignItems:"flex-start",overflow:"visible"}}},MuiSvgIcon:{defaultProps:{fontSize:"inherit"},styleOverrides:{colorPrimary:{color:o.colorTextPrimary},colorWarning:{color:o.colorWarningDark},fontSizeXxsmall:{fontSize:o.iconSizeXxsmall},fontSizeXsmall:{fontSize:o.iconSizeXsmall},fontSizeSmall:{fontSize:o.iconSizeSmall},fontSizeMedium:{fontSize:o.iconSizeMedium},fontSizeLarge:{fontSize:o.iconSizeLarge},fontSizeXlarge:{fontSize:o.iconSizeXlarge}}},MuiSwitch:{defaultProps:{disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},styleOverrides:{root:{padding:"unset",height:"20px",width:"40px",overflow:"initial",".MuiSwitch-switchBase":{padding:"2px","&.Mui-focusVisible":{"+ .MuiSwitch-track":{outlineWidth:o.borderWidthXs,outlineColor:o.colorTextInverse,outlineStyle:"solid",boxShadow:`0 0 0px 4px ${o.borderPrimary}`}},"&:hover":{"+ .MuiSwitch-track":{backgroundColor:o.colorSecondaryMain}},"&.Mui-checked":{" + .MuiSwitch-track":{backgroundColor:o.colorPrimaryLight,opacity:1},"&::hover":{"+ .MuiSwitch-track":{backgroundColor:o.colorPrimaryDark}}},"&.Mui-disabled, &.Mui-disabled.Mui-checked":{color:o.colorCommonWhite,"+ .MuiSwitch-track":{backgroundColor:o.colorTextDisabled,opacity:1}}}},thumb:{height:"16px",width:"16px",boxShadow:"unset",backgroundColor:o.colorCommonWhite},track:{borderRadius:"10px",background:o.colorSecondaryLight,opacity:"unset"},sizeSmall:{height:"16px",width:"32px",".MuiSwitch-switchBase":{"&.Mui-checked":{transform:"translateX(16px)"}},".MuiSwitch-thumb":{height:"12px",width:"12px"},".MuiSwitch-track":{borderRadius:"8px"}}}},AvSwitchCheckedIcon:{styleOverrides:{root:{"& .Mui-checked":{"+ .MuiSwitch-track":{"&::before":{left:4}}}}}},MuiTab:{defaultProps:{disableRipple:!0,iconPosition:"start"},styleOverrides:{root:{textTransform:"unset",fontSize:o.typographyBody1FontSize,fontWeight:o.typographyBody1FontWeight,fontFamily:o.typographyBody1FontFamily,letterSpacing:o.typographyBody1LetterSpacing,color:o.colorTextPrimary,marginBottom:"-1px",padding:"11px 8px","&:hover":{backgroundColor:o.colorActionHover},"&.Mui-selected":{fontWeight:o.fontWeightsBold,"&:hover":{backgroundColor:o.colorActionSelected}},"&.Mui-focusVisible":{backgroundColor:o.colorActionFocus}},labelIcon:{minHeight:"3rem"}}},MuiTable:{styleOverrides:{root:{border:`0px solid ${o.borderDecorative}`,backgroundColor:o.colorBackgroundPaper}}},MuiTableCell:{styleOverrides:{root:{borderBottom:`1px solid ${o.borderDecorative}`,"&.MuiTableCell-footer":{borderBottom:"none","&:first-of-type, &:only-child":{paddingTop:"1.25rem"},"&:last-of-type, &:only-child":{paddingBottom:"1.25rem"}}},head:{fontWeight:o.fontWeightsBold,borderBottomWidth:"2px"},header:{borderBottom:"0px",padding:"1.25rem 1rem",width:"100%",display:"block"},sizeMedium:{lineHeight:"1.25rem"}}},MuiTablePagination:{defaultProps:{colSpan:12},styleOverrides:{root:{".MuiTablePagination-toolbar":{padding:"0 .5rem 0 1rem"}},actions:{"&:not(:last-child)":{flexGrow:1,marginRight:".25rem"},marginLeft:".25rem"},displayedRows:{flexGrow:1},input:{borderRadius:".25rem",marginLeft:".25rem",marginRight:".75rem","&.MuiInputBase-root":{width:"auto"}},select:{"&.MuiTablePagination-select.MuiSelect-select":{paddingRight:"1.5rem",borderRadius:".25rem"}},selectLabel:{},selectIcon:{fontSize:o.iconSizeXxsmall,marginRight:"8px"},spacer:{display:"none"},toolbar:{flexWrap:"wrap",flexShrink:1}}},MuiTableSortLabel:{styleOverrides:{root:{borderRadius:".25rem",padding:".25rem",margin:"-.25rem","&:hover":{backgroundColor:o.colorActionHover,".MuiTableSortLabel-icon":{opacity:1}},"&:focus":{backgroundColor:o.colorActionFocus}},icon:{opacity:1,transition:"none",fontSize:o.iconSizeXxsmall,color:o.colorTextSecondary,marginRight:"0px"}}},MuiTabs:{styleOverrides:{root:{height:"3rem"},flexContainer:{borderBottom:`1px solid ${o.borderDecorative}`},avSecondary:{".MuiTab-root.Mui-selected:hover":{backgroundColor:o.colorActionSelected}}}},MuiTextField:{defaultProps:{size:"small",fullWidth:!0,helperText:" "}},MuiToggleButton:{defaultProps:{size:"small"},styleOverrides:{root:{textTransform:"unset",backgroundColor:o.colorTertiaryMain,fontWeight:o.fontWeightsBold,color:o.colorTextPrimary,borderColor:o.borderSecondary,"&.Mui-selected":{backgroundColor:o.colorTertiaryDarker,color:o.colorTertiaryLight,borderColor:o.colorTertiaryDarker,"&:hover":{backgroundColor:o.colorTertiaryDark,color:o.colorTertiaryLight,borderColor:o.colorTertiaryMain}},"&:focus":{boxShadow:`0 0 0px 2px ${o.colorGrey700}78`,backgroundColor:o.colorTertiaryLight,color:o.colorTextPrimary,borderColor:o.colorGrey700},"&:hover":{backgroundColor:o.colorTertiaryDark,color:o.colorTertiaryLight,borderColor:o.colorTertiaryMain},"&.MuiToggleButton-sizeSmall":{padding:"8px 16px",height:"40px"},"&.MuiToggleButton-sizeMedium":{padding:"12px 16px",height:"48px"},"&.MuiToggleButton-sizeLarge":{padding:"16px",height:"56px"},"&.Mui-disabled":{backgroundColor:o.colorActionDisabledBg,borderColor:o.colorTertiaryMain,color:o.colorActionDisabled}}}},MuiToggleButtonGroup:{defaultProps:{size:"small"}},MuiTooltip:{defaultProps:{arrow:!0},styleOverrides:{tooltip:{backgroundColor:o.colorSecondaryMain,lineHeight:"1rem",fontSize:".75rem",fontStyle:"normal",padding:"4px 8px"},arrow:{color:o.colorSecondaryMain}}},MuiTreeItem2:{styleOverrides:{checkbox:{"&.Mui-checked":{color:o.colorTextInverse}},content:{borderRadius:0,padding:"8px 16px",alignItems:"start","&:hover":{backgroundColor:o.colorActionHover},"&:active":{backgroundColor:`${o.colorSecondaryDark}26`},"&.Mui-focused":{outlineWidth:o.borderWidthXs,outlineColor:o.colorTextInverse,outlineStyle:"solid",boxShadow:`0 0 0px 4px ${o.borderPrimary}`},"&.Mui-selected":{backgroundColor:o.colorPrimaryMain,".MuiTreeItem-iconContainer":{color:o.colorTextInverse},".MuiTreeItem-label":{color:o.colorTextInverse},"&:hover":{backgroundColor:o.colorPrimaryDark},"&:active":{backgroundColor:o.colorPrimaryDarker}}},iconContainer:{color:o.colorSecondaryMain,paddingTop:"4px",svg:{fontSize:"inherit",marginRight:"4px"}}}},MuiTypography:{defaultProps:{variantMapping:{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"div",subtitle2:"div",body1:"p",body2:"p",inherit:"p",agreement:"div"}}}}},M={title:"Design System/Theme/Default",parameters:{docs:{description:{component:`Raw theme object (with component overrides removed for brevity).

Useful for knowing what values are directly accessible through System Properties.`}}}},{components:b,...p}=s,n={render:()=>u.jsx("pre",{children:JSON.stringify(p,null,2)})};var l,c,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <pre>{JSON.stringify(lightThemeWOOverrides, null, 2)}</pre>
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const x=["RawTheme"];export{n as RawTheme,x as __namedExportsOrder,M as default};
