import{a as C,j as e}from"./jsx-runtime-390e5fc8.js";import{N as P,c as _}from"./index-74bc51e6.js";import{L as i}from"./index-bbdd91bd.js";import{M as q}from"./Breadcrumbs-f315cc8c.js";import{M as d}from"./Typography-9728a9c9.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./faCircleArrowRight-a712a312.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-6af4d5b9.js";import"./clsx.m-fb33c42b.js";import"./createTheme-4dc6b23f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-bb804320.js";import"./styled-d0245a8f.js";import"./generateUtilityClasses-145aac4e.js";import"./Link-444e0d62.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useForkRef-153a0a89.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-ab70d8ae.js";import"./ButtonBase-ae02db0a.js";import"./emotion-react.browser.esm-325397be.js";import"./useEnhancedEffect-460150e6.js";import"./useSlotProps-ff3a8657.js";import"./isHostComponent-73d6e646.js";import"./extendSxProp-fa3ab054.js";const a=({active:r,children:y,crumbs:n,emptyState:l="...",homeUrl:v="/public/apps/dashboard",...x})=>{const B=({name:t=l,url:m})=>{const p={"aria-label":t,children:t};return m?e(i,{...p,href:m}):e(d,{...p})};return C(q,{...x,separator:e(P,{fontSize:"small"}),slotProps:{collapsedIcon:{className:"breadcrumbs__collapsed-icon"}},slots:{CollapsedIcon:_},children:[e(i,{"aria-label":"Home",href:v,children:"Home"}),n&&n.length>0&&n.map(t=>B(t)),y,e(d,{children:r||l})]})};try{a.displayName="Breadcrumbs",a.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{active:{defaultValue:null,description:"The name of the active page (the page the user is currently on).",name:"active",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},crumbs:{defaultValue:null,description:`The ancestor pages.
An array of objects containing the name and url
{ name: 'Page', url: '#' }`,name:"crumbs",required:!1,type:{name:"Crumb[]"}},emptyState:{defaultValue:{value:"..."},description:"The value to display when the active page or an ancestor does not have a value.",name:"emptyState",required:!1,type:{name:"string"}},homeUrl:{defaultValue:{value:"/public/apps/dashboard"},description:"Url for the Home route.",name:"homeUrl",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<BreadcrumbsClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}},expandText:{defaultValue:{value:"'Show path'"},description:`Override the default label for the expand button.

For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).`,name:"expandText",required:!1,type:{name:"string"}},itemsAfterCollapse:{defaultValue:{value:"1"},description:"If max items is exceeded, the number of items to show after the ellipsis.",name:"itemsAfterCollapse",required:!1,type:{name:"number"}},itemsBeforeCollapse:{defaultValue:{value:"1"},description:"If max items is exceeded, the number of items to show before the ellipsis.",name:"itemsBeforeCollapse",required:!1,type:{name:"number"}},maxItems:{defaultValue:{value:"8"},description:"Specifies the maximum number of breadcrumbs to display. When there are more\nthan the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`\nwill be shown, with an ellipsis in between.",name:"maxItems",required:!1,type:{name:"number"}}}}}catch{}const $={title:"Components/Breadcrumbs/Breadcrumbs",component:a,tags:["autodocs"]},s={render:r=>e(a,{...r}),args:{active:"Current Page",crumbs:[{name:"Previous Page",url:"#"}]}},o={render:r=>e(a,{...r,children:e(i,{href:"",children:"Previous Page"})}),args:{active:"Current Page"}};var u,c,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: BreadcrumbsProps) => <Breadcrumbs {...args} />,
  args: {
    active: 'Current Page',
    crumbs: [{
      name: 'Previous Page',
      url: '#'
    }]
  }
}`,...(f=(c=s.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var h,b,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: BreadcrumbsProps) => <Breadcrumbs {...args}>
      <Link href="">Previous Page</Link>
    </Breadcrumbs>,
  args: {
    active: 'Current Page'
  }
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const ee=["_Breadcrumbs","_BreadcrumbsChildren"];export{s as _Breadcrumbs,o as _BreadcrumbsChildren,ee as __namedExportsOrder,$ as default};
//# sourceMappingURL=Breadcrumbs.stories-324164a5.js.map
