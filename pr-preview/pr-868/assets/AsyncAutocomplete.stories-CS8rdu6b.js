import{j as p}from"./iframe-B4F0UUz5.js";import{i as n}from"./index-BCc8bUM0.js";import{A as m}from"./AsyncAutocomplete-D_a2Muq-.js";import{Q as a}from"./suspense-ghrNwej-.js";import{Q as s}from"./queryClient-Cp40Drbj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B3FYqRlo.js";import"./___vite-browser-external_commonjs-proxy-N0iEgd-k.js";import"./index-haxG-9NQ.js";import"./_toKey-CEZXOjUU.js";import"./Autocomplete-BS8A1b6f.js";import"./index-C4Ylz4kS.js";import"./index-BqKnOEku.js";import"./index-BiBDMnSv.js";import"./index-Cr9n8cqt.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DM1sZoZa.js";import"./memoTheme-BKk2saex.js";import"./styled-bGWttyC6.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CJ27nWYv.js";import"./Tooltip-DyWobFm2.js";import"./useTheme-DkdpmsKL.js";import"./useSlot-oo8TP9Im.js";import"./mergeSlotProps-DT_q42Lx.js";import"./useForkRef-CjLG5x_H.js";import"./useTimeout-BonZNUeG.js";import"./useControlled-BRFwdesD.js";import"./useEventCallback-BqH7MYZ-.js";import"./getReactElementRef-CApeICjD.js";import"./Portal-D8A5UmkR.js";import"./utils-BiHtS7y3.js";import"./TransitionGroupContext-fwmkieDY.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C2ZAZv5Q.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CqGgnlnL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DqWoj7oR.js";import"./CircularProgress-PmMulKWi.js";import"./Button-BurqBlBC.js";import"./index-DgFyk_v-.js";import"./Box-BvO6GINh.js";import"./Grid-JVi79X3C.js";import"./styled-C47D77LO.js";import"./isMuiElement-DG4Oj80J.js";import"./Stack-B6PQK5zz.js";import"./Container-C5kZIMq8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-FPMZFyGu.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CfinztXI.js";import"./Select-Cx_9VZof.js";import"./Menu-CeLPT6xJ.js";import"./Popover-DpDyXaal.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-Besm4UoO.js";import"./Modal-BBtCbIw6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-D8y383n3.js";import"./Fade-C5UM2BtN.js";import"./Paper-BhZ60vFE.js";import"./List-Bzm3hBtH.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BXxeVrmm.js";import"./OutlinedInput-CTooi5LH.js";import"./FormHelperText-CnAIs5dB.js";import"./FormControlLabel-DMY5D4WX.js";import"./Typography-xEPHi5Wz.js";import"./Switch-DWGta2yJ.js";import"./SwitchBase-1rR0JDDB.js";import"./RadioGroup-C5y020-O.js";import"./Radio-DK64YLFj.js";import"./FormGroup-CONHlSLp.js";import"./Divider-D1MNiILV.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-YDOz8Lgi.js";import"./FormControl-kze_2YuQ.js";import"./Autocomplete-QLRah01Z.js";import"./Close-9PuYUA0s.js";import"./usePreviousProps-CZUz8AYp.js";import"./Chip-FR1xFTEF.js";import"./ListSubheader-DvYGfGp2.js";import"./useInfiniteQuery-Cn-yriZR.js";import"./useBaseQuery-BuRJEe1L.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
