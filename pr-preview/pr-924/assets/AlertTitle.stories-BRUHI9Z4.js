import{j as t,r as a}from"./iframe-DHkqGgbi.js";import{A as m}from"./Alert-B8NdUQLL.js";import{A as i}from"./AlertTitle-B86gU-wF.js";import{S as c}from"./MuiSystemProperties-CtLr4Jcz.js";import{C as d}from"./Collapse-B35dphRb.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-D5Zzj5BR.js";import"./Tooltip-YeMRA4-y.js";import"./useTheme-DTNKpojL.js";import"./styled-BFLY3dn7.js";import"./memoTheme-vxEZSkJ8.js";import"./useSlot-CAeYipRU.js";import"./mergeSlotProps-Dp8H4ez1.js";import"./useForkRef-B4h6zx_x.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-Bjfnw5AG.js";import"./useControlled-DlDi1BKb.js";import"./useEventCallback-LtXdtY4h.js";import"./getReactElementRef-BRoKhHqU.js";import"./Grow-CwxupgJl.js";import"./utils-BQBkKAg6.js";import"./TransitionGroupContext-3E4Xv_Lx.js";import"./Popper-BUehIlZq.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CtpwjVP0.js";import"./useSlotProps-CZQ_I0Kw.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DmdwZwcg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BwqJJF5q.js";import"./CircularProgress-D39cxiof.js";import"./Actions-BhLIra-T.js";import"./FaSvgIcon-BtkjvlUV.js";import"./SvgIcon-D9Y7JiS_.js";import"./Form-CBGs9Zxl.js";import"./Alert-CHLZka3S.js";import"./createSvgIcon-BS4jmzRl.js";import"./Close-BGS6MUFg.js";import"./Paper-Cer6O457.js";import"./Typography-i96SYvKe.js";const n=[...c,"align","className","component","gutterBottom","noWrap","paragraph","style","variant","variantMapping"],tt={title:"Components/Alert/AlertTitle",component:i,parameters:{docs:{controls:{exclude:n}},canvas:{controls:{exclude:n}}},tags:["autodocs"],args:{children:"This text is inside the AlertTitle"}},e={render:s=>t.jsxs(m,{severity:"info",children:[t.jsx(i,{...s}),"This text is inside the Alert"]})},r={render:s=>{const[p,o]=a.useState(!0),l=()=>{o(!1),setTimeout(()=>o(!0),1e3)};return t.jsx(d,{in:p,children:t.jsxs(m,{severity:"info",onClose:l,children:[t.jsx(i,{...s}),"This text is inside the Alert"]})})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
