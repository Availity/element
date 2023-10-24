import{j as t}from"./jsx-runtime-390e5fc8.js";import{M as m}from"./Tooltip-db1cd215.js";import{B as d}from"./Button-c8d0f982.js";import{L as c}from"./Link-2b846b46.js";import{T as u}from"./TextField-42a0141b.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./createTheme-bcd1d157.js";import"./clsx-7dc4e18d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-ba967c06.js";import"./useThemeProps-32d9d40f.js";import"./useTheme-4854111c.js";import"./generateUtilityClasses-cabd787c.js";import"./objectWithoutPropertiesLoose-830c72af.js";import"./ownerDocument-613eb639.js";import"./Grow-5e3a8791.js";import"./index-8a077077.js";import"./useForkRef-153a0a89.js";import"./useEnhancedEffect-460150e6.js";import"./utils-57cc91c3.js";import"./ButtonBase-0a435f0a.js";import"./emotion-react.browser.esm-474fda6d.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useSlotProps-4e64ffeb.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./Typography-45d8e817.js";import"./extendSxProp-9115426f.js";import"./FormLabel-c20a5ce1.js";import"./utils-3d35716f.js";import"./isMuiElement-6907f060.js";import"./Select-3e954196.js";import"./react-is.production.min-a192e302.js";import"./Menu-216583e1.js";import"./ownerWindow-698471fc.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-5389b241.js";import"./createSvgIcon-a2702ab1.js";import"./SvgIcon-e7295b43.js";import"./OutlinedInput-ac666d53.js";import"./GlobalStyles-adf0b00b.js";import"./FormHelperText-77c1615b.js";const r=e=>{const{children:p,dangerouslySetTransitionTimer:i,...s}=e;return t(m,{...s,TransitionProps:{timeout:i!==void 0?i:100},arrow:!0,children:p})};try{r.displayName="Tooltip",r.__docgenInfo={description:"",displayName:"Tooltip",props:{children:{defaultValue:null,description:"Tooltip reference element.",name:"children",required:!0,type:{name:"ReactElement<any, any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},title:{defaultValue:null,description:"Tooltip title. Zero-length titles string, undefined, null and false are never displayed.",name:"title",required:!0,type:{name:"ReactNode"}},id:{defaultValue:null,description:`This prop is used to help implement the accessibility logic.
If you don't provide this prop. It falls back to a randomly generated id.`,name:"id",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:`Callback fired when the component requests to be closed.
@param event The event source of the callback.`,name:"onClose",required:!1,type:{name:"(event: Event | SyntheticEvent<Element, Event>) => void"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!1,type:{name:"boolean"}},onOpen:{defaultValue:null,description:`Callback fired when the component requests to be open.
@param event The event source of the callback.`,name:"onOpen",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>) => void"}},describeChild:{defaultValue:{value:"false"},description:"Set to `true` if the `title` acts as an accessible description.\nBy default the `title` acts as an accessible label for the child.",name:"describeChild",required:!1,type:{name:"boolean"}},leaveDelay:{defaultValue:{value:"0"},description:"The number of milliseconds to wait before hiding the tooltip.\nThis prop won't impact the leave touch delay (`leaveTouchDelay`).",name:"leaveDelay",required:!1,type:{name:"number"}},placement:{defaultValue:{value:"'bottom'"},description:"Tooltip placement.",name:"placement",required:!1,type:{name:'"bottom" | "left" | "right" | "top" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start"'}},dangerouslySetTransitionTimer:{defaultValue:{value:"100"},description:"Sets the duration in ms of the animation to hide/show tooltip.",name:"dangerouslySetTransitionTimer",required:!1,type:{name:"number"}}}}}catch{}const f=["bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"],h='"bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top"',y={title:{description:"Text that displays in the tooltip.",table:{type:{summary:"string"}},type:{required:!0}},children:{description:"Element that triggers the tooltip.",options:["span","button","link","text field"],control:{type:"select"},table:{type:{summary:"ReactElement<any, any>"}},type:{required:!0},mapping:{span:t("span",{children:"Hover me"}),button:t(d,{color:"secondary",variant:"contained",children:"Hover me"}),link:t(c,{href:"#",onClick:e=>e.preventDefault(),children:"Hover me"}),"text field":t(u,{label:"Hover me",variant:"outlined"})}},leaveDelay:{description:"Delay before the tooltip is hidden. (micro seconds)",control:{type:"number"},table:{type:{summary:"number"}},defaultValue:{summary:0}},placement:{description:"Where the container of the tooltip is aligned and placed.",options:f,control:{type:"select"},table:{type:{summary:h}},defaultValue:{summary:'"bottom"'}}},ae={title:"Components/Tooltip/Tooltip",component:r,tags:["autodocs"],argTypes:y,args:{children:"button",title:"This is a tooltip"}},o={render:e=>t(r,{...e})};var n,a,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (props: TooltipProps) => <Tooltip {...props} />
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const le=["_Tooltip"];export{o as _Tooltip,le as __namedExportsOrder,ae as default};
//# sourceMappingURL=Tooltip.stories-b5ea172c.js.map
