import{j as e}from"./iframe-Cl61WGkI.js";import{C as a}from"./TextField-DRN76070.js";import{B as s}from"./index-CqgX4Pjw.js";import{P as l}from"./index-DEMyV-7J.js";import{T as d}from"./index-CJQ0Fxar.js";import{G as n}from"./index-D0cf1ol3.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-BbogUaub.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Du3U5mjC.js";import"./index-DjWqBCXk.js";import"./index-CrcoPoGw.js";import"./index-CmI2eh32.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Dwb1J2d-.js";import"./memoTheme-Bl50oicv.js";import"./styled-BC98FWsK.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BSv5oG3S.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-D2EIO9e7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Cn1KxIPd.js";import"./SelectFocusSourceContext-CAKJeAkQ.js";import"./useSlot-BNKzCfYO.js";import"./mergeSlotProps-oCe6X0UM.js";import"./useForkRef-BgBNpKdE.js";import"./useSlotProps-BwXPHno3.js";import"./Popover-Du9tN1-X.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-CKqV7NOt.js";import"./useTheme-IfO6Fwpt.js";import"./utils-BISW7tPB.js";import"./TransitionGroupContext-DF5xYsKa.js";import"./useTimeout-DRIZehDr.js";import"./getReactElementRef-C7aNrngo.js";import"./mergeSlotProps-ZgLDWHqg.js";import"./debounce-Be36O1Ab.js";import"./Modal-B_tt91Mu.js";import"./useEventCallback-04OY0OEQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-C_s6yW8r.js";import"./Fade-sz48bo3z.js";import"./Paper-DdNx7n5g.js";import"./List-BAGNgyyd.js";import"./utils-DoM3o7-Q.js";import"./useControlled-Df0GFCpG.js";import"./createSvgIcon-C9mzZA9x.js";import"./OutlinedInput-ClvlI1xc.js";import"./FormHelperText-C194FQMi.js";import"./FormControlLabel-DjUlFFqe.js";import"./Typography-BbUycIDS.js";import"./Switch-BDf-0e9Z.js";import"./SwitchBase-BclwBU3W.js";import"./ButtonBase-q-jaW3RD.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CgniSRaf.js";import"./RadioGroup-DT7A7289.js";import"./FormGroup-NS8rU_fN.js";import"./Stack-DbcIcCvU.js";import"./styled-DUX11FjB.js";import"./Box-BylFce9S.js";import"./Divider-DDnoJtKN.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DQqTUngf.js";import"./FormControl-DYxyVnQd.js";import"./isMuiElement-Cx1dzcL4.js";import"./Grid-CY38bvtz.js";import"./Tooltip-BWDly8di.js";import"./IconButton-q11oqdUa.js";import"./CircularProgress-Bq8oVM2O.js";import"./Button-DuB2O4vc.js";import"./Container-CQCkLV4U.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
