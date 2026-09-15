import{j as e}from"./iframe-CgyQHDht.js";import{C as a}from"./TextField-B4E9lRh0.js";import{B as s}from"./index-5azouwn6.js";import{P as l}from"./index-DX1QWm0x.js";import{T as d}from"./index-Au96FvEp.js";import{G as n}from"./index-BiQy1AHR.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-DQRj2ryX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dm4zs3BZ.js";import"./index-H6Uxih6N.js";import"./index-CrcoPoGw.js";import"./index-6_aePX59.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-D8liJDyc.js";import"./memoTheme-9z4HOxEW.js";import"./styled-CeAqJ-c9.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BjV2ncBQ.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Ca8XhVwX.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-wirFxTuI.js";import"./SelectFocusSourceContext-DstQPVWn.js";import"./useSlot-BI63qm8Z.js";import"./mergeSlotProps-DEDO0PDp.js";import"./useForkRef-DvvK-eiI.js";import"./useSlotProps-D00sgM-L.js";import"./Popover-BgvdSOaj.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-Cv3ZG74Z.js";import"./useTheme-DBOW2iGc.js";import"./utils-i6pe6p9D.js";import"./TransitionGroupContext-CbCiCZin.js";import"./useTimeout-B7u63TVX.js";import"./getReactElementRef-DSOw1wXb.js";import"./mergeSlotProps-gK_7x5gw.js";import"./debounce-Be36O1Ab.js";import"./Modal-DZVQKIJf.js";import"./useEventCallback-v1-mseXg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-CV_7DsVP.js";import"./Fade-DcwI299R.js";import"./Paper-C6T4apaD.js";import"./List-DixvLrk0.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DSiBAGka.js";import"./createSvgIcon-CyM8AHy5.js";import"./OutlinedInput-B2h6fqQ3.js";import"./FormHelperText-D2TAK_49.js";import"./FormControlLabel-DhBBoI9-.js";import"./Typography-yiHubm7E.js";import"./Switch-CLE859Ym.js";import"./SwitchBase-D-PtVu31.js";import"./ButtonBase-BeOu4eYa.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-B6-Bdtmn.js";import"./RadioGroup-Dy6esOrh.js";import"./FormGroup-LqcUTR9x.js";import"./Stack-oqPb14Ks.js";import"./styled-Dvv_Oh9D.js";import"./Box-BxdWl5-L.js";import"./Divider-A7T5E6Fz.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CAaqDkho.js";import"./FormControl-yur8uxgd.js";import"./isMuiElement-BaNoNC5Q.js";import"./Grid-BNO3N1YM.js";import"./IconButton-M-Sr99uW.js";import"./CircularProgress-OvvKtsaM.js";import"./Tooltip-0ZBCaLdQ.js";import"./Button-D8e6tdaf.js";import"./Container-s8QyPm16.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
