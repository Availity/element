import{j as t,r as a}from"./iframe-D9VxGUXm.js";import{A as m}from"./Alert-C3bWTqG3.js";import{A as i}from"./AlertTitle-DROGEgnc.js";import{S as c}from"./MuiSystemProperties-CtLr4Jcz.js";import{C as d}from"./Collapse-BO7aptJF.js";import"./preload-helper-Dab_6GC_.js";import"./IconButton-Cib1SE9E.js";import"./Tooltip-88iJgdeD.js";import"./useTheme-B41ItSj5.js";import"./styled-D8Xb_hHx.js";import"./memoTheme-CUWoCynM.js";import"./useSlot-BAM4jdU8.js";import"./mergeSlotProps-CLdLLAsF.js";import"./useForkRef-5-P7CGIn.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-CCeZqBN_.js";import"./useControlled-nlFUsoSS.js";import"./useEventCallback-BrENIvCl.js";import"./getReactElementRef-Dqr_-LzO.js";import"./Grow-o6-ommK8.js";import"./utils-Bcz57uZ2.js";import"./TransitionGroupContext-BLR2oRR2.js";import"./Popper-D26kfRUw.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CSfdL5WB.js";import"./useSlotProps-BLtbmDJZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BrelKzp4.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-IEWOwJJy.js";import"./CircularProgress-rsn-iR-g.js";import"./Actions-Bez28Qkr.js";import"./FaSvgIcon-CwoOr0og.js";import"./SvgIcon-Bgb2NC38.js";import"./Form-BG5Mtcu6.js";import"./Alert-BFBy3_2R.js";import"./createSvgIcon-CuKrs_jq.js";import"./Close-BBIackpZ.js";import"./Paper-oCFHvNnf.js";import"./Typography-mI_XzOBj.js";const n=[...c,"align","className","component","gutterBottom","noWrap","paragraph","style","variant","variantMapping"],tt={title:"Components/Alert/AlertTitle",component:i,parameters:{docs:{controls:{exclude:n}},canvas:{controls:{exclude:n}}},tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},e={render:s=>t.jsxs(m,{severity:"info",children:[t.jsx(i,{...s}),"This text is inside the Alert"]})},r={render:s=>{const[p,o]=a.useState(!0),l=()=>{o(!1),setTimeout(()=>o(!0),1e3)};return t.jsx(d,{in:p,children:t.jsxs(m,{severity:"info",onClose:l,children:[t.jsx(i,{...s}),"This text is inside the Alert"]})})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <Alert severity="info">
      <AlertTitle {...args} />
      This text is inside the Alert
    </Alert>
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [visible, setVisible] = useState(true);
    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };
    return <Collapse in={visible}>
        <Alert severity="info" onClose={onClose}>
          <AlertTitle {...args} />
          This text is inside the Alert
        </Alert>
      </Collapse>;
  }
}`,...r.parameters?.docs?.source}}};const et=["_AlertTitle","_InDismissableAlert"];export{e as _AlertTitle,r as _InDismissableAlert,et as __namedExportsOrder,tt as default};
