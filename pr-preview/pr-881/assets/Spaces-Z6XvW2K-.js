import{A as oe,r as _,j as l}from"./iframe-D81qY2CF.js";import{g as Z}from"./index-BfEP--CJ.js";import{i as le}from"./index-CBn4K3li.js";import{b as X,D as de,a as pe,d as ce}from"./index-BioZVIix.js";import{B as G}from"./index-D8s0t892.js";import{q as k}from"./index-E_v7_lSo.js";import{i as ue}from"./index-BiBDMnSv.js";import{R as me,I as ye,u as fe}from"./Img-BSxZ-xsY.js";import{C as ee}from"./index-DlzOHjtW.js";import{G as ge,B as _e}from"./index-CcvrWeMs.js";import{T as he}from"./index-D2vS9zPa.js";const D=e=>e.match(/(?:query|mutation|subscription)\s+([a-zA-Z_][a-zA-Z0-9_]*)/i)?.[1],Ie={SPACES:(e,{spaces:a,spacesByConfig:t,spacesByPayer:r})=>({previousSpacesMap:a,previousSpacesByConfigMap:t,previousSpacesByPayerMap:r,error:void 0,loading:!1}),ERROR:(e,{error:a})=>({...e,loading:!1,error:a}),LOADING:(e,{loading:a})=>({...e,loading:a!==void 0?a:!e.loading})},Se=(e,a)=>{const{type:t}=a;return Ie[t](e,a)},V=async({query:e,clientId:a,variables:t,operationName:r})=>{const i={};a&&(i["X-Client-ID"]=a);const{data:{data:{configurationPagination:o}}}=await Z.create({query:e,variables:{...t},operationName:r||D(e)||"PuiSpacesCmpAnonymousOperation"},{headers:{...i}}),{pageInfo:{currentPage:s,hasNextPage:d},items:p}=o;return{items:p,currentPage:s,hasNextPage:d}},A=async({query:e,clientId:a,variables:t,_spaces:r=[],operationName:i})=>{const{items:o,currentPage:s,hasNextPage:d}=await V({query:e,clientId:a,variables:t,operationName:i});if(r.push(...o),d){const p={...t,page:s+1};return A({query:e,clientId:a,variables:p,_spaces:r,operationName:i})}return r};try{D.displayName="parseOperationName",D.__docgenInfo={description:"",displayName:"parseOperationName",props:{}}}catch{}try{V.displayName="fetchSpaces",V.__docgenInfo={description:"",displayName:"fetchSpaces",props:{query:{defaultValue:null,description:"The query sent to the avWebQL endpoint.",name:"query",required:!0,type:{name:"string"}},clientId:{defaultValue:null,description:"The Client ID obtained from APIConnect.",name:"clientId",required:!1,type:{name:"string"}},variables:{defaultValue:null,description:"The variables sent to the avWebQL endpoint.",name:"variables",required:!1,type:{name:"object"}},page:{defaultValue:null,description:"The page sent to the avWebQL endpoint.",name:"page",required:!1,type:{name:"string"}},operationName:{defaultValue:null,description:`Name for the GraphQL operation, used for debugging and monitoring.

If an operation name exists in the query string, leave this undefined or
ensure it matches what is in the query string.

If no operation name exists in the query string, it can be defined here.

Format: \`{ValueStream || PayerName}{AbbreviatedAppName}{Description}{Type}\` (PascalCase)
@example "OnbPsFavoritesQuery"`,name:"operationName",required:!1,type:{name:"string"}}}}}catch{}try{A.displayName="fetchAllSpaces",A.__docgenInfo={description:"",displayName:"fetchAllSpaces",props:{query:{defaultValue:null,description:"The query sent to the avWebQL endpoint.",name:"query",required:!0,type:{name:"string"}},clientId:{defaultValue:null,description:"The Client ID obtained from APIConnect.",name:"clientId",required:!1,type:{name:"string"}},variables:{defaultValue:null,description:"The variables sent to the avWebQL endpoint.",name:"variables",required:!1,type:{name:"Record<string, any>"}},_spaces:{defaultValue:{value:"[]"},description:"Array of spaces to be passed into the Spaces provider.",name:"_spaces",required:!1,type:{name:"Space[]"}},operationName:{defaultValue:null,description:`Name for the GraphQL operation, used for debugging and monitoring.

If an operation name exists in the query string, leave this undefined or
ensure it matches what is in the query string.

If no operation name exists in the query string, it can be defined here.

Format: \`{ValueStream || PayerName}{AbbreviatedAppName}{Description}{Type}\` (PascalCase)
@example "OnbPsFavoritesQuery"`,name:"operationName",required:!1,type:{name:"string"}}}}}catch{}const Ae=`query PuiSpacesCmpConfigurationFindMany($ids: [String!], $payerIDs: [ID!], $types: [TypeEnum!], $page: Int) {
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
}`,z=(e,a,t)=>{const[r,i]=e.split("?"),o=k.parse(i),s=t&&{[a]:t},d=k.stringify({...o,...s},{sort:(p,m)=>p.localeCompare(m)});return`${r}?${d}`},Pe=(e="",a,t)=>e,M=e=>{if(e&&!e.startsWith("_")){if(e==="BODY")return"_self";if(e==="TAB")return"_blank"}return e||"_self"},K=e=>typeof e=="function",O=e=>typeof e=="function";try{M.displayName="getTarget",M.__docgenInfo={description:"",displayName:"getTarget",props:{}}}catch{}try{K.displayName="isFunction",K.__docgenInfo={description:"",displayName:"isFunction",props:{}}}catch{}try{O.displayName="isReactNodeFunction",O.__docgenInfo={description:"",displayName:"isReactNodeFunction",props:{}}}catch{}const I={ALLOWED_TYPES:["APPLICATION","RESOURCE","NAVIGATION"],DISALLOWED_TYPES:["reporting","how_to_guide_dental_providers","my_account_profile","my_administrators"],KEYS:{VALUES:"myTopApps",LAST_UPDATED:"top-apps-updated"},UPDATE_EVENT:"av:topApps:updated"},Ee=e=>{try{const a=window.localStorage.getItem(e);return a===null?null:JSON.parse(a)}catch{return null}},qe=(e,a)=>I.ALLOWED_TYPES.some(t=>t===a)&&!I.DISALLOWED_TYPES.some(t=>t===e),Ne=e=>Ee(`${I.KEYS.VALUES}-${e}`),be=async(e,a)=>{if(!(!e.configurationId||!e.type)&&qe(e.configurationId,e.type)){const t=oe(),r=await Ne(a)||{};window.localStorage.setItem(`${I.KEYS.LAST_UPDATED}-${a}`,t.format());const i=r[e.configurationId]&&typeof r[e.configurationId].count=="number"?r[e.configurationId].count:0;r[e.configurationId]={...r?.[e.configurationId],count:i+1,lastUse:t.format()},window.localStorage.setItem(`${I.KEYS.VALUES}-${a}`,JSON.stringify(r)),ue.send(I.UPDATE_EVENT)}},Te=`query disclaimerFindOne($id: ID!) {
  configurationFindOne(id: $id) {
    ... on Text {
      description
    }
  }
}`,L=({disclaimerId:e})=>{const[a,t]=_.useState("");return _.useEffect(()=>{(async()=>{if(e){const i=await Z.create({query:Te,variables:{id:e}});t(i.data.data.configurationFindOne.description)}})()},[e]),l.jsx(X,{children:a?l.jsx(me,{children:a}):l.jsx(ee,{})})};try{L.displayName="DisclaimerModal",L.__docgenInfo={description:"",displayName:"DisclaimerModal",props:{disclaimerId:{defaultValue:null,description:"",name:"disclaimerId",required:!1,type:{name:"string"}},parentPayerSpaces:{defaultValue:null,description:"",name:"parentPayerSpaces",required:!1,type:{name:"Space[]"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"any"}},setState:{defaultValue:null,description:"",name:"setState",required:!1,type:{name:"any"}}}}}catch{}const x=({spaceId:e,payerId:a,imageType:t="url",fallback:r,Loader:i=ee,...o})=>{let s;e?s=b(e):a&&(s=b(a));const{loading:d}=ne(),p=e||a||s?.[0].id||s?.[0].configurationId;let c={"images.logo":s?.[0]?.images?.logo,"images.tile":s?.[0]?.images?.tile,"images.billboard":s?.[0]?.images?.billboard,"images.promotional":s?.[0]?.images?.promotional,"images.promotionalHover":s?.[0]?.images?.promotionalHover,url:s?.[0]?.url}[t];return!c&&d?l.jsx(i,{id:`app-${p}-loading`}):(!c&&!d&&r&&(c=r),!c||!p?null:l.jsx(ye,{id:o.id||`app-img-${p}`,src:c,alt:`Space ${t}`,loader:l.jsx(i,{id:`app-img-${p}-loading`}),...o}))};try{x.displayName="SpacesImage",x.__docgenInfo={description:"",displayName:"SpacesImage",props:{spaceId:{defaultValue:null,description:"",name:"spaceId",required:!1,type:{name:"string"}},payerId:{defaultValue:null,description:"",name:"payerId",required:!1,type:{name:"string"}},imageType:{defaultValue:{value:"url"},description:"",name:"imageType",required:!1,type:{name:'"url" | "images.logo" | "images.tile" | "images.billboard" | "images.promotional" | "images.promotionalHover"'}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},Loader:{defaultValue:null,description:"",name:"Loader",required:!1,type:{name:"({ id }: { id: string; }) => Element"}}}}}catch{}const C=({parentPayerSpaces:e,name:a,state:{selectedOption:t},setState:r})=>l.jsxs(X,{children:[l.jsx(he,{children:`Open ${a} as: ${t?t.name||t.id:""}`}),l.jsx(ge,{direction:"row",children:e&&e.map(i=>l.jsx(_e,{onClick:()=>r({selectedOption:i}),children:l.jsx(x,{spaceId:i.configurationId,imageType:"images.tile"})}))})]});try{C.displayName="MultiPayerModal",C.__docgenInfo={description:"",displayName:"MultiPayerModal",props:{disclaimerId:{defaultValue:null,description:"",name:"disclaimerId",required:!1,type:{name:"string"}},parentPayerSpaces:{defaultValue:null,description:"",name:"parentPayerSpaces",required:!1,type:{name:"Space[]"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"any"}},setState:{defaultValue:null,description:"",name:"setState",required:!1,type:{name:"any"}}}}}catch{}const R=e=>e.spaceType!==void 0,w=e=>e.selectedOption!==void 0;try{R.displayName="isModalOptions",R.__docgenInfo={description:"",displayName:"isModalOptions",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"any"}},modalOptions:{defaultValue:null,description:"",name:"modalOptions",required:!1,type:{name:"any"}},modalState:{defaultValue:null,description:"",name:"modalState",required:!0,type:{name:"any"}},selectedModal:{defaultValue:null,description:"",name:"selectedModal",required:!1,type:{name:"any"}},disclaimerId:{defaultValue:null,description:"",name:"disclaimerId",required:!1,type:{name:"any"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"any"}},parentPayerSpaces:{defaultValue:null,description:"",name:"parentPayerSpaces",required:!1,type:{name:"any"}},metadata:{defaultValue:null,description:"",name:"metadata",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"any"}},user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"any"}},spaceType:{defaultValue:null,description:"",name:"spaceType",required:!0,type:{name:"any"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"any"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"any"}}}}}catch{}try{w.displayName="isModalState",w.__docgenInfo={description:"",displayName:"isModalState",props:{selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"any"}},disclaimerId:{defaultValue:null,description:"",name:"disclaimerId",required:!1,type:{name:"any"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"any"}},parentPayerSpaces:{defaultValue:null,description:"",name:"parentPayerSpaces",required:!1,type:{name:"any"}},metadata:{defaultValue:null,description:"",name:"metadata",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"any"}},user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"any"}},spaceType:{defaultValue:null,description:"",name:"spaceType",required:!0,type:{name:"any"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"any"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"any"}}}}}catch{}const ae={isOpen:!1,modalOptions:void 0,modalState:{selectedOption:{id:"",name:""}},selectedModal:{}},j=_.createContext(null),H={DISCLAIMER:{body:L,buttonProps:()=>({children:"Accept"}),onSubmit:({link:e,id:a})=>{window.open(e.url?.[0]==="/"?z(e.url,"spaceId",a):e.url,e.target)}},MULTI_PAYER:{body:C,buttonProps:({selectedOption:e})=>({children:"Continue",disabled:e===void 0}),onSubmit:({metadata:e,link:a,id:t,name:r},i,o)=>{if(e?.disclaimerId){o({type:"OPEN_DISCLAIMER_MODAL",disclaimerId:e.disclaimerId,link:a,id:t,name:r});return}const s=M(a.target);a.url&&window.open(le(a.url)?a.url:Pe(z(a.url,"spaceId",i.selectedOption.id)),s)}}},q={RESET:()=>ae,OPEN_DISCLAIMER_MODAL:(e,a)=>({...e,isOpen:!0,selectedModal:H.DISCLAIMER,modalOptions:{...a,type:a.spaceType}}),OPEN_MULTI_PAYER_MODAL:(e,a)=>({...e,isOpen:!0,selectedModal:H.MULTI_PAYER,modalOptions:{...a,type:a.spaceType}}),UPDATE_MODAL_STATE:(e,a)=>({...e,modalState:a})},ve=(e,{type:a,...t})=>{if(a==="RESET")return q.RESET();if(R(t)){if(a==="OPEN_MULTI_PAYER_MODAL")return q.OPEN_MULTI_PAYER_MODAL(e,t);if(a==="OPEN_DISCLAIMER_MODAL")return q.OPEN_DISCLAIMER_MODAL(e,t)}else if(w(t)&&a==="UPDATE_MODAL_STATE")return q.UPDATE_MODAL_STATE(e,t);return e},$=({children:e})=>{const[{selectedModal:a,modalOptions:t,modalState:r,isOpen:i},o]=_.useReducer(ve,ae),s=()=>o({type:"RESET"}),d=a?.buttonProps&&a?.buttonProps({...r,modalOptions:t}),p=a?.body;return l.jsxs(j.Provider,{value:(m,c)=>o({type:`OPEN_${m}`,...c}),children:[l.jsxs(de,{open:i,children:[l.jsx(pe,{id:"disclaimer-header",children:t?.title}),p&&l.jsx(p,{...t,setState:m=>o({type:"UPDATE_MODAL_STATE",...m}),state:r}),l.jsxs(ce,{children:[l.jsx(G,{onClick:s,children:"Cancel"}),l.jsx(G,{color:"primary",...d,onClick:()=>{a?.onSubmit&&t&&r&&a.onSubmit(t,r,o),t&&be({configurationId:t.id,type:t.type,name:t.name,id:t.id},t.user),s()}})]})]}),e]})};try{j.displayName="ModalContext",j.__docgenInfo={description:"",displayName:"ModalContext",props:{}}}catch{}try{$.displayName="ModalProvider",$.__docgenInfo={description:"",displayName:"ModalProvider",props:{}}}catch{}const te={loading:!0},N=_.createContext(te),ne=()=>_.useContext(N),J=({query:e=Ae,variables:a={types:["PAYERSPACE"]},operationName:t,clientId:r,children:i,payerIds:o,spaceIds:s,spaces:d})=>{const[{previousSpacesMap:p,previousSpacesByConfigMap:m,previousSpacesByPayerMap:c,loading:B,error:F},P]=_.useReducer(Se,te),f=new Map(p),g=new Map(m),u=new Map(c),E=new Set,S=new Set;if(d&&d.length>0){for(const n of d)if(n.id&&!f.has(n.id)&&f.set(n.id,n),n.configurationId&&!g.has(n.configurationId)&&g.set(n.configurationId,n),n.payerIDs)for(const y of n.payerIDs){const h=u.get(y);h?u.set(y,[...h,n]):u.set(y,[n])}}if(s&&s.length>0)for(const n of s)n&&typeof n=="string"&&n.trim()&&!(f.has(n)||g.has(n))&&E.add(n);if(o&&o.length>0)for(const n of o)n&&typeof n=="string"&&n.trim()&&!u.has(n)&&S.add(n);const U={...a,ids:[...E.keys()]},Y={...a,payerIDs:[...S.keys()]},[{data:T,isFetching:re,isError:Q},{data:v,isFetching:ie,isError:W}]=fe({queries:[{queryKey:["id",U],queryFn:()=>A({query:e,clientId:r,variables:U,operationName:t}),enabled:E.size>0},{queryKey:["id",Y],queryFn:()=>A({query:e,clientId:r,variables:Y,operationName:t}),enabled:S.size>0}]});_.useEffect(()=>{(W||Q)&&P({type:"ERROR",error:"Error fetching spaces.",loading:!1})},[W,Q]),_.useEffect(()=>{if(P({type:"LOADING",loading:!0}),E.size===0&&S.size===0){P({type:"LOADING",loading:!1});return}if(T){for(const n of T)if(f.has(n.id)||f.set(n.id,n),g.has(n.configurationId)||g.set(n.configurationId,n),n.payerIDs)for(const y of n.payerIDs){const h=u.get(y);h?u.set(y,[...h,n]):u.set(y,[n])}}if(S.size>0&&v){for(const n of v)if(f.has(n.id)||f.set(n.id,n),g.has(n.configurationId)||g.set(n.configurationId,n),n.payerIDs)for(const y of n.payerIDs){const h=u.get(y);h?u.set(y,[...h,n]):u.set(y,[n])}}P({type:"SPACES",spaces:f,spacesByConfig:g,spacesByPayer:u,loading:!1})},[T,v,o,s]);const se=()=>{if(i)return O(i)?i({spaces:[f.values()],loading:B,error:F}):i};return l.jsx(N.Provider,{value:{spaces:f,spacesByConfig:g,spacesByPayer:u,loading:B||ie||re,error:F},children:l.jsx($,{children:se()})})},b=(...e)=>{const{spaces:a,spacesByConfig:t,spacesByPayer:r}=ne(),i=!e||e.length===0,o=e?.length===1&&e[0]===void 0;return i||o?(console.warn("You did not pass in an ID to find a space, returning all spaces."),a&&[...a.values()]):e.reduce((d,p)=>{const m=a?.get(p)||t?.get(p);if(m)return d.push(m),d;const c=r?.get(p);if(c)return d.push(...c),d},[])};try{N.displayName="SpacesContext",N.__docgenInfo={description:"",displayName:"SpacesContext",props:{}}}catch{}try{J.displayName="Spaces",J.__docgenInfo={description:"",displayName:"Spaces",props:{query:{defaultValue:null,description:"Override the default thanos query.",name:"query",required:!1,type:{name:"string"}},variables:{defaultValue:{value:"{ types: ['PAYERSPACE'] }"},description:`Override the default variables used in the thanos query. Default: { types: [PAYERSPACE] }.
If the spaces provider should contain configurations of a type other than PAYERSPACE, you must override this prop`,name:"variables",required:!1,type:{name:"object"}},operationName:{defaultValue:null,description:`Name for the GraphQL operation, used for debugging and monitoring.

If an operation name exists in the query string, leave this undefined or
ensure it matches what is in the query string.

If no operation name exists in the query string, it can be defined here.

Format: \`{ValueStream || PayerName}{AbbreviatedAppName}{Description}{Type}\` (PascalCase)
@example "OnbPsFavoritesQuery"`,name:"operationName",required:!1,type:{name:"string"}},clientId:{defaultValue:null,description:"The Client ID obtained from APIConnect.",name:"clientId",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children can be a react child or render prop.",name:"children",required:!1,type:{name:"ReactNode | ((props: any) => ReactNode)"}},payerIds:{defaultValue:null,description:`Array of payerIds the Spaces provider should fetch the spaces for.
Any payerIds already included in spaces will not be fetched again.
Note: If a payerId is associated with more than one payer space, the order in which they are returned should not be relied upon.
If a specific payer space is required, you'll need to filter the list that is returned.`,name:"payerIds",required:!1,type:{name:"string[]"}},spaceIds:{defaultValue:null,description:`Array of spaceIds the Spaces provider should fetch the spaces for.
Any spaceIds already included in spaces will not be fetched again.`,name:"spaceIds",required:!1,type:{name:"string[]"}},spaces:{defaultValue:null,description:`Array of spaces to be passed into the Spaces provider.
Useful for if you already have the spaces in your app and don't want the spaces provider to have to fetch them again.`,name:"spaces",required:!1,type:{name:"Space[]"}}}}}catch{}try{b.displayName="useSpaces",b.__docgenInfo={description:"",displayName:"useSpaces",props:{}}}catch{}export{J as S,b as a,x as b,ne as u};
