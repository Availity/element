import{j as p}from"./iframe-DxDqWgB3.js";import{i as n}from"./index-DNJz3ILC.js";import{Q as a}from"./suspense-9NuidOnd.js";import{A as e}from"./AsyncAutocomplete-DqA9efsf.js";import{Q as s}from"./queryClient-HqMYM8ct.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BkhnDdeT.js";import"./___vite-browser-external_commonjs-proxy-DfgmlVcb.js";import"./index-B5eWFWMd.js";import"./useInfiniteQuery-BN3MJDR0.js";import"./useBaseQuery-CmzvMnxr.js";import"./Autocomplete-Beuo7Chq.js";import"./index-BnoM5WX3.js";import"./index-C12PZec_.js";import"./index-CrcoPoGw.js";import"./index-CA8wTNp_.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DuolYAV0.js";import"./memoTheme-CW08UaDq.js";import"./styled-C-u4rj0B.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CE_ZDuuA.js";import"./Tooltip-CU2nv3Au.js";import"./useTheme-CKON97k_.js";import"./useSlot-DhabbitO.js";import"./mergeSlotProps-CkntHcZx.js";import"./useForkRef-DI5ILbHc.js";import"./useTimeout-Cg12-pSn.js";import"./useControlled-BtuGr2vc.js";import"./useEventCallback-BAtRlhKU.js";import"./getReactElementRef-8K8_YwXV.js";import"./Portal-BC-tKqvb.js";import"./utils-C0firkgU.js";import"./TransitionGroupContext-DQeLAkDQ.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C80LEsEt.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Bq1g08rd.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Cv_OxEAB.js";import"./CircularProgress-X93LMWzE.js";import"./Button-Cfa_uJOq.js";import"./index-Dz-uzYEo.js";import"./Box-aFyRrUOd.js";import"./Grid-B6GnwMzX.js";import"./isMuiElement-Mzgb52Ql.js";import"./styled-CRQ2ZGB4.js";import"./Stack-pOcYjPv5.js";import"./Container-BXfLwVnI.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BCXj-Ezv.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-s6qjM2X3.js";import"./Select-Cqayly8p.js";import"./SelectFocusSourceContext-IuLaNH-W.js";import"./Popover-ChYq-J8R.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BDEDV9VX.js";import"./debounce-Be36O1Ab.js";import"./Modal-DWjx2hRe.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-COfvuY5V.js";import"./Fade-CrNSUCom.js";import"./Paper-07-bvRG5.js";import"./List-D2CsPysG.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-DYs5Y6Jm.js";import"./OutlinedInput-lQiM0HOI.js";import"./FormHelperText-BTWiYLzM.js";import"./FormControlLabel-C7NGeSpD.js";import"./Typography-C89Ggk5t.js";import"./Switch-CCHmmAjq.js";import"./SwitchBase-D3CCA6Bi.js";import"./Radio-9NIMnnwm.js";import"./RadioGroup-Czt-QDiE.js";import"./FormGroup-C29suHwn.js";import"./Divider-DCUlQGE7.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DGTxJ20L.js";import"./FormControl-cRBbGdId.js";import"./Autocomplete-Db8gK-w7.js";import"./Close-D6pX4ZTo.js";import"./usePreviousProps-BQAG4eY-.js";import"./Chip-BWT-uwzw.js";import"./ListSubheader-Bwsg1frO.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
