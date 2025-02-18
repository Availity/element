import{r as C}from"./index-DcWiA9TO.js";import{g as Me,c as he}from"./generateUtilityClass-DELP8s2G.js";import{u as De}from"./index-nos-0K8U.js";import{u as nr}from"./useTheme-Cf-RAc4Y.js";import{j as _}from"./jsx-runtime-CcL-W3nW.js";import{c as je,s as Zt}from"./styled-wZqJTO_n.js";import{m as se}from"./memoTheme-CIpOTVoB.js";import{u as qt}from"./useSlot-CaH4cQiJ.js";import{g as Be}from"./generateUtilityClasses-duJ5YrlI.js";import{u as ke}from"./DefaultPropsProvider-LCKMq1Iv.js";import{a as Xt,u as ge,T as ar}from"./useTimeout-B8wmcRZV.js";import{u as ir}from"./useControlled-WdbyInBW.js";import{u as sr}from"./useId-DszduLV4.js";import{u as oe}from"./useForkRef-BVrIj09m.js";import{g as pr}from"./getReactElementRef-AnOffBoZ.js";import{P as lr,G as cr}from"./Portal-D32Mdiva.js";import{o as ye}from"./ownerDocument-DW-IO8s5.js";import{u as be}from"./useEnhancedEffect-D2f2tbda.js";import{u as fr}from"./useSlotProps-DE50rPTb.js";import{f as Le,a as We}from"./identifier-CenlGZaM.js";import{i as we}from"./isFocusVisible-B8k4qzLc.js";var k="top",I="bottom",U="right",L="left",pe="auto",Ft=[k,I,U,L],Ot="start",Wt="end",ur="clippingParents",Ne="viewport",jt="popper",dr="reference",xe=Ft.reduce(function(e,t){return e.concat([t+"-"+Ot,t+"-"+Wt])},[]),Fe=[].concat(Ft,[pe]).reduce(function(e,t){return e.concat([t,t+"-"+Ot,t+"-"+Wt])},[]),vr="beforeRead",mr="read",hr="afterRead",gr="beforeMain",yr="main",br="afterMain",wr="beforeWrite",xr="write",Or="afterWrite",Pr=[vr,mr,hr,gr,yr,br,wr,xr,Or];function et(e){return e?(e.nodeName||"").toLowerCase():null}function W(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function dt(e){var t=W(e).Element;return e instanceof t||e instanceof Element}function H(e){var t=W(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function le(e){if(typeof ShadowRoot>"u")return!1;var t=W(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Rr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},i=t.elements[r];!H(i)||!et(i)||(Object.assign(i.style,o),Object.keys(n).forEach(function(l){var a=n[l];a===!1?i.removeAttribute(l):i.setAttribute(l,a===!0?"":a)}))})}function Tr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],i=t.attributes[o]||{},l=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),a=l.reduce(function(s,c){return s[c]="",s},{});!H(n)||!et(n)||(Object.assign(n.style,a),Object.keys(i).forEach(function(s){n.removeAttribute(s)}))})}}const Er={name:"applyStyles",enabled:!0,phase:"write",fn:Rr,effect:Tr,requires:["computeStyles"]};function tt(e){return e.split("-")[0]}var ut=Math.max,Qt=Math.min,Pt=Math.round;function ne(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function He(){return!/^((?!chrome|android).)*safari/i.test(ne())}function Rt(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,i=1;t&&H(e)&&(n=e.offsetWidth>0&&Pt(o.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Pt(o.height)/e.offsetHeight||1);var l=dt(e)?W(e):window,a=l.visualViewport,s=!He()&&r,c=(o.left+(s&&a?a.offsetLeft:0))/n,p=(o.top+(s&&a?a.offsetTop:0))/i,m=o.width/n,x=o.height/i;return{width:m,height:x,top:p,right:c+m,bottom:p+x,left:c,x:c,y:p}}function ce(e){var t=Rt(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function Ie(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&le(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function nt(e){return W(e).getComputedStyle(e)}function Ar(e){return["table","td","th"].indexOf(et(e))>=0}function st(e){return((dt(e)?e.ownerDocument:e.document)||window.document).documentElement}function _t(e){return et(e)==="html"?e:e.assignedSlot||e.parentNode||(le(e)?e.host:null)||st(e)}function Oe(e){return!H(e)||nt(e).position==="fixed"?null:e.offsetParent}function $r(e){var t=/firefox/i.test(ne()),r=/Trident/i.test(ne());if(r&&H(e)){var o=nt(e);if(o.position==="fixed")return null}var n=_t(e);for(le(n)&&(n=n.host);H(n)&&["html","body"].indexOf(et(n))<0;){var i=nt(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function Ht(e){for(var t=W(e),r=Oe(e);r&&Ar(r)&&nt(r).position==="static";)r=Oe(r);return r&&(et(r)==="html"||et(r)==="body"&&nt(r).position==="static")?t:r||$r(e)||t}function fe(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function kt(e,t,r){return ut(e,Qt(t,r))}function Cr(e,t,r){var o=kt(e,t,r);return o>r?r:o}function Ue(){return{top:0,right:0,bottom:0,left:0}}function Ve(e){return Object.assign({},Ue(),e)}function ze(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var Sr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,Ve(typeof t!="number"?t:ze(t,Ft))};function Mr(e){var t,r=e.state,o=e.name,n=e.options,i=r.elements.arrow,l=r.modifiersData.popperOffsets,a=tt(r.placement),s=fe(a),c=[L,U].indexOf(a)>=0,p=c?"height":"width";if(!(!i||!l)){var m=Sr(n.padding,r),x=ce(i),f=s==="y"?k:L,O=s==="y"?I:U,d=r.rects.reference[p]+r.rects.reference[s]-l[s]-r.rects.popper[p],v=l[s]-r.rects.reference[s],b=Ht(i),R=b?s==="y"?b.clientHeight||0:b.clientWidth||0:0,w=d/2-v/2,u=m[f],h=R-x[p]-m[O],g=R/2-x[p]/2+w,T=kt(u,g,h),S=s;r.modifiersData[o]=(t={},t[S]=T,t.centerOffset=T-g,t)}}function Dr(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||Ie(t.elements.popper,n)&&(t.elements.arrow=n))}const jr={name:"arrow",enabled:!0,phase:"main",fn:Mr,effect:Dr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Tt(e){return e.split("-")[1]}var Br={top:"auto",right:"auto",bottom:"auto",left:"auto"};function kr(e,t){var r=e.x,o=e.y,n=t.devicePixelRatio||1;return{x:Pt(r*n)/n||0,y:Pt(o*n)/n||0}}function Pe(e){var t,r=e.popper,o=e.popperRect,n=e.placement,i=e.variation,l=e.offsets,a=e.position,s=e.gpuAcceleration,c=e.adaptive,p=e.roundOffsets,m=e.isFixed,x=l.x,f=x===void 0?0:x,O=l.y,d=O===void 0?0:O,v=typeof p=="function"?p({x:f,y:d}):{x:f,y:d};f=v.x,d=v.y;var b=l.hasOwnProperty("x"),R=l.hasOwnProperty("y"),w=L,u=k,h=window;if(c){var g=Ht(r),T="clientHeight",S="clientWidth";if(g===W(r)&&(g=st(r),nt(g).position!=="static"&&a==="absolute"&&(T="scrollHeight",S="scrollWidth")),g=g,n===k||(n===L||n===U)&&i===Wt){u=I;var A=m&&g===h&&h.visualViewport?h.visualViewport.height:g[T];d-=A-o.height,d*=s?1:-1}if(n===L||(n===k||n===I)&&i===Wt){w=U;var P=m&&g===h&&h.visualViewport?h.visualViewport.width:g[S];f-=P-o.width,f*=s?1:-1}}var E=Object.assign({position:a},c&&Br),B=p===!0?kr({x:f,y:d},W(r)):{x:f,y:d};if(f=B.x,d=B.y,s){var $;return Object.assign({},E,($={},$[u]=R?"0":"",$[w]=b?"0":"",$.transform=(h.devicePixelRatio||1)<=1?"translate("+f+"px, "+d+"px)":"translate3d("+f+"px, "+d+"px, 0)",$))}return Object.assign({},E,(t={},t[u]=R?d+"px":"",t[w]=b?f+"px":"",t.transform="",t))}function Lr(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,i=r.adaptive,l=i===void 0?!0:i,a=r.roundOffsets,s=a===void 0?!0:a,c={placement:tt(t.placement),variation:Tt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Pe(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Pe(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Wr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Lr,data:{}};var Yt={passive:!0};function Nr(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,i=n===void 0?!0:n,l=o.resize,a=l===void 0?!0:l,s=W(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(p){p.addEventListener("scroll",r.update,Yt)}),a&&s.addEventListener("resize",r.update,Yt),function(){i&&c.forEach(function(p){p.removeEventListener("scroll",r.update,Yt)}),a&&s.removeEventListener("resize",r.update,Yt)}}const Fr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Nr,data:{}};var Hr={left:"right",right:"left",bottom:"top",top:"bottom"};function Jt(e){return e.replace(/left|right|bottom|top/g,function(t){return Hr[t]})}var Ir={start:"end",end:"start"};function Re(e){return e.replace(/start|end/g,function(t){return Ir[t]})}function ue(e){var t=W(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function de(e){return Rt(st(e)).left+ue(e).scrollLeft}function Ur(e,t){var r=W(e),o=st(e),n=r.visualViewport,i=o.clientWidth,l=o.clientHeight,a=0,s=0;if(n){i=n.width,l=n.height;var c=He();(c||!c&&t==="fixed")&&(a=n.offsetLeft,s=n.offsetTop)}return{width:i,height:l,x:a+de(e),y:s}}function Vr(e){var t,r=st(e),o=ue(e),n=(t=e.ownerDocument)==null?void 0:t.body,i=ut(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),l=ut(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-o.scrollLeft+de(e),s=-o.scrollTop;return nt(n||r).direction==="rtl"&&(a+=ut(r.clientWidth,n?n.clientWidth:0)-i),{width:i,height:l,x:a,y:s}}function ve(e){var t=nt(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function qe(e){return["html","body","#document"].indexOf(et(e))>=0?e.ownerDocument.body:H(e)&&ve(e)?e:qe(_t(e))}function Lt(e,t){var r;t===void 0&&(t=[]);var o=qe(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),i=W(o),l=n?[i].concat(i.visualViewport||[],ve(o)?o:[]):o,a=t.concat(l);return n?a:a.concat(Lt(_t(l)))}function ae(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function zr(e,t){var r=Rt(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Te(e,t,r){return t===Ne?ae(Ur(e,r)):dt(t)?zr(t,r):ae(Vr(st(e)))}function qr(e){var t=Lt(_t(e)),r=["absolute","fixed"].indexOf(nt(e).position)>=0,o=r&&H(e)?Ht(e):e;return dt(o)?t.filter(function(n){return dt(n)&&Ie(n,o)&&et(n)!=="body"}):[]}function Xr(e,t,r,o){var n=t==="clippingParents"?qr(e):[].concat(t),i=[].concat(n,[r]),l=i[0],a=i.reduce(function(s,c){var p=Te(e,c,o);return s.top=ut(p.top,s.top),s.right=Qt(p.right,s.right),s.bottom=Qt(p.bottom,s.bottom),s.left=ut(p.left,s.left),s},Te(e,l,o));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Xe(e){var t=e.reference,r=e.element,o=e.placement,n=o?tt(o):null,i=o?Tt(o):null,l=t.x+t.width/2-r.width/2,a=t.y+t.height/2-r.height/2,s;switch(n){case k:s={x:l,y:t.y-r.height};break;case I:s={x:l,y:t.y+t.height};break;case U:s={x:t.x+t.width,y:a};break;case L:s={x:t.x-r.width,y:a};break;default:s={x:t.x,y:t.y}}var c=n?fe(n):null;if(c!=null){var p=c==="y"?"height":"width";switch(i){case Ot:s[c]=s[c]-(t[p]/2-r[p]/2);break;case Wt:s[c]=s[c]+(t[p]/2-r[p]/2);break}}return s}function Nt(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,i=r.strategy,l=i===void 0?e.strategy:i,a=r.boundary,s=a===void 0?ur:a,c=r.rootBoundary,p=c===void 0?Ne:c,m=r.elementContext,x=m===void 0?jt:m,f=r.altBoundary,O=f===void 0?!1:f,d=r.padding,v=d===void 0?0:d,b=Ve(typeof v!="number"?v:ze(v,Ft)),R=x===jt?dr:jt,w=e.rects.popper,u=e.elements[O?R:x],h=Xr(dt(u)?u:u.contextElement||st(e.elements.popper),s,p,l),g=Rt(e.elements.reference),T=Xe({reference:g,element:w,placement:n}),S=ae(Object.assign({},w,T)),A=x===jt?S:g,P={top:h.top-A.top+b.top,bottom:A.bottom-h.bottom+b.bottom,left:h.left-A.left+b.left,right:A.right-h.right+b.right},E=e.modifiersData.offset;if(x===jt&&E){var B=E[n];Object.keys(P).forEach(function($){var V=[U,I].indexOf($)>=0?1:-1,z=[k,I].indexOf($)>=0?"y":"x";P[$]+=B[z]*V})}return P}function Yr(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,i=r.rootBoundary,l=r.padding,a=r.flipVariations,s=r.allowedAutoPlacements,c=s===void 0?Fe:s,p=Tt(o),m=p?a?xe:xe.filter(function(O){return Tt(O)===p}):Ft,x=m.filter(function(O){return c.indexOf(O)>=0});x.length===0&&(x=m);var f=x.reduce(function(O,d){return O[d]=Nt(e,{placement:d,boundary:n,rootBoundary:i,padding:l})[tt(d)],O},{});return Object.keys(f).sort(function(O,d){return f[O]-f[d]})}function Gr(e){if(tt(e)===pe)return[];var t=Jt(e);return[Re(e),t,Re(t)]}function Kr(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,i=n===void 0?!0:n,l=r.altAxis,a=l===void 0?!0:l,s=r.fallbackPlacements,c=r.padding,p=r.boundary,m=r.rootBoundary,x=r.altBoundary,f=r.flipVariations,O=f===void 0?!0:f,d=r.allowedAutoPlacements,v=t.options.placement,b=tt(v),R=b===v,w=s||(R||!O?[Jt(v)]:Gr(v)),u=[v].concat(w).reduce(function(X,N){return X.concat(tt(N)===pe?Yr(t,{placement:N,boundary:p,rootBoundary:m,padding:c,flipVariations:O,allowedAutoPlacements:d}):N)},[]),h=t.rects.reference,g=t.rects.popper,T=new Map,S=!0,A=u[0],P=0;P<u.length;P++){var E=u[P],B=tt(E),$=Tt(E)===Ot,V=[k,I].indexOf(B)>=0,z=V?"width":"height",D=Nt(t,{placement:E,boundary:p,rootBoundary:m,altBoundary:x,padding:c}),M=V?$?U:L:$?I:k;h[z]>g[z]&&(M=Jt(M));var q=Jt(M),rt=[];if(i&&rt.push(D[B]<=0),a&&rt.push(D[M]<=0,D[q]<=0),rt.every(function(X){return X})){A=E,S=!1;break}T.set(E,rt)}if(S)for(var Q=O?3:1,vt=function(N){var at=u.find(function(it){var F=T.get(it);if(F)return F.slice(0,N).every(function(ht){return ht})});if(at)return A=at,"break"},ot=Q;ot>0;ot--){var mt=vt(ot);if(mt==="break")break}t.placement!==A&&(t.modifiersData[o]._skip=!0,t.placement=A,t.reset=!0)}}const Jr={name:"flip",enabled:!0,phase:"main",fn:Kr,requiresIfExists:["offset"],data:{_skip:!1}};function Ee(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Ae(e){return[k,U,I,L].some(function(t){return e[t]>=0})}function Qr(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,l=Nt(t,{elementContext:"reference"}),a=Nt(t,{altBoundary:!0}),s=Ee(l,o),c=Ee(a,n,i),p=Ae(s),m=Ae(c);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":m})}const Zr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Qr};function _r(e,t,r){var o=tt(e),n=[L,k].indexOf(o)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,l=i[0],a=i[1];return l=l||0,a=(a||0)*n,[L,U].indexOf(o)>=0?{x:a,y:l}:{x:l,y:a}}function to(e){var t=e.state,r=e.options,o=e.name,n=r.offset,i=n===void 0?[0,0]:n,l=Fe.reduce(function(p,m){return p[m]=_r(m,t.rects,i),p},{}),a=l[t.placement],s=a.x,c=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=l}const eo={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:to};function ro(e){var t=e.state,r=e.name;t.modifiersData[r]=Xe({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const oo={name:"popperOffsets",enabled:!0,phase:"read",fn:ro,data:{}};function no(e){return e==="x"?"y":"x"}function ao(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,i=n===void 0?!0:n,l=r.altAxis,a=l===void 0?!1:l,s=r.boundary,c=r.rootBoundary,p=r.altBoundary,m=r.padding,x=r.tether,f=x===void 0?!0:x,O=r.tetherOffset,d=O===void 0?0:O,v=Nt(t,{boundary:s,rootBoundary:c,padding:m,altBoundary:p}),b=tt(t.placement),R=Tt(t.placement),w=!R,u=fe(b),h=no(u),g=t.modifiersData.popperOffsets,T=t.rects.reference,S=t.rects.popper,A=typeof d=="function"?d(Object.assign({},t.rects,{placement:t.placement})):d,P=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),E=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,B={x:0,y:0};if(g){if(i){var $,V=u==="y"?k:L,z=u==="y"?I:U,D=u==="y"?"height":"width",M=g[u],q=M+v[V],rt=M-v[z],Q=f?-S[D]/2:0,vt=R===Ot?T[D]:S[D],ot=R===Ot?-S[D]:-T[D],mt=t.elements.arrow,X=f&&mt?ce(mt):{width:0,height:0},N=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Ue(),at=N[V],it=N[z],F=kt(0,T[D],X[D]),ht=w?T[D]/2-Q-F-at-P.mainAxis:vt-F-at-P.mainAxis,te=w?-T[D]/2+Q+F+it+P.mainAxis:ot+F+it+P.mainAxis,gt=t.elements.arrow&&Ht(t.elements.arrow),Y=gt?u==="y"?gt.clientTop||0:gt.clientLeft||0:0,yt=($=E==null?void 0:E[u])!=null?$:0,pt=M+ht-yt-Y,bt=M+te-yt,Et=kt(f?Qt(q,pt):q,M,f?ut(rt,bt):rt);g[u]=Et,B[u]=Et-M}if(a){var lt,wt=u==="x"?k:L,At=u==="x"?I:U,Z=g[h],ct=h==="y"?"height":"width",$t=Z+v[wt],Ct=Z-v[At],St=[k,L].indexOf(b)!==-1,It=(lt=E==null?void 0:E[h])!=null?lt:0,Ut=St?$t:Z-T[ct]-S[ct]-It+P.altAxis,xt=St?Z+T[ct]+S[ct]-It-P.altAxis:Ct,Vt=f&&St?Cr(Ut,Z,xt):kt(f?Ut:$t,Z,f?xt:Ct);g[h]=Vt,B[h]=Vt-Z}t.modifiersData[o]=B}}const io={name:"preventOverflow",enabled:!0,phase:"main",fn:ao,requiresIfExists:["offset"]};function so(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function po(e){return e===W(e)||!H(e)?ue(e):so(e)}function lo(e){var t=e.getBoundingClientRect(),r=Pt(t.width)/e.offsetWidth||1,o=Pt(t.height)/e.offsetHeight||1;return r!==1||o!==1}function co(e,t,r){r===void 0&&(r=!1);var o=H(t),n=H(t)&&lo(t),i=st(t),l=Rt(e,n,r),a={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(o||!o&&!r)&&((et(t)!=="body"||ve(i))&&(a=po(t)),H(t)?(s=Rt(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):i&&(s.x=de(i))),{x:l.left+a.scrollLeft-s.x,y:l.top+a.scrollTop-s.y,width:l.width,height:l.height}}function fo(e){var t=new Map,r=new Set,o=[];e.forEach(function(i){t.set(i.name,i)});function n(i){r.add(i.name);var l=[].concat(i.requires||[],i.requiresIfExists||[]);l.forEach(function(a){if(!r.has(a)){var s=t.get(a);s&&n(s)}}),o.push(i)}return e.forEach(function(i){r.has(i.name)||n(i)}),o}function uo(e){var t=fo(e);return Pr.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function vo(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function mo(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var $e={placement:"bottom",modifiers:[],strategy:"absolute"};function Ce(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function ho(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,i=n===void 0?$e:n;return function(a,s,c){c===void 0&&(c=i);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},$e,i),modifiersData:{},elements:{reference:a,popper:s},attributes:{},styles:{}},m=[],x=!1,f={state:p,setOptions:function(b){var R=typeof b=="function"?b(p.options):b;d(),p.options=Object.assign({},i,p.options,R),p.scrollParents={reference:dt(a)?Lt(a):a.contextElement?Lt(a.contextElement):[],popper:Lt(s)};var w=uo(mo([].concat(o,p.options.modifiers)));return p.orderedModifiers=w.filter(function(u){return u.enabled}),O(),f.update()},forceUpdate:function(){if(!x){var b=p.elements,R=b.reference,w=b.popper;if(Ce(R,w)){p.rects={reference:co(R,Ht(w),p.options.strategy==="fixed"),popper:ce(w)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(P){return p.modifiersData[P.name]=Object.assign({},P.data)});for(var u=0;u<p.orderedModifiers.length;u++){if(p.reset===!0){p.reset=!1,u=-1;continue}var h=p.orderedModifiers[u],g=h.fn,T=h.options,S=T===void 0?{}:T,A=h.name;typeof g=="function"&&(p=g({state:p,options:S,name:A,instance:f})||p)}}}},update:vo(function(){return new Promise(function(v){f.forceUpdate(),v(p)})}),destroy:function(){d(),x=!0}};if(!Ce(a,s))return f;f.setOptions(c).then(function(v){!x&&c.onFirstUpdate&&c.onFirstUpdate(v)});function O(){p.orderedModifiers.forEach(function(v){var b=v.name,R=v.options,w=R===void 0?{}:R,u=v.effect;if(typeof u=="function"){var h=u({state:p,name:b,instance:f,options:w}),g=function(){};m.push(h||g)}})}function d(){m.forEach(function(v){return v()}),m=[]}return f}}var go=[Fr,oo,Wr,Er,eo,Jr,io,jr,Zr],yo=ho({defaultModifiers:go});function bo(e){return Me("MuiPopper",e)}Be("MuiPopper",["root"]);function wo(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function ie(e){return typeof e=="function"?e():e}function xo(e){return e.nodeType!==void 0}const Oo=e=>{const{classes:t}=e;return je({root:["root"]},bo,t)},Po={},Ro=C.forwardRef(function(t,r){const{anchorEl:o,children:n,direction:i,disablePortal:l,modifiers:a,open:s,placement:c,popperOptions:p,popperRef:m,slotProps:x={},slots:f={},TransitionProps:O,ownerState:d,...v}=t,b=C.useRef(null),R=oe(b,r),w=C.useRef(null),u=oe(w,m),h=C.useRef(u);be(()=>{h.current=u},[u]),C.useImperativeHandle(m,()=>w.current,[]);const g=wo(c,i),[T,S]=C.useState(g),[A,P]=C.useState(ie(o));C.useEffect(()=>{w.current&&w.current.forceUpdate()}),C.useEffect(()=>{o&&P(ie(o))},[o]),be(()=>{if(!A||!s)return;const z=q=>{S(q.placement)};let D=[{name:"preventOverflow",options:{altBoundary:l}},{name:"flip",options:{altBoundary:l}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:q})=>{z(q)}}];a!=null&&(D=D.concat(a)),p&&p.modifiers!=null&&(D=D.concat(p.modifiers));const M=yo(A,b.current,{placement:g,...p,modifiers:D});return h.current(M),()=>{M.destroy(),h.current(null)}},[A,l,a,s,p,g]);const E={placement:T};O!==null&&(E.TransitionProps=O);const B=Oo(t),$=f.root??"div",V=fr({elementType:$,externalSlotProps:x.root,externalForwardedProps:v,additionalProps:{role:"tooltip",ref:R},ownerState:t,className:B.root});return _.jsx($,{...V,children:typeof n=="function"?n(E):n})}),To=C.forwardRef(function(t,r){const{anchorEl:o,children:n,container:i,direction:l="ltr",disablePortal:a=!1,keepMounted:s=!1,modifiers:c,open:p,placement:m="bottom",popperOptions:x=Po,popperRef:f,style:O,transition:d=!1,slotProps:v={},slots:b={},...R}=t,[w,u]=C.useState(!0),h=()=>{u(!1)},g=()=>{u(!0)};if(!s&&!p&&(!d||w))return null;let T;if(i)T=i;else if(o){const P=ie(o);T=P&&xo(P)?ye(P).body:ye(null).body}const S=!p&&s&&(!d||w)?"none":void 0,A=d?{in:p,onEnter:h,onExited:g}:void 0;return _.jsx(lr,{disablePortal:a,container:T,children:_.jsx(Ro,{anchorEl:o,direction:l,disablePortal:a,modifiers:c,ref:r,open:d?!w:p,placement:m,popperOptions:x,popperRef:f,slotProps:v,slots:b,...R,style:{position:"fixed",top:0,left:0,display:S,...O},TransitionProps:A,children:n})})}),Eo=Zt(To,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Ye=C.forwardRef(function(t,r){const o=De(),n=ke({props:t,name:"MuiPopper"}),{anchorEl:i,component:l,components:a,componentsProps:s,container:c,disablePortal:p,keepMounted:m,modifiers:x,open:f,placement:O,popperOptions:d,popperRef:v,transition:b,slots:R,slotProps:w,...u}=n,h=(R==null?void 0:R.root)??(a==null?void 0:a.Root),g={anchorEl:i,container:c,disablePortal:p,keepMounted:m,modifiers:x,open:f,placement:O,popperOptions:d,popperRef:v,transition:b,...u};return _.jsx(Eo,{as:l,direction:o?"rtl":"ltr",slots:{root:h},slotProps:w??s,...g,ref:r})});function Ao(e){return Me("MuiTooltip",e)}const j=Be("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);function $o(e){return Math.round(e*1e5)/1e5}const Co=e=>{const{classes:t,disableInteractive:r,arrow:o,touch:n,placement:i}=e,l={popper:["popper",!r&&"popperInteractive",o&&"popperArrow"],tooltip:["tooltip",o&&"tooltipArrow",n&&"touch",`tooltipPlacement${Le(i.split("-")[0])}`],arrow:["arrow"]};return je(l,Ao,t)},So=Zt(Ye,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.popper,!r.disableInteractive&&t.popperInteractive,r.arrow&&t.popperArrow,!r.open&&t.popperClose]}})(se(({theme:e})=>({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none",variants:[{props:({ownerState:t})=>!t.disableInteractive,style:{pointerEvents:"auto"}},{props:({open:t})=>!t,style:{pointerEvents:"none"}},{props:({ownerState:t})=>t.arrow,style:{[`&[data-popper-placement*="bottom"] .${j.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${j.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${j.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}},[`&[data-popper-placement*="left"] .${j.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}}}},{props:({ownerState:t})=>t.arrow&&!t.isRtl,style:{[`&[data-popper-placement*="right"] .${j.arrow}`]:{left:0,marginLeft:"-0.71em"}}},{props:({ownerState:t})=>t.arrow&&!!t.isRtl,style:{[`&[data-popper-placement*="right"] .${j.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:t})=>t.arrow&&!t.isRtl,style:{[`&[data-popper-placement*="left"] .${j.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:t})=>t.arrow&&!!t.isRtl,style:{[`&[data-popper-placement*="left"] .${j.arrow}`]:{left:0,marginLeft:"-0.71em"}}}]}))),Mo=Zt("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.tooltip,r.touch&&t.touch,r.arrow&&t.tooltipArrow,t[`tooltipPlacement${Le(r.placement.split("-")[0])}`]]}})(se(({theme:e})=>({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:We(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium,[`.${j.popper}[data-popper-placement*="left"] &`]:{transformOrigin:"right center"},[`.${j.popper}[data-popper-placement*="right"] &`]:{transformOrigin:"left center"},[`.${j.popper}[data-popper-placement*="top"] &`]:{transformOrigin:"center bottom",marginBottom:"14px"},[`.${j.popper}[data-popper-placement*="bottom"] &`]:{transformOrigin:"center top",marginTop:"14px"},variants:[{props:({ownerState:t})=>t.arrow,style:{position:"relative",margin:0}},{props:({ownerState:t})=>t.touch,style:{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${$o(16/14)}em`,fontWeight:e.typography.fontWeightRegular}},{props:({ownerState:t})=>!t.isRtl,style:{[`.${j.popper}[data-popper-placement*="left"] &`]:{marginRight:"14px"},[`.${j.popper}[data-popper-placement*="right"] &`]:{marginLeft:"14px"}}},{props:({ownerState:t})=>!t.isRtl&&t.touch,style:{[`.${j.popper}[data-popper-placement*="left"] &`]:{marginRight:"24px"},[`.${j.popper}[data-popper-placement*="right"] &`]:{marginLeft:"24px"}}},{props:({ownerState:t})=>!!t.isRtl,style:{[`.${j.popper}[data-popper-placement*="left"] &`]:{marginLeft:"14px"},[`.${j.popper}[data-popper-placement*="right"] &`]:{marginRight:"14px"}}},{props:({ownerState:t})=>!!t.isRtl&&t.touch,style:{[`.${j.popper}[data-popper-placement*="left"] &`]:{marginLeft:"24px"},[`.${j.popper}[data-popper-placement*="right"] &`]:{marginRight:"24px"}}},{props:({ownerState:t})=>t.touch,style:{[`.${j.popper}[data-popper-placement*="top"] &`]:{marginBottom:"24px"}}},{props:({ownerState:t})=>t.touch,style:{[`.${j.popper}[data-popper-placement*="bottom"] &`]:{marginTop:"24px"}}}]}))),Do=Zt("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(se(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:We(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let Gt=!1;const Se=new ar;let Bt={x:0,y:0};function Kt(e,t){return(r,...o)=>{t&&t(r,...o),e(r,...o)}}const tn=C.forwardRef(function(t,r){const o=ke({props:t,name:"MuiTooltip"}),{arrow:n=!1,children:i,classes:l,components:a={},componentsProps:s={},describeChild:c=!1,disableFocusListener:p=!1,disableHoverListener:m=!1,disableInteractive:x=!1,disableTouchListener:f=!1,enterDelay:O=100,enterNextDelay:d=0,enterTouchDelay:v=700,followCursor:b=!1,id:R,leaveDelay:w=0,leaveTouchDelay:u=1500,onClose:h,onOpen:g,open:T,placement:S="bottom",PopperComponent:A,PopperProps:P={},slotProps:E={},slots:B={},title:$,TransitionComponent:V,TransitionProps:z,...D}=o,M=C.isValidElement(i)?i:_.jsx("span",{children:i}),q=nr(),rt=De(),[Q,vt]=C.useState(),[ot,mt]=C.useState(null),X=C.useRef(!1),N=x||b,at=Xt(),it=Xt(),F=Xt(),ht=Xt(),[te,gt]=ir({controlled:T,default:!1,name:"Tooltip",state:"open"});let Y=te;const yt=sr(R),pt=C.useRef(),bt=ge(()=>{pt.current!==void 0&&(document.body.style.WebkitUserSelect=pt.current,pt.current=void 0),ht.clear()});C.useEffect(()=>bt,[bt]);const Et=y=>{Se.clear(),Gt=!0,gt(!0),g&&!Y&&g(y)},lt=ge(y=>{Se.start(800+w,()=>{Gt=!1}),gt(!1),h&&Y&&h(y),at.start(q.transitions.duration.shortest,()=>{X.current=!1})}),wt=y=>{X.current&&y.type!=="touchstart"||(Q&&Q.removeAttribute("title"),it.clear(),F.clear(),O||Gt&&d?it.start(Gt?d:O,()=>{Et(y)}):Et(y))},At=y=>{it.clear(),F.start(w,()=>{lt(y)})},[,Z]=C.useState(!1),ct=y=>{we(y.target)||(Z(!1),At(y))},$t=y=>{Q||vt(y.currentTarget),we(y.target)&&(Z(!0),wt(y))},Ct=y=>{X.current=!0;const J=M.props;J.onTouchStart&&J.onTouchStart(y)},St=y=>{Ct(y),F.clear(),at.clear(),bt(),pt.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",ht.start(v,()=>{document.body.style.WebkitUserSelect=pt.current,wt(y)})},It=y=>{M.props.onTouchEnd&&M.props.onTouchEnd(y),bt(),F.start(u,()=>{lt(y)})};C.useEffect(()=>{if(!Y)return;function y(J){J.key==="Escape"&&lt(J)}return document.addEventListener("keydown",y),()=>{document.removeEventListener("keydown",y)}},[lt,Y]);const Ut=oe(pr(M),vt,r);!$&&$!==0&&(Y=!1);const xt=C.useRef(),Vt=y=>{const J=M.props;J.onMouseMove&&J.onMouseMove(y),Bt={x:y.clientX,y:y.clientY},xt.current&&xt.current.update()},Mt={},ee=typeof $=="string";c?(Mt.title=!Y&&ee&&!m?$:null,Mt["aria-describedby"]=Y?yt:null):(Mt["aria-label"]=ee?$:null,Mt["aria-labelledby"]=Y&&!ee?yt:null);const G={...Mt,...D,...M.props,className:he(D.className,M.props.className),onTouchStart:Ct,ref:Ut,...b?{onMouseMove:Vt}:{}},Dt={};f||(G.onTouchStart=St,G.onTouchEnd=It),m||(G.onMouseOver=Kt(wt,G.onMouseOver),G.onMouseLeave=Kt(At,G.onMouseLeave),N||(Dt.onMouseOver=wt,Dt.onMouseLeave=At)),p||(G.onFocus=Kt($t,G.onFocus),G.onBlur=Kt(ct,G.onBlur),N||(Dt.onFocus=$t,Dt.onBlur=ct));const ft={...o,isRtl:rt,arrow:n,disableInteractive:N,placement:S,PopperComponentProp:A,touch:X.current},K=typeof E.popper=="function"?E.popper(ft):E.popper,Ge=C.useMemo(()=>{var J,me;let y=[{name:"arrow",enabled:!!ot,options:{element:ot,padding:4}}];return(J=P.popperOptions)!=null&&J.modifiers&&(y=y.concat(P.popperOptions.modifiers)),(me=K==null?void 0:K.popperOptions)!=null&&me.modifiers&&(y=y.concat(K.popperOptions.modifiers)),{...P.popperOptions,...K==null?void 0:K.popperOptions,modifiers:y}},[ot,P.popperOptions,K==null?void 0:K.popperOptions]),re=Co(ft),Ke=typeof E.transition=="function"?E.transition(ft):E.transition,zt={slots:{popper:a.Popper,transition:a.Transition??V,tooltip:a.Tooltip,arrow:a.Arrow,...B},slotProps:{arrow:E.arrow??s.arrow,popper:{...P,...K??s.popper},tooltip:E.tooltip??s.tooltip,transition:{...z,...Ke??s.transition}}},[Je,Qe]=qt("popper",{elementType:So,externalForwardedProps:zt,ownerState:ft,className:he(re.popper,P==null?void 0:P.className)}),[Ze,_e]=qt("transition",{elementType:cr,externalForwardedProps:zt,ownerState:ft}),[tr,er]=qt("tooltip",{elementType:Mo,className:re.tooltip,externalForwardedProps:zt,ownerState:ft}),[rr,or]=qt("arrow",{elementType:Do,className:re.arrow,externalForwardedProps:zt,ownerState:ft,ref:mt});return _.jsxs(C.Fragment,{children:[C.cloneElement(M,G),_.jsx(Je,{as:A??Ye,placement:S,anchorEl:b?{getBoundingClientRect:()=>({top:Bt.y,left:Bt.x,right:Bt.x,bottom:Bt.y,width:0,height:0})}:Q,popperRef:xt,open:Q?Y:!1,id:yt,transition:!0,...Dt,...Qe,popperOptions:Ge,children:({TransitionProps:y})=>_.jsx(Ze,{timeout:q.transitions.duration.shorter,...y,..._e,children:_.jsxs(tr,{...er,children:[$,n?_.jsx(rr,{...or}):null]})})})]})});export{Ye as P,tn as T};
