import{j as o}from"./iframe-CWp6xAJi.js";import{C as p}from"./RadioGroup-DEwtzrwM.js";import{B as m}from"./index-Bxm1lbI1.js";import{P as l}from"./index-Rdz_pQaj.js";import{T as n}from"./index-BJBbOM60.js";import{c as e,d as i}from"./index-52-MGCI2.js";import{G as d}from"./index-DiK5u2m6.js";import{R as u,a as c}from"./Types-DLUIPKsS.js";import{u as b,F as f}from"./index.esm-XsBVtHNp.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-CfNL2aL0.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-hGDRNu7C.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-CXCicdtK.js";import"./styled-BbzXfeov.js";import"./Tooltip-C9q2MrGF.js";import"./useTheme-DHWCGmhz.js";import"./memoTheme-Cd48oeI4.js";import"./useSlot-DyNQWwC6.js";import"./mergeSlotProps-D_m3hd0U.js";import"./useForkRef-3LhxE-jP.js";import"./useTimeout-YuGHwSAC.js";import"./useControlled-D9oaenaI.js";import"./useEventCallback-DWzQfpRP.js";import"./getReactElementRef-C_Avcpz3.js";import"./Portal-v_NAREGo.js";import"./utils-D4ENFMIW.js";import"./TransitionGroupContext-DXm2NhTQ.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DzjUqkkU.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BcXRPXis.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-QvXOsOsa.js";import"./CircularProgress-a2FiPD69.js";import"./Button-DheGOcXb.js";import"./Paper-C5XDmwPa.js";import"./Typography-DAHmtciD.js";import"./index-BiBDMnSv.js";import"./index-buZDR1ob.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BE17mmZt.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BXQlDb-z.js";import"./formControlState-Dq1zat_P.js";import"./Select-CeGHqpeG.js";import"./Menu-Dgz24AwM.js";import"./Popover-BPg-4WyH.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-Dxb_vIiW.js";import"./debounce-Be36O1Ab.js";import"./Modal-BPpm24UE.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CqFgtmAJ.js";import"./Fade-BHa9ONGT.js";import"./List-BpYrKy3Y.js";import"./createSvgIcon-BPSi4ajd.js";import"./OutlinedInput-B-1NmxdT.js";import"./FormHelperText-D5HQHcTB.js";import"./FormControlLabel-BIT2ITgz.js";import"./Switch-B27HjCvE.js";import"./SwitchBase-BDjJ1Fzr.js";import"./Radio-BJKeIEsI.js";import"./RadioGroup-CurkXTE0.js";import"./FormGroup-F0R8oEct.js";import"./Box-C01JMt70.js";import"./Divider-mFdRldcH.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-DilTTonM.js";import"./styled-Ck6GK9xN.js";import"./Grid-BEi4nMA-.js";import"./Container-CHapUF_w.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
