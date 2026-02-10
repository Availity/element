import{j as r,r as s}from"./iframe-DPWyg_sE.js";import{b as m}from"./index-wJbszTeT.js";import{F as p}from"./Fade-jqxkxdpP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-WUbIbMUB.js";import"./Tooltip-CdOjvbM3.js";import"./useTheme-7tDQkz1C.js";import"./styled-Cx4UoaTx.js";import"./memoTheme-CvhDbT8x.js";import"./useSlot-BxXiaFQD.js";import"./mergeSlotProps-CVICHJ3a.js";import"./useForkRef-CQj222cR.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-RvN-OPdu.js";import"./useControlled-wCcL1r_0.js";import"./useEventCallback-jcG2qnaO.js";import"./getReactElementRef-x8Lx8RXT.js";import"./Portal-D5nwTdpC.js";import"./utils-BB7LdJ51.js";import"./TransitionGroupContext-Dbv33dTP.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-LUJJL6zM.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BF9Np9Lj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DwZSi7dI.js";import"./CircularProgress-9Tec-y6j.js";import"./Button-BBTQggAb.js";import"./index-HgfBgIyk.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BLZY0MiZ.js";import"./Alert-BMAWyRSD.js";import"./createSvgIcon-kD6OJaqd.js";import"./Close-DzjwsAlU.js";import"./Paper-CoTVTpu9.js";import"./AlertTitle-CMRfVp0l.js";import"./Typography-DAlbupBm.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
