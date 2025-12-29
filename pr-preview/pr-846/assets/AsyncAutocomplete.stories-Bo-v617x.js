import{j as p}from"./iframe-CJLLcML8.js";import{i as l}from"./index-CEu1gAoZ.js";import{A as a}from"./AsyncAutocomplete-C4WEmb_6.js";import{Q as c}from"./suspense-Bq3qpeE3.js";import{Q as u}from"./queryClient-DkJBmT0q.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dx9RdmXm.js";import"./___vite-browser-external_commonjs-proxy-BUo7wLkX.js";import"./index-D2TaPIAK.js";import"./_toKey-DkOfmtF9.js";import"./Autocomplete-D_yqgT8h.js";import"./index-DgcQpZaY.js";import"./index-kzcO1V8q.js";import"./index-DS1ZdVNz.js";import"./index-C2z6S83Q.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-nGyHStYX.js";import"./memoTheme-BPg8_iBl.js";import"./styled-B7le8MWV.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CsEAkofl.js";import"./Tooltip-KzdkIRNP.js";import"./useTheme-xHPwzHWg.js";import"./useSlot-DNA5Cnoe.js";import"./mergeSlotProps-Do_erTC-.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CMYI3Eu9.js";import"./useTimeout-BDHAbL-Z.js";import"./useControlled-CvR5zcEM.js";import"./useEventCallback-CaMR-E7T.js";import"./getReactElementRef-CwAmIBs7.js";import"./Portal-TXv_ZwAZ.js";import"./utils-CcsuvtaX.js";import"./TransitionGroupContext-6F5e1B-G.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DOvHvxlg.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BOgoFyJ3.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BKbTUVR3.js";import"./CircularProgress-RWvPhipq.js";import"./Button-BS9NNOwE.js";import"./index-D75YOOsa.js";import"./Box-BuKoPa3R.js";import"./Grid-DjNI_6Ef.js";import"./styled-u61wxLO2.js";import"./isMuiElement-DVNv0xWp.js";import"./Stack-Rx154AVC.js";import"./Container-1fjr_go_.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-Dtmn331W.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-uOljBMPN.js";import"./OutlinedInput-DNQM8Xa2.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-BtCRDfeh.js";import"./Menu-DnSzvQQj.js";import"./Popover-Ch8Hsvn-.js";import"./mergeSlotProps-C09rs3Ch.js";import"./Modal-BMIrjP1v.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-BvruHGhP.js";import"./Fade-Dl1RkEkt.js";import"./Paper-Ckh12xdI.js";import"./List-DZOXnXvW.js";import"./createSvgIcon-1XqqLt2A.js";import"./FormHelperText-BcH1NUIs.js";import"./FormControlLabel-C4_bygPo.js";import"./Typography-D_pkt0MV.js";import"./Switch-BZMLws66.js";import"./SwitchBase-DP0WXxDo.js";import"./RadioGroup-Bh5cb6o5.js";import"./Radio-C5Xj2oDq.js";import"./FormGroup-DTNRnmOw.js";import"./Divider-CFrVNj22.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-D7SM5zro.js";import"./FormControl-oM-Xk342.js";import"./Autocomplete-CzuinEhu.js";import"./Close-y44Tsh3s.js";import"./usePreviousProps-CCITCDdt.js";import"./Chip-gZaqRMC9.js";import"./ListSubheader-CaW00rYU.js";import"./useInfiniteQuery-D6i0y-K1.js";import"./useBaseQuery-BG-hria7.js";import"./infiniteQueryBehavior-B_QQvG9O.js";import"./index-BHbyHxZm.js";import"./index-VpMbi36k.js";const oo={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(c,{client:g,children:p.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
