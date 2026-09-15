import{j as n,r as s}from"./iframe-DF0Rdha4.js";import{b as m}from"./index-Fcrq2ySB.js";import{F as d}from"./Fade-Cx-6eTbl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CUgfwVUD.js";import"./IconButton-oDfd5Lmw.js";import"./memoTheme-4vIjm6LZ.js";import"./styled-I7SbqUzc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-DIMIguuI.js";import"./useTimeout-CMPjzxnq.js";import"./TransitionGroupContext-B0rcK__J.js";import"./useForkRef-BKwvVnzL.js";import"./useEventCallback-BNwW89Is.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B4cKxRwq.js";import"./Tooltip-BWnEWeD7.js";import"./useTheme-Dht0CY8-.js";import"./useSlot-Bu48rJfG.js";import"./mergeSlotProps-De-W8bEz.js";import"./useControlled-Dig0ZMyL.js";import"./getReactElementRef-BJS3FUmu.js";import"./Portal-CcmPSbI-.js";import"./utils-DCMHm21Z.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CexFUqCS.js";import"./Button-kz7BikUW.js";import"./index-6PSJ7mzi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CMfmqAYx.js";import"./Alert-tKEI9zv2.js";import"./createSvgIcon-IzKekw11.js";import"./Close-DzOV4uIs.js";import"./Paper-DargFASt.js";import"./AlertTitle-BzGQHrmX.js";import"./Typography-CVkvQWeR.js";const i=e=>n.jsx(d,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
