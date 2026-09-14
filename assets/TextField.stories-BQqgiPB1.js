import{j as e}from"./iframe-D39zpO5D.js";import{C as a}from"./TextField-RRa9wOpw.js";import{B as s}from"./index-CT8p7-xb.js";import{P as l}from"./index-CalBDkhA.js";import{T as d}from"./index-CIttbvMR.js";import{G as n}from"./index-BHfSa4RT.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-DI-vKELN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-F3Dfuzp1.js";import"./index-CRBGvwQd.js";import"./index-CrcoPoGw.js";import"./index-LJlq2DD9.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DrCHR_XG.js";import"./memoTheme-DS1Qd1tD.js";import"./styled-DVn78CF9.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CbsmgfPu.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DAAm-Ep5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Cr_b3k2m.js";import"./SelectFocusSourceContext-CAoytt1x.js";import"./useSlot-BR7cWQ8J.js";import"./mergeSlotProps-hvpDzkoH.js";import"./useForkRef-DNCE6AYe.js";import"./useSlotProps-CHrZTrOT.js";import"./Popover-CLbI9j0Y.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-D0_VnBDB.js";import"./useTheme-Q_YzHohC.js";import"./utils-BiqFTD-G.js";import"./TransitionGroupContext-iGlL40r0.js";import"./useTimeout-DkqtJI-P.js";import"./getReactElementRef-BiLy3DMf.js";import"./mergeSlotProps-VT4Oa8rE.js";import"./debounce-Be36O1Ab.js";import"./Modal-Bcdi7MY2.js";import"./useEventCallback-CTE8ZTt3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-BGS6hD_O.js";import"./Fade-C2SBq3LE.js";import"./Paper-B079EtYg.js";import"./List-C3S5OFLg.js";import"./utils-DoM3o7-Q.js";import"./useControlled-Dc7tfWw6.js";import"./createSvgIcon-CXilsj0Y.js";import"./OutlinedInput-DUfnrBns.js";import"./FormHelperText-SrmT5h7r.js";import"./FormControlLabel-DlhlN1bF.js";import"./Typography-lHvxoPWM.js";import"./Switch-DWJuNNrz.js";import"./SwitchBase-Dtvf4WNX.js";import"./ButtonBase-C5qFdqG6.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-D-0z7h1P.js";import"./RadioGroup-BF-ujAZJ.js";import"./FormGroup-DlBhWtzs.js";import"./Stack-DtFT-rmC.js";import"./styled-D2W9iR9V.js";import"./Box-MvPvGRqH.js";import"./Divider-m_CRUwIv.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-BAYVG84c.js";import"./FormControl-yV9__Y8G.js";import"./isMuiElement-B_WcrTr3.js";import"./Grid-sUXan3gB.js";import"./IconButton-1y7-X1Ns.js";import"./CircularProgress-DZf4mQi8.js";import"./Tooltip-T0tiLXY7.js";import"./Button-BxFiSb--.js";import"./Container-Bg9CFWCo.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
