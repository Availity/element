import{j as p}from"./iframe-74vBDrmZ.js";import{i as l}from"./index-zmotdteK.js";import{A as a}from"./AsyncAutocomplete-B-m8he26.js";import{Q as c}from"./suspense-jINh7r9J.js";import{Q as u}from"./queryClient-Biy4EPJZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D7M7y0-d.js";import"./___vite-browser-external_commonjs-proxy-s_RFnJWO.js";import"./index-C1m1s9iu.js";import"./_toKey-B0HUzOTy.js";import"./Autocomplete-Dl3d_zyG.js";import"./index-DHXbcS58.js";import"./index-7ETHbYPI.js";import"./index-DS1ZdVNz.js";import"./index-Ci5o9uVL.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-DyiByr8S.js";import"./memoTheme-CrohEj2F.js";import"./styled-BHC3gMyH.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BdaRrwoe.js";import"./Tooltip-D7yzj_N1.js";import"./useTheme-C3eWChmp.js";import"./useSlot-Dpj_kWoj.js";import"./mergeSlotProps-CYq4Cs5M.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CaacVPvw.js";import"./useTimeout-Bh1htgn1.js";import"./useControlled-BzQ0uXxz.js";import"./useEventCallback-D1J4VLx7.js";import"./getReactElementRef-DTaqgOCe.js";import"./Portal-CYFlRt9C.js";import"./utils-BsLLjsnO.js";import"./TransitionGroupContext-BXUgPNXW.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C0zznadg.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D5Ff5U4u.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-HlJCpadJ.js";import"./CircularProgress-BKuGISI6.js";import"./Button-CnH678eA.js";import"./index-DABAYwxJ.js";import"./Box-B4VqGeVw.js";import"./Grid-D7zFgz1I.js";import"./styled-32LRH9GB.js";import"./isMuiElement-40PMFKcu.js";import"./Stack-B4RYbXhj.js";import"./Container-Bx3d2t5z.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-B2HH4-4s.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-W_ZVRf0F.js";import"./OutlinedInput-BZtuODov.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-DSPuUoJp.js";import"./Menu-Q9cLfYSW.js";import"./Popover-DC9vU-iT.js";import"./mergeSlotProps-DZKFty2J.js";import"./Modal-CW_aBWxl.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-BdJqATDV.js";import"./Fade-DPk9gQur.js";import"./Paper-WApO2-l7.js";import"./List-CJjXTZlw.js";import"./createSvgIcon-CUQeMkEj.js";import"./FormHelperText-CMCARtlF.js";import"./FormControlLabel-DhCXjowv.js";import"./Typography-B2QvIve-.js";import"./Switch-BBvMCXlY.js";import"./SwitchBase-DDix-9SU.js";import"./RadioGroup-CxmLgL3p.js";import"./Radio-gcv8NASd.js";import"./FormGroup-cs5_Y0kj.js";import"./Divider-C1LAeBUh.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-CWXZ9oCv.js";import"./FormControl-CJ7_OQ_e.js";import"./Autocomplete-BbkYXlJI.js";import"./Close-BXH_H4Yh.js";import"./usePreviousProps-B_5RA3T5.js";import"./Chip-C09WHzJI.js";import"./ListSubheader-DD-7C0ow.js";import"./useInfiniteQuery-CjCDaeaj.js";import"./useBaseQuery-CAL0V3UV.js";import"./infiniteQueryBehavior-B_QQvG9O.js";import"./index-DuZx5vLQ.js";import"./index-Or3r4rE-.js";const oo={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(c,{client:g,children:p.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(e=i.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const ro=["_Async"];export{i as _Async,ro as __namedExportsOrder,oo as default};
