import{j as s}from"./jsx-runtime-390e5fc8.js";import{t as o}from"./index-80bbe68e.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";const t=r=>`${r} !important`,i=r=>({backgroundColor:o[`color${r}Main`],color:o[`color${r}Contrast`],"&:hover":{backgroundColor:o[`color${r}Dark`],boxShadow:"none"},"&:focus":{backgroundColor:o[`color${r}Dark`],outline:"2px solid white",boxShadow:`0 0 0px 4px ${o[`color${r}Dark`]}`},"&:active":{backgroundColor:o[`color${r}Main`]}}),l=r=>({"&:hover":{backgroundColor:`${o[`color${r}Main`]}21`},"&:focus":{outline:"2px solid white",boxShadow:`0 0 0px 4px ${o[`color${r}Main`]}`,backgroundColor:`${o[`color${r}Main`]}21`},"&:active":{backgroundColor:`${o[`color${r}Main`]}42`}}),e=r=>({fontSize:`${o[`typography${r}FontSize`]}`,fontWeight:`${o[`typography${r}FontWeight`]}`,fontFamily:`${o[`typography${r}FontFamily`]}`,letterSpacing:`${o[`typography${r}LetterSpacing`]}`,lineHeight:`${o[`lineHeights${r}`]}`}),u={mode:"light",palette:{primary:{main:o.colorPrimaryMain,light:o.colorPrimaryLight,dark:o.colorPrimaryDark,darker:o.colorPrimaryDarker},secondary:{main:o.colorSecondaryMain,light:o.colorSecondaryLight,dark:o.colorSecondaryDark,darker:o.colorSecondaryDarker},tertiary:{main:o.colorTertiaryMain,light:o.colorTertiaryLight,dark:o.colorTertiaryDark,darker:o.colorTertiaryDarker},error:{main:o.colorErrorMain,light:o.colorErrorLight,dark:o.colorErrorDark,darker:o.colorErrorDarker},warning:{main:o.colorWarningMain,light:o.colorWarningLight,dark:o.colorWarningDark,darker:o.colorWarningDarker},info:{main:o.colorInfoMain,light:o.colorInfoLight,dark:o.colorInfoDark,darker:o.colorInfoDarker},success:{main:o.colorSuccessMain,light:o.colorSuccessLight,dark:o.colorSuccessDark,darker:o.colorSuccessDarker},grey:{50:o.colorGrey50,100:o.colorGrey100,200:o.colorGrey200,300:o.colorGrey300,400:o.colorGrey400,500:o.colorGrey500,600:o.colorGrey600,700:o.colorGrey700,800:o.colorGrey800,900:o.colorGrey900},indigo:{50:o.colorIndigo50,100:o.colorIndigo100,200:o.colorIndigo200,300:o.colorIndigo300,400:o.colorIndigo400,500:o.colorIndigo500,600:o.colorIndigo600,700:o.colorIndigo700,800:o.colorIndigo800,900:o.colorIndigo900},purple:{50:o.colorPurple50,100:o.colorPurple100,200:o.colorPurple200,300:o.colorPurple300,400:o.colorPurple400,500:o.colorPurple500,600:o.colorPurple600,700:o.colorPurple700,800:o.colorPurple800,900:o.colorPurple900},blue:{50:o.colorBlue50,100:o.colorBlue100,200:o.colorBlue200,300:o.colorBlue300,400:o.colorBlue400,500:o.colorBlue500,600:o.colorBlue600,700:o.colorBlue700,800:o.colorBlue800,900:o.colorBlue900},contrastThreshold:4.5,contrastText:"#fff",tonalOffset:.2,text:{primary:o.colorTextPrimary,secondary:o.colorTextSecondary,disabled:o.colorTextDisabled,error:o.colorErrorMain,hint:"rgba(0, 0, 0, 0.38)",divider:"rgba(0, 0, 0, 0.12)",success:o.colorSuccessMain,info:o.colorTextPrimary,link:o.colorTextPrimary,inverse:o.colorCommonWhite,inverseSecondary:"#ffffff24"},border:{primary:o.colorPrimaryMain,secondary:o.colorGrey400,error:o.colorErrorMain,disabled:o.colorGrey300,decorative:o.colorGrey200,input:o.colorGrey400,inputHover:o.colorGrey600,inputFocus:o.colorPrimaryMain,inverse:o.colorCommonWhite,inverseSecondary:"#ffffff24"},background:{canvas:o.colorBackgroundCanvas,paper:o.colorBackgroundPaper,header:o.colorBackgroundHeader,subnav:o.colorBackgroundSubnav,sidenav:o.colorBackgroundSidenav,accent:o.colorBackgroundAccent,border:o.colorBackgroundBorder,default:o.colorGrey100},action:{active:o.colorActionActive,hover:o.colorActionHover,hoverOpacity:.04,selected:o.colorActionSelected,selectedOpacity:.08,disabled:o.colorActionDisabled,disabledBackground:o.colorActionDisabledBg,disabledOpacity:.38,focus:o.colorActionFocus,focusOpacity:.12,activatedOpacity:.12}},typography:{htmlFontSize:16,fontFamily:o.fontFamiliesBase,fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,d1:{...e("D1"),color:o.colorTextPrimary},d2:{...e("D2"),color:o.colorTextPrimary},h1:{...e("H1"),color:o.colorTextPrimary},h2:{...e("H2"),color:o.colorTextPrimary},h3:{...e("H3"),color:o.colorTextPrimary},h4:{...e("H4"),color:o.colorTextPrimary},h5:{...e("H5"),color:o.colorTextPrimary},h6:{...e("H6"),color:o.colorTextPrimary},subtitle1:{...e("Subtitle1"),color:o.colorTextPrimary},subtitle2:{...e("Subtitle2"),color:o.colorTextPrimary},body1:{...e("Body1"),color:o.colorTextPrimary},body2:{...e("Body2"),color:o.colorTextPrimary},button:{fontSize:"0.875rem",fontWeight:o.fontWeightsRegular,fontFamily:o.fontFamiliesBase,letterSpacing:.2},caption:{...e("Caption"),color:o.colorTextPrimary},overline:{...e("Overline"),color:o.colorTextPrimary}},components:{MuiAlert:{styleOverrides:{standardSuccess:{backgroundColor:o.colorGreen100},standardError:{backgroundColor:o.colorRed50},standardWarning:{backgroundColor:o.colorYellow50},standardInfo:{backgroundColor:o.colorBlue50},action:{margin:"-3px -3px -3px auto",padding:"0 0 0 8px"},icon:({ownerState:r})=>({...r.severity==="success"&&{color:t(o.colorGreen600)},opacity:1,padding:"4px",margin:0,fontSize:o.fontSizesBody1}),message:{color:o.colorTextPrimary,padding:0},root:{border:"none",fontSize:o.fontSizesBody1,lineHeight:o.lineHeightsBody1,padding:"8px"}}},MuiAlertTitle:{styleOverrides:{root:{margin:0,fontWeight:o.fontWeightsBold},message:{fontSize:o.fontSizesBody1,lineHeight:o.lineHeightsBody1,padding:"8px"}}},MuiAvatar:{styleOverrides:{colorDefault:{backgroundColor:o.colorGrey300,color:o.colorTextSecondary}}},MuiBreadcrumbs:{styleOverrides:{root:{".MuiButtonBase-root":{backgroundColor:"transparent"},".breadcrumbs__collapsed-icon":{color:o.colorPrimaryMain}}}},MuiButton:{defaultProps:{disableRipple:!0,disableElevation:!0,variant:"contained"},styleOverrides:{root:{boxShadow:"none",fontWeight:o.fontWeightsBold,textTransform:"none"},containedPrimary:{...i("Primary")},containedSecondary:{...i("Secondary")},containedTertiary:{...i("Tertiary"),"&:focus":{backgroundColor:o.colorTertiaryDark,outline:"2px solid white",boxShadow:`0 0 0px 4px ${o.colorSecondaryDark}`}},containedSuccess:{...i("Success")},containedWarning:{...i("Warning")},containedError:{...i("Error")},outlinedPrimary:{...l("Primary")},outlinedSecondary:{...l("Secondary")},outlinedTertiary:{color:o.colorSecondaryMain,...l("Secondary")},outlinedSuccess:{...l("Success")},outlinedWarning:{...l("Warning")},outlinedError:{...l("Error")}}},MuiCard:{defaultProps:{variant:"elevation",elevation:1},styleOverrides:{root:{backgroundColor:o.colorBackgroundPaper,maxWidth:"345px"}}},MuiCardActions:{styleOverrides:{root:{padding:"16px"}}},MuiCardContent:{styleOverrides:{root:{fontSize:o.typographyBody2FontSize,fontWeight:o.typographyBody2FontWeight,fontFamily:o.typographyBody2FontFamily,letterSpacing:o.typographyBody2LetterSpacing,color:o.colorTextPrimary}}},MuiCardHeader:{styleOverrides:{root:{backgroundColor:o.colorBackgroundCanvas,color:o.colorTextPrimary}}},MuiCardMedia:{styleOverrides:{maxHeight:"100px"}},MuiCheckbox:{defaultProps:{color:"primary"},styleOverrides:{root:{padding:"8px","&:hover":{backgroundColor:"#00000008"}}}},MuiChip:{defaultProps:{color:"default"},styleOverrides:{root:{height:"auto","&.MuiChip-deletable":{"&:hover":{backgroundColor:o.colorActionFocus,boxShadow:"none",".MuiChip-deleteIcon":{color:o.colorSecondaryLight}},"&.Mui-focusVisible":{backgroundColor:o.colorActionFocus,outline:"2px solid white",boxShadow:`0 0 0px 4px ${o.colorSecondaryLight}`,".MuiChip-deleteIcon":{color:o.colorSecondaryLight}}}},avatar:{margin:"0",height:"1.125rem",width:"1.125rem"},avatarColorDefault:{backgroundColor:o.colorGrey300},deleteIcon:{fontSize:"1rem",margin:"0",transition:"color 300ms"},label:{fontSize:"inherit",padding:"0px 6px"},colorDefault:{backgroundColor:o.colorGrey100},sizeSmall:{fontWeight:o.fontWeightsBold,fontSize:".75rem",verticalAlign:"text-bottom",borderRadius:"50px"},sizeMedium:{fontWeight:o.fontWeightsRegular,padding:"3px 4px"}}},MuiFormControl:{styleOverrides:{root:{marginBottom:".5rem"}}},MuiFormControlLabel:{defaultProps:{labelPlacement:"end"},styleOverrides:{root:{"&.Mui-error":{".MuiFormControlLabel-label":{color:o.colorTextError},".MuiButtonBase-root, .MuiSvgIcon-root":{color:o.colorTextError}}},asterisk:{display:"none"},labelPlacementEnd:{marginLeft:0,marginRight:0}}},MuiFormGroup:{styleOverrides:{root:{"&.MuiFormGroup-row":{".MuiBox-root:not(:last-of-type)":{marginRight:"16px"}}}}},MuiFormHelperText:{styleOverrides:{root:{marginLeft:"0px","&:not(&.Mui-error) .MuiSvgIcon-root":{display:"none"},".MuiSvgIcon-root":{verticalAlign:"text-bottom"}}}},MuiFormLabel:{styleOverrides:{root:{display:t("flex"),flexDirection:t("row-reverse"),justifyContent:t("flex-end"),"&.Mui-disabled":{color:o.colorTextDisabled},"&.Mui-error, &.Mui-error.Mui-focused":{color:o.colorTextError},"&.Mui-focused":{color:o.colorTextPrimary}},asterisk:{color:o.colorTextError,marginRight:".25rem",marginLeft:"-.15rem"},children:{".MuiFormLabel-asterisk":{display:"none"}}}},MuiIconButton:{defaultProps:{color:"secondary"},styleOverrides:{colorSecondary:{borderColor:o.borderSecondary,"&:hover":{backgroundColor:o.colorActionHover},"&:focus":{backgroundColor:o.colorActionFocus}},colorPrimary:{borderColor:o.borderPrimary,"&:hover, &:focus":{backgroundColor:o.colorActionSelected}},sizeSmall:{fontSize:"1.5rem",padding:".25rem"},sizeMedium:{padding:".75rem"}}},MuiInputBase:{defaultProps:{size:"small"},styleOverrides:{root:{"&.MuiInputBase-root":{backgroundColor:"white","& > fieldset":{borderColor:o.colorGrey400},"&:hover > fieldset":{borderColor:o.borderInputHover},"&.Mui-focused > fieldset":{borderColor:o.borderInputFocus},"&.Mui-error > fieldset":{borderColor:o.colorErrorMain},"&.Mui-disabled > fieldset":{borderColor:o.borderDisabled}},"&.MuiButtonBase-root":{padding:"8px 8px"}},input:{width:"196px",height:"24px",borderRadius:"4px",color:o.colorGrey400},adornedEnd:{backgroundColor:"white",paddingRight:".75rem"},adornedStart:{paddingLeft:".75rem"}}},MuiLink:{defaultProps:{underline:"hover"},styleOverrides:{root:{fontWeight:o.fontWeightsBold,color:o.colorTextLink,"&:active":{color:o.colorTextPrimary},"&:visited":{color:o.colorIndigo600}}}},MuiMenuItem:{styleOverrides:{root:{"&.Mui-selected":{backgroundColor:o.colorPrimaryMain,color:o.colorTextInverse,"&:hover":{backgroundColor:o.colorPrimaryDark},"&:active":{backgroundColor:o.colorPrimaryDarker},".MuiSvgIcon-root":{color:o.colorTextInverse}},"&:hover":{backgroundColor:o.colorActionHover},"&:active":{backgroundColor:"#00000016"},".MuiSvgIcon-root":{marginRight:"8px",color:o.colorSecondaryMain}}}},MuiPagination:{defaultProps:{color:"primary",shape:"rounded",size:"large"}},MuiPaginationItem:{defaultProps:{color:"primary",shape:"rounded",disableRipple:!0},styleOverrides:{root:{"&:active:not(.MuiPaginationItem-ellipsis)":{color:o.colorCommonWhite,backgroundColor:o.colorActionActive},"&.Mui-disabled":{opacity:"1",color:o.colorTextDisabled}},ellipsis:{backgroundColor:"transparent"},outlined:{backgroundColor:o.colorBackgroundPaper,borderColor:o.colorActionActive,"&.Mui-disabled":{borderColor:o.borderDisabled},"&.Mui-selected":{color:o.colorPrimaryMain,backgroundColor:o.colorActionSelected}}}},MuiPaper:{defaultProps:{variant:"outlined"},styleOverrides:{root:{borderColor:o.colorBackgroundBorder}}},MuiSelect:{styleOverrides:{iconOpen:{transform:"scaleY(-1)"},select:{"&.MuiInputBase-input":{paddingRight:"2.5rem"}}}},MuiSvgIcon:{defaultProps:{fontSize:"inherit"},styleOverrides:{fontSizeXsmall:{fontSize:"1rem"}}},MuiTab:{styleOverrides:{root:{textTransform:"unset",fontSize:o.typographyBody1FontSize,fontWeight:o.typographyBody1FontWeight,fontFamily:o.typographyBody1FontFamily,letterSpacing:o.typographyBody1LetterSpacing,color:o.colorTextPrimary,padding:"11px 8px","&:hover":{backgroundColor:o.colorBackgroundBorder},"&:Mui-selected":{color:o.colorPrimaryMain}}}},MuiTabs:{styleOverrides:{root:{backgroundColor:o.colorBackgroundCanvas,height:"3rem"}}},MuiToggleButton:{defaultProps:{size:"small"},styleOverrides:{root:{textTransform:"unset",backgroundColor:o.colorTertiaryMain,fontWeight:o.fontWeightsBold,color:o.colorTextPrimary,borderColor:o.borderSecondary,"&.Mui-selected":{backgroundColor:o.colorTertiaryDarker,color:o.colorTertiaryLight,borderColor:o.colorTertiaryDarker,"&:hover":{backgroundColor:o.colorTertiaryDark,color:o.colorTertiaryLight,borderColor:o.colorTertiaryMain}},"&:focus":{boxShadow:`0 0 0px 2px ${o.colorGrey700}78`,backgroundColor:o.colorTertiaryLight,color:o.colorTextPrimary,borderColor:o.colorGrey700},"&:hover":{backgroundColor:o.colorTertiaryDark,color:o.colorTertiaryLight,borderColor:o.colorTertiaryMain},"&.MuiToggleButton-sizeSmall":{padding:"8px 16px",height:"40px"},"&.MuiToggleButton-sizeMedium":{padding:"12px 16px",height:"48px"},"&.MuiToggleButton-sizeLarge":{padding:"16px",height:"56px"},"&.Mui-disabled":{backgroundColor:o.colorActionDisabledBg,borderColor:o.colorTertiaryMain,color:o.colorActionDisabled}}}},MuiToggleButtonGroup:{defaultProps:{size:"small"}},MuiTooltip:{defaultProps:{arrow:!0},styleOverrides:{tooltip:{backgroundColor:o.colorSecondaryMain,lineHeight:"1rem",fontSize:".75rem",fontStyle:"normal",padding:"4px 8px"},arrow:{color:o.colorSecondaryMain}}}}},a={render:()=>s("pre",{children:JSON.stringify(u,null,2)})},h={title:"Design System/Theme"};var c,n,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <pre>{JSON.stringify(lightTheme, null, 2)}</pre>
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const b=["Default"];export{a as Default,b as __namedExportsOrder,h as default};
//# sourceMappingURL=theme.stories-c6478527.js.map
