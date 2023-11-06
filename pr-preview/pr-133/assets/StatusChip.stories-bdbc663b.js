import{j as e,a as d,F as u}from"./jsx-runtime-390e5fc8.js";import{C as f}from"./Chip-3bbfa867.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./createTheme-e6b56ddb.js";import"./clsx-8416b751.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./createSvgIcon-e4b87ef5.js";import"./SvgIcon-ab7aa383.js";import"./useThemeProps-db7202c2.js";import"./styled-188025da.js";import"./generateUtilityClasses-f776b170.js";import"./ButtonBase-140e1396.js";import"./emotion-react.browser.esm-69a15469.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";const r=({color:a="default",...c})=>e(f,{color:a,...c,size:"small"});try{r.displayName="StatusChip",r.__docgenInfo={description:"",displayName:"StatusChip",props:{color:{defaultValue:{value:"default"},description:"The color of the component.",name:"color",required:!1,type:{name:'"primary" | "secondary" | "error" | "info" | "success" | "warning" | "default"'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ChipClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},label:{defaultValue:null,description:"The content of the component.",name:"label",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:null,description:"@ignore",name:"tabIndex",required:!1,type:{name:"number"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}}}catch{}const A={title:"Components/Chip/StatusChip",component:r,tags:["autodocs"],args:{label:"Chip",color:"default"}},t={render:a=>e(r,{...a}),args:{label:"Chip",color:"primary"}},o={render:()=>d(u,{children:["Item 1 ",e(r,{color:"success",label:"Approved"}),e("br",{}),"Item 2 ",e(r,{color:"info",label:"Info"}),e("br",{}),"Item 3 ",e(r,{color:"warning",label:"Pending"}),e("br",{}),"Item 4 ",e(r,{color:"error",label:"Declined"}),e("br",{}),"Item 5 ",e(r,{color:"secondary",label:"Neutral"}),e("br",{})]})};var l,s,n;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: StatusChipProps) => <StatusChip {...args} />,
  args: {
    label: 'Chip',
    color: 'primary'
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,p,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <>
      Item 1 <StatusChip color="success" label="Approved" />
      <br />
      Item 2 <StatusChip color="info" label="Info" />
      <br />
      Item 3 <StatusChip color="warning" label="Pending" />
      <br />
      Item 4 <StatusChip color="error" label="Declined" />
      <br />
      Item 5 <StatusChip color="secondary" label="Neutral" />
      <br />
    </>
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const F=["_Chip","_Status"];export{t as _Chip,o as _Status,F as __namedExportsOrder,A as default};
//# sourceMappingURL=StatusChip.stories-bdbc663b.js.map
