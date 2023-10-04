import{r as x}from"./index-570b25c1.js";import{c as w}from"./clsx.m-5a18bdae.js";import{s as v,c as A}from"./styled-34470687.js";import{u as C}from"./useThemeProps-4eed9f55.js";import{g as D}from"./dividerClasses-3c222898.js";import{j as h}from"./jsx-runtime-390e5fc8.js";import{a as R}from"./createTheme-cf9cd31a.js";const W=t=>{const{absolute:i,children:r,classes:n,flexItem:l,light:o,orientation:e,textAlign:a,variant:c}=t;return A({root:["root",i&&"absolute",c,o&&"light",e==="vertical"&&"vertical",l&&"flexItem",r&&"withChildren",r&&e==="vertical"&&"withChildrenVertical",a==="right"&&e!=="vertical"&&"textAlignRight",a==="left"&&e!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",e==="vertical"&&"wrapperVertical"]},D,n)},$=v("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:r}=t;return[i.root,r.absolute&&i.absolute,i[r.variant],r.light&&i.light,r.orientation==="vertical"&&i.vertical,r.flexItem&&i.flexItem,r.children&&i.withChildren,r.children&&r.orientation==="vertical"&&i.withChildrenVertical,r.textAlign==="right"&&r.orientation!=="vertical"&&i.textAlignRight,r.textAlign==="left"&&r.orientation!=="vertical"&&i.textAlignLeft]}})(({theme:t,ownerState:i})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin",...i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},...i.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:R(t.palette.divider,.08)},...i.variant==="inset"&&{marginLeft:72},...i.variant==="middle"&&i.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},...i.variant==="middle"&&i.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},...i.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},...i.flexItem&&{alignSelf:"stretch",height:"auto"}}),({ownerState:t})=>({...t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}}),({theme:t,ownerState:i})=>({...i.children&&i.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}}}),({theme:t,ownerState:i})=>({...i.children&&i.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}}}),({ownerState:t})=>({...t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},...t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}})),I=v("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,i)=>{const{ownerState:r}=t;return[i.wrapper,r.orientation==="vertical"&&i.wrapperVertical]}})(({theme:t,ownerState:i})=>({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`,...i.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`}})),L=x.forwardRef(function(i,r){const n=C({props:i,name:"MuiDivider"}),{absolute:l=!1,children:o,className:e,component:a=o?"div":"hr",flexItem:c=!1,light:s=!1,orientation:f="horizontal",role:p=a!=="hr"?"separator":void 0,textAlign:m="center",variant:b="fullWidth",...u}=n,d={...n,absolute:l,component:a,flexItem:c,light:s,orientation:f,role:p,textAlign:m,variant:b},g=W(d);return h($,{as:a,className:w(g.root,e),role:p,ref:r,ownerState:d,...u,children:o?h(I,{className:g.wrapper,ownerState:d,children:o}):null})}),z=L;export{z as M};
//# sourceMappingURL=Divider-647f498d.js.map
