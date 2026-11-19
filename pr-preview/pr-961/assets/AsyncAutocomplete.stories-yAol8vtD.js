import{j as p}from"./iframe-7yTZJyI8.js";import{i as n}from"./index-e3xISyZQ.js";import{Q as a}from"./suspense-Bh2RuJJ8.js";import{A as e}from"./AsyncAutocomplete-CtOvOX0o.js";import{Q as s}from"./queryClient-COvBtDSr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-7SoByLum.js";import"./___vite-browser-external_commonjs-proxy-C8gZ9b-f.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-BEi_l5x-.js";import"./useBaseQuery-BYCxL4S2.js";import"./Autocomplete-KTRdfV67.js";import"./index-mo0xo_s1.js";import"./index-Fccp8F6-.js";import"./index-MVgG_W0q.js";import"./index-LWy-RhUk.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BfOELIkm.js";import"./memoTheme-CIMTQhyT.js";import"./styled-BMlFG2th.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BAPd2OJx.js";import"./IconButton-ffMIHdaJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DlKrHxyr.js";import"./useTimeout-DDTRmv4f.js";import"./TransitionGroupContext-BVN7PaEo.js";import"./useForkRef-CH4SD_Tq.js";import"./useEventCallback-B8agtspF.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CFzFWCR0.js";import"./Tooltip-BDwmcAHG.js";import"./useTheme-BQI76UIF.js";import"./useSlot-CCUJR_Dn.js";import"./mergeSlotProps-D3aTQwfn.js";import"./useControlled-C9ki-RMb.js";import"./getReactElementRef-BidH7fq7.js";import"./Portal-B1bcjcbG.js";import"./utils-C-JIMqUV.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-EhI9vhRh.js";import"./Button-BK3WQXmQ.js";import"./index-DoZlsXSq.js";import"./Box-BsPtR0uw.js";import"./Grid-CKHq_-iw.js";import"./isMuiElement-BI6Pjydy.js";import"./styled-Cs8_Hcz2.js";import"./Stack-CZJNS7pW.js";import"./Container-CJPQZB9X.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-I6OgSsZO.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-vZHxFS91.js";import"./Select-C8OaN8DB.js";import"./SelectFocusSourceContext-wLszAgBF.js";import"./Popover-DlQtJRWC.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-Bi6GFR8l.js";import"./debounce-Be36O1Ab.js";import"./Modal-CedBjRzI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Bj6XerGx.js";import"./Fade-DH1Krrsi.js";import"./Paper-DkH-Q5xC.js";import"./List-CRcTwWHL.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-D2n64X_N.js";import"./OutlinedInput-CpoiWSqJ.js";import"./FormHelperText-CWuIrZZ7.js";import"./FormControlLabel-B-Gj01lZ.js";import"./Typography-Bz3seEIw.js";import"./Switch-D80papWj.js";import"./SwitchBase-B3rR0Chu.js";import"./Radio-pAidvSGQ.js";import"./RadioGroup-DzGlsQkP.js";import"./FormGroup-B09RTSmM.js";import"./Divider-4AVVzlu6.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-C6TtCfy8.js";import"./FormControl-o6j7FVmD.js";import"./Autocomplete-BhzDQ9_h.js";import"./Close-DB3c58TO.js";import"./usePreviousProps-CIyZQqjU.js";import"./Chip-k_LCwSxr.js";import"./ListSubheader-Cg9335Di.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
