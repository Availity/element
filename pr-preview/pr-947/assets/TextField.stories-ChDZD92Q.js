import{j as e}from"./iframe-Dc8rhMFy.js";import{C as a}from"./TextField-CJxEI0Co.js";import{B as s}from"./index-Dd1sCRm8.js";import{P as l}from"./index-Dh_WMTr-.js";import{T as d}from"./index-j2N_GGzH.js";import{G as n}from"./index-5t25iiun.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-BvZBn0WO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ygDng6Wy.js";import"./index-BpsJpJfp.js";import"./index-MVgG_W0q.js";import"./index-DY0QHs1w.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BxrpqK7J.js";import"./memoTheme-S-5nuklg.js";import"./styled-BGT3xm4Q.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CJhShZK7.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Dv8J8Q0P.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-D5ShPJUX.js";import"./SelectFocusSourceContext-DAmy3Y7c.js";import"./useSlot-3a7eddsl.js";import"./mergeSlotProps-kSQUyWpp.js";import"./useForkRef-udrkS_SI.js";import"./useSlotProps-Bnd3aa5q.js";import"./Popover-CGrtCsPR.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-jMetYcmF.js";import"./useTheme-CAn2KvKi.js";import"./utils-D7u3O4jf.js";import"./TransitionGroupContext-BFqd1JBl.js";import"./useTimeout-CrdWGjXP.js";import"./getReactElementRef-Dso64NKM.js";import"./mergeSlotProps-CnvQftF1.js";import"./debounce-Be36O1Ab.js";import"./Modal-Ch87VQcB.js";import"./useEventCallback-BaT-rbGb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-fXAkdBb0.js";import"./Fade-DOAN5MWn.js";import"./Paper-CSAWm734.js";import"./List-CCvWDakc.js";import"./utils-DoM3o7-Q.js";import"./useControlled-g2ws-rib.js";import"./createSvgIcon-CArSjKuJ.js";import"./OutlinedInput-OICLv0Nd.js";import"./FormHelperText-0GbrumB_.js";import"./FormControlLabel-DPQCCqsQ.js";import"./Typography-B_IwZxWJ.js";import"./Switch-fiWFufRn.js";import"./SwitchBase-CND8MRdP.js";import"./ButtonBase-CqO9c84b.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-DzKMm59G.js";import"./RadioGroup-BCR1LXCh.js";import"./FormGroup-FLJ02UL5.js";import"./Stack-CFoc2Kye.js";import"./styled-Bni-voJ-.js";import"./Box-BeA7Astr.js";import"./Divider-OGNQ4sKt.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DVHg-shP.js";import"./FormControl-CX0NonDn.js";import"./isMuiElement-DClEETsS.js";import"./Grid-CK3PRshc.js";import"./IconButton-CeH7M-cn.js";import"./CircularProgress-FGVI2lRz.js";import"./Tooltip-y8JW-hsI.js";import"./Button-D07KqWD2.js";import"./Container-B259nuZR.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
