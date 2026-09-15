import{j as e}from"./iframe-CWY3iD4k.js";import{C as a}from"./TextField-CnhFH5xc.js";import{B as s}from"./index-CFwKy-vk.js";import{P as l}from"./index-Dvb6q66Y.js";import{T as d}from"./index-B87fX2m4.js";import{G as n}from"./index-CH36QgIT.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-psktg0ka.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CsrKYWWK.js";import"./index-DsnzGN7g.js";import"./index-CrcoPoGw.js";import"./index-BzSYwNd-.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DKNFXPcY.js";import"./memoTheme-DrmgfhiZ.js";import"./styled-CIfQzxdD.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Z07liIv_.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-wbjgmvhY.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-DVpJrfTw.js";import"./SelectFocusSourceContext-C5AxKvUw.js";import"./useSlot-jGeM5BDq.js";import"./mergeSlotProps-DYpSnyrH.js";import"./useForkRef-DtxHKGyT.js";import"./useSlotProps-DqKnkovT.js";import"./Popover-Fhuog7vE.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-GTIXf_ni.js";import"./useTheme-BBG77Eif.js";import"./utils-uPZOnv02.js";import"./TransitionGroupContext-BKIhkECl.js";import"./useTimeout-8ubSeoYI.js";import"./getReactElementRef-DgEYPRe_.js";import"./mergeSlotProps-CH3-0yIT.js";import"./debounce-Be36O1Ab.js";import"./Modal-BW2dyGsc.js";import"./useEventCallback-DHih-p6k.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CXYVCyew.js";import"./Fade-DPNQjbRR.js";import"./Paper-dLVuKHPb.js";import"./List-2Vo6P9AC.js";import"./utils-DoM3o7-Q.js";import"./useControlled-CIbXyyiC.js";import"./createSvgIcon-DumzlQmL.js";import"./OutlinedInput-DdNeAm6I.js";import"./FormHelperText-DrighLwE.js";import"./FormControlLabel-BTjj02X-.js";import"./Typography-DdnCOrzM.js";import"./Switch-XAbrm4Bm.js";import"./SwitchBase-LkmlHlRJ.js";import"./ButtonBase-BVW6-IPM.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-D1gt4lAJ.js";import"./RadioGroup-DJo27srd.js";import"./FormGroup-CwKuENeS.js";import"./Stack-CDV8c2Ym.js";import"./styled-DiOSWYDP.js";import"./Box-W_K2m7mS.js";import"./Divider-dym_m635.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-C0h0Nbky.js";import"./FormControl-C272fr_E.js";import"./isMuiElement-CITzrPa4.js";import"./Grid-Dpddp4dd.js";import"./IconButton-CKcF2qnA.js";import"./CircularProgress-Dd-jZUAB.js";import"./Tooltip-B3bZKYVT.js";import"./Button-CdHEuVuq.js";import"./Container-O7CLblpO.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
