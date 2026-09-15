import{r as d,c as J,j as e,e as ve,am as $,N as M}from"./iframe-CWY3iD4k.js";import{b as k,a as T}from"./index-B5f6tSS5.js";import{B as R}from"./index-CFwKy-vk.js";import{G as c,B as Q}from"./index-CH36QgIT.js";import{C as S}from"./index-BRgm-iyI.js";import{u as xe}from"./useTimeout-8ubSeoYI.js";import{u as K}from"./useEventCallback-DHih-p6k.js";import{e as X}from"./mergeSlotProps-DYpSnyrH.js";import{u as we}from"./useTheme-BBG77Eif.js";import{c as Y,s as P}from"./styled-CIfQzxdD.js";import{m as Z}from"./memoTheme-DrmgfhiZ.js";import{g as ee}from"./generateUtilityClass-BtcU_pBl.js";import{g as ne}from"./generateUtilityClasses-DDbjFgb8.js";import{u as L}from"./useSlot-jGeM5BDq.js";import{C as Ae}from"./ClickAwayListener-bvkrbImI.js";import{P as Pe}from"./Paper-dLVuKHPb.js";import{G as je}from"./Portal-GTIXf_ni.js";import{L as V}from"./Link-CPnOijDJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BzSYwNd-.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DKNFXPcY.js";import"./Alert-DgoVotbj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-DumzlQmL.js";import"./Close-Be9fCZVr.js";import"./IconButton-CKcF2qnA.js";import"./ButtonBase-BVW6-IPM.js";import"./TransitionGroupContext-BKIhkECl.js";import"./useForkRef-DtxHKGyT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dd-jZUAB.js";import"./AlertTitle-BFVJWtWW.js";import"./Typography-DdnCOrzM.js";import"./Tooltip-B3bZKYVT.js";import"./useControlled-CIbXyyiC.js";import"./getReactElementRef-DgEYPRe_.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DqKnkovT.js";import"./Button-CdHEuVuq.js";import"./Box-W_K2m7mS.js";import"./Grid-Dpddp4dd.js";import"./isMuiElement-CITzrPa4.js";import"./styled-DiOSWYDP.js";import"./Stack-CDV8c2Ym.js";import"./Container-O7CLblpO.js";import"./Collapse-ChppdMIj.js";import"./utils-uPZOnv02.js";import"./contains-DSD8CO72.js";function Te(n={}){const{autoHideDuration:t=null,disableWindowBlurListener:o=!1,onClose:s,open:r,resumeHideDuration:p}=n,m=xe();d.useEffect(()=>{if(!r)return;function i(a){a.defaultPrevented||a.key==="Escape"&&s?.(a,"escapeKeyDown")}return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[r,s]);const f=K((i,a)=>{s?.(i,a)}),b=K(i=>{!s||i==null||m.start(i,()=>{f(null,"timeout")})});d.useEffect(()=>(r&&b(t),m.clear),[r,t,b,m]);const u=i=>{s?.(i,"clickaway")},l=m.clear,v=d.useCallback(()=>{t!=null&&b(p??t*.5)},[t,p,b]),G=i=>a=>{const y=i.onBlur;y?.(a),v()},D=i=>a=>{const y=i.onFocus;y?.(a),l()},H=i=>a=>{const y=i.onMouseEnter;y?.(a),l()},I=i=>a=>{const y=i.onMouseLeave;y?.(a),v()};return d.useEffect(()=>{if(!o&&r)return window.addEventListener("focus",v),window.addEventListener("blur",l),()=>{window.removeEventListener("focus",v),window.removeEventListener("blur",l)}},[o,r,v,l]),{getRootProps:(i={})=>{const a={...X(n),...X(i)};return{role:"presentation",...i,...a,onBlur:G(a),onFocus:D(a),onMouseEnter:H(a),onMouseLeave:I(a)}},onClickAway:u}}function Le(n){return ee("MuiSnackbarContent",n)}ne("MuiSnackbarContent",["root","message","action"]);const Ee=n=>{const{classes:t}=n;return Y({root:["root"],action:["action"],message:["message"]},Le,t)},Be=P(Pe,{name:"MuiSnackbarContent",slot:"Root"})(Z(({theme:n})=>{const t=n.palette.mode==="light"?.8:.98;return{...n.typography.body2,color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText($(n.palette.background.default,t)),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:$(n.palette.background.default,t),display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}})),Oe=P("div",{name:"MuiSnackbarContent",slot:"Message"})({padding:"8px 0"}),Me=P("div",{name:"MuiSnackbarContent",slot:"Action"})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),Ge=d.forwardRef(function(t,o){const s=J({props:t,name:"MuiSnackbarContent"}),{action:r,className:p,message:m,role:f="alert",...b}=s,u=s,l=Ee(u);return e.jsxs(Be,{role:f,elevation:6,className:ve(l.root,p),ownerState:u,ref:o,...b,children:[e.jsx(Oe,{className:l.message,ownerState:u,children:m}),r?e.jsx(Me,{className:l.action,ownerState:u,children:r}):null]})});function De(n){return ee("MuiSnackbar",n)}ne("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const He=n=>{const{classes:t,anchorOrigin:o}=n,s={root:["root",`anchorOrigin${M(o.vertical)}${M(o.horizontal)}`]};return Y(s,De,t)},Ie=P("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.root,t[`anchorOrigin${M(o.anchorOrigin.vertical)}${M(o.anchorOrigin.horizontal)}`]]}})(Z(({theme:n})=>({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:t})=>t.anchorOrigin.vertical==="top",style:{top:8,[n.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:t})=>t.anchorOrigin.vertical!=="top",style:{bottom:8,[n.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="left",style:{justifyContent:"flex-start",[n.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="right",style:{justifyContent:"flex-end",[n.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="center",style:{[n.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]}))),Re=d.forwardRef(function(t,o){const s=J({props:t,name:"MuiSnackbar"}),r=we(),p={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{action:m,anchorOrigin:{vertical:f,horizontal:b}={vertical:"bottom",horizontal:"left"},autoHideDuration:u=null,children:l,className:v,ClickAwayListenerProps:G,ContentProps:D,disableWindowBlurListener:H=!1,message:I,onBlur:te,onClose:i,onFocus:a,onMouseEnter:y,onMouseLeave:Ve,open:z,resumeHideDuration:ze,slots:_={},slotProps:oe={},TransitionComponent:q,transitionDuration:N=p,TransitionProps:{onEnter:W,onExited:F,...re}={},...se}=s,x={...s,anchorOrigin:{vertical:f,horizontal:b},autoHideDuration:u,disableWindowBlurListener:H,TransitionComponent:q,transitionDuration:N},ie=He(x),{getRootProps:ae,onClickAway:le}=Te(x),[ce,U]=d.useState(!0),de=C=>{U(!0),F&&F(C)},ue=(C,h)=>{U(!1),W&&W(C,h)},j={slots:{transition:q,..._},slotProps:{content:D,clickAwayListener:G,transition:re,...oe}},[pe,me]=L("root",{ref:o,className:[ie.root,v],elementType:Ie,getSlotProps:ae,externalForwardedProps:{...j,...se},ownerState:x}),[fe,{ownerState:he,...ke}]=L("clickAwayListener",{elementType:Ae,externalForwardedProps:j,getSlotProps:C=>({onClickAway:(...h)=>{const Ce=h[0];C.onClickAway?.(...h),!Ce?.defaultMuiPrevented&&le(...h)}}),ownerState:x}),[be,Se]=L("content",{elementType:Ge,shouldForwardComponentProp:!0,externalForwardedProps:j,additionalProps:{message:I,action:m},ownerState:x}),[ge,ye]=L("transition",{elementType:je,externalForwardedProps:j,getSlotProps:C=>({onEnter:(...h)=>{C.onEnter?.(...h),ue(...h)},onExited:(...h)=>{C.onExited?.(...h),de(...h)}}),additionalProps:{appear:!0,in:z,timeout:N,direction:f==="top"?"down":"up"},ownerState:x});return!z&&ce?null:e.jsx(fe,{...ke,..._.clickAwayListener&&{ownerState:he},children:e.jsx(pe,{...me,children:e.jsx(ge,{...ye,children:l||e.jsx(be,{...Se})})})})}),A=n=>e.jsx(Re,{...n});try{A.displayName="Snackbar",A.__docgenInfo={description:"",displayName:"Snackbar",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<SnackbarClasses> | undefined"}},children:{defaultValue:null,description:"Replace the `SnackbarContent` component.",name:"children",required:!1,type:{name:"ReactElement<unknown, any> | undefined"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme> | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown> | undefined"}},key:{defaultValue:null,description:"When displaying multiple consecutive snackbars using a single parent-rendered\n`<Snackbar/>`, add the `key` prop to ensure independent treatment of each message.\nFor instance, use `<Snackbar key={message} />`. Otherwise, messages might update\nin place, and features like `autoHideDuration` could be affected.",name:"key",required:!1,type:{name:"any"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:'{ root?: SlotProps<"div", SnackbarRootSlotPropsOverrides, SnackbarOwnerState> | undefined; content?: SlotProps<...> | undefined; clickAwayListener?: SlotComponentProps<...> | undefined; transition?: SlotComponentProps<...> | undefined; } | undefined'}},onClose:{defaultValue:null,description:'Callback fired when the component requests to be closed.\nTypically `onClose` is used to set state in the parent component,\nwhich is used to control the `Snackbar` `open` prop.\nThe `reason` parameter can optionally be used to control the response to `onClose`,\nfor example ignoring `clickaway`.\n@param event The event source of the callback.\n@param reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`, or `"escapeKeyDown"`.',name:"onClose",required:!1,type:{name:"((event: Event | SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => void) | undefined"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!1,type:{name:"boolean | undefined"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<SnackbarSlots> | undefined"}},TransitionProps:{defaultValue:{value:"{}"},description:"Props applied to the transition element.\nBy default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.\n@deprecated Use `slotProps.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"TransitionProps",required:!1,type:{name:"TransitionProps | undefined"}},anchorOrigin:{defaultValue:{value:"{ vertical: 'bottom', horizontal: 'left' }"},description:"The anchor of the `Snackbar`.\nOn smaller screens, the component grows to occupy all the available width,\nthe horizontal alignment is ignored.",name:"anchorOrigin",required:!1,type:{name:"SnackbarOrigin | undefined"}},autoHideDuration:{defaultValue:{value:"null"},description:"The number of milliseconds to wait before automatically calling the\n`onClose` function. `onClose` should then set the state of the `open`\nprop to hide the Snackbar. This behavior is disabled by default with\nthe `null` value.",name:"autoHideDuration",required:!1,type:{name:"number | null | undefined"}},ClickAwayListenerProps:{defaultValue:null,description:"Props applied to the `ClickAwayListener` element.\n@deprecated Use `slotProps.clickAwayListener` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"ClickAwayListenerProps",required:!1,type:{name:"Partial<ClickAwayListenerProps> | undefined"}},disableWindowBlurListener:{defaultValue:{value:"false"},description:"If `true`, the `autoHideDuration` timer will expire even if the window is not focused.",name:"disableWindowBlurListener",required:!1,type:{name:"boolean | undefined"}},resumeHideDuration:{defaultValue:null,description:"The number of milliseconds to wait before dismissing after user interaction.\nIf `autoHideDuration` prop isn't specified, it does nothing.\nIf `autoHideDuration` prop is specified but `resumeHideDuration` isn't,\nwe default to `autoHideDuration / 2` ms.",name:"resumeHideDuration",required:!1,type:{name:"number | undefined"}}}}}catch{}const Rn={title:"Components/Snackbar/Snackbar",component:A,tags:["autodocs"],parameters:{docs:{description:{component:"Snackbars (also known as toasts) are used for brief notifications of processes that have been or will be performed.\n\nAvaility does not currently use the Material `SnackbarContent` component for basic messages,\ninstead every `Snackbar` should contain an `Alert` to convey messages."}}}},g=P("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,t)=>t.root})({}),E={render:n=>{const[t,o]=d.useState(!1),s=()=>{o(!0)},r=(m,f)=>{f!=="clickaway"&&o(!1)},p=e.jsx(V,{component:"button",onClick:r,children:"Action"});return e.jsxs(Q,{sx:{minHeight:"200px"},children:[e.jsx(R,{onClick:s,children:"Open Snackbar"}),e.jsx(A,{...n,open:t,children:e.jsx(k,{icon:!1,onClose:r,action:p,severity:"info",children:"Alert Text"})})]})},args:{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:6e3}},B={render:()=>{const[n,t]=d.useState(!0),o=()=>{t(!1),setTimeout(()=>t(!0),1e3)},s=e.jsx(V,{component:"button",onClick:o,children:"Action Button"}),r=e.jsx(V,{href:"#",children:"Action Link"});return e.jsxs(c,{container:!0,spacing:1,maxWidth:"620px",children:[e.jsx(c,{children:e.jsx(S,{in:n,children:e.jsx(g,{children:e.jsx(k,{severity:"info",icon:!1,children:"No Action, No Close"})})})}),e.jsx(c,{children:e.jsx(S,{in:n,children:e.jsx(g,{children:e.jsx(k,{severity:"info",icon:!1,onClose:o,children:"Close"})})})}),e.jsx(c,{children:e.jsx(S,{in:n,children:e.jsx(g,{children:e.jsx(k,{severity:"info",icon:!1,action:s,children:"Action Button"})})})}),e.jsx(c,{children:e.jsx(S,{in:n,children:e.jsx(g,{children:e.jsx(k,{severity:"info",icon:!1,action:r,children:"Action Link"})})})}),e.jsx(c,{children:e.jsx(S,{in:n,children:e.jsx(g,{children:e.jsx(k,{severity:"info",icon:!1,onClose:o,action:s,children:"Action Button & Close"})})})})]})}},O={render:()=>{const[n,t]=d.useState(!0),o=()=>{t(!1),setTimeout(()=>t(!0),1e3)};return e.jsxs(c,{container:!0,spacing:1,maxWidth:"620px",children:[e.jsx(c,{children:e.jsx(S,{in:n,children:e.jsx(g,{children:e.jsxs(k,{severity:"info",onClose:o,children:[e.jsx(T,{children:"Info Alert Snackbar"}),"Additional text."]})})})}),e.jsx(c,{children:e.jsx(S,{in:n,children:e.jsx(g,{children:e.jsxs(k,{severity:"success",onClose:o,children:[e.jsx(T,{children:"Success Alert Snackbar"}),"Additional text."]})})})}),e.jsx(c,{children:e.jsx(S,{in:n,children:e.jsx(g,{children:e.jsxs(k,{severity:"warning",onClose:o,children:[e.jsx(T,{children:"Warning Alert Snackbar"}),"Additional text."]})})})}),e.jsx(c,{children:e.jsx(S,{in:n,children:e.jsx(g,{children:e.jsxs(k,{severity:"error",onClose:o,children:[e.jsx(T,{children:"Error Alert Snackbar"}),"Additional text. Don't make a snackbar more than a couple sentences!"]})})})})]})}},w={render:()=>{const[n,t]=d.useState([]),[o,s]=d.useState(!1),[r,p]=d.useState(void 0);d.useEffect(()=>{n.length&&!r?(p({...n[0]}),t(u=>u.slice(1)),s(!0)):n.length&&r&&o&&s(!1)},[n,r,o]);const m=u=>()=>{t(l=>[...l,{message:u,key:new Date().getTime()}])},f=(u,l)=>{l!=="clickaway"&&s(!1)},b=()=>{p(void 0)};return e.jsxs(Q,{minHeight:"250px",gap:"8px",children:[e.jsxs(c,{container:!0,spacing:2,children:[e.jsx(c,{size:{xs:12},children:e.jsx(R,{onClick:m("Message A"),children:"Show message A"})}),e.jsx(c,{size:{xs:12},children:e.jsx(R,{onClick:m("Message B"),children:"Show message B"})})]}),e.jsx(A,{open:o,autoHideDuration:6e3,onClose:f,TransitionProps:{onExited:b},children:e.jsx(k,{severity:"info",icon:!1,onClose:f,children:r?.message})},r?r.key:void 0)]})}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:"This demo shows how to display multiple Snackbars without stacking them by using a consecutive animation.",...w.parameters?.docs?.description}}};const Vn=["_Snackbar","_Actions","_Alerts","_ConsecutiveSnackbars"];export{B as _Actions,O as _Alerts,w as _ConsecutiveSnackbars,E as _Snackbar,Vn as __namedExportsOrder,Rn as default};
