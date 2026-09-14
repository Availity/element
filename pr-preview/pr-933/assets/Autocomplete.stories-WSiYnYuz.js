import{j as t}from"./iframe-DPnTQG0G.js";import{C as e}from"./Autocomplete-BULWzzdS.js";import{B as i}from"./index-B7O5cvxg.js";import{P as s}from"./index-CKyLzbz1.js";import{T as a}from"./index-DvMAIlq4.js";import{G as l}from"./index-CsNDMedn.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-0NUWpuMD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWFGQN-J.js";import"./index-DuOb_E4r.js";import"./index-Q8djF-9e.js";import"./index-CrcoPoGw.js";import"./index-DyrAPJez.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./SvgIcon-BFzjjt5D.js";import"./memoTheme-CMfgY8Ge.js";import"./styled-B3r2fqeJ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-T7G46Ktc.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CD258ohF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-Bt2NJ17i.js";import"./SelectFocusSourceContext-CLuNS6BP.js";import"./useSlot-CA9InCnB.js";import"./mergeSlotProps-BoQagQxu.js";import"./useForkRef-B-MdRiiy.js";import"./useSlotProps-BTR8zjwb.js";import"./Popover-BYyO-8oX.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-CvEHRBc8.js";import"./Portal-DFXYbKgm.js";import"./useTheme-DIidgVEY.js";import"./utils-BzkU8P15.js";import"./TransitionGroupContext-BMEataXp.js";import"./useTimeout-CUwsoYp8.js";import"./getReactElementRef-Bl_fL_Lc.js";import"./mergeSlotProps-AmPjT2RW.js";import"./debounce-Be36O1Ab.js";import"./Modal-CcK1uO_P.js";import"./useEventCallback-jzoMkJU2.js";import"./createChainedFunction-BO_9K8Jh.js";import"./contains-DSD8CO72.js";import"./Backdrop-ByDG0JKY.js";import"./Fade-Bvo7Nuzl.js";import"./Paper-CfCnRjNa.js";import"./List-Dof0ngef.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DDdRMWyJ.js";import"./createSvgIcon-o5Z7wc8L.js";import"./OutlinedInput-C590kWAS.js";import"./FormHelperText-BuntHaUt.js";import"./FormControlLabel-M3VpV2dL.js";import"./Typography-BE3nbQ7X.js";import"./Switch-CESQP3ju.js";import"./SwitchBase-CsMfMGxT.js";import"./ButtonBase-C2F6Y1bD.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-CPnlDQ7O.js";import"./RadioGroup-CakEV_i2.js";import"./FormGroup-tGhy1mwH.js";import"./Stack-CUFjbj2M.js";import"./styled-DTgt2DI8.js";import"./Box-BwT9D1D3.js";import"./Divider-BJPFleRo.js";import"./dividerClasses-qU9lkgJy.js";import"./TextField-CTunm3jM.js";import"./FormControl-C7sHhzIq.js";import"./isMuiElement-BqwjpEeh.js";import"./Grid-C4qiCYbq.js";import"./useInfiniteQuery-CY6lWNgh.js";import"./suspense-Bx1DnDYl.js";import"./useBaseQuery-9HjyhPhf.js";import"./index-DREgSyd0.js";import"./index-lHfpG96z.js";import"./___vite-browser-external_commonjs-proxy-tOSw4hYJ.js";import"./index-ouDB7UmS.js";import"./Autocomplete-CqD_RXC9.js";import"./Close-Bho1xGhu.js";import"./usePreviousProps-CGnEah-x.js";import"./Tooltip-oUWx7pT_.js";import"./Chip-cQNEburp.js";import"./IconButton-DddGcaV5.js";import"./CircularProgress-BvBmh-xb.js";import"./ListSubheader-BhpaYhZ6.js";import"./Button-D8f966mF.js";import"./Container-Dg-G3qaT.js";const Yt={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const methods = useForm();
    return <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data => data)}>
          <ControlledAutocomplete {...args} />
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
    name: 'controlledAutocomplete',
    options: ['Option 1', 'Option 2'],
    rules: {
      required: 'This is required.'
    },
    FieldProps: {
      label: 'Autocomplete Label'
    }
  }
}`,...r.parameters?.docs?.source}}};const Zt=["_ControlledAutoComplete"];export{r as _ControlledAutoComplete,Zt as __namedExportsOrder,Yt as default};
