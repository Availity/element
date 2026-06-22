import{j as o}from"./iframe-DHkqGgbi.js";import{C as a}from"./RadioGroup-Ya1zOokB.js";import{B as m}from"./Button-BBqhYll5.js";import{P as l}from"./Paper-fpDEzwjb.js";import{T as n}from"./Typography-BunlOy3h.js";import{F as e}from"./FormControlLabel-Cmd-h8Sl.js";import{R as i}from"./Radio-BTDmoss7.js";import{G as d}from"./Grid-ArAcPf9E.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-RTM9Se0K.js";import"./preload-helper-PPVm8Dsz.js";import"./FormHelperText-C9w9Jqly.js";import"./Form-CBGs9Zxl.js";import"./FaSvgIcon-BtkjvlUV.js";import"./SvgIcon-D9Y7JiS_.js";import"./memoTheme-vxEZSkJ8.js";import"./styled-BFLY3dn7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./FormHelperText-D0tk9xCV.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-ZgfjO4em.js";import"./FormLabel-B39rbSWe.js";import"./FieldHelpIcon-wvX4SPIQ.js";import"./index-CrcoPoGw.js";import"./IconButton-D5Zzj5BR.js";import"./Tooltip-YeMRA4-y.js";import"./useTheme-DTNKpojL.js";import"./useSlot-CAeYipRU.js";import"./mergeSlotProps-Dp8H4ez1.js";import"./useForkRef-B4h6zx_x.js";import"./useTimeout-Bjfnw5AG.js";import"./useControlled-DlDi1BKb.js";import"./useEventCallback-LtXdtY4h.js";import"./getReactElementRef-BRoKhHqU.js";import"./Grow-CwxupgJl.js";import"./utils-BQBkKAg6.js";import"./TransitionGroupContext-3E4Xv_Lx.js";import"./Popper-BUehIlZq.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CtpwjVP0.js";import"./useSlotProps-CZQ_I0Kw.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DmdwZwcg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BwqJJF5q.js";import"./CircularProgress-D39cxiof.js";import"./FormControl-Fq5qRX5l.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-Bo_RUhfi.js";import"./RadioGroup-MNYFaoET.js";import"./RadioGroup-DEPoHUQb.js";import"./Radio-CXBpaPVj.js";import"./SwitchBase-BwOio7J8.js";import"./createSvgIcon-BS4jmzRl.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FormGroup-9jL8lJoq.js";import"./Button-CHAexKoQ.js";import"./Paper-Cer6O457.js";import"./Typography-i96SYvKe.js";import"./FormControlLabel-DadtF2ZI.js";import"./Box-DMMQfXcC.js";import"./Grid-BLry6rK7.js";import"./styled-HR_WeqBB.js";const Po={title:"Form Components/Controlled Form/ControlledRadioGroup",component:a,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:s=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(p=>p),children:[o.jsxs(a,{...s,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const No=["_ControlledRadioGroup"];export{t as _ControlledRadioGroup,No as __namedExportsOrder,Po as default};
