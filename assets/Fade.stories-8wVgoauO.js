import{j as r,r as s}from"./iframe-BAylI5Je.js";import{b as m}from"./index-D7bO6OTt.js";import{F as p}from"./Fade-CXDV8Ndz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cwm8YEbi.js";import"./Tooltip-xJM8APnn.js";import"./useTheme-Ct91rq7x.js";import"./styled-qchFS-7q.js";import"./memoTheme-BuFiJMU4.js";import"./useSlot-tp0V2ckF.js";import"./mergeSlotProps-CpHFUTeD.js";import"./useForkRef-BbXecB9y.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-Dtra5kqE.js";import"./useControlled-DdXnTKyH.js";import"./useEventCallback-kqwlHtUL.js";import"./getReactElementRef-DYgwaRsW.js";import"./Portal-CtkHDIPH.js";import"./utils-jWIr1tvh.js";import"./TransitionGroupContext-4YAWsFUH.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CjIBT4F9.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DyCxfOpo.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CKOllhzB.js";import"./CircularProgress-Da-Xnf7p.js";import"./Button-6oOIUTaT.js";import"./index-BYPMkNsh.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-B08jEN2V.js";import"./Alert-esZRtMpT.js";import"./createSvgIcon-srbipTqh.js";import"./Close-5QC12IK7.js";import"./Paper-gzQqajNa.js";import"./AlertTitle-5KZiYhCa.js";import"./Typography-DNXJRb7Q.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
You may specify a single easing or a object containing enter and exit values.`,name:"easing",required:!1,type:{name:"string | { enter?: string; exit?: string; }"}},in:{defaultValue:null,description:"If `true`, the component will transition in.",name:"in",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},timeout:{defaultValue:{value:`{
enter: theme.transitions.duration.enteringScreen,
exit: theme.transitions.duration.leavingScreen,
}`},description:`The duration for the transition, in milliseconds.
You may specify a single timeout for all transitions, or individually with an object.`,name:"timeout",required:!1,type:{name:"number | { appear?: number; enter?: number; exit?: number; } | { appear?: number; enter?: number; exit?: number; }"}}}}}catch{}const Q={title:"Components/Transitions/Fade",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Expand from the start edge of the child element."}}}},t={render:e=>{const[o,n]=s.useState(!0),a=()=>{n(!1),setTimeout(()=>n(!0),1e3)};return r.jsx(i,{in:o,...e,children:r.jsx("div",{children:r.jsx(m,{onClose:a,children:"Dismissable Alert"})})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
