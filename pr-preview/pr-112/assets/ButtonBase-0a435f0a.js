import{b as be,_ as H}from"./createTheme-bcd1d157.js";import{r as l,a as X}from"./index-570b25c1.js";import{c as x}from"./clsx-7dc4e18d.js";import{s as ne,g as Ie,c as Ue}from"./styled-ba967c06.js";import{u as ge}from"./useThemeProps-32d9d40f.js";import{j as N,a as ze}from"./jsx-runtime-390e5fc8.js";import{g as Re}from"./generateUtilityClasses-cabd787c.js";import{k as oe}from"./emotion-react.browser.esm-474fda6d.js";import{u as ce}from"./useForkRef-153a0a89.js";import{u as Ke}from"./useIsFocusVisible-5e7b1ff1.js";import{u as Xe}from"./useEnhancedEffect-460150e6.js";function W(e){const t=l.useRef(e);return Xe(()=>{t.current=e}),l.useCallback((...r)=>(0,t.current)(...r),[])}function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Z.apply(this,arguments)}function Ye(e,t){if(e==null)return{};var r={},i=Object.keys(e),n,o;for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}function ee(e,t){return ee=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,n){return i.__proto__=n,i},ee(e,t)}function Ae(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ee(e,t)}const pe=X.createContext(null);function We(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function re(e,t){var r=function(o){return t&&l.isValidElement(o)?t(o):o},i=Object.create(null);return e&&l.Children.map(e,function(n){return n}).forEach(function(n){i[n.key]=r(n)}),i}function He(e,t){e=e||{},t=t||{};function r(d){return d in t?t[d]:e[d]}var i=Object.create(null),n=[];for(var o in e)o in t?n.length&&(i[o]=n,n=[]):n.push(o);var s,c={};for(var u in t){if(i[u])for(s=0;s<i[u].length;s++){var p=i[u][s];c[i[u][s]]=r(p)}c[u]=r(u)}for(s=0;s<n.length;s++)c[n[s]]=r(n[s]);return c}function L(e,t,r){return r[t]!=null?r[t]:e.props[t]}function Ge(e,t){return re(e.children,function(r){return l.cloneElement(r,{onExited:t.bind(null,r),in:!0,appear:L(r,"appear",e),enter:L(r,"enter",e),exit:L(r,"exit",e)})})}function qe(e,t,r){var i=re(e.children),n=He(t,i);return Object.keys(n).forEach(function(o){var s=n[o];if(l.isValidElement(s)){var c=o in t,u=o in i,p=t[o],d=l.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[o]=l.cloneElement(s,{onExited:r.bind(null,s),in:!0,exit:L(s,"exit",e),enter:L(s,"enter",e)}):!u&&c&&!d?n[o]=l.cloneElement(s,{in:!1}):u&&c&&l.isValidElement(p)&&(n[o]=l.cloneElement(s,{onExited:r.bind(null,s),in:p.props.in,exit:L(s,"exit",e),enter:L(s,"enter",e)}))}}),n}var Je=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Qe={component:"div",childFactory:function(t){return t}},ie=function(e){Ae(t,e);function t(i,n){var o;o=e.call(this,i,n)||this;var s=o.handleExited.bind(We(o));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,o){var s=o.children,c=o.handleExited,u=o.firstRender;return{children:u?Ge(n,c):qe(n,s,c),firstRender:!1}},r.handleExited=function(n,o){var s=re(this.props.children);n.key in s||(n.props.onExited&&n.props.onExited(o),this.mounted&&this.setState(function(c){var u=Z({},c.children);return delete u[n.key],{children:u}}))},r.render=function(){var n=this.props,o=n.component,s=n.childFactory,c=Ye(n,["component","childFactory"]),u=this.state.contextValue,p=Je(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,o===null?X.createElement(pe.Provider,{value:u},p):X.createElement(pe.Provider,{value:u},X.createElement(o,c,p))},t}(X.Component);ie.propTypes={};ie.defaultProps=Qe;const Ze=ie;function et(e){const{className:t,classes:r,pulsate:i=!1,rippleX:n,rippleY:o,rippleSize:s,in:c,onExited:u,timeout:p}=e,[d,g]=l.useState(!1),b=x(t,r.ripple,r.rippleVisible,i&&r.ripplePulsate),C={width:s,height:s,top:-(s/2)+o,left:-(s/2)+n},h=x(r.child,d&&r.childLeaving,i&&r.childPulsate);return!c&&!d&&g(!0),l.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),N("span",{className:b,style:C,children:N("span",{className:h})})}const tt=Re("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=tt,nt=["center","classes","className"];let G=e=>e,fe,de,he,me;const te=550,ot=80,rt=oe(fe||(fe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),it=oe(de||(de=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),st=oe(he||(he=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),at=ne("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),lt=ne(et,{name:"MuiTouchRipple",slot:"Ripple"})(me||(me=G`
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
`),m.rippleVisible,rt,te,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,it,te,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,st,({theme:e})=>e.transitions.easing.easeInOut),ut=l.forwardRef(function(t,r){const i=ge({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:o={},className:s}=i,c=be(i,nt),[u,p]=l.useState([]),d=l.useRef(0),g=l.useRef(null);l.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=l.useRef(!1),C=l.useRef(0),h=l.useRef(null),R=l.useRef(null);l.useEffect(()=>()=>{C.current&&clearTimeout(C.current)},[]);const j=l.useCallback(f=>{const{pulsate:y,rippleX:M,rippleY:$,rippleSize:F,cb:U}=f;p(T=>[...T,N(lt,{classes:{ripple:x(o.ripple,m.ripple),rippleVisible:x(o.rippleVisible,m.rippleVisible),ripplePulsate:x(o.ripplePulsate,m.ripplePulsate),child:x(o.child,m.child),childLeaving:x(o.childLeaving,m.childLeaving),childPulsate:x(o.childPulsate,m.childPulsate)},timeout:te,pulsate:y,rippleX:M,rippleY:$,rippleSize:F},d.current)]),d.current+=1,g.current=U},[o]),O=l.useCallback((f={},y={},M=()=>{})=>{const{pulsate:$=!1,center:F=n||y.pulsate,fakeElement:U=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const T=U?null:R.current,B=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,w,S;if(F||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(B.width/2),w=Math.round(B.height/2);else{const{clientX:k,clientY:P}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(k-B.left),w=Math.round(P-B.top)}if(F)S=Math.sqrt((2*B.width**2+B.height**2)/3),S%2===0&&(S+=1);else{const k=Math.max(Math.abs((T?T.clientWidth:0)-v),v)*2+2,P=Math.max(Math.abs((T?T.clientHeight:0)-w),w)*2+2;S=Math.sqrt(k**2+P**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{j({pulsate:$,rippleX:v,rippleY:w,rippleSize:S,cb:M})},C.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},ot)):j({pulsate:$,rippleX:v,rippleY:w,rippleSize:S,cb:M})},[n,j]),I=l.useCallback(()=>{O({},{pulsate:!0})},[O]),_=l.useCallback((f,y)=>{if(clearTimeout(C.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,C.current=setTimeout(()=>{_(f,y)});return}h.current=null,p(M=>M.length>0?M.slice(1):M),g.current=y},[]);return l.useImperativeHandle(r,()=>({pulsate:I,start:O,stop:_}),[I,O,_]),N(at,H({className:x(m.root,o.root,s),ref:R},c,{children:N(Ze,{component:null,exit:!0,children:u})}))}),ct=ut;function pt(e){return Ie("MuiButtonBase",e)}const ft=Re("MuiButtonBase",["root","disabled","focusVisible"]),dt=ft,ht=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],mt=e=>{const{disabled:t,focusVisible:r,focusVisibleClassName:i,classes:n}=e,s=Ue({root:["root",t&&"disabled",r&&"focusVisible"]},pt,n);return r&&i&&(s.root+=` ${i}`),s},bt=ne("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${dt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),gt=l.forwardRef(function(t,r){const i=ge({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:o=!1,children:s,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:C="a",onBlur:h,onClick:R,onContextMenu:j,onDragLeave:O,onFocus:I,onFocusVisible:_,onKeyDown:f,onKeyUp:y,onMouseDown:M,onMouseLeave:$,onMouseUp:F,onTouchEnd:U,onTouchMove:T,onTouchStart:B,tabIndex:v=0,TouchRippleProps:w,touchRippleRef:S,type:k}=i,P=be(i,ht),z=l.useRef(null),E=l.useRef(null),ye=ce(E,S),{isFocusVisibleRef:se,onFocus:Me,onBlur:Te,ref:Ee}=Ke(),[D,Y]=l.useState(!1);p&&D&&Y(!1),l.useImperativeHandle(n,()=>({focusVisible:()=>{Y(!0),z.current.focus()}}),[]);const[q,xe]=l.useState(!1);l.useEffect(()=>{xe(!0)},[]);const Ce=q&&!d&&!p;l.useEffect(()=>{D&&b&&!d&&q&&E.current.pulsate()},[d,b,D,q]);function V(a,le,je=g){return W(ue=>(le&&le(ue),!je&&E.current&&E.current[a](ue),!0))}const ve=V("start",M),Pe=V("stop",j),Ve=V("stop",O),Be=V("stop",F),we=V("stop",a=>{D&&a.preventDefault(),$&&$(a)}),Se=V("start",B),$e=V("stop",U),ke=V("stop",T),De=V("stop",a=>{Te(a),se.current===!1&&Y(!1),h&&h(a)},!1),Le=W(a=>{z.current||(z.current=a.currentTarget),Me(a),se.current===!0&&(Y(!0),_&&_(a)),I&&I(a)}),J=()=>{const a=z.current;return u&&u!=="button"&&!(a.tagName==="A"&&a.href)},Q=l.useRef(!1),Oe=W(a=>{b&&!Q.current&&D&&E.current&&a.key===" "&&(Q.current=!0,E.current.stop(a,()=>{E.current.start(a)})),a.target===a.currentTarget&&J()&&a.key===" "&&a.preventDefault(),f&&f(a),a.target===a.currentTarget&&J()&&a.key==="Enter"&&!p&&(a.preventDefault(),R&&R(a))}),_e=W(a=>{b&&a.key===" "&&E.current&&D&&!a.defaultPrevented&&(Q.current=!1,E.current.stop(a,()=>{E.current.pulsate(a)})),y&&y(a),R&&a.target===a.currentTarget&&J()&&a.key===" "&&!a.defaultPrevented&&R(a)});let A=u;A==="button"&&(P.href||P.to)&&(A=C);const K={};A==="button"?(K.type=k===void 0?"button":k,K.disabled=p):(!P.href&&!P.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const Fe=ce(r,Ee,z),ae=H({},i,{centerRipple:o,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:D}),Ne=mt(ae);return ze(bt,H({as:A,className:x(Ne.root,c),ownerState:ae,onBlur:De,onClick:R,onContextMenu:Pe,onFocus:Le,onKeyDown:Oe,onKeyUp:_e,onMouseDown:ve,onMouseLeave:we,onMouseUp:Be,onDragLeave:Ve,onTouchEnd:$e,onTouchMove:ke,onTouchStart:Se,ref:Fe,tabIndex:p?-1:v,type:k},K,P,{children:[s,Ce?N(ct,H({ref:ye,center:o},w)):null]}))}),St=gt;export{St as B,pe as T,Ae as _,Ye as a,W as u};
//# sourceMappingURL=ButtonBase-0a435f0a.js.map
