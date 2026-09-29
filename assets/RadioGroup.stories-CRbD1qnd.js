import{j as o}from"./iframe-5qL0mprR.js";import{C as p}from"./RadioGroup-CUgcPcqe.js";import{B as m}from"./index-D6eeRdCr.js";import{P as l}from"./index-DrpSWOjF.js";import{T as n}from"./index-CJigEfEA.js";import{c as e,d as i}from"./index-C3SWmzio.js";import{G as d}from"./index-ClcKetnN.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-CGn8amwb.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-Dcj4iUlW.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-D5FH_KgV.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-DHbarLNo.js";import"./styled-CoUwmM87.js";import"./IconButton-B8_cpiYd.js";import"./memoTheme-DGTRKnQQ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CEBWCJ86.js";import"./useTimeout-B8tDrGFN.js";import"./TransitionGroupContext-DG4g3onZ.js";import"./useForkRef-B_tBAx6E.js";import"./useEventCallback-DqMc6arA.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BqSWo9RJ.js";import"./Tooltip-P-kE-0cn.js";import"./useTheme-Dl3uMx7u.js";import"./useSlot-Cn1CdUSX.js";import"./mergeSlotProps-BLlOPPFY.js";import"./useControlled-CSqunifB.js";import"./getReactElementRef-DBt8lh_B.js";import"./Portal-BaL9DcFZ.js";import"./utils-ZWxhk7o5.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BldRbwm9.js";import"./Button-8WJV18MQ.js";import"./Paper-CT3iXlM2.js";import"./Typography-F-Y5u_yh.js";import"./index-CrcoPoGw.js";import"./index-CD_y2Btm.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D8DRNpD6.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DVY6ao7R.js";import"./formControlState-Dq1zat_P.js";import"./Select-Dc1mU1Pl.js";import"./SelectFocusSourceContext-CEJvL2Re.js";import"./Popover-fOCUh9Nt.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BAEmNdNM.js";import"./debounce-Be36O1Ab.js";import"./Modal-CAwaW-IN.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DdJYMJ-d.js";import"./Fade-CwTmGpyj.js";import"./List-8rgLrAmz.js";import"./createSvgIcon-CZsBBnxz.js";import"./OutlinedInput-exuQdaqt.js";import"./FormHelperText-Bngb2_Es.js";import"./FormControlLabel-cDTw_uEy.js";import"./Switch-DUksUYmW.js";import"./SwitchBase-C72NdBTb.js";import"./Radio-BRuYCTD8.js";import"./RadioGroup-PluZ5qs0.js";import"./FormGroup-DUp1hayB.js";import"./Stack-CnLSR6do.js";import"./styled-rFpyV319.js";import"./Box-jTQ-hmH5.js";import"./Divider-DdnnBiCY.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-B5L6Dh7M.js";import"./Container-B0mlIeY3.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
