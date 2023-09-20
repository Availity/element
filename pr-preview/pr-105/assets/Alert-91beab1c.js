import{j as n,a as U}from"./jsx-runtime-390e5fc8.js";import{I as j}from"./index-d51ee930.js";import{W as S,I as F,f as Y}from"./index-91a95a3a.js";import{r as Z}from"./index-570b25c1.js";import{g as D,b as G,s as c,c as J,a as K}from"./styled-2191822d.js";import{e as $,t as b,v as T,c as Q}from"./useThemeProps-66ab754c.js";import{c as d}from"./createSvgIcon-cafa5f0c.js";import{C as X}from"./Close-dea21bc6.js";import{M as ee}from"./Paper-576c7647.js";import{M as oe}from"./IconButton-130e3844.js";function te(e){return G("MuiAlert",e)}const ne=D("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),P=ne,se=d(n("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),re=d(n("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),ae=d(n("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),le=d(n("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),ie=e=>{const{variant:t,color:s,severity:r,classes:o}=e,i={root:["root",`${t}${$(s||r)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return K(i,te,o)},ce=c(ee,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.variant],t[`${s.variant}${$(s.color||s.severity)}`]]}})(({theme:e,ownerState:t})=>{const s=e.palette.mode==="light"?b:T,r=e.palette.mode==="light"?T:b,o=t.color||t.severity;return{...e.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",...o&&t.variant==="standard"&&{color:e.vars?e.vars.palette.Alert[`${o}Color`]:s(e.palette[o].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${o}StandardBg`]:r(e.palette[o].light,.9),[`& .${P.icon}`]:e.vars?{color:e.vars.palette.Alert[`${o}IconColor`]}:{color:e.palette[o].main}},...o&&t.variant==="outlined"&&{color:e.vars?e.vars.palette.Alert[`${o}Color`]:s(e.palette[o].light,.6),border:`1px solid ${(e.vars||e).palette[o].light}`,[`& .${P.icon}`]:e.vars?{color:e.vars.palette.Alert[`${o}IconColor`]}:{color:e.palette[o].main}},...o&&t.variant==="filled"&&{fontWeight:e.typography.fontWeightMedium,...e.vars?{color:e.vars.palette.Alert[`${o}FilledColor`],backgroundColor:e.vars.palette.Alert[`${o}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[o].dark:e.palette[o].main,color:e.palette.getContrastText(e.palette[o].main)}}}}),de=c("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),pe=c("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),w=c("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),q={success:n(se,{fontSize:"inherit"}),warning:n(re,{fontSize:"inherit"}),error:n(ae,{fontSize:"inherit"}),info:n(le,{fontSize:"inherit"})},ue=Z.forwardRef(function(t,s){var r,o,i,f,m,h;const v=Q({props:t,name:"MuiAlert"}),{action:p,children:B,className:R,closeText:g="Close",color:z,components:y={},componentsProps:I={},icon:C,iconMapping:k=q,onClose:A,role:E="alert",severity:u="success",slotProps:M={},slots:x={},variant:N="standard",..._}=v,a={...v,color:z,severity:u,variant:N},l=ie(a),L=(r=(o=x.closeButton)!=null?o:y.CloseButton)!=null?r:oe,O=(i=(f=x.closeIcon)!=null?f:y.CloseIcon)!=null?i:X,W=(m=M.closeButton)!=null?m:I.closeButton,H=(h=M.closeIcon)!=null?h:I.closeIcon;return U(ce,{role:E,elevation:0,ownerState:a,className:J(l.root,R),ref:s,..._,children:[C!==!1?n(de,{ownerState:a,className:l.icon,children:C||k[u]||q[u]}):null,n(pe,{ownerState:a,className:l.message,children:B}),p!=null?n(w,{ownerState:a,className:l.action,children:p}):null,p==null&&A?n(w,{ownerState:a,className:l.action,children:n(L,{size:"small","aria-label":g,title:g,color:"inherit",onClick:A,...W,children:n(O,{fontSize:"small",...H})})}):null]})}),fe=ue,me={error:n(S,{"aria-hidden":!1,titleAccess:"error"}),info:n(F,{"aria-hidden":!1}),success:n(Y,{"aria-hidden":!1}),warning:n(S,{"aria-hidden":!1,sx:{color:"warning.dark"}})},V=({...e})=>n(fe,{variant:"standard",iconMapping:me,closeText:"dismiss alert",slots:{closeButton:j},...e});try{V.displayName="Alert",V.__docgenInfo={description:"",displayName:"Alert",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AlertClasses>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},role:{defaultValue:{value:"'alert'"},description:"The ARIA role attribute of the element.",name:"role",required:!1,type:{name:"string"}},elevation:{defaultValue:{value:"1"},description:"Shadow depth, corresponds to `dp` in the spec.\nIt accepts values between 0 and 24 inclusive.",name:"elevation",required:!1,type:{name:"number"}},square:{defaultValue:{value:"false"},description:"If `true`, rounded corners are disabled.",name:"square",required:!1,type:{name:"boolean"}},action:{defaultValue:null,description:"The action to display. It renders after the message, at the end of the alert.",name:"action",required:!1,type:{name:"ReactNode"}},closeText:{defaultValue:{value:"'Close'"},description:`Override the default label for the *close popup* icon button.

For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).`,name:"closeText",required:!1,type:{name:"string"}},components:{defaultValue:{value:"{}"},description:"The components used for each slot inside.\n\nThis prop is an alias for the `slots` prop.\nIt's recommended to use the `slots` prop instead.",name:"components",required:!1,type:{name:"{ CloseButton?: ElementType<any>; CloseIcon?: ElementType<any>; }"}},componentsProps:{defaultValue:{value:"{}"},description:"The extra props for the slot components.\nYou can override the existing props or add new ones.\n\nThis prop is an alias for the `slotProps` prop.\nIt's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.",name:"componentsProps",required:!1,type:{name:'{ closeButton?: IconButtonProps<"button", {}>; closeIcon?: SvgIconProps<"svg", {}>; }'}},severity:{defaultValue:{value:"'success'"},description:"The severity of the alert. This defines the color and icon used.",name:"severity",required:!1,type:{name:'"error" | "info" | "success" | "warning"'}},icon:{defaultValue:null,description:"Override the icon displayed before the children.\nUnless provided, the icon is mapped to the value of the `severity` prop.\nSet to `false` to remove the `icon`.",name:"icon",required:!1,type:{name:"ReactNode"}},iconMapping:{defaultValue:null,description:"The component maps the `severity` prop to a range of different icons,\nfor instance success to `<SuccessOutlined>`.\nIf you wish to change this mapping, you can provide your own.\nAlternatively, you can use the `icon` prop to override the icon displayed.",name:"iconMapping",required:!1,type:{name:"Partial<Record<AlertColor, ReactNode>>"}},onClose:{defaultValue:null,description:"Callback fired when the component requests to be closed.\nWhen provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.\n@param event The event source of the callback.",name:"onClose",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>) => void"}},slotProps:{defaultValue:{value:"{}"},description:`The extra props for the slot components.
You can override the existing props or add new ones.

This prop is an alias for the \`componentsProps\` prop, which will be deprecated in the future.`,name:"slotProps",required:!1,type:{name:'{ closeButton?: IconButtonProps<"button", {}>; closeIcon?: SvgIconProps<"svg", {}>; }'}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.\n\nThis prop is an alias for the `components` prop, which will be deprecated in the future.",name:"slots",required:!1,type:{name:"{ closeButton?: ElementType<any>; closeIcon?: ElementType<any>; }"}}}}}catch{}export{V as A};
//# sourceMappingURL=Alert-91beab1c.js.map
