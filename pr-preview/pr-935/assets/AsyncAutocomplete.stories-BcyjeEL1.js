import{j as p}from"./iframe-CWY3iD4k.js";import{i as n}from"./index-ChpPGdwe.js";import{Q as a}from"./suspense-EgoRPU0Z.js";import{A as e}from"./AsyncAutocomplete-BNbY8rDi.js";import{Q as s}from"./queryClient-DtbTXTdO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DMZHGelP.js";import"./___vite-browser-external_commonjs-proxy-CLqNAulC.js";import"./index-2SzxyhSV.js";import"./useInfiniteQuery-Cs7e6ZSK.js";import"./useBaseQuery-BV3OZePV.js";import"./Autocomplete-CWOFc5CH.js";import"./index-CsrKYWWK.js";import"./index-DsnzGN7g.js";import"./index-CrcoPoGw.js";import"./index-BzSYwNd-.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DKNFXPcY.js";import"./memoTheme-DrmgfhiZ.js";import"./styled-CIfQzxdD.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CFwKy-vk.js";import"./IconButton-CKcF2qnA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BVW6-IPM.js";import"./useTimeout-8ubSeoYI.js";import"./TransitionGroupContext-BKIhkECl.js";import"./useForkRef-DtxHKGyT.js";import"./useEventCallback-DHih-p6k.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dd-jZUAB.js";import"./Tooltip-B3bZKYVT.js";import"./useTheme-BBG77Eif.js";import"./useSlot-jGeM5BDq.js";import"./mergeSlotProps-DYpSnyrH.js";import"./useControlled-CIbXyyiC.js";import"./getReactElementRef-DgEYPRe_.js";import"./Portal-GTIXf_ni.js";import"./utils-uPZOnv02.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DqKnkovT.js";import"./Button-CdHEuVuq.js";import"./index-CH36QgIT.js";import"./Box-W_K2m7mS.js";import"./Grid-Dpddp4dd.js";import"./isMuiElement-CITzrPa4.js";import"./styled-DiOSWYDP.js";import"./Stack-CDV8c2Ym.js";import"./Container-O7CLblpO.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Z07liIv_.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-wbjgmvhY.js";import"./Select-DVpJrfTw.js";import"./SelectFocusSourceContext-C5AxKvUw.js";import"./Popover-Fhuog7vE.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CH3-0yIT.js";import"./debounce-Be36O1Ab.js";import"./Modal-BW2dyGsc.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CXYVCyew.js";import"./Fade-DPNQjbRR.js";import"./Paper-dLVuKHPb.js";import"./List-2Vo6P9AC.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-DumzlQmL.js";import"./OutlinedInput-DdNeAm6I.js";import"./FormHelperText-DrighLwE.js";import"./FormControlLabel-BTjj02X-.js";import"./Typography-DdnCOrzM.js";import"./Switch-XAbrm4Bm.js";import"./SwitchBase-LkmlHlRJ.js";import"./Radio-D1gt4lAJ.js";import"./RadioGroup-DJo27srd.js";import"./FormGroup-CwKuENeS.js";import"./Divider-dym_m635.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-C0h0Nbky.js";import"./FormControl-C272fr_E.js";import"./Autocomplete-BYaci_IH.js";import"./Close-Be9fCZVr.js";import"./usePreviousProps-DDobeo2Z.js";import"./Chip-kPc5s1ff.js";import"./ListSubheader-9tE9Fdsz.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
