import{b as me,_ as H}from"./createTheme-e6b56ddb.js";import{r as a,a as A}from"./index-570b25c1.js";import{c as E}from"./clsx-8416b751.js";import{s as te,g as Ue,c as je}from"./styled-188025da.js";import{u as be}from"./useThemeProps-db7202c2.js";import{j as _,a as Oe}from"./jsx-runtime-390e5fc8.js";import{g as ge}from"./generateUtilityClasses-f776b170.js";import{k as ne}from"./emotion-react.browser.esm-69a15469.js";import{_ as ze,a as Ke,T as ue}from"./TransitionGroupContext-c71596b3.js";import{u as ce}from"./useForkRef-153a0a89.js";import{u as Xe}from"./useIsFocusVisible-5e7b1ff1.js";import{u as Ye}from"./useEnhancedEffect-460150e6.js";function W(e){const t=a.useRef(e);return Ye(()=>{t.current=e}),a.useCallback((...i)=>(0,t.current)(...i),[])}function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},Z.apply(this,arguments)}function Ae(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e,t){var i=function(n){return t&&a.isValidElement(n)?t(n):n},l=Object.create(null);return e&&a.Children.map(e,function(o){return o}).forEach(function(o){l[o.key]=i(o)}),l}function We(e,t){e=e||{},t=t||{};function i(d){return d in t?t[d]:e[d]}var l=Object.create(null),o=[];for(var n in e)n in t?o.length&&(l[n]=o,o=[]):o.push(n);var r,c={};for(var u in t){if(l[u])for(r=0;r<l[u].length;r++){var p=l[u][r];c[l[u][r]]=i(p)}c[u]=i(u)}for(r=0;r<o.length;r++)c[o[r]]=i(o[r]);return c}function k(e,t,i){return i[t]!=null?i[t]:e.props[t]}function He(e,t){return oe(e.children,function(i){return a.cloneElement(i,{onExited:t.bind(null,i),in:!0,appear:k(i,"appear",e),enter:k(i,"enter",e),exit:k(i,"exit",e)})})}function Ge(e,t,i){var l=oe(e.children),o=We(t,l);return Object.keys(o).forEach(function(n){var r=o[n];if(a.isValidElement(r)){var c=n in t,u=n in l,p=t[n],d=a.isValidElement(p)&&!p.props.in;u&&(!c||d)?o[n]=a.cloneElement(r,{onExited:i.bind(null,r),in:!0,exit:k(r,"exit",e),enter:k(r,"enter",e)}):!u&&c&&!d?o[n]=a.cloneElement(r,{in:!1}):u&&c&&a.isValidElement(p)&&(o[n]=a.cloneElement(r,{onExited:i.bind(null,r),in:p.props.in,exit:k(r,"exit",e),enter:k(r,"enter",e)}))}}),o}var qe=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Je={component:"div",childFactory:function(t){return t}},ie=function(e){ze(t,e);function t(l,o){var n;n=e.call(this,l,o)||this;var r=n.handleExited.bind(Ae(n));return n.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},n}var i=t.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,n){var r=n.children,c=n.handleExited,u=n.firstRender;return{children:u?He(o,c):Ge(o,r,c),firstRender:!1}},i.handleExited=function(o,n){var r=oe(this.props.children);o.key in r||(o.props.onExited&&o.props.onExited(n),this.mounted&&this.setState(function(c){var u=Z({},c.children);return delete u[o.key],{children:u}}))},i.render=function(){var o=this.props,n=o.component,r=o.childFactory,c=Ke(o,["component","childFactory"]),u=this.state.contextValue,p=qe(this.state.children).map(r);return delete c.appear,delete c.enter,delete c.exit,n===null?A.createElement(ue.Provider,{value:u},p):A.createElement(ue.Provider,{value:u},A.createElement(n,c,p))},t}(A.Component);ie.propTypes={};ie.defaultProps=Je;const Qe=ie;function Ze(e){const{className:t,classes:i,pulsate:l=!1,rippleX:o,rippleY:n,rippleSize:r,in:c,onExited:u,timeout:p}=e,[d,g]=a.useState(!1),b=E(t,i.ripple,i.rippleVisible,l&&i.ripplePulsate),x={width:r,height:r,top:-(r/2)+n,left:-(r/2)+o},h=E(i.child,d&&i.childLeaving,l&&i.childPulsate);return!c&&!d&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),_("span",{className:b,style:x,children:_("span",{className:h})})}const et=ge("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=et,tt=["center","classes","className"];let G=e=>e,pe,fe,de,he;const ee=550,nt=80,ot=ne(pe||(pe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),it=ne(fe||(fe=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),rt=ne(de||(de=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),st=te("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),at=te(Ze,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=G`
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
`),m.rippleVisible,ot,ee,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,it,ee,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,rt,({theme:e})=>e.transitions.easing.easeInOut),lt=a.forwardRef(function(t,i){const l=be({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:n={},className:r}=l,c=me(l,tt),[u,p]=a.useState([]),d=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),x=a.useRef(0),h=a.useRef(null),R=a.useRef(null);a.useEffect(()=>()=>{x.current&&clearTimeout(x.current)},[]);const U=a.useCallback(f=>{const{pulsate:M,rippleX:T,rippleY:$,rippleSize:I,cb:O}=f;p(y=>[...y,_(at,{classes:{ripple:E(n.ripple,m.ripple),rippleVisible:E(n.rippleVisible,m.rippleVisible),ripplePulsate:E(n.ripplePulsate,m.ripplePulsate),child:E(n.child,m.child),childLeaving:E(n.childLeaving,m.childLeaving),childPulsate:E(n.childPulsate,m.childPulsate)},timeout:ee,pulsate:M,rippleX:T,rippleY:$,rippleSize:I},d.current)]),d.current+=1,g.current=O},[n]),F=a.useCallback((f={},M={},T=()=>{})=>{const{pulsate:$=!1,center:I=o||M.pulsate,fakeElement:O=!1}=M;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const y=O?null:R.current,B=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,w,S;if(I||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(B.width/2),w=Math.round(B.height/2);else{const{clientX:D,clientY:P}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(D-B.left),w=Math.round(P-B.top)}if(I)S=Math.sqrt((2*B.width**2+B.height**2)/3),S%2===0&&(S+=1);else{const D=Math.max(Math.abs((y?y.clientWidth:0)-v),v)*2+2,P=Math.max(Math.abs((y?y.clientHeight:0)-w),w)*2+2;S=Math.sqrt(D**2+P**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{U({pulsate:$,rippleX:v,rippleY:w,rippleSize:S,cb:T})},x.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},nt)):U({pulsate:$,rippleX:v,rippleY:w,rippleSize:S,cb:T})},[o,U]),j=a.useCallback(()=>{F({},{pulsate:!0})},[F]),N=a.useCallback((f,M)=>{if(clearTimeout(x.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,x.current=setTimeout(()=>{N(f,M)});return}h.current=null,p(T=>T.length>0?T.slice(1):T),g.current=M},[]);return a.useImperativeHandle(i,()=>({pulsate:j,start:F,stop:N}),[j,F,N]),_(st,H({className:E(m.root,n.root,r),ref:R},c,{children:_(Qe,{component:null,exit:!0,children:u})}))}),ut=lt;function ct(e){return Ue("MuiButtonBase",e)}const pt=ge("MuiButtonBase",["root","disabled","focusVisible"]),ft=pt,dt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],ht=e=>{const{disabled:t,focusVisible:i,focusVisibleClassName:l,classes:o}=e,r=je({root:["root",t&&"disabled",i&&"focusVisible"]},ct,o);return i&&l&&(r.root+=` ${l}`),r},mt=te("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ft.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),bt=a.forwardRef(function(t,i){const l=be({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:n=!1,children:r,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:x="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:F,onFocus:j,onFocusVisible:N,onKeyDown:f,onKeyUp:M,onMouseDown:T,onMouseLeave:$,onMouseUp:I,onTouchEnd:O,onTouchMove:y,onTouchStart:B,tabIndex:v=0,TouchRippleProps:w,touchRippleRef:S,type:D}=l,P=me(l,dt),z=a.useRef(null),C=a.useRef(null),Re=ce(C,S),{isFocusVisibleRef:re,onFocus:Me,onBlur:Te,ref:ye}=Xe(),[L,X]=a.useState(!1);p&&L&&X(!1),a.useImperativeHandle(o,()=>({focusVisible:()=>{X(!0),z.current.focus()}}),[]);const[q,Ce]=a.useState(!1);a.useEffect(()=>{Ce(!0)},[]);const Ee=q&&!d&&!p;a.useEffect(()=>{L&&b&&!d&&q&&C.current.pulsate()},[d,b,L,q]);function V(s,ae,_e=g){return W(le=>(ae&&ae(le),!_e&&C.current&&C.current[s](le),!0))}const xe=V("start",T),ve=V("stop",U),Pe=V("stop",F),Ve=V("stop",I),Be=V("stop",s=>{L&&s.preventDefault(),$&&$(s)}),we=V("start",B),Se=V("stop",O),$e=V("stop",y),De=V("stop",s=>{Te(s),re.current===!1&&X(!1),h&&h(s)},!1),Le=W(s=>{z.current||(z.current=s.currentTarget),Me(s),re.current===!0&&(X(!0),N&&N(s)),j&&j(s)}),J=()=>{const s=z.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},Q=a.useRef(!1),ke=W(s=>{b&&!Q.current&&L&&C.current&&s.key===" "&&(Q.current=!0,C.current.stop(s,()=>{C.current.start(s)})),s.target===s.currentTarget&&J()&&s.key===" "&&s.preventDefault(),f&&f(s),s.target===s.currentTarget&&J()&&s.key==="Enter"&&!p&&(s.preventDefault(),R&&R(s))}),Fe=W(s=>{b&&s.key===" "&&C.current&&L&&!s.defaultPrevented&&(Q.current=!1,C.current.stop(s,()=>{C.current.pulsate(s)})),M&&M(s),R&&s.target===s.currentTarget&&J()&&s.key===" "&&!s.defaultPrevented&&R(s)});let Y=u;Y==="button"&&(P.href||P.to)&&(Y=x);const K={};Y==="button"?(K.type=D===void 0?"button":D,K.disabled=p):(!P.href&&!P.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const Ne=ce(i,ye,z),se=H({},l,{centerRipple:n,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:L}),Ie=ht(se);return Oe(mt,H({as:Y,className:E(Ie.root,c),ownerState:se,onBlur:De,onClick:R,onContextMenu:ve,onFocus:Le,onKeyDown:ke,onKeyUp:Fe,onMouseDown:xe,onMouseLeave:Be,onMouseUp:Ve,onDragLeave:Pe,onTouchEnd:Se,onTouchMove:$e,onTouchStart:we,ref:Ne,tabIndex:p?-1:v,type:D},K,P,{children:[r,Ee?_(ut,H({ref:Re,center:n},w)):null]}))}),St=bt;export{St as B,W as u};
//# sourceMappingURL=ButtonBase-dcf5e891.js.map
