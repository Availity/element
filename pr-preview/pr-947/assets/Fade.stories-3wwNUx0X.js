import{j as n,r as s}from"./iframe-h0MgQYlb.js";import{b as m}from"./index-BeGJm3oc.js";import{F as d}from"./Fade-z7eIM_c6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_zAfcFR5.js";import"./IconButton-gyouzdWj.js";import"./memoTheme-XXgMlyY8.js";import"./styled-BqHoSPCQ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-DGaEQWnN.js";import"./useTimeout-DZyw5ypU.js";import"./TransitionGroupContext-BQlZajXI.js";import"./useForkRef-CKNxtvC9.js";import"./useEventCallback-DzEyioes.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Ce_dbRGa.js";import"./Tooltip-cnLuDxtR.js";import"./useTheme-ipJVwYFq.js";import"./useSlot-DRVd6-GX.js";import"./mergeSlotProps-D1gF_ZlB.js";import"./useControlled-4IqYUsvs.js";import"./getReactElementRef-zdjSJbKU.js";import"./Portal-De7hiZQn.js";import"./utils-DputtVCR.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CeTvmasO.js";import"./Button-DFw25j8B.js";import"./index-BfEcMr2H.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CJ2gQRBv.js";import"./Alert-DBhhWii3.js";import"./createSvgIcon-BnwFzQLv.js";import"./Close-BJS85dYf.js";import"./Paper-Bzbluycl.js";import"./AlertTitle-CzeCv2Pm.js";import"./Typography-DKkmO78y.js";const i=e=>n.jsx(d,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
