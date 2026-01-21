import{j as p}from"./iframe-DdGJyqAg.js";import{i as n}from"./index-BvIUS6Oo.js";import{A as m}from"./AsyncAutocomplete-CZzzbS38.js";import{Q as a}from"./suspense-BzFS8Nep.js";import{Q as s}from"./queryClient-WLJnH_7H.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CrIdewm5.js";import"./___vite-browser-external_commonjs-proxy-DBR-zej2.js";import"./index-D9N9sMnM.js";import"./_toKey-CN9ZoP-r.js";import"./Autocomplete-BfjH-eO_.js";import"./index-C6crgC_Z.js";import"./index-CCsEDXQX.js";import"./index-BiBDMnSv.js";import"./index-DcoLq1GP.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-C8uI1pQt.js";import"./memoTheme-zSpKnFub.js";import"./styled-DZNwGmaG.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-C--XPrtb.js";import"./Tooltip-Cpc2Ys61.js";import"./useTheme-Cv4lKaq_.js";import"./useSlot-eMa7p3Q9.js";import"./mergeSlotProps-DPHtdEFZ.js";import"./useForkRef-B5TSGzbi.js";import"./useTimeout-Cz_VOQaa.js";import"./useControlled-JTS7gCiC.js";import"./useEventCallback-CPaQ5FLe.js";import"./getReactElementRef-cwdxe4es.js";import"./Portal-B-KSdahe.js";import"./utils-CgujwDzQ.js";import"./TransitionGroupContext-DXcWZkFx.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BJSVq7mD.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BE3A75mF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CFis8PXN.js";import"./CircularProgress-lWH1rXDR.js";import"./Button-hwETKy73.js";import"./index-VAodLW9S.js";import"./Box-CoFPB8Zy.js";import"./Grid-DZe0cyy5.js";import"./styled-Zzv4A2is.js";import"./isMuiElement-DDjJU4Hv.js";import"./Stack-VReAszZR.js";import"./Container-Dqr8G4iZ.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CosMvvSd.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-B0XFIIeV.js";import"./OutlinedInput-BHM7Boqm.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-mSqrLB5c.js";import"./Menu-aYZqoIsz.js";import"./Popover-YJQiE46u.js";import"./mergeSlotProps-DS8s2Zwb.js";import"./Modal-R_KASL8z.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CA13Yjqk.js";import"./Fade-D0RG6YQl.js";import"./Paper-DkSeVLdU.js";import"./List-CL4x-icz.js";import"./createSvgIcon-DK_4S9NY.js";import"./FormHelperText-DU4kG7nJ.js";import"./FormControlLabel-BIb5JIBe.js";import"./Typography-DLXtgzgf.js";import"./Switch-Cx_bjJHc.js";import"./SwitchBase-Po0BfNKK.js";import"./RadioGroup-BW30_Nxw.js";import"./Radio-lAxyQiiy.js";import"./FormGroup-CO1Br__f.js";import"./Divider-Ccos3Z6v.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-Bq_COiNg.js";import"./FormControl-Bf-397QS.js";import"./Autocomplete-BBgpAGcW.js";import"./Close-CtRv6V_h.js";import"./usePreviousProps-Bb5yb2ic.js";import"./Chip-CwXsaATE.js";import"./ListSubheader-CpQh2Ka6.js";import"./useInfiniteQuery-XgRf3V8-.js";import"./useBaseQuery-BPH-SPHO.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
