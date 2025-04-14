import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as n}from"./index-BgYLq7fD.js";import{T as g}from"./index-DSF7aQ5o.js";import{G as f,B as T}from"./index-CQspzllj.js";import{F as d,i as S,j as w}from"./index-ChDxID8R.js";import{T as C}from"./index-CaDB5Zgc.js";import{M as v}from"./index-D5GNLdpX.js";import{B as h}from"./index-DnNfvsmq.js";import{A as V}from"./index-Bj3ShiuH.js";import{F as x}from"./FormControl-BpN01e6f.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./Typography-COSof5sR.js";import"./generateUtilityClass-BeVSWKCg.js";import"./identifier-CudAVvBZ.js";import"./index-DfraP8LW.js";import"./extendSxProp-BY7TjwKM.js";import"./DefaultPropsProvider-CWkNlXkE.js";import"./useTheme-Ib01SJ3a.js";import"./emotion-react.browser.esm-v7Jm8XFw.js";import"./memoTheme-CpoNRPWX.js";import"./styled-CKuRQFSa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-whvyra8-.js";import"./Box-Dv31mJKI.js";import"./Grid2-JMPt1-k0.js";import"./useTheme-Cx1wRXKO.js";import"./styled-Dbr83ACF.js";import"./isMuiElement-DiOAsJE6.js";import"./useThemeProps-Do5o_sjG.js";import"./Stack-qbqOHiMo.js";import"./Container-DVbvSSVb.js";import"./index-DJKl12U0.js";import"./index-DcwHbAK-.js";import"./faCircleArrowRight-B14F5Piw.js";import"./faUser-D77uLSLS.js";import"./faSortDown-BIc1sKK4.js";import"./SvgIcon-CiBNlF9H.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-BDxB3zbH.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-t_-EwZHM.js";import"./OutlinedInput-B93mfhOp.js";import"./isHostComponent-DVu5iVWx.js";import"./utils-DoM3o7-Q.js";import"./useForkRef-Dz4aGlyk.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./Select-IoH-6RCp.js";import"./Menu-GaZ6ImQN.js";import"./index-DyJdRKzS.js";import"./useSlotProps-BmqT0tgx.js";import"./resolveComponentProps-CCNxqvxI.js";import"./Popover-CQBNnNRW.js";import"./useSlot-1VRyIerd.js";import"./Portal-C2J4q3Ji.js";import"./utils-tFrEP9Vf.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./useTimeout-iC_34LsC.js";import"./getReactElementRef-Df0xbma2.js";import"./Paper-4P5FqKie.js";import"./Modal-CezAubrN.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-TXxSV-j9.js";import"./Fade-BCUt9uX4.js";import"./List-eXGzl-Dz.js";import"./useControlled-DxC1uCGX.js";import"./useId-DIK8ekB4.js";import"./createSvgIcon-BWWwXn7v.js";import"./FormControlLabel-BzV1MzKU.js";import"./Switch-CyD42d4W.js";import"./SwitchBase-CYtmyT40.js";import"./ButtonBase-D97P5WV0.js";import"./isFocusVisible-B8k4qzLc.js";import"./RadioGroup-CZeO-sCM.js";import"./Divider-DJW73rZ3.js";import"./dividerClasses-0g4QmK6Y.js";import"./TextField-DBCIsg8u.js";import"./MenuItem-Cszf_9D3.js";import"./listItemTextClasses-DiJrtlJf.js";import"./Tooltip-CIyLwlBA.js";import"./IconButton-D_kG6RhR.js";import"./CircularProgress-fcRSDrpN.js";import"./Button-yLAd6_L_.js";import"./LoadingButton-Cl76w144.js";import"./_toKey-DFcMYS53.js";const E=n.createContext(null),P=()=>{const t=n.useContext(E);if(!t)throw new Error("useEventTracker must be used within an EventTrackerProvider");return t},u=({children:t,plugins:a,pageTracking:o=!0,autoTrack:s=!0,recursive:i=!0,attributePrefix:l="data-analytics",eventModifiers:c=["action"]})=>{const r=n.useMemo(()=>new V(a,Promise,o,s,{recursive:i,attributePrefix:l,eventModifiers:c}),[l,s,c,o,a,i]);return n.useEffect(()=>(r.init(),o&&r.trackPageView(),()=>r.stopAutoTrack()),[r,o]),e.jsx(E.Provider,{value:r,children:t})};try{u.displayName="EventTrackerProvider",u.__docgenInfo={description:"",displayName:"EventTrackerProvider",props:{plugins:{defaultValue:null,description:"An array of plugins to pass to the underlying AvAnalytics class instance.",name:"plugins",required:!1,type:{name:"any[]"}},pageTracking:{defaultValue:{value:"true"},description:"Enable or disable page tracking on initialization.",name:"pageTracking",required:!1,type:{name:"boolean"}},autoTrack:{defaultValue:{value:"true"},description:"Enable or disable auto tracking on initialization.",name:"autoTrack",required:!1,type:{name:"boolean"}},recursive:{defaultValue:{value:"true"},description:"Enable or disable recursive functionality on initialization.",name:"recursive",required:!1,type:{name:"boolean"}},attributePrefix:{defaultValue:{value:"data-analytics"},description:"Customize the prefix used for data event tracker attributes used for auto tracking.",name:"attributePrefix",required:!1,type:{name:"string"}},eventModifiers:{defaultValue:{value:"['action']"},description:"Array of event modifiers enabling you to use other keywords for action instead of click for event type matching.",name:"eventModifiers",required:!1,type:{name:"any[]"}}}}}catch{}const vt={title:"Components/EventTracker/EventTracker",component:u,tags:["autodocs"]},_=({count:t,state:a,selectValue:o,setCount:s,setSelectValue:i})=>{const{trackEvent:l}=P(),c=r=>{i(r.target.value)};return e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:["This example is set up to track user events. ",e.jsx("code",{children:"Select"})," allows logging for the blur event.",e.jsx("br",{}),e.jsx("code",{children:"Textarea"})," and ",e.jsx("code",{children:"Input"})," log when focused. Both of these buttons log when clicked."]}),e.jsxs(g,{children:["Events logged: ",t]}),e.jsxs("pre",{children:["LastEvent: ",a]}),e.jsxs(f,{container:!0,direction:"column",sx:{maxWidth:"500px"},"data-analytics-app-name":"app",children:[e.jsxs(x,{children:[e.jsx(d,{id:"select-label",children:"Select"}),e.jsxs(S,{labelId:"select-label",value:o,onChange:c,onBlur:()=>l({action:"blur",appName:"app",elemId:"select-label",event:"blur"}),children:[e.jsx(v,{value:"10",children:"10"}),e.jsx(v,{value:"20",children:"20"}),e.jsx(v,{value:"30",children:"30"})]})]}),e.jsx(T,{sx:{marginTop:2},children:e.jsxs(x,{children:[e.jsx(d,{id:"textarea-label",htmlFor:"textarea",children:"Text Area"}),e.jsx(C,{id:"textarea",multiline:!0,"data-analytics-action":"focus"})]})}),e.jsxs(x,{children:[e.jsx(d,{id:"input-label",htmlFor:"input",children:"Input"}),e.jsx(w,{id:"input","data-analytics-action":"focus"})]}),e.jsxs(f,{container:!0,sx:{justifyContent:"space-between",marginTop:2},"data-analytics-container":"buttons",children:[e.jsx(h,{id:"reset-button","data-analytics-action":"click","data-analytics-test-id":"world",onClick:()=>s(0),color:"secondary",children:"Reset Count"}),e.jsx(h,{id:"my-button","data-analytics-action":"click","data-analytics-test-id":"hello",color:"primary",children:"Click Me"})]})]})]})},m={render:t=>{const[a,o]=n.useState(""),[s,i]=n.useState(0),[l,c]=n.useState(""),r=n.useMemo(()=>[{isEnabled:()=>(console.log("checking isEnabled"),!0),init:()=>{console.log("init")},trackEvent(p){console.log("track event",p),o(JSON.stringify(p,null,2)),i(j=>j+1)},trackPageView(p){console.log("track page view",p)}}],[]);return e.jsx(u,{...t,plugins:r,children:e.jsx(_,{count:s,setCount:i,state:a,selectValue:l,setSelectValue:c})})},args:{eventModifiers:["action"],recursive:!0}};var k,y,b;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: EventTrackerProps) => {
    const [state, setState] = useState('');
    const [count, setCount] = useState(0);
    const [selectValue, setSelectValue] = useState('');
    const plugins = useMemo(() => [{
      isEnabled: () => {
        console.log('checking isEnabled');
        return true;
      },
      init: () => {
        console.log('init');
      },
      trackEvent(event: unknown) {
        console.log('track event', event);
        setState(JSON.stringify(event, null, 2));
        setCount(current => current + 1);
      },
      trackPageView(url: unknown) {
        console.log('track page view', url);
      }
    }], []);
    return <EventTrackerProvider {...args} plugins={plugins}>
        <EventTrackerUI count={count} setCount={setCount} state={state} selectValue={selectValue} setSelectValue={setSelectValue} />
      </EventTrackerProvider>;
  },
  args: {
    eventModifiers: ['action'],
    recursive: true
  }
}`,...(b=(y=m.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const xt=["_EventTracker"];export{m as _EventTracker,xt as __namedExportsOrder,vt as default};
