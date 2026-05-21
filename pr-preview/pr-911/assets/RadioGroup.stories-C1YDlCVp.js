import{j as o}from"./iframe-BP_6obq-.js";import{C as p}from"./RadioGroup-CHGIB2-P.js";import{B as m}from"./index-D0xPWEah.js";import{P as l}from"./index-BcQUJw-W.js";import{T as n}from"./index-EoJdXtZk.js";import{c as e,d as i}from"./index-OtLd_hTL.js";import{G as d}from"./index-Cyg8Zoy-.js";import{R as u,a as c}from"./Types-Uqfp7fgP.js";import{u as b,F as f}from"./index.esm-D-237LQ9.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-DtAGeh-k.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CcVPoqIg.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-Dpdrf9tp.js";import"./styled-tyPDC8H3.js";import"./Tooltip-DfZ6DZ9O.js";import"./useTheme-DbBiTE4S.js";import"./memoTheme-BSboZUOu.js";import"./useSlot-CmZQLFXT.js";import"./mergeSlotProps-8ro87pMD.js";import"./useForkRef-DOgu7oQ4.js";import"./useTimeout-CSJtp0Y8.js";import"./useControlled-DHSx-hEg.js";import"./useEventCallback-BD_ANQY0.js";import"./getReactElementRef-CcD8R4QN.js";import"./Portal-XICOo1di.js";import"./utils-fRJUoSLW.js";import"./TransitionGroupContext-B3nL2djk.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CRXG0rmu.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DsvJwMgL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-8n2sjZ5K.js";import"./CircularProgress-DALVNgNR.js";import"./Button-DKYxn39A.js";import"./Paper-00-tiWk7.js";import"./Typography-xBYBi8Ml.js";import"./index-BiBDMnSv.js";import"./index-CnReW6m-.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CnHEyztA.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CiSkpeaB.js";import"./formControlState-Dq1zat_P.js";import"./Select-Yr3aFb9D.js";import"./Menu-B16pZnWM.js";import"./Popover-B8-deUWB.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-C4cSFGrS.js";import"./debounce-Be36O1Ab.js";import"./Modal-BoTJ9TiT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BmoQCgqO.js";import"./Fade-C9R9e0Yq.js";import"./List-DIXN3EWs.js";import"./createSvgIcon-C8pu6ftq.js";import"./OutlinedInput-BvbUZoKB.js";import"./FormHelperText-DlNTsgkP.js";import"./FormControlLabel-PcokZr4D.js";import"./Switch-BDYdkdO0.js";import"./SwitchBase-Cy3ktZMy.js";import"./Radio-BmUp1QZh.js";import"./RadioGroup-DELYNiGz.js";import"./FormGroup-B81_w-JB.js";import"./Box-CrUjzboj.js";import"./Divider-OjstwTer.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-CMlfGjCP.js";import"./styled-VCZNIqfv.js";import"./Grid-DuXHbjPr.js";import"./Container-CMlBc6YM.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
