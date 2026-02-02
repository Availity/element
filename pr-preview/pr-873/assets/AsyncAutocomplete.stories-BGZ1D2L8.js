import{j as p}from"./iframe-rhK9tIc4.js";import{i as n}from"./index-Dw7u8_sL.js";import{A as m}from"./AsyncAutocomplete-B-9iC2eT.js";import{Q as a}from"./suspense-v5cIoJZa.js";import{Q as s}from"./queryClient-CzdHrnSs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BP50ON-y.js";import"./___vite-browser-external_commonjs-proxy-EaFpFUog.js";import"./index-CAxT4LQL.js";import"./_toKey-CIEY6eSZ.js";import"./Autocomplete-Cs4WoiB1.js";import"./index-BCt106vX.js";import"./index--boPwSiR.js";import"./index-BiBDMnSv.js";import"./index-DRr7OjqP.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./SvgIcon-DzAUVQ7n.js";import"./memoTheme-IQ7acCr3.js";import"./styled-CBQFiEom.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-C-QneIm0.js";import"./Tooltip-DiEqfW-N.js";import"./useTheme-BXOJLFox.js";import"./useSlot-Ss2ummcO.js";import"./mergeSlotProps-C1tzmMCQ.js";import"./useForkRef-DQY4LT_f.js";import"./useTimeout-D0IbZg6d.js";import"./useControlled-CseZ_aCu.js";import"./useEventCallback-Ds2BvoNa.js";import"./getReactElementRef-D1xzuExO.js";import"./Portal-D-ZKSgVP.js";import"./utils-Doe2UH4J.js";import"./TransitionGroupContext-uy7bHgBz.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CU-sXxN2.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BVic3zsX.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C62hOKjf.js";import"./CircularProgress-BoTRikuG.js";import"./Button-KJ_PCDyl.js";import"./index-BuVKmpdG.js";import"./Box-D2lP2H-p.js";import"./Grid-CauPBeSX.js";import"./styled-C2-sQktw.js";import"./isMuiElement-D8DZ9hal.js";import"./Stack-Dtbvl2fa.js";import"./Container-Bbkz5YIh.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BV3CtcmF.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CYsp_SKE.js";import"./Select-DYr5Qbdr.js";import"./Menu-YddSZ-mB.js";import"./Popover-CcuZMJNK.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-C0a1pPRg.js";import"./Modal-BnNr8XN8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-Vru5BHJP.js";import"./Fade-BMyKZOEO.js";import"./Paper-lILei8Mh.js";import"./List-CNY8HNhe.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-C0bXOuHF.js";import"./OutlinedInput-COUc_T8p.js";import"./FormHelperText-iHOtARPd.js";import"./FormControlLabel-gbSYoGRZ.js";import"./Typography-DyqU0saw.js";import"./Switch-CeNvjV_X.js";import"./SwitchBase-F3FXc6iE.js";import"./RadioGroup-NJJTzESl.js";import"./Radio-BHuW9Gba.js";import"./FormGroup-CCTE-ze6.js";import"./Divider-DF_Db46W.js";import"./dividerClasses-CxQzuCbE.js";import"./TextField-X6lKsOpc.js";import"./FormControl-DzPtRk9q.js";import"./Autocomplete-BIebHPiZ.js";import"./Close-BqvVGatI.js";import"./usePreviousProps-C1roqPoa.js";import"./Chip-CbGvfc95.js";import"./ListSubheader-Dz2USsn2.js";import"./useInfiniteQuery-7cQM6dH5.js";import"./useBaseQuery-7o8qAd6y.js";import"./infiniteQueryBehavior-BTtYVWpE.js";const Xt={title:"Form Components/Autocomplete/AsyncAutocomplete",component:m,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},u=async(t,o)=>{const{options:r,totalCount:e}=await c(t,o);return{options:r,hasMore:t+o<e,offset:t}},d=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:d,children:p.jsx(m,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:u,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
