import{j as o}from"./iframe-BdtdKmg8.js";import{C as p}from"./RadioGroup-aAT6Ax1k.js";import{B as m}from"./index-sfs31Xg8.js";import{P as l}from"./index-Ci1afW8z.js";import{T as n}from"./index-BktFWPxY.js";import{c as e,d as i}from"./index-CLJf8Evv.js";import{G as d}from"./index-y3OLnY3V.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-DVBkF3FQ.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-CLW-YwyF.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-6mG5_X4U.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-VRCGw5Z3.js";import"./styled-DYRRHVQd.js";import"./IconButton-BGWMoxCC.js";import"./memoTheme-BSZO8tET.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Bsasq48R.js";import"./useTimeout-BjzlLD0-.js";import"./TransitionGroupContext-DW5Ji1V0.js";import"./useForkRef-yU1gIY9t.js";import"./useEventCallback-CNW4hkob.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DKwr5YQe.js";import"./Tooltip-B7d6lYcI.js";import"./useTheme-BUr8GPQY.js";import"./useSlot-CQH1JnoL.js";import"./mergeSlotProps-D1CilINf.js";import"./useControlled-qDvReWFA.js";import"./getReactElementRef-BX57xPm_.js";import"./Portal-By3tqOUu.js";import"./utils-B5cCI6Rw.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CIppk9xm.js";import"./Button-DsRHMuVD.js";import"./Paper-BbHjqnIf.js";import"./Typography-Ct1eVQia.js";import"./index-CrcoPoGw.js";import"./index-ByY3g0DH.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BHLlmPIG.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-A8uoF4Ei.js";import"./formControlState-Dq1zat_P.js";import"./Select-BJ67YTJg.js";import"./SelectFocusSourceContext-BALdufV-.js";import"./Popover-D2QOeMg_.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BmhbC6HA.js";import"./debounce-Be36O1Ab.js";import"./Modal-r1fngEGv.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-cYgAzR7a.js";import"./Fade-C-oQ5huf.js";import"./List-kh9aNYzj.js";import"./createSvgIcon-Bq4fCAzJ.js";import"./OutlinedInput-By841vvG.js";import"./FormHelperText-CjBh-oXE.js";import"./FormControlLabel-D9_T4UwB.js";import"./Switch-D7-Gaizw.js";import"./SwitchBase-t0UcAKA4.js";import"./Radio-CwDoUWcu.js";import"./RadioGroup-BPASCs_d.js";import"./FormGroup-Crs6dnJ1.js";import"./Stack-DjOyHPuU.js";import"./styled-BACYX6V0.js";import"./Box-Bdbdbjz0.js";import"./Divider-BFyzYRTs.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-BEc5hWlN.js";import"./Container-5HhabFZh.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
