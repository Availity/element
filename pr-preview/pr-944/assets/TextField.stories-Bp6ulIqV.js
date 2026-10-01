import{j as e}from"./iframe-DPgvn2UU.js";import{C as a}from"./TextField-BspwccpZ.js";import{B as s}from"./index-CeFSOpBV.js";import{P as l}from"./index-DuQ2GrkL.js";import{T as d}from"./index-Bj2mBLrK.js";import{G as n}from"./index-DiNwh75D.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-DqVS46Sk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CdjxUwFe.js";import"./index-DO8HKLfP.js";import"./index-MVgG_W0q.js";import"./index-DkMl2Zw_.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-Bq0V0STh.js";import"./memoTheme-BYph2ZTv.js";import"./styled-Bnkr7D-c.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DYfqByqT.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-cN7RU9gv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-C71NVgIY.js";import"./SelectFocusSourceContext-TejMP2UB.js";import"./useSlot-DpB6mlqQ.js";import"./mergeSlotProps-DRvPt2A_.js";import"./useForkRef-B_9E6GXl.js";import"./useSlotProps-BkILu-KG.js";import"./Popover-XaGZ9P8a.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-DRuBdp-z.js";import"./useTheme-B7kQ5Jap.js";import"./utils-CA9pXuzB.js";import"./TransitionGroupContext-CFlHgrGu.js";import"./useTimeout-b550rnFU.js";import"./getReactElementRef-vJH3QVIN.js";import"./mergeSlotProps-SFKmFrry.js";import"./debounce-Be36O1Ab.js";import"./Modal-DJSJonwV.js";import"./useEventCallback-DBIic8Ex.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-DG1hflfc.js";import"./Fade-pXi3dxmW.js";import"./Paper-Bg7uCtkj.js";import"./List-BJ31Te5w.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BRfcL8pA.js";import"./createSvgIcon-CVdeguJ_.js";import"./OutlinedInput-BT6k7tdI.js";import"./FormHelperText-DCcVia06.js";import"./FormControlLabel-DpEDB8IM.js";import"./Typography-CPTozpuv.js";import"./Switch-CslP4g6_.js";import"./SwitchBase-TQhLjsOV.js";import"./ButtonBase-C05RGSI7.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-DrWY9wGb.js";import"./RadioGroup-C6Vtjkty.js";import"./FormGroup-DdQAx87u.js";import"./Stack-Br7WCR6b.js";import"./styled-CiHxTfSE.js";import"./Box-BlDR6l9l.js";import"./Divider-DOUeryDl.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CDQDEHmI.js";import"./FormControl-B-CCEBd1.js";import"./isMuiElement-CIfsBfEF.js";import"./Grid-DrKODsgE.js";import"./IconButton-B7NJWIp-.js";import"./CircularProgress-C6YfH4n8.js";import"./Tooltip-YOgdBn5B.js";import"./Button-BYYLdAXe.js";import"./Container-CIN8FyKG.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
