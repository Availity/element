import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{r as n}from"./index-DcWiA9TO.js";import{T as g}from"./index-BtPDELIe.js";import{G as f,B as T}from"./index-Cyp_3NIz.js";import{F as d,h as S,i as w}from"./index-DkYez5tq.js";import{T as C}from"./index-BT-WR2nb.js";import{M as v}from"./index-FGZtc7ad.js";import{B as h}from"./index-DLsH_p52.js";import{A as V}from"./index-BwBipHKb.js";import{F as x}from"./FormControl-BPSU2g7t.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Typography-CvSvtD2a.js";import"./generateUtilityClass-CVWqFxsA.js";import"./identifier-Dtqimryx.js";import"./index-f0Aa_BgU.js";import"./extendSxProp-B5AgUjQT.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./useTheme-C2CrmYKc.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./memoTheme-D-rVhYRp.js";import"./styled-CF1hcdwO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./Box-DWnb8VZB.js";import"./Grid2-y9MPRr2u.js";import"./useTheme-DUkCvbx_.js";import"./styled-vBjI3IQc.js";import"./isMuiElement-DAzOCCHH.js";import"./useThemeProps-BIK-1DKm.js";import"./Stack-BcsM4Vc0.js";import"./Container-Cqq8qXXg.js";import"./index-DMWJB0MK.js";import"./index-CTQn_wDL.js";import"./faCircleArrowRight-6L8v8FIg.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./SvgIcon-DSdWmKAH.js";import"./faCheck-B05F4ORy.js";import"./Select-hLZ2S4VH.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-68oiojFJ.js";import"./Menu-Byu17A6t.js";import"./index-nos-0K8U.js";import"./useSlotProps-BAIpVL6Y.js";import"./resolveComponentProps-Dg20wxiM.js";import"./useForkRef-BVrIj09m.js";import"./Popover-ChEuM7rO.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-DnkSxE3X.js";import"./Portal-CBAx_nZm.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./getReactElementRef-AnOffBoZ.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-DXcIEVia.js";import"./Modal-B5s0Thvt.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-B4gbyDGC.js";import"./Fade-Dl4gmST4.js";import"./List-ChBzRQcW.js";import"./utils-DoM3o7-Q.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./createSvgIcon-TketyoFF.js";import"./OutlinedInput-CQlxW3ax.js";import"./FormLabel-98YPf6ct.js";import"./FormControlLabel-GqYWwHWT.js";import"./Switch-BqVUWLaW.js";import"./SwitchBase-Z9YgLJlx.js";import"./ButtonBase-DbVRbsLs.js";import"./isFocusVisible-B8k4qzLc.js";import"./RadioGroup-BogPRRDq.js";import"./Divider-jUONNV4j.js";import"./dividerClasses-BmOcEkDu.js";import"./TextField-BxbLM7nG.js";import"./MenuItem-DHI5k2qe.js";import"./listItemTextClasses-QA0fdXLT.js";import"./Tooltip-CiiaKkqp.js";import"./IconButton-Caxu-qgA.js";import"./CircularProgress-D8w9ZPs6.js";import"./Button-BAEbeAyH.js";import"./LoadingButton-9DxABi24.js";import"./_toKey-MoF_TmUD.js";const E=n.createContext(null),P=()=>{const t=n.useContext(E);if(!t)throw new Error("useEventTracker must be used within an EventTrackerProvider");return t},u=({children:t,plugins:a,pageTracking:o=!0,autoTrack:s=!0,recursive:i=!0,attributePrefix:l="data-analytics",eventModifiers:c=["action"]})=>{const r=n.useMemo(()=>new V(a,Promise,o,s,{recursive:i,attributePrefix:l,eventModifiers:c}),[l,s,c,o,a,i]);return n.useEffect(()=>(r.init(),o&&r.trackPageView(),()=>r.stopAutoTrack()),[r,o]),e.jsx(E.Provider,{value:r,children:t})};try{u.displayName="EventTrackerProvider",u.__docgenInfo={description:"",displayName:"EventTrackerProvider",props:{plugins:{defaultValue:null,description:"An array of plugins to pass to the underlying AvAnalytics class instance.",name:"plugins",required:!1,type:{name:"any[]"}},pageTracking:{defaultValue:{value:"true"},description:"Enable or disable page tracking on initialization.",name:"pageTracking",required:!1,type:{name:"boolean"}},autoTrack:{defaultValue:{value:"true"},description:"Enable or disable auto tracking on initialization.",name:"autoTrack",required:!1,type:{name:"boolean"}},recursive:{defaultValue:{value:"true"},description:"Enable or disable recursive functionality on initialization.",name:"recursive",required:!1,type:{name:"boolean"}},attributePrefix:{defaultValue:{value:"data-analytics"},description:"Customize the prefix used for data event tracker attributes used for auto tracking.",name:"attributePrefix",required:!1,type:{name:"string"}},eventModifiers:{defaultValue:{value:"['action']"},description:"Array of event modifiers enabling you to use other keywords for action instead of click for event type matching.",name:"eventModifiers",required:!1,type:{name:"any[]"}}}}}catch{}const ut={title:"Components/EventTracker/EventTracker",component:u,tags:["autodocs"]},_=({count:t,state:a,selectValue:o,setCount:s,setSelectValue:i})=>{const{trackEvent:l}=P(),c=r=>{i(r.target.value)};return e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:["This example is set up to track user events. ",e.jsx("code",{children:"Select"})," allows logging for the blur event.",e.jsx("br",{}),e.jsx("code",{children:"Textarea"})," and ",e.jsx("code",{children:"Input"})," log when focused. Both of these buttons log when clicked."]}),e.jsxs(g,{children:["Events logged: ",t]}),e.jsxs("pre",{children:["LastEvent: ",a]}),e.jsxs(f,{container:!0,direction:"column",sx:{maxWidth:"500px"},"data-analytics-app-name":"app",children:[e.jsxs(x,{children:[e.jsx(d,{id:"select-label",children:"Select"}),e.jsxs(S,{labelId:"select-label",value:o,onChange:c,onBlur:()=>l({action:"blur",appName:"app",elemId:"select-label",event:"blur"}),children:[e.jsx(v,{value:"10",children:"10"}),e.jsx(v,{value:"20",children:"20"}),e.jsx(v,{value:"30",children:"30"})]})]}),e.jsx(T,{sx:{marginTop:2},children:e.jsxs(x,{children:[e.jsx(d,{id:"textarea-label",htmlFor:"textarea",children:"Text Area"}),e.jsx(C,{id:"textarea",multiline:!0,"data-analytics-action":"focus"})]})}),e.jsxs(x,{children:[e.jsx(d,{id:"input-label",htmlFor:"input",children:"Input"}),e.jsx(w,{id:"input","data-analytics-action":"focus"})]}),e.jsxs(f,{container:!0,sx:{justifyContent:"space-between",marginTop:2},"data-analytics-container":"buttons",children:[e.jsx(h,{id:"reset-button","data-analytics-action":"click","data-analytics-test-id":"world",onClick:()=>s(0),color:"secondary",children:"Reset Count"}),e.jsx(h,{id:"my-button","data-analytics-action":"click","data-analytics-test-id":"hello",color:"primary",children:"Click Me"})]})]})]})},m={render:t=>{const[a,o]=n.useState(""),[s,i]=n.useState(0),[l,c]=n.useState(""),r=n.useMemo(()=>[{isEnabled:()=>(console.log("checking isEnabled"),!0),init:()=>{console.log("init")},trackEvent(p){console.log("track event",p),o(JSON.stringify(p,null,2)),i(j=>j+1)},trackPageView(p){console.log("track page view",p)}}],[]);return e.jsx(u,{...t,plugins:r,children:e.jsx(_,{count:s,setCount:i,state:a,selectValue:l,setSelectValue:c})})},args:{eventModifiers:["action"],recursive:!0}};var k,y,b;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(b=(y=m.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const dt=["_EventTracker"];export{m as _EventTracker,dt as __namedExportsOrder,ut as default};
