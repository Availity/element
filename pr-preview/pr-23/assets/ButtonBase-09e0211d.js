import{R as A,r as s}from"./index-f1f749bf.js";import{i as ze,j as Oe,c as C,a as Re,s as re,u as ye,b as Te,_ as H,g as Ae,e as Xe}from"./useThemeProps-601b945a.js";import{j as _,a as We}from"./jsx-runtime-670450c2.js";import{_ as Ye,k as oe}from"./emotion-react.browser.esm-5cb50a94.js";import{_ as He}from"./extends-98964cd2.js";import{a as Ge,b as qe}from"./inheritsLoose-d374ba88.js";import{u as pe}from"./useForkRef-2e794f8b.js";const fe=A.createContext(null);function ie(e,t){var o=function(r){return t&&s.isValidElement(r)?t(r):r},u=Object.create(null);return e&&s.Children.map(e,function(n){return n}).forEach(function(n){u[n.key]=o(n)}),u}function Je(e,t){e=e||{},t=t||{};function o(d){return d in t?t[d]:e[d]}var u=Object.create(null),n=[];for(var r in e)r in t?n.length&&(u[r]=n,n=[]):n.push(r);var i,c={};for(var l in t){if(u[l])for(i=0;i<u[l].length;i++){var p=u[l][i];c[u[l][i]]=o(p)}c[l]=o(l)}for(i=0;i<n.length;i++)c[n[i]]=o(n[i]);return c}function F(e,t,o){return o[t]!=null?o[t]:e.props[t]}function Qe(e,t){return ie(e.children,function(o){return s.cloneElement(o,{onExited:t.bind(null,o),in:!0,appear:F(o,"appear",e),enter:F(o,"enter",e),exit:F(o,"exit",e)})})}function Ze(e,t,o){var u=ie(e.children),n=Je(t,u);return Object.keys(n).forEach(function(r){var i=n[r];if(s.isValidElement(i)){var c=r in t,l=r in u,p=t[r],d=s.isValidElement(p)&&!p.props.in;l&&(!c||d)?n[r]=s.cloneElement(i,{onExited:o.bind(null,i),in:!0,exit:F(i,"exit",e),enter:F(i,"enter",e)}):!l&&c&&!d?n[r]=s.cloneElement(i,{in:!1}):l&&c&&s.isValidElement(p)&&(n[r]=s.cloneElement(i,{onExited:o.bind(null,i),in:p.props.in,exit:F(i,"exit",e),enter:F(i,"enter",e)}))}}),n}var et=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},tt={component:"div",childFactory:function(t){return t}},se=function(e){Ge(t,e);function t(u,n){var r;r=e.call(this,u,n)||this;var i=r.handleExited.bind(qe(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}var o=t.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,r){var i=r.children,c=r.handleExited,l=r.firstRender;return{children:l?Qe(n,c):Ze(n,i,c),firstRender:!1}},o.handleExited=function(n,r){var i=ie(this.props.children);n.key in i||(n.props.onExited&&n.props.onExited(r),this.mounted&&this.setState(function(c){var l=He({},c.children);return delete l[n.key],{children:l}}))},o.render=function(){var n=this.props,r=n.component,i=n.childFactory,c=Ye(n,["component","childFactory"]),l=this.state.contextValue,p=et(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,r===null?A.createElement(fe.Provider,{value:l},p):A.createElement(fe.Provider,{value:l},A.createElement(r,c,p))},t}(A.Component);se.propTypes={};se.defaultProps=tt;const nt=se,rt=typeof window<"u"?s.useLayoutEffect:s.useEffect,ot=rt;function Y(e){const t=s.useRef(e);return ot(()=>{t.current=e}),s.useCallback((...o)=>(0,t.current)(...o),[])}let G=!0,te=!1,de;const it={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function st(e){const{type:t,tagName:o}=e;return!!(o==="INPUT"&&it[t]&&!e.readOnly||o==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function at(e){e.metaKey||e.altKey||e.ctrlKey||(G=!0)}function ee(){G=!1}function ut(){this.visibilityState==="hidden"&&te&&(G=!0)}function lt(e){e.addEventListener("keydown",at,!0),e.addEventListener("mousedown",ee,!0),e.addEventListener("pointerdown",ee,!0),e.addEventListener("touchstart",ee,!0),e.addEventListener("visibilitychange",ut,!0)}function ct(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return G||st(t)}function pt(){const e=s.useCallback(n=>{n!=null&&lt(n.ownerDocument)},[]),t=s.useRef(!1);function o(){return t.current?(te=!0,window.clearTimeout(de),de=window.setTimeout(()=>{te=!1},100),t.current=!1,!0):!1}function u(n){return ct(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:u,onBlur:o,ref:e}}function _t(){return ze(Oe)}function ft(e){const{className:t,classes:o,pulsate:u=!1,rippleX:n,rippleY:r,rippleSize:i,in:c,onExited:l,timeout:p}=e,[d,g]=s.useState(!1),b=C(t,o.ripple,o.rippleVisible,u&&o.ripplePulsate),w={width:i,height:i,top:-(i/2)+r,left:-(i/2)+n},h=C(o.child,d&&o.childLeaving,u&&o.childPulsate);return!c&&!d&&g(!0),s.useEffect(()=>{if(!c&&l!=null){const R=setTimeout(l,p);return()=>{clearTimeout(R)}}},[l,c,p]),_("span",{className:b,style:w,children:_("span",{className:h})})}const dt=Re("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=dt,ht=["center","classes","className"];let q=e=>e,he,me,be,ge;const ne=550,mt=80,bt=oe(he||(he=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),gt=oe(me||(me=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Rt=oe(be||(be=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),yt=re("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Tt=re(ft,{name:"MuiTouchRipple",slot:"Ripple"})(ge||(ge=q`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,bt,ne,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,gt,ne,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,Rt,({theme:e})=>e.transitions.easing.easeInOut),Et=s.forwardRef(function(t,o){const u=ye({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:r={},className:i}=u,c=Te(u,ht),[l,p]=s.useState([]),d=s.useRef(0),g=s.useRef(null);s.useEffect(()=>{g.current&&(g.current(),g.current=null)},[l]);const b=s.useRef(!1),w=s.useRef(null),h=s.useRef(null),R=s.useRef(null);s.useEffect(()=>()=>{clearTimeout(w.current)},[]);const U=s.useCallback(f=>{const{pulsate:y,rippleX:T,rippleY:k,rippleSize:I,cb:j}=f;p(E=>[...E,_(Tt,{classes:{ripple:C(r.ripple,m.ripple),rippleVisible:C(r.rippleVisible,m.rippleVisible),ripplePulsate:C(r.ripplePulsate,m.ripplePulsate),child:C(r.child,m.child),childLeaving:C(r.childLeaving,m.childLeaving),childPulsate:C(r.childPulsate,m.childPulsate)},timeout:ne,pulsate:y,rippleX:T,rippleY:k,rippleSize:I},d.current)]),d.current+=1,g.current=j},[r]),S=s.useCallback((f={},y={},T=()=>{})=>{const{pulsate:k=!1,center:I=n||y.pulsate,fakeElement:j=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const E=j?null:R.current,B=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let x,P,L;if(I||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)x=Math.round(B.width/2),P=Math.round(B.height/2);else{const{clientX:D,clientY:V}=f.touches&&f.touches.length>0?f.touches[0]:f;x=Math.round(D-B.left),P=Math.round(V-B.top)}if(I)L=Math.sqrt((2*B.width**2+B.height**2)/3),L%2===0&&(L+=1);else{const D=Math.max(Math.abs((E?E.clientWidth:0)-x),x)*2+2,V=Math.max(Math.abs((E?E.clientHeight:0)-P),P)*2+2;L=Math.sqrt(D**2+V**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{U({pulsate:k,rippleX:x,rippleY:P,rippleSize:L,cb:T})},w.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},mt)):U({pulsate:k,rippleX:x,rippleY:P,rippleSize:L,cb:T})},[n,U]),K=s.useCallback(()=>{S({},{pulsate:!0})},[S]),N=s.useCallback((f,y)=>{if(clearTimeout(w.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,w.current=setTimeout(()=>{N(f,y)});return}h.current=null,p(T=>T.length>0?T.slice(1):T),g.current=y},[]);return s.useImperativeHandle(o,()=>({pulsate:K,start:S,stop:N}),[K,S,N]),_(yt,H({className:C(m.root,r.root,i),ref:R},c,{children:_(nt,{component:null,exit:!0,children:l})}))}),Mt=Et;function Ct(e){return Ae("MuiButtonBase",e)}const xt=Re("MuiButtonBase",["root","disabled","focusVisible"]),Vt=xt,vt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],wt=e=>{const{disabled:t,focusVisible:o,focusVisibleClassName:u,classes:n}=e,i=Xe({root:["root",t&&"disabled",o&&"focusVisible"]},Ct,n);return o&&u&&(i.root+=` ${u}`),i},Bt=re("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Vt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Pt=s.forwardRef(function(t,o){const u=ye({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:r=!1,children:i,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:w="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:S,onFocus:K,onFocusVisible:N,onKeyDown:f,onKeyUp:y,onMouseDown:T,onMouseLeave:k,onMouseUp:I,onTouchEnd:j,onTouchMove:E,onTouchStart:B,tabIndex:x=0,TouchRippleProps:P,touchRippleRef:L,type:D}=u,V=Te(u,vt),z=s.useRef(null),M=s.useRef(null),Ee=pe(M,L),{isFocusVisibleRef:ae,onFocus:Me,onBlur:Ce,ref:xe}=pt(),[$,X]=s.useState(!1);p&&$&&X(!1),s.useImperativeHandle(n,()=>({focusVisible:()=>{X(!0),z.current.focus()}}),[]);const[J,Ve]=s.useState(!1);s.useEffect(()=>{Ve(!0)},[]);const ve=J&&!d&&!p;s.useEffect(()=>{$&&b&&!d&&J&&M.current.pulsate()},[d,b,$,J]);function v(a,le,je=g){return Y(ce=>(le&&le(ce),!je&&M.current&&M.current[a](ce),!0))}const we=v("start",T),Be=v("stop",U),Pe=v("stop",S),Le=v("stop",I),ke=v("stop",a=>{$&&a.preventDefault(),k&&k(a)}),De=v("start",B),$e=v("stop",j),Fe=v("stop",E),Se=v("stop",a=>{Ce(a),ae.current===!1&&X(!1),h&&h(a)},!1),Ne=Y(a=>{z.current||(z.current=a.currentTarget),Me(a),ae.current===!0&&(X(!0),N&&N(a)),K&&K(a)}),Q=()=>{const a=z.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},Z=s.useRef(!1),Ie=Y(a=>{b&&!Z.current&&$&&M.current&&a.key===" "&&(Z.current=!0,M.current.stop(a,()=>{M.current.start(a)})),a.target===a.currentTarget&&Q()&&a.key===" "&&a.preventDefault(),f&&f(a),a.target===a.currentTarget&&Q()&&a.key==="Enter"&&!p&&(a.preventDefault(),R&&R(a))}),_e=Y(a=>{b&&a.key===" "&&M.current&&$&&!a.defaultPrevented&&(Z.current=!1,M.current.stop(a,()=>{M.current.pulsate(a)})),y&&y(a),R&&a.target===a.currentTarget&&Q()&&a.key===" "&&!a.defaultPrevented&&R(a)});let W=l;W==="button"&&(V.href||V.to)&&(W=w);const O={};W==="button"?(O.type=D===void 0?"button":D,O.disabled=p):(!V.href&&!V.to&&(O.role="button"),p&&(O["aria-disabled"]=p));const Ue=pe(o,xe,z),ue=H({},u,{centerRipple:r,component:l,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:x,focusVisible:$}),Ke=wt(ue);return We(Bt,H({as:W,className:C(Ke.root,c),ownerState:ue,onBlur:Se,onClick:R,onContextMenu:Be,onFocus:Ne,onKeyDown:Ie,onKeyUp:_e,onMouseDown:we,onMouseLeave:ke,onMouseUp:Le,onDragLeave:Pe,onTouchEnd:$e,onTouchMove:Fe,onTouchStart:De,ref:Ue,tabIndex:p?-1:x,type:D},O,V,{children:[i,ve?_(Mt,H({ref:Ee,center:r},P)):null]}))}),Ut=Pt;export{Ut as B,fe as T,ot as a,Y as b,pt as c,_t as u};
//# sourceMappingURL=ButtonBase-09e0211d.js.map
