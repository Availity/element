import{r as d}from"./index-8db94870.js";import"./react-is.production.min-a192e302.js";import{g as fe,a as be,s as $,c as W,b as he}from"./styled-838f2411.js";import{c as ke,u as me}from"./useThemeProps-ac6a164c.js";import{u as ze}from"./useTheme-c349195b.js";import{a as J,j as T}from"./jsx-runtime-91a467a5.js";import{o as Pe,d as pe}from"./ownerWindow-698471fc.js";import{B as Ne,u as Ke,a as de}from"./ButtonBase-246c583e.js";import{K as je,a as Ge}from"./KeyboardArrowRight-c8f32650.js";import{u as re}from"./useSlotProps-8f208bee.js";import{o as Je}from"./ownerDocument-613eb639.js";let X;function Le(){if(X)return X;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),X="reverse",e.scrollLeft>0?X="default":(e.scrollLeft=1,e.scrollLeft===0&&(X="negative")),document.body.removeChild(e),X}function Ie(e,t){const r=e.scrollLeft;if(t!=="rtl")return r;switch(Le()){case"negative":return e.scrollWidth-e.clientWidth+r;case"reverse":return e.scrollWidth-e.clientWidth-r;default:return r}}function Qe(e){return be("MuiTab",e)}const Ze=fe("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),A=Ze,et=e=>{const{classes:t,textColor:r,fullWidth:c,wrapped:n,icon:i,label:f,selected:p,disabled:u}=e,h={root:["root",i&&f&&"labelIcon",`textColor${ke(r)}`,c&&"fullWidth",n&&"wrapped",p&&"selected",u&&"disabled"],iconWrapper:["iconWrapper"]};return he(h,Qe,t)},tt=$(Ne,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.label&&r.icon&&t.labelIcon,t[`textColor${ke(r.textColor)}`],r.fullWidth&&t.fullWidth,r.wrapped&&t.wrapped]}})(({theme:e,ownerState:t})=>({...e.typography.button,maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center",...t.label&&{flexDirection:t.iconPosition==="top"||t.iconPosition==="bottom"?"column":"row"},lineHeight:1.25,...t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${A.iconWrapper}`]:{...t.iconPosition==="top"&&{marginBottom:6},...t.iconPosition==="bottom"&&{marginTop:6},...t.iconPosition==="start"&&{marginRight:e.spacing(1)},...t.iconPosition==="end"&&{marginLeft:e.spacing(1)}}},...t.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${A.selected}`]:{opacity:1},[`&.${A.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},...t.textColor==="primary"&&{color:(e.vars||e).palette.text.secondary,[`&.${A.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${A.disabled}`]:{color:(e.vars||e).palette.text.disabled}},...t.textColor==="secondary"&&{color:(e.vars||e).palette.text.secondary,[`&.${A.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${A.disabled}`]:{color:(e.vars||e).palette.text.disabled}},...t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},...t.wrapped&&{fontSize:e.typography.pxToRem(12)}})),ot=d.forwardRef(function(t,r){const c=me({props:t,name:"MuiTab"}),{className:n,disabled:i=!1,disableFocusRipple:f=!1,fullWidth:p,icon:u,iconPosition:h="top",indicator:k,label:x,onChange:m,onClick:B,onFocus:Y,selected:S,selectionFollowsFocus:v,textColor:z="inherit",value:w,wrapped:U=!1,...R}=c,_={...c,disabled:i,disableFocusRipple:f,selected:S,icon:!!u,iconPosition:h,label:!!x,fullWidth:p,textColor:z,wrapped:U},F=et(_),P=u&&x&&d.isValidElement(u)?d.cloneElement(u,{className:W(F.iconWrapper,u.props.className)}):u,Q=I=>{!S&&m&&m(I,w),B&&B(I)},H=I=>{v&&!S&&m&&m(I,w),Y&&Y(I)};return J(tt,{focusRipple:!f,className:W(F.root,n),ref:r,role:"tab","aria-selected":S,disabled:i,onClick:Q,onFocus:H,ownerState:_,tabIndex:S?0:-1,...R,children:[h==="top"||h==="start"?J(d.Fragment,{children:[P,x]}):J(d.Fragment,{children:[x,P]}),k]})}),lt=ot;function rt(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function nt(e,t,r,c={},n=()=>{}){const{ease:i=rt,duration:f=300}=c;let p=null;const u=t[e];let h=!1;const k=()=>{h=!0},x=m=>{if(h){n(new Error("Animation cancelled"));return}p===null&&(p=m);const B=Math.min(1,(m-p)/f);if(t[e]=i(B)*(r-u)+u,B>=1){requestAnimationFrame(()=>{n(null)});return}requestAnimationFrame(x)};return u===r?(n(new Error("Element already at target position")),k):(requestAnimationFrame(x),k)}const st={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function at(e){const{onChange:t,...r}=e,c=d.useRef(),n=d.useRef(null),i=()=>{c.current=n.current.offsetHeight-n.current.clientHeight};return Ke(()=>{const f=pe(()=>{const u=c.current;i(),u!==c.current&&t(c.current)}),p=Pe(n.current);return p.addEventListener("resize",f),()=>{f.clear(),p.removeEventListener("resize",f)}},[t]),d.useEffect(()=>{i(),t(c.current)},[t]),T("div",{style:st,ref:n,...r})}function it(e){return be("MuiTabScrollButton",e)}const ct=fe("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),dt=ct,ut=e=>{const{classes:t,orientation:r,disabled:c}=e;return he({root:["root",r,c&&"disabled"]},it,t)},pt=$(Ne,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.orientation&&t[r.orientation]]}})(({ownerState:e})=>({width:40,flexShrink:0,opacity:.8,[`&.${dt.disabled}`]:{opacity:0},...e.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}}})),ft=d.forwardRef(function(t,r){var c,n;const i=me({props:t,name:"MuiTabScrollButton"}),{className:f,slots:p={},slotProps:u={},direction:h,orientation:k,disabled:x,...m}=i,S={isRtl:ze().direction==="rtl",...i},v=ut(S),z=(c=p.StartScrollButtonIcon)!=null?c:je,w=(n=p.EndScrollButtonIcon)!=null?n:Ge,U=re({elementType:z,externalSlotProps:u.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S}),R=re({elementType:w,externalSlotProps:u.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S});return T(pt,{component:"div",className:W(v.root,f),ref:r,role:null,ownerState:S,tabIndex:null,...m,children:h==="left"?T(z,{...U}):T(w,{...R})})}),bt=ft;function ht(e){return be("MuiTabs",e)}const mt=fe("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),ue=mt,Re=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,Ee=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,le=(e,t,r)=>{let c=!1,n=r(e,t);for(;n;){if(n===e.firstChild){if(c)return;c=!0}const i=n.disabled||n.getAttribute("aria-disabled")==="true";if(!n.hasAttribute("tabindex")||i)n=r(e,n);else{n.focus();return}}},St=e=>{const{vertical:t,fixed:r,hideScrollbar:c,scrollableX:n,scrollableY:i,centered:f,scrollButtonsHideMobile:p,classes:u}=e;return he({root:["root",t&&"vertical"],scroller:["scroller",r&&"fixed",c&&"hideScrollbar",n&&"scrollableX",i&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",f&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",p&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[c&&"hideScrollbar"]},ht,u)},vt=$("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${ue.scrollButtons}`]:t.scrollButtons},{[`& .${ue.scrollButtons}`]:r.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,r.vertical&&t.vertical]}})(({ownerState:e,theme:t})=>({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex",...e.vertical&&{flexDirection:"column"},...e.scrollButtonsHideMobile&&{[`& .${ue.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}}})),yt=$("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.scroller,r.fixed&&t.fixed,r.hideScrollbar&&t.hideScrollbar,r.scrollableX&&t.scrollableX,r.scrollableY&&t.scrollableY]}})(({ownerState:e})=>({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap",...e.fixed&&{overflowX:"hidden",width:"100%"},...e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},...e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},...e.scrollableY&&{overflowY:"auto",overflowX:"hidden"}})),gt=$("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.flexContainer,r.vertical&&t.flexContainerVertical,r.centered&&t.centered]}})(({ownerState:e})=>({display:"flex",...e.vertical&&{flexDirection:"column"},...e.centered&&{justifyContent:"center"}})),xt=$("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(({ownerState:e,theme:t})=>({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create(),...e.indicatorColor==="primary"&&{backgroundColor:(t.vars||t).palette.primary.main},...e.indicatorColor==="secondary"&&{backgroundColor:(t.vars||t).palette.secondary.main},...e.vertical&&{height:"100%",width:2,right:0}})),wt=$(at,{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Me={},Ct=d.forwardRef(function(t,r){const c=me({props:t,name:"MuiTabs"}),n=ze(),i=n.direction==="rtl",{"aria-label":f,"aria-labelledby":p,action:u,centered:h=!1,children:k,className:x,component:m="div",allowScrollButtonsMobile:B=!1,indicatorColor:Y="primary",onChange:S,orientation:v="horizontal",ScrollButtonComponent:z=bt,scrollButtons:w="auto",selectionFollowsFocus:U,slots:R={},slotProps:_={},TabIndicatorProps:F={},TabScrollButtonProps:P={},textColor:Q="primary",value:H,variant:I="standard",visibleScrollbar:ne=!1,...Ve}=c,E=I==="scrollable",y=v==="vertical",O=y?"scrollTop":"scrollLeft",Z=y?"top":"left",ee=y?"bottom":"right",se=y?"clientHeight":"clientWidth",K=y?"height":"width",N={...c,component:m,allowScrollButtonsMobile:B,indicatorColor:Y,orientation:v,vertical:y,scrollButtons:w,textColor:Q,variant:I,visibleScrollbar:ne,fixed:!E,hideScrollbar:E&&!ne,scrollableX:E&&!y,scrollableY:E&&y,centered:h&&!E,scrollButtonsHideMobile:!B},M=St(N),Ae=re({elementType:R.StartScrollButtonIcon,externalSlotProps:_.startScrollButtonIcon,ownerState:N}),$e=re({elementType:R.EndScrollButtonIcon,externalSlotProps:_.endScrollButtonIcon,ownerState:N}),[Se,Fe]=d.useState(!1),[L,ve]=d.useState(Me),[q,He]=d.useState({start:!1,end:!1}),[ye,qe]=d.useState({overflow:"hidden",scrollbarWidth:0}),ge=new Map,C=d.useRef(null),j=d.useRef(null),xe=()=>{const o=C.current;let l;if(o){const a=o.getBoundingClientRect();l={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:Ie(o,n.direction),scrollWidth:o.scrollWidth,top:a.top,bottom:a.bottom,left:a.left,right:a.right}}let s;if(o&&H!==!1){const a=j.current.children;if(a.length>0){const b=a[ge.get(H)];s=b?b.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:s}},G=de(()=>{const{tabsMeta:o,tabMeta:l}=xe();let s=0,a;if(y)a="top",l&&o&&(s=l.top-o.top+o.scrollTop);else if(a=i?"right":"left",l&&o){const g=i?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;s=(i?-1:1)*(l[a]-o[a]+g)}const b={[a]:s,[K]:l?l[K]:0};if(isNaN(L[a])||isNaN(L[K]))ve(b);else{const g=Math.abs(L[a]-b[a]),D=Math.abs(L[K]-b[K]);(g>=1||D>=1)&&ve(b)}}),ae=(o,{animation:l=!0}={})=>{l?nt(O,C.current,o,{duration:n.transitions.duration.standard}):C.current[O]=o},we=o=>{let l=C.current[O];y?l+=o:(l+=o*(i?-1:1),l*=i&&Le()==="reverse"?-1:1),ae(l)},Ce=()=>{const o=C.current[se];let l=0;const s=Array.from(j.current.children);for(let a=0;a<s.length;a+=1){const b=s[a];if(l+b[se]>o){a===0&&(l=o);break}l+=b[se]}return l},De=()=>{we(-1*Ce())},Xe=()=>{we(Ce())},Ye=d.useCallback(o=>{qe({overflow:null,scrollbarWidth:o})},[]),Ue=()=>{const o={};o.scrollbarSizeListener=E?T(wt,{onChange:Ye,className:W(M.scrollableX,M.hideScrollbar)}):null;const l=q.start||q.end,s=E&&(w==="auto"&&l||w===!0);return o.scrollButtonStart=s?T(z,{slots:{StartScrollButtonIcon:R.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:Ae},orientation:v,direction:i?"right":"left",onClick:De,disabled:!q.start,...P,className:W(M.scrollButtons,P.className)}):null,o.scrollButtonEnd=s?T(z,{slots:{EndScrollButtonIcon:R.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:$e},orientation:v,direction:i?"left":"right",onClick:Xe,disabled:!q.end,...P,className:W(M.scrollButtons,P.className)}):null,o},Te=de(o=>{const{tabsMeta:l,tabMeta:s}=xe();if(!(!s||!l)){if(s[Z]<l[Z]){const a=l[O]+(s[Z]-l[Z]);ae(a,{animation:o})}else if(s[ee]>l[ee]){const a=l[O]+(s[ee]-l[ee]);ae(a,{animation:o})}}}),V=de(()=>{if(E&&w!==!1){const{scrollTop:o,scrollHeight:l,clientHeight:s,scrollWidth:a,clientWidth:b}=C.current;let g,D;if(y)g=o>1,D=o<l-s-1;else{const oe=Ie(C.current,n.direction);g=i?oe<a-b-1:oe>1,D=i?oe>1:oe<a-b-1}(g!==q.start||D!==q.end)&&He({start:g,end:D})}});d.useEffect(()=>{const o=pe(()=>{C.current&&(G(),V())}),l=Pe(C.current);l.addEventListener("resize",o);let s;return typeof ResizeObserver<"u"&&(s=new ResizeObserver(o),Array.from(j.current.children).forEach(a=>{s.observe(a)})),()=>{o.clear(),l.removeEventListener("resize",o),s&&s.disconnect()}},[G,V]);const ie=d.useMemo(()=>pe(()=>{V()}),[V]);d.useEffect(()=>()=>{ie.clear()},[ie]),d.useEffect(()=>{Fe(!0)},[]),d.useEffect(()=>{G(),V()}),d.useEffect(()=>{Te(Me!==L)},[Te,L]),d.useImperativeHandle(u,()=>({updateIndicator:G,updateScrollButtons:V}),[G,V]);const Be=T(xt,{...F,className:W(M.indicator,F.className),ownerState:N,style:{...L,...F.style}});let te=0;const _e=d.Children.map(k,o=>{if(!d.isValidElement(o))return null;const l=o.props.value===void 0?te:o.props.value;ge.set(l,te);const s=l===H;return te+=1,d.cloneElement(o,{fullWidth:I==="fullWidth",indicator:s&&!Se&&Be,selected:s,selectionFollowsFocus:U,onChange:S,textColor:Q,value:l,...te===1&&H===!1&&!o.props.tabIndex?{tabIndex:0}:{}})}),Oe=o=>{const l=j.current,s=Je(l).activeElement;if(s.getAttribute("role")!=="tab")return;let b=v==="horizontal"?"ArrowLeft":"ArrowUp",g=v==="horizontal"?"ArrowRight":"ArrowDown";switch(v==="horizontal"&&i&&(b="ArrowRight",g="ArrowLeft"),o.key){case b:o.preventDefault(),le(l,s,Ee);break;case g:o.preventDefault(),le(l,s,Re);break;case"Home":o.preventDefault(),le(l,null,Re);break;case"End":o.preventDefault(),le(l,null,Ee);break}},ce=Ue();return J(vt,{className:W(M.root,x),ownerState:N,ref:r,as:m,...Ve,children:[ce.scrollButtonStart,ce.scrollbarSizeListener,J(yt,{className:M.scroller,ownerState:N,style:{overflow:ye.overflow,[y?`margin${i?"Left":"Right"}`:"marginBottom"]:ne?void 0:-ye.scrollbarWidth},ref:C,onScroll:ie,children:[T(gt,{"aria-label":f,"aria-labelledby":p,"aria-orientation":v==="vertical"?"vertical":null,className:M.flexContainer,ownerState:N,onKeyDown:Oe,ref:j,role:"tablist",children:_e}),Se&&Be]}),ce.scrollButtonEnd]})}),Lt=Ct,We=e=>T(lt,{...e,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0});try{We.displayName="Tab",We.__docgenInfo={description:"",displayName:"Tab",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TabClasses> & Partial<ClassNameMap<never>>"}},children:{defaultValue:null,description:"This prop isn't supported.\nUse the `component` prop if you need to change the children structure.\nThe content of the component.",name:"children",required:!1,type:{name:"null"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},label:{defaultValue:null,description:"The label element.",name:"label",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},touchRippleRef:{defaultValue:null,description:"A ref that points to the `TouchRipple` element.",name:"touchRippleRef",required:!1,type:{name:"Ref<TouchRippleActions>"}},value:{defaultValue:null,description:"You can provide your own value. Otherwise, we fallback to the child position index.",name:"value",required:!1,type:{name:"any"}},wrapped:{defaultValue:{value:"false"},description:`Tab labels appear in a single row.
They can use a second line if needed.`,name:"wrapped",required:!1,type:{name:"boolean"}}}}}catch{}export{Lt as M,We as T};
//# sourceMappingURL=Tab-c9ffd0be.js.map
