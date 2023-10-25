import{f as ke,_ as p,b as oe}from"./createTheme-e6b56ddb.js";import{r as c}from"./index-570b25c1.js";import"./react-is.production.min-a192e302.js";import{c as W}from"./clsx-8416b751.js";import{g as ue,s as V,c as pe}from"./styled-188025da.js";import{u as fe}from"./useThemeProps-db7202c2.js";import{u as ze}from"./useTheme-3a36d7a0.js";import{a as K,j as I}from"./jsx-runtime-390e5fc8.js";import{o as Le,d as Ve}from"./ownerWindow-698471fc.js";import{u as et}from"./useEnhancedEffect-460150e6.js";import{g as be}from"./generateUtilityClasses-f776b170.js";import{K as tt,a as ot}from"./KeyboardArrowRight-5ae0643c.js";import{B as Fe,u as ce}from"./ButtonBase-6040f690.js";import{u as te}from"./useSlotProps-1710581f.js";import{o as lt}from"./ownerDocument-613eb639.js";let _;function Ae(){if(_)return _;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),_="reverse",e.scrollLeft>0?_="default":(e.scrollLeft=1,e.scrollLeft===0&&(_="negative")),document.body.removeChild(e),_}function rt(e,t){const r=e.scrollLeft;if(t!=="rtl")return r;switch(Ae()){case"negative":return e.scrollWidth-e.clientWidth+r;case"reverse":return e.scrollWidth-e.clientWidth-r;default:return r}}function nt(e){return ue("MuiTab",e)}const st=be("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),L=st,at=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],it=e=>{const{classes:t,textColor:r,fullWidth:i,wrapped:n,icon:d,label:b,selected:f,disabled:u}=e,m={root:["root",d&&b&&"labelIcon",`textColor${ke(r)}`,i&&"fullWidth",n&&"wrapped",f&&"selected",u&&"disabled"],iconWrapper:["iconWrapper"]};return pe(m,nt,t)},ct=V(Fe,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.label&&r.icon&&t.labelIcon,t[`textColor${ke(r.textColor)}`],r.fullWidth&&t.fullWidth,r.wrapped&&t.wrapped]}})(({theme:e,ownerState:t})=>p({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.label&&{flexDirection:t.iconPosition==="top"||t.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${L.iconWrapper}`]:p({},t.iconPosition==="top"&&{marginBottom:6},t.iconPosition==="bottom"&&{marginTop:6},t.iconPosition==="start"&&{marginRight:e.spacing(1)},t.iconPosition==="end"&&{marginLeft:e.spacing(1)})},t.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${L.selected}`]:{opacity:1},[`&.${L.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.textColor==="primary"&&{color:(e.vars||e).palette.text.secondary,[`&.${L.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${L.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.textColor==="secondary"&&{color:(e.vars||e).palette.text.secondary,[`&.${L.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${L.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12)})),dt=c.forwardRef(function(t,r){const i=fe({props:t,name:"MuiTab"}),{className:n,disabled:d=!1,disableFocusRipple:b=!1,fullWidth:f,icon:u,iconPosition:m="top",indicator:C,label:w,onChange:y,onClick:S,onFocus:F,selected:B,selectionFollowsFocus:v,textColor:A="inherit",value:g,wrapped:le=!1}=i,$=oe(i,at),D=p({},i,{disabled:d,disableFocusRipple:b,selected:B,icon:!!u,iconPosition:m,label:!!w,fullWidth:f,textColor:A,wrapped:le}),H=it(D),N=u&&w&&c.isValidElement(u)?c.cloneElement(u,{className:W(H.iconWrapper,u.props.className)}):u,j=R=>{!B&&y&&y(R,g),S&&S(R)},q=R=>{v&&!B&&y&&y(R,g),F&&F(R)};return K(ct,p({focusRipple:!b,className:W(H.root,n),ref:r,role:"tab","aria-selected":B,disabled:d,onClick:j,onFocus:q,ownerState:D,tabIndex:B?0:-1},$,{children:[m==="top"||m==="start"?K(c.Fragment,{children:[N,w]}):K(c.Fragment,{children:[w,N]}),C]}))}),ut=dt;function pt(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function ft(e,t,r,i={},n=()=>{}){const{ease:d=pt,duration:b=300}=i;let f=null;const u=t[e];let m=!1;const C=()=>{m=!0},w=y=>{if(m){n(new Error("Animation cancelled"));return}f===null&&(f=y);const S=Math.min(1,(y-f)/b);if(t[e]=d(S)*(r-u)+u,S>=1){requestAnimationFrame(()=>{n(null)});return}requestAnimationFrame(w)};return u===r?(n(new Error("Element already at target position")),C):(requestAnimationFrame(w),C)}const bt=["onChange"],ht={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function mt(e){const{onChange:t}=e,r=oe(e,bt),i=c.useRef(),n=c.useRef(null),d=()=>{i.current=n.current.offsetHeight-n.current.clientHeight};return et(()=>{const b=Ve(()=>{const u=i.current;d(),u!==i.current&&t(i.current)}),f=Le(n.current);return f.addEventListener("resize",b),()=>{b.clear(),f.removeEventListener("resize",b)}},[t]),c.useEffect(()=>{d(),t(i.current)},[t]),I("div",p({style:ht,ref:n},r))}function St(e){return ue("MuiTabScrollButton",e)}const vt=be("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),yt=vt,gt=["className","slots","slotProps","direction","orientation","disabled"],xt=e=>{const{classes:t,orientation:r,disabled:i}=e;return pe({root:["root",r,i&&"disabled"]},St,t)},Ct=V(Fe,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.orientation&&t[r.orientation]]}})(({ownerState:e})=>p({width:40,flexShrink:0,opacity:.8,[`&.${yt.disabled}`]:{opacity:0}},e.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}})),wt=c.forwardRef(function(t,r){var i,n;const d=fe({props:t,name:"MuiTabScrollButton"}),{className:b,slots:f={},slotProps:u={},direction:m}=d,C=oe(d,gt),y=ze().direction==="rtl",S=p({isRtl:y},d),F=xt(S),B=(i=f.StartScrollButtonIcon)!=null?i:tt,v=(n=f.EndScrollButtonIcon)!=null?n:ot,A=te({elementType:B,externalSlotProps:u.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S}),g=te({elementType:v,externalSlotProps:u.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S});return I(Ct,p({component:"div",className:W(F.root,b),ref:r,role:null,ownerState:S,tabIndex:null},C,{children:m==="left"?I(B,p({},A)):I(v,p({},g))}))}),Bt=wt;function Tt(e){return ue("MuiTabs",e)}const It=be("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),de=It,Rt=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],Me=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,Pe=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,ee=(e,t,r)=>{let i=!1,n=r(e,t);for(;n;){if(n===e.firstChild){if(i)return;i=!0}const d=n.disabled||n.getAttribute("aria-disabled")==="true";if(!n.hasAttribute("tabindex")||d)n=r(e,n);else{n.focus();return}}},Et=e=>{const{vertical:t,fixed:r,hideScrollbar:i,scrollableX:n,scrollableY:d,centered:b,scrollButtonsHideMobile:f,classes:u}=e;return pe({root:["root",t&&"vertical"],scroller:["scroller",r&&"fixed",i&&"hideScrollbar",n&&"scrollableX",d&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",b&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",f&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[i&&"hideScrollbar"]},Tt,u)},Mt=V("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${de.scrollButtons}`]:t.scrollButtons},{[`& .${de.scrollButtons}`]:r.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,r.vertical&&t.vertical]}})(({ownerState:e,theme:t})=>p({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${de.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}})),Pt=V("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.scroller,r.fixed&&t.fixed,r.hideScrollbar&&t.hideScrollbar,r.scrollableX&&t.scrollableX,r.scrollableY&&t.scrollableY]}})(({ownerState:e})=>p({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),Wt=V("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.flexContainer,r.vertical&&t.flexContainerVertical,r.centered&&t.centered]}})(({ownerState:e})=>p({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"})),Nt=V("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(({ownerState:e,theme:t})=>p({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},e.indicatorColor==="primary"&&{backgroundColor:(t.vars||t).palette.primary.main},e.indicatorColor==="secondary"&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0})),kt=V(mt)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),We={},zt=c.forwardRef(function(t,r){const i=fe({props:t,name:"MuiTabs"}),n=ze(),d=n.direction==="rtl",{"aria-label":b,"aria-labelledby":f,action:u,centered:m=!1,children:C,className:w,component:y="div",allowScrollButtonsMobile:S=!1,indicatorColor:F="primary",onChange:B,orientation:v="horizontal",ScrollButtonComponent:A=Bt,scrollButtons:g="auto",selectionFollowsFocus:le,slots:$={},slotProps:D={},TabIndicatorProps:H={},TabScrollButtonProps:N={},textColor:j="primary",value:q,variant:R="standard",visibleScrollbar:re=!1}=i,$e=oe(i,Rt),T=R==="scrollable",x=v==="vertical",X=x?"scrollTop":"scrollLeft",G=x?"top":"left",J=x?"bottom":"right",ne=x?"clientHeight":"clientWidth",U=x?"height":"width",k=p({},i,{component:y,allowScrollButtonsMobile:S,indicatorColor:F,orientation:v,vertical:x,scrollButtons:g,textColor:j,variant:R,visibleScrollbar:re,fixed:!T,hideScrollbar:T&&!re,scrollableX:T&&!x,scrollableY:T&&x,centered:m&&!T,scrollButtonsHideMobile:!S}),M=Et(k),He=te({elementType:$.StartScrollButtonIcon,externalSlotProps:D.startScrollButtonIcon,ownerState:k}),qe=te({elementType:$.EndScrollButtonIcon,externalSlotProps:D.endScrollButtonIcon,ownerState:k}),[he,Oe]=c.useState(!1),[z,me]=c.useState(We),[Se,_e]=c.useState(!1),[ve,De]=c.useState(!1),[ye,Xe]=c.useState(!1),[ge,Ue]=c.useState({overflow:"hidden",scrollbarWidth:0}),xe=new Map,E=c.useRef(null),O=c.useRef(null),Ce=()=>{const o=E.current;let l;if(o){const a=o.getBoundingClientRect();l={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:rt(o,n.direction),scrollWidth:o.scrollWidth,top:a.top,bottom:a.bottom,left:a.left,right:a.right}}let s;if(o&&q!==!1){const a=O.current.children;if(a.length>0){const h=a[xe.get(q)];s=h?h.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:s}},Y=ce(()=>{const{tabsMeta:o,tabMeta:l}=Ce();let s=0,a;if(x)a="top",l&&o&&(s=l.top-o.top+o.scrollTop);else if(a=d?"right":"left",l&&o){const P=d?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;s=(d?-1:1)*(l[a]-o[a]+P)}const h={[a]:s,[U]:l?l[U]:0};if(isNaN(z[a])||isNaN(z[U]))me(h);else{const P=Math.abs(z[a]-h[a]),Z=Math.abs(z[U]-h[U]);(P>=1||Z>=1)&&me(h)}}),se=(o,{animation:l=!0}={})=>{l?ft(X,E.current,o,{duration:n.transitions.duration.standard}):E.current[X]=o},we=o=>{let l=E.current[X];x?l+=o:(l+=o*(d?-1:1),l*=d&&Ae()==="reverse"?-1:1),se(l)},Be=()=>{const o=E.current[ne];let l=0;const s=Array.from(O.current.children);for(let a=0;a<s.length;a+=1){const h=s[a];if(l+h[ne]>o){a===0&&(l=o);break}l+=h[ne]}return l},Ye=()=>{we(-1*Be())},Ke=()=>{we(Be())},je=c.useCallback(o=>{Ue({overflow:null,scrollbarWidth:o})},[]),Ge=()=>{const o={};o.scrollbarSizeListener=T?I(kt,{onChange:je,className:W(M.scrollableX,M.hideScrollbar)}):null;const s=T&&(g==="auto"&&(Se||ve)||g===!0);return o.scrollButtonStart=s?I(A,p({slots:{StartScrollButtonIcon:$.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:He},orientation:v,direction:d?"right":"left",onClick:Ye,disabled:!Se},N,{className:W(M.scrollButtons,N.className)})):null,o.scrollButtonEnd=s?I(A,p({slots:{EndScrollButtonIcon:$.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:qe},orientation:v,direction:d?"left":"right",onClick:Ke,disabled:!ve},N,{className:W(M.scrollButtons,N.className)})):null,o},Te=ce(o=>{const{tabsMeta:l,tabMeta:s}=Ce();if(!(!s||!l)){if(s[G]<l[G]){const a=l[X]+(s[G]-l[G]);se(a,{animation:o})}else if(s[J]>l[J]){const a=l[X]+(s[J]-l[J]);se(a,{animation:o})}}}),Ie=ce(()=>{T&&g!==!1&&Xe(!ye)});c.useEffect(()=>{const o=Ve(()=>{E.current&&Y()}),l=Le(E.current);l.addEventListener("resize",o);let s;return typeof ResizeObserver<"u"&&(s=new ResizeObserver(o),Array.from(O.current.children).forEach(a=>{s.observe(a)})),()=>{o.clear(),l.removeEventListener("resize",o),s&&s.disconnect()}},[Y]),c.useEffect(()=>{const o=Array.from(O.current.children),l=o.length;if(typeof IntersectionObserver<"u"&&l>0&&T&&g!==!1){const s=o[0],a=o[l-1],h={root:E.current,threshold:.99},P=ie=>{_e(!ie[0].isIntersecting)},Z=new IntersectionObserver(P,h);Z.observe(s);const Ze=ie=>{De(!ie[0].isIntersecting)},Ee=new IntersectionObserver(Ze,h);return Ee.observe(a),()=>{Z.disconnect(),Ee.disconnect()}}},[T,g,ye,C==null?void 0:C.length]),c.useEffect(()=>{Oe(!0)},[]),c.useEffect(()=>{Y()}),c.useEffect(()=>{Te(We!==z)},[Te,z]),c.useImperativeHandle(u,()=>({updateIndicator:Y,updateScrollButtons:Ie}),[Y,Ie]);const Re=I(Nt,p({},H,{className:W(M.indicator,H.className),ownerState:k,style:p({},z,H.style)}));let Q=0;const Je=c.Children.map(C,o=>{if(!c.isValidElement(o))return null;const l=o.props.value===void 0?Q:o.props.value;xe.set(l,Q);const s=l===q;return Q+=1,c.cloneElement(o,p({fullWidth:R==="fullWidth",indicator:s&&!he&&Re,selected:s,selectionFollowsFocus:le,onChange:B,textColor:j,value:l},Q===1&&q===!1&&!o.props.tabIndex?{tabIndex:0}:{}))}),Qe=o=>{const l=O.current,s=lt(l).activeElement;if(s.getAttribute("role")!=="tab")return;let h=v==="horizontal"?"ArrowLeft":"ArrowUp",P=v==="horizontal"?"ArrowRight":"ArrowDown";switch(v==="horizontal"&&d&&(h="ArrowRight",P="ArrowLeft"),o.key){case h:o.preventDefault(),ee(l,s,Pe);break;case P:o.preventDefault(),ee(l,s,Me);break;case"Home":o.preventDefault(),ee(l,null,Me);break;case"End":o.preventDefault(),ee(l,null,Pe);break}},ae=Ge();return K(Mt,p({className:W(M.root,w),ownerState:k,ref:r,as:y},$e,{children:[ae.scrollButtonStart,ae.scrollbarSizeListener,K(Pt,{className:M.scroller,ownerState:k,style:{overflow:ge.overflow,[x?`margin${d?"Left":"Right"}`:"marginBottom"]:re?void 0:-ge.scrollbarWidth},ref:E,children:[I(Wt,{"aria-label":b,"aria-labelledby":f,"aria-orientation":v==="vertical"?"vertical":null,className:M.flexContainer,ownerState:k,onKeyDown:Qe,ref:O,role:"tablist",children:Je}),he&&Re]}),ae.scrollButtonEnd]}))}),Gt=zt,Ne=e=>I(ut,{...e,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0});try{Ne.displayName="Tab",Ne.__docgenInfo={description:"",displayName:"Tab",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TabClasses> & Partial<ClassNameMap<never>>"}},children:{defaultValue:null,description:"This prop isn't supported.\nUse the `component` prop if you need to change the children structure.\nThe content of the component.",name:"children",required:!1,type:{name:"null"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},label:{defaultValue:null,description:"The label element.",name:"label",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},touchRippleRef:{defaultValue:null,description:"A ref that points to the `TouchRipple` element.",name:"touchRippleRef",required:!1,type:{name:"Ref<TouchRippleActions>"}},value:{defaultValue:null,description:"You can provide your own value. Otherwise, we fallback to the child position index.",name:"value",required:!1,type:{name:"any"}},wrapped:{defaultValue:{value:"false"},description:`Tab labels appear in a single row.
They can use a second line if needed.`,name:"wrapped",required:!1,type:{name:"boolean"}}}}}catch{}export{Gt as M,Ne as T};
//# sourceMappingURL=Tab-3270b901.js.map
