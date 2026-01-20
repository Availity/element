import{j as p}from"./iframe-DDdys5VZ.js";import{i as n}from"./index-WctVZiAu.js";import{A as m}from"./AsyncAutocomplete-CgI0Kj40.js";import{Q as a}from"./suspense-By12qyu1.js";import{Q as s}from"./queryClient-CM8KWzLO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DivR2jCb.js";import"./___vite-browser-external_commonjs-proxy-C0Pi2jES.js";import"./index-DuOb-EIt.js";import"./_toKey-QyxjJVxe.js";import"./Autocomplete-DPexQWIl.js";import"./index-DS-Fl5hH.js";import"./index-edAtDfel.js";import"./index-BiBDMnSv.js";import"./index-BnYYGU_m.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DHyw-wAY.js";import"./memoTheme-Cxx5qwbm.js";import"./styled-hFTqa5AW.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Do6uxBxf.js";import"./Tooltip-BrywaEgo.js";import"./useTheme-3S67f5Cb.js";import"./useSlot-tZFGbiOx.js";import"./mergeSlotProps-4h4cl7Iv.js";import"./useForkRef-CnZ00-R9.js";import"./useTimeout-DZwXI9W9.js";import"./useControlled-DPgR13iz.js";import"./useEventCallback-Cc8SLIyn.js";import"./getReactElementRef-KKwdvyjG.js";import"./Portal-CIlqDXrO.js";import"./utils-CF4In8Xa.js";import"./TransitionGroupContext-Dv_3Vfqr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CMLU_yM0.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BOaXfSEH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DZVI88h8.js";import"./CircularProgress-CD5GaXFj.js";import"./Button-uXds9IdN.js";import"./index-C23gf4rm.js";import"./Box-D4-1J1wq.js";import"./Grid-D5jHLohi.js";import"./styled-D0qD_60F.js";import"./isMuiElement-CGZGs55h.js";import"./Stack-XR9IapJe.js";import"./Container-BECr7IV3.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BxsO_0-t.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BqJWQcaa.js";import"./OutlinedInput-ucVlTC9v.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-Djy4tG8c.js";import"./Menu-Co2n-EqS.js";import"./Popover-CjMcOH46.js";import"./mergeSlotProps-DywXoXlU.js";import"./Modal-QZjHV8Pa.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DQLMuQga.js";import"./Fade-Ci7jieLM.js";import"./Paper-BNuTBhMB.js";import"./List-CR67BSGH.js";import"./createSvgIcon-Q7sAoZ8R.js";import"./FormHelperText-Cpr7oON-.js";import"./FormControlLabel-B1gJTqT_.js";import"./Typography-CZtxpkXF.js";import"./Switch-crCZdAfS.js";import"./SwitchBase-DjDUEO21.js";import"./RadioGroup-C83SlUVY.js";import"./Radio-BU8wkIcC.js";import"./FormGroup-CqwFAPep.js";import"./Divider-Dljr7oH4.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-CuJqJwv5.js";import"./FormControl-DV2HCR4z.js";import"./Autocomplete-BnZLsJzg.js";import"./Close-D4KUM2AM.js";import"./usePreviousProps--eOSyDDI.js";import"./Chip-BvUPJXZt.js";import"./ListSubheader-BZpXmurY.js";import"./useInfiniteQuery-CWKhJRJv.js";import"./useBaseQuery-BVlsqadk.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
