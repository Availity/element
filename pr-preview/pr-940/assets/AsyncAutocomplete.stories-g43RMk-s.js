import{j as p}from"./iframe-CGrCKeT2.js";import{i as n}from"./index-C_5JhCMK.js";import{Q as a}from"./suspense-BFby4bIf.js";import{A as e}from"./AsyncAutocomplete-UyKJ--Ra.js";import{Q as s}from"./queryClient-ge80ZfFI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bjf7gb31.js";import"./___vite-browser-external_commonjs-proxy-DI21XlTg.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-CYa2uNKA.js";import"./useBaseQuery-s-e80H8T.js";import"./Autocomplete-CD6MRX-4.js";import"./index-DHuEgV_k.js";import"./index-6epKdSc3.js";import"./index-CrcoPoGw.js";import"./index-DKQlCnEq.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DmVwQJs6.js";import"./memoTheme-BqDMrUbz.js";import"./styled-CotFv3Dr.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DmvP-mEg.js";import"./IconButton-dlpyeDck.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B5P9vk86.js";import"./useTimeout-DnCoFfSV.js";import"./TransitionGroupContext-BBGMeol_.js";import"./useForkRef-BEtKOrY4.js";import"./useEventCallback-y36uneSW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BKyEW5Pk.js";import"./Tooltip-BDnPRKbu.js";import"./useTheme-4bOKZyvR.js";import"./useSlot-BZVhLUF7.js";import"./mergeSlotProps-Dfpv_trn.js";import"./useControlled-DCMdc5dP.js";import"./getReactElementRef-BNGPoDkJ.js";import"./Portal-BYKyeVye.js";import"./utils-BkMf-uLY.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DOUkeG0B.js";import"./Button-BHZdRtrg.js";import"./index-DolDcqHq.js";import"./Box-Bi1Xr4Gf.js";import"./Grid-CmaXE-H9.js";import"./isMuiElement-RR7Ftbg4.js";import"./styled-BjWfuHlM.js";import"./Stack-_oDMgEvk.js";import"./Container-CUb5VPVp.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Dm5e5Bpr.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DJsBJsMM.js";import"./Select-CTV8LpZw.js";import"./SelectFocusSourceContext-C01S2OkC.js";import"./Popover-BPPXiUal.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-DfxTDm-u.js";import"./debounce-Be36O1Ab.js";import"./Modal-DaH7TrRl.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CUGDXrbh.js";import"./Fade-CllAQl-L.js";import"./Paper-DOXN6uva.js";import"./List-y2FflAjw.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-DSkk_8Bd.js";import"./OutlinedInput-DfoKSt68.js";import"./FormHelperText-CzHZXYcR.js";import"./FormControlLabel-CLZnkdIQ.js";import"./Typography-Bir8nP2f.js";import"./Switch-RFJmoXGw.js";import"./SwitchBase-B4wWvBkW.js";import"./Radio-Dm4oDbtu.js";import"./RadioGroup-CjIXdSfJ.js";import"./FormGroup-A-2cfNzW.js";import"./Divider-DHaspIrJ.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Bug5Cm0t.js";import"./FormControl-Ba5nyVsP.js";import"./Autocomplete-CFgJtcfq.js";import"./Close-WOGKBFf9.js";import"./usePreviousProps-BUgHPhqG.js";import"./Chip-CurS7vqd.js";import"./ListSubheader-Dehat_Xl.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
