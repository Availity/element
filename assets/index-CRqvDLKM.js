import{r as P}from"./index-BgYLq7fD.js";import{P as je,T as De,a as Ce}from"./index-CXGBBhzw.js";import{B as k,I as le,L as Fe}from"./index-k9OtkSpc.js";import{g as Le,e as $e,h as de}from"./index-DdNunzh7.js";import{T as Me}from"./index-DbVu_i9b.js";import{G as w,B as ce}from"./index-DmY_4rvh.js";import{h as Q,q as V,s as Re,C as ke,t as Be,u as Ne,v as He}from"./index-CmMPo3bx.js";import{F as Ue}from"./index-CkWMovvl.js";import{u as ze,C as Ve}from"./index.esm-Cdw3oWqD.js";import{j as i}from"./jsx-runtime-BTJTZTIL.js";import{T as ue}from"./index-ClMemn8c.js";import{s as I}from"./styled-FZfCzBz5.js";import{C as Ye}from"./Container-DvcsWH8C.js";import{i as qe}from"./index-DuRQpI0H.js";import{D as We,a as Ke,d as Ge,b as pe}from"./index-g8KIT1P4.js";import{q as J}from"./index-DLKRbc4C.js";import{i as Qe}from"./index-DJKl12U0.js";import{d as Je}from"./dayjs.min-CfWDS3UC.js";import{u as Xe,I as Ze,R as er}from"./Img-B45hvfNA.js";import{C as K}from"./index-D95KORoo.js";import{T as rr}from"./index-DATHDNip.js";import"./index-DexkmQxl.js";import"./index-B7xDH96f.js";import{L as ar}from"./Link-rLN5tdDv.js";import{T as tr,b as or,a as fe}from"./TabPanel-BQDHBiA1.js";import{a as ir,T as ve}from"./Tabs-DA3CdUG8.js";var nr=Object.defineProperty,X=Object.getOwnPropertySymbols,sr=Object.prototype.hasOwnProperty,lr=Object.prototype.propertyIsEnumerable,Z=(e,r,a)=>r in e?nr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,ee=(e,r)=>{for(var a in r||(r={}))sr.call(r,a)&&Z(e,a,r[a]);if(X)for(var a of X(r))lr.call(r,a)&&Z(e,a,r[a]);return e},dr=P.createContext(null),cr=()=>{},ur=e=>{const r=P.useContext(dr);if(r===null)throw new Error("useFavorites must be used within a FavoritesProvider");const{favorites:a,queryStatus:t,mutationStatus:o,lastClickedFavoriteId:s,deleteFavorite:d,addFavorite:c}=r,n=s===e,u=P.useMemo(()=>!!(a==null?void 0:a.find(h=>h.id===e)),[a,e]),m=()=>u?d(e):c(e),x=t==="loading"||t==="idle"||o==="loading";let g="initLoading";return t==="loading"&&(g="initLoading"),t==="reloading"&&(g="reloading"),o==="loading"&&(g="reloading"),(t==="error"||o==="error")&&(g="error"),t==="success"&&(o==="success"||o==="idle")&&(g="success"),{isFavorited:u,status:g,isLastClickedFavorite:n,toggleFavorite:x?cr:m}},pr={spinner:i.jsx(K,{"aria-hidden":!0,size:"small",loadingCaption:!1}),unknownDisabledHeart:i.jsx(V,{"aria-hidden":!0,color:"disabled"}),favoritedDisabledHeart:i.jsx(V,{"aria-hidden":!0,color:"error",opacity:"0.6"}),unfavoritedDisabledHeart:i.jsx(Q,{"aria-hidden":!0,color:"disabled",opacity:"0.6"}),favoritedHeart:i.jsx(V,{"aria-hidden":!0,color:"error"}),unfavoritedHeart:i.jsx(Q,{"aria-hidden":!0,color:"secondary"})},Y="2.5rem",fr=I("div",{name:"AvFavoriteHeart",slot:"Root"})(({customSize:e})=>({height:e,width:e})),re=I("input",{name:"AvFavoriteHeart",slot:"input"})(({customSize:e})=>({height:e,width:e,minHeight:e,minWidth:e})),vr=(e=Y)=>{const r=e.match(/^(\d*\.?\d+)(px|rem)$/);if(!r)throw new Error("Invalid size format. Must be in 'px' or 'rem'.");const[,a,t]=r;return`${parseFloat(a)/2}${t}`},mr=I("div",{name:"AvFavoriteHeart",slot:"icon"})(({customSize:e})=>({fontSize:vr(e)})),gr=e=>{const r=e.match(/^(\d*\.?\d+)(px|rem)$/);if(!r)return!1;const[,a,t]=r,o=parseFloat(a);return t==="rem"&&o>=1.5?!0:t==="px"&&o>=24},yr=({id:e,name:r,onChange:a,onMouseDown:t,disabled:o=!1,customSize:s=Y})=>{const{isFavorited:d,isLastClickedFavorite:c,status:n,toggleFavorite:u}=ur(e),m=_=>{a==null||a(d,_),u()},x=_=>{(_.code==="Enter"||_.key==="Enter")&&(a==null||a(d,_),u())},g=n==="initLoading"?"unknownDisabledHeart":n==="reloading"?c?"spinner":d?"favoritedDisabledHeart":"unfavoritedDisabledHeart":o?d?"favoritedDisabledHeart":"unfavoritedDisabledHeart":d?"favoritedHeart":"unfavoritedHeart",y=o||!c&&(n==="initLoading"||n==="reloading")?"not-allowed":void 0,h=`${d?"Remove from":"Add to"} My Favorites`,f={onKeyDown:x,type:"checkbox","aria-label":`Favorite ${r}`,id:`av-favorite-heart-${e}`,disabled:o,checked:d,onChange:m,onMouseDown:t,style:{cursor:y}},b=gr(s)?s:Y;return i.jsxs(fr,{customSize:b,children:[i.jsx(mr,{customSize:b,children:pr[g]}),i.jsx("span",{style:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0},"aria-live":c&&(n==="reloading"||n==="error")?"polite":"off",children:c&&n==="reloading"?"Loading...":c&&n==="error"?"An error has occurred. Please try again.":""}),o?i.jsx(re,ee({customSize:b},f)):i.jsx(rr,{title:h,placement:"top",children:i.jsx(re,ee({customSize:b},f))})]})},hr=Object.defineProperty,br=Object.defineProperties,_r=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,ae=(e,r,a)=>r in e?hr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,L=(e,r)=>{for(var a in r||(r={}))me.call(r,a)&&ae(e,a,r[a]);if(B)for(var a of B(r))ge.call(r,a)&&ae(e,a,r[a]);return e},q=(e,r)=>br(e,_r(r)),ye=(e,r)=>{var a={};for(var t in e)me.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&B)for(var t of B(e))r.indexOf(t)<0&&ge.call(e,t)&&(a[t]=e[t]);return a},Pr=(e,r,a)=>new Promise((t,o)=>{var s=n=>{try{c(a.next(n))}catch(u){o(u)}},d=n=>{try{c(a.throw(n))}catch(u){o(u)}},c=n=>n.done?t(n.value):Promise.resolve(n.value).then(s,d);c((a=a.apply(e,r)).next())}),Ir=I(De,{name:"AvFeedbackContainer",slot:"SmileButtons"})({}),Sr=I(w,{name:"AvFeedbackContainer",slot:"FormActions"})({}),xr=e=>{var r=e,{disabled:a,Icon:t,label:o,value:s}=r,d=ye(r,["disabled","Icon","label","value"]);return i.jsx("div",{children:i.jsx(Ce,q(L({component:le,disableRipple:!0,title:o,"aria-label":s,value:s},d),{disabled:a,size:"large",children:i.jsx(t,{})}))})},Tr=({analytics:e,appName:r,handleClose:a,loading:t,sent:o,setLoading:s,setSent:d})=>{var c;const{control:n,formState:{errors:u},handleSubmit:m,register:x,setValue:g,watch:y}=ze(),h=T=>Pr(null,null,function*(){var p=T,{smileField:A}=p,j=ye(p,["smileField"]);s(!0);try{const C=yield $e.getCurrentRegion();yield e.info(L({surveyId:`${r.replace(/\s/g,"_")}_Smile_Survey`,smileLocation:`${r}`,smile:`icon-${A}`,url:window.location.href,region:C.data.regions[0]&&C.data.regions[0].id,userAgent:window.navigator.userAgent,submitTime:new Date},j)),d(!0),s(!1)}catch{d(!1),s(!1)}});P.useEffect(()=>{o&&setTimeout(()=>{a()},2e3)},[o]);const f=[{Icon:Be,label:"What do you like?",value:"smile"},{Icon:Ne,label:"What would you improve?",value:"meh"},{Icon:He,label:"What don't you like?",value:"frown"}],b=y("smileField"),_=()=>{const T=f.find(p=>p.value===b);return(T==null?void 0:T.label)||"What would you improve?"};return o?null:i.jsxs(w,{component:"form",container:!0,sx:{justifyContent:"center"},onSubmit:m(h),"aria-label":"Feedback Form","aria-describedby":"feedback-form-header",children:[i.jsx(Ve,{control:n,name:"smileField",render:({field:T})=>i.jsx(Ir,q(L({children:f.map((p,A)=>i.jsx(xr,L({autoFocus:A===0,disabled:t},p),p.value))},T),{"aria-labelledby":"feedback-form-header",onChange:(p,A)=>{g(T.name,A)},size:"medium",exclusive:!0}))}),i.jsx(Me,q(L({},x("feedback",{required:"This field is required",maxLength:{value:200,message:"This field must not exceed 200 characters"}})),{fullWidth:!0,multiline:!0,minRows:3,maxRows:3,label:_(),InputLabelProps:{component:Ue,required:!0},inputProps:{"aria-required":"true"},helperText:((c=u.feedback)==null?void 0:c.message)||"Max 200 characters",error:!!u.feedback,disabled:t||!b})),i.jsxs(Sr,{container:!0,direction:"row",width:"100%",spacing:1,wrap:"wrap",children:[i.jsx(w,{sx:{flex:1,minWidth:"147px"},children:i.jsx(k,{color:"secondary",disabled:t,onClick:a,children:"Close"})}),i.jsx(w,{sx:{flex:1,minWidth:"147px"},children:i.jsx(Fe,{disabled:!b,loading:t,type:"submit",variant:"contained",children:"Send Feedback"})})]})]})},Ar=I(w,{name:"AvFeedbackContainer",slot:"FeedbackHeaderContainer"})({}),Or=({appName:e,handleClose:r,loading:a,sent:t})=>i.jsxs(Ar,{alignItems:"flex-start",container:!0,direction:"row",justifyContent:"space-between",flexWrap:"nowrap",id:"feedback-form-header",children:[i.jsx(w,{sx:{whiteSpace:"normal"},children:i.jsx(ue,{component:"h2",variant:"h5",children:t?"Thank you for your feedback.":`Tell us what you think about ${e}`})}),i.jsx(w,{children:i.jsx(le,{disabled:a,title:"Close",onClick:r,size:"medium",children:i.jsx(ke,{fontSize:"xsmall"})})})]}),Er=I(Ye,{name:"AvFeedbackContainer",slot:"root"})({}),wr=I(k,{name:"AvFeedbackButton",slot:"root"})({}),Ca=({analytics:e=Le,appName:r,buttonVariant:a="secondary"})=>{const[t,o]=P.useState(null),[s,d]=P.useState(!1),[c,n]=P.useState(!1),u=g=>{o(g.currentTarget),d(!1)},m=()=>{o(null)},x=!!t;return i.jsxs(i.Fragment,{children:[i.jsx(wr,{onClick:u,color:a,startIcon:i.jsx(Re,{}),children:"Feedback"}),i.jsx(je,{anchorEl:t,anchorOrigin:{vertical:"bottom",horizontal:"right"},sx:{marginTop:"4px"},disableRestoreFocus:!0,onClose:m,open:x,transformOrigin:{vertical:"top",horizontal:"right"},children:i.jsxs(Er,{children:[i.jsx(Or,{appName:r,handleClose:m,loading:c,sent:s}),i.jsx(Tr,{analytics:e,appName:r,handleClose:m,loading:c,sent:s,setLoading:n,setSent:d})]})})]})},jr=Object.defineProperty,Dr=Object.defineProperties,Cr=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable,te=(e,r,a)=>r in e?jr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,v=(e,r)=>{for(var a in r||(r={}))he.call(r,a)&&te(e,a,r[a]);if(N)for(var a of N(r))be.call(r,a)&&te(e,a,r[a]);return e},S=(e,r)=>Dr(e,Cr(r)),_e=(e,r)=>{var a={};for(var t in e)he.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&N)for(var t of N(e))r.indexOf(t)<0&&be.call(e,t)&&(a[t]=e[t]);return a},U=(e,r,a)=>new Promise((t,o)=>{var s=n=>{try{c(a.next(n))}catch(u){o(u)}},d=n=>{try{c(a.throw(n))}catch(u){o(u)}},c=n=>n.done?t(n.value):Promise.resolve(n.value).then(s,d);c((a=a.apply(e,r)).next())}),Fr={SPACES:(e,{spaces:r,spacesByConfig:a,spacesByPayer:t})=>({previousSpacesMap:r,previousSpacesByConfigMap:a,previousSpacesByPayerMap:t,error:void 0,loading:!1}),ERROR:(e,{error:r})=>S(v({},e),{loading:!1,error:r}),LOADING:(e,{loading:r})=>S(v({},e),{loading:r!==void 0?r:!e.loading})},Lr=(e,r)=>{const{type:a}=r;return Fr[a](e,r)},$r=e=>U(null,[e],function*({query:r,clientId:a,variables:t}){const o={};a&&(o["X-Client-ID"]=a);const{data:{data:{configurationPagination:s}}}=yield de.create({query:r,variables:v({},t)},{headers:v({},o)}),{pageInfo:{currentPage:d,hasNextPage:c},items:n}=s;return{items:n,currentPage:d,hasNextPage:c}}),W=e=>U(null,[e],function*({query:r,clientId:a,variables:t,_spaces:o=[]}){const{items:s,currentPage:d,hasNextPage:c}=yield $r({query:r,clientId:a,variables:t});if(o.push(...s),c){const n=S(v({},t),{page:d+1});return W({query:r,clientId:a,variables:n,_spaces:o})}return o}),Mr=`query configurationFindMany($ids: [String!], $payerIDs: [ID!], $types: [TypeEnum!], $page: Int) {
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
}`,oe=(e,r,a)=>{const[t,o]=e.split("?"),s=J.parse(o),d=a&&{[r]:a},c=J.stringify(v(v({},s),d),{sort:(n,u)=>n.localeCompare(u)});return`${t}?${c}`},Rr=(e="",r,a)=>e,kr=e=>{if(e&&!e.startsWith("_")){if(e==="BODY")return"_self";if(e==="TAB")return"_blank"}return e||"_self"},Br=e=>typeof e=="function",F={ALLOWED_TYPES:["APPLICATION","RESOURCE","NAVIGATION"],DISALLOWED_TYPES:["reporting","how_to_guide_dental_providers","my_account_profile","my_administrators"],KEYS:{VALUES:"myTopApps",LAST_UPDATED:"top-apps-updated"},UPDATE_EVENT:"av:topApps:updated"},Nr=e=>{try{const r=window.localStorage.getItem(e);return r===null?null:JSON.parse(r)}catch{return null}},Hr=(e,r)=>F.ALLOWED_TYPES.some(a=>a===r)&&!F.DISALLOWED_TYPES.some(a=>a===e),Ur=e=>Nr(`${F.KEYS.VALUES}-${e}`),zr=(e,r)=>U(null,null,function*(){if(!(!e.configurationId||!e.type)&&Hr(e.configurationId,e.type)){const a=Je(),t=(yield Ur(r))||{};window.localStorage.setItem(`${F.KEYS.LAST_UPDATED}-${r}`,a.format());const o=t[e.configurationId]&&typeof t[e.configurationId].count=="number"?t[e.configurationId].count:0;t[e.configurationId]=S(v({},t==null?void 0:t[e.configurationId]),{count:o+1,lastUse:a.format()}),window.localStorage.setItem(`${F.KEYS.VALUES}-${r}`,JSON.stringify(t)),Qe.send(F.UPDATE_EVENT)}}),Vr=`query disclaimerFindOne($id: ID!) {
  configurationFindOne(id: $id) {
    ... on Text {
      description
    }
  }
}`,Yr=({disclaimerId:e})=>{const[r,a]=P.useState("");return P.useEffect(()=>{U(null,null,function*(){if(e){const o=yield de.create({query:Vr,variables:{id:e}});a(o.data.data.configurationFindOne.description)}})},[e]),i.jsx(pe,{children:r?i.jsx(er,{children:r}):i.jsx(K,{})})},qr=e=>{var r=e,{spaceId:a,payerId:t,imageType:o="url",fallback:s,Loader:d=K}=r,c=_e(r,["spaceId","payerId","imageType","fallback","Loader"]),n,u,m,x,g,y,h,f,b,_,T;let p;a?p=ne(a):t&&(p=ne(t));const{loading:A}=xe(),j=a||t||(p==null?void 0:p[0].id)||(p==null?void 0:p[0].configurationId);let E={"images.logo":(u=(n=p==null?void 0:p[0])==null?void 0:n.images)==null?void 0:u.logo,"images.tile":(x=(m=p==null?void 0:p[0])==null?void 0:m.images)==null?void 0:x.tile,"images.billboard":(y=(g=p==null?void 0:p[0])==null?void 0:g.images)==null?void 0:y.billboard,"images.promotional":(f=(h=p==null?void 0:p[0])==null?void 0:h.images)==null?void 0:f.promotional,"images.promotionalHover":(_=(b=p==null?void 0:p[0])==null?void 0:b.images)==null?void 0:_.promotionalHover,url:(T=p==null?void 0:p[0])==null?void 0:T.url}[o];return!E&&A?i.jsx(d,{id:`app-${j}-loading`}):(!E&&!A&&s&&(E=s),!E||!j?null:i.jsx(Ze,v({id:c.id||`app-img-${j}`,src:E,alt:`Space ${o}`,loader:i.jsx(d,{id:`app-img-${j}-loading`})},c)))},Wr=({parentPayerSpaces:e,name:r,state:{selectedOption:a},setState:t})=>i.jsxs(pe,{children:[i.jsx(ue,{children:`Open ${r} as: ${a?a.name||a.id:""}`}),i.jsx(w,{direction:"row",children:e&&e.map(o=>i.jsx(ce,{onClick:()=>t({selectedOption:o}),children:i.jsx(qr,{spaceId:o.configurationId,imageType:"images.tile"})}))})]}),Kr=e=>e.spaceType!==void 0,Gr=e=>e.selectedOption!==void 0,Pe={isOpen:!1,modalOptions:void 0,modalState:{selectedOption:{id:"",name:""}},selectedModal:{}},Qr=P.createContext(null),ie={DISCLAIMER:{body:Yr,buttonProps:()=>({children:"Accept"}),onSubmit:({link:e,id:r})=>{var a;window.open(((a=e.url)==null?void 0:a[0])==="/"?oe(e.url,"spaceId",r):e.url,e.target)}},MULTI_PAYER:{body:Wr,buttonProps:({selectedOption:e})=>({children:"Continue",disabled:e===void 0}),onSubmit:({metadata:e,link:r,id:a,name:t},o,s)=>{if(e!=null&&e.disclaimerId){s({type:"OPEN_DISCLAIMER_MODAL",disclaimerId:e.disclaimerId,link:r,id:a,name:t});return}const d=kr(r.target);r.url&&window.open(qe(r.url)?r.url:Rr(oe(r.url,"spaceId",o.selectedOption.id)),d)}}},R={RESET:()=>Pe,OPEN_DISCLAIMER_MODAL:(e,r)=>S(v({},e),{isOpen:!0,selectedModal:ie.DISCLAIMER,modalOptions:S(v({},r),{type:r.spaceType})}),OPEN_MULTI_PAYER_MODAL:(e,r)=>S(v({},e),{isOpen:!0,selectedModal:ie.MULTI_PAYER,modalOptions:S(v({},r),{type:r.spaceType})}),UPDATE_MODAL_STATE:(e,r)=>S(v({},e),{modalState:r})},Jr=(e,r)=>{var a=r,{type:t}=a,o=_e(a,["type"]);if(t==="RESET")return R.RESET();if(Kr(o)){if(t==="OPEN_MULTI_PAYER_MODAL")return R.OPEN_MULTI_PAYER_MODAL(e,o);if(t==="OPEN_DISCLAIMER_MODAL")return R.OPEN_DISCLAIMER_MODAL(e,o)}else if(Gr(o)&&t==="UPDATE_MODAL_STATE")return R.UPDATE_MODAL_STATE(e,o);return e},Xr=({children:e})=>{const[{selectedModal:r,modalOptions:a,modalState:t,isOpen:o},s]=P.useReducer(Jr,Pe),d=()=>s({type:"RESET"}),c=(r==null?void 0:r.buttonProps)&&(r==null?void 0:r.buttonProps(S(v({},t),{modalOptions:a}))),n=r==null?void 0:r.body;return i.jsxs(Qr.Provider,{value:(u,m)=>s(v({type:`OPEN_${u}`},m)),children:[i.jsxs(We,{open:o,children:[i.jsx(Ke,{id:"disclaimer-header",children:a==null?void 0:a.title}),n&&i.jsx(n,S(v({},a),{setState:u=>s(v({type:"UPDATE_MODAL_STATE"},u)),state:t})),i.jsxs(Ge,{children:[i.jsx(k,{onClick:d,children:"Cancel"}),i.jsx(k,S(v({color:"primary"},c),{onClick:()=>{r!=null&&r.onSubmit&&a&&t&&r.onSubmit(a,t,s),a&&zr({configurationId:a.id,type:a.type,name:a.name,id:a.id},a.user),d()}}))]})]}),e]})},Ie={loading:!0},Se=P.createContext(Ie),xe=()=>P.useContext(Se),Fa=({query:e=Mr,variables:r={types:["PAYERSPACE"]},clientId:a,children:t,payerIds:o,spaceIds:s,spaces:d})=>{const[{previousSpacesMap:c,previousSpacesByConfigMap:n,previousSpacesByPayerMap:u,loading:m,error:x},g]=P.useReducer(Lr,Ie),y=new Map(c),h=new Map(n),f=new Map(u),b=new Set,_=new Set;if(d&&d.length>0){for(const l of d)if(l.id&&!y.has(l.id)&&y.set(l.id,l),l.configurationId&&!h.has(l.configurationId)&&h.set(l.configurationId,l),l.payerIDs)for(const O of l.payerIDs){const D=f.get(O);D?f.set(O,[...D,l]):f.set(O,[l])}}if(s&&s.length>0)for(const l of s)y.has(l)||h.has(l)||b.add(l);if(o&&o.length>0)for(const l of o)f.has(l)||_.add(l);const T=S(v({},r),{ids:[...b.keys()]}),p=S(v({},r),{payerIDs:[..._.keys()]}),[{data:A,isFetching:j,isError:C},{data:E,isFetching:Ee,isError:G}]=Xe({queries:[{queryKey:["id",T],queryFn:()=>W({query:e,clientId:a,variables:T}),enabled:b.size>0},{queryKey:["id",p],queryFn:()=>W({query:e,clientId:a,variables:p}),enabled:_.size>0}]});P.useEffect(()=>{(G||C)&&g({type:"ERROR",error:"Error fetching spaces.",loading:!1})},[G,C]),P.useEffect(()=>{if(g({type:"LOADING",loading:!0}),b.size===0&&_.size===0){g({type:"LOADING",loading:!1});return}if(A){for(const l of A)if(y.has(l.id)||y.set(l.id,l),h.has(l.configurationId)||h.set(l.configurationId,l),l.payerIDs)for(const O of l.payerIDs){const D=f.get(O);D?f.set(O,[...D,l]):f.set(O,[l])}}if(_.size>0&&E){for(const l of E)if(y.has(l.id)||y.set(l.id,l),h.has(l.configurationId)||h.set(l.configurationId,l),l.payerIDs)for(const O of l.payerIDs){const D=f.get(O);D?f.set(O,[...D,l]):f.set(O,[l])}}g({type:"SPACES",spaces:y,spacesByConfig:h,spacesByPayer:f,loading:!1})},[A,E,o,s]);const we=()=>{if(t)return Br(t)?t({spaces:[y.values()],loading:m,error:x}):t};return i.jsx(Se.Provider,{value:{spaces:y,spacesByConfig:h,spacesByPayer:f,loading:m||Ee||j,error:x},children:i.jsx(Xr,{children:we()})})},ne=(...e)=>{const{spaces:r,spacesByConfig:a,spacesByPayer:t}=xe(),o=!e||e.length===0,s=(e==null?void 0:e.length)===1&&e[0]===void 0;return o||s?(console.warn("You did not pass in an ID to find a space, returning all spaces."),r&&[...r.values()]):e.reduce((c,n)=>{const u=(r==null?void 0:r.get(n))||(a==null?void 0:a.get(n));if(u)return c.push(u),c;const m=t==null?void 0:t.get(n);if(m)return c.push(...m),c},[])};I(ce,{name:"AvSpacesLink",slot:"root"})({});I(w,{name:"AvSpacesLink",slot:"AvDateInfo"})({});I(yr,{name:"AvSpacesLink",slot:"AvFavoriteHeart"})({});I(ar,{name:"AvSpacesLink",slot:"IconLink"})({});var Zr=Object.defineProperty,ea=Object.defineProperties,ra=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable,se=(e,r,a)=>r in e?Zr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,$=(e,r)=>{for(var a in r||(r={}))Te.call(r,a)&&se(e,a,r[a]);if(H)for(var a of H(r))Ae.call(r,a)&&se(e,a,r[a]);return e},M=(e,r)=>ea(e,ra(r)),z=(e,r)=>{var a={};for(var t in e)Te.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&H)for(var t of H(e))r.indexOf(t)<0&&Ae.call(e,t)&&(a[t]=e[t]);return a},La=e=>i.jsx(ir,M($({},e),{disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0})),$a=e=>{var r=e,{children:a}=r,t=z(r,["children"]);return i.jsx(tr,M($({},t),{children:a}))},Oe=({theme:e})=>({".MuiTabs-indicator":{display:"none"},".MuiTab-root":{borderTopLeftRadius:".25rem",borderTopRightRadius:".25rem",border:"1px solid",borderColor:"transparent",marginBottom:"-1px","&:hover, &:hover.Mui-selected":{backgroundColor:e.palette.action.hover},"&.Mui-focusVisible":{outline:`2px solid ${e.palette.primary.main}`,backgroundColor:"inherit",outlineOffset:"-2px"},"&.Mui-selected":{backgroundColor:e.palette.background.paper,borderColor:e.palette.divider,borderBottomColor:e.palette.background.paper}}}),aa=I(ve,{name:"MuiTabs",slot:"AvPrimary",overridesResolver:(e,r)=>r.avPrimary})({}),ta=I(ve,{name:"MuiTabs",slot:"AvSecondary",overridesResolver:(e,r)=>r.avSecondary})(Oe),Ma=e=>{var r=e,{level:a="primary"}=r,t=z(r,["level"]);const o=a==="primary"?aa:ta;return i.jsx(o,M($({},t),{orientation:"horizontal",centered:!1}))},oa=I(fe,{name:"MuiTabs",slot:"AvPrimary",overridesResolver:(e,r)=>r.avPrimary})({}),ia=I(fe,{name:"MuiTabs",slot:"AvSecondary",overridesResolver:(e,r)=>r.avSecondary})(Oe),Ra=e=>{var r=e,{level:a="primary"}=r,t=z(r,["level"]);const o=a==="primary"?oa:ia;return i.jsx(o,M($({},t),{orientation:"horizontal",centered:!1}))},ka=e=>{var r=e,{children:a}=r,t=z(r,["children"]);return i.jsx(or,M($({},t),{children:a}))};export{Ca as F,qr as S,Ma as T,La as a,$a as b,Ra as c,ka as d,Fa as e};
