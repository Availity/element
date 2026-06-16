import{j as o}from"./iframe-C9_PxSGQ.js";import{C as p}from"./RadioGroup-CCw9d3zu.js";import{B as m}from"./index-ButV5MJr.js";import{P as l}from"./index-Bjbz6YkZ.js";import{T as n}from"./index-Bwm7V2AF.js";import{c as e,d as i}from"./index-CE6aNSs8.js";import{G as d}from"./index-Cwp1bTGK.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-CAaGANuF.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-DXuwkCpR.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CpMC7EHx.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-BE5icW1i.js";import"./styled-B-vqXkzy.js";import"./Tooltip-FRBJUwm-.js";import"./useTheme-BHbpGC30.js";import"./memoTheme-BxvcW3UF.js";import"./useSlot-B-bGbgrQ.js";import"./mergeSlotProps-DQ8_Kw8O.js";import"./useForkRef-CmIALVnC.js";import"./useTimeout-BMn8x6pQ.js";import"./useControlled-BGxEnoNZ.js";import"./useEventCallback-DieoYw-U.js";import"./getReactElementRef-on-DwLqm.js";import"./Portal-Ct4gHjrk.js";import"./utils-8dHd4F9E.js";import"./TransitionGroupContext-BZ4pLHPO.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BDX3RUX-.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BjLNslZW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-k4M9aDLt.js";import"./CircularProgress-vDDdOi_d.js";import"./Button-DtK3QmjS.js";import"./Paper-DGceIsLw.js";import"./Typography-B7ymJCK8.js";import"./index-CrcoPoGw.js";import"./index-Ddg0Heb3.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-FGOQRPT3.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BeY29v7P.js";import"./formControlState-Dq1zat_P.js";import"./Select-DcupVlEN.js";import"./SelectFocusSourceContext-Fw-FsAu5.js";import"./Popover-Dc2RDNtf.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BJFY07Zq.js";import"./debounce-Be36O1Ab.js";import"./Modal-CUp8vkO1.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-5mRpAKll.js";import"./Fade-BLrbHvJ9.js";import"./List-DWo7-1hB.js";import"./createSvgIcon-DoDU4gSx.js";import"./OutlinedInput-BZW58KdM.js";import"./FormHelperText-CQ0DNzl4.js";import"./FormControlLabel-DQ-Rgi5d.js";import"./Switch-C9aFTenp.js";import"./SwitchBase-CbZ2kkmp.js";import"./Radio-DCg2Gj6y.js";import"./RadioGroup-DJuShQt6.js";import"./FormGroup-mRbk2rO2.js";import"./Stack-BEdSkyO_.js";import"./styled-v5MGqYmj.js";import"./Box-DwMYriWl.js";import"./Divider-BU7503P_.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-AdyG_hrd.js";import"./Container-DSjJo15B.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
