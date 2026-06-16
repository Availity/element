import{j as o}from"./iframe-Cyg9aVcX.js";import{C as p}from"./RadioGroup-CrrkOvkT.js";import{B as m}from"./index-h-exa6rv.js";import{P as l}from"./index-DqJSta0x.js";import{T as n}from"./index-BvOEaAPF.js";import{c as e,d as i}from"./index-CVel8P3L.js";import{G as d}from"./index-DUYfXBKq.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-Ce7wzlsb.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-wLZjahnK.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BUS69YTZ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-D3GE3m2r.js";import"./styled-Bd0VbO2U.js";import"./Tooltip-B872xQRW.js";import"./useTheme-CzQvHrc-.js";import"./memoTheme-jifZnr2J.js";import"./useSlot-BxXD7OXK.js";import"./mergeSlotProps-cvNGDztE.js";import"./useForkRef-DU61cGWF.js";import"./useTimeout-D6StvTbU.js";import"./useControlled-LzVIFy4V.js";import"./useEventCallback-C8dig9Cp.js";import"./getReactElementRef-CtSLxyS5.js";import"./Portal-CbV_9_tw.js";import"./utils-B1U3sbvV.js";import"./TransitionGroupContext-Bf2CmkMl.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-D3SvR_Jp.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D_0lSByq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BvuHtZ4U.js";import"./CircularProgress-DgTEISy3.js";import"./Button-BmGuU9Jv.js";import"./Paper-CQzqH1w0.js";import"./Typography-fPTXF0ua.js";import"./index-CrcoPoGw.js";import"./index-PRHxF3E5.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-yyAmYjGv.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BGxiyC7J.js";import"./formControlState-Dq1zat_P.js";import"./Select-IhPRkG6b.js";import"./SelectFocusSourceContext-C-S6pfu1.js";import"./Popover-DGII8wAD.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-N0Bp7CtQ.js";import"./debounce-Be36O1Ab.js";import"./Modal-BKoLjwX6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Dt1aobyE.js";import"./Fade-BlsC_kbX.js";import"./List-BhseiF0d.js";import"./createSvgIcon-C4GbkCiK.js";import"./OutlinedInput-CwV_y8Kk.js";import"./FormHelperText-BEXj3jiV.js";import"./FormControlLabel-jOwSmfh2.js";import"./Switch-BNJ4GIvD.js";import"./SwitchBase-BLP-bgBx.js";import"./Radio-hpxBX7ZN.js";import"./RadioGroup-zueoi5PR.js";import"./FormGroup-CeG0nHdE.js";import"./Stack-BB9tt9ZR.js";import"./styled-JRnDCPkO.js";import"./Box-DlTv5Oab.js";import"./Divider-BNMEa6zC.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-ss4buRXG.js";import"./Container-6TunXfMs.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
