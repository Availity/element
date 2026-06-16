import{j as p}from"./iframe-DbrIJLQi.js";import{i as n}from"./index-eGgQknTF.js";import{Q as a}from"./suspense-DYwDfxsZ.js";import{A as e}from"./AsyncAutocomplete-BJ-LOlFH.js";import{Q as s}from"./queryClient-DR1I2pIh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DncEkrls.js";import"./___vite-browser-external_commonjs-proxy-DxbviS0p.js";import"./index-CfcGBtrm.js";import"./useInfiniteQuery-ER1xOzZF.js";import"./useBaseQuery-DOPph3p4.js";import"./Autocomplete-1j7SCmR5.js";import"./index-C6LAyptn.js";import"./index-D1fYhjb6.js";import"./index-CrcoPoGw.js";import"./index-BV8EXEzP.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DkLovEvc.js";import"./memoTheme-CYnUbeeS.js";import"./styled-7I1Qt9E3.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BviXD-l_.js";import"./Tooltip-Dj2v8eaN.js";import"./useTheme-DYW2Qal8.js";import"./useSlot-ucEwirIM.js";import"./mergeSlotProps-D6Q6z-MA.js";import"./useForkRef-xHQCOq-i.js";import"./useTimeout-0bEjAxlE.js";import"./useControlled-DZAExesg.js";import"./useEventCallback-GRDf_Mdq.js";import"./getReactElementRef-CTToKV8F.js";import"./Portal-CRDltpFP.js";import"./utils-C3QXpwtY.js";import"./TransitionGroupContext-bpHC9icU.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CHkbcgjp.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-FVSq3BNJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BHclRNV-.js";import"./CircularProgress-HcGcr7gk.js";import"./Button-CzxszAvI.js";import"./index-D9nQZvQo.js";import"./Box-ddZNUx2x.js";import"./Grid-D3_qV-Fz.js";import"./isMuiElement-2h_sD4kS.js";import"./styled-DMMrRL0j.js";import"./Stack-H1A63kiw.js";import"./Container-B1a9E6oy.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-D7bT6Btw.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CYWmgkgE.js";import"./Select-Cdrixiru.js";import"./SelectFocusSourceContext-BBesLkFm.js";import"./Popover-CoLBYFg2.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BYQRBRhP.js";import"./debounce-Be36O1Ab.js";import"./Modal-DerH6gqI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BxUsxFSD.js";import"./Fade-BisiffpU.js";import"./Paper-CCVHPuGA.js";import"./List-C1_gwHJu.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-GCeLsGHA.js";import"./OutlinedInput-BFe23H1n.js";import"./FormHelperText-BvP8g2iX.js";import"./FormControlLabel-WcjZ1yo1.js";import"./Typography-CJOV5VVW.js";import"./Switch-B5eAU5u-.js";import"./SwitchBase-D5XteesO.js";import"./Radio-DxcSoo58.js";import"./RadioGroup-ypRPCInm.js";import"./FormGroup-VuYgoRam.js";import"./Divider-BV6LSjrm.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Cxl4IXvA.js";import"./FormControl-CA9sRqVU.js";import"./Autocomplete-EkYNfxgS.js";import"./Close-BwrnJGzX.js";import"./usePreviousProps-HJc8a1EQ.js";import"./Chip-4KCJAjx2.js";import"./ListSubheader-B81h0n-Z.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
