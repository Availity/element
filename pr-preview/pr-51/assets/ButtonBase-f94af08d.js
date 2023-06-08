import{R as Y,r as a}from"./index-8db94870.js";import{b as Ie,T as _e,e as Ue,u as he}from"./useThemeProps-c9f65ede.js";import{c as M,g as me,s as ee,a as je,b as ze}from"./styled-66459c09.js";import{j as _,a as Oe}from"./jsx-runtime-91a467a5.js";import{k as te}from"./emotion-react.browser.esm-aee3ac11.js";import{_ as Xe}from"./extends-bab83b91.js";import{a as Ye}from"./setPrototypeOf-8d862a7d.js";import{_ as Ae}from"./inheritsLoose-a02b825e.js";import{u as le}from"./useForkRef-2674f3de.js";import{u as Ke}from"./useIsFocusVisible-bbf13f29.js";function He(e,o){if(e==null)return{};var i={},l=Object.keys(e),n,t;for(t=0;t<l.length;t++)n=l[t],!(o.indexOf(n)>=0)&&(i[n]=e[n]);return i}const ue=Y.createContext(null);function ne(e,o){var i=function(t){return o&&a.isValidElement(t)?o(t):t},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=i(n)}),l}function We(e,o){e=e||{},o=o||{};function i(d){return d in o?o[d]:e[d]}var l=Object.create(null),n=[];for(var t in e)t in o?n.length&&(l[t]=n,n=[]):n.push(t);var r,c={};for(var u in o){if(l[u])for(r=0;r<l[u].length;r++){var p=l[u][r];c[l[u][r]]=i(p)}c[u]=i(u)}for(r=0;r<n.length;r++)c[n[r]]=i(n[r]);return c}function L(e,o,i){return i[o]!=null?i[o]:e.props[o]}function Ge(e,o){return ne(e.children,function(i){return a.cloneElement(i,{onExited:o.bind(null,i),in:!0,appear:L(i,"appear",e),enter:L(i,"enter",e),exit:L(i,"exit",e)})})}function qe(e,o,i){var l=ne(e.children),n=We(o,l);return Object.keys(n).forEach(function(t){var r=n[t];if(a.isValidElement(r)){var c=t in o,u=t in l,p=o[t],d=a.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[t]=a.cloneElement(r,{onExited:i.bind(null,r),in:!0,exit:L(r,"exit",e),enter:L(r,"enter",e)}):!u&&c&&!d?n[t]=a.cloneElement(r,{in:!1}):u&&c&&a.isValidElement(p)&&(n[t]=a.cloneElement(r,{onExited:i.bind(null,r),in:p.props.in,exit:L(r,"exit",e),enter:L(r,"enter",e)}))}}),n}var Je=Object.values||function(e){return Object.keys(e).map(function(o){return e[o]})},Qe={component:"div",childFactory:function(o){return o}},oe=function(e){Ae(o,e);function o(l,n){var t;t=e.call(this,l,n)||this;var r=t.handleExited.bind(Ye(t));return t.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},t}var i=o.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(n,t){var r=t.children,c=t.handleExited,u=t.firstRender;return{children:u?Ge(n,c):qe(n,r,c),firstRender:!1}},i.handleExited=function(n,t){var r=ne(this.props.children);n.key in r||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=Xe({},c.children);return delete u[n.key],{children:u}}))},i.render=function(){var n=this.props,t=n.component,r=n.childFactory,c=He(n,["component","childFactory"]),u=this.state.contextValue,p=Je(this.state.children).map(r);return delete c.appear,delete c.enter,delete c.exit,t===null?Y.createElement(ue.Provider,{value:u},p):Y.createElement(ue.Provider,{value:u},Y.createElement(t,c,p))},o}(Y.Component);oe.propTypes={};oe.defaultProps=Qe;const Ze=oe,et=typeof window<"u"?a.useLayoutEffect:a.useEffect,tt=et;function W(e){const o=a.useRef(e);return tt(()=>{o.current=e}),a.useCallback((...i)=>(0,o.current)(...i),[])}function kt(){const e=Ie(Ue);return e[_e]||e}function nt(e){const{className:o,classes:i,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:r,in:c,onExited:u,timeout:p}=e,[d,R]=a.useState(!1),b=M(o,i.ripple,i.rippleVisible,l&&i.ripplePulsate),k={width:r,height:r,top:-(r/2)+t,left:-(r/2)+n},h=M(i.child,d&&i.childLeaving,l&&i.childPulsate);return!c&&!d&&R(!0),a.useEffect(()=>{if(!c&&u!=null){const S=setTimeout(u,p);return()=>{clearTimeout(S)}}},[u,c,p]),_("span",{className:b,style:k,children:_("span",{className:h})})}const ot=me("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=ot;let G=e=>e,ce,pe,fe,de;const Z=550,it=80,rt=te(ce||(ce=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),st=te(pe||(pe=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),at=te(fe||(fe=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),lt=ee("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),ut=ee(nt,{name:"MuiTouchRipple",slot:"Ripple"})(de||(de=G`
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
`),m.rippleVisible,rt,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,st,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,at,({theme:e})=>e.transitions.easing.easeInOut),ct=a.forwardRef(function(o,i){const l=he({props:o,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:r,...c}=l,[u,p]=a.useState([]),d=a.useRef(0),R=a.useRef(null);a.useEffect(()=>{R.current&&(R.current(),R.current=null)},[u]);const b=a.useRef(!1),k=a.useRef(null),h=a.useRef(null),S=a.useRef(null);a.useEffect(()=>()=>{clearTimeout(k.current)},[]);const C=a.useCallback(f=>{const{pulsate:E,rippleX:g,rippleY:I,rippleSize:$,cb:U}=f;p(y=>[...y,_(ut,{classes:{ripple:M(t.ripple,m.ripple),rippleVisible:M(t.rippleVisible,m.rippleVisible),ripplePulsate:M(t.ripplePulsate,m.ripplePulsate),child:M(t.child,m.child),childLeaving:M(t.childLeaving,m.childLeaving),childPulsate:M(t.childPulsate,m.childPulsate)},timeout:Z,pulsate:E,rippleX:g,rippleY:I,rippleSize:$},d.current)]),d.current+=1,R.current=U},[t]),F=a.useCallback((f={},E={},g=()=>{})=>{const{pulsate:I=!1,center:$=n||E.pulsate,fakeElement:U=!1}=E;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const y=U?null:S.current,V=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,x,P;if($||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)B=Math.round(V.width/2),x=Math.round(V.height/2);else{const{clientX:j,clientY:w}=f.touches&&f.touches.length>0?f.touches[0]:f;B=Math.round(j-V.left),x=Math.round(w-V.top)}if($)P=Math.sqrt((2*V.width**2+V.height**2)/3),P%2===0&&(P+=1);else{const j=Math.max(Math.abs((y?y.clientWidth:0)-B),B)*2+2,w=Math.max(Math.abs((y?y.clientHeight:0)-x),x)*2+2;P=Math.sqrt(j**2+w**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{C({pulsate:I,rippleX:B,rippleY:x,rippleSize:P,cb:g})},k.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},it)):C({pulsate:I,rippleX:B,rippleY:x,rippleSize:P,cb:g})},[n,C]),A=a.useCallback(()=>{F({},{pulsate:!0})},[F]),N=a.useCallback((f,E)=>{if(clearTimeout(k.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,k.current=setTimeout(()=>{N(f,E)});return}h.current=null,p(g=>g.length>0?g.slice(1):g),R.current=E},[]);return a.useImperativeHandle(i,()=>({pulsate:A,start:F,stop:N}),[A,F,N]),_(lt,{className:M(m.root,t.root,r),ref:S,...c,children:_(Ze,{component:null,exit:!0,children:u})})}),pt=ct;function ft(e){return je("MuiButtonBase",e)}const dt=me("MuiButtonBase",["root","disabled","focusVisible"]),ht=dt,mt=e=>{const{disabled:o,focusVisible:i,focusVisibleClassName:l,classes:n}=e,r=ze({root:["root",o&&"disabled",i&&"focusVisible"]},ft,n);return i&&l&&(r.root+=` ${l}`),r},bt=ee("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ht.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),gt=a.forwardRef(function(o,i){const l=he({props:o,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:r,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:R=!1,focusRipple:b=!1,focusVisibleClassName:k,LinkComponent:h="a",onBlur:S,onClick:C,onContextMenu:F,onDragLeave:A,onFocus:N,onFocusVisible:f,onKeyDown:E,onKeyUp:g,onMouseDown:I,onMouseLeave:$,onMouseUp:U,onTouchEnd:y,onTouchMove:V,onTouchStart:B,tabIndex:x=0,TouchRippleProps:P,touchRippleRef:j,type:w,...z}=l,O=a.useRef(null),T=a.useRef(null),be=le(T,j),{isFocusVisibleRef:ie,onFocus:ge,onBlur:Re,ref:Ee}=Ke(),[D,K]=a.useState(!1);p&&D&&K(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{K(!0),O.current.focus()}}),[]);const[q,ye]=a.useState(!1);a.useEffect(()=>{ye(!0)},[]);const Te=q&&!d&&!p;a.useEffect(()=>{D&&b&&!d&&q&&T.current.pulsate()},[d,b,D,q]);function v(s,se,Ne=R){return W(ae=>(se&&se(ae),!Ne&&T.current&&T.current[s](ae),!0))}const Me=v("start",I),Ce=v("stop",F),xe=v("stop",A),ve=v("stop",U),Ve=v("stop",s=>{D&&s.preventDefault(),$&&$(s)}),Be=v("start",B),Pe=v("stop",y),ke=v("stop",V),Se=v("stop",s=>{Re(s),ie.current===!1&&K(!1),S&&S(s)},!1),$e=W(s=>{O.current||(O.current=s.currentTarget),ge(s),ie.current===!0&&(K(!0),f&&f(s)),N&&N(s)}),J=()=>{const s=O.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},Q=a.useRef(!1),we=W(s=>{b&&!Q.current&&D&&T.current&&s.key===" "&&(Q.current=!0,T.current.stop(s,()=>{T.current.start(s)})),s.target===s.currentTarget&&J()&&s.key===" "&&s.preventDefault(),E&&E(s),s.target===s.currentTarget&&J()&&s.key==="Enter"&&!p&&(s.preventDefault(),C&&C(s))}),De=W(s=>{b&&s.key===" "&&T.current&&D&&!s.defaultPrevented&&(Q.current=!1,T.current.stop(s,()=>{T.current.pulsate(s)})),g&&g(s),C&&s.target===s.currentTarget&&J()&&s.key===" "&&!s.defaultPrevented&&C(s)});let H=u;H==="button"&&(z.href||z.to)&&(H=h);const X={};H==="button"?(X.type=w===void 0?"button":w,X.disabled=p):(!z.href&&!z.to&&(X.role="button"),p&&(X["aria-disabled"]=p));const Le=le(i,Ee,O),re={...l,centerRipple:t,component:u,disabled:p,disableRipple:d,disableTouchRipple:R,focusRipple:b,tabIndex:x,focusVisible:D},Fe=mt(re);return Oe(bt,{as:H,className:M(Fe.root,c),ownerState:re,onBlur:Se,onClick:C,onContextMenu:Ce,onFocus:$e,onKeyDown:we,onKeyUp:De,onMouseDown:Me,onMouseLeave:Ve,onMouseUp:ve,onDragLeave:xe,onTouchEnd:Pe,onTouchMove:ke,onTouchStart:Be,ref:Le,tabIndex:p?-1:x,type:w,...X,...z,children:[r,Te?_(pt,{ref:be,center:t,...P}):null]})}),St=gt;export{St as B,ue as T,He as _,tt as a,W as b,kt as u};
//# sourceMappingURL=ButtonBase-f94af08d.js.map
