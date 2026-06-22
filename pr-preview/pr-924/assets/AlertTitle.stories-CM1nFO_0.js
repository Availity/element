import{j as t,r as a}from"./iframe-BdOkmXSO.js";import{A as m}from"./Alert-CSWcSWY9.js";import{A as i}from"./AlertTitle-BE6o4P_Q.js";import{S as c}from"./MuiSystemProperties-CtLr4Jcz.js";import{C as d}from"./Collapse-DoKQNqzl.js";import"./preload-helper-Dab_6GC_.js";import"./IconButton-Ci36e-XY.js";import"./Tooltip-5Kn3M0WA.js";import"./useTheme-DpzwBSOw.js";import"./styled-ntycrLPJ.js";import"./memoTheme-Dp1NrYg6.js";import"./useSlot-Do_-kGcn.js";import"./mergeSlotProps-Bpe1uZ1i.js";import"./useForkRef-B6GvvQRB.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-yhleNqH_.js";import"./useControlled-wRMaIAhC.js";import"./useEventCallback-Ci1dFtlM.js";import"./getReactElementRef-CAZnW1NE.js";import"./Grow-zcR73JmX.js";import"./utils-BBZ_5XBR.js";import"./TransitionGroupContext-Ce7OQG8A.js";import"./Popper-CsnU-V5Y.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-Df3mT0t7.js";import"./useSlotProps-0Tuv8-jv.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C66xLdI-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D0mr5YFJ.js";import"./CircularProgress-BtHd2z-U.js";import"./Actions-j5ZzHduY.js";import"./FaSvgIcon-D_zjT4On.js";import"./SvgIcon-BD13zcFd.js";import"./Form-Dy8jxpW5.js";import"./Alert-Dv8Vaeap.js";import"./createSvgIcon-B1lFLeS5.js";import"./Close-CNJCk13c.js";import"./Paper-X002pFu5.js";import"./Typography-Ba-r-irp.js";const n=[...c,"align","className","component","gutterBottom","noWrap","paragraph","style","variant","variantMapping"],tt={title:"Components/Alert/AlertTitle",component:i,parameters:{docs:{controls:{exclude:n}},canvas:{controls:{exclude:n}}},tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},e={render:s=>t.jsxs(m,{severity:"info",children:[t.jsx(i,{...s}),"This text is inside the Alert"]})},r={render:s=>{const[p,o]=a.useState(!0),l=()=>{o(!1),setTimeout(()=>o(!0),1e3)};return t.jsx(d,{in:p,children:t.jsxs(m,{severity:"info",onClose:l,children:[t.jsx(i,{...s}),"This text is inside the Alert"]})})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
