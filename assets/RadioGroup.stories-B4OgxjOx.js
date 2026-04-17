import{j as o}from"./iframe-D_FBGCyt.js";import{C as p}from"./RadioGroup-DJym-HAp.js";import{B as m}from"./index-DfmN7Pdp.js";import{P as l}from"./index-DVlriJs3.js";import{T as n}from"./index-BFUMh9R9.js";import{c as e,d as i}from"./index-CHeBUqtj.js";import{G as d}from"./index-BBo7dAKW.js";import{R as u,a as c}from"./Types-DLUIPKsS.js";import{u as b,F as f}from"./index.esm-DJF8fB7j.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-am7KBdv4.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-D0mczUgB.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-DWlz3pJm.js";import"./styled-xf6f_HVu.js";import"./Tooltip-Cz548eDU.js";import"./useTheme-C9l_6OF0.js";import"./memoTheme-BLxVLpBG.js";import"./useSlot-BtMprAQd.js";import"./mergeSlotProps-gV_s4djX.js";import"./useForkRef-CnVOscb6.js";import"./useTimeout-SlAgGEcH.js";import"./useControlled-CdfLcSkL.js";import"./useEventCallback-jDv7Sv7e.js";import"./getReactElementRef-CwqBwRrr.js";import"./Portal-DcK87Y2W.js";import"./utils-DnGyS3wP.js";import"./TransitionGroupContext-D8t5YM-9.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C2D_NZSZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-eUYvyQUt.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D61WXHG0.js";import"./CircularProgress-BjsVuxPp.js";import"./Button-CuoV_D53.js";import"./Paper-BakwuC79.js";import"./Typography-2LRTBqXt.js";import"./index-BiBDMnSv.js";import"./index-C15pSvNp.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-5AfvjDJL.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CcBITnwG.js";import"./formControlState-Dq1zat_P.js";import"./Select-rTOCbTjW.js";import"./Menu-D87dknpl.js";import"./Popover-DSajnCnR.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-Vx5Db-vC.js";import"./debounce-Be36O1Ab.js";import"./Modal-C7olDkj8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-y5ajGIML.js";import"./Fade-BVS2OpEz.js";import"./List-BXCcSLWL.js";import"./createSvgIcon-CrDNgKEm.js";import"./OutlinedInput-BIVPjmnf.js";import"./FormHelperText-D-uyeHOV.js";import"./FormControlLabel-R0V4f3aH.js";import"./Switch-CePFD_S0.js";import"./SwitchBase-DTTSsIt3.js";import"./Radio-D_ui9MP1.js";import"./RadioGroup-DFPZLkM7.js";import"./FormGroup-Cz3AxvE4.js";import"./Box-CvB3zA9H.js";import"./Divider-PHdlqile.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-CDN4SC59.js";import"./styled-D_5SdMbV.js";import"./Grid-DRIeD9kY.js";import"./Container-CHNU3dwn.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
