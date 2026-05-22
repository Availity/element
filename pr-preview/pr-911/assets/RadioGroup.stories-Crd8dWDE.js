import{j as o}from"./iframe-D2jXllzf.js";import{C as p}from"./RadioGroup-DMpN6zMa.js";import{B as m}from"./index-toBpsxUE.js";import{P as l}from"./index-Bcc6l1YC.js";import{T as n}from"./index-B-LjnUTn.js";import{c as e,d as i}from"./index-C0wMGhls.js";import{G as d}from"./index-_ebpbhE4.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-BINi25PS.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-B1s-S060.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-C4VpCIrq.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-CtLsGuPJ.js";import"./styled-DdNVu9ib.js";import"./Tooltip-GSnbTknq.js";import"./useTheme-C2p3ig_2.js";import"./memoTheme-Zt5oAqwv.js";import"./useSlot-CazCKcce.js";import"./mergeSlotProps-CJpLwHYZ.js";import"./useForkRef-BlUwhnRH.js";import"./useTimeout-CPz5sd6r.js";import"./useControlled-DpI9NEaZ.js";import"./useEventCallback-B89JyN3q.js";import"./getReactElementRef-DHdu6blE.js";import"./Portal-DNbvJLzK.js";import"./utils-B6mCZ_7g.js";import"./TransitionGroupContext-BzeXUGnN.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-FypE9v1G.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Dd5dInOR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DMYh_tyc.js";import"./CircularProgress-BG5QNhqD.js";import"./Button-CwKYXhwT.js";import"./Paper-DezgSOvY.js";import"./Typography-B2ZUFsL1.js";import"./index-BiBDMnSv.js";import"./index-SmivVlA3.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-9pPXd2AZ.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-4fh9O_yA.js";import"./formControlState-Dq1zat_P.js";import"./Select-J4E2T8gJ.js";import"./Menu-3Df3H2zp.js";import"./Popover-d3WYO_gM.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-B6ai5Rqv.js";import"./debounce-Be36O1Ab.js";import"./Modal-epJMSIoD.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CqC92YWR.js";import"./Fade-CjW2EPns.js";import"./List-WMhnwrif.js";import"./createSvgIcon-BpTXI-oS.js";import"./OutlinedInput-8NKqoys9.js";import"./FormHelperText-x3FNzzv5.js";import"./FormControlLabel-CI5bXKO9.js";import"./Switch-DcLsdLv8.js";import"./SwitchBase-DFUx5LAR.js";import"./Radio-DtF9_Ty_.js";import"./RadioGroup-CIQq2756.js";import"./FormGroup-kt5TsLUL.js";import"./Box-BbqhAezV.js";import"./Divider-ztTjX0xU.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-C7w4lddQ.js";import"./styled-CrGM8GXy.js";import"./Grid-DcON0D60.js";import"./Container-DTQuoaq9.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: ControlledRadioGroupProps) => {
    const methods = useForm();
    return <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data => data)}>
          <ControlledRadioGroup {...args}>
            <FormControlLabel control={<Radio />} label="N/A" value="N/A" />
            <FormControlLabel control={<Radio />} label="Yes" value="Yes" />
            <FormControlLabel control={<Radio />} label="No" value="No" />
          </ControlledRadioGroup>
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
    name: 'controlledRadioGroup',
    label: 'Radio Group'
  }
}`,...t.parameters?.docs?.source}}};const Eo=["_ControlledRadioGroup"];export{t as _ControlledRadioGroup,Eo as __namedExportsOrder,zo as default};
