import{j as p}from"./iframe-BEwKysCr.js";import{i as n}from"./index-CB3VoyWC.js";import{Q as a}from"./suspense-BKv9jLsl.js";import{A as e}from"./AsyncAutocomplete-Bc1V_-iD.js";import{Q as s}from"./queryClient-C6azgU3w.js";import"./preload-helper-PPVm8Dsz.js";import"./index-5x18DLk4.js";import"./___vite-browser-external_commonjs-proxy-BeBneEXX.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-b3PJSLwm.js";import"./useBaseQuery-Dpg7s5zC.js";import"./Autocomplete-B4f9DMqv.js";import"./index-DvHzOJ2c.js";import"./index-B07NIH_W.js";import"./index-MVgG_W0q.js";import"./index-BKyxZB2f.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BCBu9Peg.js";import"./memoTheme-DRAFqHbg.js";import"./styled-Bg0-_ABf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DgXerHVi.js";import"./IconButton-BB9H-X4e.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DKnYqpgE.js";import"./useTimeout-CgoAjxgp.js";import"./TransitionGroupContext-pIYTZL6v.js";import"./useForkRef-DOnOtXA5.js";import"./useEventCallback-CrQ8pL3N.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BsydgvXb.js";import"./Tooltip-hIdC-Elu.js";import"./useTheme-GtZOwaC6.js";import"./useSlot-BiH5AaTw.js";import"./mergeSlotProps-DrnO3OcF.js";import"./useControlled-SqHPXcV4.js";import"./getReactElementRef-CS040HVY.js";import"./Portal-CDUk8pyx.js";import"./utils-kGYhSz9o.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CytfctCW.js";import"./Button-dWZGUH58.js";import"./index-C4sW_QjN.js";import"./Box-3XwYnqya.js";import"./Grid-BlMGH9aP.js";import"./isMuiElement-Ds6j6Ubo.js";import"./styled-nNR7mMu5.js";import"./Stack-CkUGtwqW.js";import"./Container-CSrQBmhf.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DpPPs8BD.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DZ5DvtNE.js";import"./Select-CCM-Wvl2.js";import"./SelectFocusSourceContext-CInINzuy.js";import"./Popover-DaOq3n4o.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BJEr5Vx4.js";import"./debounce-Be36O1Ab.js";import"./Modal-HL9q2m8c.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BV1Q-DrT.js";import"./Fade-DHWT1KLz.js";import"./Paper-0a0qvbdm.js";import"./List-DPCyJ7f3.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BBwf9uD1.js";import"./OutlinedInput-C9Bj3Clw.js";import"./FormHelperText-CuKBSHwO.js";import"./FormControlLabel-CS5vRZ4l.js";import"./Typography-DdaiLWH8.js";import"./Switch-CGjlBj-8.js";import"./SwitchBase-gfvk7QPN.js";import"./Radio-BIuNKybY.js";import"./RadioGroup-Dgbh2tWz.js";import"./FormGroup-DCv0nEPD.js";import"./Divider-CcMK4Bgo.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BhBwWtAC.js";import"./FormControl-DkAX9ifC.js";import"./Autocomplete-DvAXXSRH.js";import"./Close-g56MsvL6.js";import"./usePreviousProps-DJXzM-sJ.js";import"./Chip-DzLYJKcF.js";import"./ListSubheader-BUXCCxOn.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
