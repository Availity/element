import{j as p}from"./iframe-h0MgQYlb.js";import{i as n}from"./index-BIB_yAj3.js";import{Q as a}from"./suspense-CpR1qpqc.js";import{A as e}from"./AsyncAutocomplete-DwZY_ku1.js";import{Q as s}from"./queryClient-BwsxTrVf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C8MsvkTd.js";import"./___vite-browser-external_commonjs-proxy-BxG7ovk5.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-2Tj8ItVG.js";import"./useBaseQuery-CuUo-4cq.js";import"./Autocomplete-CRWzgWQU.js";import"./index-BHteuKbB.js";import"./index-BD61RVnX.js";import"./index-MVgG_W0q.js";import"./index-BfEcMr2H.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CJ2gQRBv.js";import"./memoTheme-XXgMlyY8.js";import"./styled-BqHoSPCQ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-_zAfcFR5.js";import"./IconButton-gyouzdWj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DGaEQWnN.js";import"./useTimeout-DZyw5ypU.js";import"./TransitionGroupContext-BQlZajXI.js";import"./useForkRef-CKNxtvC9.js";import"./useEventCallback-DzEyioes.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Ce_dbRGa.js";import"./Tooltip-cnLuDxtR.js";import"./useTheme-ipJVwYFq.js";import"./useSlot-DRVd6-GX.js";import"./mergeSlotProps-D1gF_ZlB.js";import"./useControlled-4IqYUsvs.js";import"./getReactElementRef-zdjSJbKU.js";import"./Portal-De7hiZQn.js";import"./utils-DputtVCR.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CeTvmasO.js";import"./Button-DFw25j8B.js";import"./index-DDm8yHLq.js";import"./Box-CawMSGjY.js";import"./Grid-BGvSYpEY.js";import"./isMuiElement-DHZpsMdk.js";import"./styled-ZbNx8Tx8.js";import"./Stack-B9I8dIEY.js";import"./Container-CVSHMzmU.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-ai4y9w6P.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CzHvh1jI.js";import"./Select-BHNpSFEz.js";import"./SelectFocusSourceContext-AoxeqCNi.js";import"./Popover-yoB3AMXB.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CQCB7Z3d.js";import"./debounce-Be36O1Ab.js";import"./Modal-Br_uJxcw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-KJ2tZ5Vr.js";import"./Fade-z7eIM_c6.js";import"./Paper-Bzbluycl.js";import"./List-DZrQ3uAf.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BnwFzQLv.js";import"./OutlinedInput-BuAc6qqn.js";import"./FormHelperText-AZVpt9j-.js";import"./FormControlLabel-a6mRqus2.js";import"./Typography-DKkmO78y.js";import"./Switch-CLZpABLm.js";import"./SwitchBase-Dtg29Sna.js";import"./Radio-CXfh_6OV.js";import"./RadioGroup-BlqwT0bO.js";import"./FormGroup-BOwHFNcU.js";import"./Divider-IpoUtaBO.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BJBK2rIy.js";import"./FormControl-BgnOztMe.js";import"./Autocomplete-gyCG8Jzl.js";import"./Close-BJS85dYf.js";import"./usePreviousProps-CF8o7k0V.js";import"./Chip-CY9iKWCV.js";import"./ListSubheader-Bzwe3T9v.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
