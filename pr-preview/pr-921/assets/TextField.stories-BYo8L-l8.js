import{j as e}from"./iframe-C9_PxSGQ.js";import{C as a}from"./TextField-B-D__QEa.js";import{B as s}from"./index-ButV5MJr.js";import{P as l}from"./index-Bjbz6YkZ.js";import{T as d}from"./index-Bwm7V2AF.js";import{G as n}from"./index-Cwp1bTGK.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-CAaGANuF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DYt7HrLH.js";import"./index-CE6aNSs8.js";import"./index-CrcoPoGw.js";import"./index-Ddg0Heb3.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-FGOQRPT3.js";import"./memoTheme-BxvcW3UF.js";import"./styled-B-vqXkzy.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BeY29v7P.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CpMC7EHx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-DcupVlEN.js";import"./SelectFocusSourceContext-Fw-FsAu5.js";import"./useSlot-B-bGbgrQ.js";import"./mergeSlotProps-DQ8_Kw8O.js";import"./useForkRef-CmIALVnC.js";import"./useSlotProps-BDX3RUX-.js";import"./Popover-Dc2RDNtf.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-Ct4gHjrk.js";import"./useTheme-BHbpGC30.js";import"./utils-8dHd4F9E.js";import"./TransitionGroupContext-BZ4pLHPO.js";import"./useTimeout-BMn8x6pQ.js";import"./getReactElementRef-on-DwLqm.js";import"./mergeSlotProps-BJFY07Zq.js";import"./debounce-Be36O1Ab.js";import"./Modal-CUp8vkO1.js";import"./useEventCallback-DieoYw-U.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-5mRpAKll.js";import"./Fade-BLrbHvJ9.js";import"./Paper-DGceIsLw.js";import"./List-DWo7-1hB.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BGxEnoNZ.js";import"./createSvgIcon-DoDU4gSx.js";import"./OutlinedInput-BZW58KdM.js";import"./FormHelperText-CQ0DNzl4.js";import"./FormControlLabel-DQ-Rgi5d.js";import"./Typography-B7ymJCK8.js";import"./Switch-C9aFTenp.js";import"./SwitchBase-CbZ2kkmp.js";import"./ButtonBase-k4M9aDLt.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-DCg2Gj6y.js";import"./RadioGroup-DJuShQt6.js";import"./FormGroup-mRbk2rO2.js";import"./Stack-BEdSkyO_.js";import"./styled-v5MGqYmj.js";import"./Box-DwMYriWl.js";import"./Divider-BU7503P_.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CdzSC_MY.js";import"./FormControl-DXuwkCpR.js";import"./isMuiElement-BE5icW1i.js";import"./Grid-AdyG_hrd.js";import"./Tooltip-FRBJUwm-.js";import"./IconButton-BjLNslZW.js";import"./CircularProgress-vDDdOi_d.js";import"./Button-DtK3QmjS.js";import"./Container-DSjJo15B.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
