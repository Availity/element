import{j as u}from"./jsx-runtime-CcL-W3nW.js";import{r as f}from"./index-DcWiA9TO.js";import{s as O}from"./index-DMWJB0MK.js";import{d as G}from"./index-CbnB3Kvf.js";import{u as Z}from"./useQuery-D4UpBS0N.js";import{S as Y,I as $,n as K,J as ee,u as V,f as te,K as re,i as ie}from"./suspense-BqeUBMhm.js";import{g as se,Q as oe}from"./queryClient-CjDmLjqo.js";import{T as ne}from"./Tooltip-CiiaKkqp.js";import{g as L,q as H}from"./index-4AU0IlPL.js";import{C as ae}from"./index-CgN_Fp17.js";import{s as C}from"./styled-CF1hcdwO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B-wyh3_N.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./index-BXb5JWGK.js";import"./_toKey-MoF_TmUD.js";import"./useBaseQuery-CJ5trF24.js";import"./generateUtilityClass-CVWqFxsA.js";import"./identifier-Dtqimryx.js";import"./index-nos-0K8U.js";import"./useTheme-DUkCvbx_.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./useTheme-C2CrmYKc.js";import"./memoTheme-D-rVhYRp.js";import"./useSlot-DnkSxE3X.js";import"./resolveComponentProps-Dg20wxiM.js";import"./useForkRef-BVrIj09m.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./getReactElementRef-AnOffBoZ.js";import"./Portal-CBAx_nZm.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BAIpVL6Y.js";import"./isFocusVisible-B8k4qzLc.js";import"./faCircleArrowRight-BeBmJtPK.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./SvgIcon-DSdWmKAH.js";import"./index-BtPDELIe.js";import"./Typography-CvSvtD2a.js";import"./index-f0Aa_BgU.js";import"./extendSxProp-B5AgUjQT.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Stack-BcsM4Vc0.js";import"./styled-vBjI3IQc.js";import"./useThemeProps-BIK-1DKm.js";import"./CircularProgress-D8w9ZPs6.js";import"./LinearProgress-aFncvf6g.js";import"./Box-DWnb8VZB.js";class ue extends Y{constructor(t,r){super(),this.client=t,this.setOptions(r),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var r;const i=this.options;this.options=this.client.defaultMutationOptions(t),$(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(r=this.currentMutation)==null||r.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const r={listeners:!0};t.type==="success"?r.onSuccess=!0:t.type==="error"&&(r.onError=!0),this.notify(r)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,r){return this.mutateOptions=r,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:se(),r={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=r}notify(t){K.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var r,i,o,s;(r=(i=this.mutateOptions).onSuccess)==null||r.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(s=this.mutateOptions).onSettled)==null||o.call(s,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var n,c,a,d;(n=(c=this.mutateOptions).onError)==null||n.call(c,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(a=(d=this.mutateOptions).onSettled)==null||a.call(d,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(({listener:h})=>{h(this.currentResult)})})}}function le(e,t,r){const i=ee(e,t,r),o=V({context:i.context}),[s]=f.useState(()=>new ue(o,i));f.useEffect(()=>{s.setOptions(i)},[s,i]);const n=te(f.useCallback(a=>s.subscribe(K.batchCalls(a)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),c=f.useCallback((a,d)=>{s.mutate(a,d).catch(ce)},[s]);if(n.error&&re(s.options.useErrorBoundary,[n.error]))throw n.error;return{...n,mutate:c,mutateAsync:n.mutate}}function ce(){}var de=Object.defineProperty,pe=Object.defineProperties,ve=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,N=(e,t,r)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,fe=(e,t)=>{for(var r in t||(t={}))B.call(t,r)&&N(e,r,t[r]);if(R)for(var r of R(t))X.call(t,r)&&N(e,r,t[r]);return e},me=(e,t)=>pe(e,ve(t)),he=(e,t)=>{var r={};for(var i in e)B.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&R)for(var i of R(e))t.indexOf(i)<0&&X.call(e,i)&&(r[i]=e[i]);return r},ye=e=>{const t=e,{children:r,dangerouslySetTransitionTimer:i}=t,o=he(t,["children","dangerouslySetTransitionTimer"]);return u.jsx(ne,me(fe({},o),{TransitionProps:{timeout:i!==void 0?i:100},arrow:!0,children:r}))};const be=60,M="Gateway-AvNavigation",P={FAVORITES_UPDATE:"av:favorites:update",FAVORITES_CHANGED:"av:favorites:changed",MAX_FAVORITES:"av:favorites:maxed"},Fe=e=>typeof(e==null?void 0:e.id)=="string"&&typeof(e==null?void 0:e.pos)=="number",ge=e=>Array.isArray(e)?e==null?void 0:e.filter(Fe):[],_e=async({favorites:e,targetFavoriteId:t},r)=>({favorites:(await G.setApplication(r,{favorites:e})).data.favorites,targetFavoriteId:t}),xe=async e=>{var o,s,n;const t=await G.getApplication(e),r=(n=(s=(o=t==null?void 0:t.data)==null?void 0:o.settings)==null?void 0:s[0])==null?void 0:n.favorites;return ge(r)},we=(e,t)=>Z(["favorites"],()=>xe(t),{enabled:e}),Se=({onMutationStart:e},t)=>{const r=V(),{mutateAsync:i,...o}=le(({favorites:s,targetFavoriteId:n})=>_e({favorites:s,targetFavoriteId:n},t),{onMutate(s){e==null||e(s.targetFavoriteId)},onSuccess(s){r.setQueryData(["favorites"],s.favorites)}});return{submitFavorites:i,...o}},k=(e,t)=>{t===M&&O.send({favorites:e,event:P.FAVORITES_UPDATE})},Ae=e=>e===M?O.send(P.MAX_FAVORITES):null,J=f.createContext(null),j=({children:e,onFavoritesChange:t,onMaxFavoritesReached:r,settingsFavorites:i,settingsStatus:o,applicationId:s=M,maxFavorites:n=be})=>{const[c,a]=f.useState(""),d=V(),{data:h,status:_}=we(!o,s),l=o?i:h,S=o||_,{submitFavorites:b,status:A}=Se({onMutationStart(v){a(v)}},s);f.useEffect(()=>{const m=(()=>{if(s===M){const x=O.subscribe(P.FAVORITES_CHANGED,p=>{p!=null&&p.favorites&&d.setQueryData(["favorites"],p==null?void 0:p.favorites)},{ignoreSameWindow:!1}),w=O.subscribe(P.FAVORITES_UPDATE,p=>{p!=null&&p.favorites&&d.setQueryData(["favorites"],p==null?void 0:p.favorites)},{ignoreSameWindow:!1});return()=>{x(),w()}}})();return()=>{m&&m()}},[d,s]);const F=async v=>{if(l){const m=await b({favorites:l.filter(x=>x.id!==v),targetFavoriteId:v});k(m.favorites,s),t==null||t(m.favorites)}},y=async v=>{if(!l)return!1;if(l.length>=n)return Ae(s),r&&typeof r=="function"&&await r(l),!1;const m=l.reduce((g,q)=>((!g||q.pos>g.pos)&&(g=q),g),null),x=m?m.pos+1:0,w=await b({favorites:[...l,{id:v,pos:x}],targetFavoriteId:v});return k(w.favorites,s),t==null||t(w.favorites),!!w.favorites.find(g=>g.id===v)};return u.jsx(J.Provider,{value:{favorites:l,queryStatus:S,mutationStatus:A,lastClickedFavoriteId:c,deleteFavorite:F,addFavorite:y},children:e})},Ee=()=>{},D=e=>{const t=f.useContext(J);if(t===null)throw new Error("useFavorites must be used within a FavoritesProvider");const{favorites:r,queryStatus:i,mutationStatus:o,lastClickedFavoriteId:s,deleteFavorite:n,addFavorite:c}=t,a=s===e,d=f.useMemo(()=>!!(r==null?void 0:r.find(b=>b.id===e)),[r,e]),h=()=>d?n(e):c(e),_=i==="loading"||i==="idle"||o==="loading";let l="initLoading";return i==="loading"&&(l="initLoading"),i==="reloading"&&(l="reloading"),o==="loading"&&(l="reloading"),(i==="error"||o==="error")&&(l="error"),i==="success"&&(o==="success"||o==="idle")&&(l="success"),{isFavorited:d,status:l,isLastClickedFavorite:a,toggleFavorite:_?Ee:h}};try{j.displayName="FavoritesProvider",j.__docgenInfo={description:"",displayName:"FavoritesProvider",props:{onFavoritesChange:{defaultValue:null,description:"",name:"onFavoritesChange",required:!1,type:{name:"(favorites: Favorite[]) => void"}},onMaxFavoritesReached:{defaultValue:null,description:"",name:"onMaxFavoritesReached",required:!1,type:{name:"(favorites: Favorite[]) => void"}},settingsFavorites:{defaultValue:null,description:"",name:"settingsFavorites",required:!1,type:{name:"Favorite[]"}},settingsStatus:{defaultValue:null,description:"",name:"settingsStatus",required:!1,type:{name:"StatusUnion"}},applicationId:{defaultValue:{value:"Gateway-AvNavigation"},description:"",name:"applicationId",required:!1,type:{name:"string"}},maxFavorites:{defaultValue:{value:"60"},description:"",name:"maxFavorites",required:!1,type:{name:"number"}}}}}catch{}try{D.displayName="useFavorites",D.__docgenInfo={description:"",displayName:"useFavorites",props:{}}}catch{}const Oe={spinner:u.jsx(ae,{"aria-hidden":!0,size:"small",loadingCaption:!1}),unknownDisabledHeart:u.jsx(H,{"aria-hidden":!0,color:"disabled"}),favoritedDisabledHeart:u.jsx(H,{"aria-hidden":!0,color:"error",opacity:"0.6"}),unfavoritedDisabledHeart:u.jsx(L,{"aria-hidden":!0,color:"disabled",opacity:"0.6"}),favoritedHeart:u.jsx(H,{"aria-hidden":!0,color:"error"}),unfavoritedHeart:u.jsx(L,{"aria-hidden":!0,color:"secondary"})},T="2.5rem",Re=C("div",{name:"AvFavoriteHeart",slot:"Root"})(({customSize:e})=>({height:e,width:e})),Q=C("input",{name:"AvFavoriteHeart",slot:"input"})(({customSize:e})=>({height:e,width:e,minHeight:e,minWidth:e})),Me=(e=T)=>{const t=e.match(/^(\d*\.?\d+)(px|rem)$/);if(!t)throw new Error("Invalid size format. Must be in 'px' or 'rem'.");const[,r,i]=t;return`${parseFloat(r)/2}${i}`},Pe=C("div",{name:"AvFavoriteHeart",slot:"icon"})(({customSize:e})=>({fontSize:Me(e)})),Ie=e=>{const t=e.match(/^(\d*\.?\d+)(px|rem)$/);if(!t)return!1;const[,r,i]=t,o=parseFloat(r);return i==="rem"&&o>=1.5?!0:i==="px"&&o>=24},I=({id:e,name:t,onChange:r,onMouseDown:i,disabled:o=!1,customSize:s=T})=>{const{isFavorited:n,isLastClickedFavorite:c,status:a,toggleFavorite:d}=D(e),h=y=>{r==null||r(n,y),d()},_=y=>{(y.code==="Enter"||y.key==="Enter")&&(r==null||r(n,y),d())},l=a==="initLoading"?"unknownDisabledHeart":a==="reloading"?c?"spinner":n?"favoritedDisabledHeart":"unfavoritedDisabledHeart":o?n?"favoritedDisabledHeart":"unfavoritedDisabledHeart":n?"favoritedHeart":"unfavoritedHeart",S=o||!c&&(a==="initLoading"||a==="reloading")?"not-allowed":void 0,b=`${n?"Remove from":"Add to"} My Favorites`,A={onKeyDown:_,type:"checkbox","aria-label":`Favorite ${t}`,id:`av-favorite-heart-${e}`,disabled:o,checked:n,onChange:h,onMouseDown:i,style:{cursor:S}},F=Ie(s)?s:T;return u.jsxs(Re,{customSize:F,children:[u.jsx(Pe,{customSize:F,children:Oe[l]}),u.jsx("span",{style:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0},"aria-live":c&&(a==="reloading"||a==="error")?"polite":"off",children:c&&a==="reloading"?"Loading...":c&&a==="error"?"An error has occurred. Please try again.":""}),o?u.jsx(Q,{customSize:F,...A}):u.jsx(ye,{title:b,placement:"top",children:u.jsx(Q,{customSize:F,...A})})]})};try{I.displayName="FavoriteHeart",I.__docgenInfo={description:"",displayName:"FavoriteHeart",props:{id:{defaultValue:null,description:"The configuration's id",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"The name of the configuration",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"What to do on Favorite Toggle",name:"onChange",required:!1,type:{name:"(isFavorited: boolean, event: any) => void"}},onMouseDown:{defaultValue:null,description:"What to do on click",name:"onMouseDown",required:!1,type:{name:"(event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void"}},disabled:{defaultValue:{value:"false"},description:"Whether or not the Favorite is disabled",name:"disabled",required:!1,type:{name:"boolean"}},customSize:{defaultValue:{value:"2.5rem"},description:"The size of the icon in rem or px, minimum size is 1.5rem / 24px",name:"customSize",required:!1,type:{name:"string"}}}}}catch{}const Vt={title:"Components/Favorites/Favorites",component:I},He=[{id:"123",pos:0,name:"App #1"},{id:"456",pos:0,name:"A retired app"},{id:"789",pos:0,name:"Another retired app"}],E={render:()=>u.jsx(ie,{client:new oe({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),children:u.jsx(j,{children:He.map(e=>u.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[u.jsx(I,{id:e.id,name:e.name,disabled:e.name.includes("retired")}),u.jsx("div",{children:e.name})]},e.id))})})};var U,z,W;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    return <QueryClientProvider client={new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false
        }
      }
    })}>
        <FavoritesProvider>
          {storyFavorites.map(fav => <div style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center'
        }} key={fav.id}>
              <FavoriteHeart id={fav.id} name={fav.name} disabled={fav.name.includes('retired')} />
              <div>{fav.name}</div>
            </div>)}
        </FavoritesProvider>
      </QueryClientProvider>;
  }
}`,...(W=(z=E.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};const Ct=["_FavoriteHeart"];export{E as _FavoriteHeart,Ct as __namedExportsOrder,Vt as default};
