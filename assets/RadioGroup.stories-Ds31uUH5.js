import{j as o}from"./iframe-G1mPJgBf.js";import{C as p}from"./RadioGroup-hi7Mb-pk.js";import{B as m}from"./index-L2w0xRVx.js";import{P as l}from"./index-BFDFNQZR.js";import{T as n}from"./index-BohNTKzF.js";import{c as e,d as i}from"./index-DPTb8TTK.js";import{G as d}from"./index-Dd7L_VAv.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-C-ZLkGLU.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-CDBc_1Ko.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DGpS68tJ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-CksqsLPP.js";import"./styled-Bu4wmneT.js";import"./IconButton-Bcnv2CeG.js";import"./memoTheme-ClxxX8JT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B5xaXwjS.js";import"./useTimeout-EKZwYL1w.js";import"./TransitionGroupContext-F733By2L.js";import"./useForkRef-BD2h0Jdv.js";import"./useEventCallback-C728JWJX.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CUukeIT7.js";import"./Tooltip-DQJZ8sfi.js";import"./useTheme-D1p8Kaqq.js";import"./useSlot-DeTGMu9w.js";import"./mergeSlotProps-D9Hi5YzQ.js";import"./useControlled-_wEooLXW.js";import"./getReactElementRef-D1QwtblH.js";import"./Portal-D2NuCJSx.js";import"./utils-CV6P-8oh.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C0zVRdHz.js";import"./Button-ByjTqYnc.js";import"./Paper-B8ctKAYM.js";import"./Typography-DNGzJ1Ro.js";import"./index-CrcoPoGw.js";import"./index-J2aZCtZS.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CTlX2w7Q.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CXyukB4E.js";import"./formControlState-Dq1zat_P.js";import"./Select-BYk43Zrb.js";import"./SelectFocusSourceContext-DO_9ohPs.js";import"./Popover-CqRJKN8j.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-B2gKoX76.js";import"./debounce-Be36O1Ab.js";import"./Modal-CSvN6E0P.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-wbozj9wt.js";import"./Fade-DRE_fc-F.js";import"./List-NPmmzPN-.js";import"./createSvgIcon-BAr3_gQH.js";import"./OutlinedInput-C3tRGErD.js";import"./FormHelperText-B8V18IsC.js";import"./FormControlLabel-tWenJfV9.js";import"./Switch-ChMWY217.js";import"./SwitchBase-DC5Y6S4X.js";import"./Radio-B20SOU7e.js";import"./RadioGroup-BjboFY-P.js";import"./FormGroup-B0-dPKpp.js";import"./Stack-baAEBtk1.js";import"./styled-DkfJ6ssg.js";import"./Box-B9x9TWbS.js";import"./Divider-SgB52HKQ.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-DzK1vDYp.js";import"./Container-v7PawbDd.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
