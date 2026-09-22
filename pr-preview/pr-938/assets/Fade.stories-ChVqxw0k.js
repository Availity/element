import{j as n,r as s}from"./iframe-pcBkreyF.js";import{b as m}from"./index-BIIyad7u.js";import{F as d}from"./Fade-BrnSbnNG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D-7rEUPH.js";import"./IconButton-CLvE6niR.js";import"./memoTheme-BGzSgD4T.js";import"./styled-DhfgW05P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-BIRNPLHh.js";import"./useTimeout-BkFACxc1.js";import"./TransitionGroupContext-B-1f4D3_.js";import"./useForkRef-D6t7VBhN.js";import"./useEventCallback-C_PhZ4gM.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-vX9_m42Y.js";import"./Tooltip-DFZ7S6Z_.js";import"./useTheme-DrTO_DRk.js";import"./useSlot-Nge6-EMU.js";import"./mergeSlotProps-sZF9W67M.js";import"./useControlled-DNBc9hrk.js";import"./getReactElementRef-DUpT5N-m.js";import"./Portal-BLikJhBv.js";import"./utils-BhTotuHU.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DXdTwkgQ.js";import"./Button-BPX7NsmD.js";import"./index-BHECb7j3.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CQU7rCYy.js";import"./Alert-Dggmvmya.js";import"./createSvgIcon-BbL3U0Hb.js";import"./Close-BVTaMr4I.js";import"./Paper-CIIxPuZQ.js";import"./AlertTitle-6gzQKfFG.js";import"./Typography-sFl1f9yL.js";const i=e=>n.jsx(d,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
