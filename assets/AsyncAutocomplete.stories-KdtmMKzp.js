import{j as p}from"./iframe-D77h7lRS.js";import{i as n}from"./index-Cwh8nxUP.js";import{Q as a}from"./suspense-BkKxAvb_.js";import{A as e}from"./AsyncAutocomplete-CJ5WUvDv.js";import{Q as s}from"./queryClient-B258ThTQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B040VruN.js";import"./___vite-browser-external_commonjs-proxy-8XJy59YQ.js";import"./index-CmwOJNE2.js";import"./useInfiniteQuery-DAw6_sD9.js";import"./useBaseQuery-DcdpPqCk.js";import"./Autocomplete-MDuaGWBW.js";import"./index-fEH6BR5w.js";import"./index-DVH5TI0W.js";import"./index-CrcoPoGw.js";import"./index-CquEWAAI.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CnEcCUNg.js";import"./memoTheme-DqX_R3KK.js";import"./styled-CDvIACaW.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-DfVYTiZj.js";import"./Tooltip-BhKuATOF.js";import"./useTheme-CWKAY9AZ.js";import"./useSlot-BBYvJbSe.js";import"./mergeSlotProps-qLX7lv7e.js";import"./useForkRef-SW3gFaM3.js";import"./useTimeout-BjR7jkxB.js";import"./useControlled-BR2YzmEr.js";import"./useEventCallback-d4rGFhnJ.js";import"./getReactElementRef-BIPFoYsf.js";import"./Portal-DtDkDNee.js";import"./utils-CC74677U.js";import"./TransitionGroupContext-DCGSqGsz.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-uX8RgR0A.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CCSNmYsA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D6ESZVYa.js";import"./CircularProgress-Bxr3-rHo.js";import"./Button-CJwJUbvG.js";import"./index-DKJ5gtoF.js";import"./Box-o7XdZc8G.js";import"./Grid-hgY9dIJR.js";import"./isMuiElement-Blipuvld.js";import"./styled-BMl8GMRY.js";import"./Stack-CP02Z4Z2.js";import"./Container-BclAzrCm.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BJmj-K9U.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-9VfVAAyA.js";import"./Select-C4WXADnT.js";import"./SelectFocusSourceContext-Czp42SwI.js";import"./Popover-CwdVeln-.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-Br5GpCfN.js";import"./debounce-Be36O1Ab.js";import"./Modal-DrVB10Rb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-__Xm0d1s.js";import"./Fade-DyYAtDpQ.js";import"./Paper-BiY9noHN.js";import"./List-R8dOKo6P.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BLoD-eFu.js";import"./OutlinedInput-MSLFQPLk.js";import"./FormHelperText-Ypt_VW2y.js";import"./FormControlLabel-DT8dT1qO.js";import"./Typography-Bljyylya.js";import"./Switch-BUzHje9n.js";import"./SwitchBase-aanT7hNQ.js";import"./Radio-CtNllKQQ.js";import"./RadioGroup-DR8oDR1o.js";import"./FormGroup-5D0gupCO.js";import"./Divider-ml52RQXY.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-tb3E5PWY.js";import"./FormControl-Ce2kJr-x.js";import"./Autocomplete-BUJXofT5.js";import"./Close-WmX40Z7A.js";import"./usePreviousProps-B22HkzpX.js";import"./Chip-BOdYK55A.js";import"./ListSubheader-C3h9JUvZ.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
