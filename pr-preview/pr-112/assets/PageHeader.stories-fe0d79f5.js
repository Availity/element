import{a as o,j as e}from"./jsx-runtime-390e5fc8.js";import{D as w}from"./index-1327d399.js";import{T as p}from"./index-92035bdc.js";import{B as k}from"./index-d5a6f0e0.js";import{L}from"./index-dc002079.js";import{B as S}from"./index-742560bc.js";import{G as t}from"./Grid-6e4b75b0.js";import{C as j}from"./Container-1fb095c3.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./Divider-66f52528.js";import"./createTheme-bcd1d157.js";import"./clsx-7dc4e18d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-ba967c06.js";import"./useThemeProps-32d9d40f.js";import"./dividerClasses-bef686f3.js";import"./generateUtilityClasses-cabd787c.js";import"./Typography-45d8e817.js";import"./extendSxProp-9115426f.js";import"./index-df413f1e.js";import"./faCircleArrowRight-ecf82256.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-e7295b43.js";import"./Breadcrumbs-01bc4afa.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-a2702ab1.js";import"./ButtonBase-0a435f0a.js";import"./emotion-react.browser.esm-474fda6d.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./useSlotProps-4e64ffeb.js";import"./objectWithoutPropertiesLoose-830c72af.js";import"./Link-2b846b46.js";import"./Button-c8d0f982.js";import"./Tooltip-db1cd215.js";import"./useTheme-4854111c.js";import"./ownerDocument-613eb639.js";import"./Grow-5e3a8791.js";import"./index-8a077077.js";import"./utils-57cc91c3.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-7604743a.js";import"./LoadingButton-1865c5d0.js";import"./extends-90dea224.js";import"./styled-b379d1d1.js";const a=({breadcrumbs:r,buttons:i,headerText:B,helpLink:c})=>o(t,{component:j,container:!0,direction:"column",children:[r||c?o(t,{direction:"row",item:!0,container:!0,justifyContent:"space-between",marginBottom:4,children:[r&&e(t,{item:!0,children:e(k,{...r})}),c&&e(t,{item:!0,marginLeft:2,children:o(p,{variant:"body1",children:["Need help? ",e(L,{href:c,target:"_blank",children:"Watch a demo"})]})})]}):null,o(t,{direction:"row",item:!0,container:!0,marginBottom:2,alignItems:"center",justifyContent:"space-between",children:[e(t,{item:!0,children:e(p,{variant:"h1",children:B})}),i&&i.length>0&&e(t,{item:!0,container:!0,width:"auto",children:i==null?void 0:i.map(v=>e(t,{item:!0,marginLeft:2,height:"100%",children:e(S,{...v,size:"large",color:"secondary"})}))})]}),e(w,{})]});try{a.displayName="PageHeader",a.__docgenInfo={description:"",displayName:"PageHeader",props:{breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!0,type:{name:"BreadcrumbsProps"}},buttons:{defaultValue:null,description:"",name:"buttons",required:!1,type:{name:"ButtonsProps[]"}},headerText:{defaultValue:null,description:"",name:"headerText",required:!0,type:{name:"string"}},helpLink:{defaultValue:null,description:"",name:"helpLink",required:!1,type:{name:"string"}}}}}catch{}const ve={title:"Components/PageHeader/PageHeader",component:a,tags:["autodocs"]},n={render:r=>e(a,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"}}},s={render:r=>e(a,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},helpLink:"https://www.availity.com"}},d={render:r=>e(a,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},buttons:[{children:"Button 1",key:"button1"}]}},m={render:r=>e(a,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},buttons:[{children:"Button 1",key:"button1"},{children:"Button 2",key:"button2"}]}};var u,g,l;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: PageHeaderProps) => <PageHeader {...args} />,
  args: {
    headerText: 'This text is a child of PageHeader',
    breadcrumbs: {
      active: 'This Page'
    }
  }
}`,...(l=(g=n.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var h,P,H;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: PageHeaderProps) => <PageHeader {...args} />,
  args: {
    headerText: 'This text is a child of PageHeader',
    breadcrumbs: {
      active: 'This Page'
    },
    helpLink: 'https://www.availity.com'
  }
}`,...(H=(P=s.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var b,f,T;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: PageHeaderProps) => <PageHeader {...args} />,
  args: {
    headerText: 'This text is a child of PageHeader',
    breadcrumbs: {
      active: 'This Page'
    },
    buttons: [{
      children: 'Button 1',
      key: 'button1'
    }]
  }
}`,...(T=(f=d.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var x,y,_;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: PageHeaderProps) => <PageHeader {...args} />,
  args: {
    headerText: 'This text is a child of PageHeader',
    breadcrumbs: {
      active: 'This Page'
    },
    buttons: [{
      children: 'Button 1',
      key: 'button1'
    }, {
      children: 'Button 2',
      key: 'button2'
    }]
  }
}`,...(_=(y=m.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const we=["_PageHeader","_PageHeaderHelp","_PageHeaderSingleButton","_PageHeaderDoubleButtons"];export{n as _PageHeader,m as _PageHeaderDoubleButtons,s as _PageHeaderHelp,d as _PageHeaderSingleButton,we as __namedExportsOrder,ve as default};
//# sourceMappingURL=PageHeader.stories-fe0d79f5.js.map
