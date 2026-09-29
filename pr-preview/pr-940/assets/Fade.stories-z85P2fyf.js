import{j as n,r as s}from"./iframe-ClyInPD8.js";import{b as m}from"./index-VQReFLXa.js";import{F as d}from"./Fade-5LrOnsLV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cl8nDLSA.js";import"./IconButton-3p_Hzj1M.js";import"./memoTheme-CULMZTzm.js";import"./styled-D7PoFJCi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-CL-JJlq6.js";import"./useTimeout-Bv1knD6m.js";import"./TransitionGroupContext-DtZ8GaDC.js";import"./useForkRef-CWYhWoid.js";import"./useEventCallback-CQShbQqM.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cfnaefvx.js";import"./Tooltip-D3BuTBo3.js";import"./useTheme-Cf-PtNfg.js";import"./useSlot-D46kf6z6.js";import"./mergeSlotProps-DRm6mdtU.js";import"./useControlled-CId5aZ2_.js";import"./getReactElementRef-Cs8-_4yh.js";import"./Portal-6M9c9Gfh.js";import"./utils-DIFk0nuU.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-D2_jX090.js";import"./Button-C1rBrVEa.js";import"./index-W6CH2PNc.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DfVeW2fT.js";import"./Alert-DrQ0cXrC.js";import"./createSvgIcon-C9dBkbUF.js";import"./Close-cAlMT6qa.js";import"./Paper-2PN-0rlq.js";import"./AlertTitle-FYVxnJYk.js";import"./Typography-D3903seB.js";const i=e=>n.jsx(d,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
