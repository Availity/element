import{j as o,r as h,d as ae}from"./iframe-BRP1PsTd.js";import{P as oe,T as ie,a as ne}from"./index-DNcytlBP.js";import{B as F,I as q,L as se}from"./index-BsNnDr7w.js";import{e as le,f as ce,g as W}from"./index-BcExjKBt.js";import{i as B,q as j,t as de,C as ue,u as pe,v as fe,w as me}from"./index-C9qIB2Ge.js";import{T as ge}from"./index-CpKfFk7W.js";import{G as P,B as V}from"./index-D7dOkDl_.js";import{F as ve}from"./index-B3tzpYmG.js";import{u as he,C as ye}from"./index.esm-CIwY0UHO.js";import{T as K}from"./index-DlB5fuNM.js";import{s as x}from"./styled-kfJMXx_R.js";import{C as Se}from"./Container-Bk3CGwFA.js";import{u as xe,I as Ie,M as Ae}from"./Img-G6ihFJQ7.js";import{i as be}from"./index-Bwqc7xOL.js";import{D as Ee,a as Pe,d as De,b as G}from"./index-CgC0oRcc.js";import{q as N}from"./index-CD3DaTz2.js";import{i as Te}from"./index-CrcoPoGw.js";import{C as O}from"./index-Ck8YwQpl.js";import{T as Ce}from"./index-CsiLngeb.js";import{L as Fe}from"./Link-DALkoWbB.js";var Le=h.createContext(null),we=()=>{},je=e=>{const r=h.useContext(Le);if(r===null)throw new Error("useFavorites must be used within a FavoritesProvider");const{favorites:t,queryStatus:a,mutationStatus:i,lastClickedFavoriteId:c,deleteFavorite:s,addFavorite:d}=r,l=c===e,p=h.useMemo(()=>!!t?.find(m=>m.id===e),[t,e]),u=()=>p?s(e):d(e),A=a==="loading"||a==="idle"||i==="loading";let y="initLoading";return a==="loading"&&(y="initLoading"),a==="reloading"&&(y="reloading"),i==="loading"&&(y="reloading"),(a==="error"||i==="error")&&(y="error"),a==="success"&&(i==="success"||i==="idle")&&(y="success"),{isFavorited:p,status:y,isLastClickedFavorite:l,toggleFavorite:A?we:u}},_e={spinner:o.jsx(O,{"aria-hidden":!0,size:"small",loadingCaption:!1}),unknownDisabledHeart:o.jsx(j,{"aria-hidden":!0,color:"disabled"}),favoritedDisabledHeart:o.jsx(j,{"aria-hidden":!0,color:"error",opacity:"0.6"}),unfavoritedDisabledHeart:o.jsx(B,{"aria-hidden":!0,color:"disabled",opacity:"0.6"}),favoritedHeart:o.jsx(j,{"aria-hidden":!0,color:"error"}),unfavoritedHeart:o.jsx(B,{"aria-hidden":!0,color:"secondary"})},_="2.5rem",Me=x("div",{name:"AvFavoriteHeart",slot:"Root"})(({customSize:e})=>({height:e,width:e})),H=x("input",{name:"AvFavoriteHeart",slot:"input"})(({customSize:e})=>({height:e,width:e,minHeight:e,minWidth:e})),Oe=(e=_)=>{const r=e.match(/^(\d*\.?\d+)(px|rem)$/);if(!r)throw new Error("Invalid size format. Must be in 'px' or 'rem'.");const[,t,a]=r;return`${Number.parseFloat(t)/2}${a}`},ke=x("div",{name:"AvFavoriteHeart",slot:"icon"})(({customSize:e})=>({fontSize:Oe(e)})),Re=e=>{const r=e.match(/^(\d*\.?\d+)(px|rem)$/);if(!r)return!1;const[,t,a]=r,i=Number.parseFloat(t);return a==="rem"&&i>=1.5||a==="px"&&i>=24},$e=({id:e,name:r,onChange:t,onMouseDown:a,disabled:i=!1,customSize:c=_})=>{const{isFavorited:s,isLastClickedFavorite:d,status:l,toggleFavorite:p}=je(e),u=v=>{t?.(s,v),p()},A=v=>{(v.code==="Enter"||v.key==="Enter")&&(t?.(s,v),p())},y=l==="initLoading"?"unknownDisabledHeart":l==="reloading"?d?"spinner":s?"favoritedDisabledHeart":"unfavoritedDisabledHeart":i?s?"favoritedDisabledHeart":"unfavoritedDisabledHeart":s?"favoritedHeart":"unfavoritedHeart",b=i||!d&&(l==="initLoading"||l==="reloading")?"not-allowed":void 0,m=`${s?"Remove from":"Add to"} My Favorites`,g={onKeyDown:A,type:"checkbox","aria-label":`Favorite ${r}`,id:`av-favorite-heart-${e}`,disabled:i,checked:s,onChange:u,onMouseDown:a,style:{cursor:b}},f=Re(c)?c:_;return o.jsxs(Me,{customSize:f,children:[o.jsx(ke,{customSize:f,children:_e[y]}),o.jsx("span",{style:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0},"aria-live":d&&(l==="reloading"||l==="error")?"polite":"off",children:d&&l==="reloading"?"Loading...":d&&l==="error"?"An error has occurred. Please try again.":""}),i?o.jsx(H,{customSize:f,...g}):o.jsx(Ce,{title:m,placement:"top",children:o.jsx(H,{customSize:f,...g})})]})},Be=x(ie,{name:"AvFeedbackContainer",slot:"SmileButtons"})({}),Ne=x(P,{name:"AvFeedbackContainer",slot:"FormActions"})({}),He=({disabled:e,Icon:r,label:t,value:a,...i})=>o.jsx("div",{children:o.jsx(ne,{component:q,disableRipple:!0,title:t,"aria-label":a,value:a,...i,disabled:e,size:"large",children:o.jsx(r,{})})}),Ue=({analytics:e,appName:r,handleClose:t,loading:a,sent:i,setLoading:c,setSent:s})=>{const{control:d,formState:{errors:l},handleSubmit:p,register:u,setValue:A,watch:y}=he(),b=async({smileField:v,...S})=>{c(!0);try{const E=await ce.getCurrentRegion();await e.info({surveyId:`${r.replaceAll(/\s/g,"_")}_Smile_Survey`,smileLocation:`${r}`,smile:`icon-${v}`,url:window.location.href,region:E.data.regions[0]&&E.data.regions[0].id,userAgent:window.navigator.userAgent,submitTime:new Date,...S}),s(!0),c(!1)}catch{s(!1),c(!1)}};h.useEffect(()=>{i&&setTimeout(()=>{t()},2e3)},[i]);const m=[{Icon:pe,label:"What do you like?",value:"smile"},{Icon:fe,label:"What would you improve?",value:"meh"},{Icon:me,label:"What don't you like?",value:"frown"}],g=y("smileField"),f=()=>m.find(S=>S.value===g)?.label||"What would you improve?";return i?null:o.jsxs(P,{component:"form",container:!0,sx:{justifyContent:"center"},onSubmit:p(b),"aria-label":"Feedback Form","aria-describedby":"feedback-form-header",children:[o.jsx(ye,{control:d,name:"smileField",render:({field:v})=>o.jsx(Be,{children:m.map((S,E)=>o.jsx(He,{autoFocus:E===0,disabled:a,...S},S.value)),...v,"aria-labelledby":"feedback-form-header",onChange:(S,E)=>{A(v.name,E)},size:"medium",exclusive:!0})}),o.jsx(ge,{...u("feedback",{required:"This field is required",maxLength:{value:200,message:"This field must not exceed 200 characters"}}),fullWidth:!0,multiline:!0,minRows:3,maxRows:3,label:f(),InputLabelProps:{component:ve,required:!0},inputProps:{"aria-required":"true"},helperText:l.feedback?.message||"Max 200 characters",error:!!l.feedback,disabled:a||!g}),o.jsxs(Ne,{container:!0,direction:"row",width:"100%",spacing:1,wrap:"wrap",children:[o.jsx(P,{sx:{flex:1,minWidth:"147px"},children:o.jsx(F,{color:"secondary",disabled:a,onClick:t,children:"Close"})}),o.jsx(P,{sx:{flex:1,minWidth:"147px"},children:o.jsx(se,{disabled:!g,loading:a,type:"submit",children:"Send Feedback"})})]})]})},ze=x(P,{name:"AvFeedbackContainer",slot:"FeedbackHeaderContainer"})({}),Ye=({appName:e,handleClose:r,loading:t,sent:a})=>o.jsxs(ze,{alignItems:"flex-start",container:!0,direction:"row",justifyContent:"space-between",flexWrap:"nowrap",id:"feedback-form-header",children:[o.jsx(P,{sx:{whiteSpace:"normal"},children:o.jsx(K,{component:"h2",variant:"h5",children:a?"Thank you for your feedback.":`Tell us what you think about ${e}`})}),o.jsx(P,{children:o.jsx(q,{disabled:t,title:"Close",onClick:r,size:"medium",children:o.jsx(ue,{fontSize:"xsmall"})})})]}),qe=x(Se,{name:"AvFeedbackContainer",slot:"root"})({}),We=x(F,{name:"AvFeedbackButton",slot:"root"})({}),Mr=({analytics:e=le,appName:r,buttonVariant:t="secondary"})=>{const[a,i]=h.useState(null),[c,s]=h.useState(!1),[d,l]=h.useState(!1),p=y=>{i(y.currentTarget),s(!1)},u=()=>{i(null)},A=!!a;return o.jsxs(o.Fragment,{children:[o.jsx(We,{onClick:p,color:t,startIcon:o.jsx(de,{}),children:"Feedback"}),o.jsx(oe,{anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"right"},sx:{marginTop:"4px"},disableRestoreFocus:!0,onClose:u,open:A,transformOrigin:{vertical:"top",horizontal:"right"},children:o.jsxs(qe,{children:[o.jsx(Ye,{appName:r,handleClose:u,loading:d,sent:c}),o.jsx(Ue,{analytics:e,appName:r,handleClose:u,loading:d,sent:c,setLoading:l,setSent:s})]})})]})},Ve=e=>e.match(/(?:query|mutation|subscription)\s+([a-zA-Z_][a-zA-Z0-9_]*)/i)?.[1],Ke={SPACES:(e,{spaces:r,spacesByConfig:t,spacesByPayer:a})=>({previousSpacesMap:r,previousSpacesByConfigMap:t,previousSpacesByPayerMap:a,error:void 0,loading:!1}),ERROR:(e,{error:r})=>({...e,loading:!1,error:r}),LOADING:(e,{loading:r})=>({...e,loading:r!==void 0?r:!e.loading})},Ge=(e,r)=>{const{type:t}=r;return Ke[t](e,r)},Qe=async({query:e,clientId:r,variables:t,operationName:a})=>{const i={};r&&(i["X-Client-ID"]=r);const{data:{data:{configurationPagination:c}}}=await W.create({query:e,variables:{...t},operationName:a||Ve(e)||"PuiSpacesCmpAnonymousOperation"},{headers:{...i}}),{pageInfo:{currentPage:s,hasNextPage:d},items:l}=c;return{items:l,currentPage:s,hasNextPage:d}},M=async({query:e,clientId:r,variables:t,_spaces:a=[],operationName:i})=>{const{items:c,currentPage:s,hasNextPage:d}=await Qe({query:e,clientId:r,variables:t,operationName:i});if(a.push(...c),d){const l={...t,page:s+1};return M({query:e,clientId:r,variables:l,_spaces:a,operationName:i})}return a},Ze=`query PuiSpacesCmpConfigurationFindMany($ids: [String!], $payerIDs: [ID!], $types: [TypeEnum!], $page: Int) {
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
}`,U=(e,r,t)=>{const[a,i]=e.split("?"),c=N.parse(i),s=t&&{[r]:t},d=N.stringify({...c,...s},{sort:(l,p)=>l.localeCompare(p)});return`${a}?${d}`},Je=(e="",r,t)=>e,Xe=e=>{if(e&&!e.startsWith("_")){if(e==="BODY")return"_self";if(e==="TAB")return"_blank"}return e||"_self"},er=e=>typeof e=="function",T={ALLOWED_TYPES:["APPLICATION","RESOURCE","NAVIGATION"],DISALLOWED_TYPES:["reporting","how_to_guide_dental_providers","my_account_profile","my_administrators"],KEYS:{VALUES:"myTopApps",LAST_UPDATED:"top-apps-updated"},UPDATE_EVENT:"av:topApps:updated"},rr=e=>{try{const r=window.localStorage.getItem(e);return r===null?null:JSON.parse(r)}catch{return null}},tr=(e,r)=>T.ALLOWED_TYPES.some(t=>t===r)&&!T.DISALLOWED_TYPES.some(t=>t===e),ar=e=>rr(`${T.KEYS.VALUES}-${e}`),or=async(e,r)=>{if(!(!e.configurationId||!e.type)&&tr(e.configurationId,e.type)){const t=ae(),a=await ar(r)||{};window.localStorage.setItem(`${T.KEYS.LAST_UPDATED}-${r}`,t.format());const i=a[e.configurationId]&&typeof a[e.configurationId].count=="number"?a[e.configurationId].count:0;a[e.configurationId]={...a?.[e.configurationId],count:i+1,lastUse:t.format()},window.localStorage.setItem(`${T.KEYS.VALUES}-${r}`,JSON.stringify(a)),Te.send(T.UPDATE_EVENT)}},ir=`query disclaimerFindOne($id: ID!) {
  configurationFindOne(id: $id) {
    ... on Text {
      description
    }
  }
}`,nr=({disclaimerId:e})=>{const[r,t]=h.useState("");return h.useEffect(()=>{(async()=>{if(e){const i=await W.create({query:ir,variables:{id:e}});t(i.data.data.configurationFindOne.description)}})()},[e]),o.jsx(G,{children:r?o.jsx(Ae,{children:r}):o.jsx(O,{})})},sr=({spaceId:e,payerId:r,imageType:t="url",fallback:a,Loader:i=O,...c})=>{let s;e?s=Y(e):r&&(s=Y(r));const{loading:d}=X(),l=e||r||s?.[0].id||s?.[0].configurationId;let u={"images.logo":s?.[0]?.images?.logo,"images.tile":s?.[0]?.images?.tile,"images.billboard":s?.[0]?.images?.billboard,"images.promotional":s?.[0]?.images?.promotional,"images.promotionalHover":s?.[0]?.images?.promotionalHover,url:s?.[0]?.url}[t];return!u&&d?o.jsx(i,{id:`app-${l}-loading`}):(!u&&!d&&a&&(u=a),!u||!l?null:o.jsx(Ie,{id:c.id||`app-img-${l}`,src:u,alt:`Space ${t}`,loader:o.jsx(i,{id:`app-img-${l}-loading`}),...c}))},lr=({parentPayerSpaces:e,name:r,state:{selectedOption:t},setState:a})=>o.jsxs(G,{children:[o.jsx(K,{children:`Open ${r} as: ${t?t.name||t.id:""}`}),o.jsx(P,{direction:"row",children:e&&e.map(i=>o.jsx(V,{onClick:()=>a({selectedOption:i}),children:o.jsx(sr,{spaceId:i.configurationId,imageType:"images.tile"})}))})]}),cr=e=>e.spaceType!==void 0,dr=e=>e.selectedOption!==void 0,Q={isOpen:!1,modalOptions:void 0,modalState:{selectedOption:{id:"",name:""}},selectedModal:{}},ur=h.createContext(null),z={DISCLAIMER:{body:nr,buttonProps:()=>({children:"Accept"}),onSubmit:({link:e,id:r})=>{window.open(e.url?.[0]==="/"?U(e.url,"spaceId",r):e.url,e.target)}},MULTI_PAYER:{body:lr,buttonProps:({selectedOption:e})=>({children:"Continue",disabled:e===void 0}),onSubmit:({metadata:e,link:r,id:t,name:a},i,c)=>{if(e?.disclaimerId){c({type:"OPEN_DISCLAIMER_MODAL",disclaimerId:e.disclaimerId,link:r,id:t,name:a});return}const s=Xe(r.target);r.url&&window.open(be(r.url)?r.url:Je(U(r.url,"spaceId",i.selectedOption.id)),s)}}},C={RESET:()=>Q,OPEN_DISCLAIMER_MODAL:(e,r)=>({...e,isOpen:!0,selectedModal:z.DISCLAIMER,modalOptions:{...r,type:r.spaceType}}),OPEN_MULTI_PAYER_MODAL:(e,r)=>({...e,isOpen:!0,selectedModal:z.MULTI_PAYER,modalOptions:{...r,type:r.spaceType}}),UPDATE_MODAL_STATE:(e,r)=>({...e,modalState:r})},pr=(e,{type:r,...t})=>{if(r==="RESET")return C.RESET();if(cr(t)){if(r==="OPEN_MULTI_PAYER_MODAL")return C.OPEN_MULTI_PAYER_MODAL(e,t);if(r==="OPEN_DISCLAIMER_MODAL")return C.OPEN_DISCLAIMER_MODAL(e,t)}else if(dr(t)&&r==="UPDATE_MODAL_STATE")return C.UPDATE_MODAL_STATE(e,t);return e},fr=({children:e})=>{const[{selectedModal:r,modalOptions:t,modalState:a,isOpen:i},c]=h.useReducer(pr,Q),s=()=>c({type:"RESET"}),d=r?.buttonProps&&r?.buttonProps({...a,modalOptions:t}),l=r?.body;return o.jsxs(ur.Provider,{value:(p,u)=>c({type:`OPEN_${p}`,...u}),children:[o.jsxs(Ee,{open:i,children:[o.jsx(Pe,{id:"disclaimer-header",children:t?.title}),l&&o.jsx(l,{...t,setState:p=>c({type:"UPDATE_MODAL_STATE",...p}),state:a}),o.jsxs(De,{children:[o.jsx(F,{onClick:s,children:"Cancel"}),o.jsx(F,{color:"primary",...d,onClick:()=>{r?.onSubmit&&t&&a&&r.onSubmit(t,a,c),t&&or({configurationId:t.id,type:t.type,name:t.name,id:t.id},t.user),s()}})]})]}),e]})},Z={loading:!0},J=h.createContext(Z),X=()=>h.useContext(J),Or=({query:e=Ze,variables:r={types:["PAYERSPACE"]},operationName:t,clientId:a,children:i,payerIds:c,spaceIds:s,spaces:d})=>{const[{previousSpacesMap:l,previousSpacesByConfigMap:p,previousSpacesByPayerMap:u,loading:A,error:y},b]=h.useReducer(Ge,Z),m=new Map(l),g=new Map(p),f=new Map(u),v=new Set,S=new Set;if(d&&d.length>0){for(const n of d)if(n.id&&!m.has(n.id)&&m.set(n.id,n),n.configurationId&&!g.has(n.configurationId)&&g.set(n.configurationId,n),n.payerIDs)for(const I of n.payerIDs){const D=f.get(I);D?f.set(I,[...D,n]):f.set(I,[n])}}if(s&&s.length>0)for(const n of s)n&&typeof n=="string"&&n.trim()&&!(m.has(n)||g.has(n))&&v.add(n);if(c&&c.length>0)for(const n of c)n&&typeof n=="string"&&n.trim()&&!f.has(n)&&S.add(n);const E={...r,ids:[...v.keys()]},k={...r,payerIDs:[...S.keys()]},[{data:L,isFetching:ee,isError:R},{data:w,isFetching:re,isError:$}]=xe({queries:[{queryKey:["id",E],queryFn:()=>M({query:e,clientId:a,variables:E,operationName:t}),enabled:v.size>0},{queryKey:["id",k],queryFn:()=>M({query:e,clientId:a,variables:k,operationName:t}),enabled:S.size>0}]});h.useEffect(()=>{($||R)&&b({type:"ERROR",error:"Error fetching spaces.",loading:!1})},[$,R]),h.useEffect(()=>{if(b({type:"LOADING",loading:!0}),v.size===0&&S.size===0){b({type:"LOADING",loading:!1});return}if(L){for(const n of L)if(m.has(n.id)||m.set(n.id,n),g.has(n.configurationId)||g.set(n.configurationId,n),n.payerIDs)for(const I of n.payerIDs){const D=f.get(I);D?f.set(I,[...D,n]):f.set(I,[n])}}if(S.size>0&&w){for(const n of w)if(m.has(n.id)||m.set(n.id,n),g.has(n.configurationId)||g.set(n.configurationId,n),n.payerIDs)for(const I of n.payerIDs){const D=f.get(I);D?f.set(I,[...D,n]):f.set(I,[n])}}b({type:"SPACES",spaces:m,spacesByConfig:g,spacesByPayer:f,loading:!1})},[L,w,c,s]);const te=()=>{if(i)return er(i)?i({spaces:[m.values()],loading:A,error:y}):i};return o.jsx(J.Provider,{value:{spaces:m,spacesByConfig:g,spacesByPayer:f,loading:A||re||ee,error:y},children:o.jsx(fr,{children:te()})})},Y=(...e)=>{const{spaces:r,spacesByConfig:t,spacesByPayer:a}=X(),i=!e||e.length===0,c=e?.length===1&&e[0]===void 0;return i||c?(console.warn("You did not pass in an ID to find a space, returning all spaces."),r&&[...r.values()]):e.reduce((d,l)=>{const p=r?.get(l)||t?.get(l);if(p)return d.push(p),d;const u=a?.get(l);if(u)return d.push(...u),d},[])};x(V,{name:"AvSpacesLink",slot:"root"})({});x(P,{name:"AvSpacesLink",slot:"AvDateInfo"})({});x($e,{name:"AvSpacesLink",slot:"AvFavoriteHeart"})({});x(Fe,{name:"AvSpacesLink",slot:"IconLink"})({});export{Mr as F,sr as S,Or as a};
