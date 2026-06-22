import{j as e}from"./iframe-DHkqGgbi.js";import{C as a}from"./TextField-Dwpe6Tp6.js";import{B as s}from"./Button-BBqhYll5.js";import{P as l}from"./Paper-fpDEzwjb.js";import{T as d}from"./Typography-BunlOy3h.js";import{G as n}from"./Grid-ArAcPf9E.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-RTM9Se0K.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField-C9Pd3VA5.js";import"./FormHelperText-C9w9Jqly.js";import"./Form-CBGs9Zxl.js";import"./FaSvgIcon-BtkjvlUV.js";import"./SvgIcon-D9Y7JiS_.js";import"./memoTheme-vxEZSkJ8.js";import"./styled-BFLY3dn7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./FormHelperText-D0tk9xCV.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-ZgfjO4em.js";import"./FormLabel-B39rbSWe.js";import"./FieldHelpIcon-wvX4SPIQ.js";import"./index-CrcoPoGw.js";import"./IconButton-D5Zzj5BR.js";import"./Tooltip-YeMRA4-y.js";import"./useTheme-DTNKpojL.js";import"./useSlot-CAeYipRU.js";import"./mergeSlotProps-Dp8H4ez1.js";import"./useForkRef-B4h6zx_x.js";import"./useTimeout-Bjfnw5AG.js";import"./useControlled-DlDi1BKb.js";import"./useEventCallback-LtXdtY4h.js";import"./getReactElementRef-BRoKhHqU.js";import"./Grow-CwxupgJl.js";import"./utils-BQBkKAg6.js";import"./TransitionGroupContext-3E4Xv_Lx.js";import"./Popper-BUehIlZq.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CtpwjVP0.js";import"./useSlotProps-CZQ_I0Kw.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DmdwZwcg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BwqJJF5q.js";import"./CircularProgress-D39cxiof.js";import"./FormControl-Fq5qRX5l.js";import"./utils-DoM3o7-Q.js";import"./isMuiElement-Bo_RUhfi.js";import"./Input-BBd18T7c.js";import"./OutlinedInput-BwTPRsy8.js";import"./getActiveElement-CvEHRBc8.js";import"./debounce-Be36O1Ab.js";import"./Select-_ZrxUeya.js";import"./Actions-BhLIra-T.js";import"./Select-Cb_v2ztz.js";import"./SelectFocusSourceContext-21Yu2WtQ.js";import"./Popover-B_wJwpIg.js";import"./mergeSlotProps-BNZZW_n2.js";import"./Modal-BHwxEFT_.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-D3ggRYPY.js";import"./Fade-CqjyPa8q.js";import"./Paper-Cer6O457.js";import"./List-BX9VmHQj.js";import"./createSvgIcon-BS4jmzRl.js";import"./Stack-CO_r3hOW.js";import"./styled-HR_WeqBB.js";import"./Divider-BaW80ssX.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField--yz3vm_c.js";import"./Button-CHAexKoQ.js";import"./Typography-i96SYvKe.js";import"./Grid-BLry6rK7.js";const Re={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ke=["_ControlledTextField","_ControlledTextFieldDisplayOverflow"];export{o as _ControlledTextField,i as _ControlledTextFieldDisplayOverflow,ke as __namedExportsOrder,Re as default};
