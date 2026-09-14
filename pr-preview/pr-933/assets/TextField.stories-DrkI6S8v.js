import{j as e}from"./iframe-DPnTQG0G.js";import{C as a}from"./TextField-DhPFJ8lI.js";import{B as s}from"./index-B7O5cvxg.js";import{P as l}from"./index-CKyLzbz1.js";import{T as d}from"./index-DvMAIlq4.js";import{G as n}from"./index-CsNDMedn.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-0NUWpuMD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DuOb_E4r.js";import"./index-Q8djF-9e.js";import"./index-CrcoPoGw.js";import"./index-DyrAPJez.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BFzjjt5D.js";import"./memoTheme-CMfgY8Ge.js";import"./styled-B3r2fqeJ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-T7G46Ktc.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CD258ohF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Bt2NJ17i.js";import"./SelectFocusSourceContext-CLuNS6BP.js";import"./useSlot-CA9InCnB.js";import"./mergeSlotProps-BoQagQxu.js";import"./useForkRef-B-MdRiiy.js";import"./useSlotProps-BTR8zjwb.js";import"./Popover-BYyO-8oX.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-DFXYbKgm.js";import"./useTheme-DIidgVEY.js";import"./utils-BzkU8P15.js";import"./TransitionGroupContext-BMEataXp.js";import"./useTimeout-CUwsoYp8.js";import"./getReactElementRef-Bl_fL_Lc.js";import"./mergeSlotProps-AmPjT2RW.js";import"./debounce-Be36O1Ab.js";import"./Modal-CcK1uO_P.js";import"./useEventCallback-jzoMkJU2.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-ByDG0JKY.js";import"./Fade-Bvo7Nuzl.js";import"./Paper-CfCnRjNa.js";import"./List-Dof0ngef.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DDdRMWyJ.js";import"./createSvgIcon-o5Z7wc8L.js";import"./OutlinedInput-C590kWAS.js";import"./FormHelperText-BuntHaUt.js";import"./FormControlLabel-M3VpV2dL.js";import"./Typography-BE3nbQ7X.js";import"./Switch-CESQP3ju.js";import"./SwitchBase-CsMfMGxT.js";import"./ButtonBase-C2F6Y1bD.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CPnlDQ7O.js";import"./RadioGroup-CakEV_i2.js";import"./FormGroup-tGhy1mwH.js";import"./Stack-CUFjbj2M.js";import"./styled-DTgt2DI8.js";import"./Box-BwT9D1D3.js";import"./Divider-BJPFleRo.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CTunm3jM.js";import"./FormControl-C7sHhzIq.js";import"./isMuiElement-BqwjpEeh.js";import"./Grid-C4qiCYbq.js";import"./IconButton-DddGcaV5.js";import"./CircularProgress-BvBmh-xb.js";import"./Tooltip-oUWx7pT_.js";import"./Button-D8f966mF.js";import"./Container-Dg-G3qaT.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
