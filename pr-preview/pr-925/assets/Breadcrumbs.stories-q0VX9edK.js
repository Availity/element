import{j as r}from"./iframe-BRP1PsTd.js";import{r as y,N as P}from"./index-C9qIB2Ge.js";import{L as u}from"./index-BSjF2y95.js";import{B as v}from"./Breadcrumbs-FKTNd6qj.js";import{T as c}from"./Typography-BELI0wSd.js";import"./preload-helper-PPVm8Dsz.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-C0xh8SUy.js";import"./memoTheme-Rx2ZtNd-.js";import"./styled-kfJMXx_R.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Link-DALkoWbB.js";import"./useTheme-C-06SHWZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-DDgQnkKT.js";import"./ButtonBase-DI3KZvly.js";import"./useTimeout-zBXF3kIc.js";import"./TransitionGroupContext-DjWTkcZP.js";import"./useForkRef-DUyCy24e.js";import"./useEventCallback-BX14bO_3.js";import"./useSlotProps-fBG80Xpc.js";import"./mergeSlotProps-B2RYlZua.js";const x=({name:e,url:t,target:s="_top",LinkProps:n})=>{const o={"aria-label":e,children:e};return t?r.jsx(u,{...o,...n,href:t,target:s}):r.jsx(c,{...o})},a=({active:e,children:t,crumbs:s,emptyState:n="...",homeTarget:o="_self",homeUrl:f="/static/web/onb/onboarding-ui-apps/dashboard-ui/",LinkProps:b,...p})=>r.jsxs(v,{...p,separator:r.jsx(P,{fontSize:"xsmall"}),slotProps:{collapsedIcon:{className:"breadcrumbs__collapsed-icon"}},slots:{CollapsedIcon:y},"aria-label":p["aria-label"]||"breadcrumbs",children:[r.jsx(u,{"aria-label":"Home",href:f,target:o,loadApp:!1,children:"Home"}),s&&s.length>0&&s.map(({name:d=n,url:h,target:g})=>r.jsx(x,{name:d,url:h,target:g,LinkProps:b},d)),t,r.jsx(c,{children:e||n})]});try{a.displayName="Breadcrumbs",a.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{active:{defaultValue:null,description:"The name of the active page (the page the user is currently on).",name:"active",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},crumbs:{defaultValue:null,description:`The ancestor pages.
An array of objects containing the name and url
{ name: 'Page', url: '#' }`,name:"crumbs",required:!1,type:{name:"Crumb[]"}},emptyState:{defaultValue:{value:"..."},description:"The value to display when the active page or an ancestor does not have a value.",name:"emptyState",required:!1,type:{name:"string"}},homeTarget:{defaultValue:{value:"_self"},description:"The target on the Home link",name:"homeTarget",required:!1,type:{name:"string"}},homeUrl:{defaultValue:{value:"/static/web/onb/onboarding-ui-apps/dashboard-ui/"},description:"Url for the Home route.",name:"homeUrl",required:!1,type:{name:"string"}},"aria-label":{defaultValue:{value:"breadcrumbs"},description:"A string value that can be used to name an element",name:"aria-label",required:!1,type:{name:"string"}},LinkProps:{defaultValue:null,description:"Props passed to the Links",name:"LinkProps",required:!1,type:{name:'Omit<LinkProps, "href">'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<BreadcrumbsClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},expandText:{defaultValue:{value:"'Show path'"},description:`Override the default label for the expand button.

For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).`,name:"expandText",required:!1,type:{name:"string"}},itemsAfterCollapse:{defaultValue:{value:"1"},description:"If max items is exceeded, the number of items to show after the ellipsis.",name:"itemsAfterCollapse",required:!1,type:{name:"number"}},itemsBeforeCollapse:{defaultValue:{value:"1"},description:"If max items is exceeded, the number of items to show before the ellipsis.",name:"itemsBeforeCollapse",required:!1,type:{name:"number"}},maxItems:{defaultValue:{value:"8"},description:"Specifies the maximum number of breadcrumbs to display. When there are more\nthan the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`\nwill be shown, with an ellipsis in between.",name:"maxItems",required:!1,type:{name:"number"}}}}}catch{}const G={title:"Components/Breadcrumbs/Breadcrumbs",component:a,tags:["autodocs"]},i={render:e=>r.jsx(a,{...e}),args:{active:"Current Page","aria-label":"test-breadcrumbs",crumbs:[{name:"Previous Page",url:"#"}]}},l={render:e=>r.jsx(a,{...e}),args:{active:"Current Page","aria-label":"test-breadcrumbs",crumbs:[{name:"Previous Page",url:"/previous-page"}],LinkProps:{loadApp:!1}}},m={render:e=>r.jsx(a,{...e,children:r.jsx(u,{href:"",children:"Previous Page"})}),args:{active:"Current Page"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: BreadcrumbsProps) => <Breadcrumbs {...args} />,
  args: {
    active: 'Current Page',
    'aria-label': 'test-breadcrumbs',
    crumbs: [{
      name: 'Previous Page',
      url: '#'
    }]
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: BreadcrumbsProps) => <Breadcrumbs {...args}>
      <Link href="">Previous Page</Link>
    </Breadcrumbs>,
  args: {
    active: 'Current Page'
  }
}`,...m.parameters?.docs?.source}}};const J=["_Breadcrumbs","_BreadcrumbsLinkProps","_BreadcrumbsChildren"];export{i as _Breadcrumbs,m as _BreadcrumbsChildren,l as _BreadcrumbsLinkProps,J as __namedExportsOrder,G as default};
