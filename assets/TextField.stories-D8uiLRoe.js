import{j as e}from"./iframe-BfiSjCZE.js";import{C as a}from"./TextField-CK4E_8fO.js";import{B as s}from"./index-BnEi8s_n.js";import{P as l}from"./index-BqDXSYAc.js";import{T as d}from"./index-Ditxfwx6.js";import{G as n}from"./index-DXU92sR7.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-kcvTnjHx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-So7oyo1n.js";import"./index-BP56GXIS.js";import"./index-MVgG_W0q.js";import"./index-CnlcVsMi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-pfgupZ4n.js";import"./memoTheme-Bf2lNlfa.js";import"./styled-B9LoXHeR.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BkT6Jibn.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-C5CMMi3k.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Bc7HWole.js";import"./SelectFocusSourceContext-Bs6RAa9A.js";import"./useSlot-BvJ3REjy.js";import"./mergeSlotProps-d8P6odjW.js";import"./useForkRef-KHwM-Xb0.js";import"./useSlotProps-DsKdZe-B.js";import"./Popover-B_IG8L-c.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-1iQSKTOk.js";import"./useTheme-CyCmmmWE.js";import"./utils-CZVImzMM.js";import"./TransitionGroupContext-BprlU7j-.js";import"./useTimeout-Dvw-KAbd.js";import"./getReactElementRef-DrqUH2UJ.js";import"./mergeSlotProps-DuqHZ2js.js";import"./debounce-Be36O1Ab.js";import"./Modal-DeYFWYjf.js";import"./useEventCallback-BRDDRqyT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CyrGgScl.js";import"./Fade-DEFCsiCh.js";import"./Paper-8FyfnLjY.js";import"./List-DSZlyKTP.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DuHd5Dfi.js";import"./createSvgIcon-DV4tT70v.js";import"./OutlinedInput-DF7uYzJm.js";import"./FormHelperText-CxIv3Am1.js";import"./FormControlLabel-CdBL0lN_.js";import"./Typography-C4HmXqwR.js";import"./Switch-Q5fXJ2Uu.js";import"./SwitchBase-AFFAmAWt.js";import"./ButtonBase-B0Rj5enX.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-C4YJulXy.js";import"./RadioGroup-DcY1quof.js";import"./FormGroup-BdAfT7sS.js";import"./Stack-ggz2xYsp.js";import"./styled-Bty96-Ys.js";import"./Box-CRTcjAl_.js";import"./Divider-CELaABvA.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Dz7hzDL9.js";import"./FormControl-C9VIskN5.js";import"./isMuiElement-CIl3go_L.js";import"./Grid-C2RK_1Jw.js";import"./IconButton-CFfT0ndL.js";import"./CircularProgress-DFM5h0gz.js";import"./Tooltip-DQOY4bTe.js";import"./Button-CWR2xa5V.js";import"./Container-B6cEEQtr.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
