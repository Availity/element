import{j as e,r as n}from"./iframe-D9VxGUXm.js";import{A as l}from"./Avatar-CjAMm9Tx.js";import{C as a}from"./Chip-Bt_M0cc7.js";import{C as c}from"./Collapse-BO7aptJF.js";import"./preload-helper-Dab_6GC_.js";import"./index-CrBisZO-.js";import"./index-bb5wdbmP.js";import"./___vite-browser-external_commonjs-proxy-CBXrWfvd.js";import"./index-BuWe24oV.js";import"./Common-BJBtPzYe.js";import"./faMagnifyingGlass-DEVYYJwr.js";import"./FaSvgIcon-CwoOr0og.js";import"./SvgIcon-Bgb2NC38.js";import"./memoTheme-CUWoCynM.js";import"./styled-D8Xb_hHx.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSvgIcon-CuKrs_jq.js";import"./useSlot-BAM4jdU8.js";import"./mergeSlotProps-CLdLLAsF.js";import"./useForkRef-5-P7CGIn.js";import"./Chip-DKO5tgQr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-IEWOwJJy.js";import"./useTimeout-CCeZqBN_.js";import"./TransitionGroupContext-BLR2oRR2.js";import"./useEventCallback-BrENIvCl.js";import"./isFocusVisible-B8k4qzLc.js";import"./useTheme-B41ItSj5.js";import"./utils-Bcz57uZ2.js";const J={title:"Components/Chip/Chip",component:a,tags:["autodocs"],args:{label:"Chip"}},t={render:r=>e.jsx(a,{...r}),args:{label:"Chip"}},o={render:r=>{const[p,i]=n.useState(!0),m=()=>{i(!1),setTimeout(()=>i(!0),1e3)};return e.jsx(c,{in:p,children:e.jsx(a,{...r,onDelete:m})})}},s={render:r=>e.jsx(a,{...r,avatar:e.jsx(l,{children:"A"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
