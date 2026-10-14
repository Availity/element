import{j as o}from"./iframe-h0MgQYlb.js";import{C as p}from"./RadioGroup-DkBRUqJU.js";import{B as m}from"./index-_zAfcFR5.js";import{P as l}from"./index-DqniC6Sr.js";import{T as n}from"./index-vTaYrtpe.js";import{c as e,d as i}from"./index-BD61RVnX.js";import{G as d}from"./index-DDm8yHLq.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-DO0WHQxJ.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-BgnOztMe.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CzHvh1jI.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-DHZpsMdk.js";import"./styled-BqHoSPCQ.js";import"./IconButton-gyouzdWj.js";import"./memoTheme-XXgMlyY8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DGaEQWnN.js";import"./useTimeout-DZyw5ypU.js";import"./TransitionGroupContext-BQlZajXI.js";import"./useForkRef-CKNxtvC9.js";import"./useEventCallback-DzEyioes.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Ce_dbRGa.js";import"./Tooltip-cnLuDxtR.js";import"./useTheme-ipJVwYFq.js";import"./useSlot-DRVd6-GX.js";import"./mergeSlotProps-D1gF_ZlB.js";import"./useControlled-4IqYUsvs.js";import"./getReactElementRef-zdjSJbKU.js";import"./Portal-De7hiZQn.js";import"./utils-DputtVCR.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CeTvmasO.js";import"./Button-DFw25j8B.js";import"./Paper-Bzbluycl.js";import"./Typography-DKkmO78y.js";import"./index-MVgG_W0q.js";import"./index-BfEcMr2H.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CJ2gQRBv.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-ai4y9w6P.js";import"./formControlState-Dq1zat_P.js";import"./Select-BHNpSFEz.js";import"./SelectFocusSourceContext-AoxeqCNi.js";import"./Popover-yoB3AMXB.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CQCB7Z3d.js";import"./debounce-Be36O1Ab.js";import"./Modal-Br_uJxcw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-KJ2tZ5Vr.js";import"./Fade-z7eIM_c6.js";import"./List-DZrQ3uAf.js";import"./createSvgIcon-BnwFzQLv.js";import"./OutlinedInput-BuAc6qqn.js";import"./FormHelperText-AZVpt9j-.js";import"./FormControlLabel-a6mRqus2.js";import"./Switch-CLZpABLm.js";import"./SwitchBase-Dtg29Sna.js";import"./Radio-CXfh_6OV.js";import"./RadioGroup-BlqwT0bO.js";import"./FormGroup-BOwHFNcU.js";import"./Stack-B9I8dIEY.js";import"./styled-ZbNx8Tx8.js";import"./Box-CawMSGjY.js";import"./Divider-IpoUtaBO.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-BGvSYpEY.js";import"./Container-CVSHMzmU.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
