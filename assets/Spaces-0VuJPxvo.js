import{j as l}from"./jsx-runtime-BTJTZTIL.js";import{r as _}from"./index-BgYLq7fD.js";import{h as z}from"./index-Dl5t6TV_.js";import{i as ne}from"./index-DuRQpI0H.js";import{b as H,D as ie,a as se,d as oe}from"./index-CdhUifk7.js";import{B as F}from"./index-k9OtkSpc.js";import{q as W}from"./index-DLKRbc4C.js";import{i as le}from"./index-DJKl12U0.js";import{d as de}from"./dayjs.min-CfWDS3UC.js";import{R as pe,I as ce,u as ue}from"./Img-BmvCxabD.js";import{C as J}from"./index-D95KORoo.js";import{G as fe,B as ye}from"./index-DmY_4rvh.js";import{T as me}from"./index-ClMemn8c.js";const ge={SPACES:(e,{spaces:a,spacesByConfig:t,spacesByPayer:n})=>({previousSpacesMap:a,previousSpacesByConfigMap:t,previousSpacesByPayerMap:n,error:void 0,loading:!1}),ERROR:(e,{error:a})=>({...e,loading:!1,error:a}),LOADING:(e,{loading:a})=>({...e,loading:a!==void 0?a:!e.loading})},_e=(e,a)=>{const{type:t}=a;return ge[t](e,a)},O=async({query:e,clientId:a,variables:t})=>{const n={};a&&(n["X-Client-ID"]=a);const{data:{data:{configurationPagination:s}}}=await z.create({query:e,variables:{...t}},{headers:{...n}}),{pageInfo:{currentPage:o,hasNextPage:r},items:d}=s;return{items:d,currentPage:o,hasNextPage:r}},V=async({query:e,clientId:a,variables:t,_spaces:n=[]})=>{const{items:s,currentPage:o,hasNextPage:r}=await O({query:e,clientId:a,variables:t});if(n.push(...s),r){const d={...t,page:o+1};return V({query:e,clientId:a,variables:d,_spaces:n})}return n};try{O.displayName="fetchSpaces",O.__docgenInfo={description:"",displayName:"fetchSpaces",props:{query:{defaultValue:null,description:"The query sent to the avWebQL endpoint.",name:"query",required:!0,type:{name:"string"}},clientId:{defaultValue:null,description:"The Client ID obtained from APIConnect.",name:"clientId",required:!1,type:{name:"string"}},variables:{defaultValue:null,description:"The variables sent to the avWebQL endpoint.",name:"variables",required:!1,type:{name:"object"}},page:{defaultValue:null,description:"The page sent to the avWebQL endpoint.",name:"page",required:!1,type:{name:"string"}}}}}catch{}try{V.displayName="fetchAllSpaces",V.__docgenInfo={description:"",displayName:"fetchAllSpaces",props:{query:{defaultValue:null,description:"The query sent to the avWebQL endpoint.",name:"query",required:!0,type:{name:"string"}},clientId:{defaultValue:null,description:"The Client ID obtained from APIConnect.",name:"clientId",required:!1,type:{name:"string"}},variables:{defaultValue:null,description:"The variables sent to the avWebQL endpoint.",name:"variables",required:!1,type:{name:"Record<string, any>"}},_spaces:{defaultValue:{value:"[]"},description:"Array of spaces to be passed into the Spaces provider.",name:"_spaces",required:!1,type:{name:"Space[]"}}}}}catch{}const Ie=`query configurationFindMany($ids: [String!], $payerIDs: [ID!], $types: [TypeEnum!], $page: Int) {
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
}`,Q=(e,a,t)=>{const[n,s]=e.split("?"),o=W.parse(s),r=t&&{[a]:t},d=W.stringify({...o,...r},{sort:(p,m)=>p.localeCompare(m)});return`${n}?${d}`},he=(e="",a,t)=>e,L=e=>{if(e&&!e.startsWith("_")){if(e==="BODY")return"_self";if(e==="TAB")return"_blank"}return e||"_self"},k=e=>typeof e=="function",C=e=>typeof e=="function";try{L.displayName="getTarget",L.__docgenInfo={description:"",displayName:"getTarget",props:{}}}catch{}try{k.displayName="isFunction",k.__docgenInfo={description:"",displayName:"isFunction",props:{}}}catch{}try{C.displayName="isReactNodeFunction",C.__docgenInfo={description:"",displayName:"isReactNodeFunction",props:{}}}catch{}const P={ALLOWED_TYPES:["APPLICATION","RESOURCE","NAVIGATION"],DISALLOWED_TYPES:["reporting","how_to_guide_dental_providers","my_account_profile","my_administrators"],KEYS:{VALUES:"myTopApps",LAST_UPDATED:"top-apps-updated"},UPDATE_EVENT:"av:topApps:updated"},Se=e=>{try{const a=window.localStorage.getItem(e);return a===null?null:JSON.parse(a)}catch{return null}},Ae=(e,a)=>P.ALLOWED_TYPES.some(t=>t===a)&&!P.DISALLOWED_TYPES.some(t=>t===e),Ee=e=>Se(`${P.KEYS.VALUES}-${e}`),Pe=async(e,a)=>{if(!(!e.configurationId||!e.type)&&Ae(e.configurationId,e.type)){const t=de(),n=await Ee(a)||{};window.localStorage.setItem(`${P.KEYS.LAST_UPDATED}-${a}`,t.format());const s=n[e.configurationId]&&typeof n[e.configurationId].count=="number"?n[e.configurationId].count:0;n[e.configurationId]={...n==null?void 0:n[e.configurationId],count:s+1,lastUse:t.format()},window.localStorage.setItem(`${P.KEYS.VALUES}-${a}`,JSON.stringify(n)),le.send(P.UPDATE_EVENT)}},qe=`query disclaimerFindOne($id: ID!) {
  configurationFindOne(id: $id) {
    ... on Text {
      description
    }
  }
}`,x=({disclaimerId:e})=>{const[a,t]=_.useState("");return _.useEffect(()=>{(async()=>{if(e){const s=await z.create({query:qe,variables:{id:e}});t(s.data.data.configurationFindOne.description)}})()},[e]),l.jsx(H,{children:a?l.jsx(pe,{children:a}):l.jsx(J,{})})};try{x.displayName="DisclaimerModal",x.__docgenInfo={description:"",displayName:"DisclaimerModal",props:{disclaimerId:{defaultValue:null,description:"",name:"disclaimerId",required:!1,type:{name:"string"}},parentPayerSpaces:{defaultValue:null,description:"",name:"parentPayerSpaces",required:!1,type:{name:"Space[]"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"any"}},setState:{defaultValue:null,description:"",name:"setState",required:!1,type:{name:"any"}}}}}catch{}const R=({spaceId:e,payerId:a,imageType:t="url",fallback:n,Loader:s=J,...o})=>{var q,S,f,y,c,A,I,T,D,E,v;let r;e?r=N(e):a&&(r=N(a));const{loading:d}=ae(),p=e||a||(r==null?void 0:r[0].id)||(r==null?void 0:r[0].configurationId);let u={"images.logo":(S=(q=r==null?void 0:r[0])==null?void 0:q.images)==null?void 0:S.logo,"images.tile":(y=(f=r==null?void 0:r[0])==null?void 0:f.images)==null?void 0:y.tile,"images.billboard":(A=(c=r==null?void 0:r[0])==null?void 0:c.images)==null?void 0:A.billboard,"images.promotional":(T=(I=r==null?void 0:r[0])==null?void 0:I.images)==null?void 0:T.promotional,"images.promotionalHover":(E=(D=r==null?void 0:r[0])==null?void 0:D.images)==null?void 0:E.promotionalHover,url:(v=r==null?void 0:r[0])==null?void 0:v.url}[t];return!u&&d?l.jsx(s,{id:`app-${p}-loading`}):(!u&&!d&&n&&(u=n),!u||!p?null:l.jsx(ce,{id:o.id||`app-img-${p}`,src:u,alt:`Space ${t}`,loader:l.jsx(s,{id:`app-img-${p}-loading`}),...o}))};try{R.displayName="SpacesImage",R.__docgenInfo={description:"",displayName:"SpacesImage",props:{spaceId:{defaultValue:null,description:"",name:"spaceId",required:!1,type:{name:"string"}},payerId:{defaultValue:null,description:"",name:"payerId",required:!1,type:{name:"string"}},imageType:{defaultValue:{value:"url"},description:"",name:"imageType",required:!1,type:{name:'"url" | "images.logo" | "images.tile" | "images.billboard" | "images.promotional" | "images.promotionalHover"'}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},Loader:{defaultValue:null,description:"",name:"Loader",required:!1,type:{name:"({ id }: { id: string; }) => Element"}}}}}catch{}const w=({parentPayerSpaces:e,name:a,state:{selectedOption:t},setState:n})=>l.jsxs(H,{children:[l.jsx(me,{children:`Open ${a} as: ${t?t.name||t.id:""}`}),l.jsx(fe,{direction:"row",children:e&&e.map(s=>l.jsx(ye,{onClick:()=>n({selectedOption:s}),children:l.jsx(R,{spaceId:s.configurationId,imageType:"images.tile"})}))})]});try{w.displayName="MultiPayerModal",w.__docgenInfo={description:"",displayName:"MultiPayerModal",props:{disclaimerId:{defaultValue:null,description:"",name:"disclaimerId",required:!1,type:{name:"string"}},parentPayerSpaces:{defaultValue:null,description:"",name:"parentPayerSpaces",required:!1,type:{name:"Space[]"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"any"}},setState:{defaultValue:null,description:"",name:"setState",required:!1,type:{name:"any"}}}}}catch{}const j=e=>e.spaceType!==void 0,$=e=>e.selectedOption!==void 0;try{j.displayName="isModalOptions",j.__docgenInfo={description:"",displayName:"isModalOptions",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"any"}},modalOptions:{defaultValue:null,description:"",name:"modalOptions",required:!1,type:{name:"any"}},modalState:{defaultValue:null,description:"",name:"modalState",required:!0,type:{name:"any"}},selectedModal:{defaultValue:null,description:"",name:"selectedModal",required:!1,type:{name:"any"}},disclaimerId:{defaultValue:null,description:"",name:"disclaimerId",required:!1,type:{name:"any"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"any"}},parentPayerSpaces:{defaultValue:null,description:"",name:"parentPayerSpaces",required:!1,type:{name:"any"}},metadata:{defaultValue:null,description:"",name:"metadata",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"any"}},user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"any"}},spaceType:{defaultValue:null,description:"",name:"spaceType",required:!0,type:{name:"any"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"any"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"any"}}}}}catch{}try{$.displayName="isModalState",$.__docgenInfo={description:"",displayName:"isModalState",props:{selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"any"}},disclaimerId:{defaultValue:null,description:"",name:"disclaimerId",required:!1,type:{name:"any"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"any"}},parentPayerSpaces:{defaultValue:null,description:"",name:"parentPayerSpaces",required:!1,type:{name:"any"}},metadata:{defaultValue:null,description:"",name:"metadata",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"any"}},user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"any"}},spaceType:{defaultValue:null,description:"",name:"spaceType",required:!0,type:{name:"any"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"any"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"any"}}}}}catch{}const X={isOpen:!1,modalOptions:void 0,modalState:{selectedOption:{id:"",name:""}},selectedModal:{}},Te=_.createContext(null),G={DISCLAIMER:{body:x,buttonProps:()=>({children:"Accept"}),onSubmit:({link:e,id:a})=>{var t;window.open(((t=e.url)==null?void 0:t[0])==="/"?Q(e.url,"spaceId",a):e.url,e.target)}},MULTI_PAYER:{body:w,buttonProps:({selectedOption:e})=>({children:"Continue",disabled:e===void 0}),onSubmit:({metadata:e,link:a,id:t,name:n},s,o)=>{if(e!=null&&e.disclaimerId){o({type:"OPEN_DISCLAIMER_MODAL",disclaimerId:e.disclaimerId,link:a,id:t,name:n});return}const r=L(a.target);a.url&&window.open(ne(a.url)?a.url:he(Q(a.url,"spaceId",s.selectedOption.id)),r)}}},b={RESET:()=>X,OPEN_DISCLAIMER_MODAL:(e,a)=>({...e,isOpen:!0,selectedModal:G.DISCLAIMER,modalOptions:{...a,type:a.spaceType}}),OPEN_MULTI_PAYER_MODAL:(e,a)=>({...e,isOpen:!0,selectedModal:G.MULTI_PAYER,modalOptions:{...a,type:a.spaceType}}),UPDATE_MODAL_STATE:(e,a)=>({...e,modalState:a})},De=(e,{type:a,...t})=>{if(a==="RESET")return b.RESET();if(j(t)){if(a==="OPEN_MULTI_PAYER_MODAL")return b.OPEN_MULTI_PAYER_MODAL(e,t);if(a==="OPEN_DISCLAIMER_MODAL")return b.OPEN_DISCLAIMER_MODAL(e,t)}else if($(t)&&a==="UPDATE_MODAL_STATE")return b.UPDATE_MODAL_STATE(e,t);return e},U=({children:e})=>{const[{selectedModal:a,modalOptions:t,modalState:n,isOpen:s},o]=_.useReducer(De,X),r=()=>o({type:"RESET"}),d=(a==null?void 0:a.buttonProps)&&(a==null?void 0:a.buttonProps({...n,modalOptions:t})),p=a==null?void 0:a.body;return l.jsxs(Te.Provider,{value:(m,u)=>o({type:`OPEN_${m}`,...u}),children:[l.jsxs(ie,{open:s,children:[l.jsx(se,{id:"disclaimer-header",children:t==null?void 0:t.title}),p&&l.jsx(p,{...t,setState:m=>o({type:"UPDATE_MODAL_STATE",...m}),state:n}),l.jsxs(oe,{children:[l.jsx(F,{onClick:r,children:"Cancel"}),l.jsx(F,{color:"primary",...d,onClick:()=>{a!=null&&a.onSubmit&&t&&n&&a.onSubmit(t,n,o),t&&Pe({configurationId:t.id,type:t.type,name:t.name,id:t.id},t.user),r()}})]})]}),e]})};try{U.displayName="ModalProvider",U.__docgenInfo={description:"",displayName:"ModalProvider",props:{}}}catch{}const Z={loading:!0},ee=_.createContext(Z),ae=()=>_.useContext(ee),K=({query:e=Ie,variables:a={types:["PAYERSPACE"]},clientId:t,children:n,payerIds:s,spaceIds:o,spaces:r})=>{const[{previousSpacesMap:d,previousSpacesByConfigMap:p,previousSpacesByPayerMap:m,loading:u,error:q},S]=_.useReducer(_e,Z),f=new Map(d),y=new Map(p),c=new Map(m),A=new Set,I=new Set;if(r&&r.length>0){for(const i of r)if(i.id&&!f.has(i.id)&&f.set(i.id,i),i.configurationId&&!y.has(i.configurationId)&&y.set(i.configurationId,i),i.payerIDs)for(const g of i.payerIDs){const h=c.get(g);h?c.set(g,[...h,i]):c.set(g,[i])}}if(o&&o.length>0)for(const i of o)f.has(i)||y.has(i)||A.add(i);if(s&&s.length>0)for(const i of s)c.has(i)||I.add(i);const T={...a,ids:[...A.keys()]},D={...a,payerIds:[...I.keys()]},[{data:E,isFetching:v,isError:B},{data:M,isFetching:te,isError:Y}]=ue({queries:[{queryKey:["id",T],queryFn:()=>V({query:e,clientId:t,variables:T}),enabled:A.size>0},{queryKey:["id",D],queryFn:()=>V({query:e,clientId:t,variables:D}),enabled:I.size>0}]});_.useEffect(()=>{(Y||B)&&S({type:"ERROR",error:"Error fetching spaces.",loading:!1})},[Y,B]),_.useEffect(()=>{if(S({type:"LOADING",loading:!0}),A.size===0&&I.size===0){S({type:"LOADING",loading:!1});return}if(E){for(const i of E)if(f.has(i.id)||f.set(i.id,i),y.has(i.configurationId)||y.set(i.configurationId,i),i.payerIDs)for(const g of i.payerIDs){const h=c.get(g);h?c.set(g,[...h,i]):c.set(g,[i])}}if(I.size>0&&M){for(const i of M)if(f.has(i.id)||f.set(i.id,i),y.has(i.configurationId)||y.set(i.configurationId,i),i.payerIDs)for(const g of i.payerIDs){const h=c.get(g);h?c.set(g,[...h,i]):c.set(g,[i])}}S({type:"SPACES",spaces:f,spacesByConfig:y,spacesByPayer:c,loading:!1})},[E,M,s,o]);const re=()=>{if(n)return C(n)?n({spaces:[f.values()],loading:u,error:q}):n};return l.jsx(ee.Provider,{value:{spaces:f,spacesByConfig:y,spacesByPayer:c,loading:u||te||v,error:q},children:l.jsx(U,{children:re()})})},N=(...e)=>{const{spaces:a,spacesByConfig:t,spacesByPayer:n}=ae(),s=!e||e.length===0,o=(e==null?void 0:e.length)===1&&e[0]===void 0;return s||o?(console.warn("You did not pass in an ID to find a space, returning all spaces."),a&&[...a.values()]):e.reduce((d,p)=>{const m=(a==null?void 0:a.get(p))||(t==null?void 0:t.get(p));if(m)return d.push(m),d;const u=n==null?void 0:n.get(p);if(u)return d.push(...u),d},[])};try{K.displayName="Spaces",K.__docgenInfo={description:"",displayName:"Spaces",props:{query:{defaultValue:null,description:"Override the default thanos query.",name:"query",required:!1,type:{name:"string"}},variables:{defaultValue:{value:"{ types: ['PAYERSPACE'] }"},description:`Override the default variables used in the thanos query. Default: { types: [PAYERSPACE] }.
If the spaces provider should contain configurations of a type other than PAYERSPACE, you must override this prop`,name:"variables",required:!1,type:{name:"object"}},clientId:{defaultValue:null,description:"The Client ID obtained from APIConnect.",name:"clientId",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children can be a react child or render prop.",name:"children",required:!1,type:{name:"ReactNode | ((props: any) => ReactNode)"}},payerIds:{defaultValue:null,description:`Array of payerIds the Spaces provider should fetch the spaces for.
Any payerIds already included in spaces will not be fetched again.
Note: If a payerId is associated with more than one payer space, the order in which they are returned should not be relied upon.
If a specific payer space is required, you'll need to filter the list that is returned.`,name:"payerIds",required:!1,type:{name:"string[]"}},spaceIds:{defaultValue:null,description:`Array of spaceIds the Spaces provider should fetch the spaces for.
Any spaceIds already included in spaces will not be fetched again.`,name:"spaceIds",required:!1,type:{name:"string[]"}},spaces:{defaultValue:null,description:`Array of spaces to be passed into the Spaces provider.
Useful for if you already have the spaces in your app and don't want the spaces provider to have to fetch them again.`,name:"spaces",required:!1,type:{name:"Space[]"}}}}}catch{}try{N.displayName="useSpaces",N.__docgenInfo={description:"",displayName:"useSpaces",props:{}}}catch{}export{K as S,N as a,R as b,ae as u};
