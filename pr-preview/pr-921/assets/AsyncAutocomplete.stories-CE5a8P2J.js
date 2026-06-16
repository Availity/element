import{j as p}from"./iframe-D__S4UWJ.js";import{i as n}from"./index-C4VUnf3P.js";import{Q as a}from"./suspense-BQU9mLju.js";import{A as e}from"./AsyncAutocomplete-CZoSTMtX.js";import{Q as s}from"./queryClient-D2jtdr_V.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CBSryq4n.js";import"./___vite-browser-external_commonjs-proxy-Cq4iaMOo.js";import"./index-Cr0Duiqm.js";import"./useInfiniteQuery-CG2MIMFr.js";import"./useBaseQuery-Cg-foJU7.js";import"./Autocomplete-Dgm6T-fZ.js";import"./index-CeHxfvJr.js";import"./index-Ba9958WM.js";import"./index-CrcoPoGw.js";import"./index-DhycCYh-.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-XbFZbbsX.js";import"./memoTheme-BV959hj8.js";import"./styled-D9hsOvpf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CSzUZNdV.js";import"./Tooltip-CiiYXVhS.js";import"./useTheme-CFaiP_LB.js";import"./useSlot-O8ollNDw.js";import"./mergeSlotProps-D3BIdMsf.js";import"./useForkRef-BqPQmHw4.js";import"./useTimeout-92omNL17.js";import"./useControlled-jwoPGZ3a.js";import"./useEventCallback-DJS3GGm_.js";import"./getReactElementRef-CXYGkVyS.js";import"./Portal-DQUO7uTD.js";import"./utils-qh6k9bbM.js";import"./TransitionGroupContext-y7HMp-IG.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BwqG8d0v.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CNhmLG-N.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Ci_mfbwX.js";import"./CircularProgress-haj7VCd3.js";import"./Button-CFqvl5Id.js";import"./index-DMk5qu1-.js";import"./Box-BOn3j62W.js";import"./Grid-BBYwbGJ2.js";import"./isMuiElement-BbpHSvRS.js";import"./styled-Bi8w4HDu.js";import"./Stack-CGHwgn-1.js";import"./Container-B4RgbXyO.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DogfPA3j.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BV3eLlPL.js";import"./Select-75QAeKH4.js";import"./SelectFocusSourceContext-Sxgzlu4M.js";import"./Popover-BxV2QR5y.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CgsjCMz0.js";import"./debounce-Be36O1Ab.js";import"./Modal-B4jLPaJ1.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-B_zkZsEU.js";import"./Fade-BYuTC5N7.js";import"./Paper-Cbe2-SWa.js";import"./List-BzNi2ci2.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-CjZPmBcj.js";import"./OutlinedInput-C35dVeS9.js";import"./FormHelperText-C5TKqXw1.js";import"./FormControlLabel-DOCoDnNz.js";import"./Typography-jktlZrXz.js";import"./Switch-CtmyTchu.js";import"./SwitchBase-D1Cjv_3W.js";import"./Radio-Btfwlgcu.js";import"./RadioGroup-DzVI_j6e.js";import"./FormGroup-DqGHfD-7.js";import"./Divider--uBwDw0n.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Bez7Rfvx.js";import"./FormControl-DNyL8KHk.js";import"./Autocomplete-CDKDXUFQ.js";import"./Close-j7BAIMlS.js";import"./usePreviousProps-DfqR5CJc.js";import"./Chip-sq8E6cbD.js";import"./ListSubheader-BMdVCTLk.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
