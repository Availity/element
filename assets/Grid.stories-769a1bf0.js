import{j as u,a as me}from"./jsx-runtime-390e5fc8.js";import{P as w}from"./index-1b452f28.js";import{S as E}from"./MuiSystemProperties-c3efaf7b.js";import{r as c}from"./index-570b25c1.js";import{c as de}from"./clsx.m-fb33c42b.js";import{s as pe}from"./styled-f808758a.js";import{e as fe,u as ge}from"./createTheme-4dc6b23f.js";import{a as ce,u as he}from"./useThemeProps-bb804320.js";import{e as ye}from"./extendSxProp-fa3ab054.js";import{i as be}from"./isMuiElement-9a8390c4.js";import{c as Ve,g as ve,s as Se}from"./styled-d0245a8f.js";import"./Paper-582e0bbf.js";import"./generateUtilityClasses-145aac4e.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";function m(e){return e?`Level${e}`:""}function v(e){return e.unstable_level>0&&e.container}function J(e){return function(t){return`var(--Grid-${t}Spacing${m(e.unstable_level)})`}}function B(e){return function(t){return e.unstable_level===0?`var(--Grid-${t}Spacing)`:`var(--Grid-${t}Spacing${m(e.unstable_level-1)})`}}function M(e){return e.unstable_level===0?"var(--Grid-columns)":`var(--Grid-columns${m(e.unstable_level-1)})`}const Re=(e,n)=>e.filter(t=>n.includes(t)),h=(e,n,t)=>{const l=e.keys[0];Array.isArray(n)?n.forEach((a,i)=>{t((r,d)=>{i<=e.keys.length-1&&(i===0?Object.assign(r,d):r[e.up(e.keys[i])]=d)},a)}):n&&typeof n=="object"?(Object.keys(n).length>e.keys.length?e.keys:Re(e.keys,Object.keys(n))).forEach(i=>{if(e.keys.indexOf(i)!==-1){const r=n[i];r!==void 0&&t((d,y)=>{l===i?Object.assign(d,y):d[e.up(i)]=y},r)}}):(typeof n=="number"||typeof n=="string")&&t((a,i)=>{Object.assign(a,i)},n)},Ne=({theme:e,ownerState:n})=>{const t=J(n),l={};return h(e.breakpoints,n.gridSize,(a,i)=>{let r={};i===!0&&(r={flexBasis:0,flexGrow:1,maxWidth:"100%"}),i==="auto"&&(r={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof i=="number"&&(r={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${i} / ${M(n)}${v(n)?` + ${t("column")}`:""})`}),a(l,r)}),l},Te=({theme:e,ownerState:n})=>{const t={};return h(e.breakpoints,n.gridOffset,(l,a)=>{let i={};a==="auto"&&(i={marginLeft:"auto"}),typeof a=="number"&&(i={marginLeft:a===0?"0px":`calc(100% * ${a} / ${M(n)})`}),l(t,i)}),t},xe=({theme:e,ownerState:n})=>{if(!n.container)return{};const t=v(n)?{[`--Grid-columns${m(n.unstable_level)}`]:M(n)}:{"--Grid-columns":12};return h(e.breakpoints,n.columns,(l,a)=>{l(t,{[`--Grid-columns${m(n.unstable_level)}`]:a})}),t},qe=({theme:e,ownerState:n})=>{if(!n.container)return{};const t=B(n),l=v(n)?{[`--Grid-rowSpacing${m(n.unstable_level)}`]:t("row")}:{};return h(e.breakpoints,n.rowSpacing,(a,i)=>{var r;a(l,{[`--Grid-rowSpacing${m(n.unstable_level)}`]:typeof i=="string"?i:(r=e.spacing)==null?void 0:r.call(e,i)})}),l},Ge=({theme:e,ownerState:n})=>{if(!n.container)return{};const t=B(n),l=v(n)?{[`--Grid-columnSpacing${m(n.unstable_level)}`]:t("column")}:{};return h(e.breakpoints,n.columnSpacing,(a,i)=>{var r;a(l,{[`--Grid-columnSpacing${m(n.unstable_level)}`]:typeof i=="string"?i:(r=e.spacing)==null?void 0:r.call(e,i)})}),l},we=({theme:e,ownerState:n})=>{if(!n.container)return{};const t={};return h(e.breakpoints,n.direction,(l,a)=>{l(t,{flexDirection:a})}),t},Ie=({ownerState:e})=>{const n=J(e),t=B(e);return{minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},margin:`calc(${n("row")} / -2) calc(${n("column")} / -2)`,...e.disableEqualOverflow&&{margin:`calc(${n("row")} * -1) 0px 0px calc(${n("column")} * -1)`}},...(!e.container||v(e))&&{padding:`calc(${t("row")} / 2) calc(${t("column")} / 2)`,...(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:`${t("row")} 0px 0px ${t("column")}`}}}},Pe=e=>{const n=[];return Object.entries(e).forEach(([t,l])=>{l!==!1&&l!==void 0&&n.push(`grid-${t}-${String(l)}`)}),n},Ce=(e,n="xs")=>{function t(l){return l===void 0?!1:typeof l=="string"&&!Number.isNaN(Number(l))||typeof l=="number"&&l>0}if(t(e))return[`spacing-${n}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const l=[];return Object.entries(e).forEach(([a,i])=>{t(i)&&l.push(`spacing-${a}-${String(i)}`)}),l}return[]},Oe=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([n,t])=>`direction-${n}-${t}`):[`direction-xs-${String(e)}`],Be=fe(),Me=pe("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>n.root});function $e(e){return ce({props:e,name:"MuiGrid",defaultTheme:Be})}function Ae(e={}){const{createStyledComponent:n=Me,useThemeProps:t=$e,componentName:l="MuiGrid"}=e,a=c.createContext(void 0),i=(y,o)=>{const{container:S,direction:R,spacing:N,wrap:b,gridSize:T}=y,x={root:["root",S&&"container",b!=="wrap"&&`wrap-xs-${String(b)}`,...Oe(R),...Pe(T),...S?Ce(N,o.breakpoints.keys[0]):[]]};return Ve(x,q=>ve(l,q),{})},r=n(xe,Ge,qe,Ne,we,Ie,Te),d=c.forwardRef(function(o,S){var R,N,b,T,x,q,$,A;const P=ge(),Y=t(o),L=ye(Y),G=c.useContext(a),{className:X,children:U,columns:K=12,container:Q=!1,component:Z="div",direction:ee="row",wrap:ne="wrap",spacing:C=0,rowSpacing:te=C,columnSpacing:le=C,disableEqualOverflow:_,unstable_level:f=0,...ie}=L;let V=_;f&&_!==void 0&&(V=o.disableEqualOverflow);const z={},F={},k={};Object.entries(ie).forEach(([s,g])=>{P.breakpoints.values[s]!==void 0?z[s]=g:P.breakpoints.values[s.replace("Offset","")]!==void 0?F[s.replace("Offset","")]=g:k[s]=g});const ae=(R=o.columns)!=null?R:f?void 0:K,re=(N=o.spacing)!=null?N:f?void 0:C,se=(b=(T=o.rowSpacing)!=null?T:o.spacing)!=null?b:f?void 0:te,ue=(x=(q=o.columnSpacing)!=null?q:o.spacing)!=null?x:f?void 0:le,W={...L,level:f,columns:ae,container:Q,direction:ee,wrap:ne,spacing:re,rowSpacing:se,columnSpacing:ue,gridSize:z,gridOffset:F,disableEqualOverflow:($=(A=V)!=null?A:G)!=null?$:!1,parentDisableEqualOverflow:G},oe=i(W,P);let O=u(r,{ref:S,as:Z,ownerState:W,className:de(oe.root,X),...k,children:c.Children.map(U,s=>{if(c.isValidElement(s)&&be(s,["Grid"])){var g;return c.cloneElement(s,{unstable_level:(g=s.props.unstable_level)!=null?g:f+1})}return s})});return V!==void 0&&V!==(G??!1)&&(O=u(a.Provider,{value:V,children:O})),O});return d.muiName="Grid",d}const Le=Ae({createStyledComponent:Se("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,n)=>n.root}),componentName:"MuiGrid2",useThemeProps:e=>he({props:e,name:"MuiGrid2"})}),_e=Le,p=e=>u(_e,{...e});try{p.displayName="Grid",p.__docgenInfo={description:"",displayName:"Grid",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"ResponsiveStyleValue<string[] | Color> | ((theme: Theme) => ResponsiveStyleValue<string[] | Color>)"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"ResponsiveStyleValue<FontSize<string | number> | NonNullable<FontSize<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"ResponsiveStyleValue<Padding<string | number> | NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ResponsiveStyleValue<Height<string | number> | NonNullable<Height<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ResponsiveStyleValue<Width<string | number> | NonNullable<Width<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},direction:{defaultValue:{value:"'row'"},description:"Defines the `flex-direction` style property.\nIt is applied for all screen sizes.",name:"direction",required:!1,type:{name:"ResponsiveStyleValue<GridDirection>"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"ResponsiveStyleValue<string[] | FontFamily> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontFamily>)"}},fontStyle:{defaultValue:null,description:"",name:"fontStyle",required:!1,type:{name:"ResponsiveStyleValue<string[] | FontStyle> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontStyle>)"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)"}},letterSpacing:{defaultValue:null,description:"",name:"letterSpacing",required:!1,type:{name:"ResponsiveStyleValue<LetterSpacing<string | number> | NonNullable<LetterSpacing<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"ResponsiveStyleValue<Order | NonNullable<Order>[]> | ((theme: Theme) => ResponsiveStyleValue<Order | NonNullable<Order>[]>)"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"ResponsiveStyleValue<string[] | Overflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | Overflow>)"}},spacing:{defaultValue:{value:"0"},description:"Defines the space between the type `item` components.\nIt can only be used on a type `container` component.",name:"spacing",required:!1,type:{name:"ResponsiveStyleValue<GridSpacing>"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:"ResponsiveStyleValue<Visibility | NonNullable<Visibility>[]> | ((theme: Theme) => ResponsiveStyleValue<Visibility | NonNullable<...>[]>)"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:'ResponsiveStyleValue<number | (string & {}) | "none" | "inherit" | "initial" | "medium" | "inset" | "hidden" | "-moz-initial" | "revert" | "revert-layer" | "unset" | "aliceblue" | "antiquewhite" | ... 184 more ... | "solid"> | ((theme: Theme) => ResponsiveStyleValue<...>)'}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"ResponsiveStyleValue<number | BoxShadow> | ((theme: Theme) => ResponsiveStyleValue<number | BoxShadow>)"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"ResponsiveStyleValue<string[] | AlignContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignContent>)"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveStyleValue<string[] | AlignItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignItems>)"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"ResponsiveStyleValue<string[] | AlignSelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignSelf>)"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ResponsiveStyleValue<Bottom<string | number> | NonNullable<Bottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"ResponsiveStyleValue<BoxSizing | NonNullable<BoxSizing>[]> | ((theme: Theme) => ResponsiveStyleValue<BoxSizing | NonNullable<...>[]>)"}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"ResponsiveStyleValue<ColumnGap<string | number> | NonNullable<ColumnGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"ResponsiveStyleValue<FlexBasis<string | number> | NonNullable<FlexBasis<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"ResponsiveStyleValue<FlexDirection | NonNullable<FlexDirection>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexDirection | NonNullable<...>[]>)"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"ResponsiveStyleValue<FlexGrow | NonNullable<FlexGrow>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexGrow | NonNullable<...>[]>)"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"ResponsiveStyleValue<FlexShrink | NonNullable<FlexShrink>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexShrink | NonNullable<...>[]>)"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"ResponsiveStyleValue<FlexWrap | NonNullable<FlexWrap>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexWrap | NonNullable<...>[]>)"}},gridAutoColumns:{defaultValue:null,description:"",name:"gridAutoColumns",required:!1,type:{name:"ResponsiveStyleValue<GridAutoColumns<string | number> | NonNullable<GridAutoColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridAutoFlow:{defaultValue:null,description:"",name:"gridAutoFlow",required:!1,type:{name:"ResponsiveStyleValue<string[] | GridAutoFlow> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridAutoFlow>)"}},gridAutoRows:{defaultValue:null,description:"",name:"gridAutoRows",required:!1,type:{name:"ResponsiveStyleValue<GridAutoRows<string | number> | NonNullable<GridAutoRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridTemplateAreas:{defaultValue:null,description:"",name:"gridTemplateAreas",required:!1,type:{name:"ResponsiveStyleValue<string[] | GridTemplateAreas> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridTemplateAreas>)"}},gridTemplateColumns:{defaultValue:null,description:"",name:"gridTemplateColumns",required:!1,type:{name:"ResponsiveStyleValue<GridTemplateColumns<string | number> | NonNullable<GridTemplateColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridTemplateRows:{defaultValue:null,description:"",name:"gridTemplateRows",required:!1,type:{name:"ResponsiveStyleValue<GridTemplateRows<string | number> | NonNullable<GridTemplateRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveStyleValue<string[] | JustifyContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyContent>)"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"ResponsiveStyleValue<string[] | JustifyItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyItems>)"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"ResponsiveStyleValue<string[] | JustifySelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifySelf>)"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ResponsiveStyleValue<Left<string | number> | NonNullable<Left<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Left<...> | NonNullable<...>[]>)"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"ResponsiveStyleValue<LineHeight<string | number> | NonNullable<LineHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"ResponsiveStyleValue<MarginBottom<string | number> | NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"ResponsiveStyleValue<MarginRight<string | number> | NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ResponsiveStyleValue<MaxHeight<string | number> | NonNullable<MaxHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ResponsiveStyleValue<MaxWidth<string | number> | NonNullable<MaxWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ResponsiveStyleValue<MinHeight<string | number> | NonNullable<MinHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ResponsiveStyleValue<MinWidth<string | number> | NonNullable<MinWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveStyleValue<PaddingBottom<string | number> | NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveStyleValue<PaddingRight<string | number> | NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"ResponsiveStyleValue<Position | NonNullable<Position>[]> | ((theme: Theme) => ResponsiveStyleValue<Position | NonNullable<...>[]>)"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ResponsiveStyleValue<Right<string | number> | NonNullable<Right<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"ResponsiveStyleValue<RowGap<string | number> | NonNullable<RowGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"ResponsiveStyleValue<TextAlign | NonNullable<TextAlign>[]> | ((theme: Theme) => ResponsiveStyleValue<TextAlign | NonNullable<...>[]>)"}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"ResponsiveStyleValue<string[] | TextOverflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | TextOverflow>)"}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"ResponsiveStyleValue<TextTransform | NonNullable<TextTransform>[]> | ((theme: Theme) => ResponsiveStyleValue<TextTransform | NonNullable<...>[]>)"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ResponsiveStyleValue<Top<string | number> | NonNullable<Top<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Top<string | number> | NonNullable<...>[]>)"}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"ResponsiveStyleValue<WhiteSpace | NonNullable<WhiteSpace>[]> | ((theme: Theme) => ResponsiveStyleValue<WhiteSpace | NonNullable<...>[]>)"}},borderBottom:{defaultValue:null,description:"",name:"borderBottom",required:!1,type:{name:"ResponsiveStyleValue<BorderBottom<string | number> | NonNullable<BorderBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"ResponsiveStyleValue<string[] | BorderColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BorderColor>)"}},borderLeft:{defaultValue:null,description:"",name:"borderLeft",required:!1,type:{name:"ResponsiveStyleValue<BorderLeft<string | number> | NonNullable<BorderLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ResponsiveStyleValue<BorderRadius<string | number> | NonNullable<BorderRadius<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderRight:{defaultValue:null,description:"",name:"borderRight",required:!1,type:{name:"ResponsiveStyleValue<BorderRight<string | number> | NonNullable<BorderRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderTop:{defaultValue:null,description:"",name:"borderTop",required:!1,type:{name:"ResponsiveStyleValue<BorderTop<string | number> | NonNullable<BorderTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},columns:{defaultValue:{value:"12"},description:"The number of columns.",name:"columns",required:!1,type:{name:"ResponsiveStyleValue<number>"}},container:{defaultValue:{value:"false"},description:"If `true`, the component will have the flex *container* behavior.\nYou should be wrapping *items* with a *container*.",name:"container",required:!1,type:{name:"boolean"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"ResponsiveStyleValue<Flex<string | number> | NonNullable<Flex<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Flex<...> | NonNullable<...>[]>)"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveStyleValue<Gap<string | number> | NonNullable<Gap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Gap<string | number> | NonNullable<...>[]>)"}},gridArea:{defaultValue:null,description:"",name:"gridArea",required:!1,type:{name:"ResponsiveStyleValue<GridArea | NonNullable<GridArea>[]> | ((theme: Theme) => ResponsiveStyleValue<GridArea | NonNullable<...>[]>)"}},gridColumn:{defaultValue:null,description:"",name:"gridColumn",required:!1,type:{name:"ResponsiveStyleValue<GridColumn | NonNullable<GridColumn>[]> | ((theme: Theme) => ResponsiveStyleValue<GridColumn | NonNullable<...>[]>)"}},gridRow:{defaultValue:null,description:"",name:"gridRow",required:!1,type:{name:"ResponsiveStyleValue<GridRow | NonNullable<GridRow>[]> | ((theme: Theme) => ResponsiveStyleValue<GridRow | NonNullable<GridRow>[]>)"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ResponsiveStyleValue<Margin<string | number> | NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveStyleValue<Padding<string | number> | NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},bgcolor:{defaultValue:null,description:"",name:"bgcolor",required:!1,type:{name:"ResponsiveStyleValue<string[] | BackgroundColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BackgroundColor>)"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveStyleValue<Margin<string | number> | NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveStyleValue<MarginRight<string | number> | NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveStyleValue<MarginBottom<string | number> | NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"ResponsiveStyleValue<PaddingRight<string | number> | NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"ResponsiveStyleValue<PaddingBottom<string | number> | NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},typography:{defaultValue:null,description:"",name:"typography",required:!1,type:{name:"ResponsiveStyleValue<string> | ((theme: Theme) => ResponsiveStyleValue<string>)"}},displayPrint:{defaultValue:null,description:"",name:"displayPrint",required:!1,type:{name:"ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)"}},xs:{defaultValue:{value:"false"},description:`If a number, it sets the number of columns the grid item uses.
It can't be greater than the total number of columns of the container (12 by default).
If 'auto', the grid item's width matches its content.
If false, the prop is ignored.
If true, the grid item's width grows to use the space available in the grid container.
The value is applied for all the screen sizes with the lowest priority.`,name:"xs",required:!1,type:{name:"boolean | GridSize"}},xl:{defaultValue:{value:"false"},description:`If a number, it sets the number of columns the grid item uses.
It can't be greater than the total number of columns of the container (12 by default).
If 'auto', the grid item's width matches its content.
If false, the prop is ignored.
If true, the grid item's width grows to use the space available in the grid container.
The value is applied for the \`xl\` breakpoint and wider screens if not overridden.`,name:"xl",required:!1,type:{name:"boolean | GridSize"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},sm:{defaultValue:{value:"false"},description:`If a number, it sets the number of columns the grid item uses.
It can't be greater than the total number of columns of the container (12 by default).
If 'auto', the grid item's width matches its content.
If false, the prop is ignored.
If true, the grid item's width grows to use the space available in the grid container.
The value is applied for the \`sm\` breakpoint and wider screens if not overridden.`,name:"sm",required:!1,type:{name:"boolean | GridSize"}},md:{defaultValue:{value:"false"},description:`If a number, it sets the number of columns the grid item uses.
It can't be greater than the total number of columns of the container (12 by default).
If 'auto', the grid item's width matches its content.
If false, the prop is ignored.
If true, the grid item's width grows to use the space available in the grid container.
The value is applied for the \`md\` breakpoint and wider screens if not overridden.`,name:"md",required:!1,type:{name:"boolean | GridSize"}},lg:{defaultValue:{value:"false"},description:`If a number, it sets the number of columns the grid item uses.
It can't be greater than the total number of columns of the container (12 by default).
If 'auto', the grid item's width matches its content.
If false, the prop is ignored.
If true, the grid item's width grows to use the space available in the grid container.
The value is applied for the \`lg\` breakpoint and wider screens if not overridden.`,name:"lg",required:!1,type:{name:"boolean | GridSize"}},wrap:{defaultValue:{value:"'wrap'"},description:"Defines the `flex-wrap` style property.\nIt's applied for all screen sizes.",name:"wrap",required:!1,type:{name:"GridWrap"}},xsOffset:{defaultValue:null,description:"If a number, it sets the margin-left equals to the number of columns the grid item uses.\nIf 'auto', the grid item push itself to the right-end of the container.\nThe value is applied for the `xs` breakpoint and wider screens if not overridden.",name:"xsOffset",required:!1,type:{name:"GridSize"}},xlOffset:{defaultValue:null,description:"If a number, it sets the margin-left equals to the number of columns the grid item uses.\nIf 'auto', the grid item push itself to the right-end of the container.\nThe value is applied for the `xl` breakpoint and wider screens if not overridden.",name:"xlOffset",required:!1,type:{name:"GridSize"}},smOffset:{defaultValue:null,description:"If a number, it sets the margin-left equals to the number of columns the grid item uses.\nIf 'auto', the grid item push itself to the right-end of the container.\nThe value is applied for the `sm` breakpoint and wider screens if not overridden.",name:"smOffset",required:!1,type:{name:"GridSize"}},mdOffset:{defaultValue:null,description:"If a number, it sets the margin-left equals to the number of columns the grid item uses.\nIf 'auto', the grid item push itself to the right-end of the container.\nThe value is applied for the `md` breakpoint and wider screens if not overridden.",name:"mdOffset",required:!1,type:{name:"GridSize"}},lgOffset:{defaultValue:null,description:"If a number, it sets the margin-left equals to the number of columns the grid item uses.\nIf 'auto', the grid item push itself to the right-end of the container.\nThe value is applied for the `lg` breakpoint and wider screens if not overridden.",name:"lgOffset",required:!1,type:{name:"GridSize"}},columnSpacing:{defaultValue:null,description:"Defines the horizontal space between the type `item` components.\nIt overrides the value of the `spacing` prop.",name:"columnSpacing",required:!1,type:{name:"ResponsiveStyleValue<GridSpacing>"}},disableEqualOverflow:{defaultValue:null,description:"If `true`, the negative margin and padding are apply only to the top and left sides of the grid.",name:"disableEqualOverflow",required:!1,type:{name:"boolean"}},unstable_level:{defaultValue:null,description:`@internal The level of the grid starts from \`0\`
and increases when the grid nests inside another grid regardless of container or item.

\`\`\`js
<Grid> // level 0
  <Grid> // level 1
    <Grid> // level 2
  <Grid> // level 1
\`\`\`

Only consecutive grid is considered nesting.
A grid container will start at \`0\` if there are non-Grid element above it.

\`\`\`js
<Grid> // level 0
  <div>
    <Grid> // level 0
      <Grid> // level 1
\`\`\``,name:"unstable_level",required:!1,type:{name:"number"}},rowSpacing:{defaultValue:null,description:"Defines the vertical space between the type `item` components.\nIt overrides the value of the `spacing` prop.",name:"rowSpacing",required:!1,type:{name:"ResponsiveStyleValue<GridSpacing>"}}}}}catch{}const en={title:"Components/Layout/Grid",component:p,tags:["autodocs"],parameters:{docs:{controls:{exclude:E},description:{component:`The grid system is implemented with the \`Grid\` component:

+ It uses CSS Flexbox (rather than CSS Grid) for high flexibility.
+ The grid is always a flex item. Use the \`container\` prop to add a flex container.
+ Item widths are set in percentages, so they're always fluid and sized relative to their parent element.
+ There are five default grid breakpoints: xs, sm, md, lg, and xl.
+ You can give integer values for each breakpoint, to indicate how many of the 1 available columns are occupied by the component when the viewport width satisfies the breakpoint constraints.
+ It uses negative margins and padding to create gaps between children, which behave similarly to the \`gap\` CSS property.
+ It does not support row spanning. Children elements cannot span multiple rows. We recommend using CSS Grid if you need this functionality.
+ It does not automatically place children. It will try to fit the children one by one, and if there is not enough space, the rest of the children will start on the next line, and so on. If you need auto-placement, we recommend using CSS Grid instead.

> As a CSS utility, the \`Grid\` component also supports all [system properties](https://mui.com/system/properties/). They are omitted for brevity, but can be used as props directly on the component.`}},canvas:{controls:{exclude:E}}}},I={render:({children:e,container:n,spacing:t,...l})=>me(p,{container:n,spacing:t,...l,children:[u(p,{xs:8,children:u(w,{children:e})}),u(p,{xs:4,children:u(w,{children:e})}),u(p,{xs:4,children:u(w,{children:e})}),u(p,{xs:8,children:u(w,{children:e})})]}),args:{children:"Grid Item",container:!0,spacing:2}};var j,D,H;I.parameters={...I.parameters,docs:{...(j=I.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: ({
    children,
    container,
    spacing,
    ...args
  }: GridProps) => <Grid container={container} spacing={spacing} {...args}>
      <Grid xs={8}>
        <Paper>{children}</Paper>
      </Grid>
      <Grid xs={4}>
        <Paper>{children}</Paper>
      </Grid>
      <Grid xs={4}>
        <Paper>{children}</Paper>
      </Grid>
      <Grid xs={8}>
        <Paper>{children}</Paper>
      </Grid>
    </Grid>,
  args: {
    children: 'Grid Item',
    container: true,
    spacing: 2
  }
}`,...(H=(D=I.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};const nn=["_Grid"];export{I as _Grid,nn as __namedExportsOrder,en as default};
//# sourceMappingURL=Grid.stories-769a1bf0.js.map
