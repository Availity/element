import{r as d,c as J,j as e,d as ve,am as $,O as M}from"./iframe-D81qY2CF.js";import{b as k,a as T}from"./index-CQoM9xCL.js";import{B as R}from"./index-D8s0t892.js";import{B as Q,G as c}from"./index-CcvrWeMs.js";import{C as S}from"./index-C1QmMPCL.js";import{u as xe}from"./useTimeout-DKkko9rl.js";import{u as K}from"./useEventCallback-CqgW2Pgy.js";import{e as X}from"./mergeSlotProps-BaZVmxsR.js";import{u as we}from"./useTheme-DaB7mFrL.js";import{s as P,c as Y}from"./styled-CaGoIOKf.js";import{m as Z}from"./memoTheme-A9yntoiy.js";import{g as ee}from"./generateUtilityClass-BtcU_pBl.js";import{g as ne}from"./generateUtilityClasses-DDbjFgb8.js";import{u as E}from"./useSlot-ietvTX_K.js";import{C as Ae}from"./ClickAwayListener-CUswUoVx.js";import{P as Pe}from"./Paper-B5yWzxZy.js";import{G as je}from"./Portal-CxFiB9ei.js";import{L as V}from"./Link-BnnSFEj3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BD-so7Wr.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-B6ASqf__.js";import"./Alert-tQBD940e.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-cW8ufNaK.js";import"./Close-E_O1U0R0.js";import"./IconButton-DShobRfO.js";import"./ButtonBase-D8v-94oh.js";import"./TransitionGroupContext-CUPg0qtb.js";import"./useForkRef-aj5N3dMx.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ByHKQjCZ.js";import"./AlertTitle-MDOPZlhk.js";import"./Typography-Dn0-Cqm0.js";import"./Tooltip-DVNRBZHi.js";import"./useControlled-JeBGtbqT.js";import"./getReactElementRef-DGERSSwn.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-huDybs-7.js";import"./Button-B5mFfpCi.js";import"./Box-rRIRPzng.js";import"./Grid-DCMyUpSS.js";import"./styled-BY17iDss.js";import"./isMuiElement-CnND6WC1.js";import"./Stack-DqyNPhS4.js";import"./Container-CAzsbVoz.js";import"./Collapse-Z9y-Dt0_.js";import"./utils-or5sFOOm.js";function Te(n={}){const{autoHideDuration:t=null,disableWindowBlurListener:o=!1,onClose:s,open:r,resumeHideDuration:u}=n,m=xe();d.useEffect(()=>{if(!r)return;function a(i){i.defaultPrevented||i.key==="Escape"&&s?.(i,"escapeKeyDown")}return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[r,s]);const f=K((a,i)=>{s?.(a,i)}),b=K(a=>{!s||a==null||m.start(a,()=>{f(null,"timeout")})});d.useEffect(()=>(r&&b(t),m.clear),[r,t,b,m]);const p=a=>{s?.(a,"clickaway")},l=m.clear,v=d.useCallback(()=>{t!=null&&b(u??t*.5)},[t,u,b]),G=a=>i=>{const y=a.onBlur;y?.(i),v()},D=a=>i=>{const y=a.onFocus;y?.(i),l()},H=a=>i=>{const y=a.onMouseEnter;y?.(i),l()},I=a=>i=>{const y=a.onMouseLeave;y?.(i),v()};return d.useEffect(()=>{if(!o&&r)return window.addEventListener("focus",v),window.addEventListener("blur",l),()=>{window.removeEventListener("focus",v),window.removeEventListener("blur",l)}},[o,r,v,l]),{getRootProps:(a={})=>{const i={...X(n),...X(a)};return{role:"presentation",...a,...i,onBlur:G(i),onFocus:D(i),onMouseEnter:H(i),onMouseLeave:I(i)}},onClickAway:p}}function Ee(n){return ee("MuiSnackbarContent",n)}ne("MuiSnackbarContent",["root","message","action"]);const Le=n=>{const{classes:t}=n;return Y({root:["root"],action:["action"],message:["message"]},Ee,t)},Oe=P(Pe,{name:"MuiSnackbarContent",slot:"Root"})(Z(({theme:n})=>{const t=n.palette.mode==="light"?.8:.98;return{...n.typography.body2,color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText($(n.palette.background.default,t)),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:$(n.palette.background.default,t),display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}})),Be=P("div",{name:"MuiSnackbarContent",slot:"Message"})({padding:"8px 0"}),Me=P("div",{name:"MuiSnackbarContent",slot:"Action"})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),Ge=d.forwardRef(function(t,o){const s=J({props:t,name:"MuiSnackbarContent"}),{action:r,className:u,message:m,role:f="alert",...b}=s,p=s,l=Le(p);return e.jsxs(Oe,{role:f,elevation:6,className:ve(l.root,u),ownerState:p,ref:o,...b,children:[e.jsx(Be,{className:l.message,ownerState:p,children:m}),r?e.jsx(Me,{className:l.action,ownerState:p,children:r}):null]})});function De(n){return ee("MuiSnackbar",n)}ne("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const He=n=>{const{classes:t,anchorOrigin:o}=n,s={root:["root",`anchorOrigin${M(o.vertical)}${M(o.horizontal)}`]};return Y(s,De,t)},Ie=P("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.root,t[`anchorOrigin${M(o.anchorOrigin.vertical)}${M(o.anchorOrigin.horizontal)}`]]}})(Z(({theme:n})=>({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:t})=>t.anchorOrigin.vertical==="top",style:{top:8,[n.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:t})=>t.anchorOrigin.vertical!=="top",style:{bottom:8,[n.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="left",style:{justifyContent:"flex-start",[n.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="right",style:{justifyContent:"flex-end",[n.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="center",style:{[n.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]}))),Re=d.forwardRef(function(t,o){const s=J({props:t,name:"MuiSnackbar"}),r=we(),u={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{action:m,anchorOrigin:{vertical:f,horizontal:b}={vertical:"bottom",horizontal:"left"},autoHideDuration:p=null,children:l,className:v,ClickAwayListenerProps:G,ContentProps:D,disableWindowBlurListener:H=!1,message:I,onBlur:te,onClose:a,onFocus:i,onMouseEnter:y,onMouseLeave:Ve,open:z,resumeHideDuration:ze,slots:_={},slotProps:oe={},TransitionComponent:q,transitionDuration:W=u,TransitionProps:{onEnter:N,onExited:F,...re}={},...se}=s,x={...s,anchorOrigin:{vertical:f,horizontal:b},autoHideDuration:p,disableWindowBlurListener:H,TransitionComponent:q,transitionDuration:W},ae=He(x),{getRootProps:ie,onClickAway:le}=Te(x),[ce,U]=d.useState(!0),de=C=>{U(!0),F&&F(C)},pe=(C,h)=>{U(!1),N&&N(C,h)},j={slots:{transition:q,..._},slotProps:{content:D,clickAwayListener:G,transition:re,...oe}},[ue,me]=E("root",{ref:o,className:[ae.root,v],elementType:Ie,getSlotProps:ie,externalForwardedProps:{...j,...se},ownerState:x}),[fe,{ownerState:he,...ke}]=E("clickAwayListener",{elementType:Ae,externalForwardedProps:j,getSlotProps:C=>({onClickAway:(...h)=>{const Ce=h[0];C.onClickAway?.(...h),!Ce?.defaultMuiPrevented&&le(...h)}}),ownerState:x}),[be,Se]=E("content",{elementType:Ge,shouldForwardComponentProp:!0,externalForwardedProps:j,additionalProps:{message:I,action:m},ownerState:x}),[ge,ye]=E("transition",{elementType:je,externalForwardedProps:j,getSlotProps:C=>({onEnter:(...h)=>{C.onEnter?.(...h),pe(...h)},onExited:(...h)=>{C.onExited?.(...h),de(...h)}}),additionalProps:{appear:!0,in:z,timeout:W,direction:f==="top"?"down":"up"},ownerState:x});return!z&&ce?null:e.jsx(fe,{...ke,..._.clickAwayListener&&{ownerState:he},children:e.jsx(ue,{...me,children:e.jsx(ge,{...ye,children:l||e.jsx(be,{...Se})})})})}),A=n=>e.jsx(Re,{...n});try{A.displayName="Snackbar",A.__docgenInfo={description:"",displayName:"Snackbar",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<SnackbarClasses>"}},children:{defaultValue:null,description:"Replace the `SnackbarContent` component.",name:"children",required:!1,type:{name:"ReactElement<unknown, any>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},key:{defaultValue:null,description:"When displaying multiple consecutive snackbars using a single parent-rendered\n`<Snackbar/>`, add the `key` prop to ensure independent treatment of each message.\nFor instance, use `<Snackbar key={message} />`. Otherwise, messages might update\nin place, and features like `autoHideDuration` could be affected.",name:"key",required:!1,type:{name:"any"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ root?: SlotProps<"div", SnackbarRootSlotPropsOverrides, SnackbarOwnerState>; content?: SlotProps<ElementType<SnackbarContentProps, keyof IntrinsicElements>, SnackbarContentSlotPropsOverrides, SnackbarOwnerState>; clickAwayListener?: SlotComponentProps<...>; transition?: SlotComponentProps<...>; }'}},onClose:{defaultValue:null,description:'Callback fired when the component requests to be closed.\nTypically `onClose` is used to set state in the parent component,\nwhich is used to control the `Snackbar` `open` prop.\nThe `reason` parameter can optionally be used to control the response to `onClose`,\nfor example ignoring `clickaway`.\n@param event The event source of the callback.\n@param reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`, or `"escapeKeyDown"`.',name:"onClose",required:!1,type:{name:"(event: Event | SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => void"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!1,type:{name:"boolean"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<SnackbarSlots>"}},anchorOrigin:{defaultValue:{value:"{ vertical: 'bottom', horizontal: 'left' }"},description:"The anchor of the `Snackbar`.\nOn smaller screens, the component grows to occupy all the available width,\nthe horizontal alignment is ignored.",name:"anchorOrigin",required:!1,type:{name:"SnackbarOrigin"}},TransitionProps:{defaultValue:{value:"{}"},description:"Props applied to the transition element.\nBy default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.\n@deprecated Use `slotProps.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"TransitionProps",required:!1,type:{name:"TransitionProps"}},autoHideDuration:{defaultValue:{value:"null"},description:"The number of milliseconds to wait before automatically calling the\n`onClose` function. `onClose` should then set the state of the `open`\nprop to hide the Snackbar. This behavior is disabled by default with\nthe `null` value.",name:"autoHideDuration",required:!1,type:{name:"number"}},ClickAwayListenerProps:{defaultValue:null,description:"Props applied to the `ClickAwayListener` element.\n@deprecated Use `slotProps.clickAwayListener` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"ClickAwayListenerProps",required:!1,type:{name:"Partial<ClickAwayListenerProps>"}},disableWindowBlurListener:{defaultValue:{value:"false"},description:"If `true`, the `autoHideDuration` timer will expire even if the window is not focused.",name:"disableWindowBlurListener",required:!1,type:{name:"boolean"}},resumeHideDuration:{defaultValue:null,description:"The number of milliseconds to wait before dismissing after user interaction.\nIf `autoHideDuration` prop isn't specified, it does nothing.\nIf `autoHideDuration` prop is specified but `resumeHideDuration` isn't,\nwe default to `autoHideDuration / 2` ms.",name:"resumeHideDuration",required:!1,type:{name:"number"}}}}}catch{}const In={title:"Components/Snackbar/Snackbar",component:A,tags:["autodocs"],parameters:{docs:{description:{component:"Snackbars (also known as toasts) are used for brief notifications of processes that have been or will be performed.\n\nAvaility does not currently use the Material `SnackbarContent` component for basic messages,\ninstead every `Snackbar` should contain an `Alert` to convey messages."}}}},g=P("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,t)=>t.root})({}),L={render:n=>{const[t,o]=d.useState(!1),s=()=>{o(!0)},r=(m,f)=>{f!=="clickaway"&&o(!1)},u=e.jsx(V,{component:"button",onClick:r,children:"Action"});return e.jsxs(Q,{sx:{minHeight:"200px"},children:[e.jsx(R,{onClick:s,children:"Open Snackbar"}),e.jsx(A,{...n,open:t,children:e.jsx(k,{icon:!1,onClose:r,action:u,severity:"info",children:"Alert Text"})})]})},args:{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:6e3}},O={render:()=>{const[n,t]=d.useState(!0),o=()=>{t(!1),setTimeout(()=>t(!0),1e3)},s=e.jsx(V,{component:"button",onClick:o,children:"Action Button"}),r=e.jsx(V,{href:"#",children:"Action Link"});return e.jsxs(c,{container:!0,spacing:1,maxWidth:"620px",children:[e.jsx(c,{children:e.jsx(S,{in:n,children:e.jsx(g,{children:e.jsx(k,{severity:"info",icon:!1,children:"No Action, No Close"})})})}),e.jsx(c,{children:e.jsx(S,{in:n,children:e.jsx(g,{children:e.jsx(k,{severity:"info",icon:!1,onClose:o,children:"Close"})})})}),e.jsx(c,{children:e.jsx(S,{in:n,children:e.jsx(g,{children:e.jsx(k,{severity:"info",icon:!1,action:s,children:"Action Button"})})})}),e.jsx(c,{children:e.jsx(S,{in:n,children:e.jsx(g,{children:e.jsx(k,{severity:"info",icon:!1,action:r,children:"Action Link"})})})}),e.jsx(c,{children:e.jsx(S,{in:n,children:e.jsx(g,{children:e.jsx(k,{severity:"info",icon:!1,onClose:o,action:s,children:"Action Button & Close"})})})})]})}},B={render:()=>{const[n,t]=d.useState(!0),o=()=>{t(!1),setTimeout(()=>t(!0),1e3)};return e.jsxs(c,{container:!0,spacing:1,maxWidth:"620px",children:[e.jsx(c,{children:e.jsx(S,{in:n,children:e.jsx(g,{children:e.jsxs(k,{severity:"info",onClose:o,children:[e.jsx(T,{children:"Info Alert Snackbar"}),"Additional text."]})})})}),e.jsx(c,{children:e.jsx(S,{in:n,children:e.jsx(g,{children:e.jsxs(k,{severity:"success",onClose:o,children:[e.jsx(T,{children:"Success Alert Snackbar"}),"Additional text."]})})})}),e.jsx(c,{children:e.jsx(S,{in:n,children:e.jsx(g,{children:e.jsxs(k,{severity:"warning",onClose:o,children:[e.jsx(T,{children:"Warning Alert Snackbar"}),"Additional text."]})})})}),e.jsx(c,{children:e.jsx(S,{in:n,children:e.jsx(g,{children:e.jsxs(k,{severity:"error",onClose:o,children:[e.jsx(T,{children:"Error Alert Snackbar"}),"Additional text. Don't make a snackbar more than a couple sentences!"]})})})})]})}},w={render:()=>{const[n,t]=d.useState([]),[o,s]=d.useState(!1),[r,u]=d.useState(void 0);d.useEffect(()=>{n.length&&!r?(u({...n[0]}),t(p=>p.slice(1)),s(!0)):n.length&&r&&o&&s(!1)},[n,r,o]);const m=p=>()=>{t(l=>[...l,{message:p,key:new Date().getTime()}])},f=(p,l)=>{l!=="clickaway"&&s(!1)},b=()=>{u(void 0)};return e.jsxs(Q,{minHeight:"250px",gap:"8px",children:[e.jsxs(c,{container:!0,spacing:2,children:[e.jsx(c,{size:{xs:12},children:e.jsx(R,{onClick:m("Message A"),children:"Show message A"})}),e.jsx(c,{size:{xs:12},children:e.jsx(R,{onClick:m("Message B"),children:"Show message B"})})]}),e.jsx(A,{open:o,autoHideDuration:6e3,onClose:f,TransitionProps:{onExited:b},children:e.jsx(k,{severity:"info",icon:!1,onClose:f,children:r?.message})},r?r.key:void 0)]})}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:"This demo shows how to display multiple Snackbars without stacking them by using a consecutive animation.",...w.parameters?.docs?.description}}};const Rn=["_Snackbar","_Actions","_Alerts","_ConsecutiveSnackbars"];export{O as _Actions,B as _Alerts,w as _ConsecutiveSnackbars,L as _Snackbar,Rn as __namedExportsOrder,In as default};
