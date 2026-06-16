import{j as p}from"./iframe-CskbrvwW.js";import{i as n}from"./index-DyeJjk-d.js";import{Q as a}from"./suspense-vTXPO3Ra.js";import{A as e}from"./AsyncAutocomplete-DqEPMJEP.js";import{Q as s}from"./queryClient-BoG43WWR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3sTtJd8.js";import"./___vite-browser-external_commonjs-proxy-CW-dTi_Y.js";import"./index-BRjqHJWv.js";import"./useInfiniteQuery-C1gHG9Py.js";import"./useBaseQuery-DEp5rs_t.js";import"./Autocomplete-DozEkejL.js";import"./index-_9yCn__n.js";import"./index-CTKUFQuw.js";import"./index-CrcoPoGw.js";import"./index-BWPz21f_.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-B2BnKrH8.js";import"./memoTheme-DEwbXW4J.js";import"./styled-BsXlxVo_.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-BA1sIr4x.js";import"./Tooltip-DpvX0KYg.js";import"./useTheme-BYK31DIa.js";import"./useSlot-BWiqm7gO.js";import"./mergeSlotProps-BuWg2zjK.js";import"./useForkRef-CJ9Mlrh4.js";import"./useTimeout-tPc9dJl0.js";import"./useControlled-DIqjKUDM.js";import"./useEventCallback-SyYUcrzB.js";import"./getReactElementRef-C03_kC3i.js";import"./Portal-4hvJB8nO.js";import"./utils-JI7-Ixnq.js";import"./TransitionGroupContext-Bfg0KmSK.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C5o6YfE5.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C3QjbCEP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D0cuhZpt.js";import"./CircularProgress-DRIVKGSr.js";import"./Button-NBHJiR2s.js";import"./index-CZsLRVDZ.js";import"./Box-ChrZYvSC.js";import"./Grid-Dtrs9C3c.js";import"./isMuiElement-AkziJBw1.js";import"./styled-DBnwDxk1.js";import"./Stack-C_7R7j6r.js";import"./Container-YINSrinB.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-De4oAUc0.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CfOh6Tof.js";import"./Select-ByAJkR7Y.js";import"./SelectFocusSourceContext-BPCr-wpP.js";import"./Popover-DXCvR8dx.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CnXGUKPA.js";import"./debounce-Be36O1Ab.js";import"./Modal-BBxZlvcb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D90u1o6C.js";import"./Fade-6PhvYSTo.js";import"./Paper-C7gSeK8B.js";import"./List-TojBtRhm.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-Bhh07A3D.js";import"./OutlinedInput-DIJeNguT.js";import"./FormHelperText-DuMGeBBY.js";import"./FormControlLabel-DU9By6y8.js";import"./Typography-C3YNkC5-.js";import"./Switch-C8V1MSZG.js";import"./SwitchBase-B5TBSL1B.js";import"./Radio-CkEEhUL0.js";import"./RadioGroup-DNnvKS06.js";import"./FormGroup-F9zDzK3f.js";import"./Divider-CQKuo_rK.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DEzAGuhy.js";import"./FormControl-CY1-Z9r6.js";import"./Autocomplete-reVXiqLD.js";import"./Close-Behtas3R.js";import"./usePreviousProps-DBCmsxR8.js";import"./Chip-BvXuiaAF.js";import"./ListSubheader-oq69H4go.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
