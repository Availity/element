import{j as o}from"./iframe-DxDqWgB3.js";import{C as p}from"./RadioGroup-DrpU4ZDq.js";import{B as m}from"./index-CE_ZDuuA.js";import{P as l}from"./index-DGf8uJ3M.js";import{T as n}from"./index-kRUN3OIn.js";import{c as e,d as i}from"./index-C12PZec_.js";import{G as d}from"./index-Dz-uzYEo.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-Bbj6X-Kp.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-cRBbGdId.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-s6qjM2X3.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-Mzgb52Ql.js";import"./styled-C-u4rj0B.js";import"./Tooltip-CU2nv3Au.js";import"./useTheme-CKON97k_.js";import"./memoTheme-CW08UaDq.js";import"./useSlot-DhabbitO.js";import"./mergeSlotProps-CkntHcZx.js";import"./useForkRef-DI5ILbHc.js";import"./useTimeout-Cg12-pSn.js";import"./useControlled-BtuGr2vc.js";import"./useEventCallback-BAtRlhKU.js";import"./getReactElementRef-8K8_YwXV.js";import"./Portal-BC-tKqvb.js";import"./utils-C0firkgU.js";import"./TransitionGroupContext-DQeLAkDQ.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C80LEsEt.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Bq1g08rd.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Cv_OxEAB.js";import"./CircularProgress-X93LMWzE.js";import"./Button-Cfa_uJOq.js";import"./Paper-07-bvRG5.js";import"./Typography-C89Ggk5t.js";import"./index-CrcoPoGw.js";import"./index-CA8wTNp_.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DuolYAV0.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BCXj-Ezv.js";import"./formControlState-Dq1zat_P.js";import"./Select-Cqayly8p.js";import"./SelectFocusSourceContext-IuLaNH-W.js";import"./Popover-ChYq-J8R.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BDEDV9VX.js";import"./debounce-Be36O1Ab.js";import"./Modal-DWjx2hRe.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-COfvuY5V.js";import"./Fade-CrNSUCom.js";import"./List-D2CsPysG.js";import"./createSvgIcon-DYs5Y6Jm.js";import"./OutlinedInput-lQiM0HOI.js";import"./FormHelperText-BTWiYLzM.js";import"./FormControlLabel-C7NGeSpD.js";import"./Switch-CCHmmAjq.js";import"./SwitchBase-D3CCA6Bi.js";import"./Radio-9NIMnnwm.js";import"./RadioGroup-Czt-QDiE.js";import"./FormGroup-C29suHwn.js";import"./Stack-pOcYjPv5.js";import"./styled-CRQ2ZGB4.js";import"./Box-aFyRrUOd.js";import"./Divider-DCUlQGE7.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-B6GnwMzX.js";import"./Container-BXfLwVnI.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
