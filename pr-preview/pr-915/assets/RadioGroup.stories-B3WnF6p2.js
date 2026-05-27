import{j as o}from"./iframe-BeW-ShBa.js";import{C as p}from"./RadioGroup-Cab-5lWk.js";import{B as m}from"./index-B-GrkHTI.js";import{P as l}from"./index-BFBORQJF.js";import{T as n}from"./index-BSsohYFg.js";import{c as e,d as i}from"./index-DHE56XfM.js";import{G as d}from"./index-CcUAtZIu.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-n3g2VIij.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-BGOvdkoq.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DwS3dUaL.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-Gc_4vFE3.js";import"./styled-E0CmYcz3.js";import"./Tooltip-UPiMyfZ8.js";import"./useTheme-BPzLpLU0.js";import"./memoTheme-Dx1_-nEN.js";import"./useSlot-BhPPWLJz.js";import"./mergeSlotProps-CGqoVYOm.js";import"./useForkRef-Bgl7H4kw.js";import"./useTimeout-Da9tNn-P.js";import"./useControlled-BpXRfpPn.js";import"./useEventCallback-6Uyg9fGx.js";import"./getReactElementRef-BjNvvstO.js";import"./Portal-BPMEmQxN.js";import"./utils-CvRtdEc9.js";import"./TransitionGroupContext-BUF6kaGb.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-ghuGdCEB.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BvJM40or.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Z8KwVcKF.js";import"./CircularProgress-CiOpdtGa.js";import"./Button-BwdPpmvm.js";import"./Paper-C7ldQuEP.js";import"./Typography-C3HO5zSq.js";import"./index-BiBDMnSv.js";import"./index-BKqV-UiY.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-C3Z68du4.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Cxj9EV6v.js";import"./formControlState-Dq1zat_P.js";import"./Select-DxZlcoBU.js";import"./Menu-CN-C-Du1.js";import"./Popover-BVS0J5pW.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-D8UcRAc-.js";import"./debounce-Be36O1Ab.js";import"./Modal-CnexL54u.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-B02_d13g.js";import"./Fade-D8bMgo8d.js";import"./List-C1Y1JpKl.js";import"./createSvgIcon-BpCrnFel.js";import"./OutlinedInput-DFxqNyAs.js";import"./FormHelperText-DLkF45Vp.js";import"./FormControlLabel-rtHyeW46.js";import"./Switch-B_X6xexg.js";import"./SwitchBase-D-OFjC1o.js";import"./Radio-BNVrWmQP.js";import"./RadioGroup-D9O0pa2h.js";import"./FormGroup-CXZ8nN14.js";import"./Box-BJjonoMC.js";import"./Divider-DULf-jQm.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-CkM3UncO.js";import"./styled-C6cy5gNq.js";import"./Grid-D-BmDj5R.js";import"./Container-CuzKFum9.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
