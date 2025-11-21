import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-BSuoOqEd.js";import{b,a as E}from"./index-c3lPhThm.js";import{B as V}from"./index-DS7md1Ks.js";import{B as ue,G as p}from"./index-DWvMPRyT.js";import{C as x}from"./index-5Aflv0nN.js";import{u as Ie}from"./useTimeout-B9dULhq6.js";import{u as X}from"./useEventCallback-Dvy07Fv6.js";import{e as J}from"./mergeSlotProps-C8ahzxnq.js";import{u as Re}from"./useTheme-DG5qVMsu.js";import{s as j,c as me}from"./styled-9znMky1q.js";import{m as fe}from"./memoTheme-BwIkkReu.js";import{g as he}from"./generateUtilityClass-BtcU_pBl.js";import{g as ke}from"./generateUtilityClasses-DDbjFgb8.js";import{u as L}from"./useSlot-jI6_c_PV.js";import{u as Se}from"./DefaultPropsProvider-B1sWsgx2.js";import{C as Ve}from"./ClickAwayListener-D0qKDWNL.js";import{a as ze,u as Q,f as M}from"./identifier-DhnHujDJ.js";import{P as _e}from"./Paper-BZZ0Jx2l.js";import{G as qe}from"./Portal-BleVqemi.js";import{L as z}from"./Link-CWKQpknP.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-BgHLshU-.js";import"./faCircleArrowRight-DSzUu1Qy.js";import"./faUser-D77uLSLS.js";import"./SvgIcon-enpUMgPP.js";import"./Alert-CrhEATBR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-DjY4rWdK.js";import"./Close-DUhU1j0f.js";import"./IconButton-aAtY6dbQ.js";import"./useId-kjFOwFR3.js";import"./ButtonBase-AdAh9sBA.js";import"./TransitionGroupContext-CcytU7uK.js";import"./emotion-react.browser.esm-CVJjYY2z.js";import"./useForkRef-BIkqQIqh.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-I3IM84c9.js";import"./AlertTitle-BZIznXRP.js";import"./Typography-CHtEfMke.js";import"./index-DtRw77fL.js";import"./extendSxProp-plByhdXY.js";import"./useTheme-C_c7PR3o.js";import"./Tooltip-bMNvQkmf.js";import"./index-bqlmQ0VS.js";import"./useControlled-DUUijreW.js";import"./getReactElementRef-B8liFQVS.js";import"./ownerDocument-DW-IO8s5.js";import"./useEnhancedEffect-CIAiDanS.js";import"./useSlotProps-BphRKsXg.js";import"./Button-DMnfP4ih.js";import"./Box-BAprLmuU.js";import"./Grid-BrQtrDmH.js";import"./styled-BN1MHGNr.js";import"./isMuiElement-CsRUsG_W.js";import"./useThemeProps-DxTj-Mj7.js";import"./Stack-C-7_RWLD.js";import"./Container-BRT0GL3j.js";import"./Collapse-Dpx26zjc.js";import"./utils-DuVTnmV7.js";import"./index-CRBziY_1.js";import"./index-CCz_6dyq.js";import"./isHostComponent-DVu5iVWx.js";function We(n={}){const{autoHideDuration:t=null,disableWindowBlurListener:o=!1,onClose:r,open:i,resumeHideDuration:f}=n,h=Ie();u.useEffect(()=>{if(!i)return;function s(a){a.defaultPrevented||a.key==="Escape"&&(r==null||r(a,"escapeKeyDown"))}return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[i,r]);const k=X((s,a)=>{r==null||r(s,a)}),g=X(s=>{!r||s==null||h.start(s,()=>{k(null,"timeout")})});u.useEffect(()=>(i&&g(t),h.clear),[i,t,g,h]);const m=s=>{r==null||r(s,"clickaway")},c=h.clear,C=u.useCallback(()=>{t!=null&&g(f??t*.5)},[t,f,g]),D=s=>a=>{const l=s.onBlur;l==null||l(a),C()},H=s=>a=>{const l=s.onFocus;l==null||l(a),c()},I=s=>a=>{const l=s.onMouseEnter;l==null||l(a),c()},R=s=>a=>{const l=s.onMouseLeave;l==null||l(a),C()};return u.useEffect(()=>{if(!o&&i)return window.addEventListener("focus",C),window.addEventListener("blur",c),()=>{window.removeEventListener("focus",C),window.removeEventListener("blur",c)}},[o,i,C,c]),{getRootProps:(s={})=>{const a={...J(n),...J(s)};return{role:"presentation",...s,...a,onBlur:D(a),onFocus:H(a),onMouseEnter:I(a),onMouseLeave:R(a)}},onClickAway:m}}function Ne(n){return he("MuiSnackbarContent",n)}ke("MuiSnackbarContent",["root","message","action"]);const Ue=n=>{const{classes:t}=n;return me({root:["root"],action:["action"],message:["message"]},Ne,t)},Fe=j(_e,{name:"MuiSnackbarContent",slot:"Root"})(fe(({theme:n})=>{const t=n.palette.mode==="light"?.8:.98;return{...n.typography.body2,color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(Q(n.palette.background.default,t)),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:Q(n.palette.background.default,t),display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}})),$e=j("div",{name:"MuiSnackbarContent",slot:"Message"})({padding:"8px 0"}),Ke=j("div",{name:"MuiSnackbarContent",slot:"Action"})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),Xe=u.forwardRef(function(t,o){const r=Se({props:t,name:"MuiSnackbarContent"}),{action:i,className:f,message:h,role:k="alert",...g}=r,m=r,c=Ue(m);return e.jsxs(Fe,{role:k,elevation:6,className:ze(c.root,f),ownerState:m,ref:o,...g,children:[e.jsx($e,{className:c.message,ownerState:m,children:h}),i?e.jsx(Ke,{className:c.action,ownerState:m,children:i}):null]})});function Je(n){return he("MuiSnackbar",n)}ke("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const Qe=n=>{const{classes:t,anchorOrigin:o}=n,r={root:["root",`anchorOrigin${M(o.vertical)}${M(o.horizontal)}`]};return me(r,Je,t)},Ye=j("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.root,t[`anchorOrigin${M(o.anchorOrigin.vertical)}${M(o.anchorOrigin.horizontal)}`]]}})(fe(({theme:n})=>({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:t})=>t.anchorOrigin.vertical==="top",style:{top:8,[n.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:t})=>t.anchorOrigin.vertical!=="top",style:{bottom:8,[n.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="left",style:{justifyContent:"flex-start",[n.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="right",style:{justifyContent:"flex-end",[n.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="center",style:{[n.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]}))),Ze=u.forwardRef(function(t,o){const r=Se({props:t,name:"MuiSnackbar"}),i=Re(),f={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{action:h,anchorOrigin:{vertical:k,horizontal:g}={vertical:"bottom",horizontal:"left"},autoHideDuration:m=null,children:c,className:C,ClickAwayListenerProps:D,ContentProps:H,disableWindowBlurListener:I=!1,message:R,onBlur:be,onClose:s,onFocus:a,onMouseEnter:l,onMouseLeave:en,open:_,resumeHideDuration:nn,slots:q={},slotProps:ge={},TransitionComponent:W,transitionDuration:N=f,TransitionProps:{onEnter:U,onExited:F,...ye}={},...xe}=r,w={...r,anchorOrigin:{vertical:k,horizontal:g},autoHideDuration:m,disableWindowBlurListener:I,TransitionComponent:W,transitionDuration:N},ve=Qe(w),{getRootProps:Ce,onClickAway:we}=We({...w}),[Ae,$]=u.useState(!0),Pe=d=>{$(!0),F&&F(d)},je=(d,S)=>{$(!1),U&&U(d,S)},T={slots:{transition:W,...q},slotProps:{content:H,clickAwayListener:D,transition:ye,...ge}},[Te,Ee]=L("root",{ref:o,className:[ve.root,C],elementType:Ye,getSlotProps:Ce,externalForwardedProps:{...T,...xe},ownerState:w}),[Le,{ownerState:Oe,...Be}]=L("clickAwayListener",{elementType:Ve,externalForwardedProps:T,getSlotProps:d=>({onClickAway:(...S)=>{var K;const y=S[0];(K=d.onClickAway)==null||K.call(d,...S),!(y!=null&&y.defaultMuiPrevented)&&we(...S)}}),ownerState:w}),[Ge,Me]=L("content",{elementType:Xe,shouldForwardComponentProp:!0,externalForwardedProps:T,additionalProps:{message:R,action:h},ownerState:w}),[De,He]=L("transition",{elementType:qe,externalForwardedProps:T,getSlotProps:d=>({onEnter:(...S)=>{var y;(y=d.onEnter)==null||y.call(d,...S),je(...S)},onExited:(...S)=>{var y;(y=d.onExited)==null||y.call(d,...S),Pe(...S)}}),additionalProps:{appear:!0,in:_,timeout:N,direction:k==="top"?"down":"up"},ownerState:w});return!_&&Ae?null:e.jsx(Le,{...Be,...q.clickAwayListener&&{ownerState:Oe},children:e.jsx(Te,{...Ee,children:e.jsx(De,{...He,children:c||e.jsx(Ge,{...Me})})})})}),P=n=>e.jsx(Ze,{...n});try{P.displayName="Snackbar",P.__docgenInfo={description:"",displayName:"Snackbar",props:{children:{defaultValue:null,description:"Replace the `SnackbarContent` component.",name:"children",required:!1,type:{name:"ReactElement<unknown, any>"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<SnackbarClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},key:{defaultValue:null,description:"When displaying multiple consecutive snackbars using a single parent-rendered\n`<Snackbar/>`, add the `key` prop to ensure independent treatment of each message.\nFor instance, use `<Snackbar key={message} />`. Otherwise, messages might update\nin place, and features like `autoHideDuration` could be affected.",name:"key",required:!1,type:{name:"any"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<SnackbarSlots>"}},onClose:{defaultValue:null,description:'Callback fired when the component requests to be closed.\nTypically `onClose` is used to set state in the parent component,\nwhich is used to control the `Snackbar` `open` prop.\nThe `reason` parameter can optionally be used to control the response to `onClose`,\nfor example ignoring `clickaway`.\n@param event The event source of the callback.\n@param reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`, or `"escapeKeyDown"`.',name:"onClose",required:!1,type:{name:"(event: Event | SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => void"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ root?: SlotProps<"div", SnackbarRootSlotPropsOverrides, SnackbarOwnerState>; content?: SlotProps<ElementType<SnackbarContentProps, keyof IntrinsicElements>, SnackbarContentSlotPropsOverrides, SnackbarOwnerState>; clickAwayListener?: SlotComponentProps<...>; transition?: SlotComponentProps<...>; }'}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!1,type:{name:"boolean"}},anchorOrigin:{defaultValue:{value:"{ vertical: 'bottom', horizontal: 'left' }"},description:"The anchor of the `Snackbar`.\nOn smaller screens, the component grows to occupy all the available width,\nthe horizontal alignment is ignored.",name:"anchorOrigin",required:!1,type:{name:"SnackbarOrigin"}},TransitionProps:{defaultValue:{value:"{}"},description:"Props applied to the transition element.\nBy default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.\n@deprecated Use `slotProps.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"TransitionProps",required:!1,type:{name:"TransitionProps"}},autoHideDuration:{defaultValue:{value:"null"},description:"The number of milliseconds to wait before automatically calling the\n`onClose` function. `onClose` should then set the state of the `open`\nprop to hide the Snackbar. This behavior is disabled by default with\nthe `null` value.",name:"autoHideDuration",required:!1,type:{name:"number"}},ClickAwayListenerProps:{defaultValue:null,description:"Props applied to the `ClickAwayListener` element.\n@deprecated Use `slotProps.clickAwayListener` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"ClickAwayListenerProps",required:!1,type:{name:"Partial<ClickAwayListenerProps>"}},disableWindowBlurListener:{defaultValue:{value:"false"},description:"If `true`, the `autoHideDuration` timer will expire even if the window is not focused.",name:"disableWindowBlurListener",required:!1,type:{name:"boolean"}},resumeHideDuration:{defaultValue:null,description:"The number of milliseconds to wait before dismissing after user interaction.\nIf `autoHideDuration` prop isn't specified, it does nothing.\nIf `autoHideDuration` prop is specified but `resumeHideDuration` isn't,\nwe default to `autoHideDuration / 2` ms.",name:"resumeHideDuration",required:!1,type:{name:"number"}}}}}catch{}const ut={title:"Components/Snackbar/Snackbar",component:P,tags:["autodocs"],parameters:{docs:{description:{component:"Snackbars (also known as toasts) are used for brief notifications of processes that have been or will be performed.\n\nAvaility does not currently use the Material `SnackbarContent` component for basic messages,\ninstead every `Snackbar` should contain an `Alert` to convey messages."}}}},v=j("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,t)=>t.root})({}),O={render:n=>{const[t,o]=u.useState(!1),r=()=>{o(!0)},i=(h,k)=>{k!=="clickaway"&&o(!1)},f=e.jsx(z,{component:"button",onClick:i,children:"Action"});return e.jsxs(ue,{sx:{minHeight:"200px"},children:[e.jsx(V,{onClick:r,children:"Open Snackbar"}),e.jsx(P,{...n,open:t,children:e.jsx(b,{icon:!1,onClose:i,action:f,severity:"info",children:"Alert Text"})})]})},args:{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:6e3}},B={render:()=>{const[n,t]=u.useState(!0),o=()=>{t(!1),setTimeout(()=>t(!0),1e3)},r=e.jsx(z,{component:"button",onClick:o,children:"Action Button"}),i=e.jsx(z,{href:"#",children:"Action Link"});return e.jsxs(p,{container:!0,spacing:1,maxWidth:"620px",children:[e.jsx(p,{children:e.jsx(x,{in:n,children:e.jsx(v,{children:e.jsx(b,{severity:"info",icon:!1,children:"No Action, No Close"})})})}),e.jsx(p,{children:e.jsx(x,{in:n,children:e.jsx(v,{children:e.jsx(b,{severity:"info",icon:!1,onClose:o,children:"Close"})})})}),e.jsx(p,{children:e.jsx(x,{in:n,children:e.jsx(v,{children:e.jsx(b,{severity:"info",icon:!1,action:r,children:"Action Button"})})})}),e.jsx(p,{children:e.jsx(x,{in:n,children:e.jsx(v,{children:e.jsx(b,{severity:"info",icon:!1,action:i,children:"Action Link"})})})}),e.jsx(p,{children:e.jsx(x,{in:n,children:e.jsx(v,{children:e.jsx(b,{severity:"info",icon:!1,onClose:o,action:r,children:"Action Button & Close"})})})})]})}},G={render:()=>{const[n,t]=u.useState(!0),o=()=>{t(!1),setTimeout(()=>t(!0),1e3)};return e.jsxs(p,{container:!0,spacing:1,maxWidth:"620px",children:[e.jsx(p,{children:e.jsx(x,{in:n,children:e.jsx(v,{children:e.jsxs(b,{severity:"info",onClose:o,children:[e.jsx(E,{children:"Info Alert Snackbar"}),"Additional text."]})})})}),e.jsx(p,{children:e.jsx(x,{in:n,children:e.jsx(v,{children:e.jsxs(b,{severity:"success",onClose:o,children:[e.jsx(E,{children:"Success Alert Snackbar"}),"Additional text."]})})})}),e.jsx(p,{children:e.jsx(x,{in:n,children:e.jsx(v,{children:e.jsxs(b,{severity:"warning",onClose:o,children:[e.jsx(E,{children:"Warning Alert Snackbar"}),"Additional text."]})})})}),e.jsx(p,{children:e.jsx(x,{in:n,children:e.jsx(v,{children:e.jsxs(b,{severity:"error",onClose:o,children:[e.jsx(E,{children:"Error Alert Snackbar"}),"Additional text. Don't make a snackbar more than a couple sentences!"]})})})})]})}},A={render:()=>{const[n,t]=u.useState([]),[o,r]=u.useState(!1),[i,f]=u.useState(void 0);u.useEffect(()=>{n.length&&!i?(f({...n[0]}),t(m=>m.slice(1)),r(!0)):n.length&&i&&o&&r(!1)},[n,i,o]);const h=m=>()=>{t(c=>[...c,{message:m,key:new Date().getTime()}])},k=(m,c)=>{c!=="clickaway"&&r(!1)},g=()=>{f(void 0)};return e.jsxs(ue,{minHeight:"250px",gap:"8px",children:[e.jsxs(p,{container:!0,spacing:2,children:[e.jsx(p,{size:{xs:12},children:e.jsx(V,{onClick:h("Message A"),children:"Show message A"})}),e.jsx(p,{size:{xs:12},children:e.jsx(V,{onClick:h("Message B"),children:"Show message B"})})]}),e.jsx(P,{open:o,autoHideDuration:6e3,onClose:k,TransitionProps:{onExited:g},children:e.jsx(b,{severity:"info",icon:!1,onClose:k,children:i==null?void 0:i.message})},i?i.key:void 0)]})}};var Y,Z,ee;O.parameters={...O.parameters,docs:{...(Y=O.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(oe=(te=B.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,ie,se;G.parameters={...G.parameters,docs:{...(re=G.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(ie=G.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ae,le,ce,de,pe;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ce=(le=A.parameters)==null?void 0:le.docs)==null?void 0:ce.source},description:{story:"This demo shows how to display multiple Snackbars without stacking them by using a consecutive animation.",...(pe=(de=A.parameters)==null?void 0:de.docs)==null?void 0:pe.description}}};const mt=["_Snackbar","_Actions","_Alerts","_ConsecutiveSnackbars"];export{B as _Actions,G as _Alerts,A as _ConsecutiveSnackbars,O as _Snackbar,mt as __namedExportsOrder,ut as default};
