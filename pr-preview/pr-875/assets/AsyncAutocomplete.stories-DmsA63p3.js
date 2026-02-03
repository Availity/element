import{j as p}from"./iframe-DyOisw3p.js";import{i as n}from"./index-DN4PVeR-.js";import{A as m}from"./AsyncAutocomplete-DWzrotLX.js";import{Q as a}from"./suspense-CdWtoiIU.js";import{Q as s}from"./queryClient--adIEIoT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DgrfaDhn.js";import"./___vite-browser-external_commonjs-proxy-QrxNotP1.js";import"./index-DUQu9Lss.js";import"./_toKey-DpYDFcYF.js";import"./Autocomplete-k9O1A0sl.js";import"./index-Ci1wWjqk.js";import"./index-Bvjs7UpB.js";import"./index-BiBDMnSv.js";import"./index-BIYW56wV.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-BXtElNvn.js";import"./memoTheme-ClQmTMaA.js";import"./styled-DlFKYmu8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CJEk8w79.js";import"./Tooltip-3XPWX8ag.js";import"./useTheme-BZ9q4WY8.js";import"./useSlot-DsPkR1Hp.js";import"./mergeSlotProps-ixnHwvJm.js";import"./useForkRef-BtdJvb-F.js";import"./useTimeout-BCyZYTVL.js";import"./useControlled-L_7kh0l2.js";import"./useEventCallback-B6KJfX3V.js";import"./getReactElementRef-Ce2cv_v4.js";import"./Portal-B0VFW4sd.js";import"./utils-4feg5QSW.js";import"./TransitionGroupContext-CUZzTcDE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CMD2axpv.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CgX6RyGO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BEmwhJpH.js";import"./CircularProgress-CyhGhsVo.js";import"./Button-Do4OGzvj.js";import"./index-DOLuYYYn.js";import"./Box-CT_Tx_FO.js";import"./Grid-D_aaW8Iu.js";import"./styled-lupBF2MK.js";import"./isMuiElement-BDDMqoU0.js";import"./Stack-Ch0vDCre.js";import"./Container-DQWs-8OX.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BnNEguu9.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-C7ikDY0l.js";import"./Select-DrIkGwSX.js";import"./Menu-DwuMbMvw.js";import"./Popover-ClMw720w.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-Cudb8Bh-.js";import"./Modal-BLEQPR58.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-m45uhTcp.js";import"./Fade-KpFWzCuU.js";import"./Paper-Ds5OMBpI.js";import"./List-CwjiyNio.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-Qu4Q4I06.js";import"./OutlinedInput-DjTS6Cam.js";import"./FormHelperText-RFAnYjnI.js";import"./FormControlLabel-D8ZYbm0A.js";import"./Typography-Ds2SQ99O.js";import"./Switch-CrU2TDZp.js";import"./SwitchBase-Cb80yQ4X.js";import"./RadioGroup-DKEcTwAA.js";import"./Radio-og8t-TTy.js";import"./FormGroup-CoGTgvk-.js";import"./Divider-Bp2RWgT9.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-Cb489rCv.js";import"./FormControl-CqcX6NOC.js";import"./Autocomplete-DDgADCpc.js";import"./Close-DxXYPAF_.js";import"./usePreviousProps-BYId6qWs.js";import"./Chip-08RhYW6J.js";import"./ListSubheader-CGDwMg0L.js";import"./useInfiniteQuery-DDDcAtaF.js";import"./useBaseQuery-UXXl0B7o.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Yt=["_Async"];export{i as _Async,Yt as __namedExportsOrder,Xt as default};
