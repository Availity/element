import{a as u}from"./jsx-runtime-a3bcee63.js";import{t as o}from"./index-676fb896.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";const a=r=>`${r} !important`,i=r=>({backgroundColor:o[`color${r}Main`],color:o[`color${r}Contrast`],"&:hover":{backgroundColor:o[`color${r}Dark`],boxShadow:"none"},"&:focus":{backgroundColor:o[`color${r}Dark`],outline:"2px solid white",boxShadow:`0 0 0px 4px ${o[`color${r}Dark`]}`},"&:active":{backgroundColor:o[`color${r}Main`]}}),t=r=>({"&:hover":{backgroundColor:`${o[`color${r}Main`]}21`},"&:focus":{outline:"2px solid white",boxShadow:`0 0 0px 4px ${o[`color${r}Main`]}`,backgroundColor:`${o[`color${r}Main`]}21`},"&:active":{backgroundColor:`${o[`color${r}Main`]}42`}}),e=r=>({fontSize:`${o[`typography${r}FontSize`]}`,fontWeight:`${o[`typography${r}FontWeight`]}`,fontFamily:`${o[`typography${r}FontFamily`]}`,letterSpacing:`${o[`typography${r}LetterSpacing`]}`,lineHeight:`${o[`lineHeights${r}`]}`}),s={mode:"light",palette:{primary:{main:o.colorPrimaryMain,light:o.colorPrimaryLight,dark:o.colorPrimaryDark,darker:o.colorPrimaryDarker},secondary:{main:o.colorSecondaryMain,light:o.colorSecondaryLight,dark:o.colorSecondaryDark,darker:o.colorSecondaryDarker},tertiary:{main:o.colorTertiaryMain,light:o.colorTertiaryLight,dark:o.colorTertiaryDark,darker:o.colorTertiaryDarker},error:{main:o.colorErrorMain,light:o.colorErrorLight,dark:o.colorErrorDark,darker:o.colorErrorDarker},warning:{main:o.colorWarningMain,light:o.colorWarningLight,dark:o.colorWarningDark,darker:o.colorWarningDarker},info:{main:o.colorInfoMain,light:o.colorInfoLight,dark:o.colorInfoDark,darker:o.colorInfoDarker},success:{main:o.colorSuccessMain,light:o.colorSuccessLight,dark:o.colorSuccessDark,darker:o.colorSuccessDarker},grey:{50:o.colorGrey50,100:o.colorGrey100,200:o.colorGrey200,300:o.colorGrey300,400:o.colorGrey400,500:o.colorGrey500,600:o.colorGrey600,700:o.colorGrey700,800:o.colorGrey800,900:o.colorGrey900},indigo:{50:o.colorIndigo50,100:o.colorIndigo100,200:o.colorIndigo200,300:o.colorIndigo300,400:o.colorIndigo400,500:o.colorIndigo500,600:o.colorIndigo600,700:o.colorIndigo700,800:o.colorIndigo800,900:o.colorIndigo900},purple:{50:o.colorPurple50,100:o.colorPurple100,200:o.colorPurple200,300:o.colorPurple300,400:o.colorPurple400,500:o.colorPurple500,600:o.colorPurple600,700:o.colorPurple700,800:o.colorPurple800,900:o.colorPurple900},blue:{50:o.colorBlue50,100:o.colorBlue100,200:o.colorBlue200,300:o.colorBlue300,400:o.colorBlue400,500:o.colorBlue500,600:o.colorBlue600,700:o.colorBlue700,800:o.colorBlue800,900:o.colorBlue900},contrastThreshold:4.5,contrastText:"#fff",tonalOffset:.2,text:{primary:o.colorTextPrimary,secondary:o.colorTextSecondary,disabled:o.colorTextDisabled,error:o.colorTextError,hint:"rgba(0, 0, 0, 0.38)",divider:"rgba(0, 0, 0, 0.12)",success:o.colorTextSuccess,info:o.colorTextInfo,link:o.colorTextLink,inverse:o.colorTextInverse,inverseSecondary:o.colorTextInverseSecondary},border:{primary:o.borderPrimary,secondary:o.borderSecondary,error:o.borderError,disabled:o.borderDisabled,decorative:o.borderDecorative,input:o.borderInput,inputHover:o.borderInputHover,inputFocus:o.borderInputFocus,inverse:o.borderInverse,inverseSecondary:o.borderInverseSecondary},background:{canvas:o.colorBackgroundCanvas,paper:o.colorBackgroundPaper,header:o.colorBackgroundHeader,subnav:o.colorBackgroundSubnav,sidenav:o.colorBackgroundSidenav,accent:o.colorBackgroundAccent,border:o.colorBackgroundBorder,default:o.colorGrey100},action:{active:o.colorActionActive,hover:o.colorActionHover,hoverOpacity:.04,selected:o.colorActionSelected,selectedOpacity:.08,disabled:o.colorActionDisabled,disabledBackground:o.colorActionDisabledBg,disabledOpacity:.38,focus:o.colorActionFocus,focusOpacity:.12,activatedOpacity:.12}},typography:{htmlFontSize:16,fontFamily:o.fontFamiliesBase,fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,d1:{...e("D1"),color:o.colorTextPrimary},d2:{...e("D2"),color:o.colorTextPrimary},h1:{...e("H1"),color:o.colorTextPrimary},h2:{...e("H2"),color:o.colorTextPrimary},h3:{...e("H3"),color:o.colorTextPrimary},h4:{...e("H4"),color:o.colorTextPrimary},h5:{...e("H5"),color:o.colorTextPrimary},h6:{...e("H6"),color:o.colorTextPrimary},subtitle1:{...e("Subtitle1"),color:o.colorTextPrimary},subtitle2:{...e("Subtitle2"),color:o.colorTextPrimary},body1:{...e("Body1"),color:o.colorTextPrimary},body2:{...e("Body2"),color:o.colorTextPrimary},button:{fontSize:"0.875rem",fontWeight:o.fontWeightsRegular,fontFamily:o.fontFamiliesBase,letterSpacing:.2},caption:{...e("Caption"),color:o.colorTextPrimary},overline:{...e("Overline"),color:o.colorTextPrimary}},components:{AvEmptyState:{defaultProps:{spacing:2},styleOverrides:{root:{...e("Body2")},image:{width:"112px",height:"112px"}}},AvFeedbackContainer:{styleOverrides:{root:{maxWidth:"490px",padding:"16px","@media (min-width: 600px)":{maxWidth:"490px",padding:"16px"}},smileButtons:{marginBottom:"16px",".MuiToggleButton-root":{margin:"8px","&:focus":{backgroundColor:o.colorActionFocus,color:o.colorTextPrimary,boxShadow:"none"},"&:hover":{backgroundColor:o.colorActionHover,color:o.colorTextPrimary,borderColor:o.colorGrey400},"&.Mui-selected":{backgroundColor:o.colorPrimaryMain,"&:active":{backgroundColor:o.colorPrimaryDarker},"&:focus":{boxShadow:"none"},"&:focus, &:hover":{backgroundColor:o.colorPrimaryDark,color:o.colorCommonWhite},"&.Mui-disabled":{backgroundColor:o.colorPrimaryMain20}},"&.MuiToggleButton-sizeMedium":{padding:"12px",height:"auto"}}},formActions:{marginTop:"16px",".MuiGrid-item":{flexBasis:"50%"},".MuiButton-root":{width:"100%"}}}},AvGiveFeedbackButton:{defaultProps:{size:"large"}},MuiAlert:{styleOverrides:{standardSuccess:{backgroundColor:o.colorGreen100},standardError:{backgroundColor:o.colorRed50},standardWarning:{backgroundColor:o.colorYellow50},standardInfo:{backgroundColor:o.colorBlue50},action:{margin:"-3px -3px -3px auto",padding:"0 0 0 8px"},icon:({ownerState:r})=>({...r.severity==="success"&&{color:a(o.colorGreen600)},opacity:1,padding:"4px",margin:0,fontSize:o.fontSizesBody1}),message:{color:o.colorTextPrimary,padding:0},root:{border:"none",fontSize:o.fontSizesBody1,lineHeight:o.lineHeightsBody1,padding:"8px"}}},MuiAlertTitle:{styleOverrides:{root:{margin:0,fontWeight:o.fontWeightsBold},message:{fontSize:o.fontSizesBody1,lineHeight:o.lineHeightsBody1,padding:"8px"}}},MuiAutocomplete:{defaultProps:{size:"small",fullWidth:!0,clearOnEscape:!0,filterSelectedOptions:!0,ChipProps:{size:"medium"},slotProps:{paper:{variant:"elevation",elevation:8}}},styleOverrides:{root:{"&.Mui-error .MuiAutocomplete-popupIndicator":{color:o.borderError},"&.MuiAutocomplete-hasPopupIcon":{".MuiAutocomplete-endAdornment":{right:"4px"},".MuiInputBase-root.MuiInputBase-adornedEnd":{paddingRight:"3rem"},"&.MuiAutocomplete-hasClearIcon":{".MuiInputBase-root.MuiInputBase-adornedEnd":{paddingRight:"5rem"}}}},endAdornment:{top:"unset",right:"4px",height:"calc(100% - 16px)",display:"inline-flex",alignItems:"center",".MuiIconButton-root":{display:"flex",marginRight:"0",width:"2.25rem",height:"2.25rem"}},popupIndicator:{color:o.borderInput},popupIndicatorOpen:{transform:"scaleY(-1)"},clearIndicator:{color:o.borderInput,marginTop:"-8px",marginBottom:"-8px"},option:{"&.MuiAutocomplete-option":{minHeight:"unset","&[aria-selected='true'], &[aria-selected='true'].Mui-focused":{color:o.colorCommonWhite,backgroundColor:o.colorPrimaryMain}}}}},MuiAvatar:{styleOverrides:{colorDefault:{backgroundColor:o.colorGrey300,color:o.colorTextSecondary}}},MuiBreadcrumbs:{styleOverrides:{root:{".MuiButtonBase-root":{backgroundColor:"transparent"},".breadcrumbs__collapsed-icon":{color:o.colorPrimaryMain}},separator:{marginLeft:".625rem",marginRight:".625rem",color:o.colorGrey300}}},MuiButton:{defaultProps:{disableRipple:!0,disableElevation:!0,variant:"contained",size:"large"},styleOverrides:{root:{boxShadow:"none",fontWeight:o.fontWeightsBold,textTransform:"none",lineHeight:"1.375rem",fontSize:".875rem",".MuiButton-startIcon, .MuiButton-endIcon":{".MuiSvgIcon-fontSizeInherit":{fontSize:"inherit"}}},containedPrimary:{...i("Primary")},containedSecondary:{...i("Secondary")},containedTertiary:{"&.MuiButton-containedTertiary":{...i("Tertiary"),boxSizing:"border-box",border:`1px solid ${o.borderSecondary}`,color:o.colorTertiaryDark,"&:hover":{color:o.colorCommonWhite,border:"1px solid transparent",backgroundColor:o.colorTertiaryDark},"&:active, &.Mui-focused:active, &:focus:active":{color:o.colorCommonWhite,border:"1px solid transparent",backgroundColor:o.colorSecondaryLight},"&.Mui-focused, &:focus":{border:`1px solid ${o.borderSecondary}`,backgroundColor:o.colorTertiaryLight,color:o.colorTertiaryDark},"&.Mui-disabled, &:disabled":{border:`1px solid ${o.borderSecondary}`,backgroundColor:o.colorTertiaryLight,color:o.colorTertiaryDark}}},containedSuccess:{...i("Success")},containedWarning:{...i("Warning")},containedError:{...i("Error")},outlinedPrimary:{...t("Primary")},outlinedSecondary:{...t("Secondary")},outlinedTertiary:{color:o.colorSecondaryMain,"&.MuiButton-outlinedTertiary":{...i("Tertiary"),color:o.colorTertiaryDark,"&:hover":{color:o.colorCommonWhite,border:"1px solid transparent"},"&:active, &.Mui-focused:active, &:focus:active":{backgroundColor:o.colorSecondaryLight,color:o.colorCommonWhite,border:"1px solid transparent"},"&.Mui-focused, &:focus":{border:`1px solid ${o.borderSecondary}`,backgroundColor:o.colorTertiaryLight,color:o.colorTertiaryDark},"&.Mui-disabled, &:disabled":{border:`1px solid ${o.borderSecondary}`,backgroundColor:o.colorTertiaryLight,color:o.colorTertiaryDark}}},outlinedSuccess:{...t("Success")},outlinedWarning:{...t("Warning")},outlinedError:{...t("Error")},sizeSmall:{padding:"4px 16px","&.MuiButton-containedTertiary, &.MuiButton-outlined":{padding:"3px 15px"}},sizeMedium:{padding:"6px 18px","&.MuiButton-containedTertiary, &.MuiButton-outlined":{padding:"5px 17px"}},sizeLarge:{fontSize:".9375rem",lineHeight:"1.5rem",padding:"8px 22px","&.MuiButton-containedTertiary, &.MuiButton-outlined":{padding:"7px 21px"}}}},MuiCard:{defaultProps:{variant:"elevation",elevation:1},styleOverrides:{root:{backgroundColor:o.colorBackgroundPaper,maxWidth:"345px"}}},MuiCardActions:{styleOverrides:{root:{padding:"16px"}}},MuiCardContent:{styleOverrides:{root:{fontSize:o.typographyBody2FontSize,fontWeight:o.typographyBody2FontWeight,fontFamily:o.typographyBody2FontFamily,letterSpacing:o.typographyBody2LetterSpacing,color:o.colorTextPrimary}}},MuiCardHeader:{defaultProps:{titleTypographyProps:{variant:"h6"}},styleOverrides:{root:{backgroundColor:o.colorBackgroundCanvas,color:o.colorTextPrimary}}},MuiCardMedia:{styleOverrides:{maxHeight:"100px"}},MuiCheckbox:{defaultProps:{color:"primary"},styleOverrides:{root:{padding:"8px","&:hover":{backgroundColor:"#00000008"}}}},MuiChip:{defaultProps:{color:"default"},styleOverrides:{root:{height:"auto"},avatar:{margin:"0",height:"1.125rem",width:"1.125rem"},avatarColorDefault:{backgroundColor:o.colorGrey300},deleteIcon:{fontSize:"1rem",margin:"0",fill:o.colorGrey300,"&:hover":{fill:o.colorGrey700}},label:{fontSize:"inherit",padding:"0px 6px"},labelSmall:{padding:"0px 8px",fontSize:".75rem",lineHeight:"1.125rem"},colorDefault:{backgroundColor:o.colorBackgroundAccent,"&:focus":{backgroundColor:o.colorActionFocus}},sizeSmall:{verticalAlign:"text-bottom",borderRadius:"50px"},sizeMedium:{fontWeight:o.fontWeightsRegular,padding:"3px 4px"}}},MuiCircularProgress:{styleOverrides:{colorInherit:{color:o.colorGrey100}}},MuiPickersCalendarHeader:{styleOverrides:{root:{padding:"4px 16px 8px"}}},MuiDayPicker:{styleOverrides:{header:{paddingBottom:"12px"}}},MuiCalendarPicker:{styleOverrides:{root:{width:"310px",".MuiIconButton-root":{border:"0"}}}},MuiPickersDay:{styleOverrides:{root:{"&.MuiPickersDay-today":{borderColor:o.colorBackgroundBorder}}}},MuiFormControl:{defaultProps:{size:"small",fullWidth:!0},styleOverrides:{marginDense:{margin:"0 0 .5rem"},marginNormal:{margin:"0 0 1rem"}}},MuiFormControlLabel:{defaultProps:{labelPlacement:"end"},styleOverrides:{root:{"&.Mui-error":{".MuiFormControlLabel-label":{color:o.colorTextError,"&.Mui-disabled":{color:o.colorErrorMain20}},".MuiButtonBase-root, .MuiSvgIcon-root":{color:o.colorTextError},".MuiRadio-root":{color:o.colorErrorMain,"&:hover, &.Mui-checked:hover":{backgroundColor:o.colorErrorMain20}},"&.Mui-disabled":{".MuiRadio-root .MuiSvgIcon-root":{color:o.colorErrorMain20}}}},asterisk:{display:"none"},labelPlacementEnd:{marginLeft:0,marginRight:0}}},MuiFormGroup:{styleOverrides:{root:{"&.MuiFormGroup-row":{".MuiBox-root:not(:last-of-type)":{marginRight:"16px"}}}}},MuiFormHelperText:{defaultProps:{children:" "},styleOverrides:{root:{marginLeft:"0px",minHeight:"1.25rem",lineHeight:"1.25rem","&:not(&.Mui-error) .MuiSvgIcon-root":{display:"none"},".MuiSvgIcon-root":{verticalAlign:"text-bottom"}}}},MuiFormLabel:{styleOverrides:{root:{marginBottom:"3px","&.Mui-disabled":{color:o.colorTextDisabled},"&.Mui-error, &.Mui-error.Mui-focused":{color:o.colorTextError},"&.Mui-focused":{color:o.colorTextPrimary},display:a("flex"),flexDirection:a("row-reverse"),justifyContent:a("flex-end")},asterisk:{color:o.colorTextError,marginRight:".25rem",marginLeft:"-.15rem"},avWrapper:{marginBottom:"3px",display:"flex",flexDirection:"row",".MuiFormLabel-root":{marginBottom:"0px"}}}},MuiIconButton:{defaultProps:{color:"secondary"},styleOverrides:{colorSecondary:{borderColor:o.borderSecondary,"&:hover":{backgroundColor:o.colorActionHover}},colorPrimary:{borderColor:o.borderPrimary,"&:hover, &:focus":{backgroundColor:o.colorActionSelected}},sizeSmall:{fontSize:"1.5rem",padding:".25rem"},sizeMedium:{padding:".75rem"}}},MuiInputBase:{defaultProps:{minRows:2,maxRows:3},styleOverrides:{root:({ownerState:r})=>({boxSizing:"border-box","&.MuiInputBase-root, &.MuiInputBase-root.MuiAutocomplete-inputRoot":{width:r.fullWidth?"100%":"220px",minHeight:r.size==="medium"?"56px":"40px"},"&.MuiInputBase-root":{backgroundColor:"white",padding:"0px","& > fieldset":{borderColor:o.colorGrey400},"&:hover > fieldset":{borderColor:o.borderInputHover},"&.Mui-focused > fieldset":{borderColor:o.borderInputFocus},"&.Mui-error > fieldset":{borderColor:o.colorErrorMain},"&.Mui-disabled > fieldset":{borderColor:o.borderDisabled,color:o.colorTextDisabled},".MuiInputBase-input":{padding:"8px 12px",lineHeight:"1.5rem",color:o.colorTextPrimary,"&::placeholder":{opacity:1,color:o.colorGrey400}},".MuiInputBase-inputAdornedEnd":{paddingRight:"0"},".MuiInputBase-inputAdornedStart":{paddingLeft:"0"},"&.MuiInputBase-adornedStart":{paddingLeft:"12px"},"&.MuiInputBase-adornedEnd":{paddingRight:"12px"},".MuiSelect-avEndAdornmentDivider":{borderColor:o.colorBackgroundBorder,margin:"0 4px"},"&:hover":{".MuiInputBase-input::placeholder":{color:o.colorTextPrimary},".MuiIconButton-root":{color:o.colorGrey700}},"&.Mui-disabled":{".MuiIconButton-root":{color:o.colorTextDisabled}},".MuiIconButton-root":{border:"0",padding:"8px",color:o.colorGrey400},".MuiChip-label":{lineHeight:"1.125rem",fontSize:".75rem"}}}),input:{borderRadius:"4px",color:o.colorGrey400,"&:hover":{color:o.colorGrey700}},adornedEnd:{backgroundColor:"white",paddingRight:".75rem"},adornedStart:{paddingLeft:".75rem"}}},MuiLink:{defaultProps:{underline:"hover"},styleOverrides:{root:{fontWeight:o.fontWeightsBold,color:o.colorTextLink,"&:active":{color:o.colorTextPrimary}}}},MuiMenu:{defaultProps:{slotProps:{paper:{variant:"elevation"}}}},MuiMenuItem:{styleOverrides:{root:{"&.Mui-selected":{backgroundColor:o.colorPrimaryMain,color:o.colorTextInverse,"&:hover":{backgroundColor:o.colorPrimaryDark},"&:active":{backgroundColor:o.colorPrimaryDarker},".MuiSvgIcon-root":{color:o.colorTextInverse}},"&:hover":{backgroundColor:o.colorActionHover},"&:active":{backgroundColor:"#00000016"},".MuiSvgIcon-root":{marginRight:"8px",color:o.colorSecondaryMain}}}},MuiPagination:{defaultProps:{color:"primary",shape:"rounded",size:"large"}},MuiPaginationItem:{defaultProps:{color:"primary",shape:"rounded",disableRipple:!0},styleOverrides:{root:{"&:active:not(.MuiPaginationItem-ellipsis)":{color:o.colorCommonWhite,backgroundColor:o.colorActionActive},"&.Mui-disabled":{opacity:"1",color:o.colorTextDisabled}},ellipsis:{backgroundColor:"transparent"},outlined:{backgroundColor:o.colorBackgroundPaper,borderColor:o.colorActionActive,"&.Mui-disabled":{borderColor:o.borderDisabled},"&.Mui-selected":{color:o.colorPrimaryMain,backgroundColor:o.colorActionSelected}}}},MuiPaper:{defaultProps:{variant:"outlined"},styleOverrides:{root:{borderColor:o.colorBackgroundBorder}}},MuiPopover:{defaultProps:{PaperProps:{variant:"elevation"}}},MuiSelect:{defaultProps:{MenuProps:{slotProps:{paper:{variant:"elevation",elevation:8}}}},styleOverrides:{avExpandIcon:{position:"relative",top:"50%",transform:"translateY(-50%)",fontSize:"1rem"},icon:{"&.MuiSvgIcon-root:not(.MuiTablePagination-selectIcon)":{width:"2rem",height:"2rem",top:"unset"},"&.MuiStack-root":{right:"8px",height:"100%",padding:"8px 0px",".MuiSvgIcon-root":{width:"2rem",paddingLeft:"4px"}}},iconOpen:{transform:"scaleY(-1)"},select:{"&.MuiInputBase-input.MuiSelect-select.MuiOutlinedInput-input":{paddingRight:"4rem"}}}},MuiRadio:{styleOverrides:{root:{marginLeft:"-10px",padding:"10px","&.MuiButtonBase-root":{"&:hover":{backgroundColor:o.colorActionHover,"&.Mui-checked":{backgroundColor:o.colorActionSelected}},"&.Mui-focused":{backgroundColor:o.colorActionSelected},".MuiTouchRipple-child":{backgroundColor:o.colorActionSelected}}}}},MuiSvgIcon:{defaultProps:{fontSize:"inherit"},styleOverrides:{fontSizeXsmall:{fontSize:"1rem"}}},MuiTab:{styleOverrides:{root:{textTransform:"unset",fontSize:o.typographyBody1FontSize,fontWeight:o.typographyBody1FontWeight,fontFamily:o.typographyBody1FontFamily,letterSpacing:o.typographyBody1LetterSpacing,color:o.colorTextPrimary,padding:"11px 8px","&:hover":{backgroundColor:o.colorBackgroundBorder},"&:Mui-selected":{color:o.colorPrimaryMain}}}},MuiTable:{styleOverrides:{root:{border:`0px solid ${o.borderDecorative}`,backgroundColor:o.colorBackgroundPaper}}},MuiTableCell:{styleOverrides:{root:{borderBottom:`1px solid ${o.borderDecorative}`,"&.MuiTableCell-footer":{borderBottom:"none","&:first-of-type, &:only-child":{paddingTop:"1.25rem"},"&:last-of-type, &:only-child":{paddingBottom:"1.25rem"}}},head:{fontWeight:o.fontWeightsBold,borderBottomWidth:"2px"},header:{borderBottom:"0px",padding:"1.25rem 1rem",width:"100%",display:"block"},sizeMedium:{lineHeight:"1.25rem"}}},MuiTablePagination:{defaultProps:{colSpan:12},styleOverrides:{root:{".MuiTablePagination-toolbar":{padding:"0 .5rem 0 1rem"}},actions:{"&:not(:last-child)":{flexGrow:1,marginRight:".25rem"},marginLeft:".25rem"},displayedRows:{flexGrow:1},input:{borderRadius:".25rem",marginLeft:".25rem",marginRight:".75rem","&.MuiInputBase-root":{width:"auto"}},select:{"&.MuiTablePagination-select.MuiSelect-select":{paddingRight:"1.5rem",borderRadius:".25rem"}},selectLabel:{},selectIcon:{fontSize:"1.5rem"},spacer:{display:"none"},toolbar:{flexWrap:"wrap",flexShrink:1}}},MuiTableSortLabel:{styleOverrides:{root:{borderRadius:".25rem",padding:".25rem",margin:"-.25rem","&:hover":{backgroundColor:o.colorActionHover,".MuiTableSortLabel-icon":{opacity:1}},"&:focus":{backgroundColor:o.colorActionFocus}},icon:{opacity:1,transition:"none",fontSize:"14px",color:o.colorTextSecondary,marginRight:"0px"}}},MuiTabs:{styleOverrides:{root:{backgroundColor:o.colorBackgroundCanvas,height:"3rem"}}},MuiTextField:{defaultProps:{size:"small",fullWidth:!0,helperText:" "}},MuiToggleButton:{defaultProps:{size:"small"},styleOverrides:{root:{textTransform:"unset",backgroundColor:o.colorTertiaryMain,fontWeight:o.fontWeightsBold,color:o.colorTextPrimary,borderColor:o.borderSecondary,"&.Mui-selected":{backgroundColor:o.colorTertiaryDarker,color:o.colorTertiaryLight,borderColor:o.colorTertiaryDarker,"&:hover":{backgroundColor:o.colorTertiaryDark,color:o.colorTertiaryLight,borderColor:o.colorTertiaryMain}},"&:focus":{boxShadow:`0 0 0px 2px ${o.colorGrey700}78`,backgroundColor:o.colorTertiaryLight,color:o.colorTextPrimary,borderColor:o.colorGrey700},"&:hover":{backgroundColor:o.colorTertiaryDark,color:o.colorTertiaryLight,borderColor:o.colorTertiaryMain},"&.MuiToggleButton-sizeSmall":{padding:"8px 16px",height:"40px"},"&.MuiToggleButton-sizeMedium":{padding:"12px 16px",height:"48px"},"&.MuiToggleButton-sizeLarge":{padding:"16px",height:"56px"},"&.Mui-disabled":{backgroundColor:o.colorActionDisabledBg,borderColor:o.colorTertiaryMain,color:o.colorActionDisabled}}}},MuiToggleButtonGroup:{defaultProps:{size:"small"}},MuiTooltip:{defaultProps:{arrow:!0},styleOverrides:{tooltip:{backgroundColor:o.colorSecondaryMain,lineHeight:"1rem",fontSize:".75rem",fontStyle:"normal",padding:"4px 8px"},arrow:{color:o.colorSecondaryMain}}},MuiTypography:{defaultProps:{variantMapping:{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"div",subtitle2:"div",body1:"p",body2:"p",inherit:"p"}}}}},l={render:()=>u("pre",{children:JSON.stringify(s,null,2)})},h={title:"Design System/Theme"};var n,c,d;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <pre>{JSON.stringify(lightTheme, null, 2)}</pre>
}`,...(d=(c=l.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const b=["Default"];export{l as Default,b as __namedExportsOrder,h as default};
//# sourceMappingURL=theme.stories-d2813f28.js.map
