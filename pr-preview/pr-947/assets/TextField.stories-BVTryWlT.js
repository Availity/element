import{j as e}from"./iframe-C7RYpRRO.js";import{C as a}from"./TextField-CmT2bipi.js";import{B as s}from"./index-C-TAFGmA.js";import{P as l}from"./index-D141wv3c.js";import{T as d}from"./index-BnSCHJ_C.js";import{G as n}from"./index-C2dcAPuD.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-DSRVq6kN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CJ_Bm4o3.js";import"./index-miMFKzwY.js";import"./index-MVgG_W0q.js";import"./index-B0i75ydy.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DZsvZcJW.js";import"./memoTheme-DZ9vOlqG.js";import"./styled-Cqgr8yLU.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CsJ_Ttuz.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BSDmqwdX.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-vyzsrS7k.js";import"./SelectFocusSourceContext-Des1O4JU.js";import"./useSlot-lfX05XTl.js";import"./mergeSlotProps-BkPIbwBi.js";import"./useForkRef-mY6jA1_e.js";import"./useSlotProps-CyQLJvs1.js";import"./Popover-Bq3gAnqf.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-B-Fuv61-.js";import"./useTheme-WpQOCtdc.js";import"./utils-BrOTTAGC.js";import"./TransitionGroupContext-D50vcWaO.js";import"./useTimeout-IWs7fXER.js";import"./getReactElementRef-CzYjVf0K.js";import"./mergeSlotProps-BKdWdZnu.js";import"./debounce-Be36O1Ab.js";import"./Modal-Vlv0KwQ6.js";import"./useEventCallback-BmDadX9V.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DbHQkIp9.js";import"./Fade-BHmjLU7V.js";import"./Paper-DUYPN4Ep.js";import"./List-BcqSLVqi.js";import"./utils-DoM3o7-Q.js";import"./useControlled-C5e-G2Uo.js";import"./createSvgIcon-Dc4WGqJQ.js";import"./OutlinedInput-EMbPCbiK.js";import"./FormHelperText-HnS8eQWb.js";import"./FormControlLabel-CvDpl5RW.js";import"./Typography-heIaV1nZ.js";import"./Switch-BITMdJ8m.js";import"./SwitchBase-C3jOb5-J.js";import"./ButtonBase-YfnvzWnB.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CO_Uo7ot.js";import"./RadioGroup-CBZao7AR.js";import"./FormGroup-lR-44Vgx.js";import"./Stack-D9VD4k0X.js";import"./styled-Cn_UBHgZ.js";import"./Box-DobRJWDd.js";import"./Divider-DIUIqII7.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CzM-Hrgj.js";import"./FormControl-WAkVHsJd.js";import"./isMuiElement-Do9YpkA9.js";import"./Grid-52szHxD-.js";import"./IconButton-DUEQnTYy.js";import"./CircularProgress-DRusqeVx.js";import"./Tooltip-By5WBZwq.js";import"./Button-DYbxeNEo.js";import"./Container-Bhb68_To.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
