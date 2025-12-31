import{j as p}from"./iframe-D6rueNNG.js";import{i as l}from"./index-BaRtKdXV.js";import{A as a}from"./AsyncAutocomplete-D2ZGfmoE.js";import{Q as c}from"./suspense-BHWy5sil.js";import{Q as u}from"./queryClient-BzmArXBv.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BoSR8ZX1.js";import"./___vite-browser-external_commonjs-proxy-Be2LaGU1.js";import"./index-BZSDLENu.js";import"./_toKey-Cs30Vmya.js";import"./Autocomplete-DOK8dKTq.js";import"./index-CG1Whniy.js";import"./index-wUp1dZq7.js";import"./index-DS1ZdVNz.js";import"./index-BjO6qU9j.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-3IcwaHvd.js";import"./memoTheme-CCfkpwUG.js";import"./styled-ZW0UZQf0.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-AWy4Z3jX.js";import"./Tooltip-qA0i6HK3.js";import"./useTheme-iuyBXSR0.js";import"./useSlot-DvvYNYr-.js";import"./mergeSlotProps-CvdD-egp.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-k6UH9Eyt.js";import"./useTimeout-BykHjwvK.js";import"./useControlled-CmrCbjvY.js";import"./useEventCallback-QlF7xWZO.js";import"./getReactElementRef-Behh7Kdk.js";import"./Portal-BA5FuLB9.js";import"./utils-BI9CCtVK.js";import"./TransitionGroupContext-DgL19gcU.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-y_-PZrbQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BLmBtzUE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CyBCFM1e.js";import"./CircularProgress-CNVgVvu_.js";import"./Button-Cqe8RDHi.js";import"./index-CFiPcGtG.js";import"./Box-DT5FlFN8.js";import"./Grid-Ch7w618h.js";import"./styled-BjPVeGBq.js";import"./isMuiElement-DcnMsx99.js";import"./Stack-UTUiIrYm.js";import"./Container-D69exS9C.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-GzQ04A1E.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-D4KUkep_.js";import"./OutlinedInput-Cd3-ysTE.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-BpVXp2kQ.js";import"./Menu-D8SCn5nN.js";import"./Popover-tpY20ENr.js";import"./mergeSlotProps-C5cj9pSF.js";import"./Modal-ZhXTdvJb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-CzQqt0qo.js";import"./Fade-DS1rltrj.js";import"./Paper-BUunjapz.js";import"./List-Uhgfhymb.js";import"./createSvgIcon-DVzV6U3r.js";import"./FormHelperText-BXHr50QB.js";import"./FormControlLabel-BStP3Ng7.js";import"./Typography-011omOzu.js";import"./Switch-BY8lzbTs.js";import"./SwitchBase-BEMaNbt8.js";import"./RadioGroup-pjy6vA1B.js";import"./Radio-D0EdhFlV.js";import"./FormGroup-BkOWXx4T.js";import"./Divider-BHJPECa0.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-BHge6Poc.js";import"./FormControl-OCPcEPvA.js";import"./Autocomplete-8zyf1rSZ.js";import"./Close-BLkDw3YP.js";import"./usePreviousProps-DnDxC5aq.js";import"./Chip-CnJdLQXE.js";import"./ListSubheader-BcrfChl6.js";import"./useInfiniteQuery-Dx2X9FrD.js";import"./useBaseQuery-CNZqTxvc.js";import"./infiniteQueryBehavior-B_QQvG9O.js";import"./index-B_JKtDXM.js";import"./index-BJ6jjaZ4.js";const oo={title:"Form Components/Autocomplete/AsyncAutocomplete",component:a,tags:["autodocs"],args:{id:"example"}},d=new l({name:"example"}),x=async(t,o)=>{const r=await d.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},y=async(t,o)=>{const{options:r,totalCount:s}=await x(t,o);return{options:r,hasMore:t+o<s,offset:t}},g=new u({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(c,{client:g,children:p.jsx(a,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:y,limit:10,queryKey:"example"}};var m,e,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
