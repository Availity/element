import{j as e}from"./iframe-hulqVKFa.js";import{C as a}from"./TextField-BgN2cuKV.js";import{B as s}from"./index-CWJdyCdu.js";import{P as l}from"./index-CWsRpgkr.js";import{T as d}from"./index-PP9CmKdi.js";import{G as n}from"./index-BlNR_NWf.js";import{T as c,a as h}from"./Types-DLUIPKsS.js";import{u as p,F as u}from"./index.esm-ByqGPp5Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BjhwojTf.js";import"./index-CwQEE9jE.js";import"./index-BiBDMnSv.js";import"./index-CFZ7DghX.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-i9gddw4o.js";import"./memoTheme-B_nCzl8M.js";import"./styled-CYnX6RAa.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Buq9vnb5.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CY5egsXZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CSBq7uz_.js";import"./Menu-BASAkWZI.js";import"./useSlot-CalbLJ3n.js";import"./mergeSlotProps-C6UhvrC4.js";import"./useForkRef-BQz3TnTQ.js";import"./useSlotProps-CO5Qh0k_.js";import"./Popover-BiUSFDdq.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-BqpYj0TQ.js";import"./useTheme-C7AUirRA.js";import"./utils-CqZ-bN0c.js";import"./TransitionGroupContext-DQUbB_yy.js";import"./useTimeout-Bim6OzXz.js";import"./getReactElementRef-DCfmlyG2.js";import"./mergeSlotProps-BYXPuP8C.js";import"./debounce-Be36O1Ab.js";import"./Modal-BIuYGRLg.js";import"./useEventCallback-IcKGM0BT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-l3mPJCzo.js";import"./Fade-T6bIu7ga.js";import"./Paper-BVOs07DX.js";import"./List-CHNmHfLH.js";import"./utils-DoM3o7-Q.js";import"./useControlled-maN10Goq.js";import"./createSvgIcon-MyKUcFFT.js";import"./OutlinedInput-8C-NOWfH.js";import"./FormHelperText-CJHErJH9.js";import"./FormControlLabel-Dnvw7QmX.js";import"./Typography-COHcSKH7.js";import"./Switch-D6kkTZOZ.js";import"./SwitchBase-BXxnTvJc.js";import"./ButtonBase-2bDflI9o.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BCOKkKaa.js";import"./RadioGroup-DCnXM_Hp.js";import"./FormGroup-BDEQiySx.js";import"./Box-CyvodRNS.js";import"./Divider-DjTc7Vl7.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-B2rPYqjB.js";import"./styled-QvSbzdTE.js";import"./TextField-opqoiQIi.js";import"./FormControl-BTDFP5sq.js";import"./isMuiElement-B2zjcqD7.js";import"./Grid-CPl8rXDT.js";import"./Tooltip-CwFATdR1.js";import"./IconButton-D52dKoJw.js";import"./CircularProgress-p22Pqfnj.js";import"./Button-BD9YMHcT.js";import"./Container-CNnb763M.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
