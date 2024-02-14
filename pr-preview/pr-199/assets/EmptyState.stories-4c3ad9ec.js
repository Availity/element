import{j as l,a as e,F as h}from"./jsx-runtime-a3bcee63.js";import{L as M}from"./index-b3099525.js";import{r as O}from"./index-570b25c1.js";import{S as z}from"./index-6e8561aa.js";import{E as j}from"./EmptyStateImage-1fa4356d.js";import{s as J}from"./styled-523cb007.js";import{S as U}from"./MuiSystemProperties-d2f46158.js";import{M as a}from"./Typography-f453bb5c.js";import{v as f}from"./visuallyHidden-14c3de6e.js";import{B as i}from"./Box-51bd3ea0.js";import{B as Y}from"./Button-af0ca45f.js";import{L as X}from"./List-446c66c9.js";import{L as s}from"./ListItem-4f8e5ad1.js";import"./SvgIcon-075b1db6.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-98dc6282.js";import"./generateUtilityClasses-b58f947a.js";import"./Link-b7684510.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useForkRef-153a0a89.js";import"./_commonjsHelpers-042e6b4d.js";import"./Container-3c3a93d6.js";import"./styled-5c6c15e1.js";import"./Grid2-2ceca868.js";import"./extendSxProp-b1abb964.js";import"./isMuiElement-6907f060.js";import"./Stack-3fcb8940.js";import"./ButtonBase-44753119.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./TransitionGroupContext-c71596b3.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./isHostComponent-73d6e646.js";const K=J(z,{name:"AvEmptyState",slot:"root",overridesResolver:(n,r)=>r.root})({}),t=O.forwardRef((n,r)=>{const{children:G,variant:y,spacing:A=2,alignItems:F="center",textAlign:_="center",maxWidth:W="320px",padding:D="1rem",...H}=n;return l(K,{className:"AvEmptyState-root",spacing:A,alignItems:F,textAlign:_,maxWidth:W,padding:D,...H,ref:r,children:[y?e(j,{variant:y}):null,G]})});try{t.displayName="EmptyState",t.__docgenInfo={description:"Container for Empty State image and message.",displayName:"EmptyState",props:{variant:{defaultValue:null,description:"Empty State variant for image",name:"variant",required:!1,type:{name:'"PageNotFound" | "ContentLoading" | "Error" | "NoData" | "NoSearchFound"'}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"ResponsiveStyleValue<Color | string[]> | ((theme: Theme) => ResponsiveStyleValue<Color | string[]>)"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ClassNameMap<never>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop, which allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"ResponsiveStyleValue<Padding<string | number> | NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:'ResponsiveStyleValue<number | "hidden" | "inherit" | (string & {}) | "none" | "inset" | "initial" | "medium" | "-moz-initial" | "revert" | "revert-layer" | "unset" | "aliceblue" | "antiquewhite" | ... 184 more ... | "solid"> | ((theme: Theme) => ResponsiveStyleValue<...>)'}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"ResponsiveStyleValue<number | BoxShadow> | ((theme: Theme) => ResponsiveStyleValue<number | BoxShadow>)"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"ResponsiveStyleValue<string[] | AlignContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignContent>)"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveStyleValue<string[] | AlignItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignItems>)"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"ResponsiveStyleValue<string[] | AlignSelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignSelf>)"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ResponsiveStyleValue<Bottom<string | number> | NonNullable<Bottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"ResponsiveStyleValue<BoxSizing | NonNullable<BoxSizing>[]> | ((theme: Theme) => ResponsiveStyleValue<BoxSizing | NonNullable<...>[]>)"}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"ResponsiveStyleValue<ColumnGap<string | number> | NonNullable<ColumnGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},direction:{defaultValue:{value:"'column'"},description:"Defines the `flex-direction` style property.\nIt is applied for all screen sizes.",name:"direction",required:!1,type:{name:'ResponsiveStyleValue<"row" | "column" | "column-reverse" | "row-reverse">'}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"ResponsiveStyleValue<FlexBasis<string | number> | NonNullable<FlexBasis<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"ResponsiveStyleValue<FlexDirection | NonNullable<FlexDirection>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexDirection | NonNullable<...>[]>)"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"ResponsiveStyleValue<FlexGrow | NonNullable<FlexGrow>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexGrow | NonNullable<...>[]>)"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"ResponsiveStyleValue<FlexShrink | NonNullable<FlexShrink>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexShrink | NonNullable<...>[]>)"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"ResponsiveStyleValue<FlexWrap | NonNullable<FlexWrap>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexWrap | NonNullable<...>[]>)"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"ResponsiveStyleValue<string[] | FontFamily> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontFamily>)"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"ResponsiveStyleValue<FontSize<string | number> | NonNullable<FontSize<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},fontStyle:{defaultValue:null,description:"",name:"fontStyle",required:!1,type:{name:"ResponsiveStyleValue<string[] | FontStyle> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontStyle>)"}},gridAutoColumns:{defaultValue:null,description:"",name:"gridAutoColumns",required:!1,type:{name:"ResponsiveStyleValue<GridAutoColumns<string | number> | NonNullable<GridAutoColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridAutoFlow:{defaultValue:null,description:"",name:"gridAutoFlow",required:!1,type:{name:"ResponsiveStyleValue<string[] | GridAutoFlow> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridAutoFlow>)"}},gridAutoRows:{defaultValue:null,description:"",name:"gridAutoRows",required:!1,type:{name:"ResponsiveStyleValue<GridAutoRows<string | number> | NonNullable<GridAutoRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridTemplateAreas:{defaultValue:null,description:"",name:"gridTemplateAreas",required:!1,type:{name:"ResponsiveStyleValue<string[] | GridTemplateAreas> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridTemplateAreas>)"}},gridTemplateColumns:{defaultValue:null,description:"",name:"gridTemplateColumns",required:!1,type:{name:"ResponsiveStyleValue<GridTemplateColumns<string | number> | NonNullable<GridTemplateColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridTemplateRows:{defaultValue:null,description:"",name:"gridTemplateRows",required:!1,type:{name:"ResponsiveStyleValue<GridTemplateRows<string | number> | NonNullable<GridTemplateRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ResponsiveStyleValue<Height<string | number> | NonNullable<Height<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveStyleValue<string[] | JustifyContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyContent>)"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"ResponsiveStyleValue<string[] | JustifyItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyItems>)"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"ResponsiveStyleValue<string[] | JustifySelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifySelf>)"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ResponsiveStyleValue<Left<string | number> | NonNullable<Left<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Left<...> | NonNullable<...>[]>)"}},letterSpacing:{defaultValue:null,description:"",name:"letterSpacing",required:!1,type:{name:"ResponsiveStyleValue<LetterSpacing<string | number> | NonNullable<LetterSpacing<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"ResponsiveStyleValue<LineHeight<string | number> | NonNullable<LineHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBlockEnd:{defaultValue:null,description:"",name:"marginBlockEnd",required:!1,type:{name:"ResponsiveStyleValue<MarginBlockEnd<string | number> | NonNullable<MarginBlockEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBlockStart:{defaultValue:null,description:"",name:"marginBlockStart",required:!1,type:{name:"ResponsiveStyleValue<MarginBlockStart<string | number> | NonNullable<MarginBlockStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"ResponsiveStyleValue<MarginBottom<string | number> | NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginInlineEnd:{defaultValue:null,description:"",name:"marginInlineEnd",required:!1,type:{name:"ResponsiveStyleValue<MarginInlineEnd<string | number> | NonNullable<MarginInlineEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginInlineStart:{defaultValue:null,description:"",name:"marginInlineStart",required:!1,type:{name:"ResponsiveStyleValue<MarginInlineStart<string | number> | NonNullable<MarginInlineStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"ResponsiveStyleValue<MarginRight<string | number> | NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ResponsiveStyleValue<MaxHeight<string | number> | NonNullable<MaxHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ResponsiveStyleValue<MaxWidth<string | number> | NonNullable<MaxWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ResponsiveStyleValue<MinHeight<string | number> | NonNullable<MinHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ResponsiveStyleValue<MinWidth<string | number> | NonNullable<MinWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"ResponsiveStyleValue<Order | NonNullable<Order>[]> | ((theme: Theme) => ResponsiveStyleValue<Order | NonNullable<Order>[]>)"}},paddingBlockEnd:{defaultValue:null,description:"",name:"paddingBlockEnd",required:!1,type:{name:"ResponsiveStyleValue<PaddingBlockEnd<string | number> | NonNullable<PaddingBlockEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingBlockStart:{defaultValue:null,description:"",name:"paddingBlockStart",required:!1,type:{name:"ResponsiveStyleValue<PaddingBlockStart<string | number> | NonNullable<PaddingBlockStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveStyleValue<PaddingBottom<string | number> | NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingInlineEnd:{defaultValue:null,description:"",name:"paddingInlineEnd",required:!1,type:{name:"ResponsiveStyleValue<PaddingInlineEnd<string | number> | NonNullable<PaddingInlineEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingInlineStart:{defaultValue:null,description:"",name:"paddingInlineStart",required:!1,type:{name:"ResponsiveStyleValue<PaddingInlineStart<string | number> | NonNullable<PaddingInlineStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveStyleValue<PaddingRight<string | number> | NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"ResponsiveStyleValue<Position | NonNullable<Position>[]> | ((theme: Theme) => ResponsiveStyleValue<Position | NonNullable<...>[]>)"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ResponsiveStyleValue<Right<string | number> | NonNullable<Right<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"ResponsiveStyleValue<RowGap<string | number> | NonNullable<RowGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"ResponsiveStyleValue<TextAlign | NonNullable<TextAlign>[]> | ((theme: Theme) => ResponsiveStyleValue<TextAlign | NonNullable<...>[]>)"}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"ResponsiveStyleValue<string[] | TextOverflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | TextOverflow>)"}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"ResponsiveStyleValue<TextTransform | NonNullable<TextTransform>[]> | ((theme: Theme) => ResponsiveStyleValue<TextTransform | NonNullable<...>[]>)"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ResponsiveStyleValue<Top<string | number> | NonNullable<Top<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Top<string | number> | NonNullable<...>[]>)"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:"ResponsiveStyleValue<Visibility | NonNullable<Visibility>[]> | ((theme: Theme) => ResponsiveStyleValue<Visibility | NonNullable<...>[]>)"}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"ResponsiveStyleValue<WhiteSpace | NonNullable<WhiteSpace>[]> | ((theme: Theme) => ResponsiveStyleValue<WhiteSpace | NonNullable<...>[]>)"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ResponsiveStyleValue<Width<string | number> | NonNullable<Width<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderBottom:{defaultValue:null,description:"",name:"borderBottom",required:!1,type:{name:"ResponsiveStyleValue<BorderBottom<string | number> | NonNullable<BorderBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"ResponsiveStyleValue<string[] | BorderColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BorderColor>)"}},borderLeft:{defaultValue:null,description:"",name:"borderLeft",required:!1,type:{name:"ResponsiveStyleValue<BorderLeft<string | number> | NonNullable<BorderLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ResponsiveStyleValue<BorderRadius<string | number> | NonNullable<BorderRadius<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderRight:{defaultValue:null,description:"",name:"borderRight",required:!1,type:{name:"ResponsiveStyleValue<BorderRight<string | number> | NonNullable<BorderRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderTop:{defaultValue:null,description:"",name:"borderTop",required:!1,type:{name:"ResponsiveStyleValue<BorderTop<string | number> | NonNullable<BorderTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"ResponsiveStyleValue<Flex<string | number> | NonNullable<Flex<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Flex<...> | NonNullable<...>[]>)"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveStyleValue<Gap<string | number> | NonNullable<Gap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Gap<string | number> | NonNullable<...>[]>)"}},gridArea:{defaultValue:null,description:"",name:"gridArea",required:!1,type:{name:"ResponsiveStyleValue<GridArea | NonNullable<GridArea>[]> | ((theme: Theme) => ResponsiveStyleValue<GridArea | NonNullable<...>[]>)"}},gridColumn:{defaultValue:null,description:"",name:"gridColumn",required:!1,type:{name:"ResponsiveStyleValue<GridColumn | NonNullable<GridColumn>[]> | ((theme: Theme) => ResponsiveStyleValue<GridColumn | NonNullable<...>[]>)"}},gridRow:{defaultValue:null,description:"",name:"gridRow",required:!1,type:{name:"ResponsiveStyleValue<GridRow | NonNullable<GridRow>[]> | ((theme: Theme) => ResponsiveStyleValue<GridRow | NonNullable<GridRow>[]>)"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ResponsiveStyleValue<Margin<string | number> | NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBlock:{defaultValue:null,description:"",name:"marginBlock",required:!1,type:{name:"ResponsiveStyleValue<MarginBlock<string | number> | NonNullable<MarginBlock<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginInline:{defaultValue:null,description:"",name:"marginInline",required:!1,type:{name:"ResponsiveStyleValue<MarginInline<string | number> | NonNullable<MarginInline<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"ResponsiveStyleValue<string[] | Overflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | Overflow>)"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveStyleValue<Padding<string | number> | NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingBlock:{defaultValue:null,description:"",name:"paddingBlock",required:!1,type:{name:"ResponsiveStyleValue<PaddingBlock<string | number> | NonNullable<PaddingBlock<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingInline:{defaultValue:null,description:"",name:"paddingInline",required:!1,type:{name:"ResponsiveStyleValue<PaddingInline<string | number> | NonNullable<PaddingInline<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},bgcolor:{defaultValue:null,description:"",name:"bgcolor",required:!1,type:{name:"ResponsiveStyleValue<string[] | BackgroundColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BackgroundColor>)"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveStyleValue<Margin<string | number> | NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveStyleValue<MarginRight<string | number> | NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveStyleValue<MarginBottom<string | number> | NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"ResponsiveStyleValue<PaddingRight<string | number> | NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"ResponsiveStyleValue<PaddingBottom<string | number> | NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},typography:{defaultValue:null,description:"",name:"typography",required:!1,type:{name:"ResponsiveStyleValue<string> | ((theme: Theme) => ResponsiveStyleValue<string>)"}},displayPrint:{defaultValue:null,description:"",name:"displayPrint",required:!1,type:{name:"ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)"}},spacing:{defaultValue:{value:"0"},description:"Defines the space between immediate children.",name:"spacing",required:!1,type:{name:"ResponsiveStyleValue<string | number>"}},divider:{defaultValue:null,description:"Add an element between each child.",name:"divider",required:!1,type:{name:"ReactNode"}},useFlexGap:{defaultValue:{value:"false"},description:"If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.\n\nWhile CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),\nit is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.\n\nTo enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.",name:"useFlexGap",required:!1,type:{name:"boolean"}}}}}catch{}const Q=(n,r)=>l(h,{children:[r.viewMode!=="docs"?l(h,{children:[e(a,{variant:"h1",sx:f,children:"Component: Empty State"}),l(a,{variant:"h2",sx:f,children:["Story: ",r.name]})]}):null,e(n,{})]}),ke={title:"Components/EmptyState/EmptyState",component:t,tags:["autodocs"],args:{variant:"NoSearchFound"},decorators:[Q],parameters:{docs:{controls:{exclude:U},description:{component:"Built on top of the `Stack` component, `EmptyState` will add the desired spacing to every direct descendant.\n\n_Accessibility Note: Check the appropriate heading level needed for your usage to not create a heading jump._"}}}},o={render:n=>l(t,{...n,children:[e(a,{variant:"h6",component:"h3",children:"Header"}),e(i,{children:"This body explains the empty state. The illustration relates to the situation."}),e(Y,{children:"Optional Button"}),e(M,{href:"#",children:"Optional Link"})]})},u={render:n=>l(t,{...n,alignItems:"start",textAlign:"start",children:[e(a,{variant:"h6",component:"h3",children:"No search results found -- Results not found for [variable]."}),e(i,{children:"Adjust your search or filter options for better results."}),l(i,{children:["Suggestions:",l(X,{sx:{listStyleType:"disc",listStylePosition:"inside",".MuiListItem-root":{display:"list-item"}},disablePadding:!0,children:[e(s,{disableGutters:!0,disablePadding:!0,children:"Correctly spell all words in search criteria"}),e(s,{disableGutters:!0,disablePadding:!0,children:"Use different keywords"}),e(s,{disableGutters:!0,disablePadding:!0,children:"Use general keywords"}),e(s,{disableGutters:!0,disablePadding:!0,children:"Use fewer keywords"})]})]}),e(M,{href:"#",children:"Clear filter"})]}),args:{variant:"NoSearchFound"}},m={render:n=>l(t,{...n,children:[e(a,{variant:"h6",component:"h3",children:"Error"}),e(i,{children:"Oops! Something went wrong. Try your request again later. If the problem continues, contact Availity Client Services at 1.800.AVAILITY (282.4548)."})]}),args:{variant:"Error"}},d={render:n=>l(t,{...n,children:[e(a,{variant:"h6",component:"h3",children:"Content Loading"}),e(i,{children:"Data is loading."})]}),args:{variant:"ContentLoading"}},p={render:n=>l(t,{...n,children:[e(a,{variant:"h6",component:"h3",children:"No data"}),e(i,{children:"Sorry, but we cannot seem to find the data you are looking for."})]}),args:{variant:"NoData"}},g={render:n=>l(t,{...n,children:[e(a,{variant:"h6",component:"h3",children:"Page not found"}),e(i,{children:"The page you are looking is no longer available."})]}),args:{variant:"PageNotFound"}};var c,S,V;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: EmptyStateProps) => <EmptyState {...args}>
      <Typography variant="h6" component="h3">
        Header
      </Typography>
      <Box>This body explains the empty state. The illustration relates to the situation.</Box>
      <Button>Optional Button</Button>
      <Link href="#">Optional Link</Link>
    </EmptyState>
}`,...(V=(S=o.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var b,v,R;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: EmptyStateProps) => <EmptyState {...args} alignItems="start" textAlign="start">
      <Typography variant="h6" component="h3">
        No search results found -- Results not found for [variable].
      </Typography>
      <Box>Adjust your search or filter options for better results.</Box>
      <Box>
        Suggestions:
        <List sx={{
        listStyleType: 'disc',
        listStylePosition: 'inside',
        '.MuiListItem-root': {
          display: 'list-item'
        }
      }} disablePadding>
          <ListItem disableGutters disablePadding>
            Correctly spell all words in search criteria
          </ListItem>
          <ListItem disableGutters disablePadding>
            Use different keywords
          </ListItem>
          <ListItem disableGutters disablePadding>
            Use general keywords
          </ListItem>
          <ListItem disableGutters disablePadding>
            Use fewer keywords
          </ListItem>
        </List>
      </Box>
      <Link href="#">Clear filter</Link>
    </EmptyState>,
  args: {
    variant: 'NoSearchFound'
  }
}`,...(R=(v=u.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var N,T,q;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: (args: EmptyStateProps) => <EmptyState {...args}>
      <Typography variant="h6" component="h3">
        Error
      </Typography>
      <Box>
        Oops! Something went wrong. Try your request again later. If the problem continues, contact Availity Client
        Services at 1.800.AVAILITY (282.4548).
      </Box>
    </EmptyState>,
  args: {
    variant: 'Error'
  }
}`,...(q=(T=m.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var x,B,P;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: EmptyStateProps) => <EmptyState {...args}>
      <Typography variant="h6" component="h3">
        Content Loading
      </Typography>
      <Box>Data is loading.</Box>
    </EmptyState>,
  args: {
    variant: 'ContentLoading'
  }
}`,...(P=(B=d.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var w,L,E;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args: EmptyStateProps) => <EmptyState {...args}>
      <Typography variant="h6" component="h3">
        No data
      </Typography>
      <Box>Sorry, but we cannot seem to find the data you are looking for.</Box>
    </EmptyState>,
  args: {
    variant: 'NoData'
  }
}`,...(E=(L=p.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var I,k,C;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args: EmptyStateProps) => <EmptyState {...args}>
      <Typography variant="h6" component="h3">
        Page not found
      </Typography>
      <Box>The page you are looking is no longer available.</Box>
    </EmptyState>,
  args: {
    variant: 'PageNotFound'
  }
}`,...(C=(k=g.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const Ce=["_EmptyState","_NoSearchResults","_Error","_ContentLoading","_NoData","_PageNotFound"];export{d as _ContentLoading,o as _EmptyState,m as _Error,p as _NoData,u as _NoSearchResults,g as _PageNotFound,Ce as __namedExportsOrder,ke as default};
//# sourceMappingURL=EmptyState.stories-4c3ad9ec.js.map
