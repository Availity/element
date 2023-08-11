import{r as l}from"./index-8db94870.js";import{g as m,b as f,s as w,r as F,c as I,a as P}from"./styled-a84420af.js";import{b as c,c as S}from"./useThemeProps-2498ecc2.js";import{L as x}from"./Menu-ec053f5a.js";import{j as $}from"./jsx-runtime-91a467a5.js";import{B as G,a as N}from"./ButtonBase-3eb7f77d.js";import{d as M}from"./dividerClasses-d158f676.js";import{u as j}from"./useForkRef-2674f3de.js";function te(e){return f("MuiListItemIcon",e)}const E=m("MuiListItemIcon",["root","alignItemsFlexStart"]),O=E;function se(e){return f("MuiListItemText",e)}const H=m("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),L=H;function z(e){return f("MuiMenuItem",e)}const D=m("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),n=D,W=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.divider&&t.divider,!s.disableGutters&&t.gutters]},q=e=>{const{disabled:t,dense:s,divider:a,disableGutters:r,selected:d,classes:o}=e,i=P({root:["root",s&&"dense",t&&"disabled",!r&&"gutters",a&&"divider",d&&"selected"]},z,o);return{...o,...i}},A=w(G,{shouldForwardProp:e=>F(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:W})(({theme:e,ownerState:t})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap",...!t.disableGutters&&{paddingLeft:16,paddingRight:16},...t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${n.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${M.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${M.inset}`]:{marginLeft:52},[`& .${L.root}`]:{marginTop:0,marginBottom:0},[`& .${L.inset}`]:{paddingLeft:36},[`& .${O.root}`]:{minWidth:36},...!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},...t.dense&&{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${O.root} svg`]:{fontSize:"1.25rem"}}})),J=l.forwardRef(function(t,s){const a=S({props:t,name:"MuiMenuItem"}),{autoFocus:r=!1,component:d="li",dense:o=!1,divider:g=!1,disableGutters:i=!1,focusVisibleClassName:k,role:T="menuitem",tabIndex:b,className:R,...B}=a,v=l.useContext(x),y=l.useMemo(()=>({dense:o||v.dense||!1,disableGutters:i}),[v.dense,o,i]),p=l.useRef(null);N(()=>{r&&p.current&&p.current.focus()},[r]);const U={...a,dense:y.dense,divider:g,disableGutters:i},u=q(a),V=j(p,s);let C;return a.disabled||(C=b!==void 0?b:-1),$(x.Provider,{value:y,children:$(A,{ref:V,role:T,tabIndex:C,component:d,focusVisibleClassName:I(u.focusVisible,k),className:I(u.root,R),...B,ownerState:U,classes:u})})}),ae=J;export{ae as M,se as a,te as g,L as l};
//# sourceMappingURL=MenuItem-f8bafed0.js.map
