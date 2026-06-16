import{j as o}from"./iframe-CskbrvwW.js";import{C as p}from"./RadioGroup-CA-m-JKO.js";import{B as m}from"./index-BA1sIr4x.js";import{P as l}from"./index-D2NoLy7w.js";import{T as n}from"./index-BYkKLoSf.js";import{c as e,d as i}from"./index-CTKUFQuw.js";import{G as d}from"./index-CZsLRVDZ.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-CLvYEEw9.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-CY1-Z9r6.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CfOh6Tof.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-AkziJBw1.js";import"./styled-BsXlxVo_.js";import"./Tooltip-DpvX0KYg.js";import"./useTheme-BYK31DIa.js";import"./memoTheme-DEwbXW4J.js";import"./useSlot-BWiqm7gO.js";import"./mergeSlotProps-BuWg2zjK.js";import"./useForkRef-CJ9Mlrh4.js";import"./useTimeout-tPc9dJl0.js";import"./useControlled-DIqjKUDM.js";import"./useEventCallback-SyYUcrzB.js";import"./getReactElementRef-C03_kC3i.js";import"./Portal-4hvJB8nO.js";import"./utils-JI7-Ixnq.js";import"./TransitionGroupContext-Bfg0KmSK.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C5o6YfE5.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C3QjbCEP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D0cuhZpt.js";import"./CircularProgress-DRIVKGSr.js";import"./Button-NBHJiR2s.js";import"./Paper-C7gSeK8B.js";import"./Typography-C3YNkC5-.js";import"./index-CrcoPoGw.js";import"./index-BWPz21f_.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-B2BnKrH8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-De4oAUc0.js";import"./formControlState-Dq1zat_P.js";import"./Select-ByAJkR7Y.js";import"./SelectFocusSourceContext-BPCr-wpP.js";import"./Popover-DXCvR8dx.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CnXGUKPA.js";import"./debounce-Be36O1Ab.js";import"./Modal-BBxZlvcb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D90u1o6C.js";import"./Fade-6PhvYSTo.js";import"./List-TojBtRhm.js";import"./createSvgIcon-Bhh07A3D.js";import"./OutlinedInput-DIJeNguT.js";import"./FormHelperText-DuMGeBBY.js";import"./FormControlLabel-DU9By6y8.js";import"./Switch-C8V1MSZG.js";import"./SwitchBase-B5TBSL1B.js";import"./Radio-CkEEhUL0.js";import"./RadioGroup-DNnvKS06.js";import"./FormGroup-F9zDzK3f.js";import"./Stack-C_7R7j6r.js";import"./styled-DBnwDxk1.js";import"./Box-ChrZYvSC.js";import"./Divider-CQKuo_rK.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-Dtrs9C3c.js";import"./Container-YINSrinB.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
