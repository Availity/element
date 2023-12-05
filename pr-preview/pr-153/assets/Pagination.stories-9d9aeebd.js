import{a as e,j as g}from"./jsx-runtime-a3bcee63.js";import{P as x}from"./PaginationItem-9c426924.js";import{M as v}from"./Pagination-5d0fba7b.js";import{G as t}from"./Grid-62fb460c.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8e81bbc6.js";import"./faCircleArrowRight-f69b7367.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-075b1db6.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-98dc6282.js";import"./styled-523cb007.js";import"./generateUtilityClasses-b58f947a.js";import"./PaginationItem-0a0028eb.js";import"./useTheme-c07bb8e7.js";import"./createSvgIcon-ca656bec.js";import"./ButtonBase-44753119.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./useControlled-9b1271e0.js";import"./extendSxProp-b1abb964.js";const a=({...n})=>e(v,{...n,renderItem:b=>e(x,{...b})});try{a.displayName="Pagination",a.__docgenInfo={description:"",displayName:"Pagination",props:{size:{defaultValue:{value:"'determined by theme'"},description:"The size of the component",name:"size",required:!1,type:{name:'"medium" | "large"'}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<PaginationClasses>"}},onChange:{defaultValue:null,description:`Callback fired when the page is changed.
@param event The event source of the callback.
@param page The page selected.`,name:"onChange",required:!1,type:{name:"(event: ChangeEvent<unknown>, page: number) => void"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},page:{defaultValue:null,description:"The current page.",name:"page",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"'text'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"text" | "outlined"'}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},componentName:{defaultValue:null,description:"The name of the component where this hook is used.",name:"componentName",required:!1,type:{name:"string"}},boundaryCount:{defaultValue:{value:"1"},description:"Number of always visible pages at the beginning and end.",name:"boundaryCount",required:!1,type:{name:"number"}},count:{defaultValue:{value:"1"},description:"The total number of pages.",name:"count",required:!1,type:{name:"number"}},defaultPage:{defaultValue:{value:"1"},description:"The page selected by default when the component is uncontrolled.",name:"defaultPage",required:!1,type:{name:"number"}},hideNextButton:{defaultValue:{value:"false"},description:"If `true`, hide the next-page button.",name:"hideNextButton",required:!1,type:{name:"boolean"}},hidePrevButton:{defaultValue:{value:"false"},description:"If `true`, hide the previous-page button.",name:"hidePrevButton",required:!1,type:{name:"boolean"}},showFirstButton:{defaultValue:{value:"false"},description:"If `true`, show the first-page button.",name:"showFirstButton",required:!1,type:{name:"boolean"}},showLastButton:{defaultValue:{value:"false"},description:"If `true`, show the last-page button.",name:"showLastButton",required:!1,type:{name:"boolean"}},siblingCount:{defaultValue:{value:"1"},description:"Number of always visible pages before and after the current page.",name:"siblingCount",required:!1,type:{name:"number"}}}}}catch{}const U={title:"Components/Pagination/Pagination",component:a,tags:["autodocs"],args:{count:10}},i={render:n=>e(a,{...n})},r={render:()=>g(t,{container:!0,spacing:1,children:[e(t,{item:!0,xs:2,children:"Text"}),e(t,{item:!0,xs:10,children:e(a,{variant:"text",count:10,"aria-label":"text pagination"})}),e(t,{item:!0,xs:2,children:"Outlined"}),e(t,{item:!0,xs:10,children:e(a,{variant:"outlined",count:10,"aria-label":"outlined pagination"})})]})},o={render:()=>g(t,{container:!0,spacing:1,children:[e(t,{item:!0,xs:2,children:"Text"}),e(t,{item:!0,xs:10,children:e(a,{variant:"text","aria-label":"text pagination",count:10,boundaryCount:0,hideNextButton:!0,hidePrevButton:!0,showFirstButton:!0,showLastButton:!0})}),e(t,{item:!0,xs:2,children:"Outlined"}),e(t,{item:!0,xs:10,children:e(a,{variant:"outlined","aria-label":"outlined pagination",count:10,boundaryCount:0,hideNextButton:!0,hidePrevButton:!0,showFirstButton:!0,showLastButton:!0})})]})};var s,u,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: PaginationProps) => <Pagination {...args} />
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,h,f;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const W=["_Pagination","_Variants","_FirstLast"];export{o as _FirstLast,i as _Pagination,r as _Variants,W as __namedExportsOrder,U as default};
//# sourceMappingURL=Pagination.stories-9d9aeebd.js.map
