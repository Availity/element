import{b as me,_ as H}from"./createTheme-bcd1d157.js";import{r as l,a as A}from"./index-570b25c1.js";import{c as E}from"./clsx-7dc4e18d.js";import{s as te,g as Ue,c as je}from"./styled-7846e708.js";import{u as be}from"./useThemeProps-018254e6.js";import{a as I,j as Oe}from"./jsx-runtime-a3bcee63.js";import{g as ge}from"./generateUtilityClasses-70c60a0e.js";import{k as ne}from"./emotion-react.browser.esm-474fda6d.js";import{_ as ze,a as Ke,T as ue}from"./TransitionGroupContext-c71596b3.js";import{u as ce}from"./useForkRef-153a0a89.js";import{u as Xe}from"./useIsFocusVisible-5e7b1ff1.js";import{u as W}from"./useEventCallback-e1b9edb9.js";function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Z.apply(this,arguments)}function Ye(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e,o){var r=function(t){return o&&l.isValidElement(t)?o(t):t},a=Object.create(null);return e&&l.Children.map(e,function(n){return n}).forEach(function(n){a[n.key]=r(n)}),a}function Ae(e,o){e=e||{},o=o||{};function r(d){return d in o?o[d]:e[d]}var a=Object.create(null),n=[];for(var t in e)t in o?n.length&&(a[t]=n,n=[]):n.push(t);var i,c={};for(var u in o){if(a[u])for(i=0;i<a[u].length;i++){var p=a[u][i];c[a[u][i]]=r(p)}c[u]=r(u)}for(i=0;i<n.length;i++)c[n[i]]=r(n[i]);return c}function k(e,o,r){return r[o]!=null?r[o]:e.props[o]}function We(e,o){return oe(e.children,function(r){return l.cloneElement(r,{onExited:o.bind(null,r),in:!0,appear:k(r,"appear",e),enter:k(r,"enter",e),exit:k(r,"exit",e)})})}function He(e,o,r){var a=oe(e.children),n=Ae(o,a);return Object.keys(n).forEach(function(t){var i=n[t];if(l.isValidElement(i)){var c=t in o,u=t in a,p=o[t],d=l.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[t]=l.cloneElement(i,{onExited:r.bind(null,i),in:!0,exit:k(i,"exit",e),enter:k(i,"enter",e)}):!u&&c&&!d?n[t]=l.cloneElement(i,{in:!1}):u&&c&&l.isValidElement(p)&&(n[t]=l.cloneElement(i,{onExited:r.bind(null,i),in:p.props.in,exit:k(i,"exit",e),enter:k(i,"enter",e)}))}}),n}var Ge=Object.values||function(e){return Object.keys(e).map(function(o){return e[o]})},qe={component:"div",childFactory:function(o){return o}},ie=function(e){ze(o,e);function o(a,n){var t;t=e.call(this,a,n)||this;var i=t.handleExited.bind(Ye(t));return t.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},t}var r=o.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(n,t){var i=t.children,c=t.handleExited,u=t.firstRender;return{children:u?We(n,c):He(n,i,c),firstRender:!1}},r.handleExited=function(n,t){var i=oe(this.props.children);n.key in i||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=Z({},c.children);return delete u[n.key],{children:u}}))},r.render=function(){var n=this.props,t=n.component,i=n.childFactory,c=Ke(n,["component","childFactory"]),u=this.state.contextValue,p=Ge(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,t===null?A.createElement(ue.Provider,{value:u},p):A.createElement(ue.Provider,{value:u},A.createElement(t,c,p))},o}(A.Component);ie.propTypes={};ie.defaultProps=qe;const Je=ie;function Qe(e){const{className:o,classes:r,pulsate:a=!1,rippleX:n,rippleY:t,rippleSize:i,in:c,onExited:u,timeout:p}=e,[d,g]=l.useState(!1),b=E(o,r.ripple,r.rippleVisible,a&&r.ripplePulsate),x={width:i,height:i,top:-(i/2)+t,left:-(i/2)+n},h=E(r.child,d&&r.childLeaving,a&&r.childPulsate);return!c&&!d&&g(!0),l.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),I("span",{className:b,style:x,children:I("span",{className:h})})}const Ze=ge("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=Ze,et=["center","classes","className"];let G=e=>e,pe,fe,de,he;const ee=550,tt=80,nt=ne(pe||(pe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),ot=ne(fe||(fe=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),it=ne(de||(de=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),rt=te("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),st=te(Qe,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=G`
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
`),m.rippleVisible,nt,ee,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,ot,ee,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,it,({theme:e})=>e.transitions.easing.easeInOut),at=l.forwardRef(function(o,r){const a=be({props:o,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:i}=a,c=me(a,et),[u,p]=l.useState([]),d=l.useRef(0),g=l.useRef(null);l.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=l.useRef(!1),x=l.useRef(0),h=l.useRef(null),R=l.useRef(null);l.useEffect(()=>()=>{x.current&&clearTimeout(x.current)},[]);const U=l.useCallback(f=>{const{pulsate:M,rippleX:T,rippleY:$,rippleSize:_,cb:O}=f;p(y=>[...y,I(st,{classes:{ripple:E(t.ripple,m.ripple),rippleVisible:E(t.rippleVisible,m.rippleVisible),ripplePulsate:E(t.ripplePulsate,m.ripplePulsate),child:E(t.child,m.child),childLeaving:E(t.childLeaving,m.childLeaving),childPulsate:E(t.childPulsate,m.childPulsate)},timeout:ee,pulsate:M,rippleX:T,rippleY:$,rippleSize:_},d.current)]),d.current+=1,g.current=O},[t]),F=l.useCallback((f={},M={},T=()=>{})=>{const{pulsate:$=!1,center:_=n||M.pulsate,fakeElement:O=!1}=M;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const y=O?null:R.current,B=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,w,S;if(_||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(B.width/2),w=Math.round(B.height/2);else{const{clientX:D,clientY:P}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(D-B.left),w=Math.round(P-B.top)}if(_)S=Math.sqrt((2*B.width**2+B.height**2)/3),S%2===0&&(S+=1);else{const D=Math.max(Math.abs((y?y.clientWidth:0)-v),v)*2+2,P=Math.max(Math.abs((y?y.clientHeight:0)-w),w)*2+2;S=Math.sqrt(D**2+P**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{U({pulsate:$,rippleX:v,rippleY:w,rippleSize:S,cb:T})},x.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},tt)):U({pulsate:$,rippleX:v,rippleY:w,rippleSize:S,cb:T})},[n,U]),j=l.useCallback(()=>{F({},{pulsate:!0})},[F]),N=l.useCallback((f,M)=>{if(clearTimeout(x.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,x.current=setTimeout(()=>{N(f,M)});return}h.current=null,p(T=>T.length>0?T.slice(1):T),g.current=M},[]);return l.useImperativeHandle(r,()=>({pulsate:j,start:F,stop:N}),[j,F,N]),I(rt,H({className:E(m.root,t.root,i),ref:R},c,{children:I(Je,{component:null,exit:!0,children:u})}))}),lt=at;function ut(e){return Ue("MuiButtonBase",e)}const ct=ge("MuiButtonBase",["root","disabled","focusVisible"]),pt=ct,ft=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],dt=e=>{const{disabled:o,focusVisible:r,focusVisibleClassName:a,classes:n}=e,i=je({root:["root",o&&"disabled",r&&"focusVisible"]},ut,n);return r&&a&&(i.root+=` ${a}`),i},ht=te("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${pt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),mt=l.forwardRef(function(o,r){const a=be({props:o,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:i,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:x="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:F,onFocus:j,onFocusVisible:N,onKeyDown:f,onKeyUp:M,onMouseDown:T,onMouseLeave:$,onMouseUp:_,onTouchEnd:O,onTouchMove:y,onTouchStart:B,tabIndex:v=0,TouchRippleProps:w,touchRippleRef:S,type:D}=a,P=me(a,ft),z=l.useRef(null),C=l.useRef(null),Re=ce(C,S),{isFocusVisibleRef:re,onFocus:Me,onBlur:Te,ref:ye}=Xe(),[L,X]=l.useState(!1);p&&L&&X(!1),l.useImperativeHandle(n,()=>({focusVisible:()=>{X(!0),z.current.focus()}}),[]);const[q,Ce]=l.useState(!1);l.useEffect(()=>{Ce(!0)},[]);const Ee=q&&!d&&!p;l.useEffect(()=>{L&&b&&!d&&q&&C.current.pulsate()},[d,b,L,q]);function V(s,ae,Ie=g){return W(le=>(ae&&ae(le),!Ie&&C.current&&C.current[s](le),!0))}const xe=V("start",T),ve=V("stop",U),Pe=V("stop",F),Ve=V("stop",_),Be=V("stop",s=>{L&&s.preventDefault(),$&&$(s)}),we=V("start",B),Se=V("stop",O),$e=V("stop",y),De=V("stop",s=>{Te(s),re.current===!1&&X(!1),h&&h(s)},!1),Le=W(s=>{z.current||(z.current=s.currentTarget),Me(s),re.current===!0&&(X(!0),N&&N(s)),j&&j(s)}),J=()=>{const s=z.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},Q=l.useRef(!1),ke=W(s=>{b&&!Q.current&&L&&C.current&&s.key===" "&&(Q.current=!0,C.current.stop(s,()=>{C.current.start(s)})),s.target===s.currentTarget&&J()&&s.key===" "&&s.preventDefault(),f&&f(s),s.target===s.currentTarget&&J()&&s.key==="Enter"&&!p&&(s.preventDefault(),R&&R(s))}),Fe=W(s=>{b&&s.key===" "&&C.current&&L&&!s.defaultPrevented&&(Q.current=!1,C.current.stop(s,()=>{C.current.pulsate(s)})),M&&M(s),R&&s.target===s.currentTarget&&J()&&s.key===" "&&!s.defaultPrevented&&R(s)});let Y=u;Y==="button"&&(P.href||P.to)&&(Y=x);const K={};Y==="button"?(K.type=D===void 0?"button":D,K.disabled=p):(!P.href&&!P.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const Ne=ce(r,ye,z),se=H({},a,{centerRipple:t,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:L}),_e=dt(se);return Oe(ht,H({as:Y,className:E(_e.root,c),ownerState:se,onBlur:De,onClick:R,onContextMenu:ve,onFocus:Le,onKeyDown:ke,onKeyUp:Fe,onMouseDown:xe,onMouseLeave:Be,onMouseUp:Ve,onDragLeave:Pe,onTouchEnd:Se,onTouchMove:$e,onTouchStart:we,ref:Ne,tabIndex:p?-1:v,type:D},K,P,{children:[i,Ee?I(lt,H({ref:Re,center:t},w)):null]}))}),wt=mt;export{wt as B,Je as T,Z as _};
//# sourceMappingURL=ButtonBase-d80b4855.js.map
