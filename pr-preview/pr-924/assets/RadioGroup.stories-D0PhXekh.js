import{j as o}from"./iframe-D9VxGUXm.js";import{C as a}from"./RadioGroup-CweUeaue.js";import{B as m}from"./Button-Bh2oDbYg.js";import{P as l}from"./Paper-6rYsSxsl.js";import{T as n}from"./Typography-D9Pc6OpE.js";import{F as e}from"./FormControlLabel-DhCgIMY4.js";import{R as i}from"./Radio-DpiH1E15.js";import{G as d}from"./Grid-gv_YjbwF.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-tubCB1k0.js";import"./preload-helper-Dab_6GC_.js";import"./FormHelperText-yKBLOBUk.js";import"./Form-BG5Mtcu6.js";import"./FaSvgIcon-CwoOr0og.js";import"./SvgIcon-Bgb2NC38.js";import"./memoTheme-CUWoCynM.js";import"./styled-D8Xb_hHx.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./FormHelperText-BXWMYJyA.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-D5KNipz4.js";import"./FormLabel-DVupU6Lh.js";import"./FieldHelpIcon-BVNkABm1.js";import"./index-CrcoPoGw.js";import"./IconButton-Cib1SE9E.js";import"./Tooltip-88iJgdeD.js";import"./useTheme-B41ItSj5.js";import"./useSlot-BAM4jdU8.js";import"./mergeSlotProps-CLdLLAsF.js";import"./useForkRef-5-P7CGIn.js";import"./useTimeout-CCeZqBN_.js";import"./useControlled-nlFUsoSS.js";import"./useEventCallback-BrENIvCl.js";import"./getReactElementRef-Dqr_-LzO.js";import"./Grow-o6-ommK8.js";import"./utils-Bcz57uZ2.js";import"./TransitionGroupContext-BLR2oRR2.js";import"./Popper-D26kfRUw.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CSfdL5WB.js";import"./useSlotProps-BLtbmDJZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BrelKzp4.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-IEWOwJJy.js";import"./CircularProgress-rsn-iR-g.js";import"./FormControl-B4iyM4I1.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-3elNFQAm.js";import"./RadioGroup-BPVvPk0H.js";import"./RadioGroup-CqxLKICe.js";import"./Radio-TSgGl1RX.js";import"./SwitchBase-VVWJOAo4.js";import"./createSvgIcon-CuKrs_jq.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FormGroup-joIkhTNn.js";import"./Button-CSvshhUs.js";import"./Paper-oCFHvNnf.js";import"./Typography-mI_XzOBj.js";import"./FormControlLabel-DvK8y5Ee.js";import"./Box-1lHW1eXR.js";import"./Grid-ClZzvBh4.js";import"./styled-N1qat-rE.js";const Po={title:"Form Components/Controlled Form/ControlledRadioGroup",component:a,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:s=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(p=>p),children:[o.jsxs(a,{...s,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
