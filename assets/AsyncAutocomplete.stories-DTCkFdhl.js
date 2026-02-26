import{j as p}from"./iframe-CeHuEGfq.js";import{i as n}from"./index-CIHaerRx.js";import{A as m}from"./AsyncAutocomplete-VmdSSUH1.js";import{Q as a}from"./suspense-DkwC9qUy.js";import{Q as s}from"./queryClient-rUKrIDpz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BsbybPTp.js";import"./___vite-browser-external_commonjs-proxy-ClX2-Ngo.js";import"./index-CcUJhC2E.js";import"./_toKey-B1GztdOY.js";import"./Autocomplete-D0Pa5pp2.js";import"./index-Dky-BzKS.js";import"./index-DZHTdTBe.js";import"./index-BiBDMnSv.js";import"./index-Du3l4lx8.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-DI8VqS9R.js";import"./memoTheme-qRsFH38R.js";import"./styled-BKIS-N79.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-h6yqrKSK.js";import"./Tooltip-B1PYtTnY.js";import"./useTheme-B3XVgK6m.js";import"./useSlot-BjsCytrs.js";import"./mergeSlotProps-C79h5NBS.js";import"./useForkRef-C6m00sRF.js";import"./useTimeout-B6rYa280.js";import"./useControlled-BliVddQx.js";import"./useEventCallback-DqQ5xSM8.js";import"./getReactElementRef-C4ayTemP.js";import"./Portal-Dc4hRbOT.js";import"./utils-CIk5CIgt.js";import"./TransitionGroupContext-DUPaGMT2.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CYPYwT6r.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BIB2TXr9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C22Hv80K.js";import"./CircularProgress-BvbF-3zQ.js";import"./Button-Ds__YP3L.js";import"./index-FvduELsu.js";import"./Box-yrTwHKYh.js";import"./Grid-DxlaTZg5.js";import"./isMuiElement-CftH3wiN.js";import"./styled-Cy9W--Nr.js";import"./Stack-Bat2MqnC.js";import"./Container-BxPloYEr.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CSqpisVO.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-W-tvDTQe.js";import"./Select-DdWoD2OA.js";import"./Menu-B1d2wtb1.js";import"./Popover-ChFmJvSp.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-D2-E38NA.js";import"./debounce-Be36O1Ab.js";import"./Modal-BR7rsPPx.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CJ45d9Fb.js";import"./Fade-BYSf3HBJ.js";import"./Paper-CZXACBVR.js";import"./List-tyHuZrlB.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BjIHtdQj.js";import"./OutlinedInput-BDHR51dh.js";import"./FormHelperText-Dpl44cik.js";import"./FormControlLabel-BhuXOFU6.js";import"./Typography-Dg4MYAbO.js";import"./Switch-kBTUDp-9.js";import"./SwitchBase-DGGiuPbR.js";import"./Radio-B8VMe6MP.js";import"./RadioGroup-BEPHQprY.js";import"./FormGroup-DHYG8q6E.js";import"./Divider-D6Ozvcwy.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DBH9BdKx.js";import"./FormControl-w57uyElI.js";import"./Autocomplete-BbRk79R7.js";import"./Close-ByTAjPGo.js";import"./usePreviousProps-B2d_sl55.js";import"./Chip-1OrTqwQ9.js";import"./ListSubheader-BXq3BS71.js";import"./useInfiniteQuery-EDmoC2Fy.js";import"./useBaseQuery-FEKMCMxU.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
