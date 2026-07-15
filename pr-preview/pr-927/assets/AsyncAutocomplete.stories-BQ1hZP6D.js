import{j as p}from"./iframe-DDeFjhwT.js";import{i as n}from"./index-COGxDCcE.js";import{Q as a}from"./suspense-Ck_m44xn.js";import{A as e}from"./AsyncAutocomplete-Ckicbm8Q.js";import{Q as s}from"./queryClient-YNPA8bLN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CG12tBum.js";import"./___vite-browser-external_commonjs-proxy-CLxyROCc.js";import"./index-DbhJCPhL.js";import"./useInfiniteQuery-BdYA0gdL.js";import"./useBaseQuery-DiCsLTfM.js";import"./Autocomplete-DvPEVTCY.js";import"./index-CJHB4Wq3.js";import"./index-BaZRRpT9.js";import"./index-CrcoPoGw.js";import"./index-V6LxtqOC.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DRz9ijBU.js";import"./memoTheme-BKUl2Kw8.js";import"./styled-PQjfDOgQ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CSwp3I03.js";import"./Tooltip-5o6beSBH.js";import"./useTheme-KKOLTJXa.js";import"./useSlot-SzvoDGen.js";import"./mergeSlotProps-BPESDwW9.js";import"./useForkRef-DgKt8E30.js";import"./useTimeout-Cm2RyAAI.js";import"./useControlled-BH5VVnvv.js";import"./useEventCallback-tCUa2-C3.js";import"./getReactElementRef-BeHDg4ji.js";import"./Portal-BqacPdFW.js";import"./utils-DshWixdw.js";import"./TransitionGroupContext-DKXhXx0i.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-B4bgTElG.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CurJhF0D.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D-CcOUqB.js";import"./CircularProgress-DZuzO0Uv.js";import"./Button-su8UM5h8.js";import"./index-oWqJ9z6g.js";import"./Box-ClrgcKqA.js";import"./Grid-DkuRXmB0.js";import"./isMuiElement-C8BOTMMK.js";import"./styled-B5nfTXUF.js";import"./Stack-D5p-aU6z.js";import"./Container-BKOvC3qE.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DwKt04Fe.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-eu10Xp36.js";import"./Select-hUhZUIoR.js";import"./SelectFocusSourceContext-CquKgtEw.js";import"./Popover-DktFq9tj.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CjAnYkZH.js";import"./debounce-Be36O1Ab.js";import"./Modal-BpltTEbA.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BGCVqILM.js";import"./Fade-klYlUMvL.js";import"./Paper-igPbegtl.js";import"./List-nMnQx56C.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BxZGQxhE.js";import"./OutlinedInput-ZBGK4L-L.js";import"./FormHelperText-C0of87GE.js";import"./FormControlLabel-Ji9c007o.js";import"./Typography-Be3kmzes.js";import"./Switch-B4_H_B2f.js";import"./SwitchBase-DR9e1Vdv.js";import"./Radio-CNcgpL5h.js";import"./RadioGroup-BxaV2sVI.js";import"./FormGroup-DtvKduvm.js";import"./Divider-C-2m7oZQ.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DFgDQXLQ.js";import"./FormControl-CYQG91-S.js";import"./Autocomplete-C5VTaTeh.js";import"./Close-CjaMKFHv.js";import"./usePreviousProps-CazvrnrZ.js";import"./Chip-B8bwpMQp.js";import"./ListSubheader-CKsm33Ps.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
