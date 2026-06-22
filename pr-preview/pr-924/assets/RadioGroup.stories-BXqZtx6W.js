import{j as o}from"./iframe-BdOkmXSO.js";import{C as a}from"./RadioGroup-BCL0ij6k.js";import{B as m}from"./Button-T_obMJ3V.js";import{P as l}from"./Paper-BEO0J0KI.js";import{T as n}from"./Typography-BP7E3Z2h.js";import{F as e}from"./FormControlLabel-eROgfDNZ.js";import{R as i}from"./Radio-DVHl-6g5.js";import{G as d}from"./Grid-C8TSgpaR.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-BZ_RWrtx.js";import"./preload-helper-Dab_6GC_.js";import"./FormHelperText-BNe1EnHB.js";import"./Form-Dy8jxpW5.js";import"./FaSvgIcon-D_zjT4On.js";import"./SvgIcon-BD13zcFd.js";import"./memoTheme-Dp1NrYg6.js";import"./styled-ntycrLPJ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./FormHelperText-BjzLojp-.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-B7U-TuVK.js";import"./FormLabel-DvCW1uyR.js";import"./FieldHelpIcon-auv2yOGj.js";import"./index-CrcoPoGw.js";import"./IconButton-Ci36e-XY.js";import"./Tooltip-5Kn3M0WA.js";import"./useTheme-DpzwBSOw.js";import"./useSlot-Do_-kGcn.js";import"./mergeSlotProps-Bpe1uZ1i.js";import"./useForkRef-B6GvvQRB.js";import"./useTimeout-yhleNqH_.js";import"./useControlled-wRMaIAhC.js";import"./useEventCallback-Ci1dFtlM.js";import"./getReactElementRef-CAZnW1NE.js";import"./Grow-zcR73JmX.js";import"./utils-BBZ_5XBR.js";import"./TransitionGroupContext-Ce7OQG8A.js";import"./Popper-CsnU-V5Y.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-Df3mT0t7.js";import"./useSlotProps-0Tuv8-jv.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C66xLdI-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D0mr5YFJ.js";import"./CircularProgress-BtHd2z-U.js";import"./FormControl-CfvQd07B.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-v3aJqbSB.js";import"./RadioGroup-aBwFr1Gc.js";import"./RadioGroup-tgAk2HNQ.js";import"./Radio-BbvARGE2.js";import"./SwitchBase-DGEVIec5.js";import"./createSvgIcon-B1lFLeS5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./FormGroup-BPezQOgQ.js";import"./Button-NnJ9RF69.js";import"./Paper-X002pFu5.js";import"./Typography-Ba-r-irp.js";import"./FormControlLabel-D6kG6ySx.js";import"./Box-DXcrr7iM.js";import"./Grid-BUOsnAxa.js";import"./styled-NjTlQkCK.js";const Po={title:"Form Components/Controlled Form/ControlledRadioGroup",component:a,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:s=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(p=>p),children:[o.jsxs(a,{...s,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
