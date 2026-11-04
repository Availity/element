import{j as p}from"./iframe-La0hozmm.js";import{i as n}from"./index-y8X2dNNL.js";import{Q as a}from"./suspense-CKiPZMHe.js";import{A as e}from"./AsyncAutocomplete-CPf7S9F4.js";import{Q as s}from"./queryClient-1i1OxbRg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ClM2XKlh.js";import"./___vite-browser-external_commonjs-proxy-D0Oqq-kF.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-Dn-cppbN.js";import"./useBaseQuery-DVV5wzPU.js";import"./Autocomplete-D_FLnxxg.js";import"./index-1KAY_LF_.js";import"./index-L9cyz4q_.js";import"./index-MVgG_W0q.js";import"./index-D89vBAiO.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BIfisKmW.js";import"./memoTheme-CzcgztNR.js";import"./styled-06PLk0qx.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CT5mpeGo.js";import"./IconButton-BEf7IA6l.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-RNjBI3PY.js";import"./useTimeout-CjP9kdgI.js";import"./TransitionGroupContext-Db3Z6NMb.js";import"./useForkRef-CYgSXLxN.js";import"./useEventCallback-CkMNQS0_.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DKXLIFka.js";import"./Tooltip-DDgYhS1x.js";import"./useTheme-D5kgDNuB.js";import"./useSlot-nKi4u3tI.js";import"./mergeSlotProps-CfiUOF2K.js";import"./useControlled-DV2EMPBp.js";import"./getReactElementRef-TIeMXNsW.js";import"./Portal-QPUTbchU.js";import"./utils-C_Yf081A.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-o4xrbGrj.js";import"./Button-x0oW_Zme.js";import"./index-eHZf6pHN.js";import"./Box-B4jhZySH.js";import"./Grid-DTxUT0NX.js";import"./isMuiElement-VxhL7QTS.js";import"./styled-99JPjMFe.js";import"./Stack-COfd3H0w.js";import"./Container-Bl6cg8Xd.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-YrmrWU_k.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-ClnyVQ0Y.js";import"./Select-DTVzxWrU.js";import"./SelectFocusSourceContext-BppuX2PY.js";import"./Popover-CV1jitSE.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BDDINM1D.js";import"./debounce-Be36O1Ab.js";import"./Modal-lk5DA8tl.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BHVJATGi.js";import"./Fade-DsXUXhXd.js";import"./Paper-BvBPQPSI.js";import"./List-B0CpRJrl.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-CogVIOis.js";import"./OutlinedInput-CTfBg3Vp.js";import"./FormHelperText-Bk8ZiDzG.js";import"./FormControlLabel-BuAbVyu2.js";import"./Typography-F8uVoBR9.js";import"./Switch-Dn7ksyeq.js";import"./SwitchBase-BXj3k-eu.js";import"./Radio-DrT8Tsp3.js";import"./RadioGroup-B9XhnsTM.js";import"./FormGroup-BFP8PGgB.js";import"./Divider-BdcGsQEp.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DMxnzIC0.js";import"./FormControl-CgcW0UT-.js";import"./Autocomplete-DdQ4cYwF.js";import"./Close-B_nlfjmT.js";import"./usePreviousProps-Do1ETvCM.js";import"./Chip-D-eOanK1.js";import"./ListSubheader-UKGTyzSS.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
