import{j as e,r as n}from"./iframe-DHkqGgbi.js";import{A as l}from"./Avatar-_aEUDKy3.js";import{C as a}from"./Chip-CRUiWbeV.js";import{C as c}from"./Collapse-B35dphRb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_N_5Q_Bv.js";import"./index-BsDjwuR8.js";import"./___vite-browser-external_commonjs-proxy-C849EnNk.js";import"./index-BKtu72rt.js";import"./Common-BLIi_r9Z.js";import"./faMagnifyingGlass-DEVYYJwr.js";import"./FaSvgIcon-BtkjvlUV.js";import"./SvgIcon-D9Y7JiS_.js";import"./memoTheme-vxEZSkJ8.js";import"./styled-BFLY3dn7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSvgIcon-BS4jmzRl.js";import"./useSlot-CAeYipRU.js";import"./mergeSlotProps-Dp8H4ez1.js";import"./useForkRef-B4h6zx_x.js";import"./Chip-C_iVTTlh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BwqJJF5q.js";import"./useTimeout-Bjfnw5AG.js";import"./TransitionGroupContext-3E4Xv_Lx.js";import"./useEventCallback-LtXdtY4h.js";import"./isFocusVisible-B8k4qzLc.js";import"./useTheme-DTNKpojL.js";import"./utils-BQBkKAg6.js";const J={title:"Components/Chip/Chip",component:a,tags:["autodocs"],args:{label:"Chip"}},t={render:r=>e.jsx(a,{...r}),args:{label:"Chip"}},o={render:r=>{const[p,i]=n.useState(!0),m=()=>{i(!1),setTimeout(()=>i(!0),1e3)};return e.jsx(c,{in:p,children:e.jsx(a,{...r,onDelete:m})})}},s={render:r=>e.jsx(a,{...r,avatar:e.jsx(l,{children:"A"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
