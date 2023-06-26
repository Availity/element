import{r as a,R as Y}from"./index-8db94870.js";import{c as C,g as he,s as ee,a as Ie,b as Ue}from"./styled-05cc2f2a.js";import{e as me}from"./useThemeProps-7db2adde.js";import{j as U,a as _e}from"./jsx-runtime-91a467a5.js";import{k as te}from"./emotion-react.browser.esm-84971059.js";import{_ as je}from"./extends-bab83b91.js";import{a as ze}from"./setPrototypeOf-8d862a7d.js";import{_ as Oe}from"./inheritsLoose-a02b825e.js";import{u as le}from"./useForkRef-2674f3de.js";import{u as Xe}from"./useIsFocusVisible-bbf13f29.js";const Ye=typeof window<"u"?a.useLayoutEffect:a.useEffect,Ae=Ye;function H(e){const o=a.useRef(e);return Ae(()=>{o.current=e}),a.useCallback((...i)=>(0,o.current)(...i),[])}function Ke(e,o){if(e==null)return{};var i={},l=Object.keys(e),n,t;for(t=0;t<l.length;t++)n=l[t],!(o.indexOf(n)>=0)&&(i[n]=e[n]);return i}const ue=Y.createContext(null);function ne(e,o){var i=function(t){return o&&a.isValidElement(t)?o(t):t},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=i(n)}),l}function We(e,o){e=e||{},o=o||{};function i(d){return d in o?o[d]:e[d]}var l=Object.create(null),n=[];for(var t in e)t in o?n.length&&(l[t]=n,n=[]):n.push(t);var r,c={};for(var u in o){if(l[u])for(r=0;r<l[u].length;r++){var p=l[u][r];c[l[u][r]]=i(p)}c[u]=i(u)}for(r=0;r<n.length;r++)c[n[r]]=i(n[r]);return c}function L(e,o,i){return i[o]!=null?i[o]:e.props[o]}function He(e,o){return ne(e.children,function(i){return a.cloneElement(i,{onExited:o.bind(null,i),in:!0,appear:L(i,"appear",e),enter:L(i,"enter",e),exit:L(i,"exit",e)})})}function Ge(e,o,i){var l=ne(e.children),n=We(o,l);return Object.keys(n).forEach(function(t){var r=n[t];if(a.isValidElement(r)){var c=t in o,u=t in l,p=o[t],d=a.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[t]=a.cloneElement(r,{onExited:i.bind(null,r),in:!0,exit:L(r,"exit",e),enter:L(r,"enter",e)}):!u&&c&&!d?n[t]=a.cloneElement(r,{in:!1}):u&&c&&a.isValidElement(p)&&(n[t]=a.cloneElement(r,{onExited:i.bind(null,r),in:p.props.in,exit:L(r,"exit",e),enter:L(r,"enter",e)}))}}),n}var qe=Object.values||function(e){return Object.keys(e).map(function(o){return e[o]})},Je={component:"div",childFactory:function(o){return o}},oe=function(e){Oe(o,e);function o(l,n){var t;t=e.call(this,l,n)||this;var r=t.handleExited.bind(ze(t));return t.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},t}var i=o.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(n,t){var r=t.children,c=t.handleExited,u=t.firstRender;return{children:u?He(n,c):Ge(n,r,c),firstRender:!1}},i.handleExited=function(n,t){var r=ne(this.props.children);n.key in r||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=je({},c.children);return delete u[n.key],{children:u}}))},i.render=function(){var n=this.props,t=n.component,r=n.childFactory,c=Ke(n,["component","childFactory"]),u=this.state.contextValue,p=qe(this.state.children).map(r);return delete c.appear,delete c.enter,delete c.exit,t===null?Y.createElement(ue.Provider,{value:u},p):Y.createElement(ue.Provider,{value:u},Y.createElement(t,c,p))},o}(Y.Component);oe.propTypes={};oe.defaultProps=Je;const Qe=oe;function Ze(e){const{className:o,classes:i,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:r,in:c,onExited:u,timeout:p}=e,[d,R]=a.useState(!1),b=C(o,i.ripple,i.rippleVisible,l&&i.ripplePulsate),k={width:r,height:r,top:-(r/2)+t,left:-(r/2)+n},h=C(i.child,d&&i.childLeaving,l&&i.childPulsate);return!c&&!d&&R(!0),a.useEffect(()=>{if(!c&&u!=null){const S=setTimeout(u,p);return()=>{clearTimeout(S)}}},[u,c,p]),U("span",{className:b,style:k,children:U("span",{className:h})})}const et=he("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=et;let G=e=>e,ce,pe,fe,de;const Z=550,tt=80,nt=te(ce||(ce=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),ot=te(pe||(pe=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),it=te(fe||(fe=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),rt=ee("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),st=ee(Ze,{name:"MuiTouchRipple",slot:"Ripple"})(de||(de=G`
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
`),m.rippleVisible,nt,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,ot,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,it,({theme:e})=>e.transitions.easing.easeInOut),at=a.forwardRef(function(o,i){const l=me({props:o,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:r,...c}=l,[u,p]=a.useState([]),d=a.useRef(0),R=a.useRef(null);a.useEffect(()=>{R.current&&(R.current(),R.current=null)},[u]);const b=a.useRef(!1),k=a.useRef(null),h=a.useRef(null),S=a.useRef(null);a.useEffect(()=>()=>{clearTimeout(k.current)},[]);const T=a.useCallback(f=>{const{pulsate:y,rippleX:g,rippleY:I,rippleSize:$,cb:_}=f;p(E=>[...E,U(st,{classes:{ripple:C(t.ripple,m.ripple),rippleVisible:C(t.rippleVisible,m.rippleVisible),ripplePulsate:C(t.ripplePulsate,m.ripplePulsate),child:C(t.child,m.child),childLeaving:C(t.childLeaving,m.childLeaving),childPulsate:C(t.childPulsate,m.childPulsate)},timeout:Z,pulsate:y,rippleX:g,rippleY:I,rippleSize:$},d.current)]),d.current+=1,R.current=_},[t]),F=a.useCallback((f={},y={},g=()=>{})=>{const{pulsate:I=!1,center:$=n||y.pulsate,fakeElement:_=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const E=_?null:S.current,V=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,x,P;if($||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)B=Math.round(V.width/2),x=Math.round(V.height/2);else{const{clientX:j,clientY:w}=f.touches&&f.touches.length>0?f.touches[0]:f;B=Math.round(j-V.left),x=Math.round(w-V.top)}if($)P=Math.sqrt((2*V.width**2+V.height**2)/3),P%2===0&&(P+=1);else{const j=Math.max(Math.abs((E?E.clientWidth:0)-B),B)*2+2,w=Math.max(Math.abs((E?E.clientHeight:0)-x),x)*2+2;P=Math.sqrt(j**2+w**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{T({pulsate:I,rippleX:B,rippleY:x,rippleSize:P,cb:g})},k.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},tt)):T({pulsate:I,rippleX:B,rippleY:x,rippleSize:P,cb:g})},[n,T]),A=a.useCallback(()=>{F({},{pulsate:!0})},[F]),N=a.useCallback((f,y)=>{if(clearTimeout(k.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,k.current=setTimeout(()=>{N(f,y)});return}h.current=null,p(g=>g.length>0?g.slice(1):g),R.current=y},[]);return a.useImperativeHandle(i,()=>({pulsate:A,start:F,stop:N}),[A,F,N]),U(rt,{className:C(m.root,t.root,r),ref:S,...c,children:U(Qe,{component:null,exit:!0,children:u})})}),lt=at;function ut(e){return Ie("MuiButtonBase",e)}const ct=he("MuiButtonBase",["root","disabled","focusVisible"]),pt=ct,ft=e=>{const{disabled:o,focusVisible:i,focusVisibleClassName:l,classes:n}=e,r=Ue({root:["root",o&&"disabled",i&&"focusVisible"]},ut,n);return i&&l&&(r.root+=` ${l}`),r},dt=ee("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${pt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ht=a.forwardRef(function(o,i){const l=me({props:o,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:r,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:R=!1,focusRipple:b=!1,focusVisibleClassName:k,LinkComponent:h="a",onBlur:S,onClick:T,onContextMenu:F,onDragLeave:A,onFocus:N,onFocusVisible:f,onKeyDown:y,onKeyUp:g,onMouseDown:I,onMouseLeave:$,onMouseUp:_,onTouchEnd:E,onTouchMove:V,onTouchStart:B,tabIndex:x=0,TouchRippleProps:P,touchRippleRef:j,type:w,...z}=l,O=a.useRef(null),M=a.useRef(null),be=le(M,j),{isFocusVisibleRef:ie,onFocus:ge,onBlur:Re,ref:ye}=Xe(),[D,K]=a.useState(!1);p&&D&&K(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{K(!0),O.current.focus()}}),[]);const[q,Ee]=a.useState(!1);a.useEffect(()=>{Ee(!0)},[]);const Me=q&&!d&&!p;a.useEffect(()=>{D&&b&&!d&&q&&M.current.pulsate()},[d,b,D,q]);function v(s,se,Ne=R){return H(ae=>(se&&se(ae),!Ne&&M.current&&M.current[s](ae),!0))}const Ce=v("start",I),Te=v("stop",F),xe=v("stop",A),ve=v("stop",_),Ve=v("stop",s=>{D&&s.preventDefault(),$&&$(s)}),Be=v("start",B),Pe=v("stop",E),ke=v("stop",V),Se=v("stop",s=>{Re(s),ie.current===!1&&K(!1),S&&S(s)},!1),$e=H(s=>{O.current||(O.current=s.currentTarget),ge(s),ie.current===!0&&(K(!0),f&&f(s)),N&&N(s)}),J=()=>{const s=O.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},Q=a.useRef(!1),we=H(s=>{b&&!Q.current&&D&&M.current&&s.key===" "&&(Q.current=!0,M.current.stop(s,()=>{M.current.start(s)})),s.target===s.currentTarget&&J()&&s.key===" "&&s.preventDefault(),y&&y(s),s.target===s.currentTarget&&J()&&s.key==="Enter"&&!p&&(s.preventDefault(),T&&T(s))}),De=H(s=>{b&&s.key===" "&&M.current&&D&&!s.defaultPrevented&&(Q.current=!1,M.current.stop(s,()=>{M.current.pulsate(s)})),g&&g(s),T&&s.target===s.currentTarget&&J()&&s.key===" "&&!s.defaultPrevented&&T(s)});let W=u;W==="button"&&(z.href||z.to)&&(W=h);const X={};W==="button"?(X.type=w===void 0?"button":w,X.disabled=p):(!z.href&&!z.to&&(X.role="button"),p&&(X["aria-disabled"]=p));const Le=le(i,ye,O),re={...l,centerRipple:t,component:u,disabled:p,disableRipple:d,disableTouchRipple:R,focusRipple:b,tabIndex:x,focusVisible:D},Fe=ft(re);return _e(dt,{as:W,className:C(Fe.root,c),ownerState:re,onBlur:Se,onClick:T,onContextMenu:Te,onFocus:$e,onKeyDown:we,onKeyUp:De,onMouseDown:Ce,onMouseLeave:Ve,onMouseUp:ve,onDragLeave:xe,onTouchEnd:Pe,onTouchMove:ke,onTouchStart:Be,ref:Le,tabIndex:p?-1:x,type:w,...X,...z,children:[r,Me?U(lt,{ref:be,center:t,...P}):null]})}),Vt=ht;export{Vt as B,ue as T,Ke as _,H as a,Ae as u};
//# sourceMappingURL=ButtonBase-dac0a791.js.map
