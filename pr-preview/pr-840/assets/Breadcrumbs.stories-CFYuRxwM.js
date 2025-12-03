import{j as r}from"./iframe-D4l0qtta.js";import{p as V,N as k}from"./index-B-RlsP5T.js";import{L as p}from"./index-BVZguSmi.js";import{B as L}from"./Breadcrumbs-BXH7YiVG.js";import{T as B}from"./Typography-DQo__xQb.js";import"./preload-helper-Dp1pzeXC.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-Domhqj7B.js";import"./memoTheme-BA7dV9ce.js";import"./styled-BTFFsjyJ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Link-hG0HorPl.js";import"./useTheme-CeD1owOb.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-0ZTEW-tI.js";import"./ButtonBase-caw8p1XZ.js";import"./useTimeout-tDfAfQSP.js";import"./TransitionGroupContext-CoIben92.js";import"./useForkRef-Dd_PEYLR.js";import"./useEventCallback-BZanBeRj.js";import"./useSlotProps-CDGpK8qC.js";import"./mergeSlotProps-DF_C76Yp.js";import"./isHostComponent-DVu5iVWx.js";const j=({name:e,url:t,target:s="_top",LinkProps:n})=>{const o={"aria-label":e,children:e};return t?r.jsx(p,{...o,...n,href:t,target:s}):r.jsx(B,{...o})},a=({active:e,children:t,crumbs:s,emptyState:n="...",homeUrl:o="/static/web/onb/onboarding-ui-apps/dashboard-ui/",LinkProps:C,...u})=>r.jsxs(L,{...u,separator:r.jsx(k,{fontSize:"xsmall"}),slotProps:{collapsedIcon:{className:"breadcrumbs__collapsed-icon"}},slots:{CollapsedIcon:V},"aria-label":u["aria-label"]||"breadcrumbs",children:[r.jsx(p,{"aria-label":"Home",href:o,loadApp:!1,children:"Home"}),s&&s.length>0&&s.map(({name:d=n,url:_,target:q})=>r.jsx(j,{name:d,url:_,target:q,LinkProps:C},d)),t,r.jsx(B,{children:e||n})]});try{a.displayName="Breadcrumbs",a.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{active:{defaultValue:null,description:"The name of the active page (the page the user is currently on).",name:"active",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},crumbs:{defaultValue:null,description:`The ancestor pages.
An array of objects containing the name and url
{ name: 'Page', url: '#' }`,name:"crumbs",required:!1,type:{name:"Crumb[]"}},emptyState:{defaultValue:{value:"..."},description:"The value to display when the active page or an ancestor does not have a value.",name:"emptyState",required:!1,type:{name:"string"}},homeUrl:{defaultValue:{value:"/static/web/onb/onboarding-ui-apps/dashboard-ui/"},description:"Url for the Home route.",name:"homeUrl",required:!1,type:{name:"string"}},"aria-label":{defaultValue:{value:"breadcrumbs"},description:"A string value that can be used to name an element",name:"aria-label",required:!1,type:{name:"string"}},LinkProps:{defaultValue:null,description:"Props passed to the Links",name:"LinkProps",required:!1,type:{name:'Omit<LinkProps, "href">'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<BreadcrumbsClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},expandText:{defaultValue:{value:"'Show path'"},description:`Override the default label for the expand button.

For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).`,name:"expandText",required:!1,type:{name:"string"}},itemsAfterCollapse:{defaultValue:{value:"1"},description:"If max items is exceeded, the number of items to show after the ellipsis.",name:"itemsAfterCollapse",required:!1,type:{name:"number"}},itemsBeforeCollapse:{defaultValue:{value:"1"},description:"If max items is exceeded, the number of items to show before the ellipsis.",name:"itemsBeforeCollapse",required:!1,type:{name:"number"}},maxItems:{defaultValue:{value:"8"},description:"Specifies the maximum number of breadcrumbs to display. When there are more\nthan the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`\nwill be shown, with an ellipsis in between.",name:"maxItems",required:!1,type:{name:"number"}}}}}catch{}const ae={title:"Components/Breadcrumbs/Breadcrumbs",component:a,tags:["autodocs"]},i={render:e=>r.jsx(a,{...e}),args:{active:"Current Page","aria-label":"test-breadcrumbs",crumbs:[{name:"Previous Page",url:"#"}]}},l={render:e=>r.jsx(a,{...e}),args:{active:"Current Page","aria-label":"test-breadcrumbs",crumbs:[{name:"Previous Page",url:"/previous-page"}],LinkProps:{loadApp:!1}}},m={render:e=>r.jsx(a,{...e,children:r.jsx(p,{href:"",children:"Previous Page"})}),args:{active:"Current Page"}};var c,b,f;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: BreadcrumbsProps) => <Breadcrumbs {...args} />,
  args: {
    active: 'Current Page',
    'aria-label': 'test-breadcrumbs',
    crumbs: [{
      name: 'Previous Page',
      url: '#'
    }]
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,g,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(v=m.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const se=["_Breadcrumbs","_BreadcrumbsLinkProps","_BreadcrumbsChildren"];export{i as _Breadcrumbs,m as _BreadcrumbsChildren,l as _BreadcrumbsLinkProps,se as __namedExportsOrder,ae as default};
