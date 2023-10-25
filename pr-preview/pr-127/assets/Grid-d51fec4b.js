import{_ as x,b as K,r as S,j as k}from"./createTheme-e6b56ddb.js";import{r as b}from"./index-570b25c1.js";import{c as O}from"./clsx-8416b751.js";import{g as T,s as _,c as I}from"./styled-188025da.js";import{u as L}from"./useThemeProps-db7202c2.js";import{u as D}from"./useTheme-3a36d7a0.js";import{g as U}from"./generateUtilityClasses-f776b170.js";import{j as N}from"./jsx-runtime-390e5fc8.js";import{e as Z}from"./extendSxProp-4d42c058.js";const A=b.createContext(),z=A;function F(e){return T("MuiGrid",e)}const q=[0,1,2,3,4,5,6,7,8,9,10],H=["column-reverse","column","row-reverse","row"],J=["nowrap","wrap-reverse","wrap"],g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],$=U("MuiGrid",["root","container","item","zeroMinWidth",...q.map(e=>`spacing-xs-${e}`),...H.map(e=>`direction-xs-${e}`),...J.map(e=>`wrap-xs-${e}`),...g.map(e=>`grid-xs-${e}`),...g.map(e=>`grid-sm-${e}`),...g.map(e=>`grid-md-${e}`),...g.map(e=>`grid-lg-${e}`),...g.map(e=>`grid-xl-${e}`)]),Q=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function d(e){const r=parseFloat(e);return`${r}${String(e).replace(String(r),"")||"px"}`}function X({theme:e,ownerState:r}){let i;return e.breakpoints.keys.reduce((t,n)=>{let o={};if(r[n]&&(i=r[n]),!i)return t;if(i===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=S({values:r.columns,breakpoints:e.breakpoints.values}),u=typeof a=="object"?a[n]:a;if(u==null)return t;const p=`${Math.round(i/u*1e8)/1e6}%`;let c={};if(r.container&&r.item&&r.columnSpacing!==0){const s=e.spacing(r.columnSpacing);if(s!=="0px"){const l=`calc(${p} + ${d(s)})`;c={flexBasis:l,maxWidth:l}}}o=x({flexBasis:p,flexGrow:0,maxWidth:p},c)}return e.breakpoints.values[n]===0?Object.assign(t,o):t[e.breakpoints.up(n)]=o,t},{})}function Y({theme:e,ownerState:r}){const i=S({values:r.direction,breakpoints:e.breakpoints.values});return k({theme:e},i,t=>{const n={flexDirection:t};return t.indexOf("column")===0&&(n[`& > .${$.item}`]={maxWidth:"none"}),n})}function B({breakpoints:e,values:r}){let i="";Object.keys(r).forEach(n=>{i===""&&r[n]!==0&&(i=n)});const t=Object.keys(e).sort((n,o)=>e[n]-e[o]);return t.slice(0,t.indexOf(i))}function ee({theme:e,ownerState:r}){const{container:i,rowSpacing:t}=r;let n={};if(i&&t!==0){const o=S({values:t,breakpoints:e.breakpoints.values});let a;typeof o=="object"&&(a=B({breakpoints:e.breakpoints.values,values:o})),n=k({theme:e},o,(u,p)=>{var c;const s=e.spacing(u);return s!=="0px"?{marginTop:`-${d(s)}`,[`& > .${$.item}`]:{paddingTop:d(s)}}:(c=a)!=null&&c.includes(p)?{}:{marginTop:0,[`& > .${$.item}`]:{paddingTop:0}}})}return n}function re({theme:e,ownerState:r}){const{container:i,columnSpacing:t}=r;let n={};if(i&&t!==0){const o=S({values:t,breakpoints:e.breakpoints.values});let a;typeof o=="object"&&(a=B({breakpoints:e.breakpoints.values,values:o})),n=k({theme:e},o,(u,p)=>{var c;const s=e.spacing(u);return s!=="0px"?{width:`calc(100% + ${d(s)})`,marginLeft:`-${d(s)}`,[`& > .${$.item}`]:{paddingLeft:d(s)}}:(c=a)!=null&&c.includes(p)?{}:{width:"100%",marginLeft:0,[`& > .${$.item}`]:{paddingLeft:0}}})}return n}function ne(e,r,i={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[i[`spacing-xs-${String(e)}`]];const t=[];return r.forEach(n=>{const o=e[n];Number(o)>0&&t.push(i[`spacing-${n}-${String(o)}`])}),t}const te=_("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:i}=e,{container:t,direction:n,item:o,spacing:a,wrap:u,zeroMinWidth:p,breakpoints:c}=i;let s=[];t&&(s=ne(a,c,r));const l=[];return c.forEach(f=>{const m=i[f];m&&l.push(r[`grid-${f}-${String(m)}`])}),[r.root,t&&r.container,o&&r.item,p&&r.zeroMinWidth,...s,n!=="row"&&r[`direction-xs-${String(n)}`],u!=="wrap"&&r[`wrap-xs-${String(u)}`],...l]}})(({ownerState:e})=>x({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),Y,ee,re,X);function ie(e,r){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const i=[];return r.forEach(t=>{const n=e[t];if(Number(n)>0){const o=`spacing-${t}-${String(n)}`;i.push(o)}}),i}const oe=e=>{const{classes:r,container:i,direction:t,item:n,spacing:o,wrap:a,zeroMinWidth:u,breakpoints:p}=e;let c=[];i&&(c=ie(o,p));const s=[];p.forEach(f=>{const m=e[f];m&&s.push(`grid-${f}-${String(m)}`)});const l={root:["root",i&&"container",n&&"item",u&&"zeroMinWidth",...c,t!=="row"&&`direction-xs-${String(t)}`,a!=="wrap"&&`wrap-xs-${String(a)}`,...s]};return I(l,F,r)},se=b.forwardRef(function(r,i){const t=L({props:r,name:"MuiGrid"}),{breakpoints:n}=D(),o=Z(t),{className:a,columns:u,columnSpacing:p,component:c="div",container:s=!1,direction:l="row",item:f=!1,rowSpacing:m,spacing:w=0,wrap:M="wrap",zeroMinWidth:V=!1}=o,v=K(o,Q),j=m||w,P=p||w,E=b.useContext(z),G=s?u||12:E,W={},y=x({},v);n.keys.forEach(h=>{v[h]!=null&&(W[h]=v[h],delete y[h])});const C=x({},o,{columns:G,container:s,direction:l,item:f,rowSpacing:j,columnSpacing:P,wrap:M,zeroMinWidth:V,spacing:w},W,{breakpoints:n.keys}),R=oe(C);return N(z.Provider,{value:G,children:N(te,x({ownerState:C,className:O(R.root,a),as:c,ref:i},y))})}),xe=se;export{xe as G};
//# sourceMappingURL=Grid-d51fec4b.js.map
