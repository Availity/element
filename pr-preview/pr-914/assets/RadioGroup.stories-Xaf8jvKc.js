import{j as o}from"./iframe-BAio8bRO.js";import{C as p}from"./RadioGroup-3rJQngfc.js";import{B as m}from"./index-Cu3Q3wdb.js";import{P as l}from"./index-D6g6WvHI.js";import{T as n}from"./index-CvE6eDwb.js";import{c as e,d as i}from"./index-yxUFkiba.js";import{G as d}from"./index-q0NfFQ9-.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-CDIrdiAF.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-Bk8NkQjv.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-DkRYiQSC.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-AydbSc-U.js";import"./styled-BVlyzXC0.js";import"./Tooltip-hIKEgUI5.js";import"./useTheme-BlST_Otk.js";import"./memoTheme-B5Zw--p6.js";import"./useSlot-BVjxSlY9.js";import"./mergeSlotProps-CmGkLNGM.js";import"./useForkRef-DNDPTA8R.js";import"./useTimeout-BkgJttAJ.js";import"./useControlled-BkSKTHhF.js";import"./useEventCallback-9-WTFaLk.js";import"./getReactElementRef-C8WT4AXt.js";import"./Portal-DtZMvnVy.js";import"./utils-LXi-Tlok.js";import"./TransitionGroupContext-DZhFA06X.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CFXUmX-_.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cgj-zrzq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Ae9hTywr.js";import"./CircularProgress-DwO4_zrq.js";import"./Button-CfkShIuN.js";import"./Paper-DW5lDWun.js";import"./Typography-BPUxSRI8.js";import"./index-BiBDMnSv.js";import"./index-D6CmWoDY.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-tye3QKHe.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DzJu46U9.js";import"./formControlState-Dq1zat_P.js";import"./Select-CgPW8wBS.js";import"./Menu-CNZsUiwy.js";import"./Popover-DwmwO2CA.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-CA_Fws6O.js";import"./debounce-Be36O1Ab.js";import"./Modal-Cb932oqz.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-DUEOgCON.js";import"./Fade-D__YuxCd.js";import"./List-BfAeB2nv.js";import"./createSvgIcon-BHdN4xjz.js";import"./OutlinedInput-BRrwvmjS.js";import"./FormHelperText-DXCvGRLv.js";import"./FormControlLabel-BTqQRKxw.js";import"./Switch-b6dmdWoZ.js";import"./SwitchBase-C_i35j5v.js";import"./Radio-99FOiw6S.js";import"./RadioGroup-BcF4x91b.js";import"./FormGroup-DD4jPXUp.js";import"./Box-D9uuWVv-.js";import"./Divider-CSqQtEDI.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-bN5r8_lU.js";import"./styled-EJoH7QSk.js";import"./Grid-t7gGqywk.js";import"./Container-CV_lDoo_.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
