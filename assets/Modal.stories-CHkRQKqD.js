import{j as e,r as l}from"./iframe-DF1q2aaL.js";import{B as u}from"./index-D2mEmfXN.js";import{T as s}from"./index-Q8RjvuCg.js";import{C as f}from"./index-Bjjy2Nc1.js";import{M as h}from"./Modal-BadjnIQl.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BXhUmSeH.js";import"./useTheme-C0GFliqz.js";import"./styled-CFEXa4qH.js";import"./memoTheme-BD6H9365.js";import"./useSlot-CQvSmYnu.js";import"./mergeSlotProps-BnmzE4jq.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D-TFDBL_.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-CJLBifOK.js";import"./useControlled-C2txOzyk.js";import"./useEventCallback-C9NbUrxX.js";import"./getReactElementRef-Cr3R6gAV.js";import"./Portal-CbFePWP9.js";import"./utils-BdM8s10D.js";import"./TransitionGroupContext-DTdRQeqO.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-B0ZOsC4g.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-K-5rBd1A.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D5OUD9Sm.js";import"./CircularProgress-DkK8nyO-.js";import"./Button-B9ufjNyc.js";import"./Typography-cWmdXt40.js";import"./Card-o1pEpYXP.js";import"./Paper-DZhAfepD.js";import"./CardHeader-CuwzDSJL.js";import"./Chip-D1hybGvz.js";import"./createSvgIcon-DzcieuLS.js";import"./SvgIcon-DB8Z1ZTq.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-Ck1pJi37.js";import"./Fade-CQtVaZQb.js";const n=({children:o,...a})=>e.jsx(h,{...a,disablePortal:!0,children:o});try{n.displayName="Modal",n.__docgenInfo={description:"",displayName:"Modal",props:{children:{defaultValue:null,description:"A single child content element.",name:"children",required:!1,type:{name:"ReactNode & ReactElement<unknown, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"@ignore",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ModalClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},container:{defaultValue:null,description:`An HTML element or function that returns one.
The \`container\` will have the portal children appended to it.

You can also provide a callback, which is called in a React layout effect.
This lets you set the container from a ref, and also makes server-side rendering possible.

By default, it uses the body of the top-level document object,
so it's simply \`document.body\` most of the time.`,name:"container",required:!1,type:{name:"Element | (() => Element)"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!0,type:{name:"boolean"}},slots:{defaultValue:{value:"{}"},description:`The components used for each slot inside the Modal.
Either a string to use a HTML element or a component.`,name:"slots",required:!1,type:{name:"ModalSlots"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Modal.",name:"slotProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", ModalComponentsPropsOverrides, ModalOwnerState>; backdrop?: SlotComponentProps<OverridableComponent<BackdropTypeMap<{}, "div">>, ModalComponentsPropsOverrides, ModalOwnerState>; }'}},onClose:{defaultValue:null,description:'Callback fired when the component requests to be closed.\nThe `reason` parameter can optionally be used to control the response to `onClose`.\n@param event The event source of the callback.\n@param reason Can be: `"escapeKeyDown"`, `"backdropClick"`.',name:"onClose",required:!1,type:{name:'(event: {}, reason: "backdropClick" | "escapeKeyDown") => void'}},disableEscapeKeyDown:{defaultValue:{value:"false"},description:"If `true`, hitting escape will not fire the `onClose` callback.",name:"disableEscapeKeyDown",required:!1,type:{name:"boolean"}},disableRestoreFocus:{defaultValue:{value:"false"},description:"If `true`, the modal will not restore focus to previously focused element once\nmodal is hidden or unmounted.",name:"disableRestoreFocus",required:!1,type:{name:"boolean"}},closeAfterTransition:{defaultValue:{value:"false"},description:"When set to true the Modal waits until a nested Transition is completed before closing.",name:"closeAfterTransition",required:!1,type:{name:"boolean"}},disableScrollLock:{defaultValue:{value:"false"},description:"Disable the scroll lock behavior.",name:"disableScrollLock",required:!1,type:{name:"boolean"}},hideBackdrop:{defaultValue:{value:"false"},description:"If `true`, the backdrop is not rendered.",name:"hideBackdrop",required:!1,type:{name:"boolean"}},keepMounted:{defaultValue:{value:"false"},description:`Always keep the children in the DOM.
This prop can be useful in SEO situation or
when you want to maximize the responsiveness of the Modal.`,name:"keepMounted",required:!1,type:{name:"boolean"}},onTransitionEnter:{defaultValue:null,description:"A function called when a transition enters.",name:"onTransitionEnter",required:!1,type:{name:"() => void"}},onTransitionExited:{defaultValue:null,description:"A function called when a transition has exited.",name:"onTransitionExited",required:!1,type:{name:"() => void"}}}}}catch{}const re={title:"Components/Modal/Modal",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"If you are creating a modal dialog, you probably want to use the `Dialog` component rather than directly using `Modal`. `Modal` is a lower-level construct that is leveraged by components like `Dialog` and `Menu`."}}}},y={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"white",padding:"8px 12px"},t={render:o=>{const[a,r]=l.useState(o.open);l.useEffect(()=>{r(o.open)},[o.open]);const m=()=>{r(!0)},c=()=>{r(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:m,children:"Open modal"}),e.jsx(n,{...o,open:a,onClose:c,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(f,{style:y,children:[e.jsx(s,{id:"modal-modal-title",variant:"h6",component:"h1",children:"Text in a modal"}),e.jsx(s,{id:"modal-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})]})},args:{open:!1}};var i,d,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const le=["_Modal"];export{t as _Modal,le as __namedExportsOrder,re as default};
