import{j as t}from"./iframe-DvcXWkGI.js";import{C as e}from"./Autocomplete-DT_rlzfB.js";import{B as i}from"./index-O15mV2IG.js";import{P as s}from"./index-CooZlyF2.js";import{T as a}from"./index-C1KFV9tz.js";import{G as l}from"./index-lKF-mYBi.js";import{b as n,a as d}from"./Types-DLUIPKsS.js";import{u,F as c}from"./index.esm-DK5g2aHU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CLIt9tLa.js";import"./index-64cBt2pn.js";import"./index-8WqHyHCn.js";import"./index-BiBDMnSv.js";import"./index-63S9eLZS.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./SvgIcon-Co17_fug.js";import"./memoTheme-C00_9AbM.js";import"./styled-DjkE2l0O.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-1iOl5y2I.js";import"./FormLabel-DrBlRY0b.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-CnGwjuyh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-CpxYMe4e.js";import"./Menu-BvR-3tqL.js";import"./useSlot-DrWGT-0c.js";import"./mergeSlotProps-C-IYj7GK.js";import"./useForkRef-DXhMi9Fu.js";import"./useSlotProps-BYEe1XOi.js";import"./Popover-AZC5xG1m.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./Portal-BJf12Rly.js";import"./useTheme-BDjWybQB.js";import"./utils-CXX3yobC.js";import"./TransitionGroupContext-DxPJb2_E.js";import"./useTimeout-BLAqdi1l.js";import"./getReactElementRef-CyXa0GT6.js";import"./mergeSlotProps-CU9nKqZa.js";import"./debounce-Be36O1Ab.js";import"./Modal-BP1sB3AO.js";import"./useEventCallback-jEehnAW2.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BQgAPKnO.js";import"./Backdrop-CR8PY8T1.js";import"./Fade-DI9jsdhL.js";import"./Paper-BWWtmnI-.js";import"./List-UiPSZZQ2.js";import"./utils-DoM3o7-Q.js";import"./useControlled-CWsku3Ua.js";import"./createSvgIcon-JaHuofy7.js";import"./OutlinedInput-Dcxo-ASf.js";import"./FormHelperText-ejXNJD_u.js";import"./FormControlLabel-CtVOAWlx.js";import"./Typography-CbbFdRSD.js";import"./Switch-dGJM5-u2.js";import"./SwitchBase-BEtkunQj.js";import"./ButtonBase-CI7etmmo.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-OyBSFkGt.js";import"./RadioGroup-BwF9pQjX.js";import"./FormGroup-x5VZN7lS.js";import"./Box-D0PWnwSE.js";import"./Divider-DVlfBs2v.js";import"./dividerClasses-qU9lkgJy.js";import"./Stack-BWYDbKiS.js";import"./styled-1evKp3Hp.js";import"./TextField-CIsWpzBq.js";import"./FormControl-Bl3frfty.js";import"./isMuiElement-BM04y7u2.js";import"./Grid-B-VOZSOw.js";import"./index-Cjyj5nZi.js";import"./index-CaTv9UPc.js";import"./___vite-browser-external_commonjs-proxy-GEXFNNnv.js";import"./index-CM3fg1Ej.js";import"./_toKey-DAWZYGE2.js";import"./Autocomplete-wgttrC-i.js";import"./Close-Dg4_-4d8.js";import"./usePreviousProps-II5BYs5k.js";import"./Tooltip-CA4xVq51.js";import"./Chip-QGNBwSBS.js";import"./IconButton-C6_QWXQy.js";import"./CircularProgress-CsILiYUE.js";import"./ListSubheader-C7ro_WkF.js";import"./useInfiniteQuery-BqDdHICQ.js";import"./useBaseQuery-YkESpXgW.js";import"./suspense-D9wuLEku.js";import"./infiniteQueryBehavior-BTtYVWpE.js";import"./Button-EYXZSfHT.js";import"./Container-Dwn77WAc.js";const $t={title:"Form Components/Controlled Form/Autocomplete/ControlledAutocomplete",component:e,tags:["autodocs"],argTypes:{...d,...n}},r={render:m=>{const o=u();return t.jsx(c,{...o,children:t.jsxs("form",{onSubmit:o.handleSubmit(p=>p),children:[t.jsx(e,{...m}),t.jsxs(l,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(i,{disabled:!o?.formState?.isSubmitSuccessful,children:"Reset",color:"secondary",onClick:()=>o.reset()}),t.jsx(i,{type:"submit",disabled:o?.formState?.isSubmitSuccessful,children:"Submit"})]}),o?.formState?.isSubmitSuccessful?t.jsxs(s,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(a,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(o.getValues(),null,2)})]}):null]})})},args:{name:"controlledAutocomplete",options:["Option 1","Option 2"],rules:{required:"This is required."},FieldProps:{label:"Autocomplete Label"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
