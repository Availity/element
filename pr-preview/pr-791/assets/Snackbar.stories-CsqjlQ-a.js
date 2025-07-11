import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as p}from"./index-BgYLq7fD.js";import{b as k,a as w}from"./index-rh78dY07.js";import{B as D}from"./index-k9OtkSpc.js";import{B as ie,G as d}from"./index-DmY_4rvh.js";import{C as g}from"./index-C8Ap_n0-.js";import{a as Ce,u as W}from"./useTimeout-iC_34LsC.js";import{e as N}from"./resolveComponentProps-XMphxBSb.js";import{u as we}from"./useTheme-BGaXYmwe.js";import{s as C,c as ae}from"./styled-FZfCzBz5.js";import{m as le}from"./memoTheme-BLrvrRyo.js";import{g as ce,c as Ae}from"./generateUtilityClass-GxznSYtt.js";import{g as de}from"./generateUtilityClasses-aotQgNYZ.js";import{u as pe}from"./DefaultPropsProvider-ArLX9SCD.js";import{G as je}from"./Portal-DEVqEMA6.js";import{u as Pe}from"./useSlotProps-DT0tbkWv.js";import{C as Te}from"./ClickAwayListener-DaGI8yPv.js";import{P as Ee}from"./Paper-zGtC1N39.js";import{t as Be,f as T}from"./identifier-CHUoN9pF.js";import{L as H}from"./Link-rLN5tdDv.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CmMPo3bx.js";import"./faCircleArrowRight-B14F5Piw.js";import"./faUser-D77uLSLS.js";import"./faSortDown-BIc1sKK4.js";import"./SvgIcon-D3xe1wVB.js";import"./Alert-BSC4cdjV.js";import"./useSlot-qvYlW2UV.js";import"./useForkRef-Dz4aGlyk.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-DK1T27V3.js";import"./Close-9bLEWkOn.js";import"./IconButton-BFylt634.js";import"./useId-DIK8ekB4.js";import"./ButtonBase-DwAEbHIm.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./emotion-react.browser.esm-DW5OmoQI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-o1goEU37.js";import"./AlertTitle-Bln1cCcI.js";import"./Typography-geKghQyJ.js";import"./index-Df15702_.js";import"./extendSxProp-BZnzVrgj.js";import"./useTheme-CVByJb8R.js";import"./Tooltip-Xh9QA514.js";import"./index-DyJdRKzS.js";import"./useControlled-DxC1uCGX.js";import"./getReactElementRef-Df0xbma2.js";import"./ownerDocument-DW-IO8s5.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./Button-DrYdciQ0.js";import"./LoadingButton-C6EjcQI6.js";import"./Box-BU2WakPM.js";import"./Grid2-BbvvmKhh.js";import"./styled-CsKbBpC_.js";import"./isMuiElement-DiOAsJE6.js";import"./useThemeProps-BNBLMFIr.js";import"./Stack-2ILcP_1D.js";import"./Container-DvcsWH8C.js";import"./Collapse-RuyvmUHH.js";import"./utils-tFrEP9Vf.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";function Le(n={}){const{autoHideDuration:t=null,disableWindowBlurListener:o=!1,onClose:r,open:s,resumeHideDuration:m}=n,f=Ce();p.useEffect(()=>{if(!s)return;function i(a){a.defaultPrevented||a.key==="Escape"&&(r==null||r(a,"escapeKeyDown"))}return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[s,r]);const h=W((i,a)=>{r==null||r(i,a)}),b=W(i=>{!r||i==null||f.start(i,()=>{h(null,"timeout")})});p.useEffect(()=>(s&&b(t),f.clear),[s,t,b,f]);const u=i=>{r==null||r(i,"clickaway")},c=f.clear,v=p.useCallback(()=>{t!=null&&b(m??t*.5)},[t,m,b]),E=i=>a=>{const l=i.onBlur;l==null||l(a),v()},B=i=>a=>{const l=i.onFocus;l==null||l(a),c()},L=i=>a=>{const l=i.onMouseEnter;l==null||l(a),c()},O=i=>a=>{const l=i.onMouseLeave;l==null||l(a),v()};return p.useEffect(()=>{if(!o&&s)return window.addEventListener("focus",v),window.addEventListener("blur",c),()=>{window.removeEventListener("focus",v),window.removeEventListener("blur",c)}},[o,s,v,c]),{getRootProps:(i={})=>{const a={...N(n),...N(i)};return{role:"presentation",...i,...a,onBlur:E(a),onFocus:B(a),onMouseEnter:L(a),onMouseLeave:O(a)}},onClickAway:u}}function Oe(n){return ce("MuiSnackbarContent",n)}de("MuiSnackbarContent",["root","message","action"]);const Ge=n=>{const{classes:t}=n;return ae({root:["root"],action:["action"],message:["message"]},Oe,t)},Me=C(Ee,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(n,t)=>t.root})(le(({theme:n})=>{const t=n.palette.mode==="light"?.8:.98,o=Be(n.palette.background.default,t);return{...n.typography.body2,color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(o),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:o,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(n.vars||n).shape.borderRadius,flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}})),De=C("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(n,t)=>t.message})({padding:"8px 0"}),He=C("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(n,t)=>t.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),Re=p.forwardRef(function(t,o){const r=pe({props:t,name:"MuiSnackbarContent"}),{action:s,className:m,message:f,role:h="alert",...b}=r,u=r,c=Ge(u);return e.jsxs(Me,{role:h,square:!0,elevation:6,className:Ae(c.root,m),ownerState:u,ref:o,...b,children:[e.jsx(De,{className:c.message,ownerState:u,children:f}),s?e.jsx(He,{className:c.action,ownerState:u,children:s}):null]})});function Ie(n){return ce("MuiSnackbar",n)}de("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const Ve=n=>{const{classes:t,anchorOrigin:o}=n,r={root:["root",`anchorOrigin${T(o.vertical)}${T(o.horizontal)}`]};return ae(r,Ie,t)},U=C("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.root,t[`anchorOrigin${T(o.anchorOrigin.vertical)}${T(o.anchorOrigin.horizontal)}`]]}})(le(({theme:n})=>({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:t})=>t.anchorOrigin.vertical==="top",style:{top:8,[n.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:t})=>t.anchorOrigin.vertical!=="top",style:{bottom:8,[n.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="left",style:{justifyContent:"flex-start",[n.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="right",style:{justifyContent:"flex-end",[n.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="center",style:{[n.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]}))),ze=p.forwardRef(function(t,o){const r=pe({props:t,name:"MuiSnackbar"}),s=we(),m={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{action:f,anchorOrigin:{vertical:h,horizontal:b}={vertical:"bottom",horizontal:"left"},autoHideDuration:u=null,children:c,className:v,ClickAwayListenerProps:E,ContentProps:B,disableWindowBlurListener:L=!1,message:O,onBlur:ue,onClose:i,onFocus:a,onMouseEnter:l,onMouseLeave:_e,open:R,resumeHideDuration:qe,TransitionComponent:I=je,transitionDuration:V=m,TransitionProps:{onEnter:z,onExited:_,...me}={},...fe}=r,G={...r,anchorOrigin:{vertical:h,horizontal:b},autoHideDuration:u,disableWindowBlurListener:L,TransitionComponent:I,transitionDuration:V},he=Ve(G),{getRootProps:ke,onClickAway:be}=Le({...G}),[ge,q]=p.useState(!0),Se=Pe({elementType:U,getSlotProps:ke,externalForwardedProps:fe,ownerState:G,additionalProps:{ref:o},className:[he.root,v]}),ve=M=>{q(!0),_&&_(M)},xe=(M,ye)=>{q(!1),z&&z(M,ye)};return!R&&ge?null:e.jsx(Te,{onClickAway:be,...E,children:e.jsx(U,{...Se,children:e.jsx(I,{appear:!0,in:R,timeout:V,direction:h==="top"?"down":"up",onEnter:xe,onExited:ve,...me,children:c||e.jsx(Re,{message:O,action:f,...B})})})})}),y=n=>e.jsx(ze,{...n});try{y.displayName="Snackbar",y.__docgenInfo={description:"",displayName:"Snackbar",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<SnackbarClasses>"}},children:{defaultValue:null,description:"Replace the `SnackbarContent` component.",name:"children",required:!1,type:{name:"ReactElement<unknown, any>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},key:{defaultValue:null,description:"When displaying multiple consecutive snackbars using a single parent-rendered\n`<Snackbar/>`, add the `key` prop to ensure independent treatment of each message.\nFor instance, use `<Snackbar key={message} />`. Otherwise, messages might update\nin place, and features like `autoHideDuration` could be affected.",name:"key",required:!1,type:{name:"any"}},onClose:{defaultValue:null,description:'Callback fired when the component requests to be closed.\nTypically `onClose` is used to set state in the parent component,\nwhich is used to control the `Snackbar` `open` prop.\nThe `reason` parameter can optionally be used to control the response to `onClose`,\nfor example ignoring `clickaway`.\n@param event The event source of the callback.\n@param reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`, or `"escapeKeyDown"`.',name:"onClose",required:!1,type:{name:"(event: Event | SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => void"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!1,type:{name:"boolean"}},anchorOrigin:{defaultValue:{value:"{ vertical: 'bottom', horizontal: 'left' }"},description:"The anchor of the `Snackbar`.\nOn smaller screens, the component grows to occupy all the available width,\nthe horizontal alignment is ignored.",name:"anchorOrigin",required:!1,type:{name:"SnackbarOrigin"}},TransitionProps:{defaultValue:{value:"{}"},description:"Props applied to the transition element.\nBy default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.",name:"TransitionProps",required:!1,type:{name:"TransitionProps"}},autoHideDuration:{defaultValue:{value:"null"},description:"The number of milliseconds to wait before automatically calling the\n`onClose` function. `onClose` should then set the state of the `open`\nprop to hide the Snackbar. This behavior is disabled by default with\nthe `null` value.",name:"autoHideDuration",required:!1,type:{name:"number"}},ClickAwayListenerProps:{defaultValue:null,description:"Props applied to the `ClickAwayListener` element.",name:"ClickAwayListenerProps",required:!1,type:{name:"Partial<ClickAwayListenerProps>"}},disableWindowBlurListener:{defaultValue:{value:"false"},description:"If `true`, the `autoHideDuration` timer will expire even if the window is not focused.",name:"disableWindowBlurListener",required:!1,type:{name:"boolean"}},resumeHideDuration:{defaultValue:null,description:"The number of milliseconds to wait before dismissing after user interaction.\nIf `autoHideDuration` prop isn't specified, it does nothing.\nIf `autoHideDuration` prop is specified but `resumeHideDuration` isn't,\nwe default to `autoHideDuration / 2` ms.",name:"resumeHideDuration",required:!1,type:{name:"number"}}}}}catch{}const nt={title:"Components/Snackbar/Snackbar",component:y,tags:["autodocs"],parameters:{docs:{description:{component:"Snackbars (also known as toasts) are used for brief notifications of processes that have been or will be performed.\n\nAvaility does not currently use the Material `SnackbarContent` component for basic messages,\ninstead every `Snackbar` should contain an `Alert` to convey messages."}}}},S=C("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,t)=>t.root})({}),A={render:n=>{const[t,o]=p.useState(!1),r=()=>{o(!0)},s=(f,h)=>{h!=="clickaway"&&o(!1)},m=e.jsx(H,{component:"button",onClick:s,children:"Action"});return e.jsxs(ie,{sx:{minHeight:"200px"},children:[e.jsx(D,{onClick:r,children:"Open Snackbar"}),e.jsx(y,{...n,open:t,children:e.jsx(k,{icon:!1,onClose:s,action:m,severity:"info",children:"Alert Text"})})]})},args:{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:6e3}},j={render:()=>{const[n,t]=p.useState(!0),o=()=>{t(!1),setTimeout(()=>t(!0),1e3)},r=e.jsx(H,{component:"button",onClick:o,children:"Action Button"}),s=e.jsx(H,{href:"#",children:"Action Link"});return e.jsxs(d,{container:!0,spacing:1,maxWidth:"620px",children:[e.jsx(d,{children:e.jsx(g,{in:n,children:e.jsx(S,{children:e.jsx(k,{severity:"info",icon:!1,children:"No Action, No Close"})})})}),e.jsx(d,{children:e.jsx(g,{in:n,children:e.jsx(S,{children:e.jsx(k,{severity:"info",icon:!1,onClose:o,children:"Close"})})})}),e.jsx(d,{children:e.jsx(g,{in:n,children:e.jsx(S,{children:e.jsx(k,{severity:"info",icon:!1,action:r,children:"Action Button"})})})}),e.jsx(d,{children:e.jsx(g,{in:n,children:e.jsx(S,{children:e.jsx(k,{severity:"info",icon:!1,action:s,children:"Action Link"})})})}),e.jsx(d,{children:e.jsx(g,{in:n,children:e.jsx(S,{children:e.jsx(k,{severity:"info",icon:!1,onClose:o,action:r,children:"Action Button & Close"})})})})]})}},P={render:()=>{const[n,t]=p.useState(!0),o=()=>{t(!1),setTimeout(()=>t(!0),1e3)};return e.jsxs(d,{container:!0,spacing:1,maxWidth:"620px",children:[e.jsx(d,{children:e.jsx(g,{in:n,children:e.jsx(S,{children:e.jsxs(k,{severity:"info",onClose:o,children:[e.jsx(w,{children:"Info Alert Snackbar"}),"Additional text."]})})})}),e.jsx(d,{children:e.jsx(g,{in:n,children:e.jsx(S,{children:e.jsxs(k,{severity:"success",onClose:o,children:[e.jsx(w,{children:"Success Alert Snackbar"}),"Additional text."]})})})}),e.jsx(d,{children:e.jsx(g,{in:n,children:e.jsx(S,{children:e.jsxs(k,{severity:"warning",onClose:o,children:[e.jsx(w,{children:"Warning Alert Snackbar"}),"Additional text."]})})})}),e.jsx(d,{children:e.jsx(g,{in:n,children:e.jsx(S,{children:e.jsxs(k,{severity:"error",onClose:o,children:[e.jsx(w,{children:"Error Alert Snackbar"}),"Additional text. Don't make a snackbar more than a couple sentences!"]})})})})]})}},x={render:()=>{const[n,t]=p.useState([]),[o,r]=p.useState(!1),[s,m]=p.useState(void 0);p.useEffect(()=>{n.length&&!s?(m({...n[0]}),t(u=>u.slice(1)),r(!0)):n.length&&s&&o&&r(!1)},[n,s,o]);const f=u=>()=>{t(c=>[...c,{message:u,key:new Date().getTime()}])},h=(u,c)=>{c!=="clickaway"&&r(!1)},b=()=>{m(void 0)};return e.jsxs(ie,{minHeight:"250px",gap:"8px",children:[e.jsxs(d,{container:!0,spacing:2,children:[e.jsx(d,{size:{xs:12},children:e.jsx(D,{onClick:f("Message A"),children:"Show message A"})}),e.jsx(d,{size:{xs:12},children:e.jsx(D,{onClick:f("Message B"),children:"Show message B"})})]}),e.jsx(y,{open:o,autoHideDuration:6e3,onClose:h,TransitionProps:{onExited:b},children:e.jsx(k,{severity:"info",icon:!1,onClose:h,children:s==null?void 0:s.message})},s?s.key:void 0)]})}};var $,F,K;A.parameters={...A.parameters,docs:{...($=A.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(K=(F=A.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var X,J,Q;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Q=(J=j.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,Z,ee;P.parameters={...P.parameters,docs:{...(Y=P.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=P.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,oe,re,se;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(te=x.parameters)==null?void 0:te.docs)==null?void 0:oe.source},description:{story:"This demo shows how to display multiple Snackbars without stacking them by using a consecutive animation.",...(se=(re=x.parameters)==null?void 0:re.docs)==null?void 0:se.description}}};const tt=["_Snackbar","_Actions","_Alerts","_ConsecutiveSnackbars"];export{j as _Actions,P as _Alerts,x as _ConsecutiveSnackbars,A as _Snackbar,tt as __namedExportsOrder,nt as default};
