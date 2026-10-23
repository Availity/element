import{j as o}from"./iframe-DM2JG2Wv.js";import{C as p}from"./RadioGroup-DJHz9FIR.js";import{B as m}from"./index-DQYiNEqx.js";import{P as l}from"./index-BZbVZ93S.js";import{T as n}from"./index-DASKwMqe.js";import{c as e,d as i}from"./index-D0QEA918.js";import{G as d}from"./index-Dro33RKh.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-DRmN-6ZT.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-DuDHVeRj.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BOyQprAg.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-B6N371AV.js";import"./styled-DsG-VtUm.js";import"./IconButton-Bj7e_4ur.js";import"./memoTheme-BeNhxrAF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-FpBSGXSw.js";import"./useTimeout-DDDxsICF.js";import"./TransitionGroupContext-BViK_5QW.js";import"./useForkRef--lBTfT4q.js";import"./useEventCallback-B8_sGVJg.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D7bBmSyx.js";import"./Tooltip-Ff-XGBQt.js";import"./useTheme-BIdTJdU8.js";import"./useSlot-CtcofBwJ.js";import"./mergeSlotProps-Dz0ZGrQB.js";import"./useControlled-4UyvroS3.js";import"./getReactElementRef-gsi1wQpy.js";import"./Portal-DFUf67sY.js";import"./utils-B1H1HspZ.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-6BpQXPqS.js";import"./Button-p88YkSSM.js";import"./Paper-D6rGRseY.js";import"./Typography-Cb49bwUU.js";import"./index-MVgG_W0q.js";import"./index-DV4r8BJd.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-C29JSttG.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DlqYcycJ.js";import"./formControlState-Dq1zat_P.js";import"./Select-CUSrbkCV.js";import"./SelectFocusSourceContext-DI2xIgZx.js";import"./Popover-LlYF3w6K.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-gJlJxAuh.js";import"./debounce-Be36O1Ab.js";import"./Modal-Bpysy-qr.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Ba2TkHwg.js";import"./Fade-Bb7aty5O.js";import"./List-lGfDTeyH.js";import"./createSvgIcon-CxStVnnE.js";import"./OutlinedInput-BVhxzUTD.js";import"./FormHelperText-DmHrS-f2.js";import"./FormControlLabel-CgZbLNmr.js";import"./Switch-Uj5KOIHe.js";import"./SwitchBase-DE3M2Edh.js";import"./Radio-BvqRFW_F.js";import"./RadioGroup-Dp4TasKT.js";import"./FormGroup-B-vHGHwY.js";import"./Stack-D8O8MXVX.js";import"./styled-Bf965zM_.js";import"./Box-Cqyd88nw.js";import"./Divider-FKTpnAgL.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-CX1e7vz2.js";import"./Container-I8b0yq_j.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
