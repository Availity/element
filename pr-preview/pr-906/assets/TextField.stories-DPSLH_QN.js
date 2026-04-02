import{j as e}from"./iframe-6QlsuZks.js";import{C as a}from"./TextField-BO4cc0-J.js";import{B as s}from"./index-Bu7ksarN.js";import{P as l}from"./index-CDZf3QmR.js";import{T as d}from"./index-ClTqhWkD.js";import{G as n}from"./index-D54pz1q_.js";import{T as c,a as h}from"./Types-DLUIPKsS.js";import{u as p,F as u}from"./index.esm-DiaYOtWy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CWuq3cDW.js";import"./index-DVMtrzSw.js";import"./index-BiBDMnSv.js";import"./index-CrKJovUE.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-o3xhyLw5.js";import"./memoTheme-B9sQlNky.js";import"./styled-DGzk_rgf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-0NhCwZGG.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DZ_CUTQW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CKSuph_q.js";import"./Menu-C8039Cjb.js";import"./useSlot-DzncR7P9.js";import"./mergeSlotProps-hCluPQZ0.js";import"./useForkRef-B_RCYMsy.js";import"./useSlotProps-XhtNc6mu.js";import"./Popover-CbDgWpYW.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-DtF3r0WZ.js";import"./useTheme-CgDfdbfy.js";import"./utils-DDHdHaR3.js";import"./TransitionGroupContext-BfrWwv51.js";import"./useTimeout-CoBmWaVy.js";import"./getReactElementRef-CeFrpTOn.js";import"./mergeSlotProps-y686c5--.js";import"./debounce-Be36O1Ab.js";import"./Modal-BEIbnPxI.js";import"./useEventCallback-H76OWquH.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-BrGAJPN3.js";import"./Fade-BumTlQbr.js";import"./Paper-CDdLas_Y.js";import"./List-Dng0f1WM.js";import"./utils-DoM3o7-Q.js";import"./useControlled-D8gQq48B.js";import"./createSvgIcon-suRscvHS.js";import"./OutlinedInput-BvrLXmtS.js";import"./FormHelperText-BoQfm90T.js";import"./FormControlLabel-DydU_YjN.js";import"./Typography-BiVk-Xpu.js";import"./Switch-CPR75Nav.js";import"./SwitchBase-CPhx0cqS.js";import"./ButtonBase-DqANlMe2.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio--62dKuxE.js";import"./RadioGroup-K7Ow30iF.js";import"./FormGroup-DnkUzQHJ.js";import"./Box-BeM2Ae_w.js";import"./Divider-DciKYC8r.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-CcxNsvTs.js";import"./styled-BHPtUtOc.js";import"./TextField-mI9jqCUl.js";import"./FormControl-CXZTEhg_.js";import"./isMuiElement-Cw9eyX2o.js";import"./Grid-B1lubc6W.js";import"./Tooltip-Obr4DBw0.js";import"./IconButton-C52xOams.js";import"./CircularProgress-BzseWMqn.js";import"./Button-Ck8mL0PX.js";import"./Container-BCUe36Lo.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
