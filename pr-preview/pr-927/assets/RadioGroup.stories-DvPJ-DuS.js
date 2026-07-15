import{j as o}from"./iframe-DDeFjhwT.js";import{C as p}from"./RadioGroup-BwlIBR6u.js";import{B as m}from"./index-CSwp3I03.js";import{P as l}from"./index-o31oqBcQ.js";import{T as n}from"./index-B0i4PftB.js";import{c as e,d as i}from"./index-BaZRRpT9.js";import{G as d}from"./index-oWqJ9z6g.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-BLlPQQ4J.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-CYQG91-S.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-eu10Xp36.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-C8BOTMMK.js";import"./styled-PQjfDOgQ.js";import"./Tooltip-5o6beSBH.js";import"./useTheme-KKOLTJXa.js";import"./memoTheme-BKUl2Kw8.js";import"./useSlot-SzvoDGen.js";import"./mergeSlotProps-BPESDwW9.js";import"./useForkRef-DgKt8E30.js";import"./useTimeout-Cm2RyAAI.js";import"./useControlled-BH5VVnvv.js";import"./useEventCallback-tCUa2-C3.js";import"./getReactElementRef-BeHDg4ji.js";import"./Portal-BqacPdFW.js";import"./utils-DshWixdw.js";import"./TransitionGroupContext-DKXhXx0i.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-B4bgTElG.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CurJhF0D.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D-CcOUqB.js";import"./CircularProgress-DZuzO0Uv.js";import"./Button-su8UM5h8.js";import"./Paper-igPbegtl.js";import"./Typography-Be3kmzes.js";import"./index-CrcoPoGw.js";import"./index-V6LxtqOC.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DRz9ijBU.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DwKt04Fe.js";import"./formControlState-Dq1zat_P.js";import"./Select-hUhZUIoR.js";import"./SelectFocusSourceContext-CquKgtEw.js";import"./Popover-DktFq9tj.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CjAnYkZH.js";import"./debounce-Be36O1Ab.js";import"./Modal-BpltTEbA.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BGCVqILM.js";import"./Fade-klYlUMvL.js";import"./List-nMnQx56C.js";import"./createSvgIcon-BxZGQxhE.js";import"./OutlinedInput-ZBGK4L-L.js";import"./FormHelperText-C0of87GE.js";import"./FormControlLabel-Ji9c007o.js";import"./Switch-B4_H_B2f.js";import"./SwitchBase-DR9e1Vdv.js";import"./Radio-CNcgpL5h.js";import"./RadioGroup-BxaV2sVI.js";import"./FormGroup-DtvKduvm.js";import"./Stack-D5p-aU6z.js";import"./styled-B5nfTXUF.js";import"./Box-ClrgcKqA.js";import"./Divider-C-2m7oZQ.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-DkuRXmB0.js";import"./Container-BKOvC3qE.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
