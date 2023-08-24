import{r as P}from"./index-8db94870.js";import{g as rr,b as or,s as A,c as L,a as ar}from"./styled-657e2aa7.js";import{e as i,c as ir}from"./useThemeProps-ad7d4b8c.js";import{a as nr,j as tr}from"./jsx-runtime-91a467a5.js";import{u as W}from"./useSlotProps-d00a877a.js";const sr=o=>{const r=P.useRef({});return P.useEffect(()=>{r.current=o}),r.current},F=sr;function lr(o){const{badgeContent:r,invisible:a=!1,max:l=99,showZero:e=!1}=o,c=F({badgeContent:r,max:l});let t=a;a===!1&&r===0&&!e&&(t=!0);const{badgeContent:n,max:g=l}=t?c:o,p=n&&Number(n)>g?`${g}+`:n;return{badgeContent:n,invisible:t,max:g,displayValue:p}}function er(o){return or("MuiBadge",o)}const cr=rr("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),s=cr,b=10,O=4,gr=o=>{const{color:r,anchorOrigin:a,invisible:l,overlap:e,variant:c,classes:t={}}=o,n={root:["root"],badge:["badge",c,l&&"invisible",`anchorOrigin${i(a.vertical)}${i(a.horizontal)}`,`anchorOrigin${i(a.vertical)}${i(a.horizontal)}${i(e)}`,`overlap${i(e)}`,r!=="default"&&`color${i(r)}`]};return ar(n,er,t)},pr=A("span",{name:"MuiBadge",slot:"Root",overridesResolver:(o,r)=>r.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),dr=A("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(o,r)=>{const{ownerState:a}=o;return[r.badge,r[a.variant],r[`anchorOrigin${i(a.anchorOrigin.vertical)}${i(a.anchorOrigin.horizontal)}${i(a.overlap)}`],a.color!=="default"&&r[`color${i(a.color)}`],a.invisible&&r.invisible]}})(({theme:o,ownerState:r})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(12),minWidth:b*2,lineHeight:1,padding:"0 6px",height:b*2,borderRadius:b,zIndex:1,transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.enteringScreen}),...r.color!=="default"&&{backgroundColor:(o.vars||o).palette[r.color].main,color:(o.vars||o).palette[r.color].contrastText},...r.variant==="dot"&&{borderRadius:O,height:O*2,minWidth:O*2,padding:0},...r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${s.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${s.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${s.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${s.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${s.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="right"&&r.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${s.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...r.anchorOrigin.vertical==="top"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${s.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...r.anchorOrigin.vertical==="bottom"&&r.anchorOrigin.horizontal==="left"&&r.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${s.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...r.invisible&&{transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.leavingScreen})}})),ur=P.forwardRef(function(r,a){var l,e,c,t,n,g;const p=ir({props:r,name:"MuiBadge"}),{anchorOrigin:x={vertical:"top",horizontal:"right"},className:j,classes:fr,component:k,components:$={},componentsProps:R={},children:V,overlap:C="rectangular",color:B="default",invisible:E=!1,max:H=99,badgeContent:y,slots:d,slotProps:u,showZero:z=!1,variant:f="standard",...Z}=p,{badgeContent:T,invisible:q,max:G,displayValue:J}=lr({max:H,invisible:E,badgeContent:y,showZero:z}),K=F({anchorOrigin:x,color:B,overlap:C,variant:f,badgeContent:y}),I=q||T==null&&f!=="dot",{color:Q=B,overlap:X=C,anchorOrigin:Y=x,variant:M=f}=I?K:p,_=M!=="dot"?J:void 0,v={...p,badgeContent:T,invisible:I,max:G,displayValue:_,showZero:z,anchorOrigin:Y,color:Q,overlap:X,variant:M},N=gr(v),U=(l=(e=d==null?void 0:d.root)!=null?e:$.Root)!=null?l:pr,D=(c=(t=d==null?void 0:d.badge)!=null?t:$.Badge)!=null?c:dr,h=(n=u==null?void 0:u.root)!=null?n:R.root,m=(g=u==null?void 0:u.badge)!=null?g:R.badge,S=W({elementType:U,externalSlotProps:h,externalForwardedProps:Z,additionalProps:{ref:a,as:k},ownerState:v,className:L(h==null?void 0:h.className,N.root,j)}),w=W({elementType:D,externalSlotProps:m,ownerState:v,className:L(N.badge,m==null?void 0:m.className)});return nr(U,{...S,children:[V,tr(D,{...w,children:_})]})}),Pr=ur;export{Pr as M,F as u};
//# sourceMappingURL=Badge-b3f303f3.js.map
