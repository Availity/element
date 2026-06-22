import{j as e,r as n}from"./iframe-BcpGFM79.js";import{A as l}from"./Avatar-BCKj8BfY.js";import{C as a}from"./Chip-C_TxYb1P.js";import{C as c}from"./Collapse-CVPkzKoB.js";import"./preload-helper-Dab_6GC_.js";import"./index-C61jAYVP.js";import"./index-CRoIuHYP.js";import"./___vite-browser-external_commonjs-proxy-DixCwXJd.js";import"./index-CZ2YJDe3.js";import"./Common-IWC_xwUh.js";import"./faMagnifyingGlass-DEVYYJwr.js";import"./FaSvgIcon-CT_rBCtN.js";import"./SvgIcon-DwHLgNU7.js";import"./memoTheme-CUR-_UQu.js";import"./styled-YELB7PbO.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./createSvgIcon-D6BcWLqc.js";import"./useSlot-COYLd7Pd.js";import"./mergeSlotProps-Y-QEFSGT.js";import"./useForkRef-BE9Mh8bk.js";import"./Chip-CVFXZwEA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DuPW9E1K.js";import"./useTimeout-D7cMLa2k.js";import"./TransitionGroupContext-DMVjCYVP.js";import"./useEventCallback-B998UMHo.js";import"./isFocusVisible-B8k4qzLc.js";import"./useTheme-DjrtHLeH.js";import"./utils-CX-dufza.js";const J={title:"Components/Chip/Chip",component:a,tags:["autodocs"],args:{label:"Chip"}},t={render:r=>e.jsx(a,{...r}),args:{label:"Chip"}},o={render:r=>{const[p,i]=n.useState(!0),m=()=>{i(!1),setTimeout(()=>i(!0),1e3)};return e.jsx(c,{in:p,children:e.jsx(a,{...r,onDelete:m})})}},s={render:r=>e.jsx(a,{...r,avatar:e.jsx(l,{children:"A"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
