import{c as C,a as Re,s as re,u as ye,b as Ee,_ as H,g as ze,e as Oe}from"./useThemeProps-10c808b6.js";import{R as A,r as s}from"./index-f1f749bf.js";import{j as _,a as Ae}from"./jsx-runtime-670450c2.js";import{_ as Xe,k as oe}from"./emotion-react.browser.esm-5cb50a94.js";import{_ as We}from"./extends-98964cd2.js";import{a as Ye,b as He}from"./inheritsLoose-d374ba88.js";import{u as pe}from"./useForkRef-2e794f8b.js";const fe=A.createContext(null);function ie(e,t){var o=function(r){return t&&s.isValidElement(r)?t(r):r},l=Object.create(null);return e&&s.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=o(n)}),l}function Ge(e,t){e=e||{},t=t||{};function o(d){return d in t?t[d]:e[d]}var l=Object.create(null),n=[];for(var r in e)r in t?n.length&&(l[r]=n,n=[]):n.push(r);var i,c={};for(var u in t){if(l[u])for(i=0;i<l[u].length;i++){var p=l[u][i];c[l[u][i]]=o(p)}c[u]=o(u)}for(i=0;i<n.length;i++)c[n[i]]=o(n[i]);return c}function S(e,t,o){return o[t]!=null?o[t]:e.props[t]}function qe(e,t){return ie(e.children,function(o){return s.cloneElement(o,{onExited:t.bind(null,o),in:!0,appear:S(o,"appear",e),enter:S(o,"enter",e),exit:S(o,"exit",e)})})}function Je(e,t,o){var l=ie(e.children),n=Ge(t,l);return Object.keys(n).forEach(function(r){var i=n[r];if(s.isValidElement(i)){var c=r in t,u=r in l,p=t[r],d=s.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[r]=s.cloneElement(i,{onExited:o.bind(null,i),in:!0,exit:S(i,"exit",e),enter:S(i,"enter",e)}):!u&&c&&!d?n[r]=s.cloneElement(i,{in:!1}):u&&c&&s.isValidElement(p)&&(n[r]=s.cloneElement(i,{onExited:o.bind(null,i),in:p.props.in,exit:S(i,"exit",e),enter:S(i,"enter",e)}))}}),n}var Qe=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Ze={component:"div",childFactory:function(t){return t}},se=function(e){Ye(t,e);function t(l,n){var r;r=e.call(this,l,n)||this;var i=r.handleExited.bind(He(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}var o=t.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,r){var i=r.children,c=r.handleExited,u=r.firstRender;return{children:u?qe(n,c):Je(n,i,c),firstRender:!1}},o.handleExited=function(n,r){var i=ie(this.props.children);n.key in i||(n.props.onExited&&n.props.onExited(r),this.mounted&&this.setState(function(c){var u=We({},c.children);return delete u[n.key],{children:u}}))},o.render=function(){var n=this.props,r=n.component,i=n.childFactory,c=Xe(n,["component","childFactory"]),u=this.state.contextValue,p=Qe(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,r===null?A.createElement(fe.Provider,{value:u},p):A.createElement(fe.Provider,{value:u},A.createElement(r,c,p))},t}(A.Component);se.propTypes={};se.defaultProps=Ze;const et=se,tt=typeof window<"u"?s.useLayoutEffect:s.useEffect,nt=tt;function Y(e){const t=s.useRef(e);return nt(()=>{t.current=e}),s.useCallback((...o)=>(0,t.current)(...o),[])}let G=!0,te=!1,de;const rt={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function ot(e){const{type:t,tagName:o}=e;return!!(o==="INPUT"&&rt[t]&&!e.readOnly||o==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function it(e){e.metaKey||e.altKey||e.ctrlKey||(G=!0)}function ee(){G=!1}function st(){this.visibilityState==="hidden"&&te&&(G=!0)}function at(e){e.addEventListener("keydown",it,!0),e.addEventListener("mousedown",ee,!0),e.addEventListener("pointerdown",ee,!0),e.addEventListener("touchstart",ee,!0),e.addEventListener("visibilitychange",st,!0)}function lt(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return G||ot(t)}function ut(){const e=s.useCallback(n=>{n!=null&&at(n.ownerDocument)},[]),t=s.useRef(!1);function o(){return t.current?(te=!0,window.clearTimeout(de),de=window.setTimeout(()=>{te=!1},100),t.current=!1,!0):!1}function l(n){return lt(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:l,onBlur:o,ref:e}}function ct(e){const{className:t,classes:o,pulsate:l=!1,rippleX:n,rippleY:r,rippleSize:i,in:c,onExited:u,timeout:p}=e,[d,g]=s.useState(!1),b=C(t,o.ripple,o.rippleVisible,l&&o.ripplePulsate),w={width:i,height:i,top:-(i/2)+r,left:-(i/2)+n},h=C(o.child,d&&o.childLeaving,l&&o.childPulsate);return!c&&!d&&g(!0),s.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),_("span",{className:b,style:w,children:_("span",{className:h})})}const pt=Re("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=pt,ft=["center","classes","className"];let q=e=>e,he,me,be,ge;const ne=550,dt=80,ht=oe(he||(he=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),mt=oe(me||(me=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),bt=oe(be||(be=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),gt=re("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Rt=re(ct,{name:"MuiTouchRipple",slot:"Ripple"})(ge||(ge=q`
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
`),m.rippleVisible,ht,ne,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,mt,ne,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,bt,({theme:e})=>e.transitions.easing.easeInOut),yt=s.forwardRef(function(t,o){const l=ye({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:r={},className:i}=l,c=Ee(l,ft),[u,p]=s.useState([]),d=s.useRef(0),g=s.useRef(null);s.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=s.useRef(!1),w=s.useRef(null),h=s.useRef(null),R=s.useRef(null);s.useEffect(()=>()=>{clearTimeout(w.current)},[]);const U=s.useCallback(f=>{const{pulsate:y,rippleX:E,rippleY:k,rippleSize:I,cb:j}=f;p(T=>[...T,_(Rt,{classes:{ripple:C(r.ripple,m.ripple),rippleVisible:C(r.rippleVisible,m.rippleVisible),ripplePulsate:C(r.ripplePulsate,m.ripplePulsate),child:C(r.child,m.child),childLeaving:C(r.childLeaving,m.childLeaving),childPulsate:C(r.childPulsate,m.childPulsate)},timeout:ne,pulsate:y,rippleX:E,rippleY:k,rippleSize:I},d.current)]),d.current+=1,g.current=j},[r]),$=s.useCallback((f={},y={},E=()=>{})=>{const{pulsate:k=!1,center:I=n||y.pulsate,fakeElement:j=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const T=j?null:R.current,B=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let x,P,L;if(I||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)x=Math.round(B.width/2),P=Math.round(B.height/2);else{const{clientX:D,clientY:V}=f.touches&&f.touches.length>0?f.touches[0]:f;x=Math.round(D-B.left),P=Math.round(V-B.top)}if(I)L=Math.sqrt((2*B.width**2+B.height**2)/3),L%2===0&&(L+=1);else{const D=Math.max(Math.abs((T?T.clientWidth:0)-x),x)*2+2,V=Math.max(Math.abs((T?T.clientHeight:0)-P),P)*2+2;L=Math.sqrt(D**2+V**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{U({pulsate:k,rippleX:x,rippleY:P,rippleSize:L,cb:E})},w.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},dt)):U({pulsate:k,rippleX:x,rippleY:P,rippleSize:L,cb:E})},[n,U]),K=s.useCallback(()=>{$({},{pulsate:!0})},[$]),N=s.useCallback((f,y)=>{if(clearTimeout(w.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,w.current=setTimeout(()=>{N(f,y)});return}h.current=null,p(E=>E.length>0?E.slice(1):E),g.current=y},[]);return s.useImperativeHandle(o,()=>({pulsate:K,start:$,stop:N}),[K,$,N]),_(gt,H({className:C(m.root,r.root,i),ref:R},c,{children:_(et,{component:null,exit:!0,children:u})}))}),Et=yt;function Tt(e){return ze("MuiButtonBase",e)}const Mt=Re("MuiButtonBase",["root","disabled","focusVisible"]),Ct=Mt,xt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Vt=e=>{const{disabled:t,focusVisible:o,focusVisibleClassName:l,classes:n}=e,i=Oe({root:["root",t&&"disabled",o&&"focusVisible"]},Tt,n);return o&&l&&(i.root+=` ${l}`),i},vt=re("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Ct.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),wt=s.forwardRef(function(t,o){const l=ye({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:r=!1,children:i,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:w="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:$,onFocus:K,onFocusVisible:N,onKeyDown:f,onKeyUp:y,onMouseDown:E,onMouseLeave:k,onMouseUp:I,onTouchEnd:j,onTouchMove:T,onTouchStart:B,tabIndex:x=0,TouchRippleProps:P,touchRippleRef:L,type:D}=l,V=Ee(l,xt),z=s.useRef(null),M=s.useRef(null),Te=pe(M,L),{isFocusVisibleRef:ae,onFocus:Me,onBlur:Ce,ref:xe}=ut(),[F,X]=s.useState(!1);p&&F&&X(!1),s.useImperativeHandle(n,()=>({focusVisible:()=>{X(!0),z.current.focus()}}),[]);const[J,Ve]=s.useState(!1);s.useEffect(()=>{Ve(!0)},[]);const ve=J&&!d&&!p;s.useEffect(()=>{F&&b&&!d&&J&&M.current.pulsate()},[d,b,F,J]);function v(a,ue,je=g){return Y(ce=>(ue&&ue(ce),!je&&M.current&&M.current[a](ce),!0))}const we=v("start",E),Be=v("stop",U),Pe=v("stop",$),Le=v("stop",I),ke=v("stop",a=>{F&&a.preventDefault(),k&&k(a)}),De=v("start",B),Fe=v("stop",j),Se=v("stop",T),$e=v("stop",a=>{Ce(a),ae.current===!1&&X(!1),h&&h(a)},!1),Ne=Y(a=>{z.current||(z.current=a.currentTarget),Me(a),ae.current===!0&&(X(!0),N&&N(a)),K&&K(a)}),Q=()=>{const a=z.current;return u&&u!=="button"&&!(a.tagName==="A"&&a.href)},Z=s.useRef(!1),Ie=Y(a=>{b&&!Z.current&&F&&M.current&&a.key===" "&&(Z.current=!0,M.current.stop(a,()=>{M.current.start(a)})),a.target===a.currentTarget&&Q()&&a.key===" "&&a.preventDefault(),f&&f(a),a.target===a.currentTarget&&Q()&&a.key==="Enter"&&!p&&(a.preventDefault(),R&&R(a))}),_e=Y(a=>{b&&a.key===" "&&M.current&&F&&!a.defaultPrevented&&(Z.current=!1,M.current.stop(a,()=>{M.current.pulsate(a)})),y&&y(a),R&&a.target===a.currentTarget&&Q()&&a.key===" "&&!a.defaultPrevented&&R(a)});let W=u;W==="button"&&(V.href||V.to)&&(W=w);const O={};W==="button"?(O.type=D===void 0?"button":D,O.disabled=p):(!V.href&&!V.to&&(O.role="button"),p&&(O["aria-disabled"]=p));const Ue=pe(o,xe,z),le=H({},l,{centerRipple:r,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:x,focusVisible:F}),Ke=Vt(le);return Ae(vt,H({as:W,className:C(Ke.root,c),ownerState:le,onBlur:$e,onClick:R,onContextMenu:Be,onFocus:Ne,onKeyDown:Ie,onKeyUp:_e,onMouseDown:we,onMouseLeave:ke,onMouseUp:Le,onDragLeave:Pe,onTouchEnd:Fe,onTouchMove:Se,onTouchStart:De,ref:Ue,tabIndex:p?-1:x,type:D},O,V,{children:[i,ve?_(Et,H({ref:Te,center:r},P)):null]}))}),Nt=wt;export{Nt as B,fe as T,Y as a,ut as b,nt as u};
//# sourceMappingURL=ButtonBase-e32999a2.js.map
