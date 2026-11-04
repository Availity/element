import{j as n,r as s}from"./iframe-La0hozmm.js";import{b as m}from"./index-DAsW7_Z1.js";import{F as d}from"./Fade-DsXUXhXd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CT5mpeGo.js";import"./IconButton-BEf7IA6l.js";import"./memoTheme-CzcgztNR.js";import"./styled-06PLk0qx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-RNjBI3PY.js";import"./useTimeout-CjP9kdgI.js";import"./TransitionGroupContext-Db3Z6NMb.js";import"./useForkRef-CYgSXLxN.js";import"./useEventCallback-CkMNQS0_.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DKXLIFka.js";import"./Tooltip-DDgYhS1x.js";import"./useTheme-D5kgDNuB.js";import"./useSlot-nKi4u3tI.js";import"./mergeSlotProps-CfiUOF2K.js";import"./useControlled-DV2EMPBp.js";import"./getReactElementRef-TIeMXNsW.js";import"./Portal-QPUTbchU.js";import"./utils-C_Yf081A.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-o4xrbGrj.js";import"./Button-x0oW_Zme.js";import"./index-D89vBAiO.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BIfisKmW.js";import"./Alert-DpQUQzzA.js";import"./createSvgIcon-CogVIOis.js";import"./Close-B_nlfjmT.js";import"./Paper-BvBPQPSI.js";import"./AlertTitle-B7XK45KE.js";import"./Typography-F8uVoBR9.js";const i=e=>n.jsx(d,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
