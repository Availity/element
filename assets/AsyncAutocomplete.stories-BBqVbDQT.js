import{j as p}from"./iframe-Cb7vw6QO.js";import{i as n}from"./index-CxFXSMKf.js";import{A as m}from"./AsyncAutocomplete-BSEJ_7et.js";import{Q as a}from"./suspense-EYViC-ju.js";import{Q as s}from"./queryClient-D9g_JsLJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CEmQAIyt.js";import"./___vite-browser-external_commonjs-proxy-BcrjmJoQ.js";import"./index-DobhkrB9.js";import"./_toKey-DnGNACQC.js";import"./Autocomplete-B_uh5rGK.js";import"./index-BwRimm9m.js";import"./index-CZ4e5IMC.js";import"./index-BiBDMnSv.js";import"./index-CXcfblB4.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-DzlaQllX.js";import"./memoTheme-BhRdBUps.js";import"./styled-Bj0Es0Li.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BC2dqveQ.js";import"./Tooltip-BsHoCzhf.js";import"./useTheme-CGEjvpOB.js";import"./useSlot-Bh9EPizr.js";import"./mergeSlotProps-81oQhZWc.js";import"./useForkRef-BNxAHOk3.js";import"./useTimeout-Cz1ClSsL.js";import"./useControlled-DqdtCuR_.js";import"./useEventCallback-DhPRnvwe.js";import"./getReactElementRef-a_8TXcOV.js";import"./Portal-DJJdN93D.js";import"./utils-DcOfItOr.js";import"./TransitionGroupContext-DGa2MF0H.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BV7LDA1z.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CF-wUheM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CsQPbkJ1.js";import"./CircularProgress-CDQWW7ND.js";import"./Button-DxhLSeMc.js";import"./index-Cvw4zcDU.js";import"./Box-CNkaSG6M.js";import"./Grid-C2w8BqSX.js";import"./styled-CR8SZlf8.js";import"./isMuiElement-imdvoBqP.js";import"./Stack-CHKpeULE.js";import"./Container-D_bVL9K8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DpGDqrtm.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CTXbndWV.js";import"./Select-Ic8q8ktd.js";import"./Menu-Bewcal6o.js";import"./Popover-Cnj0-dEv.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-BcsNuv71.js";import"./Modal-B43L0UeZ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-4le12T3H.js";import"./Fade-DsAVsIO4.js";import"./Paper-Bx6fwAkb.js";import"./List-BZXK3kN1.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-Bes_Hs0U.js";import"./OutlinedInput-DXGq1lSL.js";import"./FormHelperText-Bt-HOScp.js";import"./FormControlLabel-CxvC5PJ6.js";import"./Typography-DIMxXIFj.js";import"./Switch-Bdgg5hW3.js";import"./SwitchBase-TNKs6tJ6.js";import"./RadioGroup-r3Yri3XM.js";import"./Radio-B6-bkMGE.js";import"./FormGroup-067_YhNq.js";import"./Divider-ByZ0eGkq.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-DUoMahyW.js";import"./FormControl-fPCLegLr.js";import"./Autocomplete-BmbSlWif.js";import"./Close-BVZ75a6G.js";import"./usePreviousProps-DnBz2H5n.js";import"./Chip-COSMA2R5.js";import"./ListSubheader-B4NwFs0I.js";import"./useInfiniteQuery-Dq-HXmrz.js";import"./useBaseQuery-BU41YSLj.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <QueryClientProvider client={client}>
        <AsyncAutocomplete {...args} />
      </QueryClientProvider>;
  },
  decorators: [],
  parameters: {
    controls: {
      exclude: /loading(?!Text)|options/
    }
  },
  args: {
    FieldProps: {
      label: 'Async Select',
      helperText: 'Helper Text',
      fullWidth: false
    },
    getOptionLabel: (val: Option) => val.label,
    loadOptions,
    limit: 10,
    queryKey: 'example'
  }
}`,...i.parameters?.docs?.source}}};const Yt=["_Async"];export{i as _Async,Yt as __namedExportsOrder,Xt as default};
