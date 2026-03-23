import{j as o}from"./iframe-DvcXWkGI.js";import{C as p}from"./RadioGroup-DylAA8ha.js";import{B as m}from"./index-O15mV2IG.js";import{P as l}from"./index-CooZlyF2.js";import{T as n}from"./index-C1KFV9tz.js";import{c as e,d as i}from"./index-8WqHyHCn.js";import{G as d}from"./index-lKF-mYBi.js";import{R as u,a as c}from"./Types-DLUIPKsS.js";import{u as b,F as f}from"./index.esm-DK5g2aHU.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-Bl3frfty.js";import"./utils-DoM3o7-Q.js";import"./useFormControl-CnGwjuyh.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./isMuiElement-BM04y7u2.js";import"./styled-DjkE2l0O.js";import"./Tooltip-CA4xVq51.js";import"./useTheme-BDjWybQB.js";import"./memoTheme-C00_9AbM.js";import"./useSlot-DrWGT-0c.js";import"./mergeSlotProps-C-IYj7GK.js";import"./useForkRef-DXhMi9Fu.js";import"./useTimeout-BLAqdi1l.js";import"./useControlled-CWsku3Ua.js";import"./useEventCallback-jEehnAW2.js";import"./getReactElementRef-CyXa0GT6.js";import"./Portal-BJf12Rly.js";import"./utils-CXX3yobC.js";import"./TransitionGroupContext-DxPJb2_E.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BYEe1XOi.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C6_QWXQy.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CI7etmmo.js";import"./CircularProgress-CsILiYUE.js";import"./Button-EYXZSfHT.js";import"./Paper-BWWtmnI-.js";import"./Typography-CbbFdRSD.js";import"./index-BiBDMnSv.js";import"./index-63S9eLZS.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-Co17_fug.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DrBlRY0b.js";import"./formControlState-Dq1zat_P.js";import"./Select-CpxYMe4e.js";import"./Menu-BvR-3tqL.js";import"./Popover-AZC5xG1m.js";import"./ownerWindow-HkKU3E4x.js";import"./mergeSlotProps-CU9nKqZa.js";import"./debounce-Be36O1Ab.js";import"./Modal-BP1sB3AO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CR8PY8T1.js";import"./Fade-DI9jsdhL.js";import"./List-UiPSZZQ2.js";import"./createSvgIcon-JaHuofy7.js";import"./OutlinedInput-Dcxo-ASf.js";import"./FormHelperText-ejXNJD_u.js";import"./FormControlLabel-CtVOAWlx.js";import"./Switch-dGJM5-u2.js";import"./SwitchBase-BEtkunQj.js";import"./Radio-OyBSFkGt.js";import"./RadioGroup-BwF9pQjX.js";import"./FormGroup-x5VZN7lS.js";import"./Box-D0PWnwSE.js";import"./Divider-DVlfBs2v.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-BWYDbKiS.js";import"./styled-1evKp3Hp.js";import"./Grid-B-VOZSOw.js";import"./Container-Dwn77WAc.js";const zo={title:"Form Components/Controlled Form/ControlledRadioGroup",component:p,tags:["autodocs"],argTypes:{...c,...u,required:{table:{category:"Input Props"}}},parameters:{controls:{exclude:["max","maxLength","min","minLength","pattern","validate"]}}},t={render:a=>{const r=b();return o.jsx(f,{...r,children:o.jsxs("form",{onSubmit:r.handleSubmit(s=>s),children:[o.jsxs(p,{...a,children:[o.jsx(e,{control:o.jsx(i,{}),label:"N/A",value:"N/A"}),o.jsx(e,{control:o.jsx(i,{}),label:"Yes",value:"Yes"}),o.jsx(e,{control:o.jsx(i,{}),label:"No",value:"No"})]}),o.jsxs(d,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[o.jsx(m,{disabled:!r?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>r.reset()}),o.jsx(m,{type:"submit",disabled:r?.formState?.isSubmitSuccessful,children:"Submit"})]}),r?.formState?.isSubmitSuccessful?o.jsxs(l,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[o.jsx(n,{variant:"h2",children:"Submitted Values"}),o.jsx("pre",{"data-testid":"result",children:JSON.stringify(r.getValues(),null,2)})]}):null]})})},args:{name:"controlledRadioGroup",label:"Radio Group"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
