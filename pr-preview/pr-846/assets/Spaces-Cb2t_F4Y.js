import{t as oe,r as _,j as l}from"./iframe-74vBDrmZ.js";import{h as Z}from"./index-zmotdteK.js";import{i as le}from"./index-C1m1s9iu.js";import{b as X,D as de,a as pe,d as ce}from"./index-CSk-g4Wy.js";import{B as G}from"./index-BdaRrwoe.js";import{q as k}from"./index-D7M7y0-d.js";import{i as ue}from"./index-DS1ZdVNz.js";import{R as me,I as ye,u as fe}from"./Img-8zSb0OoL.js";import{C as ee}from"./index-BcQ0ws9r.js";import{G as ge,B as _e}from"./index-DABAYwxJ.js";import{T as he}from"./index-wf38qGOo.js";const L=e=>{const a=e.match(/(?:query|mutation|subscription)\s+([a-zA-Z_][a-zA-Z0-9_]*)/i);return a==null?void 0:a[1]},Ie={SPACES:(e,{spaces:a,spacesByConfig:t,spacesByPayer:i})=>({previousSpacesMap:a,previousSpacesByConfigMap:t,previousSpacesByPayerMap:i,error:void 0,loading:!1}),ERROR:(e,{error:a})=>({...e,loading:!1,error:a}),LOADING:(e,{loading:a})=>({...e,loading:a!==void 0?a:!e.loading})},Se=(e,a)=>{const{type:t}=a;return Ie[t](e,a)},x=async({query:e,clientId:a,variables:t,operationName:i})=>{const s={};a&&(s["X-Client-ID"]=a);const{data:{data:{configurationPagination:o}}}=await Z.create({query:e,variables:{...t},operationName:i||L(e)||"PuiSpacesCmpAnonymousOperation"},{headers:{...s}}),{pageInfo:{currentPage:r,hasNextPage:d},items:p}=o;return{items:p,currentPage:r,hasNextPage:d}},v=async({query:e,clientId:a,variables:t,_spaces:i=[],operationName:s})=>{const{items:o,currentPage:r,hasNextPage:d}=await x({query:e,clientId:a,variables:t,operationName:s});if(i.push(...o),d){const p={...t,page:r+1};return v({query:e,clientId:a,variables:p,_spaces:i,operationName:s})}return i};try{L.displayName="parseOperationName",L.__docgenInfo={description:"",displayName:"parseOperationName",props:{}}}catch{}try{x.displayName="fetchSpaces",x.__docgenInfo={description:"",displayName:"fetchSpaces",props:{query:{defaultValue:null,description:"The query sent to the avWebQL endpoint.",name:"query",required:!0,type:{name:"string"}},clientId:{defaultValue:null,description:"The Client ID obtained from APIConnect.",name:"clientId",required:!1,type:{name:"string"}},variables:{defaultValue:null,description:"The variables sent to the avWebQL endpoint.",name:"variables",required:!1,type:{name:"object"}},page:{defaultValue:null,description:"The page sent to the avWebQL endpoint.",name:"page",required:!1,type:{name:"string"}},operationName:{defaultValue:null,description:`Name for the GraphQL operation, used for debugging and monitoring.

If an operation name exists in the query string, leave this undefined or
ensure it matches what is in the query string.

If no operation name exists in the query string, it can be defined here.

Format: \`{ValueStream || PayerName}{AbbreviatedAppName}{Description}{Type}\` (PascalCase)
@example "OnbPsFavoritesQuery"`,name:"operationName",required:!1,type:{name:"string"}}}}}catch{}try{v.displayName="fetchAllSpaces",v.__docgenInfo={description:"",displayName:"fetchAllSpaces",props:{query:{defaultValue:null,description:"The query sent to the avWebQL endpoint.",name:"query",required:!0,type:{name:"string"}},clientId:{defaultValue:null,description:"The Client ID obtained from APIConnect.",name:"clientId",required:!1,type:{name:"string"}},variables:{defaultValue:null,description:"The variables sent to the avWebQL endpoint.",name:"variables",required:!1,type:{name:"Record<string, any>"}},_spaces:{defaultValue:{value:"[]"},description:"Array of spaces to be passed into the Spaces provider.",name:"_spaces",required:!1,type:{name:"Space[]"}},operationName:{defaultValue:null,description:`Name for the GraphQL operation, used for debugging and monitoring.

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
}`,z=(e,a,t)=>{const[i,s]=e.split("?"),o=k.parse(s),r=t&&{[a]:t},d=k.stringify({...o,...r},{sort:(p,f)=>p.localeCompare(f)});return`${i}?${d}`},Pe=(e="",a,t)=>e,C=e=>{if(e&&!e.startsWith("_")){if(e==="BODY")return"_self";if(e==="TAB")return"_blank"}return e||"_self"},K=e=>typeof e=="function",R=e=>typeof e=="function";try{C.displayName="getTarget",C.__docgenInfo={description:"",displayName:"getTarget",props:{}}}catch{}try{K.displayName="isFunction",K.__docgenInfo={description:"",displayName:"isFunction",props:{}}}catch{}try{R.displayName="isReactNodeFunction",R.__docgenInfo={description:"",displayName:"isReactNodeFunction",props:{}}}catch{}const E={ALLOWED_TYPES:["APPLICATION","RESOURCE","NAVIGATION"],DISALLOWED_TYPES:["reporting","how_to_guide_dental_providers","my_account_profile","my_administrators"],KEYS:{VALUES:"myTopApps",LAST_UPDATED:"top-apps-updated"},UPDATE_EVENT:"av:topApps:updated"},Ee=e=>{try{const a=window.localStorage.getItem(e);return a===null?null:JSON.parse(a)}catch{return null}},qe=(e,a)=>E.ALLOWED_TYPES.some(t=>t===a)&&!E.DISALLOWED_TYPES.some(t=>t===e),Ne=e=>Ee(`${E.KEYS.VALUES}-${e}`),be=async(e,a)=>{if(!(!e.configurationId||!e.type)&&qe(e.configurationId,e.type)){const t=oe(),i=await Ne(a)||{};window.localStorage.setItem(`${E.KEYS.LAST_UPDATED}-${a}`,t.format());const s=i[e.configurationId]&&typeof i[e.configurationId].count=="number"?i[e.configurationId].count:0;i[e.configurationId]={...i==null?void 0:i[e.configurationId],count:s+1,lastUse:t.format()},window.localStorage.setItem(`${E.KEYS.VALUES}-${a}`,JSON.stringify(i)),ue.send(E.UPDATE_EVENT)}},Te=`query disclaimerFindOne($id: ID!) {
  configurationFindOne(id: $id) {
    ... on Text {
      description
    }
  }
}`,w=({disclaimerId:e})=>{const[a,t]=_.useState("");return _.useEffect(()=>{(async()=>{if(e){const s=await Z.create({query:Te,variables:{id:e}});t(s.data.data.configurationFindOne.description)}})()},[e]),l.jsx(X,{children:a?l.jsx(me,{children:a}):l.jsx(ee,{})})};try{w.displayName="DisclaimerModal",w.__docgenInfo={description:"",displayName:"DisclaimerModal",props:{disclaimerId:{defaultValue:null,description:"",name:"disclaimerId",required:!1,type:{name:"string"}},parentPayerSpaces:{defaultValue:null,description:"",name:"parentPayerSpaces",required:!1,type:{name:"Space[]"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"any"}},setState:{defaultValue:null,description:"",name:"setState",required:!1,type:{name:"any"}}}}}catch{}const j=({spaceId:e,payerId:a,imageType:t="url",fallback:i,Loader:s=ee,...o})=>{var q,N,S,u,y,c,A,h,b,T,P;let r;e?r=O(e):a&&(r=O(a));const{loading:d}=ne(),p=e||a||(r==null?void 0:r[0].id)||(r==null?void 0:r[0].configurationId);let m={"images.logo":(N=(q=r==null?void 0:r[0])==null?void 0:q.images)==null?void 0:N.logo,"images.tile":(u=(S=r==null?void 0:r[0])==null?void 0:S.images)==null?void 0:u.tile,"images.billboard":(c=(y=r==null?void 0:r[0])==null?void 0:y.images)==null?void 0:c.billboard,"images.promotional":(h=(A=r==null?void 0:r[0])==null?void 0:A.images)==null?void 0:h.promotional,"images.promotionalHover":(T=(b=r==null?void 0:r[0])==null?void 0:b.images)==null?void 0:T.promotionalHover,url:(P=r==null?void 0:r[0])==null?void 0:P.url}[t];return!m&&d?l.jsx(s,{id:`app-${p}-loading`}):(!m&&!d&&i&&(m=i),!m||!p?null:l.jsx(ye,{id:o.id||`app-img-${p}`,src:m,alt:`Space ${t}`,loader:l.jsx(s,{id:`app-img-${p}-loading`}),...o}))};try{j.displayName="SpacesImage",j.__docgenInfo={description:"",displayName:"SpacesImage",props:{spaceId:{defaultValue:null,description:"",name:"spaceId",required:!1,type:{name:"string"}},payerId:{defaultValue:null,description:"",name:"payerId",required:!1,type:{name:"string"}},imageType:{defaultValue:{value:"url"},description:"",name:"imageType",required:!1,type:{name:'"url" | "images.logo" | "images.tile" | "images.billboard" | "images.promotional" | "images.promotionalHover"'}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},Loader:{defaultValue:null,description:"",name:"Loader",required:!1,type:{name:"({ id }: { id: string; }) => Element"}}}}}catch{}const $=({parentPayerSpaces:e,name:a,state:{selectedOption:t},setState:i})=>l.jsxs(X,{children:[l.jsx(he,{children:`Open ${a} as: ${t?t.name||t.id:""}`}),l.jsx(ge,{direction:"row",children:e&&e.map(s=>l.jsx(_e,{onClick:()=>i({selectedOption:s}),children:l.jsx(j,{spaceId:s.configurationId,imageType:"images.tile"})}))})]});try{$.displayName="MultiPayerModal",$.__docgenInfo={description:"",displayName:"MultiPayerModal",props:{disclaimerId:{defaultValue:null,description:"",name:"disclaimerId",required:!1,type:{name:"string"}},parentPayerSpaces:{defaultValue:null,description:"",name:"parentPayerSpaces",required:!1,type:{name:"Space[]"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"any"}},setState:{defaultValue:null,description:"",name:"setState",required:!1,type:{name:"any"}}}}}catch{}const F=e=>e.spaceType!==void 0,U=e=>e.selectedOption!==void 0;try{F.displayName="isModalOptions",F.__docgenInfo={description:"",displayName:"isModalOptions",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"any"}},modalOptions:{defaultValue:null,description:"",name:"modalOptions",required:!1,type:{name:"any"}},modalState:{defaultValue:null,description:"",name:"modalState",required:!0,type:{name:"any"}},selectedModal:{defaultValue:null,description:"",name:"selectedModal",required:!1,type:{name:"any"}},disclaimerId:{defaultValue:null,description:"",name:"disclaimerId",required:!1,type:{name:"any"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"any"}},parentPayerSpaces:{defaultValue:null,description:"",name:"parentPayerSpaces",required:!1,type:{name:"any"}},metadata:{defaultValue:null,description:"",name:"metadata",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"any"}},user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"any"}},spaceType:{defaultValue:null,description:"",name:"spaceType",required:!0,type:{name:"any"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"any"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"any"}}}}}catch{}try{U.displayName="isModalState",U.__docgenInfo={description:"",displayName:"isModalState",props:{selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"any"}},disclaimerId:{defaultValue:null,description:"",name:"disclaimerId",required:!1,type:{name:"any"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"any"}},parentPayerSpaces:{defaultValue:null,description:"",name:"parentPayerSpaces",required:!1,type:{name:"any"}},metadata:{defaultValue:null,description:"",name:"metadata",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"any"}},user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"any"}},spaceType:{defaultValue:null,description:"",name:"spaceType",required:!0,type:{name:"any"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"any"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"any"}}}}}catch{}const ae={isOpen:!1,modalOptions:void 0,modalState:{selectedOption:{id:"",name:""}},selectedModal:{}},B=_.createContext(null),H={DISCLAIMER:{body:w,buttonProps:()=>({children:"Accept"}),onSubmit:({link:e,id:a})=>{var t;window.open(((t=e.url)==null?void 0:t[0])==="/"?z(e.url,"spaceId",a):e.url,e.target)}},MULTI_PAYER:{body:$,buttonProps:({selectedOption:e})=>({children:"Continue",disabled:e===void 0}),onSubmit:({metadata:e,link:a,id:t,name:i},s,o)=>{if(e!=null&&e.disclaimerId){o({type:"OPEN_DISCLAIMER_MODAL",disclaimerId:e.disclaimerId,link:a,id:t,name:i});return}const r=C(a.target);a.url&&window.open(le(a.url)?a.url:Pe(z(a.url,"spaceId",s.selectedOption.id)),r)}}},D={RESET:()=>ae,OPEN_DISCLAIMER_MODAL:(e,a)=>({...e,isOpen:!0,selectedModal:H.DISCLAIMER,modalOptions:{...a,type:a.spaceType}}),OPEN_MULTI_PAYER_MODAL:(e,a)=>({...e,isOpen:!0,selectedModal:H.MULTI_PAYER,modalOptions:{...a,type:a.spaceType}}),UPDATE_MODAL_STATE:(e,a)=>({...e,modalState:a})},ve=(e,{type:a,...t})=>{if(a==="RESET")return D.RESET();if(F(t)){if(a==="OPEN_MULTI_PAYER_MODAL")return D.OPEN_MULTI_PAYER_MODAL(e,t);if(a==="OPEN_DISCLAIMER_MODAL")return D.OPEN_DISCLAIMER_MODAL(e,t)}else if(U(t)&&a==="UPDATE_MODAL_STATE")return D.UPDATE_MODAL_STATE(e,t);return e},Y=({children:e})=>{const[{selectedModal:a,modalOptions:t,modalState:i,isOpen:s},o]=_.useReducer(ve,ae),r=()=>o({type:"RESET"}),d=(a==null?void 0:a.buttonProps)&&(a==null?void 0:a.buttonProps({...i,modalOptions:t})),p=a==null?void 0:a.body;return l.jsxs(B.Provider,{value:(f,m)=>o({type:`OPEN_${f}`,...m}),children:[l.jsxs(de,{open:s,children:[l.jsx(pe,{id:"disclaimer-header",children:t==null?void 0:t.title}),p&&l.jsx(p,{...t,setState:f=>o({type:"UPDATE_MODAL_STATE",...f}),state:i}),l.jsxs(ce,{children:[l.jsx(G,{onClick:r,children:"Cancel"}),l.jsx(G,{color:"primary",...d,onClick:()=>{a!=null&&a.onSubmit&&t&&i&&a.onSubmit(t,i,o),t&&be({configurationId:t.id,type:t.type,name:t.name,id:t.id},t.user),r()}})]})]}),e]})};try{B.displayName="ModalContext",B.__docgenInfo={description:"",displayName:"ModalContext",props:{}}}catch{}try{Y.displayName="ModalProvider",Y.__docgenInfo={description:"",displayName:"ModalProvider",props:{}}}catch{}const te={loading:!0},V=_.createContext(te),ne=()=>_.useContext(V),J=({query:e=Ae,variables:a={types:["PAYERSPACE"]},operationName:t,clientId:i,children:s,payerIds:o,spaceIds:r,spaces:d})=>{const[{previousSpacesMap:p,previousSpacesByConfigMap:f,previousSpacesByPayerMap:m,loading:q,error:N},S]=_.useReducer(Se,te),u=new Map(p),y=new Map(f),c=new Map(m),A=new Set,h=new Set;if(d&&d.length>0){for(const n of d)if(n.id&&!u.has(n.id)&&u.set(n.id,n),n.configurationId&&!y.has(n.configurationId)&&y.set(n.configurationId,n),n.payerIDs)for(const g of n.payerIDs){const I=c.get(g);I?c.set(g,[...I,n]):c.set(g,[n])}}if(r&&r.length>0)for(const n of r)n&&typeof n=="string"&&n.trim()&&!(u.has(n)||y.has(n))&&A.add(n);if(o&&o.length>0)for(const n of o)n&&typeof n=="string"&&n.trim()&&!c.has(n)&&h.add(n);const b={...a,ids:[...A.keys()]},T={...a,payerIDs:[...h.keys()]},[{data:P,isFetching:re,isError:Q},{data:M,isFetching:ie,isError:W}]=fe({queries:[{queryKey:["id",b],queryFn:()=>v({query:e,clientId:i,variables:b,operationName:t}),enabled:A.size>0},{queryKey:["id",T],queryFn:()=>v({query:e,clientId:i,variables:T,operationName:t}),enabled:h.size>0}]});_.useEffect(()=>{(W||Q)&&S({type:"ERROR",error:"Error fetching spaces.",loading:!1})},[W,Q]),_.useEffect(()=>{if(S({type:"LOADING",loading:!0}),A.size===0&&h.size===0){S({type:"LOADING",loading:!1});return}if(P){for(const n of P)if(u.has(n.id)||u.set(n.id,n),y.has(n.configurationId)||y.set(n.configurationId,n),n.payerIDs)for(const g of n.payerIDs){const I=c.get(g);I?c.set(g,[...I,n]):c.set(g,[n])}}if(h.size>0&&M){for(const n of M)if(u.has(n.id)||u.set(n.id,n),y.has(n.configurationId)||y.set(n.configurationId,n),n.payerIDs)for(const g of n.payerIDs){const I=c.get(g);I?c.set(g,[...I,n]):c.set(g,[n])}}S({type:"SPACES",spaces:u,spacesByConfig:y,spacesByPayer:c,loading:!1})},[P,M,o,r]);const se=()=>{if(s)return R(s)?s({spaces:[u.values()],loading:q,error:N}):s};return l.jsx(V.Provider,{value:{spaces:u,spacesByConfig:y,spacesByPayer:c,loading:q||ie||re,error:N},children:l.jsx(Y,{children:se()})})},O=(...e)=>{const{spaces:a,spacesByConfig:t,spacesByPayer:i}=ne(),s=!e||e.length===0,o=(e==null?void 0:e.length)===1&&e[0]===void 0;return s||o?(console.warn("You did not pass in an ID to find a space, returning all spaces."),a&&[...a.values()]):e.reduce((d,p)=>{const f=(a==null?void 0:a.get(p))||(t==null?void 0:t.get(p));if(f)return d.push(f),d;const m=i==null?void 0:i.get(p);if(m)return d.push(...m),d},[])};try{V.displayName="SpacesContext",V.__docgenInfo={description:"",displayName:"SpacesContext",props:{}}}catch{}try{J.displayName="Spaces",J.__docgenInfo={description:"",displayName:"Spaces",props:{query:{defaultValue:null,description:"Override the default thanos query.",name:"query",required:!1,type:{name:"string"}},variables:{defaultValue:{value:"{ types: ['PAYERSPACE'] }"},description:`Override the default variables used in the thanos query. Default: { types: [PAYERSPACE] }.
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
Useful for if you already have the spaces in your app and don't want the spaces provider to have to fetch them again.`,name:"spaces",required:!1,type:{name:"Space[]"}}}}}catch{}try{O.displayName="useSpaces",O.__docgenInfo={description:"",displayName:"useSpaces",props:{}}}catch{}export{J as S,O as a,j as b,ne as u};
