var Vt=Object.defineProperty;var Bt=(n,t,e)=>t in n?Vt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var it=(n,t,e)=>Bt(n,typeof t!="symbol"?t+"":t,e);import{r as l,e as H}from"./index-BSuoOqEd.js";import{a as x}from"./identifier-DhnHujDJ.js";import{j as N}from"./jsx-runtime-D_zvdyIk.js";import{g as lt}from"./generateUtilityClasses-DDbjFgb8.js";import{u as ut}from"./DefaultPropsProvider-B1sWsgx2.js";import{a as St,u as wt}from"./useTimeout-B9dULhq6.js";import{s as Z,c as Dt}from"./styled-9znMky1q.js";import{_ as jt,a as Lt,T as st}from"./TransitionGroupContext-CcytU7uK.js";import{k as tt}from"./emotion-react.browser.esm-CVJjYY2z.js";import{g as kt}from"./generateUtilityClass-BtcU_pBl.js";import{u as rt}from"./useForkRef-BIkqQIqh.js";import{u as _}from"./useEventCallback-Dvy07Fv6.js";import{i as at}from"./isFocusVisible-B8k4qzLc.js";function J(){return J=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)({}).hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},J.apply(null,arguments)}function vt(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function et(n,t){var e=function(i){return t&&l.isValidElement(i)?t(i):i},r=Object.create(null);return n&&l.Children.map(n,function(o){return o}).forEach(function(o){r[o.key]=e(o)}),r}function Nt(n,t){n=n||{},t=t||{};function e(d){return d in t?t[d]:n[d]}var r=Object.create(null),o=[];for(var i in n)i in t?o.length&&(r[i]=o,o=[]):o.push(i);var s,p={};for(var u in t){if(r[u])for(s=0;s<r[u].length;s++){var f=r[u][s];p[r[u][s]]=e(f)}p[u]=e(u)}for(s=0;s<o.length;s++)p[o[s]]=e(o[s]);return p}function v(n,t,e){return e[t]!=null?e[t]:n.props[t]}function $t(n,t){return et(n.children,function(e){return l.cloneElement(e,{onExited:t.bind(null,e),in:!0,appear:v(e,"appear",n),enter:v(e,"enter",n),exit:v(e,"exit",n)})})}function Ft(n,t,e){var r=et(n.children),o=Nt(t,r);return Object.keys(o).forEach(function(i){var s=o[i];if(l.isValidElement(s)){var p=i in t,u=i in r,f=t[i],d=l.isValidElement(f)&&!f.props.in;u&&(!p||d)?o[i]=l.cloneElement(s,{onExited:e.bind(null,s),in:!0,exit:v(s,"exit",n),enter:v(s,"enter",n)}):!u&&p&&!d?o[i]=l.cloneElement(s,{in:!1}):u&&p&&l.isValidElement(f)&&(o[i]=l.cloneElement(s,{onExited:e.bind(null,s),in:f.props.in,exit:v(s,"exit",n),enter:v(s,"enter",n)}))}}),o}var It=Object.values||function(n){return Object.keys(n).map(function(t){return n[t]})},Ut={component:"div",childFactory:function(t){return t}},nt=function(n){jt(t,n);function t(r,o){var i;i=n.call(this,r,o)||this;var s=i.handleExited.bind(vt(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var e=t.prototype;return e.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},e.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,i){var s=i.children,p=i.handleExited,u=i.firstRender;return{children:u?$t(o,p):Ft(o,s,p),firstRender:!1}},e.handleExited=function(o,i){var s=et(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(p){var u=J({},p.children);return delete u[o.key],{children:u}}))},e.render=function(){var o=this.props,i=o.component,s=o.childFactory,p=Lt(o,["component","childFactory"]),u=this.state.contextValue,f=It(this.state.children).map(s);return delete p.appear,delete p.enter,delete p.exit,i===null?H.createElement(st.Provider,{value:u},f):H.createElement(st.Provider,{value:u},H.createElement(i,p,f))},t}(H.Component);nt.propTypes={};nt.defaultProps=Ut;class G{constructor(){it(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new G}static use(){const t=St(G.create).current,[e,r]=l.useState(!1);return t.shouldMount=e,t.setShouldMount=r,l.useEffect(t.mountEffect,[e]),t}mount(){return this.mounted||(this.mounted=zt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...t){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.start(...t)})}stop(...t){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.stop(...t)})}pulsate(...t){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.pulsate(...t)})}}function Ot(){return G.use()}function zt(){let n,t;const e=new Promise((r,o)=>{n=r,t=o});return e.resolve=n,e.reject=t,e}function At(n){const{className:t,classes:e,pulsate:r=!1,rippleX:o,rippleY:i,rippleSize:s,in:p,onExited:u,timeout:f}=n,[d,h]=l.useState(!1),M=x(t,e.ripple,e.rippleVisible,r&&e.ripplePulsate),V={width:s,height:s,top:-(s/2)+i,left:-(s/2)+o},g=x(e.child,d&&e.childLeaving,r&&e.childPulsate);return!p&&!d&&h(!0),l.useEffect(()=>{if(!p&&u!=null){const D=setTimeout(u,f);return()=>{clearTimeout(D)}}},[u,p,f]),N.jsx("span",{className:M,style:V,children:N.jsx("span",{className:g})})}const b=lt("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Q=550,Xt=80,Yt=tt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Kt=tt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Wt=tt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Ht=Z("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),_t=Z(At,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${b.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Yt};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
  }

  &.${b.ripplePulsate} {
    animation-duration: ${({theme:n})=>n.transitions.duration.shorter}ms;
  }

  & .${b.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${b.childLeaving} {
    opacity: 0;
    animation-name: ${Kt};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
  }

  & .${b.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Wt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Gt=l.forwardRef(function(t,e){const r=ut({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:s,...p}=r,[u,f]=l.useState([]),d=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[u]);const M=l.useRef(!1),V=wt(),g=l.useRef(null),D=l.useRef(null),C=l.useCallback(c=>{const{pulsate:y,rippleX:R,rippleY:I,rippleSize:j,cb:U}=c;f(E=>[...E,N.jsx(_t,{classes:{ripple:x(i.ripple,b.ripple),rippleVisible:x(i.rippleVisible,b.rippleVisible),ripplePulsate:x(i.ripplePulsate,b.ripplePulsate),child:x(i.child,b.child),childLeaving:x(i.childLeaving,b.childLeaving),childPulsate:x(i.childPulsate,b.childPulsate)},timeout:Q,pulsate:y,rippleX:R,rippleY:I,rippleSize:j},d.current)]),d.current+=1,h.current=U},[i]),$=l.useCallback((c={},y={},R=()=>{})=>{const{pulsate:I=!1,center:j=o||y.pulsate,fakeElement:U=!1}=y;if((c==null?void 0:c.type)==="mousedown"&&M.current){M.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(M.current=!0);const E=U?null:D.current,B=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let S,T,w;if(j||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)S=Math.round(B.width/2),T=Math.round(B.height/2);else{const{clientX:O,clientY:L}=c.touches&&c.touches.length>0?c.touches[0]:c;S=Math.round(O-B.left),T=Math.round(L-B.top)}if(j)w=Math.sqrt((2*B.width**2+B.height**2)/3),w%2===0&&(w+=1);else{const O=Math.max(Math.abs((E?E.clientWidth:0)-S),S)*2+2,L=Math.max(Math.abs((E?E.clientHeight:0)-T),T)*2+2;w=Math.sqrt(O**2+L**2)}c!=null&&c.touches?g.current===null&&(g.current=()=>{C({pulsate:I,rippleX:S,rippleY:T,rippleSize:w,cb:R})},V.start(Xt,()=>{g.current&&(g.current(),g.current=null)})):C({pulsate:I,rippleX:S,rippleY:T,rippleSize:w,cb:R})},[o,C,V]),Y=l.useCallback(()=>{$({},{pulsate:!0})},[$]),F=l.useCallback((c,y)=>{if(V.clear(),(c==null?void 0:c.type)==="touchend"&&g.current){g.current(),g.current=null,V.start(0,()=>{F(c,y)});return}g.current=null,f(R=>R.length>0?R.slice(1):R),h.current=y},[V]);return l.useImperativeHandle(e,()=>({pulsate:Y,start:$,stop:F}),[Y,$,F]),N.jsx(Ht,{className:x(b.root,i.root,s),ref:D,...p,children:N.jsx(nt,{component:null,exit:!0,children:u})})});function qt(n){return kt("MuiButtonBase",n)}const Jt=lt("MuiButtonBase",["root","disabled","focusVisible"]),Qt=n=>{const{disabled:t,focusVisible:e,focusVisibleClassName:r,classes:o}=n,s=Dt({root:["root",t&&"disabled",e&&"focusVisible"]},qt,o);return e&&r&&(s.root+=` ${r}`),s},Zt=Z("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Jt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),he=l.forwardRef(function(t,e){const r=ut({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:s,className:p,component:u="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:V,LinkComponent:g="a",onBlur:D,onClick:C,onContextMenu:$,onDragLeave:Y,onFocus:F,onFocusVisible:c,onKeyDown:y,onKeyUp:R,onMouseDown:I,onMouseLeave:j,onMouseUp:U,onTouchEnd:E,onTouchMove:B,onTouchStart:S,tabIndex:T=0,TouchRippleProps:w,touchRippleRef:O,type:L,...z}=r,A=l.useRef(null),m=Ot(),ct=rt(m.ref,O),[k,K]=l.useState(!1);f&&k&&K(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),A.current.focus()}}),[]);const pt=m.shouldMount&&!d&&!f;l.useEffect(()=>{k&&M&&!d&&m.pulsate()},[d,M,k,m]);const ft=P(m,"start",I,h),dt=P(m,"stop",$,h),ht=P(m,"stop",Y,h),mt=P(m,"stop",U,h),gt=P(m,"stop",a=>{k&&a.preventDefault(),j&&j(a)},h),bt=P(m,"start",S,h),Mt=P(m,"stop",E,h),Rt=P(m,"stop",B,h),yt=P(m,"stop",a=>{at(a.target)||K(!1),D&&D(a)},!1),Et=_(a=>{A.current||(A.current=a.currentTarget),at(a.target)&&(K(!0),c&&c(a)),F&&F(a)}),q=()=>{const a=A.current;return u&&u!=="button"&&!(a.tagName==="A"&&a.href)},xt=_(a=>{M&&!a.repeat&&k&&a.key===" "&&m.stop(a,()=>{m.start(a)}),a.target===a.currentTarget&&q()&&a.key===" "&&a.preventDefault(),y&&y(a),a.target===a.currentTarget&&q()&&a.key==="Enter"&&!f&&(a.preventDefault(),C&&C(a))}),Ct=_(a=>{M&&a.key===" "&&k&&!a.defaultPrevented&&m.stop(a,()=>{m.pulsate(a)}),R&&R(a),C&&a.target===a.currentTarget&&q()&&a.key===" "&&!a.defaultPrevented&&C(a)});let W=u;W==="button"&&(z.href||z.to)&&(W=g);const X={};W==="button"?(X.type=L===void 0?"button":L,X.disabled=f):(!z.href&&!z.to&&(X.role="button"),f&&(X["aria-disabled"]=f));const Tt=rt(e,A),ot={...r,centerRipple:i,component:u,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:k},Pt=Qt(ot);return N.jsxs(Zt,{as:W,className:x(Pt.root,p),ownerState:ot,onBlur:yt,onClick:C,onContextMenu:dt,onFocus:Et,onKeyDown:xt,onKeyUp:Ct,onMouseDown:ft,onMouseLeave:gt,onMouseUp:mt,onDragLeave:ht,onTouchEnd:Mt,onTouchMove:Rt,onTouchStart:bt,ref:Tt,tabIndex:f?-1:T,type:L,...X,...z,children:[s,pt?N.jsx(Gt,{ref:ct,center:i,...w}):null]})});function P(n,t,e,r=!1){return _(o=>(e&&e(o),r||n[t](o),!0))}export{he as B,nt as T,J as _};
