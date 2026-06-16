import{j as e}from"./iframe-DV02LU8f.js";import{C as a}from"./TextField-WFhNFxcs.js";import{B as s}from"./index-DgtuzQHk.js";import{P as l}from"./index-1EbFGlVC.js";import{T as d}from"./index-D2YoiO12.js";import{G as n}from"./index-DN1f2VGk.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-BfkWILhT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-k3iUcuPT.js";import"./index-DGPCr9CP.js";import"./index-CrcoPoGw.js";import"./index-B2ndQJTP.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BicIoovE.js";import"./memoTheme-DH1tDBpV.js";import"./styled-rnNWEicw.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DxmpMApS.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-rUj125Nx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-SJiTaZi2.js";import"./SelectFocusSourceContext-D8Hbh3nZ.js";import"./useSlot-Hu3W-cCE.js";import"./mergeSlotProps-Bc2Oi4bk.js";import"./useForkRef-BwPtyht0.js";import"./useSlotProps-Dtx0TQHB.js";import"./Popover-BR27wnSV.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-PMyfFMaG.js";import"./useTheme-Y2xcdKFi.js";import"./utils-CvzJUHOJ.js";import"./TransitionGroupContext-BxFEbXtm.js";import"./useTimeout-7haRoRjC.js";import"./getReactElementRef-COC2CLEL.js";import"./mergeSlotProps-N6SvUUDD.js";import"./debounce-Be36O1Ab.js";import"./Modal-B3KISgYa.js";import"./useEventCallback-DerujR8C.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-Ci3V7QU8.js";import"./Fade-CAu7O51Y.js";import"./Paper-X_4XbRhq.js";import"./List-B86gDMtC.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DL5wIsJx.js";import"./createSvgIcon-ClgyEN0Z.js";import"./OutlinedInput-MfvrGn0E.js";import"./FormHelperText-B69_0vl5.js";import"./FormControlLabel-BmV4-vkc.js";import"./Typography-BZigmqh7.js";import"./Switch-CgHx9hmd.js";import"./SwitchBase-slcB8KUf.js";import"./ButtonBase-DyVkVOcL.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CReGbcbO.js";import"./RadioGroup-D4ixwP02.js";import"./FormGroup-ClgnKSXL.js";import"./Stack-BwJgyjvk.js";import"./styled-TfTHS2wg.js";import"./Box-SeXXrj1o.js";import"./Divider-DdW8tJiT.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-DQoXfjFU.js";import"./FormControl-B-ToJw53.js";import"./isMuiElement-Bod-d1Ly.js";import"./Grid-CAt1Mh8-.js";import"./Tooltip-BOv4Ws7L.js";import"./IconButton-D4Hw4OQf.js";import"./CircularProgress-CAVNnpCq.js";import"./Button-3YflG3_Z.js";import"./Container-C-cbttNX.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
