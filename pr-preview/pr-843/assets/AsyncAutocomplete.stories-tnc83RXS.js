import{j as t}from"./iframe-DKPLEfLw.js";import{C as p}from"./AsyncAutocomplete-Xn2AsfvR.js";import{B as s}from"./index-BFdrycj9.js";import{u as d,F as c}from"./index.esm-B5YbwCFn.js";import{P as b}from"./index-4QxqTb0t.js";import{T as S}from"./index-B_gHUUTW.js";import{G as f}from"./index-Dn59n-rN.js";import{i as F}from"./index-zNtTlnyx.js";import{A as w,a as V}from"./Types-DvXBhIzI.js";import{Q as y}from"./suspense-CgNMJq2z.js";import{Q}from"./queryClient-cJioRqLv.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CwrUa5e0.js";import"./index-BcQPeldO.js";import"./index-CX145kFJ.js";import"./index-DS1ZdVNz.js";import"./index-WRElMkUo.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./SvgIcon-FjAnPN_Y.js";import"./memoTheme-DCtqnaOZ.js";import"./styled-DmVvl1cy.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-BKHgwe-Y.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-B1pwVxN7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./OutlinedInput-DIczrftV.js";import"./utils-DoM3o7-Q.js";import"./useForkRef-BBFL5x5N.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-DDVZojhm.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-BRbtrhUo.js";import"./mergeSlotProps-DczvM8iT.js";import"./Select-y-N0h_1d.js";import"./Menu-B7TQxF7y.js";import"./useSlotProps-RoKiuIH8.js";import"./Popover-DN87KpwA.js";import"./Portal-DsulJ7FL.js";import"./useTheme-9F3p9Qod.js";import"./utils-BvzjqUtG.js";import"./TransitionGroupContext-PAkUv-tF.js";import"./useTimeout-C_Ka5Mcj.js";import"./getReactElementRef-BnAyG0-a.js";import"./mergeSlotProps-AOTIRq8g.js";import"./Modal-DY-Qgl5b.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-sfrV9DZb.js";import"./Fade-CbLeUs7S.js";import"./Paper-Ca4rgQEJ.js";import"./List-BjcIUzlW.js";import"./useControlled-RZIZY8-C.js";import"./createSvgIcon-vtaDbQWp.js";import"./FormHelperText-BZehQ3tG.js";import"./FormControlLabel-BINRX9VO.js";import"./Typography-BTTsir7-.js";import"./Switch-BHae2QHc.js";import"./SwitchBase-XH4IthcC.js";import"./ButtonBase-ChXh0SoD.js";import"./isFocusVisible-B8k4qzLc.js";import"./RadioGroup-I65WgL0c.js";import"./Radio-DOe0Rmw3.js";import"./FormGroup-C3uHp-KP.js";import"./Box-CZdlnD3e.js";import"./Divider-CuebH3Dd.js";import"./dividerClasses-CxQzuCbE.js";import"./Stack-ClwGR_Ch.js";import"./styled-Wz6Z4Uga.js";import"./TextField-Cp8ZRfFR.js";import"./FormControl-DbYDmqwW.js";import"./isMuiElement-Bob4bJgN.js";import"./Grid-Bc7_QC4M.js";import"./index-D0RdvGWv.js";import"./___vite-browser-external_commonjs-proxy-C7XsORAh.js";import"./Autocomplete-CaBbdKCQ.js";import"./Close-u1odCwv4.js";import"./usePreviousProps-BX-xXFjB.js";import"./Tooltip-CV3fhIPH.js";import"./Chip-Byj-O4jl.js";import"./IconButton-8Ec7VkLh.js";import"./CircularProgress-QNpYF3E0.js";import"./ListSubheader-DzakDuAM.js";import"./useInfiniteQuery-DElwD55K.js";import"./useBaseQuery-DpYbr9Wl.js";import"./infiniteQueryBehavior-B_QQvG9O.js";import"./Button-DWZjJ-VR.js";import"./Container-DJ1Q8iJN.js";import"./index-BZbS_W-l.js";import"./_toKey-CghGTOo7.js";import"./index-DUqc1Y5x.js";import"./index-D_mIFYgG.js";const Tt={title:"Form Components/Controlled Form/Autocomplete/ControlledAsyncAutocomplete",component:p,tags:["autodocs"],argTypes:{...V,...w}},_=new F({name:"example"}),B=async(r,e)=>{const o=await _.post({offset:r,limit:e},{params:{}});return{totalCount:o.data.totalCount,offset:r,limit:e,options:o.data.options,count:o.data.count}},h=async(r,e)=>{const{options:o,totalCount:i}=await B(r,e);return{options:o,hasMore:r+e<i,offset:r}},g=new Q({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),n={render:r=>{var o,i,l;const e=d();return t.jsx(y,{client:g,children:t.jsx(c,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(a=>a),children:[t.jsx(p,{...r}),t.jsxs(f,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(s,{disabled:!((o=e==null?void 0:e.formState)!=null&&o.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(s,{type:"submit",disabled:(i=e==null?void 0:e.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(l=e==null?void 0:e.formState)!=null&&l.isSubmitSuccessful?t.jsxs(b,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(S,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:10,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0}},m={render:r=>{var o,i,l;const e=d({defaultValues:{controlledAsyncAutocomplete:[]}});return t.jsx(y,{client:g,children:t.jsx(c,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(a=>a),children:[t.jsx(p,{...r}),t.jsxs(f,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(s,{disabled:!((o=e==null?void 0:e.formState)!=null&&o.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(s,{type:"submit",disabled:(i=e==null?void 0:e.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(l=e==null?void 0:e.formState)!=null&&l.isSubmitSuccessful?t.jsxs(b,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(S,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,isOptionEqualToValue:(r,e)=>r.label===e.label,loadOptions:h,limit:5,queryKey:"example",rules:{required:"This is required."},defaultToFirstOption:!0,disableClearable:!0,multiple:!0,filterSelectedOptions:!0}},u={render:r=>{var o,i,l;const e=d();return t.jsx(y,{client:g,children:t.jsx(c,{...e,children:t.jsxs("form",{onSubmit:e.handleSubmit(a=>a),children:[t.jsx(p,{...r}),t.jsxs(f,{container:!0,direction:"row",justifyContent:"space-between",marginTop:1,children:[t.jsx(s,{disabled:!((o=e==null?void 0:e.formState)!=null&&o.isSubmitSuccessful),children:"Reset",color:"secondary",onClick:()=>e.reset()}),t.jsx(s,{type:"submit",disabled:(i=e==null?void 0:e.formState)==null?void 0:i.isSubmitSuccessful,children:"Submit"})]}),(l=e==null?void 0:e.formState)!=null&&l.isSubmitSuccessful?t.jsxs(b,{sx:{padding:"1.5rem",marginTop:"1.5rem"},children:[t.jsx(S,{variant:"h2",children:"Submitted Values"}),t.jsx("pre",{"data-testid":"result",children:JSON.stringify(e.getValues(),null,2)})]}):null]})})})},args:{name:"controlledAsyncAutocomplete",FieldProps:{label:"Async Select",helperText:"Helper Text",fullWidth:!1,required:!0},getOptionLabel:r=>r.label,loadOptions:h,limit:1,queryKey:"example2",rules:{required:"This is required."},defaultToOnlyOption:!0,disableClearable:!0}};var x,C,A;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
