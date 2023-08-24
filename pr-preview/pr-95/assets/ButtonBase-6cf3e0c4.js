import{r as a,R as Y}from"./index-8db94870.js";import{c as E,g as he,s as ee,b as Ie,a as Ue}from"./styled-657e2aa7.js";import{c as me}from"./useThemeProps-ad7d4b8c.js";import{j as U,a as _e}from"./jsx-runtime-91a467a5.js";import{k as te}from"./emotion-react.browser.esm-a6af08ad.js";import{_ as je}from"./extends-bab83b91.js";import{a as ze}from"./setPrototypeOf-8d862a7d.js";import{_ as Oe}from"./inheritsLoose-a02b825e.js";import{u as le}from"./useForkRef-2674f3de.js";import{u as Xe}from"./useIsFocusVisible-bbf13f29.js";import{u as Ye}from"./useEnhancedEffect-c45cae33.js";function H(e){const o=a.useRef(e);return Ye(()=>{o.current=e}),a.useCallback((...r)=>(0,o.current)(...r),[])}function Ae(e,o){if(e==null)return{};var r={},l=Object.keys(e),n,t;for(t=0;t<l.length;t++)n=l[t],!(o.indexOf(n)>=0)&&(r[n]=e[n]);return r}const ue=Y.createContext(null);function ne(e,o){var r=function(t){return o&&a.isValidElement(t)?o(t):t},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=r(n)}),l}function Ke(e,o){e=e||{},o=o||{};function r(d){return d in o?o[d]:e[d]}var l=Object.create(null),n=[];for(var t in e)t in o?n.length&&(l[t]=n,n=[]):n.push(t);var i,c={};for(var u in o){if(l[u])for(i=0;i<l[u].length;i++){var p=l[u][i];c[l[u][i]]=r(p)}c[u]=r(u)}for(i=0;i<n.length;i++)c[n[i]]=r(n[i]);return c}function L(e,o,r){return r[o]!=null?r[o]:e.props[o]}function We(e,o){return ne(e.children,function(r){return a.cloneElement(r,{onExited:o.bind(null,r),in:!0,appear:L(r,"appear",e),enter:L(r,"enter",e),exit:L(r,"exit",e)})})}function He(e,o,r){var l=ne(e.children),n=Ke(o,l);return Object.keys(n).forEach(function(t){var i=n[t];if(a.isValidElement(i)){var c=t in o,u=t in l,p=o[t],d=a.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[t]=a.cloneElement(i,{onExited:r.bind(null,i),in:!0,exit:L(i,"exit",e),enter:L(i,"enter",e)}):!u&&c&&!d?n[t]=a.cloneElement(i,{in:!1}):u&&c&&a.isValidElement(p)&&(n[t]=a.cloneElement(i,{onExited:r.bind(null,i),in:p.props.in,exit:L(i,"exit",e),enter:L(i,"enter",e)}))}}),n}var Ge=Object.values||function(e){return Object.keys(e).map(function(o){return e[o]})},qe={component:"div",childFactory:function(o){return o}},oe=function(e){Oe(o,e);function o(l,n){var t;t=e.call(this,l,n)||this;var i=t.handleExited.bind(ze(t));return t.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},t}var r=o.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(n,t){var i=t.children,c=t.handleExited,u=t.firstRender;return{children:u?We(n,c):He(n,i,c),firstRender:!1}},r.handleExited=function(n,t){var i=ne(this.props.children);n.key in i||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=je({},c.children);return delete u[n.key],{children:u}}))},r.render=function(){var n=this.props,t=n.component,i=n.childFactory,c=Ae(n,["component","childFactory"]),u=this.state.contextValue,p=Ge(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,t===null?Y.createElement(ue.Provider,{value:u},p):Y.createElement(ue.Provider,{value:u},Y.createElement(t,c,p))},o}(Y.Component);oe.propTypes={};oe.defaultProps=qe;const Je=oe;function Qe(e){const{className:o,classes:r,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:i,in:c,onExited:u,timeout:p}=e,[d,R]=a.useState(!1),b=E(o,r.ripple,r.rippleVisible,l&&r.ripplePulsate),k={width:i,height:i,top:-(i/2)+t,left:-(i/2)+n},h=E(r.child,d&&r.childLeaving,l&&r.childPulsate);return!c&&!d&&R(!0),a.useEffect(()=>{if(!c&&u!=null){const S=setTimeout(u,p);return()=>{clearTimeout(S)}}},[u,c,p]),U("span",{className:b,style:k,children:U("span",{className:h})})}const Ze=he("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=Ze;let G=e=>e,ce,pe,fe,de;const Z=550,et=80,tt=te(ce||(ce=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),nt=te(pe||(pe=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),ot=te(fe||(fe=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),rt=ee("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),it=ee(Qe,{name:"MuiTouchRipple",slot:"Ripple"})(de||(de=G`
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
`),m.rippleVisible,tt,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,nt,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,ot,({theme:e})=>e.transitions.easing.easeInOut),st=a.forwardRef(function(o,r){const l=me({props:o,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:i,...c}=l,[u,p]=a.useState([]),d=a.useRef(0),R=a.useRef(null);a.useEffect(()=>{R.current&&(R.current(),R.current=null)},[u]);const b=a.useRef(!1),k=a.useRef(null),h=a.useRef(null),S=a.useRef(null);a.useEffect(()=>()=>{clearTimeout(k.current)},[]);const T=a.useCallback(f=>{const{pulsate:y,rippleX:g,rippleY:I,rippleSize:$,cb:_}=f;p(M=>[...M,U(it,{classes:{ripple:E(t.ripple,m.ripple),rippleVisible:E(t.rippleVisible,m.rippleVisible),ripplePulsate:E(t.ripplePulsate,m.ripplePulsate),child:E(t.child,m.child),childLeaving:E(t.childLeaving,m.childLeaving),childPulsate:E(t.childPulsate,m.childPulsate)},timeout:Z,pulsate:y,rippleX:g,rippleY:I,rippleSize:$},d.current)]),d.current+=1,R.current=_},[t]),F=a.useCallback((f={},y={},g=()=>{})=>{const{pulsate:I=!1,center:$=n||y.pulsate,fakeElement:_=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const M=_?null:S.current,V=M?M.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,x,P;if($||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)B=Math.round(V.width/2),x=Math.round(V.height/2);else{const{clientX:j,clientY:D}=f.touches&&f.touches.length>0?f.touches[0]:f;B=Math.round(j-V.left),x=Math.round(D-V.top)}if($)P=Math.sqrt((2*V.width**2+V.height**2)/3),P%2===0&&(P+=1);else{const j=Math.max(Math.abs((M?M.clientWidth:0)-B),B)*2+2,D=Math.max(Math.abs((M?M.clientHeight:0)-x),x)*2+2;P=Math.sqrt(j**2+D**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{T({pulsate:I,rippleX:B,rippleY:x,rippleSize:P,cb:g})},k.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},et)):T({pulsate:I,rippleX:B,rippleY:x,rippleSize:P,cb:g})},[n,T]),A=a.useCallback(()=>{F({},{pulsate:!0})},[F]),N=a.useCallback((f,y)=>{if(clearTimeout(k.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,k.current=setTimeout(()=>{N(f,y)});return}h.current=null,p(g=>g.length>0?g.slice(1):g),R.current=y},[]);return a.useImperativeHandle(r,()=>({pulsate:A,start:F,stop:N}),[A,F,N]),U(rt,{className:E(m.root,t.root,i),ref:S,...c,children:U(Je,{component:null,exit:!0,children:u})})}),at=st;function lt(e){return Ie("MuiButtonBase",e)}const ut=he("MuiButtonBase",["root","disabled","focusVisible"]),ct=ut,pt=e=>{const{disabled:o,focusVisible:r,focusVisibleClassName:l,classes:n}=e,i=Ue({root:["root",o&&"disabled",r&&"focusVisible"]},lt,n);return r&&l&&(i.root+=` ${l}`),i},ft=ee("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ct.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),dt=a.forwardRef(function(o,r){const l=me({props:o,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:i,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:R=!1,focusRipple:b=!1,focusVisibleClassName:k,LinkComponent:h="a",onBlur:S,onClick:T,onContextMenu:F,onDragLeave:A,onFocus:N,onFocusVisible:f,onKeyDown:y,onKeyUp:g,onMouseDown:I,onMouseLeave:$,onMouseUp:_,onTouchEnd:M,onTouchMove:V,onTouchStart:B,tabIndex:x=0,TouchRippleProps:P,touchRippleRef:j,type:D,...z}=l,O=a.useRef(null),C=a.useRef(null),be=le(C,j),{isFocusVisibleRef:re,onFocus:ge,onBlur:Re,ref:ye}=Xe(),[w,K]=a.useState(!1);p&&w&&K(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{K(!0),O.current.focus()}}),[]);const[q,Me]=a.useState(!1);a.useEffect(()=>{Me(!0)},[]);const Ce=q&&!d&&!p;a.useEffect(()=>{w&&b&&!d&&q&&C.current.pulsate()},[d,b,w,q]);function v(s,se,Ne=R){return H(ae=>(se&&se(ae),!Ne&&C.current&&C.current[s](ae),!0))}const Ee=v("start",I),Te=v("stop",F),xe=v("stop",A),ve=v("stop",_),Ve=v("stop",s=>{w&&s.preventDefault(),$&&$(s)}),Be=v("start",B),Pe=v("stop",M),ke=v("stop",V),Se=v("stop",s=>{Re(s),re.current===!1&&K(!1),S&&S(s)},!1),$e=H(s=>{O.current||(O.current=s.currentTarget),ge(s),re.current===!0&&(K(!0),f&&f(s)),N&&N(s)}),J=()=>{const s=O.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},Q=a.useRef(!1),De=H(s=>{b&&!Q.current&&w&&C.current&&s.key===" "&&(Q.current=!0,C.current.stop(s,()=>{C.current.start(s)})),s.target===s.currentTarget&&J()&&s.key===" "&&s.preventDefault(),y&&y(s),s.target===s.currentTarget&&J()&&s.key==="Enter"&&!p&&(s.preventDefault(),T&&T(s))}),we=H(s=>{b&&s.key===" "&&C.current&&w&&!s.defaultPrevented&&(Q.current=!1,C.current.stop(s,()=>{C.current.pulsate(s)})),g&&g(s),T&&s.target===s.currentTarget&&J()&&s.key===" "&&!s.defaultPrevented&&T(s)});let W=u;W==="button"&&(z.href||z.to)&&(W=h);const X={};W==="button"?(X.type=D===void 0?"button":D,X.disabled=p):(!z.href&&!z.to&&(X.role="button"),p&&(X["aria-disabled"]=p));const Le=le(r,ye,O),ie={...l,centerRipple:t,component:u,disabled:p,disableRipple:d,disableTouchRipple:R,focusRipple:b,tabIndex:x,focusVisible:w},Fe=pt(ie);return _e(ft,{as:W,className:E(Fe.root,c),ownerState:ie,onBlur:Se,onClick:T,onContextMenu:Te,onFocus:$e,onKeyDown:De,onKeyUp:we,onMouseDown:Ee,onMouseLeave:Ve,onMouseUp:ve,onDragLeave:xe,onTouchEnd:Pe,onTouchMove:ke,onTouchStart:Be,ref:Le,tabIndex:p?-1:x,type:D,...X,...z,children:[i,Ce?U(at,{ref:be,center:t,...P}):null]})}),Vt=dt;export{Vt as B,ue as T,Ae as _,H as u};
//# sourceMappingURL=ButtonBase-6cf3e0c4.js.map
