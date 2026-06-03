import{j as o}from"./iframe-BXngGBfv.js";import{C as p}from"./RadioGroup-D4Q_7fcp.js";import{B as m}from"./index-ZvN5iItO.js";import{P as l}from"./index-Dc7aN8sI.js";import{T as n}from"./index-Cw2AsxKm.js";import{c as e,d as i}from"./index-Bk46c2ns.js";import{G as d}from"./index-D7EY_zU-.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-CFyTxmyX.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-zzhLjcAz.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CYmoh9g8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-7V78C_da.js";import"./styled-Bawvqwj4.js";import"./Tooltip-16k3P5ny.js";import"./useTheme-C0sMdU1B.js";import"./memoTheme-By_0Hb9I.js";import"./useSlot-CrmQg2MJ.js";import"./mergeSlotProps-Brb8C4Ss.js";import"./useForkRef-BPuQGl16.js";import"./useTimeout-DWqRGYei.js";import"./useControlled-XJJbW9AP.js";import"./useEventCallback-BS9kycBS.js";import"./getReactElementRef-BBa8qN_k.js";import"./Portal-71LMLhER.js";import"./utils-Co-MjcrY.js";import"./TransitionGroupContext-CO0Qzr5e.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Djma3IUa.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-B7Rw7xc_.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CzabJsBp.js";import"./CircularProgress-CH7ElgU6.js";import"./Button-BjebpOto.js";import"./Paper-DbLV-z9R.js";import"./Typography-CV53WmLj.js";import"./index-BiBDMnSv.js";import"./index-Cf4ih-NU.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BJuCOs7n.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-POAGYpGd.js";import"./formControlState-Dq1zat_P.js";import"./Select-CAygNoe6.js";import"./Menu-DGj6ldkx.js";import"./Popover-3ptJ9M55.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-tz8U3nPv.js";import"./debounce-Be36O1Ab.js";import"./Modal-DmtASUzd.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-sSmeMUd4.js";import"./Fade-CaBS8FWJ.js";import"./List-83oLdzCs.js";import"./createSvgIcon-PKFeQm70.js";import"./OutlinedInput-D8j1VWle.js";import"./FormHelperText-C-R3JwUM.js";import"./FormControlLabel-D-20YuFd.js";import"./Switch-Xno7-L_Z.js";import"./SwitchBase-BmDSdJmL.js";import"./Radio-DCMCbOVJ.js";import"./RadioGroup-BskKp_ip.js";import"./FormGroup-BPXNegLF.js";import"./Box-Cs53hwdz.js";import"./Divider-BN0wEXXb.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-DSCZMnTD.js";import"./styled-B3TWJa8B.js";import"./Grid-DhicbWoX.js";import"./Container-BIFp3KrG.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
