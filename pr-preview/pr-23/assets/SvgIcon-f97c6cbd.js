import{r as _}from"./index-ccf6a75d.js";import{a as x,g as z,s as I,c as w,b as C}from"./styled-a59e08e5.js";import{c as g,u as R}from"./useThemeProps-cd8be639.js";import{a as b,j as M}from"./jsx-runtime-58698645.js";function T(o){return x("MuiSvgIcon",o)}z("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const U=o=>{const{color:t,fontSize:e,classes:i}=o,l={root:["root",t!=="inherit"&&`color${g(t)}`,`fontSize${g(e)}`]};return C(l,T,i)},j=I("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,e.color!=="inherit"&&t[`color${g(e.color)}`],t[`fontSize${g(e.fontSize)}`]]}})(({theme:o,ownerState:t})=>{var e,i,l,m,a,s,c,v,r,n,p,f,u,d,S,h,$;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(e=o.transitions)==null||(i=e.create)==null?void 0:i.call(e,"fill",{duration:(l=o.transitions)==null||(m=l.duration)==null?void 0:m.shorter}),fontSize:{inherit:"inherit",small:((a=o.typography)==null||(s=a.pxToRem)==null?void 0:s.call(a,20))||"1.25rem",medium:((c=o.typography)==null||(v=c.pxToRem)==null?void 0:v.call(c,24))||"1.5rem",large:((r=o.typography)==null||(n=r.pxToRem)==null?void 0:n.call(r,35))||"2.1875rem"}[t.fontSize],color:(p=(f=(o.vars||o).palette)==null||(u=f[t.color])==null?void 0:u.main)!=null?p:{action:(d=(o.vars||o).palette)==null||(S=d.action)==null?void 0:S.active,disabled:(h=(o.vars||o).palette)==null||($=h.action)==null?void 0:$.disabled,inherit:void 0}[t.color]}}),y=_.forwardRef(function(t,e){const i=R({props:t,name:"MuiSvgIcon"}),{children:l,className:m,color:a="inherit",component:s="svg",fontSize:c="medium",htmlColor:v,inheritViewBox:r=!1,titleAccess:n,viewBox:p="0 0 24 24",...f}=i,u={...i,color:a,component:s,fontSize:c,instanceFontSize:t.fontSize,inheritViewBox:r,viewBox:p},d={};r||(d.viewBox=p);const S=U(u);return b(j,{as:s,className:w(S.root,m),focusable:"false",color:v,"aria-hidden":n?void 0:!0,role:n?"img":void 0,ref:e,...d,...f,ownerState:u,children:[l,n?M("title",{children:n}):null]})});y.muiName="SvgIcon";const E=y;export{E as S};
//# sourceMappingURL=SvgIcon-f97c6cbd.js.map
