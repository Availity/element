import{j as p}from"./iframe-DNfpO8Rq.js";import{i as n}from"./index-DHVDfHlf.js";import{A as m}from"./AsyncAutocomplete-sOxaP4_P.js";import{Q as a}from"./suspense-BsuuM58j.js";import{Q as s}from"./queryClient-BNwAqZk-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DZbn_7Ge.js";import"./___vite-browser-external_commonjs-proxy-Bw8sMFhz.js";import"./index-3w9JKd-b.js";import"./_toKey-BGyEGFDq.js";import"./Autocomplete-DS13aC7h.js";import"./index-C5p9Opwp.js";import"./index-BBViSpLj.js";import"./index-BiBDMnSv.js";import"./index-BcmMVDWe.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-wfbC-1tw.js";import"./memoTheme-B-zz_BUk.js";import"./styled-Sw3aRR2D.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DN_R5H2f.js";import"./Tooltip-B3COV0pN.js";import"./useTheme-ChvAJH3t.js";import"./useSlot-C-w8GshL.js";import"./mergeSlotProps-D2aT8sWY.js";import"./useForkRef-BEoZ4oWN.js";import"./useTimeout-DYZny39l.js";import"./useControlled-C3q2PKrI.js";import"./useEventCallback-Cty6Llwj.js";import"./getReactElementRef-CLhxke3N.js";import"./Portal-r7W1nGba.js";import"./utils-SDoQ5BJm.js";import"./TransitionGroupContext-BRbpeLOF.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DDNYhqkV.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-ERuDSHkW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CF5Cip_l.js";import"./CircularProgress-BsdZW6N9.js";import"./Button-UPAXXDe3.js";import"./index-ClTf_1DV.js";import"./Box-BG966X3W.js";import"./Grid-Cny3WeXp.js";import"./styled-u8_9JzuP.js";import"./isMuiElement-DJ9IZ7LZ.js";import"./Stack-BjTTdI7a.js";import"./Container-DLf6AVaH.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DZJIxUfx.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CXy51Z7B.js";import"./Select-Caz7ouzi.js";import"./Menu-GNxT5KIL.js";import"./Popover-DAUaJ4uf.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-Dw6FooMH.js";import"./Modal-3xVicKkn.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-ByspIO9w.js";import"./Fade-D6YTpiOd.js";import"./Paper-nKCUTTwg.js";import"./List-PCdh5O9l.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-COwWNPU9.js";import"./OutlinedInput-CxWcWAhd.js";import"./FormHelperText-D1EIcDeZ.js";import"./FormControlLabel-CZU8p7Kf.js";import"./Typography-bSWIGKwV.js";import"./Switch-lgncHCaL.js";import"./SwitchBase-BqCmHlNC.js";import"./RadioGroup-DpVTqJPi.js";import"./Radio-DPh56O4W.js";import"./FormGroup-DWO4b4yr.js";import"./Divider-lxDB-kkB.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-D6MJbsVS.js";import"./FormControl-BUQr9Gsk.js";import"./Autocomplete-6jDUDbHN.js";import"./Close-BiIjkOqf.js";import"./usePreviousProps-BihNhSuW.js";import"./Chip-DTl9OdL_.js";import"./ListSubheader-DM3etKHn.js";import"./useInfiniteQuery-Dfcn9sIx.js";import"./useBaseQuery-BbeKXxcr.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
