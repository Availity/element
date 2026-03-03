import{j as p}from"./iframe-Dv1Hb7kF.js";import{i as n}from"./index-CzAnwH0P.js";import{A as m}from"./AsyncAutocomplete-C60JYkoc.js";import{Q as a}from"./suspense-DPCZn-8r.js";import{Q as s}from"./queryClient-TY8OsCJK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DcDvbE2l.js";import"./___vite-browser-external_commonjs-proxy-D8ypgdq-.js";import"./index-DACw6K-J.js";import"./_toKey-BTEnA2Hx.js";import"./Autocomplete-m_pOlbCq.js";import"./index-DyZevx3c.js";import"./index-DvY_Wzu4.js";import"./index-BiBDMnSv.js";import"./index-B9y9IGGa.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-5pvqgcrC.js";import"./memoTheme-BBZRIDpe.js";import"./styled-89sVFKyy.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BBTP1ICE.js";import"./Tooltip-johHX3Tw.js";import"./useTheme-CGsP9Gxx.js";import"./useSlot-D3-97Bpj.js";import"./mergeSlotProps-CVQXFPJk.js";import"./useForkRef-DHvmsRje.js";import"./useTimeout-CU6v0sK-.js";import"./useControlled-wUW2FFSG.js";import"./useEventCallback-BE-Xh8QX.js";import"./getReactElementRef-87-1wWv5.js";import"./Portal-nZmp6a4c.js";import"./utils-BsA11HdC.js";import"./TransitionGroupContext-C2v-exTz.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-8Sv9aFcC.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-X5Y4CM4M.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B7Edy8zQ.js";import"./CircularProgress-D7Y0JvGB.js";import"./Button-B4ml1k34.js";import"./index-B87WwVT5.js";import"./Box-BHuPsdf_.js";import"./Grid-DHp-nl__.js";import"./isMuiElement-CfSIe_7M.js";import"./styled-VmFmZdM9.js";import"./Stack-Cs6IioTg.js";import"./Container-BOWYat-a.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CYY7WDyQ.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-B8g9qj4o.js";import"./Select-N2w0oj5_.js";import"./Menu-DerUfZPz.js";import"./Popover-BoOdWaVF.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-BLold4VH.js";import"./debounce-Be36O1Ab.js";import"./Modal-u03eQQEl.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-B0FQGZ20.js";import"./Fade-B9vTzmTP.js";import"./Paper-DYUOfCQ3.js";import"./List-ClfHumox.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-cwUD_L_o.js";import"./OutlinedInput-D5mtK01a.js";import"./FormHelperText-D669KPjG.js";import"./FormControlLabel-D0XosfHE.js";import"./Typography-Lwv6roC7.js";import"./Switch-BsNgqz8B.js";import"./SwitchBase-CR98SRoT.js";import"./Radio-kIMdyyjk.js";import"./RadioGroup-BE3gGYAr.js";import"./FormGroup-pznL_RZ6.js";import"./Divider-BzgSa4bA.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DyPDwx-N.js";import"./FormControl-CW8ltJ6i.js";import"./Autocomplete-Bq6Q9ouN.js";import"./Close-CfPkaIeP.js";import"./usePreviousProps-f6ydU0EW.js";import"./Chip-CSJmbCxp.js";import"./ListSubheader-DuQEoOTk.js";import"./useInfiniteQuery-BLnrpcn0.js";import"./useBaseQuery-BbcRkLin.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
