import{j as p}from"./iframe-Dc8rhMFy.js";import{i as n}from"./index-CVAcvEgZ.js";import{Q as a}from"./suspense-CyoahKL7.js";import{A as e}from"./AsyncAutocomplete-BvqlIfDh.js";import{Q as s}from"./queryClient-xlGhNMxi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-zYdcEWB1.js";import"./___vite-browser-external_commonjs-proxy-BalxyFdc.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-P-4lyog-.js";import"./useBaseQuery-hNTibl36.js";import"./Autocomplete-VS5wEp7v.js";import"./index-ygDng6Wy.js";import"./index-BpsJpJfp.js";import"./index-MVgG_W0q.js";import"./index-DY0QHs1w.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BxrpqK7J.js";import"./memoTheme-S-5nuklg.js";import"./styled-BGT3xm4Q.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Dd1sCRm8.js";import"./IconButton-CeH7M-cn.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CqO9c84b.js";import"./useTimeout-CrdWGjXP.js";import"./TransitionGroupContext-BFqd1JBl.js";import"./useForkRef-udrkS_SI.js";import"./useEventCallback-BaT-rbGb.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-FGVI2lRz.js";import"./Tooltip-y8JW-hsI.js";import"./useTheme-CAn2KvKi.js";import"./useSlot-3a7eddsl.js";import"./mergeSlotProps-kSQUyWpp.js";import"./useControlled-g2ws-rib.js";import"./getReactElementRef-Dso64NKM.js";import"./Portal-jMetYcmF.js";import"./utils-D7u3O4jf.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Bnd3aa5q.js";import"./Button-D07KqWD2.js";import"./index-5t25iiun.js";import"./Box-BeA7Astr.js";import"./Grid-CK3PRshc.js";import"./isMuiElement-DClEETsS.js";import"./styled-Bni-voJ-.js";import"./Stack-CFoc2Kye.js";import"./Container-B259nuZR.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CJhShZK7.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Dv8J8Q0P.js";import"./Select-D5ShPJUX.js";import"./SelectFocusSourceContext-DAmy3Y7c.js";import"./Popover-CGrtCsPR.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CnvQftF1.js";import"./debounce-Be36O1Ab.js";import"./Modal-Ch87VQcB.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-fXAkdBb0.js";import"./Fade-DOAN5MWn.js";import"./Paper-CSAWm734.js";import"./List-CCvWDakc.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-CArSjKuJ.js";import"./OutlinedInput-OICLv0Nd.js";import"./FormHelperText-0GbrumB_.js";import"./FormControlLabel-DPQCCqsQ.js";import"./Typography-B_IwZxWJ.js";import"./Switch-fiWFufRn.js";import"./SwitchBase-CND8MRdP.js";import"./Radio-DzKMm59G.js";import"./RadioGroup-BCR1LXCh.js";import"./FormGroup-FLJ02UL5.js";import"./Divider-OGNQ4sKt.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DVHg-shP.js";import"./FormControl-CX0NonDn.js";import"./Autocomplete-CXia26B0.js";import"./Close-C-Uwrjhi.js";import"./usePreviousProps-D3IuWV4s.js";import"./Chip-CsfQRKA3.js";import"./ListSubheader-CMVZEj66.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
