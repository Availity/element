import{j as r,r as s}from"./iframe-Cl61WGkI.js";import{b as m}from"./index-B0JOKqZl.js";import{F as p}from"./Fade-sz48bo3z.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CqgX4Pjw.js";import"./Tooltip-BWDly8di.js";import"./useTheme-IfO6Fwpt.js";import"./styled-BC98FWsK.js";import"./memoTheme-Bl50oicv.js";import"./useSlot-BNKzCfYO.js";import"./mergeSlotProps-oCe6X0UM.js";import"./useForkRef-BgBNpKdE.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-DRIZehDr.js";import"./useControlled-Df0GFCpG.js";import"./useEventCallback-04OY0OEQ.js";import"./getReactElementRef-C7aNrngo.js";import"./Portal-CKqV7NOt.js";import"./utils-BISW7tPB.js";import"./TransitionGroupContext-DF5xYsKa.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BwXPHno3.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-q11oqdUa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-q-jaW3RD.js";import"./CircularProgress-Bq8oVM2O.js";import"./Button-DuB2O4vc.js";import"./index-CmI2eh32.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Dwb1J2d-.js";import"./Alert-Bt13MPet.js";import"./createSvgIcon-C9mzZA9x.js";import"./Close-2CYXYJvY.js";import"./Paper-DdNx7n5g.js";import"./AlertTitle-DKewQg4O.js";import"./Typography-BbUycIDS.js";const i=e=>r.jsx(p,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
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
