import{j as o}from"./iframe-D39zpO5D.js";import{C as p}from"./RadioGroup-3Qrtbkn7.js";import{B as m}from"./index-CT8p7-xb.js";import{P as l}from"./index-CalBDkhA.js";import{T as n}from"./index-CIttbvMR.js";import{c as e,d as i}from"./index-CRBGvwQd.js";import{G as d}from"./index-BHfSa4RT.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-DI-vKELN.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-yV9__Y8G.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DAAm-Ep5.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-B_WcrTr3.js";import"./styled-DVn78CF9.js";import"./IconButton-1y7-X1Ns.js";import"./memoTheme-DS1Qd1tD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C5qFdqG6.js";import"./useTimeout-DkqtJI-P.js";import"./TransitionGroupContext-iGlL40r0.js";import"./useForkRef-DNCE6AYe.js";import"./useEventCallback-CTE8ZTt3.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DZf4mQi8.js";import"./Tooltip-T0tiLXY7.js";import"./useTheme-Q_YzHohC.js";import"./useSlot-BR7cWQ8J.js";import"./mergeSlotProps-hvpDzkoH.js";import"./useControlled-Dc7tfWw6.js";import"./getReactElementRef-BiLy3DMf.js";import"./Portal-D0_VnBDB.js";import"./utils-BiqFTD-G.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CHrZTrOT.js";import"./Button-BxFiSb--.js";import"./Paper-B079EtYg.js";import"./Typography-lHvxoPWM.js";import"./index-CrcoPoGw.js";import"./index-LJlq2DD9.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DrCHR_XG.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CbsmgfPu.js";import"./formControlState-Dq1zat_P.js";import"./Select-Cr_b3k2m.js";import"./SelectFocusSourceContext-CAoytt1x.js";import"./Popover-CLbI9j0Y.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-VT4Oa8rE.js";import"./debounce-Be36O1Ab.js";import"./Modal-Bcdi7MY2.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BGS6hD_O.js";import"./Fade-C2SBq3LE.js";import"./List-C3S5OFLg.js";import"./createSvgIcon-CXilsj0Y.js";import"./OutlinedInput-DUfnrBns.js";import"./FormHelperText-SrmT5h7r.js";import"./FormControlLabel-DlhlN1bF.js";import"./Switch-DWJuNNrz.js";import"./SwitchBase-Dtvf4WNX.js";import"./Radio-D-0z7h1P.js";import"./RadioGroup-BF-ujAZJ.js";import"./FormGroup-DlBhWtzs.js";import"./Stack-DtFT-rmC.js";import"./styled-D2W9iR9V.js";import"./Box-MvPvGRqH.js";import"./Divider-m_CRUwIv.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-sUXan3gB.js";import"./Container-Bg9CFWCo.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
