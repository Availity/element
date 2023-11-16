import{j as o,a as e}from"./jsx-runtime-a3bcee63.js";import{D as w}from"./index-507c6617.js";import{T as c}from"./index-96688515.js";import{B as k}from"./index-d680f5dc.js";import{L}from"./index-cb507f8c.js";import{B as S}from"./index-7567abe5.js";import{G as t}from"./Grid-af1a3ff2.js";import{C as j}from"./Container-a1530f69.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./Divider-fcaf2f3a.js";import"./createTheme-bcd1d157.js";import"./clsx-7dc4e18d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-7846e708.js";import"./useThemeProps-018254e6.js";import"./dividerClasses-b19abef8.js";import"./generateUtilityClasses-70c60a0e.js";import"./Typography-f61e077a.js";import"./extendSxProp-9115426f.js";import"./index-2680a805.js";import"./faCircleArrowRight-4b60ae06.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-951d7748.js";import"./Breadcrumbs-b153b1d7.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-60c2b2ae.js";import"./ButtonBase-d80b4855.js";import"./emotion-react.browser.esm-474fda6d.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./useSlotProps-f4be827f.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./Link-a674eae6.js";import"./Button-d84dd9a0.js";import"./Tooltip-c716d13a.js";import"./useTheme-76c02901.js";import"./ownerDocument-613eb639.js";import"./Grow-e87a736b.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-de653fbd.js";import"./LoadingButton-7f26c21d.js";import"./extends-90dea224.js";import"./CircularProgress-83597315.js";import"./styled-11d1647d.js";const a=({breadcrumbs:r,buttons:i,headerText:_,helpLink:p})=>o(t,{component:j,container:!0,direction:"column",marginTop:"1rem",marginBottom:"1.25rem",children:[r||p?o(t,{direction:"row",item:!0,container:!0,justifyContent:"space-between",marginBottom:4,children:[r&&e(t,{item:!0,children:e(k,{...r})}),p&&e(t,{item:!0,marginLeft:2,children:o(c,{variant:"body1",children:["Need help? ",e(L,{href:p,target:"_blank",children:"Watch a demo"})]})})]}):null,o(t,{direction:"row",item:!0,container:!0,marginBottom:2,alignItems:"center",justifyContent:"space-between",children:[e(t,{item:!0,children:e(c,{variant:"h1",children:_})}),i&&i.length>0&&e(t,{item:!0,container:!0,width:"auto",children:i==null?void 0:i.map(v=>e(t,{item:!0,marginLeft:2,height:"100%",children:e(S,{...v,size:"large",color:"secondary"})}))})]}),e(w,{})]});try{a.displayName="PageHeader",a.__docgenInfo={description:"",displayName:"PageHeader",props:{breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!0,type:{name:"BreadcrumbsProps"}},buttons:{defaultValue:null,description:"",name:"buttons",required:!1,type:{name:"ButtonsProps[]"}},headerText:{defaultValue:null,description:"",name:"headerText",required:!0,type:{name:"string"}},helpLink:{defaultValue:null,description:"",name:"helpLink",required:!1,type:{name:"string"}}}}}catch{}const Le={title:"Components/PageHeader/PageHeader",component:a,tags:["autodocs"]},n={render:r=>e(a,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"}}},s={render:r=>e(a,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},helpLink:"https://www.availity.com"}},d={render:r=>e(a,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},buttons:[{children:"Button 1",key:"button1"}]}},m={render:r=>e(a,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},buttons:[{children:"Button 1",key:"button1"},{children:"Button 2",key:"button2"}]}};var u,g,l;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(T=(f=d.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var x,y,B;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(B=(y=m.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const Se=["_PageHeader","_PageHeaderHelp","_PageHeaderSingleButton","_PageHeaderDoubleButtons"];export{n as _PageHeader,m as _PageHeaderDoubleButtons,s as _PageHeaderHelp,d as _PageHeaderSingleButton,Se as __namedExportsOrder,Le as default};
//# sourceMappingURL=PageHeader.stories-c84c26ab.js.map
