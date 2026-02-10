import{j as p}from"./iframe-D81qY2CF.js";import{i as n}from"./index-BfEP--CJ.js";import{A as m}from"./AsyncAutocomplete-C3m8Iyig.js";import{Q as a}from"./suspense-Dm71y9gD.js";import{Q as s}from"./queryClient-MtiFOPIE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-E_v7_lSo.js";import"./___vite-browser-external_commonjs-proxy-6DqOz1aF.js";import"./index-CBn4K3li.js";import"./Autocomplete-DkR_8y_O.js";import"./index-v-jFnVMN.js";import"./index-DXPw07iH.js";import"./index-BiBDMnSv.js";import"./index-BD-so7Wr.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-B6ASqf__.js";import"./memoTheme-A9yntoiy.js";import"./styled-CaGoIOKf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-D8s0t892.js";import"./Tooltip-DVNRBZHi.js";import"./useTheme-DaB7mFrL.js";import"./useSlot-ietvTX_K.js";import"./mergeSlotProps-BaZVmxsR.js";import"./useForkRef-aj5N3dMx.js";import"./useTimeout-DKkko9rl.js";import"./useControlled-JeBGtbqT.js";import"./useEventCallback-CqgW2Pgy.js";import"./getReactElementRef-DGERSSwn.js";import"./Portal-CxFiB9ei.js";import"./utils-or5sFOOm.js";import"./TransitionGroupContext-CUPg0qtb.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-huDybs-7.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DShobRfO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D8v-94oh.js";import"./CircularProgress-ByHKQjCZ.js";import"./Button-B5mFfpCi.js";import"./index-CcvrWeMs.js";import"./Box-rRIRPzng.js";import"./Grid-DCMyUpSS.js";import"./styled-BY17iDss.js";import"./isMuiElement-CnND6WC1.js";import"./Stack-DqyNPhS4.js";import"./Container-CAzsbVoz.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-1LiFzSpb.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-B58sNEHq.js";import"./Select-BT7eijOJ.js";import"./Menu-LxUC79pv.js";import"./Popover-DAivdLAX.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-B-p-pIsk.js";import"./Modal-DwTQgRCi.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DEXVSxef.js";import"./Fade-ChDneRqZ.js";import"./Paper-B5yWzxZy.js";import"./List-CQHF_s_Z.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-cW8ufNaK.js";import"./OutlinedInput-CBLYdT9S.js";import"./FormHelperText-DCQUYD-6.js";import"./FormControlLabel-yS-K86Z-.js";import"./Typography-Dn0-Cqm0.js";import"./Switch-T-QwS1SK.js";import"./SwitchBase-BPMkWiED.js";import"./RadioGroup-DLNEB0Uq.js";import"./Radio-BUX_wfoF.js";import"./FormGroup-C39yIwat.js";import"./Divider-nvWxZ6Yj.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-CkIgne0G.js";import"./FormControl-CPJa8i5X.js";import"./Autocomplete-DGXMi9UV.js";import"./Close-E_O1U0R0.js";import"./usePreviousProps-DBKIGHWz.js";import"./Chip-WUn_ZFaR.js";import"./ListSubheader-D250Zax-.js";import"./useInfiniteQuery-jY-vvyne.js";import"./useBaseQuery-6ECyq2SS.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Vt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Xt=["_Async"];export{i as _Async,Xt as __namedExportsOrder,Vt as default};
