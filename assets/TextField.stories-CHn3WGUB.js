import{j as e}from"./iframe-_UUIOQuH.js";import{C as a}from"./TextField-8TIfszYY.js";import{B as s}from"./index-TC4m-Pq9.js";import{P as l}from"./index-CN5W_Lp7.js";import{T as d}from"./index-ZH-6PAbo.js";import{G as n}from"./index-BtEaczgi.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-BSikp1LP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DkZHOse5.js";import"./index-xNAiQBP1.js";import"./index-CrcoPoGw.js";import"./index-C64ixpTy.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Bp4jKyt3.js";import"./memoTheme-CIZa69Jr.js";import"./styled-b9_l-4u0.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DQWo1yfq.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CTluzM1B.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Une4fEtR.js";import"./SelectFocusSourceContext-r48ZZdc4.js";import"./useSlot-CykKJjN_.js";import"./mergeSlotProps-BdoUtTwz.js";import"./useForkRef-Ds0id4pA.js";import"./useSlotProps-Ceux9c--.js";import"./Popover-xKML6FqO.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-CM-iumOR.js";import"./useTheme-CMhvYveJ.js";import"./utils-CA__7Tjr.js";import"./TransitionGroupContext-BWER5STN.js";import"./useTimeout-CpXLyJm7.js";import"./getReactElementRef-C0bnOj0D.js";import"./mergeSlotProps-Bn9bLFsW.js";import"./debounce-Be36O1Ab.js";import"./Modal-CM12C_yu.js";import"./useEventCallback-C78AkP7O.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BIxTCRW2.js";import"./Fade-BLKcm6ko.js";import"./Paper-P8N6YQhi.js";import"./List-C4OA8wB0.js";import"./utils-DoM3o7-Q.js";import"./useControlled-De2ikPKN.js";import"./createSvgIcon-4iIpqybs.js";import"./OutlinedInput-DGiceUve.js";import"./FormHelperText-pYsIiyHO.js";import"./FormControlLabel-DPHIrrlZ.js";import"./Typography-6OKQ2qDF.js";import"./Switch-bAqugkzY.js";import"./SwitchBase-DgyKBDYv.js";import"./ButtonBase-B29bExhs.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-D6-4V09b.js";import"./RadioGroup-CNUqCHUu.js";import"./FormGroup-CE3PB0EV.js";import"./Stack-DyYrotpf.js";import"./styled-D33n_PsO.js";import"./Box-B5h19-4r.js";import"./Divider-DtxNcQca.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BmCYopNL.js";import"./FormControl-Cpyq_H8j.js";import"./isMuiElement-WWIYAN0M.js";import"./Grid-CC4gnOAh.js";import"./IconButton-CUKPhxxE.js";import"./CircularProgress-DrYD12o3.js";import"./Tooltip-BIzLnAgn.js";import"./Button-BOTNYh0S.js";import"./Container-Abk-Ppxh.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
