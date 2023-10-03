import{r as h}from"./index-570b25c1.js";import{c as _e}from"./clsx.m-fb33c42b.js";import{g as Jt,c as Qt,s as rt}from"./styled-d0245a8f.js";import{u as Zt}from"./useTheme-108b79b5.js";import{u as er}from"./useThemeProps-bb804320.js";import{g as tr}from"./generateUtilityClasses-145aac4e.js";import{j as Q,a as Wt}from"./jsx-runtime-390e5fc8.js";import{o as Nt}from"./ownerDocument-613eb639.js";import{r as Cr}from"./index-8a077077.js";import{u as je,s as Ft}from"./useForkRef-153a0a89.js";import{u as et}from"./useEnhancedEffect-460150e6.js";import{u as Ar,a as Ge}from"./useSlotProps-ff3a8657.js";import{B as $r,c as rr,a as or}from"./createTheme-4dc6b23f.js";import{u as Mr}from"./ButtonBase-ae02db0a.js";import{T as Dr,r as Br,g as Ht}from"./utils-78dc3aa5.js";import{u as Sr}from"./useControlled-9b1271e0.js";import{u as Lr}from"./useId-6f4bfce0.js";import{u as kr}from"./useIsFocusVisible-5e7b1ff1.js";const jr={disableDefaultClasses:!1},Wr=h.createContext(jr);function Nr(e){const{disableDefaultClasses:t}=h.useContext(Wr);return r=>t?"":e(r)}var F="top",z="bottom",q="right",H="left",ht="auto",Fe=[F,z,q,H],Pe="start",We="end",Fr="clippingParents",nr="viewport",Be="popper",Hr="reference",It=Fe.reduce(function(e,t){return e.concat([t+"-"+Pe,t+"-"+We])},[]),ir=[].concat(Fe,[ht]).reduce(function(e,t){return e.concat([t,t+"-"+Pe,t+"-"+We])},[]),Ir="beforeRead",Vr="read",Ur="afterRead",zr="beforeMain",qr="main",Xr="afterMain",Yr="beforeWrite",_r="write",Gr="afterWrite",Kr=[Ir,Vr,Ur,zr,qr,Xr,Yr,_r,Gr];function ee(e){return e?(e.nodeName||"").toLowerCase():null}function V(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ge(e){var t=V(e).Element;return e instanceof t||e instanceof Element}function U(e){var t=V(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function gt(e){if(typeof ShadowRoot>"u")return!1;var t=V(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Jr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},i=t.elements[r];!U(i)||!ee(i)||(Object.assign(i.style,o),Object.keys(n).forEach(function(p){var s=n[p];s===!1?i.removeAttribute(p):i.setAttribute(p,s===!0?"":s)}))})}function Qr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],i=t.attributes[o]||{},p=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),s=p.reduce(function(a,c){return a[c]="",a},{});!U(n)||!ee(n)||(Object.assign(n.style,s),Object.keys(i).forEach(function(a){n.removeAttribute(a)}))})}}const Zr={name:"applyStyles",enabled:!0,phase:"write",fn:Jr,effect:Qr,requires:["computeStyles"]};function Z(e){return e.split("-")[0]}var he=Math.max,tt=Math.min,Oe=Math.round;function ft(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ar(){return!/^((?!chrome|android).)*safari/i.test(ft())}function Te(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,i=1;t&&U(e)&&(n=e.offsetWidth>0&&Oe(o.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Oe(o.height)/e.offsetHeight||1);var p=ge(e)?V(e):window,s=p.visualViewport,a=!ar()&&r,c=(o.left+(a&&s?s.offsetLeft:0))/n,l=(o.top+(a&&s?s.offsetTop:0))/i,v=o.width/n,w=o.height/i;return{width:v,height:w,top:l,right:c+v,bottom:l+w,left:c,x:c,y:l}}function yt(e){var t=Te(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function sr(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&gt(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ne(e){return V(e).getComputedStyle(e)}function eo(e){return["table","td","th"].indexOf(ee(e))>=0}function ce(e){return((ge(e)?e.ownerDocument:e.document)||window.document).documentElement}function ot(e){return ee(e)==="html"?e:e.assignedSlot||e.parentNode||(gt(e)?e.host:null)||ce(e)}function Vt(e){return!U(e)||ne(e).position==="fixed"?null:e.offsetParent}function to(e){var t=/firefox/i.test(ft()),r=/Trident/i.test(ft());if(r&&U(e)){var o=ne(e);if(o.position==="fixed")return null}var n=ot(e);for(gt(n)&&(n=n.host);U(n)&&["html","body"].indexOf(ee(n))<0;){var i=ne(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function He(e){for(var t=V(e),r=Vt(e);r&&eo(r)&&ne(r).position==="static";)r=Vt(r);return r&&(ee(r)==="html"||ee(r)==="body"&&ne(r).position==="static")?t:r||to(e)||t}function bt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Le(e,t,r){return he(e,tt(t,r))}function ro(e,t,r){var o=Le(e,t,r);return o>r?r:o}function pr(){return{top:0,right:0,bottom:0,left:0}}function lr(e){return Object.assign({},pr(),e)}function cr(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var oo=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,lr(typeof t!="number"?t:cr(t,Fe))};function no(e){var t,r=e.state,o=e.name,n=e.options,i=r.elements.arrow,p=r.modifiersData.popperOffsets,s=Z(r.placement),a=bt(s),c=[H,q].indexOf(s)>=0,l=c?"height":"width";if(!(!i||!p)){var v=oo(n.padding,r),w=yt(i),d=a==="y"?F:H,x=a==="y"?z:q,f=r.rects.reference[l]+r.rects.reference[a]-p[a]-r.rects.popper[l],g=p[a]-r.rects.reference[a],O=He(i),E=O?a==="y"?O.clientHeight||0:O.clientWidth||0:0,P=f/2-g/2,u=v[d],m=E-w[l]-v[x],b=E/2-w[l]/2+P,y=Le(u,b,m),C=a;r.modifiersData[o]=(t={},t[C]=y,t.centerOffset=y-b,t)}}function io(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||sr(t.elements.popper,n)&&(t.elements.arrow=n))}const ao={name:"arrow",enabled:!0,phase:"main",fn:no,effect:io,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ee(e){return e.split("-")[1]}var so={top:"auto",right:"auto",bottom:"auto",left:"auto"};function po(e,t){var r=e.x,o=e.y,n=t.devicePixelRatio||1;return{x:Oe(r*n)/n||0,y:Oe(o*n)/n||0}}function Ut(e){var t,r=e.popper,o=e.popperRect,n=e.placement,i=e.variation,p=e.offsets,s=e.position,a=e.gpuAcceleration,c=e.adaptive,l=e.roundOffsets,v=e.isFixed,w=p.x,d=w===void 0?0:w,x=p.y,f=x===void 0?0:x,g=typeof l=="function"?l({x:d,y:f}):{x:d,y:f};d=g.x,f=g.y;var O=p.hasOwnProperty("x"),E=p.hasOwnProperty("y"),P=H,u=F,m=window;if(c){var b=He(r),y="clientHeight",C="clientWidth";if(b===V(r)&&(b=ce(r),ne(b).position!=="static"&&s==="absolute"&&(y="scrollHeight",C="scrollWidth")),b=b,n===F||(n===H||n===q)&&i===We){u=z;var B=v&&b===m&&m.visualViewport?m.visualViewport.height:b[y];f-=B-o.height,f*=a?1:-1}if(n===H||(n===F||n===z)&&i===We){P=q;var R=v&&b===m&&m.visualViewport?m.visualViewport.width:b[C];d-=R-o.width,d*=a?1:-1}}var M=Object.assign({position:s},c&&so),k=l===!0?po({x:d,y:f},V(r)):{x:d,y:f};if(d=k.x,f=k.y,a){var L;return Object.assign({},M,(L={},L[u]=E?"0":"",L[P]=O?"0":"",L.transform=(m.devicePixelRatio||1)<=1?"translate("+d+"px, "+f+"px)":"translate3d("+d+"px, "+f+"px, 0)",L))}return Object.assign({},M,(t={},t[u]=E?f+"px":"",t[P]=O?d+"px":"",t.transform="",t))}function lo(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,i=r.adaptive,p=i===void 0?!0:i,s=r.roundOffsets,a=s===void 0?!0:s,c={placement:Z(t.placement),variation:Ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ut(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:p,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ut(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const co={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:lo,data:{}};var Ke={passive:!0};function uo(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,i=n===void 0?!0:n,p=o.resize,s=p===void 0?!0:p,a=V(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(l){l.addEventListener("scroll",r.update,Ke)}),s&&a.addEventListener("resize",r.update,Ke),function(){i&&c.forEach(function(l){l.removeEventListener("scroll",r.update,Ke)}),s&&a.removeEventListener("resize",r.update,Ke)}}const fo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:uo,data:{}};var vo={left:"right",right:"left",bottom:"top",top:"bottom"};function Ze(e){return e.replace(/left|right|bottom|top/g,function(t){return vo[t]})}var mo={start:"end",end:"start"};function zt(e){return e.replace(/start|end/g,function(t){return mo[t]})}function wt(e){var t=V(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function xt(e){return Te(ce(e)).left+wt(e).scrollLeft}function ho(e,t){var r=V(e),o=ce(e),n=r.visualViewport,i=o.clientWidth,p=o.clientHeight,s=0,a=0;if(n){i=n.width,p=n.height;var c=ar();(c||!c&&t==="fixed")&&(s=n.offsetLeft,a=n.offsetTop)}return{width:i,height:p,x:s+xt(e),y:a}}function go(e){var t,r=ce(e),o=wt(e),n=(t=e.ownerDocument)==null?void 0:t.body,i=he(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=he(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-o.scrollLeft+xt(e),a=-o.scrollTop;return ne(n||r).direction==="rtl"&&(s+=he(r.clientWidth,n?n.clientWidth:0)-i),{width:i,height:p,x:s,y:a}}function Pt(e){var t=ne(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function ur(e){return["html","body","#document"].indexOf(ee(e))>=0?e.ownerDocument.body:U(e)&&Pt(e)?e:ur(ot(e))}function ke(e,t){var r;t===void 0&&(t=[]);var o=ur(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),i=V(o),p=n?[i].concat(i.visualViewport||[],Pt(o)?o:[]):o,s=t.concat(p);return n?s:s.concat(ke(ot(p)))}function dt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function yo(e,t){var r=Te(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function qt(e,t,r){return t===nr?dt(ho(e,r)):ge(t)?yo(t,r):dt(go(ce(e)))}function bo(e){var t=ke(ot(e)),r=["absolute","fixed"].indexOf(ne(e).position)>=0,o=r&&U(e)?He(e):e;return ge(o)?t.filter(function(n){return ge(n)&&sr(n,o)&&ee(n)!=="body"}):[]}function wo(e,t,r,o){var n=t==="clippingParents"?bo(e):[].concat(t),i=[].concat(n,[r]),p=i[0],s=i.reduce(function(a,c){var l=qt(e,c,o);return a.top=he(l.top,a.top),a.right=tt(l.right,a.right),a.bottom=tt(l.bottom,a.bottom),a.left=he(l.left,a.left),a},qt(e,p,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function fr(e){var t=e.reference,r=e.element,o=e.placement,n=o?Z(o):null,i=o?Ee(o):null,p=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,a;switch(n){case F:a={x:p,y:t.y-r.height};break;case z:a={x:p,y:t.y+t.height};break;case q:a={x:t.x+t.width,y:s};break;case H:a={x:t.x-r.width,y:s};break;default:a={x:t.x,y:t.y}}var c=n?bt(n):null;if(c!=null){var l=c==="y"?"height":"width";switch(i){case Pe:a[c]=a[c]-(t[l]/2-r[l]/2);break;case We:a[c]=a[c]+(t[l]/2-r[l]/2);break}}return a}function Ne(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,i=r.strategy,p=i===void 0?e.strategy:i,s=r.boundary,a=s===void 0?Fr:s,c=r.rootBoundary,l=c===void 0?nr:c,v=r.elementContext,w=v===void 0?Be:v,d=r.altBoundary,x=d===void 0?!1:d,f=r.padding,g=f===void 0?0:f,O=lr(typeof g!="number"?g:cr(g,Fe)),E=w===Be?Hr:Be,P=e.rects.popper,u=e.elements[x?E:w],m=wo(ge(u)?u:u.contextElement||ce(e.elements.popper),a,l,p),b=Te(e.elements.reference),y=fr({reference:b,element:P,strategy:"absolute",placement:n}),C=dt(Object.assign({},P,y)),B=w===Be?C:b,R={top:m.top-B.top+O.top,bottom:B.bottom-m.bottom+O.bottom,left:m.left-B.left+O.left,right:B.right-m.right+O.right},M=e.modifiersData.offset;if(w===Be&&M){var k=M[n];Object.keys(R).forEach(function(L){var j=[q,z].indexOf(L)>=0?1:-1,A=[F,z].indexOf(L)>=0?"y":"x";R[L]+=k[A]*j})}return R}function xo(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,i=r.rootBoundary,p=r.padding,s=r.flipVariations,a=r.allowedAutoPlacements,c=a===void 0?ir:a,l=Ee(o),v=l?s?It:It.filter(function(x){return Ee(x)===l}):Fe,w=v.filter(function(x){return c.indexOf(x)>=0});w.length===0&&(w=v);var d=w.reduce(function(x,f){return x[f]=Ne(e,{placement:f,boundary:n,rootBoundary:i,padding:p})[Z(f)],x},{});return Object.keys(d).sort(function(x,f){return d[x]-d[f]})}function Po(e){if(Z(e)===ht)return[];var t=Ze(e);return[zt(e),t,zt(t)]}function Oo(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,i=n===void 0?!0:n,p=r.altAxis,s=p===void 0?!0:p,a=r.fallbackPlacements,c=r.padding,l=r.boundary,v=r.rootBoundary,w=r.altBoundary,d=r.flipVariations,x=d===void 0?!0:d,f=r.allowedAutoPlacements,g=t.options.placement,O=Z(g),E=O===g,P=a||(E||!x?[Ze(g)]:Po(g)),u=[g].concat(P).reduce(function(te,X){return te.concat(Z(X)===ht?xo(t,{placement:X,boundary:l,rootBoundary:v,padding:c,flipVariations:x,allowedAutoPlacements:f}):X)},[]),m=t.rects.reference,b=t.rects.popper,y=new Map,C=!0,B=u[0],R=0;R<u.length;R++){var M=u[R],k=Z(M),L=Ee(M)===Pe,j=[F,z].indexOf(k)>=0,A=j?"width":"height",D=Ne(t,{placement:M,boundary:l,rootBoundary:v,altBoundary:w,padding:c}),$=j?L?q:H:L?z:F;m[A]>b[A]&&($=Ze($));var W=Ze($),S=[];if(i&&S.push(D[k]<=0),s&&S.push(D[$]<=0,D[W]<=0),S.every(function(te){return te})){B=M,C=!1;break}y.set(M,S)}if(C)for(var N=x?3:1,Re=function(X){var ue=u.find(function(fe){var Y=y.get(fe);if(Y)return Y.slice(0,X).every(function(_){return _})});if(ue)return B=ue,"break"},ie=N;ie>0;ie--){var ye=Re(ie);if(ye==="break")break}t.placement!==B&&(t.modifiersData[o]._skip=!0,t.placement=B,t.reset=!0)}}const To={name:"flip",enabled:!0,phase:"main",fn:Oo,requiresIfExists:["offset"],data:{_skip:!1}};function Xt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Yt(e){return[F,q,z,H].some(function(t){return e[t]>=0})}function Eo(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,p=Ne(t,{elementContext:"reference"}),s=Ne(t,{altBoundary:!0}),a=Xt(p,o),c=Xt(s,n,i),l=Yt(a),v=Yt(c);t.modifiersData[r]={referenceClippingOffsets:a,popperEscapeOffsets:c,isReferenceHidden:l,hasPopperEscaped:v},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":v})}const Ro={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Eo};function Co(e,t,r){var o=Z(e),n=[H,F].indexOf(o)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,p=i[0],s=i[1];return p=p||0,s=(s||0)*n,[H,q].indexOf(o)>=0?{x:s,y:p}:{x:p,y:s}}function Ao(e){var t=e.state,r=e.options,o=e.name,n=r.offset,i=n===void 0?[0,0]:n,p=ir.reduce(function(l,v){return l[v]=Co(v,t.rects,i),l},{}),s=p[t.placement],a=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=p}const $o={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Ao};function Mo(e){var t=e.state,r=e.name;t.modifiersData[r]=fr({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Do={name:"popperOffsets",enabled:!0,phase:"read",fn:Mo,data:{}};function Bo(e){return e==="x"?"y":"x"}function So(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,i=n===void 0?!0:n,p=r.altAxis,s=p===void 0?!1:p,a=r.boundary,c=r.rootBoundary,l=r.altBoundary,v=r.padding,w=r.tether,d=w===void 0?!0:w,x=r.tetherOffset,f=x===void 0?0:x,g=Ne(t,{boundary:a,rootBoundary:c,padding:v,altBoundary:l}),O=Z(t.placement),E=Ee(t.placement),P=!E,u=bt(O),m=Bo(u),b=t.modifiersData.popperOffsets,y=t.rects.reference,C=t.rects.popper,B=typeof f=="function"?f(Object.assign({},t.rects,{placement:t.placement})):f,R=typeof B=="number"?{mainAxis:B,altAxis:B}:Object.assign({mainAxis:0,altAxis:0},B),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,k={x:0,y:0};if(b){if(i){var L,j=u==="y"?F:H,A=u==="y"?z:q,D=u==="y"?"height":"width",$=b[u],W=$+g[j],S=$-g[A],N=d?-C[D]/2:0,Re=E===Pe?y[D]:C[D],ie=E===Pe?-C[D]:-y[D],ye=t.elements.arrow,te=d&&ye?yt(ye):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:pr(),ue=X[j],fe=X[A],Y=Le(0,y[D],te[D]),_=P?y[D]/2-N-Y-ue-R.mainAxis:Re-Y-ue-R.mainAxis,re=P?-y[D]/2+N+Y+fe+R.mainAxis:ie+Y+fe+R.mainAxis,ae=t.elements.arrow&&He(t.elements.arrow),se=ae?u==="y"?ae.clientTop||0:ae.clientLeft||0:0,Ie=(L=M==null?void 0:M[u])!=null?L:0,nt=$+_-Ie-se,Ve=$+re-Ie,be=Le(d?tt(W,nt):W,$,d?he(S,Ve):S);b[u]=be,k[u]=be-$}if(s){var Ue,de=u==="x"?F:H,ze=u==="x"?z:q,G=b[m],we=m==="y"?"height":"width",ve=G+g[de],xe=G-g[ze],pe=[F,H].indexOf(O)!==-1,me=(Ue=M==null?void 0:M[m])!=null?Ue:0,J=pe?ve:G-y[we]-C[we]-me+R.altAxis,Ce=pe?G+y[we]+C[we]-me-R.altAxis:xe,qe=d&&pe?ro(J,G,Ce):Le(d?J:ve,G,d?Ce:xe);b[m]=qe,k[m]=qe-G}t.modifiersData[o]=k}}const Lo={name:"preventOverflow",enabled:!0,phase:"main",fn:So,requiresIfExists:["offset"]};function ko(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function jo(e){return e===V(e)||!U(e)?wt(e):ko(e)}function Wo(e){var t=e.getBoundingClientRect(),r=Oe(t.width)/e.offsetWidth||1,o=Oe(t.height)/e.offsetHeight||1;return r!==1||o!==1}function No(e,t,r){r===void 0&&(r=!1);var o=U(t),n=U(t)&&Wo(t),i=ce(t),p=Te(e,n,r),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(o||!o&&!r)&&((ee(t)!=="body"||Pt(i))&&(s=jo(t)),U(t)?(a=Te(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):i&&(a.x=xt(i))),{x:p.left+s.scrollLeft-a.x,y:p.top+s.scrollTop-a.y,width:p.width,height:p.height}}function Fo(e){var t=new Map,r=new Set,o=[];e.forEach(function(i){t.set(i.name,i)});function n(i){r.add(i.name);var p=[].concat(i.requires||[],i.requiresIfExists||[]);p.forEach(function(s){if(!r.has(s)){var a=t.get(s);a&&n(a)}}),o.push(i)}return e.forEach(function(i){r.has(i.name)||n(i)}),o}function Ho(e){var t=Fo(e);return Kr.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function Io(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Vo(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var _t={placement:"bottom",modifiers:[],strategy:"absolute"};function Gt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Uo(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,i=n===void 0?_t:n;return function(s,a,c){c===void 0&&(c=i);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},_t,i),modifiersData:{},elements:{reference:s,popper:a},attributes:{},styles:{}},v=[],w=!1,d={state:l,setOptions:function(O){var E=typeof O=="function"?O(l.options):O;f(),l.options=Object.assign({},i,l.options,E),l.scrollParents={reference:ge(s)?ke(s):s.contextElement?ke(s.contextElement):[],popper:ke(a)};var P=Ho(Vo([].concat(o,l.options.modifiers)));return l.orderedModifiers=P.filter(function(u){return u.enabled}),x(),d.update()},forceUpdate:function(){if(!w){var O=l.elements,E=O.reference,P=O.popper;if(Gt(E,P)){l.rects={reference:No(E,He(P),l.options.strategy==="fixed"),popper:yt(P)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(R){return l.modifiersData[R.name]=Object.assign({},R.data)});for(var u=0;u<l.orderedModifiers.length;u++){if(l.reset===!0){l.reset=!1,u=-1;continue}var m=l.orderedModifiers[u],b=m.fn,y=m.options,C=y===void 0?{}:y,B=m.name;typeof b=="function"&&(l=b({state:l,options:C,name:B,instance:d})||l)}}}},update:Io(function(){return new Promise(function(g){d.forceUpdate(),g(l)})}),destroy:function(){f(),w=!0}};if(!Gt(s,a))return d;d.setOptions(c).then(function(g){!w&&c.onFirstUpdate&&c.onFirstUpdate(g)});function x(){l.orderedModifiers.forEach(function(g){var O=g.name,E=g.options,P=E===void 0?{}:E,u=g.effect;if(typeof u=="function"){var m=u({state:l,name:O,instance:d,options:P}),b=function(){};v.push(m||b)}})}function f(){v.forEach(function(g){return g()}),v=[]}return d}}var zo=[fo,Do,co,Zr,$o,To,Lo,ao,Ro],qo=Uo({defaultModifiers:zo});function Xo(e){return typeof e=="function"?e():e}const Yo=h.forwardRef(function(t,r){const{children:o,container:n,disablePortal:i=!1}=t,[p,s]=h.useState(null),a=je(h.isValidElement(o)?o.ref:null,r);if(et(()=>{i||s(Xo(n)||document.body)},[n,i]),et(()=>{if(p&&!i)return Ft(r,p),()=>{Ft(r,null)}},[r,p,i]),i){if(h.isValidElement(o)){const c={ref:a};return h.cloneElement(o,c)}return Q(h.Fragment,{children:o})}return Q(h.Fragment,{children:p&&Cr.createPortal(o,p)})}),_o=Yo;function Go(e){return Jt("MuiPopper",e)}tr("MuiPopper",["root"]);function Ko(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function vt(e){return typeof e=="function"?e():e}function Jo(e){return e.nodeType!==void 0}const Qo=()=>Qt({root:["root"]},Nr(Go)),Zo={},en=h.forwardRef(function(t,r){var o;const{anchorEl:n,children:i,direction:p,disablePortal:s,modifiers:a,open:c,placement:l,popperOptions:v,popperRef:w,slotProps:d={},slots:x={},TransitionProps:f,ownerState:g,...O}=t,E=h.useRef(null),P=je(E,r),u=h.useRef(null),m=je(u,w),b=h.useRef(m);et(()=>{b.current=m},[m]),h.useImperativeHandle(w,()=>u.current,[]);const y=Ko(l,p),[C,B]=h.useState(y),[R,M]=h.useState(vt(n));h.useEffect(()=>{u.current&&u.current.forceUpdate()}),h.useEffect(()=>{n&&M(vt(n))},[n]),et(()=>{if(!R||!c)return;const D=S=>{B(S.placement)};let $=[{name:"preventOverflow",options:{altBoundary:s}},{name:"flip",options:{altBoundary:s}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:S})=>{D(S)}}];a!=null&&($=$.concat(a)),v&&v.modifiers!=null&&($=$.concat(v.modifiers));const W=qo(R,E.current,{placement:y,...v,modifiers:$});return b.current(W),()=>{W.destroy(),b.current(null)}},[R,s,a,c,v,y]);const k={placement:C};f!==null&&(k.TransitionProps=f);const L=Qo(),j=(o=x.root)!=null?o:"div",A=Ar({elementType:j,externalSlotProps:d.root,externalForwardedProps:O,additionalProps:{role:"tooltip",ref:P},ownerState:t,className:L.root});return Q(j,{...A,children:typeof i=="function"?i(k):i})}),tn=h.forwardRef(function(t,r){const{anchorEl:o,children:n,container:i,direction:p="ltr",disablePortal:s=!1,keepMounted:a=!1,modifiers:c,open:l,placement:v="bottom",popperOptions:w=Zo,popperRef:d,style:x,transition:f=!1,slotProps:g={},slots:O={},...E}=t,[P,u]=h.useState(!0),m=()=>{u(!1)},b=()=>{u(!0)};if(!a&&!l&&(!f||P))return null;let y;if(i)y=i;else if(o){const R=vt(o);y=R&&Jo(R)?Nt(R).body:Nt(null).body}const C=!l&&a&&(!f||P)?"none":void 0,B=f?{in:l,onEnter:m,onExited:b}:void 0;return Q(_o,{disablePortal:s,container:y,children:Q(en,{anchorEl:o,direction:p,disablePortal:s,modifiers:c,ref:r,open:f?!P:l,placement:v,popperOptions:w,popperRef:d,slotProps:g,slots:O,...E,style:{position:"fixed",top:0,left:0,display:C,...x},TransitionProps:B,children:n})})}),rn=tn,on=rt(rn,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),nn=h.forwardRef(function(t,r){var o;const n=$r(),i=er({props:t,name:"MuiPopper"}),{anchorEl:p,component:s,components:a,componentsProps:c,container:l,disablePortal:v,keepMounted:w,modifiers:d,open:x,placement:f,popperOptions:g,popperRef:O,transition:E,slots:P,slotProps:u,...m}=i,b=(o=P==null?void 0:P.root)!=null?o:a==null?void 0:a.Root,y={anchorEl:p,container:l,disablePortal:v,keepMounted:w,modifiers:d,open:x,placement:f,popperOptions:g,popperRef:O,transition:E,...m};return Q(on,{as:s,direction:n==null?void 0:n.direction,slots:{root:b},slotProps:u??c,...y,ref:r})}),dr=nn;function mt(e){return`scale(${e}, ${e**2})`}const an={entering:{opacity:1,transform:mt(1)},entered:{opacity:1,transform:"none"}},ct=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),vr=h.forwardRef(function(t,r){const{addEndListener:o,appear:n=!0,children:i,easing:p,in:s,onEnter:a,onEntered:c,onEntering:l,onExit:v,onExited:w,onExiting:d,style:x,timeout:f="auto",TransitionComponent:g=Dr,...O}=t,E=h.useRef(),P=h.useRef(),u=Zt(),m=h.useRef(null),b=je(m,i.ref,r),y=A=>D=>{if(A){const $=m.current;D===void 0?A($):A($,D)}},C=y(l),B=y((A,D)=>{Br(A);const{duration:$,delay:W,easing:S}=Ht({style:x,timeout:f,easing:p},{mode:"enter"});let N;f==="auto"?(N=u.transitions.getAutoHeightDuration(A.clientHeight),P.current=N):N=$,A.style.transition=[u.transitions.create("opacity",{duration:N,delay:W}),u.transitions.create("transform",{duration:ct?N:N*.666,delay:W,easing:S})].join(","),a&&a(A,D)}),R=y(c),M=y(d),k=y(A=>{const{duration:D,delay:$,easing:W}=Ht({style:x,timeout:f,easing:p},{mode:"exit"});let S;f==="auto"?(S=u.transitions.getAutoHeightDuration(A.clientHeight),P.current=S):S=D,A.style.transition=[u.transitions.create("opacity",{duration:S,delay:$}),u.transitions.create("transform",{duration:ct?S:S*.666,delay:ct?$:$||S*.333,easing:W})].join(","),A.style.opacity=0,A.style.transform=mt(.75),v&&v(A)}),L=y(w),j=A=>{f==="auto"&&(E.current=setTimeout(A,P.current||0)),o&&o(m.current,A)};return h.useEffect(()=>()=>{clearTimeout(E.current)},[]),Q(g,{appear:n,in:s,nodeRef:m,onEnter:B,onEntered:R,onEntering:C,onExit:k,onExited:L,onExiting:M,addEndListener:j,timeout:f==="auto"?null:f,...O,children:(A,D)=>h.cloneElement(i,{style:{opacity:0,transform:mt(.75),visibility:A==="exited"&&!s?"hidden":void 0,...an[A],...x,...i.props.style},ref:b,...D})})});vr.muiSupportAuto=!0;const Kt=vr;function sn(e){return Jt("MuiTooltip",e)}const pn=tr("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),le=pn;function ln(e){return Math.round(e*1e5)/1e5}const cn=e=>{const{classes:t,disableInteractive:r,arrow:o,touch:n,placement:i}=e,p={popper:["popper",!r&&"popperInteractive",o&&"popperArrow"],tooltip:["tooltip",o&&"tooltipArrow",n&&"touch",`tooltipPlacement${rr(i.split("-")[0])}`],arrow:["arrow"]};return Qt(p,sn,t)},un=rt(dr,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.popper,!r.disableInteractive&&t.popperInteractive,r.arrow&&t.popperArrow,!r.open&&t.popperClose]}})(({theme:e,ownerState:t,open:r})=>({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none",...!t.disableInteractive&&{pointerEvents:"auto"},...!r&&{pointerEvents:"none"},...t.arrow&&{[`&[data-popper-placement*="bottom"] .${le.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${le.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${le.arrow}`]:{...t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}},[`&[data-popper-placement*="left"] .${le.arrow}`]:{...t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}}}})),fn=rt("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.tooltip,r.touch&&t.touch,r.arrow&&t.tooltipArrow,t[`tooltipPlacement${rr(r.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:or(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium,...t.arrow&&{position:"relative",margin:0},...t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${ln(16/14)}em`,fontWeight:e.typography.fontWeightRegular},[`.${le.popper}[data-popper-placement*="left"] &`]:{transformOrigin:"right center",...t.isRtl?{marginLeft:"14px",...t.touch&&{marginLeft:"24px"}}:{marginRight:"14px",...t.touch&&{marginRight:"24px"}}},[`.${le.popper}[data-popper-placement*="right"] &`]:{transformOrigin:"left center",...t.isRtl?{marginRight:"14px",...t.touch&&{marginRight:"24px"}}:{marginLeft:"14px",...t.touch&&{marginLeft:"24px"}}},[`.${le.popper}[data-popper-placement*="top"] &`]:{transformOrigin:"center bottom",marginBottom:"14px",...t.touch&&{marginBottom:"24px"}},[`.${le.popper}[data-popper-placement*="bottom"] &`]:{transformOrigin:"center top",marginTop:"14px",...t.touch&&{marginTop:"24px"}}})),dn=rt("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:or(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let Je=!1,ut=null,Se={x:0,y:0};function Qe(e,t){return r=>{t&&t(r),e(r)}}const vn=h.forwardRef(function(t,r){var o,n,i,p,s,a,c,l,v,w,d,x,f,g,O,E,P,u,m;const b=er({props:t,name:"MuiTooltip"}),{arrow:y=!1,children:C,classes:B,components:R={},componentsProps:M={},describeChild:k=!1,disableFocusListener:L=!1,disableHoverListener:j=!1,disableInteractive:A=!1,disableTouchListener:D=!1,enterDelay:$=100,enterNextDelay:W=0,enterTouchDelay:S=700,followCursor:N=!1,id:Re,leaveDelay:ie=0,leaveTouchDelay:ye=1500,onClose:te,onOpen:X,open:ue,placement:fe="bottom",PopperComponent:Y,PopperProps:_={},slotProps:re={},slots:ae={},title:se,TransitionComponent:Ie=Kt,TransitionProps:nt,...Ve}=b,be=Zt(),Ue=be.direction==="rtl",[de,ze]=h.useState(),[G,we]=h.useState(null),ve=h.useRef(!1),xe=A||N,pe=h.useRef(),me=h.useRef(),J=h.useRef(),Ce=h.useRef(),[qe,Ot]=Sr({controlled:ue,default:!1,name:"Tooltip",state:"open"});let oe=qe;const it=Lr(Re),Ae=h.useRef(),Xe=h.useCallback(()=>{Ae.current!==void 0&&(document.body.style.WebkitUserSelect=Ae.current,Ae.current=void 0),clearTimeout(Ce.current)},[]);h.useEffect(()=>()=>{clearTimeout(pe.current),clearTimeout(me.current),clearTimeout(J.current),Xe()},[Xe]);const Tt=T=>{clearTimeout(ut),Je=!0,Ot(!0),X&&!oe&&X(T)},Ye=Mr(T=>{clearTimeout(ut),ut=setTimeout(()=>{Je=!1},800+ie),Ot(!1),te&&oe&&te(T),clearTimeout(pe.current),pe.current=setTimeout(()=>{ve.current=!1},be.transitions.duration.shortest)}),at=T=>{ve.current&&T.type!=="touchstart"||(de&&de.removeAttribute("title"),clearTimeout(me.current),clearTimeout(J.current),$||Je&&W?me.current=setTimeout(()=>{Tt(T)},Je?W:$):Tt(T))},Et=T=>{clearTimeout(me.current),clearTimeout(J.current),J.current=setTimeout(()=>{Ye(T)},ie)},{isFocusVisibleRef:Rt,onBlur:mr,onFocus:hr,ref:gr}=kr(),[,Ct]=h.useState(!1),At=T=>{mr(T),Rt.current===!1&&(Ct(!1),Et(T))},$t=T=>{de||ze(T.currentTarget),hr(T),Rt.current===!0&&(Ct(!0),at(T))},Mt=T=>{ve.current=!0;const I=C.props;I.onTouchStart&&I.onTouchStart(T)},Dt=at,Bt=Et,yr=T=>{Mt(T),clearTimeout(J.current),clearTimeout(pe.current),Xe(),Ae.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Ce.current=setTimeout(()=>{document.body.style.WebkitUserSelect=Ae.current,at(T)},S)},br=T=>{C.props.onTouchEnd&&C.props.onTouchEnd(T),Xe(),clearTimeout(J.current),J.current=setTimeout(()=>{Ye(T)},ye)};h.useEffect(()=>{if(!oe)return;function T(I){(I.key==="Escape"||I.key==="Esc")&&Ye(I)}return document.addEventListener("keydown",T),()=>{document.removeEventListener("keydown",T)}},[Ye,oe]);const wr=je(C.ref,gr,ze,r);!se&&se!==0&&(oe=!1);const st=h.useRef(),xr=T=>{const I=C.props;I.onMouseMove&&I.onMouseMove(T),Se={x:T.clientX,y:T.clientY},st.current&&st.current.update()},$e={},pt=typeof se=="string";k?($e.title=!oe&&pt&&!j?se:null,$e["aria-describedby"]=oe?it:null):($e["aria-label"]=pt?se:null,$e["aria-labelledby"]=oe&&!pt?it:null);const K={...$e,...Ve,...C.props,className:_e(Ve.className,C.props.className),onTouchStart:Mt,ref:wr,...N?{onMouseMove:xr}:{}},Me={};D||(K.onTouchStart=yr,K.onTouchEnd=br),j||(K.onMouseOver=Qe(Dt,K.onMouseOver),K.onMouseLeave=Qe(Bt,K.onMouseLeave),xe||(Me.onMouseOver=Dt,Me.onMouseLeave=Bt)),L||(K.onFocus=Qe($t,K.onFocus),K.onBlur=Qe(At,K.onBlur),xe||(Me.onFocus=$t,Me.onBlur=At));const Pr=h.useMemo(()=>{var T;let I=[{name:"arrow",enabled:!!G,options:{element:G,padding:4}}];return(T=_.popperOptions)!=null&&T.modifiers&&(I=I.concat(_.popperOptions.modifiers)),{..._.popperOptions,modifiers:I}},[G,_]),De={...b,isRtl:Ue,arrow:y,disableInteractive:xe,placement:fe,PopperComponentProp:Y,touch:ve.current},lt=cn(De),St=(o=(n=ae.popper)!=null?n:R.Popper)!=null?o:un,Lt=(i=(p=(s=ae.transition)!=null?s:R.Transition)!=null?p:Ie)!=null?i:Kt,kt=(a=(c=ae.tooltip)!=null?c:R.Tooltip)!=null?a:fn,jt=(l=(v=ae.arrow)!=null?v:R.Arrow)!=null?l:dn,Or=Ge(St,{..._,...(w=re.popper)!=null?w:M.popper,className:_e(lt.popper,_==null?void 0:_.className,(d=(x=re.popper)!=null?x:M.popper)==null?void 0:d.className)},De),Tr=Ge(Lt,{...nt,...(f=re.transition)!=null?f:M.transition},De),Er=Ge(kt,{...(g=re.tooltip)!=null?g:M.tooltip,className:_e(lt.tooltip,(O=(E=re.tooltip)!=null?E:M.tooltip)==null?void 0:O.className)},De),Rr=Ge(jt,{...(P=re.arrow)!=null?P:M.arrow,className:_e(lt.arrow,(u=(m=re.arrow)!=null?m:M.arrow)==null?void 0:u.className)},De);return Wt(h.Fragment,{children:[h.cloneElement(C,K),Q(St,{as:Y??dr,placement:fe,anchorEl:N?{getBoundingClientRect:()=>({top:Se.y,left:Se.x,right:Se.x,bottom:Se.y,width:0,height:0})}:de,popperRef:st,open:de?oe:!1,id:it,transition:!0,...Me,...Or,popperOptions:Pr,children:({TransitionProps:T})=>Q(Lt,{timeout:be.transitions.duration.shorter,...T,...Tr,children:Wt(kt,{...Er,children:[se,y?Q(jt,{...Rr,ref:we}):null]})})})]})}),Sn=vn;export{Kt as G,Sn as M,_o as P,dr as a,Nr as u};
//# sourceMappingURL=Tooltip-d34c04c4.js.map
