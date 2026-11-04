import{j as o}from"./iframe-La0hozmm.js";import{C as p}from"./RadioGroup-BEWfgu8-.js";import{B as m}from"./index-CT5mpeGo.js";import{P as l}from"./index-CVxIkWKb.js";import{T as n}from"./index-OkwykyCM.js";import{c as e,d as i}from"./index-L9cyz4q_.js";import{G as d}from"./index-eHZf6pHN.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-DXzyLXtj.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-CgcW0UT-.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-ClnyVQ0Y.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-VxhL7QTS.js";import"./styled-06PLk0qx.js";import"./IconButton-BEf7IA6l.js";import"./memoTheme-CzcgztNR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-RNjBI3PY.js";import"./useTimeout-CjP9kdgI.js";import"./TransitionGroupContext-Db3Z6NMb.js";import"./useForkRef-CYgSXLxN.js";import"./useEventCallback-CkMNQS0_.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DKXLIFka.js";import"./Tooltip-DDgYhS1x.js";import"./useTheme-D5kgDNuB.js";import"./useSlot-nKi4u3tI.js";import"./mergeSlotProps-CfiUOF2K.js";import"./useControlled-DV2EMPBp.js";import"./getReactElementRef-TIeMXNsW.js";import"./Portal-QPUTbchU.js";import"./utils-C_Yf081A.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-o4xrbGrj.js";import"./Button-x0oW_Zme.js";import"./Paper-BvBPQPSI.js";import"./Typography-F8uVoBR9.js";import"./index-MVgG_W0q.js";import"./index-D89vBAiO.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BIfisKmW.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-YrmrWU_k.js";import"./formControlState-Dq1zat_P.js";import"./Select-DTVzxWrU.js";import"./SelectFocusSourceContext-BppuX2PY.js";import"./Popover-CV1jitSE.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BDDINM1D.js";import"./debounce-Be36O1Ab.js";import"./Modal-lk5DA8tl.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BHVJATGi.js";import"./Fade-DsXUXhXd.js";import"./List-B0CpRJrl.js";import"./createSvgIcon-CogVIOis.js";import"./OutlinedInput-CTfBg3Vp.js";import"./FormHelperText-Bk8ZiDzG.js";import"./FormControlLabel-BuAbVyu2.js";import"./Switch-Dn7ksyeq.js";import"./SwitchBase-BXj3k-eu.js";import"./Radio-DrT8Tsp3.js";import"./RadioGroup-B9XhnsTM.js";import"./FormGroup-BFP8PGgB.js";import"./Stack-COfd3H0w.js";import"./styled-99JPjMFe.js";import"./Box-B4jhZySH.js";import"./Divider-BdcGsQEp.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-DTxUT0NX.js";import"./Container-Bl6cg8Xd.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
