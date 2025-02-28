import{u as H}from"./useTheme-DUkCvbx_.js";import{r as $}from"./index-DcWiA9TO.js";import{c as I,g as J}from"./generateUtilityClass-CVWqFxsA.js";import{j as Q}from"./jsx-runtime-CcL-W3nW.js";import{s as V}from"./styled-vBjI3IQc.js";import{u as X}from"./useTheme-C2CrmYKc.js";import{e as Y}from"./extendSxProp-B5AgUjQT.js";import{i as Z}from"./isMuiElement-DAzOCCHH.js";import{u as v}from"./useThemeProps-BIK-1DKm.js";import{c as ee,s as re}from"./styled-CF1hcdwO.js";import{e as te}from"./identifier-Dtqimryx.js";import{u as ne}from"./DefaultPropsProvider-_cNB_dWy.js";const se=(e,r)=>e.filter(t=>r.includes(t)),S=(e,r,t)=>{const o=e.keys[0];Array.isArray(r)?r.forEach((s,n)=>{t((i,p)=>{n<=e.keys.length-1&&(n===0?Object.assign(i,p):i[e.up(e.keys[n])]=p)},s)}):r&&typeof r=="object"?(Object.keys(r).length>e.keys.length?e.keys:se(e.keys,Object.keys(r))).forEach(n=>{if(e.keys.includes(n)){const i=r[n];i!==void 0&&t((p,G)=>{o===n?Object.assign(p,G):p[e.up(n)]=G},i)}}):(typeof r=="number"||typeof r=="string")&&t((s,n)=>{Object.assign(s,n)},r)};function b(e){return`--Grid-${e}Spacing`}function x(e){return`--Grid-parent-${e}Spacing`}const T="--Grid-columns",y="--Grid-parent-columns",oe=({theme:e,ownerState:r})=>{const t={};return S(e.breakpoints,r.size,(o,s)=>{let n={};s==="grow"&&(n={flexBasis:0,flexGrow:1,maxWidth:"100%"}),s==="auto"&&(n={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof s=="number"&&(n={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${s} / var(${y}) - (var(${y}) - ${s}) * (var(${x("column")}) / var(${y})))`}),o(t,n)}),t},ie=({theme:e,ownerState:r})=>{const t={};return S(e.breakpoints,r.offset,(o,s)=>{let n={};s==="auto"&&(n={marginLeft:"auto"}),typeof s=="number"&&(n={marginLeft:s===0?"0px":`calc(100% * ${s} / var(${y}) + var(${x("column")}) * ${s} / var(${y}))`}),o(t,n)}),t},ce=({theme:e,ownerState:r})=>{if(!r.container)return{};const t={[T]:12};return S(e.breakpoints,r.columns,(o,s)=>{const n=s??12;o(t,{[T]:n,"> *":{[y]:n}})}),t},ae=({theme:e,ownerState:r})=>{if(!r.container)return{};const t={};return S(e.breakpoints,r.rowSpacing,(o,s)=>{var i;const n=typeof s=="string"?s:(i=e.spacing)==null?void 0:i.call(e,s);o(t,{[b("row")]:n,"> *":{[x("row")]:n}})}),t},fe=({theme:e,ownerState:r})=>{if(!r.container)return{};const t={};return S(e.breakpoints,r.columnSpacing,(o,s)=>{var i;const n=typeof s=="string"?s:(i=e.spacing)==null?void 0:i.call(e,s);o(t,{[b("column")]:n,"> *":{[x("column")]:n}})}),t},ue=({theme:e,ownerState:r})=>{if(!r.container)return{};const t={};return S(e.breakpoints,r.direction,(o,s)=>{o(t,{flexDirection:s})}),t},le=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},gap:`var(${b("row")}) var(${b("column")})`}}),me=e=>{const r=[];return Object.entries(e).forEach(([t,o])=>{o!==!1&&o!==void 0&&r.push(`grid-${t}-${String(o)}`)}),r},pe=(e,r="xs")=>{function t(o){return o===void 0?!1:typeof o=="string"&&!Number.isNaN(Number(o))||typeof o=="number"&&o>0}if(t(e))return[`spacing-${r}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const o=[];return Object.entries(e).forEach(([s,n])=>{t(n)&&o.push(`spacing-${s}-${String(n)}`)}),o}return[]},ge=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([r,t])=>`direction-${r}-${t}`):[`direction-xs-${String(e)}`],de=te(),ye=V("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,r)=>r.root});function Se(e){return v({props:e,name:"MuiGrid",defaultTheme:de})}function Ge(e={}){const{createStyledComponent:r=ye,useThemeProps:t=Se,useTheme:o=X,componentName:s="MuiGrid"}=e,n=(u,c)=>{const{container:g,direction:f,spacing:l,wrap:a,size:w}=u,h={root:["root",g&&"container",a!=="wrap"&&`wrap-xs-${String(a)}`,...ge(f),...me(w),...g?pe(l,c.breakpoints.keys[0]):[]]};return ee(h,j=>J(s,j),{})};function i(u,c,g=()=>!0){const f={};return u===null||(Array.isArray(u)?u.forEach((l,a)=>{l!==null&&g(l)&&c.keys[a]&&(f[c.keys[a]]=l)}):typeof u=="object"?Object.keys(u).forEach(l=>{const a=u[l];a!=null&&g(a)&&(f[l]=a)}):f[c.keys[0]]=u),f}const p=r(ce,fe,ae,oe,ue,le,ie),G=$.forwardRef(function(c,g){const f=o(),l=t(c),a=Y(l),{className:w,children:h,columns:j=12,container:C=!1,component:O="div",direction:P="row",wrap:R="wrap",size:z={},offset:M={},spacing:k=0,rowSpacing:A=k,columnSpacing:B=k,unstable_level:d=0,...D}=a,W=i(z,f.breakpoints,m=>m!==!1),_=i(M,f.breakpoints),L=c.columns??(d?void 0:j),K=c.spacing??(d?void 0:k),U=c.rowSpacing??c.spacing??(d?void 0:A),q=c.columnSpacing??c.spacing??(d?void 0:B),N={...a,level:d,columns:L,container:C,direction:P,wrap:R,spacing:K,rowSpacing:U,columnSpacing:q,size:W,offset:_},F=n(N,f);return Q.jsx(p,{ref:g,as:O,ownerState:N,className:I(F.root,w),...D,children:$.Children.map(h,m=>{var E;return $.isValidElement(m)&&Z(m,["Grid"])&&C&&m.props.container?$.cloneElement(m,{unstable_level:((E=m.props)==null?void 0:E.unstable_level)??d+1}):m})})});return G.muiName="Grid",G}const Pe=Ge({createStyledComponent:re("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.container&&r.container]}}),componentName:"MuiGrid2",useThemeProps:e=>ne({props:e,name:"MuiGrid2"}),useTheme:H});export{Pe as G};
