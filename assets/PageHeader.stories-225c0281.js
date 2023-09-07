import{a as s,j as e}from"./jsx-runtime-390e5fc8.js";import{D as j}from"./index-fa87a626.js";import{T as b}from"./index-e402bfbb.js";import{N as M,c as q}from"./index-43ec0239.js";import{L as g}from"./index-3d8ed985.js";import{M as D}from"./Breadcrumbs-09be348c.js";import{M as f}from"./Typography-8314e3e3.js";import{B as V}from"./index-c54b662a.js";import{G as a}from"./Grid-e31ff0b5.js";import{C as z}from"./Container-a800528a.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./Divider-a85f70eb.js";import"./styled-2191822d.js";import"./useThemeProps-66ab754c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./dividerClasses-cf8bd2cb.js";import"./faCircleArrowRight-555d384f.js";import"./faMagnifyingGlass-2576db7f.js";import"./SvgIcon-644454bc.js";import"./Link-6cc3d459.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useForkRef-153a0a89.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-cafa5f0c.js";import"./ButtonBase-121cbb7f.js";import"./emotion-react.browser.esm-d7d6545d.js";import"./useSlotProps-38dd38c0.js";import"./extendSxProp-564f0963.js";import"./Button-fce9389c.js";import"./Tooltip-42ba96db.js";import"./useTheme-c775f3da.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./utils-aacfec48.js";import"./useId-6f4bfce0.js";import"./IconButton-130e3844.js";import"./LoadingButton-25a551fc.js";var G=({active:r,children:t,crumbs:i,emptyState:n="...",homeUrl:u="/public/apps/dashboard",...L})=>{const S=({name:d=n,url:h})=>{const P={"aria-label":d,children:d};return h?e(g,{...P,href:h}):e(f,{...P})};return s(D,{...L,separator:e(M,{fontSize:"small"}),slotProps:{collapsedIcon:{className:"breadcrumbs__collapsed-icon"}},slots:{CollapsedIcon:q},children:[e(g,{"aria-label":"Home",href:u,children:"Home"}),i&&i.length>0&&i.map(d=>S(d)),t,e(f,{children:r||n})]})};const o=({breadcrumbs:r,buttons:t,headerText:i,helpLink:n})=>s(a,{component:z,container:!0,direction:"column",children:[r||n?s(a,{direction:"row",item:!0,container:!0,justifyContent:"space-between",marginBottom:4,children:[r&&e(a,{item:!0,children:e(G,{...r})}),n&&e(a,{item:!0,marginLeft:2,children:s(b,{variant:"body1",children:["Need help? ",e(g,{href:n,target:"_blank",children:"Watch a demo"})]})})]}):null,s(a,{direction:"row",item:!0,container:!0,marginBottom:2,alignItems:"center",justifyContent:"space-between",children:[e(a,{item:!0,children:e(b,{variant:"h1",children:i})}),t&&t.length>0&&e(a,{item:!0,container:!0,width:"auto",children:t==null?void 0:t.map(u=>e(a,{item:!0,marginLeft:2,height:"100%",children:e(V,{...u,size:"large",color:"secondary"})}))})]}),e(j,{})]});try{o.displayName="PageHeader",o.__docgenInfo={description:"",displayName:"PageHeader",props:{breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!0,type:{name:"BreadcrumbsProps"}},buttons:{defaultValue:null,description:"",name:"buttons",required:!1,type:{name:"ButtonsProps[]"}},headerText:{defaultValue:null,description:"",name:"headerText",required:!0,type:{name:"string"}},helpLink:{defaultValue:null,description:"",name:"helpLink",required:!1,type:{name:"string"}}}}}catch{}const Be={title:"Components/PageHeader/PageHeader",component:o,tags:["autodocs"]},c={render:r=>e(o,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"}}},m={render:r=>e(o,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},helpLink:"https://www.availity.com"}},p={render:r=>e(o,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},buttons:[{children:"Button 1",key:"button1"}]}},l={render:r=>e(o,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},buttons:[{children:"Button 1",key:"button1"},{children:"Button 2",key:"button2"}]}};var H,T,x;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(I=(N=l.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const ve=["_PageHeader","_PageHeaderHelp","_PageHeaderSingleButton","_PageHeaderDoubleButtons"];export{c as _PageHeader,l as _PageHeaderDoubleButtons,m as _PageHeaderHelp,p as _PageHeaderSingleButton,ve as __namedExportsOrder,Be as default};
//# sourceMappingURL=PageHeader.stories-225c0281.js.map
