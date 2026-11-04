import{j as e}from"./iframe-B7It4zq8.js";import{C as a}from"./TextField-BfbaTibY.js";import{B as s}from"./index-U6rGSuo_.js";import{P as l}from"./index-Cs6zky6n.js";import{T as d}from"./index-B9JugXxe.js";import{G as n}from"./index-NPVdg4Et.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-Damkin-E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-s6sQNl3x.js";import"./index-eyGbV9a5.js";import"./index-MVgG_W0q.js";import"./index-DahGL3Ws.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-CN80xc_w.js";import"./memoTheme-CGf3L_ek.js";import"./styled-Bn4RjmYR.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DL9fs6b-.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-B-9vmVn0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CqroXm0-.js";import"./SelectFocusSourceContext-p7Q9PkOh.js";import"./useSlot-W932GJWf.js";import"./mergeSlotProps-D605olu0.js";import"./useForkRef-CPn4J3x7.js";import"./useSlotProps-5kTH7JUJ.js";import"./Popover-CvEl5u9c.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-Dv_fvGmT.js";import"./useTheme-BEYyhBmQ.js";import"./utils-8hf5HdRr.js";import"./TransitionGroupContext-DcJKCyB0.js";import"./useTimeout-YUVk49Nr.js";import"./getReactElementRef-DdXJtssw.js";import"./mergeSlotProps-CT132jMM.js";import"./debounce-Be36O1Ab.js";import"./Modal-XCKy5Q-Z.js";import"./useEventCallback-C74dKXBI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CMsbxjXn.js";import"./Fade-dOEIYsg7.js";import"./Paper-16eSpGwX.js";import"./List-BBFik3I9.js";import"./utils-DoM3o7-Q.js";import"./useControlled-D_SZmVUM.js";import"./createSvgIcon-mTQeEUrk.js";import"./OutlinedInput-2NJ2Vb7h.js";import"./FormHelperText-xZDaLp3L.js";import"./FormControlLabel-DzsUjCY9.js";import"./Typography-D5VLn6r5.js";import"./Switch-gEQ3qE6L.js";import"./SwitchBase-CGG-3b0l.js";import"./ButtonBase-B2waO-fK.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BrnWVLWC.js";import"./RadioGroup-CCkcY1aL.js";import"./FormGroup-CrkydTVS.js";import"./Stack-KZSUJmtQ.js";import"./styled-DnXB-Vry.js";import"./Box-DCJTclMn.js";import"./Divider-hoZSVZoR.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-B_Hivwte.js";import"./FormControl-BIzU-s4D.js";import"./isMuiElement-Co847M5i.js";import"./Grid-A8igwbvH.js";import"./IconButton-C-t-b5Lt.js";import"./CircularProgress-B2uMItbz.js";import"./Tooltip-CzJoUoCR.js";import"./Button-BIhtYg5K.js";import"./Container-DFLwTEF8.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
