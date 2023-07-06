import{j as i}from"./jsx-runtime-91a467a5.js";import{M as s}from"./Divider-9474b138.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-cb03d4d5.js";import"./useThemeProps-911242ec.js";import"./extends-bab83b91.js";import"./dividerClasses-d0d5581a.js";const a=e=>i(s,{...e});try{a.displayName="Divider",a.__docgenInfo={description:"",displayName:"Divider",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<DividerClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLHRElement>"}},orientation:{defaultValue:{value:"'horizontal'"},description:"The component orientation.",name:"orientation",required:!1,type:{name:'"horizontal" | "vertical"'}},variant:{defaultValue:{value:"'fullWidth'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"middle" | "inset" | "fullWidth"'}},absolute:{defaultValue:{value:"false"},description:"Absolutely position the element.",name:"absolute",required:!1,type:{name:"boolean"}},flexItem:{defaultValue:{value:"false"},description:"If `true`, a vertical divider will have the correct height when used in flex container.\n(By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)",name:"flexItem",required:!1,type:{name:"boolean"}},light:{defaultValue:{value:"false"},description:"If `true`, the divider will have a lighter color.",name:"light",required:!1,type:{name:"boolean"}}}}}catch{}const V={title:"Components/Divider/Divider",component:a,tags:["autodocs"]},d={position:"fixed"},c={height:"300px",width:"1px"},p={height:"1px",width:"300px"},u={display:"flex"},t={render:e=>{const o={...d,...e.orientation==="vertical"?c:p,...e.orientation==="vertical"&&e.flexItem?u:{}};return i("div",{style:o,children:i(a,{...e})})}};var r,l,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const _=["_Divider"];export{t as _Divider,_ as __namedExportsOrder,V as default};
//# sourceMappingURL=Divider.stories-5bcae4d6.js.map
