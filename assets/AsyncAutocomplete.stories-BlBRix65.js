import{j as p}from"./iframe-Cwe65xm_.js";import{i as n}from"./index-CCWtWTEb.js";import{Q as a}from"./suspense-BTBYQ-a5.js";import{A as e}from"./AsyncAutocomplete-B1uCRoU9.js";import{Q as s}from"./queryClient-P_CWi0P_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BhplCRAi.js";import"./___vite-browser-external_commonjs-proxy-DEtnVKx2.js";import"./index-po9FdVlG.js";import"./useInfiniteQuery-Dxii0Fix.js";import"./useBaseQuery-CL9oKK4G.js";import"./Autocomplete-B6ZoXouc.js";import"./index-B18st6EO.js";import"./index-CPjIJxsx.js";import"./index-CrcoPoGw.js";import"./index-Dwd1T5KI.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DVcTXB35.js";import"./memoTheme-JTO0J2AE.js";import"./styled-DQU8Bodb.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-B70TfKNL.js";import"./Tooltip-DXMour_H.js";import"./useTheme-ClD_legM.js";import"./useSlot-DT6vlKow.js";import"./mergeSlotProps-DptD_Py-.js";import"./useForkRef-B3dE_Xi9.js";import"./useTimeout-B979BKpc.js";import"./useControlled-B5htf0na.js";import"./useEventCallback-Cus8kDUU.js";import"./getReactElementRef-BO3eeWP1.js";import"./Portal-MprWoh0y.js";import"./utils-E62tsqSg.js";import"./TransitionGroupContext-DfpprYK4.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CHdu95RH.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CLwVH8iN.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B2MrdNo3.js";import"./CircularProgress-Gl2vZfvX.js";import"./Button-BPlwCXwF.js";import"./index-GEX0zvPr.js";import"./Box-DUWM_zX0.js";import"./Grid-XXlh0rR0.js";import"./isMuiElement-CFlSzKZl.js";import"./styled-Drm9UKpq.js";import"./Stack-CRAKFpNP.js";import"./Container-Bu5eEzkf.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CoNS-ZSY.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BhG-OBsq.js";import"./Select-Bee2J2VA.js";import"./SelectFocusSourceContext-8cwNuwWa.js";import"./Popover-BqjsgymF.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-DKtwpG52.js";import"./debounce-Be36O1Ab.js";import"./Modal-DXesMzil.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BuJJs5yg.js";import"./Fade-DVmn_b9B.js";import"./Paper-BllScWLN.js";import"./List-CdxcmJFC.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BCdDg_61.js";import"./OutlinedInput-CVtI0giW.js";import"./FormHelperText-CcTnWzja.js";import"./FormControlLabel-pIK1R6xI.js";import"./Typography-CwzEaEbc.js";import"./Switch-COmW8gnw.js";import"./SwitchBase-vEUtDMIo.js";import"./Radio-B-ELdh2p.js";import"./RadioGroup-7oQM0Exi.js";import"./FormGroup-bSlB8GHJ.js";import"./Divider-DdiTjDHI.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-B51YWxUA.js";import"./FormControl-DZK54C7D.js";import"./Autocomplete-BcrsvKWC.js";import"./Close-CDWcnhUE.js";import"./usePreviousProps-DmkwnLiy.js";import"./Chip-DQogad8n.js";import"./ListSubheader-B8_fT4ca.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
