import{R as A,r as s}from"./index-8db94870.js";import{b as Oe,T as je,e as ze,u as ye}from"./useThemeProps-bbf3a6ab.js";import{c as M,g as Re,s as re,a as Ae,b as Xe}from"./styled-83dce9db.js";import{j as U,a as Ye}from"./jsx-runtime-91a467a5.js";import{k as ie}from"./emotion-react.browser.esm-b298e083.js";import{_ as We}from"./extends-bab83b91.js";import{a as He}from"./setPrototypeOf-8d862a7d.js";import{_ as Ge}from"./inheritsLoose-a02b825e.js";import{u as pe}from"./useForkRef-2674f3de.js";function qe(e,t){if(e==null)return{};var i={},u=Object.keys(e),n,r;for(r=0;r<u.length;r++)n=u[r],!(t.indexOf(n)>=0)&&(i[n]=e[n]);return i}const fe=A.createContext(null);function oe(e,t){var i=function(r){return t&&s.isValidElement(r)?t(r):r},u=Object.create(null);return e&&s.Children.map(e,function(n){return n}).forEach(function(n){u[n.key]=i(n)}),u}function Je(e,t){e=e||{},t=t||{};function i(d){return d in t?t[d]:e[d]}var u=Object.create(null),n=[];for(var r in e)r in t?n.length&&(u[r]=n,n=[]):n.push(r);var o,c={};for(var l in t){if(u[l])for(o=0;o<u[l].length;o++){var p=u[l][o];c[u[l][o]]=i(p)}c[l]=i(l)}for(o=0;o<n.length;o++)c[n[o]]=i(n[o]);return c}function F(e,t,i){return i[t]!=null?i[t]:e.props[t]}function Qe(e,t){return oe(e.children,function(i){return s.cloneElement(i,{onExited:t.bind(null,i),in:!0,appear:F(i,"appear",e),enter:F(i,"enter",e),exit:F(i,"exit",e)})})}function Ze(e,t,i){var u=oe(e.children),n=Je(t,u);return Object.keys(n).forEach(function(r){var o=n[r];if(s.isValidElement(o)){var c=r in t,l=r in u,p=t[r],d=s.isValidElement(p)&&!p.props.in;l&&(!c||d)?n[r]=s.cloneElement(o,{onExited:i.bind(null,o),in:!0,exit:F(o,"exit",e),enter:F(o,"enter",e)}):!l&&c&&!d?n[r]=s.cloneElement(o,{in:!1}):l&&c&&s.isValidElement(p)&&(n[r]=s.cloneElement(o,{onExited:i.bind(null,o),in:p.props.in,exit:F(o,"exit",e),enter:F(o,"enter",e)}))}}),n}var et=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},tt={component:"div",childFactory:function(t){return t}},se=function(e){Ge(t,e);function t(u,n){var r;r=e.call(this,u,n)||this;var o=r.handleExited.bind(He(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}var i=t.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,r){var o=r.children,c=r.handleExited,l=r.firstRender;return{children:l?Qe(n,c):Ze(n,o,c),firstRender:!1}},i.handleExited=function(n,r){var o=oe(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(r),this.mounted&&this.setState(function(c){var l=We({},c.children);return delete l[n.key],{children:l}}))},i.render=function(){var n=this.props,r=n.component,o=n.childFactory,c=qe(n,["component","childFactory"]),l=this.state.contextValue,p=et(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,r===null?A.createElement(fe.Provider,{value:l},p):A.createElement(fe.Provider,{value:l},A.createElement(r,c,p))},t}(A.Component);se.propTypes={};se.defaultProps=tt;const nt=se,rt=typeof window<"u"?s.useLayoutEffect:s.useEffect,it=rt;function H(e){const t=s.useRef(e);return it(()=>{t.current=e}),s.useCallback((...i)=>(0,t.current)(...i),[])}let G=!0,te=!1,de;const ot={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function st(e){const{type:t,tagName:i}=e;return!!(i==="INPUT"&&ot[t]&&!e.readOnly||i==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function at(e){e.metaKey||e.altKey||e.ctrlKey||(G=!0)}function ee(){G=!1}function ut(){this.visibilityState==="hidden"&&te&&(G=!0)}function lt(e){e.addEventListener("keydown",at,!0),e.addEventListener("mousedown",ee,!0),e.addEventListener("pointerdown",ee,!0),e.addEventListener("touchstart",ee,!0),e.addEventListener("visibilitychange",ut,!0)}function ct(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return G||st(t)}function pt(){const e=s.useCallback(n=>{n!=null&&lt(n.ownerDocument)},[]),t=s.useRef(!1);function i(){return t.current?(te=!0,window.clearTimeout(de),de=window.setTimeout(()=>{te=!1},100),t.current=!1,!0):!1}function u(n){return ct(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:u,onBlur:i,ref:e}}function Ut(){const e=Oe(ze);return e[je]||e}function ft(e){const{className:t,classes:i,pulsate:u=!1,rippleX:n,rippleY:r,rippleSize:o,in:c,onExited:l,timeout:p}=e,[d,y]=s.useState(!1),b=M(t,i.ripple,i.rippleVisible,u&&i.ripplePulsate),P={width:o,height:o,top:-(o/2)+r,left:-(o/2)+n},h=M(i.child,d&&i.childLeaving,u&&i.childPulsate);return!c&&!d&&y(!0),s.useEffect(()=>{if(!c&&l!=null){const k=setTimeout(l,p);return()=>{clearTimeout(k)}}},[l,c,p]),U("span",{className:b,style:P,children:U("span",{className:h})})}const dt=Re("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=dt;let q=e=>e,he,me,be,ge;const ne=550,ht=80,mt=ie(he||(he=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),bt=ie(me||(me=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),gt=ie(be||(be=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),yt=re("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Rt=re(ft,{name:"MuiTouchRipple",slot:"Ripple"})(ge||(ge=q`
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
`),m.rippleVisible,mt,ne,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,bt,ne,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,gt,({theme:e})=>e.transitions.easing.easeInOut),Et=s.forwardRef(function(t,i){const u=ye({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:r={},className:o,...c}=u,[l,p]=s.useState([]),d=s.useRef(0),y=s.useRef(null);s.useEffect(()=>{y.current&&(y.current(),y.current=null)},[l]);const b=s.useRef(!1),P=s.useRef(null),h=s.useRef(null),k=s.useRef(null);s.useEffect(()=>()=>{clearTimeout(P.current)},[]);const C=s.useCallback(f=>{const{pulsate:R,rippleX:g,rippleY:I,rippleSize:L,cb:_}=f;p(E=>[...E,U(Rt,{classes:{ripple:M(r.ripple,m.ripple),rippleVisible:M(r.rippleVisible,m.rippleVisible),ripplePulsate:M(r.ripplePulsate,m.ripplePulsate),child:M(r.child,m.child),childLeaving:M(r.childLeaving,m.childLeaving),childPulsate:M(r.childPulsate,m.childPulsate)},timeout:ne,pulsate:R,rippleX:g,rippleY:I,rippleSize:L},d.current)]),d.current+=1,y.current=_},[r]),$=s.useCallback((f={},R={},g=()=>{})=>{const{pulsate:I=!1,center:L=n||R.pulsate,fakeElement:_=!1}=R;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const E=_?null:k.current,V=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let w,x,B;if(L||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)w=Math.round(V.width/2),x=Math.round(V.height/2);else{const{clientX:K,clientY:D}=f.touches&&f.touches.length>0?f.touches[0]:f;w=Math.round(K-V.left),x=Math.round(D-V.top)}if(L)B=Math.sqrt((2*V.width**2+V.height**2)/3),B%2===0&&(B+=1);else{const K=Math.max(Math.abs((E?E.clientWidth:0)-w),w)*2+2,D=Math.max(Math.abs((E?E.clientHeight:0)-x),x)*2+2;B=Math.sqrt(K**2+D**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{C({pulsate:I,rippleX:w,rippleY:x,rippleSize:B,cb:g})},P.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},ht)):C({pulsate:I,rippleX:w,rippleY:x,rippleSize:B,cb:g})},[n,C]),X=s.useCallback(()=>{$({},{pulsate:!0})},[$]),N=s.useCallback((f,R)=>{if(clearTimeout(P.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,P.current=setTimeout(()=>{N(f,R)});return}h.current=null,p(g=>g.length>0?g.slice(1):g),y.current=R},[]);return s.useImperativeHandle(i,()=>({pulsate:X,start:$,stop:N}),[X,$,N]),U(yt,{className:M(m.root,r.root,o),ref:k,...c,children:U(nt,{component:null,exit:!0,children:l})})}),Tt=Et;function Mt(e){return Ae("MuiButtonBase",e)}const Ct=Re("MuiButtonBase",["root","disabled","focusVisible"]),xt=Ct,vt=e=>{const{disabled:t,focusVisible:i,focusVisibleClassName:u,classes:n}=e,o=Xe({root:["root",t&&"disabled",i&&"focusVisible"]},Mt,n);return i&&u&&(o.root+=` ${u}`),o},Vt=re("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${xt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),wt=s.forwardRef(function(t,i){const u=ye({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:r=!1,children:o,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:y=!1,focusRipple:b=!1,focusVisibleClassName:P,LinkComponent:h="a",onBlur:k,onClick:C,onContextMenu:$,onDragLeave:X,onFocus:N,onFocusVisible:f,onKeyDown:R,onKeyUp:g,onMouseDown:I,onMouseLeave:L,onMouseUp:_,onTouchEnd:E,onTouchMove:V,onTouchStart:w,tabIndex:x=0,TouchRippleProps:B,touchRippleRef:K,type:D,...O}=u,j=s.useRef(null),T=s.useRef(null),Ee=pe(T,K),{isFocusVisibleRef:ae,onFocus:Te,onBlur:Me,ref:Ce}=pt(),[S,Y]=s.useState(!1);p&&S&&Y(!1),s.useImperativeHandle(n,()=>({focusVisible:()=>{Y(!0),j.current.focus()}}),[]);const[J,xe]=s.useState(!1);s.useEffect(()=>{xe(!0)},[]);const ve=J&&!d&&!p;s.useEffect(()=>{S&&b&&!d&&J&&T.current.pulsate()},[d,b,S,J]);function v(a,le,Ke=y){return H(ce=>(le&&le(ce),!Ke&&T.current&&T.current[a](ce),!0))}const Ve=v("start",I),we=v("stop",$),Be=v("stop",X),Pe=v("stop",_),ke=v("stop",a=>{S&&a.preventDefault(),L&&L(a)}),Le=v("start",w),De=v("stop",E),Se=v("stop",V),Fe=v("stop",a=>{Me(a),ae.current===!1&&Y(!1),k&&k(a)},!1),$e=H(a=>{j.current||(j.current=a.currentTarget),Te(a),ae.current===!0&&(Y(!0),f&&f(a)),N&&N(a)}),Q=()=>{const a=j.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},Z=s.useRef(!1),Ne=H(a=>{b&&!Z.current&&S&&T.current&&a.key===" "&&(Z.current=!0,T.current.stop(a,()=>{T.current.start(a)})),a.target===a.currentTarget&&Q()&&a.key===" "&&a.preventDefault(),R&&R(a),a.target===a.currentTarget&&Q()&&a.key==="Enter"&&!p&&(a.preventDefault(),C&&C(a))}),Ie=H(a=>{b&&a.key===" "&&T.current&&S&&!a.defaultPrevented&&(Z.current=!1,T.current.stop(a,()=>{T.current.pulsate(a)})),g&&g(a),C&&a.target===a.currentTarget&&Q()&&a.key===" "&&!a.defaultPrevented&&C(a)});let W=l;W==="button"&&(O.href||O.to)&&(W=h);const z={};W==="button"?(z.type=D===void 0?"button":D,z.disabled=p):(!O.href&&!O.to&&(z.role="button"),p&&(z["aria-disabled"]=p));const Ue=pe(i,Ce,j),ue={...u,centerRipple:r,component:l,disabled:p,disableRipple:d,disableTouchRipple:y,focusRipple:b,tabIndex:x,focusVisible:S},_e=vt(ue);return Ye(Vt,{as:W,className:M(_e.root,c),ownerState:ue,onBlur:Fe,onClick:C,onContextMenu:we,onFocus:$e,onKeyDown:Ne,onKeyUp:Ie,onMouseDown:Ve,onMouseLeave:ke,onMouseUp:Pe,onDragLeave:Be,onTouchEnd:De,onTouchMove:Se,onTouchStart:Le,ref:Ue,tabIndex:p?-1:x,type:D,...z,...O,children:[o,ve?U(Tt,{ref:Ee,center:r,...B}):null]})}),_t=wt;export{_t as B,fe as T,qe as _,H as a,it as b,pt as c,Ut as u};
//# sourceMappingURL=ButtonBase-31edf4e9.js.map
