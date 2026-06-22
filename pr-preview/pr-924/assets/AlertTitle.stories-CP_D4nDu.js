import{j as t,r as a}from"./iframe-BcpGFM79.js";import{A as m}from"./Alert-CYTKc6CY.js";import{A as i}from"./AlertTitle-IxF9oNlX.js";import{S as c}from"./MuiSystemProperties-CtLr4Jcz.js";import{C as d}from"./Collapse-CVPkzKoB.js";import"./preload-helper-Dab_6GC_.js";import"./IconButton-BQJBDMuu.js";import"./Tooltip-CGfPTNyc.js";import"./useTheme-DjrtHLeH.js";import"./styled-YELB7PbO.js";import"./memoTheme-CUR-_UQu.js";import"./useSlot-COYLd7Pd.js";import"./mergeSlotProps-Y-QEFSGT.js";import"./useForkRef-BE9Mh8bk.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-D7cMLa2k.js";import"./useControlled-B1x_m4Ao.js";import"./useEventCallback-B998UMHo.js";import"./getReactElementRef-ksE6JIsb.js";import"./Grow-DgKR5Z9h.js";import"./utils-CX-dufza.js";import"./TransitionGroupContext-DMVjCYVP.js";import"./Popper-77inD8mp.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-D0YnE6km.js";import"./useSlotProps-wCHKs8ch.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-bOxsf80n.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DuPW9E1K.js";import"./CircularProgress-B0VZoizd.js";import"./Actions-D5HDZDyt.js";import"./FaSvgIcon-CT_rBCtN.js";import"./SvgIcon-DwHLgNU7.js";import"./Form-BSB-tu1Z.js";import"./Alert-BwHZJPPa.js";import"./createSvgIcon-D6BcWLqc.js";import"./Close-BJXb1f8O.js";import"./Paper-DJSKHSTy.js";import"./Typography-D2_Tvhdq.js";const n=[...c,"align","className","component","gutterBottom","noWrap","paragraph","style","variant","variantMapping"],tt={title:"Components/Alert/AlertTitle",component:i,parameters:{docs:{controls:{exclude:n}},canvas:{controls:{exclude:n}}},tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},e={render:s=>t.jsxs(m,{severity:"info",children:[t.jsx(i,{...s}),"This text is inside the Alert"]})},r={render:s=>{const[p,o]=a.useState(!0),l=()=>{o(!1),setTimeout(()=>o(!0),1e3)};return t.jsx(d,{in:p,children:t.jsxs(m,{severity:"info",onClose:l,children:[t.jsx(i,{...s}),"This text is inside the Alert"]})})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
