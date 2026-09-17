import{j as p}from"./iframe-DTy-Hi1D.js";import{i as n}from"./index-CsKsuRu9.js";import{Q as a}from"./suspense-BF7yCdeh.js";import{A as e}from"./AsyncAutocomplete-BIheIhkx.js";import{Q as s}from"./queryClient-HA34lCYp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-2vGFGfAT.js";import"./___vite-browser-external_commonjs-proxy-D_SPfJw6.js";import"./index-BAAVGDDZ.js";import"./useInfiniteQuery-CwyPxo4M.js";import"./useBaseQuery-BO-qonfg.js";import"./Autocomplete-D1CQ60uh.js";import"./index-CbCbTI1D.js";import"./index-BW2CNFKP.js";import"./index-CrcoPoGw.js";import"./index-DJUckNHv.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-3YRNiFr2.js";import"./memoTheme-BG1xBytH.js";import"./styled-aP0uaM-i.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BWwQVXX2.js";import"./IconButton-CZkpNN92.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DQHg31rx.js";import"./useTimeout-Dox0L-0x.js";import"./TransitionGroupContext-vVRi092a.js";import"./useForkRef-Cs-hla5u.js";import"./useEventCallback-wWQn7yuE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dsur0AFP.js";import"./Tooltip-DHFGNIkU.js";import"./useTheme-D2uWiRt2.js";import"./useSlot-Bv56ZHL8.js";import"./mergeSlotProps-DbXyWffN.js";import"./useControlled-DJ-ZRmZ2.js";import"./getReactElementRef-Czal8mnO.js";import"./Portal-BwzhUyNs.js";import"./utils-UH3J-pbT.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-i2bvpF4l.js";import"./Button-BSzYbaIQ.js";import"./index-zuOxgOiJ.js";import"./Box-BiTKfYdJ.js";import"./Grid-9G99kq7Q.js";import"./isMuiElement-BqP85GjQ.js";import"./styled-CiCMHiUo.js";import"./Stack-D5xuPFAT.js";import"./Container-CKdO9iiE.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BhJzQqzw.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BecUCFWL.js";import"./Select-DkS3VRNH.js";import"./SelectFocusSourceContext-B0GTmmdc.js";import"./Popover-pG0yFIDd.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BWinZWd0.js";import"./debounce-Be36O1Ab.js";import"./Modal-C1xsDPMc.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-7k1loi6N.js";import"./Fade-CkUvZM_R.js";import"./Paper-BB7D87hg.js";import"./List-CK8mYBos.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-Bsd6X5Qz.js";import"./OutlinedInput-BsxOEMJo.js";import"./FormHelperText-BqXE1i86.js";import"./FormControlLabel-DU0Bs6VA.js";import"./Typography-BE1U26X8.js";import"./Switch-CQO10KB0.js";import"./SwitchBase-B6HLL3af.js";import"./Radio-CT0ik4u9.js";import"./RadioGroup-DhRVjKyW.js";import"./FormGroup-DeHCopE_.js";import"./Divider-dXGoqsdo.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-B-TIor5a.js";import"./FormControl-DauWaPA-.js";import"./Autocomplete-VntltSrE.js";import"./Close-CdcIqPzl.js";import"./usePreviousProps-CB3N8KU_.js";import"./Chip-DXnIQAds.js";import"./ListSubheader-CSgrIN2Z.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
