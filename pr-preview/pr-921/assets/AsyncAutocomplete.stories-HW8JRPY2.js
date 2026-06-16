import{j as p}from"./iframe-Cyg9aVcX.js";import{i as n}from"./index-BJLRp70o.js";import{Q as a}from"./suspense-DAEUWCYa.js";import{A as e}from"./AsyncAutocomplete-B9ZcpOa_.js";import{Q as s}from"./queryClient-ChOCnvEQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-jBj9nha1.js";import"./___vite-browser-external_commonjs-proxy-CZBD6-14.js";import"./index-CiELgXtT.js";import"./useInfiniteQuery-bGQWSM6D.js";import"./useBaseQuery-CQnJujWc.js";import"./Autocomplete-CDdTXlKi.js";import"./index-Z6WRBSFW.js";import"./index-CVel8P3L.js";import"./index-CrcoPoGw.js";import"./index-PRHxF3E5.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-yyAmYjGv.js";import"./memoTheme-jifZnr2J.js";import"./styled-Bd0VbO2U.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-h-exa6rv.js";import"./Tooltip-B872xQRW.js";import"./useTheme-CzQvHrc-.js";import"./useSlot-BxXD7OXK.js";import"./mergeSlotProps-cvNGDztE.js";import"./useForkRef-DU61cGWF.js";import"./useTimeout-D6StvTbU.js";import"./useControlled-LzVIFy4V.js";import"./useEventCallback-C8dig9Cp.js";import"./getReactElementRef-CtSLxyS5.js";import"./Portal-CbV_9_tw.js";import"./utils-B1U3sbvV.js";import"./TransitionGroupContext-Bf2CmkMl.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-D3SvR_Jp.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D_0lSByq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BvuHtZ4U.js";import"./CircularProgress-DgTEISy3.js";import"./Button-BmGuU9Jv.js";import"./index-DUYfXBKq.js";import"./Box-DlTv5Oab.js";import"./Grid-ss4buRXG.js";import"./isMuiElement-D3GE3m2r.js";import"./styled-JRnDCPkO.js";import"./Stack-BB9tt9ZR.js";import"./Container-6TunXfMs.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BGxiyC7J.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BUS69YTZ.js";import"./Select-IhPRkG6b.js";import"./SelectFocusSourceContext-C-S6pfu1.js";import"./Popover-DGII8wAD.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-N0Bp7CtQ.js";import"./debounce-Be36O1Ab.js";import"./Modal-BKoLjwX6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Dt1aobyE.js";import"./Fade-BlsC_kbX.js";import"./Paper-CQzqH1w0.js";import"./List-BhseiF0d.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-C4GbkCiK.js";import"./OutlinedInput-CwV_y8Kk.js";import"./FormHelperText-BEXj3jiV.js";import"./FormControlLabel-jOwSmfh2.js";import"./Typography-fPTXF0ua.js";import"./Switch-BNJ4GIvD.js";import"./SwitchBase-BLP-bgBx.js";import"./Radio-hpxBX7ZN.js";import"./RadioGroup-zueoi5PR.js";import"./FormGroup-CeG0nHdE.js";import"./Divider-BNMEa6zC.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-OGBRiM2i.js";import"./FormControl-wLZjahnK.js";import"./Autocomplete-hys7DZ23.js";import"./Close-kBPtxZgV.js";import"./usePreviousProps-vCjbHQR5.js";import"./Chip-9fTGJQ-S.js";import"./ListSubheader-CyqoiYkU.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
