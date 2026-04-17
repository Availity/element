import{j as e}from"./iframe-D_FBGCyt.js";import{C as a}from"./TextField-CUq-wtsF.js";import{B as s}from"./index-DfmN7Pdp.js";import{P as l}from"./index-DVlriJs3.js";import{T as d}from"./index-BFUMh9R9.js";import{G as n}from"./index-BBo7dAKW.js";import{T as c,a as h}from"./Types-DLUIPKsS.js";import{u as p,F as u}from"./index.esm-DJF8fB7j.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPhJbrDP.js";import"./index-CHeBUqtj.js";import"./index-BiBDMnSv.js";import"./index-C15pSvNp.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-5AfvjDJL.js";import"./memoTheme-BLxVLpBG.js";import"./styled-xf6f_HVu.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CcBITnwG.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-D0mczUgB.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-rTOCbTjW.js";import"./Menu-D87dknpl.js";import"./useSlot-BtMprAQd.js";import"./mergeSlotProps-gV_s4djX.js";import"./useForkRef-CnVOscb6.js";import"./useSlotProps-C2D_NZSZ.js";import"./Popover-DSajnCnR.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-DcK87Y2W.js";import"./useTheme-C9l_6OF0.js";import"./utils-DnGyS3wP.js";import"./TransitionGroupContext-D8t5YM-9.js";import"./useTimeout-SlAgGEcH.js";import"./getReactElementRef-CwqBwRrr.js";import"./mergeSlotProps-Vx5Db-vC.js";import"./debounce-Be36O1Ab.js";import"./Modal-C7olDkj8.js";import"./useEventCallback-jDv7Sv7e.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-y5ajGIML.js";import"./Fade-BVS2OpEz.js";import"./Paper-BakwuC79.js";import"./List-BXCcSLWL.js";import"./utils-DoM3o7-Q.js";import"./useControlled-CdfLcSkL.js";import"./createSvgIcon-CrDNgKEm.js";import"./OutlinedInput-BIVPjmnf.js";import"./FormHelperText-D-uyeHOV.js";import"./FormControlLabel-R0V4f3aH.js";import"./Typography-2LRTBqXt.js";import"./Switch-CePFD_S0.js";import"./SwitchBase-DTTSsIt3.js";import"./ButtonBase-D61WXHG0.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-D_ui9MP1.js";import"./RadioGroup-DFPZLkM7.js";import"./FormGroup-Cz3AxvE4.js";import"./Box-CvB3zA9H.js";import"./Divider-PHdlqile.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-CDN4SC59.js";import"./styled-D_5SdMbV.js";import"./TextField-BeRi7xW_.js";import"./FormControl-am7KBdv4.js";import"./isMuiElement-DWlz3pJm.js";import"./Grid-DRIeD9kY.js";import"./Tooltip-Cz548eDU.js";import"./IconButton-eUYvyQUt.js";import"./CircularProgress-BjsVuxPp.js";import"./Button-CuoV_D53.js";import"./Container-CHNU3dwn.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
