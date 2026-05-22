import{j as e}from"./iframe-D2jXllzf.js";import{C as a}from"./TextField-BMOiBH6l.js";import{B as s}from"./index-toBpsxUE.js";import{P as l}from"./index-Bcc6l1YC.js";import{T as d}from"./index-B-LjnUTn.js";import{G as n}from"./index-_ebpbhE4.js";import{T as c,a as h}from"./Types-KT_38BI3.js";import{u as p,F as u}from"./index.esm-BINi25PS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DbM9_IZw.js";import"./index-C0wMGhls.js";import"./index-BiBDMnSv.js";import"./index-SmivVlA3.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-9pPXd2AZ.js";import"./memoTheme-Zt5oAqwv.js";import"./styled-DdNVu9ib.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-4fh9O_yA.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-C4VpCIrq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-J4E2T8gJ.js";import"./Menu-3Df3H2zp.js";import"./useSlot-CazCKcce.js";import"./mergeSlotProps-CJpLwHYZ.js";import"./useForkRef-BlUwhnRH.js";import"./useSlotProps-FypE9v1G.js";import"./Popover-d3WYO_gM.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-DNbvJLzK.js";import"./useTheme-C2p3ig_2.js";import"./utils-B6mCZ_7g.js";import"./TransitionGroupContext-BzeXUGnN.js";import"./useTimeout-CPz5sd6r.js";import"./getReactElementRef-DHdu6blE.js";import"./mergeSlotProps-B6ai5Rqv.js";import"./debounce-Be36O1Ab.js";import"./Modal-epJMSIoD.js";import"./useEventCallback-B89JyN3q.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CqC92YWR.js";import"./Fade-CjW2EPns.js";import"./Paper-DezgSOvY.js";import"./List-WMhnwrif.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DpI9NEaZ.js";import"./createSvgIcon-BpTXI-oS.js";import"./OutlinedInput-8NKqoys9.js";import"./FormHelperText-x3FNzzv5.js";import"./FormControlLabel-CI5bXKO9.js";import"./Typography-B2ZUFsL1.js";import"./Switch-DcLsdLv8.js";import"./SwitchBase-DFUx5LAR.js";import"./ButtonBase-DMYh_tyc.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-DtF9_Ty_.js";import"./RadioGroup-CIQq2756.js";import"./FormGroup-kt5TsLUL.js";import"./Box-BbqhAezV.js";import"./Divider-ztTjX0xU.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-C7w4lddQ.js";import"./styled-CrGM8GXy.js";import"./TextField-DPbYydSm.js";import"./FormControl-B1s-S060.js";import"./isMuiElement-CtLsGuPJ.js";import"./Grid-DcON0D60.js";import"./Tooltip-GSnbTknq.js";import"./IconButton-Dd5dInOR.js";import"./CircularProgress-BG5QNhqD.js";import"./Button-CwKYXhwT.js";import"./Container-DTQuoaq9.js";const ze={title:"Form Components/Controlled Form/ControlledTextField",component:a,tags:["autodocs"],argTypes:{...h,...c,helperText:{type:"string",table:{category:"Input Props"}}}},o={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",showCharacterCount:!0}},i={render:t=>{const r=p({values:{[t.name]:""}});return e.jsx(u,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(m=>m),children:[e.jsx(a,{...t}),e.jsxs(n,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[e.jsx(s,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),e.jsx(s,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?e.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[e.jsx(d,{variant:"h2",children:"Submitted Values"}),e.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledTextField",helperText:"This is some helper text",placeholder:"Name",required:!0,rules:{required:"This field is required.",maxLength:{value:10,message:"Too long"}},label:"TextField Label",displayOverflowMaxLength:!0,showCharacterCount:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
