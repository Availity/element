import{j as e}from"./iframe-BxUHITI1.js";import{C as a}from"./TextField-BzDB3set.js";import{B as s}from"./index-Cxy_eo2a.js";import{P as l}from"./index-D4-F_wLy.js";import{T as d}from"./index-DdUtkmNt.js";import{G as n}from"./index-BMhl3l0u.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-Cf1M8dMK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DkXWnfyE.js";import"./index-Yus2I1Ga.js";import"./index-MVgG_W0q.js";import"./index-D7Z8d6Jb.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BZhbNLcx.js";import"./memoTheme-CzoHsl9a.js";import"./styled-CpGjzToy.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DlwqTA7N.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DBh9raQ6.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Dq8mhllO.js";import"./SelectFocusSourceContext-CdZu0_4c.js";import"./useSlot-B7qqTYAC.js";import"./mergeSlotProps-MHJ1SX4K.js";import"./useForkRef-lvxB79U5.js";import"./useSlotProps-CkGYMLCU.js";import"./Popover-lMnIH1fd.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-uHNWHw4F.js";import"./useTheme-D1EEqNP3.js";import"./utils-Bx4IaHxc.js";import"./TransitionGroupContext-l3bxEgIQ.js";import"./useTimeout-DAfKtcD8.js";import"./getReactElementRef-CgE3Obh2.js";import"./mergeSlotProps-BlkVzhTt.js";import"./debounce-Be36O1Ab.js";import"./Modal-CLWW9UYM.js";import"./useEventCallback-C37BR1tG.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D0eWelix.js";import"./Fade-3fp3ueS9.js";import"./Paper-BbjEmRJb.js";import"./List-DdRjpWGh.js";import"./utils-DoM3o7-Q.js";import"./useControlled-Bgh5sVCP.js";import"./createSvgIcon-RiBZe8zy.js";import"./OutlinedInput-RCQ8H0A1.js";import"./FormHelperText-D2Y_lV8s.js";import"./FormControlLabel-Ci3_q9uP.js";import"./Typography-BPEZnd-f.js";import"./Switch-CeMAy6L2.js";import"./SwitchBase-C1EzQuwL.js";import"./ButtonBase-DsL-5Cn7.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-C1VCwxsF.js";import"./RadioGroup-DcGjIHPU.js";import"./FormGroup-Cp82ltLG.js";import"./Stack-CFpqy-T3.js";import"./styled-dRg2RBwo.js";import"./Box-dmaYfFtJ.js";import"./Divider-DI8N_gjR.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Bv3dpByY.js";import"./FormControl-DxWH6o6g.js";import"./isMuiElement-D7EX6TJ1.js";import"./Grid-CYb8qmsK.js";import"./IconButton-B68upYna.js";import"./CircularProgress-DLAhFeVr.js";import"./Tooltip-DZz3XPMm.js";import"./Button-iASAD3CE.js";import"./Container-CqfIskg6.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
