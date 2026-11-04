import{j as n,r as s}from"./iframe-igAdvFbl.js";import{b as m}from"./index-CmSTrFPu.js";import{F as d}from"./Fade-D_O_c1g4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0-lL2nR.js";import"./IconButton-C_pwG3tG.js";import"./memoTheme-CLnB_uxM.js";import"./styled-91ph4J30.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-B-BThNWO.js";import"./useTimeout-BVAWMZsv.js";import"./TransitionGroupContext-ymy7tNok.js";import"./useForkRef-D-t6gd0T.js";import"./useEventCallback-CsTRRlXt.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-W3XJwf44.js";import"./Tooltip-Cq44iNEt.js";import"./useTheme-CIUac4TP.js";import"./useSlot-DFdPJoU3.js";import"./mergeSlotProps-Cu3OtoH3.js";import"./useControlled-CFxyCb-W.js";import"./getReactElementRef-B9sY4O0b.js";import"./Portal-CXKAB8qb.js";import"./utils-BtrN11DB.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-IKBnSf1M.js";import"./Button-Cul-JvC2.js";import"./index-LwuFN9gm.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Bjb7RMXU.js";import"./Alert-FSGa90Ge.js";import"./createSvgIcon-D2IPPG_U.js";import"./Close-zMHLptrc.js";import"./Paper-ClVD0o31.js";import"./AlertTitle-aTF0v_6t.js";import"./Typography-D8sokpBT.js";const i=e=>n.jsx(d,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
