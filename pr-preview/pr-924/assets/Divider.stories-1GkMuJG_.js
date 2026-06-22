import{j as r}from"./iframe-BcpGFM79.js";import{D as i}from"./Divider-BKk7kRuU.js";import"./preload-helper-Dab_6GC_.js";import"./Divider-DtLhEkPR.js";import"./memoTheme-CUR-_UQu.js";import"./styled-YELB7PbO.js";import"./dividerClasses-qU9lkgJy.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";const D={title:"Components/Divider/Divider",component:i,tags:["autodocs"]},o={position:"fixed"},a={height:"300px",width:"1px"},s={height:"1px",width:"300px"},l={display:"flex"},e={render:t=>{const n={...o,...t.orientation==="vertical"?a:s,...t.orientation==="vertical"&&t.flexItem?l:{}};return r.jsx("div",{style:n,children:r.jsx(i,{...t})})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const f=["_Divider"];export{e as _Divider,f as __namedExportsOrder,D as default};
