import{j as p}from"./iframe-Cl61WGkI.js";import{i as n}from"./index-DBwkgZQQ.js";import{Q as a}from"./suspense-CjFvtXfk.js";import{A as e}from"./AsyncAutocomplete-ChTPDtvu.js";import{Q as s}from"./queryClient-Bs2OFGKR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BTt-AJ1u.js";import"./___vite-browser-external_commonjs-proxy-Bzn8mUo7.js";import"./index-DCRShdR0.js";import"./useInfiniteQuery--ApFUpxF.js";import"./useBaseQuery-B3TWfyC0.js";import"./Autocomplete-02hDdPd6.js";import"./index-Du3U5mjC.js";import"./index-DjWqBCXk.js";import"./index-CrcoPoGw.js";import"./index-CmI2eh32.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Dwb1J2d-.js";import"./memoTheme-Bl50oicv.js";import"./styled-BC98FWsK.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-CqgX4Pjw.js";import"./Tooltip-BWDly8di.js";import"./useTheme-IfO6Fwpt.js";import"./useSlot-BNKzCfYO.js";import"./mergeSlotProps-oCe6X0UM.js";import"./useForkRef-BgBNpKdE.js";import"./useTimeout-DRIZehDr.js";import"./useControlled-Df0GFCpG.js";import"./useEventCallback-04OY0OEQ.js";import"./getReactElementRef-C7aNrngo.js";import"./Portal-CKqV7NOt.js";import"./utils-BISW7tPB.js";import"./TransitionGroupContext-DF5xYsKa.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BwXPHno3.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-q11oqdUa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-q-jaW3RD.js";import"./CircularProgress-Bq8oVM2O.js";import"./Button-DuB2O4vc.js";import"./index-D0cf1ol3.js";import"./Box-BylFce9S.js";import"./Grid-CY38bvtz.js";import"./isMuiElement-Cx1dzcL4.js";import"./styled-DUX11FjB.js";import"./Stack-DbcIcCvU.js";import"./Container-CQCkLV4U.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BSv5oG3S.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-D2EIO9e7.js";import"./Select-Cn1KxIPd.js";import"./SelectFocusSourceContext-CAKJeAkQ.js";import"./Popover-Du9tN1-X.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-ZgLDWHqg.js";import"./debounce-Be36O1Ab.js";import"./Modal-B_tt91Mu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-C_s6yW8r.js";import"./Fade-sz48bo3z.js";import"./Paper-DdNx7n5g.js";import"./List-BAGNgyyd.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-C9mzZA9x.js";import"./OutlinedInput-ClvlI1xc.js";import"./FormHelperText-C194FQMi.js";import"./FormControlLabel-DjUlFFqe.js";import"./Typography-BbUycIDS.js";import"./Switch-BDf-0e9Z.js";import"./SwitchBase-BclwBU3W.js";import"./Radio-CgniSRaf.js";import"./RadioGroup-DT7A7289.js";import"./FormGroup-NS8rU_fN.js";import"./Divider-DDnoJtKN.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DQqTUngf.js";import"./FormControl-DYxyVnQd.js";import"./Autocomplete-B8GW1t6L.js";import"./Close-2CYXYJvY.js";import"./usePreviousProps-C9ZNeHzw.js";import"./Chip-CcKsOt1l.js";import"./ListSubheader-DJoCu7G7.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
