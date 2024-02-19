import{a as ce,j as S}from"./jsx-runtime-670450c2.js";import{f as C,a as de,g as pe,s as Y,j as c,_ as x,b as ue,e as ge,h as me}from"./useThemeProps-d48512ed.js";import{r as V}from"./index-f1f749bf.js";import{u as fe}from"./useForkRef-d38d61a7.js";import"./extends-98964cd2.js";import"./emotion-element-6a883da9.browser.esm-1c5b50fe.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./_commonjsHelpers-042e6b4d.js";const he=r=>{const e=V.useRef({});return V.useEffect(()=>{e.current=r}),e.current},G=he;function d(){return d=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(r[n]=o[n])}return r},d.apply(this,arguments)}function ve(r){return typeof r=="string"}function be(r,e,o){return r===void 0||ve(r)?e:d({},e,{ownerState:d({},e.ownerState,o)})}function ye(r,e=[]){if(r===void 0)return{};const o={};return Object.keys(r).filter(n=>n.match(/^on[A-Z]/)&&typeof r[n]=="function"&&!e.includes(n)).forEach(n=>{o[n]=r[n]}),o}function Oe(r,e){return typeof r=="function"?r(e):r}function Pe(r,e){if(r==null)return{};var o={},n=Object.keys(r),t,a;for(a=0;a<n.length;a++)t=n[a],!(e.indexOf(t)>=0)&&(o[t]=r[t]);return o}function F(r){if(r===void 0)return{};const e={};return Object.keys(r).filter(o=>!(o.match(/^on[A-Z]/)&&typeof r[o]=="function")).forEach(o=>{e[o]=r[o]}),e}function xe(r){const{getSlotProps:e,additionalProps:o,externalSlotProps:n,externalForwardedProps:t,className:a}=r;if(!e){const f=C(t==null?void 0:t.className,n==null?void 0:n.className,a,o==null?void 0:o.className),h=d({},o==null?void 0:o.style,t==null?void 0:t.style,n==null?void 0:n.style),v=d({},o,t,n);return f.length>0&&(v.className=f),Object.keys(h).length>0&&(v.style=h),{props:v,internalRef:void 0}}const i=ye(d({},t,n)),l=F(n),p=F(t),s=e(i),g=C(s==null?void 0:s.className,o==null?void 0:o.className,a,t==null?void 0:t.className,n==null?void 0:n.className),b=d({},s==null?void 0:s.style,o==null?void 0:o.style,t==null?void 0:t.style,n==null?void 0:n.style),m=d({},s,o,p,l);return g.length>0&&(m.className=g),Object.keys(b).length>0&&(m.style=b),{props:m,internalRef:s.ref}}const Ce=["elementType","externalSlotProps","ownerState"];function Z(r){var e;const{elementType:o,externalSlotProps:n,ownerState:t}=r,a=Pe(r,Ce),i=Oe(n,t),{props:l,internalRef:p}=xe(d({},a,{externalSlotProps:i})),s=fe(p,i==null?void 0:i.ref,(e=r.additionalProps)==null?void 0:e.ref);return be(o,d({},l,{ref:s}),t)}function Be(r){const{badgeContent:e,invisible:o=!1,max:n=99,showZero:t=!1}=r,a=G({badgeContent:e,max:n});let i=o;o===!1&&e===0&&!t&&(i=!0);const{badgeContent:l,max:p=n}=i?a:r,s=l&&Number(l)>p?`${p}+`:l;return{badgeContent:l,invisible:i,max:p,displayValue:s}}function Re(r){return pe("MuiBadge",r)}const Te=de("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),u=Te,$e=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],N=10,z=4,_e=r=>{const{color:e,anchorOrigin:o,invisible:n,overlap:t,variant:a,classes:i={}}=r,l={root:["root"],badge:["badge",a,n&&"invisible",`anchorOrigin${c(o.vertical)}${c(o.horizontal)}`,`anchorOrigin${c(o.vertical)}${c(o.horizontal)}${c(t)}`,`overlap${c(t)}`,e!=="default"&&`color${c(e)}`]};return me(l,Re,i)},Ne=Y("span",{name:"MuiBadge",slot:"Root",overridesResolver:(r,e)=>e.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),ze=Y("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(r,e)=>{const{ownerState:o}=r;return[e.badge,e[o.variant],e[`anchorOrigin${c(o.anchorOrigin.vertical)}${c(o.anchorOrigin.horizontal)}${c(o.overlap)}`],o.color!=="default"&&e[`color${c(o.color)}`],o.invisible&&e.invisible]}})(({theme:r,ownerState:e})=>x({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(12),minWidth:N*2,lineHeight:1,padding:"0 6px",height:N*2,borderRadius:N,zIndex:1,transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.enteringScreen})},e.color!=="default"&&{backgroundColor:(r.vars||r).palette[e.color].main,color:(r.vars||r).palette[e.color].contrastText},e.variant==="dot"&&{borderRadius:z,height:z*2,minWidth:z*2,padding:0},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${u.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${u.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${u.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${u.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${u.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${u.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${u.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${u.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},e.invisible&&{transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.leavingScreen})})),Ve=V.forwardRef(function(e,o){var n,t,a,i,l,p;const s=ue({props:e,name:"MuiBadge"}),{anchorOrigin:g={vertical:"top",horizontal:"right"},className:b,component:m,components:f={},componentsProps:h={},children:v,overlap:q="rectangular",color:E="default",invisible:J=!1,max:Q=99,badgeContent:I,slots:y,slotProps:O,showZero:U=!1,variant:R="standard"}=s,X=ge(s,$e),{badgeContent:j,invisible:ee,max:re,displayValue:oe}=Be({max:Q,invisible:J,badgeContent:I,showZero:U}),ne=G({anchorOrigin:g,color:E,overlap:q,variant:R,badgeContent:I}),H=ee||j==null&&R!=="dot",{color:te=E,overlap:ae=q,anchorOrigin:se=g,variant:M=R}=H?ne:s,W=M!=="dot"?oe:void 0,T=x({},s,{badgeContent:j,invisible:H,max:re,displayValue:W,showZero:U,anchorOrigin:se,color:te,overlap:ae,variant:M}),L=_e(T),k=(n=(t=y==null?void 0:y.root)!=null?t:f.Root)!=null?n:Ne,A=(a=(i=y==null?void 0:y.badge)!=null?i:f.Badge)!=null?a:ze,$=(l=O==null?void 0:O.root)!=null?l:h.root,_=(p=O==null?void 0:O.badge)!=null?p:h.badge,ie=Z({elementType:k,externalSlotProps:$,externalForwardedProps:X,additionalProps:{ref:o,as:m},ownerState:T,className:C($==null?void 0:$.className,L.root,b)}),le=Z({elementType:A,externalSlotProps:_,ownerState:T,className:C(L.badge,_==null?void 0:_.className)});return ce(k,x({},ie,{children:[v,S(A,x({},le,{children:W}))]}))}),Se=Ve,B=({children:r,color:e="error",...o})=>S(Se,{color:e,...o,children:r});try{B.displayName="Badge",B.__docgenInfo={description:"",displayName:"Badge",props:{badgeContent:{defaultValue:null,description:"The content rendered within the badge.",name:"badgeContent",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"The badge will be added relative to this node.",name:"children",required:!0,type:{name:"React.ReactNode"}},color:{defaultValue:{value:"error"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:'"primary" | "error"'}},anchorOrigin:{defaultValue:{value:`{
vertical: 'top',
horizontal: 'right',
}`},description:"The anchor of the badge.",name:"anchorOrigin",required:!1,type:{name:"BadgeOrigin"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<BadgeClasses> & Partial<ClassNameMap<never>>"}},className:{defaultValue:null,description:"@ignore",name:"className",required:!1,type:{name:"string"}},componentsProps:{defaultValue:{value:"{}"},description:"The extra props for the slot components.\nYou can override the existing props or add new ones.\n\nThis prop is an alias for the `slotProps` prop.\nIt's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.",name:"componentsProps",required:!1,type:{name:'{ root?: SlotComponentProps<"span", BadgeUnstyledRootSlotPropsOverrides, BadgeUnstyledOwnerState>; badge?: SlotComponentProps<...>; }'}},components:{defaultValue:{value:"{}"},description:"The components used for each slot inside.\n\nThis prop is an alias for the `slots` prop.\nIt's recommended to use the `slots` prop instead.",name:"components",required:!1,type:{name:"{ Root?: ElementType<any>; Badge?: ElementType<any>; }"}},overlap:{defaultValue:{value:"'rectangular'"},description:"Wrapped shape the badge should overlap.",name:"overlap",required:!1,type:{name:'"rectangular" | "circular"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},variant:{defaultValue:{value:"'standard'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"standard" | "dot"'}},invisible:{defaultValue:{value:"false"},description:"If `true`, the badge is invisible.",name:"invisible",required:!1,type:{name:"boolean"}},max:{defaultValue:{value:"99"},description:"Max count to show.",name:"max",required:!1,type:{name:"number"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Badge.",name:"slotProps",required:!1,type:{name:'{ root?: SlotComponentProps<"span", BadgeUnstyledRootSlotPropsOverrides, BadgeUnstyledOwnerState>; badge?: SlotComponentProps<...>; }'}},slots:{defaultValue:{value:"{}"},description:`The components used for each slot inside the Badge.
Either a string to use a HTML element or a component.`,name:"slots",required:!1,type:{name:"BadgeUnstyledSlots"}},showZero:{defaultValue:{value:"false"},description:"Controls whether the badge is hidden when `badgeContent` is zero.",name:"showZero",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}}}}}catch{}const Le={title:"Components/Badge/Badge",component:B,tags:["autodocs"]},P={render:r=>S(B,{...r}),args:{children:"This text is a child of the badge",badgeContent:3,variant:"standard",anchorOrigin:{horizontal:"right",vertical:"top"}}};var D,w,K;P.parameters={...P.parameters,docs:{...(D=P.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args: BadgeProps) => <Badge {...args} />,
  args: {
    children: 'This text is a child of the badge',
    badgeContent: 3,
    variant: 'standard',
    anchorOrigin: {
      horizontal: 'right',
      vertical: 'top'
    }
  }
}`,...(K=(w=P.parameters)==null?void 0:w.docs)==null?void 0:K.source}}};const ke=["_Badge"];export{P as _Badge,ke as __namedExportsOrder,Le as default};
//# sourceMappingURL=Badge.stories-48b7f78e.js.map