import{a as C,j as e}from"./jsx-runtime-390e5fc8.js";import{N as P,b as _}from"./index-d2e63b55.js";import{L as i}from"./index-8f828b25.js";import{M as q}from"./Breadcrumbs-dae1203c.js";import{M as d}from"./Typography-125528da.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./faCircleArrowRight-5066acd3.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-f3e07af8.js";import"./createTheme-e6b56ddb.js";import"./clsx-8416b751.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-285a8f6c.js";import"./styled-78cd751f.js";import"./generateUtilityClasses-2915a045.js";import"./Link-6b0912e7.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useForkRef-153a0a89.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-c7fbf131.js";import"./ButtonBase-6abe7f0b.js";import"./emotion-react.browser.esm-69a15469.js";import"./TransitionGroupContext-c71596b3.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./useSlotProps-1710581f.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./extendSxProp-4d42c058.js";const a=({active:r,children:y,crumbs:o,emptyState:l="...",homeUrl:v="/public/apps/dashboard",...x})=>{const B=({name:t=l,url:m})=>{const p={"aria-label":t,children:t};return m?e(i,{...p,href:m}):e(d,{...p})};return C(q,{...x,separator:e(P,{fontSize:"xsmall"}),slotProps:{collapsedIcon:{className:"breadcrumbs__collapsed-icon"}},slots:{CollapsedIcon:_},children:[e(i,{"aria-label":"Home",href:v,loadApp:!1,children:"Home"}),o&&o.length>0&&o.map(t=>B(t)),y,e(d,{children:r||l})]})};try{a.displayName="Breadcrumbs",a.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{active:{defaultValue:null,description:"The name of the active page (the page the user is currently on).",name:"active",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},crumbs:{defaultValue:null,description:`The ancestor pages.
An array of objects containing the name and url
{ name: 'Page', url: '#' }`,name:"crumbs",required:!1,type:{name:"Crumb[]"}},emptyState:{defaultValue:{value:"..."},description:"The value to display when the active page or an ancestor does not have a value.",name:"emptyState",required:!1,type:{name:"string"}},homeUrl:{defaultValue:{value:"/public/apps/dashboard"},description:"Url for the Home route.",name:"homeUrl",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<BreadcrumbsClasses> & Partial<ClassNameMap<never>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},expandText:{defaultValue:{value:"'Show path'"},description:`Override the default label for the expand button.

For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).`,name:"expandText",required:!1,type:{name:"string"}},itemsAfterCollapse:{defaultValue:{value:"1"},description:"If max items is exceeded, the number of items to show after the ellipsis.",name:"itemsAfterCollapse",required:!1,type:{name:"number"}},itemsBeforeCollapse:{defaultValue:{value:"1"},description:"If max items is exceeded, the number of items to show before the ellipsis.",name:"itemsBeforeCollapse",required:!1,type:{name:"number"}},maxItems:{defaultValue:{value:"8"},description:"Specifies the maximum number of breadcrumbs to display. When there are more\nthan the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`\nwill be shown, with an ellipsis in between.",name:"maxItems",required:!1,type:{name:"number"}}}}}catch{}const re={title:"Components/Breadcrumbs/Breadcrumbs",component:a,tags:["autodocs"]},s={render:r=>e(a,{...r}),args:{active:"Current Page",crumbs:[{name:"Previous Page",url:"#"}]}},n={render:r=>e(a,{...r,children:e(i,{href:"",children:"Previous Page"})}),args:{active:"Current Page"}};var u,c,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: BreadcrumbsProps) => <Breadcrumbs {...args} />,
  args: {
    active: 'Current Page',
    crumbs: [{
      name: 'Previous Page',
      url: '#'
    }]
  }
}`,...(f=(c=s.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var h,b,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: BreadcrumbsProps) => <Breadcrumbs {...args}>
      <Link href="">Previous Page</Link>
    </Breadcrumbs>,
  args: {
    active: 'Current Page'
  }
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const ae=["_Breadcrumbs","_BreadcrumbsChildren"];export{s as _Breadcrumbs,n as _BreadcrumbsChildren,ae as __namedExportsOrder,re as default};
//# sourceMappingURL=Breadcrumbs.stories-e0639cc0.js.map
