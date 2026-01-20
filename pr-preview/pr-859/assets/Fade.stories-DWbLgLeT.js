import{j as r,r as s}from"./iframe-PQChuD5P.js";import{b as m}from"./index-CpVJRnF1.js";import{F as p}from"./Fade-BKGIBsen.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPbMBP85.js";import"./Tooltip-D_0sM1X3.js";import"./useTheme-D_lM5llQ.js";import"./styled-IO14y-za.js";import"./memoTheme-CVvKr3an.js";import"./useSlot-Budp5-i0.js";import"./mergeSlotProps-D2tsKCVf.js";import"./useForkRef-CKG9IprU.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-CrdRO3z-.js";import"./useControlled-DL9Iut2g.js";import"./useEventCallback-CVuBVoUk.js";import"./getReactElementRef-CkDqfdPm.js";import"./Portal-CcwI5hbz.js";import"./utils-Bn3set7p.js";import"./TransitionGroupContext-4uG2Mcc_.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-NXvv48zc.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-uRCWfHSj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DrAbzSCI.js";import"./CircularProgress-C9w8hYD6.js";import"./Button-J7D5oBem.js";import"./index-B-1E6jc-.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-Ct-k9MaL.js";import"./Alert-q4zeF70y.js";import"./createSvgIcon-DUCTV8Uh.js";import"./Close-B8qIlG4s.js";import"./Paper-DzmRSJAJ.js";import"./AlertTitle-DPKoDyW8.js";import"./Typography-C-i-WVAF.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
