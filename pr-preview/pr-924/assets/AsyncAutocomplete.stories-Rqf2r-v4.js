import{j as p}from"./iframe-D9VxGUXm.js";import{i as n}from"./index-CrBisZO-.js";import{Q as a}from"./suspense-dJbUy5io.js";import{A as e}from"./AsyncAutocomplete-CzsmOOj3.js";import{Q as s}from"./queryClient-CrIDi-xu.js";import"./preload-helper-Dab_6GC_.js";import"./index-bb5wdbmP.js";import"./___vite-browser-external_commonjs-proxy-CBXrWfvd.js";import"./index-BuWe24oV.js";import"./useBaseQuery-CHXCgqpT.js";import"./Autocomplete-lrNhK9dq.js";import"./TextField-25jTd1Sf.js";import"./FormHelperText-yKBLOBUk.js";import"./Form-BG5Mtcu6.js";import"./FaSvgIcon-CwoOr0og.js";import"./SvgIcon-Bgb2NC38.js";import"./memoTheme-CUWoCynM.js";import"./styled-D8Xb_hHx.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./FormHelperText-BXWMYJyA.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-D5KNipz4.js";import"./FormLabel-DVupU6Lh.js";import"./FieldHelpIcon-BVNkABm1.js";import"./index-CrcoPoGw.js";import"./IconButton-Cib1SE9E.js";import"./Tooltip-88iJgdeD.js";import"./useTheme-B41ItSj5.js";import"./useSlot-BAM4jdU8.js";import"./mergeSlotProps-CLdLLAsF.js";import"./useForkRef-5-P7CGIn.js";import"./useTimeout-CCeZqBN_.js";import"./useControlled-nlFUsoSS.js";import"./useEventCallback-BrENIvCl.js";import"./getReactElementRef-Dqr_-LzO.js";import"./Grow-o6-ommK8.js";import"./utils-Bcz57uZ2.js";import"./TransitionGroupContext-BLR2oRR2.js";import"./Popper-D26kfRUw.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CSfdL5WB.js";import"./useSlotProps-BLtbmDJZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BrelKzp4.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-IEWOwJJy.js";import"./CircularProgress-rsn-iR-g.js";import"./FormControl-B4iyM4I1.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-3elNFQAm.js";import"./Input-C9_Sqi_J.js";import"./OutlinedInput-Dr4cfOVe.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./Select-DKGOAe8y.js";import"./Actions-Bez28Qkr.js";import"./Select-CN5D_YTR.js";import"./SelectFocusSourceContext-BhxM5Ro2.js";import"./Popover-R-MCXb6u.js";import"./mergeSlotProps-JAhzVB8J.js";import"./Modal-B8lqQyLL.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DWoUx2Mm.js";import"./Fade-4pWY_yaW.js";import"./Paper-oCFHvNnf.js";import"./List-VhCI1ZGj.js";import"./createSvgIcon-CuKrs_jq.js";import"./Stack-NbPl_tL-.js";import"./styled-N1qat-rE.js";import"./Divider-BXDOAs2I.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-gv_YjbwF.js";import"./Grid-ClZzvBh4.js";import"./Typography-D9Pc6OpE.js";import"./Typography-mI_XzOBj.js";import"./TextField-Cst3Rcaq.js";import"./Autocomplete-Cy_vlOIt.js";import"./Close-BBIackpZ.js";import"./usePreviousProps-kVohog1A.js";import"./Chip-DKO5tgQr.js";import"./ListSubheader-QsL63-5I.js";const Bt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Dt=["_Async"];export{i as _Async,Dt as __namedExportsOrder,Bt as default};
