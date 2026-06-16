import{j as o}from"./iframe-DVscMr-A.js";import{C as p}from"./RadioGroup-h_ag5-a_.js";import{B as m}from"./index-BeF-k_6p.js";import{P as l}from"./index-Biy9w6Pi.js";import{T as n}from"./index-DnN6X1jM.js";import{c as e,d as i}from"./index-Dslozi2v.js";import{G as d}from"./index-MzdqpUr1.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-B-0KxPvq.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-wb4CWP8v.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DkCKu5ph.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-J0UlRgLR.js";import"./styled-DQ7SGoXr.js";import"./Tooltip-fH0F2vbV.js";import"./useTheme-YOFO5C4H.js";import"./memoTheme-BWlAx59E.js";import"./useSlot-CcjURTXg.js";import"./mergeSlotProps-2ZD1Wa3p.js";import"./useForkRef-D_2VvoZd.js";import"./useTimeout-zxUPRTwq.js";import"./useControlled-DNBFEVpl.js";import"./useEventCallback-yUNJdQIx.js";import"./getReactElementRef-BdBU57AF.js";import"./Portal-DpqzBqCy.js";import"./utils-3Br-A01V.js";import"./TransitionGroupContext-BG8XIQuv.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-pr2a7puG.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Dq1PDEwT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Rik4d0uu.js";import"./CircularProgress-DG2q71MX.js";import"./Button-C5YW8aoX.js";import"./Paper-CQbuUb0F.js";import"./Typography-CU66rNGi.js";import"./index-CrcoPoGw.js";import"./index-BnViiisy.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-W7CV7YPZ.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BdI1jtcT.js";import"./formControlState-Dq1zat_P.js";import"./Select-DvdmAFVR.js";import"./SelectFocusSourceContext-BTpAiLqB.js";import"./Popover-Cvu36zQJ.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-Bx8d2XL6.js";import"./debounce-Be36O1Ab.js";import"./Modal-CHyTrEbM.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-VQSY8Csy.js";import"./Fade-BDZpyD8d.js";import"./List-ct4XBHDF.js";import"./createSvgIcon-ZxKINfNn.js";import"./OutlinedInput-CY0TCNx8.js";import"./FormHelperText-DTQfoS1X.js";import"./FormControlLabel-xHJRVqLE.js";import"./Switch-D2p0E2hS.js";import"./SwitchBase-hRTrvGbO.js";import"./Radio-BkHQIpvX.js";import"./RadioGroup-Cfs5wAAA.js";import"./FormGroup-DpHjrUnv.js";import"./Stack-D0PqJVFB.js";import"./styled-BgmeM797.js";import"./Box-fBwpr0Q7.js";import"./Divider-DIgW-ZID.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-QdwtLyJp.js";import"./Container-BdxHCcxG.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
