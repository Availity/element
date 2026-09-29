import{j as p}from"./iframe-BdtdKmg8.js";import{i as n}from"./index-Bf-4EAkZ.js";import{Q as a}from"./suspense-oxP0Fd4R.js";import{A as e}from"./AsyncAutocomplete-Du0IncSK.js";import{Q as s}from"./queryClient-CT7JgZR0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D7kz3TOt.js";import"./___vite-browser-external_commonjs-proxy-ChFk25yN.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-h4tHALGV.js";import"./useBaseQuery-B87enZfa.js";import"./Autocomplete-C1htaV7G.js";import"./index-DDSSTqjp.js";import"./index-CLJf8Evv.js";import"./index-CrcoPoGw.js";import"./index-ByY3g0DH.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BHLlmPIG.js";import"./memoTheme-BSZO8tET.js";import"./styled-DYRRHVQd.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-sfs31Xg8.js";import"./IconButton-BGWMoxCC.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Bsasq48R.js";import"./useTimeout-BjzlLD0-.js";import"./TransitionGroupContext-DW5Ji1V0.js";import"./useForkRef-yU1gIY9t.js";import"./useEventCallback-CNW4hkob.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DKwr5YQe.js";import"./Tooltip-B7d6lYcI.js";import"./useTheme-BUr8GPQY.js";import"./useSlot-CQH1JnoL.js";import"./mergeSlotProps-D1CilINf.js";import"./useControlled-qDvReWFA.js";import"./getReactElementRef-BX57xPm_.js";import"./Portal-By3tqOUu.js";import"./utils-B5cCI6Rw.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CIppk9xm.js";import"./Button-DsRHMuVD.js";import"./index-y3OLnY3V.js";import"./Box-Bdbdbjz0.js";import"./Grid-BEc5hWlN.js";import"./isMuiElement-VRCGw5Z3.js";import"./styled-BACYX6V0.js";import"./Stack-DjOyHPuU.js";import"./Container-5HhabFZh.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-A8uoF4Ei.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-6mG5_X4U.js";import"./Select-BJ67YTJg.js";import"./SelectFocusSourceContext-BALdufV-.js";import"./Popover-D2QOeMg_.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BmhbC6HA.js";import"./debounce-Be36O1Ab.js";import"./Modal-r1fngEGv.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-cYgAzR7a.js";import"./Fade-C-oQ5huf.js";import"./Paper-BbHjqnIf.js";import"./List-kh9aNYzj.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-Bq4fCAzJ.js";import"./OutlinedInput-By841vvG.js";import"./FormHelperText-CjBh-oXE.js";import"./FormControlLabel-D9_T4UwB.js";import"./Typography-Ct1eVQia.js";import"./Switch-D7-Gaizw.js";import"./SwitchBase-t0UcAKA4.js";import"./Radio-CwDoUWcu.js";import"./RadioGroup-BPASCs_d.js";import"./FormGroup-Crs6dnJ1.js";import"./Divider-BFyzYRTs.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BQR4myeh.js";import"./FormControl-CLW-YwyF.js";import"./Autocomplete-CKBP0sXM.js";import"./Close-DNEOIFD-.js";import"./usePreviousProps-BROcA9vW.js";import"./Chip-BMEPbNMe.js";import"./ListSubheader-BjPSWZFa.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
