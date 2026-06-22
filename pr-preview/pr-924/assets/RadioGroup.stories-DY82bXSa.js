import{j as o}from"./iframe-BcpGFM79.js";import{C as a}from"./RadioGroup-_bn3lRbN.js";import{B as m}from"./Button-DgpwJSBN.js";import{P as l}from"./Paper-yohM4iyv.js";import{T as n}from"./Typography-giEvkJi7.js";import{F as e}from"./FormControlLabel-BNRja3ZA.js";import{R as i}from"./Radio-DliJraZZ.js";import{G as d}from"./Grid-CobFFp4x.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-D7MBIlYn.js";import"./preload-helper-Dab_6GC_.js";import"./FormHelperText-DHNlWcSg.js";import"./Form-BSB-tu1Z.js";import"./FaSvgIcon-CT_rBCtN.js";import"./SvgIcon-DwHLgNU7.js";import"./memoTheme-CUR-_UQu.js";import"./styled-YELB7PbO.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./FormHelperText-B5A4eWsZ.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BGMg_aeo.js";import"./FormLabel-KM-1TQDB.js";import"./FieldHelpIcon-Dc0XpqfL.js";import"./index-CrcoPoGw.js";import"./IconButton-BQJBDMuu.js";import"./Tooltip-CGfPTNyc.js";import"./useTheme-DjrtHLeH.js";import"./useSlot-COYLd7Pd.js";import"./mergeSlotProps-Y-QEFSGT.js";import"./useForkRef-BE9Mh8bk.js";import"./useTimeout-D7cMLa2k.js";import"./useControlled-B1x_m4Ao.js";import"./useEventCallback-B998UMHo.js";import"./getReactElementRef-ksE6JIsb.js";import"./Grow-DgKR5Z9h.js";import"./utils-CX-dufza.js";import"./TransitionGroupContext-DMVjCYVP.js";import"./Popper-77inD8mp.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-D0YnE6km.js";import"./useSlotProps-wCHKs8ch.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-bOxsf80n.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DuPW9E1K.js";import"./CircularProgress-B0VZoizd.js";import"./FormControl-P2zjagtr.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-IVbgCQ7T.js";import"./RadioGroup-C28oiaO8.js";import"./RadioGroup-XH-vdn95.js";import"./Radio-QezYrXBU.js";import"./SwitchBase-_V4FthNd.js";import"./createSvgIcon-D6BcWLqc.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FormGroup-DkeyJcWV.js";import"./Button-CNBYq3K8.js";import"./Paper-DJSKHSTy.js";import"./Typography-D2_Tvhdq.js";import"./FormControlLabel-BMa98H6J.js";import"./Box-YZXBtx3i.js";import"./Grid-DtKUTAQi.js";import"./styled-CAzon1OD.js";const Po={title:"Form Components/Controlled Form/ControlledRadioGroup",component:a,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:s=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(p=>p),children:[o.jsxs(a,{...s,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
