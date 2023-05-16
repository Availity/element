import{g as ee,a as te,s as y,_ as i,u as oe,d as he,b as ne,c as re,e as se,f as ie,h as j,l as Z}from"./useThemeProps-9d4ada4e.js";import{r as h}from"./index-f1f749bf.js";import{T as me,u as ve,g as G,c as _,P as Ce,I as xe}from"./IconButton-e3e622fb.js";import{j as r,a as Ae}from"./jsx-runtime-670450c2.js";import{u as ye}from"./useForkRef-2e794f8b.js";import{S as Ie}from"./SvgIcon-2c7f2328.js";import{f as Ee,a as we,b as $e}from"./faExclamationCircle-878a3411.js";function ze(e){return ee("MuiCollapse",e)}te("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const Me=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Se=e=>{const{orientation:t,classes:s}=e,a={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return se(a,ze,s)},Re=y("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.orientation],s.state==="entered"&&t.entered,s.state==="exited"&&!s.in&&s.collapsedSize==="0px"&&t.hidden]}})(({theme:e,ownerState:t})=>i({height:0,overflow:"hidden",transition:e.transitions.create("height")},t.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},t.state==="entered"&&i({height:"auto",overflow:"visible"},t.orientation==="horizontal"&&{width:"auto"}),t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&{visibility:"hidden"})),Te=y("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})(({ownerState:e})=>i({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Le=y("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})(({ownerState:e})=>i({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),ae=h.forwardRef(function(t,s){const a=oe({props:t,name:"MuiCollapse"}),{addEndListener:n,children:f,className:m,collapsedSize:v="0px",component:b,easing:I,in:E,onEnter:N,onEntered:W,onEntering:M,onExit:B,onExited:k,onExiting:S,orientation:R="vertical",style:T,timeout:d=he.standard,TransitionComponent:O=me}=a,L=ne(a,Me),C=i({},a,{orientation:R,collapsedSize:v}),g=Se(C),D=ve(),H=h.useRef(),l=h.useRef(null),p=h.useRef(),w=typeof v=="number"?`${v}px`:v,x=R==="horizontal",A=x?"width":"height";h.useEffect(()=>()=>{clearTimeout(H.current)},[]);const $=h.useRef(null),le=ye(s,$),z=o=>c=>{if(o){const u=$.current;c===void 0?o(u):o(u,c)}},U=()=>l.current?l.current[x?"clientWidth":"clientHeight"]:0,ce=z((o,c)=>{l.current&&x&&(l.current.style.position="absolute"),o.style[A]=w,N&&N(o,c)}),de=z((o,c)=>{const u=U();l.current&&x&&(l.current.style.position="");const{duration:P,easing:F}=G({style:T,timeout:d,easing:I},{mode:"enter"});if(d==="auto"){const q=D.transitions.getAutoHeightDuration(u);o.style.transitionDuration=`${q}ms`,p.current=q}else o.style.transitionDuration=typeof P=="string"?P:`${P}ms`;o.style[A]=`${u}px`,o.style.transitionTimingFunction=F,M&&M(o,c)}),pe=z((o,c)=>{o.style[A]="auto",W&&W(o,c)}),ue=z(o=>{o.style[A]=`${U()}px`,B&&B(o)}),fe=z(k),ge=z(o=>{const c=U(),{duration:u,easing:P}=G({style:T,timeout:d,easing:I},{mode:"exit"});if(d==="auto"){const F=D.transitions.getAutoHeightDuration(c);o.style.transitionDuration=`${F}ms`,p.current=F}else o.style.transitionDuration=typeof u=="string"?u:`${u}ms`;o.style[A]=w,o.style.transitionTimingFunction=P,S&&S(o)});return r(O,i({in:E,onEnter:ce,onEntered:pe,onEntering:de,onExit:ue,onExited:fe,onExiting:ge,addEndListener:o=>{d==="auto"&&(H.current=setTimeout(o,p.current||0)),n&&n($.current,o)},nodeRef:$,timeout:d==="auto"?null:d},L,{children:(o,c)=>r(Re,i({as:b,className:re(g.root,m,{entered:g.entered,exited:!E&&w==="0px"&&g.hidden}[o]),style:i({[x?"minWidth":"minHeight"]:w},T),ownerState:i({},C,{state:o}),ref:le},c,{children:r(Te,{ownerState:i({},C,{state:o}),className:g.wrapper,ref:l,children:r(Le,{ownerState:i({},C,{state:o}),className:g.wrapperInner,children:f})})}))}))});ae.muiSupportAuto=!0;const nt=ae;function Pe(e){return ee("MuiAlert",e)}const _e=te("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),J=_e,be=_(r("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Ne=_(r("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),We=_(r("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),Be=_(r("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),ke=_(r("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),De=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],He=e=>{const{variant:t,color:s,severity:a,classes:n}=e,f={root:["root",`${t}${ie(s||a)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return se(f,Pe,n)},Fe=y(Ce,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.variant],t[`${s.variant}${ie(s.color||s.severity)}`]]}})(({theme:e,ownerState:t})=>{const s=e.palette.mode==="light"?j:Z,a=e.palette.mode==="light"?Z:j,n=t.color||t.severity;return i({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},n&&t.variant==="standard"&&{color:e.vars?e.vars.palette.Alert[`${n}Color`]:s(e.palette[n].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${n}StandardBg`]:a(e.palette[n].light,.9),[`& .${J.icon}`]:e.vars?{color:e.vars.palette.Alert[`${n}IconColor`]}:{color:e.palette[n].main}},n&&t.variant==="outlined"&&{color:e.vars?e.vars.palette.Alert[`${n}Color`]:s(e.palette[n].light,.6),border:`1px solid ${(e.vars||e).palette[n].light}`,[`& .${J.icon}`]:e.vars?{color:e.vars.palette.Alert[`${n}IconColor`]}:{color:e.palette[n].main}},n&&t.variant==="filled"&&i({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${n}FilledColor`],backgroundColor:e.vars.palette.Alert[`${n}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[n].dark:e.palette[n].main,color:e.palette.getContrastText(e.palette[n].main)}))}),Oe=y("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Ue=y("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),K=y("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),Q={success:r(be,{fontSize:"inherit"}),warning:r(Ne,{fontSize:"inherit"}),error:r(We,{fontSize:"inherit"}),info:r(Be,{fontSize:"inherit"})},Ve=h.forwardRef(function(t,s){var a,n,f,m,v,b;const I=oe({props:t,name:"MuiAlert"}),{action:E,children:N,className:W,closeText:M="Close",color:B,components:k={},componentsProps:S={},icon:R,iconMapping:T=Q,onClose:d,role:O="alert",severity:L="success",slotProps:C={},slots:g={},variant:D="standard"}=I,H=ne(I,De),l=i({},I,{color:B,severity:L,variant:D}),p=He(l),w=(a=(n=g.closeButton)!=null?n:k.CloseButton)!=null?a:xe,x=(f=(m=g.closeIcon)!=null?m:k.CloseIcon)!=null?f:ke,A=(v=C.closeButton)!=null?v:S.closeButton,$=(b=C.closeIcon)!=null?b:S.closeIcon;return Ae(Fe,i({role:O,elevation:0,ownerState:l,className:re(p.root,W),ref:s},H,{children:[R!==!1?r(Oe,{ownerState:l,className:p.icon,children:R||T[L]||Q[L]}):null,r(Ue,{ownerState:l,className:p.message,children:N}),E!=null?r(K,{ownerState:l,className:p.action,children:E}):null,E==null&&d?r(K,{ownerState:l,className:p.action,children:r(w,i({size:"small","aria-label":M,title:M,color:"inherit",onClick:d},A,{children:r(x,i({fontSize:"small"},$))}))}):null]}))}),qe=Ve;var V=h.forwardRef((e,t)=>{const{icon:s,...a}=e,{icon:[n,f,,,m]}=s;return r(Ie,{ref:t,viewBox:`0 0 ${n} ${f}`,...a,children:typeof m=="string"?r("path",{d:m}):null})}),je=({...e})=>r(V,{icon:Ee.faCheckCircle,titleAccess:"success",...e}),Ze=({...e})=>r(V,{icon:we.faInfoCircle,titleAccess:"information",...e}),X=({...e})=>r(V,{icon:$e.faExclamationCircle,titleAccess:"warning",...e});const Ge={error:r(X,{"aria-hidden":!1,titleAccess:"error"}),info:r(Ze,{"aria-hidden":!1}),success:r(je,{"aria-hidden":!1}),warning:r(X,{"aria-hidden":!1,sx:{color:"warning.dark"}})},Y=({...e})=>r(qe,{iconMapping:Ge,closeText:"dismiss alert",...e});try{Y.displayName="Alert",Y.__docgenInfo={description:"",displayName:"Alert",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},elevation:{defaultValue:{value:"1"},description:"Shadow depth, corresponds to `dp` in the spec.\nIt accepts values between 0 and 24 inclusive.",name:"elevation",required:!1,type:{name:"number"}},square:{defaultValue:{value:"false"},description:"If `true`, rounded corners are disabled.",name:"square",required:!1,type:{name:"boolean"}}}}}catch{}export{Y as A,nt as C};
//# sourceMappingURL=Alert-847a4ebb.js.map
