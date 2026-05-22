import{j as t}from"./iframe-D2jXllzf.js";import{C as e}from"./Autocomplete-zWnx9_--.js";import{B as i}from"./index-toBpsxUE.js";import{P as s}from"./index-Bcc6l1YC.js";import{T as a}from"./index-B-LjnUTn.js";import{G as l}from"./index-_ebpbhE4.js";import{b as n,a as d}from"./Types-KT_38BI3.js";import{u,F as c}from"./index.esm-BINi25PS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B8iPKeAQ.js";import"./index-DbM9_IZw.js";import"./index-C0wMGhls.js";import"./index-BiBDMnSv.js";import"./index-SmivVlA3.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-9pPXd2AZ.js";import"./memoTheme-Zt5oAqwv.js";import"./styled-DdNVu9ib.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-4fh9O_yA.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-C4VpCIrq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-J4E2T8gJ.js";import"./Menu-3Df3H2zp.js";import"./useSlot-CazCKcce.js";import"./mergeSlotProps-CJpLwHYZ.js";import"./useForkRef-BlUwhnRH.js";import"./useSlotProps-FypE9v1G.js";import"./Popover-d3WYO_gM.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-DNbvJLzK.js";import"./useTheme-C2p3ig_2.js";import"./utils-B6mCZ_7g.js";import"./TransitionGroupContext-BzeXUGnN.js";import"./useTimeout-CPz5sd6r.js";import"./getReactElementRef-DHdu6blE.js";import"./mergeSlotProps-B6ai5Rqv.js";import"./debounce-Be36O1Ab.js";import"./Modal-epJMSIoD.js";import"./useEventCallback-B89JyN3q.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CqC92YWR.js";import"./Fade-CjW2EPns.js";import"./Paper-DezgSOvY.js";import"./List-WMhnwrif.js";import"./utils-DoM3o7-Q.js";import"./useControlled-DpI9NEaZ.js";import"./createSvgIcon-BpTXI-oS.js";import"./OutlinedInput-8NKqoys9.js";import"./FormHelperText-x3FNzzv5.js";import"./FormControlLabel-CI5bXKO9.js";import"./Typography-B2ZUFsL1.js";import"./Switch-DcLsdLv8.js";import"./SwitchBase-DFUx5LAR.js";import"./ButtonBase-DMYh_tyc.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-DtF9_Ty_.js";import"./RadioGroup-CIQq2756.js";import"./FormGroup-kt5TsLUL.js";import"./Box-BbqhAezV.js";import"./Divider-ztTjX0xU.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-C7w4lddQ.js";import"./styled-CrGM8GXy.js";import"./TextField-DPbYydSm.js";import"./FormControl-B1s-S060.js";import"./isMuiElement-CtLsGuPJ.js";import"./Grid-DcON0D60.js";import"./index-B4MTobdk.js";import"./index-918D6wux.js";import"./___vite-browser-external_commonjs-proxy-CWZwep8m.js";import"./index-BzJiEeMt.js";import"./_toKey-DMH86hUz.js";import"./Autocomplete-2H7tXo87.js";import"./Close-BsJCF7Mr.js";import"./usePreviousProps-BzPIdsN4.js";import"./Tooltip-GSnbTknq.js";import"./Chip-DjOcMpWi.js";import"./IconButton-Dd5dInOR.js";import"./CircularProgress-BG5QNhqD.js";import"./ListSubheader-H_nne6QA.js";import"./useInfiniteQuery-D4_yTWT-.js";import"./useBaseQuery-C6iUgDlt.js";import"./suspense-B_xDpDZR.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-CwKYXhwT.js";import"./Container-DTQuoaq9.js";const $t={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
