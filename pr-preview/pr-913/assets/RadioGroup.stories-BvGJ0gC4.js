import{j as o}from"./iframe-CoG_eD6W.js";import{C as p}from"./RadioGroup--hvx7hUW.js";import{B as m}from"./index-BY7cwWhX.js";import{P as l}from"./index-DYh46aeX.js";import{T as n}from"./index-8MVp_n_A.js";import{c as e,d as i}from"./index-BE8Ll7Ot.js";import{G as d}from"./index-BDyGITPx.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-BnhwAm-V.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-VqjmRM_o.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-I9ZHfBzW.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-BhB00eMX.js";import"./styled-CrcATWO9.js";import"./Tooltip-oLaJghdR.js";import"./useTheme-DYBUFgS8.js";import"./memoTheme-CN1XLapj.js";import"./useSlot-l_cpBHym.js";import"./mergeSlotProps-CuYtKo7e.js";import"./useForkRef-9zYUNwSQ.js";import"./useTimeout-q1GWP7GL.js";import"./useControlled-BVDl1GQq.js";import"./useEventCallback-zH8r8cS3.js";import"./getReactElementRef-n9HqNesf.js";import"./Portal-7VZcAwyN.js";import"./utils-D_Ss1Qw4.js";import"./TransitionGroupContext-DiP32wUd.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CIYBUvT1.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DsWpehFA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-xOGqtgga.js";import"./CircularProgress-tDS4AUw-.js";import"./Button-DJVoIG0F.js";import"./Paper-C7UtGvQD.js";import"./Typography-ByO5UaW_.js";import"./index-BiBDMnSv.js";import"./index-BiwFPdxj.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CCNV5-S3.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CTAhp3K4.js";import"./formControlState-Dq1zat_P.js";import"./Select-BYaj2ZYw.js";import"./Menu-BbxzJjKs.js";import"./Popover-DzuLIXX2.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-o__YjBAq.js";import"./debounce-Be36O1Ab.js";import"./Modal-BuuBhc14.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CNiEEGxX.js";import"./Fade-54RPVvaS.js";import"./List-C5woYmQ0.js";import"./createSvgIcon-BZPSTfMo.js";import"./OutlinedInput-CQM4Urfm.js";import"./FormHelperText-D9B_EybF.js";import"./FormControlLabel-Dj3okdwu.js";import"./Switch-uWW0_4XR.js";import"./SwitchBase-C-K9jIoH.js";import"./Radio-BZ06ecad.js";import"./RadioGroup-DJI1jOFA.js";import"./FormGroup-h8CX_LB4.js";import"./Box-B04c7Rsy.js";import"./Divider-buyCaqQp.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-BofL0Z-3.js";import"./styled-BeasdvCJ.js";import"./Grid-BeBOjXU7.js";import"./Container-COr2r_OP.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
