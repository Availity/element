import{j as r,r as l}from"./iframe-B-IDRs1c.js";import{b as u}from"./index-CA2HI41I.js";import{F as d}from"./Fade-D1BipWHC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CT2WTVvP.js";import"./Tooltip-CSSVlh_J.js";import"./useTheme-BCGo3_gR.js";import"./styled-7JhYMRam.js";import"./memoTheme-CE8Ve8p3.js";import"./useSlot-BDZruxXA.js";import"./mergeSlotProps-C8D8DcHH.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-ClLnv_Rm.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-B5Lb3nSx.js";import"./useControlled-c6loq-MY.js";import"./useEventCallback-cI9q2pBc.js";import"./getReactElementRef-DTxB74xF.js";import"./Portal-Br3wST_n.js";import"./utils-BDyqiFkI.js";import"./TransitionGroupContext-FoUS5PCq.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CfOviytx.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BX_62obP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BRBh8179.js";import"./CircularProgress-DIITlzvm.js";import"./Button-BTxgxpDX.js";import"./index-B8qzEHL-.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-Dnen4Kai.js";import"./Alert-D_crpNQm.js";import"./createSvgIcon-D0KAL-_d.js";import"./Close-B1OoH-GK.js";import"./Paper-BIo3wRRL.js";import"./AlertTitle-BdbnuSNv.js";import"./Typography-qhH8cReh.js";const i=e=>r.jsx(d,{...e});try{i.displayName="Fade",i.__docgenInfo={description:"",displayName:"Fade",props:{appear:{defaultValue:{value:"true"},description:"Perform the enter transition when it first mounts if `in` is also `true`.\nSet this to `false` to disable this behavior.",name:"appear",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"A single child content element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},easing:{defaultValue:null,description:`The transition timing function.
You may specify a single easing or a object containing enter and exit values.`,name:"easing",required:!1,type:{name:"string | { enter?: string; exit?: string; }"}},in:{defaultValue:null,description:"If `true`, the component will transition in.",name:"in",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},timeout:{defaultValue:{value:`{
enter: theme.transitions.duration.enteringScreen,
exit: theme.transitions.duration.leavingScreen,
}`},description:`The duration for the transition, in milliseconds.
You may specify a single timeout for all transitions, or individually with an object.`,name:"timeout",required:!1,type:{name:"number | { appear?: number; enter?: number; exit?: number; } | { appear?: number; enter?: number; exit?: number; }"}}}}}catch{}const Z={title:"Components/Transitions/Fade",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Expand from the start edge of the child element."}}}},t={render:e=>{const[m,n]=l.useState(!0),p=()=>{n(!1),setTimeout(()=>n(!0),1e3)};return r.jsx(i,{in:m,...e,children:r.jsx("div",{children:r.jsx(u,{onClose:p,children:"Dismissable Alert"})})})}};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const ee=["_Fade"];export{t as _Fade,ee as __namedExportsOrder,Z as default};
