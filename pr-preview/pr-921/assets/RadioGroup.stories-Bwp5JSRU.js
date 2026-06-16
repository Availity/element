import{j as o}from"./iframe-D9ubqhJK.js";import{C as p}from"./RadioGroup-CF9eFj81.js";import{B as m}from"./index-h4r-WnWl.js";import{P as l}from"./index-DryvU1Ls.js";import{T as n}from"./index-jvKCwEAF.js";import{c as e,d as i}from"./index-CSs7pf9D.js";import{G as d}from"./index-hzcYFh1I.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-C44Jn127.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-Chp22M92.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-B4IulI9A.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-CNzi3ipk.js";import"./styled-DXiPKtQZ.js";import"./Tooltip-DJtaByj1.js";import"./useTheme-Bs7bia1b.js";import"./memoTheme-CgUpfGaw.js";import"./useSlot-dFBWOBaM.js";import"./mergeSlotProps-CUVj2Ixj.js";import"./useForkRef-CFXiLCEz.js";import"./useTimeout-TLxlWLEl.js";import"./useControlled-BMamuY7F.js";import"./useEventCallback-BOUt7crc.js";import"./getReactElementRef-MrxWZY03.js";import"./Portal-HXWOitc9.js";import"./utils-C9L-o1yc.js";import"./TransitionGroupContext-By53oEia.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Bfn47NpZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CdRgNr67.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CmaElg-P.js";import"./CircularProgress-BW1moUPm.js";import"./Button-C6KYraw-.js";import"./Paper-D9VaIl9p.js";import"./Typography-CmwrtNIv.js";import"./index-CrcoPoGw.js";import"./index-DNmhIX6F.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DlrnpruC.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BIiQiwwA.js";import"./formControlState-Dq1zat_P.js";import"./Select-CdgqzUcM.js";import"./SelectFocusSourceContext-CuEUKYKV.js";import"./Popover-DhsMvyrY.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-BMpw8A9K.js";import"./debounce-Be36O1Ab.js";import"./Modal-CR4yZ1tw.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-KCj6wAhX.js";import"./Fade-WpG-sZwU.js";import"./List-BzQZ4-oj.js";import"./createSvgIcon-9Ro74DHR.js";import"./OutlinedInput-Dp6fJ7s5.js";import"./FormHelperText-wFz2-NwJ.js";import"./FormControlLabel-BMzoDqJ1.js";import"./Switch-DeW0XF3P.js";import"./SwitchBase-DhBNEaDq.js";import"./Radio-CLI4nFJ5.js";import"./RadioGroup-CzRLiIJo.js";import"./FormGroup-CYRUVGh7.js";import"./Stack-CGmSesTx.js";import"./styled-B7Z91F3L.js";import"./Box-Bn9CddAr.js";import"./Divider-DR9gQ7ZN.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-XUldnHEv.js";import"./Container-vLztGkDr.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
