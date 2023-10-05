import{r as l,a as Y}from"./index-570b25c1.js";import{c as T}from"./clsx.m-fb33c42b.js";import{s as ne,g as _e,c as Ie}from"./styled-fc2b35f5.js";import{u as be}from"./useThemeProps-5f33a28c.js";import{j as N,a as Ue}from"./jsx-runtime-390e5fc8.js";import{g as ge}from"./generateUtilityClasses-8a827d83.js";import{k as re}from"./emotion-react.browser.esm-325397be.js";import{u as ce}from"./useForkRef-153a0a89.js";import{u as ze}from"./useIsFocusVisible-5e7b1ff1.js";import{u as Xe}from"./useEnhancedEffect-460150e6.js";function H(e){const t=l.useRef(e);return Xe(()=>{t.current=e}),l.useCallback((...o)=>(0,t.current)(...o),[])}function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},Z.apply(this,arguments)}function Ye(e,t){if(e==null)return{};var o={},a=Object.keys(e),n,r;for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&(o[n]=e[n]);return o}function ee(e,t){return ee=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,n){return a.__proto__=n,a},ee(e,t)}function Ae(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ee(e,t)}const pe=Y.createContext(null);function Ke(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e,t){var o=function(r){return t&&l.isValidElement(r)?t(r):r},a=Object.create(null);return e&&l.Children.map(e,function(n){return n}).forEach(function(n){a[n.key]=o(n)}),a}function We(e,t){e=e||{},t=t||{};function o(d){return d in t?t[d]:e[d]}var a=Object.create(null),n=[];for(var r in e)r in t?n.length&&(a[r]=n,n=[]):n.push(r);var i,c={};for(var u in t){if(a[u])for(i=0;i<a[u].length;i++){var p=a[u][i];c[a[u][i]]=o(p)}c[u]=o(u)}for(i=0;i<n.length;i++)c[n[i]]=o(n[i]);return c}function D(e,t,o){return o[t]!=null?o[t]:e.props[t]}function He(e,t){return oe(e.children,function(o){return l.cloneElement(o,{onExited:t.bind(null,o),in:!0,appear:D(o,"appear",e),enter:D(o,"enter",e),exit:D(o,"exit",e)})})}function Ge(e,t,o){var a=oe(e.children),n=We(t,a);return Object.keys(n).forEach(function(r){var i=n[r];if(l.isValidElement(i)){var c=r in t,u=r in a,p=t[r],d=l.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[r]=l.cloneElement(i,{onExited:o.bind(null,i),in:!0,exit:D(i,"exit",e),enter:D(i,"enter",e)}):!u&&c&&!d?n[r]=l.cloneElement(i,{in:!1}):u&&c&&l.isValidElement(p)&&(n[r]=l.cloneElement(i,{onExited:o.bind(null,i),in:p.props.in,exit:D(i,"exit",e),enter:D(i,"enter",e)}))}}),n}var qe=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Je={component:"div",childFactory:function(t){return t}},ie=function(e){Ae(t,e);function t(a,n){var r;r=e.call(this,a,n)||this;var i=r.handleExited.bind(Ke(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}var o=t.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,r){var i=r.children,c=r.handleExited,u=r.firstRender;return{children:u?He(n,c):Ge(n,i,c),firstRender:!1}},o.handleExited=function(n,r){var i=oe(this.props.children);n.key in i||(n.props.onExited&&n.props.onExited(r),this.mounted&&this.setState(function(c){var u=Z({},c.children);return delete u[n.key],{children:u}}))},o.render=function(){var n=this.props,r=n.component,i=n.childFactory,c=Ye(n,["component","childFactory"]),u=this.state.contextValue,p=qe(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,r===null?Y.createElement(pe.Provider,{value:u},p):Y.createElement(pe.Provider,{value:u},Y.createElement(r,c,p))},t}(Y.Component);ie.propTypes={};ie.defaultProps=Je;const Qe=ie;function Ze(e){const{className:t,classes:o,pulsate:a=!1,rippleX:n,rippleY:r,rippleSize:i,in:c,onExited:u,timeout:p}=e,[d,R]=l.useState(!1),b=T(t,o.ripple,o.rippleVisible,a&&o.ripplePulsate),S={width:i,height:i,top:-(i/2)+r,left:-(i/2)+n},h=T(o.child,d&&o.childLeaving,a&&o.childPulsate);return!c&&!d&&R(!0),l.useEffect(()=>{if(!c&&u!=null){const w=setTimeout(u,p);return()=>{clearTimeout(w)}}},[u,c,p]),N("span",{className:b,style:S,children:N("span",{className:h})})}const et=ge("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=et;let G=e=>e,fe,de,he,me;const te=550,tt=80,nt=re(fe||(fe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),rt=re(de||(de=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),ot=re(he||(he=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),it=ne("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),st=ne(Ze,{name:"MuiTouchRipple",slot:"Ripple"})(me||(me=G`
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
`),m.rippleVisible,nt,te,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,rt,te,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,ot,({theme:e})=>e.transitions.easing.easeInOut),at=l.forwardRef(function(t,o){const a=be({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:r={},className:i,...c}=a,[u,p]=l.useState([]),d=l.useRef(0),R=l.useRef(null);l.useEffect(()=>{R.current&&(R.current(),R.current=null)},[u]);const b=l.useRef(!1),S=l.useRef(null),h=l.useRef(null),w=l.useRef(null);l.useEffect(()=>()=>{clearTimeout(S.current)},[]);const C=l.useCallback(f=>{const{pulsate:y,rippleX:g,rippleY:F,rippleSize:O,cb:_}=f;p(M=>[...M,N(st,{classes:{ripple:T(r.ripple,m.ripple),rippleVisible:T(r.rippleVisible,m.rippleVisible),ripplePulsate:T(r.ripplePulsate,m.ripplePulsate),child:T(r.child,m.child),childLeaving:T(r.childLeaving,m.childLeaving),childPulsate:T(r.childPulsate,m.childPulsate)},timeout:te,pulsate:y,rippleX:g,rippleY:F,rippleSize:O},d.current)]),d.current+=1,R.current=_},[r]),L=l.useCallback((f={},y={},g=()=>{})=>{const{pulsate:F=!1,center:O=n||y.pulsate,fakeElement:_=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const M=_?null:w.current,P=M?M.getBoundingClientRect():{width:0,height:0,left:0,top:0};let V,x,B;if(O||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)V=Math.round(P.width/2),x=Math.round(P.height/2);else{const{clientX:I,clientY:k}=f.touches&&f.touches.length>0?f.touches[0]:f;V=Math.round(I-P.left),x=Math.round(k-P.top)}if(O)B=Math.sqrt((2*P.width**2+P.height**2)/3),B%2===0&&(B+=1);else{const I=Math.max(Math.abs((M?M.clientWidth:0)-V),V)*2+2,k=Math.max(Math.abs((M?M.clientHeight:0)-x),x)*2+2;B=Math.sqrt(I**2+k**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{C({pulsate:F,rippleX:V,rippleY:x,rippleSize:B,cb:g})},S.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},tt)):C({pulsate:F,rippleX:V,rippleY:x,rippleSize:B,cb:g})},[n,C]),A=l.useCallback(()=>{L({},{pulsate:!0})},[L]),j=l.useCallback((f,y)=>{if(clearTimeout(S.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,S.current=setTimeout(()=>{j(f,y)});return}h.current=null,p(g=>g.length>0?g.slice(1):g),R.current=y},[]);return l.useImperativeHandle(o,()=>({pulsate:A,start:L,stop:j}),[A,L,j]),N(it,{className:T(m.root,r.root,i),ref:w,...c,children:N(Qe,{component:null,exit:!0,children:u})})}),lt=at;function ut(e){return _e("MuiButtonBase",e)}const ct=ge("MuiButtonBase",["root","disabled","focusVisible"]),pt=ct,ft=e=>{const{disabled:t,focusVisible:o,focusVisibleClassName:a,classes:n}=e,i=Ie({root:["root",t&&"disabled",o&&"focusVisible"]},ut,n);return o&&a&&(i.root+=` ${a}`),i},dt=ne("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${pt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ht=l.forwardRef(function(t,o){const a=be({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:r=!1,children:i,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:R=!1,focusRipple:b=!1,focusVisibleClassName:S,LinkComponent:h="a",onBlur:w,onClick:C,onContextMenu:L,onDragLeave:A,onFocus:j,onFocusVisible:f,onKeyDown:y,onKeyUp:g,onMouseDown:F,onMouseLeave:O,onMouseUp:_,onTouchEnd:M,onTouchMove:P,onTouchStart:V,tabIndex:x=0,TouchRippleProps:B,touchRippleRef:I,type:k,...U}=a,z=l.useRef(null),E=l.useRef(null),Re=ce(E,I),{isFocusVisibleRef:se,onFocus:ye,onBlur:Me,ref:Ee}=ze(),[$,K]=l.useState(!1);p&&$&&K(!1),l.useImperativeHandle(n,()=>({focusVisible:()=>{K(!0),z.current.focus()}}),[]);const[q,Te]=l.useState(!1);l.useEffect(()=>{Te(!0)},[]);const Ce=q&&!d&&!p;l.useEffect(()=>{$&&b&&!d&&q&&E.current.pulsate()},[d,b,$,q]);function v(s,le,Ne=R){return H(ue=>(le&&le(ue),!Ne&&E.current&&E.current[s](ue),!0))}const xe=v("start",F),ve=v("stop",L),Pe=v("stop",A),Ve=v("stop",_),Be=v("stop",s=>{$&&s.preventDefault(),O&&O(s)}),Se=v("start",V),we=v("stop",M),Oe=v("stop",P),ke=v("stop",s=>{Me(s),se.current===!1&&K(!1),w&&w(s)},!1),$e=H(s=>{z.current||(z.current=s.currentTarget),ye(s),se.current===!0&&(K(!0),f&&f(s)),j&&j(s)}),J=()=>{const s=z.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},Q=l.useRef(!1),De=H(s=>{b&&!Q.current&&$&&E.current&&s.key===" "&&(Q.current=!0,E.current.stop(s,()=>{E.current.start(s)})),s.target===s.currentTarget&&J()&&s.key===" "&&s.preventDefault(),y&&y(s),s.target===s.currentTarget&&J()&&s.key==="Enter"&&!p&&(s.preventDefault(),C&&C(s))}),Le=H(s=>{b&&s.key===" "&&E.current&&$&&!s.defaultPrevented&&(Q.current=!1,E.current.stop(s,()=>{E.current.pulsate(s)})),g&&g(s),C&&s.target===s.currentTarget&&J()&&s.key===" "&&!s.defaultPrevented&&C(s)});let W=u;W==="button"&&(U.href||U.to)&&(W=h);const X={};W==="button"?(X.type=k===void 0?"button":k,X.disabled=p):(!U.href&&!U.to&&(X.role="button"),p&&(X["aria-disabled"]=p));const je=ce(o,Ee,z),ae={...a,centerRipple:r,component:u,disabled:p,disableRipple:d,disableTouchRipple:R,focusRipple:b,tabIndex:x,focusVisible:$},Fe=ft(ae);return Ue(dt,{as:W,className:T(Fe.root,c),ownerState:ae,onBlur:ke,onClick:C,onContextMenu:ve,onFocus:$e,onKeyDown:De,onKeyUp:Le,onMouseDown:xe,onMouseLeave:Be,onMouseUp:Ve,onDragLeave:Pe,onTouchEnd:we,onTouchMove:Oe,onTouchStart:Se,ref:je,tabIndex:p?-1:x,type:k,...X,...U,children:[i,Ce?N(lt,{ref:Re,center:r,...B}):null]})}),Pt=ht;export{Pt as B,pe as T,Ae as _,Ye as a,Z as b,Qe as c,H as u};
//# sourceMappingURL=ButtonBase-654f8a82.js.map
