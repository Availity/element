import{j as o}from"./iframe-DTy-Hi1D.js";import{C as p}from"./RadioGroup-ERsPJX_S.js";import{B as m}from"./index-BWwQVXX2.js";import{P as l}from"./index-CQ9SzY7-.js";import{T as n}from"./index-B3nHNvBt.js";import{c as e,d as i}from"./index-BW2CNFKP.js";import{G as d}from"./index-zuOxgOiJ.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-DWa30rWd.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-DauWaPA-.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BecUCFWL.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-BqP85GjQ.js";import"./styled-aP0uaM-i.js";import"./IconButton-CZkpNN92.js";import"./memoTheme-BG1xBytH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DQHg31rx.js";import"./useTimeout-Dox0L-0x.js";import"./TransitionGroupContext-vVRi092a.js";import"./useForkRef-Cs-hla5u.js";import"./useEventCallback-wWQn7yuE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dsur0AFP.js";import"./Tooltip-DHFGNIkU.js";import"./useTheme-D2uWiRt2.js";import"./useSlot-Bv56ZHL8.js";import"./mergeSlotProps-DbXyWffN.js";import"./useControlled-DJ-ZRmZ2.js";import"./getReactElementRef-Czal8mnO.js";import"./Portal-BwzhUyNs.js";import"./utils-UH3J-pbT.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-i2bvpF4l.js";import"./Button-BSzYbaIQ.js";import"./Paper-BB7D87hg.js";import"./Typography-BE1U26X8.js";import"./index-CrcoPoGw.js";import"./index-DJUckNHv.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-3YRNiFr2.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BhJzQqzw.js";import"./formControlState-Dq1zat_P.js";import"./Select-DkS3VRNH.js";import"./SelectFocusSourceContext-B0GTmmdc.js";import"./Popover-pG0yFIDd.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BWinZWd0.js";import"./debounce-Be36O1Ab.js";import"./Modal-C1xsDPMc.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-7k1loi6N.js";import"./Fade-CkUvZM_R.js";import"./List-CK8mYBos.js";import"./createSvgIcon-Bsd6X5Qz.js";import"./OutlinedInput-BsxOEMJo.js";import"./FormHelperText-BqXE1i86.js";import"./FormControlLabel-DU0Bs6VA.js";import"./Switch-CQO10KB0.js";import"./SwitchBase-B6HLL3af.js";import"./Radio-CT0ik4u9.js";import"./RadioGroup-DhRVjKyW.js";import"./FormGroup-DeHCopE_.js";import"./Stack-D5xuPFAT.js";import"./styled-CiCMHiUo.js";import"./Box-BiTKfYdJ.js";import"./Divider-dXGoqsdo.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-9G99kq7Q.js";import"./Container-CKdO9iiE.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
