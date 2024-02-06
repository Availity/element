import{a as w}from"./index-570b25c1.js";var ne=e=>e.type==="checkbox",re=e=>e instanceof Date,R=e=>e==null;const tt=e=>typeof e=="object";var C=e=>!R(e)&&!Array.isArray(e)&&tt(e)&&!re(e),rt=e=>C(e)&&e.target?ne(e.target)?e.target.checked:e.target.value:e,xt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,st=(e,i)=>e.has(xt(i)),mt=e=>{const i=e.constructor&&e.constructor.prototype;return C(i)&&i.hasOwnProperty("isPrototypeOf")},Oe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function N(e){let i;const r=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(Oe&&(e instanceof Blob||e instanceof FileList))&&(r||C(e)))if(i=r?[]:{},!r&&!mt(e))i=e;else for(const s in e)e.hasOwnProperty(s)&&(i[s]=N(e[s]));else return e;return i}var ae=e=>Array.isArray(e)?e.filter(Boolean):[],k=e=>e===void 0,d=(e,i,r)=>{if(!i||!C(e))return r;const s=ae(i.split(/[,[\].]+?/)).reduce((n,l)=>R(n)?n:n[l],e);return k(s)||s===e?k(e[i])?r:e[i]:s},j=e=>typeof e=="boolean";const he={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},I={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Dt=w.createContext(null),Le=()=>w.useContext(Dt);var it=(e,i,r,s=!0)=>{const n={defaultValues:i._defaultValues};for(const l in e)Object.defineProperty(n,l,{get:()=>{const f=l;return i._proxyFormState[f]!==I.all&&(i._proxyFormState[f]=!s||I.all),r&&(r[f]=!0),e[f]}});return n},B=e=>C(e)&&!Object.keys(e).length,ut=(e,i,r,s)=>{r(e);const{name:n,...l}=e;return B(l)||Object.keys(l).length>=Object.keys(i).length||Object.keys(l).find(f=>i[f]===(!s||I.all))},ce=e=>Array.isArray(e)?e:[e],nt=(e,i,r)=>!e||!i||e===i||ce(e).some(s=>s&&(r?s===i:s.startsWith(i)||i.startsWith(s)));function Te(e){const i=w.useRef(e);i.current=e,w.useEffect(()=>{const r=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}function wt(e){const i=Le(),{control:r=i.control,disabled:s,name:n,exact:l}=e||{},[f,_]=w.useState(r._formState),g=w.useRef(!0),S=w.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),D=w.useRef(n);return D.current=n,Te({disabled:s,next:F=>g.current&&nt(D.current,F.name,l)&&ut(F,S.current,r._updateFormState)&&_({...r._formState,...F}),subject:r._subjects.state}),w.useEffect(()=>(g.current=!0,S.current.isValid&&r._updateValid(!0),()=>{g.current=!1}),[r]),it(f,r,S.current,!1)}var $=e=>typeof e=="string",at=(e,i,r,s,n)=>$(e)?(s&&i.watch.add(e),d(r,e,n)):Array.isArray(e)?e.map(l=>(s&&i.watch.add(l),d(r,l))):(s&&(i.watchAll=!0),r);function St(e){const i=Le(),{control:r=i.control,name:s,defaultValue:n,disabled:l,exact:f}=e||{},_=w.useRef(s);_.current=s,Te({disabled:l,subject:r._subjects.values,next:D=>{nt(_.current,D.name,f)&&S(N(at(_.current,r._names,D.values||r._formValues,!1,n)))}});const[g,S]=w.useState(r._getWatch(s,n));return w.useEffect(()=>r._removeUnmounted()),g}var Re=e=>/^\w*$/.test(e),lt=e=>ae(e.replace(/["|']|\]/g,"").split(/\.|\[/));function m(e,i,r){let s=-1;const n=Re(i)?[i]:lt(i),l=n.length,f=l-1;for(;++s<l;){const _=n[s];let g=r;if(s!==f){const S=e[_];g=C(S)||Array.isArray(S)?S:isNaN(+n[s+1])?{}:[]}e[_]=g,e=e[_]}return e}function kt(e){const i=Le(),{name:r,disabled:s,control:n=i.control,shouldUnregister:l}=e,f=st(n._names.array,r),_=St({control:n,name:r,defaultValue:d(n._formValues,r,d(n._defaultValues,r,e.defaultValue)),exact:!0}),g=wt({control:n,name:r}),S=w.useRef(n.register(r,{...e.rules,value:_}));return S.current=n.register(r,e.rules),w.useEffect(()=>{const D=n._options.shouldUnregister||l,F=(v,q)=>{const T=d(n._fields,v);T&&(T._f.mount=q)};if(F(r,!0),D){const v=N(d(n._options.defaultValues,r));m(n._defaultValues,r,v),k(d(n._formValues,r))&&m(n._formValues,r,v)}return()=>{(f?D&&!n._state.action:D)?n.unregister(r):F(r,!1)}},[r,n,f,l]),w.useEffect(()=>{d(n._fields,r)&&n._updateDisabledField({disabled:s,fields:n._fields,name:r,value:d(n._fields,r)._f.value})},[s,r,n]),{field:{name:r,value:_,...j(s)||j(g.disabled)?{disabled:g.disabled||s}:{},onChange:w.useCallback(D=>S.current.onChange({target:{value:rt(D),name:r},type:he.CHANGE}),[r]),onBlur:w.useCallback(()=>S.current.onBlur({target:{value:d(n._formValues,r),name:r},type:he.BLUR}),[r,n]),ref:D=>{const F=d(n._fields,r);F&&D&&(F._f.ref={focus:()=>D.focus(),select:()=>D.select(),setCustomValidity:v=>D.setCustomValidity(v),reportValidity:()=>D.reportValidity()})}},formState:g,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!d(g.errors,r)},isDirty:{enumerable:!0,get:()=>!!d(g.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!d(g.touchedFields,r)},error:{enumerable:!0,get:()=>d(g.errors,r)}})}}const Ht=e=>e.render(kt(e));var Et=(e,i,r,s,n)=>i?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:n||!0}}:{},Ge=e=>({isOnSubmit:!e||e===I.onSubmit,isOnBlur:e===I.onBlur,isOnChange:e===I.onChange,isOnAll:e===I.all,isOnTouch:e===I.onTouched}),ze=(e,i,r)=>!r&&(i.watchAll||i.watch.has(e)||[...i.watch].some(s=>e.startsWith(s)&&/^\.\w+/.test(e.slice(s.length))));const de=(e,i,r,s)=>{for(const n of r||Object.keys(e)){const l=d(e,n);if(l){const{_f:f,..._}=l;if(f){if(f.refs&&f.refs[0]&&i(f.refs[0],n)&&!s)break;if(f.ref&&i(f.ref,f.name)&&!s)break}else C(_)&&de(_,i)}}};var pt=(e,i,r)=>{const s=ae(d(e,r));return m(s,"root",i[r]),m(e,r,s),e},Ue=e=>e.type==="file",J=e=>typeof e=="function",ge=e=>{if(!Oe)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},ye=e=>$(e),Me=e=>e.type==="radio",ve=e=>e instanceof RegExp;const Je={value:!1,isValid:!1},Qe={value:!0,isValid:!0};var ot=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!k(e[0].attributes.value)?k(e[0].value)||e[0].value===""?Qe:{value:e[0].value,isValid:!0}:Qe:Je}return Je};const Xe={isValid:!1,value:null};var ft=e=>Array.isArray(e)?e.reduce((i,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:i,Xe):Xe;function Ye(e,i,r="validate"){if(ye(e)||Array.isArray(e)&&e.every(ye)||j(e)&&!e)return{type:r,message:ye(e)?e:"",ref:i}}var te=e=>C(e)&&!ve(e)?e:{value:e,message:""},Ze=async(e,i,r,s,n)=>{const{ref:l,refs:f,required:_,maxLength:g,minLength:S,min:D,max:F,pattern:v,validate:q,name:T,valueAsNumber:Ve,mount:le,disabled:Ae}=e._f,b=d(i,T);if(!le||Ae)return{};const P=f?f[0]:l,K=A=>{s&&P.reportValidity&&(P.setCustomValidity(j(A)?"":A||""),P.reportValidity())},O={},se=Me(l),Z=ne(l),Fe=se||Z,W=(Ve||Ue(l))&&k(l.value)&&k(b)||ge(l)&&l.value===""||b===""||Array.isArray(b)&&!b.length,Q=Et.bind(null,T,r,O),G=(A,V,E,U=z.maxLength,M=z.minLength)=>{const H=A?V:E;O[T]={type:A?U:M,message:H,ref:l,...Q(A?U:M,H)}};if(n?!Array.isArray(b)||!b.length:_&&(!Fe&&(W||R(b))||j(b)&&!b||Z&&!ot(f).isValid||se&&!ft(f).isValid)){const{value:A,message:V}=ye(_)?{value:!!_,message:_}:te(_);if(A&&(O[T]={type:z.required,message:V,ref:P,...Q(z.required,V)},!r))return K(V),O}if(!W&&(!R(D)||!R(F))){let A,V;const E=te(F),U=te(D);if(!R(b)&&!isNaN(b)){const M=l.valueAsNumber||b&&+b;R(E.value)||(A=M>E.value),R(U.value)||(V=M<U.value)}else{const M=l.valueAsDate||new Date(b),H=oe=>new Date(new Date().toDateString()+" "+oe),X=l.type=="time",ie=l.type=="week";$(E.value)&&b&&(A=X?H(b)>H(E.value):ie?b>E.value:M>new Date(E.value)),$(U.value)&&b&&(V=X?H(b)<H(U.value):ie?b<U.value:M<new Date(U.value))}if((A||V)&&(G(!!A,E.message,U.message,z.max,z.min),!r))return K(O[T].message),O}if((g||S)&&!W&&($(b)||n&&Array.isArray(b))){const A=te(g),V=te(S),E=!R(A.value)&&b.length>+A.value,U=!R(V.value)&&b.length<+V.value;if((E||U)&&(G(E,A.message,V.message),!r))return K(O[T].message),O}if(v&&!W&&$(b)){const{value:A,message:V}=te(v);if(ve(A)&&!b.match(A)&&(O[T]={type:z.pattern,message:V,ref:l,...Q(z.pattern,V)},!r))return K(V),O}if(q){if(J(q)){const A=await q(b,i),V=Ye(A,P);if(V&&(O[T]={...V,...Q(z.validate,V.message)},!r))return K(V.message),O}else if(C(q)){let A={};for(const V in q){if(!B(A)&&!r)break;const E=Ye(await q[V](b,i),P,V);E&&(A={...E,...Q(V,E.message)},K(E.message),r&&(O[T]=A))}if(!B(A)&&(O[T]={ref:P,...A},!r))return O}}return K(!0),O};function Ct(e,i){const r=i.slice(0,-1).length;let s=0;for(;s<r;)e=k(e)?s++:e[i[s++]];return e}function Ot(e){for(const i in e)if(e.hasOwnProperty(i)&&!k(e[i]))return!1;return!0}function L(e,i){const r=Array.isArray(i)?i:Re(i)?[i]:lt(i),s=r.length===1?e:Ct(e,r),n=r.length-1,l=r[n];return s&&delete s[l],n!==0&&(C(s)&&B(s)||Array.isArray(s)&&Ot(s))&&L(e,r.slice(0,-1)),e}function ke(){let e=[];return{get observers(){return e},next:n=>{for(const l of e)l.next&&l.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(l=>l!==n)}}),unsubscribe:()=>{e=[]}}}var _e=e=>R(e)||!tt(e);function Y(e,i){if(_e(e)||_e(i))return e===i;if(re(e)&&re(i))return e.getTime()===i.getTime();const r=Object.keys(e),s=Object.keys(i);if(r.length!==s.length)return!1;for(const n of r){const l=e[n];if(!s.includes(n))return!1;if(n!=="ref"){const f=i[n];if(re(l)&&re(f)||C(l)&&C(f)||Array.isArray(l)&&Array.isArray(f)?!Y(l,f):l!==f)return!1}}return!0}var ct=e=>e.type==="select-multiple",Lt=e=>Me(e)||ne(e),Ee=e=>ge(e)&&e.isConnected,dt=e=>{for(const i in e)if(J(e[i]))return!0;return!1};function be(e,i={}){const r=Array.isArray(e);if(C(e)||r)for(const s in e)Array.isArray(e[s])||C(e[s])&&!dt(e[s])?(i[s]=Array.isArray(e[s])?[]:{},be(e[s],i[s])):R(e[s])||(i[s]=!0);return i}function yt(e,i,r){const s=Array.isArray(e);if(C(e)||s)for(const n in e)Array.isArray(e[n])||C(e[n])&&!dt(e[n])?k(i)||_e(r[n])?r[n]=Array.isArray(e[n])?be(e[n],[]):{...be(e[n])}:yt(e[n],R(i)?{}:i[n],r[n]):r[n]=!Y(e[n],i[n]);return r}var pe=(e,i)=>yt(e,i,be(i)),ht=(e,{valueAsNumber:i,valueAsDate:r,setValueAs:s})=>k(e)?e:i?e===""?NaN:e&&+e:r&&$(e)?new Date(e):s?s(e):e;function Ce(e){const i=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):i.disabled))return Ue(i)?i.files:Me(i)?ft(e.refs).value:ct(i)?[...i.selectedOptions].map(({value:r})=>r):ne(i)?ot(e.refs).value:ht(k(i.value)?e.ref.value:i.value,e)}var Tt=(e,i,r,s)=>{const n={};for(const l of e){const f=d(i,l);f&&m(n,l,f._f)}return{criteriaMode:r,names:[...e],fields:n,shouldUseNativeValidation:s}},ue=e=>k(e)?e:ve(e)?e.source:C(e)?ve(e.value)?e.value.source:e.value:e,Rt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function et(e,i,r){const s=d(e,r);if(s||Re(r))return{error:s,name:r};const n=r.split(".");for(;n.length;){const l=n.join("."),f=d(i,l),_=d(e,l);if(f&&!Array.isArray(f)&&r!==l)return{name:r};if(_&&_.type)return{name:l,error:_};n.pop()}return{name:r}}var Ut=(e,i,r,s,n)=>n.isOnAll?!1:!r&&n.isOnTouch?!(i||e):(r?s.isOnBlur:n.isOnBlur)?!e:(r?s.isOnChange:n.isOnChange)?e:!0,Mt=(e,i)=>!ae(d(e,i)).length&&L(e,i);const Bt={mode:I.onSubmit,reValidateMode:I.onChange,shouldFocusError:!0};function Pt(e={},i){let r={...Bt,...e},s={submitCount:0,isDirty:!1,isLoading:J(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},n={},l=C(r.defaultValues)||C(r.values)?N(r.defaultValues||r.values)||{}:{},f=r.shouldUnregister?{}:N(l),_={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},S,D=0;const F={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:ke(),array:ke(),state:ke()},q=e.resetOptions&&e.resetOptions.keepDirtyValues,T=Ge(r.mode),Ve=Ge(r.reValidateMode),le=r.criteriaMode===I.all,Ae=t=>u=>{clearTimeout(D),D=setTimeout(t,u)},b=async t=>{if(F.isValid||t){const u=r.resolver?B((await W()).errors):await G(n,!0);u!==s.isValid&&v.state.next({isValid:u})}},P=t=>F.isValidating&&v.state.next({isValidating:t}),K=(t,u=[],a,y,c=!0,o=!0)=>{if(y&&a){if(_.action=!0,o&&Array.isArray(d(n,t))){const h=a(d(n,t),y.argA,y.argB);c&&m(n,t,h)}if(o&&Array.isArray(d(s.errors,t))){const h=a(d(s.errors,t),y.argA,y.argB);c&&m(s.errors,t,h),Mt(s.errors,t)}if(F.touchedFields&&o&&Array.isArray(d(s.touchedFields,t))){const h=a(d(s.touchedFields,t),y.argA,y.argB);c&&m(s.touchedFields,t,h)}F.dirtyFields&&(s.dirtyFields=pe(l,f)),v.state.next({name:t,isDirty:V(t,u),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else m(f,t,u)},O=(t,u)=>{m(s.errors,t,u),v.state.next({errors:s.errors})},se=(t,u,a,y)=>{const c=d(n,t);if(c){const o=d(f,t,k(a)?d(l,t):a);k(o)||y&&y.defaultChecked||u?m(f,t,u?o:Ce(c._f)):M(t,o),_.mount&&b()}},Z=(t,u,a,y,c)=>{let o=!1,h=!1;const x={name:t};if(!a||y){F.isDirty&&(h=s.isDirty,s.isDirty=x.isDirty=V(),o=h!==x.isDirty);const p=Y(d(l,t),u);h=d(s.dirtyFields,t),p?L(s.dirtyFields,t):m(s.dirtyFields,t,!0),x.dirtyFields=s.dirtyFields,o=o||F.dirtyFields&&h!==!p}if(a){const p=d(s.touchedFields,t);p||(m(s.touchedFields,t,a),x.touchedFields=s.touchedFields,o=o||F.touchedFields&&p!==a)}return o&&c&&v.state.next(x),o?x:{}},Fe=(t,u,a,y)=>{const c=d(s.errors,t),o=F.isValid&&j(u)&&s.isValid!==u;if(e.delayError&&a?(S=Ae(()=>O(t,a)),S(e.delayError)):(clearTimeout(D),S=null,a?m(s.errors,t,a):L(s.errors,t)),(a?!Y(c,a):c)||!B(y)||o){const h={...y,...o&&j(u)?{isValid:u}:{},errors:s.errors,name:t};s={...s,...h},v.state.next(h)}P(!1)},W=async t=>r.resolver(f,r.context,Tt(t||g.mount,n,r.criteriaMode,r.shouldUseNativeValidation)),Q=async t=>{const{errors:u}=await W(t);if(t)for(const a of t){const y=d(u,a);y?m(s.errors,a,y):L(s.errors,a)}else s.errors=u;return u},G=async(t,u,a={valid:!0})=>{for(const y in t){const c=t[y];if(c){const{_f:o,...h}=c;if(o){const x=g.array.has(o.name),p=await Ze(c,f,le,r.shouldUseNativeValidation&&!u,x);if(p[o.name]&&(a.valid=!1,u))break;!u&&(d(p,o.name)?x?pt(s.errors,p,o.name):m(s.errors,o.name,p[o.name]):L(s.errors,o.name))}h&&await G(h,u,a)}}return a.valid},A=()=>{for(const t of g.unMount){const u=d(n,t);u&&(u._f.refs?u._f.refs.every(a=>!Ee(a)):!Ee(u._f.ref))&&me(t)}g.unMount=new Set},V=(t,u)=>(t&&u&&m(f,t,u),!Y(Be(),l)),E=(t,u,a)=>at(t,g,{..._.mount?f:k(u)?l:$(t)?{[t]:u}:u},a,u),U=t=>ae(d(_.mount?f:l,t,e.shouldUnregister?d(l,t,[]):[])),M=(t,u,a={})=>{const y=d(n,t);let c=u;if(y){const o=y._f;o&&(!o.disabled&&m(f,t,ht(u,o)),c=ge(o.ref)&&R(u)?"":u,ct(o.ref)?[...o.ref.options].forEach(h=>h.selected=c.includes(h.value)):o.refs?ne(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(c)?!!c.find(x=>x===h.value):c===h.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(h=>h.checked=h.value===c):Ue(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||v.values.next({name:t,values:{...f}})))}(a.shouldDirty||a.shouldTouch)&&Z(t,c,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&xe(t)},H=(t,u,a)=>{for(const y in u){const c=u[y],o=`${t}.${y}`,h=d(n,o);(g.array.has(t)||!_e(c)||h&&!h._f)&&!re(c)?H(o,c,a):M(o,c,a)}},X=(t,u,a={})=>{const y=d(n,t),c=g.array.has(t),o=N(u);m(f,t,o),c?(v.array.next({name:t,values:{...f}}),(F.isDirty||F.dirtyFields)&&a.shouldDirty&&v.state.next({name:t,dirtyFields:pe(l,f),isDirty:V(t,o)})):y&&!y._f&&!R(o)?H(t,o,a):M(t,o,a),ze(t,g)&&v.state.next({...s}),v.values.next({name:t,values:{...f}}),!_.mount&&i()},ie=async t=>{const u=t.target;let a=u.name,y=!0;const c=d(n,a),o=()=>u.type?Ce(c._f):rt(t),h=x=>{y=Number.isNaN(x)||x===d(f,a,x)};if(c){let x,p;const fe=o(),ee=t.type===he.BLUR||t.type===he.FOCUS_OUT,Vt=!Rt(c._f)&&!r.resolver&&!d(s.errors,a)&&!c._f.deps||Ut(ee,d(s.touchedFields,a),s.isSubmitted,Ve,T),we=ze(a,g,ee);m(f,a,fe),ee?(c._f.onBlur&&c._f.onBlur(t),S&&S(0)):c._f.onChange&&c._f.onChange(t);const Se=Z(a,fe,ee,!1),At=!B(Se)||we;if(!ee&&v.values.next({name:a,type:t.type,values:{...f}}),Vt)return F.isValid&&b(),At&&v.state.next({name:a,...we?{}:Se});if(!ee&&we&&v.state.next({...s}),P(!0),r.resolver){const{errors:$e}=await W([a]);if(h(fe),y){const Ft=et(s.errors,n,a),Ke=et($e,n,Ft.name||a);x=Ke.error,a=Ke.name,p=B($e)}}else x=(await Ze(c,f,le,r.shouldUseNativeValidation))[a],h(fe),y&&(x?p=!1:F.isValid&&(p=await G(n,!0)));y&&(c._f.deps&&xe(c._f.deps),Fe(a,p,x,Se))}},oe=(t,u)=>{if(d(s.errors,u)&&t.focus)return t.focus(),1},xe=async(t,u={})=>{let a,y;const c=ce(t);if(P(!0),r.resolver){const o=await Q(k(t)?t:c);a=B(o),y=t?!c.some(h=>d(o,h)):a}else t?(y=(await Promise.all(c.map(async o=>{const h=d(n,o);return await G(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!y&&!s.isValid)&&b()):y=a=await G(n);return v.state.next({...!$(t)||F.isValid&&a!==s.isValid?{}:{name:t},...r.resolver||!t?{isValid:a}:{},errors:s.errors,isValidating:!1}),u.shouldFocus&&!y&&de(n,oe,t?c:g.mount),y},Be=t=>{const u={...l,..._.mount?f:{}};return k(t)?u:$(t)?d(u,t):t.map(a=>d(u,a))},Pe=(t,u)=>({invalid:!!d((u||s).errors,t),isDirty:!!d((u||s).dirtyFields,t),isTouched:!!d((u||s).touchedFields,t),error:d((u||s).errors,t)}),gt=t=>{t&&ce(t).forEach(u=>L(s.errors,u)),v.state.next({errors:t?s.errors:{}})},Ne=(t,u,a)=>{const y=(d(n,t,{_f:{}})._f||{}).ref;m(s.errors,t,{...u,ref:y}),v.state.next({name:t,errors:s.errors,isValid:!1}),a&&a.shouldFocus&&y&&y.focus&&y.focus()},vt=(t,u)=>J(t)?v.values.subscribe({next:a=>t(E(void 0,u),a)}):E(t,u,!0),me=(t,u={})=>{for(const a of t?ce(t):g.mount)g.mount.delete(a),g.array.delete(a),u.keepValue||(L(n,a),L(f,a)),!u.keepError&&L(s.errors,a),!u.keepDirty&&L(s.dirtyFields,a),!u.keepTouched&&L(s.touchedFields,a),!r.shouldUnregister&&!u.keepDefaultValue&&L(l,a);v.values.next({values:{...f}}),v.state.next({...s,...u.keepDirty?{isDirty:V()}:{}}),!u.keepIsValid&&b()},Ie=({disabled:t,name:u,field:a,fields:y,value:c})=>{if(j(t)){const o=t?void 0:k(c)?Ce(a?a._f:d(y,u)._f):c;m(f,u,o),Z(u,o,!1,!1,!0)}},De=(t,u={})=>{let a=d(n,t);const y=j(u.disabled);return m(n,t,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:t}},name:t,mount:!0,...u}}),g.mount.add(t),a?Ie({field:a,disabled:u.disabled,name:t}):se(t,!0,u.value),{...y?{disabled:u.disabled}:{},...r.progressive?{required:!!u.required,min:ue(u.min),max:ue(u.max),minLength:ue(u.minLength),maxLength:ue(u.maxLength),pattern:ue(u.pattern)}:{},name:t,onChange:ie,onBlur:ie,ref:c=>{if(c){De(t,u),a=d(n,t);const o=k(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,h=Lt(o),x=a._f.refs||[];if(h?x.find(p=>p===o):o===a._f.ref)return;m(n,t,{_f:{...a._f,...h?{refs:[...x.filter(Ee),o,...Array.isArray(d(l,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),se(t,!1,void 0,o)}else a=d(n,t,{}),a._f&&(a._f.mount=!1),(r.shouldUnregister||u.shouldUnregister)&&!(st(g.array,t)&&_.action)&&g.unMount.add(t)}}},qe=()=>r.shouldFocusError&&de(n,oe,g.mount),_t=t=>{j(t)&&(v.state.next({disabled:t}),de(n,u=>{u.disabled=t},0,!1))},We=(t,u)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let y=N(f);if(v.state.next({isSubmitting:!0}),r.resolver){const{errors:c,values:o}=await W();s.errors=c,y=o}else await G(n);L(s.errors,"root"),B(s.errors)?(v.state.next({errors:{}}),await t(y,a)):(u&&await u({...s.errors},a),qe(),setTimeout(qe)),v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:B(s.errors),submitCount:s.submitCount+1,errors:s.errors})},bt=(t,u={})=>{d(n,t)&&(k(u.defaultValue)?X(t,d(l,t)):(X(t,u.defaultValue),m(l,t,u.defaultValue)),u.keepTouched||L(s.touchedFields,t),u.keepDirty||(L(s.dirtyFields,t),s.isDirty=u.defaultValue?V(t,d(l,t)):V()),u.keepError||(L(s.errors,t),F.isValid&&b()),v.state.next({...s}))},He=(t,u={})=>{const a=t?N(t):l,y=N(a),c=t&&!B(t)?y:l;if(u.keepDefaultValues||(l=a),!u.keepValues){if(u.keepDirtyValues||q)for(const o of g.mount)d(s.dirtyFields,o)?m(c,o,d(f,o)):X(o,d(c,o));else{if(Oe&&k(t))for(const o of g.mount){const h=d(n,o);if(h&&h._f){const x=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(ge(x)){const p=x.closest("form");if(p){p.reset();break}}}}n={}}f=e.shouldUnregister?u.keepDefaultValues?N(l):{}:N(c),v.array.next({values:{...c}}),v.values.next({values:{...c}})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!_.mount&&i(),_.mount=!F.isValid||!!u.keepIsValid,_.watch=!!e.shouldUnregister,v.state.next({submitCount:u.keepSubmitCount?s.submitCount:0,isDirty:u.keepDirty?s.isDirty:!!(u.keepDefaultValues&&!Y(t,l)),isSubmitted:u.keepIsSubmitted?s.isSubmitted:!1,dirtyFields:u.keepDirtyValues?s.dirtyFields:u.keepDefaultValues&&t?pe(l,t):{},touchedFields:u.keepTouched?s.touchedFields:{},errors:u.keepErrors?s.errors:{},isSubmitSuccessful:u.keepIsSubmitSuccessful?s.isSubmitSuccessful:!1,isSubmitting:!1})},je=(t,u)=>He(J(t)?t(f):t,u);return{control:{register:De,unregister:me,getFieldState:Pe,handleSubmit:We,setError:Ne,_executeSchema:W,_getWatch:E,_getDirty:V,_updateValid:b,_removeUnmounted:A,_updateFieldArray:K,_updateDisabledField:Ie,_getFieldArray:U,_reset:He,_resetDefaultValues:()=>J(r.defaultValues)&&r.defaultValues().then(t=>{je(t,r.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:t=>{s={...s,...t}},_disableForm:_t,_subjects:v,_proxyFormState:F,get _fields(){return n},get _formValues(){return f},get _state(){return _},set _state(t){_=t},get _defaultValues(){return l},get _names(){return g},set _names(t){g=t},get _formState(){return s},set _formState(t){s=t},get _options(){return r},set _options(t){r={...r,...t}}},trigger:xe,register:De,handleSubmit:We,watch:vt,setValue:X,getValues:Be,reset:je,resetField:bt,clearErrors:gt,unregister:me,setError:Ne,setFocus:(t,u={})=>{const a=d(n,t),y=a&&a._f;if(y){const c=y.refs?y.refs[0]:y.ref;c.focus&&(c.focus(),u.shouldSelect&&c.select())}},getFieldState:Pe}}function jt(e={}){const i=w.useRef(),r=w.useRef(),[s,n]=w.useState({isDirty:!1,isValidating:!1,isLoading:J(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:J(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...Pt(e,()=>n(f=>({...f}))),formState:s});const l=i.current.control;return l._options=e,Te({subject:l._subjects.state,next:f=>{ut(f,l._proxyFormState,l._updateFormState,!0)&&n({...l._formState})}}),w.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),w.useEffect(()=>{if(l._proxyFormState.isDirty){const f=l._getDirty();f!==s.isDirty&&l._subjects.state.next({isDirty:f})}},[l,s.isDirty]),w.useEffect(()=>{e.values&&!Y(e.values,r.current)?(l._reset(e.values,l._options.resetOptions),r.current=e.values):l._resetDefaultValues()},[e.values,l]),w.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),i.current.formState=it(s,l),i.current}export{Ht as C,jt as u};
//# sourceMappingURL=index.esm-d81a0d8c.js.map
