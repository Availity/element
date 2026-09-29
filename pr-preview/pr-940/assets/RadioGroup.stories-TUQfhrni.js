import{j as o}from"./iframe-Cn9qPtrp.js";import{C as p}from"./RadioGroup-CkaDt-oy.js";import{B as m}from"./index-BIlLMFwD.js";import{P as l}from"./index-CYG2bEQ2.js";import{T as n}from"./index-D2wuP2WF.js";import{c as e,d as i}from"./index-CcgQ8l9r.js";import{G as d}from"./index-CyKw9SYR.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-B9BKJgjY.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-BmLSzKHH.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-TW3X2czK.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-DcGc7pTf.js";import"./styled-D2CDconu.js";import"./IconButton-BEbO5w96.js";import"./memoTheme-6yds69P_.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-2oFpmJBY.js";import"./useTimeout-BoQb9RDS.js";import"./TransitionGroupContext-CFwcVVqT.js";import"./useForkRef-Dq6ZsqmR.js";import"./useEventCallback-CiCWuPbq.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DAUt--dg.js";import"./Tooltip-DKs25lhA.js";import"./useTheme-B6YVOUYP.js";import"./useSlot-Cknh0r9X.js";import"./mergeSlotProps-Bjka9Klf.js";import"./useControlled-BIT0kvxY.js";import"./getReactElementRef-6Fd7mh7z.js";import"./Portal-BWZt9Zv4.js";import"./utils-BlV9er3y.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-yJhFLJQp.js";import"./Button-Cp2YlGAc.js";import"./Paper-DwYDYFlD.js";import"./Typography-CDKB6cUx.js";import"./index-CrcoPoGw.js";import"./index-DWYQ4eQk.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-LXn_mqm4.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BxiY_bl4.js";import"./formControlState-Dq1zat_P.js";import"./Select-DUVCVT7_.js";import"./SelectFocusSourceContext-ePGizTGK.js";import"./Popover-C9eTKBeN.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-DuRirGHi.js";import"./debounce-Be36O1Ab.js";import"./Modal-DH6vGrJY.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CvWpQ392.js";import"./Fade-BsEF4Oay.js";import"./List-CDFvHcS1.js";import"./createSvgIcon-CK6UXRVe.js";import"./OutlinedInput-havtgxzd.js";import"./FormHelperText-BWYBhNPM.js";import"./FormControlLabel-BGe8VaE5.js";import"./Switch-BdwK0ecZ.js";import"./SwitchBase-BoThDgH3.js";import"./Radio-BupWkmwv.js";import"./RadioGroup-CG6yeKGL.js";import"./FormGroup-DJyf2790.js";import"./Stack-DmctAkNR.js";import"./styled-DhBMIDqB.js";import"./Box-CeYPkCsw.js";import"./Divider-ejbo4Ydy.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-BbGFtGav.js";import"./Container-y4mOFKcU.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
