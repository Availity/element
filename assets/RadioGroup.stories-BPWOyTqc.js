import{j as o}from"./iframe-Cwe65xm_.js";import{C as p}from"./RadioGroup-BuaY7TZS.js";import{B as m}from"./index-B70TfKNL.js";import{P as l}from"./index-Bn86Cr3B.js";import{T as n}from"./index-D9T6YpUv.js";import{c as e,d as i}from"./index-CPjIJxsx.js";import{G as d}from"./index-GEX0zvPr.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-4wPmvIF7.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-DZK54C7D.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-BhG-OBsq.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-CFlSzKZl.js";import"./styled-DQU8Bodb.js";import"./Tooltip-DXMour_H.js";import"./useTheme-ClD_legM.js";import"./memoTheme-JTO0J2AE.js";import"./useSlot-DT6vlKow.js";import"./mergeSlotProps-DptD_Py-.js";import"./useForkRef-B3dE_Xi9.js";import"./useTimeout-B979BKpc.js";import"./useControlled-B5htf0na.js";import"./useEventCallback-Cus8kDUU.js";import"./getReactElementRef-BO3eeWP1.js";import"./Portal-MprWoh0y.js";import"./utils-E62tsqSg.js";import"./TransitionGroupContext-DfpprYK4.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CHdu95RH.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CLwVH8iN.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B2MrdNo3.js";import"./CircularProgress-Gl2vZfvX.js";import"./Button-BPlwCXwF.js";import"./Paper-BllScWLN.js";import"./Typography-CwzEaEbc.js";import"./index-CrcoPoGw.js";import"./index-Dwd1T5KI.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DVcTXB35.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CoNS-ZSY.js";import"./formControlState-Dq1zat_P.js";import"./Select-Bee2J2VA.js";import"./SelectFocusSourceContext-8cwNuwWa.js";import"./Popover-BqjsgymF.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-DKtwpG52.js";import"./debounce-Be36O1Ab.js";import"./Modal-DXesMzil.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BuJJs5yg.js";import"./Fade-DVmn_b9B.js";import"./List-CdxcmJFC.js";import"./createSvgIcon-BCdDg_61.js";import"./OutlinedInput-CVtI0giW.js";import"./FormHelperText-CcTnWzja.js";import"./FormControlLabel-pIK1R6xI.js";import"./Switch-COmW8gnw.js";import"./SwitchBase-vEUtDMIo.js";import"./Radio-B-ELdh2p.js";import"./RadioGroup-7oQM0Exi.js";import"./FormGroup-bSlB8GHJ.js";import"./Stack-CRAKFpNP.js";import"./styled-Drm9UKpq.js";import"./Box-DUWM_zX0.js";import"./Divider-DdiTjDHI.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-XXlh0rR0.js";import"./Container-Bu5eEzkf.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
