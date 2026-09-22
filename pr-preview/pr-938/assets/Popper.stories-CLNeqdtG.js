import{j as o,r as l}from"./iframe-DKvnFaXU.js";import{B as d}from"./index-DbDO0Ft_.js";import{B as u}from"./index-goOPcPYN.js";import{P as m}from"./Tooltip-D9ZPYqEU.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-D54lZQNO.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./Grid-BqSQzKdl.js";import"./useTheme-CSDDNwq2.js";import"./isMuiElement-B9gvf1iq.js";import"./styled-vqTvL8XB.js";import"./styled-CmsEx6_f.js";import"./Stack-Ddupjr1g.js";import"./Container-Dg7zSU0F.js";import"./IconButton-Dk2wxJIq.js";import"./memoTheme-CqfCSJ2X.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-t7rDwPbd.js";import"./useTimeout-CHMS-cR8.js";import"./TransitionGroupContext-Ywi-MhlW.js";import"./useForkRef-BZiVfW-q.js";import"./useEventCallback-BMp-rMhG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-1gU5OTOX.js";import"./Button-CcwmilXM.js";import"./useSlot-CCglkhUf.js";import"./mergeSlotProps-DgX6bSST.js";import"./useControlled-DXzaWELJ.js";import"./getReactElementRef-CqgsFiRl.js";import"./Portal-D0mCJoig.js";import"./utils-Bp7Prb7W.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DYzgJZQm.js";const n=({children:e,...r})=>o.jsx(m,{...r,children:e});try{n.displayName="Popper",n.__docgenInfo={description:"",displayName:"Popper",props:{component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements> | undefined"}},components:{defaultValue:{value:"{}"},description:"The components used for each slot inside the Popper.\nEither a string to use a HTML element or a component.\n@deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).",name:"components",required:!1,type:{name:"{ Root?: ElementType<any, keyof IntrinsicElements> | undefined; } | undefined"}},componentsProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Popper.\n@deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).",name:"componentsProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", PopperRootSlotPropsOverrides, PopperOwnProps> | undefined; } | undefined'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme> | undefined"}},children:{defaultValue:null,description:"Popper render function or node.",name:"children",required:!1,type:{name:"ReactNode | ((props: PopperChildrenProps) => ReactNode)"}},container:{defaultValue:null,description:`An HTML element or function that returns one.
The \`container\` will have the portal children appended to it.

You can also provide a callback, which is called in a React layout effect.
This lets you set the container from a ref, and also makes server-side rendering possible.

By default, it uses the body of the top-level document object,
so it's simply \`document.body\` most of the time.`,name:"container",required:!1,type:{name:"Element | (() => Element | null) | null | undefined"}},transition:{defaultValue:{value:"false"},description:"Help supporting a react-transition-group/Transition component.",name:"transition",required:!1,type:{name:"boolean | undefined"}},slots:{defaultValue:{value:"{}"},description:`The components used for each slot inside the Popper.
Either a string to use a HTML element or a component.`,name:"slots",required:!1,type:{name:"PopperSlots | undefined"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Popper.",name:"slotProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", PopperRootSlotPropsOverrides, PopperOwnProps> | undefined; } | undefined'}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!0,type:{name:"boolean"}},placement:{defaultValue:{value:"'bottom'"},description:"Popper placement.",name:"placement",required:!1,type:{name:"Placement | undefined"}},disablePortal:{defaultValue:{value:"false"},description:"The `children` will be under the DOM hierarchy of the parent component.",name:"disablePortal",required:!1,type:{name:"boolean | undefined"}},keepMounted:{defaultValue:{value:"false"},description:`Always keep the children in the DOM.
This prop can be useful in SEO situation or
when you want to maximize the responsiveness of the Popper.`,name:"keepMounted",required:!1,type:{name:"boolean | undefined"}},anchorEl:{defaultValue:null,description:`An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
or a function that returns either.
It's used to set the position of the popper.
The return value will passed as the reference object of the Popper instance.`,name:"anchorEl",required:!1,type:{name:"HTMLElement | VirtualElement | (() => HTMLElement) | (() => VirtualElement) | null | undefined"}},modifiers:{defaultValue:null,description:`Popper.js is based on a "plugin-like" architecture,
most of its features are fully encapsulated "modifiers".

A modifier is a function that is called each time Popper.js needs to
compute the position of the popper.
For this reason, modifiers should be very performant to avoid bottlenecks.
To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).`,name:"modifiers",required:!1,type:{name:"Partial<Modifier<any, any>>[] | undefined"}},popperOptions:{defaultValue:{value:"{}"},description:"Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.",name:"popperOptions",required:!1,type:{name:"Partial<OptionsGeneric<any>> | undefined"}},popperRef:{defaultValue:null,description:"A ref that points to the used popper instance.",name:"popperRef",required:!1,type:{name:"Ref<Instance> | undefined"}}}}}catch{}const J={title:"Components/Popper/Popper",component:n,tags:["autodocs"]},t={render:()=>{const[e,r]=l.useState(null),a=s=>{r(e?null:s.currentTarget)},i=!!e,p=i?"simple-popper":void 0;return o.jsxs("div",{children:[o.jsx(u,{"aria-describedby":p,type:"button",onClick:a,children:"Toggle Popper"}),o.jsx(n,{id:p,open:i,anchorEl:e,children:o.jsx(d,{sx:{border:1,p:1,bgcolor:"background.paper"},children:"The content of the Popper."})})]})},args:{children:"This text is a child of Popper"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const K=["_Popper"];export{t as _Popper,K as __namedExportsOrder,J as default};
