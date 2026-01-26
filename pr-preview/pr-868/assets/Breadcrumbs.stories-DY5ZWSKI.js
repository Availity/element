import{j as r}from"./iframe-B4F0UUz5.js";import{q as g,N as y}from"./index-Cr9n8cqt.js";import{L as u}from"./index-CeeiHfEE.js";import{B as P}from"./Breadcrumbs-DBMP_Ylu.js";import{T as c}from"./Typography-xEPHi5Wz.js";import"./preload-helper-PPVm8Dsz.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DM1sZoZa.js";import"./memoTheme-BKk2saex.js";import"./styled-bGWttyC6.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Link-CdIHGynF.js";import"./useTheme-DkdpmsKL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-BXxeVrmm.js";import"./ButtonBase-DqWoj7oR.js";import"./useTimeout-BonZNUeG.js";import"./TransitionGroupContext-fwmkieDY.js";import"./useForkRef-CjLG5x_H.js";import"./useEventCallback-BqH7MYZ-.js";import"./useSlotProps-C2ZAZv5Q.js";import"./mergeSlotProps-DT_q42Lx.js";const v=({name:e,url:t,target:s="_top",LinkProps:n})=>{const o={"aria-label":e,children:e};return t?r.jsx(u,{...o,...n,href:t,target:s}):r.jsx(c,{...o})},a=({active:e,children:t,crumbs:s,emptyState:n="...",homeUrl:o="/static/web/onb/onboarding-ui-apps/dashboard-ui/",LinkProps:b,...p})=>r.jsxs(P,{...p,separator:r.jsx(y,{fontSize:"xsmall"}),slotProps:{collapsedIcon:{className:"breadcrumbs__collapsed-icon"}},slots:{CollapsedIcon:g},"aria-label":p["aria-label"]||"breadcrumbs",children:[r.jsx(u,{"aria-label":"Home",href:o,loadApp:!1,children:"Home"}),s&&s.length>0&&s.map(({name:d=n,url:f,target:h})=>r.jsx(v,{name:d,url:f,target:h,LinkProps:b},d)),t,r.jsx(c,{children:e||n})]});try{a.displayName="Breadcrumbs",a.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{active:{defaultValue:null,description:"The name of the active page (the page the user is currently on).",name:"active",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},crumbs:{defaultValue:null,description:`The ancestor pages.
An array of objects containing the name and url
{ name: 'Page', url: '#' }`,name:"crumbs",required:!1,type:{name:"Crumb[]"}},emptyState:{defaultValue:{value:"..."},description:"The value to display when the active page or an ancestor does not have a value.",name:"emptyState",required:!1,type:{name:"string"}},homeUrl:{defaultValue:{value:"/static/web/onb/onboarding-ui-apps/dashboard-ui/"},description:"Url for the Home route.",name:"homeUrl",required:!1,type:{name:"string"}},"aria-label":{defaultValue:{value:"breadcrumbs"},description:"A string value that can be used to name an element",name:"aria-label",required:!1,type:{name:"string"}},LinkProps:{defaultValue:null,description:"Props passed to the Links",name:"LinkProps",required:!1,type:{name:'Omit<LinkProps, "href">'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<BreadcrumbsClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},expandText:{defaultValue:{value:"'Show path'"},description:`Override the default label for the expand button.

For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).`,name:"expandText",required:!1,type:{name:"string"}},itemsAfterCollapse:{defaultValue:{value:"1"},description:"If max items is exceeded, the number of items to show after the ellipsis.",name:"itemsAfterCollapse",required:!1,type:{name:"number"}},itemsBeforeCollapse:{defaultValue:{value:"1"},description:"If max items is exceeded, the number of items to show before the ellipsis.",name:"itemsBeforeCollapse",required:!1,type:{name:"number"}},maxItems:{defaultValue:{value:"8"},description:"Specifies the maximum number of breadcrumbs to display. When there are more\nthan the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`\nwill be shown, with an ellipsis in between.",name:"maxItems",required:!1,type:{name:"number"}}}}}catch{}const D={title:"Components/Breadcrumbs/Breadcrumbs",component:a,tags:["autodocs"]},i={render:e=>r.jsx(a,{...e}),args:{active:"Current Page","aria-label":"test-breadcrumbs",crumbs:[{name:"Previous Page",url:"#"}]}},l={render:e=>r.jsx(a,{...e}),args:{active:"Current Page","aria-label":"test-breadcrumbs",crumbs:[{name:"Previous Page",url:"/previous-page"}],LinkProps:{loadApp:!1}}},m={render:e=>r.jsx(a,{...e,children:r.jsx(u,{href:"",children:"Previous Page"})}),args:{active:"Current Page"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const G=["_Breadcrumbs","_BreadcrumbsLinkProps","_BreadcrumbsChildren"];export{i as _Breadcrumbs,m as _BreadcrumbsChildren,l as _BreadcrumbsLinkProps,G as __namedExportsOrder,D as default};
