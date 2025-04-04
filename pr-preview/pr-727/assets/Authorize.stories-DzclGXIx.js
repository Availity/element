import{j as a}from"./jsx-runtime-CcL-W3nW.js";import{B as P}from"./index-CM5YmQ69.js";import"./index-DcWiA9TO.js";import{e as x,f as I}from"./index-BAj1_MpQ.js";import{u as b,i as T}from"./suspense-BqeUBMhm.js";import{u as j}from"./useQuery-D4UpBS0N.js";import{A as f}from"./Alert-ui2dSBj_.js";import{Q as k}from"./queryClient-CjDmLjqo.js";import"./styled-CF1hcdwO.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./identifier-Dtqimryx.js";import"./generateUtilityClass-CVWqFxsA.js";import"./CircularProgress-D8w9ZPs6.js";import"./memoTheme-D-rVhYRp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-uZUcOW5W.js";import"./___vite-browser-external_commonjs-proxy-DRaEfepn.js";import"./_toKey-MoF_TmUD.js";import"./useBaseQuery-CJ5trF24.js";import"./useSlot-DnkSxE3X.js";import"./resolveComponentProps-Dg20wxiM.js";import"./useForkRef-BVrIj09m.js";import"./createSvgIcon-TketyoFF.js";import"./SvgIcon-DSdWmKAH.js";import"./Close-CpXO-CFZ.js";import"./IconButton-Caxu-qgA.js";import"./useId-DszduLV4.js";import"./ButtonBase-DbVRbsLs.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./isFocusVisible-B8k4qzLc.js";import"./Paper-DXcIEVia.js";import"./useTheme-DUkCvbx_.js";import"./useTheme-C2CrmYKc.js";var R=Object.defineProperty,y=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,g=(e,r,t)=>r in e?R(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,C=(e,r)=>{for(var t in r||(r={}))D.call(r,t)&&g(e,t,r[t]);if(y)for(var t of y(r))F.call(r,t)&&g(e,t,r[t]);return e},m=(e,r,t)=>new Promise((i,n)=>{var u=s=>{try{o(t.next(s))}catch(h){n(h)}},d=s=>{try{o(t.throw(s))}catch(h){n(h)}},o=s=>s.done?i(s.value):Promise.resolve(s.value).then(u,d);o((t=t.apply(e,r)).next())}),Q=e=>m(void 0,null,function*(){var r,t,i;if(e===!0){const n=yield x.getCurrentRegion();return(i=(t=(r=n==null?void 0:n.data)==null?void 0:r.regions)==null?void 0:t[0])==null?void 0:i.id}return e||void 0}),W=(e,r)=>m(void 0,null,function*(){return e?(yield I.getPermissions(e,r)).reduce((i,n)=>(i[n.id]=n,i),{}):{}}),v=(e,r,t,i)=>{if(!e)return!1;let n=!0,u=!0,d=!0;if(t&&(u=e.organizations.some(({id:o})=>o===t)),i&&(n=e.organizations.some(({customerId:o})=>o===i)),r!==void 0){const o=Array.isArray(r)?r:[r];d=o.length===0||o.some(s=>Array.isArray(s)?s.every(h=>e.organizations.some(({resources:l=[]})=>l.some(({id:O})=>`${O}`==`${h}`))):e.organizations.some(({resources:h=[]})=>h.some(({id:l})=>`${l}`==`${s}`)))}return n&&u&&d},N=(e,r,t,i,n)=>m(void 0,null,function*(){if(!e)return!1;e=Array.isArray(e)?e:[e];const u=yield W(e,r);return e.some(o=>Array.isArray(o)?o.every(s=>v(u[s],t,i,n)):v(u[o],t,i,n))}),V=(e,r={},t)=>{const i=b(),{organizationId:n,customerId:u,region:d=!0,resources:o}=r,{data:s=!1,isLoading:h}=j(["useAuthorize",e,d,o,n,u],()=>m(void 0,null,function*(){const l=yield i.fetchQuery(["region"],()=>Q(d));return N(e,l,o,n,u)}),C({enabled:e.length>0},t));return{authorized:s,isLoading:h}},B=V;const p=({loader:e=!0,negate:r=!1,children:t=null,unauthorized:i=null,permissions:n,parameters:u={},queryOptions:d})=>{const{authorized:o,isLoading:s}=B(n,u,d);return s?e?e===!0?a.jsx(P,{blocking:!0}):a.jsx(a.Fragment,{children:e}):null:(o||r)&&!(o&&r)?a.jsx(a.Fragment,{children:t}):a.jsx(a.Fragment,{children:i})};try{p.displayName="Authorize",p.__docgenInfo={description:`Component for showing content based on the user's permissions. Wrap this component around content you only want specific users to see.

The internal \`useAuthorize\` hook utilizes [react-query](https://tanstack.com/query/v4/docs/framework/react/overview) to handle data fetching.
This means you must add a [QueryClientProvider](https://tanstack.com/query/v4/docs/framework/react/reference/QueryClientProvider)
to your app if you do not already have one.

The default setup should cover most use-cases. However, there are 2 query options we recommend looking into
in order to determine what is correct for your app. These settings are \`refetchOnWindowFocus\` and
\`staleTime\`. The first option sets whether the to refetch the query when the window is focused, and
the other is the default marker for how long the query is valid.`,displayName:"Authorize",props:{children:{defaultValue:{value:"null"},description:"The content that renders when the user does have the permissions required.",name:"children",required:!1,type:{name:"ReactNode"}},loader:{defaultValue:{value:"true"},description:"When true, BlockUi is used when loading the permissions. When a node, that node is rendered instead of BlockUi when loading the permissions. When false, nothing is rendered when loading the permissions. Default: true.",name:"loader",required:!1,type:{name:"ReactNode"}},negate:{defaultValue:{value:"false"},description:'Negate the authorization. If the user does have the permissions specified, they are considered "unauthorized" (shown the unauthorized prop content). If the user does not have the permissions specified, they are considered "authorized" (shown the children prop content)',name:"negate",required:!1,type:{name:"boolean"}},unauthorized:{defaultValue:{value:"null"},description:"The content that renders when the user does not have the permissions required.",name:"unauthorized",required:!1,type:{name:"ReactNode"}},permissions:{defaultValue:null,description:`- **string**: The permission ID, eg: '1234'
- **array**: The array can contain Permission ID's as well as other arrays which contain Permission ID's
eg: ['1234', '2345', ['3456', '4567'], ['5678', '6789']]. The items in a nested array indicate
Permission ID's that must all be granted to the user to be considered authorized - they act as an "AND".
The items in the top of the array act as an "OR" - if any are granted to the user, the user is considered
authorized. For example, ['1234', '2345', ['3456', '4567'], ['5678', '6789']] is equivalent to
'1234' || '2345' || ('3456' && '4567') || ('5678' && '6789').`,name:"permissions",required:!0,type:{name:"(string | string[])[]"}},parameters:{defaultValue:{value:"{}"},description:"Additional parameters\n- **`organizationId`**: String. Optional. When present, the permission is validated to ensure it is assigned to the organization.\n- **`customerId`**: String. Optional. When present, the permission is validated to ensure it is assigned to the customer.\n- **`region`**: String or Boolean. Optional. Default: `true`. When a string, the permission is validated to ensure it is assigned in the provided region. When true, the permission is validated to ensure it is assigned in the current region.\n- **`resources`**: (string | string[])[]. Optional.\n - **string**: The Resource ID, eg: `'12345'`\n - **array**: The array can contain Resource ID's as well as other arrays which contain Resource ID's eg: `['12345', '23456', ['34567', '45678'], ['56789', '67890']]`. The items in a nested array indicate the Resource ID's that must _all_ be granted to the user to be considered authorized - they act as an `\"AND\"`. The items in the top of the array act as an `\"OR\"` - if _any_ are granted to the user, the user is considered authorized. For example, `['12345', '23456', ['34567', '45678'], ['56789', '67890']]` is equivalent to `'12345' || '23456' || ('34567' && '45678') || ('56789' && '67890')`.",name:"parameters",required:!1,type:{name:"{ organizationId?: string; customerId?: string; region?: string | boolean; resources?: (string | string[])[]; }"}},queryOptions:{defaultValue:null,description:"React Query Options",name:"queryOptions",required:!1,type:{name:'Omit<UseQueryOptions<boolean, unknown, boolean, (string | boolean | (string | string[])[])[]>, "queryKey" | "queryFn">'}}}}}catch{}const xe={title:"Components/Authorize/Authorize",component:p,tags:["autodocs"],decorators:[e=>a.jsx(T,{client:new k,children:a.jsx(e,{})})],args:{permissions:["1234"],parameters:{organizationId:"1111",region:!0},queryOptions:{refetchOnWindowFocus:!1},unauthorized:"You are not authorized to see this content.",children:"You are authorized to see this content.",negate:!1,loader:!0},argTypes:{children:{control:"text"},unauthorized:{control:"text"}}},c={render:({children:e,unauthorized:r,...t})=>a.jsxs("div",{children:[a.jsx("p",{children:"For this demo, the following permissions are granted: 1234, 2345, 3456, 4567, 5678, 6789. You can use the knobs to see what the component will do when you set the required permissions to various things."}),a.jsx("hr",{}),a.jsx(p,{unauthorized:a.jsx(f,{severity:"error",children:r}),...t,children:a.jsx(f,{severity:"success",children:e})})]})};var z,w,A,_,q;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: ({
    children,
    unauthorized,
    ...args
  }: AuthorizeProps) => <div>
      <p>
        For this demo, the following permissions are granted: 1234, 2345, 3456, 4567, 5678, 6789. You can use the knobs
        to see what the component will do when you set the required permissions to various things.
      </p>
      <hr />
      <Authorize unauthorized={<Alert severity="error">{unauthorized}</Alert>} {...args}>
        <Alert severity="success">{children}</Alert>
      </Authorize>
    </div>
}`,...(A=(w=c.parameters)==null?void 0:w.docs)==null?void 0:A.source},description:{story:"_Demo is for the `Authorize` component. If the `useAuthorize` hook is directly needed it can be found in the [@availity/authorize](https://availity.github.io/availity-react/components/authorize/) package._",...(q=(_=c.parameters)==null?void 0:_.docs)==null?void 0:q.description}}};const Ie=["_Authorize"];export{c as _Authorize,Ie as __namedExportsOrder,xe as default};
