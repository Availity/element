import{j as t}from"./jsx-runtime-91a467a5.js";import{S as d}from"./index-e6ea1431.js";import{B as c}from"./Button-508435fe.js";import{M as m}from"./Tooltip-60bdefcc.js";import{M as f}from"./IconButton-f5a91a1c.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./faMagnifyingGlass-944a50c5.js";import"./faCircleArrowRight-d415119f.js";import"./SvgIcon-c4a75eda.js";import"./styled-05cc2f2a.js";import"./useThemeProps-7db2adde.js";import"./extends-bab83b91.js";import"./Button-7fd1b50b.js";import"./ButtonBase-dac0a791.js";import"./emotion-react.browser.esm-84971059.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./useTheme-248aed36.js";import"./Grow-3184466a.js";import"./index-8ce4a492.js";import"./utils-e6237d7c.js";import"./useSlotProps-f29fb3b7.js";import"./useId-fd294ee9.js";const o=({children:e,title:a,filled:p,color:i="tertiary",...r})=>t(m,{title:a,children:p?t(c,{"aria-label":a,color:i,startIcon:e,iconOnly:!0,...r,children:"⁠"}):t(f,{"aria-label":a,disableRipple:!0,color:i==="tertiary"?"secondary":i,...r,children:e})});try{o.displayName="IconButton",o.__docgenInfo={description:"",displayName:"IconButton",props:{title:{defaultValue:null,description:"Text for tooltip and aria-label",name:"title",required:!1,type:{name:"string"}},children:{defaultValue:null,description:`The icon to display.
The content of the component.`,name:"children",required:!1,type:{name:"ReactNode"}},filled:{defaultValue:null,description:"Toggles contained Button styling",name:"filled",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"tertiary"},description:"The color of the component.",name:"color",required:!1,type:{name:'"primary" | "secondary" | "error" | "tertiary"'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<IconButtonClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},edge:{defaultValue:{value:"false"},description:`If given, uses a negative margin to counteract the padding on one
side (this is often helpful for aligning the left or right
side of the icon with content above or below, without ruining the border
size and shape).`,name:"edge",required:!1,type:{name:'false | "end" | "start"'}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:'"small" | "large" | "medium"'}}}}}catch{}const O={title:"Components/Button/IconButton",component:o,tags:["autodocs"],args:{title:"title text"},parameters:{docs:{description:{component:"Icon only button with built-in tooltip"}}}},n={render:({...e})=>t(o,{...e,children:t(d,{})})};var s,l,u;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: ({
    ...args
  }: IconButtonProps) => <IconButton {...args}><SearchIcon /></IconButton>
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const W=["_IconButton"];export{n as _IconButton,W as __namedExportsOrder,O as default};
//# sourceMappingURL=IconButton.stories-baf60206.js.map