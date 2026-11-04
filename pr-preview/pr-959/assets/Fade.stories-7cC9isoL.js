import{j as n,r as s}from"./iframe-B7It4zq8.js";import{b as m}from"./index-qq87wHed.js";import{F as d}from"./Fade-dOEIYsg7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-U6rGSuo_.js";import"./IconButton-C-t-b5Lt.js";import"./memoTheme-CGf3L_ek.js";import"./styled-Bn4RjmYR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-B2waO-fK.js";import"./useTimeout-YUVk49Nr.js";import"./TransitionGroupContext-DcJKCyB0.js";import"./useForkRef-CPn4J3x7.js";import"./useEventCallback-C74dKXBI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B2uMItbz.js";import"./Tooltip-CzJoUoCR.js";import"./useTheme-BEYyhBmQ.js";import"./useSlot-W932GJWf.js";import"./mergeSlotProps-D605olu0.js";import"./useControlled-D_SZmVUM.js";import"./getReactElementRef-DdXJtssw.js";import"./Portal-Dv_fvGmT.js";import"./utils-8hf5HdRr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-5kTH7JUJ.js";import"./Button-BIhtYg5K.js";import"./index-DahGL3Ws.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CN80xc_w.js";import"./Alert-Cg60ZnQw.js";import"./createSvgIcon-mTQeEUrk.js";import"./Close-C2tp-l78.js";import"./Paper-16eSpGwX.js";import"./AlertTitle-CpDUr6Aq.js";import"./Typography-D5VLn6r5.js";const i=e=>n.jsx(d,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
