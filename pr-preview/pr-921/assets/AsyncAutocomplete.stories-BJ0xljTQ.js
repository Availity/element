import{j as p}from"./iframe-C9_PxSGQ.js";import{i as n}from"./index-DD4KIobM.js";import{Q as a}from"./suspense-DqW36k_m.js";import{A as e}from"./AsyncAutocomplete-BNnd675J.js";import{Q as s}from"./queryClient-amPvOwks.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ckji6gEQ.js";import"./___vite-browser-external_commonjs-proxy-BxZYR8lA.js";import"./index-B9N7h3aW.js";import"./useInfiniteQuery-DtRX2tTx.js";import"./useBaseQuery-B2e3HEHA.js";import"./Autocomplete-BWbbu_qF.js";import"./index-DYt7HrLH.js";import"./index-CE6aNSs8.js";import"./index-CrcoPoGw.js";import"./index-Ddg0Heb3.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-FGOQRPT3.js";import"./memoTheme-BxvcW3UF.js";import"./styled-B-vqXkzy.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-ButV5MJr.js";import"./Tooltip-FRBJUwm-.js";import"./useTheme-BHbpGC30.js";import"./useSlot-B-bGbgrQ.js";import"./mergeSlotProps-DQ8_Kw8O.js";import"./useForkRef-CmIALVnC.js";import"./useTimeout-BMn8x6pQ.js";import"./useControlled-BGxEnoNZ.js";import"./useEventCallback-DieoYw-U.js";import"./getReactElementRef-on-DwLqm.js";import"./Portal-Ct4gHjrk.js";import"./utils-8dHd4F9E.js";import"./TransitionGroupContext-BZ4pLHPO.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BDX3RUX-.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BjLNslZW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-k4M9aDLt.js";import"./CircularProgress-vDDdOi_d.js";import"./Button-DtK3QmjS.js";import"./index-Cwp1bTGK.js";import"./Box-DwMYriWl.js";import"./Grid-AdyG_hrd.js";import"./isMuiElement-BE5icW1i.js";import"./styled-v5MGqYmj.js";import"./Stack-BEdSkyO_.js";import"./Container-DSjJo15B.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BeY29v7P.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CpMC7EHx.js";import"./Select-DcupVlEN.js";import"./SelectFocusSourceContext-Fw-FsAu5.js";import"./Popover-Dc2RDNtf.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BJFY07Zq.js";import"./debounce-Be36O1Ab.js";import"./Modal-CUp8vkO1.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-5mRpAKll.js";import"./Fade-BLrbHvJ9.js";import"./Paper-DGceIsLw.js";import"./List-DWo7-1hB.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-DoDU4gSx.js";import"./OutlinedInput-BZW58KdM.js";import"./FormHelperText-CQ0DNzl4.js";import"./FormControlLabel-DQ-Rgi5d.js";import"./Typography-B7ymJCK8.js";import"./Switch-C9aFTenp.js";import"./SwitchBase-CbZ2kkmp.js";import"./Radio-DCg2Gj6y.js";import"./RadioGroup-DJuShQt6.js";import"./FormGroup-mRbk2rO2.js";import"./Divider-BU7503P_.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CdzSC_MY.js";import"./FormControl-DXuwkCpR.js";import"./Autocomplete-BElT9pxC.js";import"./Close-B3zopXB2.js";import"./usePreviousProps-Cxfl0I4R.js";import"./Chip-C_WVf5kH.js";import"./ListSubheader-BHz4HoZ7.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
