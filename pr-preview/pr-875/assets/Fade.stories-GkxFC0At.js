import{j as r,r as s}from"./iframe-DyOisw3p.js";import{b as m}from"./index-CBuxZgVi.js";import{F as p}from"./Fade-KpFWzCuU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CJEk8w79.js";import"./Tooltip-3XPWX8ag.js";import"./useTheme-BZ9q4WY8.js";import"./styled-DlFKYmu8.js";import"./memoTheme-ClQmTMaA.js";import"./useSlot-DsPkR1Hp.js";import"./mergeSlotProps-ixnHwvJm.js";import"./useForkRef-BtdJvb-F.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-BCyZYTVL.js";import"./useControlled-L_7kh0l2.js";import"./useEventCallback-B6KJfX3V.js";import"./getReactElementRef-Ce2cv_v4.js";import"./Portal-B0VFW4sd.js";import"./utils-4feg5QSW.js";import"./TransitionGroupContext-CUZzTcDE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CMD2axpv.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CgX6RyGO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BEmwhJpH.js";import"./CircularProgress-CyhGhsVo.js";import"./Button-Do4OGzvj.js";import"./index-BIYW56wV.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-BXtElNvn.js";import"./Alert-p5dQYN5c.js";import"./createSvgIcon-Qu4Q4I06.js";import"./Close-DxXYPAF_.js";import"./Paper-Ds5OMBpI.js";import"./AlertTitle-CciKTlRE.js";import"./Typography-Ds2SQ99O.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
