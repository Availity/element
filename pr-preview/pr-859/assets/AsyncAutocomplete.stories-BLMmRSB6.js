import{j as p}from"./iframe-BZz3QcUV.js";import{i as n}from"./index-DiX5wH3J.js";import{A as m}from"./AsyncAutocomplete-zcioxpi4.js";import{Q as a}from"./suspense-CTq0yTTK.js";import{Q as s}from"./queryClient-D4B1D7TN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ChEw8Ly-.js";import"./___vite-browser-external_commonjs-proxy-Dln5QaD1.js";import"./index-BhnKf5D0.js";import"./_toKey-CDTJfhSv.js";import"./Autocomplete-_fdEHIuV.js";import"./index-C-Iyr0cI.js";import"./index-D7JVpCQY.js";import"./index-BiBDMnSv.js";import"./index-DVq5OAtC.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-DKZWjmjR.js";import"./memoTheme-Bs2nn0CZ.js";import"./styled-BM-ddlS9.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-B314xkb7.js";import"./Tooltip-BWJHZRl6.js";import"./useTheme-B7Cqxh2G.js";import"./useSlot-r4YEcyId.js";import"./mergeSlotProps-B23xrLHr.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CqxV8UPS.js";import"./useTimeout-DLwU38Ef.js";import"./useControlled-DdT90daF.js";import"./useEventCallback-BVOh0J-M.js";import"./getReactElementRef-Bpvbu8Ov.js";import"./Portal-Zp5JyzDe.js";import"./utils-BgvT_xZo.js";import"./TransitionGroupContext-9H431pbn.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DFvf-0uJ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cw2IKBAQ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DOxBZg-r.js";import"./CircularProgress-SMz0iZ9M.js";import"./Button-Cp--sx01.js";import"./index-Vz6FX8E2.js";import"./Box-BOg-vuMP.js";import"./Grid-1nQ5vvaE.js";import"./styled-DdCwn5Ke.js";import"./isMuiElement-BdI-HeXQ.js";import"./Stack-DLX-eFuT.js";import"./Container-DqMY3rTf.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-DAjwOrks.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-B768zcnH.js";import"./OutlinedInput-DNitDyEY.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-Cx4JwKMA.js";import"./Menu-DMEgO2wa.js";import"./Popover-BrY2xuMs.js";import"./mergeSlotProps-Bzsz_uoU.js";import"./Modal-CA8rC7t3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-DN1aCuq7.js";import"./Fade-BQarXe1G.js";import"./Paper-CDv_1HFe.js";import"./List-BiE2s1yi.js";import"./createSvgIcon-CpO6BPRg.js";import"./FormHelperText-Bu3hR_Kj.js";import"./FormControlLabel-vq4-1n5v.js";import"./Typography-dKvhZPmN.js";import"./Switch-vChijCA0.js";import"./SwitchBase-C7jx3Ye5.js";import"./RadioGroup-B5TaUYpc.js";import"./Radio-DA-zdsxW.js";import"./FormGroup-jedMmTa3.js";import"./Divider-CLJilj78.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-B1Z1z04U.js";import"./FormControl-C2Br9PGu.js";import"./Autocomplete-CG5_FUbb.js";import"./Close-CyOlbJDt.js";import"./usePreviousProps-DlnHQwrQ.js";import"./Chip-CzAQp2o1.js";import"./ListSubheader-B0qWjo0V.js";import"./useInfiniteQuery-BVBRvRVc.js";import"./useBaseQuery-uT3bFQci.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
