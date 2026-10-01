import{j as n,r as s}from"./iframe-BfiSjCZE.js";import{b as m}from"./index-Bonuro7n.js";import{F as d}from"./Fade-DEFCsiCh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BnEi8s_n.js";import"./IconButton-CFfT0ndL.js";import"./memoTheme-Bf2lNlfa.js";import"./styled-B9LoXHeR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-B0Rj5enX.js";import"./useTimeout-Dvw-KAbd.js";import"./TransitionGroupContext-BprlU7j-.js";import"./useForkRef-KHwM-Xb0.js";import"./useEventCallback-BRDDRqyT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DFM5h0gz.js";import"./Tooltip-DQOY4bTe.js";import"./useTheme-CyCmmmWE.js";import"./useSlot-BvJ3REjy.js";import"./mergeSlotProps-d8P6odjW.js";import"./useControlled-DuHd5Dfi.js";import"./getReactElementRef-DrqUH2UJ.js";import"./Portal-1iQSKTOk.js";import"./utils-CZVImzMM.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DsKdZe-B.js";import"./Button-CWR2xa5V.js";import"./index-CnlcVsMi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-pfgupZ4n.js";import"./Alert-u07sRa0D.js";import"./createSvgIcon-DV4tT70v.js";import"./Close-BzO8XwWJ.js";import"./Paper-8FyfnLjY.js";import"./AlertTitle-DWwLMUut.js";import"./Typography-C4HmXqwR.js";const i=e=>n.jsx(d,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
You may specify a single easing or a object containing enter and exit values.`,name:"easing",required:!1,type:{name:"string | { enter?: string | undefined; exit?: string | undefined; } | undefined"}},in:{defaultValue:null,description:"If `true`, the component will transition in.",name:"in",required:!1,type:{name:"boolean | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown> | undefined"}},timeout:{defaultValue:{value:`{
enter: theme.transitions.duration.enteringScreen,
exit: theme.transitions.duration.leavingScreen,
}`},description:`The duration for the transition, in milliseconds.
You may specify a single timeout for all transitions, or individually with an object.`,name:"timeout",required:!1,type:{name:"number | { appear?: number | undefined; enter?: number | undefined; exit?: number | undefined; } | { appear?: number | undefined; enter?: number | undefined; exit?: number | undefined; } | undefined"}}}}}catch{}const Q={title:"Components/Transitions/Fade",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Expand from the start edge of the child element."}}}},t={render:e=>{const[o,r]=s.useState(!0),a=()=>{r(!1),setTimeout(()=>r(!0),1e3)};return n.jsx(i,{in:o,...e,children:n.jsx("div",{children:n.jsx(m,{onClose:a,children:"Dismissable Alert"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: FadeProps) => {
    const [visible, setVisible] = useState(true);
    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };
    return <Fade in={visible} {...args}>
        <div>
          <Alert onClose={onClose}>Dismissable Alert</Alert>
        </div>
      </Fade>;
  }
}`,...t.parameters?.docs?.source}}};const U=["_Fade"];export{t as _Fade,U as __namedExportsOrder,Q as default};
