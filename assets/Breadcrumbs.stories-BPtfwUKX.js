import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{p as V,N as L}from"./index-CmMPo3bx.js";import{L as p}from"./index-BCsFyVyG.js";import{B as k}from"./Breadcrumbs-CJbZRFDL.js";import{T as B}from"./Typography-geKghQyJ.js";import"./index-ChsGqxH_.js";import"./faCircleArrowRight-B14F5Piw.js";import"./index-BgYLq7fD.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./faUser-D77uLSLS.js";import"./faSortDown-BIc1sKK4.js";import"./SvgIcon-D3xe1wVB.js";import"./generateUtilityClass-GxznSYtt.js";import"./identifier-CHUoN9pF.js";import"./memoTheme-BLrvrRyo.js";import"./styled-FZfCzBz5.js";import"./DefaultPropsProvider-ArLX9SCD.js";import"./generateUtilityClasses-aotQgNYZ.js";import"./Link-rLN5tdDv.js";import"./useTheme-BGaXYmwe.js";import"./useTheme-CVByJb8R.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-DK1T27V3.js";import"./ButtonBase-DwAEbHIm.js";import"./useTimeout-iC_34LsC.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./emotion-react.browser.esm-DW5OmoQI.js";import"./useForkRef-Dz4aGlyk.js";import"./useSlotProps-DT0tbkWv.js";import"./resolveComponentProps-XMphxBSb.js";import"./index-Df15702_.js";import"./extendSxProp-BZnzVrgj.js";const j=({name:e,url:t,target:s="_top",LinkProps:n})=>{const o={"aria-label":e,children:e};return t?r.jsx(p,{...o,...n,href:t,target:s}):r.jsx(B,{...o})},a=({active:e,children:t,crumbs:s,emptyState:n="...",homeUrl:o="/static/web/onb/onboarding-ui-apps/dashboard-ui/",LinkProps:C,...u})=>r.jsxs(k,{...u,separator:r.jsx(L,{fontSize:"xsmall"}),slotProps:{collapsedIcon:{className:"breadcrumbs__collapsed-icon"}},slots:{CollapsedIcon:V},"aria-label":u["aria-label"]||"breadcrumbs",children:[r.jsx(p,{"aria-label":"Home",href:o,loadApp:!1,children:"Home"}),s&&s.length>0&&s.map(({name:d=n,url:_,target:q})=>r.jsx(j,{name:d,url:_,target:q,LinkProps:C},d)),t,r.jsx(B,{children:e||n})]});try{a.displayName="Breadcrumbs",a.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{active:{defaultValue:null,description:"The name of the active page (the page the user is currently on).",name:"active",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},crumbs:{defaultValue:null,description:`The ancestor pages.
An array of objects containing the name and url
{ name: 'Page', url: '#' }`,name:"crumbs",required:!1,type:{name:"Crumb[]"}},emptyState:{defaultValue:{value:"..."},description:"The value to display when the active page or an ancestor does not have a value.",name:"emptyState",required:!1,type:{name:"string"}},homeUrl:{defaultValue:{value:"/static/web/onb/onboarding-ui-apps/dashboard-ui/"},description:"Url for the Home route.",name:"homeUrl",required:!1,type:{name:"string"}},"aria-label":{defaultValue:{value:"breadcrumbs"},description:"A string value that can be used to name an element",name:"aria-label",required:!1,type:{name:"string"}},LinkProps:{defaultValue:null,description:"Props passed to the Links",name:"LinkProps",required:!1,type:{name:'Omit<LinkProps, "href">'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<BreadcrumbsClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},expandText:{defaultValue:{value:"'Show path'"},description:`Override the default label for the expand button.

For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).`,name:"expandText",required:!1,type:{name:"string"}},itemsAfterCollapse:{defaultValue:{value:"1"},description:"If max items is exceeded, the number of items to show after the ellipsis.",name:"itemsAfterCollapse",required:!1,type:{name:"number"}},itemsBeforeCollapse:{defaultValue:{value:"1"},description:"If max items is exceeded, the number of items to show before the ellipsis.",name:"itemsBeforeCollapse",required:!1,type:{name:"number"}},maxItems:{defaultValue:{value:"8"},description:"Specifies the maximum number of breadcrumbs to display. When there are more\nthan the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`\nwill be shown, with an ellipsis in between.",name:"maxItems",required:!1,type:{name:"number"}}}}}catch{}const ue={title:"Components/Breadcrumbs/Breadcrumbs",component:a,tags:["autodocs"]},i={render:e=>r.jsx(a,{...e}),args:{active:"Current Page","aria-label":"test-breadcrumbs",crumbs:[{name:"Previous Page",url:"#"}]}},l={render:e=>r.jsx(a,{...e}),args:{active:"Current Page","aria-label":"test-breadcrumbs",crumbs:[{name:"Previous Page",url:"/previous-page"}],LinkProps:{loadApp:!1}}},m={render:e=>r.jsx(a,{...e,children:r.jsx(p,{href:"",children:"Previous Page"})}),args:{active:"Current Page"}};var c,f,b;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: BreadcrumbsProps) => <Breadcrumbs {...args} />,
  args: {
    active: 'Current Page',
    'aria-label': 'test-breadcrumbs',
    crumbs: [{
      name: 'Previous Page',
      url: '#'
    }]
  }
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,g,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: BreadcrumbsProps) => <Breadcrumbs {...args} />,
  args: {
    active: 'Current Page',
    'aria-label': 'test-breadcrumbs',
    crumbs: [{
      name: 'Previous Page',
      url: '/previous-page'
    }],
    LinkProps: {
      loadApp: false
    }
  }
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var P,v,x;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args: BreadcrumbsProps) => <Breadcrumbs {...args}>
      <Link href="">Previous Page</Link>
    </Breadcrumbs>,
  args: {
    active: 'Current Page'
  }
}`,...(x=(v=m.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const de=["_Breadcrumbs","_BreadcrumbsLinkProps","_BreadcrumbsChildren"];export{i as _Breadcrumbs,m as _BreadcrumbsChildren,l as _BreadcrumbsLinkProps,de as __namedExportsOrder,ue as default};
