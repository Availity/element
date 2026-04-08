import{j as e}from"./iframe-CWp6xAJi.js";import{C as a}from"./TextField-DJd8Rm8W.js";import{B as s}from"./index-Bxm1lbI1.js";import{P as l}from"./index-Rdz_pQaj.js";import{T as d}from"./index-BJBbOM60.js";import{G as n}from"./index-DiK5u2m6.js";import{T as c,a as h}from"./Types-DLUIPKsS.js";import{u as p,F as u}from"./index.esm-XsBVtHNp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BceSKYPP.js";import"./index-52-MGCI2.js";import"./index-BiBDMnSv.js";import"./index-buZDR1ob.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BE17mmZt.js";import"./memoTheme-Cd48oeI4.js";import"./styled-BbzXfeov.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BXQlDb-z.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-hGDRNu7C.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CeGHqpeG.js";import"./Menu-Dgz24AwM.js";import"./useSlot-DyNQWwC6.js";import"./mergeSlotProps-D_m3hd0U.js";import"./useForkRef-3LhxE-jP.js";import"./useSlotProps-DzjUqkkU.js";import"./Popover-BPg-4WyH.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-v_NAREGo.js";import"./useTheme-DHWCGmhz.js";import"./utils-D4ENFMIW.js";import"./TransitionGroupContext-DXm2NhTQ.js";import"./useTimeout-YuGHwSAC.js";import"./getReactElementRef-C_Avcpz3.js";import"./mergeSlotProps-Dxb_vIiW.js";import"./debounce-Be36O1Ab.js";import"./Modal-BPpm24UE.js";import"./useEventCallback-DWzQfpRP.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CqFgtmAJ.js";import"./Fade-BHa9ONGT.js";import"./Paper-C5XDmwPa.js";import"./List-BpYrKy3Y.js";import"./utils-DoM3o7-Q.js";import"./useControlled-D9oaenaI.js";import"./createSvgIcon-BPSi4ajd.js";import"./OutlinedInput-B-1NmxdT.js";import"./FormHelperText-D5HQHcTB.js";import"./FormControlLabel-BIT2ITgz.js";import"./Typography-DAHmtciD.js";import"./Switch-B27HjCvE.js";import"./SwitchBase-BDjJ1Fzr.js";import"./ButtonBase-QvXOsOsa.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BJKeIEsI.js";import"./RadioGroup-CurkXTE0.js";import"./FormGroup-F0R8oEct.js";import"./Box-C01JMt70.js";import"./Divider-mFdRldcH.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-DilTTonM.js";import"./styled-Ck6GK9xN.js";import"./TextField-DiBflCj4.js";import"./FormControl-CfNL2aL0.js";import"./isMuiElement-CXCicdtK.js";import"./Grid-BEi4nMA-.js";import"./Tooltip-C9q2MrGF.js";import"./IconButton-BcXRPXis.js";import"./CircularProgress-a2FiPD69.js";import"./Button-DheGOcXb.js";import"./Container-CHapUF_w.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: ControlledTextFieldProps) => {
    const methods = useForm({
      values: {
        [args.name]: ''
      }
    });
    return <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data => data)}>
          <ControlledTextField {...args} />
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
    name: 'controlledTextField',
    placeholder: 'Name',
    required: true,
    rules: {
      required: 'This field is required.',
      maxLength: {
        value: 10,
        message: 'Too long'
      }
    },
    label: 'TextField Label',
    showCharacterCount: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: ControlledTextFieldProps) => {
    const methods = useForm({
      values: {
        [args.name]: ''
      }
    });
    return <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data => data)}>
          <ControlledTextField {...args} />
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
    name: 'controlledTextField',
    helperText: 'This is some helper text',
    placeholder: 'Name',
    required: true,
    rules: {
      required: 'This field is required.',
      maxLength: {
        value: 10,
        message: 'Too long'
      }
    },
    label: 'TextField Label',
    displayOverflowMaxLength: true,
    showCharacterCount: true
  }
}`,...i.parameters?.docs?.source}}};const De=["_ControlledTextField","_ControlledTextFieldDisplayOverflow"];export{o as _ControlledTextField,i as _ControlledTextFieldDisplayOverflow,De as __namedExportsOrder,ze as default};
