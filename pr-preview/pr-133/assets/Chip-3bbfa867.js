import{f as r,_ as p,a as d,b as G}from"./createTheme-e6b56ddb.js";import{r as u}from"./index-570b25c1.js";import{c as y}from"./clsx-8416b751.js";import{c as J}from"./createSvgIcon-e4b87ef5.js";import{j as R,a as Q}from"./jsx-runtime-390e5fc8.js";import{u as X}from"./useThemeProps-db7202c2.js";import{g as Y,s as K,c as Z}from"./styled-188025da.js";import{g as h}from"./generateUtilityClasses-f776b170.js";import{B as E}from"./ButtonBase-140e1396.js";import{u as w}from"./useForkRef-153a0a89.js";const aa=J(R("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function oa(a){return Y("MuiChip",a)}const la=h("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),l=la,ra=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],ea=a=>{const{classes:o,disabled:n,size:e,color:i,iconColor:f,onDelete:v,clickable:t,variant:s}=a,g={root:["root",s,n&&"disabled",`size${r(e)}`,`color${r(i)}`,t&&"clickable",t&&`clickableColor${r(i)}`,v&&"deletable",v&&`deletableColor${r(i)}`,`${s}${r(i)}`],label:["label",`label${r(e)}`],avatar:["avatar",`avatar${r(e)}`,`avatarColor${r(i)}`],icon:["icon",`icon${r(e)}`,`iconColor${r(f)}`],deleteIcon:["deleteIcon",`deleteIcon${r(e)}`,`deleteIconColor${r(i)}`,`deleteIcon${r(s)}Color${r(i)}`]};return Z(g,oa,o)},ca=K("div",{name:"MuiChip",slot:"Root",overridesResolver:(a,o)=>{const{ownerState:n}=a,{color:e,iconColor:i,clickable:f,onDelete:v,size:t,variant:s}=n;return[{[`& .${l.avatar}`]:o.avatar},{[`& .${l.avatar}`]:o[`avatar${r(t)}`]},{[`& .${l.avatar}`]:o[`avatarColor${r(e)}`]},{[`& .${l.icon}`]:o.icon},{[`& .${l.icon}`]:o[`icon${r(t)}`]},{[`& .${l.icon}`]:o[`iconColor${r(i)}`]},{[`& .${l.deleteIcon}`]:o.deleteIcon},{[`& .${l.deleteIcon}`]:o[`deleteIcon${r(t)}`]},{[`& .${l.deleteIcon}`]:o[`deleteIconColor${r(e)}`]},{[`& .${l.deleteIcon}`]:o[`deleteIcon${r(s)}Color${r(e)}`]},o.root,o[`size${r(t)}`],o[`color${r(e)}`],f&&o.clickable,f&&e!=="default"&&o[`clickableColor${r(e)})`],v&&o.deletable,v&&e!=="default"&&o[`deletableColor${r(e)}`],o[s],o[`${s}${r(e)}`]]}})(({theme:a,ownerState:o})=>{const n=a.palette.mode==="light"?a.palette.grey[700]:a.palette.grey[300];return p({maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${l.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${l.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:n,fontSize:a.typography.pxToRem(12)},[`& .${l.avatarColorPrimary}`]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},[`& .${l.avatarColorSecondary}`]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},[`& .${l.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},[`& .${l.icon}`]:p({marginLeft:5,marginRight:-6},o.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},o.iconColor===o.color&&p({color:a.vars?a.vars.palette.Chip.defaultIconColor:n},o.color!=="default"&&{color:"inherit"})),[`& .${l.deleteIcon}`]:p({WebkitTapHighlightColor:"transparent",color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.26)`:d(a.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.4)`:d(a.palette.text.primary,.4)}},o.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},o.color!=="default"&&{color:a.vars?`rgba(${a.vars.palette[o.color].contrastTextChannel} / 0.7)`:d(a.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].contrastText}})},o.size==="small"&&{height:24},o.color!=="default"&&{backgroundColor:(a.vars||a).palette[o.color].main,color:(a.vars||a).palette[o.color].contrastText},o.onDelete&&{[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:d(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}},o.onDelete&&o.color!=="default"&&{[`&.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}})},({theme:a,ownerState:o})=>p({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:d(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:d(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}},o.clickable&&o.color!=="default"&&{[`&:hover, &.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}}),({theme:a,ownerState:o})=>p({},o.variant==="outlined"&&{backgroundColor:"transparent",border:a.vars?`1px solid ${a.vars.palette.Chip.defaultBorder}`:`1px solid ${a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[700]}`,[`&.${l.clickable}:hover`]:{backgroundColor:(a.vars||a).palette.action.hover},[`&.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`& .${l.avatar}`]:{marginLeft:4},[`& .${l.avatarSmall}`]:{marginLeft:2},[`& .${l.icon}`]:{marginLeft:4},[`& .${l.iconSmall}`]:{marginLeft:2},[`& .${l.deleteIcon}`]:{marginRight:5},[`& .${l.deleteIconSmall}`]:{marginRight:3}},o.variant==="outlined"&&o.color!=="default"&&{color:(a.vars||a).palette[o.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:d(a.palette[o.color].main,.7)}`,[`&.${l.clickable}:hover`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:d(a.palette[o.color].main,a.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.focusOpacity})`:d(a.palette[o.color].main,a.palette.action.focusOpacity)},[`& .${l.deleteIcon}`]:{color:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:d(a.palette[o.color].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].main}}})),ia=K("span",{name:"MuiChip",slot:"Label",overridesResolver:(a,o)=>{const{ownerState:n}=a,{size:e}=n;return[o.label,o[`label${r(e)}`]]}})(({ownerState:a})=>p({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},a.size==="small"&&{paddingLeft:8,paddingRight:8}));function M(a){return a.key==="Backspace"||a.key==="Delete"}const ta=u.forwardRef(function(o,n){const e=X({props:o,name:"MuiChip"}),{avatar:i,className:f,clickable:v,color:t="default",component:s,deleteIcon:g,disabled:k=!1,icon:$,label:S,onClick:O,onDelete:b,onKeyDown:P,onKeyUp:D,size:U="medium",variant:F="filled",tabIndex:W,skipFocusWhenDisabled:j=!1}=e,B=G(e,ra),I=u.useRef(null),_=w(I,n),L=c=>{c.stopPropagation(),b&&b(c)},A=c=>{c.currentTarget===c.target&&M(c)&&c.preventDefault(),P&&P(c)},H=c=>{c.currentTarget===c.target&&(b&&M(c)?b(c):c.key==="Escape"&&I.current&&I.current.blur()),D&&D(c)},x=v!==!1&&O?!0:v,m=x||b?E:s||"div",z=p({},e,{component:m,disabled:k,size:U,color:t,iconColor:u.isValidElement($)&&$.props.color||t,onDelete:!!b,clickable:x,variant:F}),C=ea(z),q=m===E?p({component:s||"div",focusVisibleClassName:C.focusVisible},b&&{disableRipple:!0}):{};let T=null;b&&(T=g&&u.isValidElement(g)?u.cloneElement(g,{className:y(g.props.className,C.deleteIcon),onClick:L}):R(aa,{className:y(C.deleteIcon),onClick:L}));let V=null;i&&u.isValidElement(i)&&(V=u.cloneElement(i,{className:y(C.avatar,i.props.className)}));let N=null;return $&&u.isValidElement($)&&(N=u.cloneElement($,{className:y(C.icon,$.props.className)})),Q(ca,p({as:m,className:y(C.root,f),disabled:x&&k?!0:void 0,onClick:O,onKeyDown:A,onKeyUp:H,ref:_,tabIndex:j&&k?-1:W,ownerState:z},q,B,{children:[V||N,R(ia,{className:y(C.label),ownerState:z,children:S}),T]}))}),$a=ta;export{$a as C};
//# sourceMappingURL=Chip-3bbfa867.js.map
