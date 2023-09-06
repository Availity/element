import{r as l,a as Y}from"./index-570b25c1.js";import{c as T,g as be,s as ne,b as _e,a as Ie}from"./styled-2191822d.js";import{c as ge}from"./useThemeProps-66ab754c.js";import{j as N,a as Ue}from"./jsx-runtime-390e5fc8.js";import{k as oe}from"./emotion-react.browser.esm-d7d6545d.js";import{u as ce}from"./useForkRef-153a0a89.js";import{u as ze}from"./useIsFocusVisible-5e7b1ff1.js";const Xe=typeof window<"u"?l.useLayoutEffect:l.useEffect,Ye=Xe;function H(e){const t=l.useRef(e);return Ye(()=>{t.current=e}),l.useCallback((...r)=>(0,t.current)(...r),[])}function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Z.apply(this,arguments)}function Ae(e,t){if(e==null)return{};var r={},a=Object.keys(e),n,o;for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}function ee(e,t){return ee=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,n){return a.__proto__=n,a},ee(e,t)}function Ke(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ee(e,t)}const pe=Y.createContext(null);function We(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function re(e,t){var r=function(o){return t&&l.isValidElement(o)?t(o):o},a=Object.create(null);return e&&l.Children.map(e,function(n){return n}).forEach(function(n){a[n.key]=r(n)}),a}function He(e,t){e=e||{},t=t||{};function r(d){return d in t?t[d]:e[d]}var a=Object.create(null),n=[];for(var o in e)o in t?n.length&&(a[o]=n,n=[]):n.push(o);var i,c={};for(var u in t){if(a[u])for(i=0;i<a[u].length;i++){var p=a[u][i];c[a[u][i]]=r(p)}c[u]=r(u)}for(i=0;i<n.length;i++)c[n[i]]=r(n[i]);return c}function D(e,t,r){return r[t]!=null?r[t]:e.props[t]}function Ge(e,t){return re(e.children,function(r){return l.cloneElement(r,{onExited:t.bind(null,r),in:!0,appear:D(r,"appear",e),enter:D(r,"enter",e),exit:D(r,"exit",e)})})}function qe(e,t,r){var a=re(e.children),n=He(t,a);return Object.keys(n).forEach(function(o){var i=n[o];if(l.isValidElement(i)){var c=o in t,u=o in a,p=t[o],d=l.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[o]=l.cloneElement(i,{onExited:r.bind(null,i),in:!0,exit:D(i,"exit",e),enter:D(i,"enter",e)}):!u&&c&&!d?n[o]=l.cloneElement(i,{in:!1}):u&&c&&l.isValidElement(p)&&(n[o]=l.cloneElement(i,{onExited:r.bind(null,i),in:p.props.in,exit:D(i,"exit",e),enter:D(i,"enter",e)}))}}),n}var Je=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Qe={component:"div",childFactory:function(t){return t}},ie=function(e){Ke(t,e);function t(a,n){var o;o=e.call(this,a,n)||this;var i=o.handleExited.bind(We(o));return o.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},o}var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,o){var i=o.children,c=o.handleExited,u=o.firstRender;return{children:u?Ge(n,c):qe(n,i,c),firstRender:!1}},r.handleExited=function(n,o){var i=re(this.props.children);n.key in i||(n.props.onExited&&n.props.onExited(o),this.mounted&&this.setState(function(c){var u=Z({},c.children);return delete u[n.key],{children:u}}))},r.render=function(){var n=this.props,o=n.component,i=n.childFactory,c=Ae(n,["component","childFactory"]),u=this.state.contextValue,p=Je(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,o===null?Y.createElement(pe.Provider,{value:u},p):Y.createElement(pe.Provider,{value:u},Y.createElement(o,c,p))},t}(Y.Component);ie.propTypes={};ie.defaultProps=Qe;const Ze=ie;function et(e){const{className:t,classes:r,pulsate:a=!1,rippleX:n,rippleY:o,rippleSize:i,in:c,onExited:u,timeout:p}=e,[d,R]=l.useState(!1),b=T(t,r.ripple,r.rippleVisible,a&&r.ripplePulsate),w={width:i,height:i,top:-(i/2)+o,left:-(i/2)+n},h=T(r.child,d&&r.childLeaving,a&&r.childPulsate);return!c&&!d&&R(!0),l.useEffect(()=>{if(!c&&u!=null){const S=setTimeout(u,p);return()=>{clearTimeout(S)}}},[u,c,p]),N("span",{className:b,style:w,children:N("span",{className:h})})}const tt=be("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=tt;let G=e=>e,fe,de,he,me;const te=550,nt=80,ot=oe(fe||(fe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),rt=oe(de||(de=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),it=oe(he||(he=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),st=ne("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),at=ne(et,{name:"MuiTouchRipple",slot:"Ripple"})(me||(me=G`
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
`),m.rippleVisible,ot,te,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,rt,te,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,it,({theme:e})=>e.transitions.easing.easeInOut),lt=l.forwardRef(function(t,r){const a=ge({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:o={},className:i,...c}=a,[u,p]=l.useState([]),d=l.useRef(0),R=l.useRef(null);l.useEffect(()=>{R.current&&(R.current(),R.current=null)},[u]);const b=l.useRef(!1),w=l.useRef(null),h=l.useRef(null),S=l.useRef(null);l.useEffect(()=>()=>{clearTimeout(w.current)},[]);const C=l.useCallback(f=>{const{pulsate:y,rippleX:g,rippleY:F,rippleSize:O,cb:_}=f;p(E=>[...E,N(at,{classes:{ripple:T(o.ripple,m.ripple),rippleVisible:T(o.rippleVisible,m.rippleVisible),ripplePulsate:T(o.ripplePulsate,m.ripplePulsate),child:T(o.child,m.child),childLeaving:T(o.childLeaving,m.childLeaving),childPulsate:T(o.childPulsate,m.childPulsate)},timeout:te,pulsate:y,rippleX:g,rippleY:F,rippleSize:O},d.current)]),d.current+=1,R.current=_},[o]),L=l.useCallback((f={},y={},g=()=>{})=>{const{pulsate:F=!1,center:O=n||y.pulsate,fakeElement:_=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const E=_?null:S.current,P=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let V,x,B;if(O||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)V=Math.round(P.width/2),x=Math.round(P.height/2);else{const{clientX:I,clientY:$}=f.touches&&f.touches.length>0?f.touches[0]:f;V=Math.round(I-P.left),x=Math.round($-P.top)}if(O)B=Math.sqrt((2*P.width**2+P.height**2)/3),B%2===0&&(B+=1);else{const I=Math.max(Math.abs((E?E.clientWidth:0)-V),V)*2+2,$=Math.max(Math.abs((E?E.clientHeight:0)-x),x)*2+2;B=Math.sqrt(I**2+$**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{C({pulsate:F,rippleX:V,rippleY:x,rippleSize:B,cb:g})},w.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},nt)):C({pulsate:F,rippleX:V,rippleY:x,rippleSize:B,cb:g})},[n,C]),A=l.useCallback(()=>{L({},{pulsate:!0})},[L]),j=l.useCallback((f,y)=>{if(clearTimeout(w.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,w.current=setTimeout(()=>{j(f,y)});return}h.current=null,p(g=>g.length>0?g.slice(1):g),R.current=y},[]);return l.useImperativeHandle(r,()=>({pulsate:A,start:L,stop:j}),[A,L,j]),N(st,{className:T(m.root,o.root,i),ref:S,...c,children:N(Ze,{component:null,exit:!0,children:u})})}),ut=lt;function ct(e){return _e("MuiButtonBase",e)}const pt=be("MuiButtonBase",["root","disabled","focusVisible"]),ft=pt,dt=e=>{const{disabled:t,focusVisible:r,focusVisibleClassName:a,classes:n}=e,i=Ie({root:["root",t&&"disabled",r&&"focusVisible"]},ct,n);return r&&a&&(i.root+=` ${a}`),i},ht=ne("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ft.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),mt=l.forwardRef(function(t,r){const a=ge({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:o=!1,children:i,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:R=!1,focusRipple:b=!1,focusVisibleClassName:w,LinkComponent:h="a",onBlur:S,onClick:C,onContextMenu:L,onDragLeave:A,onFocus:j,onFocusVisible:f,onKeyDown:y,onKeyUp:g,onMouseDown:F,onMouseLeave:O,onMouseUp:_,onTouchEnd:E,onTouchMove:P,onTouchStart:V,tabIndex:x=0,TouchRippleProps:B,touchRippleRef:I,type:$,...U}=a,z=l.useRef(null),M=l.useRef(null),Re=ce(M,I),{isFocusVisibleRef:se,onFocus:ye,onBlur:Ee,ref:Me}=ze(),[k,K]=l.useState(!1);p&&k&&K(!1),l.useImperativeHandle(n,()=>({focusVisible:()=>{K(!0),z.current.focus()}}),[]);const[q,Te]=l.useState(!1);l.useEffect(()=>{Te(!0)},[]);const Ce=q&&!d&&!p;l.useEffect(()=>{k&&b&&!d&&q&&M.current.pulsate()},[d,b,k,q]);function v(s,le,Ne=R){return H(ue=>(le&&le(ue),!Ne&&M.current&&M.current[s](ue),!0))}const xe=v("start",F),ve=v("stop",L),Pe=v("stop",A),Ve=v("stop",_),Be=v("stop",s=>{k&&s.preventDefault(),O&&O(s)}),we=v("start",V),Se=v("stop",E),Oe=v("stop",P),$e=v("stop",s=>{Ee(s),se.current===!1&&K(!1),S&&S(s)},!1),ke=H(s=>{z.current||(z.current=s.currentTarget),ye(s),se.current===!0&&(K(!0),f&&f(s)),j&&j(s)}),J=()=>{const s=z.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},Q=l.useRef(!1),De=H(s=>{b&&!Q.current&&k&&M.current&&s.key===" "&&(Q.current=!0,M.current.stop(s,()=>{M.current.start(s)})),s.target===s.currentTarget&&J()&&s.key===" "&&s.preventDefault(),y&&y(s),s.target===s.currentTarget&&J()&&s.key==="Enter"&&!p&&(s.preventDefault(),C&&C(s))}),Le=H(s=>{b&&s.key===" "&&M.current&&k&&!s.defaultPrevented&&(Q.current=!1,M.current.stop(s,()=>{M.current.pulsate(s)})),g&&g(s),C&&s.target===s.currentTarget&&J()&&s.key===" "&&!s.defaultPrevented&&C(s)});let W=u;W==="button"&&(U.href||U.to)&&(W=h);const X={};W==="button"?(X.type=$===void 0?"button":$,X.disabled=p):(!U.href&&!U.to&&(X.role="button"),p&&(X["aria-disabled"]=p));const je=ce(r,Me,z),ae={...a,centerRipple:o,component:u,disabled:p,disableRipple:d,disableTouchRipple:R,focusRipple:b,tabIndex:x,focusVisible:k},Fe=dt(ae);return Ue(ht,{as:W,className:T(Fe.root,c),ownerState:ae,onBlur:$e,onClick:C,onContextMenu:ve,onFocus:ke,onKeyDown:De,onKeyUp:Le,onMouseDown:xe,onMouseLeave:Be,onMouseUp:Ve,onDragLeave:Pe,onTouchEnd:Se,onTouchMove:Oe,onTouchStart:we,ref:je,tabIndex:p?-1:x,type:$,...X,...U,children:[i,Ce?N(ut,{ref:Re,center:o,...B}):null]})}),xt=mt;export{xt as B,pe as T,Ke as _,Ae as a,H as b,Ye as u};
//# sourceMappingURL=ButtonBase-121cbb7f.js.map
