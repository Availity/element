import{j as o}from"./iframe-igAdvFbl.js";import{C as p}from"./RadioGroup-CcsSvkEB.js";import{B as m}from"./index-C0-lL2nR.js";import{P as l}from"./index-BBkFpnwf.js";import{T as n}from"./index-ChMWNEv3.js";import{c as e,d as i}from"./index-cJoCX_EQ.js";import{G as d}from"./index-z9cH4Dkd.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-shXMhOUa.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-MYCsooLK.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-Bx8k6zBT.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-BIGdb7v5.js";import"./styled-91ph4J30.js";import"./IconButton-C_pwG3tG.js";import"./memoTheme-CLnB_uxM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B-BThNWO.js";import"./useTimeout-BVAWMZsv.js";import"./TransitionGroupContext-ymy7tNok.js";import"./useForkRef-D-t6gd0T.js";import"./useEventCallback-CsTRRlXt.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-W3XJwf44.js";import"./Tooltip-Cq44iNEt.js";import"./useTheme-CIUac4TP.js";import"./useSlot-DFdPJoU3.js";import"./mergeSlotProps-Cu3OtoH3.js";import"./useControlled-CFxyCb-W.js";import"./getReactElementRef-B9sY4O0b.js";import"./Portal-CXKAB8qb.js";import"./utils-BtrN11DB.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-IKBnSf1M.js";import"./Button-Cul-JvC2.js";import"./Paper-ClVD0o31.js";import"./Typography-D8sokpBT.js";import"./index-MVgG_W0q.js";import"./index-LwuFN9gm.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Bjb7RMXU.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CGkPHvag.js";import"./formControlState-Dq1zat_P.js";import"./Select-BnEKPMqA.js";import"./SelectFocusSourceContext-UC_jDJX5.js";import"./Popover-C5OLrl0l.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-DAotqHD5.js";import"./debounce-Be36O1Ab.js";import"./Modal-Xx_DAuxP.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-ML0QiAd8.js";import"./Fade-D_O_c1g4.js";import"./List-DTJ1rzY1.js";import"./createSvgIcon-D2IPPG_U.js";import"./OutlinedInput-DZ81owk-.js";import"./FormHelperText-CqbyILKB.js";import"./FormControlLabel-Cr28FXxz.js";import"./Switch-CzqwvcGs.js";import"./SwitchBase-D9KptgKZ.js";import"./Radio-DqBogu0I.js";import"./RadioGroup-BxHvvyZy.js";import"./FormGroup-C9xaqCDH.js";import"./Stack-BIYUXFFU.js";import"./styled-Ai7RJ0M0.js";import"./Box-BVxISqTJ.js";import"./Divider-DUumJmmu.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-DZVhVXMq.js";import"./Container-DJJd4hOz.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: ControlledRadioGroupProps) => {
    const methods = useForm();
    return <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data => data)}>
          <ControlledRadioGroup {...args}>
            <FormControlLabel control={<Radio />} label="N/A" value="N/A" />
            <FormControlLabel control={<Radio />} label="Yes" value="Yes" />
            <FormControlLabel control={<Radio />} label="No" value="No" />
          </ControlledRadioGroup>
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
    name: 'controlledRadioGroup',
    label: 'Radio Group'
  }
}`,...t.parameters?.docs?.source}}};const Eo=["_ControlledRadioGroup"];export{t as _ControlledRadioGroup,Eo as __namedExportsOrder,zo as default};
