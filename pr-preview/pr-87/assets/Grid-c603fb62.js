import{r as w}from"./index-8db94870.js";import{b as R,g as K,s as O,c as T,a as I}from"./styled-e83a4d6b.js";import{c as D,j as h,k}from"./useThemeProps-2be0b178.js";import{u as L}from"./useTheme-4b6e7437.js";import{j as W}from"./jsx-runtime-91a467a5.js";import{e as U}from"./extendSxProp-f7e67a44.js";const Z=w.createContext(),N=Z;function _(e){return R("MuiGrid",e)}const A=[0,1,2,3,4,5,6,7,8,9,10],F=["column-reverse","column","row-reverse","row"],q=["nowrap","wrap-reverse","wrap"],g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],x=K("MuiGrid",["root","container","item","zeroMinWidth",...A.map(e=>`spacing-xs-${e}`),...F.map(e=>`direction-xs-${e}`),...q.map(e=>`wrap-xs-${e}`),...g.map(e=>`grid-xs-${e}`),...g.map(e=>`grid-sm-${e}`),...g.map(e=>`grid-md-${e}`),...g.map(e=>`grid-lg-${e}`),...g.map(e=>`grid-xl-${e}`)]);function m(e){const r=parseFloat(e);return`${r}${String(e).replace(String(r),"")||"px"}`}function H({theme:e,ownerState:r}){let i;return e.breakpoints.keys.reduce((t,n)=>{let o={};if(r[n]&&(i=r[n]),!i)return t;if(i===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=h({values:r.columns,breakpoints:e.breakpoints.values}),u=typeof a=="object"?a[n]:a;if(u==null)return t;const l=`${Math.round(i/u*1e8)/1e6}%`;let c={};if(r.container&&r.item&&r.columnSpacing!==0){const s=e.spacing(r.columnSpacing);if(s!=="0px"){const p=`calc(${l} + ${m(s)})`;c={flexBasis:p,maxWidth:p}}}o={flexBasis:l,flexGrow:0,maxWidth:l,...c}}return e.breakpoints.values[n]===0?Object.assign(t,o):t[e.breakpoints.up(n)]=o,t},{})}function J({theme:e,ownerState:r}){const i=h({values:r.direction,breakpoints:e.breakpoints.values});return k({theme:e},i,t=>{const n={flexDirection:t};return t.indexOf("column")===0&&(n[`& > .${x.item}`]={maxWidth:"none"}),n})}function B({breakpoints:e,values:r}){let i="";Object.keys(r).forEach(n=>{i===""&&r[n]!==0&&(i=n)});const t=Object.keys(e).sort((n,o)=>e[n]-e[o]);return t.slice(0,t.indexOf(i))}function Q({theme:e,ownerState:r}){const{container:i,rowSpacing:t}=r;let n={};if(i&&t!==0){const o=h({values:t,breakpoints:e.breakpoints.values});let a;typeof o=="object"&&(a=B({breakpoints:e.breakpoints.values,values:o})),n=k({theme:e},o,(u,l)=>{var c;const s=e.spacing(u);return s!=="0px"?{marginTop:`-${m(s)}`,[`& > .${x.item}`]:{paddingTop:m(s)}}:(c=a)!=null&&c.includes(l)?{}:{marginTop:0,[`& > .${x.item}`]:{paddingTop:0}}})}return n}function X({theme:e,ownerState:r}){const{container:i,columnSpacing:t}=r;let n={};if(i&&t!==0){const o=h({values:t,breakpoints:e.breakpoints.values});let a;typeof o=="object"&&(a=B({breakpoints:e.breakpoints.values,values:o})),n=k({theme:e},o,(u,l)=>{var c;const s=e.spacing(u);return s!=="0px"?{width:`calc(100% + ${m(s)})`,marginLeft:`-${m(s)}`,[`& > .${x.item}`]:{paddingLeft:m(s)}}:(c=a)!=null&&c.includes(l)?{}:{width:"100%",marginLeft:0,[`& > .${x.item}`]:{paddingLeft:0}}})}return n}function Y(e,r,i={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[i[`spacing-xs-${String(e)}`]];const t=[];return r.forEach(n=>{const o=e[n];Number(o)>0&&t.push(i[`spacing-${n}-${String(o)}`])}),t}const ee=O("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:i}=e,{container:t,direction:n,item:o,spacing:a,wrap:u,zeroMinWidth:l,breakpoints:c}=i;let s=[];t&&(s=Y(a,c,r));const p=[];return c.forEach(f=>{const d=i[f];d&&p.push(r[`grid-${f}-${String(d)}`])}),[r.root,t&&r.container,o&&r.item,l&&r.zeroMinWidth,...s,n!=="row"&&r[`direction-xs-${String(n)}`],u!=="wrap"&&r[`wrap-xs-${String(u)}`],...p]}})(({ownerState:e})=>({boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},...e.item&&{margin:0},...e.zeroMinWidth&&{minWidth:0},...e.wrap!=="wrap"&&{flexWrap:e.wrap}}),J,Q,X,H);function re(e,r){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const i=[];return r.forEach(t=>{const n=e[t];if(Number(n)>0){const o=`spacing-${t}-${String(n)}`;i.push(o)}}),i}const ne=e=>{const{classes:r,container:i,direction:t,item:n,spacing:o,wrap:a,zeroMinWidth:u,breakpoints:l}=e;let c=[];i&&(c=re(o,l));const s=[];l.forEach(f=>{const d=e[f];d&&s.push(`grid-${f}-${String(d)}`)});const p={root:["root",i&&"container",n&&"item",u&&"zeroMinWidth",...c,t!=="row"&&`direction-xs-${String(t)}`,a!=="wrap"&&`wrap-xs-${String(a)}`,...s]};return I(p,_,r)},te=w.forwardRef(function(r,i){const t=D({props:r,name:"MuiGrid"}),{breakpoints:n}=L(),o=U(t),{className:a,columns:u,columnSpacing:l,component:c="div",container:s=!1,direction:p="row",item:f=!1,rowSpacing:d,spacing:S=0,wrap:z="wrap",zeroMinWidth:M=!1,...v}=o,V=d||S,j=l||S,E=w.useContext(N),b=s?u||12:E,G={},y={...v};n.keys.forEach($=>{v[$]!=null&&(G[$]=v[$],delete y[$])});const C={...o,columns:b,container:s,direction:p,item:f,rowSpacing:V,columnSpacing:j,wrap:z,zeroMinWidth:M,spacing:S,...G,breakpoints:n.keys},P=ne(C);return W(N.Provider,{value:b,children:W(ee,{ownerState:C,className:T(P.root,a),as:c,ref:i,...y})})}),le=te;export{le as G};
//# sourceMappingURL=Grid-c603fb62.js.map
