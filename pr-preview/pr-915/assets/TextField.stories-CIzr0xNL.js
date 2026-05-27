import{j as e}from"./iframe-BeW-ShBa.js";import{C as a}from"./TextField-B38W5YBX.js";import{B as s}from"./index-B-GrkHTI.js";import{P as l}from"./index-BFBORQJF.js";import{T as d}from"./index-BSsohYFg.js";import{G as n}from"./index-CcUAtZIu.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-n3g2VIij.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUpPI6bd.js";import"./index-DHE56XfM.js";import"./index-BiBDMnSv.js";import"./index-BKqV-UiY.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-C3Z68du4.js";import"./memoTheme-Dx1_-nEN.js";import"./styled-E0CmYcz3.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Cxj9EV6v.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DwS3dUaL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-DxZlcoBU.js";import"./Menu-CN-C-Du1.js";import"./useSlot-BhPPWLJz.js";import"./mergeSlotProps-CGqoVYOm.js";import"./useForkRef-Bgl7H4kw.js";import"./useSlotProps-ghuGdCEB.js";import"./Popover-BVS0J5pW.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-BPMEmQxN.js";import"./useTheme-BPzLpLU0.js";import"./utils-CvRtdEc9.js";import"./TransitionGroupContext-BUF6kaGb.js";import"./useTimeout-Da9tNn-P.js";import"./getReactElementRef-BjNvvstO.js";import"./mergeSlotProps-D8UcRAc-.js";import"./debounce-Be36O1Ab.js";import"./Modal-CnexL54u.js";import"./useEventCallback-6Uyg9fGx.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-B02_d13g.js";import"./Fade-D8bMgo8d.js";import"./Paper-C7ldQuEP.js";import"./List-C1Y1JpKl.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BpXRfpPn.js";import"./createSvgIcon-BpCrnFel.js";import"./OutlinedInput-DFxqNyAs.js";import"./FormHelperText-DLkF45Vp.js";import"./FormControlLabel-rtHyeW46.js";import"./Typography-C3HO5zSq.js";import"./Switch-B_X6xexg.js";import"./SwitchBase-D-OFjC1o.js";import"./ButtonBase-Z8KwVcKF.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BNVrWmQP.js";import"./RadioGroup-D9O0pa2h.js";import"./FormGroup-CXZ8nN14.js";import"./Box-BJjonoMC.js";import"./Divider-DULf-jQm.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-CkM3UncO.js";import"./styled-C6cy5gNq.js";import"./TextField-_Lta7BN7.js";import"./FormControl-BGOvdkoq.js";import"./isMuiElement-Gc_4vFE3.js";import"./Grid-D-BmDj5R.js";import"./Tooltip-UPiMyfZ8.js";import"./IconButton-BvJM40or.js";import"./CircularProgress-CiOpdtGa.js";import"./Button-BwdPpmvm.js";import"./Container-CuzKFum9.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
