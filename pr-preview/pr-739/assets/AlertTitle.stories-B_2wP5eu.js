import{j as l}from"./jsx-runtime-BTJTZTIL.js";import{r as f}from"./index-BgYLq7fD.js";import{A as g}from"./Alert-BK-LPzPn.js";import{A as V}from"./AlertTitle-cAtlxnlN.js";import{S as b}from"./MuiSystemProperties-CtLr4Jcz.js";import{C as S}from"./Collapse-CiPJcNM-.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DnNfvsmq.js";import"./Tooltip-CIyLwlBA.js";import"./generateUtilityClass-BeVSWKCg.js";import"./identifier-CudAVvBZ.js";import"./index-DyJdRKzS.js";import"./useTheme-Cx1wRXKO.js";import"./DefaultPropsProvider-CWkNlXkE.js";import"./useTheme-Ib01SJ3a.js";import"./styled-CKuRQFSa.js";import"./memoTheme-CpoNRPWX.js";import"./useSlot-1VRyIerd.js";import"./resolveComponentProps-CCNxqvxI.js";import"./useForkRef-Dz4aGlyk.js";import"./generateUtilityClasses-whvyra8-.js";import"./useTimeout-iC_34LsC.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./useControlled-DxC1uCGX.js";import"./useId-DIK8ekB4.js";import"./getReactElementRef-Df0xbma2.js";import"./Portal-C2J4q3Ji.js";import"./utils-tFrEP9Vf.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BmqT0tgx.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D_kG6RhR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D97P5WV0.js";import"./emotion-react.browser.esm-v7Jm8XFw.js";import"./CircularProgress-fcRSDrpN.js";import"./Button-yLAd6_L_.js";import"./LoadingButton-Cl76w144.js";import"./index-BAgvEqVW.js";import"./faCircleArrowRight-B14F5Piw.js";import"./faUser-D77uLSLS.js";import"./faSortDown-BIc1sKK4.js";import"./SvgIcon-CiBNlF9H.js";import"./Alert-d3Gg0mya.js";import"./createSvgIcon-BWWwXn7v.js";import"./Close-_BvKU_hM.js";import"./Paper-4P5FqKie.js";import"./Typography-COSof5sR.js";import"./index-DfraP8LW.js";import"./extendSxProp-BY7TjwKM.js";const n=({children:e,...i})=>l.jsx(V,{...i,children:e});try{n.displayName="AlertTitle",n.__docgenInfo={description:"",displayName:"AlertTitle",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"any"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AlertTitleClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},align:{defaultValue:{value:"'inherit'"},description:"Set the text-align on the component.",name:"align",required:!1,type:{name:'"center" | "left" | "right" | "inherit" | "justify"'}},color:{defaultValue:null,description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).`,name:"color",required:!1,type:{name:'(string & {}) | OverridableStringUnion<"success" | "info" | "warning" | "error" | "primary" | "secondary" | "textDisabled" | "textPrimary" | "textSecondary", TypographyPropsColorOverrides>'}},gutterBottom:{defaultValue:{value:"false"},description:"If `true`, the text will have a bottom margin.",name:"gutterBottom",required:!1,type:{name:"boolean"}},noWrap:{defaultValue:{value:"false"},description:`If \`true\`, the text will not wrap, but instead will truncate with a text overflow ellipsis.

Note that text overflow can only happen with block or inline-block level elements
(the element needs to have a width in order to overflow).`,name:"noWrap",required:!1,type:{name:"boolean"}},paragraph:{defaultValue:{value:"false"},description:"If `true`, the element will be a paragraph element.\n@deprecated Use the `component` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"paragraph",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'body1'"},description:"Applies the theme typography styles.",name:"variant",required:!1,type:{name:'OverridableStringUnion<"inherit" | Variant, TypographyPropsVariantOverrides>'}},variantMapping:{defaultValue:{value:`{
h1: 'h1',
h2: 'h2',
h3: 'h3',
h4: 'h4',
h5: 'h5',
h6: 'h6',
subtitle1: 'h6',
subtitle2: 'h6',
body1: 'p',
body2: 'p',
inherit: 'p',
}`},description:"The component maps the variant prop to a range of different HTML element types.\nFor instance, subtitle1 to `<h6>`.\nIf you wish to change that mapping, you can provide your own.\nAlternatively, you can use the `component` prop.",name:"variantMapping",required:!1,type:{name:'Partial<Record<OverridableStringUnion<"inherit" | Variant, TypographyPropsVariantOverrides>, string>>'}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"ResponsiveStyleValue<Padding<string | number> | readonly NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:'ResponsiveStyleValue<number | "hidden" | (string & {}) | "inset" | "inherit" | "none" | "medium" | "initial" | "-moz-initial" | "revert" | "revert-layer" | "unset" | "thick" | "thin" | "dashed" | ... 183 more ... | "currentcolor"> | ((theme: Theme) => ResponsiveStyleValue<...>)'}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"ResponsiveStyleValue<number | BoxShadow> | ((theme: Theme) => ResponsiveStyleValue<number | BoxShadow>)"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | AlignContent> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | AlignContent>)"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | AlignItems> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | AlignItems>)"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | AlignSelf> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | AlignSelf>)"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ResponsiveStyleValue<Bottom<string | number> | readonly NonNullable<Bottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"ResponsiveStyleValue<BoxSizing | readonly NonNullable<BoxSizing>[]> | ((theme: Theme) => ResponsiveStyleValue<BoxSizing | readonly NonNullable<...>[]>)"}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"ResponsiveStyleValue<ColumnGap<string | number> | readonly NonNullable<ColumnGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | Display>)"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"ResponsiveStyleValue<FlexBasis<string | number> | readonly NonNullable<FlexBasis<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"ResponsiveStyleValue<FlexDirection | readonly NonNullable<FlexDirection>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexDirection | readonly NonNullable<...>[]>)"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"ResponsiveStyleValue<FlexGrow | readonly NonNullable<FlexGrow>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexGrow | readonly NonNullable<...>[]>)"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"ResponsiveStyleValue<FlexShrink | readonly NonNullable<FlexShrink>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexShrink | readonly NonNullable<...>[]>)"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"ResponsiveStyleValue<FlexWrap | readonly NonNullable<FlexWrap>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexWrap | readonly NonNullable<...>[]>)"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | FontFamily> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | FontFamily>)"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"ResponsiveStyleValue<FontSize<string | number> | readonly NonNullable<FontSize<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},fontStyle:{defaultValue:null,description:"",name:"fontStyle",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | FontStyle> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | FontStyle>)"}},gridAutoColumns:{defaultValue:null,description:"",name:"gridAutoColumns",required:!1,type:{name:"ResponsiveStyleValue<GridAutoColumns<string | number> | readonly NonNullable<GridAutoColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridAutoFlow:{defaultValue:null,description:"",name:"gridAutoFlow",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | GridAutoFlow> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | GridAutoFlow>)"}},gridAutoRows:{defaultValue:null,description:"",name:"gridAutoRows",required:!1,type:{name:"ResponsiveStyleValue<GridAutoRows<string | number> | readonly NonNullable<GridAutoRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridTemplateAreas:{defaultValue:null,description:"",name:"gridTemplateAreas",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | GridTemplateAreas> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | GridTemplateAreas>)"}},gridTemplateColumns:{defaultValue:null,description:"",name:"gridTemplateColumns",required:!1,type:{name:"ResponsiveStyleValue<GridTemplateColumns<string | number> | readonly NonNullable<GridTemplateColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridTemplateRows:{defaultValue:null,description:"",name:"gridTemplateRows",required:!1,type:{name:"ResponsiveStyleValue<GridTemplateRows<string | number> | readonly NonNullable<GridTemplateRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ResponsiveStyleValue<Height<string | number> | readonly NonNullable<Height<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | JustifyContent> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | JustifyContent>)"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | JustifyItems> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | JustifyItems>)"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | JustifySelf> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | JustifySelf>)"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ResponsiveStyleValue<Left<string | number> | readonly NonNullable<Left<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Left<...> | readonly NonNullable<...>[]>)"}},letterSpacing:{defaultValue:null,description:"",name:"letterSpacing",required:!1,type:{name:"ResponsiveStyleValue<LetterSpacing<string | number> | readonly NonNullable<LetterSpacing<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"ResponsiveStyleValue<LineHeight<string | number> | readonly NonNullable<LineHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBlockEnd:{defaultValue:null,description:"",name:"marginBlockEnd",required:!1,type:{name:"ResponsiveStyleValue<MarginBlockEnd<string | number> | readonly NonNullable<MarginBlockEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBlockStart:{defaultValue:null,description:"",name:"marginBlockStart",required:!1,type:{name:"ResponsiveStyleValue<MarginBlockStart<string | number> | readonly NonNullable<MarginBlockStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"ResponsiveStyleValue<MarginBottom<string | number> | readonly NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginInlineEnd:{defaultValue:null,description:"",name:"marginInlineEnd",required:!1,type:{name:"ResponsiveStyleValue<MarginInlineEnd<string | number> | readonly NonNullable<MarginInlineEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginInlineStart:{defaultValue:null,description:"",name:"marginInlineStart",required:!1,type:{name:"ResponsiveStyleValue<MarginInlineStart<string | number> | readonly NonNullable<MarginInlineStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | readonly NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"ResponsiveStyleValue<MarginRight<string | number> | readonly NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | readonly NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ResponsiveStyleValue<MaxHeight<string | number> | readonly NonNullable<MaxHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ResponsiveStyleValue<MaxWidth<string | number> | readonly NonNullable<MaxWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ResponsiveStyleValue<MinHeight<string | number> | readonly NonNullable<MinHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ResponsiveStyleValue<MinWidth<string | number> | readonly NonNullable<MinWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"ResponsiveStyleValue<Order | readonly NonNullable<Order>[]> | ((theme: Theme) => ResponsiveStyleValue<Order | readonly NonNullable<Order>[]>)"}},paddingBlockEnd:{defaultValue:null,description:"",name:"paddingBlockEnd",required:!1,type:{name:"ResponsiveStyleValue<PaddingBlockEnd<string | number> | readonly NonNullable<PaddingBlockEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingBlockStart:{defaultValue:null,description:"",name:"paddingBlockStart",required:!1,type:{name:"ResponsiveStyleValue<PaddingBlockStart<string | number> | readonly NonNullable<PaddingBlockStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveStyleValue<PaddingBottom<string | number> | readonly NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingInlineEnd:{defaultValue:null,description:"",name:"paddingInlineEnd",required:!1,type:{name:"ResponsiveStyleValue<PaddingInlineEnd<string | number> | readonly NonNullable<PaddingInlineEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingInlineStart:{defaultValue:null,description:"",name:"paddingInlineStart",required:!1,type:{name:"ResponsiveStyleValue<PaddingInlineStart<string | number> | readonly NonNullable<PaddingInlineStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | readonly NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveStyleValue<PaddingRight<string | number> | readonly NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | readonly NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"ResponsiveStyleValue<Position | readonly NonNullable<Position>[]> | ((theme: Theme) => ResponsiveStyleValue<Position | readonly NonNullable<...>[]>)"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ResponsiveStyleValue<Right<string | number> | readonly NonNullable<Right<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"ResponsiveStyleValue<RowGap<string | number> | readonly NonNullable<RowGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"ResponsiveStyleValue<TextAlign | readonly NonNullable<TextAlign>[]> | ((theme: Theme) => ResponsiveStyleValue<TextAlign | readonly NonNullable<...>[]>)"}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | TextOverflow> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | TextOverflow>)"}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"ResponsiveStyleValue<TextTransform | readonly NonNullable<TextTransform>[]> | ((theme: Theme) => ResponsiveStyleValue<TextTransform | readonly NonNullable<...>[]>)"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ResponsiveStyleValue<Top<string | number> | readonly NonNullable<Top<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Top<string | number> | readonly NonNullable<...>[]>)"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:"ResponsiveStyleValue<Visibility | readonly NonNullable<Visibility>[]> | ((theme: Theme) => ResponsiveStyleValue<Visibility | readonly NonNullable<...>[]>)"}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | WhiteSpace> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | WhiteSpace>)"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ResponsiveStyleValue<Width<string | number> | readonly NonNullable<Width<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderBottom:{defaultValue:null,description:"",name:"borderBottom",required:!1,type:{name:"ResponsiveStyleValue<BorderBottom<string | number> | readonly NonNullable<BorderBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | BorderColor> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | BorderColor>)"}},borderLeft:{defaultValue:null,description:"",name:"borderLeft",required:!1,type:{name:"ResponsiveStyleValue<BorderLeft<string | number> | readonly NonNullable<BorderLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ResponsiveStyleValue<BorderRadius<string | number> | readonly NonNullable<BorderRadius<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderRight:{defaultValue:null,description:"",name:"borderRight",required:!1,type:{name:"ResponsiveStyleValue<BorderRight<string | number> | readonly NonNullable<BorderRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderTop:{defaultValue:null,description:"",name:"borderTop",required:!1,type:{name:"ResponsiveStyleValue<BorderTop<string | number> | readonly NonNullable<BorderTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"ResponsiveStyleValue<Flex<string | number> | readonly NonNullable<Flex<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Flex<...> | readonly NonNullable<...>[]>)"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveStyleValue<Gap<string | number> | readonly NonNullable<Gap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Gap<string | number> | readonly NonNullable<...>[]>)"}},gridArea:{defaultValue:null,description:"",name:"gridArea",required:!1,type:{name:"ResponsiveStyleValue<GridArea | readonly NonNullable<GridArea>[]> | ((theme: Theme) => ResponsiveStyleValue<GridArea | readonly NonNullable<...>[]>)"}},gridColumn:{defaultValue:null,description:"",name:"gridColumn",required:!1,type:{name:"ResponsiveStyleValue<GridColumn | readonly NonNullable<GridColumn>[]> | ((theme: Theme) => ResponsiveStyleValue<GridColumn | readonly NonNullable<...>[]>)"}},gridRow:{defaultValue:null,description:"",name:"gridRow",required:!1,type:{name:"ResponsiveStyleValue<GridRow | readonly NonNullable<GridRow>[]> | ((theme: Theme) => ResponsiveStyleValue<GridRow | readonly NonNullable<GridRow>[]>)"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ResponsiveStyleValue<Margin<string | number> | readonly NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBlock:{defaultValue:null,description:"",name:"marginBlock",required:!1,type:{name:"ResponsiveStyleValue<MarginBlock<string | number> | readonly NonNullable<MarginBlock<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginInline:{defaultValue:null,description:"",name:"marginInline",required:!1,type:{name:"ResponsiveStyleValue<MarginInline<string | number> | readonly NonNullable<MarginInline<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | Overflow> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | Overflow>)"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveStyleValue<Padding<string | number> | readonly NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingBlock:{defaultValue:null,description:"",name:"paddingBlock",required:!1,type:{name:"ResponsiveStyleValue<PaddingBlock<string | number> | readonly NonNullable<PaddingBlock<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingInline:{defaultValue:null,description:"",name:"paddingInline",required:!1,type:{name:"ResponsiveStyleValue<PaddingInline<string | number> | readonly NonNullable<PaddingInline<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},bgcolor:{defaultValue:null,description:"",name:"bgcolor",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | BackgroundColor> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | BackgroundColor>)"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveStyleValue<Margin<string | number> | readonly NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | readonly NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveStyleValue<MarginRight<string | number> | readonly NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveStyleValue<MarginBottom<string | number> | readonly NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | readonly NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | readonly NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | readonly NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | readonly NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | readonly NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | readonly NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"ResponsiveStyleValue<PaddingRight<string | number> | readonly NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"ResponsiveStyleValue<PaddingBottom<string | number> | readonly NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | readonly NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | readonly NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | readonly NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | readonly NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | readonly NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},typography:{defaultValue:null,description:"",name:"typography",required:!1,type:{name:"ResponsiveStyleValue<string> | ((theme: Theme) => ResponsiveStyleValue<string>)"}},displayPrint:{defaultValue:null,description:"",name:"displayPrint",required:!1,type:{name:"ResponsiveStyleValue<readonly string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<readonly string[] | Display>)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const s=[...b,"align","className","component","gutterBottom","noWrap","paragraph","style","variant","variantMapping"],ce={title:"Components/Alert/AlertTitle",component:n,parameters:{docs:{controls:{exclude:s}},canvas:{controls:{exclude:s}}},tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},t={render:e=>l.jsxs(g,{severity:"info",children:[l.jsx(n,{...e}),"This text is inside the Alert"]})},a={render:e=>{const[i,r]=f.useState(!0),h=()=>{r(!1),setTimeout(()=>r(!0),1e3)};return l.jsx(S,{in:i,children:l.jsxs(g,{severity:"info",onClose:h,children:[l.jsx(n,{...e}),"This text is inside the Alert"]})})}};var o,u,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <Alert severity="info">
      <AlertTitle {...args} />
      This text is inside the Alert
    </Alert>
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,p,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [visible, setVisible] = useState(true);
    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };
    return <Collapse in={visible}>
        <Alert severity="info" onClose={onClose}>
          <AlertTitle {...args} />
          This text is inside the Alert
        </Alert>
      </Collapse>;
  }
}`,...(y=(p=a.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const Re=["_AlertTitle","_InDismissableAlert"];export{t as _AlertTitle,a as _InDismissableAlert,Re as __namedExportsOrder,ce as default};
