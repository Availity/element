import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-BSuoOqEd.js";import{B as u}from"./index-DWvMPRyT.js";import{B as h}from"./index-B2J0USI8.js";import{P as f}from"./Tooltip-bMNvQkmf.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Box-BAprLmuU.js";import"./identifier-DhnHujDJ.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTheme-C_c7PR3o.js";import"./extendSxProp-plByhdXY.js";import"./Grid-BrQtrDmH.js";import"./useTheme-DG5qVMsu.js";import"./DefaultPropsProvider-B1sWsgx2.js";import"./styled-BN1MHGNr.js";import"./styled-9znMky1q.js";import"./isMuiElement-CsRUsG_W.js";import"./useThemeProps-DxTj-Mj7.js";import"./Stack-C-7_RWLD.js";import"./Container-BRT0GL3j.js";import"./IconButton-aAtY6dbQ.js";import"./memoTheme-BwIkkReu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-kjFOwFR3.js";import"./ButtonBase-AdAh9sBA.js";import"./useTimeout-B9dULhq6.js";import"./TransitionGroupContext-CcytU7uK.js";import"./emotion-react.browser.esm-CVJjYY2z.js";import"./useForkRef-BIkqQIqh.js";import"./useEventCallback-Dvy07Fv6.js";import"./useEnhancedEffect-CIAiDanS.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-I3IM84c9.js";import"./Button-DMnfP4ih.js";import"./LoadingButton-b9D3Ot90.js";import"./index-bqlmQ0VS.js";import"./useSlot-jI6_c_PV.js";import"./mergeSlotProps-C8ahzxnq.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-DUUijreW.js";import"./getReactElementRef-B8liFQVS.js";import"./Portal-BleVqemi.js";import"./utils-DuVTnmV7.js";import"./index-CRBziY_1.js";import"./index-CCz_6dyq.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BphRKsXg.js";const r=({children:e,...n})=>o.jsx(f,{...n,children:e});try{r.displayName="Popper",r.__docgenInfo={description:"",displayName:"Popper",props:{component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},components:{defaultValue:{value:"{}"},description:"The components used for each slot inside the Popper.\nEither a string to use a HTML element or a component.\n@deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).",name:"components",required:!1,type:{name:"{ Root?: ElementType<any, keyof IntrinsicElements>; }"}},componentsProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Popper.\n@deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).",name:"componentsProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", PopperRootSlotPropsOverrides, PopperOwnProps>; }'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},slots:{defaultValue:{value:"{}"},description:`The components used for each slot inside the Popper.
Either a string to use a HTML element or a component.`,name:"slots",required:!1,type:{name:"PopperSlots"}},children:{defaultValue:null,description:"Popper render function or node.",name:"children",required:!1,type:{name:"ReactNode | ((props: PopperChildrenProps) => ReactNode)"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Popper.",name:"slotProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", PopperRootSlotPropsOverrides, PopperOwnProps>; }'}},container:{defaultValue:null,description:`An HTML element or function that returns one.
The \`container\` will have the portal children appended to it.

You can also provide a callback, which is called in a React layout effect.
This lets you set the container from a ref, and also makes server-side rendering possible.

By default, it uses the body of the top-level document object,
so it's simply \`document.body\` most of the time.`,name:"container",required:!1,type:{name:"Element | (() => Element)"}},transition:{defaultValue:{value:"false"},description:"Help supporting a react-transition-group/Transition component.",name:"transition",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!0,type:{name:"boolean"}},disablePortal:{defaultValue:{value:"false"},description:"The `children` will be under the DOM hierarchy of the parent component.",name:"disablePortal",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:"'bottom'"},description:"Popper placement.",name:"placement",required:!1,type:{name:"Placement"}},keepMounted:{defaultValue:{value:"false"},description:`Always keep the children in the DOM.
This prop can be useful in SEO situation or
when you want to maximize the responsiveness of the Popper.`,name:"keepMounted",required:!1,type:{name:"boolean"}},anchorEl:{defaultValue:null,description:`An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
or a function that returns either.
It's used to set the position of the popper.
The return value will passed as the reference object of the Popper instance.`,name:"anchorEl",required:!1,type:{name:"HTMLElement | VirtualElement | (() => HTMLElement) | (() => VirtualElement)"}},modifiers:{defaultValue:null,description:`Popper.js is based on a "plugin-like" architecture,
most of its features are fully encapsulated "modifiers".

A modifier is a function that is called each time Popper.js needs to
compute the position of the popper.
For this reason, modifiers should be very performant to avoid bottlenecks.
To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).`,name:"modifiers",required:!1,type:{name:"Partial<Modifier<any, any>>[]"}},popperOptions:{defaultValue:{value:"{}"},description:"Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.",name:"popperOptions",required:!1,type:{name:"Partial<OptionsGeneric<any>>"}},popperRef:{defaultValue:null,description:"A ref that points to the used popper instance.",name:"popperRef",required:!1,type:{name:"Ref<Instance>"}}}}}catch{}const me={title:"Components/Popper/Popper",component:r,tags:["autodocs"]},t={render:()=>{const[e,n]=c.useState(null),m=d=>{n(e?null:d.currentTarget)},p=!!e,i=p?"simple-popper":void 0;return o.jsxs("div",{children:[o.jsx(h,{"aria-describedby":i,type:"button",onClick:m,children:"Toggle Popper"}),o.jsx(r,{id:i,open:p,anchorEl:e,children:o.jsx(u,{sx:{border:1,p:1,bgcolor:"background.paper"},children:"The content of the Popper."})})]})},args:{children:"This text is a child of Popper"}};var a,s,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    return <div>
        <Button aria-describedby={id} type="button" onClick={handleClick}>
          Toggle Popper
        </Button>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Box sx={{
          border: 1,
          p: 1,
          bgcolor: 'background.paper'
        }}>The content of the Popper.</Box>
        </Popper>
      </div>;
  },
  args: {
    children: 'This text is a child of Popper'
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const de=["_Popper"];export{t as _Popper,de as __namedExportsOrder,me as default};
