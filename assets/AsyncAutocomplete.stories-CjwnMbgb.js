import{j as p}from"./iframe-BfiSjCZE.js";import{i as n}from"./index-BHDw3JNc.js";import{Q as a}from"./suspense-CDgsDqgL.js";import{A as e}from"./AsyncAutocomplete-C5wCfhuw.js";import{Q as s}from"./queryClient-CRAw8wt9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ClgzThDV.js";import"./___vite-browser-external_commonjs-proxy-Dzcmey56.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-RjjOvBIQ.js";import"./useBaseQuery-DZasCuPT.js";import"./Autocomplete-DaAYPH5P.js";import"./index-So7oyo1n.js";import"./index-BP56GXIS.js";import"./index-MVgG_W0q.js";import"./index-CnlcVsMi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-pfgupZ4n.js";import"./memoTheme-Bf2lNlfa.js";import"./styled-B9LoXHeR.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BnEi8s_n.js";import"./IconButton-CFfT0ndL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B0Rj5enX.js";import"./useTimeout-Dvw-KAbd.js";import"./TransitionGroupContext-BprlU7j-.js";import"./useForkRef-KHwM-Xb0.js";import"./useEventCallback-BRDDRqyT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DFM5h0gz.js";import"./Tooltip-DQOY4bTe.js";import"./useTheme-CyCmmmWE.js";import"./useSlot-BvJ3REjy.js";import"./mergeSlotProps-d8P6odjW.js";import"./useControlled-DuHd5Dfi.js";import"./getReactElementRef-DrqUH2UJ.js";import"./Portal-1iQSKTOk.js";import"./utils-CZVImzMM.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DsKdZe-B.js";import"./Button-CWR2xa5V.js";import"./index-DXU92sR7.js";import"./Box-CRTcjAl_.js";import"./Grid-C2RK_1Jw.js";import"./isMuiElement-CIl3go_L.js";import"./styled-Bty96-Ys.js";import"./Stack-ggz2xYsp.js";import"./Container-B6cEEQtr.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BkT6Jibn.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-C5CMMi3k.js";import"./Select-Bc7HWole.js";import"./SelectFocusSourceContext-Bs6RAa9A.js";import"./Popover-B_IG8L-c.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-DuqHZ2js.js";import"./debounce-Be36O1Ab.js";import"./Modal-DeYFWYjf.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CyrGgScl.js";import"./Fade-DEFCsiCh.js";import"./Paper-8FyfnLjY.js";import"./List-DSZlyKTP.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-DV4tT70v.js";import"./OutlinedInput-DF7uYzJm.js";import"./FormHelperText-CxIv3Am1.js";import"./FormControlLabel-CdBL0lN_.js";import"./Typography-C4HmXqwR.js";import"./Switch-Q5fXJ2Uu.js";import"./SwitchBase-AFFAmAWt.js";import"./Radio-C4YJulXy.js";import"./RadioGroup-DcY1quof.js";import"./FormGroup-BdAfT7sS.js";import"./Divider-CELaABvA.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Dz7hzDL9.js";import"./FormControl-C9VIskN5.js";import"./Autocomplete-ChZBcIKa.js";import"./Close-BzO8XwWJ.js";import"./usePreviousProps-Em2L3jzV.js";import"./Chip-CO4k7qnm.js";import"./ListSubheader-CGQi5MSF.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Vt=["_Async"];export{i as _Async,Vt as __namedExportsOrder,Nt as default};
