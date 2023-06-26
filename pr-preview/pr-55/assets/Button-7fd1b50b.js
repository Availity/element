import{r as g}from"./index-8db94870.js";import{g as T,a as L,s as x,r as N,c as $,b as O}from"./styled-05cc2f2a.js";import{c as n,b as p,r as V,e as U}from"./useThemeProps-7db2adde.js";import{a as j,j as I}from"./jsx-runtime-91a467a5.js";import{B as F}from"./ButtonBase-dac0a791.js";function G(o){return L("MuiButton",o)}const H=T("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),u=H,_=g.createContext({}),A=_,D=o=>{const{color:a,disableElevation:i,fullWidth:s,size:r,variant:t,classes:c}=o,v={root:["root",t,`${t}${n(a)}`,`size${n(r)}`,`${t}Size${n(r)}`,a==="inherit"&&"colorInherit",i&&"disableElevation",s&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${n(r)}`],endIcon:["endIcon",`iconSize${n(r)}`]},d=O(v,G,c);return{...c,...d}},B=o=>({...o.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},...o.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},...o.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}}),q=x(F,{shouldForwardProp:o=>N(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:i}=o;return[a.root,a[i.variant],a[`${i.variant}${n(i.color)}`],a[`size${n(i.size)}`],a[`${i.variant}Size${n(i.size)}`],i.color==="inherit"&&a.colorInherit,i.disableElevation&&a.disableElevation,i.fullWidth&&a.fullWidth]}})(({theme:o,ownerState:a})=>{var i,s;const r=o.palette.mode==="light"?o.palette.grey[300]:o.palette.grey[800],t=o.palette.mode==="light"?o.palette.grey.A100:o.palette.grey[700];return{...o.typography.button,minWidth:64,padding:"6px 16px",borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:p(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},...a.variant==="text"&&a.color!=="inherit"&&{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:p(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},...a.variant==="outlined"&&a.color!=="inherit"&&{border:`1px solid ${(o.vars||o).palette[a.color].main}`,backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:p(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},...a.variant==="contained"&&{backgroundColor:o.vars?o.vars.palette.Button.inheritContainedHoverBg:t,boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2],backgroundColor:(o.vars||o).palette.grey[300]}},...a.variant==="contained"&&a.color!=="inherit"&&{backgroundColor:(o.vars||o).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[a.color].main}}},"&:active":{...a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[8]}},[`&.${u.focusVisible}`]:{...a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[6]}},[`&.${u.disabled}`]:{color:(o.vars||o).palette.action.disabled,...a.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},...a.variant==="contained"&&{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}},...a.variant==="text"&&{padding:"6px 8px"},...a.variant==="text"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main},...a.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},...a.variant==="outlined"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main,border:o.vars?`1px solid rgba(${o.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${p(o.palette[a.color].main,.5)}`},...a.variant==="contained"&&{color:o.vars?o.vars.palette.text.primary:(i=(s=o.palette).getContrastText)==null?void 0:i.call(s,o.palette.grey[300]),backgroundColor:o.vars?o.vars.palette.Button.inheritContainedBg:r,boxShadow:(o.vars||o).shadows[2]},...a.variant==="contained"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].contrastText,backgroundColor:(o.vars||o).palette[a.color].main},...a.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},...a.size==="small"&&a.variant==="text"&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},...a.size==="large"&&a.variant==="text"&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},...a.size==="small"&&a.variant==="outlined"&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},...a.size==="large"&&a.variant==="outlined"&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},...a.size==="small"&&a.variant==="contained"&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},...a.size==="large"&&a.variant==="contained"&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},...a.fullWidth&&{width:"100%"}}},({ownerState:o})=>o.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${u.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${u.disabled}`]:{boxShadow:"none"}}),J=x("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,a)=>{const{ownerState:i}=o;return[a.startIcon,a[`iconSize${n(i.size)}`]]}})(({ownerState:o})=>({display:"inherit",marginRight:8,marginLeft:-4,...o.size==="small"&&{marginLeft:-2},...B(o)})),K=x("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,a)=>{const{ownerState:i}=o;return[a.endIcon,a[`iconSize${n(i.size)}`]]}})(({ownerState:o})=>({display:"inherit",marginRight:-4,marginLeft:8,...o.size==="small"&&{marginRight:-2},...B(o)})),Q=g.forwardRef(function(a,i){const s=g.useContext(A),r=V(s,a),t=U({props:r,name:"MuiButton"}),{children:c,color:v="primary",component:d="button",className:k,disabled:b=!1,disableElevation:R=!1,disableFocusRipple:z=!1,endIcon:f,focusVisibleClassName:h,fullWidth:E=!1,size:M="medium",startIcon:C,type:y,variant:P="text",...W}=t,e={...t,color:v,component:d,disabled:b,disableElevation:R,disableFocusRipple:z,fullWidth:E,size:M,type:y,variant:P},l=D(e),m=C&&I(J,{className:l.startIcon,ownerState:e,children:C}),S=f&&I(K,{className:l.endIcon,ownerState:e,children:f});return j(q,{ownerState:e,className:$(s.className,l.root,k),component:d,disabled:b,focusRipple:!z,focusVisibleClassName:$(l.focusVisible,h),ref:i,type:y,...W,classes:l,children:[m,c,S]})}),ao=Q;export{ao as B};
//# sourceMappingURL=Button-7fd1b50b.js.map
