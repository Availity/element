import{j as p}from"./iframe-BOySubGY.js";import{i as n}from"./index-BzLe_HW7.js";import{Q as a}from"./suspense-c9GQrknW.js";import{A as e}from"./AsyncAutocomplete-DZyD60IH.js";import{Q as s}from"./queryClient-DZIox4Sn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DS3yUKav.js";import"./___vite-browser-external_commonjs-proxy-DjSuNFQ7.js";import"./index-D33PrsP9.js";import"./useInfiniteQuery-z36l9tXW.js";import"./useBaseQuery-JCJ086Ac.js";import"./Autocomplete-Bvn42Sm0.js";import"./index-DJbAyTYF.js";import"./index-EOKAY7fx.js";import"./index-CrcoPoGw.js";import"./index-Axa3knvz.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DZLHpFL-.js";import"./memoTheme-C-oySTID.js";import"./styled-XjKTZ5Ba.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-dHFlkqLk.js";import"./IconButton-D23BvDdt.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CriPZSS7.js";import"./useTimeout-D7rfSJNw.js";import"./TransitionGroupContext-DX1Xmw-6.js";import"./useForkRef-BEcBTcWu.js";import"./useEventCallback-De91DTs8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B5gdOPr_.js";import"./Tooltip-CVYQnSxv.js";import"./useTheme-BZyZpBhU.js";import"./useSlot-BgdUY7vI.js";import"./mergeSlotProps-A5qFZlFu.js";import"./useControlled-ZCAGuxBe.js";import"./getReactElementRef-ekrhOioo.js";import"./Portal-Bk70ZbQ1.js";import"./utils-MRT_IXkN.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CORZ0NF7.js";import"./Button-DWb-ONsW.js";import"./index-BY15XDHL.js";import"./Box-C0cMPqSK.js";import"./Grid-CxzBT5ej.js";import"./isMuiElement-BscQb9Cz.js";import"./styled-B4Xqzm8j.js";import"./Stack-CvrbJzig.js";import"./Container-C4UOiudT.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Crev6sHt.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-D_4giGBh.js";import"./Select-DNKWmaXz.js";import"./SelectFocusSourceContext-NsTTN5Ry.js";import"./Popover-DvcJ8O_V.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CosNNS-j.js";import"./debounce-Be36O1Ab.js";import"./Modal-JO3U43CI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-wymMCVv9.js";import"./Fade-MtnpW3KP.js";import"./Paper-DK-wycZj.js";import"./List-DWj6PFWF.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-CNdKwBrG.js";import"./OutlinedInput-BwuDTIYn.js";import"./FormHelperText-Br3yPV4I.js";import"./FormControlLabel-BN3VyYGk.js";import"./Typography-SY2Ud8Z5.js";import"./Switch-B1ncU5jj.js";import"./SwitchBase-DttprOgY.js";import"./Radio-D60xP-8b.js";import"./RadioGroup-HDv0R8RF.js";import"./FormGroup-CtfESWxW.js";import"./Divider-BLCYt0Sf.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CB4HsX61.js";import"./FormControl-B6yPYiE0.js";import"./Autocomplete-Ds-OezyK.js";import"./Close-C8toxEW2.js";import"./usePreviousProps-C9Q9s8q-.js";import"./Chip-ChSK_l75.js";import"./ListSubheader-BSwVwSn-.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
