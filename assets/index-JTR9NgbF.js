import{r as y}from"./index-DcWiA9TO.js";import{T as D}from"./index-BsaeSXs_.js";import{S as M,b as z}from"./index-C_1ECHSD.js";import{j as i}from"./jsx-runtime-CcL-W3nW.js";import{a as K,b as V,c as R}from"./index-BAj1_MpQ.js";import{A as G}from"./Autocomplete-DYfkOmMd.js";import{u as B}from"./useInfiniteQuery-BlwNwEaC.js";import{I as H}from"./IconButton-Caxu-qgA.js";import{C as W}from"./CircularProgress-D8w9ZPs6.js";var Q=Object.defineProperty,$=Object.defineProperties,J=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,w=(e,t,r)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,n=(e,t)=>{for(var r in t||(t={}))A.call(t,r)&&w(e,r,t[r]);if(g)for(var r of g(t))q.call(t,r)&&w(e,r,t[r]);return e},c=(e,t)=>$(e,J(t)),I=(e,t)=>{var r={};for(var o in e)A.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&g)for(var o of g(e))t.indexOf(o)<0&&q.call(e,o)&&(r[o]=e[o]);return r},m=(e,t,r)=>new Promise((o,d)=>{var f=p=>{try{v(r.next(p))}catch(l){d(l)}},a=p=>{try{v(r.throw(p))}catch(l){d(l)}},v=p=>p.done?o(p.value):Promise.resolve(p.value).then(f,a);v((r=r.apply(e,t)).next())}),U=y.forwardRef((e,t)=>i.jsxs(i.Fragment,{children:[i.jsx(z,{orientation:"vertical",className:"MuiSelect-avEndAdornmentDivider"}),i.jsx(H,c(n({},e),{ref:t}))]})),X={marginRight:".5rem"},Y=()=>i.jsx(W,{"aria-label":"Loading",size:20,sx:X}),Z=e=>{var t=e,{FieldProps:r}=t,o=I(t,["FieldProps"]);const d={fullWidth:!0,size:"small"},f=a=>({InputProps:c(n(n({},a==null?void 0:a.InputProps),r==null?void 0:r.InputProps),{endAdornment:o.loading?i.jsxs(i.Fragment,{children:[(a==null?void 0:a.InputProps.endAdornment)||null,i.jsx(Y,{})]}):(a==null?void 0:a.InputProps.endAdornment)||null}),inputProps:c(n({},a==null?void 0:a.inputProps),{"aria-controls":(a==null?void 0:a.inputProps["aria-controls"])||""})});return i.jsx(G,n(n({renderInput:a=>i.jsx(D,n(n(n({},a),r),f(a))),popupIcon:i.jsx(M,{className:"MuiSelect-avExpandIcon"}),slotProps:{popupIndicator:{component:U}}},o),d))},k=(e,t)=>{const[r,o]=y.useState("");return y.useEffect(()=>{const d=setTimeout(()=>{o(e)},t);return()=>{clearTimeout(d)}},[e]),r},ee=e=>{var t=e,{loadOptions:r,limit:o=50,queryKey:d,ListboxProps:f,queryOptions:a,watchParams:v,debounceTimeout:p=350,FieldProps:l,onInputChange:P}=t,O=I(t,["loadOptions","limit","queryKey","ListboxProps","queryOptions","watchParams","debounceTimeout","FieldProps","onInputChange"]);const[_,b]=y.useState(""),L=s=>{var u;b(s.target.value),(u=l==null?void 0:l.InputProps)!=null&&u.onChange&&l.InputProps.onChange(s)},C=k(_,p),{isLoading:S,isFetching:j,data:x,hasNextPage:F,fetchNextPage:T}=B(n({queryKey:[d,o,C,v],queryFn:s=>m(void 0,[s],function*({pageParam:u=0}){return r(u,o,C)}),staleTime:1e4,getNextPageParam:s=>s.hasMore?s.offset+o:!1},a)),E=x!=null&&x.pages?x.pages.map(s=>s.options).flat():[],N=(s,u,h)=>{h==="clear"?b(s.target.value):h==="blur"&&b(u),P&&P(s,u,h)};return i.jsx(Z,c(n({},O),{onInputChange:N,FieldProps:c(n({},l),{InputProps:c(n({},l==null?void 0:l.InputProps),{onChange:L})}),loading:j,options:E,ListboxProps:c(n({},f),{onScroll:s=>m(void 0,null,function*(){const u=s.currentTarget;u.scrollHeight-(u.scrollTop+u.clientHeight)<=5&&!S&&!j&&F&&T()})})}))},te=e=>m(void 0,null,function*(){const t=yield V.query(e);return{options:t.data.codes,hasMore:e.params.offset+e.params.limit<t.data.totalCount,offset:e.params.offset}}),re=e=>[e.code,e.value].filter(Boolean).join(" - "),ce=e=>{var t=e,{apiConfig:r={},queryOptions:o,queryKey:d="codes-autocomplete",list:f,watchParams:a}=t,v=I(t,["apiConfig","queryOptions","queryKey","list","watchParams"]);const p=(l,P,O)=>m(void 0,null,function*(){return yield te(c(n({},r),{params:c(n({},r.params),{list:f,offset:l,limit:P,q:O})}))});return i.jsx(ee,c(n({getOptionLabel:re,queryKey:d,queryOptions:n({enabled:!!f},o),watchParams:n({list:f},a)},v),{loadOptions:p}))},fe=e=>m(void 0,null,function*(){const t=yield K.getOrganizations(e);return{options:t.data.organizations,hasMore:e.params.offset+e.params.limit<t.data.totalCount,offset:e.params.offset}}),ve=e=>e.name,me=(e,t)=>m(void 0,null,function*(){const r=yield R.getProviders(e,t);return{options:r.data.providers,hasMore:t.params.offset+t.params.limit<r.data.totalCount,offset:t.params.offset}}),Pe=e=>e.uiDisplayName;export{Z as A,ce as C,ee as a,ve as b,fe as c,Pe as d,me as e,te as f,re as h};
