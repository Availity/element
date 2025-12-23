import{j as t}from"./iframe-DF1q2aaL.js";import{C as p}from"./AsyncAutocomplete-Dadc8pQB.js";import{B as s}from"./index-D2mEmfXN.js";import{u as d,F as c}from"./index.esm-B7ZP7rhh.js";import{P as b}from"./index-BUlTtQc8.js";import{T as S}from"./index-Q8RjvuCg.js";import{G as f}from"./index-DCToeNHS.js";import{i as F}from"./index-YlfiJdep.js";import{A as w,a as V}from"./Types-DLUIPKsS.js";import{Q as y}from"./suspense-D2jJ5ZoL.js";import{Q}from"./queryClient-DEpNktwJ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CEYoL6Uv.js";import"./index-DJ8A6Uc2.js";import"./index-DOuKqbND.js";import"./index-DS1ZdVNz.js";import"./index-DJNX-Iyq.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-DB8Z1ZTq.js";import"./memoTheme-BD6H9365.js";import"./styled-CFEXa4qH.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-D577_Nqf.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-ByL3kvVY.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./OutlinedInput-BCsojIk-.js";import"./utils-DoM3o7-Q.js";import"./useForkRef-D-TFDBL_.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-C9NbUrxX.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-CQvSmYnu.js";import"./mergeSlotProps-BnmzE4jq.js";import"./Select-Chgl2RF6.js";import"./Menu-CmYraULs.js";import"./useSlotProps-B0ZOsC4g.js";import"./Popover-Dip1991W.js";import"./Portal-CbFePWP9.js";import"./useTheme-C0GFliqz.js";import"./utils-BdM8s10D.js";import"./TransitionGroupContext-DTdRQeqO.js";import"./useTimeout-CJLBifOK.js";import"./getReactElementRef-Cr3R6gAV.js";import"./mergeSlotProps-bUytW4Ka.js";import"./Modal-BadjnIQl.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-Ck1pJi37.js";import"./Fade-CQtVaZQb.js";import"./Paper-DZhAfepD.js";import"./List-D-4vELaV.js";import"./useControlled-C2txOzyk.js";import"./createSvgIcon-DzcieuLS.js";import"./FormHelperText-BITEPghI.js";import"./FormControlLabel-D1O_4yuP.js";import"./Typography-cWmdXt40.js";import"./Switch-DurZW9YG.js";import"./SwitchBase-iVmERgWS.js";import"./ButtonBase-D5OUD9Sm.js";import"./isFocusVisible-B8k4qzLc.js";import"./RadioGroup-CIUS5EVT.js";import"./Radio-DHSYbRtv.js";import"./FormGroup-CcYCP0zR.js";import"./Box-CIJZFnEp.js";import"./Divider-C6IIcVBl.js";import"./dividerClasses-CxQzuCbE.js";import"./Stack--jn-4dia.js";import"./styled-PDED6P24.js";import"./TextField-pOMUEs8Y.js";import"./FormControl-8Z-xvurn.js";import"./isMuiElement-Q-8wUiYz.js";import"./Grid-BQHRv1eX.js";import"./index-CNpGYZ4b.js";import"./___vite-browser-external_commonjs-proxy-BDFX1rAg.js";import"./Autocomplete-Dxh-FODj.js";import"./Close-DyTYpaPw.js";import"./usePreviousProps-CgnJE7rE.js";import"./Tooltip-BXhUmSeH.js";import"./Chip-D1hybGvz.js";import"./IconButton-K-5rBd1A.js";import"./CircularProgress-DkK8nyO-.js";import"./ListSubheader-B8HMwgeJ.js";import"./useInfiniteQuery-D5-fY4Q3.js";import"./useBaseQuery-34znJ1ZX.js";import"./infiniteQueryBehavior-B_QQvG9O.js";import"./Button-B9ufjNyc.js";import"./Container-CTcWCZH6.js";import"./index-BmlCcuES.js";import"./_toKey-zNE1Oh7L.js";import"./index-fkdObIec.js";import"./index-59p-ZqwA.js";const Tt={title:"Form Components/Controlled Form/Autocomplete/ControlledAsyncAutocomplete",component:p,tags:["autodocs"],argTypes:{...V,...w}},_=new F({name:"example"}),B=async(r,e)=>{const o=await _.post({offset:r,limit:e},{params:{}});return{totalCount:o.data.totalCount,offset:r,limit:e,options:o.data.options,count:o.data.count}},h=async(r,e)=>{const{options:o,totalCount:i}=await B(r,e);return{options:o,hasMore:r+e<i,offset:r}},g=new Q({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),n={render:r=>{var o,i,l;const e=d();return t.jsx(y,{client:g,children:t.jsx(c,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(a=>a),children:[t.jsx(p,{...r}),t.jsxs(f,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(s,{disabled:!((o=e==null?void 0:e.formState)!=null&&o.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(s,{type:"submit",disabled:(i=e==null?void 0:e.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(l=e==null?void 0:e.formState)!=null&&l.isSubmitSuccessful?t.jsxs(b,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(S,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:10,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0}},m={render:r=>{var o,i,l;const e=d({defaultValues:{controlledAsyncAutocomplete:[]}});return t.jsx(y,{client:g,children:t.jsx(c,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(a=>a),children:[t.jsx(p,{...r}),t.jsxs(f,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(s,{disabled:!((o=e==null?void 0:e.formState)!=null&&o.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(s,{type:"submit",disabled:(i=e==null?void 0:e.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(l=e==null?void 0:e.formState)!=null&&l.isSubmitSuccessful?t.jsxs(b,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(S,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,isOptionEqualToValue:(r,e)=>r.label===e.label,loadOptions:h,limit:5,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0,multiple:!0,filterSelectedOptions:!0}},u={render:r=>{var o,i,l;const e=d();return t.jsx(y,{client:g,children:t.jsx(c,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(a=>a),children:[t.jsx(p,{...r}),t.jsxs(f,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(s,{disabled:!((o=e==null?void 0:e.formState)!=null&&o.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(s,{type:"submit",disabled:(i=e==null?void 0:e.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(l=e==null?void 0:e.formState)!=null&&l.isSubmitSuccessful?t.jsxs(b,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(S,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:1,queryKey:"example2",rules:{required:"This is required."},defaultToOnlyOption:!0,disableClearable:!0}};var x,C,A;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const methods = useForm();
    return <QueryClientProvider client={client}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(data => data)}>
            <ControlledAsyncAutocomplete {...args} />
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
        </FormProvider>
      </QueryClientProvider>;
  },
  args: {
    name: 'controlledAsyncAutocomplete',
    FieldProps: {
      label: 'Async Select',
      helperText: 'Helper Text',
      fullWidth: false,
      required: true
    },
    getOptionLabel: (val: Option) => val.label,
    loadOptions,
    limit: 10,
    queryKey: 'example',
    rules: {
      required: 'This is required.'
    },
    defaultToFirstOption: true,
    disableClearable: true
  }
}`,...(A=(C=n.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var T,j,O;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const methods = useForm({
      defaultValues: {
        controlledAsyncAutocomplete: []
      }
    });
    return <QueryClientProvider client={client}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(data => data)}>
            <ControlledAsyncAutocomplete {...args} />
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
        </FormProvider>
      </QueryClientProvider>;
  },
  args: {
    name: 'controlledAsyncAutocomplete',
    FieldProps: {
      label: 'Async Select',
      helperText: 'Helper Text',
      fullWidth: false,
      required: true
    },
    getOptionLabel: (val: Option) => val.label,
    isOptionEqualToValue: (option, value) => option.label === value.label,
    loadOptions,
    limit: 5,
    queryKey: 'example',
    rules: {
      required: 'This is required.'
    },
    defaultToFirstOption: true,
    disableClearable: true,
    multiple: true,
    filterSelectedOptions: true
  }
}`,...(O=(j=m.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var P,v,q;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const methods = useForm();
    return <QueryClientProvider client={client}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(data => data)}>
            <ControlledAsyncAutocomplete {...args} />
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
        </FormProvider>
      </QueryClientProvider>;
  },
  args: {
    name: 'controlledAsyncAutocomplete',
    FieldProps: {
      label: 'Async Select',
      helperText: 'Helper Text',
      fullWidth: false,
      required: true
    },
    getOptionLabel: (val: Option) => val.label,
    loadOptions,
    limit: 1,
    queryKey: 'example2',
    rules: {
      required: 'This is required.'
    },
    defaultToOnlyOption: true,
    disableClearable: true
  }
}`,...(q=(v=u.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};const jt=["_ControlledAsyncAutoComplete","_ControlledAsyncAutoCompleteMultiple","_ControlledAsyncAutoCompleteDefaultToOnlyOption"];export{n as _ControlledAsyncAutoComplete,u as _ControlledAsyncAutoCompleteDefaultToOnlyOption,m as _ControlledAsyncAutoCompleteMultiple,jt as __namedExportsOrder,Tt as default};
