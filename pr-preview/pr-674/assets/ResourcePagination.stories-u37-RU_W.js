import{j as r}from"./jsx-runtime-CcL-W3nW.js";import{B as y}from"./index-Dnj5y9bu.js";import{b as P}from"./index-Cs70mkZF.js";import{L as x,a as v,b as R}from"./index-N2mmRMEy.js";import{P as h}from"./Pagination-DkrA-zO4.js";import{u as b}from"./useQuery-BDmkxaO6.js";import{r as j}from"./index-DcWiA9TO.js";import{Q as I}from"./suspense-gSMUnaCZ.js";import{Q as L}from"./queryClient-mdpH4muO.js";import"./Box-DR5TX31P.js";import"./identifier-CenlGZaM.js";import"./generateUtilityClasses-duJ5YrlI.js";import"./generateUtilityClass-DELP8s2G.js";import"./useTheme-DwYC2ms6.js";import"./extendSxProp-w61GJfY-.js";import"./Grid2-CHb9J3Cd.js";import"./useTheme-Cf-RAc4Y.js";import"./DefaultPropsProvider-LCKMq1Iv.js";import"./styled-CIC6PLSI.js";import"./styled-wZqJTO_n.js";import"./isMuiElement-DAzOCCHH.js";import"./useThemeProps-BAwiOWAz.js";import"./Stack-BPYMGdgv.js";import"./Container-7wpQgvnn.js";import"./index-IdGqEWBr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BXb5JWGK.js";import"./_toKey-MoF_TmUD.js";import"./List-BRpAtMOZ.js";import"./ListItem-CJcz4w1g.js";import"./isHostComponent-DVu5iVWx.js";import"./memoTheme-CIpOTVoB.js";import"./useForkRef-BVrIj09m.js";import"./ListItemText-BZBLOBmg.js";import"./useEnhancedEffect-D2f2tbda.js";import"./ButtonBase-Ctwr4_Dd.js";import"./useTimeout-B8wmcRZV.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./emotion-react.browser.esm-BKUJyPAt.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemTextClasses-DjWz3xcn.js";import"./useSlot-CaH4cQiJ.js";import"./resolveComponentProps-D4XT56l6.js";import"./Typography-Dw3TlP36.js";import"./index-BKNdG2lN.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useThemeProps-CsOQpjjJ.js";import"./PaginationItem-l6hXjE1T.js";import"./index-BDqO7SwG.js";import"./faUser-CAcveCor.js";import"./SvgIcon-DfAk99tL.js";import"./PaginationItem-BQGjWpdu.js";import"./index-nos-0K8U.js";import"./createSvgIcon-BzSwLqYD.js";import"./Pagination-BPOTGBJQ.js";import"./useControlled-WdbyInBW.js";import"./useBaseQuery-NqdwwGPu.js";const w=async({page:e,itemsPerPage:s=10,parameters:i={},getResult:a,resource:t})=>{const o={limit:s,offset:(e-1)*s,...i.params},m=t.addParams(o,i),n=await t.postGet(o,m),u=a||t.getResult,c=(typeof u=="function"?u.call(t,n.data):n.data[u])||n.data;if(!Array.isArray(c))throw new TypeError(`Expected data to be an array but got \`${typeof c}\`. Use the \`getResult\` prop to specify how to get the data from the API response.`);return{items:c,totalCount:n.data.totalCount}},d=({page:e,itemsPerPage:s,parameters:i,getResult:a,resource:t})=>b(["resource",e],()=>w({page:e,itemsPerPage:s,parameters:i,getResult:a,resource:t}));try{d.displayName="useResourcePagination",d.__docgenInfo={description:"",displayName:"useResourcePagination",props:{page:{defaultValue:null,description:"",name:"page",required:!0,type:{name:"number"}},getResult:{defaultValue:null,description:'When a function, the function is called with the response body from the API call and is expected to return an array containing the list of items for the page. When a string, the string is expected to be a simple key used to get the value from the response. ("simple" means dot notation is not supported for grabbing values from nested objects. If your result is deeply nested, provide a function)',name:"getResult",required:!0,type:{name:"string | ((result: TData) => unknown[])"}},itemsPerPage:{defaultValue:{value:"10"},description:"If array, defaults `totalCount` to the length of the array, and page values are sliced from the Array. If a function, it is called with the current page as an argument and expects an array of items to be returned.",name:"itemsPerPage",required:!1,type:{name:"number"}},parameters:{defaultValue:{value:"{}"},description:"Object use to create querystring parameters in the request.",name:"parameters",required:!1,type:{name:"{ params?: Record<string, unknown>; } & Record<string, unknown>"}},resource:{defaultValue:null,description:"Availity API resource (see [@availity/api-axios](https://github.com/Availity/sdk-js/tree/master/packages/api-axios)).",name:"resource",required:!0,type:{name:"Resource<TData>"}}}}}catch{}const Ee={title:"Components/Pagination/useResourcePagination",component:h,tags:["autodocs"],decorators:[e=>r.jsx(I,{client:new L,children:r.jsx(e,{})})],args:{count:10}},p={render:()=>{var t;const[e,s]=j.useState(1),i=10,a=d({page:e,resource:P,getResult:o=>o.organizations,itemsPerPage:i});return a.isLoading?r.jsx("div",{children:"Loading..."}):a.data?r.jsxs(y,{children:[r.jsx(x,{children:(t=a.data)==null?void 0:t.items.map(o=>r.jsx(v,{children:r.jsx(R,{primary:o.name,secondary:o.customerId})}))}),r.jsx(h,{page:e,count:Math.ceil(Math.abs(a.data.totalCount/i)),onChange:(o,m)=>s(m)})]}):r.jsx("div",{children:"Error"})}};var l,g,f;p.parameters={...p.parameters,docs:{...(l=p.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;
    const resp = useResourcePagination({
      page,
      resource: avOrganizationsApi,
      getResult: result => result.organizations,
      itemsPerPage
    });
    if (resp.isLoading) {
      return <div>Loading...</div>;
    }
    return resp.data ? <Box>
        <List>
          {resp.data?.items.map(item => <ListItem>
              <ListItemText primary={item.name} secondary={item.customerId} />
            </ListItem>)}
        </List>
        <Pagination page={page} count={Math.ceil(Math.abs(resp.data.totalCount / itemsPerPage))} onChange={(event, newPage) => setPage(newPage)} />
      </Box> : <div>Error</div>;
  }
}`,...(f=(g=p.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const ke=["_useResourcePagination"];export{ke as __namedExportsOrder,p as _useResourcePagination,Ee as default};
