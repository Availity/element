import{j as e}from"./iframe-BAio8bRO.js";import{C as a}from"./TextField-5Q667oNM.js";import{B as s}from"./index-Cu3Q3wdb.js";import{P as l}from"./index-D6g6WvHI.js";import{T as d}from"./index-CvE6eDwb.js";import{G as n}from"./index-q0NfFQ9-.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-CDIrdiAF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CXnObOtK.js";import"./index-yxUFkiba.js";import"./index-BiBDMnSv.js";import"./index-D6CmWoDY.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-tye3QKHe.js";import"./memoTheme-B5Zw--p6.js";import"./styled-BVlyzXC0.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DzJu46U9.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DkRYiQSC.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CgPW8wBS.js";import"./Menu-CNZsUiwy.js";import"./useSlot-BVjxSlY9.js";import"./mergeSlotProps-CmGkLNGM.js";import"./useForkRef-DNDPTA8R.js";import"./useSlotProps-CFXUmX-_.js";import"./Popover-DwmwO2CA.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-DtZMvnVy.js";import"./useTheme-BlST_Otk.js";import"./utils-LXi-Tlok.js";import"./TransitionGroupContext-DZhFA06X.js";import"./useTimeout-BkgJttAJ.js";import"./getReactElementRef-C8WT4AXt.js";import"./mergeSlotProps-CA_Fws6O.js";import"./debounce-Be36O1Ab.js";import"./Modal-Cb932oqz.js";import"./useEventCallback-9-WTFaLk.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DUEOgCON.js";import"./Fade-D__YuxCd.js";import"./Paper-DW5lDWun.js";import"./List-BfAeB2nv.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BkSKTHhF.js";import"./createSvgIcon-BHdN4xjz.js";import"./OutlinedInput-BRrwvmjS.js";import"./FormHelperText-DXCvGRLv.js";import"./FormControlLabel-BTqQRKxw.js";import"./Typography-BPUxSRI8.js";import"./Switch-b6dmdWoZ.js";import"./SwitchBase-C_i35j5v.js";import"./ButtonBase-Ae9hTywr.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-99FOiw6S.js";import"./RadioGroup-BcF4x91b.js";import"./FormGroup-DD4jPXUp.js";import"./Box-D9uuWVv-.js";import"./Divider-CSqQtEDI.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-bN5r8_lU.js";import"./styled-EJoH7QSk.js";import"./TextField-BC2Rk5jj.js";import"./FormControl-Bk8NkQjv.js";import"./isMuiElement-AydbSc-U.js";import"./Grid-t7gGqywk.js";import"./Tooltip-hIKEgUI5.js";import"./IconButton-Cgj-zrzq.js";import"./CircularProgress-DwO4_zrq.js";import"./Button-CfkShIuN.js";import"./Container-CV_lDoo_.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
