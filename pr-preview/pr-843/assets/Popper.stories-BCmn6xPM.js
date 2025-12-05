import{j as o,r as c}from"./iframe-DKPLEfLw.js";import{B as u}from"./index-Dn59n-rN.js";import{B as h}from"./index-BFdrycj9.js";import{P as f}from"./Tooltip-CV3fhIPH.js";import"./preload-helper-Dp1pzeXC.js";import"./Box-CZdlnD3e.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./Grid-Bc7_QC4M.js";import"./useTheme-9F3p9Qod.js";import"./styled-Wz6Z4Uga.js";import"./styled-DmVvl1cy.js";import"./isMuiElement-Bob4bJgN.js";import"./Stack-ClwGR_Ch.js";import"./Container-DJ1Q8iJN.js";import"./IconButton-8Ec7VkLh.js";import"./memoTheme-DCtqnaOZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-ChXh0SoD.js";import"./useTimeout-C_Ka5Mcj.js";import"./TransitionGroupContext-PAkUv-tF.js";import"./useForkRef-BBFL5x5N.js";import"./useEventCallback-DDVZojhm.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-QNpYF3E0.js";import"./Button-DWZjJ-VR.js";import"./useSlot-BRbtrhUo.js";import"./mergeSlotProps-DczvM8iT.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-RZIZY8-C.js";import"./getReactElementRef-BnAyG0-a.js";import"./Portal-DsulJ7FL.js";import"./utils-BvzjqUtG.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-RoKiuIH8.js";const r=({children:e,...n})=>o.jsx(f,{...n,children:e});try{r.displayName="Popper",r.__docgenInfo={description:"",displayName:"Popper",props:{component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},components:{defaultValue:{value:"{}"},description:"The components used for each slot inside the Popper.\nEither a string to use a HTML element or a component.\n@deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).",name:"components",required:!1,type:{name:"{ Root?: ElementType<any, keyof IntrinsicElements>; }"}},componentsProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Popper.\n@deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).",name:"componentsProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", PopperRootSlotPropsOverrides, PopperOwnProps>; }'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},children:{defaultValue:null,description:"Popper render function or node.",name:"children",required:!1,type:{name:"ReactNode | ((props: PopperChildrenProps) => ReactNode)"}},container:{defaultValue:null,description:`An HTML element or function that returns one.
The \`container\` will have the portal children appended to it.

You can also provide a callback, which is called in a React layout effect.
This lets you set the container from a ref, and also makes server-side rendering possible.

By default, it uses the body of the top-level document object,
so it's simply \`document.body\` most of the time.`,name:"container",required:!1,type:{name:"Element | (() => Element)"}},transition:{defaultValue:{value:"false"},description:"Help supporting a react-transition-group/Transition component.",name:"transition",required:!1,type:{name:"boolean"}},slots:{defaultValue:{value:"{}"},description:`The components used for each slot inside the Popper.
Either a string to use a HTML element or a component.`,name:"slots",required:!1,type:{name:"PopperSlots"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Popper.",name:"slotProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", PopperRootSlotPropsOverrides, PopperOwnProps>; }'}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!0,type:{name:"boolean"}},disablePortal:{defaultValue:{value:"false"},description:"The `children` will be under the DOM hierarchy of the parent component.",name:"disablePortal",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:"'bottom'"},description:"Popper placement.",name:"placement",required:!1,type:{name:"Placement"}},keepMounted:{defaultValue:{value:"false"},description:`Always keep the children in the DOM.
This prop can be useful in SEO situation or
when you want to maximize the responsiveness of the Popper.`,name:"keepMounted",required:!1,type:{name:"boolean"}},anchorEl:{defaultValue:null,description:`An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
or a function that returns either.
It's used to set the position of the popper.
The return value will passed as the reference object of the Popper instance.`,name:"anchorEl",required:!1,type:{name:"HTMLElement | VirtualElement | (() => HTMLElement) | (() => VirtualElement)"}},modifiers:{defaultValue:null,description:`Popper.js is based on a "plugin-like" architecture,
most of its features are fully encapsulated "modifiers".

A modifier is a function that is called each time Popper.js needs to
compute the position of the popper.
For this reason, modifiers should be very performant to avoid bottlenecks.
To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).`,name:"modifiers",required:!1,type:{name:"Partial<Modifier<any, any>>[]"}},popperOptions:{defaultValue:{value:"{}"},description:"Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.",name:"popperOptions",required:!1,type:{name:"Partial<OptionsGeneric<any>>"}},popperRef:{defaultValue:null,description:"A ref that points to the used popper instance.",name:"popperRef",required:!1,type:{name:"Ref<Instance>"}}}}}catch{}const W={title:"Components/Popper/Popper",component:r,tags:["autodocs"]},t={render:()=>{const[e,n]=c.useState(null),d=m=>{n(e?null:m.currentTarget)},p=!!e,a=p?"simple-popper":void 0;return o.jsxs("div",{children:[o.jsx(h,{"aria-describedby":a,type:"button",onClick:d,children:"Toggle Popper"}),o.jsx(r,{id:a,open:p,anchorEl:e,children:o.jsx(u,{sx:{border:1,p:1,bgcolor:"background.paper"},children:"The content of the Popper."})})]})},args:{children:"This text is a child of Popper"}};var i,s,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const X=["_Popper"];export{t as _Popper,X as __namedExportsOrder,W as default};
