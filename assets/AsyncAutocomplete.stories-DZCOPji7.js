import{j as p}from"./iframe-B15MwHjc.js";import{i as n}from"./index-zidQaDKy.js";import{A as m}from"./AsyncAutocomplete-CCLSIu8e.js";import{Q as a}from"./suspense-C-metycO.js";import{Q as s}from"./queryClient-CHNRQtqZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DFFr03SD.js";import"./___vite-browser-external_commonjs-proxy-C9YbHPbS.js";import"./index-DJINif8x.js";import"./_toKey-D_jrYpJ2.js";import"./Autocomplete-DJbapMvS.js";import"./index-BPL37Qwn.js";import"./index-BjT6B4tx.js";import"./index-BiBDMnSv.js";import"./index-B-JYDf49.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-B05McAjj.js";import"./memoTheme-D5o8CaBh.js";import"./styled-Dsm9_3nR.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-C1-wXq3o.js";import"./Tooltip-Cn8xYtbM.js";import"./useTheme-DNjXucVs.js";import"./useSlot-CSAMaxgS.js";import"./mergeSlotProps-CdThJ-3P.js";import"./useForkRef-DuY6SZZx.js";import"./useTimeout-Cm6ZfeQK.js";import"./useControlled-DMX50sqj.js";import"./useEventCallback-37O-Z23c.js";import"./getReactElementRef-GzGc3gHa.js";import"./Portal-BtkHLfcV.js";import"./utils-Cl7K9KPr.js";import"./TransitionGroupContext-C0L_he2M.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CHKxwTOr.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DjrXNLZD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CE7Ewp3a.js";import"./CircularProgress-CW5OewJC.js";import"./Button-BsXdLE5f.js";import"./index-DxM9B309.js";import"./Box-YSmorlov.js";import"./Grid-Dy4g6prj.js";import"./styled-C2cPqIG3.js";import"./isMuiElement-DJZ5QjLd.js";import"./Stack-D0GxJWIp.js";import"./Container-BF4wPU8W.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DRfWx8jo.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DbxR-Wox.js";import"./OutlinedInput-BMlXZ3gW.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-DXNTvSPv.js";import"./Menu-B2wOm28Q.js";import"./Popover-CyCNIteo.js";import"./mergeSlotProps-DHmKZad7.js";import"./Modal-DdeK4hRP.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CWbXueS0.js";import"./Fade-C0vOm-43.js";import"./Paper-Ci8Atnw6.js";import"./List-CmAbVLaT.js";import"./createSvgIcon-Zx_tmbTm.js";import"./FormHelperText-CDhxewv3.js";import"./FormControlLabel-DYkHjabZ.js";import"./Typography-DGTJIKj9.js";import"./Switch-B2hQpGai.js";import"./SwitchBase-BFuCmFIk.js";import"./RadioGroup-CqvOxW_2.js";import"./Radio-dFCAzPut.js";import"./FormGroup-CDeCnKJo.js";import"./Divider-fv3xKdt2.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-CcGBdbsE.js";import"./FormControl-6JPYAktP.js";import"./Autocomplete-cZSJvSrN.js";import"./Close-C5i5INsN.js";import"./usePreviousProps-D1Kt59ew.js";import"./Chip-2rxgJKxQ.js";import"./ListSubheader-BOAtEue0.js";import"./useInfiniteQuery-BAjEjSJb.js";import"./useBaseQuery-D73nb7qP.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
