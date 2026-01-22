import{j as p}from"./iframe-P-I-t7s_.js";import{i as n}from"./index-Cc847Osj.js";import{A as m}from"./AsyncAutocomplete-lJ_WHI3z.js";import{Q as a}from"./suspense-B9iPAXfi.js";import{Q as s}from"./queryClient-BqOjpHVd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DdsUWlQe.js";import"./___vite-browser-external_commonjs-proxy-DDlQnjAM.js";import"./index-BdjU-ADR.js";import"./_toKey-CwF_HlVq.js";import"./Autocomplete-aevpcg3Y.js";import"./index-CWhSIll1.js";import"./index-Dhbn43JG.js";import"./index-BiBDMnSv.js";import"./index-C3cy06cM.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DmOXCSGB.js";import"./memoTheme-Bi3jfVWD.js";import"./styled-DNi79hKI.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BOqcfzn9.js";import"./Tooltip-kyKJtl96.js";import"./useTheme-BPf64W-X.js";import"./useSlot-DY-xq6aU.js";import"./mergeSlotProps-CDm4lxrI.js";import"./useForkRef-B5SqA4pZ.js";import"./useTimeout-Dzhca5Jx.js";import"./useControlled-Cqclzim-.js";import"./useEventCallback-DAYatbRK.js";import"./getReactElementRef-DFgmZ0uJ.js";import"./Portal-_y01gIKP.js";import"./utils-DTqcJog-.js";import"./TransitionGroupContext-Dvdi4lCr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cx6Yk_v4.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BTlhtNIa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-P5TjO14T.js";import"./CircularProgress-BRuGXxty.js";import"./Button-xw2JRpr3.js";import"./index-DGaASH14.js";import"./Box-BCYJimk9.js";import"./Grid-DUqLWWvo.js";import"./styled-Cp0DTD0x.js";import"./isMuiElement-DIafhdSN.js";import"./Stack-JGFv5pEs.js";import"./Container-8zPEfJs6.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-0KiMc52e.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-PrL4cH60.js";import"./Select-DUXcWGfO.js";import"./Menu-BJGmABLE.js";import"./Popover-CxE7A8ms.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-BWpcczPW.js";import"./Modal-vVbgVJa4.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-C0L4z1af.js";import"./Fade-CVC1eZsP.js";import"./Paper-DMZ3Nhg0.js";import"./List-C_3Uxwtv.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-JwEd2gcS.js";import"./OutlinedInput-D9ScyHuO.js";import"./FormHelperText-Bbq60y1z.js";import"./FormControlLabel-DAUG9NcE.js";import"./Typography-BFwAhjnY.js";import"./Switch-Br6_MbNh.js";import"./SwitchBase-CrBPRb-c.js";import"./RadioGroup-CQO77CJ0.js";import"./Radio-1bLCVnvB.js";import"./FormGroup-BbkimDWv.js";import"./Divider-CVqRGGvC.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-CRS0YlgS.js";import"./FormControl-DTZL-Ep5.js";import"./Autocomplete-DNacHN71.js";import"./Close-BtLp18zk.js";import"./usePreviousProps-DTI_nXzq.js";import"./Chip-CgdkVKg-.js";import"./ListSubheader-BMLHS_4E.js";import"./useInfiniteQuery-_lNiSeGw.js";import"./useBaseQuery-DHgVL8kg.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
