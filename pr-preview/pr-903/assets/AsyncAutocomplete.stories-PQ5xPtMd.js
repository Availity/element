import{j as p}from"./iframe-BP-fstPH.js";import{i as n}from"./index-BNFZ0-Ru.js";import{A as m}from"./AsyncAutocomplete-C_EfoWJd.js";import{Q as a}from"./suspense-BFtb5SYK.js";import{Q as s}from"./queryClient-doAFwZgs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BXvH0f4F.js";import"./___vite-browser-external_commonjs-proxy-BQY9STBd.js";import"./index-DhqxClRF.js";import"./_toKey-DtgcOQ7H.js";import"./Autocomplete-DN2h6IqV.js";import"./index-DS-HMa_9.js";import"./index-PuKCOh7B.js";import"./index-BiBDMnSv.js";import"./index-Ds-ZEgLG.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BNSNkhkk.js";import"./memoTheme-CBW4mAKK.js";import"./styled-QS_6ePhI.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CUBSMbdA.js";import"./Tooltip-CFDxDxIS.js";import"./useTheme-8xMS95AC.js";import"./useSlot-AMpyQgX8.js";import"./mergeSlotProps-CZ6XbOjr.js";import"./useForkRef-kN7FeyJY.js";import"./useTimeout-aFoefsbK.js";import"./useControlled-C1wvNNpf.js";import"./useEventCallback--hrt0XPn.js";import"./getReactElementRef-rCjbZXAY.js";import"./Portal-DXb3wffR.js";import"./utils-ct7xOGzP.js";import"./TransitionGroupContext-CBWt0gZQ.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-B35r-AKt.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CG0C3HM8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CN3Lj4mC.js";import"./CircularProgress-CgtN00kw.js";import"./Button-Bi9jGuft.js";import"./index-DDACpU55.js";import"./Box-yuve2Yeg.js";import"./Grid-FUwIxOgZ.js";import"./isMuiElement-DVbYF-_U.js";import"./styled-CP91GCBe.js";import"./Stack-DimDvg5e.js";import"./Container-iJP50oB2.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DabwHVcZ.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BqU37Iip.js";import"./Select-BKUFFh0V.js";import"./Menu-B8YLwSTz.js";import"./Popover-DZnVKWt8.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-BN9RGjlA.js";import"./debounce-Be36O1Ab.js";import"./Modal-AZaAAX9Q.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-Du2lwHJG.js";import"./Fade-DdOD_q3t.js";import"./Paper-BbZw2l2T.js";import"./List-BJHgVsR-.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-CdaKSufU.js";import"./OutlinedInput-DAVO5nXI.js";import"./FormHelperText-C4xW4xrL.js";import"./FormControlLabel-DVBIx8eJ.js";import"./Typography-BMazaI8i.js";import"./Switch-DiGOVsxw.js";import"./SwitchBase-CyaT9YQ0.js";import"./Radio-CTRKg1Xd.js";import"./RadioGroup-DFvWHceN.js";import"./FormGroup-CcKsQGcG.js";import"./Divider-jfkURQMV.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DYOYWfYV.js";import"./FormControl-f7wPjL1x.js";import"./Autocomplete-Dmcakj3k.js";import"./Close-BnHqdXN7.js";import"./usePreviousProps-DuaZBMDW.js";import"./Chip-DdRZLEe_.js";import"./ListSubheader-D_yAHo8A.js";import"./useInfiniteQuery-B5sLLjAb.js";import"./useBaseQuery-B7pEisWy.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
