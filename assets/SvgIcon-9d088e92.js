import{g as x,a as z,s as I,f as S,u as w,b as C,_ as y,c as b,e as R}from"./useThemeProps-10c808b6.js";import{r as B}from"./index-f1f749bf.js";import{a as M,j as T}from"./jsx-runtime-670450c2.js";function j(o){return x("MuiSvgIcon",o)}z("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const N=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],U=o=>{const{color:e,fontSize:t,classes:i}=o,l={root:["root",e!=="inherit"&&`color${S(e)}`,`fontSize${S(t)}`]};return R(l,j,i)},A=I("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.color!=="inherit"&&e[`color${S(t.color)}`],e[`fontSize${S(t.fontSize)}`]]}})(({theme:o,ownerState:e})=>{var t,i,l,m,a,s,c,v,r,n,p,h,d,u,f,g,$;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(t=o.transitions)==null||(i=t.create)==null?void 0:i.call(t,"fill",{duration:(l=o.transitions)==null||(m=l.duration)==null?void 0:m.shorter}),fontSize:{inherit:"inherit",small:((a=o.typography)==null||(s=a.pxToRem)==null?void 0:s.call(a,20))||"1.25rem",medium:((c=o.typography)==null||(v=c.pxToRem)==null?void 0:v.call(c,24))||"1.5rem",large:((r=o.typography)==null||(n=r.pxToRem)==null?void 0:n.call(r,35))||"2.1875rem"}[e.fontSize],color:(p=(h=(o.vars||o).palette)==null||(d=h[e.color])==null?void 0:d.main)!=null?p:{action:(u=(o.vars||o).palette)==null||(f=u.action)==null?void 0:f.active,disabled:(g=(o.vars||o).palette)==null||($=g.action)==null?void 0:$.disabled,inherit:void 0}[e.color]}}),_=B.forwardRef(function(e,t){const i=w({props:e,name:"MuiSvgIcon"}),{children:l,className:m,color:a="inherit",component:s="svg",fontSize:c="medium",htmlColor:v,inheritViewBox:r=!1,titleAccess:n,viewBox:p="0 0 24 24"}=i,h=C(i,N),d=y({},i,{color:a,component:s,fontSize:c,instanceFontSize:e.fontSize,inheritViewBox:r,viewBox:p}),u={};r||(u.viewBox=p);const f=U(d);return M(A,y({as:s,className:b(f.root,m),focusable:"false",color:v,"aria-hidden":n?void 0:!0,role:n?"img":void 0,ref:t},u,h,{ownerState:d,children:[l,n?T("title",{children:n}):null]}))});_.muiName="SvgIcon";const P=_;export{P as S};
//# sourceMappingURL=SvgIcon-9d088e92.js.map