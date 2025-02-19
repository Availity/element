import{r as x}from"./index-DcWiA9TO.js";import{g as D,c as R}from"./generateUtilityClass-Bqc1qv72.js";import{s as y,c as H,r as A}from"./styled-Dbr85gFc.js";import{m as q}from"./memoTheme-DvanvhnP.js";import{c as J}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{g as K}from"./generateUtilityClasses-DyVAdLaw.js";import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{r as Q,u as X}from"./DefaultPropsProvider-CIAoFptl.js";import{u as Y}from"./useId-DszduLV4.js";import{f as i,a as v}from"./createTheme-CKCRSfxM.js";import{B as Z}from"./ButtonBase-DQZrtVrL.js";import{C as _}from"./CircularProgress-BHFEuwTi.js";function oo(o){return D("MuiButton",o)}const l=K("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge","loading","loadingWrapper","loadingIconPlaceholder","loadingIndicator","loadingPositionCenter","loadingPositionStart","loadingPositionEnd"]),ao=x.createContext({}),to=x.createContext(void 0),no=o=>{const{color:a,disableElevation:t,fullWidth:n,size:d,variant:c,loading:u,loadingPosition:S,classes:b}=o,f={root:["root",u&&"loading",c,`${c}${i(a)}`,`size${i(d)}`,`${c}Size${i(d)}`,`color${i(a)}`,t&&"disableElevation",n&&"fullWidth",u&&`loadingPosition${i(S)}`],startIcon:["icon","startIcon",`iconSize${i(d)}`],endIcon:["icon","endIcon",`iconSize${i(d)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]},z=H(f,oo,b);return{...b,...z}},E=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],io=y(Z,{shouldForwardProp:o=>A(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:t}=o;return[a.root,a[t.variant],a[`${t.variant}${i(t.color)}`],a[`size${i(t.size)}`],a[`${t.variant}Size${i(t.size)}`],t.color==="inherit"&&a.colorInherit,t.disableElevation&&a.disableElevation,t.fullWidth&&a.fullWidth,t.loading&&a.loading]}})(q(({theme:o})=>{const a=o.palette.mode==="light"?o.palette.grey[300]:o.palette.grey[800],t=o.palette.mode==="light"?o.palette.grey.A100:o.palette.grey[700];return{...o.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${l.disabled}`]:{color:(o.vars||o).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(o.vars||o).shadows[2],"&:hover":{boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2]}},"&:active":{boxShadow:(o.vars||o).shadows[8]},[`&.${l.focusVisible}`]:{boxShadow:(o.vars||o).shadows[6]},[`&.${l.disabled}`]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${l.disabled}`]:{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(o.palette).filter(J()).map(([n])=>({props:{color:n},style:{"--variant-textColor":(o.vars||o).palette[n].main,"--variant-outlinedColor":(o.vars||o).palette[n].main,"--variant-outlinedBorder":o.vars?`rgba(${o.vars.palette[n].mainChannel} / 0.5)`:v(o.palette[n].main,.5),"--variant-containedColor":(o.vars||o).palette[n].contrastText,"--variant-containedBg":(o.vars||o).palette[n].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(o.vars||o).palette[n].dark,"--variant-textBg":o.vars?`rgba(${o.vars.palette[n].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:v(o.palette[n].main,o.palette.action.hoverOpacity),"--variant-outlinedBorder":(o.vars||o).palette[n].main,"--variant-outlinedBg":o.vars?`rgba(${o.vars.palette[n].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:v(o.palette[n].main,o.palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":o.vars?o.vars.palette.Button.inheritContainedBg:a,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":o.vars?o.vars.palette.Button.inheritContainedHoverBg:t,"--variant-textBg":o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:v(o.palette.text.primary,o.palette.action.hoverOpacity),"--variant-outlinedBg":o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:v(o.palette.text.primary,o.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:o.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:o.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:o.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:o.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:o.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:o.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${l.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${l.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{loadingPosition:"center"},style:{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${l.loading}`]:{color:"transparent"}}}]}})),ro=y("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,a)=>{const{ownerState:t}=o;return[a.startIcon,t.loading&&a.startIconLoadingStart,a[`iconSize${i(t.size)}`]]}})(({theme:o})=>({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},{props:{loadingPosition:"start",loading:!0},style:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"start",loading:!0,fullWidth:!0},style:{marginRight:-8}},...E]})),eo=y("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,a)=>{const{ownerState:t}=o;return[a.endIcon,t.loading&&a.endIconLoadingEnd,a[`iconSize${i(t.size)}`]]}})(({theme:o})=>({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},{props:{loadingPosition:"end",loading:!0},style:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"end",loading:!0,fullWidth:!0},style:{marginLeft:-8}},...E]})),so=y("span",{name:"MuiButton",slot:"LoadingIndicator",overridesResolver:(o,a)=>a.loadingIndicator})(({theme:o})=>({display:"none",position:"absolute",visibility:"visible",variants:[{props:{loading:!0},style:{display:"flex"}},{props:{loadingPosition:"start"},style:{left:14}},{props:{loadingPosition:"start",size:"small"},style:{left:10}},{props:{variant:"text",loadingPosition:"start"},style:{left:6}},{props:{loadingPosition:"center"},style:{left:"50%",transform:"translate(-50%)",color:(o.vars||o).palette.action.disabled}},{props:{loadingPosition:"end"},style:{right:14}},{props:{loadingPosition:"end",size:"small"},style:{right:10}},{props:{variant:"text",loadingPosition:"end"},style:{right:6}},{props:{loadingPosition:"start",fullWidth:!0},style:{position:"relative",left:-10}},{props:{loadingPosition:"end",fullWidth:!0},style:{position:"relative",right:-10}}]})),W=y("span",{name:"MuiButton",slot:"LoadingIconPlaceholder",overridesResolver:(o,a)=>a.loadingIconPlaceholder})({display:"inline-block",width:"1em",height:"1em"}),Io=x.forwardRef(function(a,t){const n=x.useContext(ao),d=x.useContext(to),c=Q(n,a),u=X({props:c,name:"MuiButton"}),{children:S,color:b="primary",component:f="button",className:z,disabled:I=!1,disableElevation:L=!1,disableFocusRipple:C=!1,endIcon:B,focusVisibleClassName:M,fullWidth:N=!1,id:k,loading:p=null,loadingIndicator:j,loadingPosition:g="center",size:O="medium",startIcon:P,type:m,variant:T="text",...V}=u,h=Y(k),$=j??e.jsx(_,{"aria-labelledby":h,color:"inherit",size:16}),s={...u,color:b,component:f,disabled:I,disableElevation:L,disableFocusRipple:C,fullWidth:N,loading:p,loadingIndicator:$,loadingPosition:g,size:O,type:m,variant:T},r=no(s),F=(P||p&&g==="start")&&e.jsx(ro,{className:r.startIcon,ownerState:s,children:P||e.jsx(W,{className:r.loadingIconPlaceholder,ownerState:s})}),U=(B||p&&g==="end")&&e.jsx(eo,{className:r.endIcon,ownerState:s,children:B||e.jsx(W,{className:r.loadingIconPlaceholder,ownerState:s})}),G=d||"",w=typeof p=="boolean"?e.jsx("span",{className:r.loadingWrapper,style:{display:"contents"},children:p&&e.jsx(so,{className:r.loadingIndicator,ownerState:s,children:$})}):null;return e.jsxs(io,{ownerState:s,className:R(n.className,r.root,z,G),component:f,disabled:I||p,focusRipple:!C,focusVisibleClassName:R(r.focusVisible,M),ref:t,type:m,id:h,...V,classes:r,children:[F,g!=="end"&&w,S,g==="end"&&w,U]})});export{Io as B,ao as a};
