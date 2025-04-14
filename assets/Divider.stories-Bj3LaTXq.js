import{j as a}from"./jsx-runtime-BTJTZTIL.js";import{D as s}from"./Divider-DJW73rZ3.js";import"./index-ChsGqxH_.js";import"./index-BgYLq7fD.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./generateUtilityClass-BeVSWKCg.js";import"./identifier-CudAVvBZ.js";import"./memoTheme-CpoNRPWX.js";import"./styled-CKuRQFSa.js";import"./DefaultPropsProvider-CWkNlXkE.js";import"./dividerClasses-0g4QmK6Y.js";import"./generateUtilityClasses-whvyra8-.js";const i=e=>a.jsx(s,{...e});try{i.displayName="Divider",i.__docgenInfo={description:"",displayName:"Divider",props:{variant:{defaultValue:{value:"'fullWidth'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'OverridableStringUnion<"inset" | "middle" | "fullWidth", DividerPropsVariantOverrides>'}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<DividerClasses> & Partial<ClassNameMap<never>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLHRElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},orientation:{defaultValue:{value:"'horizontal'"},description:"The component orientation.",name:"orientation",required:!1,type:{name:'"horizontal" | "vertical"'}},absolute:{defaultValue:{value:"false"},description:"Absolutely position the element.",name:"absolute",required:!1,type:{name:"boolean"}},flexItem:{defaultValue:{value:"false"},description:"If `true`, a vertical divider will have the correct height when used in flex container.\n(By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)",name:"flexItem",required:!1,type:{name:"boolean"}},light:{defaultValue:{value:"false"},description:"If `true`, the divider will have a lighter color.\n@deprecated Use <Divider sx={{ opacity: 0.6 }} /> (or any opacity or color) instead. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"light",required:!1,type:{name:"boolean"}}}}}catch{}const C={title:"Components/Divider/Divider",component:i,tags:["autodocs"]},d={position:"fixed"},p={height:"300px",width:"1px"},c={height:"1px",width:"300px"},m={display:"flex"},t={render:e=>{const o={...d,...e.orientation==="vertical"?p:c,...e.orientation==="vertical"&&e.flexItem?m:{}};return a.jsx("div",{style:o,children:a.jsx(i,{...e})})}};var r,n,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: DividerProps) => {
    const containerStyle = {
      ...ContainerStyle,
      ...(args.orientation === 'vertical' ? VerticalContainerStyle : HorizontalContainerStyle),
      ...(args.orientation === 'vertical' && args.flexItem ? VerticalFlexStyle : {})
    };
    return <div style={containerStyle}>
        <Divider {...args} />
      </div>;
  }
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const I=["_Divider"];export{t as _Divider,I as __namedExportsOrder,C as default};
