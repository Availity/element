import{r as z}from"./index-BgYLq7fD.js";import{g as x,c as I}from"./generateUtilityClass-BeVSWKCg.js";import{m as C}from"./memoTheme-CpoNRPWX.js";import{g as R}from"./generateUtilityClasses-whvyra8-.js";import{j as h}from"./jsx-runtime-BTJTZTIL.js";import{u as w}from"./DefaultPropsProvider-CWkNlXkE.js";import{s as b,c as j}from"./styled-CKuRQFSa.js";import{f as y}from"./identifier-CudAVvBZ.js";function M(o){return x("MuiSvgIcon",o)}R("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const A=o=>{const{color:r,fontSize:t,classes:e}=o,s={root:["root",r!=="inherit"&&`color${y(r)}`,`fontSize${y(t)}`]};return j(s,M,e)},E=b("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o;return[r.root,t.color!=="inherit"&&r[`color${y(t.color)}`],r[`fontSize${y(t.fontSize)}`]]}})(C(({theme:o})=>{var r,t,e,s,a,d,n,v,c,f,l,m,g,p;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:(s=(r=o.transitions)==null?void 0:r.create)==null?void 0:s.call(r,"fill",{duration:(e=(t=(o.vars??o).transitions)==null?void 0:t.duration)==null?void 0:e.shorter}),variants:[{props:i=>!i.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:((d=(a=o.typography)==null?void 0:a.pxToRem)==null?void 0:d.call(a,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:((v=(n=o.typography)==null?void 0:n.pxToRem)==null?void 0:v.call(n,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:((f=(c=o.typography)==null?void 0:c.pxToRem)==null?void 0:f.call(c,35))||"2.1875rem"}},...Object.entries((o.vars??o).palette).filter(([,i])=>i&&i.main).map(([i])=>{var S,u;return{props:{color:i},style:{color:(u=(S=(o.vars??o).palette)==null?void 0:S[i])==null?void 0:u.main}}}),{props:{color:"action"},style:{color:(m=(l=(o.vars??o).palette)==null?void 0:l.action)==null?void 0:m.active}},{props:{color:"disabled"},style:{color:(p=(g=(o.vars??o).palette)==null?void 0:g.action)==null?void 0:p.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),T=z.forwardRef(function(r,t){const e=w({props:r,name:"MuiSvgIcon"}),{children:s,className:a,color:d="inherit",component:n="svg",fontSize:v="medium",htmlColor:c,inheritViewBox:f=!1,titleAccess:l,viewBox:m="0 0 24 24",...g}=e,p=z.isValidElement(s)&&s.type==="svg",i={...e,color:d,component:n,fontSize:v,instanceFontSize:r.fontSize,inheritViewBox:f,viewBox:m,hasSvgAsChild:p},S={};f||(S.viewBox=m);const u=A(i);return h.jsxs(E,{as:n,className:I(u.root,a),focusable:"false",color:c,"aria-hidden":l?void 0:!0,role:l?"img":void 0,ref:t,...S,...g,...p&&s.props,ownerState:i,children:[p?s.props.children:s,l?h.jsx("title",{children:l}):null]})});T.muiName="SvgIcon";export{T as S};
