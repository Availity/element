import{r as p}from"./index-570b25c1.js";import{g as G,b as J,s as N,c as $,a as Q}from"./styled-2191822d.js";import{c as X}from"./createSvgIcon-cafa5f0c.js";import{j as R,a as Y}from"./jsx-runtime-390e5fc8.js";import{e as r,b as d,c as Z}from"./useThemeProps-66ab754c.js";import{B as V}from"./ButtonBase-121cbb7f.js";import{u as _}from"./useForkRef-153a0a89.js";const h=X(R("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function w(a){return J("MuiChip",a)}const aa=G("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),l=aa,oa=a=>{const{classes:o,disabled:n,size:e,color:i,iconColor:C,onDelete:u,clickable:t,variant:s}=a,f={root:["root",s,n&&"disabled",`size${r(e)}`,`color${r(i)}`,t&&"clickable",t&&`clickableColor${r(i)}`,u&&"deletable",u&&`deletableColor${r(i)}`,`${s}${r(i)}`],label:["label",`label${r(e)}`],avatar:["avatar",`avatar${r(e)}`,`avatarColor${r(i)}`],icon:["icon",`icon${r(e)}`,`iconColor${r(C)}`],deleteIcon:["deleteIcon",`deleteIcon${r(e)}`,`deleteIconColor${r(i)}`,`deleteIcon${r(s)}Color${r(i)}`]};return Q(f,w,o)},la=N("div",{name:"MuiChip",slot:"Root",overridesResolver:(a,o)=>{const{ownerState:n}=a,{color:e,iconColor:i,clickable:C,onDelete:u,size:t,variant:s}=n;return[{[`& .${l.avatar}`]:o.avatar},{[`& .${l.avatar}`]:o[`avatar${r(t)}`]},{[`& .${l.avatar}`]:o[`avatarColor${r(e)}`]},{[`& .${l.icon}`]:o.icon},{[`& .${l.icon}`]:o[`icon${r(t)}`]},{[`& .${l.icon}`]:o[`iconColor${r(i)}`]},{[`& .${l.deleteIcon}`]:o.deleteIcon},{[`& .${l.deleteIcon}`]:o[`deleteIcon${r(t)}`]},{[`& .${l.deleteIcon}`]:o[`deleteIconColor${r(e)}`]},{[`& .${l.deleteIcon}`]:o[`deleteIcon${r(s)}Color${r(e)}`]},o.root,o[`size${r(t)}`],o[`color${r(e)}`],C&&o.clickable,C&&e!=="default"&&o[`clickableColor${r(e)})`],u&&o.deletable,u&&e!=="default"&&o[`deletableColor${r(e)}`],o[s],o[`${s}${r(e)}`]]}})(({theme:a,ownerState:o})=>{const n=a.palette.mode==="light"?a.palette.grey[700]:a.palette.grey[300];return{maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${l.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${l.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:n,fontSize:a.typography.pxToRem(12)},[`& .${l.avatarColorPrimary}`]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},[`& .${l.avatarColorSecondary}`]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},[`& .${l.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},[`& .${l.icon}`]:{marginLeft:5,marginRight:-6,...o.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},...o.iconColor===o.color&&{color:a.vars?a.vars.palette.Chip.defaultIconColor:n,...o.color!=="default"&&{color:"inherit"}}},[`& .${l.deleteIcon}`]:{WebkitTapHighlightColor:"transparent",color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.26)`:d(a.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.4)`:d(a.palette.text.primary,.4)},...o.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},...o.color!=="default"&&{color:a.vars?`rgba(${a.vars.palette[o.color].contrastTextChannel} / 0.7)`:d(a.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].contrastText}}},...o.size==="small"&&{height:24},...o.color!=="default"&&{backgroundColor:(a.vars||a).palette[o.color].main,color:(a.vars||a).palette[o.color].contrastText},...o.onDelete&&{[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:d(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}},...o.onDelete&&o.color!=="default"&&{[`&.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}}}},({theme:a,ownerState:o})=>({...o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:d(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:d(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}},...o.clickable&&o.color!=="default"&&{[`&:hover, &.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}}}),({theme:a,ownerState:o})=>({...o.variant==="outlined"&&{backgroundColor:"transparent",border:a.vars?`1px solid ${a.vars.palette.Chip.defaultBorder}`:`1px solid ${a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[700]}`,[`&.${l.clickable}:hover`]:{backgroundColor:(a.vars||a).palette.action.hover},[`&.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`& .${l.avatar}`]:{marginLeft:4},[`& .${l.avatarSmall}`]:{marginLeft:2},[`& .${l.icon}`]:{marginLeft:4},[`& .${l.iconSmall}`]:{marginLeft:2},[`& .${l.deleteIcon}`]:{marginRight:5},[`& .${l.deleteIconSmall}`]:{marginRight:3}},...o.variant==="outlined"&&o.color!=="default"&&{color:(a.vars||a).palette[o.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:d(a.palette[o.color].main,.7)}`,[`&.${l.clickable}:hover`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:d(a.palette[o.color].main,a.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.focusOpacity})`:d(a.palette[o.color].main,a.palette.action.focusOpacity)},[`& .${l.deleteIcon}`]:{color:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:d(a.palette[o.color].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].main}}}})),ra=N("span",{name:"MuiChip",slot:"Label",overridesResolver:(a,o)=>{const{ownerState:n}=a,{size:e}=n;return[o.label,o[`label${r(e)}`]]}})(({ownerState:a})=>({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap",...a.size==="small"&&{paddingLeft:8,paddingRight:8}}));function E(a){return a.key==="Backspace"||a.key==="Delete"}const ea=p.forwardRef(function(o,n){const e=Z({props:o,name:"MuiChip"}),{avatar:i,className:C,clickable:u,color:t="default",component:s,deleteIcon:f,disabled:y=!1,icon:g,label:S,onClick:z,onDelete:v,onKeyDown:O,onKeyUp:P,size:K="medium",variant:U="filled",tabIndex:F,skipFocusWhenDisabled:B=!1,...W}=e,k=p.useRef(null),j=_(k,n),D=c=>{c.stopPropagation(),v&&v(c)},A=c=>{c.currentTarget===c.target&&E(c)&&c.preventDefault(),O&&O(c)},H=c=>{c.currentTarget===c.target&&(v&&E(c)?v(c):c.key==="Escape"&&k.current&&k.current.blur()),P&&P(c)},I=u!==!1&&z?!0:u,x=I||v?V:s||"div",m={...e,component:x,disabled:y,size:K,color:t,iconColor:p.isValidElement(g)&&g.props.color||t,onDelete:!!v,clickable:I,variant:U},b=oa(m),q=x===V?{component:s||"div",focusVisibleClassName:b.focusVisible,...v&&{disableRipple:!0}}:{};let L=null;v&&(L=f&&p.isValidElement(f)?p.cloneElement(f,{className:$(f.props.className,b.deleteIcon),onClick:D}):R(h,{className:$(b.deleteIcon),onClick:D}));let T=null;i&&p.isValidElement(i)&&(T=p.cloneElement(i,{className:$(b.avatar,i.props.className)}));let M=null;return g&&p.isValidElement(g)&&(M=p.cloneElement(g,{className:$(b.icon,g.props.className)})),Y(la,{as:x,className:$(b.root,C),disabled:I&&y?!0:void 0,onClick:z,onKeyDown:A,onKeyUp:H,ref:j,tabIndex:B&&y?-1:F,ownerState:m,...q,...W,children:[T||M,R(ra,{className:$(b.label),ownerState:m,children:S}),L]})}),ua=ea;export{ua as M};
//# sourceMappingURL=Chip-17fa9859.js.map
