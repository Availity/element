import{j as a,a as $}from"./jsx-runtime-390e5fc8.js";import{M as W,P as H}from"./PaginationItem-7c5535d8.js";import{r as J}from"./index-570b25c1.js";import{b as K,g as Q,s as j,c as X,a as Y}from"./styled-2191822d.js";import{c as Z}from"./useThemeProps-66ab754c.js";import{u as ee}from"./useControlled-9b1271e0.js";import{G as o}from"./Grid-e31ff0b5.js";import"./index-8974340d.js";import"./faCircleArrowRight-32490c46.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-644454bc.js";import"./useTheme-c775f3da.js";import"./LastPage-f057786b.js";import"./createSvgIcon-cafa5f0c.js";import"./ButtonBase-121cbb7f.js";import"./emotion-react.browser.esm-d7d6545d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./_commonjsHelpers-042e6b4d.js";import"./extendSxProp-564f0963.js";function te(n){return K("MuiPagination",n)}Q("MuiPagination",["root","ul","outlined","text"]);function ae(n={}){const{boundaryCount:e=1,componentName:s="usePagination",count:r=1,defaultPage:T=1,disabled:h=!1,hideNextButton:b=!1,hidePrevButton:N=!1,onChange:x,page:v,showFirstButton:y=!1,showLastButton:q=!1,siblingCount:d=1,...M}=n,[l,P]=ee({controlled:v,default:T,name:s,state:"page"}),p=(t,i)=>{v||P(i),x&&x(t,i)},c=(t,i)=>{const L=i-t+1;return Array.from({length:L},(ue,D)=>t+D)},_=c(1,Math.min(e,r)),m=c(Math.max(r-e+1,e+1),r),g=Math.max(Math.min(l-d,r-e-d*2-1),e+2),f=Math.min(Math.max(l+d,e+d*2+2),m.length>0?m[0]-2:r-1),I=[...y?["first"]:[],...N?[]:["previous"],..._,...g>e+2?["start-ellipsis"]:e+1<r-e?[e+1]:[],...c(g,f),...f<r-e-1?["end-ellipsis"]:r-e>e?[r-e]:[],...m,...b?[]:["next"],...q?["last"]:[]],w=t=>{switch(t){case"first":return 1;case"previous":return l-1;case"next":return l+1;case"last":return r;default:return null}};return{items:I.map(t=>typeof t=="number"?{onClick:i=>{p(i,t)},type:"page",page:t,selected:t===l,disabled:h,"aria-current":t===l?"true":void 0}:{onClick:i=>{p(i,w(t))},type:t,page:w(t),selected:!1,disabled:h||t.indexOf("ellipsis")===-1&&(t==="next"||t==="last"?l>=r:l<=1)}),...M}}const ne=n=>{const{classes:e,variant:s}=n;return Y({root:["root",s],ul:["ul"]},te,e)},re=j("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:s}=n;return[e.root,e[s.variant]]}})({}),ie=j("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(n,e)=>e.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function oe(n,e,s){return n==="page"?`${s?"":"Go to "}page ${e}`:`Go to ${n} page`}const se=J.forwardRef(function(e,s){const r=Z({props:e,name:"MuiPagination"}),{boundaryCount:T=1,className:h,color:b="standard",count:N=1,defaultPage:x=1,disabled:v=!1,getItemAriaLabel:y=oe,hideNextButton:q=!1,hidePrevButton:d=!1,onChange:M,page:l,renderItem:P=i=>a(W,{...i}),shape:p="circular",showFirstButton:c=!1,showLastButton:_=!1,siblingCount:m=1,size:g="medium",variant:f="text",...I}=r,{items:w}=ae({...r,componentName:"Pagination"}),B={...r,boundaryCount:T,color:b,count:N,defaultPage:x,disabled:v,getItemAriaLabel:y,hideNextButton:q,hidePrevButton:d,renderItem:P,shape:p,showFirstButton:c,showLastButton:_,siblingCount:m,size:g,variant:f},t=ne(B);return a(re,{"aria-label":"pagination navigation",className:X(t.root,h),ownerState:B,ref:s,...I,children:a(ie,{className:t.ul,ownerState:B,children:w.map((i,L)=>a("li",{children:P({...i,color:b,"aria-label":y(i.type,i.page,i.selected),shape:p,size:g,variant:f})},L))})})}),le=se,u=({...n})=>a(le,{...n,renderItem:e=>a(H,{...e})});try{u.displayName="Pagination",u.__docgenInfo={description:"",displayName:"Pagination",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<PaginationClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},onChange:{defaultValue:null,description:`Callback fired when the page is changed.
@param event The event source of the callback.
@param page The page selected.`,name:"onChange",required:!1,type:{name:"(event: ChangeEvent<unknown>, page: number) => void"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},page:{defaultValue:null,description:"The current page.",name:"page",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"'text'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"text" | "outlined"'}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.",name:"size",required:!1,type:{name:'"small" | "large" | "medium"'}},getItemAriaLabel:{defaultValue:null,description:`Accepts a function which returns a string value that provides a user-friendly name for the current page.
This is important for screen reader users.

For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
@param type The link or button type to format ('page' | 'first' | 'last' | 'next' | 'previous'). Defaults to 'page'.
@param page The page number to format.
@param selected If true, the current page is selected.
@returns`,name:"getItemAriaLabel",required:!1,type:{name:'(type: "page" | "first" | "last" | "next" | "previous", page: number, selected: boolean) => string'}},boundaryCount:{defaultValue:{value:"1"},description:"Number of always visible pages at the beginning and end.",name:"boundaryCount",required:!1,type:{name:"number"}},componentName:{defaultValue:null,description:"The name of the component where this hook is used.",name:"componentName",required:!1,type:{name:"string"}},count:{defaultValue:{value:"1"},description:"The total number of pages.",name:"count",required:!1,type:{name:"number"}},defaultPage:{defaultValue:{value:"1"},description:"The page selected by default when the component is uncontrolled.",name:"defaultPage",required:!1,type:{name:"number"}},hideNextButton:{defaultValue:{value:"false"},description:"If `true`, hide the next-page button.",name:"hideNextButton",required:!1,type:{name:"boolean"}},hidePrevButton:{defaultValue:{value:"false"},description:"If `true`, hide the previous-page button.",name:"hidePrevButton",required:!1,type:{name:"boolean"}},showFirstButton:{defaultValue:{value:"false"},description:"If `true`, show the first-page button.",name:"showFirstButton",required:!1,type:{name:"boolean"}},showLastButton:{defaultValue:{value:"false"},description:"If `true`, show the last-page button.",name:"showLastButton",required:!1,type:{name:"boolean"}},siblingCount:{defaultValue:{value:"1"},description:"Number of always visible pages before and after the current page.",name:"siblingCount",required:!1,type:{name:"number"}}}}}catch{}const Ie={title:"Components/Pagination/Pagination",component:u,tags:["autodocs"],args:{count:10},argTypes:{size:{table:{defaultValue:{summary:"determined by Theme"}}}}},C={render:n=>a(u,{...n})},G={render:()=>$(o,{container:!0,spacing:1,children:[a(o,{item:!0,xs:2,children:"Text"}),a(o,{item:!0,xs:10,children:a(u,{variant:"text",count:10,"aria-label":"text pagination"})}),a(o,{item:!0,xs:2,children:"Outlined"}),a(o,{item:!0,xs:10,children:a(u,{variant:"outlined",count:10,"aria-label":"outlined pagination"})})]})},V={render:()=>$(o,{container:!0,spacing:1,children:[a(o,{item:!0,xs:2,children:"Text"}),a(o,{item:!0,xs:10,children:a(u,{variant:"text","aria-label":"text pagination",count:10,boundaryCount:0,hideNextButton:!0,hidePrevButton:!0,showFirstButton:!0,showLastButton:!0})}),a(o,{item:!0,xs:2,children:"Outlined"}),a(o,{item:!0,xs:10,children:a(u,{variant:"outlined","aria-label":"outlined pagination",count:10,boundaryCount:0,hideNextButton:!0,hidePrevButton:!0,showFirstButton:!0,showLastButton:!0})})]})};var S,F,k;C.parameters={...C.parameters,docs:{...(S=C.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: PaginationProps) => <Pagination {...args} />
}`,...(k=(F=C.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var z,O,A;G.parameters={...G.parameters,docs:{...(z=G.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(A=(O=G.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var R,U,E;V.parameters={...V.parameters,docs:{...(R=V.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(E=(U=V.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};const Le=["_Pagination","_Variants","_FirstLast"];export{V as _FirstLast,C as _Pagination,G as _Variants,Le as __namedExportsOrder,Ie as default};
//# sourceMappingURL=Pagination.stories-2e6fa5ef.js.map
