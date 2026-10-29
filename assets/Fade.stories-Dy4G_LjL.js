import{j as n,r as s}from"./iframe-CLut6yOe.js";import{b as m}from"./index-MFss3fzl.js";import{F as d}from"./Fade-CkZ97Hml.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNgDR8tQ.js";import"./IconButton-MKfAwX3T.js";import"./memoTheme-BCZ6py50.js";import"./styled-B56iE4qf.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-B4AmE_nS.js";import"./useTimeout-DSf2abi9.js";import"./TransitionGroupContext-CxTk-KXz.js";import"./useForkRef-CW7nwTzV.js";import"./useEventCallback-BXl50wnQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cb3dAqoX.js";import"./Tooltip-20BxdW9m.js";import"./useTheme-uzqIZvgA.js";import"./useSlot-C8ASSSxZ.js";import"./mergeSlotProps-BoE-e40D.js";import"./useControlled-BMhEC-vi.js";import"./getReactElementRef-CPIcGi-m.js";import"./Portal-buqhKvPN.js";import"./utils-CY0-o-M4.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BphsLqn6.js";import"./Button-CO7SGq6S.js";import"./index-CxuuQ7ms.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Dd51Rz_D.js";import"./Alert-CgCM6ukP.js";import"./createSvgIcon-BcCXBLY5.js";import"./Close-vGYRfV1b.js";import"./Paper-CMcH6Gk3.js";import"./AlertTitle-BSAGxnSy.js";import"./Typography-BLWoaJn_.js";const i=e=>n.jsx(d,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
