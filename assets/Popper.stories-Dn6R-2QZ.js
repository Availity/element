import{j as o,r as l}from"./iframe-D1NCSytB.js";import{B as d}from"./index-D9eAXuXP.js";import{B as m}from"./index-BPnk7Q5j.js";import{P as c}from"./Tooltip-C79jCpae.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-Dk8U9NOX.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./Grid-CLUwk8Cn.js";import"./useTheme-D3cMIjr1.js";import"./styled-DdVDvF5f.js";import"./styled-BbCZmQsA.js";import"./isMuiElement-DU2Yi2t-.js";import"./Stack-BQ77EqZr.js";import"./Container-CFpNJvgv.js";import"./IconButton-Cqago1eB.js";import"./memoTheme-DOGX_B28.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BAUCY_Oi.js";import"./useTimeout-Bh_i1JKi.js";import"./TransitionGroupContext-BkHkrwff.js";import"./useForkRef-BpGj9yaf.js";import"./useEventCallback-C8LcGziW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DKmuW22e.js";import"./Button-Dci9Exp7.js";import"./useSlot-D1NHtjkn.js";import"./mergeSlotProps-DlDajhlR.js";import"./useControlled-Czfb1u9c.js";import"./getReactElementRef-D8NIfLKv.js";import"./Portal-DSDwhvGd.js";import"./utils-DI3cRngQ.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-WTXiNqL0.js";const r=({children:e,...n})=>o.jsx(c,{...n,children:e});try{r.displayName="Popper",r.__docgenInfo={description:"",displayName:"Popper",props:{component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},components:{defaultValue:{value:"{}"},description:"The components used for each slot inside the Popper.\nEither a string to use a HTML element or a component.\n@deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).",name:"components",required:!1,type:{name:"{ Root?: ElementType<any, keyof IntrinsicElements>; }"}},componentsProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Popper.\n@deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).",name:"componentsProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", PopperRootSlotPropsOverrides, PopperOwnProps>; }'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},children:{defaultValue:null,description:"Popper render function or node.",name:"children",required:!1,type:{name:"ReactNode | ((props: PopperChildrenProps) => ReactNode)"}},container:{defaultValue:null,description:`An HTML element or function that returns one.
The \`container\` will have the portal children appended to it.

You can also provide a callback, which is called in a React layout effect.
This lets you set the container from a ref, and also makes server-side rendering possible.

By default, it uses the body of the top-level document object,
so it's simply \`document.body\` most of the time.`,name:"container",required:!1,type:{name:"Element | (() => Element)"}},transition:{defaultValue:{value:"false"},description:"Help supporting a react-transition-group/Transition component.",name:"transition",required:!1,type:{name:"boolean"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Popper.",name:"slotProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", PopperRootSlotPropsOverrides, PopperOwnProps>; }'}},disablePortal:{defaultValue:{value:"false"},description:"The `children` will be under the DOM hierarchy of the parent component.",name:"disablePortal",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!0,type:{name:"boolean"}},slots:{defaultValue:{value:"{}"},description:`The components used for each slot inside the Popper.
Either a string to use a HTML element or a component.`,name:"slots",required:!1,type:{name:"PopperSlots"}},placement:{defaultValue:{value:"'bottom'"},description:"Popper placement.",name:"placement",required:!1,type:{name:"Placement"}},keepMounted:{defaultValue:{value:"false"},description:`Always keep the children in the DOM.
This prop can be useful in SEO situation or
when you want to maximize the responsiveness of the Popper.`,name:"keepMounted",required:!1,type:{name:"boolean"}},anchorEl:{defaultValue:null,description:`An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
or a function that returns either.
It's used to set the position of the popper.
The return value will passed as the reference object of the Popper instance.`,name:"anchorEl",required:!1,type:{name:"HTMLElement | VirtualElement | (() => HTMLElement) | (() => VirtualElement)"}},modifiers:{defaultValue:null,description:`Popper.js is based on a "plugin-like" architecture,
most of its features are fully encapsulated "modifiers".

A modifier is a function that is called each time Popper.js needs to
compute the position of the popper.
For this reason, modifiers should be very performant to avoid bottlenecks.
To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).`,name:"modifiers",required:!1,type:{name:"Partial<Modifier<any, any>>[]"}},popperOptions:{defaultValue:{value:"{}"},description:"Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.",name:"popperOptions",required:!1,type:{name:"Partial<OptionsGeneric<any>>"}},popperRef:{defaultValue:null,description:"A ref that points to the used popper instance.",name:"popperRef",required:!1,type:{name:"Ref<Instance>"}}}}}catch{}const J={title:"Components/Popper/Popper",component:r,tags:["autodocs"]},t={render:()=>{const[e,n]=l.useState(null),i=s=>{n(e?null:s.currentTarget)},p=!!e,a=p?"simple-popper":void 0;return o.jsxs("div",{children:[o.jsx(m,{"aria-describedby":a,type:"button",onClick:i,children:"Toggle Popper"}),o.jsx(r,{id:a,open:p,anchorEl:e,children:o.jsx(d,{sx:{border:1,p:1,bgcolor:"background.paper"},children:"The content of the Popper."})})]})},args:{children:"This text is a child of Popper"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
