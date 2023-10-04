import{r as l}from"./index-570b25c1.js";import{c as I}from"./clsx.m-5a18bdae.js";import{g as m,s as w,r as F,c as P}from"./styled-34470687.js";import{u as S}from"./useThemeProps-4eed9f55.js";import{L as x}from"./Menu-5cbf8d5d.js";import{g as f}from"./generateUtilityClasses-379cd6e3.js";import{j as $}from"./jsx-runtime-390e5fc8.js";import{B as G}from"./ButtonBase-c1676a07.js";import{d as M}from"./dividerClasses-3c222898.js";import{a as c}from"./createTheme-cf9cd31a.js";import{u as N}from"./useEnhancedEffect-460150e6.js";import{u as j}from"./useForkRef-153a0a89.js";function it(t){return m("MuiListItemIcon",t)}const E=f("MuiListItemIcon",["root","alignItemsFlexStart"]),O=E;function rt(t){return m("MuiListItemText",t)}const H=f("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),L=H;function z(t){return m("MuiMenuItem",t)}const D=f("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),r=D,W=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.divider&&e.divider,!s.disableGutters&&e.gutters]},q=t=>{const{disabled:e,dense:s,divider:a,disableGutters:n,selected:d,classes:o}=t,i=P({root:["root",s&&"dense",e&&"disabled",!n&&"gutters",a&&"divider",d&&"selected"]},z,o);return{...o,...i}},A=w(G,{shouldForwardProp:t=>F(t)||t==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:W})(({theme:t,ownerState:e})=>({...t.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap",...!e.disableGutters&&{paddingLeft:16,paddingRight:16},...e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${r.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:c(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${r.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:c(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${r.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:c(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:c(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${r.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${r.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${M.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${M.inset}`]:{marginLeft:52},[`& .${L.root}`]:{marginTop:0,marginBottom:0},[`& .${L.inset}`]:{paddingLeft:36},[`& .${O.root}`]:{minWidth:36},...!e.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},...e.dense&&{minHeight:32,paddingTop:4,paddingBottom:4,...t.typography.body2,[`& .${O.root} svg`]:{fontSize:"1.25rem"}}})),J=l.forwardRef(function(e,s){const a=S({props:e,name:"MuiMenuItem"}),{autoFocus:n=!1,component:d="li",dense:o=!1,divider:g=!1,disableGutters:i=!1,focusVisibleClassName:k,role:T="menuitem",tabIndex:b,className:R,...B}=a,v=l.useContext(x),y=l.useMemo(()=>({dense:o||v.dense||!1,disableGutters:i}),[v.dense,o,i]),p=l.useRef(null);N(()=>{n&&p.current&&p.current.focus()},[n]);const U={...a,dense:y.dense,divider:g,disableGutters:i},u=q(a),V=j(p,s);let C;return a.disabled||(C=b!==void 0?b:-1),$(x.Provider,{value:y,children:$(A,{ref:V,role:T,tabIndex:C,component:d,focusVisibleClassName:I(u.focusVisible,k),className:I(u.root,R),...B,ownerState:U,classes:u})})}),nt=J;export{nt as M,rt as a,it as g,L as l};
//# sourceMappingURL=MenuItem-60137032.js.map
