import{j as e,r}from"./iframe-DTy-Hi1D.js";import{B as p}from"./index-BWwQVXX2.js";import{T as i}from"./index-B3nHNvBt.js";import{C as m}from"./index-DO8LVTs7.js";import{M as u}from"./Modal-C1xsDPMc.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-CZkpNN92.js";import"./memoTheme-BG1xBytH.js";import"./styled-aP0uaM-i.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-DQHg31rx.js";import"./useTimeout-Dox0L-0x.js";import"./TransitionGroupContext-vVRi092a.js";import"./useForkRef-Cs-hla5u.js";import"./useEventCallback-wWQn7yuE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dsur0AFP.js";import"./Tooltip-DHFGNIkU.js";import"./useTheme-D2uWiRt2.js";import"./useSlot-Bv56ZHL8.js";import"./mergeSlotProps-DbXyWffN.js";import"./useControlled-DJ-ZRmZ2.js";import"./getReactElementRef-Czal8mnO.js";import"./Portal-BwzhUyNs.js";import"./utils-UH3J-pbT.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-i2bvpF4l.js";import"./Button-BSzYbaIQ.js";import"./Typography-BE1U26X8.js";import"./Card-Bx-XjNMz.js";import"./Paper-BB7D87hg.js";import"./CardHeader-CRv2N4Mh.js";import"./Chip-DXnIQAds.js";import"./createSvgIcon-Bsd6X5Qz.js";import"./SvgIcon-3YRNiFr2.js";import"./getActiveElement-CvEHRBc8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-7k1loi6N.js";import"./Fade-CkUvZM_R.js";const t=({children:o,...a})=>e.jsx(u,{...a,disablePortal:!0,children:o});try{t.displayName="Modal",t.__docgenInfo={description:"",displayName:"Modal",props:{children:{defaultValue:null,description:"A single child content element.",name:"children",required:!1,type:{name:"ReactNode & ReactElement<unknown, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"@ignore",name:"className",required:!1,type:{name:"string | undefined"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ModalClasses> | undefined"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme> | undefined"}},container:{defaultValue:null,description:`An HTML element or function that returns one.
The \`container\` will have the portal children appended to it.

You can also provide a callback, which is called in a React layout effect.
This lets you set the container from a ref, and also makes server-side rendering possible.

By default, it uses the body of the top-level document object,
so it's simply \`document.body\` most of the time.`,name:"container",required:!1,type:{name:"Element | (() => Element | null) | null | undefined"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Modal.",name:"slotProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", ModalComponentsPropsOverrides, ModalOwnerState> | undefined; backdrop?: SlotComponentProps<...> | undefined; } | undefined'}},onClose:{defaultValue:null,description:'Callback fired when the component requests to be closed.\nThe `reason` parameter can optionally be used to control the response to `onClose`.\n@param event The event source of the callback.\n@param reason Can be: `"escapeKeyDown"`, `"backdropClick"`.',name:"onClose",required:!1,type:{name:'((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined'}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!0,type:{name:"boolean"}},slots:{defaultValue:{value:"{}"},description:`The components used for each slot inside the Modal.
Either a string to use a HTML element or a component.`,name:"slots",required:!1,type:{name:"ModalSlots | undefined"}},disableEscapeKeyDown:{defaultValue:{value:"false"},description:"If `true`, hitting escape will not fire the `onClose` callback.",name:"disableEscapeKeyDown",required:!1,type:{name:"boolean | undefined"}},disableRestoreFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not restore focus to previously focused element once\nmodal is hidden or unmounted.",name:"disableRestoreFocus",required:!1,type:{name:"boolean | undefined"}},closeAfterTransition:{defaultValue:{value:"false"},description:"When set to true the Modal waits until a nested Transition is completed before closing.",name:"closeAfterTransition",required:!1,type:{name:"boolean | undefined"}},disableScrollLock:{defaultValue:{value:"false"},description:"Disable the scroll lock behavior.",name:"disableScrollLock",required:!1,type:{name:"boolean | undefined"}},hideBackdrop:{defaultValue:{value:"false"},description:"If `true`, the backdrop is not rendered.",name:"hideBackdrop",required:!1,type:{name:"boolean | undefined"}},keepMounted:{defaultValue:{value:"false"},description:`Always keep the children in the DOM.
This prop can be useful in SEO situation or
when you want to maximize the responsiveness of the Modal.`,name:"keepMounted",required:!1,type:{name:"boolean | undefined"}},onTransitionEnter:{defaultValue:null,description:"A function called when a transition enters.",name:"onTransitionEnter",required:!1,type:{name:"(() => void) | undefined"}},onTransitionExited:{defaultValue:null,description:"A function called when a transition has exited.",name:"onTransitionExited",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const ne={title:"Components/Modal/Modal",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"If you are creating a modal dialog, you probably want to use the `Dialog` component rather than directly using `Modal`. `Modal` is a lower-level construct that is leveraged by components like `Dialog` and `Menu`."}}}},c={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"white",padding:"8px 12px"},n={render:o=>{const[a,l]=r.useState(o.open);r.useEffect(()=>{l(o.open)},[o.open]);const s=()=>{l(!0)},d=()=>{l(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:s,children:"Open modal"}),e.jsx(t,{...o,open:a,onClose:d,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(m,{style:c,children:[e.jsx(i,{id:"modal-modal-title",variant:"h6",component:"h1",children:"Text in a modal"}),e.jsx(i,{id:"modal-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})]})},args:{open:!1}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (args: ModalProps) => {
    const [open, setOpen] = useState(args.open);
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return <>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal {...args} open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Card style={style}>
            <Typography id="modal-modal-title" variant="h6" component="h1">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{
            mt: 2
          }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Card>
        </Modal>
      </>;
  },
  args: {
    open: false
  }
}`,...n.parameters?.docs?.source}}};const te=["_Modal"];export{n as _Modal,te as __namedExportsOrder,ne as default};
