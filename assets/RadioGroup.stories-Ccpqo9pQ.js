import{j as o}from"./iframe-QKKiXGe2.js";import{C as p}from"./RadioGroup-D0_D66Z9.js";import{B as m}from"./index-Dx_zFY-v.js";import{P as l}from"./index-gR99Hw5I.js";import{T as n}from"./index-p3f1BLXv.js";import{c as e,d as i}from"./index-Cvupsb9L.js";import{G as d}from"./index-DmDUxSlw.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-BqbkkwU8.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-CitCh22I.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BS7uljQq.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-BPsBBR2z.js";import"./styled-CQy7SchW.js";import"./IconButton-SAs9Di6J.js";import"./memoTheme-CZ6h3Fbh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BjGfF1Y_.js";import"./useTimeout-DkvHtZOb.js";import"./TransitionGroupContext-CAofQ-AT.js";import"./useForkRef-GKR9CYz5.js";import"./useEventCallback-KenlF9RE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BAVpeqhg.js";import"./Tooltip-BYG0wW6K.js";import"./useTheme-CobnQWC-.js";import"./useSlot-DRcEuyBg.js";import"./mergeSlotProps-C7lIBrBK.js";import"./useControlled-BjERoBEC.js";import"./getReactElementRef-DpOU19qE.js";import"./Portal-JL7agaji.js";import"./utils-Dh1OrGpA.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CqRX49VI.js";import"./Button-B0ZWu58J.js";import"./Paper-Bu_9L5He.js";import"./Typography-lfATY7Ds.js";import"./index-CrcoPoGw.js";import"./index-C-csxGdp.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D3LX6zM9.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-D_H32dE9.js";import"./formControlState-Dq1zat_P.js";import"./Select-DSMEK_KK.js";import"./SelectFocusSourceContext-Iss43-gE.js";import"./Popover-DfTMYM2R.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CpR-3M6H.js";import"./debounce-Be36O1Ab.js";import"./Modal-WlFR6ZW0.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Veo0zKS5.js";import"./Fade-BA-tR7QB.js";import"./List-jtBebsxm.js";import"./createSvgIcon-Bm4mBUxC.js";import"./OutlinedInput-Cudg-yYO.js";import"./FormHelperText-DI4TFjly.js";import"./FormControlLabel-DzVdZDHy.js";import"./Switch-D-dXUd1u.js";import"./SwitchBase-BB6lrJXc.js";import"./Radio-Bqh7DeHt.js";import"./RadioGroup-SwtLDsyW.js";import"./FormGroup-THy_K4lA.js";import"./Stack-vCt2ORwh.js";import"./styled-CL_ITmKE.js";import"./Box-DS6KTGM7.js";import"./Divider-U3oIKmQv.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-BWZayuEN.js";import"./Container-B58issDp.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
