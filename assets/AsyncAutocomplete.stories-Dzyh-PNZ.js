import{j as p}from"./iframe-DM2JG2Wv.js";import{i as n}from"./index-DUd7HCfU.js";import{Q as a}from"./suspense-BSjNsbtt.js";import{A as e}from"./AsyncAutocomplete-BzTcwm8o.js";import{Q as s}from"./queryClient-9q9sBIyj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dhw4AyUI.js";import"./___vite-browser-external_commonjs-proxy-Dtep4sfn.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-D1sFsx3E.js";import"./useBaseQuery-DewempDT.js";import"./Autocomplete-CDmCNniY.js";import"./index-Bn3VVfQY.js";import"./index-D0QEA918.js";import"./index-MVgG_W0q.js";import"./index-DV4r8BJd.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-C29JSttG.js";import"./memoTheme-BeNhxrAF.js";import"./styled-DsG-VtUm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DQYiNEqx.js";import"./IconButton-Bj7e_4ur.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-FpBSGXSw.js";import"./useTimeout-DDDxsICF.js";import"./TransitionGroupContext-BViK_5QW.js";import"./useForkRef--lBTfT4q.js";import"./useEventCallback-B8_sGVJg.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D7bBmSyx.js";import"./Tooltip-Ff-XGBQt.js";import"./useTheme-BIdTJdU8.js";import"./useSlot-CtcofBwJ.js";import"./mergeSlotProps-Dz0ZGrQB.js";import"./useControlled-4UyvroS3.js";import"./getReactElementRef-gsi1wQpy.js";import"./Portal-DFUf67sY.js";import"./utils-B1H1HspZ.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-6BpQXPqS.js";import"./Button-p88YkSSM.js";import"./index-Dro33RKh.js";import"./Box-Cqyd88nw.js";import"./Grid-CX1e7vz2.js";import"./isMuiElement-B6N371AV.js";import"./styled-Bf965zM_.js";import"./Stack-D8O8MXVX.js";import"./Container-I8b0yq_j.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DlqYcycJ.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BOyQprAg.js";import"./Select-CUSrbkCV.js";import"./SelectFocusSourceContext-DI2xIgZx.js";import"./Popover-LlYF3w6K.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-gJlJxAuh.js";import"./debounce-Be36O1Ab.js";import"./Modal-Bpysy-qr.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Ba2TkHwg.js";import"./Fade-Bb7aty5O.js";import"./Paper-D6rGRseY.js";import"./List-lGfDTeyH.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-CxStVnnE.js";import"./OutlinedInput-BVhxzUTD.js";import"./FormHelperText-DmHrS-f2.js";import"./FormControlLabel-CgZbLNmr.js";import"./Typography-Cb49bwUU.js";import"./Switch-Uj5KOIHe.js";import"./SwitchBase-DE3M2Edh.js";import"./Radio-BvqRFW_F.js";import"./RadioGroup-Dp4TasKT.js";import"./FormGroup-B-vHGHwY.js";import"./Divider-FKTpnAgL.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CkhBNCjB.js";import"./FormControl-DuDHVeRj.js";import"./Autocomplete-CIJqZwfa.js";import"./Close-BRUyXtrN.js";import"./usePreviousProps-oUe9pMkW.js";import"./Chip-uVuZu_aR.js";import"./ListSubheader-XMyweIZc.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
