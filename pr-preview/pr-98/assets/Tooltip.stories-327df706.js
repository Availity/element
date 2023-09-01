import{j as t}from"./jsx-runtime-390e5fc8.js";import{M as m}from"./Tooltip-42ba96db.js";import{B as d}from"./Button-fce9389c.js";import{L as c}from"./Link-6cc3d459.js";import{T as u}from"./TextField-40bad19e.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./styled-2191822d.js";import"./useThemeProps-66ab754c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useTheme-c775f3da.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./useForkRef-153a0a89.js";import"./ButtonBase-121cbb7f.js";import"./emotion-react.browser.esm-d7d6545d.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useSlotProps-38dd38c0.js";import"./utils-aacfec48.js";import"./useId-6f4bfce0.js";import"./Typography-8314e3e3.js";import"./extendSxProp-564f0963.js";import"./FormControl-8b41a575.js";import"./FormLabel-f2bb53c2.js";import"./react-is.production.min-a192e302.js";import"./Menu-58b06745.js";import"./ownerWindow-698471fc.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-576c7647.js";import"./createSvgIcon-cafa5f0c.js";import"./SvgIcon-644454bc.js";import"./OutlinedInput-be2438d3.js";import"./GlobalStyles-3f09bceb.js";const r=e=>{const{children:p,dangerouslySetTransitionTimer:i,...s}=e;return t(m,{...s,TransitionProps:{timeout:i!==void 0?i:100},arrow:!0,children:p})};try{r.displayName="Tooltip",r.__docgenInfo={description:"",displayName:"Tooltip",props:{children:{defaultValue:null,description:"Tooltip reference element.",name:"children",required:!0,type:{name:"ReactElement<any, any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},title:{defaultValue:null,description:"Tooltip title. Zero-length titles string, undefined, null and false are never displayed.",name:"title",required:!0,type:{name:"ReactNode"}},id:{defaultValue:null,description:`This prop is used to help implement the accessibility logic.
If you don't provide this prop. It falls back to a randomly generated id.`,name:"id",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:`Callback fired when the component requests to be closed.
@param event The event source of the callback.`,name:"onClose",required:!1,type:{name:"(event: Event | SyntheticEvent<Element, Event>) => void"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!1,type:{name:"boolean"}},describeChild:{defaultValue:{value:"false"},description:"Set to `true` if the `title` acts as an accessible description.\nBy default the `title` acts as an accessible label for the child.",name:"describeChild",required:!1,type:{name:"boolean"}},leaveDelay:{defaultValue:{value:"0"},description:"The number of milliseconds to wait before hiding the tooltip.\nThis prop won't impact the leave touch delay (`leaveTouchDelay`).",name:"leaveDelay",required:!1,type:{name:"number"}},onOpen:{defaultValue:null,description:`Callback fired when the component requests to be open.
@param event The event source of the callback.`,name:"onOpen",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>) => void"}},placement:{defaultValue:{value:"'bottom'"},description:"Tooltip placement.",name:"placement",required:!1,type:{name:'"bottom" | "left" | "right" | "top" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start"'}},dangerouslySetTransitionTimer:{defaultValue:{value:"100"},description:"Sets the duration in ms of the animation to hide/show tooltip.",name:"dangerouslySetTransitionTimer",required:!1,type:{name:"number"}}}}}catch{}const f=["bottom-end","bottom-start","bottom","left-end","left-start","left","right-end","right-start","right","top-end","top-start","top"],h='"bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top"',y={title:{description:"Text that displays in the tooltip.",table:{type:{summary:"string"}},type:{required:!0}},children:{description:"Element that triggers the tooltip.",options:["span","button","link","text field"],control:{type:"select"},table:{type:{summary:"ReactElement<any, any>"}},type:{required:!0},mapping:{span:t("span",{children:"Hover me"}),button:t(d,{color:"secondary",variant:"contained",children:"Hover me"}),link:t(c,{href:"#",onClick:e=>e.preventDefault(),children:"Hover me"}),"text field":t(u,{label:"Hover me",variant:"outlined"})}},leaveDelay:{description:"Delay before the tooltip is hidden. (micro seconds)",control:{type:"number"},table:{type:{summary:"number"}},defaultValue:{summary:0}},placement:{description:"Where the container of the tooltip is aligned and placed.",options:f,control:{type:"select"},table:{type:{summary:h}},defaultValue:{summary:'"bottom"'}}},U={title:"Components/Tooltip/Tooltip",component:r,tags:["autodocs"],argTypes:y,args:{children:"button",title:"This is a tooltip"}},o={render:e=>t(r,{...e})};var n,a,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (props: TooltipProps) => <Tooltip {...props} />
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const X=["_Tooltip"];export{o as _Tooltip,X as __namedExportsOrder,U as default};
//# sourceMappingURL=Tooltip.stories-327df706.js.map
