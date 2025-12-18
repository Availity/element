import{r as u,u as ue,j as e,c as Ie,ag as X,v as M}from"./iframe-DdXne19Y.js";import{b,a as E}from"./index-D2FxyoCn.js";import{B as V}from"./index-BAQ-tpih.js";import{B as me,G as p}from"./index-MeSa46Cj.js";import{C as x}from"./index-CMqllfeY.js";import{u as Re}from"./useTimeout-DNSBYZWv.js";import{u as J}from"./useEventCallback-tpV6a8iV.js";import{e as Q}from"./mergeSlotProps-DnK45DUJ.js";import{u as Ve}from"./useTheme-CuyM6APQ.js";import{s as j,c as fe}from"./styled-BazYwfX2.js";import{m as he}from"./memoTheme-CUJXAVnw.js";import{g as ke}from"./generateUtilityClass-BtcU_pBl.js";import{g as Se}from"./generateUtilityClasses-DDbjFgb8.js";import{u as L}from"./useSlot-C03We_gL.js";import{C as ze}from"./ClickAwayListener-ocUi6PFp.js";import{P as _e}from"./Paper-CbzX-jOu.js";import{G as qe}from"./Portal-DsQ-EqqM.js";import{L as z}from"./Link-BbMFiESl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CNxWBKtb.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-BQDSNwSM.js";import"./Alert-BjtWGRQR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-DN69LkXl.js";import"./Close-BxR2kOeP.js";import"./IconButton-AJGji1yG.js";import"./ButtonBase-QyfCUXJP.js";import"./TransitionGroupContext-BmVNFFik.js";import"./useForkRef-CwS1hXJN.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BfO5yz2q.js";import"./AlertTitle-BJB4rz4g.js";import"./Typography-DcBpERD3.js";import"./Tooltip-Rz90OO73.js";import"./useControlled-Z6Q03A9f.js";import"./getReactElementRef-DEBAn-f7.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-By8gKRU1.js";import"./Button-CllFJQRZ.js";import"./Box-C-w4SaHJ.js";import"./Grid-C_HzQ4gC.js";import"./styled-BF4YlmQL.js";import"./isMuiElement-DibdeMrO.js";import"./Stack-C_AZLH4Q.js";import"./Container-DBlL8WTt.js";import"./Collapse-D1MT2_ze.js";import"./utils-Ch6tMI2K.js";import"./isHostComponent-DVu5iVWx.js";function We(n={}){const{autoHideDuration:t=null,disableWindowBlurListener:o=!1,onClose:r,open:s,resumeHideDuration:f}=n,h=Re();u.useEffect(()=>{if(!s)return;function i(a){a.defaultPrevented||a.key==="Escape"&&(r==null||r(a,"escapeKeyDown"))}return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[s,r]);const k=J((i,a)=>{r==null||r(i,a)}),g=J(i=>{!r||i==null||h.start(i,()=>{k(null,"timeout")})});u.useEffect(()=>(s&&g(t),h.clear),[s,t,g,h]);const m=i=>{r==null||r(i,"clickaway")},c=h.clear,C=u.useCallback(()=>{t!=null&&g(f??t*.5)},[t,f,g]),D=i=>a=>{const l=i.onBlur;l==null||l(a),C()},H=i=>a=>{const l=i.onFocus;l==null||l(a),c()},I=i=>a=>{const l=i.onMouseEnter;l==null||l(a),c()},R=i=>a=>{const l=i.onMouseLeave;l==null||l(a),C()};return u.useEffect(()=>{if(!o&&s)return window.addEventListener("focus",C),window.addEventListener("blur",c),()=>{window.removeEventListener("focus",C),window.removeEventListener("blur",c)}},[o,s,C,c]),{getRootProps:(i={})=>{const a={...Q(n),...Q(i)};return{role:"presentation",...i,...a,onBlur:D(a),onFocus:H(a),onMouseEnter:I(a),onMouseLeave:R(a)}},onClickAway:m}}function Ne(n){return ke("MuiSnackbarContent",n)}Se("MuiSnackbarContent",["root","message","action"]);const Ue=n=>{const{classes:t}=n;return fe({root:["root"],action:["action"],message:["message"]},Ne,t)},Fe=j(_e,{name:"MuiSnackbarContent",slot:"Root"})(he(({theme:n})=>{const t=n.palette.mode==="light"?.8:.98;return{...n.typography.body2,color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(X(n.palette.background.default,t)),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:X(n.palette.background.default,t),display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}})),$e=j("div",{name:"MuiSnackbarContent",slot:"Message"})({padding:"8px 0"}),Ke=j("div",{name:"MuiSnackbarContent",slot:"Action"})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),Xe=u.forwardRef(function(t,o){const r=ue({props:t,name:"MuiSnackbarContent"}),{action:s,className:f,message:h,role:k="alert",...g}=r,m=r,c=Ue(m);return e.jsxs(Fe,{role:k,elevation:6,className:Ie(c.root,f),ownerState:m,ref:o,...g,children:[e.jsx($e,{className:c.message,ownerState:m,children:h}),s?e.jsx(Ke,{className:c.action,ownerState:m,children:s}):null]})});function Je(n){return ke("MuiSnackbar",n)}Se("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const Qe=n=>{const{classes:t,anchorOrigin:o}=n,r={root:["root",`anchorOrigin${M(o.vertical)}${M(o.horizontal)}`]};return fe(r,Je,t)},Ye=j("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.root,t[`anchorOrigin${M(o.anchorOrigin.vertical)}${M(o.anchorOrigin.horizontal)}`]]}})(he(({theme:n})=>({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:t})=>t.anchorOrigin.vertical==="top",style:{top:8,[n.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:t})=>t.anchorOrigin.vertical!=="top",style:{bottom:8,[n.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="left",style:{justifyContent:"flex-start",[n.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="right",style:{justifyContent:"flex-end",[n.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="center",style:{[n.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]}))),Ze=u.forwardRef(function(t,o){const r=ue({props:t,name:"MuiSnackbar"}),s=Ve(),f={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{action:h,anchorOrigin:{vertical:k,horizontal:g}={vertical:"bottom",horizontal:"left"},autoHideDuration:m=null,children:c,className:C,ClickAwayListenerProps:D,ContentProps:H,disableWindowBlurListener:I=!1,message:R,onBlur:be,onClose:i,onFocus:a,onMouseEnter:l,onMouseLeave:en,open:_,resumeHideDuration:nn,slots:q={},slotProps:ge={},TransitionComponent:W,transitionDuration:N=f,TransitionProps:{onEnter:U,onExited:F,...ye}={},...xe}=r,w={...r,anchorOrigin:{vertical:k,horizontal:g},autoHideDuration:m,disableWindowBlurListener:I,TransitionComponent:W,transitionDuration:N},ve=Qe(w),{getRootProps:Ce,onClickAway:we}=We({...w}),[Ae,$]=u.useState(!0),Pe=d=>{$(!0),F&&F(d)},je=(d,S)=>{$(!1),U&&U(d,S)},T={slots:{transition:W,...q},slotProps:{content:H,clickAwayListener:D,transition:ye,...ge}},[Te,Ee]=L("root",{ref:o,className:[ve.root,C],elementType:Ye,getSlotProps:Ce,externalForwardedProps:{...T,...xe},ownerState:w}),[Le,{ownerState:Oe,...Be}]=L("clickAwayListener",{elementType:ze,externalForwardedProps:T,getSlotProps:d=>({onClickAway:(...S)=>{var K;const y=S[0];(K=d.onClickAway)==null||K.call(d,...S),!(y!=null&&y.defaultMuiPrevented)&&we(...S)}}),ownerState:w}),[Ge,Me]=L("content",{elementType:Xe,shouldForwardComponentProp:!0,externalForwardedProps:T,additionalProps:{message:R,action:h},ownerState:w}),[De,He]=L("transition",{elementType:qe,externalForwardedProps:T,getSlotProps:d=>({onEnter:(...S)=>{var y;(y=d.onEnter)==null||y.call(d,...S),je(...S)},onExited:(...S)=>{var y;(y=d.onExited)==null||y.call(d,...S),Pe(...S)}}),additionalProps:{appear:!0,in:_,timeout:N,direction:k==="top"?"down":"up"},ownerState:w});return!_&&Ae?null:e.jsx(Le,{...Be,...q.clickAwayListener&&{ownerState:Oe},children:e.jsx(Te,{...Ee,children:e.jsx(De,{...He,children:c||e.jsx(Ge,{...Me})})})})}),P=n=>e.jsx(Ze,{...n});try{P.displayName="Snackbar",P.__docgenInfo={description:"",displayName:"Snackbar",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<SnackbarClasses>"}},children:{defaultValue:null,description:"Replace the `SnackbarContent` component.",name:"children",required:!1,type:{name:"ReactElement<unknown, any>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},key:{defaultValue:null,description:"When displaying multiple consecutive snackbars using a single parent-rendered\n`<Snackbar/>`, add the `key` prop to ensure independent treatment of each message.\nFor instance, use `<Snackbar key={message} />`. Otherwise, messages might update\nin place, and features like `autoHideDuration` could be affected.",name:"key",required:!1,type:{name:"any"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<SnackbarSlots>"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ root?: SlotProps<"div", SnackbarRootSlotPropsOverrides, SnackbarOwnerState>; content?: SlotProps<ElementType<SnackbarContentProps, keyof IntrinsicElements>, SnackbarContentSlotPropsOverrides, SnackbarOwnerState>; clickAwayListener?: SlotComponentProps<...>; transition?: SlotComponentProps<...>; }'}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:'Callback fired when the component requests to be closed.\nTypically `onClose` is used to set state in the parent component,\nwhich is used to control the `Snackbar` `open` prop.\nThe `reason` parameter can optionally be used to control the response to `onClose`,\nfor example ignoring `clickaway`.\n@param event The event source of the callback.\n@param reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`, or `"escapeKeyDown"`.',name:"onClose",required:!1,type:{name:"(event: Event | SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => void"}},anchorOrigin:{defaultValue:{value:"{ vertical: 'bottom', horizontal: 'left' }"},description:"The anchor of the `Snackbar`.\nOn smaller screens, the component grows to occupy all the available width,\nthe horizontal alignment is ignored.",name:"anchorOrigin",required:!1,type:{name:"SnackbarOrigin"}},TransitionProps:{defaultValue:{value:"{}"},description:"Props applied to the transition element.\nBy default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.\n@deprecated Use `slotProps.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"TransitionProps",required:!1,type:{name:"TransitionProps"}},autoHideDuration:{defaultValue:{value:"null"},description:"The number of milliseconds to wait before automatically calling the\n`onClose` function. `onClose` should then set the state of the `open`\nprop to hide the Snackbar. This behavior is disabled by default with\nthe `null` value.",name:"autoHideDuration",required:!1,type:{name:"number"}},ClickAwayListenerProps:{defaultValue:null,description:"Props applied to the `ClickAwayListener` element.\n@deprecated Use `slotProps.clickAwayListener` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"ClickAwayListenerProps",required:!1,type:{name:"Partial<ClickAwayListenerProps>"}},disableWindowBlurListener:{defaultValue:{value:"false"},description:"If `true`, the `autoHideDuration` timer will expire even if the window is not focused.",name:"disableWindowBlurListener",required:!1,type:{name:"boolean"}},resumeHideDuration:{defaultValue:null,description:"The number of milliseconds to wait before dismissing after user interaction.\nIf `autoHideDuration` prop isn't specified, it does nothing.\nIf `autoHideDuration` prop is specified but `resumeHideDuration` isn't,\nwe default to `autoHideDuration / 2` ms.",name:"resumeHideDuration",required:!1,type:{name:"number"}}}}}catch{}const Zn={title:"Components/Snackbar/Snackbar",component:P,tags:["autodocs"],parameters:{docs:{description:{component:"Snackbars (also known as toasts) are used for brief notifications of processes that have been or will be performed.\n\nAvaility does not currently use the Material `SnackbarContent` component for basic messages,\ninstead every `Snackbar` should contain an `Alert` to convey messages."}}}},v=j("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,t)=>t.root})({}),O={render:n=>{const[t,o]=u.useState(!1),r=()=>{o(!0)},s=(h,k)=>{k!=="clickaway"&&o(!1)},f=e.jsx(z,{component:"button",onClick:s,children:"Action"});return e.jsxs(me,{sx:{minHeight:"200px"},children:[e.jsx(V,{onClick:r,children:"Open Snackbar"}),e.jsx(P,{...n,open:t,children:e.jsx(b,{icon:!1,onClose:s,action:f,severity:"info",children:"Alert Text"})})]})},args:{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:6e3}},B={render:()=>{const[n,t]=u.useState(!0),o=()=>{t(!1),setTimeout(()=>t(!0),1e3)},r=e.jsx(z,{component:"button",onClick:o,children:"Action Button"}),s=e.jsx(z,{href:"#",children:"Action Link"});return e.jsxs(p,{container:!0,spacing:1,maxWidth:"620px",children:[e.jsx(p,{children:e.jsx(x,{in:n,children:e.jsx(v,{children:e.jsx(b,{severity:"info",icon:!1,children:"No Action, No Close"})})})}),e.jsx(p,{children:e.jsx(x,{in:n,children:e.jsx(v,{children:e.jsx(b,{severity:"info",icon:!1,onClose:o,children:"Close"})})})}),e.jsx(p,{children:e.jsx(x,{in:n,children:e.jsx(v,{children:e.jsx(b,{severity:"info",icon:!1,action:r,children:"Action Button"})})})}),e.jsx(p,{children:e.jsx(x,{in:n,children:e.jsx(v,{children:e.jsx(b,{severity:"info",icon:!1,action:s,children:"Action Link"})})})}),e.jsx(p,{children:e.jsx(x,{in:n,children:e.jsx(v,{children:e.jsx(b,{severity:"info",icon:!1,onClose:o,action:r,children:"Action Button & Close"})})})})]})}},G={render:()=>{const[n,t]=u.useState(!0),o=()=>{t(!1),setTimeout(()=>t(!0),1e3)};return e.jsxs(p,{container:!0,spacing:1,maxWidth:"620px",children:[e.jsx(p,{children:e.jsx(x,{in:n,children:e.jsx(v,{children:e.jsxs(b,{severity:"info",onClose:o,children:[e.jsx(E,{children:"Info Alert Snackbar"}),"Additional text."]})})})}),e.jsx(p,{children:e.jsx(x,{in:n,children:e.jsx(v,{children:e.jsxs(b,{severity:"success",onClose:o,children:[e.jsx(E,{children:"Success Alert Snackbar"}),"Additional text."]})})})}),e.jsx(p,{children:e.jsx(x,{in:n,children:e.jsx(v,{children:e.jsxs(b,{severity:"warning",onClose:o,children:[e.jsx(E,{children:"Warning Alert Snackbar"}),"Additional text."]})})})}),e.jsx(p,{children:e.jsx(x,{in:n,children:e.jsx(v,{children:e.jsxs(b,{severity:"error",onClose:o,children:[e.jsx(E,{children:"Error Alert Snackbar"}),"Additional text. Don't make a snackbar more than a couple sentences!"]})})})})]})}},A={render:()=>{const[n,t]=u.useState([]),[o,r]=u.useState(!1),[s,f]=u.useState(void 0);u.useEffect(()=>{n.length&&!s?(f({...n[0]}),t(m=>m.slice(1)),r(!0)):n.length&&s&&o&&r(!1)},[n,s,o]);const h=m=>()=>{t(c=>[...c,{message:m,key:new Date().getTime()}])},k=(m,c)=>{c!=="clickaway"&&r(!1)},g=()=>{f(void 0)};return e.jsxs(me,{minHeight:"250px",gap:"8px",children:[e.jsxs(p,{container:!0,spacing:2,children:[e.jsx(p,{size:{xs:12},children:e.jsx(V,{onClick:h("Message A"),children:"Show message A"})}),e.jsx(p,{size:{xs:12},children:e.jsx(V,{onClick:h("Message B"),children:"Show message B"})})]}),e.jsx(P,{open:o,autoHideDuration:6e3,onClose:k,TransitionProps:{onExited:g},children:e.jsx(b,{severity:"info",icon:!1,onClose:k,children:s==null?void 0:s.message})},s?s.key:void 0)]})}};var Y,Z,ee;O.parameters={...O.parameters,docs:{...(Y=O.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: (args: SnackbarProps) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
      setOpen(true);
    };
    const handleClose = (event: SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
    const action = <Link component="button" onClick={handleClose}>
        Action
      </Link>;
    return <Box sx={{
      minHeight: '200px'
    }}>
        <Button onClick={handleClick}>Open Snackbar</Button>
        <Snackbar {...args} open={open}>
          <Alert icon={false} onClose={handleClose} action={action} severity="info">
            Alert Text
          </Alert>
        </Snackbar>
      </Box>;
  },
  args: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    autoHideDuration: 6000
  }
}`,...(ee=(Z=O.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,oe;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(true);
    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };
    const actionButton = <Link component="button" onClick={onClose}>
        Action Button
      </Link>;
    const actionLink = <Link href="#">Action Link</Link>;
    return <Grid container spacing={1} maxWidth="620px">
        <Grid>
          <Collapse in={visible}>
            <SnackbarStoryPreview>
              <Alert severity="info" icon={false}>
                No Action, No Close
              </Alert>
            </SnackbarStoryPreview>
          </Collapse>
        </Grid>
        <Grid>
          <Collapse in={visible}>
            <SnackbarStoryPreview>
              <Alert severity="info" icon={false} onClose={onClose}>
                Close
              </Alert>
            </SnackbarStoryPreview>
          </Collapse>
        </Grid>
        <Grid>
          <Collapse in={visible}>
            <SnackbarStoryPreview>
              <Alert severity="info" icon={false} action={actionButton}>
                Action Button
              </Alert>
            </SnackbarStoryPreview>
          </Collapse>
        </Grid>
        <Grid>
          <Collapse in={visible}>
            <SnackbarStoryPreview>
              <Alert severity="info" icon={false} action={actionLink}>
                Action Link
              </Alert>
            </SnackbarStoryPreview>
          </Collapse>
        </Grid>
        <Grid>
          <Collapse in={visible}>
            <SnackbarStoryPreview>
              <Alert severity="info" icon={false} onClose={onClose} action={actionButton}>
                Action Button & Close
              </Alert>
            </SnackbarStoryPreview>
          </Collapse>
        </Grid>
      </Grid>;
  }
}`,...(oe=(te=B.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,se,ie;G.parameters={...G.parameters,docs:{...(re=G.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(true);
    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };
    return <Grid container spacing={1} maxWidth="620px">
        <Grid>
          <Collapse in={visible}>
            <SnackbarStoryPreview>
              <Alert severity="info" onClose={onClose}>
                <AlertTitle>Info Alert Snackbar</AlertTitle>
                Additional text.
              </Alert>
            </SnackbarStoryPreview>
          </Collapse>
        </Grid>
        <Grid>
          <Collapse in={visible}>
            <SnackbarStoryPreview>
              <Alert severity="success" onClose={onClose}>
                <AlertTitle>Success Alert Snackbar</AlertTitle>
                Additional text.
              </Alert>
            </SnackbarStoryPreview>
          </Collapse>
        </Grid>
        <Grid>
          <Collapse in={visible}>
            <SnackbarStoryPreview>
              <Alert severity="warning" onClose={onClose}>
                <AlertTitle>Warning Alert Snackbar</AlertTitle>
                Additional text.
              </Alert>
            </SnackbarStoryPreview>
          </Collapse>
        </Grid>
        <Grid>
          <Collapse in={visible}>
            <SnackbarStoryPreview>
              <Alert severity="error" onClose={onClose}>
                <AlertTitle>Error Alert Snackbar</AlertTitle>
                Additional text. Don't make a snackbar more than a couple sentences!
              </Alert>
            </SnackbarStoryPreview>
          </Collapse>
        </Grid>
      </Grid>;
  }
}`,...(ie=(se=G.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ae,le,ce,de,pe;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const [snackPack, setSnackPack] = useState<readonly SnackbarMessage[]>([]);
    const [open, setOpen] = useState(false);
    const [messageInfo, setMessageInfo] = useState<SnackbarMessage | undefined>(undefined);
    useEffect(() => {
      if (snackPack.length && !messageInfo) {
        // Set a new snack when we don't have an active one
        setMessageInfo({
          ...snackPack[0]
        });
        setSnackPack(prev => prev.slice(1));
        setOpen(true);
      } else if (snackPack.length && messageInfo && open) {
        // Close an active snack when a new one is added
        setOpen(false);
      }
    }, [snackPack, messageInfo, open]);
    const handleClick = (message: string) => () => {
      setSnackPack(prev => [...prev, {
        message,
        key: new Date().getTime()
      }]);
    };
    const handleClose = (event: SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
    const handleExited = () => {
      setMessageInfo(undefined);
    };
    return <Box minHeight="250px" gap="8px">
        <Grid container spacing={2}>
          <Grid size={{
          xs: 12
        }}>
            <Button onClick={handleClick('Message A')}>Show message A</Button>
          </Grid>
          <Grid size={{
          xs: 12
        }}>
            <Button onClick={handleClick('Message B')}>Show message B</Button>
          </Grid>
        </Grid>
        <Snackbar key={messageInfo ? messageInfo.key : undefined} open={open} autoHideDuration={6000} onClose={handleClose} TransitionProps={{
        onExited: handleExited
      }}>
          <Alert severity="info" icon={false} onClose={handleClose}>
            {messageInfo?.message}
          </Alert>
        </Snackbar>
      </Box>;
  }
}`,...(ce=(le=A.parameters)==null?void 0:le.docs)==null?void 0:ce.source},description:{story:"This demo shows how to display multiple Snackbars without stacking them by using a consecutive animation.",...(pe=(de=A.parameters)==null?void 0:de.docs)==null?void 0:pe.description}}};const et=["_Snackbar","_Actions","_Alerts","_ConsecutiveSnackbars"];export{B as _Actions,G as _Alerts,A as _ConsecutiveSnackbars,O as _Snackbar,et as __namedExportsOrder,Zn as default};
