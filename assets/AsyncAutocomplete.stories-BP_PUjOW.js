import{j as p}from"./iframe-D1NCSytB.js";import{i as n}from"./index-DMXoL4NT.js";import{A as m}from"./AsyncAutocomplete-D5UlMbJs.js";import{Q as a}from"./suspense-D4yyJmkV.js";import{Q as s}from"./queryClient-mDycuygU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDT2XznO.js";import"./___vite-browser-external_commonjs-proxy-B_7I49U2.js";import"./index-D_jJce5O.js";import"./_toKey-jcx_TBNt.js";import"./Autocomplete-CX3CfhPC.js";import"./index-6gkZq86Y.js";import"./index-nWo2-Vbp.js";import"./index-BiBDMnSv.js";import"./index-BYdlpT-l.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-B4wc5_NU.js";import"./memoTheme-DOGX_B28.js";import"./styled-BbCZmQsA.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BPnk7Q5j.js";import"./Tooltip-C79jCpae.js";import"./useTheme-D3cMIjr1.js";import"./useSlot-D1NHtjkn.js";import"./mergeSlotProps-DlDajhlR.js";import"./useForkRef-BpGj9yaf.js";import"./useTimeout-Bh_i1JKi.js";import"./useControlled-Czfb1u9c.js";import"./useEventCallback-C8LcGziW.js";import"./getReactElementRef-D8NIfLKv.js";import"./Portal-DSDwhvGd.js";import"./utils-DI3cRngQ.js";import"./TransitionGroupContext-BkHkrwff.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-WTXiNqL0.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cqago1eB.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BAUCY_Oi.js";import"./CircularProgress-DKmuW22e.js";import"./Button-Dci9Exp7.js";import"./index-D9eAXuXP.js";import"./Box-Dk8U9NOX.js";import"./Grid-CLUwk8Cn.js";import"./styled-DdVDvF5f.js";import"./isMuiElement-DU2Yi2t-.js";import"./Stack-BQ77EqZr.js";import"./Container-CFpNJvgv.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Dky5iOJU.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BPWmZTOm.js";import"./Select-BFdMvHb_.js";import"./Menu-CXdeS85n.js";import"./Popover-2BPfyVKB.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-LIb7wZP9.js";import"./Modal-gZmGceMQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CXhAj7P7.js";import"./Fade-D-LTijLB.js";import"./Paper-CBE46eXP.js";import"./List-BopVit6a.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BJL25Yge.js";import"./OutlinedInput-mW4xZACZ.js";import"./FormHelperText-00W-iRAK.js";import"./FormControlLabel-DJJ3tTv9.js";import"./Typography-BWjvtf8i.js";import"./Switch-CAzDGHeO.js";import"./SwitchBase-DGBYhJIH.js";import"./RadioGroup-DYU7D_Ot.js";import"./Radio-iQ3dsbb4.js";import"./FormGroup-C3gH0vq5.js";import"./Divider-BuOS6m7g.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-BBzuMPU5.js";import"./FormControl-aaJETRc2.js";import"./Autocomplete-P1pEHhRF.js";import"./Close-BqXB_R2P.js";import"./usePreviousProps-DGiv6Kxt.js";import"./Chip-CXbCJtI2.js";import"./ListSubheader-DL-HZPS0.js";import"./useInfiniteQuery-NcEXgbUU.js";import"./useBaseQuery-DoDL_-QN.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
