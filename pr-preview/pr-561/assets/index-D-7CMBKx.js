import{r as h}from"./index-DcWiA9TO.js";import{g as Ae,c as Oe}from"./generateUtilityClass-DELP8s2G.js";import{m as Ee}from"./memoTheme-CIpOTVoB.js";import{g as we}from"./generateUtilityClasses-duJ5YrlI.js";import{j as i}from"./jsx-runtime-CcL-W3nW.js";import{u as Ce}from"./DefaultPropsProvider-LCKMq1Iv.js";import{s as P,c as Te}from"./styled-wZqJTO_n.js";import{c as ee,k as re}from"./emotion-react.browser.esm-BKUJyPAt.js";import{a as je}from"./identifier-CenlGZaM.js";import{n as De,N as Le,v as $e,C as Me,s as ke,t as Fe,u as Re}from"./index-BDqO7SwG.js";import{L as te}from"./index-CiPBGRVX.js";import{B as Be}from"./Breadcrumbs-l26cLo1F.js";import{T as ae}from"./Typography-Dw3TlP36.js";import{P as Ne,T as Ue,a as Ve}from"./index-hUX0pu0s.js";import{B as F,I as oe,L as We}from"./index-DSGElAqY.js";import{g as Ye,e as qe,h as ie}from"./index-Cs70mkZF.js";import{T as He}from"./index-D69ufRNP.js";import{G as w,B as ne}from"./index-Dnj5y9bu.js";import{d as ze}from"./index-BlC5JLGo.js";import{u as Ke,C as Ge}from"./index.esm-D1k4U55D.js";import{T as se}from"./index-Bssefeeu.js";import{C as Qe}from"./Container-7wpQgvnn.js";import{i as Xe}from"./index-BXb5JWGK.js";import{u as Je,I as Ze,D as er,a as rr,b as tr,c as le,R as ar}from"./Img-BRsSMGxO.js";import{q as z}from"./index-IdGqEWBr.js";import{s as or}from"./index-DMWJB0MK.js";import{d as ir}from"./dayjs.min-DnLU8EWa.js";import{C as de}from"./index-Cg_05TkR.js";import"./index-N2mmRMEy.js";import"./index-kGPPnYNC.js";import{L as nr}from"./Link-CD8unT-S.js";function sr(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function lr(e){return parseFloat(e)}function dr(e){return Ae("MuiSkeleton",e)}we("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const cr=e=>{const{classes:r,variant:t,animation:a,hasChildren:o,width:n,height:d}=e;return Te({root:["root",t,a,o&&"withChildren",o&&!n&&"fitContent",o&&!d&&"heightAuto"]},dr,r)},V=re`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,W=re`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,pr=typeof V!="string"?ee`
        animation: ${V} 2s ease-in-out 0.5s infinite;
      `:null,ur=typeof W!="string"?ee`
        &::after {
          animation: ${W} 2s linear 0.5s infinite;
        }
      `:null,fr=P("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],t.animation!==!1&&r[t.animation],t.hasChildren&&r.withChildren,t.hasChildren&&!t.width&&r.fitContent,t.hasChildren&&!t.height&&r.heightAuto]}})(Ee(({theme:e})=>{const r=sr(e.shape.borderRadius)||"px",t=lr(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:je(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${t}${r}/${Math.round(t/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:a})=>a.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:a})=>a.hasChildren&&!a.width,style:{maxWidth:"fit-content"}},{props:({ownerState:a})=>a.hasChildren&&!a.height,style:{height:"auto"}},{props:{animation:"pulse"},style:pr||{animation:`${V} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:ur||{"&::after":{animation:`${W} 2s linear 0.5s infinite`}}}]}})),Lt=h.forwardRef(function(r,t){const a=Ce({props:r,name:"MuiSkeleton"}),{animation:o="pulse",className:n,component:d="span",height:c,style:s,variant:p="text",width:m,...y}=a,b={...a,animation:o,component:d,variant:p,hasChildren:!!y.children},g=cr(b);return i.jsx(fr,{as:d,ref:t,className:Oe(g.root,n),ownerState:b,...y,style:{width:m,height:c,...s}})});var mr=Object.defineProperty,vr=Object.defineProperties,gr=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,K=(e,r,t)=>r in e?mr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,k=(e,r)=>{for(var t in r||(r={}))ce.call(r,t)&&K(e,t,r[t]);if(R)for(var t of R(r))pe.call(r,t)&&K(e,t,r[t]);return e},ue=(e,r)=>vr(e,gr(r)),hr=(e,r)=>{var t={};for(var a in e)ce.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&R)for(var a of R(e))r.indexOf(a)<0&&pe.call(e,a)&&(t[a]=e[a]);return t},yr=({name:e,url:r,target:t="_top",LinkProps:a})=>{const o={"aria-label":e,children:e};return r?i.jsx(te,ue(k(k({},o),a),{href:r,target:t})):i.jsx(ae,k({},o))},$t=e=>{var r=e,{active:t,children:a,crumbs:o,emptyState:n="...",homeUrl:d="/public/apps/dashboard",LinkProps:c}=r,s=hr(r,["active","children","crumbs","emptyState","homeUrl","LinkProps"]);return i.jsxs(Be,ue(k({},s),{separator:i.jsx(Le,{fontSize:"xsmall"}),slotProps:{collapsedIcon:{className:"breadcrumbs__collapsed-icon"}},slots:{CollapsedIcon:De},"aria-label":s["aria-label"]||"breadcrumbs",children:[i.jsx(te,{"aria-label":"Home",href:d,loadApp:!1,children:"Home"}),o&&o.length>0&&o.map(({name:p=n,url:m,target:y})=>i.jsx(yr,{name:p,url:m,target:y,LinkProps:c},p)),a,i.jsx(ae,{children:t||n})]}))};h.createContext(null);var br="2.5rem";P("div",{name:"AvFavoriteHeart",slot:"Root"})(({customSize:e})=>({height:e,width:e}));P("input",{name:"AvFavoriteHeart",slot:"input"})(({customSize:e})=>({height:e,width:e,minHeight:e,minWidth:e}));var _r=(e=br)=>{const r=e.match(/^(\d*\.?\d+)(px|rem)$/);if(!r)throw new Error("Invalid size format. Must be in 'px' or 'rem'.");const[,t,a]=r;return`${parseFloat(t)/2}${a}`};P("div",{name:"AvFavoriteHeart",slot:"icon"})(({customSize:e})=>({fontSize:_r(e)}));var Ir=Object.defineProperty,Sr=Object.defineProperties,Pr=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,fe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable,G=(e,r,t)=>r in e?Ir(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,$=(e,r)=>{for(var t in r||(r={}))fe.call(r,t)&&G(e,t,r[t]);if(B)for(var t of B(r))me.call(r,t)&&G(e,t,r[t]);return e},Y=(e,r)=>Sr(e,Pr(r)),ve=(e,r)=>{var t={};for(var a in e)fe.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&B)for(var a of B(e))r.indexOf(a)<0&&me.call(e,a)&&(t[a]=e[a]);return t},xr=(e,r,t)=>new Promise((a,o)=>{var n=s=>{try{c(t.next(s))}catch(p){o(p)}},d=s=>{try{c(t.throw(s))}catch(p){o(p)}},c=s=>s.done?a(s.value):Promise.resolve(s.value).then(n,d);c((t=t.apply(e,r)).next())}),Ar=P(Ue,{name:"AvFeedbackContainer",slot:"SmileButtons"})({}),Or=P(w,{name:"AvFeedbackContainer",slot:"FormActions"})({}),Er=e=>{var r=e,{disabled:t,Icon:a,label:o,value:n}=r,d=ve(r,["disabled","Icon","label","value"]);return i.jsx("div",{children:i.jsx(Ve,Y($({component:oe,disableRipple:!0,title:o,"aria-label":n,value:n},d),{disabled:t,size:"large",children:i.jsx(a,{})}))})},wr=({analytics:e,appName:r,handleClose:t,loading:a,sent:o,setLoading:n,setSent:d})=>{var c;const{control:s,formState:{errors:p},handleSubmit:m,register:y,setValue:b,watch:g}=Ke(),_=S=>xr(void 0,null,function*(){var u=S,{smileField:x}=u,T=ve(u,["smileField"]);n(!0);try{const D=yield qe.getCurrentRegion();yield e.info($({surveyId:`${r.replace(/\s/g,"_")}_Smile_Survey`,smileLocation:`${r}`,smile:`icon-${x}`,url:window.location.href,region:D.data.regions[0]&&D.data.regions[0].id,userAgent:window.navigator.userAgent,submitTime:new Date},T)),d(!0),n(!1)}catch{d(!1),n(!1)}});h.useEffect(()=>{o&&setTimeout(()=>{t()},2e3)},[o]);const v=[{Icon:ke,label:"What do you like?",value:"smile"},{Icon:Fe,label:"What would you improve?",value:"meh"},{Icon:Re,label:"What don't you like?",value:"frown"}],A=g("smileField"),E=()=>{const S=v.find(u=>u.value===A);return(S==null?void 0:S.label)||"What would you improve?"};return o?null:i.jsxs(w,{component:"form",container:!0,sx:{justifyContent:"center"},onSubmit:m(_),"aria-label":"Feedback Form","aria-describedby":"feedback-form-header",children:[i.jsx(Ge,{control:s,name:"smileField",render:({field:S})=>i.jsx(Ar,Y($({children:v.map((u,x)=>i.jsx(Er,$({autoFocus:x===0,disabled:a},u),u.value))},S),{"aria-labelledby":"feedback-form-header",onChange:(u,x)=>{b(S.name,x)},size:"medium",exclusive:!0}))}),i.jsx(He,Y($({},y("feedback",{required:"This field is required",maxLength:{value:200,message:"This field must not exceed 200 characters"}})),{fullWidth:!0,multiline:!0,minRows:3,maxRows:3,label:E(),InputLabelProps:{component:ze,required:!0},inputProps:{"aria-required":"true"},helperText:((c=p.feedback)==null?void 0:c.message)||"Max 200 characters",error:!!p.feedback,disabled:a||!A})),i.jsxs(Or,{container:!0,direction:"row",width:"100%",spacing:1,wrap:"wrap",children:[i.jsx(w,{sx:{flex:1,minWidth:"147px"},children:i.jsx(F,{color:"secondary",disabled:a,onClick:t,children:"Close"})}),i.jsx(w,{sx:{flex:1,minWidth:"147px"},children:i.jsx(We,{disabled:!A,loading:a,type:"submit",variant:"contained",children:"Send Feedback"})})]})]})},Cr=P(w,{name:"AvFeedbackContainer",slot:"FeedbackHeaderContainer"})({}),Tr=({appName:e,handleClose:r,loading:t,sent:a})=>i.jsxs(Cr,{alignItems:"flex-start",container:!0,direction:"row",justifyContent:"space-between",flexWrap:"nowrap",id:"feedback-form-header",children:[i.jsx(w,{sx:{whiteSpace:"normal"},children:i.jsx(se,{component:"h2",variant:"h5",children:a?"Thank you for your feedback.":`Tell us what you think about ${e}`})}),i.jsx(w,{children:i.jsx(oe,{disabled:t,title:"Close",onClick:r,size:"medium",children:i.jsx(Me,{fontSize:"xsmall"})})})]}),jr=P(Qe,{name:"AvFeedbackContainer",slot:"root"})({}),Dr=P(F,{name:"AvFeedbackButton",slot:"root"})({}),Mt=({analytics:e=Ye,appName:r,buttonVariant:t="secondary"})=>{const[a,o]=h.useState(null),[n,d]=h.useState(!1),[c,s]=h.useState(!1),p=b=>{o(b.currentTarget),d(!1)},m=()=>{o(null)},y=!!a;return i.jsxs(i.Fragment,{children:[i.jsx(Dr,{onClick:p,color:t,startIcon:i.jsx($e,{}),children:"Feedback"}),i.jsx(Ne,{anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"right"},sx:{marginTop:"4px"},disableRestoreFocus:!0,onClose:m,open:y,transformOrigin:{vertical:"top",horizontal:"right"},children:i.jsxs(jr,{children:[i.jsx(Tr,{appName:r,handleClose:m,loading:c,sent:n}),i.jsx(wr,{analytics:e,appName:r,handleClose:m,loading:c,sent:n,setLoading:s,setSent:d})]})})]})},Lr=Object.defineProperty,$r=Object.defineProperties,Mr=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,Q=(e,r,t)=>r in e?Lr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))ge.call(r,t)&&Q(e,t,r[t]);if(N)for(var t of N(r))he.call(r,t)&&Q(e,t,r[t]);return e},I=(e,r)=>$r(e,Mr(r)),ye=(e,r)=>{var t={};for(var a in e)ge.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&N)for(var a of N(e))r.indexOf(a)<0&&he.call(e,a)&&(t[a]=e[a]);return t},U=(e,r,t)=>new Promise((a,o)=>{var n=s=>{try{c(t.next(s))}catch(p){o(p)}},d=s=>{try{c(t.throw(s))}catch(p){o(p)}},c=s=>s.done?a(s.value):Promise.resolve(s.value).then(n,d);c((t=t.apply(e,r)).next())}),kr={SPACES:(e,{spaces:r,spacesByConfig:t,spacesByPayer:a})=>({previousSpacesMap:r,previousSpacesByConfigMap:t,previousSpacesByPayerMap:a,error:void 0,loading:!1}),ERROR:(e,{error:r})=>I(f({},e),{loading:!1,error:r}),LOADING:(e,{loading:r})=>I(f({},e),{loading:r!==void 0?r:!e.loading})},Fr=(e,r)=>{const{type:t}=r;return kr[t](e,r)},Rr=e=>U(void 0,[e],function*({query:r,clientId:t,variables:a}){const o={};t&&(o["X-Client-ID"]=t);const{data:{data:{configurationPagination:n}}}=yield ie.create({query:r,variables:f({},a)},{headers:f({},o)}),{pageInfo:{currentPage:d,hasNextPage:c},items:s}=n;return{items:s,currentPage:d,hasNextPage:c}}),q=e=>U(void 0,[e],function*({query:r,clientId:t,variables:a,_spaces:o=[]}){const{items:n,currentPage:d,hasNextPage:c}=yield Rr({query:r,clientId:t,variables:a});if(o.push(...n),c){const s=I(f({},a),{page:d+1});return q({query:r,clientId:t,variables:s,_spaces:o})}return o}),Br=`query configurationFindMany($ids: [String!], $payerIDs: [ID!], $types: [TypeEnum!]) {
  configurationPagination(filter: { ids: $ids, payerIds: $payerIDs, types: $types }) {
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
}`,X=(e,r,t)=>{const[a,o]=e.split("?"),n=z.parse(o),d=t&&{[r]:t},c=z.stringify(f(f({},n),d),{sort:(s,p)=>s.localeCompare(p)});return`${a}?${c}`},Nr=(e="",r,t)=>e,Ur=e=>{if(e&&!e.startsWith("_")){if(e==="BODY")return"_self";if(e==="TAB")return"_blank"}return e||"_self"},Vr=e=>typeof e=="function",L={ALLOWED_TYPES:["APPLICATION","RESOURCE","NAVIGATION"],DISALLOWED_TYPES:["reporting","how_to_guide_dental_providers","my_account_profile","my_administrators"],KEYS:{VALUES:"myTopApps",LAST_UPDATED:"top-apps-updated"},UPDATE_EVENT:"av:topApps:updated"},Wr=e=>{try{const r=window.localStorage.getItem(e);return r===null?null:JSON.parse(r)}catch{return null}},Yr=(e,r)=>L.ALLOWED_TYPES.some(t=>t===r)&&!L.DISALLOWED_TYPES.some(t=>t===e),qr=e=>Wr(`${L.KEYS.VALUES}-${e}`),Hr=(e,r)=>U(void 0,null,function*(){if(!(!e.configurationId||!e.type)&&Yr(e.configurationId,e.type)){const t=ir(),a=(yield qr(r))||{};window.localStorage.setItem(`${L.KEYS.LAST_UPDATED}-${r}`,t.format());const o=a[e.configurationId]&&typeof a[e.configurationId].count=="number"?a[e.configurationId].count:0;a[e.configurationId]=I(f({},a==null?void 0:a[e.configurationId]),{count:o+1,lastUse:t.format()}),window.localStorage.setItem(`${L.KEYS.VALUES}-${r}`,JSON.stringify(a)),or.send(L.UPDATE_EVENT)}}),zr=`query disclaimerFindOne($id: ID!) {
  configurationFindOne(id: $id) {
    ... on Text {
      description
    }
  }
}`,Kr=({disclaimerId:e})=>{const[r,t]=h.useState("");return h.useEffect(()=>{U(void 0,null,function*(){if(e){const o=yield ie.create({query:zr,variables:{id:e}});t(o.data.data.configurationFindOne.description)}})},[e]),i.jsx(le,{children:r?i.jsx(ar,{children:r}):i.jsx(de,{})})},Gr=e=>{var r=e,{spaceId:t,payerId:a,imageType:o="url",fallback:n,Loader:d=de}=r,c=ye(r,["spaceId","payerId","imageType","fallback","Loader"]),s,p,m,y,b,g,_,v,A,E,S;let u;t?u=Z(t):a&&(u=Z(a));const{loading:x}=Se(),T=t||a||(u==null?void 0:u[0].id)||(u==null?void 0:u[0].configurationId);let C={"images.logo":(p=(s=u==null?void 0:u[0])==null?void 0:s.images)==null?void 0:p.logo,"images.tile":(y=(m=u==null?void 0:u[0])==null?void 0:m.images)==null?void 0:y.tile,"images.billboard":(g=(b=u==null?void 0:u[0])==null?void 0:b.images)==null?void 0:g.billboard,"images.promotional":(v=(_=u==null?void 0:u[0])==null?void 0:_.images)==null?void 0:v.promotional,"images.promotionalHover":(E=(A=u==null?void 0:u[0])==null?void 0:A.images)==null?void 0:E.promotionalHover,url:(S=u==null?void 0:u[0])==null?void 0:S.url}[o];return!C&&x?i.jsx(d,{id:`app-${T}-loading`}):(!C&&!x&&n&&(C=n),!C||!T?null:i.jsx(Ze,f({id:c.id||`app-img-${T}`,src:C,alt:`Space ${o}`,loader:i.jsx(d,{id:`app-img-${T}-loading`})},c)))},Qr=({parentPayerSpaces:e,name:r,state:{selectedOption:t},setState:a})=>i.jsxs(le,{children:[i.jsx(se,{children:`Open ${r} as: ${t?t.name||t.id:""}`}),i.jsx(w,{direction:"row",children:e&&e.map(o=>i.jsx(ne,{onClick:()=>a({selectedOption:o}),children:i.jsx(Gr,{spaceId:o.configurationId,imageType:"images.tile"})}))})]}),Xr=e=>e.spaceType!==void 0,Jr=e=>e.selectedOption!==void 0,be={isOpen:!1,modalOptions:void 0,modalState:{selectedOption:{id:"",name:""}},selectedModal:{}},Zr=h.createContext(null),J={DISCLAIMER:{body:Kr,buttonProps:()=>({children:"Accept"}),onSubmit:({link:e,id:r})=>{var t;window.open(((t=e.url)==null?void 0:t[0])==="/"?X(e.url,"spaceId",r):e.url,e.target)}},MULTI_PAYER:{body:Qr,buttonProps:({selectedOption:e})=>({children:"Continue",disabled:e===void 0}),onSubmit:({metadata:e,link:r,id:t,name:a},o,n)=>{if(e!=null&&e.disclaimerId){n({type:"OPEN_DISCLAIMER_MODAL",disclaimerId:e.disclaimerId,link:r,id:t,name:a});return}const d=Ur(r.target);r.url&&window.open(Xe(r.url)?r.url:Nr(X(r.url,"spaceId",o.selectedOption.id)),d)}}},M={RESET:()=>be,OPEN_DISCLAIMER_MODAL:(e,r)=>I(f({},e),{isOpen:!0,selectedModal:J.DISCLAIMER,modalOptions:I(f({},r),{type:r.spaceType})}),OPEN_MULTI_PAYER_MODAL:(e,r)=>I(f({},e),{isOpen:!0,selectedModal:J.MULTI_PAYER,modalOptions:I(f({},r),{type:r.spaceType})}),UPDATE_MODAL_STATE:(e,r)=>I(f({},e),{modalState:r})},et=(e,r)=>{var t=r,{type:a}=t,o=ye(t,["type"]);if(a==="RESET")return M.RESET();if(Xr(o)){if(a==="OPEN_MULTI_PAYER_MODAL")return M.OPEN_MULTI_PAYER_MODAL(e,o);if(a==="OPEN_DISCLAIMER_MODAL")return M.OPEN_DISCLAIMER_MODAL(e,o)}else if(Jr(o)&&a==="UPDATE_MODAL_STATE")return M.UPDATE_MODAL_STATE(e,o);return e},rt=({children:e})=>{const[{selectedModal:r,modalOptions:t,modalState:a,isOpen:o},n]=h.useReducer(et,be),d=()=>n({type:"RESET"}),c=(r==null?void 0:r.buttonProps)&&(r==null?void 0:r.buttonProps(I(f({},a),{modalOptions:t}))),s=r==null?void 0:r.body;return i.jsxs(Zr.Provider,{value:(p,m)=>n(f({type:`OPEN_${p}`},m)),children:[i.jsxs(er,{open:o,children:[i.jsx(rr,{id:"disclaimer-header",children:t==null?void 0:t.title}),s&&i.jsx(s,I(f({},t),{setState:p=>n(f({type:"UPDATE_MODAL_STATE"},p)),state:a})),i.jsxs(tr,{children:[i.jsx(F,{onClick:d,children:"Cancel"}),i.jsx(F,I(f({color:"primary"},c),{onClick:()=>{r!=null&&r.onSubmit&&t&&a&&r.onSubmit(t,a,n),t&&Hr({configurationId:t.id,type:t.type,name:t.name,id:t.id},t.user),d()}}))]})]}),e]})},_e={loading:!0},Ie=h.createContext(_e),Se=()=>h.useContext(Ie),kt=({query:e=Br,variables:r={types:["PAYERSPACE"]},clientId:t,children:a,payerIds:o,spaceIds:n,spaces:d})=>{const[{previousSpacesMap:c,previousSpacesByConfigMap:s,previousSpacesByPayerMap:p,loading:m,error:y},b]=h.useReducer(Fr,_e),g=new Map(c),_=new Map(s),v=new Map(p),A=new Set,E=new Set;if(d&&d.length>0){for(const l of d)if(l.id&&!g.has(l.id)&&g.set(l.id,l),l.configurationId&&!_.has(l.configurationId)&&_.set(l.configurationId,l),l.payerIDs)for(const O of l.payerIDs){const j=v.get(O);j?v.set(O,[...j,l]):v.set(O,[l])}}if(n&&n.length>0)for(const l of n)g.has(l)||_.has(l)||A.add(l);if(o&&o.length>0)for(const l of o)v.has(l)||E.add(l);const S=I(f({},r),{ids:[...A.keys()]}),u=I(f({},r),{payerIds:[...E.keys()]}),[{data:x,isFetching:T,isError:D},{data:C,isFetching:Pe,isError:H}]=Je({queries:[{queryKey:["id",S],queryFn:()=>q({query:e,clientId:t,variables:S}),enabled:A.size>0},{queryKey:["id",u],queryFn:()=>q({query:e,clientId:t,variables:u}),enabled:E.size>0}]});h.useEffect(()=>{(H||D)&&b({type:"ERROR",error:"Error fetching spaces.",loading:!1})},[H,D]),h.useEffect(()=>{if(b({type:"LOADING",loading:!0}),A.size===0&&E.size===0){b({type:"LOADING",loading:!1});return}if(x){for(const l of x)if(g.has(l.id)||g.set(l.id,l),_.has(l.configurationId)||_.set(l.configurationId,l),l.payerIDs)for(const O of l.payerIDs){const j=v.get(O);j?v.set(O,[...j,l]):v.set(O,[l])}}if(E.size>0&&C){for(const l of C)if(g.has(l.id)||g.set(l.id,l),_.has(l.configurationId)||_.set(l.configurationId,l),l.payerIDs)for(const O of l.payerIDs){const j=v.get(O);j?v.set(O,[...j,l]):v.set(O,[l])}}b({type:"SPACES",spaces:g,spacesByConfig:_,spacesByPayer:v,loading:!1})},[x,C,o,n]);const xe=()=>{if(a)return Vr(a)?a({spaces:[g.values()],loading:m,error:y}):a};return i.jsx(Ie.Provider,{value:{spaces:g,spacesByConfig:_,spacesByPayer:v,loading:m||Pe||T,error:y},children:i.jsx(rt,{children:xe()})})},Z=(...e)=>{const{spaces:r,spacesByConfig:t,spacesByPayer:a}=Se(),o=!e||e.length===0,n=(e==null?void 0:e.length)===1&&e[0]===void 0;return o||n?(console.warn("You did not pass in an ID to find a space, returning all spaces."),r&&[...r.values()]):e.reduce((c,s)=>{const p=(r==null?void 0:r.get(s))||(t==null?void 0:t.get(s));if(p)return c.push(p),c;const m=a==null?void 0:a.get(s);if(m)return c.push(...m),c},[])};P(ne,{name:"AvSpacesLink",slot:"root"})({});P(w,{name:"AvSpacesLink",slot:"AvDateInfo"})({});P(w,{name:"AvSpacesLink",slot:"AvFavoriteHeart"})({});P(nr,{name:"AvSpacesLink",slot:"IconLink"})({});export{$t as B,Mt as F,Gr as S,Lt as a,kt as b};
