import{r as _}from"./index-BgYLq7fD.js";import{P as fe,T as me,a as ve}from"./index-CXGBBhzw.js";import{B as R,I as K,L as ge}from"./index-k9OtkSpc.js";import{g as ye,e as he,h as Q}from"./index-Dl5t6TV_.js";import{T as _e}from"./index-Dctfm71e.js";import{G as O,B as J}from"./index-DmY_4rvh.js";import{s as Ie,C as be,t as Se,u as Pe,v as Ae}from"./index-Daj15cVv.js";import{F as xe}from"./index-BJt3X_mY.js";import{u as Ee,C as Oe}from"./index.esm-Cdw3oWqD.js";import{j as i}from"./jsx-runtime-BTJTZTIL.js";import{T as X}from"./index-ClMemn8c.js";import{s as S}from"./styled-FZfCzBz5.js";import{C as Te}from"./Container-DvcsWH8C.js";import{i as De}from"./index-DuRQpI0H.js";import{D as Le,a as we,d as Ce,b as Z}from"./index-6a-utNTU.js";import{q as V}from"./index-DLKRbc4C.js";import{i as je}from"./index-DJKl12U0.js";import{d as Fe}from"./dayjs.min-CfWDS3UC.js";import{u as Me,I as Re,R as $e}from"./Img-B45hvfNA.js";import{C as ee}from"./index-DOgnMLJ1.js";import"./index-DexkmQxl.js";import"./index-CxZBbEMt.js";import{L as ke}from"./Link-rLN5tdDv.js";_.createContext(null);var Be="2.5rem";S("div",{name:"AvFavoriteHeart",slot:"Root"})(({customSize:e})=>({height:e,width:e}));S("input",{name:"AvFavoriteHeart",slot:"input"})(({customSize:e})=>({height:e,width:e,minHeight:e,minWidth:e}));var Ne=(e=Be)=>{const r=e.match(/^(\d*\.?\d+)(px|rem)$/);if(!r)throw new Error("Invalid size format. Must be in 'px' or 'rem'.");const[,a,t]=r;return`${parseFloat(a)/2}${t}`};S("div",{name:"AvFavoriteHeart",slot:"icon"})(({customSize:e})=>({fontSize:Ne(e)}));var Ue=Object.defineProperty,Ye=Object.defineProperties,Ve=Object.getOwnPropertyDescriptors,$=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,W=(e,r,a)=>r in e?Ue(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,F=(e,r)=>{for(var a in r||(r={}))re.call(r,a)&&W(e,a,r[a]);if($)for(var a of $(r))ae.call(r,a)&&W(e,a,r[a]);return e},N=(e,r)=>Ye(e,Ve(r)),te=(e,r)=>{var a={};for(var t in e)re.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&$)for(var t of $(e))r.indexOf(t)<0&&ae.call(e,t)&&(a[t]=e[t]);return a},We=(e,r,a)=>new Promise((t,o)=>{var l=s=>{try{d(a.next(s))}catch(p){o(p)}},c=s=>{try{d(a.throw(s))}catch(p){o(p)}},d=s=>s.done?t(s.value):Promise.resolve(s.value).then(l,c);d((a=a.apply(e,r)).next())}),qe=S(me,{name:"AvFeedbackContainer",slot:"SmileButtons"})({}),ze=S(O,{name:"AvFeedbackContainer",slot:"FormActions"})({}),He=e=>{var r=e,{disabled:a,Icon:t,label:o,value:l}=r,c=te(r,["disabled","Icon","label","value"]);return i.jsx("div",{children:i.jsx(ve,N(F({component:K,disableRipple:!0,title:o,"aria-label":l,value:l},c),{disabled:a,size:"large",children:i.jsx(t,{})}))})},Ge=({analytics:e,appName:r,handleClose:a,loading:t,sent:o,setLoading:l,setSent:c})=>{var d;const{control:s,formState:{errors:p},handleSubmit:v,register:T,setValue:P,watch:g}=Ee(),y=I=>We(void 0,null,function*(){var u=I,{smileField:b}=u,L=te(u,["smileField"]);l(!0);try{const C=yield he.getCurrentRegion();yield e.info(F({surveyId:`${r.replace(/\s/g,"_")}_Smile_Survey`,smileLocation:`${r}`,smile:`icon-${b}`,url:window.location.href,region:C.data.regions[0]&&C.data.regions[0].id,userAgent:window.navigator.userAgent,submitTime:new Date},L)),c(!0),l(!1)}catch{c(!1),l(!1)}});_.useEffect(()=>{o&&setTimeout(()=>{a()},2e3)},[o]);const m=[{Icon:Se,label:"What do you like?",value:"smile"},{Icon:Pe,label:"What would you improve?",value:"meh"},{Icon:Ae,label:"What don't you like?",value:"frown"}],A=g("smileField"),E=()=>{const I=m.find(u=>u.value===A);return(I==null?void 0:I.label)||"What would you improve?"};return o?null:i.jsxs(O,{component:"form",container:!0,sx:{justifyContent:"center"},onSubmit:v(y),"aria-label":"Feedback Form","aria-describedby":"feedback-form-header",children:[i.jsx(Oe,{control:s,name:"smileField",render:({field:I})=>i.jsx(qe,N(F({children:m.map((u,b)=>i.jsx(He,F({autoFocus:b===0,disabled:t},u),u.value))},I),{"aria-labelledby":"feedback-form-header",onChange:(u,b)=>{P(I.name,b)},size:"medium",exclusive:!0}))}),i.jsx(_e,N(F({},T("feedback",{required:"This field is required",maxLength:{value:200,message:"This field must not exceed 200 characters"}})),{fullWidth:!0,multiline:!0,minRows:3,maxRows:3,label:E(),InputLabelProps:{component:xe,required:!0},inputProps:{"aria-required":"true"},helperText:((d=p.feedback)==null?void 0:d.message)||"Max 200 characters",error:!!p.feedback,disabled:t||!A})),i.jsxs(ze,{container:!0,direction:"row",width:"100%",spacing:1,wrap:"wrap",children:[i.jsx(O,{sx:{flex:1,minWidth:"147px"},children:i.jsx(R,{color:"secondary",disabled:t,onClick:a,children:"Close"})}),i.jsx(O,{sx:{flex:1,minWidth:"147px"},children:i.jsx(ge,{disabled:!A,loading:t,type:"submit",variant:"contained",children:"Send Feedback"})})]})]})},Ke=S(O,{name:"AvFeedbackContainer",slot:"FeedbackHeaderContainer"})({}),Qe=({appName:e,handleClose:r,loading:a,sent:t})=>i.jsxs(Ke,{alignItems:"flex-start",container:!0,direction:"row",justifyContent:"space-between",flexWrap:"nowrap",id:"feedback-form-header",children:[i.jsx(O,{sx:{whiteSpace:"normal"},children:i.jsx(X,{component:"h2",variant:"h5",children:t?"Thank you for your feedback.":`Tell us what you think about ${e}`})}),i.jsx(O,{children:i.jsx(K,{disabled:a,title:"Close",onClick:r,size:"medium",children:i.jsx(be,{fontSize:"xsmall"})})})]}),Je=S(Te,{name:"AvFeedbackContainer",slot:"root"})({}),Xe=S(R,{name:"AvFeedbackButton",slot:"root"})({}),qr=({analytics:e=ye,appName:r,buttonVariant:a="secondary"})=>{const[t,o]=_.useState(null),[l,c]=_.useState(!1),[d,s]=_.useState(!1),p=P=>{o(P.currentTarget),c(!1)},v=()=>{o(null)},T=!!t;return i.jsxs(i.Fragment,{children:[i.jsx(Xe,{onClick:p,color:a,startIcon:i.jsx(Ie,{}),children:"Feedback"}),i.jsx(fe,{anchorEl:t,anchorOrigin:{vertical:"bottom",horizontal:"right"},sx:{marginTop:"4px"},disableRestoreFocus:!0,onClose:v,open:T,transformOrigin:{vertical:"top",horizontal:"right"},children:i.jsxs(Je,{children:[i.jsx(Qe,{appName:r,handleClose:v,loading:d,sent:l}),i.jsx(Ge,{analytics:e,appName:r,handleClose:v,loading:d,sent:l,setLoading:s,setSent:c})]})})]})},Ze=Object.defineProperty,er=Object.defineProperties,rr=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,q=(e,r,a)=>r in e?Ze(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,f=(e,r)=>{for(var a in r||(r={}))oe.call(r,a)&&q(e,a,r[a]);if(k)for(var a of k(r))ie.call(r,a)&&q(e,a,r[a]);return e},h=(e,r)=>er(e,rr(r)),ne=(e,r)=>{var a={};for(var t in e)oe.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&k)for(var t of k(e))r.indexOf(t)<0&&ie.call(e,t)&&(a[t]=e[t]);return a},B=(e,r,a)=>new Promise((t,o)=>{var l=s=>{try{d(a.next(s))}catch(p){o(p)}},c=s=>{try{d(a.throw(s))}catch(p){o(p)}},d=s=>s.done?t(s.value):Promise.resolve(s.value).then(l,c);d((a=a.apply(e,r)).next())}),ar={SPACES:(e,{spaces:r,spacesByConfig:a,spacesByPayer:t})=>({previousSpacesMap:r,previousSpacesByConfigMap:a,previousSpacesByPayerMap:t,error:void 0,loading:!1}),ERROR:(e,{error:r})=>h(f({},e),{loading:!1,error:r}),LOADING:(e,{loading:r})=>h(f({},e),{loading:r!==void 0?r:!e.loading})},tr=(e,r)=>{const{type:a}=r;return ar[a](e,r)},or=e=>B(void 0,[e],function*({query:r,clientId:a,variables:t}){const o={};a&&(o["X-Client-ID"]=a);const{data:{data:{configurationPagination:l}}}=yield Q.create({query:r,variables:f({},t)},{headers:f({},o)}),{pageInfo:{currentPage:c,hasNextPage:d},items:s}=l;return{items:s,currentPage:c,hasNextPage:d}}),U=e=>B(void 0,[e],function*({query:r,clientId:a,variables:t,_spaces:o=[]}){const{items:l,currentPage:c,hasNextPage:d}=yield or({query:r,clientId:a,variables:t});if(o.push(...l),d){const s=h(f({},t),{page:c+1});return U({query:r,clientId:a,variables:s,_spaces:o})}return o}),ir=`query configurationFindMany($ids: [String!], $payerIDs: [ID!], $types: [TypeEnum!], $page: Int) {
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
}`,z=(e,r,a)=>{const[t,o]=e.split("?"),l=V.parse(o),c=a&&{[r]:a},d=V.stringify(f(f({},l),c),{sort:(s,p)=>s.localeCompare(p)});return`${t}?${d}`},nr=(e="",r,a)=>e,sr=e=>{if(e&&!e.startsWith("_")){if(e==="BODY")return"_self";if(e==="TAB")return"_blank"}return e||"_self"},lr=e=>typeof e=="function",j={ALLOWED_TYPES:["APPLICATION","RESOURCE","NAVIGATION"],DISALLOWED_TYPES:["reporting","how_to_guide_dental_providers","my_account_profile","my_administrators"],KEYS:{VALUES:"myTopApps",LAST_UPDATED:"top-apps-updated"},UPDATE_EVENT:"av:topApps:updated"},dr=e=>{try{const r=window.localStorage.getItem(e);return r===null?null:JSON.parse(r)}catch{return null}},cr=(e,r)=>j.ALLOWED_TYPES.some(a=>a===r)&&!j.DISALLOWED_TYPES.some(a=>a===e),ur=e=>dr(`${j.KEYS.VALUES}-${e}`),pr=(e,r)=>B(void 0,null,function*(){if(!(!e.configurationId||!e.type)&&cr(e.configurationId,e.type)){const a=Fe(),t=(yield ur(r))||{};window.localStorage.setItem(`${j.KEYS.LAST_UPDATED}-${r}`,a.format());const o=t[e.configurationId]&&typeof t[e.configurationId].count=="number"?t[e.configurationId].count:0;t[e.configurationId]=h(f({},t==null?void 0:t[e.configurationId]),{count:o+1,lastUse:a.format()}),window.localStorage.setItem(`${j.KEYS.VALUES}-${r}`,JSON.stringify(t)),je.send(j.UPDATE_EVENT)}}),fr=`query disclaimerFindOne($id: ID!) {
  configurationFindOne(id: $id) {
    ... on Text {
      description
    }
  }
}`,mr=({disclaimerId:e})=>{const[r,a]=_.useState("");return _.useEffect(()=>{B(void 0,null,function*(){if(e){const o=yield Q.create({query:fr,variables:{id:e}});a(o.data.data.configurationFindOne.description)}})},[e]),i.jsx(Z,{children:r?i.jsx($e,{children:r}):i.jsx(ee,{})})},vr=e=>{var r=e,{spaceId:a,payerId:t,imageType:o="url",fallback:l,Loader:c=ee}=r,d=ne(r,["spaceId","payerId","imageType","fallback","Loader"]),s,p,v,T,P,g,y,m,A,E,I;let u;a?u=G(a):t&&(u=G(t));const{loading:b}=ce(),L=a||t||(u==null?void 0:u[0].id)||(u==null?void 0:u[0].configurationId);let D={"images.logo":(p=(s=u==null?void 0:u[0])==null?void 0:s.images)==null?void 0:p.logo,"images.tile":(T=(v=u==null?void 0:u[0])==null?void 0:v.images)==null?void 0:T.tile,"images.billboard":(g=(P=u==null?void 0:u[0])==null?void 0:P.images)==null?void 0:g.billboard,"images.promotional":(m=(y=u==null?void 0:u[0])==null?void 0:y.images)==null?void 0:m.promotional,"images.promotionalHover":(E=(A=u==null?void 0:u[0])==null?void 0:A.images)==null?void 0:E.promotionalHover,url:(I=u==null?void 0:u[0])==null?void 0:I.url}[o];return!D&&b?i.jsx(c,{id:`app-${L}-loading`}):(!D&&!b&&l&&(D=l),!D||!L?null:i.jsx(Re,f({id:d.id||`app-img-${L}`,src:D,alt:`Space ${o}`,loader:i.jsx(c,{id:`app-img-${L}-loading`})},d)))},gr=({parentPayerSpaces:e,name:r,state:{selectedOption:a},setState:t})=>i.jsxs(Z,{children:[i.jsx(X,{children:`Open ${r} as: ${a?a.name||a.id:""}`}),i.jsx(O,{direction:"row",children:e&&e.map(o=>i.jsx(J,{onClick:()=>t({selectedOption:o}),children:i.jsx(vr,{spaceId:o.configurationId,imageType:"images.tile"})}))})]}),yr=e=>e.spaceType!==void 0,hr=e=>e.selectedOption!==void 0,se={isOpen:!1,modalOptions:void 0,modalState:{selectedOption:{id:"",name:""}},selectedModal:{}},_r=_.createContext(null),H={DISCLAIMER:{body:mr,buttonProps:()=>({children:"Accept"}),onSubmit:({link:e,id:r})=>{var a;window.open(((a=e.url)==null?void 0:a[0])==="/"?z(e.url,"spaceId",r):e.url,e.target)}},MULTI_PAYER:{body:gr,buttonProps:({selectedOption:e})=>({children:"Continue",disabled:e===void 0}),onSubmit:({metadata:e,link:r,id:a,name:t},o,l)=>{if(e!=null&&e.disclaimerId){l({type:"OPEN_DISCLAIMER_MODAL",disclaimerId:e.disclaimerId,link:r,id:a,name:t});return}const c=sr(r.target);r.url&&window.open(De(r.url)?r.url:nr(z(r.url,"spaceId",o.selectedOption.id)),c)}}},M={RESET:()=>se,OPEN_DISCLAIMER_MODAL:(e,r)=>h(f({},e),{isOpen:!0,selectedModal:H.DISCLAIMER,modalOptions:h(f({},r),{type:r.spaceType})}),OPEN_MULTI_PAYER_MODAL:(e,r)=>h(f({},e),{isOpen:!0,selectedModal:H.MULTI_PAYER,modalOptions:h(f({},r),{type:r.spaceType})}),UPDATE_MODAL_STATE:(e,r)=>h(f({},e),{modalState:r})},Ir=(e,r)=>{var a=r,{type:t}=a,o=ne(a,["type"]);if(t==="RESET")return M.RESET();if(yr(o)){if(t==="OPEN_MULTI_PAYER_MODAL")return M.OPEN_MULTI_PAYER_MODAL(e,o);if(t==="OPEN_DISCLAIMER_MODAL")return M.OPEN_DISCLAIMER_MODAL(e,o)}else if(hr(o)&&t==="UPDATE_MODAL_STATE")return M.UPDATE_MODAL_STATE(e,o);return e},br=({children:e})=>{const[{selectedModal:r,modalOptions:a,modalState:t,isOpen:o},l]=_.useReducer(Ir,se),c=()=>l({type:"RESET"}),d=(r==null?void 0:r.buttonProps)&&(r==null?void 0:r.buttonProps(h(f({},t),{modalOptions:a}))),s=r==null?void 0:r.body;return i.jsxs(_r.Provider,{value:(p,v)=>l(f({type:`OPEN_${p}`},v)),children:[i.jsxs(Le,{open:o,children:[i.jsx(we,{id:"disclaimer-header",children:a==null?void 0:a.title}),s&&i.jsx(s,h(f({},a),{setState:p=>l(f({type:"UPDATE_MODAL_STATE"},p)),state:t})),i.jsxs(Ce,{children:[i.jsx(R,{onClick:c,children:"Cancel"}),i.jsx(R,h(f({color:"primary"},d),{onClick:()=>{r!=null&&r.onSubmit&&a&&t&&r.onSubmit(a,t,l),a&&pr({configurationId:a.id,type:a.type,name:a.name,id:a.id},a.user),c()}}))]})]}),e]})},le={loading:!0},de=_.createContext(le),ce=()=>_.useContext(de),zr=({query:e=ir,variables:r={types:["PAYERSPACE"]},clientId:a,children:t,payerIds:o,spaceIds:l,spaces:c})=>{const[{previousSpacesMap:d,previousSpacesByConfigMap:s,previousSpacesByPayerMap:p,loading:v,error:T},P]=_.useReducer(tr,le),g=new Map(d),y=new Map(s),m=new Map(p),A=new Set,E=new Set;if(c&&c.length>0){for(const n of c)if(n.id&&!g.has(n.id)&&g.set(n.id,n),n.configurationId&&!y.has(n.configurationId)&&y.set(n.configurationId,n),n.payerIDs)for(const x of n.payerIDs){const w=m.get(x);w?m.set(x,[...w,n]):m.set(x,[n])}}if(l&&l.length>0)for(const n of l)g.has(n)||y.has(n)||A.add(n);if(o&&o.length>0)for(const n of o)m.has(n)||E.add(n);const I=h(f({},r),{ids:[...A.keys()]}),u=h(f({},r),{payerIDs:[...E.keys()]}),[{data:b,isFetching:L,isError:C},{data:D,isFetching:ue,isError:Y}]=Me({queries:[{queryKey:["id",I],queryFn:()=>U({query:e,clientId:a,variables:I}),enabled:A.size>0},{queryKey:["id",u],queryFn:()=>U({query:e,clientId:a,variables:u}),enabled:E.size>0}]});_.useEffect(()=>{(Y||C)&&P({type:"ERROR",error:"Error fetching spaces.",loading:!1})},[Y,C]),_.useEffect(()=>{if(P({type:"LOADING",loading:!0}),A.size===0&&E.size===0){P({type:"LOADING",loading:!1});return}if(b){for(const n of b)if(g.has(n.id)||g.set(n.id,n),y.has(n.configurationId)||y.set(n.configurationId,n),n.payerIDs)for(const x of n.payerIDs){const w=m.get(x);w?m.set(x,[...w,n]):m.set(x,[n])}}if(E.size>0&&D){for(const n of D)if(g.has(n.id)||g.set(n.id,n),y.has(n.configurationId)||y.set(n.configurationId,n),n.payerIDs)for(const x of n.payerIDs){const w=m.get(x);w?m.set(x,[...w,n]):m.set(x,[n])}}P({type:"SPACES",spaces:g,spacesByConfig:y,spacesByPayer:m,loading:!1})},[b,D,o,l]);const pe=()=>{if(t)return lr(t)?t({spaces:[g.values()],loading:v,error:T}):t};return i.jsx(de.Provider,{value:{spaces:g,spacesByConfig:y,spacesByPayer:m,loading:v||ue||L,error:T},children:i.jsx(br,{children:pe()})})},G=(...e)=>{const{spaces:r,spacesByConfig:a,spacesByPayer:t}=ce(),o=!e||e.length===0,l=(e==null?void 0:e.length)===1&&e[0]===void 0;return o||l?(console.warn("You did not pass in an ID to find a space, returning all spaces."),r&&[...r.values()]):e.reduce((d,s)=>{const p=(r==null?void 0:r.get(s))||(a==null?void 0:a.get(s));if(p)return d.push(p),d;const v=t==null?void 0:t.get(s);if(v)return d.push(...v),d},[])};S(J,{name:"AvSpacesLink",slot:"root"})({});S(O,{name:"AvSpacesLink",slot:"AvDateInfo"})({});S(O,{name:"AvSpacesLink",slot:"AvFavoriteHeart"})({});S(ke,{name:"AvSpacesLink",slot:"IconLink"})({});export{qr as F,vr as S,zr as a};
