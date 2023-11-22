import{f as i,_ as v,b as oo}from"./createTheme-3fee607a.js";import{r as ro}from"./index-570b25c1.js";import{c as W}from"./clsx-b831246b.js";import{g as ao,s as j,c as io}from"./styled-523cb007.js";import{u as no}from"./useThemeProps-98dc6282.js";import{g as to}from"./generateUtilityClasses-b58f947a.js";import{j as so,a as lo}from"./jsx-runtime-a3bcee63.js";import{u as A}from"./usePreviousProps-9cd3673d.js";import{u as D}from"./useSlotProps-039d2b0a.js";function eo(r){const{badgeContent:o,invisible:a=!1,max:l=99,showZero:e=!1}=r,c=A({badgeContent:o,max:l});let t=a;a===!1&&o===0&&!e&&(t=!0);const{badgeContent:n,max:g=l}=t?c:r,p=n&&Number(n)>g?`${g}+`:n;return{badgeContent:n,invisible:t,max:g,displayValue:p}}function co(r){return ao("MuiBadge",r)}const go=to("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),s=go,po=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],O=10,P=4,mo=r=>{const{color:o,anchorOrigin:a,invisible:l,overlap:e,variant:c,classes:t={}}=r,n={root:["root"],badge:["badge",c,l&&"invisible",`anchorOrigin${i(a.vertical)}${i(a.horizontal)}`,`anchorOrigin${i(a.vertical)}${i(a.horizontal)}${i(e)}`,`overlap${i(e)}`,o!=="default"&&`color${i(o)}`]};return io(n,co,t)},vo=j("span",{name:"MuiBadge",slot:"Root",overridesResolver:(r,o)=>o.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),fo=j("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(r,o)=>{const{ownerState:a}=r;return[o.badge,o[a.variant],o[`anchorOrigin${i(a.anchorOrigin.vertical)}${i(a.anchorOrigin.horizontal)}${i(a.overlap)}`],a.color!=="default"&&o[`color${i(a.color)}`],a.invisible&&o.invisible]}})(({theme:r,ownerState:o})=>v({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(12),minWidth:O*2,lineHeight:1,padding:"0 6px",height:O*2,borderRadius:O,zIndex:1,transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.enteringScreen})},o.color!=="default"&&{backgroundColor:(r.vars||r).palette[o.color].main,color:(r.vars||r).palette[o.color].contrastText},o.variant==="dot"&&{borderRadius:P,height:P*2,minWidth:P*2,padding:0},o.anchorOrigin.vertical==="top"&&o.anchorOrigin.horizontal==="right"&&o.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${s.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},o.anchorOrigin.vertical==="bottom"&&o.anchorOrigin.horizontal==="right"&&o.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${s.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},o.anchorOrigin.vertical==="top"&&o.anchorOrigin.horizontal==="left"&&o.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${s.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},o.anchorOrigin.vertical==="bottom"&&o.anchorOrigin.horizontal==="left"&&o.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${s.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},o.anchorOrigin.vertical==="top"&&o.anchorOrigin.horizontal==="right"&&o.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${s.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},o.anchorOrigin.vertical==="bottom"&&o.anchorOrigin.horizontal==="right"&&o.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${s.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},o.anchorOrigin.vertical==="top"&&o.anchorOrigin.horizontal==="left"&&o.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${s.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},o.anchorOrigin.vertical==="bottom"&&o.anchorOrigin.horizontal==="left"&&o.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${s.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},o.invisible&&{transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.leavingScreen})})),uo=ro.forwardRef(function(o,a){var l,e,c,t,n,g;const p=no({props:o,name:"MuiBadge"}),{anchorOrigin:x={vertical:"top",horizontal:"right"},className:F,component:k,components:C={},componentsProps:$={},children:V,overlap:R="rectangular",color:B="default",invisible:H=!1,max:Z=99,badgeContent:y,slots:d,slotProps:m,showZero:z=!1,variant:f="standard"}=p,E=oo(p,po),{badgeContent:T,invisible:q,max:G,displayValue:J}=eo({max:Z,invisible:H,badgeContent:y,showZero:z}),K=A({anchorOrigin:x,color:B,overlap:R,variant:f,badgeContent:y}),_=q||T==null&&f!=="dot",{color:Q=B,overlap:X=R,anchorOrigin:Y=x,variant:I=f}=_?K:p,M=I!=="dot"?J:void 0,u=v({},p,{badgeContent:T,invisible:_,max:G,displayValue:M,showZero:z,anchorOrigin:Y,color:Q,overlap:X,variant:I}),N=mo(u),L=(l=(e=d==null?void 0:d.root)!=null?e:C.Root)!=null?l:vo,U=(c=(t=d==null?void 0:d.badge)!=null?t:C.Badge)!=null?c:fo,h=(n=m==null?void 0:m.root)!=null?n:$.root,b=(g=m==null?void 0:m.badge)!=null?g:$.badge,S=D({elementType:L,externalSlotProps:h,externalForwardedProps:E,additionalProps:{ref:a,as:k},ownerState:u,className:W(h==null?void 0:h.className,N.root,F)}),w=D({elementType:U,externalSlotProps:b,ownerState:u,className:W(N.badge,b==null?void 0:b.className)});return so(L,v({},S,{children:[V,lo(U,v({},w,{children:M}))]}))}),yo=uo;export{yo as M};
//# sourceMappingURL=Badge-9980f9a8.js.map
