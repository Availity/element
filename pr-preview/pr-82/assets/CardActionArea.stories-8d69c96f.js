import{a as g,j as t}from"./jsx-runtime-91a467a5.js";import{r as b}from"./index-8db94870.js";import{g as v,b as V,s as f,c as d,a as w}from"./styled-e83a4d6b.js";import{c as x}from"./useThemeProps-2be0b178.js";import{B as N}from"./ButtonBase-43bbae14.js";import{C as k}from"./Card-810c769c.js";import{C as q}from"./CardContent-62e4cfe7.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-bab83b91.js";import"./emotion-react.browser.esm-69c9b3f9.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./useIsFocusVisible-bbf13f29.js";import"./Paper-3e4d1c04.js";function H(e){return V("MuiCardActionArea",e)}const _=v("MuiCardActionArea",["root","focusVisible","focusHighlight"]),n=_,R=e=>{const{classes:a}=e;return w({root:["root"],focusHighlight:["focusHighlight"]},H,a)},S=f(N,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,a)=>a.root})(({theme:e})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${n.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${n.focusVisible} .${n.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}})),T=f("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,a)=>a.focusHighlight})(({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})})),I=b.forwardRef(function(a,l){const c=x({props:a,name:"MuiCardActionArea"}),{children:h,className:C,focusVisibleClassName:A,...y}=c,r=c,i=R(r);return g(S,{className:d(i.root,C),focusVisibleClassName:d(A,i.focusVisible),ref:l,ownerState:r,...y,children:[h,t(T,{className:i.focusHighlight,ownerState:r})]})}),M=I,o=({children:e,...a})=>t(M,{...a,disableRipple:!0,children:e});try{o.displayName="CardActionArea",o.__docgenInfo={description:"",displayName:"CardActionArea",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<CardActionAreaClasses> & Partial<ClassNameMap<never>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}}}}}catch{}const K={title:"Components/Card/CardActionArea",component:o,tags:["autodocs"]},s={render:e=>t(k,{children:t(o,{...e,children:t(q,{children:"You can click on this card"})})}),args:{}};var u,p,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: CardActionAreaProps) => <Card>
      <CardActionArea {...args}>
        <CardContent>You can click on this card</CardContent>
      </CardActionArea>
    </Card>,
  args: {}
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Q=["_CardActionArea"];export{s as _CardActionArea,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=CardActionArea.stories-8d69c96f.js.map
