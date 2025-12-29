import{j as p}from"./iframe-XJ8rUARQ.js";import{i as l}from"./index-D0PoHtwb.js";import{A as a}from"./AsyncAutocomplete-DeSGCHQc.js";import{Q as c}from"./suspense-BKyLW9Hs.js";import{Q as u}from"./queryClient-BcfS7DiY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-0JyjbUyi.js";import"./___vite-browser-external_commonjs-proxy-Bbvn4Lk3.js";import"./index-B_QiQ0h7.js";import"./_toKey-Bc2BYSdO.js";import"./Autocomplete-B1rWH-qo.js";import"./index-D-CSH5Nh.js";import"./index-BrB8cp_v.js";import"./index-DS1ZdVNz.js";import"./index-Bic9pcsq.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-gs9ZPknn.js";import"./memoTheme-q27Lu1jJ.js";import"./styled-DH1bohWY.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Bfg0IfXb.js";import"./Tooltip-CFosmsmO.js";import"./useTheme-DdE3jScQ.js";import"./useSlot-BQnc1wiW.js";import"./mergeSlotProps-B1UYo6hf.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-k_WY5UDV.js";import"./useTimeout-CHPWgY-X.js";import"./useControlled-XnLwGYQ0.js";import"./useEventCallback-BDPMWXz1.js";import"./getReactElementRef-CA2jWjUI.js";import"./Portal-xufODOBH.js";import"./utils-Bu5_zceD.js";import"./TransitionGroupContext-BLsjMo91.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-ClBThUbu.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CSeSeZKT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CgzYzVmi.js";import"./CircularProgress-DHokMmGN.js";import"./Button-jNyCdmKh.js";import"./index-BiP5P7M1.js";import"./Box-qW0uta-Y.js";import"./Grid-Dk4fwvMn.js";import"./styled-BwErFkk7.js";import"./isMuiElement-bpXde_gu.js";import"./Stack-DBw9MoVN.js";import"./Container-D0WZR6MW.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-CuI6a_rh.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BQzGV_Rr.js";import"./OutlinedInput-CRGope29.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-DRmfM0LR.js";import"./Menu-CwbeRV8m.js";import"./Popover-CSSnkq1S.js";import"./mergeSlotProps-DiGp33rA.js";import"./Modal-mRbZ2Llg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-Dk5P0AXa.js";import"./Fade-7aiRsYlH.js";import"./Paper-BItyqzia.js";import"./List-BH13I8v0.js";import"./createSvgIcon-CZFbIjHx.js";import"./FormHelperText-CWz_PZRQ.js";import"./FormControlLabel-DERvxbVJ.js";import"./Typography-DLCURa9h.js";import"./Switch-DAE0QIZT.js";import"./SwitchBase-wxow7jUk.js";import"./RadioGroup-B4eLwq-k.js";import"./Radio-BM00RdYB.js";import"./FormGroup-DBHzl_SM.js";import"./Divider-By-_we-K.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-os4QXjpx.js";import"./FormControl-ChASXxOp.js";import"./Autocomplete-BG0erbm8.js";import"./Close-Dw_-z5X-.js";import"./usePreviousProps-C2obb4pn.js";import"./Chip-Dnol4tA1.js";import"./ListSubheader-xkvldxGj.js";import"./useInfiniteQuery-E4hWKMc3.js";import"./useBaseQuery-C3KxfX-D.js";import"./infiniteQueryBehavior-B_QQvG9O.js";import"./index-DxZmSA_X.js";import"./index--DMbptHO.js";const oo={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(c,{client:g,children:p.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
