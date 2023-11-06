import{a as s,j as e}from"./jsx-runtime-390e5fc8.js";import{D as j}from"./index-717ad5e2.js";import{T as b}from"./index-77af8b5f.js";import{N as M,c as q}from"./index-f35eb24e.js";import{L as g}from"./index-77c93b21.js";import{M as D}from"./Breadcrumbs-7e3afba9.js";import{M as f}from"./Typography-a571125c.js";import{B as V}from"./index-75b5f10d.js";import{G as a}from"./Grid-d51fec4b.js";import{C as z}from"./Container-6823ff64.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./Divider-e6df2ce9.js";import"./createTheme-e6b56ddb.js";import"./clsx-8416b751.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-188025da.js";import"./useThemeProps-db7202c2.js";import"./dividerClasses-d4e8510c.js";import"./generateUtilityClasses-f776b170.js";import"./faCircleArrowRight-5066acd3.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-ab7aa383.js";import"./Link-20859ed0.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useForkRef-153a0a89.js";import"./react-is.production.min-a192e302.js";import"./createSvgIcon-e4b87ef5.js";import"./ButtonBase-140e1396.js";import"./emotion-react.browser.esm-69a15469.js";import"./TransitionGroupContext-c71596b3.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./useSlotProps-1710581f.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./extendSxProp-4d42c058.js";import"./Button-edeb3da4.js";import"./Tooltip-2962810d.js";import"./useTheme-3a36d7a0.js";import"./ownerDocument-613eb639.js";import"./Grow-39ab3d27.js";import"./index-8a077077.js";import"./utils-744d0bbc.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-78b216db.js";import"./LoadingButton-78cd5afa.js";import"./extends-90dea224.js";import"./CircularProgress-a75919ff.js";import"./styled-4350ac6b.js";var G=({active:r,children:t,crumbs:n,emptyState:i="...",homeUrl:u="/public/apps/dashboard",...L})=>{const S=({name:d=i,url:h})=>{const P={"aria-label":d,children:d};return h?e(g,{...P,href:h}):e(f,{...P})};return s(D,{...L,separator:e(M,{fontSize:"xsmall"}),slotProps:{collapsedIcon:{className:"breadcrumbs__collapsed-icon"}},slots:{CollapsedIcon:q},children:[e(g,{"aria-label":"Home",href:u,loadApp:!1,children:"Home"}),n&&n.length>0&&n.map(d=>S(d)),t,e(f,{children:r||i})]})};const o=({breadcrumbs:r,buttons:t,headerText:n,helpLink:i})=>s(a,{component:z,container:!0,direction:"column",marginTop:"1rem",marginBottom:"1.25rem",children:[r||i?s(a,{direction:"row",item:!0,container:!0,justifyContent:"space-between",marginBottom:4,children:[r&&e(a,{item:!0,children:e(G,{...r})}),i&&e(a,{item:!0,marginLeft:2,children:s(b,{variant:"body1",children:["Need help? ",e(g,{href:i,target:"_blank",children:"Watch a demo"})]})})]}):null,s(a,{direction:"row",item:!0,container:!0,marginBottom:2,alignItems:"center",justifyContent:"space-between",children:[e(a,{item:!0,children:e(b,{variant:"h1",children:n})}),t&&t.length>0&&e(a,{item:!0,container:!0,width:"auto",children:t==null?void 0:t.map(u=>e(a,{item:!0,marginLeft:2,height:"100%",children:e(V,{...u,size:"large",color:"secondary"})}))})]}),e(j,{})]});try{o.displayName="PageHeader",o.__docgenInfo={description:"",displayName:"PageHeader",props:{breadcrumbs:{defaultValue:null,description:"",name:"breadcrumbs",required:!0,type:{name:"BreadcrumbsProps"}},buttons:{defaultValue:null,description:"",name:"buttons",required:!1,type:{name:"ButtonsProps[]"}},headerText:{defaultValue:null,description:"",name:"headerText",required:!0,type:{name:"string"}},helpLink:{defaultValue:null,description:"",name:"helpLink",required:!1,type:{name:"string"}}}}}catch{}const De={title:"Components/PageHeader/PageHeader",component:o,tags:["autodocs"]},m={render:r=>e(o,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"}}},c={render:r=>e(o,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},helpLink:"https://www.availity.com"}},p={render:r=>e(o,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},buttons:[{children:"Button 1",key:"button1"}]}},l={render:r=>e(o,{...r}),args:{headerText:"This text is a child of PageHeader",breadcrumbs:{active:"This Page"},buttons:[{children:"Button 1",key:"button1"},{children:"Button 2",key:"button2"}]}};var H,T,x;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: (args: PageHeaderProps) => <PageHeader {...args} />,
  args: {
    headerText: 'This text is a child of PageHeader',
    breadcrumbs: {
      active: 'This Page'
    }
  }
}`,...(x=(T=m.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var y,_,B;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: PageHeaderProps) => <PageHeader {...args} />,
  args: {
    headerText: 'This text is a child of PageHeader',
    breadcrumbs: {
      active: 'This Page'
    },
    helpLink: 'https://www.availity.com'
  }
}`,...(B=(_=c.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var v,w,k;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(N=l.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const Ve=["_PageHeader","_PageHeaderHelp","_PageHeaderSingleButton","_PageHeaderDoubleButtons"];export{m as _PageHeader,l as _PageHeaderDoubleButtons,c as _PageHeaderHelp,p as _PageHeaderSingleButton,Ve as __namedExportsOrder,De as default};
//# sourceMappingURL=PageHeader.stories-4138e867.js.map
