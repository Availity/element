import{j as p}from"./iframe-BdOkmXSO.js";import{i as n}from"./index-CRxIUl4L.js";import{Q as a}from"./suspense-CppDwvWk.js";import{A as e}from"./AsyncAutocomplete-CNUSw_kP.js";import{Q as s}from"./queryClient-Co5EoLfQ.js";import"./preload-helper-Dab_6GC_.js";import"./index-BZLdTlCl.js";import"./___vite-browser-external_commonjs-proxy-D-t058PY.js";import"./index-CUaLnuLN.js";import"./useBaseQuery-L9jZbTqH.js";import"./Autocomplete-BJ0nd-qe.js";import"./TextField-8DUzEh53.js";import"./FormHelperText-BNe1EnHB.js";import"./Form-Dy8jxpW5.js";import"./FaSvgIcon-D_zjT4On.js";import"./SvgIcon-BD13zcFd.js";import"./memoTheme-Dp1NrYg6.js";import"./styled-ntycrLPJ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./FormHelperText-BjzLojp-.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-B7U-TuVK.js";import"./FormLabel-DvCW1uyR.js";import"./FieldHelpIcon-auv2yOGj.js";import"./index-CrcoPoGw.js";import"./IconButton-Ci36e-XY.js";import"./Tooltip-5Kn3M0WA.js";import"./useTheme-DpzwBSOw.js";import"./useSlot-Do_-kGcn.js";import"./mergeSlotProps-Bpe1uZ1i.js";import"./useForkRef-B6GvvQRB.js";import"./useTimeout-yhleNqH_.js";import"./useControlled-wRMaIAhC.js";import"./useEventCallback-Ci1dFtlM.js";import"./getReactElementRef-CAZnW1NE.js";import"./Grow-zcR73JmX.js";import"./utils-BBZ_5XBR.js";import"./TransitionGroupContext-Ce7OQG8A.js";import"./Popper-CsnU-V5Y.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-Df3mT0t7.js";import"./useSlotProps-0Tuv8-jv.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C66xLdI-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D0mr5YFJ.js";import"./CircularProgress-BtHd2z-U.js";import"./FormControl-CfvQd07B.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-v3aJqbSB.js";import"./Input-CH_2lQsk.js";import"./OutlinedInput-DKeYBi_m.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./Select-BMgXIlcS.js";import"./Actions-j5ZzHduY.js";import"./Select-BHp_jWyp.js";import"./SelectFocusSourceContext-CO0vp2u8.js";import"./Popover-Dmejw1yb.js";import"./mergeSlotProps-CGT3lxwg.js";import"./Modal-C2ZApFn6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BHtRMzsl.js";import"./Fade-BJ4yz3if.js";import"./Paper-X002pFu5.js";import"./List-DHFLMipa.js";import"./createSvgIcon-B1lFLeS5.js";import"./Stack-CkMIcmCj.js";import"./styled-NjTlQkCK.js";import"./Divider-h1ZBdIZM.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-C8TSgpaR.js";import"./Grid-BUOsnAxa.js";import"./Typography-BP7E3Z2h.js";import"./Typography-Ba-r-irp.js";import"./TextField-BDHpIiju.js";import"./Autocomplete-BQkJhiKy.js";import"./Close-CNJCk13c.js";import"./usePreviousProps-lGS7So8M.js";import"./Chip-OW73pPap.js";import"./ListSubheader-CSThAS8W.js";const Bt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Dt=["_Async"];export{i as _Async,Dt as __namedExportsOrder,Bt as default};
