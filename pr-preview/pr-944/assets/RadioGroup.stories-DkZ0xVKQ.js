import{j as o}from"./iframe-DPgvn2UU.js";import{C as p}from"./RadioGroup-D-fiocNg.js";import{B as m}from"./index-CeFSOpBV.js";import{P as l}from"./index-DuQ2GrkL.js";import{T as n}from"./index-Bj2mBLrK.js";import{c as e,d as i}from"./index-DO8HKLfP.js";import{G as d}from"./index-DiNwh75D.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-DqVS46Sk.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-B-CCEBd1.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-cN7RU9gv.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-CIfsBfEF.js";import"./styled-Bnkr7D-c.js";import"./IconButton-B7NJWIp-.js";import"./memoTheme-BYph2ZTv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C05RGSI7.js";import"./useTimeout-b550rnFU.js";import"./TransitionGroupContext-CFlHgrGu.js";import"./useForkRef-B_9E6GXl.js";import"./useEventCallback-DBIic8Ex.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C6YfH4n8.js";import"./Tooltip-YOgdBn5B.js";import"./useTheme-B7kQ5Jap.js";import"./useSlot-DpB6mlqQ.js";import"./mergeSlotProps-DRvPt2A_.js";import"./useControlled-BRfcL8pA.js";import"./getReactElementRef-vJH3QVIN.js";import"./Portal-DRuBdp-z.js";import"./utils-CA9pXuzB.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BkILu-KG.js";import"./Button-BYYLdAXe.js";import"./Paper-Bg7uCtkj.js";import"./Typography-CPTozpuv.js";import"./index-MVgG_W0q.js";import"./index-DkMl2Zw_.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Bq0V0STh.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DYfqByqT.js";import"./formControlState-Dq1zat_P.js";import"./Select-C71NVgIY.js";import"./SelectFocusSourceContext-TejMP2UB.js";import"./Popover-XaGZ9P8a.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-SFKmFrry.js";import"./debounce-Be36O1Ab.js";import"./Modal-DJSJonwV.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DG1hflfc.js";import"./Fade-pXi3dxmW.js";import"./List-BJ31Te5w.js";import"./createSvgIcon-CVdeguJ_.js";import"./OutlinedInput-BT6k7tdI.js";import"./FormHelperText-DCcVia06.js";import"./FormControlLabel-DpEDB8IM.js";import"./Switch-CslP4g6_.js";import"./SwitchBase-TQhLjsOV.js";import"./Radio-DrWY9wGb.js";import"./RadioGroup-C6Vtjkty.js";import"./FormGroup-DdQAx87u.js";import"./Stack-Br7WCR6b.js";import"./styled-CiHxTfSE.js";import"./Box-BlDR6l9l.js";import"./Divider-DOUeryDl.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-DrKODsgE.js";import"./Container-CIN8FyKG.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
