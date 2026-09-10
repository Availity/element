import{j as o}from"./iframe-ujVaYq5z.js";import{C as p}from"./RadioGroup-CC0yCaBq.js";import{B as m}from"./index-612CGizF.js";import{P as l}from"./index-CGMJ1u06.js";import{T as n}from"./index-sKyEjHXt.js";import{c as e,d as i}from"./index-DuhTuEga.js";import{G as d}from"./index-BOD_Negu.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-DxUkVbf_.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-DlRG_fK7.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-Cvu2sY6d.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-rsUHqA_z.js";import"./styled-B-xCudEP.js";import"./IconButton-MZkZlGxG.js";import"./memoTheme-CdGwTPP7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-iPF5PiZW.js";import"./useTimeout-NHks1NG8.js";import"./TransitionGroupContext-4IQuvIV5.js";import"./useForkRef-DbBKzesF.js";import"./useEventCallback-Ckojbqp4.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-see__pNb.js";import"./Tooltip-5f47SB-B.js";import"./useTheme-CRyXlIuJ.js";import"./useSlot-Bx_FYgWG.js";import"./mergeSlotProps-KSZa1rpd.js";import"./useControlled-BffgEsp1.js";import"./getReactElementRef-SADr8eSm.js";import"./Portal-C9J_EaUY.js";import"./utils-JnhbsWr6.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-zhwYHJyp.js";import"./Button-CHVL5mlZ.js";import"./Paper-tJaxAljo.js";import"./Typography-BNx6-4zj.js";import"./index-CrcoPoGw.js";import"./index-CiMK-E4X.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DXUCDQE8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CPfTRyuP.js";import"./formControlState-Dq1zat_P.js";import"./Select-BPDCCuPw.js";import"./SelectFocusSourceContext-rG7pWPT_.js";import"./Popover-BHdYqB-a.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-Cf3nLFWM.js";import"./debounce-Be36O1Ab.js";import"./Modal-3Eqv_0Wj.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DZyErt74.js";import"./Fade-D1fX65m0.js";import"./List-CjBQExuh.js";import"./createSvgIcon-C0cHZWti.js";import"./OutlinedInput-BtSlq6bO.js";import"./FormHelperText-CTZY8iBR.js";import"./FormControlLabel-C4xfba5E.js";import"./Switch-CBjqQ08R.js";import"./SwitchBase-DwviZCGg.js";import"./Radio-CjVbsVnH.js";import"./RadioGroup-_oAPx5U4.js";import"./FormGroup-Bf_foN45.js";import"./Stack-CQconrOZ.js";import"./styled-VPzH8ng9.js";import"./Box-Cl1E5OD4.js";import"./Divider-DIAH-5fx.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-CvbP1FC1.js";import"./Container-Bu0A8KYF.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
