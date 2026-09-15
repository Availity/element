import{j as o}from"./iframe-BOySubGY.js";import{C as p}from"./RadioGroup-Cjok75YT.js";import{B as m}from"./index-dHFlkqLk.js";import{P as l}from"./index-BBVQJ4RI.js";import{T as n}from"./index-DN9BmYUP.js";import{c as e,d as i}from"./index-EOKAY7fx.js";import{G as d}from"./index-BY15XDHL.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-D-Sy6qiw.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-B6yPYiE0.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-D_4giGBh.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-BscQb9Cz.js";import"./styled-XjKTZ5Ba.js";import"./IconButton-D23BvDdt.js";import"./memoTheme-C-oySTID.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CriPZSS7.js";import"./useTimeout-D7rfSJNw.js";import"./TransitionGroupContext-DX1Xmw-6.js";import"./useForkRef-BEcBTcWu.js";import"./useEventCallback-De91DTs8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B5gdOPr_.js";import"./Tooltip-CVYQnSxv.js";import"./useTheme-BZyZpBhU.js";import"./useSlot-BgdUY7vI.js";import"./mergeSlotProps-A5qFZlFu.js";import"./useControlled-ZCAGuxBe.js";import"./getReactElementRef-ekrhOioo.js";import"./Portal-Bk70ZbQ1.js";import"./utils-MRT_IXkN.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CORZ0NF7.js";import"./Button-DWb-ONsW.js";import"./Paper-DK-wycZj.js";import"./Typography-SY2Ud8Z5.js";import"./index-CrcoPoGw.js";import"./index-Axa3knvz.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-DZLHpFL-.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Crev6sHt.js";import"./formControlState-Dq1zat_P.js";import"./Select-DNKWmaXz.js";import"./SelectFocusSourceContext-NsTTN5Ry.js";import"./Popover-DvcJ8O_V.js";import"./getActiveElement-CvEHRBc8.js";import"./mergeSlotProps-CosNNS-j.js";import"./debounce-Be36O1Ab.js";import"./Modal-JO3U43CI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-wymMCVv9.js";import"./Fade-MtnpW3KP.js";import"./List-DWj6PFWF.js";import"./createSvgIcon-CNdKwBrG.js";import"./OutlinedInput-BwuDTIYn.js";import"./FormHelperText-Br3yPV4I.js";import"./FormControlLabel-BN3VyYGk.js";import"./Switch-B1ncU5jj.js";import"./SwitchBase-DttprOgY.js";import"./Radio-D60xP-8b.js";import"./RadioGroup-HDv0R8RF.js";import"./FormGroup-CtfESWxW.js";import"./Stack-CvrbJzig.js";import"./styled-B4Xqzm8j.js";import"./Box-C0cMPqSK.js";import"./Divider-BLCYt0Sf.js";import"./dividerClasses-qU9lkgJy.js";import"./Grid-CxzBT5ej.js";import"./Container-C4UOiudT.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
