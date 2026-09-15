import{j as e}from"./iframe-_ZTccD58.js";import{C as a}from"./TextField-i_iH4p2N.js";import{B as s}from"./index-DLaYSOpi.js";import{P as l}from"./index-CSJoiZpW.js";import{T as d}from"./index-CHmUp4gL.js";import{G as n}from"./index-MbAAKXvE.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-B6w-j87e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C3h17Tj6.js";import"./index-BrswPlEY.js";import"./index-CrcoPoGw.js";import"./index-D2g-Snq2.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-B7LeHXNQ.js";import"./memoTheme-BuxtMmS2.js";import"./styled-DxUGJNed.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BOIs-YGq.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-3-vne5Nr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-wCdgrbFd.js";import"./SelectFocusSourceContext-CjN1_fJS.js";import"./useSlot-Y1vfiROK.js";import"./mergeSlotProps-BNTkh1_h.js";import"./useForkRef-BH960YuM.js";import"./useSlotProps-93kC9vNJ.js";import"./Popover-DTwCY0yp.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-D40QliBd.js";import"./useTheme-CbKlvc9V.js";import"./utils-CGytJ6bP.js";import"./TransitionGroupContext-U0kEnV9D.js";import"./useTimeout-COBvC2JW.js";import"./getReactElementRef-CKHPMftD.js";import"./mergeSlotProps-D6scpCU0.js";import"./debounce-Be36O1Ab.js";import"./Modal-D02YFzj_.js";import"./useEventCallback-Bsg7GzMN.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-B0rEXgSL.js";import"./Fade-U1zsu3gd.js";import"./Paper-TFiwEfzG.js";import"./List-D6qKeGNd.js";import"./utils-DoM3o7-Q.js";import"./useControlled-h9lrVQtL.js";import"./createSvgIcon-CPBwa84_.js";import"./OutlinedInput-DXlNzAXJ.js";import"./FormHelperText-CVMjCHsI.js";import"./FormControlLabel-Bk2X92XQ.js";import"./Typography-BQev244I.js";import"./Switch-DVpo9JuL.js";import"./SwitchBase-BCE6kg8q.js";import"./ButtonBase-CPTcrrxt.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-C4kknd4X.js";import"./RadioGroup-jGIVdwLG.js";import"./FormGroup-DF6oOKk8.js";import"./Stack-DA_tb5jO.js";import"./styled-B0tsulN_.js";import"./Box-BSxgn2ms.js";import"./Divider-ByHj0LGu.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-3_6rcchm.js";import"./FormControl-COm2WUnr.js";import"./isMuiElement-yepEbMeh.js";import"./Grid-cMYs6nxO.js";import"./IconButton-DaIXPvFu.js";import"./CircularProgress-DP4XdEyk.js";import"./Tooltip-BlJXya1q.js";import"./Button-DpAEBbkn.js";import"./Container-ChGZTn1s.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
