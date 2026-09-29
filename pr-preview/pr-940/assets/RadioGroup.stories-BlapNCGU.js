import{j as o}from"./iframe-CGrCKeT2.js";import{C as p}from"./RadioGroup-djzvXRDA.js";import{B as m}from"./index-DmvP-mEg.js";import{P as l}from"./index-Dh2sAMRB.js";import{T as n}from"./index-CZXljNWA.js";import{c as e,d as i}from"./index-6epKdSc3.js";import{G as d}from"./index-DolDcqHq.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-DfPfq1Xk.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-Ba5nyVsP.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DJsBJsMM.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-RR7Ftbg4.js";import"./styled-CotFv3Dr.js";import"./IconButton-dlpyeDck.js";import"./memoTheme-BqDMrUbz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B5P9vk86.js";import"./useTimeout-DnCoFfSV.js";import"./TransitionGroupContext-BBGMeol_.js";import"./useForkRef-BEtKOrY4.js";import"./useEventCallback-y36uneSW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BKyEW5Pk.js";import"./Tooltip-BDnPRKbu.js";import"./useTheme-4bOKZyvR.js";import"./useSlot-BZVhLUF7.js";import"./mergeSlotProps-Dfpv_trn.js";import"./useControlled-DCMdc5dP.js";import"./getReactElementRef-BNGPoDkJ.js";import"./Portal-BYKyeVye.js";import"./utils-BkMf-uLY.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DOUkeG0B.js";import"./Button-BHZdRtrg.js";import"./Paper-DOXN6uva.js";import"./Typography-Bir8nP2f.js";import"./index-CrcoPoGw.js";import"./index-DKQlCnEq.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DmVwQJs6.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Dm5e5Bpr.js";import"./formControlState-Dq1zat_P.js";import"./Select-CTV8LpZw.js";import"./SelectFocusSourceContext-C01S2OkC.js";import"./Popover-BPPXiUal.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-DfxTDm-u.js";import"./debounce-Be36O1Ab.js";import"./Modal-DaH7TrRl.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CUGDXrbh.js";import"./Fade-CllAQl-L.js";import"./List-y2FflAjw.js";import"./createSvgIcon-DSkk_8Bd.js";import"./OutlinedInput-DfoKSt68.js";import"./FormHelperText-CzHZXYcR.js";import"./FormControlLabel-CLZnkdIQ.js";import"./Switch-RFJmoXGw.js";import"./SwitchBase-B4wWvBkW.js";import"./Radio-Dm4oDbtu.js";import"./RadioGroup-CjIXdSfJ.js";import"./FormGroup-A-2cfNzW.js";import"./Stack-_oDMgEvk.js";import"./styled-BjWfuHlM.js";import"./Box-Bi1Xr4Gf.js";import"./Divider-DHaspIrJ.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-CmaXE-H9.js";import"./Container-CUb5VPVp.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
