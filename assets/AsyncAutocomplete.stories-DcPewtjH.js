import{j as p}from"./iframe-BXngGBfv.js";import{i as n}from"./index-BwXywnDN.js";import{A as m}from"./AsyncAutocomplete-C0oN5EFQ.js";import{Q as a}from"./suspense-DGhvI0Xn.js";import{Q as s}from"./queryClient-BT_YAKCr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ms7ilKFh.js";import"./___vite-browser-external_commonjs-proxy-tsDcHO6r.js";import"./index-e8mVNsDS.js";import"./_toKey-OtZEyFlA.js";import"./Autocomplete-ByT8q9Bg.js";import"./index-D-_Q406J.js";import"./index-Bk46c2ns.js";import"./index-BiBDMnSv.js";import"./index-Cf4ih-NU.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BJuCOs7n.js";import"./memoTheme-By_0Hb9I.js";import"./styled-Bawvqwj4.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-ZvN5iItO.js";import"./Tooltip-16k3P5ny.js";import"./useTheme-C0sMdU1B.js";import"./useSlot-CrmQg2MJ.js";import"./mergeSlotProps-Brb8C4Ss.js";import"./useForkRef-BPuQGl16.js";import"./useTimeout-DWqRGYei.js";import"./useControlled-XJJbW9AP.js";import"./useEventCallback-BS9kycBS.js";import"./getReactElementRef-BBa8qN_k.js";import"./Portal-71LMLhER.js";import"./utils-Co-MjcrY.js";import"./TransitionGroupContext-CO0Qzr5e.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Djma3IUa.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-B7Rw7xc_.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CzabJsBp.js";import"./CircularProgress-CH7ElgU6.js";import"./Button-BjebpOto.js";import"./index-D7EY_zU-.js";import"./Box-Cs53hwdz.js";import"./Grid-DhicbWoX.js";import"./isMuiElement-7V78C_da.js";import"./styled-B3TWJa8B.js";import"./Stack-DSCZMnTD.js";import"./Container-BIFp3KrG.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-POAGYpGd.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CYmoh9g8.js";import"./Select-CAygNoe6.js";import"./Menu-DGj6ldkx.js";import"./Popover-3ptJ9M55.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-tz8U3nPv.js";import"./debounce-Be36O1Ab.js";import"./Modal-DmtASUzd.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-sSmeMUd4.js";import"./Fade-CaBS8FWJ.js";import"./Paper-DbLV-z9R.js";import"./List-83oLdzCs.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-PKFeQm70.js";import"./OutlinedInput-D8j1VWle.js";import"./FormHelperText-C-R3JwUM.js";import"./FormControlLabel-D-20YuFd.js";import"./Typography-CV53WmLj.js";import"./Switch-Xno7-L_Z.js";import"./SwitchBase-BmDSdJmL.js";import"./Radio-DCMCbOVJ.js";import"./RadioGroup-BskKp_ip.js";import"./FormGroup-BPXNegLF.js";import"./Divider-BN0wEXXb.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-B7AnE0ah.js";import"./FormControl-zzhLjcAz.js";import"./Autocomplete-COSBizs6.js";import"./Close-D0vvQXqp.js";import"./usePreviousProps-CwuWlbor.js";import"./Chip-CKInQU5C.js";import"./ListSubheader-rfglpbP7.js";import"./useInfiniteQuery-Bp7ZlByQ.js";import"./useBaseQuery-CGWls5ZE.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
