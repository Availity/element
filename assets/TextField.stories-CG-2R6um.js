import{j as e}from"./iframe-QKKiXGe2.js";import{C as a}from"./TextField-Bln5lL3_.js";import{B as s}from"./index-Dx_zFY-v.js";import{P as l}from"./index-gR99Hw5I.js";import{T as d}from"./index-p3f1BLXv.js";import{G as n}from"./index-DmDUxSlw.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-BqbkkwU8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtrWn445.js";import"./index-Cvupsb9L.js";import"./index-CrcoPoGw.js";import"./index-C-csxGdp.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D3LX6zM9.js";import"./memoTheme-CZ6h3Fbh.js";import"./styled-CQy7SchW.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-D_H32dE9.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BS7uljQq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-DSMEK_KK.js";import"./SelectFocusSourceContext-Iss43-gE.js";import"./useSlot-DRcEuyBg.js";import"./mergeSlotProps-C7lIBrBK.js";import"./useForkRef-GKR9CYz5.js";import"./useSlotProps-CqRX49VI.js";import"./Popover-DfTMYM2R.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-JL7agaji.js";import"./useTheme-CobnQWC-.js";import"./utils-Dh1OrGpA.js";import"./TransitionGroupContext-CAofQ-AT.js";import"./useTimeout-DkvHtZOb.js";import"./getReactElementRef-DpOU19qE.js";import"./mergeSlotProps-CpR-3M6H.js";import"./debounce-Be36O1Ab.js";import"./Modal-WlFR6ZW0.js";import"./useEventCallback-KenlF9RE.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Veo0zKS5.js";import"./Fade-BA-tR7QB.js";import"./Paper-Bu_9L5He.js";import"./List-jtBebsxm.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BjERoBEC.js";import"./createSvgIcon-Bm4mBUxC.js";import"./OutlinedInput-Cudg-yYO.js";import"./FormHelperText-DI4TFjly.js";import"./FormControlLabel-DzVdZDHy.js";import"./Typography-lfATY7Ds.js";import"./Switch-D-dXUd1u.js";import"./SwitchBase-BB6lrJXc.js";import"./ButtonBase-BjGfF1Y_.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-Bqh7DeHt.js";import"./RadioGroup-SwtLDsyW.js";import"./FormGroup-THy_K4lA.js";import"./Stack-vCt2ORwh.js";import"./styled-CL_ITmKE.js";import"./Box-DS6KTGM7.js";import"./Divider-U3oIKmQv.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BW_bH-hP.js";import"./FormControl-CitCh22I.js";import"./isMuiElement-BPsBBR2z.js";import"./Grid-BWZayuEN.js";import"./IconButton-SAs9Di6J.js";import"./CircularProgress-BAVpeqhg.js";import"./Tooltip-BYG0wW6K.js";import"./Button-B0ZWu58J.js";import"./Container-B58issDp.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
