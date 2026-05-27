import{j as e}from"./iframe-C99277Jn.js";import{C as a}from"./TextField-24xkh40l.js";import{B as s}from"./index-BLVZqh54.js";import{P as l}from"./index-BO7sJviq.js";import{T as d}from"./index-FIATZ7h1.js";import{G as n}from"./index-y3fpgOs1.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-BQNwubZA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BXoAtbqZ.js";import"./index-DtA39DZL.js";import"./index-BiBDMnSv.js";import"./index-DBNEVM-X.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BaWfF9je.js";import"./memoTheme-BcCvxPZB.js";import"./styled-BSyyF-nm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-4tLKTmpv.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-nv_qHD3t.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-BZkjZ3ZH.js";import"./Menu-BTFniDZi.js";import"./useSlot-C5dpIhsV.js";import"./mergeSlotProps-BBhrXk0t.js";import"./useForkRef-Co0kt0JD.js";import"./useSlotProps-CQi1oJfT.js";import"./Popover-C720EYK_.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-rCUOv2ZO.js";import"./useTheme-rB5ljihk.js";import"./utils-DQTgiKe9.js";import"./TransitionGroupContext-ByqVrO43.js";import"./useTimeout-Dw4BvZaa.js";import"./getReactElementRef-Bs67iJIN.js";import"./mergeSlotProps-BBfmIDSu.js";import"./debounce-Be36O1Ab.js";import"./Modal-BSnsGlt8.js";import"./useEventCallback-BvtgHlfy.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CPg3TVnd.js";import"./Fade-DTvpgJPw.js";import"./Paper-YQNMXe3n.js";import"./List-DBdeSu6E.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DV2QdfFp.js";import"./createSvgIcon-Cab5rVDr.js";import"./OutlinedInput-BJeJtbfu.js";import"./FormHelperText-BLAKn_Zn.js";import"./FormControlLabel-5DOJ260I.js";import"./Typography-ZltxThzN.js";import"./Switch-B-MFS8IL.js";import"./SwitchBase-DtVc0w0b.js";import"./ButtonBase-B6dKL5Sm.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-DMRBAorq.js";import"./RadioGroup-pJk0tL1L.js";import"./FormGroup-B_29syzn.js";import"./Box-XJPq1vP8.js";import"./Divider-D76QGJ0C.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-DydGXCUI.js";import"./styled-CKZ50tVK.js";import"./TextField-B8-wNipc.js";import"./FormControl-CFCq4OSP.js";import"./isMuiElement-nAYICNXy.js";import"./Grid-iRC4uFdh.js";import"./Tooltip-1HJoGAor.js";import"./IconButton-GExIkIsQ.js";import"./CircularProgress-DWs2PQSt.js";import"./Button-D7NhHobB.js";import"./Container-CFzAHwrR.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
