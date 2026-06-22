import{j as p}from"./iframe-BcpGFM79.js";import{i as n}from"./index-C61jAYVP.js";import{Q as a}from"./suspense-B9pUYTtW.js";import{A as e}from"./AsyncAutocomplete-BzguVqgD.js";import{Q as s}from"./queryClient-ChNJB3dk.js";import"./preload-helper-Dab_6GC_.js";import"./index-CRoIuHYP.js";import"./___vite-browser-external_commonjs-proxy-DixCwXJd.js";import"./index-CZ2YJDe3.js";import"./useBaseQuery--yYHYrt-.js";import"./Autocomplete-D-TOUwFZ.js";import"./TextField-uYxxMu-u.js";import"./FormHelperText-DHNlWcSg.js";import"./Form-BSB-tu1Z.js";import"./FaSvgIcon-CT_rBCtN.js";import"./SvgIcon-DwHLgNU7.js";import"./memoTheme-CUR-_UQu.js";import"./styled-YELB7PbO.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./FormHelperText-B5A4eWsZ.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BGMg_aeo.js";import"./FormLabel-KM-1TQDB.js";import"./FieldHelpIcon-Dc0XpqfL.js";import"./index-CrcoPoGw.js";import"./IconButton-BQJBDMuu.js";import"./Tooltip-CGfPTNyc.js";import"./useTheme-DjrtHLeH.js";import"./useSlot-COYLd7Pd.js";import"./mergeSlotProps-Y-QEFSGT.js";import"./useForkRef-BE9Mh8bk.js";import"./useTimeout-D7cMLa2k.js";import"./useControlled-B1x_m4Ao.js";import"./useEventCallback-B998UMHo.js";import"./getReactElementRef-ksE6JIsb.js";import"./Grow-DgKR5Z9h.js";import"./utils-CX-dufza.js";import"./TransitionGroupContext-DMVjCYVP.js";import"./Popper-77inD8mp.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-D0YnE6km.js";import"./useSlotProps-wCHKs8ch.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-bOxsf80n.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DuPW9E1K.js";import"./CircularProgress-B0VZoizd.js";import"./FormControl-P2zjagtr.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-IVbgCQ7T.js";import"./Input-CKZyVNiP.js";import"./OutlinedInput-CRSwkZMH.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./Select-C1npLRYC.js";import"./Actions-D5HDZDyt.js";import"./Select-CxS44fOa.js";import"./SelectFocusSourceContext-BgAF1XhB.js";import"./Popover-C-vNPShq.js";import"./mergeSlotProps-0PeTl37o.js";import"./Modal-ORZGbsIm.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Kq3hx2RN.js";import"./Fade-CdC4gkg9.js";import"./Paper-DJSKHSTy.js";import"./List-B4tdnm47.js";import"./createSvgIcon-D6BcWLqc.js";import"./Stack-C71gTkqw.js";import"./styled-CAzon1OD.js";import"./Divider-DtLhEkPR.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-CobFFp4x.js";import"./Grid-DtKUTAQi.js";import"./Typography-giEvkJi7.js";import"./Typography-D2_Tvhdq.js";import"./TextField-D9BkScsD.js";import"./Autocomplete-m1w5Tiq4.js";import"./Close-BJXb1f8O.js";import"./usePreviousProps-CRxGi7vS.js";import"./Chip-CVFXZwEA.js";import"./ListSubheader-DxmX5MAa.js";const Bt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
