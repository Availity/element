import{j as o}from"./iframe-hulqVKFa.js";import{C as p}from"./RadioGroup-BDnZitF6.js";import{B as m}from"./index-CWJdyCdu.js";import{P as l}from"./index-CWsRpgkr.js";import{T as n}from"./index-PP9CmKdi.js";import{c as e,d as i}from"./index-CwQEE9jE.js";import{G as d}from"./index-BlNR_NWf.js";import{R as u,a as c}from"./Types-DLUIPKsS.js";import{u as b,F as f}from"./index.esm-ByqGPp5Y.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-BTDFP5sq.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CY5egsXZ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-B2zjcqD7.js";import"./styled-CYnX6RAa.js";import"./Tooltip-CwFATdR1.js";import"./useTheme-C7AUirRA.js";import"./memoTheme-B_nCzl8M.js";import"./useSlot-CalbLJ3n.js";import"./mergeSlotProps-C6UhvrC4.js";import"./useForkRef-BQz3TnTQ.js";import"./useTimeout-Bim6OzXz.js";import"./useControlled-maN10Goq.js";import"./useEventCallback-IcKGM0BT.js";import"./getReactElementRef-DCfmlyG2.js";import"./Portal-BqpYj0TQ.js";import"./utils-CqZ-bN0c.js";import"./TransitionGroupContext-DQUbB_yy.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CO5Qh0k_.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D52dKoJw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-2bDflI9o.js";import"./CircularProgress-p22Pqfnj.js";import"./Button-BD9YMHcT.js";import"./Paper-BVOs07DX.js";import"./Typography-COHcSKH7.js";import"./index-BiBDMnSv.js";import"./index-CFZ7DghX.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-i9gddw4o.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Buq9vnb5.js";import"./formControlState-Dq1zat_P.js";import"./Select-CSBq7uz_.js";import"./Menu-BASAkWZI.js";import"./Popover-BiUSFDdq.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-BYXPuP8C.js";import"./debounce-Be36O1Ab.js";import"./Modal-BIuYGRLg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-l3mPJCzo.js";import"./Fade-T6bIu7ga.js";import"./List-CHNmHfLH.js";import"./createSvgIcon-MyKUcFFT.js";import"./OutlinedInput-8C-NOWfH.js";import"./FormHelperText-CJHErJH9.js";import"./FormControlLabel-Dnvw7QmX.js";import"./Switch-D6kkTZOZ.js";import"./SwitchBase-BXxnTvJc.js";import"./Radio-BCOKkKaa.js";import"./RadioGroup-DCnXM_Hp.js";import"./FormGroup-BDEQiySx.js";import"./Box-CyvodRNS.js";import"./Divider-DjTc7Vl7.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-B2rPYqjB.js";import"./styled-QvSbzdTE.js";import"./Grid-CPl8rXDT.js";import"./Container-CNnb763M.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
