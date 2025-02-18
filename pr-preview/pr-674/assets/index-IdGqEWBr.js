import{a as ot,c as ar,g as it}from"./_commonjsHelpers-BosuxZz1.js";var J=TypeError;const ft={},lt=Object.freeze(Object.defineProperty({__proto__:null,default:ft},Symbol.toStringTag,{value:"Module"})),ut=ot(lt);var Ye=typeof Map=="function"&&Map.prototype,Ee=Object.getOwnPropertyDescriptor&&Ye?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,de=Ye&&Ee&&typeof Ee.get=="function"?Ee.get:null,or=Ye&&Map.prototype.forEach,Xe=typeof Set=="function"&&Set.prototype,Pe=Object.getOwnPropertyDescriptor&&Xe?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,ve=Xe&&Pe&&typeof Pe.get=="function"?Pe.get:null,ir=Xe&&Set.prototype.forEach,ct=typeof WeakMap=="function"&&WeakMap.prototype,Z=ct?WeakMap.prototype.has:null,pt=typeof WeakSet=="function"&&WeakSet.prototype,ee=pt?WeakSet.prototype.has:null,yt=typeof WeakRef=="function"&&WeakRef.prototype,fr=yt?WeakRef.prototype.deref:null,st=Boolean.prototype.valueOf,dt=Object.prototype.toString,vt=Function.prototype.toString,ht=String.prototype.match,Ze=String.prototype.slice,M=String.prototype.replace,mt=String.prototype.toUpperCase,lr=String.prototype.toLowerCase,Mr=RegExp.prototype.test,ur=Array.prototype.concat,$=Array.prototype.join,gt=Array.prototype.slice,cr=Math.floor,ze=typeof BigInt=="function"?BigInt.prototype.valueOf:null,$e=Object.getOwnPropertySymbols,Ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,Q=typeof Symbol=="function"&&typeof Symbol.iterator=="object",re=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===Q||!0)?Symbol.toStringTag:null,Nr=Object.prototype.propertyIsEnumerable,pr=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(r){return r.__proto__}:null);function yr(r,e){if(r===1/0||r===-1/0||r!==r||r&&r>-1e3&&r<1e3||Mr.call(/e/,e))return e;var n=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof r=="number"){var t=r<0?-cr(-r):cr(r);if(t!==r){var a=String(t),o=Ze.call(e,a.length+1);return M.call(a,n,"$&_")+"."+M.call(M.call(o,/([0-9]{3})/g,"$&_"),/_$/,"")}}return M.call(e,n,"$&_")}var Qe=ut,sr=Qe.custom,dr=Br(sr)?sr:null,Tr={__proto__:null,double:'"',single:"'"},St={__proto__:null,double:/(["\\])/g,single:/(['\\])/g},ge=function r(e,n,t,a){var o=n||{};if(x(o,"quoteStyle")&&!x(Tr,o.quoteStyle))throw new TypeError('option "quoteStyle" must be "single" or "double"');if(x(o,"maxStringLength")&&(typeof o.maxStringLength=="number"?o.maxStringLength<0&&o.maxStringLength!==1/0:o.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var i=x(o,"customInspect")?o.customInspect:!0;if(typeof i!="boolean"&&i!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(x(o,"indent")&&o.indent!==null&&o.indent!=="	"&&!(parseInt(o.indent,10)===o.indent&&o.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(x(o,"numericSeparator")&&typeof o.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var u=o.numericSeparator;if(typeof e>"u")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return Wr(e,o);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var l=String(e);return u?yr(e,l):l}if(typeof e=="bigint"){var c=String(e)+"n";return u?yr(e,c):c}var p=typeof o.depth>"u"?5:o.depth;if(typeof t>"u"&&(t=0),t>=p&&p>0&&typeof e=="object")return Ve(e)?"[Array]":"[Object]";var y=Bt(o,t);if(typeof a>"u")a=[];else if(Lr(a,e)>=0)return"[Circular]";function f(O,D,R){if(D&&(a=gt.call(a),a.push(D)),R){var Y={depth:o.depth};return x(o,"quoteStyle")&&(Y.quoteStyle=o.quoteStyle),r(O,Y,t+1,a)}return r(O,o,t+1,a)}if(typeof e=="function"&&!vr(e)){var h=xt(e),v=ue(e,f);return"[Function"+(h?": "+h:" (anonymous)")+"]"+(v.length>0?" { "+$.call(v,", ")+" }":"")}if(Br(e)){var g=Q?M.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):Ke.call(e);return typeof e=="object"&&!Q?X(g):g}if(Nt(e)){for(var b="<"+lr.call(String(e.nodeName)),A=e.attributes||[],I=0;I<A.length;I++)b+=" "+A[I].name+"="+Cr(wt(A[I].value),"double",o);return b+=">",e.childNodes&&e.childNodes.length&&(b+="..."),b+="</"+lr.call(String(e.nodeName))+">",b}if(Ve(e)){if(e.length===0)return"[]";var d=ue(e,f);return y&&!Ct(d)?"["+Je(d,y)+"]":"[ "+$.call(d,", ")+" ]"}if(At(e)){var _=ue(e,f);return!("cause"in Error.prototype)&&"cause"in e&&!Nr.call(e,"cause")?"{ ["+String(e)+"] "+$.call(ur.call("[cause]: "+f(e.cause),_),", ")+" }":_.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+$.call(_,", ")+" }"}if(typeof e=="object"&&i){if(dr&&typeof e[dr]=="function"&&Qe)return Qe(e,{depth:p-t});if(i!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(It(e)){var T=[];return or&&or.call(e,function(O,D){T.push(f(D,e,!0)+" => "+f(O,e))}),hr("Map",de.call(e),T,y)}if(Dt(e)){var j=[];return ir&&ir.call(e,function(O){j.push(f(O,e))}),hr("Set",ve.call(e),j,y)}if(_t(e))return Re("WeakMap");if(Mt(e))return Re("WeakSet");if(Ft(e))return Re("WeakRef");if(Et(e))return X(f(Number(e)));if($t(e))return X(f(ze.call(e)));if(Pt(e))return X(st.call(e));if(Ot(e))return X(f(String(e)));if(typeof window<"u"&&e===window)return"{ [object Window] }";if(typeof globalThis<"u"&&e===globalThis||typeof ar<"u"&&e===ar)return"{ [object globalThis] }";if(!bt(e)&&!vr(e)){var q=ue(e,f),fe=pr?pr(e)===Object.prototype:e instanceof Object||e.constructor===Object,C=e instanceof Object?"":"null prototype",F=!fe&&re&&Object(e)===e&&re in e?Ze.call(N(e),8,-1):C?"Object":"",le=fe||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",G=le+(F||C?"["+$.call(ur.call([],F||[],C||[]),": ")+"] ":"");return q.length===0?G+"{}":y?G+"{"+Je(q,y)+"}":G+"{ "+$.call(q,", ")+" }"}return String(e)};function Cr(r,e,n){var t=n.quoteStyle||e,a=Tr[t];return a+r+a}function wt(r){return M.call(String(r),/"/g,"&quot;")}function U(r){return!re||!(typeof r=="object"&&(re in r||typeof r[re]<"u"))}function Ve(r){return N(r)==="[object Array]"&&U(r)}function bt(r){return N(r)==="[object Date]"&&U(r)}function vr(r){return N(r)==="[object RegExp]"&&U(r)}function At(r){return N(r)==="[object Error]"&&U(r)}function Ot(r){return N(r)==="[object String]"&&U(r)}function Et(r){return N(r)==="[object Number]"&&U(r)}function Pt(r){return N(r)==="[object Boolean]"&&U(r)}function Br(r){if(Q)return r&&typeof r=="object"&&r instanceof Symbol;if(typeof r=="symbol")return!0;if(!r||typeof r!="object"||!Ke)return!1;try{return Ke.call(r),!0}catch{}return!1}function $t(r){if(!r||typeof r!="object"||!ze)return!1;try{return ze.call(r),!0}catch{}return!1}var Rt=Object.prototype.hasOwnProperty||function(r){return r in this};function x(r,e){return Rt.call(r,e)}function N(r){return dt.call(r)}function xt(r){if(r.name)return r.name;var e=ht.call(vt.call(r),/^function\s*([\w$]+)/);return e?e[1]:null}function Lr(r,e){if(r.indexOf)return r.indexOf(e);for(var n=0,t=r.length;n<t;n++)if(r[n]===e)return n;return-1}function It(r){if(!de||!r||typeof r!="object")return!1;try{de.call(r);try{ve.call(r)}catch{return!0}return r instanceof Map}catch{}return!1}function _t(r){if(!Z||!r||typeof r!="object")return!1;try{Z.call(r,Z);try{ee.call(r,ee)}catch{return!0}return r instanceof WeakMap}catch{}return!1}function Ft(r){if(!fr||!r||typeof r!="object")return!1;try{return fr.call(r),!0}catch{}return!1}function Dt(r){if(!ve||!r||typeof r!="object")return!1;try{ve.call(r);try{de.call(r)}catch{return!0}return r instanceof Set}catch{}return!1}function Mt(r){if(!ee||!r||typeof r!="object")return!1;try{ee.call(r,ee);try{Z.call(r,Z)}catch{return!0}return r instanceof WeakSet}catch{}return!1}function Nt(r){return!r||typeof r!="object"?!1:typeof HTMLElement<"u"&&r instanceof HTMLElement?!0:typeof r.nodeName=="string"&&typeof r.getAttribute=="function"}function Wr(r,e){if(r.length>e.maxStringLength){var n=r.length-e.maxStringLength,t="... "+n+" more character"+(n>1?"s":"");return Wr(Ze.call(r,0,e.maxStringLength),e)+t}var a=St[e.quoteStyle||"single"];a.lastIndex=0;var o=M.call(M.call(r,a,"\\$1"),/[\x00-\x1f]/g,Tt);return Cr(o,"single",e)}function Tt(r){var e=r.charCodeAt(0),n={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return n?"\\"+n:"\\x"+(e<16?"0":"")+mt.call(e.toString(16))}function X(r){return"Object("+r+")"}function Re(r){return r+" { ? }"}function hr(r,e,n,t){var a=t?Je(n,t):$.call(n,", ");return r+" ("+e+") {"+a+"}"}function Ct(r){for(var e=0;e<r.length;e++)if(Lr(r[e],`
`)>=0)return!1;return!0}function Bt(r,e){var n;if(r.indent==="	")n="	";else if(typeof r.indent=="number"&&r.indent>0)n=$.call(Array(r.indent+1)," ");else return null;return{base:n,prev:$.call(Array(e+1),n)}}function Je(r,e){if(r.length===0)return"";var n=`
`+e.prev+e.base;return n+$.call(r,","+n)+`
`+e.prev}function ue(r,e){var n=Ve(r),t=[];if(n){t.length=r.length;for(var a=0;a<r.length;a++)t[a]=x(r,a)?e(r[a],r):""}var o=typeof $e=="function"?$e(r):[],i;if(Q){i={};for(var u=0;u<o.length;u++)i["$"+o[u]]=o[u]}for(var l in r)x(r,l)&&(n&&String(Number(l))===l&&l<r.length||Q&&i["$"+l]instanceof Symbol||(Mr.call(/[^\w$]/,l)?t.push(e(l,r)+": "+e(r[l],r)):t.push(l+": "+e(r[l],r))));if(typeof $e=="function")for(var c=0;c<o.length;c++)Nr.call(r,o[c])&&t.push("["+e(o[c])+"]: "+e(r[o[c]],r));return t}var Lt=ge,Wt=J,Se=function(r,e,n){for(var t=r,a;(a=t.next)!=null;t=a)if(a.key===e)return t.next=a.next,n||(a.next=r.next,r.next=a),a},Ut=function(r,e){if(r){var n=Se(r,e);return n&&n.value}},qt=function(r,e,n){var t=Se(r,e);t?t.value=n:r.next={key:e,next:r.next,value:n}},Gt=function(r,e){return r?!!Se(r,e):!1},kt=function(r,e){if(r)return Se(r,e,!0)},Ht=function(){var e,n={assert:function(t){if(!n.has(t))throw new Wt("Side channel does not contain "+Lt(t))},delete:function(t){var a=e&&e.next,o=kt(e,t);return o&&a&&a===o&&(e=void 0),!!o},get:function(t){return Ut(e,t)},has:function(t){return Gt(e,t)},set:function(t,a){e||(e={next:void 0}),qt(e,t,a)}};return n},Ur=Object,zt=Error,Kt=EvalError,Qt=RangeError,Vt=ReferenceError,Jt=SyntaxError,jt=URIError,Yt=Math.abs,Xt=Math.floor,Zt=Math.max,en=Math.min,rn=Math.pow,tn=Math.round,nn=Number.isNaN||function(e){return e!==e},an=nn,on=function(e){return an(e)||e===0?e:e<0?-1:1},fn=Object.getOwnPropertyDescriptor,pe=fn;if(pe)try{pe([],"length")}catch{pe=null}var qr=pe,ye=Object.defineProperty||!1;if(ye)try{ye({},"a",{value:1})}catch{ye=!1}var ln=ye,xe,mr;function un(){return mr||(mr=1,xe=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},n=Symbol("test"),t=Object(n);if(typeof n=="string"||Object.prototype.toString.call(n)!=="[object Symbol]"||Object.prototype.toString.call(t)!=="[object Symbol]")return!1;var a=42;e[n]=a;for(var o in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var i=Object.getOwnPropertySymbols(e);if(i.length!==1||i[0]!==n||!Object.prototype.propertyIsEnumerable.call(e,n))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var u=Object.getOwnPropertyDescriptor(e,n);if(u.value!==a||u.enumerable!==!0)return!1}return!0}),xe}var Ie,gr;function cn(){if(gr)return Ie;gr=1;var r=typeof Symbol<"u"&&Symbol,e=un();return Ie=function(){return typeof r!="function"||typeof Symbol!="function"||typeof r("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:e()},Ie}var _e,Sr;function Gr(){return Sr||(Sr=1,_e=typeof Reflect<"u"&&Reflect.getPrototypeOf||null),_e}var Fe,wr;function kr(){if(wr)return Fe;wr=1;var r=Ur;return Fe=r.getPrototypeOf||null,Fe}var De,br;function pn(){if(br)return De;br=1;var r="Function.prototype.bind called on incompatible ",e=Object.prototype.toString,n=Math.max,t="[object Function]",a=function(l,c){for(var p=[],y=0;y<l.length;y+=1)p[y]=l[y];for(var f=0;f<c.length;f+=1)p[f+l.length]=c[f];return p},o=function(l,c){for(var p=[],y=c,f=0;y<l.length;y+=1,f+=1)p[f]=l[y];return p},i=function(u,l){for(var c="",p=0;p<u.length;p+=1)c+=u[p],p+1<u.length&&(c+=l);return c};return De=function(l){var c=this;if(typeof c!="function"||e.apply(c)!==t)throw new TypeError(r+c);for(var p=o(arguments,1),y,f=function(){if(this instanceof y){var A=c.apply(this,a(p,arguments));return Object(A)===A?A:this}return c.apply(l,a(p,arguments))},h=n(0,c.length-p.length),v=[],g=0;g<h;g++)v[g]="$"+g;if(y=Function("binder","return function ("+i(v,",")+"){ return binder.apply(this,arguments); }")(f),c.prototype){var b=function(){};b.prototype=c.prototype,y.prototype=new b,b.prototype=null}return y},De}var Me,Ar;function we(){if(Ar)return Me;Ar=1;var r=pn();return Me=Function.prototype.bind||r,Me}var Ne,Or;function er(){return Or||(Or=1,Ne=Function.prototype.call),Ne}var Te,Er;function Hr(){return Er||(Er=1,Te=Function.prototype.apply),Te}var yn=typeof Reflect<"u"&&Reflect&&Reflect.apply,sn=we(),dn=Hr(),vn=er(),hn=yn,mn=hn||sn.call(vn,dn),gn=we(),Sn=J,wn=er(),bn=mn,zr=function(e){if(e.length<1||typeof e[0]!="function")throw new Sn("a function is required");return bn(gn,wn,e)},Ce,Pr;function An(){if(Pr)return Ce;Pr=1;var r=zr,e=qr,n;try{n=[].__proto__===Array.prototype}catch(i){if(!i||typeof i!="object"||!("code"in i)||i.code!=="ERR_PROTO_ACCESS")throw i}var t=!!n&&e&&e(Object.prototype,"__proto__"),a=Object,o=a.getPrototypeOf;return Ce=t&&typeof t.get=="function"?r([t.get]):typeof o=="function"?function(u){return o(u==null?u:a(u))}:!1,Ce}var Be,$r;function On(){if($r)return Be;$r=1;var r=Gr(),e=kr(),n=An();return Be=r?function(a){return r(a)}:e?function(a){if(!a||typeof a!="object"&&typeof a!="function")throw new TypeError("getProto: not an object");return e(a)}:n?function(a){return n(a)}:null,Be}var Le,Rr;function En(){if(Rr)return Le;Rr=1;var r=Function.prototype.call,e=Object.prototype.hasOwnProperty,n=we();return Le=n.call(r,e),Le}var s,Pn=Ur,$n=zt,Rn=Kt,xn=Qt,In=Vt,V=Jt,K=J,_n=jt,Fn=Yt,Dn=Xt,Mn=Zt,Nn=en,Tn=rn,Cn=tn,Bn=on,Kr=Function,We=function(r){try{return Kr('"use strict"; return ('+r+").constructor;")()}catch{}},ne=qr,Ln=ln,Ue=function(){throw new K},Wn=ne?function(){try{return arguments.callee,Ue}catch{try{return ne(arguments,"callee").get}catch{return Ue}}}():Ue,k=cn()(),w=On(),Un=kr(),qn=Gr(),Qr=Hr(),ae=er(),z={},Gn=typeof Uint8Array>"u"||!w?s:w(Uint8Array),L={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?s:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?s:ArrayBuffer,"%ArrayIteratorPrototype%":k&&w?w([][Symbol.iterator]()):s,"%AsyncFromSyncIteratorPrototype%":s,"%AsyncFunction%":z,"%AsyncGenerator%":z,"%AsyncGeneratorFunction%":z,"%AsyncIteratorPrototype%":z,"%Atomics%":typeof Atomics>"u"?s:Atomics,"%BigInt%":typeof BigInt>"u"?s:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?s:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?s:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?s:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":$n,"%eval%":eval,"%EvalError%":Rn,"%Float32Array%":typeof Float32Array>"u"?s:Float32Array,"%Float64Array%":typeof Float64Array>"u"?s:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?s:FinalizationRegistry,"%Function%":Kr,"%GeneratorFunction%":z,"%Int8Array%":typeof Int8Array>"u"?s:Int8Array,"%Int16Array%":typeof Int16Array>"u"?s:Int16Array,"%Int32Array%":typeof Int32Array>"u"?s:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":k&&w?w(w([][Symbol.iterator]())):s,"%JSON%":typeof JSON=="object"?JSON:s,"%Map%":typeof Map>"u"?s:Map,"%MapIteratorPrototype%":typeof Map>"u"||!k||!w?s:w(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Pn,"%Object.getOwnPropertyDescriptor%":ne,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?s:Promise,"%Proxy%":typeof Proxy>"u"?s:Proxy,"%RangeError%":xn,"%ReferenceError%":In,"%Reflect%":typeof Reflect>"u"?s:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?s:Set,"%SetIteratorPrototype%":typeof Set>"u"||!k||!w?s:w(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?s:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":k&&w?w(""[Symbol.iterator]()):s,"%Symbol%":k?Symbol:s,"%SyntaxError%":V,"%ThrowTypeError%":Wn,"%TypedArray%":Gn,"%TypeError%":K,"%Uint8Array%":typeof Uint8Array>"u"?s:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?s:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?s:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?s:Uint32Array,"%URIError%":_n,"%WeakMap%":typeof WeakMap>"u"?s:WeakMap,"%WeakRef%":typeof WeakRef>"u"?s:WeakRef,"%WeakSet%":typeof WeakSet>"u"?s:WeakSet,"%Function.prototype.call%":ae,"%Function.prototype.apply%":Qr,"%Object.defineProperty%":Ln,"%Object.getPrototypeOf%":Un,"%Math.abs%":Fn,"%Math.floor%":Dn,"%Math.max%":Mn,"%Math.min%":Nn,"%Math.pow%":Tn,"%Math.round%":Cn,"%Math.sign%":Bn,"%Reflect.getPrototypeOf%":qn};if(w)try{null.error}catch(r){var kn=w(w(r));L["%Error.prototype%"]=kn}var Hn=function r(e){var n;if(e==="%AsyncFunction%")n=We("async function () {}");else if(e==="%GeneratorFunction%")n=We("function* () {}");else if(e==="%AsyncGeneratorFunction%")n=We("async function* () {}");else if(e==="%AsyncGenerator%"){var t=r("%AsyncGeneratorFunction%");t&&(n=t.prototype)}else if(e==="%AsyncIteratorPrototype%"){var a=r("%AsyncGenerator%");a&&w&&(n=w(a.prototype))}return L[e]=n,n},xr={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},oe=we(),he=En(),zn=oe.call(ae,Array.prototype.concat),Kn=oe.call(Qr,Array.prototype.splice),Ir=oe.call(ae,String.prototype.replace),me=oe.call(ae,String.prototype.slice),Qn=oe.call(ae,RegExp.prototype.exec),Vn=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,Jn=/\\(\\)?/g,jn=function(e){var n=me(e,0,1),t=me(e,-1);if(n==="%"&&t!=="%")throw new V("invalid intrinsic syntax, expected closing `%`");if(t==="%"&&n!=="%")throw new V("invalid intrinsic syntax, expected opening `%`");var a=[];return Ir(e,Vn,function(o,i,u,l){a[a.length]=u?Ir(l,Jn,"$1"):i||o}),a},Yn=function(e,n){var t=e,a;if(he(xr,t)&&(a=xr[t],t="%"+a[0]+"%"),he(L,t)){var o=L[t];if(o===z&&(o=Hn(t)),typeof o>"u"&&!n)throw new K("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:a,name:t,value:o}}throw new V("intrinsic "+e+" does not exist!")},rr=function(e,n){if(typeof e!="string"||e.length===0)throw new K("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof n!="boolean")throw new K('"allowMissing" argument must be a boolean');if(Qn(/^%?[^%]*%?$/,e)===null)throw new V("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var t=jn(e),a=t.length>0?t[0]:"",o=Yn("%"+a+"%",n),i=o.name,u=o.value,l=!1,c=o.alias;c&&(a=c[0],Kn(t,zn([0,1],c)));for(var p=1,y=!0;p<t.length;p+=1){var f=t[p],h=me(f,0,1),v=me(f,-1);if((h==='"'||h==="'"||h==="`"||v==='"'||v==="'"||v==="`")&&h!==v)throw new V("property names with quotes must have matching quotes");if((f==="constructor"||!y)&&(l=!0),a+="."+f,i="%"+a+"%",he(L,i))u=L[i];else if(u!=null){if(!(f in u)){if(!n)throw new K("base intrinsic for "+e+" exists, but the property is not available.");return}if(ne&&p+1>=t.length){var g=ne(u,f);y=!!g,y&&"get"in g&&!("originalValue"in g.get)?u=g.get:u=u[f]}else y=he(u,f),u=u[f];y&&!l&&(L[i]=u)}}return u},Vr=rr,Jr=zr,Xn=Jr([Vr("%String.prototype.indexOf%")]),jr=function(e,n){var t=Vr(e,!!n);return typeof t=="function"&&Xn(e,".prototype.")>-1?Jr([t]):t},Zn=rr,ie=jr,ea=ge,ra=J,_r=Zn("%Map%",!0),ta=ie("Map.prototype.get",!0),na=ie("Map.prototype.set",!0),aa=ie("Map.prototype.has",!0),oa=ie("Map.prototype.delete",!0),ia=ie("Map.prototype.size",!0),Yr=!!_r&&function(){var e,n={assert:function(t){if(!n.has(t))throw new ra("Side channel does not contain "+ea(t))},delete:function(t){if(e){var a=oa(e,t);return ia(e)===0&&(e=void 0),a}return!1},get:function(t){if(e)return ta(e,t)},has:function(t){return e?aa(e,t):!1},set:function(t,a){e||(e=new _r),na(e,t,a)}};return n},fa=rr,be=jr,la=ge,ce=Yr,ua=J,H=fa("%WeakMap%",!0),ca=be("WeakMap.prototype.get",!0),pa=be("WeakMap.prototype.set",!0),ya=be("WeakMap.prototype.has",!0),sa=be("WeakMap.prototype.delete",!0),da=H?function(){var e,n,t={assert:function(a){if(!t.has(a))throw new ua("Side channel does not contain "+la(a))},delete:function(a){if(H&&a&&(typeof a=="object"||typeof a=="function")){if(e)return sa(e,a)}else if(ce&&n)return n.delete(a);return!1},get:function(a){return H&&a&&(typeof a=="object"||typeof a=="function")&&e?ca(e,a):n&&n.get(a)},has:function(a){return H&&a&&(typeof a=="object"||typeof a=="function")&&e?ya(e,a):!!n&&n.has(a)},set:function(a,o){H&&a&&(typeof a=="object"||typeof a=="function")?(e||(e=new H),pa(e,a,o)):ce&&(n||(n=ce()),n.set(a,o))}};return t}:ce,va=J,ha=ge,ma=Ht,ga=Yr,Sa=da,wa=Sa||ga||ma,ba=function(){var e,n={assert:function(t){if(!n.has(t))throw new va("Side channel does not contain "+ha(t))},delete:function(t){return!!e&&e.delete(t)},get:function(t){return e&&e.get(t)},has:function(t){return!!e&&e.has(t)},set:function(t,a){e||(e=wa()),e.set(t,a)}};return n},Aa=String.prototype.replace,Oa=/%20/g,qe={RFC1738:"RFC1738",RFC3986:"RFC3986"},tr={default:qe.RFC3986,formatters:{RFC1738:function(r){return Aa.call(r,Oa,"+")},RFC3986:function(r){return String(r)}},RFC1738:qe.RFC1738,RFC3986:qe.RFC3986},Ea=tr,Ge=Object.prototype.hasOwnProperty,B=Array.isArray,E=function(){for(var r=[],e=0;e<256;++e)r.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return r}(),Pa=function(e){for(;e.length>1;){var n=e.pop(),t=n.obj[n.prop];if(B(t)){for(var a=[],o=0;o<t.length;++o)typeof t[o]<"u"&&a.push(t[o]);n.obj[n.prop]=a}}},Xr=function(e,n){for(var t=n&&n.plainObjects?{__proto__:null}:{},a=0;a<e.length;++a)typeof e[a]<"u"&&(t[a]=e[a]);return t},$a=function r(e,n,t){if(!n)return e;if(typeof n!="object"&&typeof n!="function"){if(B(e))e.push(n);else if(e&&typeof e=="object")(t&&(t.plainObjects||t.allowPrototypes)||!Ge.call(Object.prototype,n))&&(e[n]=!0);else return[e,n];return e}if(!e||typeof e!="object")return[e].concat(n);var a=e;return B(e)&&!B(n)&&(a=Xr(e,t)),B(e)&&B(n)?(n.forEach(function(o,i){if(Ge.call(e,i)){var u=e[i];u&&typeof u=="object"&&o&&typeof o=="object"?e[i]=r(u,o,t):e.push(o)}else e[i]=o}),e):Object.keys(n).reduce(function(o,i){var u=n[i];return Ge.call(o,i)?o[i]=r(o[i],u,t):o[i]=u,o},a)},Ra=function(e,n){return Object.keys(n).reduce(function(t,a){return t[a]=n[a],t},e)},xa=function(r,e,n){var t=r.replace(/\+/g," ");if(n==="iso-8859-1")return t.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(t)}catch{return t}},ke=1024,Ia=function(e,n,t,a,o){if(e.length===0)return e;var i=e;if(typeof e=="symbol"?i=Symbol.prototype.toString.call(e):typeof e!="string"&&(i=String(e)),t==="iso-8859-1")return escape(i).replace(/%u[0-9a-f]{4}/gi,function(h){return"%26%23"+parseInt(h.slice(2),16)+"%3B"});for(var u="",l=0;l<i.length;l+=ke){for(var c=i.length>=ke?i.slice(l,l+ke):i,p=[],y=0;y<c.length;++y){var f=c.charCodeAt(y);if(f===45||f===46||f===95||f===126||f>=48&&f<=57||f>=65&&f<=90||f>=97&&f<=122||o===Ea.RFC1738&&(f===40||f===41)){p[p.length]=c.charAt(y);continue}if(f<128){p[p.length]=E[f];continue}if(f<2048){p[p.length]=E[192|f>>6]+E[128|f&63];continue}if(f<55296||f>=57344){p[p.length]=E[224|f>>12]+E[128|f>>6&63]+E[128|f&63];continue}y+=1,f=65536+((f&1023)<<10|c.charCodeAt(y)&1023),p[p.length]=E[240|f>>18]+E[128|f>>12&63]+E[128|f>>6&63]+E[128|f&63]}u+=p.join("")}return u},_a=function(e){for(var n=[{obj:{o:e},prop:"o"}],t=[],a=0;a<n.length;++a)for(var o=n[a],i=o.obj[o.prop],u=Object.keys(i),l=0;l<u.length;++l){var c=u[l],p=i[c];typeof p=="object"&&p!==null&&t.indexOf(p)===-1&&(n.push({obj:i,prop:c}),t.push(p))}return Pa(n),e},Fa=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},Da=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},Ma=function(e,n){return[].concat(e,n)},Na=function(e,n){if(B(e)){for(var t=[],a=0;a<e.length;a+=1)t.push(n(e[a]));return t}return n(e)},Zr={arrayToObject:Xr,assign:Ra,combine:Ma,compact:_a,decode:xa,encode:Ia,isBuffer:Da,isRegExp:Fa,maybeMap:Na,merge:$a},et=ba,se=Zr,te=tr,Ta=Object.prototype.hasOwnProperty,rt={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,n){return e+"["+n+"]"},repeat:function(e){return e}},P=Array.isArray,Ca=Array.prototype.push,tt=function(r,e){Ca.apply(r,P(e)?e:[e])},Ba=Date.prototype.toISOString,Fr=te.default,S={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,commaRoundTrip:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:se.encode,encodeValuesOnly:!1,filter:void 0,format:Fr,formatter:te.formatters[Fr],indices:!1,serializeDate:function(e){return Ba.call(e)},skipNulls:!1,strictNullHandling:!1},La=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},He={},Wa=function r(e,n,t,a,o,i,u,l,c,p,y,f,h,v,g,b,A,I){for(var d=e,_=I,T=0,j=!1;(_=_.get(He))!==void 0&&!j;){var q=_.get(e);if(T+=1,typeof q<"u"){if(q===T)throw new RangeError("Cyclic object value");j=!0}typeof _.get(He)>"u"&&(T=0)}if(typeof p=="function"?d=p(n,d):d instanceof Date?d=h(d):t==="comma"&&P(d)&&(d=se.maybeMap(d,function(Oe){return Oe instanceof Date?h(Oe):Oe})),d===null){if(i)return c&&!b?c(n,S.encoder,A,"key",v):n;d=""}if(La(d)||se.isBuffer(d)){if(c){var fe=b?n:c(n,S.encoder,A,"key",v);return[g(fe)+"="+g(c(d,S.encoder,A,"value",v))]}return[g(n)+"="+g(String(d))]}var C=[];if(typeof d>"u")return C;var F;if(t==="comma"&&P(d))b&&c&&(d=se.maybeMap(d,c)),F=[{value:d.length>0?d.join(",")||null:void 0}];else if(P(p))F=p;else{var le=Object.keys(d);F=y?le.sort(y):le}var G=l?String(n).replace(/\./g,"%2E"):String(n),O=a&&P(d)&&d.length===1?G+"[]":G;if(o&&P(d)&&d.length===0)return O+"[]";for(var D=0;D<F.length;++D){var R=F[D],Y=typeof R=="object"&&R&&typeof R.value<"u"?R.value:d[R];if(!(u&&Y===null)){var Ae=f&&l?String(R).replace(/\./g,"%2E"):String(R),at=P(d)?typeof t=="function"?t(O,Ae):O:O+(f?"."+Ae:"["+Ae+"]");I.set(e,T);var nr=et();nr.set(He,I),tt(C,r(Y,at,t,a,o,i,u,l,t==="comma"&&b&&P(d)?null:c,p,y,f,h,v,g,b,A,nr))}}return C},Ua=function(e){if(!e)return S;if(typeof e.allowEmptyArrays<"u"&&typeof e.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof e.encodeDotInKeys<"u"&&typeof e.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var n=e.charset||S.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=te.default;if(typeof e.format<"u"){if(!Ta.call(te.formatters,e.format))throw new TypeError("Unknown format option provided.");t=e.format}var a=te.formatters[t],o=S.filter;(typeof e.filter=="function"||P(e.filter))&&(o=e.filter);var i;if(e.arrayFormat in rt?i=e.arrayFormat:"indices"in e?i=e.indices?"indices":"repeat":i=S.arrayFormat,"commaRoundTrip"in e&&typeof e.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var u=typeof e.allowDots>"u"?e.encodeDotInKeys===!0?!0:S.allowDots:!!e.allowDots;return{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:S.addQueryPrefix,allowDots:u,allowEmptyArrays:typeof e.allowEmptyArrays=="boolean"?!!e.allowEmptyArrays:S.allowEmptyArrays,arrayFormat:i,charset:n,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:S.charsetSentinel,commaRoundTrip:!!e.commaRoundTrip,delimiter:typeof e.delimiter>"u"?S.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:S.encode,encodeDotInKeys:typeof e.encodeDotInKeys=="boolean"?e.encodeDotInKeys:S.encodeDotInKeys,encoder:typeof e.encoder=="function"?e.encoder:S.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:S.encodeValuesOnly,filter:o,format:t,formatter:a,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:S.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:S.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:S.strictNullHandling}},qa=function(r,e){var n=r,t=Ua(e),a,o;typeof t.filter=="function"?(o=t.filter,n=o("",n)):P(t.filter)&&(o=t.filter,a=o);var i=[];if(typeof n!="object"||n===null)return"";var u=rt[t.arrayFormat],l=u==="comma"&&t.commaRoundTrip;a||(a=Object.keys(n)),t.sort&&a.sort(t.sort);for(var c=et(),p=0;p<a.length;++p){var y=a[p],f=n[y];t.skipNulls&&f===null||tt(i,Wa(f,y,u,l,t.allowEmptyArrays,t.strictNullHandling,t.skipNulls,t.encodeDotInKeys,t.encode?t.encoder:null,t.filter,t.sort,t.allowDots,t.serializeDate,t.format,t.formatter,t.encodeValuesOnly,t.charset,c))}var h=i.join(t.delimiter),v=t.addQueryPrefix===!0?"?":"";return t.charsetSentinel&&(t.charset==="iso-8859-1"?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&"),h.length>0?v+h:""},W=Zr,je=Object.prototype.hasOwnProperty,Dr=Array.isArray,m={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:W.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictDepth:!1,strictNullHandling:!1,throwOnLimitExceeded:!1},Ga=function(r){return r.replace(/&#(\d+);/g,function(e,n){return String.fromCharCode(parseInt(n,10))})},nt=function(r,e,n){if(r&&typeof r=="string"&&e.comma&&r.indexOf(",")>-1)return r.split(",");if(e.throwOnLimitExceeded&&n>=e.arrayLimit)throw new RangeError("Array limit exceeded. Only "+e.arrayLimit+" element"+(e.arrayLimit===1?"":"s")+" allowed in an array.");return r},ka="utf8=%26%2310003%3B",Ha="utf8=%E2%9C%93",za=function(e,n){var t={__proto__:null},a=n.ignoreQueryPrefix?e.replace(/^\?/,""):e;a=a.replace(/%5B/gi,"[").replace(/%5D/gi,"]");var o=n.parameterLimit===1/0?void 0:n.parameterLimit,i=a.split(n.delimiter,n.throwOnLimitExceeded?o+1:o);if(n.throwOnLimitExceeded&&i.length>o)throw new RangeError("Parameter limit exceeded. Only "+o+" parameter"+(o===1?"":"s")+" allowed.");var u=-1,l,c=n.charset;if(n.charsetSentinel)for(l=0;l<i.length;++l)i[l].indexOf("utf8=")===0&&(i[l]===Ha?c="utf-8":i[l]===ka&&(c="iso-8859-1"),u=l,l=i.length);for(l=0;l<i.length;++l)if(l!==u){var p=i[l],y=p.indexOf("]="),f=y===-1?p.indexOf("="):y+1,h,v;f===-1?(h=n.decoder(p,m.decoder,c,"key"),v=n.strictNullHandling?null:""):(h=n.decoder(p.slice(0,f),m.decoder,c,"key"),v=W.maybeMap(nt(p.slice(f+1),n,Dr(t[h])?t[h].length:0),function(b){return n.decoder(b,m.decoder,c,"value")})),v&&n.interpretNumericEntities&&c==="iso-8859-1"&&(v=Ga(String(v))),p.indexOf("[]=")>-1&&(v=Dr(v)?[v]:v);var g=je.call(t,h);g&&n.duplicates==="combine"?t[h]=W.combine(t[h],v):(!g||n.duplicates==="last")&&(t[h]=v)}return t},Ka=function(r,e,n,t){var a=0;if(r.length>0&&r[r.length-1]==="[]"){var o=r.slice(0,-1).join("");a=Array.isArray(e)&&e[o]?e[o].length:0}for(var i=t?e:nt(e,n,a),u=r.length-1;u>=0;--u){var l,c=r[u];if(c==="[]"&&n.parseArrays)l=n.allowEmptyArrays&&(i===""||n.strictNullHandling&&i===null)?[]:W.combine([],i);else{l=n.plainObjects?{__proto__:null}:{};var p=c.charAt(0)==="["&&c.charAt(c.length-1)==="]"?c.slice(1,-1):c,y=n.decodeDotInKeys?p.replace(/%2E/g,"."):p,f=parseInt(y,10);!n.parseArrays&&y===""?l={0:i}:!isNaN(f)&&c!==y&&String(f)===y&&f>=0&&n.parseArrays&&f<=n.arrayLimit?(l=[],l[f]=i):y!=="__proto__"&&(l[y]=i)}i=l}return i},Qa=function(e,n,t,a){if(e){var o=t.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,u=/(\[[^[\]]*])/g,l=t.depth>0&&i.exec(o),c=l?o.slice(0,l.index):o,p=[];if(c){if(!t.plainObjects&&je.call(Object.prototype,c)&&!t.allowPrototypes)return;p.push(c)}for(var y=0;t.depth>0&&(l=u.exec(o))!==null&&y<t.depth;){if(y+=1,!t.plainObjects&&je.call(Object.prototype,l[1].slice(1,-1))&&!t.allowPrototypes)return;p.push(l[1])}if(l){if(t.strictDepth===!0)throw new RangeError("Input depth exceeded depth option of "+t.depth+" and strictDepth is true");p.push("["+o.slice(l.index)+"]")}return Ka(p,n,t,a)}},Va=function(e){if(!e)return m;if(typeof e.allowEmptyArrays<"u"&&typeof e.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof e.decodeDotInKeys<"u"&&typeof e.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(e.decoder!==null&&typeof e.decoder<"u"&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");if(typeof e.throwOnLimitExceeded<"u"&&typeof e.throwOnLimitExceeded!="boolean")throw new TypeError("`throwOnLimitExceeded` option must be a boolean");var n=typeof e.charset>"u"?m.charset:e.charset,t=typeof e.duplicates>"u"?m.duplicates:e.duplicates;if(t!=="combine"&&t!=="first"&&t!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var a=typeof e.allowDots>"u"?e.decodeDotInKeys===!0?!0:m.allowDots:!!e.allowDots;return{allowDots:a,allowEmptyArrays:typeof e.allowEmptyArrays=="boolean"?!!e.allowEmptyArrays:m.allowEmptyArrays,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:m.allowPrototypes,allowSparse:typeof e.allowSparse=="boolean"?e.allowSparse:m.allowSparse,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:m.arrayLimit,charset:n,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:m.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:m.comma,decodeDotInKeys:typeof e.decodeDotInKeys=="boolean"?e.decodeDotInKeys:m.decodeDotInKeys,decoder:typeof e.decoder=="function"?e.decoder:m.decoder,delimiter:typeof e.delimiter=="string"||W.isRegExp(e.delimiter)?e.delimiter:m.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:m.depth,duplicates:t,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:m.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:m.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:m.plainObjects,strictDepth:typeof e.strictDepth=="boolean"?!!e.strictDepth:m.strictDepth,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:m.strictNullHandling,throwOnLimitExceeded:typeof e.throwOnLimitExceeded=="boolean"?e.throwOnLimitExceeded:!1}},Ja=function(r,e){var n=Va(e);if(r===""||r===null||typeof r>"u")return n.plainObjects?{__proto__:null}:{};for(var t=typeof r=="string"?za(r,n):r,a=n.plainObjects?{__proto__:null}:{},o=Object.keys(t),i=0;i<o.length;++i){var u=o[i],l=Qa(u,t[u],n,typeof r=="string");a=W.merge(a,l,n)}return n.allowSparse===!0?a:W.compact(a)},ja=qa,Ya=Ja,Xa=tr,Za={formats:Xa,parse:Ya,stringify:ja};const ro=it(Za);export{Za as l,ro as q};
