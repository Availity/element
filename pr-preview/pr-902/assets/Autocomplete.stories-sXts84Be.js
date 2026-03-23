import{j as t}from"./iframe-hulqVKFa.js";import{C as e}from"./Autocomplete-BbSidR-F.js";import{B as i}from"./index-CWJdyCdu.js";import{P as s}from"./index-CWsRpgkr.js";import{T as a}from"./index-PP9CmKdi.js";import{G as l}from"./index-BlNR_NWf.js";import{b as n,a as d}from"./Types-DLUIPKsS.js";import{u,F as c}from"./index.esm-ByqGPp5Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-WmxqCcdi.js";import"./index-BjhwojTf.js";import"./index-CwQEE9jE.js";import"./index-BiBDMnSv.js";import"./index-CFZ7DghX.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-i9gddw4o.js";import"./memoTheme-B_nCzl8M.js";import"./styled-CYnX6RAa.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-Buq9vnb5.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CY5egsXZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CSBq7uz_.js";import"./Menu-BASAkWZI.js";import"./useSlot-CalbLJ3n.js";import"./mergeSlotProps-C6UhvrC4.js";import"./useForkRef-BQz3TnTQ.js";import"./useSlotProps-CO5Qh0k_.js";import"./Popover-BiUSFDdq.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-BqpYj0TQ.js";import"./useTheme-C7AUirRA.js";import"./utils-CqZ-bN0c.js";import"./TransitionGroupContext-DQUbB_yy.js";import"./useTimeout-Bim6OzXz.js";import"./getReactElementRef-DCfmlyG2.js";import"./mergeSlotProps-BYXPuP8C.js";import"./debounce-Be36O1Ab.js";import"./Modal-BIuYGRLg.js";import"./useEventCallback-IcKGM0BT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-l3mPJCzo.js";import"./Fade-T6bIu7ga.js";import"./Paper-BVOs07DX.js";import"./List-CHNmHfLH.js";import"./utils-DoM3o7-Q.js";import"./useControlled-maN10Goq.js";import"./createSvgIcon-MyKUcFFT.js";import"./OutlinedInput-8C-NOWfH.js";import"./FormHelperText-CJHErJH9.js";import"./FormControlLabel-Dnvw7QmX.js";import"./Typography-COHcSKH7.js";import"./Switch-D6kkTZOZ.js";import"./SwitchBase-BXxnTvJc.js";import"./ButtonBase-2bDflI9o.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BCOKkKaa.js";import"./RadioGroup-DCnXM_Hp.js";import"./FormGroup-BDEQiySx.js";import"./Box-CyvodRNS.js";import"./Divider-DjTc7Vl7.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-B2rPYqjB.js";import"./styled-QvSbzdTE.js";import"./TextField-opqoiQIi.js";import"./FormControl-BTDFP5sq.js";import"./isMuiElement-B2zjcqD7.js";import"./Grid-CPl8rXDT.js";import"./index-CKDMRTl1.js";import"./index-D23EGe5u.js";import"./___vite-browser-external_commonjs-proxy-DNDhTIwV.js";import"./index-BoMQfRhQ.js";import"./_toKey-CGmVVdEL.js";import"./Autocomplete-DhvE3ydP.js";import"./Close-xxpo3l9y.js";import"./usePreviousProps-7PxxK8iO.js";import"./Tooltip-CwFATdR1.js";import"./Chip-S3gC5bxU.js";import"./IconButton-D52dKoJw.js";import"./CircularProgress-p22Pqfnj.js";import"./ListSubheader-DOg5GPLj.js";import"./useInfiniteQuery-CFAstvPp.js";import"./useBaseQuery-CAfVOqrW.js";import"./suspense-DvAJhkuK.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-BD9YMHcT.js";import"./Container-CNnb763M.js";const $t={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
