import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{r as y}from"./index-DcWiA9TO.js";import{T as a}from"./index-yTp6TMTk.js";import{P}from"./Popover-DJDHQo2S.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Typography-Cng4iL4p.js";import"./generateUtilityClass-Bqc1qv72.js";import"./createTheme-CKCRSfxM.js";import"./index-D-S2KyN4.js";import"./extendSxProp-BKaoT_Qt.js";import"./DefaultPropsProvider-CIAoFptl.js";import"./useTheme-BUEqHFQV.js";import"./emotion-react.browser.esm-rTq5AsO6.js";import"./memoTheme-DvanvhnP.js";import"./styled-Dbr85gFc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-DyVAdLaw.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-DO4SmqlR.js";import"./resolveComponentProps-BiTA-uKg.js";import"./useForkRef-BVrIj09m.js";import"./Portal-CKWfQBCE.js";import"./useTheme-ChS1Y5Lw.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./getReactElementRef-AnOffBoZ.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-CvfFJp8a.js";import"./Modal-CzgY4V0Y.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-B9IVkNZn.js";import"./Fade-DbM47FxC.js";const t=({...o})=>e.jsx(P,{...o});try{t.displayName="Popover",t.__docgenInfo={description:"",displayName:"Popover",props:{action:{defaultValue:null,description:`A ref for imperative actions.
It currently only supports updatePosition() action.`,name:"action",required:!1,type:{name:"Ref<PopoverActions>"}},anchorEl:{defaultValue:null,description:`An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
or a function that returns either.
It's used to set the position of the popover.`,name:"anchorEl",required:!1,type:{name:"Element | (() => Element) | PopoverVirtualElement | (() => PopoverVirtualElement)"}},anchorOrigin:{defaultValue:{value:`{
vertical: 'top',
horizontal: 'left',
}`},description:`This is the point on the anchor where the popover's
\`anchorEl\` will attach to. This is not used when the
anchorReference is 'anchorPosition'.

Options:
vertical: [top, center, bottom];
horizontal: [left, center, right].`,name:"anchorOrigin",required:!1,type:{name:"PopoverOrigin"}},anchorPosition:{defaultValue:null,description:`This is the position that may be used to set the position of the popover.
The coordinates are relative to the application's client area.`,name:"anchorPosition",required:!1,type:{name:"PopoverPosition"}},anchorReference:{defaultValue:{value:"'anchorEl'"},description:`This determines which anchor prop to refer to when setting
the position of the popover.`,name:"anchorReference",required:!1,type:{name:"PopoverReference"}},BackdropComponent:{defaultValue:{value:`styled(Backdrop, {
name: 'MuiModal',
slot: 'Backdrop',
overridesResolver: (props, styles) => {
return styles.backdrop;
},
})({
zIndex: -1,
})`},description:"A backdrop component. This prop enables custom backdrop rendering.\n@deprecated Use `slotProps.root.slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.\nUse the `slotProps.root.slots.backdrop` prop to make your application ready for the next version of Material UI.",name:"BackdropComponent",required:!1,type:{name:"ElementType<BackdropProps, keyof IntrinsicElements>"}},BackdropProps:{defaultValue:null,description:"Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.\n@deprecated Use `slotProps.root.slotProps.backdrop` instead.",name:"BackdropProps",required:!1,type:{name:"Partial<BackdropProps>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<PopoverClasses>"}},container:{defaultValue:null,description:"An HTML element, component instance, or function that returns either.\nThe `container` will passed to the Modal component.\n\nBy default, it uses the body of the anchorEl's top-level document object,\nso it's simply `document.body` most of the time.",name:"container",required:!1,type:{name:"Element | (() => Element)"}},elevation:{defaultValue:{value:"8"},description:"The elevation of the popover.",name:"elevation",required:!1,type:{name:"number"}},marginThreshold:{defaultValue:{value:"16"},description:`Specifies how close to the edge of the window the popover can appear.
If null, the popover will not be constrained by the window.`,name:"marginThreshold",required:!1,type:{name:"number"}},onClose:{defaultValue:null,description:"Callback fired when the component requests to be closed.\nThe `reason` parameter can optionally be used to control the response to `onClose`.",name:"onClose",required:!1,type:{name:'(event: {}, reason: "backdropClick" | "escapeKeyDown") => void'}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!0,type:{name:"boolean"}},PaperProps:{defaultValue:{value:"{}"},description:"Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.\n\nThis prop is an alias for `slotProps.paper` and will be overriden by it if both are used.\n@deprecated Use `slotProps.paper` instead.",name:"PaperProps",required:!1,type:{name:"Partial<PaperProps<ElementType<any, keyof IntrinsicElements>>>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},transformOrigin:{defaultValue:{value:`{
vertical: 'top',
horizontal: 'left',
}`},description:`This is the point on the popover which
will attach to the anchor's origin.

Options:
vertical: [top, center, bottom, x(px)];
horizontal: [left, center, right, x(px)].`,name:"transformOrigin",required:!1,type:{name:"PopoverOrigin"}},TransitionComponent:{defaultValue:{value:"Grow"},description:`The component used for the transition.
[Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.`,name:"TransitionComponent",required:!1,type:{name:"JSXElementConstructor<TransitionProps & { children: ReactElement<unknown, any>; }>"}},transitionDuration:{defaultValue:{value:"'auto'"},description:"Set to 'auto' to automatically calculate transition time based on height.",name:"transitionDuration",required:!1,type:{name:'number | "auto" | { appear?: number; enter?: number; exit?: number; } | { appear?: number; enter?: number; exit?: number; }'}},TransitionProps:{defaultValue:{value:"{}"},description:"Props applied to the transition element.\nBy default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.",name:"TransitionProps",required:!1,type:{name:"TransitionProps"}},className:{defaultValue:null,description:"@ignore",name:"className",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},components:{defaultValue:{value:"{}"},description:"The components used for each slot inside.\n@deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"components",required:!1,type:{name:"{ Root?: ElementType<any, keyof IntrinsicElements>; Backdrop?: ElementType<any, keyof IntrinsicElements>; }"}},componentsProps:{defaultValue:{value:"{}"},description:"The extra props for the slot components.\nYou can override the existing props or add new ones.\n@deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"componentsProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", ModalComponentsPropsOverrides, ModalOwnerState>; backdrop?: SlotComponentProps<OverridableComponent<BackdropTypeMap<{}, "div">>, ModalComponentsPropsOverrides, ModalOwnerState>; }'}},disablePortal:{defaultValue:{value:"false"},description:"The `children` will be under the DOM hierarchy of the parent component.",name:"disablePortal",required:!1,type:{name:"boolean"}},disableEnforceFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not prevent focus from leaving the modal while open.\n\nGenerally this should never be set to `true` as it makes the modal less\naccessible to assistive technologies, like screen readers.",name:"disableEnforceFocus",required:!1,type:{name:"boolean"}},disableEscapeKeyDown:{defaultValue:{value:"false"},description:"If `true`, hitting escape will not fire the `onClose` callback.",name:"disableEscapeKeyDown",required:!1,type:{name:"boolean"}},disableRestoreFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not restore focus to previously focused element once\nmodal is hidden or unmounted.",name:"disableRestoreFocus",required:!1,type:{name:"boolean"}},onBackdropClick:{defaultValue:null,description:"Callback fired when the backdrop is clicked.\n@deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.",name:"onBackdropClick",required:!1,type:{name:"ReactEventHandler<{}>"}},closeAfterTransition:{defaultValue:{value:"false"},description:"When set to true the Modal waits until a nested Transition is completed before closing.",name:"closeAfterTransition",required:!1,type:{name:"boolean"}},disableAutoFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not automatically shift focus to itself when it opens, and\nreplace it to the last focused element when it closes.\nThis also works correctly with any modal children that have the `disableAutoFocus` prop.\n\nGenerally this should never be set to `true` as it makes the modal less\naccessible to assistive technologies, like screen readers.",name:"disableAutoFocus",required:!1,type:{name:"boolean"}},disableScrollLock:{defaultValue:{value:"false"},description:"Disable the scroll lock behavior.",name:"disableScrollLock",required:!1,type:{name:"boolean"}},hideBackdrop:{defaultValue:{value:"false"},description:"If `true`, the backdrop is not rendered.",name:"hideBackdrop",required:!1,type:{name:"boolean"}},keepMounted:{defaultValue:{value:"false"},description:`Always keep the children in the DOM.
This prop can be useful in SEO situation or
when you want to maximize the responsiveness of the Modal.`,name:"keepMounted",required:!1,type:{name:"boolean"}},onTransitionEnter:{defaultValue:null,description:"A function called when a transition enters.",name:"onTransitionEnter",required:!1,type:{name:"() => void"}},onTransitionExited:{defaultValue:null,description:"A function called when a transition has exited.",name:"onTransitionExited",required:!1,type:{name:"() => void"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<PopoverSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ root?: SlotProps<OverridableComponent<ModalTypeMap<"div", {}>>, {}, ModalOwnerState>; paper?: SlotProps<OverridableComponent<PaperTypeMap<{}, "div">>, {}, {}>; }'}}}}}catch{}const ne={title:"Components/Popover/Popover",component:t,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:100}}}},n={render:o=>e.jsx("div",{children:e.jsx(t,{...o})}),args:{children:e.jsx(a,{children:"This text is a child of Popover",sx:{p:1}}),open:!0}},r={render:()=>{const[o,i]=y.useState(null),f=v=>{i(v.currentTarget)},s=()=>{i(null)},l=!!o;return e.jsxs(e.Fragment,{children:[e.jsx(a,{"aria-owns":l?"mouse-over-popover":void 0,"aria-haspopup":"true",children:"Hover Me",onMouseEnter:f,onMouseLeave:s}),e.jsx(t,{anchorEl:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:e.jsx(a,{children:"This text is a child of Popover",sx:{p:1}}),disableRestoreFocus:!0,id:"mouse-over-popover",onClose:s,open:l,sx:{pointerEvents:"none"},transformOrigin:{vertical:"top",horizontal:"left"}})]})}};var p,d,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: PopoverProps) => {
    return <div>
        <Popover {...args} />
      </div>;
  },
  args: {
    children: <Typography children="This text is a child of Popover" sx={{
      p: 1
    }} />,
    open: true
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,m,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return <>
        <Typography aria-owns={open ? 'mouse-over-popover' : undefined} aria-haspopup="true" children="Hover Me" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose} />
        <Popover anchorEl={anchorEl} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }} children={<Typography children="This text is a child of Popover" sx={{
        p: 1
      }} />} disableRestoreFocus id="mouse-over-popover" onClose={handlePopoverClose} open={open} sx={{
        pointerEvents: 'none'
      }} transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }} />
      </>;
  }
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const re=["_Popover","_PopoverWithTarget"];export{n as _Popover,r as _PopoverWithTarget,re as __namedExportsOrder,ne as default};
