import{r as k}from"./index-DcWiA9TO.js";import{g as S,c as $}from"./generateUtilityClass-CVWqFxsA.js";import{c as f}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{S as y}from"./SwitchBase-Z9YgLJlx.js";import{m as l}from"./memoTheme-D-rVhYRp.js";import{g as x}from"./generateUtilityClasses-BGOCnVj7.js";import{j as n}from"./jsx-runtime-CcL-W3nW.js";import{u as C}from"./DefaultPropsProvider-_cNB_dWy.js";import{s as d,c as z}from"./styled-CF1hcdwO.js";import{f as s,a as m,l as R,g as B}from"./identifier-Dtqimryx.js";function j(t){return S("MuiSwitch",t)}const o=x("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),M=t=>{const{classes:a,edge:r,size:c,color:p,checked:u,disabled:g}=t,h={root:["root",r&&`edge${s(r)}`,`size${s(c)}`],switchBase:["switchBase",`color${s(p)}`,u&&"checked",g&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},v=z(h,j,a);return{...a,...v}},T=d("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,r.edge&&a[`edge${s(r.edge)}`],a[`size${s(r.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${o.thumb}`]:{width:16,height:16},[`& .${o.switchBase}`]:{padding:4,[`&.${o.checked}`]:{transform:"translateX(16px)"}}}}]}),O=d(y,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.switchBase,{[`& .${o.input}`]:a.input},r.color!=="default"&&a[`color${s(r.color)}`]]}})(l(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${o.checked}`]:{transform:"translateX(20px)"},[`&.${o.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${o.checked} + .${o.track}`]:{opacity:.5},[`&.${o.disabled} + .${o.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${o.input}`]:{left:"-100%",width:"300%"}})),l(({theme:t})=>({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:m(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(t.palette).filter(f(["light"])).map(([a])=>({props:{color:a},style:{[`&.${o.checked}`]:{color:(t.vars||t).palette[a].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[a].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:m(t.palette[a].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${o.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${a}DisabledColor`]:`${t.palette.mode==="light"?R(t.palette[a].main,.62):B(t.palette[a].main,.55)}`}},[`&.${o.checked} + .${o.track}`]:{backgroundColor:(t.vars||t).palette[a].main}}}))]}))),D=d("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,a)=>a.track})(l(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`}))),I=d("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,a)=>a.thumb})(l(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),G=k.forwardRef(function(a,r){const c=C({props:a,name:"MuiSwitch"}),{className:p,color:u="primary",edge:g=!1,size:h="medium",sx:v,...b}=c,e={...c,color:u,edge:g,size:h},i=M(e),w=n.jsx(I,{className:i.thumb,ownerState:e});return n.jsxs(T,{className:$(i.root,p),sx:v,ownerState:e,children:[n.jsx(O,{type:"checkbox",icon:w,checkedIcon:w,ref:r,ownerState:e,...b,classes:{...i,root:i.switchBase}}),n.jsx(D,{className:i.track,ownerState:e})]})});export{G as S};
