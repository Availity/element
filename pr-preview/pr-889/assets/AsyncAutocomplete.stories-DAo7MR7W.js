import{j as p}from"./iframe-DRsKaZoV.js";import{i as n}from"./index-DxRsnPiJ.js";import{A as m}from"./AsyncAutocomplete-DV3keXfr.js";import{Q as a}from"./suspense-AacBkFZ7.js";import{Q as s}from"./queryClient-C8Jl_98m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_R1jHQO.js";import"./___vite-browser-external_commonjs-proxy-DktWiFg1.js";import"./index-gM6fV40Q.js";import"./_toKey-B9m6adjy.js";import"./Autocomplete-Bwfl3N-7.js";import"./index-DTrMK7kE.js";import"./index-k6hBKodf.js";import"./index-BiBDMnSv.js";import"./index-BpFZIt2g.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-Dpxjd7uT.js";import"./memoTheme-olSsBjA8.js";import"./styled-DO91FIEC.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-B2IJrd5x.js";import"./Tooltip-BkcHQcF9.js";import"./useTheme-C1O811uL.js";import"./useSlot-DNM0KLoM.js";import"./mergeSlotProps-BURl53KS.js";import"./useForkRef-LQtjIIgV.js";import"./useTimeout-C--q8J9W.js";import"./useControlled-kFa1Yq00.js";import"./useEventCallback-Bu60zwDR.js";import"./getReactElementRef-BQu0zR55.js";import"./Portal-D6re67WF.js";import"./utils-DcRyR5pI.js";import"./TransitionGroupContext-BL3wvAVn.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-D3Llr-h-.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DtO7gEQ8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CTgQ_by3.js";import"./CircularProgress-CYts75uW.js";import"./Button-CfQxP6eB.js";import"./index-CGwbp9eO.js";import"./Box-C-WaElnX.js";import"./Grid-MQYUDPdn.js";import"./isMuiElement-BnPWmSJy.js";import"./styled-vffCohJ0.js";import"./Stack-BxJBBr6k.js";import"./Container-BgUm-9tp.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-RsyWpHhV.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CaAeDifA.js";import"./Select-SUCJpX4J.js";import"./Menu-BlJgRakS.js";import"./Popover-BWFp7wtj.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-Df0B65SV.js";import"./debounce-Be36O1Ab.js";import"./Modal-BZWbCELz.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-p4pxeza_.js";import"./Fade-CW38gb4g.js";import"./Paper-Ddpt-3Cp.js";import"./List-NT7j0dtQ.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-DdCwdPBR.js";import"./OutlinedInput-CTy6Arcb.js";import"./FormHelperText-D3SjXGbb.js";import"./FormControlLabel-BaqYfVno.js";import"./Typography-DeM8j2MH.js";import"./Switch-BOnpMkyi.js";import"./SwitchBase-BMlwKK7W.js";import"./Radio-Czxwkbet.js";import"./RadioGroup-Bubzloai.js";import"./FormGroup--k6qR8L5.js";import"./Divider-DDouCUAL.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-COKy6P_I.js";import"./FormControl-c0_poVms.js";import"./Autocomplete-D8Dr_OtU.js";import"./Close-GYMp_htT.js";import"./usePreviousProps-BQtWbGkV.js";import"./Chip--Px35Gzc.js";import"./ListSubheader-SAUnkaiB.js";import"./useInfiniteQuery-Bf6Pk24G.js";import"./useBaseQuery-BDGsHHsd.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
