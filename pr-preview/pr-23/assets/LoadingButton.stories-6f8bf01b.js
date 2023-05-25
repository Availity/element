import{j as o,a as T}from"./jsx-runtime-91a467a5.js";import{S as V}from"./index-a181615a.js";import{r as B}from"./index-8db94870.js";import{a as w,g as D,s as v,c as j,b as W}from"./styled-83dce9db.js";import{B as H}from"./Button-f85092e0.js";import{c as u,u as z}from"./useThemeProps-bbf3a6ab.js";import{k as F,c as U}from"./emotion-react.browser.esm-b298e083.js";import{u as K}from"./useId-fd294ee9.js";import{G as x}from"./Grid-165c6899.js";import"./faMagnifyingGlass-816a2eda.js";import"./faCircleArrowRight-d415119f.js";import"./SvgIcon-f1c7c68e.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-bab83b91.js";import"./ButtonBase-31edf4e9.js";import"./setPrototypeOf-8d862a7d.js";import"./inheritsLoose-a02b825e.js";import"./useForkRef-2674f3de.js";import"./extendSxProp-762405d5.js";function O(t){return w("MuiCircularProgress",t)}D("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);let k=t=>t,E,q,R,_;const c=44,Z=F(E||(E=k`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),J=F(q||(q=k`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),Q=t=>{const{classes:e,variant:n,color:a,disableShrink:i}=t,r={root:["root",n,`color${u(a)}`],svg:["svg"],circle:["circle",`circle${u(n)}`,i&&"circleDisableShrink"]};return W(r,O,e)},X=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],e[`color${u(n.color)}`]]}})(({ownerState:t,theme:e})=>({display:"inline-block",...t.variant==="determinate"&&{transition:e.transitions.create("transform")},...t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main}}),({ownerState:t})=>t.variant==="indeterminate"&&U(R||(R=k`
      animation: ${0} 1.4s linear infinite;
    `),Z)),Y=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,e)=>e.svg})({display:"block"}),ee=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.circle,e[`circle${u(n.variant)}`],n.disableShrink&&e.circleDisableShrink]}})(({ownerState:t,theme:e})=>({stroke:"currentColor",...t.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},...t.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}}),({ownerState:t})=>t.variant==="indeterminate"&&!t.disableShrink&&U(_||(_=k`
      animation: ${0} 1.4s ease-in-out infinite;
    `),J)),te=B.forwardRef(function(e,n){const a=z({props:e,name:"MuiCircularProgress"}),{className:i,color:r="primary",disableShrink:I=!1,size:s=40,style:b,thickness:p=3.6,value:m=0,variant:L="indeterminate",...P}=a,g={...a,color:r,disableShrink:I,size:s,thickness:p,value:m,variant:L},l=Q(g),f={},y={},$={};if(L==="determinate"){const S=2*Math.PI*((c-p)/2);f.strokeDasharray=S.toFixed(3),$["aria-valuenow"]=Math.round(m),f.strokeDashoffset=`${((100-m)/100*S).toFixed(3)}px`,y.transform="rotate(-90deg)"}return o(X,{className:j(l.root,i),style:{width:s,height:s,...y,...b},ownerState:g,ref:n,role:"progressbar",...$,...P,children:o(Y,{className:l.svg,ownerState:g,viewBox:`${c/2} ${c/2} ${c} ${c}`,children:o(ee,{className:l.circle,style:f,ownerState:g,cx:c,cy:c,r:(c-p)/2,fill:"none",strokeWidth:p})})})}),A=te;function ne(t){return w("MuiLoadingButton",t)}const oe=D("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),d=oe,ae=t=>{const{loading:e,loadingPosition:n,classes:a}=t,i={root:["root",e&&"loading"],startIcon:[e&&`startIconLoading${u(n)}`],endIcon:[e&&`endIconLoading${u(n)}`],loadingIndicator:["loadingIndicator",e&&`loadingIndicator${u(n)}`]},r=W(i,ne,a);return{...a,...r}},ie=t=>t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"&&t!=="classes",re=v(H,{shouldForwardProp:t=>ie(t)||t==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(t,e)=>[e.root,e.startIconLoadingStart&&{[`& .${d.startIconLoadingStart}`]:e.startIconLoadingStart},e.endIconLoadingEnd&&{[`& .${d.endIconLoadingEnd}`]:e.endIconLoadingEnd}]})(({ownerState:t,theme:e})=>({[`& .${d.startIconLoadingStart}, & .${d.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0},...t.loadingPosition==="center"&&{transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),[`&.${d.loading}`]:{color:"transparent"}},...t.loadingPosition==="start"&&t.fullWidth&&{[`& .${d.startIconLoadingStart}, & .${d.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginRight:-8}},...t.loadingPosition==="end"&&t.fullWidth&&{[`& .${d.startIconLoadingStart}, & .${d.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginLeft:-8}}})),se=v("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.loadingIndicator,e[`loadingIndicator${u(n.loadingPosition)}`]]}})(({theme:t,ownerState:e})=>({position:"absolute",visibility:"visible",display:"flex",...e.loadingPosition==="start"&&(e.variant==="outlined"||e.variant==="contained")&&{left:e.size==="small"?10:14},...e.loadingPosition==="start"&&e.variant==="text"&&{left:6},...e.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(t.vars||t).palette.action.disabled},...e.loadingPosition==="end"&&(e.variant==="outlined"||e.variant==="contained")&&{right:e.size==="small"?10:14},...e.loadingPosition==="end"&&e.variant==="text"&&{right:6},...e.loadingPosition==="start"&&e.fullWidth&&{position:"relative",left:-10},...e.loadingPosition==="end"&&e.fullWidth&&{position:"relative",right:-10}})),le=B.forwardRef(function(e,n){const a=z({props:e,name:"MuiLoadingButton"}),{children:i,disabled:r=!1,id:I,loading:s=!1,loadingIndicator:b,loadingPosition:p="center",variant:m="text",...L}=a,P=K(I),g=b??o(A,{"aria-labelledby":P,color:"inherit",size:16}),l={...a,disabled:r,loading:s,loadingIndicator:g,loadingPosition:p,variant:m},f=ae(l),y=s?o(se,{className:f.loadingIndicator,ownerState:l,children:g}):null;return T(re,{disabled:r||s,id:P,ref:n,...L,variant:m,classes:f,ownerState:l,children:[l.loadingPosition==="end"?i:y,l.loadingPosition==="end"?y:i]})}),de=le,ce=o(A,{color:"inherit",size:16,"aria-label":"loading"}),h=B.forwardRef((t,e)=>{const{children:n,loading:a,...i}=t,r=i.startIcon?"start":"end",I=i.startIcon||i.endIcon||a?{}:{padding:"0 .7rem"},s=i.startIcon?void 0:o("span",{style:a?{padding:"0 .7rem"}:{}});return o(de,{endIcon:s,loadingPosition:r,loading:a,disableRipple:!0,loadingIndicator:ce,...i,ref:e,children:o("span",{style:I,children:n})})});try{h.displayName="LoadingButton",h.__docgenInfo={description:"",displayName:"LoadingButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ButtonClasses> & { root?: string; loading?: string; loadingIndicator?: string; loadingIndicatorCenter?: string; loadingIndicatorStart?: string; loadingIndicatorEnd?: string; endIconLoadingEnd?: string; startIconLoadingStart?: string; } & Partial<...>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},color:{defaultValue:null,description:"The color of the component.",name:"color",required:!1,type:{name:'"primary" | "secondary" | "error"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},disabled:{defaultValue:{value:`false
false`},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'text'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'"text" | "outlined" | "contained"'}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:'"small" | "large" | "medium"'}},disableElevation:{defaultValue:{value:"false"},description:"If `true`, no elevation is used.",name:"disableElevation",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:{value:"false"},description:"If `true`, the loading indicator is shown.",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}const Ee={title:"Components/Button/LoadingButton",component:h,tags:["autodocs"],args:{loading:!0,color:"primary",variant:"contained"}},C={render:({...t})=>T(x,{container:!0,spacing:1,children:[o(x,{item:!0,xs:12,children:o(h,{...t,children:"No Icon"})}),o(x,{item:!0,xs:12,children:o(h,{...t,startIcon:o(V,{}),loadingPosition:"start",children:"Start Icon"})}),o(x,{item:!0,xs:12,children:o(h,{...t,endIcon:o(V,{}),children:"End Icon"})})]})};var N,M,G;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: ({
    ...args
  }: LoadingButtonProps) => <Grid container spacing={1}>
        <Grid item xs={12}>
          <LoadingButton {...args}>No Icon</LoadingButton>
        </Grid>
        <Grid item xs={12}>
          <LoadingButton {...args} startIcon={<SearchIcon />} loadingPosition='start'>Start Icon</LoadingButton>
        </Grid>
        <Grid item xs={12}>
          <LoadingButton {...args} endIcon={<SearchIcon />}>End Icon</LoadingButton>
        </Grid>
      </Grid>
}`,...(G=(M=C.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};const qe=["_LoadingButton"];export{C as _LoadingButton,qe as __namedExportsOrder,Ee as default};
//# sourceMappingURL=LoadingButton.stories-6f8bf01b.js.map
