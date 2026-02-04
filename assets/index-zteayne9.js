import{j as i,r as b,A as Ie}from"./iframe-uePoqqpz.js";import{P as Se,T as xe,a as Pe}from"./index-BqTKzXQK.js";import{B as $,I as oe,L as Ae}from"./index-DRQPm386.js";import{e as Ee,f as Oe,g as ie}from"./index-B13PupMo.js";import{T as De}from"./index-_oU69kDs.js";import{G as w,B as ne}from"./index-B2DDv_1u.js";import{h as q,p as H,s as we,b as Te,t as Fe,u as je,v as Le}from"./index-iuot5o8P.js";import{F as Ce}from"./index-6RO9VGSX.js";import{u as Me,C as $e}from"./index.esm-CNFp7LBc.js";import{T as se}from"./index-Drv2WCB6.js";import{s as A}from"./styled-HV0RCVZb.js";import{C as Re}from"./Container-BhCZsEOQ.js";import{i as ke}from"./index-C0ZkTegJ.js";import{D as Be,a as Ne,d as He,b as le}from"./index-DiPXwb89.js";import{q as K}from"./index-DAiSr6pO.js";import{i as Ue}from"./index-BiBDMnSv.js";import{u as ze,I as Ye,R as Ve}from"./Img-DgN-XNKY.js";import{C as V}from"./index-mYnvcCrs.js";import{T as We}from"./index-CycH0pyX.js";import{L as qe}from"./Link-D4eMIYb-.js";var Ke=Object.defineProperty,G=Object.getOwnPropertySymbols,Ge=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,Q=(e,r,a)=>r in e?Ke(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,Z=(e,r)=>{for(var a in r||(r={}))Ge.call(r,a)&&Q(e,a,r[a]);if(G)for(var a of G(r))Qe.call(r,a)&&Q(e,a,r[a]);return e},Ze=b.createContext(null),Je=()=>{},Xe=e=>{const r=b.useContext(Ze);if(r===null)throw new Error("useFavorites must be used within a FavoritesProvider");const{favorites:a,queryStatus:t,mutationStatus:o,lastClickedFavoriteId:l,deleteFavorite:d,addFavorite:c}=r,n=l===e,u=b.useMemo(()=>!!a?.find(g=>g.id===e),[a,e]),m=()=>u?d(e):c(e),x=t==="loading"||t==="idle"||o==="loading";let y="initLoading";return t==="loading"&&(y="initLoading"),t==="reloading"&&(y="reloading"),o==="loading"&&(y="reloading"),(t==="error"||o==="error")&&(y="error"),t==="success"&&(o==="success"||o==="idle")&&(y="success"),{isFavorited:u,status:y,isLastClickedFavorite:n,toggleFavorite:x?Je:m}},er={spinner:i.jsx(V,{"aria-hidden":!0,size:"small",loadingCaption:!1}),unknownDisabledHeart:i.jsx(H,{"aria-hidden":!0,color:"disabled"}),favoritedDisabledHeart:i.jsx(H,{"aria-hidden":!0,color:"error",opacity:"0.6"}),unfavoritedDisabledHeart:i.jsx(q,{"aria-hidden":!0,color:"disabled",opacity:"0.6"}),favoritedHeart:i.jsx(H,{"aria-hidden":!0,color:"error"}),unfavoritedHeart:i.jsx(q,{"aria-hidden":!0,color:"secondary"})},U="2.5rem",rr=A("div",{name:"AvFavoriteHeart",slot:"Root"})(({customSize:e})=>({height:e,width:e})),J=A("input",{name:"AvFavoriteHeart",slot:"input"})(({customSize:e})=>({height:e,width:e,minHeight:e,minWidth:e})),ar=(e=U)=>{const r=e.match(/^(\d*\.?\d+)(px|rem)$/);if(!r)throw new Error("Invalid size format. Must be in 'px' or 'rem'.");const[,a,t]=r;return`${parseFloat(a)/2}${t}`},tr=A("div",{name:"AvFavoriteHeart",slot:"icon"})(({customSize:e})=>({fontSize:ar(e)})),or=e=>{const r=e.match(/^(\d*\.?\d+)(px|rem)$/);if(!r)return!1;const[,a,t]=r,o=parseFloat(a);return t==="rem"&&o>=1.5?!0:t==="px"&&o>=24},ir=({id:e,name:r,onChange:a,onMouseDown:t,disabled:o=!1,customSize:l=U})=>{const{isFavorited:d,isLastClickedFavorite:c,status:n,toggleFavorite:u}=Xe(e),m=I=>{a?.(d,I),u()},x=I=>{(I.code==="Enter"||I.key==="Enter")&&(a?.(d,I),u())},y=n==="initLoading"?"unknownDisabledHeart":n==="reloading"?c?"spinner":d?"favoritedDisabledHeart":"unfavoritedDisabledHeart":o?d?"favoritedDisabledHeart":"unfavoritedDisabledHeart":d?"favoritedHeart":"unfavoritedHeart",P=o||!c&&(n==="initLoading"||n==="reloading")?"not-allowed":void 0,g=`${d?"Remove from":"Add to"} My Favorites`,h={onKeyDown:x,type:"checkbox","aria-label":`Favorite ${r}`,id:`av-favorite-heart-${e}`,disabled:o,checked:d,onChange:m,onMouseDown:t,style:{cursor:P}},f=or(l)?l:U;return i.jsxs(rr,{customSize:f,children:[i.jsx(tr,{customSize:f,children:er[y]}),i.jsx("span",{style:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0},"aria-live":c&&(n==="reloading"||n==="error")?"polite":"off",children:c&&n==="reloading"?"Loading...":c&&n==="error"?"An error has occurred. Please try again.":""}),o?i.jsx(J,Z({customSize:f},h)):i.jsx(We,{title:g,placement:"top",children:i.jsx(J,Z({customSize:f},h))})]})},nr=Object.defineProperty,sr=Object.defineProperties,lr=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,de=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable,X=(e,r,a)=>r in e?nr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,C=(e,r)=>{for(var a in r||(r={}))de.call(r,a)&&X(e,a,r[a]);if(R)for(var a of R(r))ce.call(r,a)&&X(e,a,r[a]);return e},z=(e,r)=>sr(e,lr(r)),ue=(e,r)=>{var a={};for(var t in e)de.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&R)for(var t of R(e))r.indexOf(t)<0&&ce.call(e,t)&&(a[t]=e[t]);return a},dr=(e,r,a)=>new Promise((t,o)=>{var l=n=>{try{c(a.next(n))}catch(u){o(u)}},d=n=>{try{c(a.throw(n))}catch(u){o(u)}},c=n=>n.done?t(n.value):Promise.resolve(n.value).then(l,d);c((a=a.apply(e,r)).next())}),cr=A(xe,{name:"AvFeedbackContainer",slot:"SmileButtons"})({}),ur=A(w,{name:"AvFeedbackContainer",slot:"FormActions"})({}),pr=e=>{var r=e,{disabled:a,Icon:t,label:o,value:l}=r,d=ue(r,["disabled","Icon","label","value"]);return i.jsx("div",{children:i.jsx(Pe,z(C({component:oe,disableRipple:!0,title:o,"aria-label":l,value:l},d),{disabled:a,size:"large",children:i.jsx(t,{})}))})},fr=({analytics:e,appName:r,handleClose:a,loading:t,sent:o,setLoading:l,setSent:d})=>{var c;const{control:n,formState:{errors:u},handleSubmit:m,register:x,setValue:y,watch:P}=Me(),g=_=>dr(null,null,function*(){var p=_,{smileField:E}=p,D=ue(p,["smileField"]);l(!0);try{const j=yield Oe.getCurrentRegion();yield e.info(C({surveyId:`${r.replace(/\s/g,"_")}_Smile_Survey`,smileLocation:`${r}`,smile:`icon-${E}`,url:window.location.href,region:j.data.regions[0]&&j.data.regions[0].id,userAgent:window.navigator.userAgent,submitTime:new Date},D)),d(!0),l(!1)}catch{d(!1),l(!1)}});b.useEffect(()=>{o&&setTimeout(()=>{a()},2e3)},[o]);const h=[{Icon:Fe,label:"What do you like?",value:"smile"},{Icon:je,label:"What would you improve?",value:"meh"},{Icon:Le,label:"What don't you like?",value:"frown"}],f=P("smileField"),I=()=>{const _=h.find(p=>p.value===f);return _?.label||"What would you improve?"};return o?null:i.jsxs(w,{component:"form",container:!0,sx:{justifyContent:"center"},onSubmit:m(g),"aria-label":"Feedback Form","aria-describedby":"feedback-form-header",children:[i.jsx($e,{control:n,name:"smileField",render:({field:_})=>i.jsx(cr,z(C({children:h.map((p,E)=>i.jsx(pr,C({autoFocus:E===0,disabled:t},p),p.value))},_),{"aria-labelledby":"feedback-form-header",onChange:(p,E)=>{y(_.name,E)},size:"medium",exclusive:!0}))}),i.jsx(De,z(C({},x("feedback",{required:"This field is required",maxLength:{value:200,message:"This field must not exceed 200 characters"}})),{fullWidth:!0,multiline:!0,minRows:3,maxRows:3,label:I(),InputLabelProps:{component:Ce,required:!0},inputProps:{"aria-required":"true"},helperText:((c=u.feedback)==null?void 0:c.message)||"Max 200 characters",error:!!u.feedback,disabled:t||!f})),i.jsxs(ur,{container:!0,direction:"row",width:"100%",spacing:1,wrap:"wrap",children:[i.jsx(w,{sx:{flex:1,minWidth:"147px"},children:i.jsx($,{color:"secondary",disabled:t,onClick:a,children:"Close"})}),i.jsx(w,{sx:{flex:1,minWidth:"147px"},children:i.jsx(Ae,{disabled:!f,loading:t,type:"submit",children:"Send Feedback"})})]})]})},vr=A(w,{name:"AvFeedbackContainer",slot:"FeedbackHeaderContainer"})({}),mr=({appName:e,handleClose:r,loading:a,sent:t})=>i.jsxs(vr,{alignItems:"flex-start",container:!0,direction:"row",justifyContent:"space-between",flexWrap:"nowrap",id:"feedback-form-header",children:[i.jsx(w,{sx:{whiteSpace:"normal"},children:i.jsx(se,{component:"h2",variant:"h5",children:t?"Thank you for your feedback.":`Tell us what you think about ${e}`})}),i.jsx(w,{children:i.jsx(oe,{disabled:a,title:"Close",onClick:r,size:"medium",children:i.jsx(Te,{fontSize:"xsmall"})})})]}),gr=A(Re,{name:"AvFeedbackContainer",slot:"root"})({}),yr=A($,{name:"AvFeedbackButton",slot:"root"})({}),la=({analytics:e=Ee,appName:r,buttonVariant:a="secondary"})=>{const[t,o]=b.useState(null),[l,d]=b.useState(!1),[c,n]=b.useState(!1),u=y=>{o(y.currentTarget),d(!1)},m=()=>{o(null)},x=!!t;return i.jsxs(i.Fragment,{children:[i.jsx(yr,{onClick:u,color:a,startIcon:i.jsx(we,{}),children:"Feedback"}),i.jsx(Se,{anchorEl:t,anchorOrigin:{vertical:"bottom",horizontal:"right"},sx:{marginTop:"4px"},disableRestoreFocus:!0,onClose:m,open:x,transformOrigin:{vertical:"top",horizontal:"right"},children:i.jsxs(gr,{children:[i.jsx(mr,{appName:r,handleClose:m,loading:c,sent:l}),i.jsx(fr,{analytics:e,appName:r,handleClose:m,loading:c,sent:l,setLoading:n,setSent:d})]})})]})},hr=Object.defineProperty,_r=Object.defineProperties,br=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,ee=(e,r,a)=>r in e?hr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,v=(e,r)=>{for(var a in r||(r={}))pe.call(r,a)&&ee(e,a,r[a]);if(k)for(var a of k(r))fe.call(r,a)&&ee(e,a,r[a]);return e},S=(e,r)=>_r(e,br(r)),ve=(e,r)=>{var a={};for(var t in e)pe.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&k)for(var t of k(e))r.indexOf(t)<0&&fe.call(e,t)&&(a[t]=e[t]);return a},B=(e,r,a)=>new Promise((t,o)=>{var l=n=>{try{c(a.next(n))}catch(u){o(u)}},d=n=>{try{c(a.throw(n))}catch(u){o(u)}},c=n=>n.done?t(n.value):Promise.resolve(n.value).then(l,d);c((a=a.apply(e,r)).next())}),Ir=e=>{const r=e.match(/(?:query|mutation|subscription)\s+([a-zA-Z_][a-zA-Z0-9_]*)/i);return r?.[1]},Sr={SPACES:(e,{spaces:r,spacesByConfig:a,spacesByPayer:t})=>({previousSpacesMap:r,previousSpacesByConfigMap:a,previousSpacesByPayerMap:t,error:void 0,loading:!1}),ERROR:(e,{error:r})=>S(v({},e),{loading:!1,error:r}),LOADING:(e,{loading:r})=>S(v({},e),{loading:r!==void 0?r:!e.loading})},xr=(e,r)=>{const{type:a}=r;return Sr[a](e,r)},Pr=e=>B(null,[e],function*({query:r,clientId:a,variables:t,operationName:o}){const l={};a&&(l["X-Client-ID"]=a);const{data:{data:{configurationPagination:d}}}=yield ie.create({query:r,variables:v({},t),operationName:o||Ir(r)||"PuiSpacesCmpAnonymousOperation"},{headers:v({},l)}),{pageInfo:{currentPage:c,hasNextPage:n},items:u}=d;return{items:u,currentPage:c,hasNextPage:n}}),Y=e=>B(null,[e],function*({query:r,clientId:a,variables:t,_spaces:o=[],operationName:l}){const{items:d,currentPage:c,hasNextPage:n}=yield Pr({query:r,clientId:a,variables:t,operationName:l});if(o.push(...d),n){const u=S(v({},t),{page:c+1});return Y({query:r,clientId:a,variables:u,_spaces:o,operationName:l})}return o}),Ar=`query PuiSpacesCmpConfigurationFindMany($ids: [String!], $payerIDs: [ID!], $types: [TypeEnum!], $page: Int) {
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
}`,re=(e,r,a)=>{const[t,o]=e.split("?"),l=K.parse(o),d=a&&{[r]:a},c=K.stringify(v(v({},l),d),{sort:(n,u)=>n.localeCompare(u)});return`${t}?${c}`},Er=(e="",r,a)=>e,Or=e=>{if(e&&!e.startsWith("_")){if(e==="BODY")return"_self";if(e==="TAB")return"_blank"}return e||"_self"},Dr=e=>typeof e=="function",L={ALLOWED_TYPES:["APPLICATION","RESOURCE","NAVIGATION"],DISALLOWED_TYPES:["reporting","how_to_guide_dental_providers","my_account_profile","my_administrators"],KEYS:{VALUES:"myTopApps",LAST_UPDATED:"top-apps-updated"},UPDATE_EVENT:"av:topApps:updated"},wr=e=>{try{const r=window.localStorage.getItem(e);return r===null?null:JSON.parse(r)}catch{return null}},Tr=(e,r)=>L.ALLOWED_TYPES.some(a=>a===r)&&!L.DISALLOWED_TYPES.some(a=>a===e),Fr=e=>wr(`${L.KEYS.VALUES}-${e}`),jr=(e,r)=>B(null,null,function*(){if(!(!e.configurationId||!e.type)&&Tr(e.configurationId,e.type)){const a=Ie(),t=(yield Fr(r))||{};window.localStorage.setItem(`${L.KEYS.LAST_UPDATED}-${r}`,a.format());const o=t[e.configurationId]&&typeof t[e.configurationId].count=="number"?t[e.configurationId].count:0;t[e.configurationId]=S(v({},t?.[e.configurationId]),{count:o+1,lastUse:a.format()}),window.localStorage.setItem(`${L.KEYS.VALUES}-${r}`,JSON.stringify(t)),Ue.send(L.UPDATE_EVENT)}}),Lr=`query disclaimerFindOne($id: ID!) {
  configurationFindOne(id: $id) {
    ... on Text {
      description
    }
  }
}`,Cr=({disclaimerId:e})=>{const[r,a]=b.useState("");return b.useEffect(()=>{B(null,null,function*(){if(e){const o=yield ie.create({query:Lr,variables:{id:e}});a(o.data.data.configurationFindOne.description)}})},[e]),i.jsx(le,{children:r?i.jsx(Ve,{children:r}):i.jsx(V,{})})},Mr=e=>{var r=e,{spaceId:a,payerId:t,imageType:o="url",fallback:l,Loader:d=V}=r,c=ve(r,["spaceId","payerId","imageType","fallback","Loader"]),n,u,m,x,y,P,g,h,f,I,_;let p;a?p=te(a):t&&(p=te(t));const{loading:E}=he(),D=a||t||p?.[0].id||p?.[0].configurationId;let T={"images.logo":(u=(n=p?.[0])==null?void 0:n.images)==null?void 0:u.logo,"images.tile":(x=(m=p?.[0])==null?void 0:m.images)==null?void 0:x.tile,"images.billboard":(P=(y=p?.[0])==null?void 0:y.images)==null?void 0:P.billboard,"images.promotional":(h=(g=p?.[0])==null?void 0:g.images)==null?void 0:h.promotional,"images.promotionalHover":(I=(f=p?.[0])==null?void 0:f.images)==null?void 0:I.promotionalHover,url:(_=p?.[0])==null?void 0:_.url}[o];return!T&&E?i.jsx(d,{id:`app-${D}-loading`}):(!T&&!E&&l&&(T=l),!T||!D?null:i.jsx(Ye,v({id:c.id||`app-img-${D}`,src:T,alt:`Space ${o}`,loader:i.jsx(d,{id:`app-img-${D}-loading`})},c)))},$r=({parentPayerSpaces:e,name:r,state:{selectedOption:a},setState:t})=>i.jsxs(le,{children:[i.jsx(se,{children:`Open ${r} as: ${a?a.name||a.id:""}`}),i.jsx(w,{direction:"row",children:e&&e.map(o=>i.jsx(ne,{onClick:()=>t({selectedOption:o}),children:i.jsx(Mr,{spaceId:o.configurationId,imageType:"images.tile"})}))})]}),Rr=e=>e.spaceType!==void 0,kr=e=>e.selectedOption!==void 0,me={isOpen:!1,modalOptions:void 0,modalState:{selectedOption:{id:"",name:""}},selectedModal:{}},Br=b.createContext(null),ae={DISCLAIMER:{body:Cr,buttonProps:()=>({children:"Accept"}),onSubmit:({link:e,id:r})=>{var a;window.open(((a=e.url)==null?void 0:a[0])==="/"?re(e.url,"spaceId",r):e.url,e.target)}},MULTI_PAYER:{body:$r,buttonProps:({selectedOption:e})=>({children:"Continue",disabled:e===void 0}),onSubmit:({metadata:e,link:r,id:a,name:t},o,l)=>{if(e?.disclaimerId){l({type:"OPEN_DISCLAIMER_MODAL",disclaimerId:e.disclaimerId,link:r,id:a,name:t});return}const d=Or(r.target);r.url&&window.open(ke(r.url)?r.url:Er(re(r.url,"spaceId",o.selectedOption.id)),d)}}},M={RESET:()=>me,OPEN_DISCLAIMER_MODAL:(e,r)=>S(v({},e),{isOpen:!0,selectedModal:ae.DISCLAIMER,modalOptions:S(v({},r),{type:r.spaceType})}),OPEN_MULTI_PAYER_MODAL:(e,r)=>S(v({},e),{isOpen:!0,selectedModal:ae.MULTI_PAYER,modalOptions:S(v({},r),{type:r.spaceType})}),UPDATE_MODAL_STATE:(e,r)=>S(v({},e),{modalState:r})},Nr=(e,r)=>{var a=r,{type:t}=a,o=ve(a,["type"]);if(t==="RESET")return M.RESET();if(Rr(o)){if(t==="OPEN_MULTI_PAYER_MODAL")return M.OPEN_MULTI_PAYER_MODAL(e,o);if(t==="OPEN_DISCLAIMER_MODAL")return M.OPEN_DISCLAIMER_MODAL(e,o)}else if(kr(o)&&t==="UPDATE_MODAL_STATE")return M.UPDATE_MODAL_STATE(e,o);return e},Hr=({children:e})=>{const[{selectedModal:r,modalOptions:a,modalState:t,isOpen:o},l]=b.useReducer(Nr,me),d=()=>l({type:"RESET"}),c=r?.buttonProps&&r?.buttonProps(S(v({},t),{modalOptions:a})),n=r?.body;return i.jsxs(Br.Provider,{value:(u,m)=>l(v({type:`OPEN_${u}`},m)),children:[i.jsxs(Be,{open:o,children:[i.jsx(Ne,{id:"disclaimer-header",children:a?.title}),n&&i.jsx(n,S(v({},a),{setState:u=>l(v({type:"UPDATE_MODAL_STATE"},u)),state:t})),i.jsxs(He,{children:[i.jsx($,{onClick:d,children:"Cancel"}),i.jsx($,S(v({color:"primary"},c),{onClick:()=>{r?.onSubmit&&a&&t&&r.onSubmit(a,t,l),a&&jr({configurationId:a.id,type:a.type,name:a.name,id:a.id},a.user),d()}}))]})]}),e]})},ge={loading:!0},ye=b.createContext(ge),he=()=>b.useContext(ye),da=({query:e=Ar,variables:r={types:["PAYERSPACE"]},operationName:a,clientId:t,children:o,payerIds:l,spaceIds:d,spaces:c})=>{const[{previousSpacesMap:n,previousSpacesByConfigMap:u,previousSpacesByPayerMap:m,loading:x,error:y},P]=b.useReducer(xr,ge),g=new Map(n),h=new Map(u),f=new Map(m),I=new Set,_=new Set;if(c&&c.length>0){for(const s of c)if(s.id&&!g.has(s.id)&&g.set(s.id,s),s.configurationId&&!h.has(s.configurationId)&&h.set(s.configurationId,s),s.payerIDs)for(const O of s.payerIDs){const F=f.get(O);F?f.set(O,[...F,s]):f.set(O,[s])}}if(d&&d.length>0)for(const s of d)s&&typeof s=="string"&&s.trim()&&!(g.has(s)||h.has(s))&&I.add(s);if(l&&l.length>0)for(const s of l)s&&typeof s=="string"&&s.trim()&&!f.has(s)&&_.add(s);const p=S(v({},r),{ids:[...I.keys()]}),E=S(v({},r),{payerIDs:[..._.keys()]}),[{data:D,isFetching:j,isError:T},{data:N,isFetching:_e,isError:W}]=ze({queries:[{queryKey:["id",p],queryFn:()=>Y({query:e,clientId:t,variables:p,operationName:a}),enabled:I.size>0},{queryKey:["id",E],queryFn:()=>Y({query:e,clientId:t,variables:E,operationName:a}),enabled:_.size>0}]});b.useEffect(()=>{(W||T)&&P({type:"ERROR",error:"Error fetching spaces.",loading:!1})},[W,T]),b.useEffect(()=>{if(P({type:"LOADING",loading:!0}),I.size===0&&_.size===0){P({type:"LOADING",loading:!1});return}if(D){for(const s of D)if(g.has(s.id)||g.set(s.id,s),h.has(s.configurationId)||h.set(s.configurationId,s),s.payerIDs)for(const O of s.payerIDs){const F=f.get(O);F?f.set(O,[...F,s]):f.set(O,[s])}}if(_.size>0&&N){for(const s of N)if(g.has(s.id)||g.set(s.id,s),h.has(s.configurationId)||h.set(s.configurationId,s),s.payerIDs)for(const O of s.payerIDs){const F=f.get(O);F?f.set(O,[...F,s]):f.set(O,[s])}}P({type:"SPACES",spaces:g,spacesByConfig:h,spacesByPayer:f,loading:!1})},[D,N,l,d]);const be=()=>{if(o)return Dr(o)?o({spaces:[g.values()],loading:x,error:y}):o};return i.jsx(ye.Provider,{value:{spaces:g,spacesByConfig:h,spacesByPayer:f,loading:x||_e||j,error:y},children:i.jsx(Hr,{children:be()})})},te=(...e)=>{const{spaces:r,spacesByConfig:a,spacesByPayer:t}=he(),o=!e||e.length===0,l=e?.length===1&&e[0]===void 0;return o||l?(console.warn("You did not pass in an ID to find a space, returning all spaces."),r&&[...r.values()]):e.reduce((c,n)=>{const u=r?.get(n)||a?.get(n);if(u)return c.push(u),c;const m=t?.get(n);if(m)return c.push(...m),c},[])};A(ne,{name:"AvSpacesLink",slot:"root"})({});A(w,{name:"AvSpacesLink",slot:"AvDateInfo"})({});A(ir,{name:"AvSpacesLink",slot:"AvFavoriteHeart"})({});A(qe,{name:"AvSpacesLink",slot:"IconLink"})({});export{la as F,Mr as S,da as a};
