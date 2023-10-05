import{a as s,j as e}from"./jsx-runtime-390e5fc8.js";import{D as j}from"./index-9c7c5870.js";import{T as b}from"./index-494e7e2c.js";import{N as M,c as q}from"./index-77e680bf.js";import{L as g}from"./index-b0fc00fa.js";import{M as D}from"./Breadcrumbs-d5cfb1b0.js";import{M as f}from"./Typography-bf8f4457.js";import{B as V}from"./index-2dd44fd1.js";import{G as a}from"./Grid-0aa1fe5b.js";import{C as z}from"./Container-f3fcb1ef.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./Divider-dfc5ac1a.js";import"./clsx.m-fb33c42b.js";import"./createTheme-4dc6b23f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-fc2b35f5.js";import"./useThemeProps-5f33a28c.js";import"./dividerClasses-a7bdfea3.js";import"./generateUtilityClasses-8a827d83.js";import"./faCircleArrowRight-2a86424a.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-102d705b.js";import"./Link-0bbaffab.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useForkRef-153a0a89.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-fa525e7b.js";import"./ButtonBase-654f8a82.js";import"./emotion-react.browser.esm-325397be.js";import"./useEnhancedEffect-460150e6.js";import"./useSlotProps-ff3a8657.js";import"./isHostComponent-73d6e646.js";import"./extendSxProp-fa3ab054.js";import"./Button-4ab2863e.js";import"./Tooltip-528bd356.js";import"./useTheme-117bd4f5.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./utils-c4e5670c.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-5b7e7002.js";import"./LoadingButton-7e27a20e.js";import"./styled-42e4472b.js";var G=({active:r,children:t,crumbs:n,emptyState:i="...",homeUrl:u="/public/apps/dashboard",...L})=>{const S=({name:d=i,url:h})=>{const P={"aria-label":d,children:d};return h?e(g,{...P,href:h}):e(f,{...P})};return s(D,{...L,separator:e(M,{fontSize:"small"}),slotProps:{collapsedIcon:{className:"breadcrumbs__collapsed-icon"}},slots:{CollapsedIcon:q},children:[e(g,{"aria-label":"Home",href:u,children:"Home"}),n&&n.length>0&&n.map(d=>S(d)),t,e(f,{children:r||i})]})};const o=({breadcrumbs:r,buttons:t,headerText:n,helpLink:i})=>s(a,{component:z,container:!0,direction:"column",children:[r||i?s(a,{direction:"row",item:!0,container:!0,justifyContent:"space-between",marginBottom:4,children:[r&&e(a,{item:!0,children:e(G,{...r})}),i&&e(a,{item:!0,marginLeft:2,children:s(b,{variant:"body1",children:["Need help? ",e(g,{href:i,target:"_blank",children:"Watch a demo"})]})})]}):null,s(a,{direction:"row",item:!0,container:!0,marginBottom:2,alignItems:"center",justifyContent:"space-between",children:[e(a,{item:!0,children:e(b,{variant:"h1",children:n})}),t&&t.length>0&&e(a,{item:!0,container:!0,width:"auto",children:t==null?void 0:t.map(u=>e(a,{item:!0,marginLeft:2,height:"100%",children:e(V,{...u,size:"large",color:"secondary"})}))})]}),e(j,{})]});try{o.displayName="PageHeader",o.__docgenInfo={description:"",displayName:"PageHeader",props:{breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!0,type:{name:"BreadcrumbsProps"}},buttons:{defaultValue:null,description:"",name:"buttons",required:!1,type:{name:"ButtonsProps[]"}},headerText:{defaultValue:null,description:"",name:"headerText",required:!0,type:{name:"string"}},helpLink:{defaultValue:null,description:"",name:"helpLink",required:!1,type:{name:"string"}}}}}catch{}const Le={title:"Components/PageHeader/PageHeader",component:o,tags:["autodocs"]},c={render:r=>e(o,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"}}},m={render:r=>e(o,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},helpLink:"https://www.availity.com"}},p={render:r=>e(o,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},buttons:[{children:"Button 1",key:"button1"}]}},l={render:r=>e(o,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},buttons:[{children:"Button 1",key:"button1"},{children:"Button 2",key:"button2"}]}};var H,T,x;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(I=(N=l.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const Se=["_PageHeader","_PageHeaderHelp","_PageHeaderSingleButton","_PageHeaderDoubleButtons"];export{c as _PageHeader,l as _PageHeaderDoubleButtons,m as _PageHeaderHelp,p as _PageHeaderSingleButton,Se as __namedExportsOrder,Le as default};
//# sourceMappingURL=PageHeader.stories-467b124b.js.map
