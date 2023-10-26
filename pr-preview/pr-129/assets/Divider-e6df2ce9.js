import{_ as e,a as w,b as D}from"./createTheme-e6b56ddb.js";import{r as C}from"./index-570b25c1.js";import{c as R}from"./clsx-8416b751.js";import{s as f,c as L}from"./styled-188025da.js";import{u as W}from"./useThemeProps-db7202c2.js";import{g as $}from"./dividerClasses-d4e8510c.js";import{j as v}from"./jsx-runtime-390e5fc8.js";const I=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],B=t=>{const{absolute:i,children:r,classes:n,flexItem:c,light:l,orientation:o,textAlign:a,variant:s}=t;return L({root:["root",i&&"absolute",s,l&&"light",o==="vertical"&&"vertical",c&&"flexItem",r&&"withChildren",r&&o==="vertical"&&"withChildrenVertical",a==="right"&&o!=="vertical"&&"textAlignRight",a==="left"&&o!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",o==="vertical"&&"wrapperVertical"]},$,n)},N=f("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:r}=t;return[i.root,r.absolute&&i.absolute,i[r.variant],r.light&&i.light,r.orientation==="vertical"&&i.vertical,r.flexItem&&i.flexItem,r.children&&i.withChildren,r.children&&r.orientation==="vertical"&&i.withChildrenVertical,r.textAlign==="right"&&r.orientation!=="vertical"&&i.textAlignRight,r.textAlign==="left"&&r.orientation!=="vertical"&&i.textAlignLeft]}})(({theme:t,ownerState:i})=>e({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:w(t.palette.divider,.08)},i.variant==="inset"&&{marginLeft:72},i.variant==="middle"&&i.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},i.variant==="middle"&&i.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},i.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:t})=>e({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:t,ownerState:i})=>e({},i.children&&i.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}}),({theme:t,ownerState:i})=>e({},i.children&&i.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}}),({ownerState:t})=>e({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),T=f("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,i)=>{const{ownerState:r}=t;return[i.wrapper,r.orientation==="vertical"&&i.wrapperVertical]}})(({theme:t,ownerState:i})=>e({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},i.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),m=C.forwardRef(function(i,r){const n=W({props:i,name:"MuiDivider"}),{absolute:c=!1,children:l,className:o,component:a=l?"div":"hr",flexItem:s=!1,light:p=!1,orientation:b="horizontal",role:g=a!=="hr"?"separator":void 0,textAlign:u="center",variant:x="fullWidth"}=n,A=D(n,I),d=e({},n,{absolute:c,component:a,flexItem:s,light:p,orientation:b,role:g,textAlign:u,variant:x}),h=B(d);return v(N,e({as:a,className:R(h.root,o),role:g,ref:r,ownerState:d},A,{children:l?v(T,{className:h.wrapper,ownerState:d,children:l}):null}))});m.muiSkipListHighlight=!0;const U=m;export{U as D};
//# sourceMappingURL=Divider-e6df2ce9.js.map
