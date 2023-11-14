import{j as a,a as A}from"./jsx-runtime-390e5fc8.js";import{M as J,P as K}from"./PaginationItem-eb0f2353.js";import{b as E,_ as m}from"./createTheme-e6b56ddb.js";import{r as Q}from"./index-570b25c1.js";import{c as X}from"./clsx-8416b751.js";import{u as Y}from"./useThemeProps-285a8f6c.js";import{g as Z,s as W,c as ee}from"./styled-78cd751f.js";import{g as te}from"./generateUtilityClasses-2915a045.js";import{u as ae}from"./useControlled-9b1271e0.js";import{G as r}from"./Grid-e557fe35.js";import"./index-d2e63b55.js";import"./faCircleArrowRight-5066acd3.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-f3e07af8.js";import"./useTheme-b3699c65.js";import"./LastPage-92c52e7e.js";import"./createSvgIcon-c7fbf131.js";import"./ButtonBase-6abe7f0b.js";import"./emotion-react.browser.esm-69a15469.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./_commonjsHelpers-042e6b4d.js";import"./extendSxProp-4d42c058.js";function ne(n){return Z("MuiPagination",n)}te("MuiPagination",["root","ul","outlined","text"]);const oe=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function ie(n={}){const{boundaryCount:e=1,componentName:s="usePagination",count:o=1,defaultPage:L=1,disabled:b=!1,hideNextButton:x=!1,hidePrevButton:T=!1,onChange:P,page:v,showFirstButton:y=!1,showLastButton:I=!1,siblingCount:c=1}=n,B=E(n,oe),[i,M]=ae({controlled:v,default:L,name:s,state:"page"}),w=(t,l)=>{v||M(l),P&&P(t,l)},g=(t,l)=>{const D=l-t+1;return Array.from({length:D},(me,H)=>t+H)},C=g(1,Math.min(e,o)),p=g(Math.max(o-e+1,e+1),o),G=Math.max(Math.min(i-c,o-e-c*2-1),e+2),N=Math.min(Math.max(i+c,e+c*2+2),p.length>0?p[0]-2:o-1),h=[...y?["first"]:[],...T?[]:["previous"],...C,...G>e+2?["start-ellipsis"]:e+1<o-e?[e+1]:[],...g(G,N),...N<o-e-1?["end-ellipsis"]:o-e>e?[o-e]:[],...p,...x?[]:["next"],...I?["last"]:[]],f=t=>{switch(t){case"first":return 1;case"previous":return i-1;case"next":return i+1;case"last":return o;default:return null}},u=h.map(t=>typeof t=="number"?{onClick:l=>{w(l,t)},type:"page",page:t,selected:t===i,disabled:b,"aria-current":t===i?"true":void 0}:{onClick:l=>{w(l,f(t))},type:t,page:f(t),selected:!1,disabled:b||t.indexOf("ellipsis")===-1&&(t==="next"||t==="last"?i>=o:i<=1)});return m({items:u},B)}const re=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],se=n=>{const{classes:e,variant:s}=n;return ee({root:["root",s],ul:["ul"]},ne,e)},ue=W("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:s}=n;return[e.root,e[s.variant]]}})({}),le=W("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(n,e)=>e.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function de(n,e,s){return n==="page"?`${s?"":"Go to "}page ${e}`:`Go to ${n} page`}const ce=Q.forwardRef(function(e,s){const o=Y({props:e,name:"MuiPagination"}),{boundaryCount:L=1,className:b,color:x="standard",count:T=1,defaultPage:P=1,disabled:v=!1,getItemAriaLabel:y=de,hideNextButton:I=!1,hidePrevButton:c=!1,renderItem:B=u=>a(J,m({},u)),shape:i="circular",showFirstButton:M=!1,showLastButton:w=!1,siblingCount:g=1,size:C="medium",variant:p="text"}=o,G=E(o,re),{items:N}=ie(m({},o,{componentName:"Pagination"})),h=m({},o,{boundaryCount:L,color:x,count:T,defaultPage:P,disabled:v,getItemAriaLabel:y,hideNextButton:I,hidePrevButton:c,renderItem:B,shape:i,showFirstButton:M,showLastButton:w,siblingCount:g,size:C,variant:p}),f=se(h);return a(ue,m({"aria-label":"pagination navigation",className:X(f.root,b),ownerState:h,ref:s},G,{children:a(le,{className:f.ul,ownerState:h,children:N.map((u,t)=>a("li",{children:B(m({},u,{color:x,"aria-label":y(u.type,u.page,u.selected),shape:i,size:C,variant:p}))},t))})}))}),pe=ce,d=({...n})=>a(pe,{...n,renderItem:e=>a(K,{...e})});try{d.displayName="Pagination",d.__docgenInfo={description:"",displayName:"Pagination",props:{size:{defaultValue:{value:"'determined by theme'"},description:"The size of the component",name:"size",required:!1,type:{name:'"large" | "medium"'}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<PaginationClasses>"}},onChange:{defaultValue:null,description:`Callback fired when the page is changed.
@param event The event source of the callback.
@param page The page selected.`,name:"onChange",required:!1,type:{name:"(event: ChangeEvent<unknown>, page: number) => void"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},page:{defaultValue:null,description:"The current page.",name:"page",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"'text'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"text" | "outlined"'}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},boundaryCount:{defaultValue:{value:"1"},description:"Number of always visible pages at the beginning and end.",name:"boundaryCount",required:!1,type:{name:"number"}},componentName:{defaultValue:null,description:"The name of the component where this hook is used.",name:"componentName",required:!1,type:{name:"string"}},count:{defaultValue:{value:"1"},description:"The total number of pages.",name:"count",required:!1,type:{name:"number"}},defaultPage:{defaultValue:{value:"1"},description:"The page selected by default when the component is uncontrolled.",name:"defaultPage",required:!1,type:{name:"number"}},hideNextButton:{defaultValue:{value:"false"},description:"If `true`, hide the next-page button.",name:"hideNextButton",required:!1,type:{name:"boolean"}},hidePrevButton:{defaultValue:{value:"false"},description:"If `true`, hide the previous-page button.",name:"hidePrevButton",required:!1,type:{name:"boolean"}},showFirstButton:{defaultValue:{value:"false"},description:"If `true`, show the first-page button.",name:"showFirstButton",required:!1,type:{name:"boolean"}},showLastButton:{defaultValue:{value:"false"},description:"If `true`, show the last-page button.",name:"showLastButton",required:!1,type:{name:"boolean"}},siblingCount:{defaultValue:{value:"1"},description:"Number of always visible pages before and after the current page.",name:"siblingCount",required:!1,type:{name:"number"}}}}}catch{}const $e={title:"Components/Pagination/Pagination",component:d,tags:["autodocs"],args:{count:10}},_={render:n=>a(d,{...n})},V={render:()=>A(r,{container:!0,spacing:1,children:[a(r,{item:!0,xs:2,children:"Text"}),a(r,{item:!0,xs:10,children:a(d,{variant:"text",count:10,"aria-label":"text pagination"})}),a(r,{item:!0,xs:2,children:"Outlined"}),a(r,{item:!0,xs:10,children:a(d,{variant:"outlined",count:10,"aria-label":"outlined pagination"})})]})},q={render:()=>A(r,{container:!0,spacing:1,children:[a(r,{item:!0,xs:2,children:"Text"}),a(r,{item:!0,xs:10,children:a(d,{variant:"text","aria-label":"text pagination",count:10,boundaryCount:0,hideNextButton:!0,hidePrevButton:!0,showFirstButton:!0,showLastButton:!0})}),a(r,{item:!0,xs:2,children:"Outlined"}),a(r,{item:!0,xs:10,children:a(d,{variant:"outlined","aria-label":"outlined pagination",count:10,boundaryCount:0,hideNextButton:!0,hidePrevButton:!0,showFirstButton:!0,showLastButton:!0})})]})};var S,F,k;_.parameters={..._.parameters,docs:{...(S=_.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: PaginationProps) => <Pagination {...args} />
}`,...(k=(F=_.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var O,R,U;V.parameters={...V.parameters,docs:{...(O=V.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(U=(R=V.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var z,$,j;q.parameters={...q.parameters,docs:{...(z=q.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(j=($=q.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};const je=["_Pagination","_Variants","_FirstLast"];export{q as _FirstLast,_ as _Pagination,V as _Variants,je as __namedExportsOrder,$e as default};
//# sourceMappingURL=Pagination.stories-9bf75653.js.map
