import{j as p}from"./iframe-BRP1PsTd.js";import{i as n}from"./index-BcExjKBt.js";import{Q as a}from"./suspense-7idsBrSV.js";import{A as e}from"./AsyncAutocomplete-CB3vuENE.js";import{Q as s}from"./queryClient-DtbfVVG2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CD3DaTz2.js";import"./___vite-browser-external_commonjs-proxy-BHKhwzHZ.js";import"./index-Bwqc7xOL.js";import"./useInfiniteQuery-BDygbQAf.js";import"./useBaseQuery-D_ZTJNFN.js";import"./Autocomplete-tBEfeqGx.js";import"./index-CpKfFk7W.js";import"./index-B3tzpYmG.js";import"./index-CrcoPoGw.js";import"./index-C9qIB2Ge.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-C0xh8SUy.js";import"./memoTheme-Rx2ZtNd-.js";import"./styled-kfJMXx_R.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BsNnDr7w.js";import"./Tooltip-C5fygC3l.js";import"./useTheme-C-06SHWZ.js";import"./useSlot-B51YQDxZ.js";import"./mergeSlotProps-B2RYlZua.js";import"./useForkRef-DUyCy24e.js";import"./useTimeout-zBXF3kIc.js";import"./useControlled-8-M28gqE.js";import"./useEventCallback-BX14bO_3.js";import"./getReactElementRef-y-MSVziw.js";import"./Portal-CRr1uWpV.js";import"./utils-DtC8lP3P.js";import"./TransitionGroupContext-DjWTkcZP.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-fBG80Xpc.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-4bUdPSIB.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DI3KZvly.js";import"./CircularProgress-Dy9r_LoH.js";import"./Button-BSPls0mt.js";import"./index-D7dOkDl_.js";import"./Box-CXnBoTl2.js";import"./Grid-Mz87TCh6.js";import"./isMuiElement-CTMPmI0-.js";import"./styled-BWHNlctr.js";import"./Stack-DIw4f7bu.js";import"./Container-Bk3CGwFA.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DFQHDft-.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-ClZVz9V6.js";import"./Select-BKZ2kjY2.js";import"./SelectFocusSourceContext-DOQkQ0SO.js";import"./Popover-Cq8sFUbM.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-C4YKGlLy.js";import"./debounce-Be36O1Ab.js";import"./Modal-D89_wzi3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DCwrU8T9.js";import"./Fade-ByvXngvB.js";import"./Paper-Cw-zNh9i.js";import"./List-7Ktovrvd.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-DDgQnkKT.js";import"./OutlinedInput-URDDzUkx.js";import"./FormHelperText-CJRPJvNW.js";import"./FormControlLabel-CKZTo3Af.js";import"./Typography-BELI0wSd.js";import"./Switch-CxGtlCVz.js";import"./SwitchBase-7T8YNLcX.js";import"./Radio-0Tlh6eCh.js";import"./RadioGroup-lgnoJOI3.js";import"./FormGroup-CgbUB1-e.js";import"./Divider-CcSh8kgD.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BCT971wE.js";import"./FormControl-DSVABsS-.js";import"./Autocomplete-CDQeDCNq.js";import"./Close-Bi4R9hIj.js";import"./usePreviousProps-C4HJy2_6.js";import"./Chip-CyJJIrnq.js";import"./ListSubheader-RFH9H9Lr.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
