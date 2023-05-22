import{a as se,j as C}from"./jsx-runtime-670450c2.js";import{a as le,g as ce,s as H,f as a,_ as h,u as de,b as pe,c as S,e as ge}from"./useThemeProps-10c808b6.js";import{r as B}from"./index-f1f749bf.js";import{u as D}from"./useSlotProps-88b35e35.js";import"./extends-98964cd2.js";import"./emotion-element-6a883da9.browser.esm-1c5b50fe.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./_commonjsHelpers-042e6b4d.js";import"./useForkRef-2e794f8b.js";const ue=r=>{const e=B.useRef({});return B.useEffect(()=>{e.current=r}),e.current},Z=ue;function me(r){const{badgeContent:e,invisible:o=!1,max:s=99,showZero:l=!1}=r,c=Z({badgeContent:e,max:s});let t=o;o===!1&&e===0&&!l&&(t=!0);const{badgeContent:n,max:d=s}=t?c:r,p=n&&Number(n)>d?`${d}+`:n;return{badgeContent:n,invisible:t,max:d,displayValue:p}}function he(r){return ce("MuiBadge",r)}const fe=le("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),i=fe,ve=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],P=10,x=4,be=r=>{const{color:e,anchorOrigin:o,invisible:s,overlap:l,variant:c,classes:t={}}=r,n={root:["root"],badge:["badge",c,s&&"invisible",`anchorOrigin${a(o.vertical)}${a(o.horizontal)}`,`anchorOrigin${a(o.vertical)}${a(o.horizontal)}${a(l)}`,`overlap${a(l)}`,e!=="default"&&`color${a(e)}`]};return ge(n,he,t)},Oe=H("span",{name:"MuiBadge",slot:"Root",overridesResolver:(r,e)=>e.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),ye=H("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(r,e)=>{const{ownerState:o}=r;return[e.badge,e[o.variant],e[`anchorOrigin${a(o.anchorOrigin.vertical)}${a(o.anchorOrigin.horizontal)}${a(o.overlap)}`],o.color!=="default"&&e[`color${a(o.color)}`],o.invisible&&e.invisible]}})(({theme:r,ownerState:e})=>h({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(12),minWidth:P*2,lineHeight:1,padding:"0 6px",height:P*2,borderRadius:P,zIndex:1,transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.enteringScreen})},e.color!=="default"&&{backgroundColor:(r.vars||r).palette[e.color].main,color:(r.vars||r).palette[e.color].contrastText},e.variant==="dot"&&{borderRadius:x,height:x*2,minWidth:x*2,padding:0},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${i.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${i.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${i.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${i.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${i.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${i.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${i.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${i.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},e.invisible&&{transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.leavingScreen})})),Pe=B.forwardRef(function(e,o){var s,l,c,t,n,d;const p=de({props:e,name:"MuiBadge"}),{anchorOrigin:T={vertical:"top",horizontal:"right"},className:k,component:Y,components:R={},componentsProps:$={},children:G,overlap:_="rectangular",color:z="default",invisible:J=!1,max:K=99,badgeContent:V,slots:g,slotProps:u,showZero:q=!1,variant:v="standard"}=p,Q=pe(p,ve),{badgeContent:N,invisible:X,max:w,displayValue:ee}=me({max:K,invisible:J,badgeContent:V,showZero:q}),re=Z({anchorOrigin:T,color:z,overlap:_,variant:v,badgeContent:V}),I=X||N==null&&v!=="dot",{color:oe=z,overlap:ae=_,anchorOrigin:ne=T,variant:U=v}=I?re:p,M=U!=="dot"?ee:void 0,b=h({},p,{badgeContent:N,invisible:I,max:w,displayValue:M,showZero:q,anchorOrigin:ne,color:oe,overlap:ae,variant:U}),L=be(b),E=(s=(l=g==null?void 0:g.root)!=null?l:R.Root)!=null?s:Oe,W=(c=(t=g==null?void 0:g.badge)!=null?t:R.Badge)!=null?c:ye,O=(n=u==null?void 0:u.root)!=null?n:$.root,y=(d=u==null?void 0:u.badge)!=null?d:$.badge,te=D({elementType:E,externalSlotProps:O,externalForwardedProps:Q,additionalProps:{ref:o,as:Y},ownerState:b,className:S(O==null?void 0:O.className,L.root,k)}),ie=D({elementType:W,externalSlotProps:y,ownerState:b,className:S(L.badge,y==null?void 0:y.className)});return se(E,h({},te,{children:[G,C(W,h({},ie,{children:M}))]}))}),xe=Pe,f=({children:r,color:e="error",...o})=>C(xe,{color:e,...o,children:r});try{f.displayName="Badge",f.__docgenInfo={description:"",displayName:"Badge",props:{badgeContent:{defaultValue:null,description:"The content rendered within the badge.",name:"badgeContent",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"The badge will be added relative to this node.",name:"children",required:!0,type:{name:"React.ReactNode"}},color:{defaultValue:{value:"error"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:'"primary" | "error"'}},anchorOrigin:{defaultValue:{value:`{
vertical: 'top',
horizontal: 'right',
}`},description:"The anchor of the badge.",name:"anchorOrigin",required:!1,type:{name:"BadgeOrigin"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<BadgeClasses> & Partial<ClassNameMap<never>>"}},className:{defaultValue:null,description:"@ignore",name:"className",required:!1,type:{name:"string"}},componentsProps:{defaultValue:{value:"{}"},description:"The extra props for the slot components.\nYou can override the existing props or add new ones.\n\nThis prop is an alias for the `slotProps` prop.\nIt's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.",name:"componentsProps",required:!1,type:{name:'{ root?: SlotComponentProps<"span", BadgeUnstyledRootSlotPropsOverrides, BadgeUnstyledOwnerState>; badge?: SlotComponentProps<...>; }'}},components:{defaultValue:{value:"{}"},description:"The components used for each slot inside.\n\nThis prop is an alias for the `slots` prop.\nIt's recommended to use the `slots` prop instead.",name:"components",required:!1,type:{name:"{ Root?: ElementType<any>; Badge?: ElementType<any>; }"}},overlap:{defaultValue:{value:"'rectangular'"},description:"Wrapped shape the badge should overlap.",name:"overlap",required:!1,type:{name:'"rectangular" | "circular"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},variant:{defaultValue:{value:"'standard'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"standard" | "dot"'}},invisible:{defaultValue:{value:"false"},description:"If `true`, the badge is invisible.",name:"invisible",required:!1,type:{name:"boolean"}},max:{defaultValue:{value:"99"},description:"Max count to show.",name:"max",required:!1,type:{name:"number"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Badge.",name:"slotProps",required:!1,type:{name:'{ root?: SlotComponentProps<"span", BadgeUnstyledRootSlotPropsOverrides, BadgeUnstyledOwnerState>; badge?: SlotComponentProps<...>; }'}},slots:{defaultValue:{value:"{}"},description:`The components used for each slot inside the Badge.
Either a string to use a HTML element or a component.`,name:"slots",required:!1,type:{name:"BadgeUnstyledSlots"}},showZero:{defaultValue:{value:"false"},description:"Controls whether the badge is hidden when `badgeContent` is zero.",name:"showZero",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}}}}}catch{}const Ne={title:"Components/Badge/Badge",component:f,tags:["autodocs"]},m={render:r=>C(f,{...r}),args:{children:"This text is a child of the badge",badgeContent:3,variant:"standard",anchorOrigin:{horizontal:"right",vertical:"top"}}};var j,A,F;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(F=(A=m.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const Ie=["_Badge"];export{m as _Badge,Ie as __namedExportsOrder,Ne as default};
//# sourceMappingURL=Badge.stories-3953d668.js.map
