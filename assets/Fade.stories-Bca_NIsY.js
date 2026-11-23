import{j as n,r as s}from"./iframe-C4HkdVED.js";import{b as m}from"./index-CDU9eLTh.js";import{F as d}from"./Fade-JYP9Xa3N.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BxZtHMSR.js";import"./IconButton-DAm3sfm9.js";import"./memoTheme-BG6Rse2P.js";import"./styled-BT-YQVcS.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-DSSz5Mb_.js";import"./useTimeout-Dr23bHsI.js";import"./TransitionGroupContext-CZn2k0zL.js";import"./useForkRef-DbUR2J1C.js";import"./useEventCallback-D9gX9Adj.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ClUyHzUc.js";import"./Tooltip-Cu6qxs5M.js";import"./useTheme-B8XrPkIo.js";import"./useSlot-BskdyKfe.js";import"./mergeSlotProps-l3M3qA9x.js";import"./useControlled-DrH6I0XL.js";import"./getReactElementRef-BgdKh17h.js";import"./Portal-Dwihqrdb.js";import"./utils-DTqk_mV5.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-zZW6O8Vc.js";import"./Button-Xlv09vPK.js";import"./index-BbnWHkMi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CzUPI6h_.js";import"./Alert-C61Jg1pJ.js";import"./createSvgIcon-ZWi4Noed.js";import"./Close-K-Su-P3R.js";import"./Paper-D1x-q-nj.js";import"./AlertTitle-CiXb67Lu.js";import"./Typography-Da_zx24V.js";const i=e=>n.jsx(d,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
