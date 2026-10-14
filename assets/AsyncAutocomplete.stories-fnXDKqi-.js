import{j as p}from"./iframe-BxUHITI1.js";import{i as n}from"./index-DsZ_7dTV.js";import{Q as a}from"./suspense-0wm7O8Sh.js";import{A as e}from"./AsyncAutocomplete-DcJop10n.js";import{Q as s}from"./queryClient-qVFpVKNq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DmTj5jVV.js";import"./___vite-browser-external_commonjs-proxy-BcA6VPFJ.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-BszC4kZ6.js";import"./useBaseQuery-Bmup1xmS.js";import"./Autocomplete-Bkx5uxUA.js";import"./index-DkXWnfyE.js";import"./index-Yus2I1Ga.js";import"./index-MVgG_W0q.js";import"./index-D7Z8d6Jb.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BZhbNLcx.js";import"./memoTheme-CzoHsl9a.js";import"./styled-CpGjzToy.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-Cxy_eo2a.js";import"./IconButton-B68upYna.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DsL-5Cn7.js";import"./useTimeout-DAfKtcD8.js";import"./TransitionGroupContext-l3bxEgIQ.js";import"./useForkRef-lvxB79U5.js";import"./useEventCallback-C37BR1tG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DLAhFeVr.js";import"./Tooltip-DZz3XPMm.js";import"./useTheme-D1EEqNP3.js";import"./useSlot-B7qqTYAC.js";import"./mergeSlotProps-MHJ1SX4K.js";import"./useControlled-Bgh5sVCP.js";import"./getReactElementRef-CgE3Obh2.js";import"./Portal-uHNWHw4F.js";import"./utils-Bx4IaHxc.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CkGYMLCU.js";import"./Button-iASAD3CE.js";import"./index-BMhl3l0u.js";import"./Box-dmaYfFtJ.js";import"./Grid-CYb8qmsK.js";import"./isMuiElement-D7EX6TJ1.js";import"./styled-dRg2RBwo.js";import"./Stack-CFpqy-T3.js";import"./Container-CqfIskg6.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DlwqTA7N.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DBh9raQ6.js";import"./Select-Dq8mhllO.js";import"./SelectFocusSourceContext-CdZu0_4c.js";import"./Popover-lMnIH1fd.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BlkVzhTt.js";import"./debounce-Be36O1Ab.js";import"./Modal-CLWW9UYM.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D0eWelix.js";import"./Fade-3fp3ueS9.js";import"./Paper-BbjEmRJb.js";import"./List-DdRjpWGh.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-RiBZe8zy.js";import"./OutlinedInput-RCQ8H0A1.js";import"./FormHelperText-D2Y_lV8s.js";import"./FormControlLabel-Ci3_q9uP.js";import"./Typography-BPEZnd-f.js";import"./Switch-CeMAy6L2.js";import"./SwitchBase-C1EzQuwL.js";import"./Radio-C1VCwxsF.js";import"./RadioGroup-DcGjIHPU.js";import"./FormGroup-Cp82ltLG.js";import"./Divider-DI8N_gjR.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Bv3dpByY.js";import"./FormControl-DxWH6o6g.js";import"./Autocomplete-C3823mBs.js";import"./Close-B0Mi5Iza.js";import"./usePreviousProps-AuyrQAl_.js";import"./Chip-WHqWu6Vx.js";import"./ListSubheader-egOYAHrp.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
