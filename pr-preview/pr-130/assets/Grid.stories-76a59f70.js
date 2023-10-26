import{j as u,a as me}from"./jsx-runtime-390e5fc8.js";import{P as I}from"./index-a52c6b7c.js";import{S as j}from"./MuiSystemProperties-c3efaf7b.js";import{d as S,h as pe,u as fe,c as ge}from"./createTheme-e6b56ddb.js";import{r as c}from"./index-570b25c1.js";import{c as ce}from"./clsx-8416b751.js";import{s as he}from"./styled-4350ac6b.js";import{a as ye,u as be}from"./useThemeProps-db7202c2.js";import{e as Ve}from"./extendSxProp-4d42c058.js";import{i as Se}from"./isMuiElement-6907f060.js";import{c as ve,g as Re,s as Ne}from"./styled-188025da.js";import"./Paper-4c319fed.js";import"./generateUtilityClasses-f776b170.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";const Te=(e,n)=>e.filter(l=>n.includes(l)),h=(e,n,l)=>{const t=e.keys[0];Array.isArray(n)?n.forEach((a,i)=>{l((r,m)=>{i<=e.keys.length-1&&(i===0?Object.assign(r,m):r[e.up(e.keys[i])]=m)},a)}):n&&typeof n=="object"?(Object.keys(n).length>e.keys.length?e.keys:Te(e.keys,Object.keys(n))).forEach(i=>{if(e.keys.indexOf(i)!==-1){const r=n[i];r!==void 0&&l((m,y)=>{t===i?Object.assign(m,y):m[e.up(i)]=y},r)}}):(typeof n=="number"||typeof n=="string")&&l((a,i)=>{Object.assign(a,i)},n)};function d(e){return e?`Level${e}`:""}function v(e){return e.unstable_level>0&&e.container}function Y(e){return function(l){return`var(--Grid-${l}Spacing${d(e.unstable_level)})`}}function O(e){return function(l){return e.unstable_level===0?`var(--Grid-${l}Spacing)`:`var(--Grid-${l}Spacing${d(e.unstable_level-1)})`}}function $(e){return e.unstable_level===0?"var(--Grid-columns)":`var(--Grid-columns${d(e.unstable_level-1)})`}const qe=({theme:e,ownerState:n})=>{const l=Y(n),t={};return h(e.breakpoints,n.gridSize,(a,i)=>{let r={};i===!0&&(r={flexBasis:0,flexGrow:1,maxWidth:"100%"}),i==="auto"&&(r={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof i=="number"&&(r={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${i} / ${$(n)}${v(n)?` + ${l("column")}`:""})`}),a(t,r)}),t},xe=({theme:e,ownerState:n})=>{const l={};return h(e.breakpoints,n.gridOffset,(t,a)=>{let i={};a==="auto"&&(i={marginLeft:"auto"}),typeof a=="number"&&(i={marginLeft:a===0?"0px":`calc(100% * ${a} / ${$(n)})`}),t(l,i)}),l},Ge=({theme:e,ownerState:n})=>{if(!n.container)return{};const l=v(n)?{[`--Grid-columns${d(n.unstable_level)}`]:$(n)}:{"--Grid-columns":12};return h(e.breakpoints,n.columns,(t,a)=>{t(l,{[`--Grid-columns${d(n.unstable_level)}`]:a})}),l},we=({theme:e,ownerState:n})=>{if(!n.container)return{};const l=O(n),t=v(n)?{[`--Grid-rowSpacing${d(n.unstable_level)}`]:l("row")}:{};return h(e.breakpoints,n.rowSpacing,(a,i)=>{var r;a(t,{[`--Grid-rowSpacing${d(n.unstable_level)}`]:typeof i=="string"?i:(r=e.spacing)==null?void 0:r.call(e,i)})}),t},Ie=({theme:e,ownerState:n})=>{if(!n.container)return{};const l=O(n),t=v(n)?{[`--Grid-columnSpacing${d(n.unstable_level)}`]:l("column")}:{};return h(e.breakpoints,n.columnSpacing,(a,i)=>{var r;a(t,{[`--Grid-columnSpacing${d(n.unstable_level)}`]:typeof i=="string"?i:(r=e.spacing)==null?void 0:r.call(e,i)})}),t},Pe=({theme:e,ownerState:n})=>{if(!n.container)return{};const l={};return h(e.breakpoints,n.direction,(t,a)=>{t(l,{flexDirection:a})}),l},Be=({ownerState:e})=>{const n=Y(e),l=O(e);return S({minWidth:0,boxSizing:"border-box"},e.container&&S({display:"flex",flexWrap:"wrap"},e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},{margin:`calc(${n("row")} / -2) calc(${n("column")} / -2)`},e.disableEqualOverflow&&{margin:`calc(${n("row")} * -1) 0px 0px calc(${n("column")} * -1)`}),(!e.container||v(e))&&S({padding:`calc(${l("row")} / 2) calc(${l("column")} / 2)`},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:`${l("row")} 0px 0px ${l("column")}`}))},Ce=e=>{const n=[];return Object.entries(e).forEach(([l,t])=>{t!==!1&&t!==void 0&&n.push(`grid-${l}-${String(t)}`)}),n},Me=(e,n="xs")=>{function l(t){return t===void 0?!1:typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number"&&t>0}if(l(e))return[`spacing-${n}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const t=[];return Object.entries(e).forEach(([a,i])=>{l(i)&&t.push(`spacing-${a}-${String(i)}`)}),t}return[]},ke=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([n,l])=>`direction-${n}-${l}`):[`direction-xs-${String(e)}`],Oe=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],$e=pe(),_e=he("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>n.root});function Ee(e){return ye({props:e,name:"MuiGrid",defaultTheme:$e})}function Le(e={}){const{createStyledComponent:n=_e,useThemeProps:l=Ee,componentName:t="MuiGrid"}=e,a=c.createContext(void 0),i=(y,o)=>{const{container:R,direction:N,spacing:T,wrap:b,gridSize:q}=y,x={root:["root",R&&"container",b!=="wrap"&&`wrap-xs-${String(b)}`,...ke(N),...Ce(q),...R?Me(T,o.breakpoints.keys[0]):[]]};return ve(x,G=>Re(t,G),{})},r=n(Ge,Ie,we,qe,Pe,Be,xe),m=c.forwardRef(function(o,R){var N,T,b,q,x,G,_,E;const B=fe(),X=l(o),C=Ve(X),w=c.useContext(a),{className:U,children:K,columns:Q=12,container:Z=!1,component:ee="div",direction:ne="row",wrap:le="wrap",spacing:M=0,rowSpacing:te=M,columnSpacing:ie=M,disableEqualOverflow:L,unstable_level:f=0}=C,ae=ge(C,Oe);let V=L;f&&L!==void 0&&(V=o.disableEqualOverflow);const A={},z={},F={};Object.entries(ae).forEach(([s,g])=>{B.breakpoints.values[s]!==void 0?A[s]=g:B.breakpoints.values[s.replace("Offset","")]!==void 0?z[s.replace("Offset","")]=g:F[s]=g});const re=(N=o.columns)!=null?N:f?void 0:Q,se=(T=o.spacing)!=null?T:f?void 0:M,ue=(b=(q=o.rowSpacing)!=null?q:o.spacing)!=null?b:f?void 0:te,oe=(x=(G=o.columnSpacing)!=null?G:o.spacing)!=null?x:f?void 0:ie,W=S({},C,{level:f,columns:re,container:Z,direction:ne,wrap:le,spacing:se,rowSpacing:ue,columnSpacing:oe,gridSize:A,gridOffset:z,disableEqualOverflow:(_=(E=V)!=null?E:w)!=null?_:!1,parentDisableEqualOverflow:w}),de=i(W,B);let k=u(r,S({ref:R,as:ee,ownerState:W,className:ce(de.root,U)},F,{children:c.Children.map(K,s=>{if(c.isValidElement(s)&&Se(s,["Grid"])){var g;return c.cloneElement(s,{unstable_level:(g=s.props.unstable_level)!=null?g:f+1})}return s})}));return V!==void 0&&V!==(w??!1)&&(k=u(a.Provider,{value:V,children:k})),k});return m.muiName="Grid",m}const Ae=Le({createStyledComponent:Ne("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,n)=>n.root}),componentName:"MuiGrid2",useThemeProps:e=>be({props:e,name:"MuiGrid2"})}),ze=Ae,p=e=>u(ze,{...e});try{p.displayName="Grid",p.__docgenInfo={description:"",displayName:"Grid",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"ResponsiveStyleValue<Padding<string | number> | NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"ResponsiveStyleValue<string[] | Color> | ((theme: Theme) => ResponsiveStyleValue<string[] | Color>)"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},xs:{defaultValue:{value:"false"},description:`If a number, it sets the number of columns the grid item uses.
It can't be greater than the total number of columns of the container (12 by default).
If 'auto', the grid item's width matches its content.
If false, the prop is ignored.
If true, the grid item's width grows to use the space available in the grid container.
The value is applied for all the screen sizes with the lowest priority.`,name:"xs",required:!1,type:{name:"boolean | GridSize"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"ResponsiveStyleValue<Margin<string | number> | NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},xl:{defaultValue:{value:"false"},description:`If a number, it sets the number of columns the grid item uses.
It can't be greater than the total number of columns of the container (12 by default).
If 'auto', the grid item's width matches its content.
If false, the prop is ignored.
If true, the grid item's width grows to use the space available in the grid container.
The value is applied for the \`xl\` breakpoint and wider screens if not overridden.`,name:"xl",required:!1,type:{name:"boolean | GridSize"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:'ResponsiveStyleValue<number | "hidden" | "inherit" | (string & {}) | "none" | "inset" | "initial" | "medium" | "-moz-initial" | "revert" | "revert-layer" | "unset" | "aliceblue" | "antiquewhite" | ... 184 more ... | "solid"> | ((theme: Theme) => ResponsiveStyleValue<...>)'}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"ResponsiveStyleValue<number | BoxShadow> | ((theme: Theme) => ResponsiveStyleValue<number | BoxShadow>)"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"ResponsiveStyleValue<string | (string & {}) | (number & {})> | ((theme: Theme) => ResponsiveStyleValue<string | (string & {}) | (number & {})>)"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"ResponsiveStyleValue<string[] | AlignContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignContent>)"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveStyleValue<string[] | AlignItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignItems>)"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"ResponsiveStyleValue<string[] | AlignSelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | AlignSelf>)"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ResponsiveStyleValue<Bottom<string | number> | NonNullable<Bottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"ResponsiveStyleValue<BoxSizing | NonNullable<BoxSizing>[]> | ((theme: Theme) => ResponsiveStyleValue<BoxSizing | NonNullable<...>[]>)"}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"ResponsiveStyleValue<ColumnGap<string | number> | NonNullable<ColumnGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},direction:{defaultValue:{value:"'row'"},description:"Defines the `flex-direction` style property.\nIt is applied for all screen sizes.",name:"direction",required:!1,type:{name:"ResponsiveStyleValue<GridDirection>"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"ResponsiveStyleValue<FlexBasis<string | number> | NonNullable<FlexBasis<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"ResponsiveStyleValue<FlexDirection | NonNullable<FlexDirection>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexDirection | NonNullable<...>[]>)"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"ResponsiveStyleValue<FlexGrow | NonNullable<FlexGrow>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexGrow | NonNullable<...>[]>)"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"ResponsiveStyleValue<FlexShrink | NonNullable<FlexShrink>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexShrink | NonNullable<...>[]>)"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"ResponsiveStyleValue<FlexWrap | NonNullable<FlexWrap>[]> | ((theme: Theme) => ResponsiveStyleValue<FlexWrap | NonNullable<...>[]>)"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"ResponsiveStyleValue<string[] | FontFamily> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontFamily>)"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"ResponsiveStyleValue<FontSize<string | number> | NonNullable<FontSize<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},fontStyle:{defaultValue:null,description:"",name:"fontStyle",required:!1,type:{name:"ResponsiveStyleValue<string[] | FontStyle> | ((theme: Theme) => ResponsiveStyleValue<string[] | FontStyle>)"}},gridAutoColumns:{defaultValue:null,description:"",name:"gridAutoColumns",required:!1,type:{name:"ResponsiveStyleValue<GridAutoColumns<string | number> | NonNullable<GridAutoColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridAutoFlow:{defaultValue:null,description:"",name:"gridAutoFlow",required:!1,type:{name:"ResponsiveStyleValue<string[] | GridAutoFlow> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridAutoFlow>)"}},gridAutoRows:{defaultValue:null,description:"",name:"gridAutoRows",required:!1,type:{name:"ResponsiveStyleValue<GridAutoRows<string | number> | NonNullable<GridAutoRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridTemplateAreas:{defaultValue:null,description:"",name:"gridTemplateAreas",required:!1,type:{name:"ResponsiveStyleValue<string[] | GridTemplateAreas> | ((theme: Theme) => ResponsiveStyleValue<string[] | GridTemplateAreas>)"}},gridTemplateColumns:{defaultValue:null,description:"",name:"gridTemplateColumns",required:!1,type:{name:"ResponsiveStyleValue<GridTemplateColumns<string | number> | NonNullable<GridTemplateColumns<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},gridTemplateRows:{defaultValue:null,description:"",name:"gridTemplateRows",required:!1,type:{name:"ResponsiveStyleValue<GridTemplateRows<string | number> | NonNullable<GridTemplateRows<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ResponsiveStyleValue<Height<string | number> | NonNullable<Height<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveStyleValue<string[] | JustifyContent> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyContent>)"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"ResponsiveStyleValue<string[] | JustifyItems> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifyItems>)"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"ResponsiveStyleValue<string[] | JustifySelf> | ((theme: Theme) => ResponsiveStyleValue<string[] | JustifySelf>)"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ResponsiveStyleValue<Left<string | number> | NonNullable<Left<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Left<...> | NonNullable<...>[]>)"}},letterSpacing:{defaultValue:null,description:"",name:"letterSpacing",required:!1,type:{name:"ResponsiveStyleValue<LetterSpacing<string | number> | NonNullable<LetterSpacing<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"ResponsiveStyleValue<LineHeight<string | number> | NonNullable<LineHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBlockEnd:{defaultValue:null,description:"",name:"marginBlockEnd",required:!1,type:{name:"ResponsiveStyleValue<MarginBlockEnd<string | number> | NonNullable<MarginBlockEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBlockStart:{defaultValue:null,description:"",name:"marginBlockStart",required:!1,type:{name:"ResponsiveStyleValue<MarginBlockStart<string | number> | NonNullable<MarginBlockStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"ResponsiveStyleValue<MarginBottom<string | number> | NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginInlineEnd:{defaultValue:null,description:"",name:"marginInlineEnd",required:!1,type:{name:"ResponsiveStyleValue<MarginInlineEnd<string | number> | NonNullable<MarginInlineEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginInlineStart:{defaultValue:null,description:"",name:"marginInlineStart",required:!1,type:{name:"ResponsiveStyleValue<MarginInlineStart<string | number> | NonNullable<MarginInlineStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"ResponsiveStyleValue<MarginRight<string | number> | NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ResponsiveStyleValue<MaxHeight<string | number> | NonNullable<MaxHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ResponsiveStyleValue<MaxWidth<string | number> | NonNullable<MaxWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ResponsiveStyleValue<MinHeight<string | number> | NonNullable<MinHeight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ResponsiveStyleValue<MinWidth<string | number> | NonNullable<MinWidth<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"ResponsiveStyleValue<Order | NonNullable<Order>[]> | ((theme: Theme) => ResponsiveStyleValue<Order | NonNullable<Order>[]>)"}},paddingBlockEnd:{defaultValue:null,description:"",name:"paddingBlockEnd",required:!1,type:{name:"ResponsiveStyleValue<PaddingBlockEnd<string | number> | NonNullable<PaddingBlockEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingBlockStart:{defaultValue:null,description:"",name:"paddingBlockStart",required:!1,type:{name:"ResponsiveStyleValue<PaddingBlockStart<string | number> | NonNullable<PaddingBlockStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveStyleValue<PaddingBottom<string | number> | NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingInlineEnd:{defaultValue:null,description:"",name:"paddingInlineEnd",required:!1,type:{name:"ResponsiveStyleValue<PaddingInlineEnd<string | number> | NonNullable<PaddingInlineEnd<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingInlineStart:{defaultValue:null,description:"",name:"paddingInlineStart",required:!1,type:{name:"ResponsiveStyleValue<PaddingInlineStart<string | number> | NonNullable<PaddingInlineStart<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ResponsiveStyleValue<PaddingRight<string | number> | NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"ResponsiveStyleValue<Position | NonNullable<Position>[]> | ((theme: Theme) => ResponsiveStyleValue<Position | NonNullable<...>[]>)"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ResponsiveStyleValue<Right<string | number> | NonNullable<Right<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"ResponsiveStyleValue<RowGap<string | number> | NonNullable<RowGap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"ResponsiveStyleValue<TextAlign | NonNullable<TextAlign>[]> | ((theme: Theme) => ResponsiveStyleValue<TextAlign | NonNullable<...>[]>)"}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"ResponsiveStyleValue<string[] | TextOverflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | TextOverflow>)"}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"ResponsiveStyleValue<TextTransform | NonNullable<TextTransform>[]> | ((theme: Theme) => ResponsiveStyleValue<TextTransform | NonNullable<...>[]>)"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ResponsiveStyleValue<Top<string | number> | NonNullable<Top<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Top<string | number> | NonNullable<...>[]>)"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:"ResponsiveStyleValue<Visibility | NonNullable<Visibility>[]> | ((theme: Theme) => ResponsiveStyleValue<Visibility | NonNullable<...>[]>)"}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"ResponsiveStyleValue<WhiteSpace | NonNullable<WhiteSpace>[]> | ((theme: Theme) => ResponsiveStyleValue<WhiteSpace | NonNullable<...>[]>)"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ResponsiveStyleValue<Width<string | number> | NonNullable<Width<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderBottom:{defaultValue:null,description:"",name:"borderBottom",required:!1,type:{name:"ResponsiveStyleValue<BorderBottom<string | number> | NonNullable<BorderBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"ResponsiveStyleValue<string[] | BorderColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BorderColor>)"}},borderLeft:{defaultValue:null,description:"",name:"borderLeft",required:!1,type:{name:"ResponsiveStyleValue<BorderLeft<string | number> | NonNullable<BorderLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ResponsiveStyleValue<BorderRadius<string | number> | NonNullable<BorderRadius<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderRight:{defaultValue:null,description:"",name:"borderRight",required:!1,type:{name:"ResponsiveStyleValue<BorderRight<string | number> | NonNullable<BorderRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},borderTop:{defaultValue:null,description:"",name:"borderTop",required:!1,type:{name:"ResponsiveStyleValue<BorderTop<string | number> | NonNullable<BorderTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},columns:{defaultValue:{value:"12"},description:"The number of columns.",name:"columns",required:!1,type:{name:"ResponsiveStyleValue<number>"}},container:{defaultValue:{value:"false"},description:"If `true`, the component will have the flex *container* behavior.\nYou should be wrapping *items* with a *container*.",name:"container",required:!1,type:{name:"boolean"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"ResponsiveStyleValue<Flex<string | number> | NonNullable<Flex<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Flex<...> | NonNullable<...>[]>)"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveStyleValue<Gap<string | number> | NonNullable<Gap<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<Gap<string | number> | NonNullable<...>[]>)"}},gridArea:{defaultValue:null,description:"",name:"gridArea",required:!1,type:{name:"ResponsiveStyleValue<GridArea | NonNullable<GridArea>[]> | ((theme: Theme) => ResponsiveStyleValue<GridArea | NonNullable<...>[]>)"}},gridColumn:{defaultValue:null,description:"",name:"gridColumn",required:!1,type:{name:"ResponsiveStyleValue<GridColumn | NonNullable<GridColumn>[]> | ((theme: Theme) => ResponsiveStyleValue<GridColumn | NonNullable<...>[]>)"}},gridRow:{defaultValue:null,description:"",name:"gridRow",required:!1,type:{name:"ResponsiveStyleValue<GridRow | NonNullable<GridRow>[]> | ((theme: Theme) => ResponsiveStyleValue<GridRow | NonNullable<GridRow>[]>)"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ResponsiveStyleValue<Margin<string | number> | NonNullable<Margin<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginBlock:{defaultValue:null,description:"",name:"marginBlock",required:!1,type:{name:"ResponsiveStyleValue<MarginBlock<string | number> | NonNullable<MarginBlock<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginInline:{defaultValue:null,description:"",name:"marginInline",required:!1,type:{name:"ResponsiveStyleValue<MarginInline<string | number> | NonNullable<MarginInline<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"ResponsiveStyleValue<string[] | Overflow> | ((theme: Theme) => ResponsiveStyleValue<string[] | Overflow>)"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ResponsiveStyleValue<Padding<string | number> | NonNullable<Padding<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingBlock:{defaultValue:null,description:"",name:"paddingBlock",required:!1,type:{name:"ResponsiveStyleValue<PaddingBlock<string | number> | NonNullable<PaddingBlock<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingInline:{defaultValue:null,description:"",name:"paddingInline",required:!1,type:{name:"ResponsiveStyleValue<PaddingInline<string | number> | NonNullable<PaddingInline<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},bgcolor:{defaultValue:null,description:"",name:"bgcolor",required:!1,type:{name:"ResponsiveStyleValue<string[] | BackgroundColor> | ((theme: Theme) => ResponsiveStyleValue<string[] | BackgroundColor>)"}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"ResponsiveStyleValue<MarginRight<string | number> | NonNullable<MarginRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"ResponsiveStyleValue<MarginBottom<string | number> | NonNullable<MarginBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"ResponsiveStyleValue<MarginLeft<string | number> | NonNullable<MarginLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"ResponsiveStyleValue<MarginTop<string | number> | NonNullable<MarginTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"ResponsiveStyleValue<PaddingRight<string | number> | NonNullable<PaddingRight<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"ResponsiveStyleValue<PaddingBottom<string | number> | NonNullable<PaddingBottom<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsiveStyleValue<PaddingLeft<string | number> | NonNullable<PaddingLeft<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsiveStyleValue<PaddingTop<string | number> | NonNullable<PaddingTop<string | number>>[]> | ((theme: Theme) => ResponsiveStyleValue<...>)"}},typography:{defaultValue:null,description:"",name:"typography",required:!1,type:{name:"ResponsiveStyleValue<string> | ((theme: Theme) => ResponsiveStyleValue<string>)"}},displayPrint:{defaultValue:null,description:"",name:"displayPrint",required:!1,type:{name:"ResponsiveStyleValue<string[] | Display> | ((theme: Theme) => ResponsiveStyleValue<string[] | Display>)"}},spacing:{defaultValue:{value:"0"},description:"Defines the space between the type `item` components.\nIt can only be used on a type `container` component.",name:"spacing",required:!1,type:{name:"ResponsiveStyleValue<GridSpacing>"}},wrap:{defaultValue:{value:"'wrap'"},description:"Defines the `flex-wrap` style property.\nIt's applied for all screen sizes.",name:"wrap",required:!1,type:{name:"GridWrap"}},sm:{defaultValue:{value:"false"},description:`If a number, it sets the number of columns the grid item uses.
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
The value is applied for the \`lg\` breakpoint and wider screens if not overridden.`,name:"lg",required:!1,type:{name:"boolean | GridSize"}},xsOffset:{defaultValue:null,description:"If a number, it sets the margin-left equals to the number of columns the grid item uses.\nIf 'auto', the grid item push itself to the right-end of the container.\nThe value is applied for the `xs` breakpoint and wider screens if not overridden.",name:"xsOffset",required:!1,type:{name:"GridSize"}},xlOffset:{defaultValue:null,description:"If a number, it sets the margin-left equals to the number of columns the grid item uses.\nIf 'auto', the grid item push itself to the right-end of the container.\nThe value is applied for the `xl` breakpoint and wider screens if not overridden.",name:"xlOffset",required:!1,type:{name:"GridSize"}},smOffset:{defaultValue:null,description:"If a number, it sets the margin-left equals to the number of columns the grid item uses.\nIf 'auto', the grid item push itself to the right-end of the container.\nThe value is applied for the `sm` breakpoint and wider screens if not overridden.",name:"smOffset",required:!1,type:{name:"GridSize"}},mdOffset:{defaultValue:null,description:"If a number, it sets the margin-left equals to the number of columns the grid item uses.\nIf 'auto', the grid item push itself to the right-end of the container.\nThe value is applied for the `md` breakpoint and wider screens if not overridden.",name:"mdOffset",required:!1,type:{name:"GridSize"}},lgOffset:{defaultValue:null,description:"If a number, it sets the margin-left equals to the number of columns the grid item uses.\nIf 'auto', the grid item push itself to the right-end of the container.\nThe value is applied for the `lg` breakpoint and wider screens if not overridden.",name:"lgOffset",required:!1,type:{name:"GridSize"}},columnSpacing:{defaultValue:null,description:"Defines the horizontal space between the type `item` components.\nIt overrides the value of the `spacing` prop.",name:"columnSpacing",required:!1,type:{name:"ResponsiveStyleValue<GridSpacing>"}},disableEqualOverflow:{defaultValue:null,description:"If `true`, the negative margin and padding are apply only to the top and left sides of the grid.",name:"disableEqualOverflow",required:!1,type:{name:"boolean"}},unstable_level:{defaultValue:null,description:`@internal The level of the grid starts from \`0\`
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
\`\`\``,name:"unstable_level",required:!1,type:{name:"number"}},rowSpacing:{defaultValue:null,description:"Defines the vertical space between the type `item` components.\nIt overrides the value of the `spacing` prop.",name:"rowSpacing",required:!1,type:{name:"ResponsiveStyleValue<GridSpacing>"}}}}}catch{}const tn={title:"Components/Layout/Grid",component:p,tags:["autodocs"],parameters:{docs:{controls:{exclude:j},description:{component:`The grid system is implemented with the \`Grid\` component:

+ It uses CSS Flexbox (rather than CSS Grid) for high flexibility.
+ The grid is always a flex item. Use the \`container\` prop to add a flex container.
+ Item widths are set in percentages, so they're always fluid and sized relative to their parent element.
+ There are five default grid breakpoints: xs, sm, md, lg, and xl.
+ You can give integer values for each breakpoint, to indicate how many of the 1 available columns are occupied by the component when the viewport width satisfies the breakpoint constraints.
+ It uses negative margins and padding to create gaps between children, which behave similarly to the \`gap\` CSS property.
+ It does not support row spanning. Children elements cannot span multiple rows. We recommend using CSS Grid if you need this functionality.
+ It does not automatically place children. It will try to fit the children one by one, and if there is not enough space, the rest of the children will start on the next line, and so on. If you need auto-placement, we recommend using CSS Grid instead.

> As a CSS utility, the \`Grid\` component also supports all [system properties](https://mui.com/system/properties/). They are omitted for brevity, but can be used as props directly on the component.`}},canvas:{controls:{exclude:j}}}},P={render:({children:e,container:n,spacing:l,...t})=>me(p,{container:n,spacing:l,...t,children:[u(p,{xs:8,children:u(I,{children:e})}),u(p,{xs:4,children:u(I,{children:e})}),u(p,{xs:4,children:u(I,{children:e})}),u(p,{xs:8,children:u(I,{children:e})})]}),args:{children:"Grid Item",container:!0,spacing:2}};var D,H,J;P.parameters={...P.parameters,docs:{...(D=P.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(J=(H=P.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const an=["_Grid"];export{P as _Grid,an as __namedExportsOrder,tn as default};
//# sourceMappingURL=Grid.stories-76a59f70.js.map
