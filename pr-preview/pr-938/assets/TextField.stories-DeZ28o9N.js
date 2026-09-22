import{j as e}from"./iframe-pcBkreyF.js";import{C as a}from"./TextField-xZCvgifI.js";import{B as s}from"./index-D-7rEUPH.js";import{P as l}from"./index-D4mWQJ5y.js";import{T as d}from"./index-oyMY6j-r.js";import{G as n}from"./index-rjMel0fo.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-Cb3XGUHS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BNNmgO8a.js";import"./index-DvMYR6cM.js";import"./index-CrcoPoGw.js";import"./index-BHECb7j3.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CQU7rCYy.js";import"./memoTheme-BGzSgD4T.js";import"./styled-DhfgW05P.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CkVLmsyo.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Bf13Qy6E.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Hy7YqFc2.js";import"./SelectFocusSourceContext-CX9jhojZ.js";import"./useSlot-Nge6-EMU.js";import"./mergeSlotProps-sZF9W67M.js";import"./useForkRef-D6t7VBhN.js";import"./useSlotProps-DXdTwkgQ.js";import"./Popover-C9B_5d2D.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-BLikJhBv.js";import"./useTheme-DrTO_DRk.js";import"./utils-BhTotuHU.js";import"./TransitionGroupContext-B-1f4D3_.js";import"./useTimeout-BkFACxc1.js";import"./getReactElementRef-DUpT5N-m.js";import"./mergeSlotProps-DZ2a6j45.js";import"./debounce-Be36O1Ab.js";import"./Modal-B61PTYm1.js";import"./useEventCallback-C_PhZ4gM.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CgPauin7.js";import"./Fade-BrnSbnNG.js";import"./Paper-CIIxPuZQ.js";import"./List-a_vVMaa5.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DNBc9hrk.js";import"./createSvgIcon-BbL3U0Hb.js";import"./OutlinedInput-BjryEflV.js";import"./FormHelperText-C7FrADGT.js";import"./FormControlLabel-DRNnFuPg.js";import"./Typography-sFl1f9yL.js";import"./Switch-DsQpNO6o.js";import"./SwitchBase-31BvtgwI.js";import"./ButtonBase-BIRNPLHh.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-Dy2mqGql.js";import"./RadioGroup-CNBCQsi2.js";import"./FormGroup-BurSUFFK.js";import"./Stack-CK_dWn5x.js";import"./styled-Dcs2wRea.js";import"./Box-Ca_dclTz.js";import"./Divider-DByQLpF0.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CsOWRe-2.js";import"./FormControl-DG3RaKjS.js";import"./isMuiElement-c2rAqbnw.js";import"./Grid-CiV8r-oF.js";import"./IconButton-CLvE6niR.js";import"./CircularProgress-vX9_m42Y.js";import"./Tooltip-DFZ7S6Z_.js";import"./Button-BPX7NsmD.js";import"./Container-h1971dVV.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
