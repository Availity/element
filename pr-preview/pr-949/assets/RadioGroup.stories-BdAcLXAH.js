import{j as o}from"./iframe-BEwKysCr.js";import{C as p}from"./RadioGroup-D9Zzyyo3.js";import{B as m}from"./index-DgXerHVi.js";import{P as l}from"./index-B77edPTj.js";import{T as n}from"./index-BYEJAIjN.js";import{c as e,d as i}from"./index-B07NIH_W.js";import{G as d}from"./index-C4sW_QjN.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-DMZimdxn.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-DkAX9ifC.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DZ5DvtNE.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-Ds6j6Ubo.js";import"./styled-Bg0-_ABf.js";import"./IconButton-BB9H-X4e.js";import"./memoTheme-DRAFqHbg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DKnYqpgE.js";import"./useTimeout-CgoAjxgp.js";import"./TransitionGroupContext-pIYTZL6v.js";import"./useForkRef-DOnOtXA5.js";import"./useEventCallback-CrQ8pL3N.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BsydgvXb.js";import"./Tooltip-hIdC-Elu.js";import"./useTheme-GtZOwaC6.js";import"./useSlot-BiH5AaTw.js";import"./mergeSlotProps-DrnO3OcF.js";import"./useControlled-SqHPXcV4.js";import"./getReactElementRef-CS040HVY.js";import"./Portal-CDUk8pyx.js";import"./utils-kGYhSz9o.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CytfctCW.js";import"./Button-dWZGUH58.js";import"./Paper-0a0qvbdm.js";import"./Typography-DdaiLWH8.js";import"./index-MVgG_W0q.js";import"./index-BKyxZB2f.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BCBu9Peg.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DpPPs8BD.js";import"./formControlState-Dq1zat_P.js";import"./Select-CCM-Wvl2.js";import"./SelectFocusSourceContext-CInINzuy.js";import"./Popover-DaOq3n4o.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BJEr5Vx4.js";import"./debounce-Be36O1Ab.js";import"./Modal-HL9q2m8c.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BV1Q-DrT.js";import"./Fade-DHWT1KLz.js";import"./List-DPCyJ7f3.js";import"./createSvgIcon-BBwf9uD1.js";import"./OutlinedInput-C9Bj3Clw.js";import"./FormHelperText-CuKBSHwO.js";import"./FormControlLabel-CS5vRZ4l.js";import"./Switch-CGjlBj-8.js";import"./SwitchBase-gfvk7QPN.js";import"./Radio-BIuNKybY.js";import"./RadioGroup-Dgbh2tWz.js";import"./FormGroup-DCv0nEPD.js";import"./Stack-CkUGtwqW.js";import"./styled-nNR7mMu5.js";import"./Box-3XwYnqya.js";import"./Divider-CcMK4Bgo.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-BlMGH9aP.js";import"./Container-CSrQBmhf.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
