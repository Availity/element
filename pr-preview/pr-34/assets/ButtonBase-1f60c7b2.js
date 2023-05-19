import{f as C,a as he,s as ee,b as me,e as be,_ as H,g as Ie,h as Ue}from"./useThemeProps-62bf9113.js";import{r as s,R as X}from"./index-f1f749bf.js";import{j as I,a as je}from"./jsx-runtime-670450c2.js";import{_ as ze,k as te}from"./emotion-react.browser.esm-c7b55d13.js";import{_ as Oe}from"./extends-98964cd2.js";import{a as Ke,b as Xe}from"./inheritsLoose-d374ba88.js";import{u as le}from"./useForkRef-d38d61a7.js";import{u as Ye}from"./useIsFocusVisible-c743303e.js";const Ae=typeof window<"u"?s.useLayoutEffect:s.useEffect,We=Ae;function W(e){const o=s.useRef(e);return We(()=>{o.current=e}),s.useCallback((...a)=>(0,o.current)(...a),[])}const ue=X.createContext(null);function ne(e,o){var a=function(t){return o&&s.isValidElement(t)?o(t):t},l=Object.create(null);return e&&s.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=a(n)}),l}function He(e,o){e=e||{},o=o||{};function a(d){return d in o?o[d]:e[d]}var l=Object.create(null),n=[];for(var t in e)t in o?n.length&&(l[t]=n,n=[]):n.push(t);var i,c={};for(var u in o){if(l[u])for(i=0;i<l[u].length;i++){var p=l[u][i];c[l[u][i]]=a(p)}c[u]=a(u)}for(i=0;i<n.length;i++)c[n[i]]=a(n[i]);return c}function D(e,o,a){return a[o]!=null?a[o]:e.props[o]}function Ge(e,o){return ne(e.children,function(a){return s.cloneElement(a,{onExited:o.bind(null,a),in:!0,appear:D(a,"appear",e),enter:D(a,"enter",e),exit:D(a,"exit",e)})})}function qe(e,o,a){var l=ne(e.children),n=He(o,l);return Object.keys(n).forEach(function(t){var i=n[t];if(s.isValidElement(i)){var c=t in o,u=t in l,p=o[t],d=s.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[t]=s.cloneElement(i,{onExited:a.bind(null,i),in:!0,exit:D(i,"exit",e),enter:D(i,"enter",e)}):!u&&c&&!d?n[t]=s.cloneElement(i,{in:!1}):u&&c&&s.isValidElement(p)&&(n[t]=s.cloneElement(i,{onExited:a.bind(null,i),in:p.props.in,exit:D(i,"exit",e),enter:D(i,"enter",e)}))}}),n}var Je=Object.values||function(e){return Object.keys(e).map(function(o){return e[o]})},Qe={component:"div",childFactory:function(o){return o}},oe=function(e){Ke(o,e);function o(l,n){var t;t=e.call(this,l,n)||this;var i=t.handleExited.bind(Xe(t));return t.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},t}var a=o.prototype;return a.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},a.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(n,t){var i=t.children,c=t.handleExited,u=t.firstRender;return{children:u?Ge(n,c):qe(n,i,c),firstRender:!1}},a.handleExited=function(n,t){var i=ne(this.props.children);n.key in i||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=Oe({},c.children);return delete u[n.key],{children:u}}))},a.render=function(){var n=this.props,t=n.component,i=n.childFactory,c=ze(n,["component","childFactory"]),u=this.state.contextValue,p=Je(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,t===null?X.createElement(ue.Provider,{value:u},p):X.createElement(ue.Provider,{value:u},X.createElement(t,c,p))},o}(X.Component);oe.propTypes={};oe.defaultProps=Qe;const Ze=oe;function et(e){const{className:o,classes:a,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:i,in:c,onExited:u,timeout:p}=e,[d,g]=s.useState(!1),b=C(o,a.ripple,a.rippleVisible,l&&a.ripplePulsate),B={width:i,height:i,top:-(i/2)+t,left:-(i/2)+n},h=C(a.child,d&&a.childLeaving,l&&a.childPulsate);return!c&&!d&&g(!0),s.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),I("span",{className:b,style:B,children:I("span",{className:h})})}const tt=he("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=tt,nt=["center","classes","className"];let G=e=>e,ce,pe,fe,de;const Z=550,ot=80,it=te(ce||(ce=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),rt=te(pe||(pe=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),st=te(fe||(fe=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),at=ee("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),lt=ee(et,{name:"MuiTouchRipple",slot:"Ripple"})(de||(de=G`
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
`),m.rippleVisible,it,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,rt,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,st,({theme:e})=>e.transitions.easing.easeInOut),ut=s.forwardRef(function(o,a){const l=me({props:o,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:i}=l,c=be(l,nt),[u,p]=s.useState([]),d=s.useRef(0),g=s.useRef(null);s.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=s.useRef(!1),B=s.useRef(null),h=s.useRef(null),R=s.useRef(null);s.useEffect(()=>()=>{clearTimeout(B.current)},[]);const U=s.useCallback(f=>{const{pulsate:M,rippleX:y,rippleY:S,rippleSize:_,cb:z}=f;p(E=>[...E,I(lt,{classes:{ripple:C(t.ripple,m.ripple),rippleVisible:C(t.rippleVisible,m.rippleVisible),ripplePulsate:C(t.ripplePulsate,m.ripplePulsate),child:C(t.child,m.child),childLeaving:C(t.childLeaving,m.childLeaving),childPulsate:C(t.childPulsate,m.childPulsate)},timeout:Z,pulsate:M,rippleX:y,rippleY:S,rippleSize:_},d.current)]),d.current+=1,g.current=z},[t]),F=s.useCallback((f={},M={},y=()=>{})=>{const{pulsate:S=!1,center:_=n||M.pulsate,fakeElement:z=!1}=M;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const E=z?null:R.current,P=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let x,$,L;if(_||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)x=Math.round(P.width/2),$=Math.round(P.height/2);else{const{clientX:k,clientY:V}=f.touches&&f.touches.length>0?f.touches[0]:f;x=Math.round(k-P.left),$=Math.round(V-P.top)}if(_)L=Math.sqrt((2*P.width**2+P.height**2)/3),L%2===0&&(L+=1);else{const k=Math.max(Math.abs((E?E.clientWidth:0)-x),x)*2+2,V=Math.max(Math.abs((E?E.clientHeight:0)-$),$)*2+2;L=Math.sqrt(k**2+V**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{U({pulsate:S,rippleX:x,rippleY:$,rippleSize:L,cb:y})},B.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},ot)):U({pulsate:S,rippleX:x,rippleY:$,rippleSize:L,cb:y})},[n,U]),j=s.useCallback(()=>{F({},{pulsate:!0})},[F]),N=s.useCallback((f,M)=>{if(clearTimeout(B.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,B.current=setTimeout(()=>{N(f,M)});return}h.current=null,p(y=>y.length>0?y.slice(1):y),g.current=M},[]);return s.useImperativeHandle(a,()=>({pulsate:j,start:F,stop:N}),[j,F,N]),I(at,H({className:C(m.root,t.root,i),ref:R},c,{children:I(Ze,{component:null,exit:!0,children:u})}))}),ct=ut;function pt(e){return Ie("MuiButtonBase",e)}const ft=he("MuiButtonBase",["root","disabled","focusVisible"]),dt=ft,ht=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],mt=e=>{const{disabled:o,focusVisible:a,focusVisibleClassName:l,classes:n}=e,i=Ue({root:["root",o&&"disabled",a&&"focusVisible"]},pt,n);return a&&l&&(i.root+=` ${l}`),i},bt=ee("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${dt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),gt=s.forwardRef(function(o,a){const l=me({props:o,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:i,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:B="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:F,onFocus:j,onFocusVisible:N,onKeyDown:f,onKeyUp:M,onMouseDown:y,onMouseLeave:S,onMouseUp:_,onTouchEnd:z,onTouchMove:E,onTouchStart:P,tabIndex:x=0,TouchRippleProps:$,touchRippleRef:L,type:k}=l,V=be(l,ht),O=s.useRef(null),T=s.useRef(null),ge=le(T,L),{isFocusVisibleRef:ie,onFocus:Re,onBlur:Me,ref:ye}=Ye(),[w,Y]=s.useState(!1);p&&w&&Y(!1),s.useImperativeHandle(n,()=>({focusVisible:()=>{Y(!0),O.current.focus()}}),[]);const[q,Ee]=s.useState(!1);s.useEffect(()=>{Ee(!0)},[]);const Te=q&&!d&&!p;s.useEffect(()=>{w&&b&&!d&&q&&T.current.pulsate()},[d,b,w,q]);function v(r,se,_e=g){return W(ae=>(se&&se(ae),!_e&&T.current&&T.current[r](ae),!0))}const Ce=v("start",y),xe=v("stop",U),Ve=v("stop",F),ve=v("stop",_),Be=v("stop",r=>{w&&r.preventDefault(),S&&S(r)}),Pe=v("start",P),$e=v("stop",z),Le=v("stop",E),Se=v("stop",r=>{Me(r),ie.current===!1&&Y(!1),h&&h(r)},!1),ke=W(r=>{O.current||(O.current=r.currentTarget),Re(r),ie.current===!0&&(Y(!0),N&&N(r)),j&&j(r)}),J=()=>{const r=O.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Q=s.useRef(!1),we=W(r=>{b&&!Q.current&&w&&T.current&&r.key===" "&&(Q.current=!0,T.current.stop(r,()=>{T.current.start(r)})),r.target===r.currentTarget&&J()&&r.key===" "&&r.preventDefault(),f&&f(r),r.target===r.currentTarget&&J()&&r.key==="Enter"&&!p&&(r.preventDefault(),R&&R(r))}),De=W(r=>{b&&r.key===" "&&T.current&&w&&!r.defaultPrevented&&(Q.current=!1,T.current.stop(r,()=>{T.current.pulsate(r)})),M&&M(r),R&&r.target===r.currentTarget&&J()&&r.key===" "&&!r.defaultPrevented&&R(r)});let A=u;A==="button"&&(V.href||V.to)&&(A=B);const K={};A==="button"?(K.type=k===void 0?"button":k,K.disabled=p):(!V.href&&!V.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const Fe=le(a,ye,O),re=H({},l,{centerRipple:t,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:x,focusVisible:w}),Ne=mt(re);return je(bt,H({as:A,className:C(Ne.root,c),ownerState:re,onBlur:Se,onClick:R,onContextMenu:xe,onFocus:ke,onKeyDown:we,onKeyUp:De,onMouseDown:Ce,onMouseLeave:Be,onMouseUp:ve,onDragLeave:Ve,onTouchEnd:$e,onTouchMove:Le,onTouchStart:Pe,ref:Fe,tabIndex:p?-1:x,type:k},K,V,{children:[i,Te?I(ct,H({ref:ge,center:t},$)):null]}))}),Bt=gt;export{Bt as B,ue as T};
//# sourceMappingURL=ButtonBase-1f60c7b2.js.map
