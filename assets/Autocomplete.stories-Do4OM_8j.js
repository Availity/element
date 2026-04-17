import{j as t}from"./iframe-D_FBGCyt.js";import{C as e}from"./Autocomplete-iCRER59G.js";import{B as i}from"./index-DfmN7Pdp.js";import{P as s}from"./index-DVlriJs3.js";import{T as a}from"./index-BFUMh9R9.js";import{G as l}from"./index-BBo7dAKW.js";import{b as n,a as d}from"./Types-DLUIPKsS.js";import{u,F as c}from"./index.esm-DJF8fB7j.js";import"./preload-helper-PPVm8Dsz.js";import"./index-L_MoVrnk.js";import"./index-CPhJbrDP.js";import"./index-CHeBUqtj.js";import"./index-BiBDMnSv.js";import"./index-C15pSvNp.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-5AfvjDJL.js";import"./memoTheme-BLxVLpBG.js";import"./styled-xf6f_HVu.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-CcBITnwG.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-D0mczUgB.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-rTOCbTjW.js";import"./Menu-D87dknpl.js";import"./useSlot-BtMprAQd.js";import"./mergeSlotProps-gV_s4djX.js";import"./useForkRef-CnVOscb6.js";import"./useSlotProps-C2D_NZSZ.js";import"./Popover-DSajnCnR.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-DcK87Y2W.js";import"./useTheme-C9l_6OF0.js";import"./utils-DnGyS3wP.js";import"./TransitionGroupContext-D8t5YM-9.js";import"./useTimeout-SlAgGEcH.js";import"./getReactElementRef-CwqBwRrr.js";import"./mergeSlotProps-Vx5Db-vC.js";import"./debounce-Be36O1Ab.js";import"./Modal-C7olDkj8.js";import"./useEventCallback-jDv7Sv7e.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-y5ajGIML.js";import"./Fade-BVS2OpEz.js";import"./Paper-BakwuC79.js";import"./List-BXCcSLWL.js";import"./utils-DoM3o7-Q.js";import"./useControlled-CdfLcSkL.js";import"./createSvgIcon-CrDNgKEm.js";import"./OutlinedInput-BIVPjmnf.js";import"./FormHelperText-D-uyeHOV.js";import"./FormControlLabel-R0V4f3aH.js";import"./Typography-2LRTBqXt.js";import"./Switch-CePFD_S0.js";import"./SwitchBase-DTTSsIt3.js";import"./ButtonBase-D61WXHG0.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-D_ui9MP1.js";import"./RadioGroup-DFPZLkM7.js";import"./FormGroup-Cz3AxvE4.js";import"./Box-CvB3zA9H.js";import"./Divider-PHdlqile.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-CDN4SC59.js";import"./styled-D_5SdMbV.js";import"./TextField-BeRi7xW_.js";import"./FormControl-am7KBdv4.js";import"./isMuiElement-DWlz3pJm.js";import"./Grid-DRIeD9kY.js";import"./index-DkiYkhBs.js";import"./index-zm1E9Otn.js";import"./___vite-browser-external_commonjs-proxy-nzxmoGa4.js";import"./index-BjtTJEnU.js";import"./_toKey-KD99ZJJq.js";import"./Autocomplete-Dy6jk5CL.js";import"./Close-CARxMNKp.js";import"./usePreviousProps-Clt_vEUo.js";import"./Tooltip-Cz548eDU.js";import"./Chip-CMroy8Yn.js";import"./IconButton-eUYvyQUt.js";import"./CircularProgress-BjsVuxPp.js";import"./ListSubheader-CJxnO8b2.js";import"./useInfiniteQuery-jJEGU2SG.js";import"./useBaseQuery-Coe3C4Az.js";import"./suspense-D_Mfr092.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-CuoV_D53.js";import"./Container-CHNU3dwn.js";const $t={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
