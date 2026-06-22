import{j as t,r as a}from"./iframe-B3KH45W1.js";import{A as m}from"./Alert-D7-DHY3L.js";import{A as i}from"./AlertTitle-DoVh-sKC.js";import{S as c}from"./MuiSystemProperties-CtLr4Jcz.js";import{C as d}from"./Collapse-DfjkZUiC.js";import"./preload-helper-Dab_6GC_.js";import"./IconButton-UjBwLmV3.js";import"./Tooltip-BBnoBBLv.js";import"./useTheme-Ds4SDsFm.js";import"./styled-B89GBRvi.js";import"./memoTheme-DWwRHojM.js";import"./useSlot-DGd0VXU6.js";import"./mergeSlotProps--7hXBDn0.js";import"./useForkRef-C1kAtY37.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-BS1Rp5sI.js";import"./useControlled-cbOgjwu_.js";import"./useEventCallback-CVbD2IC6.js";import"./getReactElementRef-CBNP7eUh.js";import"./Grow-iiG6wjq6.js";import"./utils-BQeXEgW_.js";import"./TransitionGroupContext-CAm2K2SY.js";import"./Popper-Bmyzhh-s.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CUL18StY.js";import"./useSlotProps-CXce_cAS.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Dv3tzyaZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DgN9Oijw.js";import"./CircularProgress-BSNAtS4j.js";import"./Actions-CO819m3I.js";import"./FaSvgIcon-DUC6Q4wv.js";import"./SvgIcon-DDVH-xS0.js";import"./Form-D1K37nGD.js";import"./Alert-CobxnwGF.js";import"./createSvgIcon-CP7Sjzln.js";import"./Close-CCXJfw-Y.js";import"./Paper-BJPkQ8DM.js";import"./Typography-D3qZBRmm.js";const n=[...c,"align","className","component","gutterBottom","noWrap","paragraph","style","variant","variantMapping"],tt={title:"Components/Alert/AlertTitle",component:i,parameters:{docs:{controls:{exclude:n}},canvas:{controls:{exclude:n}}},tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},e={render:s=>t.jsxs(m,{severity:"info",children:[t.jsx(i,{...s}),"This text is inside the Alert"]})},r={render:s=>{const[p,o]=a.useState(!0),l=()=>{o(!1),setTimeout(()=>o(!0),1e3)};return t.jsx(d,{in:p,children:t.jsxs(m,{severity:"info",onClose:l,children:[t.jsx(i,{...s}),"This text is inside the Alert"]})})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
