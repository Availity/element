import{j as o}from"./iframe-D77h7lRS.js";import{C as p}from"./RadioGroup-EJut0G03.js";import{B as m}from"./index-DfVYTiZj.js";import{P as l}from"./index-DgqH9cgp.js";import{T as n}from"./index-VLdNb8Nf.js";import{c as e,d as i}from"./index-DVH5TI0W.js";import{G as d}from"./index-DKJ5gtoF.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-BtDTKsGP.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-Ce2kJr-x.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-9VfVAAyA.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-Blipuvld.js";import"./styled-CDvIACaW.js";import"./Tooltip-BhKuATOF.js";import"./useTheme-CWKAY9AZ.js";import"./memoTheme-DqX_R3KK.js";import"./useSlot-BBYvJbSe.js";import"./mergeSlotProps-qLX7lv7e.js";import"./useForkRef-SW3gFaM3.js";import"./useTimeout-BjR7jkxB.js";import"./useControlled-BR2YzmEr.js";import"./useEventCallback-d4rGFhnJ.js";import"./getReactElementRef-BIPFoYsf.js";import"./Portal-DtDkDNee.js";import"./utils-CC74677U.js";import"./TransitionGroupContext-DCGSqGsz.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-uX8RgR0A.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CCSNmYsA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D6ESZVYa.js";import"./CircularProgress-Bxr3-rHo.js";import"./Button-CJwJUbvG.js";import"./Paper-BiY9noHN.js";import"./Typography-Bljyylya.js";import"./index-CrcoPoGw.js";import"./index-CquEWAAI.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CnEcCUNg.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BJmj-K9U.js";import"./formControlState-Dq1zat_P.js";import"./Select-C4WXADnT.js";import"./SelectFocusSourceContext-Czp42SwI.js";import"./Popover-CwdVeln-.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-Br5GpCfN.js";import"./debounce-Be36O1Ab.js";import"./Modal-DrVB10Rb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-__Xm0d1s.js";import"./Fade-DyYAtDpQ.js";import"./List-R8dOKo6P.js";import"./createSvgIcon-BLoD-eFu.js";import"./OutlinedInput-MSLFQPLk.js";import"./FormHelperText-Ypt_VW2y.js";import"./FormControlLabel-DT8dT1qO.js";import"./Switch-BUzHje9n.js";import"./SwitchBase-aanT7hNQ.js";import"./Radio-CtNllKQQ.js";import"./RadioGroup-DR8oDR1o.js";import"./FormGroup-5D0gupCO.js";import"./Stack-CP02Z4Z2.js";import"./styled-BMl8GMRY.js";import"./Box-o7XdZc8G.js";import"./Divider-ml52RQXY.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-hgY9dIJR.js";import"./Container-BclAzrCm.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
