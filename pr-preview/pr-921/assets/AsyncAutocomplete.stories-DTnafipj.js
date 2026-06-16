import{j as p}from"./iframe-D9ubqhJK.js";import{i as n}from"./index-DGvLPLx7.js";import{Q as a}from"./suspense-BdXPKnPM.js";import{A as e}from"./AsyncAutocomplete-yHUny5T1.js";import{Q as s}from"./queryClient-DsZa5uDf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bxqf2OpG.js";import"./___vite-browser-external_commonjs-proxy-DwG-mvXL.js";import"./index-DtUrJ1Wx.js";import"./useInfiniteQuery-1EkqKLz6.js";import"./useBaseQuery-C2OzOhhR.js";import"./Autocomplete-DTK0A9r2.js";import"./index-B82A_qMa.js";import"./index-CSs7pf9D.js";import"./index-CrcoPoGw.js";import"./index-DNmhIX6F.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DlrnpruC.js";import"./memoTheme-CgUpfGaw.js";import"./styled-DXiPKtQZ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-h4r-WnWl.js";import"./Tooltip-DJtaByj1.js";import"./useTheme-Bs7bia1b.js";import"./useSlot-dFBWOBaM.js";import"./mergeSlotProps-CUVj2Ixj.js";import"./useForkRef-CFXiLCEz.js";import"./useTimeout-TLxlWLEl.js";import"./useControlled-BMamuY7F.js";import"./useEventCallback-BOUt7crc.js";import"./getReactElementRef-MrxWZY03.js";import"./Portal-HXWOitc9.js";import"./utils-C9L-o1yc.js";import"./TransitionGroupContext-By53oEia.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Bfn47NpZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CdRgNr67.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CmaElg-P.js";import"./CircularProgress-BW1moUPm.js";import"./Button-C6KYraw-.js";import"./index-hzcYFh1I.js";import"./Box-Bn9CddAr.js";import"./Grid-XUldnHEv.js";import"./isMuiElement-CNzi3ipk.js";import"./styled-B7Z91F3L.js";import"./Stack-CGmSesTx.js";import"./Container-vLztGkDr.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BIiQiwwA.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-B4IulI9A.js";import"./Select-CdgqzUcM.js";import"./SelectFocusSourceContext-CuEUKYKV.js";import"./Popover-DhsMvyrY.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BMpw8A9K.js";import"./debounce-Be36O1Ab.js";import"./Modal-CR4yZ1tw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-KCj6wAhX.js";import"./Fade-WpG-sZwU.js";import"./Paper-D9VaIl9p.js";import"./List-BzQZ4-oj.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-9Ro74DHR.js";import"./OutlinedInput-Dp6fJ7s5.js";import"./FormHelperText-wFz2-NwJ.js";import"./FormControlLabel-BMzoDqJ1.js";import"./Typography-CmwrtNIv.js";import"./Switch-DeW0XF3P.js";import"./SwitchBase-DhBNEaDq.js";import"./Radio-CLI4nFJ5.js";import"./RadioGroup-CzRLiIJo.js";import"./FormGroup-CYRUVGh7.js";import"./Divider-DR9gQ7ZN.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DpBf5W8Y.js";import"./FormControl-Chp22M92.js";import"./Autocomplete-CJmXKde6.js";import"./Close-PL6G0Z5Z.js";import"./usePreviousProps-CmOMpIUl.js";import"./Chip-BC-xMUzd.js";import"./ListSubheader-Dl5wI_vM.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
