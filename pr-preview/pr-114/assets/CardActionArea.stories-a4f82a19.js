import{a as g,j as a}from"./jsx-runtime-390e5fc8.js";import{r as b}from"./index-570b25c1.js";import{c as d}from"./clsx.m-fb33c42b.js";import{u as v}from"./useThemeProps-5f33a28c.js";import{g as V,s as f,c as w}from"./styled-fc2b35f5.js";import{g as x}from"./generateUtilityClasses-8a827d83.js";import{B as N}from"./ButtonBase-654f8a82.js";import{C as k}from"./Card-7c261d7a.js";import{C as q}from"./CardContent-e9932b37.js";import"./_commonjsHelpers-042e6b4d.js";import"./createTheme-4dc6b23f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./emotion-react.browser.esm-325397be.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Paper-c73104d0.js";function H(e){return V("MuiCardActionArea",e)}const _=x("MuiCardActionArea",["root","focusVisible","focusHighlight"]),n=_,R=e=>{const{classes:t}=e;return w({root:["root"],focusHighlight:["focusHighlight"]},H,t)},S=f(N,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${n.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${n.focusVisible} .${n.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}})),T=f("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,t)=>t.focusHighlight})(({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})})),I=b.forwardRef(function(t,l){const c=v({props:t,name:"MuiCardActionArea"}),{children:h,className:C,focusVisibleClassName:A,...y}=c,r=c,i=R(r);return g(S,{className:d(i.root,C),focusVisibleClassName:d(A,i.focusVisible),ref:l,ownerState:r,...y,children:[h,a(T,{className:i.focusHighlight,ownerState:r})]})}),M=I,s=({children:e,...t})=>a(M,{...t,disableRipple:!0,children:e});try{s.displayName="CardActionArea",s.__docgenInfo={description:"",displayName:"CardActionArea",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<CardActionAreaClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}}}}}catch{}const X={title:"Components/Card/CardActionArea",component:s,tags:["autodocs"]},o={render:e=>a(k,{children:a(s,{...e,children:a(q,{children:"You can click on this card"})})}),args:{}};var u,p,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: CardActionAreaProps) => <Card>
      <CardActionArea {...args}>
        <CardContent>You can click on this card</CardContent>
      </CardActionArea>
    </Card>,
  args: {}
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Z=["_CardActionArea"];export{o as _CardActionArea,Z as __namedExportsOrder,X as default};
//# sourceMappingURL=CardActionArea.stories-a4f82a19.js.map
