import{j as e}from"./iframe-DdfW-8_N.js";import{C as l}from"./Chip-C2Qu8ViK.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-WEQlv1NO.js";import"./SvgIcon-Dd37ovUy.js";import"./memoTheme-Dy9OKavz.js";import"./styled-LeBzfrVS.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-CGn3_9IL.js";import"./mergeSlotProps-CqPusD8W.js";import"./useForkRef-B88Yvlsp.js";import"./ButtonBase-Beiib6fe.js";import"./useTimeout-B6LNCSjE.js";import"./TransitionGroupContext-CyCzSLBs.js";import"./useEventCallback-DvSzgmRL.js";import"./isFocusVisible-B8k4qzLc.js";const r=({color:t="default",...o})=>e.jsx(l,{color:t,...o,size:"small"});try{r.displayName="StatusChip",r.__docgenInfo={description:"",displayName:"StatusChip",props:{color:{defaultValue:{value:"default"},description:"The color of the component.",name:"color",required:!1,type:{name:'"primary" | "secondary" | "error" | "info" | "success" | "warning" | "default"'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ChipClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},label:{defaultValue:null,description:"The content of the component.",name:"label",required:!1,type:{name:"ReactNode"}},tabIndex:{defaultValue:null,description:"@ignore",name:"tabIndex",required:!1,type:{name:"number"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<ChipSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ root?: SlotProps<"div", {}, ChipOwnerState>; label?: SlotProps<"span", {}, ChipOwnerState>; }'}}}}}catch{}const P={title:"Components/Chip/StatusChip",component:r,tags:["autodocs"],args:{label:"Chip",color:"default"}},a={render:t=>e.jsx(r,{...t}),args:{label:"Chip",color:"primary"}},s={render:()=>e.jsxs(e.Fragment,{children:["Item 1 ",e.jsx(r,{color:"success",label:"Approved"}),e.jsx("br",{}),"Item 2 ",e.jsx(r,{color:"info",label:"Info"}),e.jsx("br",{}),"Item 3 ",e.jsx(r,{color:"warning",label:"Pending"}),e.jsx("br",{}),"Item 4 ",e.jsx(r,{color:"error",label:"Declined"}),e.jsx("br",{}),"Item 5 ",e.jsx(r,{color:"secondary",label:"Neutral"}),e.jsx("br",{})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args: StatusChipProps) => <StatusChip {...args} />,
  args: {
    label: 'Chip',
    color: 'primary'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const q=["_Chip","_Status"];export{a as _Chip,s as _Status,q as __namedExportsOrder,P as default};
