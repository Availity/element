import{j as l}from"./jsx-runtime-BTJTZTIL.js";import{r as _}from"./index-BgYLq7fD.js";import{h as H}from"./index-DdNunzh7.js";import{i as se}from"./index-DuRQpI0H.js";import{b as J,D as oe,a as le,d as de}from"./index-g8KIT1P4.js";import{B as Q}from"./index-k9OtkSpc.js";import{q as W}from"./index-DLKRbc4C.js";import{i as pe}from"./index-DJKl12U0.js";import{d as ue}from"./dayjs.min-CfWDS3UC.js";import{R as ce,I as me,u as ye}from"./Img-B45hvfNA.js";import{C as Z}from"./index-D95KORoo.js";import{G as fe,B as ge}from"./index-DmY_4rvh.js";import{T as _e}from"./index-ClMemn8c.js";const L=e=>{const a=e.match(/(?:query|mutation|subscription)\s+([a-zA-Z_][a-zA-Z0-9_]*)/i);return a==null?void 0:a[1]},he={SPACES:(e,{spaces:a,spacesByConfig:t,spacesByPayer:i})=>({previousSpacesMap:a,previousSpacesByConfigMap:t,previousSpacesByPayerMap:i,error:void 0,loading:!1}),ERROR:(e,{error:a})=>({...e,loading:!1,error:a}),LOADING:(e,{loading:a})=>({...e,loading:a!==void 0?a:!e.loading})},Ie=(e,a)=>{const{type:t}=a;return he[t](e,a)},M=async({query:e,clientId:a,variables:t,operationName:i})=>{const s={};a&&(s["X-Client-ID"]=a);const{data:{data:{configurationPagination:o}}}=await H.create({query:e,variables:{...t},operationName:i||L(e)||"PuiSpacesCmpAnonymousOperation"},{headers:{...s}}),{pageInfo:{currentPage:r,hasNextPage:d},items:p}=o;return{items:p,currentPage:r,hasNextPage:d}},v=async({query:e,clientId:a,variables:t,_spaces:i=[],operationName:s})=>{const{items:o,currentPage:r,hasNextPage:d}=await M({query:e,clientId:a,variables:t,operationName:s});if(i.push(...o),d){const p={...t,page:r+1};return v({query:e,clientId:a,variables:p,_spaces:i,operationName:s})}return i};try{L.displayName="parseOperationName",L.__docgenInfo={description:"",displayName:"parseOperationName",props:{}}}catch{}try{M.displayName="fetchSpaces",M.__docgenInfo={description:"",displayName:"fetchSpaces",props:{query:{defaultValue:null,description:"The query sent to the avWebQL endpoint.",name:"query",required:!0,type:{name:"string"}},clientId:{defaultValue:null,description:"The Client ID obtained from APIConnect.",name:"clientId",required:!1,type:{name:"string"}},variables:{defaultValue:null,description:"The variables sent to the avWebQL endpoint.",name:"variables",required:!1,type:{name:"object"}},page:{defaultValue:null,description:"The page sent to the avWebQL endpoint.",name:"page",required:!1,type:{name:"string"}},operationName:{defaultValue:null,description:`Name for the GraphQL operation, used for debugging and monitoring.

If an operation name exists in the query string, leave this undefined or
ensure it matches what is in the query string.

If no operation name exists in the query string, it can be defined here.

Format: \`{ValueStream || PayerName}{AbbreviatedAppName}{Description}{Type}\` (PascalCase)
@example "OnbPsFavoritesQuery"`,name:"operationName",required:!1,type:{name:"string"}}}}}catch{}try{v.displayName="fetchAllSpaces",v.__docgenInfo={description:"",displayName:"fetchAllSpaces",props:{query:{defaultValue:null,description:"The query sent to the avWebQL endpoint.",name:"query",required:!0,type:{name:"string"}},clientId:{defaultValue:null,description:"The Client ID obtained from APIConnect.",name:"clientId",required:!1,type:{name:"string"}},variables:{defaultValue:null,description:"The variables sent to the avWebQL endpoint.",name:"variables",required:!1,type:{name:"Record<string, any>"}},_spaces:{defaultValue:{value:"[]"},description:"Array of spaces to be passed into the Spaces provider.",name:"_spaces",required:!1,type:{name:"Space[]"}},operationName:{defaultValue:null,description:`Name for the GraphQL operation, used for debugging and monitoring.

If an operation name exists in the query string, leave this undefined or
ensure it matches what is in the query string.

If no operation name exists in the query string, it can be defined here.

Format: \`{ValueStream || PayerName}{AbbreviatedAppName}{Description}{Type}\` (PascalCase)
@example "OnbPsFavoritesQuery"`,name:"operationName",required:!1,type:{name:"string"}}}}}catch{}const Se=`query PuiSpacesCmpConfigurationFindMany($ids: [String!], $payerIDs: [ID!], $types: [TypeEnum!], $page: Int) {
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
}`,G=(e,a,t)=>{const[i,s]=e.split("?"),o=W.parse(s),r=t&&{[a]:t},d=W.stringify({...o,...r},{sort:(p,f)=>p.localeCompare(f)});return`${i}?${d}`},Ae=(e="",a,t)=>e,x=e=>{if(e&&!e.startsWith("_")){if(e==="BODY")return"_self";if(e==="TAB")return"_blank"}return e||"_self"},k=e=>typeof e=="function",C=e=>typeof e=="function";try{x.displayName="getTarget",x.__docgenInfo={description:"",displayName:"getTarget",props:{}}}catch{}try{k.displayName="isFunction",k.__docgenInfo={description:"",displayName:"isFunction",props:{}}}catch{}try{C.displayName="isReactNodeFunction",C.__docgenInfo={description:"",displayName:"isReactNodeFunction",props:{}}}catch{}const E={ALLOWED_TYPES:["APPLICATION","RESOURCE","NAVIGATION"],DISALLOWED_TYPES:["reporting","how_to_guide_dental_providers","my_account_profile","my_administrators"],KEYS:{VALUES:"myTopApps",LAST_UPDATED:"top-apps-updated"},UPDATE_EVENT:"av:topApps:updated"},Pe=e=>{try{const a=window.localStorage.getItem(e);return a===null?null:JSON.parse(a)}catch{return null}},Ee=(e,a)=>E.ALLOWED_TYPES.some(t=>t===a)&&!E.DISALLOWED_TYPES.some(t=>t===e),qe=e=>Pe(`${E.KEYS.VALUES}-${e}`),be=async(e,a)=>{if(!(!e.configurationId||!e.type)&&Ee(e.configurationId,e.type)){const t=ue(),i=await qe(a)||{};window.localStorage.setItem(`${E.KEYS.LAST_UPDATED}-${a}`,t.format());const s=i[e.configurationId]&&typeof i[e.configurationId].count=="number"?i[e.configurationId].count:0;i[e.configurationId]={...i==null?void 0:i[e.configurationId],count:s+1,lastUse:t.format()},window.localStorage.setItem(`${E.KEYS.VALUES}-${a}`,JSON.stringify(i)),pe.send(E.UPDATE_EVENT)}},Ne=`query disclaimerFindOne($id: ID!) {
  configurationFindOne(id: $id) {
    ... on Text {
      description
    }
  }
}`,R=({disclaimerId:e})=>{const[a,t]=_.useState("");return _.useEffect(()=>{(async()=>{if(e){const s=await H.create({query:Ne,variables:{id:e}});t(s.data.data.configurationFindOne.description)}})()},[e]),l.jsx(J,{children:a?l.jsx(ce,{children:a}):l.jsx(Z,{})})};try{R.displayName="DisclaimerModal",R.__docgenInfo={description:"",displayName:"DisclaimerModal",props:{disclaimerId:{defaultValue:null,description:"",name:"disclaimerId",required:!1,type:{name:"string"}},parentPayerSpaces:{defaultValue:null,description:"",name:"parentPayerSpaces",required:!1,type:{name:"Space[]"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"any"}},setState:{defaultValue:null,description:"",name:"setState",required:!1,type:{name:"any"}}}}}catch{}const w=({spaceId:e,payerId:a,imageType:t="url",fallback:i,Loader:s=Z,...o})=>{var q,b,S,c,y,u,A,h,N,T,P;let r;e?r=V(e):a&&(r=V(a));const{loading:d}=te(),p=e||a||(r==null?void 0:r[0].id)||(r==null?void 0:r[0].configurationId);let m={"images.logo":(b=(q=r==null?void 0:r[0])==null?void 0:q.images)==null?void 0:b.logo,"images.tile":(c=(S=r==null?void 0:r[0])==null?void 0:S.images)==null?void 0:c.tile,"images.billboard":(u=(y=r==null?void 0:r[0])==null?void 0:y.images)==null?void 0:u.billboard,"images.promotional":(h=(A=r==null?void 0:r[0])==null?void 0:A.images)==null?void 0:h.promotional,"images.promotionalHover":(T=(N=r==null?void 0:r[0])==null?void 0:N.images)==null?void 0:T.promotionalHover,url:(P=r==null?void 0:r[0])==null?void 0:P.url}[t];return!m&&d?l.jsx(s,{id:`app-${p}-loading`}):(!m&&!d&&i&&(m=i),!m||!p?null:l.jsx(me,{id:o.id||`app-img-${p}`,src:m,alt:`Space ${t}`,loader:l.jsx(s,{id:`app-img-${p}-loading`}),...o}))};try{w.displayName="SpacesImage",w.__docgenInfo={description:"",displayName:"SpacesImage",props:{spaceId:{defaultValue:null,description:"",name:"spaceId",required:!1,type:{name:"string"}},payerId:{defaultValue:null,description:"",name:"payerId",required:!1,type:{name:"string"}},imageType:{defaultValue:{value:"url"},description:"",name:"imageType",required:!1,type:{name:'"url" | "images.logo" | "images.tile" | "images.billboard" | "images.promotional" | "images.promotionalHover"'}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},Loader:{defaultValue:null,description:"",name:"Loader",required:!1,type:{name:"({ id }: { id: string; }) => Element"}}}}}catch{}const j=({parentPayerSpaces:e,name:a,state:{selectedOption:t},setState:i})=>l.jsxs(J,{children:[l.jsx(_e,{children:`Open ${a} as: ${t?t.name||t.id:""}`}),l.jsx(fe,{direction:"row",children:e&&e.map(s=>l.jsx(ge,{onClick:()=>i({selectedOption:s}),children:l.jsx(w,{spaceId:s.configurationId,imageType:"images.tile"})}))})]});try{j.displayName="MultiPayerModal",j.__docgenInfo={description:"",displayName:"MultiPayerModal",props:{disclaimerId:{defaultValue:null,description:"",name:"disclaimerId",required:!1,type:{name:"string"}},parentPayerSpaces:{defaultValue:null,description:"",name:"parentPayerSpaces",required:!1,type:{name:"Space[]"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"any"}},setState:{defaultValue:null,description:"",name:"setState",required:!1,type:{name:"any"}}}}}catch{}const $=e=>e.spaceType!==void 0,F=e=>e.selectedOption!==void 0;try{$.displayName="isModalOptions",$.__docgenInfo={description:"",displayName:"isModalOptions",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"any"}},modalOptions:{defaultValue:null,description:"",name:"modalOptions",required:!1,type:{name:"any"}},modalState:{defaultValue:null,description:"",name:"modalState",required:!0,type:{name:"any"}},selectedModal:{defaultValue:null,description:"",name:"selectedModal",required:!1,type:{name:"any"}},disclaimerId:{defaultValue:null,description:"",name:"disclaimerId",required:!1,type:{name:"any"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"any"}},parentPayerSpaces:{defaultValue:null,description:"",name:"parentPayerSpaces",required:!1,type:{name:"any"}},metadata:{defaultValue:null,description:"",name:"metadata",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"any"}},user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"any"}},spaceType:{defaultValue:null,description:"",name:"spaceType",required:!0,type:{name:"any"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"any"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"any"}}}}}catch{}try{F.displayName="isModalState",F.__docgenInfo={description:"",displayName:"isModalState",props:{selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"any"}},disclaimerId:{defaultValue:null,description:"",name:"disclaimerId",required:!1,type:{name:"any"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"any"}},parentPayerSpaces:{defaultValue:null,description:"",name:"parentPayerSpaces",required:!1,type:{name:"any"}},metadata:{defaultValue:null,description:"",name:"metadata",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"any"}},user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"any"}},spaceType:{defaultValue:null,description:"",name:"spaceType",required:!0,type:{name:"any"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"any"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"any"}}}}}catch{}const X={isOpen:!1,modalOptions:void 0,modalState:{selectedOption:{id:"",name:""}},selectedModal:{}},Te=_.createContext(null),z={DISCLAIMER:{body:R,buttonProps:()=>({children:"Accept"}),onSubmit:({link:e,id:a})=>{var t;window.open(((t=e.url)==null?void 0:t[0])==="/"?G(e.url,"spaceId",a):e.url,e.target)}},MULTI_PAYER:{body:j,buttonProps:({selectedOption:e})=>({children:"Continue",disabled:e===void 0}),onSubmit:({metadata:e,link:a,id:t,name:i},s,o)=>{if(e!=null&&e.disclaimerId){o({type:"OPEN_DISCLAIMER_MODAL",disclaimerId:e.disclaimerId,link:a,id:t,name:i});return}const r=x(a.target);a.url&&window.open(se(a.url)?a.url:Ae(G(a.url,"spaceId",s.selectedOption.id)),r)}}},D={RESET:()=>X,OPEN_DISCLAIMER_MODAL:(e,a)=>({...e,isOpen:!0,selectedModal:z.DISCLAIMER,modalOptions:{...a,type:a.spaceType}}),OPEN_MULTI_PAYER_MODAL:(e,a)=>({...e,isOpen:!0,selectedModal:z.MULTI_PAYER,modalOptions:{...a,type:a.spaceType}}),UPDATE_MODAL_STATE:(e,a)=>({...e,modalState:a})},ve=(e,{type:a,...t})=>{if(a==="RESET")return D.RESET();if($(t)){if(a==="OPEN_MULTI_PAYER_MODAL")return D.OPEN_MULTI_PAYER_MODAL(e,t);if(a==="OPEN_DISCLAIMER_MODAL")return D.OPEN_DISCLAIMER_MODAL(e,t)}else if(F(t)&&a==="UPDATE_MODAL_STATE")return D.UPDATE_MODAL_STATE(e,t);return e},U=({children:e})=>{const[{selectedModal:a,modalOptions:t,modalState:i,isOpen:s},o]=_.useReducer(ve,X),r=()=>o({type:"RESET"}),d=(a==null?void 0:a.buttonProps)&&(a==null?void 0:a.buttonProps({...i,modalOptions:t})),p=a==null?void 0:a.body;return l.jsxs(Te.Provider,{value:(f,m)=>o({type:`OPEN_${f}`,...m}),children:[l.jsxs(oe,{open:s,children:[l.jsx(le,{id:"disclaimer-header",children:t==null?void 0:t.title}),p&&l.jsx(p,{...t,setState:f=>o({type:"UPDATE_MODAL_STATE",...f}),state:i}),l.jsxs(de,{children:[l.jsx(Q,{onClick:r,children:"Cancel"}),l.jsx(Q,{color:"primary",...d,onClick:()=>{a!=null&&a.onSubmit&&t&&i&&a.onSubmit(t,i,o),t&&be({configurationId:t.id,type:t.type,name:t.name,id:t.id},t.user),r()}})]})]}),e]})};try{U.displayName="ModalProvider",U.__docgenInfo={description:"",displayName:"ModalProvider",props:{}}}catch{}const ee={loading:!0},ae=_.createContext(ee),te=()=>_.useContext(ae),K=({query:e=Se,variables:a={types:["PAYERSPACE"]},operationName:t,clientId:i,children:s,payerIds:o,spaceIds:r,spaces:d})=>{const[{previousSpacesMap:p,previousSpacesByConfigMap:f,previousSpacesByPayerMap:m,loading:q,error:b},S]=_.useReducer(Ie,ee),c=new Map(p),y=new Map(f),u=new Map(m),A=new Set,h=new Set;if(d&&d.length>0){for(const n of d)if(n.id&&!c.has(n.id)&&c.set(n.id,n),n.configurationId&&!y.has(n.configurationId)&&y.set(n.configurationId,n),n.payerIDs)for(const g of n.payerIDs){const I=u.get(g);I?u.set(g,[...I,n]):u.set(g,[n])}}if(r&&r.length>0)for(const n of r)n&&typeof n=="string"&&n.trim()&&!(c.has(n)||y.has(n))&&A.add(n);if(o&&o.length>0)for(const n of o)n&&typeof n=="string"&&n.trim()&&!u.has(n)&&h.add(n);const N={...a,ids:[...A.keys()]},T={...a,payerIDs:[...h.keys()]},[{data:P,isFetching:ne,isError:B},{data:O,isFetching:re,isError:Y}]=ye({queries:[{queryKey:["id",N],queryFn:()=>v({query:e,clientId:i,variables:N,operationName:t}),enabled:A.size>0},{queryKey:["id",T],queryFn:()=>v({query:e,clientId:i,variables:T,operationName:t}),enabled:h.size>0}]});_.useEffect(()=>{(Y||B)&&S({type:"ERROR",error:"Error fetching spaces.",loading:!1})},[Y,B]),_.useEffect(()=>{if(S({type:"LOADING",loading:!0}),A.size===0&&h.size===0){S({type:"LOADING",loading:!1});return}if(P){for(const n of P)if(c.has(n.id)||c.set(n.id,n),y.has(n.configurationId)||y.set(n.configurationId,n),n.payerIDs)for(const g of n.payerIDs){const I=u.get(g);I?u.set(g,[...I,n]):u.set(g,[n])}}if(h.size>0&&O){for(const n of O)if(c.has(n.id)||c.set(n.id,n),y.has(n.configurationId)||y.set(n.configurationId,n),n.payerIDs)for(const g of n.payerIDs){const I=u.get(g);I?u.set(g,[...I,n]):u.set(g,[n])}}S({type:"SPACES",spaces:c,spacesByConfig:y,spacesByPayer:u,loading:!1})},[P,O,o,r]);const ie=()=>{if(s)return C(s)?s({spaces:[c.values()],loading:q,error:b}):s};return l.jsx(ae.Provider,{value:{spaces:c,spacesByConfig:y,spacesByPayer:u,loading:q||re||ne,error:b},children:l.jsx(U,{children:ie()})})},V=(...e)=>{const{spaces:a,spacesByConfig:t,spacesByPayer:i}=te(),s=!e||e.length===0,o=(e==null?void 0:e.length)===1&&e[0]===void 0;return s||o?(console.warn("You did not pass in an ID to find a space, returning all spaces."),a&&[...a.values()]):e.reduce((d,p)=>{const f=(a==null?void 0:a.get(p))||(t==null?void 0:t.get(p));if(f)return d.push(f),d;const m=i==null?void 0:i.get(p);if(m)return d.push(...m),d},[])};try{K.displayName="Spaces",K.__docgenInfo={description:"",displayName:"Spaces",props:{query:{defaultValue:null,description:"Override the default thanos query.",name:"query",required:!1,type:{name:"string"}},variables:{defaultValue:{value:"{ types: ['PAYERSPACE'] }"},description:`Override the default variables used in the thanos query. Default: { types: [PAYERSPACE] }.
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
Useful for if you already have the spaces in your app and don't want the spaces provider to have to fetch them again.`,name:"spaces",required:!1,type:{name:"Space[]"}}}}}catch{}try{V.displayName="useSpaces",V.__docgenInfo={description:"",displayName:"useSpaces",props:{}}}catch{}export{K as S,V as a,w as b,te as u};
