import{a as s,j as e}from"./jsx-runtime-390e5fc8.js";import{D as j}from"./index-69b098a0.js";import{T as b}from"./index-8224ca1a.js";import{N as M,c as q}from"./index-25d48f71.js";import{L as g}from"./index-4a0094be.js";import{M as D}from"./Breadcrumbs-ce38e814.js";import{M as f}from"./Typography-72ef0a36.js";import{B as V}from"./index-bc19b086.js";import{G as a}from"./Grid-977833ec.js";import{C as z}from"./Container-92fc112b.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./Divider-a67a617b.js";import"./createTheme-b02e766d.js";import"./clsx-43049957.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-69a32198.js";import"./useThemeProps-ac7867ed.js";import"./dividerClasses-272b0ff4.js";import"./generateUtilityClasses-b06d554b.js";import"./faCircleArrowRight-45fe0977.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-667e6608.js";import"./Link-2e03a78b.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useForkRef-153a0a89.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-5dca4d92.js";import"./ButtonBase-78eecb53.js";import"./emotion-react.browser.esm-dc887828.js";import"./useEnhancedEffect-460150e6.js";import"./useSlotProps-c5009eb1.js";import"./objectWithoutPropertiesLoose-830c72af.js";import"./extendSxProp-b0ad88fc.js";import"./Button-48a9b380.js";import"./Tooltip-9ef5363d.js";import"./useTheme-a234fe30.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./utils-a53b28cc.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-329b8fa1.js";import"./LoadingButton-8f26fe8a.js";import"./extends-90dea224.js";import"./styled-9972f020.js";var G=({active:r,children:t,crumbs:n,emptyState:i="...",homeUrl:u="/public/apps/dashboard",...L})=>{const S=({name:d=i,url:h})=>{const P={"aria-label":d,children:d};return h?e(g,{...P,href:h}):e(f,{...P})};return s(D,{...L,separator:e(M,{fontSize:"small"}),slotProps:{collapsedIcon:{className:"breadcrumbs__collapsed-icon"}},slots:{CollapsedIcon:q},children:[e(g,{"aria-label":"Home",href:u,children:"Home"}),n&&n.length>0&&n.map(d=>S(d)),t,e(f,{children:r||i})]})};const o=({breadcrumbs:r,buttons:t,headerText:n,helpLink:i})=>s(a,{component:z,container:!0,direction:"column",children:[r||i?s(a,{direction:"row",item:!0,container:!0,justifyContent:"space-between",marginBottom:4,children:[r&&e(a,{item:!0,children:e(G,{...r})}),i&&e(a,{item:!0,marginLeft:2,children:s(b,{variant:"body1",children:["Need help? ",e(g,{href:i,target:"_blank",children:"Watch a demo"})]})})]}):null,s(a,{direction:"row",item:!0,container:!0,marginBottom:2,alignItems:"center",justifyContent:"space-between",children:[e(a,{item:!0,children:e(b,{variant:"h1",children:n})}),t&&t.length>0&&e(a,{item:!0,container:!0,width:"auto",children:t==null?void 0:t.map(u=>e(a,{item:!0,marginLeft:2,height:"100%",children:e(V,{...u,size:"large",color:"secondary"})}))})]}),e(j,{})]});try{o.displayName="PageHeader",o.__docgenInfo={description:"",displayName:"PageHeader",props:{breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!0,type:{name:"BreadcrumbsProps"}},buttons:{defaultValue:null,description:"",name:"buttons",required:!1,type:{name:"ButtonsProps[]"}},headerText:{defaultValue:null,description:"",name:"headerText",required:!0,type:{name:"string"}},helpLink:{defaultValue:null,description:"",name:"helpLink",required:!1,type:{name:"string"}}}}}catch{}const Se={title:"Components/PageHeader/PageHeader",component:o,tags:["autodocs"]},c={render:r=>e(o,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"}}},m={render:r=>e(o,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},helpLink:"https://www.availity.com"}},p={render:r=>e(o,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},buttons:[{children:"Button 1",key:"button1"}]}},l={render:r=>e(o,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},buttons:[{children:"Button 1",key:"button1"},{children:"Button 2",key:"button2"}]}};var H,T,x;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: (args: PageHeaderProps) => <PageHeader {...args} />,
  args: {
    headerText: 'This text is a child of PageHeader',
    breadcrumbs: {
      active: 'This Page'
    }
  }
}`,...(x=(T=c.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var y,_,B;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: PageHeaderProps) => <PageHeader {...args} />,
  args: {
    headerText: 'This text is a child of PageHeader',
    breadcrumbs: {
      active: 'This Page'
    },
    helpLink: 'https://www.availity.com'
  }
}`,...(B=(_=m.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var v,w,k;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(k=(w=p.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var C,N,I;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(N=l.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const je=["_PageHeader","_PageHeaderHelp","_PageHeaderSingleButton","_PageHeaderDoubleButtons"];export{c as _PageHeader,l as _PageHeaderDoubleButtons,m as _PageHeaderHelp,p as _PageHeaderSingleButton,je as __namedExportsOrder,Se as default};
//# sourceMappingURL=PageHeader.stories-3197aa92.js.map
