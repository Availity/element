import{a as ie,j as x}from"./jsx-runtime-58698645.js";import{r as B}from"./index-ccf6a75d.js";import{a as se,g as le,s as F,c as U,b as ce}from"./styled-90a9d686.js";import{c as a,u as de}from"./useThemeProps-d5da9973.js";import{u as W}from"./useSlotProps-7bc5c064.js";import"./extends-79cb841a.js";import"./useForkRef-75c8d838.js";const pe=o=>{const e=B.useRef({});return B.useEffect(()=>{e.current=o}),e.current},H=pe;function ge(o){const{badgeContent:e,invisible:r=!1,max:s=99,showZero:l=!1}=o,c=H({badgeContent:e,max:s});let t=r;r===!1&&e===0&&!l&&(t=!0);const{badgeContent:n,max:d=s}=t?c:o,p=n&&Number(n)>d?`${d}+`:n;return{badgeContent:n,invisible:t,max:d,displayValue:p}}function ue(o){return le("MuiBadge",o)}const me=se("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),i=me,y=10,P=4,he=o=>{const{color:e,anchorOrigin:r,invisible:s,overlap:l,variant:c,classes:t={}}=o,n={root:["root"],badge:["badge",c,s&&"invisible",`anchorOrigin${a(r.vertical)}${a(r.horizontal)}`,`anchorOrigin${a(r.vertical)}${a(r.horizontal)}${a(l)}`,`overlap${a(l)}`,e!=="default"&&`color${a(e)}`]};return ce(n,ue,t)},fe=F("span",{name:"MuiBadge",slot:"Root",overridesResolver:(o,e)=>e.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),ve=F("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[e.badge,e[r.variant],e[`anchorOrigin${a(r.anchorOrigin.vertical)}${a(r.anchorOrigin.horizontal)}${a(r.overlap)}`],r.color!=="default"&&e[`color${a(r.color)}`],r.invisible&&e.invisible]}})(({theme:o,ownerState:e})=>({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(12),minWidth:y*2,lineHeight:1,padding:"0 6px",height:y*2,borderRadius:y,zIndex:1,transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.enteringScreen}),...e.color!=="default"&&{backgroundColor:(o.vars||o).palette[e.color].main,color:(o.vars||o).palette[e.color].contrastText},...e.variant==="dot"&&{borderRadius:P,height:P*2,minWidth:P*2,padding:0},...e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${i.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${i.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${i.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${i.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${i.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},...e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${i.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},...e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${i.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},...e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${i.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},...e.invisible&&{transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.leavingScreen})}})),be=B.forwardRef(function(e,r){var s,l,c,t,n,d;const p=de({props:e,name:"MuiBadge"}),{anchorOrigin:C={vertical:"top",horizontal:"right"},className:j,classes:ye,component:k,components:R={},componentsProps:T={},children:Y,overlap:$="rectangular",color:z="default",invisible:G=!1,max:J=99,badgeContent:V,slots:g,slotProps:u,showZero:_=!1,variant:f="standard",...K}=p,{badgeContent:q,invisible:Q,max:X,displayValue:w}=ge({max:J,invisible:G,badgeContent:V,showZero:_}),ee=H({anchorOrigin:C,color:z,overlap:$,variant:f,badgeContent:V}),N=Q||q==null&&f!=="dot",{color:oe=z,overlap:re=$,anchorOrigin:ae=C,variant:I=f}=N?ee:p,M=I!=="dot"?w:void 0,v={...p,badgeContent:q,invisible:N,max:X,displayValue:M,showZero:_,anchorOrigin:ae,color:oe,overlap:re,variant:I},E=he(v),L=(s=(l=g==null?void 0:g.root)!=null?l:R.Root)!=null?s:fe,S=(c=(t=g==null?void 0:g.badge)!=null?t:R.Badge)!=null?c:ve,b=(n=u==null?void 0:u.root)!=null?n:T.root,O=(d=u==null?void 0:u.badge)!=null?d:T.badge,ne=W({elementType:L,externalSlotProps:b,externalForwardedProps:K,additionalProps:{ref:r,as:k},ownerState:v,className:U(b==null?void 0:b.className,E.root,j)}),te=W({elementType:S,externalSlotProps:O,ownerState:v,className:U(E.badge,O==null?void 0:O.className)});return ie(L,{...ne,children:[Y,x(S,{...te,children:M})]})}),Oe=be,h=({children:o,color:e="error",...r})=>x(Oe,{color:e,...r,children:o});try{h.displayName="Badge",h.__docgenInfo={description:"",displayName:"Badge",props:{badgeContent:{defaultValue:null,description:"The content rendered within the badge.",name:"badgeContent",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"The badge will be added relative to this node.",name:"children",required:!0,type:{name:"React.ReactNode"}},color:{defaultValue:{value:"error"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:'"primary" | "error"'}},anchorOrigin:{defaultValue:{value:`{
vertical: 'top',
horizontal: 'right',
}`},description:"The anchor of the badge.",name:"anchorOrigin",required:!1,type:{name:"BadgeOrigin"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<BadgeClasses> & Partial<ClassNameMap<never>>"}},className:{defaultValue:null,description:"@ignore",name:"className",required:!1,type:{name:"string"}},componentsProps:{defaultValue:{value:"{}"},description:"The extra props for the slot components.\nYou can override the existing props or add new ones.\n\nThis prop is an alias for the `slotProps` prop.\nIt's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.",name:"componentsProps",required:!1,type:{name:'{ root?: SlotComponentProps<"span", BadgeRootSlotPropsOverrides, { badgeContent: ReactNode; children?: ReactNode; invisible: boolean; max: number; slotProps?: ...; slots?: BadgeSlots; showZero: boolean; }>; badge?: SlotComponentProps<...>; }'}},components:{defaultValue:{value:"{}"},description:"The components used for each slot inside.\n\nThis prop is an alias for the `slots` prop.\nIt's recommended to use the `slots` prop instead.",name:"components",required:!1,type:{name:"{ Root?: ElementType<any>; Badge?: ElementType<any>; }"}},overlap:{defaultValue:{value:"'rectangular'"},description:"Wrapped shape the badge should overlap.",name:"overlap",required:!1,type:{name:'"rectangular" | "circular"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},variant:{defaultValue:{value:"'standard'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"standard" | "dot"'}},invisible:{defaultValue:{value:"false"},description:"If `true`, the badge is invisible.",name:"invisible",required:!1,type:{name:"boolean"}},max:{defaultValue:{value:"99"},description:"Max count to show.",name:"max",required:!1,type:{name:"number"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Badge.",name:"slotProps",required:!1,type:{name:'{ root?: SlotComponentProps<"span", BadgeRootSlotPropsOverrides, { badgeContent: ReactNode; children?: ReactNode; invisible: boolean; max: number; slotProps?: ...; slots?: BadgeSlots; showZero: boolean; }>; badge?: SlotComponentProps<...>; }'}},slots:{defaultValue:{value:"{}"},description:`The components used for each slot inside the Badge.
Either a string to use a HTML element or a component.`,name:"slots",required:!1,type:{name:"BadgeSlots"}},showZero:{defaultValue:{value:"false"},description:"Controls whether the badge is hidden when `badgeContent` is zero.",name:"showZero",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}}}}}catch{}const ze={title:"Components/Badge/Badge",component:h,tags:["autodocs"]},m={render:o=>x(h,{...o}),args:{children:"This text is a child of the badge",badgeContent:3,variant:"standard",anchorOrigin:{horizontal:"right",vertical:"top"}}};var D,Z,A;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:A.source}}};const Ve=["_Badge"];export{m as _Badge,Ve as __namedExportsOrder,ze as default};
//# sourceMappingURL=Badge.stories-1d3356ad.js.map