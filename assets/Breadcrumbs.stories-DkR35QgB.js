import{j as r}from"./iframe-5qL0mprR.js";import{r as y,N as P}from"./index-CD_y2Btm.js";import{L as m}from"./index-CpwD5ScA.js";import{B as v}from"./Breadcrumbs-BS9rVB0-.js";import{T as c}from"./Typography-F-Y5u_yh.js";import"./preload-helper-PPVm8Dsz.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D8DRNpD6.js";import"./memoTheme-DGTRKnQQ.js";import"./styled-CoUwmM87.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Link-BT_a0EKg.js";import"./useTheme-Dl3uMx7u.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-CZsBBnxz.js";import"./ButtonBase-CEBWCJ86.js";import"./useTimeout-B8tDrGFN.js";import"./TransitionGroupContext-DG4g3onZ.js";import"./useForkRef-B_tBAx6E.js";import"./useEventCallback-DqMc6arA.js";import"./useSlotProps-BldRbwm9.js";import"./mergeSlotProps-BLlOPPFY.js";const x=({name:e,url:n,target:s="_top",LinkProps:t})=>{const i={"aria-label":e,children:e};return n?r.jsx(m,{...i,...t,href:n,target:s}):r.jsx(c,{...i})},a=({active:e,children:n,crumbs:s,emptyState:t="...",homeTarget:i="_self",homeUrl:f="/static/web/onb/onboarding-ui-apps/dashboard-ui/",LinkProps:b,...u})=>r.jsxs(v,{...u,separator:r.jsx(P,{fontSize:"xsmall"}),slotProps:{collapsedIcon:{className:"breadcrumbs__collapsed-icon"}},slots:{CollapsedIcon:y},"aria-label":u["aria-label"]||"breadcrumbs",children:[r.jsx(m,{"aria-label":"Home",href:f,target:i,loadApp:!1,children:"Home"}),s&&s.length>0&&s.map(({name:p=t,url:h,target:g})=>r.jsx(x,{name:p,url:h,target:g,LinkProps:b},p)),n,r.jsx(c,{children:e||t})]});try{a.displayName="Breadcrumbs",a.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{active:{defaultValue:null,description:"The name of the active page (the page the user is currently on).",name:"active",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},crumbs:{defaultValue:null,description:`The ancestor pages.
An array of objects containing the name and url
{ name: 'Page', url: '#' }`,name:"crumbs",required:!1,type:{name:"Crumb[] | undefined"}},emptyState:{defaultValue:{value:"..."},description:"The value to display when the active page or an ancestor does not have a value.",name:"emptyState",required:!1,type:{name:"string | undefined"}},homeTarget:{defaultValue:{value:"_self"},description:"The target on the Home link",name:"homeTarget",required:!1,type:{name:"string | undefined"}},homeUrl:{defaultValue:{value:"/static/web/onb/onboarding-ui-apps/dashboard-ui/"},description:"Url for the Home route.",name:"homeUrl",required:!1,type:{name:"string | undefined"}},"aria-label":{defaultValue:{value:"breadcrumbs"},description:"A string value that can be used to name an element",name:"aria-label",required:!1,type:{name:"string | undefined"}},LinkProps:{defaultValue:null,description:"Props passed to the Links",name:"LinkProps",required:!1,type:{name:'Omit<LinkProps, "href"> | undefined'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<BreadcrumbsClasses> & Partial<ClassNameMap<never>>) | undefined"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme> | undefined"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements> | undefined"}},expandText:{defaultValue:{value:"'Show path'"},description:`Override the default label for the expand button.

For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).`,name:"expandText",required:!1,type:{name:"string | undefined"}},itemsAfterCollapse:{defaultValue:{value:"1"},description:"If max items is exceeded, the number of items to show after the ellipsis.",name:"itemsAfterCollapse",required:!1,type:{name:"number | undefined"}},itemsBeforeCollapse:{defaultValue:{value:"1"},description:"If max items is exceeded, the number of items to show before the ellipsis.",name:"itemsBeforeCollapse",required:!1,type:{name:"number | undefined"}},maxItems:{defaultValue:{value:"8"},description:"Specifies the maximum number of breadcrumbs to display. When there are more\nthan the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`\nwill be shown, with an ellipsis in between.",name:"maxItems",required:!1,type:{name:"number | undefined"}}}}}catch{}const G={title:"Components/Breadcrumbs/Breadcrumbs",component:a,tags:["autodocs"]},o={render:e=>r.jsx(a,{...e}),args:{active:"Current Page","aria-label":"test-breadcrumbs",crumbs:[{name:"Previous Page",url:"#"}]}},l={render:e=>r.jsx(a,{...e}),args:{active:"Current Page","aria-label":"test-breadcrumbs",crumbs:[{name:"Previous Page",url:"/previous-page"}],LinkProps:{loadApp:!1}}},d={render:e=>r.jsx(a,{...e,children:r.jsx(m,{href:"",children:"Previous Page"})}),args:{active:"Current Page"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: BreadcrumbsProps) => <Breadcrumbs {...args} />,
  args: {
    active: 'Current Page',
    'aria-label': 'test-breadcrumbs',
    crumbs: [{
      name: 'Previous Page',
      url: '#'
    }]
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args: BreadcrumbsProps) => <Breadcrumbs {...args}>
      <Link href="">Previous Page</Link>
    </Breadcrumbs>,
  args: {
    active: 'Current Page'
  }
}`,...d.parameters?.docs?.source}}};const J=["_Breadcrumbs","_BreadcrumbsLinkProps","_BreadcrumbsChildren"];export{o as _Breadcrumbs,d as _BreadcrumbsChildren,l as _BreadcrumbsLinkProps,J as __namedExportsOrder,G as default};
