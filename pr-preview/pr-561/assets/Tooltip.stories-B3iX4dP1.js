import{j as t}from"./jsx-runtime-CcL-W3nW.js";import{T as m}from"./Tooltip-eF_7lzc5.js";import{T as d}from"./TextField-D_phNllt.js";import{L as u}from"./Link-BXtbTSvq.js";import{B as c}from"./Button-B22iKlEO.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./generateUtilityClass-Bqc1qv72.js";import"./createTheme-CKCRSfxM.js";import"./index-nos-0K8U.js";import"./useTheme-ChS1Y5Lw.js";import"./DefaultPropsProvider-CIAoFptl.js";import"./useTheme-BUEqHFQV.js";import"./styled-Dbr85gFc.js";import"./memoTheme-DvanvhnP.js";import"./useSlot-DO4SmqlR.js";import"./resolveComponentProps-BiTA-uKg.js";import"./useForkRef-BVrIj09m.js";import"./generateUtilityClasses-DyVAdLaw.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./getReactElementRef-AnOffBoZ.js";import"./Portal-CKWfQBCE.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cuv6gcjd.js";import"./isFocusVisible-B8k4qzLc.js";import"./OutlinedInput-DUFM6NiM.js";import"./useFormControl-68oiojFJ.js";import"./formControlState-Dq1zat_P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-D-S2KyN4.js";import"./extendSxProp-BKaoT_Qt.js";import"./emotion-react.browser.esm-rTq5AsO6.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-Bh3HlTBm.js";import"./Menu-BNF0dZPe.js";import"./Popover-DJDHQo2S.js";import"./Paper-CvfFJp8a.js";import"./Modal-CzgY4V0Y.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-B9IVkNZn.js";import"./Fade-DbM47FxC.js";import"./List-Ce1NCs06.js";import"./createSvgIcon-IUeEQzFc.js";import"./SvgIcon-BS-p1eoC.js";import"./FormLabel-DrJE-ijH.js";import"./FormControl-DxHQf2_s.js";import"./isMuiElement-DAzOCCHH.js";import"./Typography-Cng4iL4p.js";import"./ButtonBase-DQZrtVrL.js";import"./CircularProgress-BHFEuwTi.js";const r=e=>{const{children:p,dangerouslySetTransitionTimer:i,...s}=e;return t.jsx(m,{...s,TransitionProps:{timeout:i!==void 0?i:100},arrow:!0,children:p})};try{r.displayName="Tooltip",r.__docgenInfo={description:"",displayName:"Tooltip",props:{children:{defaultValue:null,description:"Tooltip reference element.",name:"children",required:!0,type:{name:"ReactElement<unknown, any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},title:{defaultValue:null,description:"Tooltip title. Zero-length titles string, undefined, null and false are never displayed.",name:"title",required:!0,type:{name:"ReactNode"}},id:{defaultValue:null,description:`This prop is used to help implement the accessibility logic.
If you don't provide this prop. It falls back to a randomly generated id.`,name:"id",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:`Callback fired when the component requests to be closed.
@param event The event source of the callback.`,name:"onClose",required:!1,type:{name:"(event: Event | SyntheticEvent<Element, Event>) => void"}},onOpen:{defaultValue:null,description:`Callback fired when the component requests to be open.
@param event The event source of the callback.`,name:"onOpen",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>) => void"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:"'bottom'"},description:"Tooltip placement.",name:"placement",required:!1,type:{name:'"bottom" | "left" | "right" | "top" | "bottom-start" | "bottom-end" | "top-start" | "top-end" | "right-start" | "right-end" | "left-start" | "left-end"'}},describeChild:{defaultValue:{value:"false"},description:"Set to `true` if the `title` acts as an accessible description.\nBy default the `title` acts as an accessible label for the child.",name:"describeChild",required:!1,type:{name:"boolean"}},leaveDelay:{defaultValue:{value:"0"},description:"The number of milliseconds to wait before hiding the tooltip.\nThis prop won't impact the leave touch delay (`leaveTouchDelay`).",name:"leaveDelay",required:!1,type:{name:"number"}},dangerouslySetTransitionTimer:{defaultValue:{value:"100"},description:"Sets the duration in ms of the animation to hide/show tooltip.",name:"dangerouslySetTransitionTimer",required:!1,type:{name:"number"}}}}}catch{}const f=["bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"],h='"bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top"',y={title:{description:"Text that displays in the tooltip.",table:{type:{summary:"string"}},type:{required:!0}},children:{description:"Element that triggers the tooltip.",options:["span","button","link","text field"],control:{type:"select"},table:{type:{summary:"ReactElement<any, any>"}},type:{required:!0},mapping:{span:t.jsx("span",{children:"Hover me"}),button:t.jsx(c,{color:"secondary",variant:"contained",children:"Hover me"}),link:t.jsx(u,{href:"#",onClick:e=>e.preventDefault(),children:"Hover me"}),"text field":t.jsx(d,{label:"Hover me",variant:"outlined"})}},leaveDelay:{description:"Delay before the tooltip is hidden. (micro seconds)",control:{type:"number"},table:{type:{summary:"number"}},defaultValue:{summary:0}},placement:{description:"Where the container of the tooltip is aligned and placed.",options:f,control:{type:"select"},table:{type:{summary:h}},defaultValue:{summary:'"bottom"'}}},Ve={title:"Components/Tooltip/Tooltip",component:r,tags:["autodocs"],argTypes:y,args:{children:"button",title:"This is a tooltip"}},o={render:e=>t.jsx(r,{...e})};var n,a,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (props: TooltipProps) => <Tooltip {...props} />
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const _e=["_Tooltip"];export{o as _Tooltip,_e as __namedExportsOrder,Ve as default};
