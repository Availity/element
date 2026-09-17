import{j as n,r as s}from"./iframe-CrDI7sKE.js";import{b as m}from"./index-BiXLOUpO.js";import{F as d}from"./Fade-BmT7tLhS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D1nVldbn.js";import"./IconButton-COXIliVf.js";import"./memoTheme-1eSCZRav.js";import"./styled-CqKFH6eA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-Lw6uESYo.js";import"./useTimeout-B0l-dQbr.js";import"./TransitionGroupContext-Bo9v56k3.js";import"./useForkRef-BfO6-t9P.js";import"./useEventCallback-D4QkonYW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DKP2WMPH.js";import"./Tooltip-BYMj-RjT.js";import"./useTheme-e92JqNOn.js";import"./useSlot--sris71t.js";import"./mergeSlotProps-C73UPCQk.js";import"./useControlled-C0OF1VAF.js";import"./getReactElementRef-d6gO3Pyv.js";import"./Portal-DJpfMgk6.js";import"./utils-BWKdc28P.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cihilg2w.js";import"./Button-C68buGXp.js";import"./index-B75hp5XN.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Db1uzRw5.js";import"./Alert-BCmBnwxM.js";import"./createSvgIcon-B259oLuI.js";import"./Close-BtLqS1Rv.js";import"./Paper-DYAzX1VO.js";import"./AlertTitle-aEHOMc-5.js";import"./Typography-BB__VVHi.js";const i=e=>n.jsx(d,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
