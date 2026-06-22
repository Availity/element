import{j as o}from"./iframe-B3KH45W1.js";import{C as a}from"./RadioGroup-DaOgUUf3.js";import{B as m}from"./Button-BFPH_qAh.js";import{P as l}from"./Paper-sb54ma1Z.js";import{T as n}from"./Typography-k07kEcGa.js";import{F as e}from"./FormControlLabel-CQTJjZx2.js";import{R as i}from"./Radio-Cjsov54K.js";import{G as d}from"./Grid-BlezGjUJ.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-H6aIGMrw.js";import"./preload-helper-Dab_6GC_.js";import"./FormHelperText-CZJvLmcm.js";import"./Form-D1K37nGD.js";import"./FaSvgIcon-DUC6Q4wv.js";import"./SvgIcon-DDVH-xS0.js";import"./memoTheme-DWwRHojM.js";import"./styled-B89GBRvi.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./FormHelperText-Bn-upZao.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Bg2Y-buC.js";import"./FormLabel-DW_eBrIG.js";import"./FieldHelpIcon-DiJFTHZH.js";import"./index-CrcoPoGw.js";import"./IconButton-UjBwLmV3.js";import"./Tooltip-BBnoBBLv.js";import"./useTheme-Ds4SDsFm.js";import"./useSlot-DGd0VXU6.js";import"./mergeSlotProps--7hXBDn0.js";import"./useForkRef-C1kAtY37.js";import"./useTimeout-BS1Rp5sI.js";import"./useControlled-cbOgjwu_.js";import"./useEventCallback-CVbD2IC6.js";import"./getReactElementRef-CBNP7eUh.js";import"./Grow-iiG6wjq6.js";import"./utils-BQeXEgW_.js";import"./TransitionGroupContext-CAm2K2SY.js";import"./Popper-Bmyzhh-s.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CUL18StY.js";import"./useSlotProps-CXce_cAS.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Dv3tzyaZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DgN9Oijw.js";import"./CircularProgress-BSNAtS4j.js";import"./FormControl-D9hbHaGM.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-BGMciLL0.js";import"./RadioGroup-B9R2ODcW.js";import"./RadioGroup-wg7CE2bg.js";import"./Radio-Bp4sCZQo.js";import"./SwitchBase-BX3xx9bG.js";import"./createSvgIcon-CP7Sjzln.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FormGroup-B5Q6C6t1.js";import"./Button-CpFiF_Ow.js";import"./Paper-BJPkQ8DM.js";import"./Typography-D3qZBRmm.js";import"./FormControlLabel-BsZGvzQm.js";import"./Box-B9pOgzbW.js";import"./Grid-CXe_6B0b.js";import"./styled-CG3DpTjV.js";const Po={title:"Form Components/Controlled Form/ControlledRadioGroup",component:a,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:s=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(p=>p),children:[o.jsxs(a,{...s,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
