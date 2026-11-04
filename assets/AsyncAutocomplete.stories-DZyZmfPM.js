import{j as p}from"./iframe-igAdvFbl.js";import{i as n}from"./index-pI1FnI-C.js";import{Q as a}from"./suspense-Bt8h633A.js";import{A as e}from"./AsyncAutocomplete-Cz4XlsUc.js";import{Q as s}from"./queryClient-C0EdMpmm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BlGn_Li3.js";import"./___vite-browser-external_commonjs-proxy-CKbPVC5y.js";import"./index-CY8VLdQ2.js";import"./useInfiniteQuery-Cn8pql7z.js";import"./useBaseQuery-CJEd5-1g.js";import"./Autocomplete-DXH9d6ww.js";import"./index-96CiTFGs.js";import"./index-cJoCX_EQ.js";import"./index-MVgG_W0q.js";import"./index-LwuFN9gm.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Bjb7RMXU.js";import"./memoTheme-CLnB_uxM.js";import"./styled-91ph4J30.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./index-C0-lL2nR.js";import"./IconButton-C_pwG3tG.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B-BThNWO.js";import"./useTimeout-BVAWMZsv.js";import"./TransitionGroupContext-ymy7tNok.js";import"./useForkRef-D-t6gd0T.js";import"./useEventCallback-CsTRRlXt.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-W3XJwf44.js";import"./Tooltip-Cq44iNEt.js";import"./useTheme-CIUac4TP.js";import"./useSlot-DFdPJoU3.js";import"./mergeSlotProps-Cu3OtoH3.js";import"./useControlled-CFxyCb-W.js";import"./getReactElementRef-B9sY4O0b.js";import"./Portal-CXKAB8qb.js";import"./utils-BtrN11DB.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-IKBnSf1M.js";import"./Button-Cul-JvC2.js";import"./index-z9cH4Dkd.js";import"./Box-BVxISqTJ.js";import"./Grid-DZVhVXMq.js";import"./isMuiElement-BIGdb7v5.js";import"./styled-Ai7RJ0M0.js";import"./Stack-BIYUXFFU.js";import"./Container-DJJd4hOz.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CGkPHvag.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Bx8k6zBT.js";import"./Select-BnEKPMqA.js";import"./SelectFocusSourceContext-UC_jDJX5.js";import"./Popover-C5OLrl0l.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-DAotqHD5.js";import"./debounce-Be36O1Ab.js";import"./Modal-Xx_DAuxP.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-ML0QiAd8.js";import"./Fade-D_O_c1g4.js";import"./Paper-ClVD0o31.js";import"./List-DTJ1rzY1.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-D2IPPG_U.js";import"./OutlinedInput-DZ81owk-.js";import"./FormHelperText-CqbyILKB.js";import"./FormControlLabel-Cr28FXxz.js";import"./Typography-D8sokpBT.js";import"./Switch-CzqwvcGs.js";import"./SwitchBase-D9KptgKZ.js";import"./Radio-DqBogu0I.js";import"./RadioGroup-BxHvvyZy.js";import"./FormGroup-C9xaqCDH.js";import"./Divider-DUumJmmu.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-zTzqZ_IF.js";import"./FormControl-MYCsooLK.js";import"./Autocomplete-DmNN5ruJ.js";import"./Close-zMHLptrc.js";import"./usePreviousProps-BSoeq9fJ.js";import"./Chip-CIjfHXd1.js";import"./ListSubheader-CLUcl9nC.js";const Nt={title:"Form Components/Uncontrolled Fields/AsyncAutocomplete",component:e,tags:["autodocs"],args:{id:"example"}},l=new n({name:"example"}),c=async(t,o)=>{const r=await l.post({offset:t,limit:o},{params:{}});return{totalCount:r.data.totalCount,offset:t,limit:o,options:r.data.options,count:r.data.count}},d=async(t,o)=>{const{options:r,totalCount:m}=await c(t,o);return{options:r,hasMore:t+o<m,offset:t}},u=new s({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),i={render:t=>p.jsx(a,{client:u,children:p.jsx(e,{...t})}),decorators:[],parameters:{controls:{exclude:/loading(?!Text)|options/}},args:{FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1},getOptionLabel:t=>t.label,loadOptions:d,limit:10,queryKey:"example"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
