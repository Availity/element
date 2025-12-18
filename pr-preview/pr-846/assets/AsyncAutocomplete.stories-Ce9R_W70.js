import{j as p}from"./iframe-BgIiq-du.js";import{i as l}from"./index-BdQccBBF.js";import{A as a}from"./AsyncAutocomplete-DcuEdMwh.js";import{Q as c}from"./suspense-CK8XrJxB.js";import{Q as u}from"./queryClient-BAQCZwoO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CiE-CXrO.js";import"./___vite-browser-external_commonjs-proxy-BjMzHjy9.js";import"./index-Chk9juOj.js";import"./_toKey-D3ErCz-H.js";import"./Autocomplete-twKZVe-T.js";import"./index-CPFmgvq-.js";import"./index-BKW4MMGN.js";import"./index-DS1ZdVNz.js";import"./index-DDWPjCym.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-O7DiaTLk.js";import"./memoTheme-BUFmT7AM.js";import"./styled-nLr0G4t_.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CEJHTNJk.js";import"./Tooltip-ZBvV1JRk.js";import"./useTheme-D1y-VmtJ.js";import"./useSlot-EdtQUYAt.js";import"./mergeSlotProps-CnVkUNbm.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DMJLoebf.js";import"./useTimeout-BqNIrHgl.js";import"./useControlled-BtJ2k5T0.js";import"./useEventCallback-BIchpltM.js";import"./getReactElementRef-CoLPcd7a.js";import"./Portal-DTFxnUfG.js";import"./utils-NnkRphE_.js";import"./TransitionGroupContext-CQbv1oLy.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C3d2_4qf.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-ByM6u0PW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Cb3z3UZq.js";import"./CircularProgress-DMUtFszr.js";import"./Button-CxUn3cs_.js";import"./index-BbN5E_zC.js";import"./Box-Bqm_9Atf.js";import"./Grid-BxagjAZA.js";import"./styled-D4IfxCmy.js";import"./isMuiElement-CdT2rXyX.js";import"./Stack-L7a-IdF6.js";import"./Container-DQV0JO0Z.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-CyyVYiDN.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BMochES0.js";import"./OutlinedInput-Dg_t9JtL.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-CBCPH66q.js";import"./Menu-LL6n-Tmm.js";import"./Popover-BfSxTCFv.js";import"./mergeSlotProps-0qvZmlEs.js";import"./Modal-BZOZDgI9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-eqU3iNBn.js";import"./Fade-BZsMZeiY.js";import"./Paper-Zfwh-5mP.js";import"./List-BBSN2ySS.js";import"./createSvgIcon-ibTAZZq3.js";import"./FormHelperText-B_hQhJDs.js";import"./FormControlLabel-CUpZZg-L.js";import"./Typography-BSAr1ZxE.js";import"./Switch-OK2h4JsG.js";import"./SwitchBase-2uzOx-Cu.js";import"./RadioGroup-DoiLr74G.js";import"./Radio-B8BDq2Ri.js";import"./FormGroup-Cad3Q2FR.js";import"./Divider-BgBGt6wQ.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-DCCrqa0A.js";import"./FormControl-BmgnMdti.js";import"./Autocomplete-wEwQUGJt.js";import"./Close-CfCdcsL2.js";import"./usePreviousProps-BlyyBm3v.js";import"./Chip-ZTOAZUQb.js";import"./ListSubheader-9KoFNUd5.js";import"./useInfiniteQuery-HkqyDykM.js";import"./useBaseQuery-DDxe0Hy9.js";import"./infiniteQueryBehavior-B_QQvG9O.js";import"./index-CZr81PwO.js";import"./index-DqBix0bv.js";const oo={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(c,{client:g,children:p.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
