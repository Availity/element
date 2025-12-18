import{j as p}from"./iframe-DdXne19Y.js";import{i as l}from"./index-BXHPM8K7.js";import{A as a}from"./AsyncAutocomplete-DGE0weVU.js";import{Q as c}from"./suspense-Bp_Ztepr.js";import{Q as u}from"./queryClient-Bujeqmj5.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D35-BLT6.js";import"./___vite-browser-external_commonjs-proxy-D-ehYrxU.js";import"./index-Bskay2f6.js";import"./_toKey-rHS324HZ.js";import"./Autocomplete-BjWyUlAE.js";import"./index-BGquR6tx.js";import"./index-pszKQIzk.js";import"./index-DS1ZdVNz.js";import"./index-CNxWBKtb.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-BQDSNwSM.js";import"./memoTheme-CUJXAVnw.js";import"./styled-BazYwfX2.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BAQ-tpih.js";import"./Tooltip-Rz90OO73.js";import"./useTheme-CuyM6APQ.js";import"./useSlot-C03We_gL.js";import"./mergeSlotProps-DnK45DUJ.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CwS1hXJN.js";import"./useTimeout-DNSBYZWv.js";import"./useControlled-Z6Q03A9f.js";import"./useEventCallback-tpV6a8iV.js";import"./getReactElementRef-DEBAn-f7.js";import"./Portal-DsQ-EqqM.js";import"./utils-Ch6tMI2K.js";import"./TransitionGroupContext-BmVNFFik.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-By8gKRU1.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-AJGji1yG.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-QyfCUXJP.js";import"./CircularProgress-BfO5yz2q.js";import"./Button-CllFJQRZ.js";import"./index-MeSa46Cj.js";import"./Box-C-w4SaHJ.js";import"./Grid-C_HzQ4gC.js";import"./styled-BF4YlmQL.js";import"./isMuiElement-DibdeMrO.js";import"./Stack-C_AZLH4Q.js";import"./Container-DBlL8WTt.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-D8_ACgjp.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BwhQrUSg.js";import"./OutlinedInput-Djerxqt7.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-DCenjn89.js";import"./Menu-Cs7LdjKJ.js";import"./Popover-DRO2Qh8T.js";import"./mergeSlotProps-UCTDG2OX.js";import"./Modal-BbyhaS1O.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-Dq9HqcNO.js";import"./Fade-CCyBXsDD.js";import"./Paper-CbzX-jOu.js";import"./List-DoRYj9yq.js";import"./createSvgIcon-DN69LkXl.js";import"./FormHelperText-Bd_ok_cn.js";import"./FormControlLabel-BieOE7Dl.js";import"./Typography-DcBpERD3.js";import"./Switch-Drv5vZ5Z.js";import"./SwitchBase-DiiYsJU3.js";import"./RadioGroup-pW8u9tOe.js";import"./Radio-D-7KGHTB.js";import"./FormGroup-CMq_tA2-.js";import"./Divider-mMaBIRfA.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-BtVVOphv.js";import"./FormControl-DH0N8gIq.js";import"./Autocomplete-so97AhFj.js";import"./Close-BxR2kOeP.js";import"./usePreviousProps-Cr7e6iff.js";import"./Chip-DXAtiIjz.js";import"./ListSubheader-i8C4hN7j.js";import"./useInfiniteQuery-nCJIdjuo.js";import"./useBaseQuery-D-h30dVb.js";import"./infiniteQueryBehavior-B_QQvG9O.js";import"./index-DLkpdyj-.js";import"./index-DZi04D16.js";const oo={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(c,{client:g,children:p.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
