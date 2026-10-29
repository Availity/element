import{j as o}from"./iframe-CLut6yOe.js";import{C as p}from"./RadioGroup-Cfknkxqt.js";import{B as m}from"./index-DNgDR8tQ.js";import{P as l}from"./index-B1V0ahmp.js";import{T as n}from"./index-DmhD3hPK.js";import{c as e,d as i}from"./index-DroMy-PZ.js";import{G as d}from"./index-BGYc3edq.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-xFE0TLfu.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-BZcEw6H3.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CsURvBpr.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-CAAIFwhI.js";import"./styled-B56iE4qf.js";import"./IconButton-MKfAwX3T.js";import"./memoTheme-BCZ6py50.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B4AmE_nS.js";import"./useTimeout-DSf2abi9.js";import"./TransitionGroupContext-CxTk-KXz.js";import"./useForkRef-CW7nwTzV.js";import"./useEventCallback-BXl50wnQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cb3dAqoX.js";import"./Tooltip-20BxdW9m.js";import"./useTheme-uzqIZvgA.js";import"./useSlot-C8ASSSxZ.js";import"./mergeSlotProps-BoE-e40D.js";import"./useControlled-BMhEC-vi.js";import"./getReactElementRef-CPIcGi-m.js";import"./Portal-buqhKvPN.js";import"./utils-CY0-o-M4.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BphsLqn6.js";import"./Button-CO7SGq6S.js";import"./Paper-CMcH6Gk3.js";import"./Typography-BLWoaJn_.js";import"./index-MVgG_W0q.js";import"./index-CxuuQ7ms.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Dd51Rz_D.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-C4ZzvvPY.js";import"./formControlState-Dq1zat_P.js";import"./Select-Dy9kUNRR.js";import"./SelectFocusSourceContext-BqjsBqoL.js";import"./Popover-D8aHDtre.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BD3yaoOB.js";import"./debounce-Be36O1Ab.js";import"./Modal-RUjatzFH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DrT6KjAn.js";import"./Fade-CkZ97Hml.js";import"./List-Ed_p2skf.js";import"./createSvgIcon-BcCXBLY5.js";import"./OutlinedInput-NqaTAoz7.js";import"./FormHelperText-Du_S5IXp.js";import"./FormControlLabel-DK2k45Ms.js";import"./Switch-bv0zSmLo.js";import"./SwitchBase-B76ZlPUO.js";import"./Radio-C6QDUZlf.js";import"./RadioGroup-DtHGdsBt.js";import"./FormGroup-_FRXrzq-.js";import"./Stack-C0CMzs2G.js";import"./styled-qS0Yrwc6.js";import"./Box-KcVtg1pO.js";import"./Divider-o9_MDQMV.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-CiYph9Ji.js";import"./Container-DKVcPtkF.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
