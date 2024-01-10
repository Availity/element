import{_ as o,b as R,a as I}from"./createTheme-3fee607a.js";import{r as l}from"./index-570b25c1.js";import{c as x}from"./clsx-b831246b.js";import{g as N,s as G,c as T}from"./styled-523cb007.js";import{u as D}from"./useThemeProps-98dc6282.js";import{a as L}from"./List-446c66c9.js";import{g as M}from"./generateUtilityClasses-b58f947a.js";import{a as v,j as w}from"./jsx-runtime-a3bcee63.js";import{u as tt}from"./useEnhancedEffect-460150e6.js";import{B as et}from"./ButtonBase-44753119.js";import{i as st}from"./isMuiElement-6907f060.js";import{u as ot}from"./useForkRef-153a0a89.js";import{i as E}from"./isHostComponent-73d6e646.js";function at(t){return N("MuiListItem",t)}const nt=M("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),m=nt;function Bt(t){return N("MuiListItemButton",t)}const it=M("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),rt=it;function ct(t){return N("MuiListItemSecondaryAction",t)}M("MuiListItemSecondaryAction",["root","disableGutters"]);const lt=["className"],dt=t=>{const{disableGutters:e,classes:s}=t;return T({root:["root",e&&"disableGutters"]},ct,s)},pt=G("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>o({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),z=l.forwardRef(function(e,s){const a=D({props:e,name:"MuiListItemSecondaryAction"}),{className:n}=a,i=R(a,lt),d=l.useContext(L),p=o({},a,{disableGutters:d.disableGutters}),f=dt(p);return v(pt,o({className:x(f.root,n),ownerState:p,ref:s},i))});z.muiName="ListItemSecondaryAction";const ut=z,mt=["className"],ft=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],gt=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},bt=t=>{const{alignItems:e,button:s,classes:a,dense:n,disabled:i,disableGutters:d,disablePadding:p,divider:f,hasSecondaryAction:g,selected:A}=t;return T({root:["root",n&&"dense",!d&&"gutters",!p&&"padding",f&&"divider",i&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",g&&"secondaryAction",A&&"selected"],container:["container"]},at,a)},vt=G("div",{name:"MuiListItem",slot:"Root",overridesResolver:gt})(({theme:t,ownerState:e})=>o({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&o({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${rt.root}`]:{paddingRight:48}},{[`&.${m.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${m.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:I(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${m.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:I(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${m.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${m.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:I(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:I(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),Ct=G("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),yt=l.forwardRef(function(e,s){const a=D({props:e,name:"MuiListItem"}),{alignItems:n="center",autoFocus:i=!1,button:d=!1,children:p,className:f,component:g,components:A={},componentsProps:O={},ContainerComponent:h="li",ContainerProps:{className:H}={},dense:B=!1,disabled:k=!1,disableGutters:$=!1,disablePadding:W=!1,divider:Y=!1,focusVisibleClassName:q,secondaryAction:V,selected:J=!1,slotProps:K={},slots:Q={}}=a,X=R(a.ContainerProps,mt),Z=R(a,ft),F=l.useContext(L),S=l.useMemo(()=>({dense:B||F.dense||!1,alignItems:n,disableGutters:$}),[n,F.dense,B,$]),P=l.useRef(null);tt(()=>{i&&P.current&&P.current.focus()},[i]);const u=l.Children.toArray(p),U=u.length&&st(u[u.length-1],["ListItemSecondaryAction"]),C=o({},a,{alignItems:n,autoFocus:i,button:d,dense:S.dense,disabled:k,disableGutters:$,disablePadding:W,divider:Y,hasSecondaryAction:U,selected:J}),_=bt(C),j=ot(P,s),y=Q.root||A.Root||vt,b=K.root||O.root||{},r=o({className:x(_.root,b.className,f),disabled:k},Z);let c=g||"li";return d&&(r.component=g||"div",r.focusVisibleClassName=x(m.focusVisible,q),c=et),U?(c=!r.component&&!g?"div":c,h==="li"&&(c==="li"?c="div":r.component==="li"&&(r.component="div")),v(L.Provider,{value:S,children:w(Ct,o({as:h,className:x(_.container,H),ref:j,ownerState:C},X,{children:[v(y,o({},b,!E(y)&&{as:c,ownerState:o({},C,b.ownerState)},r,{children:u})),u.pop()]}))})):v(L.Provider,{value:S,children:w(y,o({},b,{as:c,ref:j},!E(y)&&{ownerState:o({},C,b.ownerState)},r,{children:[u,V&&v(ut,{children:V})]}))})}),kt=yt;export{kt as L,Bt as g,rt as l};
//# sourceMappingURL=ListItem-4f8e5ad1.js.map
