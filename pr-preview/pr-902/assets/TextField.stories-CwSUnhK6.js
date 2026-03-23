import{j as e}from"./iframe-DvcXWkGI.js";import{C as a}from"./TextField-CDAuxCjw.js";import{B as s}from"./index-O15mV2IG.js";import{P as l}from"./index-CooZlyF2.js";import{T as d}from"./index-C1KFV9tz.js";import{G as n}from"./index-lKF-mYBi.js";import{T as c,a as h}from"./Types-DLUIPKsS.js";import{u as p,F as u}from"./index.esm-DK5g2aHU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-64cBt2pn.js";import"./index-8WqHyHCn.js";import"./index-BiBDMnSv.js";import"./index-63S9eLZS.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-Co17_fug.js";import"./memoTheme-C00_9AbM.js";import"./styled-DjkE2l0O.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DrBlRY0b.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CnGwjuyh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CpxYMe4e.js";import"./Menu-BvR-3tqL.js";import"./useSlot-DrWGT-0c.js";import"./mergeSlotProps-C-IYj7GK.js";import"./useForkRef-DXhMi9Fu.js";import"./useSlotProps-BYEe1XOi.js";import"./Popover-AZC5xG1m.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-BJf12Rly.js";import"./useTheme-BDjWybQB.js";import"./utils-CXX3yobC.js";import"./TransitionGroupContext-DxPJb2_E.js";import"./useTimeout-BLAqdi1l.js";import"./getReactElementRef-CyXa0GT6.js";import"./mergeSlotProps-CU9nKqZa.js";import"./debounce-Be36O1Ab.js";import"./Modal-BP1sB3AO.js";import"./useEventCallback-jEehnAW2.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CR8PY8T1.js";import"./Fade-DI9jsdhL.js";import"./Paper-BWWtmnI-.js";import"./List-UiPSZZQ2.js";import"./utils-DoM3o7-Q.js";import"./useControlled-CWsku3Ua.js";import"./createSvgIcon-JaHuofy7.js";import"./OutlinedInput-Dcxo-ASf.js";import"./FormHelperText-ejXNJD_u.js";import"./FormControlLabel-CtVOAWlx.js";import"./Typography-CbbFdRSD.js";import"./Switch-dGJM5-u2.js";import"./SwitchBase-BEtkunQj.js";import"./ButtonBase-CI7etmmo.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-OyBSFkGt.js";import"./RadioGroup-BwF9pQjX.js";import"./FormGroup-x5VZN7lS.js";import"./Box-D0PWnwSE.js";import"./Divider-DVlfBs2v.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-BWYDbKiS.js";import"./styled-1evKp3Hp.js";import"./TextField-CIsWpzBq.js";import"./FormControl-Bl3frfty.js";import"./isMuiElement-BM04y7u2.js";import"./Grid-B-VOZSOw.js";import"./Tooltip-CA4xVq51.js";import"./IconButton-C6_QWXQy.js";import"./CircularProgress-CsILiYUE.js";import"./Button-EYXZSfHT.js";import"./Container-Dwn77WAc.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
