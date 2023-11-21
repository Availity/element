import{r as u}from"./index-8db94870.js";import{s as v,c as w,a as A}from"./styled-48536e78.js";import{b as C,c as D}from"./useThemeProps-4e8cc45e.js";import{g as R}from"./dividerClasses-34e8f2f7.js";import{j as h}from"./jsx-runtime-91a467a5.js";const W=t=>{const{absolute:i,children:r,classes:n,flexItem:l,light:o,orientation:e,textAlign:a,variant:c}=t;return A({root:["root",i&&"absolute",c,o&&"light",e==="vertical"&&"vertical",l&&"flexItem",r&&"withChildren",r&&e==="vertical"&&"withChildrenVertical",a==="right"&&e!=="vertical"&&"textAlignRight",a==="left"&&e!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",e==="vertical"&&"wrapperVertical"]},R,n)},$=v("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:r}=t;return[i.root,r.absolute&&i.absolute,i[r.variant],r.light&&i.light,r.orientation==="vertical"&&i.vertical,r.flexItem&&i.flexItem,r.children&&i.withChildren,r.children&&r.orientation==="vertical"&&i.withChildrenVertical,r.textAlign==="right"&&r.orientation!=="vertical"&&i.textAlignRight,r.textAlign==="left"&&r.orientation!=="vertical"&&i.textAlignLeft]}})(({theme:t,ownerState:i})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin",...i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},...i.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:C(t.palette.divider,.08)},...i.variant==="inset"&&{marginLeft:72},...i.variant==="middle"&&i.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},...i.variant==="middle"&&i.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},...i.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},...i.flexItem&&{alignSelf:"stretch",height:"auto"}}),({ownerState:t})=>({...t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}}),({theme:t,ownerState:i})=>({...i.children&&i.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}}}),({theme:t,ownerState:i})=>({...i.children&&i.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}}}),({ownerState:t})=>({...t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},...t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}})),I=v("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,i)=>{const{ownerState:r}=t;return[i.wrapper,r.orientation==="vertical"&&i.wrapperVertical]}})(({theme:t,ownerState:i})=>({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`,...i.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`}})),L=u.forwardRef(function(i,r){const n=D({props:i,name:"MuiDivider"}),{absolute:l=!1,children:o,className:e,component:a=o?"div":"hr",flexItem:c=!1,light:s=!1,orientation:f="horizontal",role:p=a!=="hr"?"separator":void 0,textAlign:b="center",variant:m="fullWidth",...x}=n,d={...n,absolute:l,component:a,flexItem:c,light:s,orientation:f,role:p,textAlign:b,variant:m},g=W(d);return h($,{as:a,className:w(g.root,e),role:p,ref:r,ownerState:d,...x,children:o?h(I,{className:g.wrapper,ownerState:d,children:o}):null})}),j=L;export{j as M};
//# sourceMappingURL=Divider-8b943f8f.js.map