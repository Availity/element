import{j as p}from"./iframe-CrDI7sKE.js";import{i as n}from"./index-DZxmlms1.js";import{Q as a}from"./suspense-CSo65Di8.js";import{A as e}from"./AsyncAutocomplete-CnrzYWy7.js";import{Q as s}from"./queryClient-BrV7sRrh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B41T07YE.js";import"./___vite-browser-external_commonjs-proxy-B0N8KlEf.js";import"./index-CzBJOeop.js";import"./useInfiniteQuery-BH-tvak2.js";import"./useBaseQuery-B1yHQ6XM.js";import"./Autocomplete-BY5DJW_-.js";import"./index-D3oWf4BY.js";import"./index-BpI0U3eZ.js";import"./index-CrcoPoGw.js";import"./index-B75hp5XN.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Db1uzRw5.js";import"./memoTheme-1eSCZRav.js";import"./styled-CqKFH6eA.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-D1nVldbn.js";import"./IconButton-COXIliVf.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Lw6uESYo.js";import"./useTimeout-B0l-dQbr.js";import"./TransitionGroupContext-Bo9v56k3.js";import"./useForkRef-BfO6-t9P.js";import"./useEventCallback-D4QkonYW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DKP2WMPH.js";import"./Tooltip-BYMj-RjT.js";import"./useTheme-e92JqNOn.js";import"./useSlot--sris71t.js";import"./mergeSlotProps-C73UPCQk.js";import"./useControlled-C0OF1VAF.js";import"./getReactElementRef-d6gO3Pyv.js";import"./Portal-DJpfMgk6.js";import"./utils-BWKdc28P.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cihilg2w.js";import"./Button-C68buGXp.js";import"./index-BtTxkIqf.js";import"./Box-BKdDafZT.js";import"./Grid-B7k0uIkV.js";import"./isMuiElement-CplrA1Xb.js";import"./styled-B5mLmA23.js";import"./Stack-BQFWbwCa.js";import"./Container-QJP-imy5.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-X5erI1FX.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DRWQKdnm.js";import"./Select-DqoCSbAA.js";import"./SelectFocusSourceContext-qiWoxQgp.js";import"./Popover-Cm29Ipyl.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-DmKidiVf.js";import"./debounce-Be36O1Ab.js";import"./Modal-Hr0EA0wP.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-B1fHeAP2.js";import"./Fade-BmT7tLhS.js";import"./Paper-DYAzX1VO.js";import"./List-CTjmGkg1.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-B259oLuI.js";import"./OutlinedInput-Di-XT6nh.js";import"./FormHelperText-LkC2Q1TY.js";import"./FormControlLabel-CXnKQHZS.js";import"./Typography-BB__VVHi.js";import"./Switch-CY48rVhs.js";import"./SwitchBase-DCKaqOED.js";import"./Radio-ca9tiySW.js";import"./RadioGroup-DloPrg92.js";import"./FormGroup-7kR7A8Vb.js";import"./Divider-B87S6cGg.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-yO5oMtNe.js";import"./FormControl-DUGeUz4o.js";import"./Autocomplete-DrnzBfLz.js";import"./Close-BtLqS1Rv.js";import"./usePreviousProps-CaXPS48m.js";import"./Chip-Dik9CHta.js";import"./ListSubheader-CKHnCDLk.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
