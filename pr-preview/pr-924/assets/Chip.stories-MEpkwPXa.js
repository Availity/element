import{j as e,r as n}from"./iframe-BdOkmXSO.js";import{A as l}from"./Avatar-7hfCAanQ.js";import{C as a}from"./Chip-CtxbudtB.js";import{C as c}from"./Collapse-DoKQNqzl.js";import"./preload-helper-Dab_6GC_.js";import"./index-CRxIUl4L.js";import"./index-BZLdTlCl.js";import"./___vite-browser-external_commonjs-proxy-D-t058PY.js";import"./index-CUaLnuLN.js";import"./Common-DofP6EnG.js";import"./faMagnifyingGlass-DEVYYJwr.js";import"./FaSvgIcon-D_zjT4On.js";import"./SvgIcon-BD13zcFd.js";import"./memoTheme-Dp1NrYg6.js";import"./styled-ntycrLPJ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSvgIcon-B1lFLeS5.js";import"./useSlot-Do_-kGcn.js";import"./mergeSlotProps-Bpe1uZ1i.js";import"./useForkRef-B6GvvQRB.js";import"./Chip-OW73pPap.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D0mr5YFJ.js";import"./useTimeout-yhleNqH_.js";import"./TransitionGroupContext-Ce7OQG8A.js";import"./useEventCallback-Ci1dFtlM.js";import"./isFocusVisible-B8k4qzLc.js";import"./useTheme-DpzwBSOw.js";import"./utils-BBZ_5XBR.js";const J={title:"Components/Chip/Chip",component:a,tags:["autodocs"],args:{label:"Chip"}},t={render:r=>e.jsx(a,{...r}),args:{label:"Chip"}},o={render:r=>{const[p,i]=n.useState(!0),m=()=>{i(!1),setTimeout(()=>i(!0),1e3)};return e.jsx(c,{in:p,children:e.jsx(a,{...r,onDelete:m})})}},s={render:r=>e.jsx(a,{...r,avatar:e.jsx(l,{children:"A"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
