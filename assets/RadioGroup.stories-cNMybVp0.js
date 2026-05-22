import{j as o}from"./iframe-CEMXsp8C.js";import{C as p}from"./RadioGroup-BZYEfMNb.js";import{B as m}from"./index-CwlIgXTJ.js";import{P as l}from"./index-D4f0k3bZ.js";import{T as n}from"./index-NjRHlmkG.js";import{c as e,d as i}from"./index-6HvsEIgM.js";import{G as d}from"./index-DIoqnUOe.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-D7qra9hH.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-CUQ3qwGV.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-rkOnYHMv.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-D0FqNR9x.js";import"./styled-qsRty7dq.js";import"./Tooltip-DE_9rsm0.js";import"./useTheme-DmimCZ1K.js";import"./memoTheme-l-GP-bwx.js";import"./useSlot-CsbKhATt.js";import"./mergeSlotProps-CZJ2E7Ux.js";import"./useForkRef-DoG2Adio.js";import"./useTimeout-Dr5vw9MW.js";import"./useControlled-BuTFob83.js";import"./useEventCallback-DFupxdy5.js";import"./getReactElementRef-7aOdyAnj.js";import"./Portal-Cd1GL2Ny.js";import"./utils-uO-Y6Lu-.js";import"./TransitionGroupContext-CFI9AaDj.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Uj4Ej5E1.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CI45TlqX.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DV3wZvw5.js";import"./CircularProgress-C6UU3hYL.js";import"./Button-BggChkC7.js";import"./Paper-CpiR7IfR.js";import"./Typography-aAxGDRe7.js";import"./index-BiBDMnSv.js";import"./index-D94lOHFj.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-nYHR5krO.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-B5UQsNVX.js";import"./formControlState-Dq1zat_P.js";import"./Select-CW96VAM3.js";import"./Menu-of2ejCIv.js";import"./Popover-uAtnNwBt.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-DUVsb-pA.js";import"./debounce-Be36O1Ab.js";import"./Modal-C_PIWu30.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-De3axDf6.js";import"./Fade-DiSnUXPW.js";import"./List-C7cGWOto.js";import"./createSvgIcon-f84r-UoO.js";import"./OutlinedInput-DkQzF-Yr.js";import"./FormHelperText-DqMuL7fY.js";import"./FormControlLabel-CKApGRUl.js";import"./Switch-CgP-2Cp1.js";import"./SwitchBase-qMOE7SWj.js";import"./Radio-IVXlydwe.js";import"./RadioGroup-dD3cetTc.js";import"./FormGroup-LMrVoSKP.js";import"./Box-BEsP6iEE.js";import"./Divider-DTiwsONw.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-Ct51BpAL.js";import"./styled-Dz3b5a5M.js";import"./Grid-DNEcM-zX.js";import"./Container-DBKsfXDc.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
