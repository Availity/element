import{a as o,j as e}from"./jsx-runtime-390e5fc8.js";import{D as w}from"./index-69b098a0.js";import{T as p}from"./index-8224ca1a.js";import{B as k}from"./index-fb253ed3.js";import{L}from"./index-4a0094be.js";import{B as S}from"./index-bc19b086.js";import{G as t}from"./Grid-977833ec.js";import{C as j}from"./Container-92fc112b.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./Divider-a67a617b.js";import"./createTheme-b02e766d.js";import"./clsx-43049957.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-69a32198.js";import"./useThemeProps-ac7867ed.js";import"./dividerClasses-272b0ff4.js";import"./generateUtilityClasses-b06d554b.js";import"./Typography-72ef0a36.js";import"./extendSxProp-b0ad88fc.js";import"./index-edb432cd.js";import"./faCircleArrowRight-45fe0977.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-667e6608.js";import"./Breadcrumbs-ce38e814.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-5dca4d92.js";import"./ButtonBase-78eecb53.js";import"./emotion-react.browser.esm-dc887828.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./useSlotProps-c5009eb1.js";import"./objectWithoutPropertiesLoose-830c72af.js";import"./Link-2e03a78b.js";import"./Button-48a9b380.js";import"./Tooltip-9ef5363d.js";import"./useTheme-a234fe30.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./utils-a53b28cc.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-329b8fa1.js";import"./LoadingButton-8f26fe8a.js";import"./extends-90dea224.js";import"./styled-9972f020.js";const a=({breadcrumbs:r,buttons:i,headerText:B,helpLink:c})=>o(t,{component:j,container:!0,direction:"column",children:[r||c?o(t,{direction:"row",item:!0,container:!0,justifyContent:"space-between",marginBottom:4,children:[r&&e(t,{item:!0,children:e(k,{...r})}),c&&e(t,{item:!0,marginLeft:2,children:o(p,{variant:"body1",children:["Need help? ",e(L,{href:c,target:"_blank",children:"Watch a demo"})]})})]}):null,o(t,{direction:"row",item:!0,container:!0,marginBottom:2,alignItems:"center",justifyContent:"space-between",children:[e(t,{item:!0,children:e(p,{variant:"h1",children:B})}),i&&i.length>0&&e(t,{item:!0,container:!0,width:"auto",children:i==null?void 0:i.map(v=>e(t,{item:!0,marginLeft:2,height:"100%",children:e(S,{...v,size:"large",color:"secondary"})}))})]}),e(w,{})]});try{a.displayName="PageHeader",a.__docgenInfo={description:"",displayName:"PageHeader",props:{breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!0,type:{name:"BreadcrumbsProps"}},buttons:{defaultValue:null,description:"",name:"buttons",required:!1,type:{name:"ButtonsProps[]"}},headerText:{defaultValue:null,description:"",name:"headerText",required:!0,type:{name:"string"}},helpLink:{defaultValue:null,description:"",name:"helpLink",required:!1,type:{name:"string"}}}}}catch{}const Be={title:"Components/PageHeader/PageHeader",component:a,tags:["autodocs"]},n={render:r=>e(a,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"}}},s={render:r=>e(a,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},helpLink:"https://www.availity.com"}},d={render:r=>e(a,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},buttons:[{children:"Button 1",key:"button1"}]}},m={render:r=>e(a,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},buttons:[{children:"Button 1",key:"button1"},{children:"Button 2",key:"button2"}]}};var u,g,l;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(_=(y=m.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const ve=["_PageHeader","_PageHeaderHelp","_PageHeaderSingleButton","_PageHeaderDoubleButtons"];export{n as _PageHeader,m as _PageHeaderDoubleButtons,s as _PageHeaderHelp,d as _PageHeaderSingleButton,ve as __namedExportsOrder,Be as default};
//# sourceMappingURL=PageHeader.stories-4598d26e.js.map
