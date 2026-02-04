import{j as e,r as l}from"./iframe-Cdk6lpWs.js";import{B as p}from"./index-CywYuil6.js";import{T as s}from"./index-KsZzlR7V.js";import{C as m}from"./index-Bg_Yvatr.js";import{M as c}from"./Modal-C-Sdy15n.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-BgHK4L6p.js";import"./useTheme-OiEjV3So.js";import"./styled-Da4jwHSl.js";import"./memoTheme-Dnmlp1j3.js";import"./useSlot-D-PxlIN3.js";import"./mergeSlotProps-DMc6LXK-.js";import"./useForkRef-BBp7hlnJ.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-CIy7F0jL.js";import"./useControlled-QHn5S2wL.js";import"./useEventCallback-vVwk_Y3I.js";import"./getReactElementRef-ABpHVkKM.js";import"./Portal-Ci08Bzea.js";import"./utils-DiARjLYz.js";import"./TransitionGroupContext-DcA7Ut_f.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CRphJa0r.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-2-tk2V1a.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CJIyK2Pl.js";import"./CircularProgress-CILK_PUp.js";import"./Button-CkMj2wnd.js";import"./Typography-BiMhXRVd.js";import"./Card-B71QP0hC.js";import"./Paper-CO31t9g6.js";import"./CardHeader-CipGcqE7.js";import"./Chip-BckeqeRs.js";import"./createSvgIcon-1kVfY1hj.js";import"./SvgIcon-BMF15TUB.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BehU8qli.js";import"./Fade-B5dkP1J3.js";const n=({children:o,...a})=>e.jsx(c,{...a,disablePortal:!0,children:o});try{n.displayName="Modal",n.__docgenInfo={description:"",displayName:"Modal",props:{children:{defaultValue:null,description:"A single child content element.",name:"children",required:!1,type:{name:"ReactNode & ReactElement<unknown, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"@ignore",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ModalClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},container:{defaultValue:null,description:`An HTML element or function that returns one.
The \`container\` will have the portal children appended to it.

You can also provide a callback, which is called in a React layout effect.
This lets you set the container from a ref, and also makes server-side rendering possible.

By default, it uses the body of the top-level document object,
so it's simply \`document.body\` most of the time.`,name:"container",required:!1,type:{name:"Element | (() => Element)"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Modal.",name:"slotProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", ModalComponentsPropsOverrides, ModalOwnerState>; backdrop?: SlotComponentProps<OverridableComponent<BackdropTypeMap<{}, "div">>, ModalComponentsPropsOverrides, ModalOwnerState>; }'}},onClose:{defaultValue:null,description:'Callback fired when the component requests to be closed.\nThe `reason` parameter can optionally be used to control the response to `onClose`.\n@param event The event source of the callback.\n@param reason Can be: `"escapeKeyDown"`, `"backdropClick"`.',name:"onClose",required:!1,type:{name:'(event: {}, reason: "backdropClick" | "escapeKeyDown") => void'}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!0,type:{name:"boolean"}},slots:{defaultValue:{value:"{}"},description:`The components used for each slot inside the Modal.
Either a string to use a HTML element or a component.`,name:"slots",required:!1,type:{name:"ModalSlots"}},closeAfterTransition:{defaultValue:{value:"false"},description:"When set to true the Modal waits until a nested Transition is completed before closing.",name:"closeAfterTransition",required:!1,type:{name:"boolean"}},disableEscapeKeyDown:{defaultValue:{value:"false"},description:"If `true`, hitting escape will not fire the `onClose` callback.",name:"disableEscapeKeyDown",required:!1,type:{name:"boolean"}},disableRestoreFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not restore focus to previously focused element once\nmodal is hidden or unmounted.",name:"disableRestoreFocus",required:!1,type:{name:"boolean"}},disableScrollLock:{defaultValue:{value:"false"},description:"Disable the scroll lock behavior.",name:"disableScrollLock",required:!1,type:{name:"boolean"}},hideBackdrop:{defaultValue:{value:"false"},description:"If `true`, the backdrop is not rendered.",name:"hideBackdrop",required:!1,type:{name:"boolean"}},keepMounted:{defaultValue:{value:"false"},description:`Always keep the children in the DOM.
This prop can be useful in SEO situation or
when you want to maximize the responsiveness of the Modal.`,name:"keepMounted",required:!1,type:{name:"boolean"}},onTransitionEnter:{defaultValue:null,description:"A function called when a transition enters.",name:"onTransitionEnter",required:!1,type:{name:"() => void"}},onTransitionExited:{defaultValue:null,description:"A function called when a transition has exited.",name:"onTransitionExited",required:!1,type:{name:"() => void"}}}}}catch{}const te={title:"Components/Modal/Modal",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"If you are creating a modal dialog, you probably want to use the `Dialog` component rather than directly using `Modal`. `Modal` is a lower-level construct that is leveraged by components like `Dialog` and `Menu`."}}}},u={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"white",padding:"8px 12px"},t={render:o=>{const[a,r]=l.useState(o.open);l.useEffect(()=>{r(o.open)},[o.open]);const i=()=>{r(!0)},d=()=>{r(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:i,children:"Open modal"}),e.jsx(n,{...o,open:a,onClose:d,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(m,{style:u,children:[e.jsx(s,{id:"modal-modal-title",variant:"h6",component:"h1",children:"Text in a modal"}),e.jsx(s,{id:"modal-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})]})},args:{open:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const ne=["_Modal"];export{t as _Modal,ne as __namedExportsOrder,te as default};
