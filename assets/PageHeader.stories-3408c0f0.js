import{j as o,a as e}from"./jsx-runtime-a3bcee63.js";import{D as L}from"./index-0ab557ce.js";import{T as u}from"./index-bf8151f5.js";import{B as N}from"./index-8dcd6760.js";import{L as q}from"./index-31fb134e.js";import{B as S}from"./index-5efdcb36.js";import{F as A}from"./index-0e9deb8d.js";import{G as t}from"./Grid-62fb460c.js";import{C as V}from"./Container-3c3a93d6.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./Divider-2d957b7a.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-523cb007.js";import"./useThemeProps-98dc6282.js";import"./dividerClasses-871b72e6.js";import"./generateUtilityClasses-b58f947a.js";import"./Typography-f453bb5c.js";import"./extendSxProp-b1abb964.js";import"./index-53288845.js";import"./faCircleArrowRight-f69b7367.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-075b1db6.js";import"./Breadcrumbs-3266d315.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-ca656bec.js";import"./ButtonBase-44753119.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./useSlotProps-95ccb7bd.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./isHostComponent-73d6e646.js";import"./Link-b7684510.js";import"./Button-af0ca45f.js";import"./Tooltip-91ad21bd.js";import"./useTheme-c07bb8e7.js";import"./ownerDocument-613eb639.js";import"./Grow-8a00b99f.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-3fd19b93.js";import"./LoadingButton-1ec35b70.js";import"./extends-90dea224.js";import"./CircularProgress-96ade162.js";import"./index-4810b236.js";import"./Popover-252d82a4.js";import"./Modal-1f45fd5c.js";import"./Backdrop-4a58ec86.js";import"./ownerWindow-03d1c82d.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-389d56e7.js";import"./debounce-517eeb3c.js";import"./index-7c0e1f2b.js";import"./_baseFor-53bad3ef.js";import"./_initCloneObject-31384e14.js";import"./isPlainObject-272efb33.js";import"./ToggleButtonGroup-2e6e00f5.js";import"./ToggleButton-54342354.js";import"./index-edff813b.js";import"./index-77d4584f.js";import"./index-9681c8ff.js";import"./Box-51bd3ea0.js";import"./FormControlLabel-1ceb9da1.js";import"./utils-3d35716f.js";import"./Stack-3fcb8940.js";import"./styled-5c6c15e1.js";import"./FormLabel-3e0f5024.js";import"./FormHelperText-e428b621.js";import"./OutlinedInput-71306fdf.js";import"./GlobalStyles-5f9800bb.js";import"./Select-473a43cb.js";import"./Menu-113dab7f.js";import"./List-446c66c9.js";import"./TextField-471fdd1c.js";import"./FormControl-6b396c3c.js";import"./isMuiElement-6907f060.js";import"./index.esm-d81a0d8c.js";const a=({breadcrumbs:r,buttons:i,feedback:k=!1,headerText:c,helpAppName:l,helpLink:d})=>o(t,{component:V,container:!0,direction:"column",marginTop:"1rem",marginBottom:"1.25rem",children:[r||d?o(t,{direction:"row",item:!0,container:!0,justifyContent:"space-between",marginBottom:4,children:[r&&e(t,{item:!0,children:e(N,{...r})}),d&&e(t,{item:!0,marginLeft:2,children:o(u,{variant:"body1",children:["Need help? ",e(q,{href:d,target:"_blank",children:"Watch a demo"})," ",l?`for ${l}`:null]})})]}):null,o(t,{direction:"row",item:!0,container:!0,marginBottom:2,alignItems:"center",justifyContent:"space-between",children:[e(t,{item:!0,children:e(u,{variant:"h1",children:c})}),o(t,{item:!0,container:!0,width:"auto",children:[i&&i.length>0&&(i==null?void 0:i.map(w=>e(t,{item:!0,marginLeft:2,height:"100%",children:e(S,{...w,size:"large",color:"secondary"})}))),k?e(t,{item:!0,marginLeft:2,height:"100%",children:e(A,{appName:c})}):null]})]}),e(L,{})]});try{a.displayName="PageHeader",a.__docgenInfo={description:"",displayName:"PageHeader",props:{breadcrumbs:{defaultValue:null,description:"Render breadcrumbs above the header",name:"breadcrumbs",required:!0,type:{name:"BreadcrumbsProps"}},buttons:{defaultValue:null,description:"Renders buttons in the right side of the header",name:"buttons",required:!1,type:{name:"ButtonsProps[]"}},feedback:{defaultValue:{value:"false"},description:"If true, the Give Feedback button displays",name:"feedback",required:!1,type:{name:"boolean"}},headerText:{defaultValue:null,description:"The text that displays in the header",name:"headerText",required:!0,type:{name:"string"}},helpAppName:{defaultValue:null,description:`The name that displays in the help text
@example "This App"
@returns Need Help? Watch a demo for This App`,name:"helpAppName",required:!1,type:{name:"string"}},helpLink:{defaultValue:null,description:"The URL to the Help Demo",name:"helpLink",required:!1,type:{name:"string"}}}}}catch{}const cr={title:"Components/PageHeader/PageHeader",component:a,tags:["autodocs"],argTypes:{helpAppName:{if:{global:"theme",eq:"legacyBS"}}},args:{helpAppName:"This App"}},n={render:r=>e(a,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"}}},m={render:r=>e(a,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},helpLink:"https://www.availity.com"}},p={render:r=>e(a,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},buttons:[{children:"Button 1",key:"button1"}]}},s={render:r=>e(a,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},buttons:[{children:"Button 1",key:"button1"},{children:"Button 2",key:"button2"}]}};var h,g,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: PageHeaderProps) => <PageHeader {...args} />,
  args: {
    headerText: 'This text is a child of PageHeader',
    breadcrumbs: {
      active: 'This Page'
    }
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var P,b,T;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: (args: PageHeaderProps) => <PageHeader {...args} />,
  args: {
    headerText: 'This text is a child of PageHeader',
    breadcrumbs: {
      active: 'This Page'
    },
    helpLink: 'https://www.availity.com'
  }
}`,...(T=(b=m.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var H,y,x;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(x=(y=p.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var B,_,v;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(v=(_=s.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const lr=["_PageHeader","_PageHeaderHelp","_PageHeaderSingleButton","_PageHeaderDoubleButtons"];export{n as _PageHeader,s as _PageHeaderDoubleButtons,m as _PageHeaderHelp,p as _PageHeaderSingleButton,lr as __namedExportsOrder,cr as default};
//# sourceMappingURL=PageHeader.stories-3408c0f0.js.map