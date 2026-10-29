import{j as e}from"./iframe-CLut6yOe.js";import{C as a}from"./TextField-BBWgiQlB.js";import{B as s}from"./index-DNgDR8tQ.js";import{P as l}from"./index-B1V0ahmp.js";import{T as d}from"./index-DmhD3hPK.js";import{G as n}from"./index-BGYc3edq.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-xFE0TLfu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CI4h3JAT.js";import"./index-DroMy-PZ.js";import"./index-MVgG_W0q.js";import"./index-CxuuQ7ms.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Dd51Rz_D.js";import"./memoTheme-BCZ6py50.js";import"./styled-B56iE4qf.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-C4ZzvvPY.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CsURvBpr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Dy9kUNRR.js";import"./SelectFocusSourceContext-BqjsBqoL.js";import"./useSlot-C8ASSSxZ.js";import"./mergeSlotProps-BoE-e40D.js";import"./useForkRef-CW7nwTzV.js";import"./useSlotProps-BphsLqn6.js";import"./Popover-D8aHDtre.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-buqhKvPN.js";import"./useTheme-uzqIZvgA.js";import"./utils-CY0-o-M4.js";import"./TransitionGroupContext-CxTk-KXz.js";import"./useTimeout-DSf2abi9.js";import"./getReactElementRef-CPIcGi-m.js";import"./mergeSlotProps-BD3yaoOB.js";import"./debounce-Be36O1Ab.js";import"./Modal-RUjatzFH.js";import"./useEventCallback-BXl50wnQ.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DrT6KjAn.js";import"./Fade-CkZ97Hml.js";import"./Paper-CMcH6Gk3.js";import"./List-Ed_p2skf.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BMhEC-vi.js";import"./createSvgIcon-BcCXBLY5.js";import"./OutlinedInput-NqaTAoz7.js";import"./FormHelperText-Du_S5IXp.js";import"./FormControlLabel-DK2k45Ms.js";import"./Typography-BLWoaJn_.js";import"./Switch-bv0zSmLo.js";import"./SwitchBase-B76ZlPUO.js";import"./ButtonBase-B4AmE_nS.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-C6QDUZlf.js";import"./RadioGroup-DtHGdsBt.js";import"./FormGroup-_FRXrzq-.js";import"./Stack-C0CMzs2G.js";import"./styled-qS0Yrwc6.js";import"./Box-KcVtg1pO.js";import"./Divider-o9_MDQMV.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-Bc4ff8G-.js";import"./FormControl-BZcEw6H3.js";import"./isMuiElement-CAAIFwhI.js";import"./Grid-CiYph9Ji.js";import"./IconButton-MKfAwX3T.js";import"./CircularProgress-Cb3dAqoX.js";import"./Tooltip-20BxdW9m.js";import"./Button-CO7SGq6S.js";import"./Container-DKVcPtkF.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
