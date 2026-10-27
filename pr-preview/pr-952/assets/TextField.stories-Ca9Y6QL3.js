import{j as e}from"./iframe-DUa_E2nK.js";import{C as a}from"./TextField-BQTpqK1F.js";import{B as s}from"./index-CS_NebII.js";import{P as l}from"./index-BsAkYoDU.js";import{T as d}from"./index-C4ikLYbZ.js";import{G as n}from"./index-CpWANY3x.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-DJpMLnE4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-h-RAtAdn.js";import"./index-BU1mb21Z.js";import"./index-MVgG_W0q.js";import"./index-BevA4mtD.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BewdDvzO.js";import"./memoTheme-Bo6NThYL.js";import"./styled-D3Muh4M2.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CpBzcOsS.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-S2Jix1K5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-ElUVnloi.js";import"./SelectFocusSourceContext-C1yv2uKz.js";import"./useSlot-DlELlrwU.js";import"./mergeSlotProps-CEo301sU.js";import"./useForkRef-CxpHUqnO.js";import"./useSlotProps-Cc5Sw607.js";import"./Popover-rBOqpwbc.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-DK6E0QaG.js";import"./useTheme-D2wrQY5U.js";import"./utils-9zA4k4wE.js";import"./TransitionGroupContext-CaPdAk9s.js";import"./useTimeout-CVWqITqM.js";import"./getReactElementRef-ReUsDlEE.js";import"./mergeSlotProps-BWiww6C5.js";import"./debounce-Be36O1Ab.js";import"./Modal-BWDZ2XAH.js";import"./useEventCallback-BMK6R2Pt.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D1fLbtuP.js";import"./Fade-BulH4fWG.js";import"./Paper-BFFGqGxw.js";import"./List-BU73CZkQ.js";import"./utils-DoM3o7-Q.js";import"./useControlled-mPNvpXlD.js";import"./createSvgIcon-BrmPcgFj.js";import"./OutlinedInput-CFR5oBwr.js";import"./FormHelperText-D9BA1QML.js";import"./FormControlLabel-BWd96Wzk.js";import"./Typography-BemmhR83.js";import"./Switch-CKOovF9u.js";import"./SwitchBase-Cbi-g6KU.js";import"./ButtonBase-Bug9d4_R.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BjnBtCnE.js";import"./RadioGroup-GuTuFZPa.js";import"./FormGroup-BvSMqjlq.js";import"./Stack-BXnO2vhe.js";import"./styled-DfLAYXD9.js";import"./Box-BO8RQHnM.js";import"./Divider-C3QA1lO4.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CItELq9u.js";import"./FormControl-Bsqtqb3j.js";import"./isMuiElement-CAErNZ9l.js";import"./Grid-BjkaeTm4.js";import"./IconButton-BifEyGUq.js";import"./CircularProgress-Bzposo0O.js";import"./Tooltip-Bq-dRAZk.js";import"./Button-CbV8DhMK.js";import"./Container-D09iA6_m.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
