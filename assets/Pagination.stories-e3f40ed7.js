import{j as a,a as j}from"./jsx-runtime-390e5fc8.js";import{M as D,P as H}from"./PaginationItem-9c4912a0.js";import{r as J}from"./index-570b25c1.js";import{b as K,g as Q,s as A,c as X,a as Y}from"./styled-52ae1682.js";import{c as Z}from"./useThemeProps-09701b40.js";import{u as ee}from"./useControlled-9b1271e0.js";import{G as o}from"./Grid-1323b00c.js";import"./index-b20b939a.js";import"./faCircleArrowRight-a712a312.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-33a08535.js";import"./useTheme-a833130b.js";import"./LastPage-89b3c5a3.js";import"./createSvgIcon-cde3b626.js";import"./ButtonBase-d82e3f0a.js";import"./emotion-react.browser.esm-7b849601.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./_commonjsHelpers-042e6b4d.js";import"./extendSxProp-5906c526.js";function te(n){return K("MuiPagination",n)}Q("MuiPagination",["root","ul","outlined","text"]);function ae(n={}){const{boundaryCount:e=1,componentName:s="usePagination",count:i=1,defaultPage:V=1,disabled:h=!1,hideNextButton:b=!1,hidePrevButton:q=!1,onChange:x,page:P,showFirstButton:v=!1,showLastButton:_=!1,siblingCount:d=1,...S}=n,[l,y]=ee({controlled:P,default:V,name:s,state:"page"}),p=(t,r)=>{P||y(r),x&&x(t,r)},c=(t,r)=>{const L=r-t+1;return Array.from({length:L},(ue,W)=>t+W)},T=c(1,Math.min(e,i)),m=c(Math.max(i-e+1,e+1),i),g=Math.max(Math.min(l-d,i-e-d*2-1),e+2),f=Math.min(Math.max(l+d,e+d*2+2),m.length>0?m[0]-2:i-1),M=[...v?["first"]:[],...q?[]:["previous"],...T,...g>e+2?["start-ellipsis"]:e+1<i-e?[e+1]:[],...c(g,f),...f<i-e-1?["end-ellipsis"]:i-e>e?[i-e]:[],...m,...b?[]:["next"],..._?["last"]:[]],w=t=>{switch(t){case"first":return 1;case"previous":return l-1;case"next":return l+1;case"last":return i;default:return null}};return{items:M.map(t=>typeof t=="number"?{onClick:r=>{p(r,t)},type:"page",page:t,selected:t===l,disabled:h,"aria-current":t===l?"true":void 0}:{onClick:r=>{p(r,w(t))},type:t,page:w(t),selected:!1,disabled:h||t.indexOf("ellipsis")===-1&&(t==="next"||t==="last"?l>=i:l<=1)}),...S}}const ne=n=>{const{classes:e,variant:s}=n;return Y({root:["root",s],ul:["ul"]},te,e)},ie=A("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:s}=n;return[e.root,e[s.variant]]}})({}),re=A("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(n,e)=>e.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function oe(n,e,s){return n==="page"?`${s?"":"Go to "}page ${e}`:`Go to ${n} page`}const se=J.forwardRef(function(e,s){const i=Z({props:e,name:"MuiPagination"}),{boundaryCount:V=1,className:h,color:b="standard",count:q=1,defaultPage:x=1,disabled:P=!1,getItemAriaLabel:v=oe,hideNextButton:_=!1,hidePrevButton:d=!1,onChange:S,page:l,renderItem:y=r=>a(D,{...r}),shape:p="circular",showFirstButton:c=!1,showLastButton:T=!1,siblingCount:m=1,size:g="medium",variant:f="text",...M}=i,{items:w}=ae({...i,componentName:"Pagination"}),B={...i,boundaryCount:V,color:b,count:q,defaultPage:x,disabled:P,getItemAriaLabel:v,hideNextButton:_,hidePrevButton:d,renderItem:y,shape:p,showFirstButton:c,showLastButton:T,siblingCount:m,size:g,variant:f},t=ne(B);return a(ie,{"aria-label":"pagination navigation",className:X(t.root,h),ownerState:B,ref:s,...M,children:a(re,{className:t.ul,ownerState:B,children:w.map((r,L)=>a("li",{children:y({...r,color:b,"aria-label":v(r.type,r.page,r.selected),shape:p,size:g,variant:f})},L))})})}),le=se,u=({...n})=>a(le,{...n,renderItem:e=>a(H,{...e})});try{u.displayName="Pagination",u.__docgenInfo={description:"",displayName:"Pagination",props:{size:{defaultValue:{value:"'determined by theme'"},description:"The size of the component",name:"size",required:!1,type:{name:'"large" | "medium"'}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<PaginationClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},onChange:{defaultValue:null,description:`Callback fired when the page is changed.
@param event The event source of the callback.
@param page The page selected.`,name:"onChange",required:!1,type:{name:"(event: ChangeEvent<unknown>, page: number) => void"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},page:{defaultValue:null,description:"The current page.",name:"page",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"'text'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"text" | "outlined"'}},boundaryCount:{defaultValue:{value:"1"},description:"Number of always visible pages at the beginning and end.",name:"boundaryCount",required:!1,type:{name:"number"}},componentName:{defaultValue:null,description:"The name of the component where this hook is used.",name:"componentName",required:!1,type:{name:"string"}},count:{defaultValue:{value:"1"},description:"The total number of pages.",name:"count",required:!1,type:{name:"number"}},defaultPage:{defaultValue:{value:"1"},description:"The page selected by default when the component is uncontrolled.",name:"defaultPage",required:!1,type:{name:"number"}},hideNextButton:{defaultValue:{value:"false"},description:"If `true`, hide the next-page button.",name:"hideNextButton",required:!1,type:{name:"boolean"}},hidePrevButton:{defaultValue:{value:"false"},description:"If `true`, hide the previous-page button.",name:"hidePrevButton",required:!1,type:{name:"boolean"}},showFirstButton:{defaultValue:{value:"false"},description:"If `true`, show the first-page button.",name:"showFirstButton",required:!1,type:{name:"boolean"}},showLastButton:{defaultValue:{value:"false"},description:"If `true`, show the last-page button.",name:"showLastButton",required:!1,type:{name:"boolean"}},siblingCount:{defaultValue:{value:"1"},description:"Number of always visible pages before and after the current page.",name:"siblingCount",required:!1,type:{name:"number"}}}}}catch{}const Le={title:"Components/Pagination/Pagination",component:u,tags:["autodocs"],args:{count:10}},C={render:n=>a(u,{...n})},G={render:()=>j(o,{container:!0,spacing:1,children:[a(o,{item:!0,xs:2,children:"Text"}),a(o,{item:!0,xs:10,children:a(u,{variant:"text",count:10,"aria-label":"text pagination"})}),a(o,{item:!0,xs:2,children:"Outlined"}),a(o,{item:!0,xs:10,children:a(u,{variant:"outlined",count:10,"aria-label":"outlined pagination"})})]})},N={render:()=>j(o,{container:!0,spacing:1,children:[a(o,{item:!0,xs:2,children:"Text"}),a(o,{item:!0,xs:10,children:a(u,{variant:"text","aria-label":"text pagination",count:10,boundaryCount:0,hideNextButton:!0,hidePrevButton:!0,showFirstButton:!0,showLastButton:!0})}),a(o,{item:!0,xs:2,children:"Outlined"}),a(o,{item:!0,xs:10,children:a(u,{variant:"outlined","aria-label":"outlined pagination",count:10,boundaryCount:0,hideNextButton:!0,hidePrevButton:!0,showFirstButton:!0,showLastButton:!0})})]})};var I,F,k;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args: PaginationProps) => <Pagination {...args} />
}`,...(k=(F=C.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var O,R,U;G.parameters={...G.parameters,docs:{...(O=G.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid item xs={2}>
        Text
      </Grid>
      <Grid item xs={10}>
        <Pagination variant="text" count={10} aria-label="text pagination" />
      </Grid>
      <Grid item xs={2}>
        Outlined
      </Grid>
      <Grid item xs={10}>
        <Pagination variant="outlined" count={10} aria-label="outlined pagination" />
      </Grid>
    </Grid>
}`,...(U=(R=G.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var z,E,$;N.parameters={...N.parameters,docs:{...(z=N.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Grid container spacing={1}>
      <Grid item xs={2}>
        Text
      </Grid>
      <Grid item xs={10}>
        <Pagination variant="text" aria-label="text pagination" count={10} boundaryCount={0} hideNextButton hidePrevButton showFirstButton showLastButton />
      </Grid>
      <Grid item xs={2}>
        Outlined
      </Grid>
      <Grid item xs={10}>
        <Pagination variant="outlined" aria-label="outlined pagination" count={10} boundaryCount={0} hideNextButton hidePrevButton showFirstButton showLastButton />
      </Grid>
    </Grid>
}`,...($=(E=N.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};const Se=["_Pagination","_Variants","_FirstLast"];export{N as _FirstLast,C as _Pagination,G as _Variants,Se as __namedExportsOrder,Le as default};
//# sourceMappingURL=Pagination.stories-e3f40ed7.js.map