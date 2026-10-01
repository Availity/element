import{j as o}from"./iframe-BfiSjCZE.js";import{C as p}from"./RadioGroup-37HiGCAG.js";import{B as m}from"./index-BnEi8s_n.js";import{P as l}from"./index-BqDXSYAc.js";import{T as n}from"./index-Ditxfwx6.js";import{c as e,d as i}from"./index-BP56GXIS.js";import{G as d}from"./index-DXU92sR7.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-kcvTnjHx.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-C9VIskN5.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-C5CMMi3k.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-CIl3go_L.js";import"./styled-B9LoXHeR.js";import"./IconButton-CFfT0ndL.js";import"./memoTheme-Bf2lNlfa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B0Rj5enX.js";import"./useTimeout-Dvw-KAbd.js";import"./TransitionGroupContext-BprlU7j-.js";import"./useForkRef-KHwM-Xb0.js";import"./useEventCallback-BRDDRqyT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DFM5h0gz.js";import"./Tooltip-DQOY4bTe.js";import"./useTheme-CyCmmmWE.js";import"./useSlot-BvJ3REjy.js";import"./mergeSlotProps-d8P6odjW.js";import"./useControlled-DuHd5Dfi.js";import"./getReactElementRef-DrqUH2UJ.js";import"./Portal-1iQSKTOk.js";import"./utils-CZVImzMM.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DsKdZe-B.js";import"./Button-CWR2xa5V.js";import"./Paper-8FyfnLjY.js";import"./Typography-C4HmXqwR.js";import"./index-MVgG_W0q.js";import"./index-CnlcVsMi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-pfgupZ4n.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BkT6Jibn.js";import"./formControlState-Dq1zat_P.js";import"./Select-Bc7HWole.js";import"./SelectFocusSourceContext-Bs6RAa9A.js";import"./Popover-B_IG8L-c.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-DuqHZ2js.js";import"./debounce-Be36O1Ab.js";import"./Modal-DeYFWYjf.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CyrGgScl.js";import"./Fade-DEFCsiCh.js";import"./List-DSZlyKTP.js";import"./createSvgIcon-DV4tT70v.js";import"./OutlinedInput-DF7uYzJm.js";import"./FormHelperText-CxIv3Am1.js";import"./FormControlLabel-CdBL0lN_.js";import"./Switch-Q5fXJ2Uu.js";import"./SwitchBase-AFFAmAWt.js";import"./Radio-C4YJulXy.js";import"./RadioGroup-DcY1quof.js";import"./FormGroup-BdAfT7sS.js";import"./Stack-ggz2xYsp.js";import"./styled-Bty96-Ys.js";import"./Box-CRTcjAl_.js";import"./Divider-CELaABvA.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-C2RK_1Jw.js";import"./Container-B6cEEQtr.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
