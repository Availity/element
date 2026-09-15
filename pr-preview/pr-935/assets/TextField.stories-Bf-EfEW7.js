import{j as e}from"./iframe-DF0Rdha4.js";import{C as a}from"./TextField-CDJxyW6Z.js";import{B as s}from"./index-CUgfwVUD.js";import{P as l}from"./index-4RjwuuOq.js";import{T as d}from"./index-tdaHATjI.js";import{G as n}from"./index-CPOPohyu.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-C2G3D7Ed.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C3g1b-Zt.js";import"./index-BVLgzJf-.js";import"./index-CrcoPoGw.js";import"./index-6PSJ7mzi.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CMfmqAYx.js";import"./memoTheme-4vIjm6LZ.js";import"./styled-I7SbqUzc.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-D3AL5AgI.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-A_gbksq7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CgSH5fRm.js";import"./SelectFocusSourceContext-Dy_24zIK.js";import"./useSlot-Bu48rJfG.js";import"./mergeSlotProps-De-W8bEz.js";import"./useForkRef-BKwvVnzL.js";import"./useSlotProps-CexFUqCS.js";import"./Popover-6fv2nyIA.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-CcmPSbI-.js";import"./useTheme-Dht0CY8-.js";import"./utils-DCMHm21Z.js";import"./TransitionGroupContext-B0rcK__J.js";import"./useTimeout-CMPjzxnq.js";import"./getReactElementRef-BJS3FUmu.js";import"./mergeSlotProps-BO33MI0n.js";import"./debounce-Be36O1Ab.js";import"./Modal-Bdo5cqSi.js";import"./useEventCallback-BNwW89Is.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Cj1iOKB7.js";import"./Fade-Cx-6eTbl.js";import"./Paper-DargFASt.js";import"./List-CQj_DkG6.js";import"./utils-DoM3o7-Q.js";import"./useControlled-Dig0ZMyL.js";import"./createSvgIcon-IzKekw11.js";import"./OutlinedInput-mQC1K6j_.js";import"./FormHelperText-9mqc9Ecw.js";import"./FormControlLabel-Dq_-18BO.js";import"./Typography-CVkvQWeR.js";import"./Switch-C2KqfsMd.js";import"./SwitchBase-DZV18a5O.js";import"./ButtonBase-DIMIguuI.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-DA7ldTDW.js";import"./RadioGroup-BOyQBxC7.js";import"./FormGroup-DhUgHgdA.js";import"./Stack-CQjWIA4P.js";import"./styled-CjeI9bHt.js";import"./Box-g_k8tvoW.js";import"./Divider-P6rUNdV1.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BKBRq5Dl.js";import"./FormControl-CEW9cI4g.js";import"./isMuiElement-CM_e2YWo.js";import"./Grid-wcoxmIQC.js";import"./IconButton-oDfd5Lmw.js";import"./CircularProgress-B4cKxRwq.js";import"./Tooltip-BWnEWeD7.js";import"./Button-kz7BikUW.js";import"./Container-D2_4bomA.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
