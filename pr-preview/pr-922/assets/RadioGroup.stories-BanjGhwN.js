import{j as o}from"./iframe-DOPEDWVE.js";import{C as p}from"./RadioGroup-uk_kJibb.js";import{B as m}from"./index-B920RZd2.js";import{P as l}from"./index-a__vzDUH.js";import{T as n}from"./index-Bc9oImAB.js";import{c as e,d as i}from"./index-DBmw2oKs.js";import{G as d}from"./index-CVbaZk5H.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-BkNDLnsN.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-D6iyS4X7.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DIv8BJCy.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-OUcohH0i.js";import"./styled-LPfbW-Wh.js";import"./Tooltip-VtUuxwVh.js";import"./useTheme-D2iYqlAC.js";import"./memoTheme-8zILCmUA.js";import"./useSlot-C4qJPUpL.js";import"./mergeSlotProps-DNHO_T1K.js";import"./useForkRef-B1Lx8fl-.js";import"./useTimeout-CvyLGLNv.js";import"./useControlled-W_wjgM09.js";import"./useEventCallback-2DpT7fNb.js";import"./getReactElementRef-CylE0SZK.js";import"./Portal-CcIDLVWU.js";import"./utils-C1ZbFEVB.js";import"./TransitionGroupContext-GxBk2Ip_.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DiHBVMXF.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C52uYHTa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CQME6_xK.js";import"./CircularProgress-Bd2XmtNT.js";import"./Button-DHnc0sD-.js";import"./Paper-e-gdlgr6.js";import"./Typography-D_VWbga9.js";import"./index-CrcoPoGw.js";import"./index-NHPSesC7.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Bt1sNrUf.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CBYcclqk.js";import"./formControlState-Dq1zat_P.js";import"./Select-CpDZPS1H.js";import"./SelectFocusSourceContext-BhjBp6ew.js";import"./Popover-BgxDu_AE.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CEgtkqsO.js";import"./debounce-Be36O1Ab.js";import"./Modal-Dz4Wg6rk.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D5hQN3RU.js";import"./Fade-DWzLIVc2.js";import"./List-CVXZp5mU.js";import"./createSvgIcon-URN63_Ch.js";import"./OutlinedInput-L_8zJgVV.js";import"./FormHelperText-CYrlQGob.js";import"./FormControlLabel-Dd2Mqmwt.js";import"./Switch-DQVRQ4_0.js";import"./SwitchBase-C2DjFSld.js";import"./Radio-Z7ssCuQ9.js";import"./RadioGroup-CEVZjNHr.js";import"./FormGroup-DQPvM_H1.js";import"./Stack-CjxkYZ6F.js";import"./styled-DCDHMWdc.js";import"./Box-m-kHsJDm.js";import"./Divider-B3v8nYDN.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-D6ohNbZE.js";import"./Container-5_MJa3VZ.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
