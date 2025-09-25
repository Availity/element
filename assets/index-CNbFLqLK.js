import{r as _}from"./index-BgYLq7fD.js";import{P as De,T as Ce,a as Fe}from"./index-CXGBBhzw.js";import{B as k,I as de,L as Le}from"./index-k9OtkSpc.js";import{g as $e,e as Me,h as ce}from"./index-DdNunzh7.js";import{T as Re}from"./index-DbVu_i9b.js";import{G as w,B as ue}from"./index-DmY_4rvh.js";import{h as J,q as Y,s as ke,C as Be,t as Ne,u as He,v as Ue}from"./index-CmMPo3bx.js";import{F as ze}from"./index-CkWMovvl.js";import{u as Ve,C as Ye}from"./index.esm-Cdw3oWqD.js";import{j as i}from"./jsx-runtime-BTJTZTIL.js";import{T as pe}from"./index-ClMemn8c.js";import{s as P}from"./styled-FZfCzBz5.js";import{C as qe}from"./Container-DvcsWH8C.js";import{i as We}from"./index-DuRQpI0H.js";import{D as Ke,a as Ge,d as Qe,b as fe}from"./index-g8KIT1P4.js";import{q as X}from"./index-DLKRbc4C.js";import{i as Je}from"./index-DJKl12U0.js";import{d as Xe}from"./dayjs.min-CfWDS3UC.js";import{u as Ze,I as er,R as rr}from"./Img-B45hvfNA.js";import{C as G}from"./index-D95KORoo.js";import{T as ar}from"./index-DATHDNip.js";import"./index-DexkmQxl.js";import"./index-B7xDH96f.js";import{L as tr}from"./Link-rLN5tdDv.js";import{T as or,b as ir,a as ve}from"./TabPanel-BQDHBiA1.js";import{a as nr,T as me}from"./Tabs-DA3CdUG8.js";var sr=Object.defineProperty,Z=Object.getOwnPropertySymbols,lr=Object.prototype.hasOwnProperty,dr=Object.prototype.propertyIsEnumerable,ee=(e,r,a)=>r in e?sr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,re=(e,r)=>{for(var a in r||(r={}))lr.call(r,a)&&ee(e,a,r[a]);if(Z)for(var a of Z(r))dr.call(r,a)&&ee(e,a,r[a]);return e},cr=_.createContext(null),ur=()=>{},pr=e=>{const r=_.useContext(cr);if(r===null)throw new Error("useFavorites must be used within a FavoritesProvider");const{favorites:a,queryStatus:t,mutationStatus:o,lastClickedFavoriteId:l,deleteFavorite:d,addFavorite:c}=r,n=l===e,u=_.useMemo(()=>!!(a==null?void 0:a.find(g=>g.id===e)),[a,e]),m=()=>u?d(e):c(e),x=t==="loading"||t==="idle"||o==="loading";let y="initLoading";return t==="loading"&&(y="initLoading"),t==="reloading"&&(y="reloading"),o==="loading"&&(y="reloading"),(t==="error"||o==="error")&&(y="error"),t==="success"&&(o==="success"||o==="idle")&&(y="success"),{isFavorited:u,status:y,isLastClickedFavorite:n,toggleFavorite:x?ur:m}},fr={spinner:i.jsx(G,{"aria-hidden":!0,size:"small",loadingCaption:!1}),unknownDisabledHeart:i.jsx(Y,{"aria-hidden":!0,color:"disabled"}),favoritedDisabledHeart:i.jsx(Y,{"aria-hidden":!0,color:"error",opacity:"0.6"}),unfavoritedDisabledHeart:i.jsx(J,{"aria-hidden":!0,color:"disabled",opacity:"0.6"}),favoritedHeart:i.jsx(Y,{"aria-hidden":!0,color:"error"}),unfavoritedHeart:i.jsx(J,{"aria-hidden":!0,color:"secondary"})},q="2.5rem",vr=P("div",{name:"AvFavoriteHeart",slot:"Root"})(({customSize:e})=>({height:e,width:e})),ae=P("input",{name:"AvFavoriteHeart",slot:"input"})(({customSize:e})=>({height:e,width:e,minHeight:e,minWidth:e})),mr=(e=q)=>{const r=e.match(/^(\d*\.?\d+)(px|rem)$/);if(!r)throw new Error("Invalid size format. Must be in 'px' or 'rem'.");const[,a,t]=r;return`${parseFloat(a)/2}${t}`},gr=P("div",{name:"AvFavoriteHeart",slot:"icon"})(({customSize:e})=>({fontSize:mr(e)})),yr=e=>{const r=e.match(/^(\d*\.?\d+)(px|rem)$/);if(!r)return!1;const[,a,t]=r,o=parseFloat(a);return t==="rem"&&o>=1.5?!0:t==="px"&&o>=24},hr=({id:e,name:r,onChange:a,onMouseDown:t,disabled:o=!1,customSize:l=q})=>{const{isFavorited:d,isLastClickedFavorite:c,status:n,toggleFavorite:u}=pr(e),m=I=>{a==null||a(d,I),u()},x=I=>{(I.code==="Enter"||I.key==="Enter")&&(a==null||a(d,I),u())},y=n==="initLoading"?"unknownDisabledHeart":n==="reloading"?c?"spinner":d?"favoritedDisabledHeart":"unfavoritedDisabledHeart":o?d?"favoritedDisabledHeart":"unfavoritedDisabledHeart":d?"favoritedHeart":"unfavoritedHeart",A=o||!c&&(n==="initLoading"||n==="reloading")?"not-allowed":void 0,g=`${d?"Remove from":"Add to"} My Favorites`,h={onKeyDown:x,type:"checkbox","aria-label":`Favorite ${r}`,id:`av-favorite-heart-${e}`,disabled:o,checked:d,onChange:m,onMouseDown:t,style:{cursor:A}},f=yr(l)?l:q;return i.jsxs(vr,{customSize:f,children:[i.jsx(gr,{customSize:f,children:fr[y]}),i.jsx("span",{style:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0},"aria-live":c&&(n==="reloading"||n==="error")?"polite":"off",children:c&&n==="reloading"?"Loading...":c&&n==="error"?"An error has occurred. Please try again.":""}),o?i.jsx(ae,re({customSize:f},h)):i.jsx(ar,{title:g,placement:"top",children:i.jsx(ae,re({customSize:f},h))})]})},br=Object.defineProperty,_r=Object.defineProperties,Pr=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,te=(e,r,a)=>r in e?br(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,L=(e,r)=>{for(var a in r||(r={}))ge.call(r,a)&&te(e,a,r[a]);if(B)for(var a of B(r))ye.call(r,a)&&te(e,a,r[a]);return e},W=(e,r)=>_r(e,Pr(r)),he=(e,r)=>{var a={};for(var t in e)ge.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&B)for(var t of B(e))r.indexOf(t)<0&&ye.call(e,t)&&(a[t]=e[t]);return a},Ir=(e,r,a)=>new Promise((t,o)=>{var l=n=>{try{c(a.next(n))}catch(u){o(u)}},d=n=>{try{c(a.throw(n))}catch(u){o(u)}},c=n=>n.done?t(n.value):Promise.resolve(n.value).then(l,d);c((a=a.apply(e,r)).next())}),Sr=P(Ce,{name:"AvFeedbackContainer",slot:"SmileButtons"})({}),xr=P(w,{name:"AvFeedbackContainer",slot:"FormActions"})({}),Ar=e=>{var r=e,{disabled:a,Icon:t,label:o,value:l}=r,d=he(r,["disabled","Icon","label","value"]);return i.jsx("div",{children:i.jsx(Fe,W(L({component:de,disableRipple:!0,title:o,"aria-label":l,value:l},d),{disabled:a,size:"large",children:i.jsx(t,{})}))})},Tr=({analytics:e,appName:r,handleClose:a,loading:t,sent:o,setLoading:l,setSent:d})=>{var c;const{control:n,formState:{errors:u},handleSubmit:m,register:x,setValue:y,watch:A}=Ve(),g=b=>Ir(null,null,function*(){var p=b,{smileField:T}=p,E=he(p,["smileField"]);l(!0);try{const C=yield Me.getCurrentRegion();yield e.info(L({surveyId:`${r.replace(/\s/g,"_")}_Smile_Survey`,smileLocation:`${r}`,smile:`icon-${T}`,url:window.location.href,region:C.data.regions[0]&&C.data.regions[0].id,userAgent:window.navigator.userAgent,submitTime:new Date},E)),d(!0),l(!1)}catch{d(!1),l(!1)}});_.useEffect(()=>{o&&setTimeout(()=>{a()},2e3)},[o]);const h=[{Icon:Ne,label:"What do you like?",value:"smile"},{Icon:He,label:"What would you improve?",value:"meh"},{Icon:Ue,label:"What don't you like?",value:"frown"}],f=A("smileField"),I=()=>{const b=h.find(p=>p.value===f);return(b==null?void 0:b.label)||"What would you improve?"};return o?null:i.jsxs(w,{component:"form",container:!0,sx:{justifyContent:"center"},onSubmit:m(g),"aria-label":"Feedback Form","aria-describedby":"feedback-form-header",children:[i.jsx(Ye,{control:n,name:"smileField",render:({field:b})=>i.jsx(Sr,W(L({children:h.map((p,T)=>i.jsx(Ar,L({autoFocus:T===0,disabled:t},p),p.value))},b),{"aria-labelledby":"feedback-form-header",onChange:(p,T)=>{y(b.name,T)},size:"medium",exclusive:!0}))}),i.jsx(Re,W(L({},x("feedback",{required:"This field is required",maxLength:{value:200,message:"This field must not exceed 200 characters"}})),{fullWidth:!0,multiline:!0,minRows:3,maxRows:3,label:I(),InputLabelProps:{component:ze,required:!0},inputProps:{"aria-required":"true"},helperText:((c=u.feedback)==null?void 0:c.message)||"Max 200 characters",error:!!u.feedback,disabled:t||!f})),i.jsxs(xr,{container:!0,direction:"row",width:"100%",spacing:1,wrap:"wrap",children:[i.jsx(w,{sx:{flex:1,minWidth:"147px"},children:i.jsx(k,{color:"secondary",disabled:t,onClick:a,children:"Close"})}),i.jsx(w,{sx:{flex:1,minWidth:"147px"},children:i.jsx(Le,{disabled:!f,loading:t,type:"submit",variant:"contained",children:"Send Feedback"})})]})]})},Or=P(w,{name:"AvFeedbackContainer",slot:"FeedbackHeaderContainer"})({}),Er=({appName:e,handleClose:r,loading:a,sent:t})=>i.jsxs(Or,{alignItems:"flex-start",container:!0,direction:"row",justifyContent:"space-between",flexWrap:"nowrap",id:"feedback-form-header",children:[i.jsx(w,{sx:{whiteSpace:"normal"},children:i.jsx(pe,{component:"h2",variant:"h5",children:t?"Thank you for your feedback.":`Tell us what you think about ${e}`})}),i.jsx(w,{children:i.jsx(de,{disabled:a,title:"Close",onClick:r,size:"medium",children:i.jsx(Be,{fontSize:"xsmall"})})})]}),wr=P(qe,{name:"AvFeedbackContainer",slot:"root"})({}),jr=P(k,{name:"AvFeedbackButton",slot:"root"})({}),Fa=({analytics:e=$e,appName:r,buttonVariant:a="secondary"})=>{const[t,o]=_.useState(null),[l,d]=_.useState(!1),[c,n]=_.useState(!1),u=y=>{o(y.currentTarget),d(!1)},m=()=>{o(null)},x=!!t;return i.jsxs(i.Fragment,{children:[i.jsx(jr,{onClick:u,color:a,startIcon:i.jsx(ke,{}),children:"Feedback"}),i.jsx(De,{anchorEl:t,anchorOrigin:{vertical:"bottom",horizontal:"right"},sx:{marginTop:"4px"},disableRestoreFocus:!0,onClose:m,open:x,transformOrigin:{vertical:"top",horizontal:"right"},children:i.jsxs(wr,{children:[i.jsx(Er,{appName:r,handleClose:m,loading:c,sent:l}),i.jsx(Tr,{analytics:e,appName:r,handleClose:m,loading:c,sent:l,setLoading:n,setSent:d})]})})]})},Dr=Object.defineProperty,Cr=Object.defineProperties,Fr=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,oe=(e,r,a)=>r in e?Dr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,v=(e,r)=>{for(var a in r||(r={}))be.call(r,a)&&oe(e,a,r[a]);if(N)for(var a of N(r))_e.call(r,a)&&oe(e,a,r[a]);return e},S=(e,r)=>Cr(e,Fr(r)),Pe=(e,r)=>{var a={};for(var t in e)be.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&N)for(var t of N(e))r.indexOf(t)<0&&_e.call(e,t)&&(a[t]=e[t]);return a},U=(e,r,a)=>new Promise((t,o)=>{var l=n=>{try{c(a.next(n))}catch(u){o(u)}},d=n=>{try{c(a.throw(n))}catch(u){o(u)}},c=n=>n.done?t(n.value):Promise.resolve(n.value).then(l,d);c((a=a.apply(e,r)).next())}),Lr={SPACES:(e,{spaces:r,spacesByConfig:a,spacesByPayer:t})=>({previousSpacesMap:r,previousSpacesByConfigMap:a,previousSpacesByPayerMap:t,error:void 0,loading:!1}),ERROR:(e,{error:r})=>S(v({},e),{loading:!1,error:r}),LOADING:(e,{loading:r})=>S(v({},e),{loading:r!==void 0?r:!e.loading})},$r=(e,r)=>{const{type:a}=r;return Lr[a](e,r)},Mr=e=>U(null,[e],function*({query:r,clientId:a,variables:t,operationName:o}){const l={};a&&(l["X-Client-ID"]=a);const{data:{data:{configurationPagination:d}}}=yield ce.create({query:r,variables:v({},t),operationName:o||"PuiSpacesCmpAnonymousOperation"},{headers:v({},l)}),{pageInfo:{currentPage:c,hasNextPage:n},items:u}=d;return{items:u,currentPage:c,hasNextPage:n}}),K=e=>U(null,[e],function*({query:r,clientId:a,variables:t,_spaces:o=[],operationName:l}){const{items:d,currentPage:c,hasNextPage:n}=yield Mr({query:r,clientId:a,variables:t,operationName:l});if(o.push(...d),n){const u=S(v({},t),{page:c+1});return K({query:r,clientId:a,variables:u,_spaces:o,operationName:l})}return o}),Rr=`query configurationFindMany($ids: [String!], $payerIDs: [ID!], $types: [TypeEnum!], $page: Int) {
  configurationPagination(filter: { ids: $ids, payerIds: $payerIDs, types: $types }, page: $page) {
    pageInfo {
      hasNextPage
      currentPage
    }
    items {
      ... on Configuration {
        configurationId
        name
        shortName
        type
        activeDate
        isNew
        description
        payerIDs
        parentIDs
        meta
        metadataPairs {
          name
          value
        }
      }

      ... on Node {
        id
      }

      ... on Alert {
        link {
          text
          target
          url
        }
      }

      ... on Container {
        link {
          text
          target
          url
        }
        images {
          tile
          promotional
          logo
          billboard
        }
      }

      ... on PayerSpace {
        link {
          text
          target
          url
        }
        images {
          tile
          logo
          billboard
        }
        url
      }

      ... on Application {
        link {
          text
          target
          url
        }
      }

      ... on Resource {
        link {
          text
          target
          url
        }
      }

      ... on Navigation {
        icons {
          dashboard
          navigation
        }
        images {
          promotional
        }
      }

      ... on Learning {
        images {
          promotional
        }
      }

      ... on Proxy {
        url
      }

      ... on File {
        url
      }
    }
  }
}`,ie=(e,r,a)=>{const[t,o]=e.split("?"),l=X.parse(o),d=a&&{[r]:a},c=X.stringify(v(v({},l),d),{sort:(n,u)=>n.localeCompare(u)});return`${t}?${c}`},kr=(e="",r,a)=>e,Br=e=>{if(e&&!e.startsWith("_")){if(e==="BODY")return"_self";if(e==="TAB")return"_blank"}return e||"_self"},Nr=e=>typeof e=="function",F={ALLOWED_TYPES:["APPLICATION","RESOURCE","NAVIGATION"],DISALLOWED_TYPES:["reporting","how_to_guide_dental_providers","my_account_profile","my_administrators"],KEYS:{VALUES:"myTopApps",LAST_UPDATED:"top-apps-updated"},UPDATE_EVENT:"av:topApps:updated"},Hr=e=>{try{const r=window.localStorage.getItem(e);return r===null?null:JSON.parse(r)}catch{return null}},Ur=(e,r)=>F.ALLOWED_TYPES.some(a=>a===r)&&!F.DISALLOWED_TYPES.some(a=>a===e),zr=e=>Hr(`${F.KEYS.VALUES}-${e}`),Vr=(e,r)=>U(null,null,function*(){if(!(!e.configurationId||!e.type)&&Ur(e.configurationId,e.type)){const a=Xe(),t=(yield zr(r))||{};window.localStorage.setItem(`${F.KEYS.LAST_UPDATED}-${r}`,a.format());const o=t[e.configurationId]&&typeof t[e.configurationId].count=="number"?t[e.configurationId].count:0;t[e.configurationId]=S(v({},t==null?void 0:t[e.configurationId]),{count:o+1,lastUse:a.format()}),window.localStorage.setItem(`${F.KEYS.VALUES}-${r}`,JSON.stringify(t)),Je.send(F.UPDATE_EVENT)}}),Yr=`query disclaimerFindOne($id: ID!) {
  configurationFindOne(id: $id) {
    ... on Text {
      description
    }
  }
}`,qr=({disclaimerId:e})=>{const[r,a]=_.useState("");return _.useEffect(()=>{U(null,null,function*(){if(e){const o=yield ce.create({query:Yr,variables:{id:e}});a(o.data.data.configurationFindOne.description)}})},[e]),i.jsx(fe,{children:r?i.jsx(rr,{children:r}):i.jsx(G,{})})},Wr=e=>{var r=e,{spaceId:a,payerId:t,imageType:o="url",fallback:l,Loader:d=G}=r,c=Pe(r,["spaceId","payerId","imageType","fallback","Loader"]),n,u,m,x,y,A,g,h,f,I,b;let p;a?p=se(a):t&&(p=se(t));const{loading:T}=Ae(),E=a||t||(p==null?void 0:p[0].id)||(p==null?void 0:p[0].configurationId);let j={"images.logo":(u=(n=p==null?void 0:p[0])==null?void 0:n.images)==null?void 0:u.logo,"images.tile":(x=(m=p==null?void 0:p[0])==null?void 0:m.images)==null?void 0:x.tile,"images.billboard":(A=(y=p==null?void 0:p[0])==null?void 0:y.images)==null?void 0:A.billboard,"images.promotional":(h=(g=p==null?void 0:p[0])==null?void 0:g.images)==null?void 0:h.promotional,"images.promotionalHover":(I=(f=p==null?void 0:p[0])==null?void 0:f.images)==null?void 0:I.promotionalHover,url:(b=p==null?void 0:p[0])==null?void 0:b.url}[o];return!j&&T?i.jsx(d,{id:`app-${E}-loading`}):(!j&&!T&&l&&(j=l),!j||!E?null:i.jsx(er,v({id:c.id||`app-img-${E}`,src:j,alt:`Space ${o}`,loader:i.jsx(d,{id:`app-img-${E}-loading`})},c)))},Kr=({parentPayerSpaces:e,name:r,state:{selectedOption:a},setState:t})=>i.jsxs(fe,{children:[i.jsx(pe,{children:`Open ${r} as: ${a?a.name||a.id:""}`}),i.jsx(w,{direction:"row",children:e&&e.map(o=>i.jsx(ue,{onClick:()=>t({selectedOption:o}),children:i.jsx(Wr,{spaceId:o.configurationId,imageType:"images.tile"})}))})]}),Gr=e=>e.spaceType!==void 0,Qr=e=>e.selectedOption!==void 0,Ie={isOpen:!1,modalOptions:void 0,modalState:{selectedOption:{id:"",name:""}},selectedModal:{}},Jr=_.createContext(null),ne={DISCLAIMER:{body:qr,buttonProps:()=>({children:"Accept"}),onSubmit:({link:e,id:r})=>{var a;window.open(((a=e.url)==null?void 0:a[0])==="/"?ie(e.url,"spaceId",r):e.url,e.target)}},MULTI_PAYER:{body:Kr,buttonProps:({selectedOption:e})=>({children:"Continue",disabled:e===void 0}),onSubmit:({metadata:e,link:r,id:a,name:t},o,l)=>{if(e!=null&&e.disclaimerId){l({type:"OPEN_DISCLAIMER_MODAL",disclaimerId:e.disclaimerId,link:r,id:a,name:t});return}const d=Br(r.target);r.url&&window.open(We(r.url)?r.url:kr(ie(r.url,"spaceId",o.selectedOption.id)),d)}}},R={RESET:()=>Ie,OPEN_DISCLAIMER_MODAL:(e,r)=>S(v({},e),{isOpen:!0,selectedModal:ne.DISCLAIMER,modalOptions:S(v({},r),{type:r.spaceType})}),OPEN_MULTI_PAYER_MODAL:(e,r)=>S(v({},e),{isOpen:!0,selectedModal:ne.MULTI_PAYER,modalOptions:S(v({},r),{type:r.spaceType})}),UPDATE_MODAL_STATE:(e,r)=>S(v({},e),{modalState:r})},Xr=(e,r)=>{var a=r,{type:t}=a,o=Pe(a,["type"]);if(t==="RESET")return R.RESET();if(Gr(o)){if(t==="OPEN_MULTI_PAYER_MODAL")return R.OPEN_MULTI_PAYER_MODAL(e,o);if(t==="OPEN_DISCLAIMER_MODAL")return R.OPEN_DISCLAIMER_MODAL(e,o)}else if(Qr(o)&&t==="UPDATE_MODAL_STATE")return R.UPDATE_MODAL_STATE(e,o);return e},Zr=({children:e})=>{const[{selectedModal:r,modalOptions:a,modalState:t,isOpen:o},l]=_.useReducer(Xr,Ie),d=()=>l({type:"RESET"}),c=(r==null?void 0:r.buttonProps)&&(r==null?void 0:r.buttonProps(S(v({},t),{modalOptions:a}))),n=r==null?void 0:r.body;return i.jsxs(Jr.Provider,{value:(u,m)=>l(v({type:`OPEN_${u}`},m)),children:[i.jsxs(Ke,{open:o,children:[i.jsx(Ge,{id:"disclaimer-header",children:a==null?void 0:a.title}),n&&i.jsx(n,S(v({},a),{setState:u=>l(v({type:"UPDATE_MODAL_STATE"},u)),state:t})),i.jsxs(Qe,{children:[i.jsx(k,{onClick:d,children:"Cancel"}),i.jsx(k,S(v({color:"primary"},c),{onClick:()=>{r!=null&&r.onSubmit&&a&&t&&r.onSubmit(a,t,l),a&&Vr({configurationId:a.id,type:a.type,name:a.name,id:a.id},a.user),d()}}))]})]}),e]})},Se={loading:!0},xe=_.createContext(Se),Ae=()=>_.useContext(xe),La=({query:e=Rr,variables:r={types:["PAYERSPACE"]},operationName:a,clientId:t,children:o,payerIds:l,spaceIds:d,spaces:c})=>{const[{previousSpacesMap:n,previousSpacesByConfigMap:u,previousSpacesByPayerMap:m,loading:x,error:y},A]=_.useReducer($r,Se),g=new Map(n),h=new Map(u),f=new Map(m),I=new Set,b=new Set;if(c&&c.length>0){for(const s of c)if(s.id&&!g.has(s.id)&&g.set(s.id,s),s.configurationId&&!h.has(s.configurationId)&&h.set(s.configurationId,s),s.payerIDs)for(const O of s.payerIDs){const D=f.get(O);D?f.set(O,[...D,s]):f.set(O,[s])}}if(d&&d.length>0)for(const s of d)s&&typeof s=="string"&&s.trim()&&!(g.has(s)||h.has(s))&&I.add(s);if(l&&l.length>0)for(const s of l)s&&typeof s=="string"&&s.trim()&&!f.has(s)&&b.add(s);const p=S(v({},r),{ids:[...I.keys()]}),T=S(v({},r),{payerIDs:[...b.keys()]}),[{data:E,isFetching:C,isError:j},{data:V,isFetching:we,isError:Q}]=Ze({queries:[{queryKey:["id",p],queryFn:()=>K({query:e,clientId:t,variables:p,operationName:a}),enabled:I.size>0},{queryKey:["id",T],queryFn:()=>K({query:e,clientId:t,variables:T,operationName:a}),enabled:b.size>0}]});_.useEffect(()=>{(Q||j)&&A({type:"ERROR",error:"Error fetching spaces.",loading:!1})},[Q,j]),_.useEffect(()=>{if(A({type:"LOADING",loading:!0}),I.size===0&&b.size===0){A({type:"LOADING",loading:!1});return}if(E){for(const s of E)if(g.has(s.id)||g.set(s.id,s),h.has(s.configurationId)||h.set(s.configurationId,s),s.payerIDs)for(const O of s.payerIDs){const D=f.get(O);D?f.set(O,[...D,s]):f.set(O,[s])}}if(b.size>0&&V){for(const s of V)if(g.has(s.id)||g.set(s.id,s),h.has(s.configurationId)||h.set(s.configurationId,s),s.payerIDs)for(const O of s.payerIDs){const D=f.get(O);D?f.set(O,[...D,s]):f.set(O,[s])}}A({type:"SPACES",spaces:g,spacesByConfig:h,spacesByPayer:f,loading:!1})},[E,V,l,d]);const je=()=>{if(o)return Nr(o)?o({spaces:[g.values()],loading:x,error:y}):o};return i.jsx(xe.Provider,{value:{spaces:g,spacesByConfig:h,spacesByPayer:f,loading:x||we||C,error:y},children:i.jsx(Zr,{children:je()})})},se=(...e)=>{const{spaces:r,spacesByConfig:a,spacesByPayer:t}=Ae(),o=!e||e.length===0,l=(e==null?void 0:e.length)===1&&e[0]===void 0;return o||l?(console.warn("You did not pass in an ID to find a space, returning all spaces."),r&&[...r.values()]):e.reduce((c,n)=>{const u=(r==null?void 0:r.get(n))||(a==null?void 0:a.get(n));if(u)return c.push(u),c;const m=t==null?void 0:t.get(n);if(m)return c.push(...m),c},[])};P(ue,{name:"AvSpacesLink",slot:"root"})({});P(w,{name:"AvSpacesLink",slot:"AvDateInfo"})({});P(hr,{name:"AvSpacesLink",slot:"AvFavoriteHeart"})({});P(tr,{name:"AvSpacesLink",slot:"IconLink"})({});var ea=Object.defineProperty,ra=Object.defineProperties,aa=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,le=(e,r,a)=>r in e?ea(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,$=(e,r)=>{for(var a in r||(r={}))Te.call(r,a)&&le(e,a,r[a]);if(H)for(var a of H(r))Oe.call(r,a)&&le(e,a,r[a]);return e},M=(e,r)=>ra(e,aa(r)),z=(e,r)=>{var a={};for(var t in e)Te.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&H)for(var t of H(e))r.indexOf(t)<0&&Oe.call(e,t)&&(a[t]=e[t]);return a},$a=e=>i.jsx(nr,M($({},e),{disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0})),Ma=e=>{var r=e,{children:a}=r,t=z(r,["children"]);return i.jsx(or,M($({},t),{children:a}))},Ee=({theme:e})=>({".MuiTabs-indicator":{display:"none"},".MuiTab-root":{borderTopLeftRadius:".25rem",borderTopRightRadius:".25rem",border:"1px solid",borderColor:"transparent",marginBottom:"-1px","&:hover, &:hover.Mui-selected":{backgroundColor:e.palette.action.hover},"&.Mui-focusVisible":{outline:`2px solid ${e.palette.primary.main}`,backgroundColor:"inherit",outlineOffset:"-2px"},"&.Mui-selected":{backgroundColor:e.palette.background.paper,borderColor:e.palette.divider,borderBottomColor:e.palette.background.paper}}}),ta=P(me,{name:"MuiTabs",slot:"AvPrimary",overridesResolver:(e,r)=>r.avPrimary})({}),oa=P(me,{name:"MuiTabs",slot:"AvSecondary",overridesResolver:(e,r)=>r.avSecondary})(Ee),Ra=e=>{var r=e,{level:a="primary"}=r,t=z(r,["level"]);const o=a==="primary"?ta:oa;return i.jsx(o,M($({},t),{orientation:"horizontal",centered:!1}))},ia=P(ve,{name:"MuiTabs",slot:"AvPrimary",overridesResolver:(e,r)=>r.avPrimary})({}),na=P(ve,{name:"MuiTabs",slot:"AvSecondary",overridesResolver:(e,r)=>r.avSecondary})(Ee),ka=e=>{var r=e,{level:a="primary"}=r,t=z(r,["level"]);const o=a==="primary"?ia:na;return i.jsx(o,M($({},t),{orientation:"horizontal",centered:!1}))},Ba=e=>{var r=e,{children:a}=r,t=z(r,["children"]);return i.jsx(ir,M($({},t),{children:a}))};export{Fa as F,Wr as S,Ra as T,$a as a,Ma as b,ka as c,Ba as d,La as e};
