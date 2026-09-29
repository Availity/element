import{j as p}from"./iframe-Cn9qPtrp.js";import{i as n}from"./index-C15uwsx2.js";import{Q as a}from"./suspense-Bo7hNKC-.js";import{A as e}from"./AsyncAutocomplete-B9czebhy.js";import{Q as s}from"./queryClient-nCrMWHvS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M7nj2U81.js";import"./___vite-browser-external_commonjs-proxy-CwPU4RYd.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-BL1h4sNJ.js";import"./useBaseQuery-Cyax2RcJ.js";import"./Autocomplete-D08iMHxg.js";import"./index-DQGL_OP-.js";import"./index-CcgQ8l9r.js";import"./index-CrcoPoGw.js";import"./index-DWYQ4eQk.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-LXn_mqm4.js";import"./memoTheme-6yds69P_.js";import"./styled-D2CDconu.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BIlLMFwD.js";import"./IconButton-BEbO5w96.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-2oFpmJBY.js";import"./useTimeout-BoQb9RDS.js";import"./TransitionGroupContext-CFwcVVqT.js";import"./useForkRef-Dq6ZsqmR.js";import"./useEventCallback-CiCWuPbq.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DAUt--dg.js";import"./Tooltip-DKs25lhA.js";import"./useTheme-B6YVOUYP.js";import"./useSlot-Cknh0r9X.js";import"./mergeSlotProps-Bjka9Klf.js";import"./useControlled-BIT0kvxY.js";import"./getReactElementRef-6Fd7mh7z.js";import"./Portal-BWZt9Zv4.js";import"./utils-BlV9er3y.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-yJhFLJQp.js";import"./Button-Cp2YlGAc.js";import"./index-CyKw9SYR.js";import"./Box-CeYPkCsw.js";import"./Grid-BbGFtGav.js";import"./isMuiElement-DcGc7pTf.js";import"./styled-DhBMIDqB.js";import"./Stack-DmctAkNR.js";import"./Container-y4mOFKcU.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BxiY_bl4.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-TW3X2czK.js";import"./Select-DUVCVT7_.js";import"./SelectFocusSourceContext-ePGizTGK.js";import"./Popover-C9eTKBeN.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-DuRirGHi.js";import"./debounce-Be36O1Ab.js";import"./Modal-DH6vGrJY.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CvWpQ392.js";import"./Fade-BsEF4Oay.js";import"./Paper-DwYDYFlD.js";import"./List-CDFvHcS1.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-CK6UXRVe.js";import"./OutlinedInput-havtgxzd.js";import"./FormHelperText-BWYBhNPM.js";import"./FormControlLabel-BGe8VaE5.js";import"./Typography-CDKB6cUx.js";import"./Switch-BdwK0ecZ.js";import"./SwitchBase-BoThDgH3.js";import"./Radio-BupWkmwv.js";import"./RadioGroup-CG6yeKGL.js";import"./FormGroup-DJyf2790.js";import"./Divider-ejbo4Ydy.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField--mu-L8K9.js";import"./FormControl-BmLSzKHH.js";import"./Autocomplete-fzOuqwNA.js";import"./Close-BVHhi-vz.js";import"./usePreviousProps-DMivFr8V.js";import"./Chip-DocYHxeM.js";import"./ListSubheader-Din0N-1L.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
