import{j as l}from"./jsx-runtime-BTJTZTIL.js";import{r as _}from"./index-BgYLq7fD.js";import{h as z}from"./index-DdNunzh7.js";import{i as ie}from"./index-DuRQpI0H.js";import{b as H,D as oe,a as se,d as le}from"./index-g8KIT1P4.js";import{B as Y}from"./index-k9OtkSpc.js";import{q as Q}from"./index-DLKRbc4C.js";import{i as de}from"./index-DJKl12U0.js";import{d as pe}from"./dayjs.min-CfWDS3UC.js";import{R as ue,I as ce,u as me}from"./Img-B45hvfNA.js";import{C as J}from"./index-D95KORoo.js";import{G as ye,B as fe}from"./index-DmY_4rvh.js";import{T as ge}from"./index-ClMemn8c.js";const _e={SPACES:(e,{spaces:a,spacesByConfig:t,spacesByPayer:i})=>({previousSpacesMap:a,previousSpacesByConfigMap:t,previousSpacesByPayerMap:i,error:void 0,loading:!1}),ERROR:(e,{error:a})=>({...e,loading:!1,error:a}),LOADING:(e,{loading:a})=>({...e,loading:a!==void 0?a:!e.loading})},Ie=(e,a)=>{const{type:t}=a;return _e[t](e,a)},L=async({query:e,clientId:a,variables:t,operationName:i})=>{const o={};a&&(o["X-Client-ID"]=a);const{data:{data:{configurationPagination:s}}}=await z.create({query:e,variables:{...t},operationName:i||"PuiSpacesCmpAnonymousOperation"},{headers:{...o}}),{pageInfo:{currentPage:n,hasNextPage:d},items:p}=s;return{items:p,currentPage:n,hasNextPage:d}},N=async({query:e,clientId:a,variables:t,_spaces:i=[],operationName:o})=>{const{items:s,currentPage:n,hasNextPage:d}=await L({query:e,clientId:a,variables:t,operationName:o});if(i.push(...s),d){const p={...t,page:n+1};return N({query:e,clientId:a,variables:p,_spaces:i,operationName:o})}return i};try{L.displayName="fetchSpaces",L.__docgenInfo={description:"",displayName:"fetchSpaces",props:{query:{defaultValue:null,description:"The query sent to the avWebQL endpoint.",name:"query",required:!0,type:{name:"string"}},clientId:{defaultValue:null,description:"The Client ID obtained from APIConnect.",name:"clientId",required:!1,type:{name:"string"}},variables:{defaultValue:null,description:"The variables sent to the avWebQL endpoint.",name:"variables",required:!1,type:{name:"object"}},page:{defaultValue:null,description:"The page sent to the avWebQL endpoint.",name:"page",required:!1,type:{name:"string"}},operationName:{defaultValue:null,description:`Name for the GraphQL operation, used for debugging and monitoring.

Format: \`{ValueStream || PayerName}{AbbreviatedAppName}{Description}{Type}\` (PascalCase)
@example "OnbPsFavoritesQuery"`,name:"operationName",required:!1,type:{name:"string"}}}}}catch{}try{N.displayName="fetchAllSpaces",N.__docgenInfo={description:"",displayName:"fetchAllSpaces",props:{query:{defaultValue:null,description:"The query sent to the avWebQL endpoint.",name:"query",required:!0,type:{name:"string"}},clientId:{defaultValue:null,description:"The Client ID obtained from APIConnect.",name:"clientId",required:!1,type:{name:"string"}},variables:{defaultValue:null,description:"The variables sent to the avWebQL endpoint.",name:"variables",required:!1,type:{name:"Record<string, any>"}},_spaces:{defaultValue:{value:"[]"},description:"Array of spaces to be passed into the Spaces provider.",name:"_spaces",required:!1,type:{name:"Space[]"}},operationName:{defaultValue:null,description:`Name for the GraphQL operation, used for debugging and monitoring.

Format: \`{ValueStream || PayerName}{AbbreviatedAppName}{Description}{Type}\` (PascalCase)
@example "OnbPsFavoritesQuery"`,name:"operationName",required:!1,type:{name:"string"}}}}}catch{}const he=`query configurationFindMany($ids: [String!], $payerIDs: [ID!], $types: [TypeEnum!], $page: Int) {
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
}`,W=(e,a,t)=>{const[i,o]=e.split("?"),s=Q.parse(o),n=t&&{[a]:t},d=Q.stringify({...s,...n},{sort:(p,f)=>p.localeCompare(f)});return`${i}?${d}`},Se=(e="",a,t)=>e,M=e=>{if(e&&!e.startsWith("_")){if(e==="BODY")return"_self";if(e==="TAB")return"_blank"}return e||"_self"},G=e=>typeof e=="function",C=e=>typeof e=="function";try{M.displayName="getTarget",M.__docgenInfo={description:"",displayName:"getTarget",props:{}}}catch{}try{G.displayName="isFunction",G.__docgenInfo={description:"",displayName:"isFunction",props:{}}}catch{}try{C.displayName="isReactNodeFunction",C.__docgenInfo={description:"",displayName:"isReactNodeFunction",props:{}}}catch{}const E={ALLOWED_TYPES:["APPLICATION","RESOURCE","NAVIGATION"],DISALLOWED_TYPES:["reporting","how_to_guide_dental_providers","my_account_profile","my_administrators"],KEYS:{VALUES:"myTopApps",LAST_UPDATED:"top-apps-updated"},UPDATE_EVENT:"av:topApps:updated"},Ae=e=>{try{const a=window.localStorage.getItem(e);return a===null?null:JSON.parse(a)}catch{return null}},Pe=(e,a)=>E.ALLOWED_TYPES.some(t=>t===a)&&!E.DISALLOWED_TYPES.some(t=>t===e),Ee=e=>Ae(`${E.KEYS.VALUES}-${e}`),qe=async(e,a)=>{if(!(!e.configurationId||!e.type)&&Pe(e.configurationId,e.type)){const t=pe(),i=await Ee(a)||{};window.localStorage.setItem(`${E.KEYS.LAST_UPDATED}-${a}`,t.format());const o=i[e.configurationId]&&typeof i[e.configurationId].count=="number"?i[e.configurationId].count:0;i[e.configurationId]={...i==null?void 0:i[e.configurationId],count:o+1,lastUse:t.format()},window.localStorage.setItem(`${E.KEYS.VALUES}-${a}`,JSON.stringify(i)),de.send(E.UPDATE_EVENT)}},Te=`query disclaimerFindOne($id: ID!) {
  configurationFindOne(id: $id) {
    ... on Text {
      description
    }
  }
}`,x=({disclaimerId:e})=>{const[a,t]=_.useState("");return _.useEffect(()=>{(async()=>{if(e){const o=await z.create({query:Te,variables:{id:e}});t(o.data.data.configurationFindOne.description)}})()},[e]),l.jsx(H,{children:a?l.jsx(ue,{children:a}):l.jsx(J,{})})};try{x.displayName="DisclaimerModal",x.__docgenInfo={description:"",displayName:"DisclaimerModal",props:{disclaimerId:{defaultValue:null,description:"",name:"disclaimerId",required:!1,type:{name:"string"}},parentPayerSpaces:{defaultValue:null,description:"",name:"parentPayerSpaces",required:!1,type:{name:"Space[]"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"any"}},setState:{defaultValue:null,description:"",name:"setState",required:!1,type:{name:"any"}}}}}catch{}const R=({spaceId:e,payerId:a,imageType:t="url",fallback:i,Loader:o=J,...s})=>{var q,T,S,c,y,u,A,I,b,D,P;let n;e?n=v(e):a&&(n=v(a));const{loading:d}=ae(),p=e||a||(n==null?void 0:n[0].id)||(n==null?void 0:n[0].configurationId);let m={"images.logo":(T=(q=n==null?void 0:n[0])==null?void 0:q.images)==null?void 0:T.logo,"images.tile":(c=(S=n==null?void 0:n[0])==null?void 0:S.images)==null?void 0:c.tile,"images.billboard":(u=(y=n==null?void 0:n[0])==null?void 0:y.images)==null?void 0:u.billboard,"images.promotional":(I=(A=n==null?void 0:n[0])==null?void 0:A.images)==null?void 0:I.promotional,"images.promotionalHover":(D=(b=n==null?void 0:n[0])==null?void 0:b.images)==null?void 0:D.promotionalHover,url:(P=n==null?void 0:n[0])==null?void 0:P.url}[t];return!m&&d?l.jsx(o,{id:`app-${p}-loading`}):(!m&&!d&&i&&(m=i),!m||!p?null:l.jsx(ce,{id:s.id||`app-img-${p}`,src:m,alt:`Space ${t}`,loader:l.jsx(o,{id:`app-img-${p}-loading`}),...s}))};try{R.displayName="SpacesImage",R.__docgenInfo={description:"",displayName:"SpacesImage",props:{spaceId:{defaultValue:null,description:"",name:"spaceId",required:!1,type:{name:"string"}},payerId:{defaultValue:null,description:"",name:"payerId",required:!1,type:{name:"string"}},imageType:{defaultValue:{value:"url"},description:"",name:"imageType",required:!1,type:{name:'"url" | "images.logo" | "images.tile" | "images.billboard" | "images.promotional" | "images.promotionalHover"'}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},Loader:{defaultValue:null,description:"",name:"Loader",required:!1,type:{name:"({ id }: { id: string; }) => Element"}}}}}catch{}const w=({parentPayerSpaces:e,name:a,state:{selectedOption:t},setState:i})=>l.jsxs(H,{children:[l.jsx(ge,{children:`Open ${a} as: ${t?t.name||t.id:""}`}),l.jsx(ye,{direction:"row",children:e&&e.map(o=>l.jsx(fe,{onClick:()=>i({selectedOption:o}),children:l.jsx(R,{spaceId:o.configurationId,imageType:"images.tile"})}))})]});try{w.displayName="MultiPayerModal",w.__docgenInfo={description:"",displayName:"MultiPayerModal",props:{disclaimerId:{defaultValue:null,description:"",name:"disclaimerId",required:!1,type:{name:"string"}},parentPayerSpaces:{defaultValue:null,description:"",name:"parentPayerSpaces",required:!1,type:{name:"Space[]"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"any"}},setState:{defaultValue:null,description:"",name:"setState",required:!1,type:{name:"any"}}}}}catch{}const j=e=>e.spaceType!==void 0,$=e=>e.selectedOption!==void 0;try{j.displayName="isModalOptions",j.__docgenInfo={description:"",displayName:"isModalOptions",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"any"}},modalOptions:{defaultValue:null,description:"",name:"modalOptions",required:!1,type:{name:"any"}},modalState:{defaultValue:null,description:"",name:"modalState",required:!0,type:{name:"any"}},selectedModal:{defaultValue:null,description:"",name:"selectedModal",required:!1,type:{name:"any"}},disclaimerId:{defaultValue:null,description:"",name:"disclaimerId",required:!1,type:{name:"any"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"any"}},parentPayerSpaces:{defaultValue:null,description:"",name:"parentPayerSpaces",required:!1,type:{name:"any"}},metadata:{defaultValue:null,description:"",name:"metadata",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"any"}},user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"any"}},spaceType:{defaultValue:null,description:"",name:"spaceType",required:!0,type:{name:"any"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"any"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"any"}}}}}catch{}try{$.displayName="isModalState",$.__docgenInfo={description:"",displayName:"isModalState",props:{selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"any"}},disclaimerId:{defaultValue:null,description:"",name:"disclaimerId",required:!1,type:{name:"any"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"any"}},parentPayerSpaces:{defaultValue:null,description:"",name:"parentPayerSpaces",required:!1,type:{name:"any"}},metadata:{defaultValue:null,description:"",name:"metadata",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"any"}},user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"any"}},spaceType:{defaultValue:null,description:"",name:"spaceType",required:!0,type:{name:"any"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"any"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"any"}}}}}catch{}const X={isOpen:!1,modalOptions:void 0,modalState:{selectedOption:{id:"",name:""}},selectedModal:{}},be=_.createContext(null),k={DISCLAIMER:{body:x,buttonProps:()=>({children:"Accept"}),onSubmit:({link:e,id:a})=>{var t;window.open(((t=e.url)==null?void 0:t[0])==="/"?W(e.url,"spaceId",a):e.url,e.target)}},MULTI_PAYER:{body:w,buttonProps:({selectedOption:e})=>({children:"Continue",disabled:e===void 0}),onSubmit:({metadata:e,link:a,id:t,name:i},o,s)=>{if(e!=null&&e.disclaimerId){s({type:"OPEN_DISCLAIMER_MODAL",disclaimerId:e.disclaimerId,link:a,id:t,name:i});return}const n=M(a.target);a.url&&window.open(ie(a.url)?a.url:Se(W(a.url,"spaceId",o.selectedOption.id)),n)}}},V={RESET:()=>X,OPEN_DISCLAIMER_MODAL:(e,a)=>({...e,isOpen:!0,selectedModal:k.DISCLAIMER,modalOptions:{...a,type:a.spaceType}}),OPEN_MULTI_PAYER_MODAL:(e,a)=>({...e,isOpen:!0,selectedModal:k.MULTI_PAYER,modalOptions:{...a,type:a.spaceType}}),UPDATE_MODAL_STATE:(e,a)=>({...e,modalState:a})},De=(e,{type:a,...t})=>{if(a==="RESET")return V.RESET();if(j(t)){if(a==="OPEN_MULTI_PAYER_MODAL")return V.OPEN_MULTI_PAYER_MODAL(e,t);if(a==="OPEN_DISCLAIMER_MODAL")return V.OPEN_DISCLAIMER_MODAL(e,t)}else if($(t)&&a==="UPDATE_MODAL_STATE")return V.UPDATE_MODAL_STATE(e,t);return e},F=({children:e})=>{const[{selectedModal:a,modalOptions:t,modalState:i,isOpen:o},s]=_.useReducer(De,X),n=()=>s({type:"RESET"}),d=(a==null?void 0:a.buttonProps)&&(a==null?void 0:a.buttonProps({...i,modalOptions:t})),p=a==null?void 0:a.body;return l.jsxs(be.Provider,{value:(f,m)=>s({type:`OPEN_${f}`,...m}),children:[l.jsxs(oe,{open:o,children:[l.jsx(se,{id:"disclaimer-header",children:t==null?void 0:t.title}),p&&l.jsx(p,{...t,setState:f=>s({type:"UPDATE_MODAL_STATE",...f}),state:i}),l.jsxs(le,{children:[l.jsx(Y,{onClick:n,children:"Cancel"}),l.jsx(Y,{color:"primary",...d,onClick:()=>{a!=null&&a.onSubmit&&t&&i&&a.onSubmit(t,i,s),t&&qe({configurationId:t.id,type:t.type,name:t.name,id:t.id},t.user),n()}})]})]}),e]})};try{F.displayName="ModalProvider",F.__docgenInfo={description:"",displayName:"ModalProvider",props:{}}}catch{}const Z={loading:!0},ee=_.createContext(Z),ae=()=>_.useContext(ee),K=({query:e=he,variables:a={types:["PAYERSPACE"]},operationName:t,clientId:i,children:o,payerIds:s,spaceIds:n,spaces:d})=>{const[{previousSpacesMap:p,previousSpacesByConfigMap:f,previousSpacesByPayerMap:m,loading:q,error:T},S]=_.useReducer(Ie,Z),c=new Map(p),y=new Map(f),u=new Map(m),A=new Set,I=new Set;if(d&&d.length>0){for(const r of d)if(r.id&&!c.has(r.id)&&c.set(r.id,r),r.configurationId&&!y.has(r.configurationId)&&y.set(r.configurationId,r),r.payerIDs)for(const g of r.payerIDs){const h=u.get(g);h?u.set(g,[...h,r]):u.set(g,[r])}}if(n&&n.length>0)for(const r of n)r&&typeof r=="string"&&r.trim()&&!(c.has(r)||y.has(r))&&A.add(r);if(s&&s.length>0)for(const r of s)r&&typeof r=="string"&&r.trim()&&!u.has(r)&&I.add(r);const b={...a,ids:[...A.keys()]},D={...a,payerIDs:[...I.keys()]},[{data:P,isFetching:te,isError:U},{data:O,isFetching:re,isError:B}]=me({queries:[{queryKey:["id",b],queryFn:()=>N({query:e,clientId:i,variables:b,operationName:t}),enabled:A.size>0},{queryKey:["id",D],queryFn:()=>N({query:e,clientId:i,variables:D,operationName:t}),enabled:I.size>0}]});_.useEffect(()=>{(B||U)&&S({type:"ERROR",error:"Error fetching spaces.",loading:!1})},[B,U]),_.useEffect(()=>{if(S({type:"LOADING",loading:!0}),A.size===0&&I.size===0){S({type:"LOADING",loading:!1});return}if(P){for(const r of P)if(c.has(r.id)||c.set(r.id,r),y.has(r.configurationId)||y.set(r.configurationId,r),r.payerIDs)for(const g of r.payerIDs){const h=u.get(g);h?u.set(g,[...h,r]):u.set(g,[r])}}if(I.size>0&&O){for(const r of O)if(c.has(r.id)||c.set(r.id,r),y.has(r.configurationId)||y.set(r.configurationId,r),r.payerIDs)for(const g of r.payerIDs){const h=u.get(g);h?u.set(g,[...h,r]):u.set(g,[r])}}S({type:"SPACES",spaces:c,spacesByConfig:y,spacesByPayer:u,loading:!1})},[P,O,s,n]);const ne=()=>{if(o)return C(o)?o({spaces:[c.values()],loading:q,error:T}):o};return l.jsx(ee.Provider,{value:{spaces:c,spacesByConfig:y,spacesByPayer:u,loading:q||re||te,error:T},children:l.jsx(F,{children:ne()})})},v=(...e)=>{const{spaces:a,spacesByConfig:t,spacesByPayer:i}=ae(),o=!e||e.length===0,s=(e==null?void 0:e.length)===1&&e[0]===void 0;return o||s?(console.warn("You did not pass in an ID to find a space, returning all spaces."),a&&[...a.values()]):e.reduce((d,p)=>{const f=(a==null?void 0:a.get(p))||(t==null?void 0:t.get(p));if(f)return d.push(f),d;const m=i==null?void 0:i.get(p);if(m)return d.push(...m),d},[])};try{K.displayName="Spaces",K.__docgenInfo={description:"",displayName:"Spaces",props:{query:{defaultValue:null,description:"Override the default thanos query.",name:"query",required:!1,type:{name:"string"}},variables:{defaultValue:{value:"{ types: ['PAYERSPACE'] }"},description:`Override the default variables used in the thanos query. Default: { types: [PAYERSPACE] }.
If the spaces provider should contain configurations of a type other than PAYERSPACE, you must override this prop`,name:"variables",required:!1,type:{name:"object"}},operationName:{defaultValue:null,description:`Name for the GraphQL operation, used for debugging and monitoring.

Format: \`{ValueStream || PayerName}{AbbreviatedAppName}{Description}{Type}\` (PascalCase)
@example "OnbPsFavoritesQuery"`,name:"operationName",required:!1,type:{name:"string"}},clientId:{defaultValue:null,description:"The Client ID obtained from APIConnect.",name:"clientId",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children can be a react child or render prop.",name:"children",required:!1,type:{name:"ReactNode | ((props: any) => ReactNode)"}},payerIds:{defaultValue:null,description:`Array of payerIds the Spaces provider should fetch the spaces for.
Any payerIds already included in spaces will not be fetched again.
Note: If a payerId is associated with more than one payer space, the order in which they are returned should not be relied upon.
If a specific payer space is required, you'll need to filter the list that is returned.`,name:"payerIds",required:!1,type:{name:"string[]"}},spaceIds:{defaultValue:null,description:`Array of spaceIds the Spaces provider should fetch the spaces for.
Any spaceIds already included in spaces will not be fetched again.`,name:"spaceIds",required:!1,type:{name:"string[]"}},spaces:{defaultValue:null,description:`Array of spaces to be passed into the Spaces provider.
Useful for if you already have the spaces in your app and don't want the spaces provider to have to fetch them again.`,name:"spaces",required:!1,type:{name:"Space[]"}}}}}catch{}try{v.displayName="useSpaces",v.__docgenInfo={description:"",displayName:"useSpaces",props:{}}}catch{}export{K as S,v as a,R as b,ae as u};
