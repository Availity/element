import{j as o,r as l}from"./iframe-DTy-Hi1D.js";import{B as d}from"./index-zuOxgOiJ.js";import{B as u}from"./index-BWwQVXX2.js";import{P as m}from"./Tooltip-DHFGNIkU.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-BiTKfYdJ.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./Grid-9G99kq7Q.js";import"./useTheme-D2uWiRt2.js";import"./isMuiElement-BqP85GjQ.js";import"./styled-CiCMHiUo.js";import"./styled-aP0uaM-i.js";import"./Stack-D5xuPFAT.js";import"./Container-CKdO9iiE.js";import"./IconButton-CZkpNN92.js";import"./memoTheme-BG1xBytH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DQHg31rx.js";import"./useTimeout-Dox0L-0x.js";import"./TransitionGroupContext-vVRi092a.js";import"./useForkRef-Cs-hla5u.js";import"./useEventCallback-wWQn7yuE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dsur0AFP.js";import"./Button-BSzYbaIQ.js";import"./useSlot-Bv56ZHL8.js";import"./mergeSlotProps-DbXyWffN.js";import"./useControlled-DJ-ZRmZ2.js";import"./getReactElementRef-Czal8mnO.js";import"./Portal-BwzhUyNs.js";import"./utils-UH3J-pbT.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-i2bvpF4l.js";const n=({children:e,...r})=>o.jsx(m,{...r,children:e});try{n.displayName="Popper",n.__docgenInfo={description:"",displayName:"Popper",props:{component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements> | undefined"}},components:{defaultValue:{value:"{}"},description:"The components used for each slot inside the Popper.\nEither a string to use a HTML element or a component.\n@deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).",name:"components",required:!1,type:{name:"{ Root?: ElementType<any, keyof IntrinsicElements> | undefined; } | undefined"}},componentsProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Popper.\n@deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).",name:"componentsProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", PopperRootSlotPropsOverrides, PopperOwnProps> | undefined; } | undefined'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme> | undefined"}},children:{defaultValue:null,description:"Popper render function or node.",name:"children",required:!1,type:{name:"ReactNode | ((props: PopperChildrenProps) => ReactNode)"}},container:{defaultValue:null,description:`An HTML element or function that returns one.
The \`container\` will have the portal children appended to it.

You can also provide a callback, which is called in a React layout effect.
This lets you set the container from a ref, and also makes server-side rendering possible.

By default, it uses the body of the top-level document object,
so it's simply \`document.body\` most of the time.`,name:"container",required:!1,type:{name:"Element | (() => Element | null) | null | undefined"}},transition:{defaultValue:{value:"false"},description:"Help supporting a react-transition-group/Transition component.",name:"transition",required:!1,type:{name:"boolean | undefined"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Popper.",name:"slotProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", PopperRootSlotPropsOverrides, PopperOwnProps> | undefined; } | undefined'}},disablePortal:{defaultValue:{value:"false"},description:"The `children` will be under the DOM hierarchy of the parent component.",name:"disablePortal",required:!1,type:{name:"boolean | undefined"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!0,type:{name:"boolean"}},slots:{defaultValue:{value:"{}"},description:`The components used for each slot inside the Popper.
Either a string to use a HTML element or a component.`,name:"slots",required:!1,type:{name:"PopperSlots | undefined"}},placement:{defaultValue:{value:"'bottom'"},description:"Popper placement.",name:"placement",required:!1,type:{name:"Placement | undefined"}},keepMounted:{defaultValue:{value:"false"},description:`Always keep the children in the DOM.
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
