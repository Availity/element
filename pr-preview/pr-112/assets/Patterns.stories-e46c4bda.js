import{a as p,j as $}from"./jsx-runtime-a3bcee63.js";import{a as D,r as sr}from"./index-570b25c1.js";import{B as ge,I as Gr}from"./index-79c6e3ad.js";import{C as zr}from"./index-07d1cb73.js";import{F as $r,c as jr,d as Kr,a as Zr}from"./index-23898db5.js";import{S as Xr,F as Jr,C as Qr}from"./index-2680a805.js";import{B as ve,G as fe,S as lr}from"./index-d756ba90.js";import{M as Yr}from"./MenuItem-e291e990.js";import{P as et}from"./index-e6397f93.js";import{T as rt}from"./index-5f17ede3.js";import{T as He}from"./index-96688515.js";import{a as tt,c as st}from"./TablePagination-4527b1e8.js";import{a as ir,T as lt}from"./TableRow-1c892633.js";import{T as ee}from"./TableCell-68319348.js";import{T as it}from"./TableContainer-18d5822e.js";import"./TableSortLabel-28341db9.js";import{F as at}from"./FormLabel-16418a49.js";import{I as ot}from"./InputAdornment-7e93bf94.js";import{P as nt}from"./Popover-8764923e.js";import{F as ut}from"./FormGroup-7fc7ab9c.js";import{L as ct}from"./Link-a674eae6.js";import"./_commonjsHelpers-042e6b4d.js";import"./Button-d84dd9a0.js";import"./createTheme-bcd1d157.js";import"./clsx-7dc4e18d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-7846e708.js";import"./useThemeProps-018254e6.js";import"./generateUtilityClasses-70c60a0e.js";import"./ButtonBase-d80b4855.js";import"./emotion-react.browser.esm-474fda6d.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-7b318ec2.js";import"./useTheme-76c02901.js";import"./objectWithoutPropertiesLoose-830c72af.js";import"./ownerDocument-613eb639.js";import"./Grow-e87a736b.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useSlotProps-4e64ffeb.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-de653fbd.js";import"./LoadingButton-7f26c21d.js";import"./extends-90dea224.js";import"./CircularProgress-83597315.js";import"./Chip-31690be4.js";import"./createSvgIcon-60c2b2ae.js";import"./SvgIcon-951d7748.js";import"./index-9681c8ff.js";import"./Box-0b96d669.js";import"./extendSxProp-9115426f.js";import"./FormControlLabel-625d44f3.js";import"./utils-3d35716f.js";import"./Typography-f61e077a.js";import"./Stack-8a417692.js";import"./styled-11d1647d.js";import"./FormHelperText-ae2a8f0e.js";import"./OutlinedInput-3f0ad5ba.js";import"./ownerWindow-03d1c82d.js";import"./debounce-517eeb3c.js";import"./GlobalStyles-7ba993a7.js";import"./Select-a7d3ceb5.js";import"./react-is.production.min-a192e302.js";import"./Menu-619ef715.js";import"./Modal-30bbe0c7.js";import"./Backdrop-49825a13.js";import"./createChainedFunction-0bab83cf.js";import"./Divider-fcaf2f3a.js";import"./dividerClasses-b19abef8.js";import"./faCircleArrowRight-4b60ae06.js";import"./faMagnifyingGlass-482fd726.js";import"./Container-a1530f69.js";import"./Grid2-c21e3f98.js";import"./isMuiElement-6907f060.js";import"./Paper-722ac472.js";import"./TextField-f0593bb0.js";import"./TablePagination-421bad31.js";import"./TableCell-fb4a8185.js";import"./KeyboardArrowRight-f02ae11e.js";import"./PaginationItem-822000d2.js";import"./Pagination-fdc7dc59.js";import"./TableRow-c3ef4dbb.js";import"./TableContainer-417e126a.js";import"./TableSortLabel-7b4a57ce.js";var ar=e=>p(Yr,{...e,disableRipple:!0,disableTouchRipple:!0}),he=e=>e.type==="checkbox",ne=e=>e instanceof Date,q=e=>e==null;const _r=e=>typeof e=="object";var R=e=>!q(e)&&!Array.isArray(e)&&_r(e)&&!ne(e),xr=e=>R(e)&&e.target?he(e.target)?e.target.checked:e.target.value:e,dt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Sr=(e,l)=>e.has(dt(l)),ft=e=>{const l=e.constructor&&e.constructor.prototype;return R(l)&&l.hasOwnProperty("isPrototypeOf")},We=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Z(e){let l;const t=Array.isArray(e);if(e instanceof Date)l=new Date(e);else if(e instanceof Set)l=new Set(e);else if(!(We&&(e instanceof Blob||e instanceof FileList))&&(t||R(e)))if(l=t?[]:{},!t&&!ft(e))l=e;else for(const s in e)e.hasOwnProperty(s)&&(l[s]=Z(e[s]));else return e;return l}var ye=e=>Array.isArray(e)?e.filter(Boolean):[],L=e=>e===void 0,f=(e,l,t)=>{if(!l||!R(e))return t;const s=ye(l.split(/[,[\].]+?/)).reduce((a,o)=>q(a)?a:a[o],e);return L(s)||s===e?L(e[l])?t:e[l]:s},J=e=>typeof e=="boolean";const Ce={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},X={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Y={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},mt=D.createContext(null),qe=()=>D.useContext(mt);var Cr=(e,l,t,s=!0)=>{const a={defaultValues:l._defaultValues};for(const o in e)Object.defineProperty(a,o,{get:()=>{const c=o;return l._proxyFormState[c]!==X.all&&(l._proxyFormState[c]=!s||X.all),t&&(t[c]=!0),e[c]}});return a},j=e=>R(e)&&!Object.keys(e).length,Ar=(e,l,t,s)=>{t(e);const{name:a,...o}=e;return j(o)||Object.keys(o).length>=Object.keys(l).length||Object.keys(o).find(c=>l[c]===(!s||X.all))},_e=e=>Array.isArray(e)?e:[e],wr=(e,l,t)=>!e||!l||e===l||_e(e).some(s=>s&&(t?s===l:s.startsWith(l)||l.startsWith(s)));function Ne(e){const l=D.useRef(e);l.current=e,D.useEffect(()=>{const t=!e.disabled&&l.current.subject&&l.current.subject.subscribe({next:l.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function ht(e){const l=qe(),{control:t=l.control,disabled:s,name:a,exact:o}=e||{},[c,g]=D.useState(t._formState),y=D.useRef(!0),T=D.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),C=D.useRef(a);return C.current=a,Ne({disabled:s,next:x=>y.current&&wr(C.current,x.name,o)&&Ar(x,T.current,t._updateFormState)&&g({...t._formState,...x}),subject:t._subjects.state}),D.useEffect(()=>(y.current=!0,T.current.isValid&&t._updateValid(!0),()=>{y.current=!1}),[t]),Cr(c,t,T.current,!1)}var Q=e=>typeof e=="string",kr=(e,l,t,s,a)=>Q(e)?(s&&l.watch.add(e),f(t,e,a)):Array.isArray(e)?e.map(o=>(s&&l.watch.add(o),f(t,o))):(s&&(l.watchAll=!0),t);function yt(e){const l=qe(),{control:t=l.control,name:s,defaultValue:a,disabled:o,exact:c}=e||{},g=D.useRef(s);g.current=s,Ne({disabled:o,subject:t._subjects.values,next:C=>{wr(g.current,C.name,c)&&T(Z(kr(g.current,t._names,C.values||t._formValues,!1,a)))}});const[y,T]=D.useState(t._getWatch(s,a));return D.useEffect(()=>t._removeUnmounted()),y}var Ge=e=>/^\w*$/.test(e),Tr=e=>ye(e.replace(/["|']|\]/g,"").split(/\.|\[/));function k(e,l,t){let s=-1;const a=Ge(l)?[l]:Tr(l),o=a.length,c=o-1;for(;++s<o;){const g=a[s];let y=t;if(s!==c){const T=e[g];y=R(T)||Array.isArray(T)?T:isNaN(+a[s+1])?{}:[]}e[g]=y,e=e[g]}return e}function pt(e){const l=qe(),{name:t,disabled:s,control:a=l.control,shouldUnregister:o}=e,c=Sr(a._names.array,t),g=yt({control:a,name:t,defaultValue:f(a._formValues,t,f(a._defaultValues,t,e.defaultValue)),exact:!0}),y=ht({control:a,name:t}),T=D.useRef(a.register(t,{...e.rules,value:g}));return T.current=a.register(t,e.rules),D.useEffect(()=>{const C=a._options.shouldUnregister||o,x=(b,z)=>{const M=f(a._fields,b);M&&(M._f.mount=z)};if(x(t,!0),C){const b=Z(f(a._options.defaultValues,t));k(a._defaultValues,t,b),L(f(a._formValues,t))&&k(a._formValues,t,b)}return()=>{(c?C&&!a._state.action:C)?a.unregister(t):x(t,!1)}},[t,a,c,o]),D.useEffect(()=>{f(a._fields,t)&&a._updateDisabledField({disabled:s,fields:a._fields,name:t,value:f(a._fields,t)._f.value})},[s,t,a]),{field:{name:t,value:g,...J(s)||J(y.disabled)?{disabled:y.disabled||s}:{},onChange:D.useCallback(C=>T.current.onChange({target:{value:xr(C),name:t},type:Ce.CHANGE}),[t]),onBlur:D.useCallback(()=>T.current.onBlur({target:{value:f(a._formValues,t),name:t},type:Ce.BLUR}),[t,a]),ref:C=>{const x=f(a._fields,t);x&&C&&(x._f.ref={focus:()=>C.focus(),select:()=>C.select(),setCustomValidity:b=>C.setCustomValidity(b),reportValidity:()=>C.reportValidity()})}},formState:y,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!f(y.errors,t)},isDirty:{enumerable:!0,get:()=>!!f(y.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!f(y.touchedFields,t)},error:{enumerable:!0,get:()=>f(y.errors,t)}})}}const Ie=e=>e.render(pt(e));var bt=(e,l,t,s,a)=>l?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[s]:a||!0}}:{},or=e=>({isOnSubmit:!e||e===X.onSubmit,isOnBlur:e===X.onBlur,isOnChange:e===X.onChange,isOnAll:e===X.all,isOnTouch:e===X.onTouched}),nr=(e,l,t)=>!t&&(l.watchAll||l.watch.has(e)||[...l.watch].some(s=>e.startsWith(s)&&/^\.\w+/.test(e.slice(s.length))));const xe=(e,l,t,s)=>{for(const a of t||Object.keys(e)){const o=f(e,a);if(o){const{_f:c,...g}=o;if(c){if(c.refs&&c.refs[0]&&l(c.refs[0],a)&&!s)break;if(c.ref&&l(c.ref,c.name)&&!s)break}else R(g)&&xe(g,l)}}};var gt=(e,l,t)=>{const s=ye(f(e,t));return k(s,"root",l[t]),k(e,t,s),e},ze=e=>e.type==="file",se=e=>typeof e=="function",Ae=e=>{if(!We)return!1;const l=e?e.ownerDocument:0;return e instanceof(l&&l.defaultView?l.defaultView.HTMLElement:HTMLElement)},Se=e=>Q(e),$e=e=>e.type==="radio",we=e=>e instanceof RegExp;const ur={value:!1,isValid:!1},cr={value:!0,isValid:!0};var Br=e=>{if(Array.isArray(e)){if(e.length>1){const l=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:l,isValid:!!l.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!L(e[0].attributes.value)?L(e[0].value)||e[0].value===""?cr:{value:e[0].value,isValid:!0}:cr:ur}return ur};const dr={isValid:!1,value:null};var Dr=e=>Array.isArray(e)?e.reduce((l,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:l,dr):dr;function fr(e,l,t="validate"){if(Se(e)||Array.isArray(e)&&e.every(Se)||J(e)&&!e)return{type:t,message:Se(e)?e:"",ref:l}}var oe=e=>R(e)&&!we(e)?e:{value:e,message:""},mr=async(e,l,t,s,a)=>{const{ref:o,refs:c,required:g,maxLength:y,minLength:T,min:C,max:x,pattern:b,validate:z,name:M,valueAsNumber:ue,mount:le,disabled:ce}=e._f,F=f(l,M);if(!le||ce)return{};const _=c?c[0]:o,B=V=>{s&&_.reportValidity&&(_.setCustomValidity(J(V)?"":V||""),_.reportValidity())},S={},O=$e(o),H=he(o),re=O||H,K=(ue||ze(o))&&L(o.value)&&L(F)||Ae(o)&&o.value===""||F===""||Array.isArray(F)&&!F.length,te=bt.bind(null,M,t,S),W=(V,v,A,P=Y.maxLength,E=Y.minLength)=>{const G=V?v:A;S[M]={type:V?P:E,message:G,ref:o,...te(V?P:E,G)}};if(a?!Array.isArray(F)||!F.length:g&&(!re&&(K||q(F))||J(F)&&!F||H&&!Br(c).isValid||O&&!Dr(c).isValid)){const{value:V,message:v}=Se(g)?{value:!!g,message:g}:oe(g);if(V&&(S[M]={type:Y.required,message:v,ref:_,...te(Y.required,v)},!t))return B(v),S}if(!K&&(!q(C)||!q(x))){let V,v;const A=oe(x),P=oe(C);if(!q(F)&&!isNaN(F)){const E=o.valueAsNumber||F&&+F;q(A.value)||(V=E>A.value),q(P.value)||(v=E<P.value)}else{const E=o.valueAsDate||new Date(F),G=pe=>new Date(new Date().toDateString()+" "+pe),N=o.type=="time",de=o.type=="week";Q(A.value)&&F&&(V=N?G(F)>G(A.value):de?F>A.value:E>new Date(A.value)),Q(P.value)&&F&&(v=N?G(F)<G(P.value):de?F<P.value:E<new Date(P.value))}if((V||v)&&(W(!!V,A.message,P.message,Y.max,Y.min),!t))return B(S[M].message),S}if((y||T)&&!K&&(Q(F)||a&&Array.isArray(F))){const V=oe(y),v=oe(T),A=!q(V.value)&&F.length>+V.value,P=!q(v.value)&&F.length<+v.value;if((A||P)&&(W(A,V.message,v.message),!t))return B(S[M].message),S}if(b&&!K&&Q(F)){const{value:V,message:v}=oe(b);if(we(V)&&!F.match(V)&&(S[M]={type:Y.pattern,message:v,ref:o,...te(Y.pattern,v)},!t))return B(v),S}if(z){if(se(z)){const V=await z(F,l),v=fr(V,_);if(v&&(S[M]={...v,...te(Y.validate,v.message)},!t))return B(v.message),S}else if(R(z)){let V={};for(const v in z){if(!j(V)&&!t)break;const A=fr(await z[v](F,l),_,v);A&&(V={...A,...te(v,A.message)},B(A.message),t&&(S[M]=V))}if(!j(V)&&(S[M]={ref:_,...V},!t))return S}}return B(!0),S};function vt(e,l){const t=l.slice(0,-1).length;let s=0;for(;s<t;)e=L(e)?s++:e[l[s++]];return e}function Ft(e){for(const l in e)if(e.hasOwnProperty(l)&&!L(e[l]))return!1;return!0}function U(e,l){const t=Array.isArray(l)?l:Ge(l)?[l]:Tr(l),s=t.length===1?e:vt(e,t),a=t.length-1,o=t[a];return s&&delete s[o],a!==0&&(R(s)&&j(s)||Array.isArray(s)&&Ft(s))&&U(e,t.slice(0,-1)),e}function Pe(){let e=[];return{get observers(){return e},next:a=>{for(const o of e)o.next&&o.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(o=>o!==a)}}),unsubscribe:()=>{e=[]}}}var ke=e=>q(e)||!_r(e);function ie(e,l){if(ke(e)||ke(l))return e===l;if(ne(e)&&ne(l))return e.getTime()===l.getTime();const t=Object.keys(e),s=Object.keys(l);if(t.length!==s.length)return!1;for(const a of t){const o=e[a];if(!s.includes(a))return!1;if(a!=="ref"){const c=l[a];if(ne(o)&&ne(c)||R(o)&&R(c)||Array.isArray(o)&&Array.isArray(c)?!ie(o,c):o!==c)return!1}}return!0}var Lr=e=>e.type==="select-multiple",Vt=e=>$e(e)||he(e),Re=e=>Ae(e)&&e.isConnected,Er=e=>{for(const l in e)if(se(e[l]))return!0;return!1};function Te(e,l={}){const t=Array.isArray(e);if(R(e)||t)for(const s in e)Array.isArray(e[s])||R(e[s])&&!Er(e[s])?(l[s]=Array.isArray(e[s])?[]:{},Te(e[s],l[s])):q(e[s])||(l[s]=!0);return l}function Or(e,l,t){const s=Array.isArray(e);if(R(e)||s)for(const a in e)Array.isArray(e[a])||R(e[a])&&!Er(e[a])?L(l)||ke(t[a])?t[a]=Array.isArray(e[a])?Te(e[a],[]):{...Te(e[a])}:Or(e[a],q(l)?{}:l[a],t[a]):t[a]=!ie(e[a],l[a]);return t}var Me=(e,l)=>Or(e,l,Te(l)),Ir=(e,{valueAsNumber:l,valueAsDate:t,setValueAs:s})=>L(e)?e:l?e===""?NaN:e&&+e:t&&Q(e)?new Date(e):s?s(e):e;function Ue(e){const l=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):l.disabled))return ze(l)?l.files:$e(l)?Dr(e.refs).value:Lr(l)?[...l.selectedOptions].map(({value:t})=>t):he(l)?Br(e.refs).value:Ir(L(l.value)?e.ref.value:l.value,e)}var _t=(e,l,t,s)=>{const a={};for(const o of e){const c=f(l,o);c&&k(a,o,c._f)}return{criteriaMode:t,names:[...e],fields:a,shouldUseNativeValidation:s}},me=e=>L(e)?e:we(e)?e.source:R(e)?we(e.value)?e.value.source:e.value:e,xt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function hr(e,l,t){const s=f(e,t);if(s||Ge(t))return{error:s,name:t};const a=t.split(".");for(;a.length;){const o=a.join("."),c=f(l,o),g=f(e,o);if(c&&!Array.isArray(c)&&t!==o)return{name:t};if(g&&g.type)return{name:o,error:g};a.pop()}return{name:t}}var St=(e,l,t,s,a)=>a.isOnAll?!1:!t&&a.isOnTouch?!(l||e):(t?s.isOnBlur:a.isOnBlur)?!e:(t?s.isOnChange:a.isOnChange)?e:!0,Ct=(e,l)=>!ye(f(e,l)).length&&U(e,l);const At={mode:X.onSubmit,reValidateMode:X.onChange,shouldFocusError:!0};function wt(e={},l){let t={...At,...e},s={submitCount:0,isDirty:!1,isLoading:se(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},a={},o=R(t.defaultValues)||R(t.values)?Z(t.defaultValues||t.values)||{}:{},c=t.shouldUnregister?{}:Z(o),g={action:!1,mount:!1,watch:!1},y={mount:new Set,unMount:new Set,array:new Set,watch:new Set},T,C=0;const x={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},b={values:Pe(),array:Pe(),state:Pe()},z=e.resetOptions&&e.resetOptions.keepDirtyValues,M=or(t.mode),ue=or(t.reValidateMode),le=t.criteriaMode===X.all,ce=r=>i=>{clearTimeout(C),C=setTimeout(r,i)},F=async r=>{if(x.isValid||r){const i=t.resolver?j((await K()).errors):await W(a,!0);i!==s.isValid&&b.state.next({isValid:i})}},_=r=>x.isValidating&&b.state.next({isValidating:r}),B=(r,i=[],n,m,d=!0,u=!0)=>{if(m&&n){if(g.action=!0,u&&Array.isArray(f(a,r))){const h=n(f(a,r),m.argA,m.argB);d&&k(a,r,h)}if(u&&Array.isArray(f(s.errors,r))){const h=n(f(s.errors,r),m.argA,m.argB);d&&k(s.errors,r,h),Ct(s.errors,r)}if(x.touchedFields&&u&&Array.isArray(f(s.touchedFields,r))){const h=n(f(s.touchedFields,r),m.argA,m.argB);d&&k(s.touchedFields,r,h)}x.dirtyFields&&(s.dirtyFields=Me(o,c)),b.state.next({name:r,isDirty:v(r,i),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else k(c,r,i)},S=(r,i)=>{k(s.errors,r,i),b.state.next({errors:s.errors})},O=(r,i,n,m)=>{const d=f(a,r);if(d){const u=f(c,r,L(n)?f(o,r):n);L(u)||m&&m.defaultChecked||i?k(c,r,i?u:Ue(d._f)):E(r,u),g.mount&&F()}},H=(r,i,n,m,d)=>{let u=!1,h=!1;const w={name:r};if(!n||m){x.isDirty&&(h=s.isDirty,s.isDirty=w.isDirty=v(),u=h!==w.isDirty);const I=ie(f(o,r),i);h=f(s.dirtyFields,r),I?U(s.dirtyFields,r):k(s.dirtyFields,r,!0),w.dirtyFields=s.dirtyFields,u=u||x.dirtyFields&&h!==!I}if(n){const I=f(s.touchedFields,r);I||(k(s.touchedFields,r,n),w.touchedFields=s.touchedFields,u=u||x.touchedFields&&I!==n)}return u&&d&&b.state.next(w),u?w:{}},re=(r,i,n,m)=>{const d=f(s.errors,r),u=x.isValid&&J(i)&&s.isValid!==i;if(e.delayError&&n?(T=ce(()=>S(r,n)),T(e.delayError)):(clearTimeout(C),T=null,n?k(s.errors,r,n):U(s.errors,r)),(n?!ie(d,n):d)||!j(m)||u){const h={...m,...u&&J(i)?{isValid:i}:{},errors:s.errors,name:r};s={...s,...h},b.state.next(h)}_(!1)},K=async r=>t.resolver(c,t.context,_t(r||y.mount,a,t.criteriaMode,t.shouldUseNativeValidation)),te=async r=>{const{errors:i}=await K(r);if(r)for(const n of r){const m=f(i,n);m?k(s.errors,n,m):U(s.errors,n)}else s.errors=i;return i},W=async(r,i,n={valid:!0})=>{for(const m in r){const d=r[m];if(d){const{_f:u,...h}=d;if(u){const w=y.array.has(u.name),I=await mr(d,c,le,t.shouldUseNativeValidation&&!i,w);if(I[u.name]&&(n.valid=!1,i))break;!i&&(f(I,u.name)?w?gt(s.errors,I,u.name):k(s.errors,u.name,I[u.name]):U(s.errors,u.name))}h&&await W(h,i,n)}}return n.valid},V=()=>{for(const r of y.unMount){const i=f(a,r);i&&(i._f.refs?i._f.refs.every(n=>!Re(n)):!Re(i._f.ref))&&De(r)}y.unMount=new Set},v=(r,i)=>(r&&i&&k(c,r,i),!ie(je(),o)),A=(r,i,n)=>kr(r,y,{...g.mount?c:L(i)?o:Q(r)?{[r]:i}:i},n,i),P=r=>ye(f(g.mount?c:o,r,e.shouldUnregister?f(o,r,[]):[])),E=(r,i,n={})=>{const m=f(a,r);let d=i;if(m){const u=m._f;u&&(!u.disabled&&k(c,r,Ir(i,u)),d=Ae(u.ref)&&q(i)?"":i,Lr(u.ref)?[...u.ref.options].forEach(h=>h.selected=d.includes(h.value)):u.refs?he(u.ref)?u.refs.length>1?u.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(d)?!!d.find(w=>w===h.value):d===h.value)):u.refs[0]&&(u.refs[0].checked=!!d):u.refs.forEach(h=>h.checked=h.value===d):ze(u.ref)?u.ref.value="":(u.ref.value=d,u.ref.type||b.values.next({name:r,values:{...c}})))}(n.shouldDirty||n.shouldTouch)&&H(r,d,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&Be(r)},G=(r,i,n)=>{for(const m in i){const d=i[m],u=`${r}.${m}`,h=f(a,u);(y.array.has(r)||!ke(d)||h&&!h._f)&&!ne(d)?G(u,d,n):E(u,d,n)}},N=(r,i,n={})=>{const m=f(a,r),d=y.array.has(r),u=Z(i);k(c,r,u),d?(b.array.next({name:r,values:{...c}}),(x.isDirty||x.dirtyFields)&&n.shouldDirty&&b.state.next({name:r,dirtyFields:Me(o,c),isDirty:v(r,u)})):m&&!m._f&&!q(u)?G(r,u,n):E(r,u,n),nr(r,y)&&b.state.next({...s}),b.values.next({name:r,values:{...c}}),!g.mount&&l()},de=async r=>{const i=r.target;let n=i.name,m=!0;const d=f(a,n),u=()=>i.type?Ue(d._f):xr(r),h=w=>{m=Number.isNaN(w)||w===f(c,n,w)};if(d){let w,I;const be=u(),ae=r.type===Ce.BLUR||r.type===Ce.FOCUS_OUT,Wr=!xt(d._f)&&!t.resolver&&!f(s.errors,n)&&!d._f.deps||St(ae,f(s.touchedFields,n),s.isSubmitted,ue,M),Ee=nr(n,y,ae);k(c,n,be),ae?(d._f.onBlur&&d._f.onBlur(r),T&&T(0)):d._f.onChange&&d._f.onChange(r);const Oe=H(n,be,ae,!1),qr=!j(Oe)||Ee;if(!ae&&b.values.next({name:n,type:r.type,values:{...c}}),Wr)return x.isValid&&F(),qr&&b.state.next({name:n,...Ee?{}:Oe});if(!ae&&Ee&&b.state.next({...s}),_(!0),t.resolver){const{errors:rr}=await K([n]);if(h(be),m){const Nr=hr(s.errors,a,n),tr=hr(rr,a,Nr.name||n);w=tr.error,n=tr.name,I=j(rr)}}else w=(await mr(d,c,le,t.shouldUseNativeValidation))[n],h(be),m&&(w?I=!1:x.isValid&&(I=await W(a,!0)));m&&(d._f.deps&&Be(d._f.deps),re(n,I,w,Oe))}},pe=(r,i)=>{if(f(s.errors,i)&&r.focus)return r.focus(),1},Be=async(r,i={})=>{let n,m;const d=_e(r);if(_(!0),t.resolver){const u=await te(L(r)?r:d);n=j(u),m=r?!d.some(h=>f(u,h)):n}else r?(m=(await Promise.all(d.map(async u=>{const h=f(a,u);return await W(h&&h._f?{[u]:h}:h)}))).every(Boolean),!(!m&&!s.isValid)&&F()):m=n=await W(a);return b.state.next({...!Q(r)||x.isValid&&n!==s.isValid?{}:{name:r},...t.resolver||!r?{isValid:n}:{},errors:s.errors,isValidating:!1}),i.shouldFocus&&!m&&xe(a,pe,r?d:y.mount),m},je=r=>{const i={...o,...g.mount?c:{}};return L(r)?i:Q(r)?f(i,r):r.map(n=>f(i,n))},Ke=(r,i)=>({invalid:!!f((i||s).errors,r),isDirty:!!f((i||s).dirtyFields,r),isTouched:!!f((i||s).touchedFields,r),error:f((i||s).errors,r)}),Rr=r=>{r&&_e(r).forEach(i=>U(s.errors,i)),b.state.next({errors:r?s.errors:{}})},Ze=(r,i,n)=>{const m=(f(a,r,{_f:{}})._f||{}).ref;k(s.errors,r,{...i,ref:m}),b.state.next({name:r,errors:s.errors,isValid:!1}),n&&n.shouldFocus&&m&&m.focus&&m.focus()},Mr=(r,i)=>se(r)?b.values.subscribe({next:n=>r(A(void 0,i),n)}):A(r,i,!0),De=(r,i={})=>{for(const n of r?_e(r):y.mount)y.mount.delete(n),y.array.delete(n),i.keepValue||(U(a,n),U(c,n)),!i.keepError&&U(s.errors,n),!i.keepDirty&&U(s.dirtyFields,n),!i.keepTouched&&U(s.touchedFields,n),!t.shouldUnregister&&!i.keepDefaultValue&&U(o,n);b.values.next({values:{...c}}),b.state.next({...s,...i.keepDirty?{isDirty:v()}:{}}),!i.keepIsValid&&F()},Xe=({disabled:r,name:i,field:n,fields:m,value:d})=>{if(J(r)){const u=r?void 0:L(d)?Ue(n?n._f:f(m,i)._f):d;k(c,i,u),H(i,u,!1,!1,!0)}},Le=(r,i={})=>{let n=f(a,r);const m=J(i.disabled);return k(a,r,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:r}},name:r,mount:!0,...i}}),y.mount.add(r),n?Xe({field:n,disabled:i.disabled,name:r}):O(r,!0,i.value),{...m?{disabled:i.disabled}:{},...t.progressive?{required:!!i.required,min:me(i.min),max:me(i.max),minLength:me(i.minLength),maxLength:me(i.maxLength),pattern:me(i.pattern)}:{},name:r,onChange:de,onBlur:de,ref:d=>{if(d){Le(r,i),n=f(a,r);const u=L(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,h=Vt(u),w=n._f.refs||[];if(h?w.find(I=>I===u):u===n._f.ref)return;k(a,r,{_f:{...n._f,...h?{refs:[...w.filter(Re),u,...Array.isArray(f(o,r))?[{}]:[]],ref:{type:u.type,name:r}}:{ref:u}}}),O(r,!1,void 0,u)}else n=f(a,r,{}),n._f&&(n._f.mount=!1),(t.shouldUnregister||i.shouldUnregister)&&!(Sr(y.array,r)&&g.action)&&y.unMount.add(r)}}},Je=()=>t.shouldFocusError&&xe(a,pe,y.mount),Ur=r=>{J(r)&&(b.state.next({disabled:r}),xe(a,i=>{i.disabled=r},0,!1))},Qe=(r,i)=>async n=>{n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let m=Z(c);if(b.state.next({isSubmitting:!0}),t.resolver){const{errors:d,values:u}=await K();s.errors=d,m=u}else await W(a);U(s.errors,"root"),j(s.errors)?(b.state.next({errors:{}}),await r(m,n)):(i&&await i({...s.errors},n),Je(),setTimeout(Je)),b.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:j(s.errors),submitCount:s.submitCount+1,errors:s.errors})},Hr=(r,i={})=>{f(a,r)&&(L(i.defaultValue)?N(r,f(o,r)):(N(r,i.defaultValue),k(o,r,i.defaultValue)),i.keepTouched||U(s.touchedFields,r),i.keepDirty||(U(s.dirtyFields,r),s.isDirty=i.defaultValue?v(r,f(o,r)):v()),i.keepError||(U(s.errors,r),x.isValid&&F()),b.state.next({...s}))},Ye=(r,i={})=>{const n=r?Z(r):o,m=Z(n),d=r&&!j(r)?m:o;if(i.keepDefaultValues||(o=n),!i.keepValues){if(i.keepDirtyValues||z)for(const u of y.mount)f(s.dirtyFields,u)?k(d,u,f(c,u)):N(u,f(d,u));else{if(We&&L(r))for(const u of y.mount){const h=f(a,u);if(h&&h._f){const w=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(Ae(w)){const I=w.closest("form");if(I){I.reset();break}}}}a={}}c=e.shouldUnregister?i.keepDefaultValues?Z(o):{}:Z(d),b.array.next({values:{...d}}),b.values.next({values:{...d}})}y={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!g.mount&&l(),g.mount=!x.isValid||!!i.keepIsValid,g.watch=!!e.shouldUnregister,b.state.next({submitCount:i.keepSubmitCount?s.submitCount:0,isDirty:i.keepDirty?s.isDirty:!!(i.keepDefaultValues&&!ie(r,o)),isSubmitted:i.keepIsSubmitted?s.isSubmitted:!1,dirtyFields:i.keepDirtyValues?s.dirtyFields:i.keepDefaultValues&&r?Me(o,r):{},touchedFields:i.keepTouched?s.touchedFields:{},errors:i.keepErrors?s.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?s.isSubmitSuccessful:!1,isSubmitting:!1})},er=(r,i)=>Ye(se(r)?r(c):r,i);return{control:{register:Le,unregister:De,getFieldState:Ke,handleSubmit:Qe,setError:Ze,_executeSchema:K,_getWatch:A,_getDirty:v,_updateValid:F,_removeUnmounted:V,_updateFieldArray:B,_updateDisabledField:Xe,_getFieldArray:P,_reset:Ye,_resetDefaultValues:()=>se(t.defaultValues)&&t.defaultValues().then(r=>{er(r,t.resetOptions),b.state.next({isLoading:!1})}),_updateFormState:r=>{s={...s,...r}},_disableForm:Ur,_subjects:b,_proxyFormState:x,get _fields(){return a},get _formValues(){return c},get _state(){return g},set _state(r){g=r},get _defaultValues(){return o},get _names(){return y},set _names(r){y=r},get _formState(){return s},set _formState(r){s=r},get _options(){return t},set _options(r){t={...t,...r}}},trigger:Be,register:Le,handleSubmit:Qe,watch:Mr,setValue:N,getValues:je,reset:er,resetField:Hr,clearErrors:Rr,unregister:De,setError:Ze,setFocus:(r,i={})=>{const n=f(a,r),m=n&&n._f;if(m){const d=m.refs?m.refs[0]:m.ref;d.focus&&(d.focus(),i.shouldSelect&&d.select())}},getFieldState:Ke}}function yr(e={}){const l=D.useRef(),t=D.useRef(),[s,a]=D.useState({isDirty:!1,isValidating:!1,isLoading:se(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:se(e.defaultValues)?void 0:e.defaultValues});l.current||(l.current={...wt(e,()=>a(c=>({...c}))),formState:s});const o=l.current.control;return o._options=e,Ne({subject:o._subjects.state,next:c=>{Ar(c,o._proxyFormState,o._updateFormState,!0)&&a({...o._formState})}}),D.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),D.useEffect(()=>{if(o._proxyFormState.isDirty){const c=o._getDirty();c!==s.isDirty&&o._subjects.state.next({isDirty:c})}},[o,s.isDirty]),D.useEffect(()=>{e.values&&!ie(e.values,t.current)?(o._reset(e.values,o._options.resetOptions),t.current=e.values):o._resetDefaultValues()},[e.values,o]),D.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),l.current.formState=Cr(s,o),l.current}const fl={title:"Components/Table/Patterns",tags:["autodocs"],parameters:{docs:{description:{component:"UX approved patterns to accompany Table"}}}},Pr=e=>$(et,{sx:{borderWidth:"1px",borderColor:"border.decoration",marginTop:2,borderBottom:"none"},children:[p(e,{}),p(it,{children:$(tt,{children:[p(st,{children:$(ir,{children:[p(ee,{children:"Column 1"}),p(ee,{children:"Column 2"}),p(ee,{children:"Column 3"}),p(ee,{children:"Column 4"}),p(ee,{children:"Column 5"}),p(ee,{children:"Column 6"})]})}),p(lt,{children:p(ir,{children:p(ee,{sx:{borderBottom:"none"}})})})]})})]}),Fe={render:(e,{globals:{theme:l}})=>p(ee,{component:"div",variant:"header",size:l==="light"?"medium":"small",children:p(He,{component:"div",variant:"h6",children:"Table Title"})}),decorators:[Pr]},Ve={render:(e,{globals:{theme:l}})=>{const t=[{searchbyValue:"column2",searchbyLabel:"Column 2",searchValue:"Payer 1"},{searchbyValue:"column5",searchbyLabel:"Column 5",searchValue:"Pending"}],s=[{label:"Column 1",value:"column1"},{label:"Column 2",value:"column2"},{label:"Column 3",value:"column3"}],a={searchbyValue:"column1",searchValue:""},[o,c]=sr.useState(t),[g,y]=sr.useState(null),T=!!g,C=T?"filter-popover":void 0,x=()=>{y(null)},b=_=>{y(_.currentTarget)},z=_=>{const B=o.findIndex(S=>S.searchbyValue===_.searchbyValue&&S.searchValue===_.searchValue);o.splice(B,1),c([...o])},M=_=>{const B=[...o,..._].sort((S,O)=>{const H=S.searchbyLabel.toUpperCase(),re=O.searchbyLabel.toUpperCase();return H<re?-1:H>re?1:0});c([...B])},{handleSubmit:ue,control:le}=yr({defaultValues:a}),ce=_=>{var S;const B={..._,searchbyLabel:((S=s.find(O=>O.value===_.searchbyValue))==null?void 0:S.label)||""};!o.find(O=>O.searchbyValue===B.searchbyValue&&O.searchValue===B.searchValue)&&M([B])},F=()=>{const _={column4:"",column5:"",column6:""},B=[{label:"Column 4",value:"column4"},{label:"Column 5",value:"column5"},{label:"Column 6",value:"column6"}],S=[{label:"Value 1",value:"value1"},{label:"Value 2",value:"value2"},{label:"Value 3",value:"value3"}],{handleSubmit:O,control:H,reset:re,formState:{errors:K}}=yr({defaultValues:_});return p(ve,{component:"form",id:"filter-form",onSubmit:O(W=>{var v,A;const V=[];for(const[P,E]of Object.entries(W)){const G=E&&!o.find(N=>N.searchbyValue===P&&N.searchValue===E)&&{searchbyValue:P,searchbyLabel:((v=B.find(N=>N.value===P))==null?void 0:v.label)||"",searchValue:E,searchLabel:((A=S.find(N=>N.value===E))==null?void 0:A.label)||""};G&&V.push(G)}V&&M(V),x()}),onReset:()=>re(),children:$(lr,{direction:"column",spacing:2,children:[B.map(W=>p(Ie,{name:W.value,control:H,render:({field:{onChange:V,value:v},fieldState:{error:A},formState:P})=>p(rt,{label:W.label,error:!!A,value:v,onChange:V,select:!0,margin:"none",children:S.map(E=>p(ar,{value:E.value,children:E.label},E.value))},W.value)})),$(lr,{direction:"row",spacing:2,children:[p(ge,{type:"reset",color:"secondary",children:"Reset Filters"}),p(ge,{type:"submit",color:"primary",children:"Apply Filters"})]})]})})};return $(ee,{component:"div",variant:"header",size:l==="light"?"medium":"small",children:[p(He,{component:"h3",variant:"h5",gutterBottom:!0,children:"Table Title"}),$(ve,{component:"form",id:"search-form",onSubmit:ue(ce),sx:{paddingBottom:2},children:[p($r,{htmlFor:"searchbyValue",id:"searchbyValueLabel",children:"Search By"}),$(fe,{container:!0,spacing:2,flexWrap:"wrap",width:"100%",children:[p(fe,{children:p(Ie,{name:"searchbyValue",control:le,rules:{required:{value:!0,message:"This field is required"}},render:({field:{onChange:_,value:B,ref:S},fieldState:{error:O}})=>p(jr,{fullWidth:!1,error:!!O,value:B,onChange:_,inputRef:S,margin:"none",sx:{flexShrink:0},labelId:"searchbyValueLabel",children:s.map(H=>p(ar,{value:H.value,children:H.label},H.value))})})}),p(fe,{sm:!0,children:p(Ie,{name:"searchValue",control:le,rules:{required:{value:!0,message:"This field is required"}},render:({field:{onChange:_,value:B,ref:S},fieldState:{error:O}})=>$(at,{error:!!O,margin:"none",sx:{flexGrow:1},fullWidth:!0,children:[p(Kr,{id:"search",value:B,onChange:_,inputRef:S,startAdornment:p(ot,{position:"start",children:p(Xr,{})}),placeholder:"Search",fullWidth:!0}),p(Zr,{children:O&&O.message})]})})}),p(fe,{children:p(ge,{type:"submit",color:"primary",size:"large",children:"Search"})}),p(fe,{children:p(ge,{type:"button",color:"secondary",startIcon:p(Jr,{}),"aria-controls":C||"",id:"filter-button",onClick:b,size:"large",children:"Filter"})})]})]}),p(nt,{id:C,"aria-labelledby":"filter-header",open:T,anchorEl:g,onClose:x,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:$(ve,{sx:{padding:2},children:[$(ve,{justifyContent:"space-between",display:"flex",paddingBottom:2,children:[p(He,{component:"h2",variant:"h6",id:"filter-header",children:"Filters"}),p(Gr,{title:"close",onClick:x,sx:{m:"-12px"},children:p(Qr,{fontSize:"small"})})]}),p(F,{})]})}),$(ut,{"aria-label":"filters",role:"group",row:!0,children:[o.map(_=>p(zr,{label:`${_.searchbyLabel}: ${_.searchLabel||_.searchValue}`,onDelete:()=>z(_),sx:{mr:1,mb:1}},`${_.searchbyValue}-${_.searchValue.toString().replace(/[^A-Z0-9]+/gi,"_")}}`)),!!o.length&&p(ct,{component:"button",typography:"body1",height:"26px",onClick:()=>{c([])},children:"Clear All Filters"})]})]})},decorators:[Pr]};var pr,br,gr;Fe.parameters={...Fe.parameters,docs:{...(pr=Fe.parameters)==null?void 0:pr.docs,source:{originalSource:`{
  render: (args, {
    globals: {
      theme
    }
  }) => <TableCell component="div" variant="header" size={theme === 'light' ? 'medium' : 'small'}>
      <Typography component="div" variant="h6">
        Table Title
      </Typography>
    </TableCell>,
  decorators: [HeaderDecorator]
}`,...(gr=(br=Fe.parameters)==null?void 0:br.docs)==null?void 0:gr.source}}};var vr,Fr,Vr;Ve.parameters={...Ve.parameters,docs:{...(vr=Ve.parameters)==null?void 0:vr.docs,source:{originalSource:`{
  render: (args, {
    globals: {
      theme
    }
  }) => {
    type OptionType = {
      label: string;
      value: string;
    };
    type Filter = {
      searchbyValue: string;
      searchbyLabel: string;
      searchValue: string | number;
      searchLabel?: string;
    };
    const defaultFilters: Filter[] = [{
      searchbyValue: 'column2',
      searchbyLabel: 'Column 2',
      searchValue: 'Payer 1'
    }, {
      searchbyValue: 'column5',
      searchbyLabel: 'Column 5',
      searchValue: 'Pending'
    }];
    const searchByOptions = [{
      label: 'Column 1',
      value: 'column1'
    }, {
      label: 'Column 2',
      value: 'column2'
    }, {
      label: 'Column 3',
      value: 'column3'
    }];
    const defaultSearchByValues = {
      searchbyValue: 'column1',
      searchValue: ''
    };
    const [filters, setFilters] = useState<Array<Filter>>(defaultFilters);
    const [filterAnchorEl, setFilterAnchorEl] = useState<HTMLButtonElement | null>(null);
    const isFilterPopoverOpen = Boolean(filterAnchorEl);
    const filterPopoverId = isFilterPopoverOpen ? 'filter-popover' : undefined;
    const handlePopoverClose = () => {
      setFilterAnchorEl(null);
    };
    const handleFilterButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setFilterAnchorEl(event.currentTarget);
    };
    const removeFilter = (filter: Filter) => {
      const index = filters.findIndex(item => item.searchbyValue === filter.searchbyValue && item.searchValue === filter.searchValue);
      filters.splice(index, 1);
      setFilters([...filters]);
    };
    const addFilters = (newFilters: Filter[]) => {
      const updatedFilters = [...filters, ...newFilters].sort((a, b) => {
        const nameA = a.searchbyLabel.toUpperCase();
        const nameB = b.searchbyLabel.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setFilters([...updatedFilters]);
    };
    const {
      handleSubmit,
      control
    } = useForm<Filter>({
      defaultValues: defaultSearchByValues
    });
    const onSearchSubmit = (data: Omit<Filter, 'searchbyLabel'>) => {
      const newFilter = {
        ...data,
        searchbyLabel: searchByOptions.find(item => item.value === data.searchbyValue)?.label || ''
      };
      !filters.find(item => item.searchbyValue === newFilter.searchbyValue && item.searchValue === newFilter.searchValue) && addFilters([newFilter]);
    };
    const FilterForm = () => {
      type FilterForm = {
        column4?: string;
        column5?: string;
        column6?: string;
      };
      const defaultFilterFormValues = {
        column4: '',
        column5: '',
        column6: ''
      };
      const filterByOptions = [{
        label: 'Column 4',
        value: 'column4'
      }, {
        label: 'Column 5',
        value: 'column5'
      }, {
        label: 'Column 6',
        value: 'column6'
      }];
      const filterOptions = [{
        label: 'Value 1',
        value: 'value1'
      }, {
        label: 'Value 2',
        value: 'value2'
      }, {
        label: 'Value 3',
        value: 'value3'
      }];
      const {
        handleSubmit,
        control,
        reset,
        formState: {
          errors
        }
      } = useForm<FilterForm>({
        defaultValues: defaultFilterFormValues
      });
      const onSubmit = (data: FilterForm) => {
        const newFilters: Filter[] = [];
        for (const [key, value] of Object.entries(data)) {
          const newFilter = value && !filters.find(item => item.searchbyValue === key && item.searchValue === value) && {
            searchbyValue: key,
            searchbyLabel: filterByOptions.find(item => item.value === key)?.label || '',
            searchValue: value,
            searchLabel: filterOptions.find(item => item.value === value)?.label || ''
          };
          newFilter && newFilters.push(newFilter);
        }
        newFilters && addFilters(newFilters);
        handlePopoverClose();
      };
      return <Box component="form" id="filter-form" onSubmit={handleSubmit(onSubmit)} onReset={() => reset()}>
          <Stack direction="column" spacing={2}>
            {filterByOptions.map((filterby: OptionType) => <Controller name={(filterby.value as keyof typeof FilterForm)} control={control} render={({
            field: {
              onChange,
              value
            },
            fieldState: {
              error
            },
            formState
          }) => <TextField key={filterby.value} label={filterby.label} error={!!error} value={value} onChange={onChange} select margin="none">
                    {filterOptions.map((option: OptionType) => <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>)}
                  </TextField>} />)}
            <Stack direction="row" spacing={2}>
              <Button type="reset" color="secondary">
                Reset Filters
              </Button>
              <Button type="submit" color="primary">
                Apply Filters
              </Button>
            </Stack>
          </Stack>
        </Box>;
    };
    return <TableCell component="div" variant="header" size={theme === 'light' ? 'medium' : 'small'}>
        <Typography component="h3" variant="h5" gutterBottom>
          Table Title
        </Typography>
        <Box component="form" id="search-form" onSubmit={handleSubmit(onSearchSubmit)} sx={{
        paddingBottom: 2
      }}>
          <FormLabel htmlFor="searchbyValue" id="searchbyValueLabel">
            Search By
          </FormLabel>
          <Grid container spacing={2} flexWrap="wrap" width="100%">
            <Grid>
              <Controller name="searchbyValue" control={control} rules={{
              required: {
                value: true,
                message: 'This field is required'
              }
            }} render={({
              field: {
                onChange,
                value,
                ref
              },
              fieldState: {
                error
              }
            }) => <Select fullWidth={false} error={!!error} value={value} onChange={onChange} inputRef={ref} margin="none" sx={{
              flexShrink: 0
            }} labelId="searchbyValueLabel">
                    {searchByOptions.map((option: OptionType) => <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>)}
                  </Select>} />
            </Grid>
            <Grid sm={true}>
              <Controller name="searchValue" control={control} rules={{
              required: {
                value: true,
                message: 'This field is required'
              }
            }} render={({
              field: {
                onChange,
                value,
                ref
              },
              fieldState: {
                error
              }
            }) => <FormControl error={!!error} margin="none" sx={{
              flexGrow: 1
            }} fullWidth>
                    <Input id="search" value={value} onChange={onChange} inputRef={ref} startAdornment={<InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>} placeholder="Search" fullWidth />
                    <FormHelperText>{error && error.message}</FormHelperText>
                  </FormControl>} />
            </Grid>
            <Grid>
              <Button type="submit" color="primary" size="large">
                Search
              </Button>
            </Grid>
            <Grid>
              <Button type="button" color="secondary" startIcon={<FilterIcon />} aria-controls={filterPopoverId || ''} id="filter-button" onClick={handleFilterButtonClick} size="large">
                Filter
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Popover id={filterPopoverId} aria-labelledby="filter-header" open={isFilterPopoverOpen} anchorEl={filterAnchorEl} onClose={handlePopoverClose} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }} transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}>
          <Box sx={{
          padding: 2
        }}>
            <Box justifyContent="space-between" display="flex" paddingBottom={2}>
              <Typography component="h2" variant="h6" id="filter-header">
                Filters
              </Typography>
              <IconButton title="close" onClick={handlePopoverClose} sx={{
              m: '-12px'
            }}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
            <FilterForm />
          </Box>
        </Popover>
        <FormGroup aria-label="filters" role="group" row>
          {filters.map(filter => <Chip key={\`\${filter.searchbyValue}-\${filter.searchValue.toString().replace(/[^A-Z0-9]+/gi, '_')}}\`} label={\`\${filter.searchbyLabel}: \${filter.searchLabel || filter.searchValue}\`} onDelete={() => removeFilter(filter)} sx={{
          mr: 1,
          mb: 1
        }} />)}
          {!!filters.length && <MuiLink component="button" typography="body1" height="26px" onClick={() => {
          setFilters([]);
        }}>
              Clear All Filters
            </MuiLink>}
        </FormGroup>
      </TableCell>;
  },
  decorators: [HeaderDecorator]
}`,...(Vr=(Fr=Ve.parameters)==null?void 0:Fr.docs)==null?void 0:Vr.source}}};const ml=["_Header","_HeaderWithSearchAndFilter"];export{Fe as _Header,Ve as _HeaderWithSearchAndFilter,ml as __namedExportsOrder,fl as default};
//# sourceMappingURL=Patterns.stories-e46c4bda.js.map
