import{a as t,j as c}from"./jsx-runtime-a3bcee63.js";import{r as u}from"./index-570b25c1.js";import{B as h}from"./index-d756ba90.js";import{B as f}from"./index-762a5bc1.js";import{a as P}from"./Tooltip-7ded6962.js";import"./_commonjsHelpers-042e6b4d.js";import"./Box-0b96d669.js";import"./createTheme-bcd1d157.js";import"./clsx-7dc4e18d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./extendSxProp-9115426f.js";import"./Container-a1530f69.js";import"./styled-7846e708.js";import"./useThemeProps-018254e6.js";import"./styled-11d1647d.js";import"./Grid2-c21e3f98.js";import"./isMuiElement-6907f060.js";import"./Stack-8a417692.js";import"./Button-d84dd9a0.js";import"./generateUtilityClasses-70c60a0e.js";import"./ButtonBase-d80b4855.js";import"./emotion-react.browser.esm-474fda6d.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./IconButton-de653fbd.js";import"./LoadingButton-7f26c21d.js";import"./extends-90dea224.js";import"./CircularProgress-83597315.js";import"./useId-6f4bfce0.js";import"./useTheme-76c02901.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./ownerDocument-613eb639.js";import"./Grow-e87a736b.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useSlotProps-ddd7eed7.js";import"./isHostComponent-73d6e646.js";import"./useControlled-9b1271e0.js";const r=({children:e,...n})=>t(P,{...n,children:e});try{r.displayName="Popper",r.__docgenInfo={description:"",displayName:"Popper",props:{children:{defaultValue:null,description:"Popper render function or node.",name:"children",required:!1,type:{name:"ReactNode | ((props: PopperChildrenProps) => ReactNode)"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},container:{defaultValue:null,description:"An HTML element or function that returns one.\nThe `container` will have the portal children appended to it.\n\nBy default, it uses the body of the top-level document object,\nso it's simply `document.body` most of the time.",name:"container",required:!1,type:{name:"Element | (() => Element)"}},transition:{defaultValue:{value:"false"},description:"Help supporting a react-transition-group/Transition component.",name:"transition",required:!1,type:{name:"boolean"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Popper.",name:"slotProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", PopperRootSlotPropsOverrides, PopperOwnProps>; }'}},slots:{defaultValue:{value:"{}"},description:`The components used for each slot inside the Popper.
Either a string to use a HTML element or a component.`,name:"slots",required:!1,type:{name:"PopperSlots"}},disablePortal:{defaultValue:{value:"false"},description:"The `children` will be under the DOM hierarchy of the parent component.",name:"disablePortal",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!0,type:{name:"boolean"}},keepMounted:{defaultValue:{value:"false"},description:`Always keep the children in the DOM.
This prop can be useful in SEO situation or
when you want to maximize the responsiveness of the Popper.`,name:"keepMounted",required:!1,type:{name:"boolean"}},anchorEl:{defaultValue:null,description:`An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
or a function that returns either.
It's used to set the position of the popper.
The return value will passed as the reference object of the Popper instance.`,name:"anchorEl",required:!1,type:{name:"HTMLElement | VirtualElement | (() => HTMLElement) | (() => VirtualElement)"}},modifiers:{defaultValue:null,description:`Popper.js is based on a "plugin-like" architecture,
most of its features are fully encapsulated "modifiers".

A modifier is a function that is called each time Popper.js needs to
compute the position of the popper.
For this reason, modifiers should be very performant to avoid bottlenecks.
To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).`,name:"modifiers",required:!1,type:{name:"Partial<Modifier<any, any>>[]"}},placement:{defaultValue:{value:"'bottom'"},description:"Popper placement.",name:"placement",required:!1,type:{name:"Placement"}},popperOptions:{defaultValue:{value:"{}"},description:"Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.",name:"popperOptions",required:!1,type:{name:"Partial<OptionsGeneric<any>>"}},popperRef:{defaultValue:null,description:"A ref that points to the used popper instance.",name:"popperRef",required:!1,type:{name:"Ref<Instance>"}},component:{defaultValue:null,description:`The component used for the root node.
Either a string to use a HTML element or a component.`,name:"component",required:!1,type:{name:"ElementType<any>"}},components:{defaultValue:{value:"{}"},description:`The components used for each slot inside the Popper.
Either a string to use a HTML element or a component.`,name:"components",required:!1,type:{name:"{ Root?: ElementType<any>; }"}},componentsProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Popper.",name:"componentsProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", PopperRootSlotPropsOverrides, PopperOwnProps>; }'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}}}catch{}const ne={title:"Components/Popper/Popper",component:r,tags:["autodocs"]},o={render:()=>{const[e,n]=u.useState(null),d=m=>{n(e?null:m.currentTarget)},p=!!e,a=p?"simple-popper":void 0;return c("div",{children:[t(f,{"aria-describedby":a,type:"button",onClick:d,children:"Toggle Popper"}),t(r,{id:a,open:p,anchorEl:e,children:t(h,{sx:{border:1,p:1,bgcolor:"background.paper"},children:"The content of the Popper."})})]})},args:{children:"This text is a child of Popper"}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const pe=["_Popper"];export{o as _Popper,pe as __namedExportsOrder,ne as default};
//# sourceMappingURL=Popper.stories-15e17dbe.js.map
