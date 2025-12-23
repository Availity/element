import{j as p}from"./iframe-B9UmYm9a.js";import{i as l}from"./index--5WVHpke.js";import{A as a}from"./AsyncAutocomplete-Dn8umiTi.js";import{Q as c}from"./suspense-icQA5aLp.js";import{Q as u}from"./queryClient-B_Gy3slJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DuamcORg.js";import"./___vite-browser-external_commonjs-proxy-By73sLVP.js";import"./index-CMETJfmn.js";import"./_toKey-RoSGLSoY.js";import"./Autocomplete-Dzn0Etqz.js";import"./index-Bg7WYAYR.js";import"./index-Dzu0DSbh.js";import"./index-DS1ZdVNz.js";import"./index-YD2oNNLd.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-ML3dO570.js";import"./memoTheme-D_NWO3Sf.js";import"./styled-DoXLytZI.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index--sXbh2PD.js";import"./Tooltip-Cq5UdYzB.js";import"./useTheme-T4vxBpQ_.js";import"./useSlot-CR5yVO5D.js";import"./mergeSlotProps-BiSAcbtH.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CxMGEvhU.js";import"./useTimeout-BY4Ptw2I.js";import"./useControlled-CNkUV8JJ.js";import"./useEventCallback-DHGbg9uZ.js";import"./getReactElementRef-BfoHU7AI.js";import"./Portal-QZjT-NjO.js";import"./utils-eGNVq-HS.js";import"./TransitionGroupContext-DbiiX3No.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C_80d6ZX.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BJqVFicY.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DqL2pmKa.js";import"./CircularProgress-DuOgkEjt.js";import"./Button-Bc3m4P2S.js";import"./index-D7gUouFh.js";import"./Box-Bn4lUdip.js";import"./Grid-uZx4aDYj.js";import"./styled-CJz0EzFO.js";import"./isMuiElement-Cw-OmkyD.js";import"./Stack-DzpHRCHq.js";import"./Container-B2IKB7A7.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-B3vmFr68.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DPjGFIzP.js";import"./OutlinedInput-BK9tzaXx.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-W9lhdw2r.js";import"./Menu-1MwgyoZI.js";import"./Popover-B10feGb7.js";import"./mergeSlotProps-CwZ7clL2.js";import"./Modal-BuRfNVHb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-BIzo1FrP.js";import"./Fade-BMTciNwC.js";import"./Paper-Cv6JMR6s.js";import"./List-w0232vmf.js";import"./createSvgIcon-DD78qtxD.js";import"./FormHelperText-DXO_xPS8.js";import"./FormControlLabel-Dtdu6pre.js";import"./Typography-BTbXiqY0.js";import"./Switch-C5tER1UK.js";import"./SwitchBase-DDiDHpVB.js";import"./RadioGroup-C9RP_NTU.js";import"./Radio-Y85ZGYF_.js";import"./FormGroup-CXBV0ZAF.js";import"./Divider-a2pOlaeB.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-DCqp8JJC.js";import"./FormControl-OmjNDyWk.js";import"./Autocomplete-Bn6qbq9W.js";import"./Close-DkQWK730.js";import"./usePreviousProps-DFvcECE2.js";import"./Chip-DLY7Emqz.js";import"./ListSubheader-BAEPkYmR.js";import"./useInfiniteQuery-D-6piwwR.js";import"./useBaseQuery-C0D1eX_Q.js";import"./infiniteQueryBehavior-B_QQvG9O.js";import"./index-DtspqnQl.js";import"./index-D6VgNj1X.js";const oo={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(c,{client:g,children:p.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
