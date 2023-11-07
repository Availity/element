import{_ as n,a as c,b as P}from"./createTheme-e6b56ddb.js";import{r as d}from"./index-570b25c1.js";import{c as x}from"./clsx-8416b751.js";import{g as f,s as U,r as w,c as G}from"./styled-188025da.js";import{u as S}from"./useThemeProps-db7202c2.js";import{L as $}from"./Menu-05dd7900.js";import{g}from"./generateUtilityClasses-f776b170.js";import{j as M}from"./jsx-runtime-390e5fc8.js";import{B as j}from"./ButtonBase-dcf5e891.js";import{d as O}from"./dividerClasses-d4e8510c.js";import{u as _}from"./useEnhancedEffect-460150e6.js";import{u as E}from"./useForkRef-153a0a89.js";function le(e){return f("MuiListItemIcon",e)}const H=g("MuiListItemIcon",["root","alignItemsFlexStart"]),L=H;function ce(e){return f("MuiListItemText",e)}const z=g("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),k=z;function D(e){return f("MuiMenuItem",e)}const W=g("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),r=W,q=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],A=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.divider&&t.divider,!s.disableGutters&&t.gutters]},J=e=>{const{disabled:t,dense:s,divider:a,disableGutters:l,selected:p,classes:o}=e,i=G({root:["root",s&&"dense",t&&"disabled",!l&&"gutters",a&&"divider",p&&"selected"]},D,o);return n({},o,i)},K=U(j,{shouldForwardProp:e=>w(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:A})(({theme:e,ownerState:t})=>n({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${r.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${r.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${r.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${r.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${r.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${O.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${O.inset}`]:{marginLeft:52},[`& .${k.root}`]:{marginTop:0,marginBottom:0},[`& .${k.inset}`]:{paddingLeft:36},[`& .${L.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&n({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${L.root} svg`]:{fontSize:"1.25rem"}}))),Q=d.forwardRef(function(t,s){const a=S({props:t,name:"MuiMenuItem"}),{autoFocus:l=!1,component:p="li",dense:o=!1,divider:b=!1,disableGutters:i=!1,focusVisibleClassName:T,role:R="menuitem",tabIndex:v,className:B}=a,V=P(a,q),y=d.useContext($),C=d.useMemo(()=>({dense:o||y.dense||!1,disableGutters:i}),[y.dense,o,i]),u=d.useRef(null);_(()=>{l&&u.current&&u.current.focus()},[l]);const F=n({},a,{dense:C.dense,divider:b,disableGutters:i}),m=J(a),N=E(u,s);let I;return a.disabled||(I=v!==void 0?v:-1),M($.Provider,{value:C,children:M(K,n({ref:N,role:R,tabIndex:I,component:p,focusVisibleClassName:x(m.focusVisible,T),className:x(m.root,B)},V,{ownerState:F,classes:m}))})}),de=Q;export{de as M,ce as a,le as g,k as l};
//# sourceMappingURL=MenuItem-ee886946.js.map
