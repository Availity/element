import{a as o,j as e}from"./jsx-runtime-390e5fc8.js";import{D as w}from"./index-03bacd1a.js";import{T as c}from"./index-90b88d96.js";import{B as k}from"./index-9cfae03f.js";import{L}from"./index-8f828b25.js";import{B as S}from"./index-93428ce8.js";import{G as t}from"./Grid-e557fe35.js";import{C as j}from"./Container-87fd18ac.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./Divider-bf202c30.js";import"./createTheme-e6b56ddb.js";import"./clsx-8416b751.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-78cd751f.js";import"./useThemeProps-285a8f6c.js";import"./dividerClasses-17e5b451.js";import"./generateUtilityClasses-2915a045.js";import"./Typography-125528da.js";import"./extendSxProp-4d42c058.js";import"./index-dd60701b.js";import"./faCircleArrowRight-5066acd3.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-f3e07af8.js";import"./Breadcrumbs-dae1203c.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-c7fbf131.js";import"./ButtonBase-6abe7f0b.js";import"./emotion-react.browser.esm-69a15469.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./useSlotProps-1710581f.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./Link-6b0912e7.js";import"./Button-fef3f699.js";import"./Tooltip-86055ff5.js";import"./useTheme-b3699c65.js";import"./ownerDocument-613eb639.js";import"./Grow-d970f38d.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-ef8e1194.js";import"./LoadingButton-f91fec86.js";import"./extends-90dea224.js";import"./CircularProgress-c55bac56.js";import"./styled-d8af9a46.js";const a=({breadcrumbs:r,buttons:i,headerText:_,helpLink:p})=>o(t,{component:j,container:!0,direction:"column",marginTop:"1rem",marginBottom:"1.25rem",children:[r||p?o(t,{direction:"row",item:!0,container:!0,justifyContent:"space-between",marginBottom:4,children:[r&&e(t,{item:!0,children:e(k,{...r})}),p&&e(t,{item:!0,marginLeft:2,children:o(c,{variant:"body1",children:["Need help? ",e(L,{href:p,target:"_blank",children:"Watch a demo"})]})})]}):null,o(t,{direction:"row",item:!0,container:!0,marginBottom:2,alignItems:"center",justifyContent:"space-between",children:[e(t,{item:!0,children:e(c,{variant:"h1",children:_})}),i&&i.length>0&&e(t,{item:!0,container:!0,width:"auto",children:i==null?void 0:i.map(v=>e(t,{item:!0,marginLeft:2,height:"100%",children:e(S,{...v,size:"large",color:"secondary"})}))})]}),e(w,{})]});try{a.displayName="PageHeader",a.__docgenInfo={description:"",displayName:"PageHeader",props:{breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!0,type:{name:"BreadcrumbsProps"}},buttons:{defaultValue:null,description:"",name:"buttons",required:!1,type:{name:"ButtonsProps[]"}},headerText:{defaultValue:null,description:"",name:"headerText",required:!0,type:{name:"string"}},helpLink:{defaultValue:null,description:"",name:"helpLink",required:!1,type:{name:"string"}}}}}catch{}const Le={title:"Components/PageHeader/PageHeader",component:a,tags:["autodocs"]},n={render:r=>e(a,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"}}},s={render:r=>e(a,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},helpLink:"https://www.availity.com"}},d={render:r=>e(a,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},buttons:[{children:"Button 1",key:"button1"}]}},m={render:r=>e(a,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},buttons:[{children:"Button 1",key:"button1"},{children:"Button 2",key:"button2"}]}};var u,g,l;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
//# sourceMappingURL=PageHeader.stories-48e224c9.js.map
