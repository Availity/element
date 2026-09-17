import{j as p}from"./iframe-CwayONq3.js";import{i as n}from"./index-DIZXZRWI.js";import{Q as a}from"./suspense-O0DXezdF.js";import{A as e}from"./AsyncAutocomplete-DmKaj5PU.js";import{Q as s}from"./queryClient-2k_Ko9lY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bf04OlcH.js";import"./___vite-browser-external_commonjs-proxy-DMVweGvg.js";import"./index-D0NWAu9R.js";import"./useInfiniteQuery-CSoAOYxE.js";import"./useBaseQuery-fdDeJD0p.js";import"./Autocomplete-DK9xQ3_2.js";import"./index-BMwb1bxP.js";import"./index-CYRtiz7B.js";import"./index-CrcoPoGw.js";import"./index-FoJb9FyM.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Dok2DrMx.js";import"./memoTheme-CSn7n7-0.js";import"./styled-WjtpYKzZ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-rzzKeWqc.js";import"./IconButton-XSGXEsQ5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-3L383qSX.js";import"./useTimeout-DzhE3XW1.js";import"./TransitionGroupContext-Bu4CoR7O.js";import"./useForkRef-Cy6dgODW.js";import"./useEventCallback-Cc5Qaj1M.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CcJveUId.js";import"./Tooltip-px23ZV-t.js";import"./useTheme-DZN2Ghm1.js";import"./useSlot-ar6Q8od1.js";import"./mergeSlotProps-BztucupI.js";import"./useControlled-H2-lqa1O.js";import"./getReactElementRef-CjqPEX8j.js";import"./Portal-B5eAGKeX.js";import"./utils-BJivSKBX.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C4DgWBnT.js";import"./Button-hBir-_1a.js";import"./index-C55j7MuO.js";import"./Box-C4nPPECx.js";import"./Grid-DathB-g2.js";import"./isMuiElement-sqB-nJpP.js";import"./styled-C0MvsQi9.js";import"./Stack-k-008in-.js";import"./Container-BUicGBFY.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CTdRs88K.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CfAi1Cl1.js";import"./Select-cZINCd5X.js";import"./SelectFocusSourceContext-Bmlj6I18.js";import"./Popover-Ljxjuwbj.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-DSTd1XFa.js";import"./debounce-Be36O1Ab.js";import"./Modal-DN1-xy7q.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BYFYfQXf.js";import"./Fade-DXm-QaGZ.js";import"./Paper-DlpHeBlY.js";import"./List-D5XMTJG9.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-DSjYKgaH.js";import"./OutlinedInput--oh61w1N.js";import"./FormHelperText-CjnpPyYN.js";import"./FormControlLabel-BSPnDcnX.js";import"./Typography-CDQ-d4mK.js";import"./Switch-BeMxMh89.js";import"./SwitchBase-fbtSEbIK.js";import"./Radio-CmQsUMRS.js";import"./RadioGroup-CF3fvuBB.js";import"./FormGroup-bV0aYJSN.js";import"./Divider-CQfA4tzc.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DrqF0lc6.js";import"./FormControl-BSTw1HxY.js";import"./Autocomplete-CwD40PGk.js";import"./Close-BFvihe5l.js";import"./usePreviousProps-ByKP67Bs.js";import"./Chip-BKU8oJ3c.js";import"./ListSubheader-D1T9jb_V.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Vt=["_Async"];export{i as _Async,Vt as __namedExportsOrder,Nt as default};
