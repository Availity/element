import{j as o}from"./iframe-C9Q7A5ra.js";import{C as p}from"./RadioGroup-Clf8LTFC.js";import{B as m}from"./index-Cb9JJsiN.js";import{P as l}from"./index-XE63nykw.js";import{T as n}from"./index-BeyzD6Q3.js";import{c as e,d as i}from"./index-BV7HRARt.js";import{G as d}from"./index-0hLAGvby.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-TUX-hQDm.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-CN3DMGzN.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CWsMajyi.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-BgeoDj0f.js";import"./styled-0UczSNXk.js";import"./Tooltip-Dxz12tat.js";import"./useTheme-DiIVsm9U.js";import"./memoTheme-YF5MtDv6.js";import"./useSlot--WqN-Xj_.js";import"./mergeSlotProps-UhsM3zsz.js";import"./useForkRef-B8T8EBOK.js";import"./useTimeout-BpXHY--n.js";import"./useControlled-__FO7R_p.js";import"./useEventCallback-LHv8CayF.js";import"./getReactElementRef-D2IRer1N.js";import"./Portal-1jOXhtNE.js";import"./utils-BZDXaftX.js";import"./TransitionGroupContext-DyV0aRJH.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Osd4OcEu.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DZcoIB4U.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B3rBS9gF.js";import"./CircularProgress-CPrPE9Sw.js";import"./Button-CeTzgLEE.js";import"./Paper-BvFLUZyh.js";import"./Typography-DxUywEUK.js";import"./index-BiBDMnSv.js";import"./index-CyBTe91T.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-CzclMxo5.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BmBjgzzS.js";import"./formControlState-Dq1zat_P.js";import"./Select-C1poooRd.js";import"./Menu-DBFXP6CC.js";import"./Popover-BYapJmFI.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-CWYgiJ7A.js";import"./debounce-Be36O1Ab.js";import"./Modal-BGRke5kn.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-QSng-jdr.js";import"./Fade-Qmg-4-l1.js";import"./List-zrL7hhVU.js";import"./createSvgIcon-CHtzqaAD.js";import"./OutlinedInput-CSgt8L6A.js";import"./FormHelperText-Cbb9nKyC.js";import"./FormControlLabel-DhgUYH0v.js";import"./Switch-CdF7hf3S.js";import"./SwitchBase-DXRaGOfU.js";import"./Radio-DztJdFCF.js";import"./RadioGroup-80iG6m5i.js";import"./FormGroup-BsWZdUIF.js";import"./Box-BiOrU6MK.js";import"./Divider-Uz9pEyYf.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-DyDlGsHv.js";import"./styled-CCY5CIG6.js";import"./Grid-CzHxH48g.js";import"./Container-CbMFSBjO.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
