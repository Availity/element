import{j as t}from"./iframe-CEMXsp8C.js";import{C as e}from"./Autocomplete-CG1Q-xnw.js";import{B as i}from"./index-CwlIgXTJ.js";import{P as s}from"./index-D4f0k3bZ.js";import{T as a}from"./index-NjRHlmkG.js";import{G as l}from"./index-DIoqnUOe.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-D7qra9hH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DDF_CHwz.js";import"./index-DgNpCoBK.js";import"./index-6HvsEIgM.js";import"./index-BiBDMnSv.js";import"./index-D94lOHFj.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-nYHR5krO.js";import"./memoTheme-l-GP-bwx.js";import"./styled-qsRty7dq.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-B5UQsNVX.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-rkOnYHMv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CW96VAM3.js";import"./Menu-of2ejCIv.js";import"./useSlot-CsbKhATt.js";import"./mergeSlotProps-CZJ2E7Ux.js";import"./useForkRef-DoG2Adio.js";import"./useSlotProps-Uj4Ej5E1.js";import"./Popover-uAtnNwBt.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-Cd1GL2Ny.js";import"./useTheme-DmimCZ1K.js";import"./utils-uO-Y6Lu-.js";import"./TransitionGroupContext-CFI9AaDj.js";import"./useTimeout-Dr5vw9MW.js";import"./getReactElementRef-7aOdyAnj.js";import"./mergeSlotProps-DUVsb-pA.js";import"./debounce-Be36O1Ab.js";import"./Modal-C_PIWu30.js";import"./useEventCallback-DFupxdy5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-De3axDf6.js";import"./Fade-DiSnUXPW.js";import"./Paper-CpiR7IfR.js";import"./List-C7cGWOto.js";import"./utils-DoM3o7-Q.js";import"./useControlled-BuTFob83.js";import"./createSvgIcon-f84r-UoO.js";import"./OutlinedInput-DkQzF-Yr.js";import"./FormHelperText-DqMuL7fY.js";import"./FormControlLabel-CKApGRUl.js";import"./Typography-aAxGDRe7.js";import"./Switch-CgP-2Cp1.js";import"./SwitchBase-qMOE7SWj.js";import"./ButtonBase-DV3wZvw5.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-IVXlydwe.js";import"./RadioGroup-dD3cetTc.js";import"./FormGroup-LMrVoSKP.js";import"./Box-BEsP6iEE.js";import"./Divider-DTiwsONw.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-Ct51BpAL.js";import"./styled-Dz3b5a5M.js";import"./TextField-nrrPXK9e.js";import"./FormControl-CUQ3qwGV.js";import"./isMuiElement-D0FqNR9x.js";import"./Grid-DNEcM-zX.js";import"./index-tKRfahf_.js";import"./index-mtCs71Oj.js";import"./___vite-browser-external_commonjs-proxy-Cuc_yKOi.js";import"./index-CAtWx5sm.js";import"./_toKey-BkjVo4KL.js";import"./Autocomplete-Bq4SIFVD.js";import"./Close-Dcuk3jY8.js";import"./usePreviousProps-DlTFrG1g.js";import"./Tooltip-DE_9rsm0.js";import"./Chip-DYbvbfFy.js";import"./IconButton-CI45TlqX.js";import"./CircularProgress-C6UU3hYL.js";import"./ListSubheader-DWnFAuvx.js";import"./useInfiniteQuery-Bj4ovjZI.js";import"./useBaseQuery-B9xJivCE.js";import"./suspense-Zp53cwBn.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-BggChkC7.js";import"./Container-DBKsfXDc.js";const $t={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
