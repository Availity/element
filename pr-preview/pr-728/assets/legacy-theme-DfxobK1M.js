import{l as o}from"./index-D9reqBoJ.js";const i=r=>`${r} !important`,t=r=>({backgroundColor:o[`color${r}Main`],color:o[`color${r}Contrast`],"&:hover":{backgroundColor:o[`color${r}Dark`],boxShadow:"none",color:r==="Warning"&&o.colorTextInverse},"&.Mui-focusVisible":{backgroundColor:o[`color${r}Dark`],outline:"2px solid white",boxShadow:`0 0 0px 4px ${r==="Tertiary"?o.colorSecondaryDark:o[`color${r}Dark`]}`,color:r==="Warning"&&o.colorTextInverse},"&:active":{backgroundColor:o[`color${r}Main`]},"&.Mui-disabled":{opacity:.65}}),a=r=>({"&:hover":{backgroundColor:`${o[`color${r}Main`]}${r==="Tertiary"?"":"21"}`},"&.Mui-focusVisible":{outline:"2px solid white",boxShadow:`0 0 0px 4px ${r==="Tertiary"?o.colorSecondaryMain:o[`color${r}Main`]}`,backgroundColor:`${o[`color${r}Main`]}${r==="Tertiary"?"":"21"}`},"&:active":{backgroundColor:`${o[`color${r}Main`]}${r==="Tertiary"?"":"42"}`}}),e=r=>({fontSize:`${o[`typography${r}FontSize`]}`,fontWeight:`${o[`typography${r}FontWeight`]}`,fontFamily:`${o[`typography${r}FontFamily`]}`,letterSpacing:`${o[`typography${r}LetterSpacing`]}`,lineHeight:`${o[`lineHeights${r}`]}`}),c={mode:"light",palette:{contrastThreshold:4.5,contrastText:"#fff",tonalOffset:.2,divider:o.borderDecorative,text:{primary:o.colorTextPrimary,secondary:o.colorTextSecondary,disabled:o.colorTextDisabled,error:o.colorTextError,hint:"rgba(0, 0, 0, 0.38)",divider:"rgba(0, 0, 0, 0.12)",success:o.colorSuccessMain,info:o.colorTextPrimary,link:o.colorTextLink,inverse:o.colorCommonWhite,inverseSecondary:"#ffffff24"},border:{primary:o.borderPrimary,secondary:o.borderSecondary,error:o.borderError,disabled:o.borderDisabled,decorative:o.borderDecorative,input:o.borderInput,inputHover:o.borderInputHover,inputFocus:o.borderInputFocus,inverse:o.colorCommonWhite,inverseSecondary:"#ffffff24"},background:{canvas:o.colorBackgroundCanvas,paper:o.colorBackgroundPaper,header:o.colorBackgroundHeader,subnav:o.colorBackgroundSubnav,sidenav:o.colorBackgroundSidenav,accent:o.colorBackgroundAccent,border:o.colorBackgroundBorder,default:o.colorGrey50},action:{active:o.colorActionActive,hover:o.colorActionHover,hoverOpacity:.04,selected:o.colorActionSelected,selectedOpacity:.08,disabled:o.colorActionDisabled,disabledBackground:o.colorActionDisabledBg,disabledOpacity:.38,focus:o.colorActionFocus,focusOpacity:.12,activatedOpacity:.12},primary:{main:o.colorPrimaryMain,light:o.colorPrimaryLight,dark:o.colorPrimaryDark,darker:o.colorPrimaryDarker},secondary:{main:o.colorSecondaryMain,light:o.colorSecondaryLight,dark:o.colorSecondaryDark,darker:o.colorSecondaryDarker},tertiary:{main:o.colorTertiaryMain,light:o.colorTertiaryLight,dark:o.colorTertiaryDark,darker:o.colorTertiaryDarker},error:{main:o.colorErrorMain,light:o.colorErrorLight,dark:o.colorErrorDark,darker:o.colorErrorDarker},warning:{main:o.colorWarningMain,light:o.colorWarningLight,dark:o.colorWarningDark,darker:o.colorWarningDarker},info:{main:o.colorInfoMain,light:o.colorInfoLight,dark:o.colorInfoDark,darker:o.colorInfoDarker},success:{main:o.colorSuccessMain,light:o.colorSuccessLight,dark:o.colorSuccessDark,darker:o.colorSuccessDarker},grey:{50:o.colorGrey50,100:o.colorGrey100,200:o.colorGrey200,300:o.colorGrey300,400:o.colorGrey400,500:o.colorGrey500,600:o.colorGrey600,700:o.colorGrey700,800:o.colorGrey800,900:o.colorGrey900},indigo:{50:o.colorIndigo50,100:o.colorIndigo100,200:o.colorIndigo200,300:o.colorIndigo300,400:o.colorIndigo400,500:o.colorIndigo500,600:o.colorIndigo600,700:o.colorIndigo700,800:o.colorIndigo800,900:o.colorIndigo900},purple:{50:o.colorPurple50,100:o.colorPurple100,200:o.colorPurple200,300:o.colorPurple300,400:o.colorPurple400,500:o.colorPurple500,600:o.colorPurple600,700:o.colorPurple700,800:o.colorPurple800,900:o.colorPurple900},blue:{50:o.colorBlue50,100:o.colorBlue100,200:o.colorBlue200,300:o.colorBlue300,400:o.colorBlue400,500:o.colorBlue500,600:o.colorBlue600,700:o.colorBlue700,800:o.colorBlue800,900:o.colorBlue900}},typography:{htmlFontSize:16,fontFamily:"'Helvetica Neue', Helvetica, Arial, sans-serif",fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,d1:{...e("D1"),color:o.colorTextPrimary},d2:{...e("D2"),color:o.colorTextPrimary},h1:{...e("H1"),color:o.colorTextPrimary},h2:{...e("H2"),color:o.colorTextPrimary},h3:{...e("H3"),color:o.colorTextPrimary},h4:{...e("H4"),color:o.colorTextPrimary},h5:{...e("H5"),color:o.colorTextPrimary},h6:{...e("H6"),color:o.colorTextPrimary},subtitle1:{...e("Subtitle1"),color:o.colorTextPrimary},subtitle2:{...e("Subtitle2"),color:o.colorTextPrimary},body1:{...e("Body1"),color:o.colorTextPrimary},body2:{...e("Body2"),color:o.colorTextPrimary},button:{fontSize:o.fontSizesBody1,fontWeight:o.fontWeightsRegular,fontFamily:o.fontFamiliesBase,letterSpacing:.2},caption:{...e("Caption"),color:o.colorTextPrimary},overline:{...e("Overline"),color:o.colorTextPrimary},agreement:{maxHeight:"300px",overflowY:"auto",overflowX:"hidden",padding:".2rem"}},components:{AvDisclaimer:{styleOverrides:{root:{padding:"16px"},accent:{borderLeft:`5px solid ${o.colorWarningMain}`},dense:{padding:"12px 16px"}}},AvEmptyState:{defaultProps:{spacing:2},styleOverrides:{root:{...e("Body2")},image:{width:"112px",height:"112px"}}},AvFavoriteHeart:{styleOverrides:{root:{display:"inline-block",position:"relative","&:hover input":{backgroundColor:o.colorActionHover,"&[disabled]":{backgroundColor:"transparent",cursor:"initial"}}},icon:{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},input:{appearance:"none",cursor:"pointer",margin:0,borderRadius:"0.25rem",display:"block"}}},AvFeedbackContainer:{styleOverrides:{root:{padding:i("0"),maxWidth:i("550px"),".MuiFormControl-root":{paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingBottom:"1.5rem"}},feedbackHeaderContainer:{backgroundColor:o.colorGrey100,padding:"15px 1.5rem",".MuiButtonBase-root":{paddingRight:0}},smileButtons:{padding:"2rem 1.5rem",width:"100%",div:{width:"100%",marginLeft:"8px",marginRight:"8px"},".MuiToggleButton-root":{width:"100%",border:0,borderRadius:o.borderRadiusMd,"&:focus":{backgroundColor:o.colorActionFocus,color:o.colorTextPrimary},"&:hover":{backgroundColor:o.colorActionHover,color:o.colorTextPrimary},"&.Mui-selected":{backgroundColor:o.colorPrimaryMain,"&:active":{backgroundColor:o.colorPrimaryDarker},"&:focus, &:hover":{backgroundColor:o.colorPrimaryDark,color:o.colorCommonWhite},"&.Mui-disabled":{backgroundColor:o.colorPrimaryMain20}},"&.MuiToggleButton-sizeLarge":{padding:".375rem .75rem",height:"auto",".MuiSvgIcon-root":{fontSize:"2em"}}}},formActions:{backgroundColor:o.colorGrey100,padding:"15px 1.5rem",justifyContent:"flex-end",".MuiGrid-item":{"&:first-of-type":{paddingRight:"8px"}}}}},AvFeedbackButton:{defaultProps:{size:"medium"}},AvListItemStatusCard:{styleOverrides:{statusAccent:{backgroundColor:o.colorBackgroundBorder,width:"10px"},root:{borderColor:o.borderDecorative,paddingLeft:"10px","&.MuiListItem-padding.MuiListItem-gutters":{paddingLeft:"calc(1.25rem + 10px)","&.MuiListItem-dense":{paddingLeft:"calc(1rem + 10px)"}},".MuiListItemButton-root":{borderRadius:"0 4px 4px 0","&:active":{backgroundColor:o.colorActionFocus},"&.Mui-focusVisible":{border:`2px solid ${o.colorPrimaryMain}`,borderLeftWidth:0,boxShadow:"none","&:not(:hover):not(:active)":{backgroundColor:"transparent"}},"&.Mui-selected":{backgroundColor:o.colorActionHover,color:o.colorTextPrimary,borderColor:o.borderDisabled,"~ .MuiListItemSecondaryAction-root .MuiIconButton-root":{color:o.colorTextPrimary},"&:hover":{backgroundColor:o.colorActionHover},"&:active":{backgroundColor:o.colorActionActive},"&.Mui-focusVisible":{backgroundColor:o.colorActionFocus}}},"@supports (selector(:has(a, b)))":{":has(.MuiListItemButton-root.Mui-selected)":{borderColor:o.borderDisabled},":has(.MuiListItemButton-root.Mui-focusVisible)":{borderColor:o.colorPrimaryMain,boxShadow:`0 0 0px 1px ${o.colorPrimaryMain}`,".MuiListItemButton-root.Mui-focusVisible":{border:"0px",boxShadow:"none"}},":has(.MuiListItemButton-root.Mui-focusVisible.Mui-selected)":{borderColor:o.colorPrimaryMain}}}}},AvSpacesLink:{styleOverrides:{root:{width:"100%","[role='link']":{color:o.colorTextLink,textDecoration:"none",backgroundColor:"transparent","&:hover":{textDecoration:"underline"}},p:{marginBlockStart:0,marginBlockEnd:0}},avDateInfo:{".MuiChip-root":{marginRight:".25rem"}},avFavoriteHeart:{marginRight:".25rem",marginLeft:"-.25rem",minWidth:"auto"},iconLink:{marginRight:".25rem",borderRadius:"50%",position:"relative"}}},MuiAccordion:{defaultProps:{disableGutters:!0},styleOverrides:{root:{borderColor:o.colorGrey100,"&:before":{content:"none"}}}},MuiAccordionActions:{styleOverrides:{root:{padding:"1.25rem",flexWrap:"wrap"},spacing:{rowGap:o.spacingBase}}},MuiAccordionDetails:{styleOverrides:{root:{minHeight:"1px",padding:"1.25rem"}}},MuiAccordionSummary:{styleOverrides:{root:{paddingY:"12px",paddingX:"20px",backgroundColor:o.colorGrey100,"&.Mui-focusVisible":{borderRadius:"4px",boxShadow:`inset 0 0 0px 2px ${o.colorSecondaryMain}, inset 0 0 0px 4px ${o.colorCommonWhite}`}},content:{order:2,fontWeight:o.fontWeightsBold},avPrimaryContent:{fontWeight:o.fontWeightsBold},expandIconWrapper:{order:1,marginRight:"8px",padding:"2px",color:o.colorSecondaryMain,transform:"rotate(-90deg)","&.Mui-expanded":{transform:"rotate(0deg)"}}}},MuiAlert:{defaultProps:{icon:!1},styleOverrides:{standardSuccess:{backgroundColor:o.colorSuccessMain,color:o.colorSuccessContrast},standardError:{backgroundColor:o.colorErrorMain,color:o.colorErrorContrast},standardWarning:{backgroundColor:o.colorWarningMain,color:o.colorWarningContrast},standardInfo:{backgroundColor:o.colorPrimaryMain,color:o.colorPrimaryContrast},action:{margin:"-3px -3px -3px auto",padding:"0 0 0 8px",alignItems:"center",color:"inherit"},message:{color:"inherit",padding:0},root:{border:"none",fontSize:o.fontSizesBody1,lineHeight:o.lineHeightsBody1,padding:"0.75rem 1.25rem"}}},MuiAlertTitle:{styleOverrides:{root:{margin:0,fontWeight:o.fontWeightsBold,color:"inherit"},message:{fontSize:o.fontSizesBody1,lineHeight:o.lineHeightsBody1,padding:"8px"}}},MuiAutocomplete:{defaultProps:{size:"small",fullWidth:!0,clearOnEscape:!0,ChipProps:{size:"medium"}},styleOverrides:{root:{".MuiOutlinedInput-root.MuiInputBase-sizeSmall":{paddingTop:"4px",paddingBottom:"4px"},"&.Mui-error .MuiAutocomplete-popupIndicator":{color:o.borderError},"&.MuiAutocomplete-hasPopupIcon":{".MuiAutocomplete-endAdornment":{right:"0px"},".MuiInputBase-root.MuiInputBase-adornedEnd":{paddingRight:"2.5rem"},"&.MuiAutocomplete-hasClearIcon":{".MuiInputBase-root.MuiInputBase-adornedEnd":{paddingRight:"4rem"}}}},endAdornment:{transform:"none",top:"unset",right:"4px",height:"calc(100% - 16px)",display:"inline-flex",alignItems:"center",".MuiIconButton-root":{display:"flex",marginRight:"0",width:"2.25rem",height:"2.25rem",".MuiSelect-avExpandIcon":{top:"unset",transform:"unset"}}},inputRoot:{paddingTop:"4px",paddingBottom:"4px",".MuiOutlinedInput-input.MuiAutocomplete-input":{minHeight:"24px",padding:"2px 6px"},".MuiCircularProgress-root.MuiCircularProgress-indeterminate":{color:"inherit",fontSize:".5rem",marginRight:"-.5rem"},".MuiChip-root.MuiChip-deletable":{flexDirection:"row",backgroundColor:"rgb(230, 230, 230)",".MuiChip-label":{fontWeight:o.fontWeightsRegular},".MuiSvgIcon-root.MuiChip-deleteIcon":{margin:"0 -1px 0 5px",background:`radial-gradient(${o.colorTextPrimary}, ${o.colorTextPrimary}, rgb(230, 230, 230), rgb(230, 230, 230), rgb(230, 230, 230))`,color:"rgb(230, 230, 230)","&:hover":{background:`radial-gradient(${o.colorTextError}, ${o.colorTextError}, rgb(230, 230, 230), rgb(230, 230, 230), rgb(230, 230, 230))`,color:"#ffc0cb"}}}},popupIndicator:{color:o.borderInput},popupIndicatorOpen:{transform:"scaleY(-1)"},clearIndicator:{color:o.borderInput,marginTop:"-8px",marginBottom:"-8px"},option:{"&.MuiAutocomplete-option":{minHeight:"unset","&[aria-selected='true'], &[aria-selected='true'].Mui-focused":{color:o.colorCommonWhite,backgroundColor:"rgba(50, 98, 175, 1)",fontWeight:500},"&.Mui-focused":{color:o.colorTextPrimary,backgroundColor:"rgba(184, 212, 251,1)"}}},tag:{margin:"2px"}}},MuiAvatar:{styleOverrides:{colorDefault:{backgroundColor:o.colorBackgroundBorder,color:o.colorTextSecondary}}},MuiBreadcrumbs:{styleOverrides:{root:{".MuiButtonBase-root":{backgroundColor:"transparent"},".breadcrumbs__collapsed-icon":{color:o.colorPrimaryMain}},li:{".MuiLink-root:hover":{color:o.colorTextLink}},separator:{marginLeft:".25rem",marginRight:".25rem",".MuiSvgIcon-root":{width:".8rem",height:".8rem",marginBottom:"-2px",color:o.colorGrey400}}}},MuiButton:{defaultProps:{disableRipple:!0,disableElevation:!0,variant:"contained",size:"medium"},styleOverrides:{root:{lineHeight:"24px",boxShadow:"none",textTransform:"none",".MuiButton-startIcon, .MuiButton-endIcon":{".MuiSvgIcon-fontSizeInherit":{fontSize:"inherit"}}},containedPrimary:{...t("Primary")},containedSecondary:{...t("Secondary")},containedTertiary:{...t("Tertiary")},containedSuccess:{...t("Success")},containedWarning:{...t("Warning")},containedError:{...t("Error")},outlinedPrimary:{...a("Primary")},outlinedSecondary:{...a("Secondary")},outlinedTertiary:{color:o.colorSecondaryMain,...a("Secondary")},outlinedSuccess:{...a("Success")},outlinedWarning:{...a("Warning")},outlinedError:{...a("Error")},sizeSmall:{padding:"0.25rem 0.5rem",fontSize:".875rem",borderRadius:"0.2rem"},sizeMedium:{padding:"0.375rem 0.75rem",fontSize:"1rem",borderRadius:"0.25rem"},sizeLarge:{padding:"0.5rem 1rem",fontSize:"1.25rem",borderRadius:"0.3rem"}}},MuiButtonGroup:{defaultProps:{color:"secondary",variant:"contained",disableElevation:!0,disableRipple:!0},styleOverrides:{grouped:{"&:focus":{zIndex:"1"}},groupedContained:{borderColor:i(o.colorPrimaryContrast)},groupedContainedPrimary:{"&:focus:hover":{boxShadow:`0 0 0px 4px ${o.colorPrimaryDark}`}},groupedContainedSecondary:{"&:focus:hover":{boxShadow:`0 0 0px 4px ${o.colorSecondaryDark}`}},groupedContainedTertiary:{borderColor:i(o.colorSecondaryMain),"&:focus:hover":{boxShadow:`0 0 0px 4px ${o.colorSecondaryDark}`}}}},MuiCard:{defaultProps:{variant:"outlined"},styleOverrides:{root:{backgroundColor:o.colorBackgroundPaper,borderColor:o.colorGrey100}}},MuiCardActions:{styleOverrides:{root:{padding:"1.25rem",backgroundColor:o.colorGrey100}}},MuiCardContent:{styleOverrides:{root:{fontSize:o.typographyBody1FontSize,fontWeight:o.typographyBody1FontWeight,fontFamily:o.typographyBody1FontFamily,letterSpacing:o.typographyBody1LetterSpacing,color:o.colorTextPrimary,padding:"1.25rem"}}},MuiCardFooter:{styleOverrides:{root:{padding:"1.25rem"}}},MuiCardHeader:{styleOverrides:{root:{backgroundColor:o.colorGrey100,color:o.colorTextPrimary,padding:".75rem 1.25rem",lineHeight:"24px",".MuiCardHeader-title, .MuiCardHeader-subheader":{fontWeight:o.fontWeightsRegular}}}},MuiCardMedia:{styleOverrides:{padding:"1.25rem"}},MuiCheckbox:{defaultProps:{disableRipple:!0},styleOverrides:{root:{padding:"2px 4px","&.PrivateSwitchBase-edgeStart":{marginLeft:"-4px"},"&.PrivateSwitchBase-edgeEnd":{marginRight:"-4px"},"&.Mui-focusVisible":{".MuiSvgIcon-root":{outline:`2px solid ${o.borderInputFocus}`,borderRadius:"3px"}},"&.MuiCheckbox-colorPrimary":{color:o.colorGrey500,"&:hover":{color:o.colorGrey900},"&.Mui-checked":{color:"#0075ff","&:hover":{color:o.colorPrimaryMain}},"&.Mui-disabled":{color:o.colorGrey300}},"&.MuiCheckbox-colorError":{color:o.colorGrey500,"&:hover":{color:o.colorGrey900},"&.Mui-checked":{color:o.colorErrorMain,"&:hover":{color:o.colorErrorDark}},"&.Mui-disabled":{color:o.colorGrey300}},".MuiSvgIcon-root":{backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1em 1em' overflow='visible'%3E%3Crect x='16%' y='16%' rx='1' ry='1' width='68%' height='68%' stroke='transparent' fill='white' stroke-width='1' %3E%3C/rect%3E%3C/svg%3E")`,fontSize:"1rem"}}}},MuiChip:{defaultProps:{color:"default"},styleOverrides:{root:{height:"auto",fontSize:".75rem",lineHeight:".75rem",borderRadius:".25rem","&.MuiChip-deletable":{flexDirection:"row-reverse","&:hover":{boxShadow:"none"},"&.Mui-focusVisible":{backgroundColor:o.colorActionFocus,outline:"2px solid white",boxShadow:`0 0 0px 4px ${o.colorSecondaryLight}`,".MuiChip-deleteIcon":{color:o.colorSecondaryLight}}}},avatar:{margin:"0 .2rem 0 -.2rem",height:"1rem",width:"1rem"},avatarColorDefault:{backgroundColor:o.colorGrey300},deleteIcon:{fontSize:"1rem",margin:"0 5px 0 -6px",transition:"color 300ms"},label:{fontSize:"inherit",padding:"0px"},colorDefault:{backgroundColor:o.colorGrey100},sizeSmall:{fontWeight:o.fontWeightsBold,verticalAlign:"text-bottom",padding:"0.25rem 0.4rem"},sizeMedium:{fontWeight:o.fontWeightsBold,padding:"0.25rem 0.6rem"}}},MuiCircularProgress:{styleOverrides:{indeterminate:({ownerState:r})=>{const l=typeof r.size=="number"?Math.round(r.size/2):16,n=r.color==="inherit"?"currentColor":"%2302a17c";return{"&.MuiCircularProgress-root.MuiCircularProgress-indeterminate":{display:"inline-block",fontSize:`${l}px`,height:i("1em"),width:i("calc(2.3em + 20px)"),marginRight:"-20px",animation:"none",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1em 1em' font-size='${l}px' overflow='visible'%3E%3Ctext dominant-baseline='central' fill='${n}' font-size='2em' y='.25em' x='0'%3E &%238226; %3Canimate attributeName='opacity' dur='3s' repeatCount='indefinite' values='0;1;1;0;0' keyTimes='0;0.3;0.6;0.8;1'/%3E%3CanimateTransform attributeName='transform' type='translate' values='20 0;0 0;0 0' keyTimes='0;0.3;1' dur='3s' repeatCount='indefinite' /%3E%3C/text%3E%3Ctext dominant-baseline='central' fill='${n}' font-size='2em' y='.25em' x='.4em'%3E &%238226; %3Canimate attributeName='opacity' dur='3s' repeatCount='indefinite' values='0;0;1;1;0;0' keyTimes='0;0.1;0.4;0.6;0.8;1'/%3E%3CanimateTransform attributeName='transform' type='translate' values='0 0;20 0;0 0;0 0' keyTimes='0;0.1;0.4;1' dur='3s' repeatCount='indefinite' /%3E%3C/text%3E%3Ctext dominant-baseline='central' fill='${n}' font-size='2em' y='.25em' x='.8em'%3E &%238226; %3Canimate attributeName='opacity' dur='3s' repeatCount='indefinite' values='0;0;1;1;0;0' keyTimes='0;0.2;0.5;0.6;0.8;1'/%3E%3CanimateTransform attributeName='transform' type='translate' values='0 0;20 0;0 0;0 0' keyTimes='0;0.2;0.5;1' dur='3s' repeatCount='indefinite' /%3E%3C/text%3E%3C/svg%3E%0A")`}}},circleIndeterminate:{display:"none"}}},MuiContainer:{defaultProps:{maxWidth:"xl"},styleOverrides:{root:{paddingLeft:"15px",paddingRight:"15px","@media (min-width: 600px)":{paddingLeft:"15px",paddingRight:"15px"},"@media (min-width: 576px)":{maxWidth:"540px"},"@media (min-width: 768px)":{maxWidth:"720px"},"@media (min-width: 992px)":{maxWidth:"960px"},"@media (min-width: 1200px)":{maxWidth:"1140px"}}}},MuiDatePicker:{defaultProps:{disableHighlightToday:!0}},MuiDayCalendar:{styleOverrides:{root:{},weekDayLabel:{fontSize:".75rem",width:"39px",height:"38px",border:"1px solid transparent",margin:"0px -1px 0px 0px",color:o.colorSecondaryMain},header:{margin:"0px 1px 1px 0px"},weekContainer:{margin:"0px 1px 0px 0px","&:last-of-type":{marginBottom:"1px"}}}},MuiDialog:{styleOverrides:{maxWidthSm:{maxWidth:"25rem"},maxWidthMd:{maxWidth:"39.75rem"},maxWidthLg:{maxWidth:"58.75rem"},maxWidthXl:{maxWidth:"71.25rem"},paper:{backgroundColor:o.colorGrey100},avCloseButton:{padding:".75rem",".MuiSvgIcon-root":{fontSize:"1.125rem"}}}},MuiDialogActions:{styleOverrides:{root:{backgroundColor:o.colorGrey100,padding:"1rem 1.5rem",flexWrap:"wrap"},spacing:{gap:"8px",".MuiButton-root":{margin:0}}}},MuiDialogContent:{defaultProps:{dividers:!0},styleOverrides:{root:{padding:"24px",backgroundColor:o.colorBackgroundPaper},divider:{borderColor:o.colorGrey100}}},MuiDialogTitle:{styleOverrides:{root:{backgroundColor:o.colorGrey100}}},MuiFormControl:{defaultProps:{size:"small",fullWidth:!0}},MuiFormControlLabel:{styleOverrides:{root:{marginLeft:"-4px",marginRight:"12px","&.Mui-error":{".MuiFormControlLabel-label":{color:o.colorTextError}}},asterisk:{display:"none"},avWrapper:{marginLeft:"-4px",marginRight:"12px",lineHeight:"1rem",textWrap:"nowrap",".MuiFormControlLabel-root":{margin:"0"}},label:{textWrap:"wrap",overflowWrap:"anywhere"}}},MuiFormHelperText:{styleOverrides:{root:{marginLeft:"0px",fontSize:".875rem",color:o.colorTextSecondary,"&.Mui-error":{color:o.colorTextError},"&:not(&.Mui-error) .MuiSvgIcon-root":{display:"none"},".MuiSvgIcon-root":{verticalAlign:"text-bottom"}}}},MuiFormLabel:{styleOverrides:{root:{marginBottom:".1rem","&.Mui-error, &.Mui-error.Mui-focused":{color:o.colorTextPrimary},"&.Mui-disabled":{color:o.colorTextDisabled},"&.Mui-focused":{color:"inherit"},display:i("flex"),flexDirection:i("row-reverse"),justifyContent:i("flex-end")},asterisk:{color:o.colorErrorMain,fontWeight:o.fontWeightsBold,marginRight:".25rem",fontSize:"1.3rem",lineHeight:"100%"},avWrapper:{marginBottom:".1rem",display:"flex",flexDirection:"row",lineHeight:"1.5rem",minHeight:"1.5rem",".MuiFormLabel-root":{marginBottom:"0"},"&:has(legend), &:has(.legend), legend, .legend":{fontSize:"1.5rem",lineHeight:"2.25rem",marginBottom:".5rem"}}}},MuiIconButton:{defaultProps:{disableRipple:!0,color:"secondary"},styleOverrides:{root:{borderRadius:"3px",opacity:.6,"&:hover, &:focus":{opacity:1},"&:focus":{outline:`2px solid ${o.colorCommonWhite}`,boxShadow:`0 0 0px 4px ${o.colorPrimaryMain}`}},colorSecondary:{border:o.colorSecondaryLight},colorPrimary:{border:o.colorPrimaryMain},sizeSmall:{padding:"0.25rem 0.5rem",fontSize:".875rem",borderRadius:"0.2rem"},sizeMedium:{padding:"0.375rem 0.75rem",fontSize:"1rem",borderRadius:"0.25rem"},sizeLarge:{padding:"0.5rem 1rem",fontSize:"1.25rem",borderRadius:"0.3rem"}}},MuiInputBase:{defaultProps:{minRows:2,maxRows:3,size:"small"},styleOverrides:{root:({ownerState:r})=>({boxSizing:"border-box","&.MuiInputBase-root, &.MuiInputBase-root.MuiAutocomplete-inputRoot":{width:r.fullWidth?"100%":"220px"},"label + &":{marginTop:".5rem"},borderRadius:4,position:"relative",fontSize:"1rem",".MuiOutlinedInput-input":{color:o.colorTextPrimary,"&::placeholder":{opacity:1,color:o.colorTextDisabled},"&.MuiInputBase-inputSizeSmall":{padding:".375rem .75rem",lineHeight:"24px",minHeight:"24px"}},".MuiSelect-avEndAdornmentDivider":{borderColor:o.borderDecorative,width:"auto"},".MuiChip-root":{lineHeight:"1.125rem",fontSize:".875rem",padding:"3px 6px"}}),multiline:{padding:0}}},MuiLinearProgress:{styleOverrides:{root:{height:"10px",borderRadius:".25rem"},bar:{borderRadius:".25rem"}}},MuiLink:{defaultProps:{underline:"hover",variant:"body1"},styleOverrides:{root:{color:o.colorTextLink,"&:active, &:hover":{color:o.colorTextPrimary},"&:not(.MuiTypography-inherit)":{fontWeight:o.fontWeightsBold},"&.MuiTypography-inherit":{textDecoration:"underline"},"&.MuiTypography-gutterBottom":{marginBottom:".5rem"},".MuiSvgIcon-root":{fontSize:"smaller"}}}},MuiList:{styleOverrides:{root:{".MuiListItem-divider:last-of-type":{borderBottom:0}}}},MuiListItem:{defaultProps:{divider:!0},styleOverrides:{root:{".MuiListItemButton-root.Mui-selected":{"~ .MuiListItemSecondaryAction-root .MuiIconButton-root":{color:o.colorCommonWhite}}},alignItemsFlexStart:{".MuiListItemButton-root":{alignItems:"flex-start","> .MuiChip-root":{marginTop:"1rem",marginBottom:"-1rem",transform:"translateY(-50%)"}},"> .MuiIconButton-root, > .MuiChip-root":{transform:"translateY(-50%)",marginTop:"1.5rem",marginBottom:"-1.5rem"},".MuiListItemSecondaryAction-root":{top:"1.5rem"},"&.MuiListItem-padding > .MuiIconButton-root, > .MuiChip-root":{marginTop:"1rem",marginBottom:"-1rem"},"&.MuiListItem-dense":{".MuiListItemButton-root > .MuiChip-root":{marginTop:"1.075rem",marginBottom:"-1.075rem"},"> .MuiIconButton-root, > .MuiChip-root":{marginTop:"1.375rem",marginBottom:"-1.375rem"},".MuiListItemSecondaryAction-root":{top:"1.375rem"},"&.MuiListItem-padding":{"> .MuiIconButton-root, > .MuiChip-root":{marginTop:"1.075rem",marginBottom:"-1.075rem"}}}},dense:{".MuiListItemText-inset":{paddingLeft:"2.5rem"},".MuiListItemAvatar-root, .MuiListItemIcon-root":{minWidth:"2.5rem",".MuiAvatar-root":{width:"1.5rem",height:"1.5rem",".MuiSvgIcon-root":{fontSize:".75rem"}}}},padding:{paddingTop:".75rem",paddingBottom:".75rem","&.MuiListItem-gutters":{paddingLeft:"1.25rem",paddingRight:"1.25rem"},"&.MuiListItem-dense":{paddingTop:".25rem",paddingBottom:".25rem","&.MuiListItem-gutters":{paddingLeft:"1rem",paddingRight:"1rem"}}}}},MuiListItemAvatar:{styleOverrides:{root:{".MuiAvatar-root":{height:"2.5rem",width:"2.5rem",fontSize:"1rem"}}}},MuiListItemButton:{defaultProps:{disableRipple:!0},styleOverrides:{root:{"@supports (selector(:has(a, b)))":{":has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root:nth-of-type(1))":{paddingRight:"calc(1rem + 1 * (1.5rem) + 0.125rem)"},":has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root:nth-of-type(2))":{paddingRight:"calc(1rem + 2 * (1.5rem) + 0.125rem)"},":has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root:nth-of-type(3))":{paddingRight:"calc(1rem + 3 * (1.5rem) + 0.125rem)"},":has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root:nth-of-type(4))":{paddingRight:"calc(1rem + 4 * (1.5rem) + 0.125rem)"},":has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root.MuiIconButton-sizeMedium:nth-of-type(1))":{paddingRight:"calc(1rem + 1 * (2.5rem) + .375rem)"},":has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root.MuiIconButton-sizeMedium:nth-of-type(2))":{paddingRight:"calc(1rem + 2 * (2.5rem) + .375rem)"},":has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root.MuiIconButton-sizeMedium:nth-of-type(3))":{paddingRight:"calc(1rem + 3 * (2.5rem) + .375rem)"},":has(~ .MuiListItemSecondaryAction-root .MuiIconButton-root.MuiIconButton-sizeMedium:nth-of-type(4))":{paddingRight:"calc(1rem + 4 * (2.5rem) + .375rem)"}},"@supports not (selector(:has(a, b)))":{"~ .MuiListItemSecondaryAction-root":{width:"3rem",right:"0px",flexWrap:"wrap",".MuiIconButton-root:not(:only-child)":{padding:".25rem",".MuiSvgIcon-root":{fontSize:"1rem"}}}},"&.Mui-selected":{backgroundColor:o.colorPrimaryMain,color:o.colorTextInverse,".MuiListItemText-root, .MuiListItemText-root *, .MuiListItemSubheader-root, .MuiListItemSubheader-root *, .MuiListItemIcon-root, .MuiListItemIcon-root *, .MuiIconButton-root":{color:"inherit"},"&.Mui-focusVisible":{backgroundColor:o.colorPrimaryDark,boxShadow:`inset 0 0 0px 2px ${o.colorPrimaryDark}, inset 0 0 0px 4px ${o.colorCommonWhite}`},"&:hover":{backgroundColor:o.colorPrimaryDark},"&:active":{backgroundColor:o.colorPrimaryDarker},".MuiSvgIcon-root":{color:o.colorTextInverse},".MuiCheckbox-root .MuiSvgIcon-root":{backgroundImage:"none"}},"&.Mui-focusVisible":{boxShadow:`inset 0 0 0px 2px ${o.colorSecondaryMain}, inset 0 0 0px 4px ${o.colorCommonWhite}`},"&:hover":{backgroundColor:o.colorActionHover},"&:active":{backgroundColor:o.colorActionActive}}}},MuiListItemIcon:{styleOverrides:{root:{fontSize:"1.5rem"}}},MuiListItemText:{defaultProps:{primaryTypographyProps:{variant:"body1",component:"div"},secondaryTypographyProps:{variant:"body2",component:"div"}}},MuiListSubheader:{styleOverrides:{root:{fontWeight:o.fontWeightsBold}}},MuiMenu:{defaultProps:{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},slotProps:{paper:{variant:"outlined"}}}},MuiMenuItem:{styleOverrides:{root:{"&.Mui-selected":{backgroundColor:o.colorActionSelected,color:o.colorTextInverse,".MuiSvgIcon-root":{color:o.colorTextInverse},"&:hover":{backgroundColor:o.colorActionSelected}},"&:hover":{backgroundColor:o.colorActionHover},"&:active":{backgroundColor:o.colorActionSelected},".MuiSvgIcon-root":{marginRight:"8px",color:o.colorSecondaryMain}}}},MuiOutlinedInput:{defaultProps:{size:"small"},styleOverrides:{root:{backgroundColor:o.colorCommonWhite,"&.Mui-focused":{".MuiOutlinedInput-notchedOutline":{borderColor:o.borderInputFocus,borderWidth:"1px",boxShadow:`0 0 0px .2rem ${o.borderInputFocus}`},"&.Mui-error":{".MuiOutlinedInput-notchedOutline":{boxShadow:`0 0 0px .2rem ${o.borderError}`}}},"&.Mui-error, &.Mui-error.Mui-focused":{".MuiOutlinedInput-notchedOutline":{borderColor:o.borderError}},"&.Mui-disabled":{backgroundColor:o.colorActionDisabledBg}},notchedOutline:{padding:0,border:"1px solid",borderColor:o.borderInput}}},MuiPagination:{defaultProps:{color:"primary",shape:"rounded",size:"small"}},MuiPaginationItem:{defaultProps:{disableRipple:!0},styleOverrides:{root:{borderRadius:"0",height:"auto",lineHeight:"1.25rem",minWidth:0,".MuiSvgIcon-root":{fontSize:".5rem"},color:o.colorTextLink,textDecoration:"underline","&:focus":{boxShadow:`0 0 0px 2px ${o.colorPrimaryMain}`},"&.Mui-selected":{"&:focus":{outline:"1px solid white"},fontWeight:o.fontWeightsBold,backgroundColor:o.colorPrimaryMain,color:o.colorCommonWhite,textDecoration:"none"},"&.Mui-disabled":{color:o.colorTextPrimary,textDecoration:"none"}},ellipsis:{backgroundColor:"inherit",textDecoration:"none",color:o.colorTextPrimary,border:"none",margin:"0"},outlined:{padding:"0.5rem 0.75rem",margin:"-1px",border:"1px solid #ccc",backgroundColor:o.colorBackgroundCanvas,"&.Mui-selected:hover":{backgroundColor:o.colorPrimaryDark}},text:{marginLeft:"-1px",padding:"0.375rem",margin:"0px"}}},MuiPaper:{defaultProps:{variant:"outlined"},styleOverrides:{root:{borderColor:o.borderDecorative}}},MuiPickersArrowSwitcher:{styleOverrides:{button:{width:"39px",height:"38px",margin:"0px 0px 0px -1px",padding:"0px",borderRadius:0,border:`1px solid ${o.colorGrey200}`,fontSize:"1.5rem","&.Mui-focused, &:focus":{outline:"none",boxShadow:`0 0 0px 2px ${o.colorPrimaryDark} inset`}},spacer:{width:0}}},MuiPickersCalendarHeader:{styleOverrides:{root:{paddingLeft:"24px",paddingRight:"24px"},labelContainer:{borderRadius:"4px",border:`1px solid ${o.borderInput}`,":has(.Mui-focused), :focus-within":{outline:`2px solid ${o.colorPrimaryDark}`,boxShadow:"none"}},label:{marginRight:".25rem",marginLeft:".25rem"},switchViewButton:{fontSize:"1.5rem",padding:".25rem",".Mui-focused, :focus":{outline:"none",boxShadow:"none"}}}},MuiPickersDay:{defaultProps:{disableRipple:!0},styleOverrides:{root:{width:"39px",height:"38px",margin:"0px -1px -1px 0px",borderRadius:0,border:`1px solid ${o.colorGrey100}`,".Mui-focused, :focus":{outline:"none",boxShadow:`0 0 0px 2px ${o.colorPrimaryDark} inset`},":hover":{backgroundColor:o.colorGrey100}},today:{"&:not(.Mui-selected), &:not(.Mui-focused)":{border:`1px solid ${o.colorGrey100}`}}}},MuiPickersMonth:{styleOverrides:{monthButton:{borderRadius:"4px",":hover, :focus:not(.Mui-selected)":{backgroundColor:o.colorGrey100}}}},MuiPickersPopper:{styleOverrides:{paper:{boxShadow:"none",border:`1px solid ${o.borderDecorative}`}}},MuiPickersYear:{styleOverrides:{yearButton:{borderRadius:"4px",":hover, :focus:not(.Mui-selected)":{backgroundColor:o.colorGrey100}}}},MuiPopover:{defaultProps:{elevation:0,PaperProps:{variant:"outlined"}}},MuiRadio:{defaultProps:{disableRipple:!0},styleOverrides:{root:{padding:"4px",".MuiSvgIcon-root":{backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1em 1em' overflow='visible'%3E%3Ccircle cx='50%' cy='50%' r='34%' stroke='transparent' fill='white' stroke-width='1' %3E%3C/circle%3E%3C/svg%3E")`,fontSize:"1rem"},"&.Mui-focusVisible .MuiSvgIcon-root:first-of-type":{boxShadow:`0 0 0px 2px ${o.colorPrimaryMain}`,borderRadius:"50%"},"&.MuiRadio-colorPrimary":{color:o.colorGrey500,"&:hover":{color:o.colorGrey900},"&.Mui-checked":{color:"#0075ff","&:hover":{color:o.colorPrimaryMain}},"&.Mui-disabled":{color:o.colorGrey300}}}}},MuiSelect:{styleOverrides:{root:{"&.Mui-error .MuiSelect-icon":{color:o.borderError}},avExpandIcon:{position:"relative",top:"50%",transform:"translateY(-50%)"},icon:{color:o.borderInput,"&.MuiSvgIcon-root:not(.MuiTablePagination-selectIcon)":{width:"2rem",height:"2rem",top:"unset"},"&.MuiStack-root":{right:"4px",height:"100%",padding:"8px 0px",".MuiSvgIcon-root":{width:"2rem",paddingLeft:"4px"}}},iconOpen:{transform:"scaleY(-1)"},select:{"&.MuiInputBase-input":{paddingRight:"2.5rem"},":hover":{".MuiSelect-placeholder":{color:i(o.colorTextPrimary)}}}}},MuiStep:{styleOverrides:{vertical:{"+ .MuiStep-root":{marginTop:"16px"}}}},MuiStepButton:{defaultProps:{disableRipple:!0},styleOverrides:{root:{padding:"8px",margin:"-8px","&:not(.Mui-disabled)":{...a("Tertiary")}}}},MuiStepConnector:{styleOverrides:{root:{zIndex:1,color:o.colorGrey300,"&.Mui-completed":{color:o.colorSuccessMain},"&.Mui-active":{color:o.colorSuccessMain}},line:{borderColor:"inherit",borderWidth:"10px"},horizontal:{top:"10px","&.MuiStepConnector-alternativeLabel":{left:"calc(-50% + 10px)",right:"calc(50% + 10px)"}},vertical:{".MuiStepConnector-line":{minHeight:"18px",borderWidth:"10px"},marginLeft:"10px",marginTop:"-1px",marginBottom:"-1px","+ .MuiStep-vertical:not(:first-of-type) .MuiStepLabel-vertical:before":{content:'""',height:"calc(50% - 14px)",width:"10px",left:"10px",top:"0px",backgroundColor:o.colorGrey300,zIndex:"-1",position:"absolute"},"+ .MuiStep-vertical:not(:last-of-type) .MuiStepLabel-vertical:after":{content:'""',height:"calc(50% - 14px)",width:"10px",left:"10px",bottom:"0px",backgroundColor:o.colorGrey300,zIndex:"-1",position:"absolute"},"&.Mui-completed":{"+ .MuiStep-vertical:not(:first-of-type) .MuiStepLabel-vertical:before, + .MuiStep-vertical:not(:last-of-type) .MuiStepLabel-vertical:after":{backgroundColor:o.colorSuccessMain}},"&.Mui-active":{"+ .MuiStep-vertical:not(:first-of-type) .MuiStepLabel-vertical:before":{backgroundColor:o.colorSuccessMain}}}}},MuiStepIcon:{styleOverrides:{root:{color:o.colorCommonWhite,border:`2px solid ${o.colorSuccessMain}`,borderRadius:"50%",height:"30px",width:"30px",boxSizing:"border-box","&.Mui-active .MuiStepIcon-text":{fill:o.colorCommonWhite},"&.Mui-active, &.Mui-completed":{color:o.colorSuccessMain},"&.Mui-active, &.Mui-completed, &.Mui-error, &.MuiSvgIcon-colorWarning":{borderColor:"currentColor",background:"radial-gradient(transparent, transparent 65%, currentColor 65%)"}},text:{fill:o.colorTextPrimary,fontSize:"12px"}}},MuiStepLabel:{styleOverrides:{root:{display:"flex",alignSelf:"center",justifyContent:"center",position:"relative",zIndex:2},iconContainer:{".MuiSvgIcon-colorWarning":{color:o.colorWarningDark}},vertical:{padding:"0px"},label:{fontSize:"1rem",lineHeight:"1.5rem","&.MuiStepLabel-label.MuiStepLabel-alternativeLabel":{marginTop:"0px"},"&.Mui-active":{fontWeight:o.fontWeightsBold,color:o.colorSuccessMain},"&.Mui-completed:not(.Mui-active)":{fontWeight:o.fontWeightsRegular}}}},MuiSvgIcon:{defaultProps:{fontSize:"inherit"},styleOverrides:{colorInfo:{color:o.colorPrimaryMain},colorPrimary:{color:o.colorTextPrimary},colorWarning:{color:o.colorWarningDark},fontSizeXxsmall:{fontSize:o.iconSizeXxsmall},fontSizeXsmall:{fontSize:o.iconSizeXsmall},fontSizeSmall:{fontSize:o.iconSizeSmall},fontSizeMedium:{fontSize:o.iconSizeMedium},fontSizeLarge:{fontSize:o.iconSizeLarge},fontSizeXlarge:{fontSize:o.iconSizeXlarge}}},MuiSwitch:{defaultProps:{size:"small",disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},styleOverrides:{root:{height:"1.5em",width:"2.5em",padding:".25em",".MuiSwitch-switchBase":{opacity:1,padding:"0px",top:".37em",left:".37em",".MuiSwitch-thumb":{color:o.borderInput,width:".75em",height:".75em"},"&.Mui-disabled":{opacity:.5,"+.MuiSwitch-track":{opacity:.5},"&.Mui-checked":{opacity:1,"+.MuiSwitch-track":{opacity:.5}}},"&.Mui-focusVisible+.MuiSwitch-track":{outline:"2px solid white",boxShadow:`0 0 0px 4px ${o.borderInput}`},"&.Mui-checked":{transform:"translateX(1em)",".MuiSwitch-thumb":{color:o.colorCommonWhite,opacity:1},"+ .MuiSwitch-track":{border:"none",backgroundColor:"#0075ff",opacity:"inherit"},"&.Mui-focusVisible+.MuiSwitch-track":{backgroundColor:o.colorPrimaryMain,boxShadow:`0 0 0px 4px ${o.colorPrimaryMain}`}}}},track:{backgroundColor:"transparent",border:`1px solid ${o.borderInput}`,borderRadius:".5em",opacity:1},sizeSmall:{fontSize:"1rem"},sizeMedium:{fontSize:"1.5rem"}}},AvSwitchCheckedIcon:{styleOverrides:{root:{"& .Mui-checked":{"+ .MuiSwitch-track":{"&::before":{left:7}}}}}},MuiTab:{defaultProps:{disableRipple:!0,iconPosition:"start"},styleOverrides:{root:{textTransform:"unset",fontSize:o.typographyBody1FontSize,fontWeight:o.typographyBody1FontWeight,fontFamily:o.typographyBody1FontFamily,letterSpacing:o.typographyBody1LetterSpacing,color:o.colorTextPrimary,padding:".75em 1em",borderTopLeftRadius:".25rem",borderTopRightRadius:".25rem",border:"1px solid",borderColor:"transparent",marginBottom:"-1px","&:hover":{borderColor:o.colorActionHover},"&.Mui-focusVisible":{outline:`2px solid ${o.colorPrimaryMain}`,outlineOffset:"-2px",borderRadius:".25rem"},"&.Mui-selected":{borderColor:o.borderDecorative,borderBottomColor:o.colorBackgroundPaper,color:o.colorTextPrimary}},labelIcon:{minHeight:"3rem"}}},MuiTable:{defaultProps:{size:"small"},styleOverrides:{root:{"&.striped":{".MuiTableBody-root .MuiTableRow-root:nth-of-type(odd)":{backgroundColor:o.colorTertiaryLight}}}}},MuiTableCell:{styleOverrides:{root:{borderTop:`1px solid ${o.colorGrey200}`,borderBottom:"0px",lineHeight:"1.5rem"},head:{fontWeight:o.fontWeightsBold},header:{borderTop:"0px",paddingBottom:".5rem",width:"100%",display:"block"},sizeMedium:{padding:".75rem","&.MuiTableCell-header":{paddingBottom:"1.5rem"},".MuiTableSortLabel-root":{width:"100%",height:"100%",margin:"-.75rem",padding:".75rem"}},sizeSmall:{padding:".25rem","&.MuiTableCell-header":{paddingBottom:".5rem"},".MuiTableSortLabel-root":{width:"100%",height:"100%",margin:"-.25rem",padding:".25rem"}}}},MuiTablePagination:{defaultProps:{rowsPerPageOptions:[],colSpan:12},styleOverrides:{actions:{order:1,marginRight:".5rem"},displayedRows:{order:4,marginRight:".5rem",marginTop:"auto",marginBottom:"auto"},input:{order:3,borderRadius:"3px",border:`1px solid ${o.borderInput}`,marginLeft:".25rem",marginRight:".75rem","&.MuiInputBase-root":{width:"auto"}},select:{"&.MuiTablePagination-select.MuiSelect-select":{paddingBottom:"1px",paddingTop:"1px",paddingRight:"1.5rem",borderRadius:".25rem",textAlignLast:"center",marginTop:"auto",marginBottom:"auto"}},selectIcon:{fontSize:o.iconSizeXsmall},selectLabel:{order:2,marginTop:"auto",marginBottom:"auto"},spacer:{order:0}}},MuiTableRow:{styleOverrides:{head:{}}},MuiTableSortLabel:{styleOverrides:{root:{padding:"0px 6px",margin:"0px -6px","&:hover":{backgroundColor:o.colorActionHover,".MuiTableSortLabel-icon":{opacity:1}},"&:focus":{backgroundColor:o.colorActionFocus},"&.Mui-active .MuiTableSortLabel-icon":{opacity:1}},icon:{fontSize:"inherit",opacity:.4,transition:"none"}}},MuiTabs:{styleOverrides:{flexContainer:{borderBottom:"1px solid #dee2e6"},indicator:{display:"none"},avSecondary:{".MuiTab-root:hover, .MuiTab-root:hover.Mui-selected":{backgroundColor:o.colorBackgroundPaper}}}},MuiTextField:{defaultProps:{fullWidth:!0}},MuiToggleButton:{defaultProps:{size:"small"},styleOverrides:{root:{textTransform:"none",...t("Tertiary"),"&:focus":{boxShadow:`0 0 0px 4px ${o.colorSecondaryMain}`,outline:"2px solid white"},"&.Mui-selected":{backgroundColor:o.colorPrimaryMain,color:o.colorTextInverse,"&:hover":{backgroundColor:o.colorPrimaryDark},"&:focus":{backgroundColor:o.colorPrimaryDark,boxShadow:`0 0 0px 4px ${o.colorPrimaryDark}`}},".MuiSvgIcon-root":{fontSize:"1.125rem"}}}},MuiToggleButtonGroup:{defaultProps:{size:"small"}},MuiTooltip:{defaultProps:{arrow:!0},styleOverrides:{tooltip:{backgroundColor:o.colorGrey700,fontSize:".875rem",fontStyle:"normal",padding:"5px"},arrow:{color:o.colorGrey700}}},MuiTypography:{defaultProps:{variantMapping:{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"div",subtitle2:"div",body1:"p",body2:"p",inherit:"p",agreement:"div"}}}}};export{c as l};
