import{r as s,R as A}from"./index-8db94870.js";import{c as C,a as ye,s as re,g as _e,b as je}from"./styled-38682cfe.js";import{u as Re}from"./useThemeProps-bac2eb8f.js";import{j as U,a as ze}from"./jsx-runtime-91a467a5.js";import{k as ie}from"./emotion-react.browser.esm-bff3daf8.js";import{_ as Ae}from"./extends-bab83b91.js";import{a as Xe}from"./setPrototypeOf-8d862a7d.js";import{_ as Ye}from"./inheritsLoose-a02b825e.js";import{u as pe}from"./useForkRef-2674f3de.js";const We=typeof window<"u"?s.useLayoutEffect:s.useEffect,He=We;function H(e){const t=s.useRef(e);return He(()=>{t.current=e}),s.useCallback((...i)=>(0,t.current)(...i),[])}let G=!0,te=!1,fe;const Ge={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function qe(e){const{type:t,tagName:i}=e;return!!(i==="INPUT"&&Ge[t]&&!e.readOnly||i==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Je(e){e.metaKey||e.altKey||e.ctrlKey||(G=!0)}function ee(){G=!1}function Qe(){this.visibilityState==="hidden"&&te&&(G=!0)}function Ze(e){e.addEventListener("keydown",Je,!0),e.addEventListener("mousedown",ee,!0),e.addEventListener("pointerdown",ee,!0),e.addEventListener("touchstart",ee,!0),e.addEventListener("visibilitychange",Qe,!0)}function et(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return G||qe(t)}function tt(){const e=s.useCallback(n=>{n!=null&&Ze(n.ownerDocument)},[]),t=s.useRef(!1);function i(){return t.current?(te=!0,window.clearTimeout(fe),fe=window.setTimeout(()=>{te=!1},100),t.current=!1,!0):!1}function l(n){return et(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:l,onBlur:i,ref:e}}function nt(e,t){if(e==null)return{};var i={},l=Object.keys(e),n,r;for(r=0;r<l.length;r++)n=l[r],!(t.indexOf(n)>=0)&&(i[n]=e[n]);return i}const de=A.createContext(null);function oe(e,t){var i=function(r){return t&&s.isValidElement(r)?t(r):r},l=Object.create(null);return e&&s.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=i(n)}),l}function rt(e,t){e=e||{},t=t||{};function i(d){return d in t?t[d]:e[d]}var l=Object.create(null),n=[];for(var r in e)r in t?n.length&&(l[r]=n,n=[]):n.push(r);var o,c={};for(var u in t){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=i(p)}c[u]=i(u)}for(o=0;o<n.length;o++)c[n[o]]=i(n[o]);return c}function F(e,t,i){return i[t]!=null?i[t]:e.props[t]}function it(e,t){return oe(e.children,function(i){return s.cloneElement(i,{onExited:t.bind(null,i),in:!0,appear:F(i,"appear",e),enter:F(i,"enter",e),exit:F(i,"exit",e)})})}function ot(e,t,i){var l=oe(e.children),n=rt(t,l);return Object.keys(n).forEach(function(r){var o=n[r];if(s.isValidElement(o)){var c=r in t,u=r in l,p=t[r],d=s.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[r]=s.cloneElement(o,{onExited:i.bind(null,o),in:!0,exit:F(o,"exit",e),enter:F(o,"enter",e)}):!u&&c&&!d?n[r]=s.cloneElement(o,{in:!1}):u&&c&&s.isValidElement(p)&&(n[r]=s.cloneElement(o,{onExited:i.bind(null,o),in:p.props.in,exit:F(o,"exit",e),enter:F(o,"enter",e)}))}}),n}var st=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},at={component:"div",childFactory:function(t){return t}},se=function(e){Ye(t,e);function t(l,n){var r;r=e.call(this,l,n)||this;var o=r.handleExited.bind(Xe(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}var i=t.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,r){var o=r.children,c=r.handleExited,u=r.firstRender;return{children:u?it(n,c):ot(n,o,c),firstRender:!1}},i.handleExited=function(n,r){var o=oe(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(r),this.mounted&&this.setState(function(c){var u=Ae({},c.children);return delete u[n.key],{children:u}}))},i.render=function(){var n=this.props,r=n.component,o=n.childFactory,c=nt(n,["component","childFactory"]),u=this.state.contextValue,p=st(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,r===null?A.createElement(de.Provider,{value:u},p):A.createElement(de.Provider,{value:u},A.createElement(r,c,p))},t}(A.Component);se.propTypes={};se.defaultProps=at;const lt=se;function ut(e){const{className:t,classes:i,pulsate:l=!1,rippleX:n,rippleY:r,rippleSize:o,in:c,onExited:u,timeout:p}=e,[d,y]=s.useState(!1),b=C(t,i.ripple,i.rippleVisible,l&&i.ripplePulsate),P={width:o,height:o,top:-(o/2)+r,left:-(o/2)+n},h=C(i.child,d&&i.childLeaving,l&&i.childPulsate);return!c&&!d&&y(!0),s.useEffect(()=>{if(!c&&u!=null){const k=setTimeout(u,p);return()=>{clearTimeout(k)}}},[u,c,p]),U("span",{className:b,style:P,children:U("span",{className:h})})}const ct=ye("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=ct;let q=e=>e,he,me,be,ge;const ne=550,pt=80,ft=ie(he||(he=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),dt=ie(me||(me=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),ht=ie(be||(be=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),mt=re("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),bt=re(ut,{name:"MuiTouchRipple",slot:"Ripple"})(ge||(ge=q`
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
`),m.rippleVisible,ft,ne,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,dt,ne,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,ht,({theme:e})=>e.transitions.easing.easeInOut),gt=s.forwardRef(function(t,i){const l=Re({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:r={},className:o,...c}=l,[u,p]=s.useState([]),d=s.useRef(0),y=s.useRef(null);s.useEffect(()=>{y.current&&(y.current(),y.current=null)},[u]);const b=s.useRef(!1),P=s.useRef(null),h=s.useRef(null),k=s.useRef(null);s.useEffect(()=>()=>{clearTimeout(P.current)},[]);const M=s.useCallback(f=>{const{pulsate:R,rippleX:g,rippleY:I,rippleSize:L,cb:K}=f;p(E=>[...E,U(bt,{classes:{ripple:C(r.ripple,m.ripple),rippleVisible:C(r.rippleVisible,m.rippleVisible),ripplePulsate:C(r.ripplePulsate,m.ripplePulsate),child:C(r.child,m.child),childLeaving:C(r.childLeaving,m.childLeaving),childPulsate:C(r.childPulsate,m.childPulsate)},timeout:ne,pulsate:R,rippleX:g,rippleY:I,rippleSize:L},d.current)]),d.current+=1,y.current=K},[r]),$=s.useCallback((f={},R={},g=()=>{})=>{const{pulsate:I=!1,center:L=n||R.pulsate,fakeElement:K=!1}=R;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const E=K?null:k.current,V=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let w,x,B;if(L||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)w=Math.round(V.width/2),x=Math.round(V.height/2);else{const{clientX:O,clientY:S}=f.touches&&f.touches.length>0?f.touches[0]:f;w=Math.round(O-V.left),x=Math.round(S-V.top)}if(L)B=Math.sqrt((2*V.width**2+V.height**2)/3),B%2===0&&(B+=1);else{const O=Math.max(Math.abs((E?E.clientWidth:0)-w),w)*2+2,S=Math.max(Math.abs((E?E.clientHeight:0)-x),x)*2+2;B=Math.sqrt(O**2+S**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{M({pulsate:I,rippleX:w,rippleY:x,rippleSize:B,cb:g})},P.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},pt)):M({pulsate:I,rippleX:w,rippleY:x,rippleSize:B,cb:g})},[n,M]),X=s.useCallback(()=>{$({},{pulsate:!0})},[$]),N=s.useCallback((f,R)=>{if(clearTimeout(P.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,P.current=setTimeout(()=>{N(f,R)});return}h.current=null,p(g=>g.length>0?g.slice(1):g),y.current=R},[]);return s.useImperativeHandle(i,()=>({pulsate:X,start:$,stop:N}),[X,$,N]),U(mt,{className:C(m.root,r.root,o),ref:k,...c,children:U(lt,{component:null,exit:!0,children:u})})}),yt=gt;function Rt(e){return _e("MuiButtonBase",e)}const Et=ye("MuiButtonBase",["root","disabled","focusVisible"]),Tt=Et,Ct=e=>{const{disabled:t,focusVisible:i,focusVisibleClassName:l,classes:n}=e,o=je({root:["root",t&&"disabled",i&&"focusVisible"]},Rt,n);return i&&l&&(o.root+=` ${l}`),o},Mt=re("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Tt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),xt=s.forwardRef(function(t,i){const l=Re({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:r=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:y=!1,focusRipple:b=!1,focusVisibleClassName:P,LinkComponent:h="a",onBlur:k,onClick:M,onContextMenu:$,onDragLeave:X,onFocus:N,onFocusVisible:f,onKeyDown:R,onKeyUp:g,onMouseDown:I,onMouseLeave:L,onMouseUp:K,onTouchEnd:E,onTouchMove:V,onTouchStart:w,tabIndex:x=0,TouchRippleProps:B,touchRippleRef:O,type:S,..._}=l,j=s.useRef(null),T=s.useRef(null),Ee=pe(T,O),{isFocusVisibleRef:ae,onFocus:Te,onBlur:Ce,ref:Me}=tt(),[D,Y]=s.useState(!1);p&&D&&Y(!1),s.useImperativeHandle(n,()=>({focusVisible:()=>{Y(!0),j.current.focus()}}),[]);const[J,xe]=s.useState(!1);s.useEffect(()=>{xe(!0)},[]);const ve=J&&!d&&!p;s.useEffect(()=>{D&&b&&!d&&J&&T.current.pulsate()},[d,b,D,J]);function v(a,ue,Oe=y){return H(ce=>(ue&&ue(ce),!Oe&&T.current&&T.current[a](ce),!0))}const Ve=v("start",I),we=v("stop",$),Be=v("stop",X),Pe=v("stop",K),ke=v("stop",a=>{D&&a.preventDefault(),L&&L(a)}),Le=v("start",w),Se=v("stop",E),De=v("stop",V),Fe=v("stop",a=>{Ce(a),ae.current===!1&&Y(!1),k&&k(a)},!1),$e=H(a=>{j.current||(j.current=a.currentTarget),Te(a),ae.current===!0&&(Y(!0),f&&f(a)),N&&N(a)}),Q=()=>{const a=j.current;return u&&u!=="button"&&!(a.tagName==="A"&&a.href)},Z=s.useRef(!1),Ne=H(a=>{b&&!Z.current&&D&&T.current&&a.key===" "&&(Z.current=!0,T.current.stop(a,()=>{T.current.start(a)})),a.target===a.currentTarget&&Q()&&a.key===" "&&a.preventDefault(),R&&R(a),a.target===a.currentTarget&&Q()&&a.key==="Enter"&&!p&&(a.preventDefault(),M&&M(a))}),Ie=H(a=>{b&&a.key===" "&&T.current&&D&&!a.defaultPrevented&&(Z.current=!1,T.current.stop(a,()=>{T.current.pulsate(a)})),g&&g(a),M&&a.target===a.currentTarget&&Q()&&a.key===" "&&!a.defaultPrevented&&M(a)});let W=u;W==="button"&&(_.href||_.to)&&(W=h);const z={};W==="button"?(z.type=S===void 0?"button":S,z.disabled=p):(!_.href&&!_.to&&(z.role="button"),p&&(z["aria-disabled"]=p));const Ue=pe(i,Me,j),le={...l,centerRipple:r,component:u,disabled:p,disableRipple:d,disableTouchRipple:y,focusRipple:b,tabIndex:x,focusVisible:D},Ke=Ct(le);return ze(Mt,{as:W,className:C(Ke.root,c),ownerState:le,onBlur:Fe,onClick:M,onContextMenu:we,onFocus:$e,onKeyDown:Ne,onKeyUp:Ie,onMouseDown:Ve,onMouseLeave:ke,onMouseUp:Pe,onDragLeave:Be,onTouchEnd:Se,onTouchMove:De,onTouchStart:Le,ref:Ue,tabIndex:p?-1:x,type:S,...z,..._,children:[o,ve?U(yt,{ref:Ee,center:r,...B}):null]})}),$t=xt;export{$t as B,de as T,nt as _,H as a,tt as b,He as u};
//# sourceMappingURL=ButtonBase-2a1f4575.js.map
