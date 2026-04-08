import{j as r,r as s}from"./iframe-CWp6xAJi.js";import{b as m}from"./index-AysaO8jM.js";import{F as p}from"./Fade-BHa9ONGT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bxm1lbI1.js";import"./Tooltip-C9q2MrGF.js";import"./useTheme-DHWCGmhz.js";import"./styled-BbzXfeov.js";import"./memoTheme-Cd48oeI4.js";import"./useSlot-DyNQWwC6.js";import"./mergeSlotProps-D_m3hd0U.js";import"./useForkRef-3LhxE-jP.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-YuGHwSAC.js";import"./useControlled-D9oaenaI.js";import"./useEventCallback-DWzQfpRP.js";import"./getReactElementRef-C_Avcpz3.js";import"./Portal-v_NAREGo.js";import"./utils-D4ENFMIW.js";import"./TransitionGroupContext-DXm2NhTQ.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DzjUqkkU.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BcXRPXis.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-QvXOsOsa.js";import"./CircularProgress-a2FiPD69.js";import"./Button-DheGOcXb.js";import"./index-buZDR1ob.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BE17mmZt.js";import"./Alert-6yLjcISu.js";import"./createSvgIcon-BPSi4ajd.js";import"./Close-DqjWgI2I.js";import"./Paper-C5XDmwPa.js";import"./AlertTitle-COYTwYxW.js";import"./Typography-DAHmtciD.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
