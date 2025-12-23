import{j as p}from"./iframe-uHgbxI5K.js";import{i as l}from"./index-CUWrOnCM.js";import{A as a}from"./AsyncAutocomplete-BfiUEfW6.js";import{Q as c}from"./suspense-3_rNC_Rn.js";import{Q as u}from"./queryClient-DxPO9zrG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BxzGDXEn.js";import"./___vite-browser-external_commonjs-proxy-CKpKa60-.js";import"./index-BN1Luz_F.js";import"./_toKey-4s8ZQHs-.js";import"./Autocomplete-iCzXIblW.js";import"./index-DUtW7R60.js";import"./index-Dy-6MYFu.js";import"./index-DS1ZdVNz.js";import"./index-CUd5PmZT.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-C1fws6HS.js";import"./memoTheme-oX4ulD_d.js";import"./styled-8YbhM9a0.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BovvASnm.js";import"./Tooltip-sNbil-gw.js";import"./useTheme-CtIbOmqo.js";import"./useSlot-DoiGXRjP.js";import"./mergeSlotProps-Muvz4q9m.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BQsEeVXe.js";import"./useTimeout-CnBSTBeY.js";import"./useControlled-kFiMxWUJ.js";import"./useEventCallback-1jk_qbz7.js";import"./getReactElementRef-WEJqQMPe.js";import"./Portal-DdZjlCce.js";import"./utils-Cj1f_ISK.js";import"./TransitionGroupContext-D0JdioPb.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BTIA_7et.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CXBoVS4j.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DWgIiiPw.js";import"./CircularProgress-DxKRrnZT.js";import"./Button-D_ToZGbA.js";import"./index-BzyIUxG9.js";import"./Box-CGtHD5r9.js";import"./Grid-CoybaeI6.js";import"./styled-sJpgZ5yK.js";import"./isMuiElement-DF8mSHc6.js";import"./Stack-DRfNMs7N.js";import"./Container-CyeFbR1g.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-BvekG9my.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BeaDuuzQ.js";import"./OutlinedInput-DP-7ibgJ.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-CBljlXjB.js";import"./Menu-Bxya32y2.js";import"./Popover-CSEUEHDl.js";import"./mergeSlotProps-CYc5iuk1.js";import"./Modal-aX1QMhvm.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-D55cv2by.js";import"./Fade-C1oo-Wld.js";import"./Paper-Dmj0lJnR.js";import"./List-CeL-YZlm.js";import"./createSvgIcon-BmijsGhR.js";import"./FormHelperText-D71Rzsdg.js";import"./FormControlLabel-CMdu96K9.js";import"./Typography-BUwJzphg.js";import"./Switch-B-2iDVxW.js";import"./SwitchBase-Coc1IMyb.js";import"./RadioGroup-DaQRAyuZ.js";import"./Radio-CCIIGQOt.js";import"./FormGroup-C41I1qRZ.js";import"./Divider-lRCFE_gn.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-CLPVko1W.js";import"./FormControl-C7zt7PRQ.js";import"./Autocomplete-CU2rwAxc.js";import"./Close-B_oSM_XG.js";import"./usePreviousProps-Cq6yL874.js";import"./Chip-B_NyCRcL.js";import"./ListSubheader-C1JtK3e9.js";import"./useInfiniteQuery-DwrLJqTt.js";import"./useBaseQuery-DI1GesKb.js";import"./infiniteQueryBehavior-B_QQvG9O.js";import"./index-BS4RPCR9.js";import"./index-DyU1fC7A.js";const oo={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(c,{client:g,children:p.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
