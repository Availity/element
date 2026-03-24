import{j as t}from"./iframe-BXw3gXzi.js";import{C as e}from"./Autocomplete-CaHxBoaF.js";import{B as i}from"./index-DejzIRML.js";import{P as s}from"./index-CLVk1EvH.js";import{T as a}from"./index-DgW2N-xw.js";import{G as l}from"./index-tCOiXdlf.js";import{b as n,a as d}from"./Types-DLUIPKsS.js";import{u,F as c}from"./index.esm-BoSfQ9kM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-UCVhQwZ1.js";import"./index-BnRExMZC.js";import"./index-CW8Uf0e3.js";import"./index-BiBDMnSv.js";import"./index-DQ-Pw2vZ.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-WyGfIbWv.js";import"./memoTheme-Cun1OYGu.js";import"./styled-B4C1j5cm.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-BdgZp3W_.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-v5C4S-YL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select--_x2H-6c.js";import"./Menu-CW4zJ6VU.js";import"./useSlot-ChptDOQ0.js";import"./mergeSlotProps-CH0acCqg.js";import"./useForkRef-C2Z_35PR.js";import"./useSlotProps-yzZ17Wp2.js";import"./Popover-Bzr2tLUQ.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-7KnvOddD.js";import"./useTheme-BMbLtIQ2.js";import"./utils-xtkVmQdP.js";import"./TransitionGroupContext-M8heGJda.js";import"./useTimeout-0uXpumKy.js";import"./getReactElementRef-DHOcIADn.js";import"./mergeSlotProps-BLBn1dIn.js";import"./debounce-Be36O1Ab.js";import"./Modal-C_gnWSEE.js";import"./useEventCallback-3YhfTi0L.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-D7s4TJBu.js";import"./Fade-D_YaJ4fg.js";import"./Paper-DAJ4kOlQ.js";import"./List-Cs9MPw4u.js";import"./utils-DoM3o7-Q.js";import"./useControlled-B4VTwyPs.js";import"./createSvgIcon--3tSNQ0H.js";import"./OutlinedInput-BHzGOAt2.js";import"./FormHelperText-DL7htFBa.js";import"./FormControlLabel-Ckl0iH_4.js";import"./Typography-BaC1f153.js";import"./Switch-BD3lQCjm.js";import"./SwitchBase-DGpDYu1p.js";import"./ButtonBase-BTnZicAm.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BmXj6-yU.js";import"./RadioGroup-CrpTZ2V1.js";import"./FormGroup-v_02e0Td.js";import"./Box-BM1JqmYM.js";import"./Divider-D_KSA0HU.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-BuTN3X4b.js";import"./styled-C8dNPj49.js";import"./TextField-BBMe6aQj.js";import"./FormControl-BqJPZOpA.js";import"./isMuiElement-HwGtkGEy.js";import"./Grid-BGtXNav_.js";import"./index-D-R_J93y.js";import"./index-ujimlIq_.js";import"./___vite-browser-external_commonjs-proxy-FWM20rQt.js";import"./index-CziuDJRf.js";import"./_toKey-WKv7aBz5.js";import"./Autocomplete-CJJJ1pjI.js";import"./Close-CAtJECmA.js";import"./usePreviousProps-B2_N8krC.js";import"./Tooltip-ByULunc2.js";import"./Chip-CQwiGa5s.js";import"./IconButton-DeurSYdO.js";import"./CircularProgress-DhFZnFeX.js";import"./ListSubheader-Dme4ycWs.js";import"./useInfiniteQuery-BqXZ5Ejh.js";import"./useBaseQuery-D0c6b1VP.js";import"./suspense-DiktpFJ7.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-BgBpxWh8.js";import"./Container-BCT1HrQN.js";const $t={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const to=["_ControlledAutoComplete"];export{r as _ControlledAutoComplete,to as __namedExportsOrder,$t as default};
