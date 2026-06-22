import{j as e,r as n}from"./iframe-B3KH45W1.js";import{A as l}from"./Avatar-Dtrd0Edn.js";import{C as a}from"./Chip-u13OAQaQ.js";import{C as c}from"./Collapse-DfjkZUiC.js";import"./preload-helper-Dab_6GC_.js";import"./index-CM5pd_V5.js";import"./index-DN9vLoIX.js";import"./___vite-browser-external_commonjs-proxy-BJRxm24Q.js";import"./index-CZPtvi5C.js";import"./Common-BAorCfPo.js";import"./faMagnifyingGlass-DEVYYJwr.js";import"./FaSvgIcon-DUC6Q4wv.js";import"./SvgIcon-DDVH-xS0.js";import"./memoTheme-DWwRHojM.js";import"./styled-B89GBRvi.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSvgIcon-CP7Sjzln.js";import"./useSlot-DGd0VXU6.js";import"./mergeSlotProps--7hXBDn0.js";import"./useForkRef-C1kAtY37.js";import"./Chip-CGZm7A6G.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DgN9Oijw.js";import"./useTimeout-BS1Rp5sI.js";import"./TransitionGroupContext-CAm2K2SY.js";import"./useEventCallback-CVbD2IC6.js";import"./isFocusVisible-B8k4qzLc.js";import"./useTheme-Ds4SDsFm.js";import"./utils-BQeXEgW_.js";const J={title:"Components/Chip/Chip",component:a,tags:["autodocs"],args:{label:"Chip"}},t={render:r=>e.jsx(a,{...r}),args:{label:"Chip"}},o={render:r=>{const[p,i]=n.useState(!0),m=()=>{i(!1),setTimeout(()=>i(!0),1e3)};return e.jsx(c,{in:p,children:e.jsx(a,{...r,onDelete:m})})}},s={render:r=>e.jsx(a,{...r,avatar:e.jsx(l,{children:"A"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: ChipProps) => <Chip {...args} />,
  args: {
    label: 'Chip'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: ChipProps) => {
    const [visible, setVisible] = useState(true);
    const onDelete = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };
    return <Collapse in={visible}>
        <Chip {...args} onDelete={onDelete} />
      </Collapse>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ChipProps) => <Chip {...args} avatar={<Avatar>A</Avatar>} />
}`,...s.parameters?.docs?.source}}};const K=["_Chip","_RemovableChip","_Avatar"];export{s as _Avatar,t as _Chip,o as _RemovableChip,K as __namedExportsOrder,J as default};
