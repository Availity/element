import{j as t}from"./iframe-igAdvFbl.js";import{C as e}from"./Autocomplete-CUwiToZz.js";import{B as i}from"./index-C0-lL2nR.js";import{P as s}from"./index-BBkFpnwf.js";import{T as a}from"./index-ChMWNEv3.js";import{G as l}from"./index-z9cH4Dkd.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-shXMhOUa.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Db7BRLdZ.js";import"./index-96CiTFGs.js";import"./index-cJoCX_EQ.js";import"./index-MVgG_W0q.js";import"./index-LwuFN9gm.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Bjb7RMXU.js";import"./memoTheme-CLnB_uxM.js";import"./styled-91ph4J30.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CGkPHvag.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Bx8k6zBT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-BnEKPMqA.js";import"./SelectFocusSourceContext-UC_jDJX5.js";import"./useSlot-DFdPJoU3.js";import"./mergeSlotProps-Cu3OtoH3.js";import"./useForkRef-D-t6gd0T.js";import"./useSlotProps-IKBnSf1M.js";import"./Popover-C5OLrl0l.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-CXKAB8qb.js";import"./useTheme-CIUac4TP.js";import"./utils-BtrN11DB.js";import"./TransitionGroupContext-ymy7tNok.js";import"./useTimeout-BVAWMZsv.js";import"./getReactElementRef-B9sY4O0b.js";import"./mergeSlotProps-DAotqHD5.js";import"./debounce-Be36O1Ab.js";import"./Modal-Xx_DAuxP.js";import"./useEventCallback-CsTRRlXt.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-ML0QiAd8.js";import"./Fade-D_O_c1g4.js";import"./Paper-ClVD0o31.js";import"./List-DTJ1rzY1.js";import"./utils-DoM3o7-Q.js";import"./useControlled-CFxyCb-W.js";import"./createSvgIcon-D2IPPG_U.js";import"./OutlinedInput-DZ81owk-.js";import"./FormHelperText-CqbyILKB.js";import"./FormControlLabel-Cr28FXxz.js";import"./Typography-D8sokpBT.js";import"./Switch-CzqwvcGs.js";import"./SwitchBase-D9KptgKZ.js";import"./ButtonBase-B-BThNWO.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-DqBogu0I.js";import"./RadioGroup-BxHvvyZy.js";import"./FormGroup-C9xaqCDH.js";import"./Stack-BIYUXFFU.js";import"./styled-Ai7RJ0M0.js";import"./Box-BVxISqTJ.js";import"./Divider-DUumJmmu.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-zTzqZ_IF.js";import"./FormControl-MYCsooLK.js";import"./isMuiElement-BIGdb7v5.js";import"./Grid-DZVhVXMq.js";import"./useInfiniteQuery-Cn8pql7z.js";import"./suspense-Bt8h633A.js";import"./useBaseQuery-CJEd5-1g.js";import"./index-pI1FnI-C.js";import"./index-BlGn_Li3.js";import"./___vite-browser-external_commonjs-proxy-CKbPVC5y.js";import"./index-CY8VLdQ2.js";import"./Autocomplete-DmNN5ruJ.js";import"./Close-zMHLptrc.js";import"./usePreviousProps-BSoeq9fJ.js";import"./Tooltip-Cq44iNEt.js";import"./Chip-CIjfHXd1.js";import"./IconButton-C_pwG3tG.js";import"./CircularProgress-W3XJwf44.js";import"./ListSubheader-CLUcl9nC.js";import"./Button-Cul-JvC2.js";import"./Container-DJJd4hOz.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const methods = useForm();
    return <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data => data)}>
          <ControlledAutocomplete {...args} />
          <Grid container direction="row" justifyContent="space-between" marginTop={1}>
            <Button disabled={!methods?.formState?.isSubmitSuccessful} children="Reset" color="secondary" onClick={() => methods.reset()} />
            <Button type="submit" disabled={methods?.formState?.isSubmitSuccessful} children="Submit" />
          </Grid>
          {methods?.formState?.isSubmitSuccessful ? <Paper sx={{
          padding: '1.5rem',
          marginTop: '1.5rem'
        }}>
              <Typography variant="h2">Submitted Values</Typography>
              <pre data-testid="result">{JSON.stringify(methods.getValues(), null, 2)}</pre>
            </Paper> : null}
        </form>
      </FormProvider>;
  },
  args: {
    name: 'controlledAutocomplete',
    options: ['Option 1', 'Option 2'],
    rules: {
      required: 'This is required.'
    },
    FieldProps: {
      label: 'Autocomplete Label'
    }
  }
}`,...r.parameters?.docs?.source}}};const Zt=["_ControlledAutoComplete"];export{r as _ControlledAutoComplete,Zt as __namedExportsOrder,Yt as default};
