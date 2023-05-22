import{g as K,a as O,s as T,_ as x,u as _,b as I,c as L,r as S,q as k,e as D}from"./useThemeProps-601b945a.js";import{r as b}from"./index-f1f749bf.js";import{u as U}from"./ButtonBase-09e0211d.js";import{j as N}from"./jsx-runtime-670450c2.js";import{e as Z}from"./extendSxProp-e7bb663c.js";const A=b.createContext(),z=A;function F(e){return K("MuiGrid",e)}const q=[0,1,2,3,4,5,6,7,8,9,10],H=["column-reverse","column","row-reverse","row"],J=["nowrap","wrap-reverse","wrap"],g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],$=O("MuiGrid",["root","container","item","zeroMinWidth",...q.map(e=>`spacing-xs-${e}`),...H.map(e=>`direction-xs-${e}`),...J.map(e=>`wrap-xs-${e}`),...g.map(e=>`grid-xs-${e}`),...g.map(e=>`grid-sm-${e}`),...g.map(e=>`grid-md-${e}`),...g.map(e=>`grid-lg-${e}`),...g.map(e=>`grid-xl-${e}`)]),Q=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function m(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}function X({theme:e,ownerState:n}){let i;return e.breakpoints.keys.reduce((t,r)=>{let o={};if(n[r]&&(i=n[r]),!i)return t;if(i===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=S({values:n.columns,breakpoints:e.breakpoints.values}),u=typeof a=="object"?a[r]:a;if(u==null)return t;const p=`${Math.round(i/u*1e8)/1e6}%`;let c={};if(n.container&&n.item&&n.columnSpacing!==0){const s=e.spacing(n.columnSpacing);if(s!=="0px"){const l=`calc(${p} + ${m(s)})`;c={flexBasis:l,maxWidth:l}}}o=x({flexBasis:p,flexGrow:0,maxWidth:p},c)}return e.breakpoints.values[r]===0?Object.assign(t,o):t[e.breakpoints.up(r)]=o,t},{})}function Y({theme:e,ownerState:n}){const i=S({values:n.direction,breakpoints:e.breakpoints.values});return k({theme:e},i,t=>{const r={flexDirection:t};return t.indexOf("column")===0&&(r[`& > .${$.item}`]={maxWidth:"none"}),r})}function B({breakpoints:e,values:n}){let i="";Object.keys(n).forEach(r=>{i===""&&n[r]!==0&&(i=r)});const t=Object.keys(e).sort((r,o)=>e[r]-e[o]);return t.slice(0,t.indexOf(i))}function ee({theme:e,ownerState:n}){const{container:i,rowSpacing:t}=n;let r={};if(i&&t!==0){const o=S({values:t,breakpoints:e.breakpoints.values});let a;typeof o=="object"&&(a=B({breakpoints:e.breakpoints.values,values:o})),r=k({theme:e},o,(u,p)=>{var c;const s=e.spacing(u);return s!=="0px"?{marginTop:`-${m(s)}`,[`& > .${$.item}`]:{paddingTop:m(s)}}:(c=a)!=null&&c.includes(p)?{}:{marginTop:0,[`& > .${$.item}`]:{paddingTop:0}}})}return r}function ne({theme:e,ownerState:n}){const{container:i,columnSpacing:t}=n;let r={};if(i&&t!==0){const o=S({values:t,breakpoints:e.breakpoints.values});let a;typeof o=="object"&&(a=B({breakpoints:e.breakpoints.values,values:o})),r=k({theme:e},o,(u,p)=>{var c;const s=e.spacing(u);return s!=="0px"?{width:`calc(100% + ${m(s)})`,marginLeft:`-${m(s)}`,[`& > .${$.item}`]:{paddingLeft:m(s)}}:(c=a)!=null&&c.includes(p)?{}:{width:"100%",marginLeft:0,[`& > .${$.item}`]:{paddingLeft:0}}})}return r}function re(e,n,i={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[i[`spacing-xs-${String(e)}`]];const t=[];return n.forEach(r=>{const o=e[r];Number(o)>0&&t.push(i[`spacing-${r}-${String(o)}`])}),t}const te=T("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:i}=e,{container:t,direction:r,item:o,spacing:a,wrap:u,zeroMinWidth:p,breakpoints:c}=i;let s=[];t&&(s=re(a,c,n));const l=[];return c.forEach(f=>{const d=i[f];d&&l.push(n[`grid-${f}-${String(d)}`])}),[n.root,t&&n.container,o&&n.item,p&&n.zeroMinWidth,...s,r!=="row"&&n[`direction-xs-${String(r)}`],u!=="wrap"&&n[`wrap-xs-${String(u)}`],...l]}})(({ownerState:e})=>x({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),Y,ee,ne,X);function ie(e,n){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const i=[];return n.forEach(t=>{const r=e[t];if(Number(r)>0){const o=`spacing-${t}-${String(r)}`;i.push(o)}}),i}const oe=e=>{const{classes:n,container:i,direction:t,item:r,spacing:o,wrap:a,zeroMinWidth:u,breakpoints:p}=e;let c=[];i&&(c=ie(o,p));const s=[];p.forEach(f=>{const d=e[f];d&&s.push(`grid-${f}-${String(d)}`)});const l={root:["root",i&&"container",r&&"item",u&&"zeroMinWidth",...c,t!=="row"&&`direction-xs-${String(t)}`,a!=="wrap"&&`wrap-xs-${String(a)}`,...s]};return D(l,F,n)},se=b.forwardRef(function(n,i){const t=_({props:n,name:"MuiGrid"}),{breakpoints:r}=U(),o=Z(t),{className:a,columns:u,columnSpacing:p,component:c="div",container:s=!1,direction:l="row",item:f=!1,rowSpacing:d,spacing:w=0,wrap:M="wrap",zeroMinWidth:V=!1}=o,v=I(o,Q),P=d||w,j=p||w,E=b.useContext(z),G=s?u||12:E,W={},y=x({},v);r.keys.forEach(h=>{v[h]!=null&&(W[h]=v[h],delete y[h])});const C=x({},o,{columns:G,container:s,direction:l,item:f,rowSpacing:P,columnSpacing:j,wrap:M,zeroMinWidth:V,spacing:w},W,{breakpoints:r.keys}),R=oe(C);return N(z.Provider,{value:G,children:N(te,x({ownerState:C,className:L(R.root,a),as:c,ref:i},y))})}),fe=se;export{fe as G};
//# sourceMappingURL=Grid-2910eff8.js.map
