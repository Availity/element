import{r as b}from"./index-BgYLq7fD.js";import{P as Ie,T as be,a as Se}from"./index-CXGBBhzw.js";import{B as $,I as te,L as xe}from"./index-k9OtkSpc.js";import{g as Pe,e as Ae,h as oe}from"./index-Dl5t6TV_.js";import{T as Ee}from"./index-BREKFP9Y.js";import{G as w,B as ie}from"./index-DmY_4rvh.js";import{h as q,q as N,s as Oe,C as De,t as we,u as Te,v as Fe}from"./index-CmMPo3bx.js";import{F as je}from"./index-YXU10wut.js";import{u as Le,C as Ce}from"./index.esm-Cdw3oWqD.js";import{j as i}from"./jsx-runtime-BTJTZTIL.js";import{T as ne}from"./index-ClMemn8c.js";import{s as E}from"./styled-FZfCzBz5.js";import{C as Me}from"./Container-DvcsWH8C.js";import{i as $e}from"./index-DuRQpI0H.js";import{D as Re,a as ke,d as Be,b as se}from"./index-CMSWtomJ.js";import{q as W}from"./index-DLKRbc4C.js";import{i as Ne}from"./index-DJKl12U0.js";import{d as He}from"./dayjs.min-CfWDS3UC.js";import{u as Ue,I as Ye,R as ze}from"./Img-B45hvfNA.js";import{C as z}from"./index-D95KORoo.js";import{T as Ve}from"./index-DATHDNip.js";import"./index-DexkmQxl.js";import"./index-B7xDH96f.js";import{L as qe}from"./Link-rLN5tdDv.js";var We=Object.defineProperty,K=Object.getOwnPropertySymbols,Ke=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable,G=(e,r,a)=>r in e?We(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,Q=(e,r)=>{for(var a in r||(r={}))Ke.call(r,a)&&G(e,a,r[a]);if(K)for(var a of K(r))Ge.call(r,a)&&G(e,a,r[a]);return e},Qe=b.createContext(null),Je=()=>{},Xe=e=>{const r=b.useContext(Qe);if(r===null)throw new Error("useFavorites must be used within a FavoritesProvider");const{favorites:a,queryStatus:t,mutationStatus:o,lastClickedFavoriteId:s,deleteFavorite:d,addFavorite:c}=r,n=s===e,u=b.useMemo(()=>!!(a==null?void 0:a.find(h=>h.id===e)),[a,e]),m=()=>u?d(e):c(e),x=t==="loading"||t==="idle"||o==="loading";let g="initLoading";return t==="loading"&&(g="initLoading"),t==="reloading"&&(g="reloading"),o==="loading"&&(g="reloading"),(t==="error"||o==="error")&&(g="error"),t==="success"&&(o==="success"||o==="idle")&&(g="success"),{isFavorited:u,status:g,isLastClickedFavorite:n,toggleFavorite:x?Je:m}},Ze={spinner:i.jsx(z,{"aria-hidden":!0,size:"small",loadingCaption:!1}),unknownDisabledHeart:i.jsx(N,{"aria-hidden":!0,color:"disabled"}),favoritedDisabledHeart:i.jsx(N,{"aria-hidden":!0,color:"error",opacity:"0.6"}),unfavoritedDisabledHeart:i.jsx(q,{"aria-hidden":!0,color:"disabled",opacity:"0.6"}),favoritedHeart:i.jsx(N,{"aria-hidden":!0,color:"error"}),unfavoritedHeart:i.jsx(q,{"aria-hidden":!0,color:"secondary"})},H="2.5rem",er=E("div",{name:"AvFavoriteHeart",slot:"Root"})(({customSize:e})=>({height:e,width:e})),J=E("input",{name:"AvFavoriteHeart",slot:"input"})(({customSize:e})=>({height:e,width:e,minHeight:e,minWidth:e})),rr=(e=H)=>{const r=e.match(/^(\d*\.?\d+)(px|rem)$/);if(!r)throw new Error("Invalid size format. Must be in 'px' or 'rem'.");const[,a,t]=r;return`${parseFloat(a)/2}${t}`},ar=E("div",{name:"AvFavoriteHeart",slot:"icon"})(({customSize:e})=>({fontSize:rr(e)})),tr=e=>{const r=e.match(/^(\d*\.?\d+)(px|rem)$/);if(!r)return!1;const[,a,t]=r,o=parseFloat(a);return t==="rem"&&o>=1.5?!0:t==="px"&&o>=24},or=({id:e,name:r,onChange:a,onMouseDown:t,disabled:o=!1,customSize:s=H})=>{const{isFavorited:d,isLastClickedFavorite:c,status:n,toggleFavorite:u}=Xe(e),m=I=>{a==null||a(d,I),u()},x=I=>{(I.code==="Enter"||I.key==="Enter")&&(a==null||a(d,I),u())},g=n==="initLoading"?"unknownDisabledHeart":n==="reloading"?c?"spinner":d?"favoritedDisabledHeart":"unfavoritedDisabledHeart":o?d?"favoritedDisabledHeart":"unfavoritedDisabledHeart":d?"favoritedHeart":"unfavoritedHeart",y=o||!c&&(n==="initLoading"||n==="reloading")?"not-allowed":void 0,h=`${d?"Remove from":"Add to"} My Favorites`,f={onKeyDown:x,type:"checkbox","aria-label":`Favorite ${r}`,id:`av-favorite-heart-${e}`,disabled:o,checked:d,onChange:m,onMouseDown:t,style:{cursor:y}},_=tr(s)?s:H;return i.jsxs(er,{customSize:_,children:[i.jsx(ar,{customSize:_,children:Ze[g]}),i.jsx("span",{style:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0},"aria-live":c&&(n==="reloading"||n==="error")?"polite":"off",children:c&&n==="reloading"?"Loading...":c&&n==="error"?"An error has occurred. Please try again.":""}),o?i.jsx(J,Q({customSize:_},f)):i.jsx(Ve,{title:h,placement:"top",children:i.jsx(J,Q({customSize:_},f))})]})},ir=Object.defineProperty,nr=Object.defineProperties,sr=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,le=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,X=(e,r,a)=>r in e?ir(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,C=(e,r)=>{for(var a in r||(r={}))le.call(r,a)&&X(e,a,r[a]);if(R)for(var a of R(r))de.call(r,a)&&X(e,a,r[a]);return e},U=(e,r)=>nr(e,sr(r)),ce=(e,r)=>{var a={};for(var t in e)le.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&R)for(var t of R(e))r.indexOf(t)<0&&de.call(e,t)&&(a[t]=e[t]);return a},lr=(e,r,a)=>new Promise((t,o)=>{var s=n=>{try{c(a.next(n))}catch(u){o(u)}},d=n=>{try{c(a.throw(n))}catch(u){o(u)}},c=n=>n.done?t(n.value):Promise.resolve(n.value).then(s,d);c((a=a.apply(e,r)).next())}),dr=E(be,{name:"AvFeedbackContainer",slot:"SmileButtons"})({}),cr=E(w,{name:"AvFeedbackContainer",slot:"FormActions"})({}),ur=e=>{var r=e,{disabled:a,Icon:t,label:o,value:s}=r,d=ce(r,["disabled","Icon","label","value"]);return i.jsx("div",{children:i.jsx(Se,U(C({component:te,disableRipple:!0,title:o,"aria-label":s,value:s},d),{disabled:a,size:"large",children:i.jsx(t,{})}))})},pr=({analytics:e,appName:r,handleClose:a,loading:t,sent:o,setLoading:s,setSent:d})=>{var c;const{control:n,formState:{errors:u},handleSubmit:m,register:x,setValue:g,watch:y}=Le(),h=P=>lr(void 0,null,function*(){var p=P,{smileField:A}=p,T=ce(p,["smileField"]);s(!0);try{const j=yield Ae.getCurrentRegion();yield e.info(C({surveyId:`${r.replace(/\s/g,"_")}_Smile_Survey`,smileLocation:`${r}`,smile:`icon-${A}`,url:window.location.href,region:j.data.regions[0]&&j.data.regions[0].id,userAgent:window.navigator.userAgent,submitTime:new Date},T)),d(!0),s(!1)}catch{d(!1),s(!1)}});b.useEffect(()=>{o&&setTimeout(()=>{a()},2e3)},[o]);const f=[{Icon:we,label:"What do you like?",value:"smile"},{Icon:Te,label:"What would you improve?",value:"meh"},{Icon:Fe,label:"What don't you like?",value:"frown"}],_=y("smileField"),I=()=>{const P=f.find(p=>p.value===_);return(P==null?void 0:P.label)||"What would you improve?"};return o?null:i.jsxs(w,{component:"form",container:!0,sx:{justifyContent:"center"},onSubmit:m(h),"aria-label":"Feedback Form","aria-describedby":"feedback-form-header",children:[i.jsx(Ce,{control:n,name:"smileField",render:({field:P})=>i.jsx(dr,U(C({children:f.map((p,A)=>i.jsx(ur,C({autoFocus:A===0,disabled:t},p),p.value))},P),{"aria-labelledby":"feedback-form-header",onChange:(p,A)=>{g(P.name,A)},size:"medium",exclusive:!0}))}),i.jsx(Ee,U(C({},x("feedback",{required:"This field is required",maxLength:{value:200,message:"This field must not exceed 200 characters"}})),{fullWidth:!0,multiline:!0,minRows:3,maxRows:3,label:I(),InputLabelProps:{component:je,required:!0},inputProps:{"aria-required":"true"},helperText:((c=u.feedback)==null?void 0:c.message)||"Max 200 characters",error:!!u.feedback,disabled:t||!_})),i.jsxs(cr,{container:!0,direction:"row",width:"100%",spacing:1,wrap:"wrap",children:[i.jsx(w,{sx:{flex:1,minWidth:"147px"},children:i.jsx($,{color:"secondary",disabled:t,onClick:a,children:"Close"})}),i.jsx(w,{sx:{flex:1,minWidth:"147px"},children:i.jsx(xe,{disabled:!_,loading:t,type:"submit",variant:"contained",children:"Send Feedback"})})]})]})},fr=E(w,{name:"AvFeedbackContainer",slot:"FeedbackHeaderContainer"})({}),vr=({appName:e,handleClose:r,loading:a,sent:t})=>i.jsxs(fr,{alignItems:"flex-start",container:!0,direction:"row",justifyContent:"space-between",flexWrap:"nowrap",id:"feedback-form-header",children:[i.jsx(w,{sx:{whiteSpace:"normal"},children:i.jsx(ne,{component:"h2",variant:"h5",children:t?"Thank you for your feedback.":`Tell us what you think about ${e}`})}),i.jsx(w,{children:i.jsx(te,{disabled:a,title:"Close",onClick:r,size:"medium",children:i.jsx(De,{fontSize:"xsmall"})})})]}),mr=E(Me,{name:"AvFeedbackContainer",slot:"root"})({}),gr=E($,{name:"AvFeedbackButton",slot:"root"})({}),ca=({analytics:e=Pe,appName:r,buttonVariant:a="secondary"})=>{const[t,o]=b.useState(null),[s,d]=b.useState(!1),[c,n]=b.useState(!1),u=g=>{o(g.currentTarget),d(!1)},m=()=>{o(null)},x=!!t;return i.jsxs(i.Fragment,{children:[i.jsx(gr,{onClick:u,color:a,startIcon:i.jsx(Oe,{}),children:"Feedback"}),i.jsx(Ie,{anchorEl:t,anchorOrigin:{vertical:"bottom",horizontal:"right"},sx:{marginTop:"4px"},disableRestoreFocus:!0,onClose:m,open:x,transformOrigin:{vertical:"top",horizontal:"right"},children:i.jsxs(mr,{children:[i.jsx(vr,{appName:r,handleClose:m,loading:c,sent:s}),i.jsx(pr,{analytics:e,appName:r,handleClose:m,loading:c,sent:s,setLoading:n,setSent:d})]})})]})},yr=Object.defineProperty,hr=Object.defineProperties,_r=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,Z=(e,r,a)=>r in e?yr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,v=(e,r)=>{for(var a in r||(r={}))ue.call(r,a)&&Z(e,a,r[a]);if(k)for(var a of k(r))pe.call(r,a)&&Z(e,a,r[a]);return e},S=(e,r)=>hr(e,_r(r)),fe=(e,r)=>{var a={};for(var t in e)ue.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&k)for(var t of k(e))r.indexOf(t)<0&&pe.call(e,t)&&(a[t]=e[t]);return a},B=(e,r,a)=>new Promise((t,o)=>{var s=n=>{try{c(a.next(n))}catch(u){o(u)}},d=n=>{try{c(a.throw(n))}catch(u){o(u)}},c=n=>n.done?t(n.value):Promise.resolve(n.value).then(s,d);c((a=a.apply(e,r)).next())}),Ir={SPACES:(e,{spaces:r,spacesByConfig:a,spacesByPayer:t})=>({previousSpacesMap:r,previousSpacesByConfigMap:a,previousSpacesByPayerMap:t,error:void 0,loading:!1}),ERROR:(e,{error:r})=>S(v({},e),{loading:!1,error:r}),LOADING:(e,{loading:r})=>S(v({},e),{loading:r!==void 0?r:!e.loading})},br=(e,r)=>{const{type:a}=r;return Ir[a](e,r)},Sr=e=>B(void 0,[e],function*({query:r,clientId:a,variables:t}){const o={};a&&(o["X-Client-ID"]=a);const{data:{data:{configurationPagination:s}}}=yield oe.create({query:r,variables:v({},t)},{headers:v({},o)}),{pageInfo:{currentPage:d,hasNextPage:c},items:n}=s;return{items:n,currentPage:d,hasNextPage:c}}),Y=e=>B(void 0,[e],function*({query:r,clientId:a,variables:t,_spaces:o=[]}){const{items:s,currentPage:d,hasNextPage:c}=yield Sr({query:r,clientId:a,variables:t});if(o.push(...s),c){const n=S(v({},t),{page:d+1});return Y({query:r,clientId:a,variables:n,_spaces:o})}return o}),xr=`query configurationFindMany($ids: [String!], $payerIDs: [ID!], $types: [TypeEnum!], $page: Int) {
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
}`,ee=(e,r,a)=>{const[t,o]=e.split("?"),s=W.parse(o),d=a&&{[r]:a},c=W.stringify(v(v({},s),d),{sort:(n,u)=>n.localeCompare(u)});return`${t}?${c}`},Pr=(e="",r,a)=>e,Ar=e=>{if(e&&!e.startsWith("_")){if(e==="BODY")return"_self";if(e==="TAB")return"_blank"}return e||"_self"},Er=e=>typeof e=="function",L={ALLOWED_TYPES:["APPLICATION","RESOURCE","NAVIGATION"],DISALLOWED_TYPES:["reporting","how_to_guide_dental_providers","my_account_profile","my_administrators"],KEYS:{VALUES:"myTopApps",LAST_UPDATED:"top-apps-updated"},UPDATE_EVENT:"av:topApps:updated"},Or=e=>{try{const r=window.localStorage.getItem(e);return r===null?null:JSON.parse(r)}catch{return null}},Dr=(e,r)=>L.ALLOWED_TYPES.some(a=>a===r)&&!L.DISALLOWED_TYPES.some(a=>a===e),wr=e=>Or(`${L.KEYS.VALUES}-${e}`),Tr=(e,r)=>B(void 0,null,function*(){if(!(!e.configurationId||!e.type)&&Dr(e.configurationId,e.type)){const a=He(),t=(yield wr(r))||{};window.localStorage.setItem(`${L.KEYS.LAST_UPDATED}-${r}`,a.format());const o=t[e.configurationId]&&typeof t[e.configurationId].count=="number"?t[e.configurationId].count:0;t[e.configurationId]=S(v({},t==null?void 0:t[e.configurationId]),{count:o+1,lastUse:a.format()}),window.localStorage.setItem(`${L.KEYS.VALUES}-${r}`,JSON.stringify(t)),Ne.send(L.UPDATE_EVENT)}}),Fr=`query disclaimerFindOne($id: ID!) {
  configurationFindOne(id: $id) {
    ... on Text {
      description
    }
  }
}`,jr=({disclaimerId:e})=>{const[r,a]=b.useState("");return b.useEffect(()=>{B(void 0,null,function*(){if(e){const o=yield oe.create({query:Fr,variables:{id:e}});a(o.data.data.configurationFindOne.description)}})},[e]),i.jsx(se,{children:r?i.jsx(ze,{children:r}):i.jsx(z,{})})},Lr=e=>{var r=e,{spaceId:a,payerId:t,imageType:o="url",fallback:s,Loader:d=z}=r,c=fe(r,["spaceId","payerId","imageType","fallback","Loader"]),n,u,m,x,g,y,h,f,_,I,P;let p;a?p=ae(a):t&&(p=ae(t));const{loading:A}=ye(),T=a||t||(p==null?void 0:p[0].id)||(p==null?void 0:p[0].configurationId);let D={"images.logo":(u=(n=p==null?void 0:p[0])==null?void 0:n.images)==null?void 0:u.logo,"images.tile":(x=(m=p==null?void 0:p[0])==null?void 0:m.images)==null?void 0:x.tile,"images.billboard":(y=(g=p==null?void 0:p[0])==null?void 0:g.images)==null?void 0:y.billboard,"images.promotional":(f=(h=p==null?void 0:p[0])==null?void 0:h.images)==null?void 0:f.promotional,"images.promotionalHover":(I=(_=p==null?void 0:p[0])==null?void 0:_.images)==null?void 0:I.promotionalHover,url:(P=p==null?void 0:p[0])==null?void 0:P.url}[o];return!D&&A?i.jsx(d,{id:`app-${T}-loading`}):(!D&&!A&&s&&(D=s),!D||!T?null:i.jsx(Ye,v({id:c.id||`app-img-${T}`,src:D,alt:`Space ${o}`,loader:i.jsx(d,{id:`app-img-${T}-loading`})},c)))},Cr=({parentPayerSpaces:e,name:r,state:{selectedOption:a},setState:t})=>i.jsxs(se,{children:[i.jsx(ne,{children:`Open ${r} as: ${a?a.name||a.id:""}`}),i.jsx(w,{direction:"row",children:e&&e.map(o=>i.jsx(ie,{onClick:()=>t({selectedOption:o}),children:i.jsx(Lr,{spaceId:o.configurationId,imageType:"images.tile"})}))})]}),Mr=e=>e.spaceType!==void 0,$r=e=>e.selectedOption!==void 0,ve={isOpen:!1,modalOptions:void 0,modalState:{selectedOption:{id:"",name:""}},selectedModal:{}},Rr=b.createContext(null),re={DISCLAIMER:{body:jr,buttonProps:()=>({children:"Accept"}),onSubmit:({link:e,id:r})=>{var a;window.open(((a=e.url)==null?void 0:a[0])==="/"?ee(e.url,"spaceId",r):e.url,e.target)}},MULTI_PAYER:{body:Cr,buttonProps:({selectedOption:e})=>({children:"Continue",disabled:e===void 0}),onSubmit:({metadata:e,link:r,id:a,name:t},o,s)=>{if(e!=null&&e.disclaimerId){s({type:"OPEN_DISCLAIMER_MODAL",disclaimerId:e.disclaimerId,link:r,id:a,name:t});return}const d=Ar(r.target);r.url&&window.open($e(r.url)?r.url:Pr(ee(r.url,"spaceId",o.selectedOption.id)),d)}}},M={RESET:()=>ve,OPEN_DISCLAIMER_MODAL:(e,r)=>S(v({},e),{isOpen:!0,selectedModal:re.DISCLAIMER,modalOptions:S(v({},r),{type:r.spaceType})}),OPEN_MULTI_PAYER_MODAL:(e,r)=>S(v({},e),{isOpen:!0,selectedModal:re.MULTI_PAYER,modalOptions:S(v({},r),{type:r.spaceType})}),UPDATE_MODAL_STATE:(e,r)=>S(v({},e),{modalState:r})},kr=(e,r)=>{var a=r,{type:t}=a,o=fe(a,["type"]);if(t==="RESET")return M.RESET();if(Mr(o)){if(t==="OPEN_MULTI_PAYER_MODAL")return M.OPEN_MULTI_PAYER_MODAL(e,o);if(t==="OPEN_DISCLAIMER_MODAL")return M.OPEN_DISCLAIMER_MODAL(e,o)}else if($r(o)&&t==="UPDATE_MODAL_STATE")return M.UPDATE_MODAL_STATE(e,o);return e},Br=({children:e})=>{const[{selectedModal:r,modalOptions:a,modalState:t,isOpen:o},s]=b.useReducer(kr,ve),d=()=>s({type:"RESET"}),c=(r==null?void 0:r.buttonProps)&&(r==null?void 0:r.buttonProps(S(v({},t),{modalOptions:a}))),n=r==null?void 0:r.body;return i.jsxs(Rr.Provider,{value:(u,m)=>s(v({type:`OPEN_${u}`},m)),children:[i.jsxs(Re,{open:o,children:[i.jsx(ke,{id:"disclaimer-header",children:a==null?void 0:a.title}),n&&i.jsx(n,S(v({},a),{setState:u=>s(v({type:"UPDATE_MODAL_STATE"},u)),state:t})),i.jsxs(Be,{children:[i.jsx($,{onClick:d,children:"Cancel"}),i.jsx($,S(v({color:"primary"},c),{onClick:()=>{r!=null&&r.onSubmit&&a&&t&&r.onSubmit(a,t,s),a&&Tr({configurationId:a.id,type:a.type,name:a.name,id:a.id},a.user),d()}}))]})]}),e]})},me={loading:!0},ge=b.createContext(me),ye=()=>b.useContext(ge),ua=({query:e=xr,variables:r={types:["PAYERSPACE"]},clientId:a,children:t,payerIds:o,spaceIds:s,spaces:d})=>{const[{previousSpacesMap:c,previousSpacesByConfigMap:n,previousSpacesByPayerMap:u,loading:m,error:x},g]=b.useReducer(br,me),y=new Map(c),h=new Map(n),f=new Map(u),_=new Set,I=new Set;if(d&&d.length>0){for(const l of d)if(l.id&&!y.has(l.id)&&y.set(l.id,l),l.configurationId&&!h.has(l.configurationId)&&h.set(l.configurationId,l),l.payerIDs)for(const O of l.payerIDs){const F=f.get(O);F?f.set(O,[...F,l]):f.set(O,[l])}}if(s&&s.length>0)for(const l of s)y.has(l)||h.has(l)||_.add(l);if(o&&o.length>0)for(const l of o)f.has(l)||I.add(l);const P=S(v({},r),{ids:[..._.keys()]}),p=S(v({},r),{payerIDs:[...I.keys()]}),[{data:A,isFetching:T,isError:j},{data:D,isFetching:he,isError:V}]=Ue({queries:[{queryKey:["id",P],queryFn:()=>Y({query:e,clientId:a,variables:P}),enabled:_.size>0},{queryKey:["id",p],queryFn:()=>Y({query:e,clientId:a,variables:p}),enabled:I.size>0}]});b.useEffect(()=>{(V||j)&&g({type:"ERROR",error:"Error fetching spaces.",loading:!1})},[V,j]),b.useEffect(()=>{if(g({type:"LOADING",loading:!0}),_.size===0&&I.size===0){g({type:"LOADING",loading:!1});return}if(A){for(const l of A)if(y.has(l.id)||y.set(l.id,l),h.has(l.configurationId)||h.set(l.configurationId,l),l.payerIDs)for(const O of l.payerIDs){const F=f.get(O);F?f.set(O,[...F,l]):f.set(O,[l])}}if(I.size>0&&D){for(const l of D)if(y.has(l.id)||y.set(l.id,l),h.has(l.configurationId)||h.set(l.configurationId,l),l.payerIDs)for(const O of l.payerIDs){const F=f.get(O);F?f.set(O,[...F,l]):f.set(O,[l])}}g({type:"SPACES",spaces:y,spacesByConfig:h,spacesByPayer:f,loading:!1})},[A,D,o,s]);const _e=()=>{if(t)return Er(t)?t({spaces:[y.values()],loading:m,error:x}):t};return i.jsx(ge.Provider,{value:{spaces:y,spacesByConfig:h,spacesByPayer:f,loading:m||he||T,error:x},children:i.jsx(Br,{children:_e()})})},ae=(...e)=>{const{spaces:r,spacesByConfig:a,spacesByPayer:t}=ye(),o=!e||e.length===0,s=(e==null?void 0:e.length)===1&&e[0]===void 0;return o||s?(console.warn("You did not pass in an ID to find a space, returning all spaces."),r&&[...r.values()]):e.reduce((c,n)=>{const u=(r==null?void 0:r.get(n))||(a==null?void 0:a.get(n));if(u)return c.push(u),c;const m=t==null?void 0:t.get(n);if(m)return c.push(...m),c},[])};E(ie,{name:"AvSpacesLink",slot:"root"})({});E(w,{name:"AvSpacesLink",slot:"AvDateInfo"})({});E(or,{name:"AvSpacesLink",slot:"AvFavoriteHeart"})({});E(qe,{name:"AvSpacesLink",slot:"IconLink"})({});export{ca as F,Lr as S,ua as a};
