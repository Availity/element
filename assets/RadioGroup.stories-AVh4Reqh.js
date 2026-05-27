import{j as o}from"./iframe-C99277Jn.js";import{C as p}from"./RadioGroup-CYnGgMxv.js";import{B as m}from"./index-BLVZqh54.js";import{P as l}from"./index-BO7sJviq.js";import{T as n}from"./index-FIATZ7h1.js";import{c as e,d as i}from"./index-DtA39DZL.js";import{G as d}from"./index-y3fpgOs1.js";import{R as u,a as c}from"./Types-KT_38BI3.js";import{u as b,F as f}from"./index.esm-BQNwubZA.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-CFCq4OSP.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-nv_qHD3t.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-nAYICNXy.js";import"./styled-BSyyF-nm.js";import"./Tooltip-1HJoGAor.js";import"./useTheme-rB5ljihk.js";import"./memoTheme-BcCvxPZB.js";import"./useSlot-C5dpIhsV.js";import"./mergeSlotProps-BBhrXk0t.js";import"./useForkRef-Co0kt0JD.js";import"./useTimeout-Dw4BvZaa.js";import"./useControlled-DV2QdfFp.js";import"./useEventCallback-BvtgHlfy.js";import"./getReactElementRef-Bs67iJIN.js";import"./Portal-rCUOv2ZO.js";import"./utils-DQTgiKe9.js";import"./TransitionGroupContext-ByqVrO43.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CQi1oJfT.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-GExIkIsQ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B6dKL5Sm.js";import"./CircularProgress-DWs2PQSt.js";import"./Button-D7NhHobB.js";import"./Paper-YQNMXe3n.js";import"./Typography-ZltxThzN.js";import"./index-BiBDMnSv.js";import"./index-DBNEVM-X.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-BaWfF9je.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-4tLKTmpv.js";import"./formControlState-Dq1zat_P.js";import"./Select-BZkjZ3ZH.js";import"./Menu-BTFniDZi.js";import"./Popover-C720EYK_.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-BBfmIDSu.js";import"./debounce-Be36O1Ab.js";import"./Modal-BSnsGlt8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CPg3TVnd.js";import"./Fade-DTvpgJPw.js";import"./List-DBdeSu6E.js";import"./createSvgIcon-Cab5rVDr.js";import"./OutlinedInput-BJeJtbfu.js";import"./FormHelperText-BLAKn_Zn.js";import"./FormControlLabel-5DOJ260I.js";import"./Switch-B-MFS8IL.js";import"./SwitchBase-DtVc0w0b.js";import"./Radio-DMRBAorq.js";import"./RadioGroup-pJk0tL1L.js";import"./FormGroup-B_29syzn.js";import"./Box-XJPq1vP8.js";import"./Divider-D76QGJ0C.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-DydGXCUI.js";import"./styled-CKZ50tVK.js";import"./Grid-iRC4uFdh.js";import"./Container-CFzAHwrR.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
