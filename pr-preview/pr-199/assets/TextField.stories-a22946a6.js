import{a as e,j as y}from"./jsx-runtime-a3bcee63.js";import{r as g}from"./index-570b25c1.js";import{S as U,n as Y,o as $}from"./index-6d4c026f.js";import{I as G}from"./index-5efdcb36.js";import{I as J,F as K,b as Q,c as X}from"./index-5ee89163.js";import{T as Z}from"./TextField-471fdd1c.js";import{S as O}from"./Stack-3fcb8940.js";import{I as N}from"./InputAdornment-e680d39b.js";import{M as h}from"./MenuItem-70f75cad.js";import{B as ee}from"./Box-51bd3ea0.js";import{C as te}from"./Chip-e09b065a.js";import"./_commonjsHelpers-042e6b4d.js";import"./faCircleArrowRight-695b3628.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-075b1db6.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-98dc6282.js";import"./styled-523cb007.js";import"./generateUtilityClasses-b58f947a.js";import"./Button-af0ca45f.js";import"./ButtonBase-44753119.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-91ad21bd.js";import"./useTheme-c07bb8e7.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./ownerDocument-613eb639.js";import"./Grow-8a00b99f.js";import"./index-8a077077.js";import"./utils-1ac07bae.js";import"./useSlotProps-95ccb7bd.js";import"./isHostComponent-73d6e646.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-3fd19b93.js";import"./LoadingButton-1ec35b70.js";import"./extends-90dea224.js";import"./CircularProgress-96ade162.js";import"./index-9681c8ff.js";import"./FormControlLabel-1ceb9da1.js";import"./utils-3d35716f.js";import"./Typography-f453bb5c.js";import"./extendSxProp-b1abb964.js";import"./FormLabel-3e0f5024.js";import"./Divider-2d957b7a.js";import"./dividerClasses-871b72e6.js";import"./FormHelperText-e428b621.js";import"./OutlinedInput-71306fdf.js";import"./ownerWindow-03d1c82d.js";import"./debounce-517eeb3c.js";import"./GlobalStyles-5f9800bb.js";import"./Select-473a43cb.js";import"./react-is.production.min-a192e302.js";import"./Menu-113dab7f.js";import"./Popover-252d82a4.js";import"./Modal-1f45fd5c.js";import"./Backdrop-4a58ec86.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-389d56e7.js";import"./List-446c66c9.js";import"./createSvgIcon-ca656bec.js";import"./FormControl-6b396c3c.js";import"./isMuiElement-6907f060.js";import"./styled-5c6c15e1.js";const a=g.forwardRef((t,n)=>{const{InputProps:o,helpTopicId:b,InputLabelProps:i,FormHelperTextProps:T,required:r,SelectProps:l,inputProps:D,...j}=t;return e(Z,{...j,inputProps:{"aria-required":r,...D},InputProps:{...o,...J},InputLabelProps:{component:K,helpTopicId:b,required:r,shrink:!0,...i},FormHelperTextProps:{component:Q,...T},SelectProps:{...l,...X},ref:n})});try{a.displayName="TextField",a.__docgenInfo={description:"",displayName:"TextField",props:{color:{defaultValue:{value:"'primary'"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:'"success" | "info" | "warning" | "error" | "primary" | "secondary"'}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TextFieldClasses>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:`The content of the component.
@ignore`,name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},label:{defaultValue:null,description:"The label content.",name:"label",required:!1,type:{name:"ReactNode"}},select:{defaultValue:{value:"false"},description:"Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.\nIf this option is set you must pass the options of the select as children.",name:"select",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"The default value. Use when the component is not controlled.",name:"defaultValue",required:!1,type:{name:"unknown"}},id:{defaultValue:null,description:"The id of the `input` element.\nUse this prop to make `label` and `helperText` accessible for screen readers.",name:"id",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"The short hint displayed in the `input` before the user enters a value.",name:"placeholder",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},onChange:{defaultValue:null,description:"Callback fired when the value is changed.\n@param event The event source of the callback.\nYou can pull out the new value by accessing `event.target.value` (string).\n@param event The event source of the callback.\nYou can pull out the new value by accessing `event.target.value` (string).\n@param event The event source of the callback.\nYou can pull out the new value by accessing `event.target.value` (string).",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},error:{defaultValue:{value:"false"},description:"If `true`, the label is displayed in an error state.",name:"error",required:!1,type:{name:"boolean"}},margin:{defaultValue:{value:"'none'"},description:"If `dense` or `normal`, will adjust vertical spacing of this and contained components.",name:"margin",required:!1,type:{name:'"none" | "normal" | "dense"'}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"The size of the component.",name:"size",required:!1,type:{name:'"small" | "medium"'}},autoFocus:{defaultValue:{value:"false"},description:"If `true`, the `input` element is focused during the first mount.",name:"autoFocus",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).",name:"type",required:!1,type:{name:"HTMLInputTypeAttribute"}},value:{defaultValue:null,description:"The value of the `input` element, required for a controlled component.",name:"value",required:!1,type:{name:"unknown"}},fullWidth:{defaultValue:null,description:"If `true`, the input will take up the full width of its container. @default true",name:"fullWidth",required:!1,type:{name:"boolean"}},autoComplete:{defaultValue:null,description:`This prop helps users to fill forms faster, especially on mobile devices.
The name can be confusing, as it's more like an autofill.
You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).`,name:"autoComplete",required:!1,type:{name:"string"}},focused:{defaultValue:null,description:"If `true`, the component is displayed in focused state.",name:"focused",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"If `true`, the label is displayed as required and the `input` element is required.",name:"required",required:!1,type:{name:"boolean"}},helpTopicId:{defaultValue:null,description:"Adds `FieldHelpIcon` next to the label (should not be within label for accessibility)",name:"helpTopicId",required:!1,type:{name:"string"}},hiddenLabel:{defaultValue:{value:"false"},description:"If `true`, the label is hidden.\nThis is used to increase density for a `FilledInput`.\nBe sure to add `aria-label` to the `input` element.",name:"hiddenLabel",required:!1,type:{name:"boolean"}},InputProps:{defaultValue:null,description:"Props applied to the Input element.\nIt will be a [`FilledInput`](/material-ui/api/filled-input/),\n[`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)\ncomponent depending on the `variant` prop value.",name:"InputProps",required:!1,type:{name:"InputProps & (Partial<FilledInputProps> | Partial<OutlinedInputProps> | Partial<InputProps>)"}},FormHelperTextProps:{defaultValue:null,description:"Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.",name:"FormHelperTextProps",required:!1,type:{name:'FormHelperTextOwnProps & CommonProps & Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "key" | keyof HTMLAttributes<...>> & { ...; }, "variant" | ... 10 more ... | "required"> & { ...; } & Partial<...>'}},helperText:{defaultValue:null,description:"The helper text content.",name:"helperText",required:!1,type:{name:"ReactNode"}},InputLabelProps:{defaultValue:null,description:"Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.\nPointer events like `onClick` are enabled if and only if `shrink` is `true`.",name:"InputLabelProps",required:!1,type:{name:"{ helpTopicId?: string; } & LabelHTMLAttributes<HTMLLabelElement> & FormLabelOwnProps & CommonProps & Omit<...> & { ...; } & Partial<...>"}},inputProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.",name:"inputProps",required:!1,type:{name:"InputBaseComponentProps"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"Ref<any>"}},multiline:{defaultValue:{value:"false"},description:"If `true`, a `textarea` element is rendered instead of an input.",name:"multiline",required:!1,type:{name:"boolean"}},rows:{defaultValue:null,description:"Number of rows to display when multiline option is set to true.",name:"rows",required:!1,type:{name:"string | number"}},maxRows:{defaultValue:null,description:"Maximum number of rows to display when multiline option is set to true.",name:"maxRows",required:!1,type:{name:"string | number"}},minRows:{defaultValue:null,description:"Minimum number of rows to display when multiline option is set to true.",name:"minRows",required:!1,type:{name:"string | number"}},SelectProps:{defaultValue:null,description:"Props applied to the [`Select`](/material-ui/api/select/) element.",name:"SelectProps",required:!1,type:{name:"SelectProps & Partial<SelectProps<unknown>>"}}}}}catch{}const yt={title:"Components/TextField/TextField",component:a,tags:["autodocs"],args:{helperText:"Helper Text",fullWidth:!1},argTypes:{helperText:{type:"string"}}},s={render:t=>e(a,{...t}),args:{label:"Field Label",id:"test",helpTopicId:"123"}},u={render:t=>y(O,{direction:"row",spacing:1,children:[e(a,{label:"Default",id:"default",...t}),e(a,{label:"Focused",id:"Focused",focused:!0,...t}),e(a,{label:"Error",id:"error",error:!0,...t}),e(a,{label:"Disabled",id:"disabled",disabled:!0,...t})]}),args:{margin:"normal"}},p={render:t=>y(O,{direction:"row",spacing:1,children:[e(a,{label:"Small",id:"small",size:"small",...t}),e(a,{label:"Medium",id:"medium",size:"medium",...t})]}),args:{margin:"normal"}},d={render:()=>e(a,{label:"With Icon",id:"search",fullWidth:!1,InputProps:{startAdornment:e(N,{position:"start",children:e(U,{})})}})},m={render:()=>{const[t,n]=g.useState(!1);return e(a,{type:t?"text":"password",label:"Password",id:"password",fullWidth:!1,InputProps:{endAdornment:e(N,{position:"end",children:e(G,{title:"password visibility",onClick:()=>n(o=>!o),edge:"end",children:t?e(Y,{fontSize:"small"}):e($,{fontSize:"small"})})})}})}},c={render:t=>{const[n,o]=g.useState("");return y(a,{value:n,select:!0,SelectProps:{onChange:i=>{o(i.target.value)}},...t,children:[e(h,{value:10,children:"10"}),e(h,{value:20,children:"20"}),e(h,{value:30,children:"30"})]})},args:{label:"Select"}},f={render:t=>{const[n,o]=g.useState([]);return e(a,{id:"multiple-chip",select:!0,SelectProps:{multiple:!0,onChange:r=>{const{target:{value:l}}=r;o(typeof l=="string"?l.split(","):l)},renderValue:r=>e(ee,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:r.map(l=>e(te,{label:l},l))})},value:n,...t,children:["one","two","three","four","five","six"].map(r=>e(h,{value:r,children:r},r))})},args:{label:"MultiSelect"}};var I,v,P;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args: TextFieldProps) => <TextField {...args} />,
  args: {
    label: 'Field Label',
    id: 'test',
    helpTopicId: '123'
  }
}`,...(P=(v=s.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var x,w,S;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: TextFieldProps) => <Stack direction="row" spacing={1}>
      <TextField label="Default" id="default" {...args} />
      <TextField label="Focused" id="Focused" focused {...args} />
      <TextField label="Error" id="error" error {...args} />
      <TextField label="Disabled" id="disabled" disabled {...args} />
    </Stack>,
  args: {
    margin: 'normal'
  }
}`,...(S=(w=u.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var F,V,q;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: (args: TextFieldProps) => <Stack direction="row" spacing={1}>
      <TextField label="Small" id="small" size="small" {...args} />
      <TextField label="Medium" id="medium" size="medium" {...args} />
    </Stack>,
  args: {
    margin: 'normal'
  }
}`,...(q=(V=p.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var M,C,H;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <TextField label="With Icon" id="search" fullWidth={false} InputProps={{
    startAdornment: <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
  }} />
}`,...(H=(C=d.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var L,k,E;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [showPassword, setShowPassword] = useState(false);
    return <TextField type={showPassword ? 'text' : 'password'} label="Password" id="password" fullWidth={false} InputProps={{
      endAdornment: <InputAdornment position="end">
              <IconButton title="password visibility" onClick={() => setShowPassword(prev => !prev)} edge="end">
                {showPassword ? <EyeIcon fontSize="small" /> : <EyeSlashIcon fontSize="small" />}
              </IconButton>
            </InputAdornment>
    }} />;
  }
}`,...(E=(k=m.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var _,A,z;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args: TextFieldProps) => {
    const [count, setCount] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
      setCount((event.target.value as string));
    };
    return <TextField value={count} select SelectProps={{
      onChange: handleChange
    }} {...args}>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </TextField>;
  },
  args: {
    label: 'Select'
  }
}`,...(z=(A=c.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var W,R,B;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: (args: TextFieldProps) => {
    const [multiValue, setMultiValue] = useState<string[]>([]);
    const handleChange = (event: SelectChangeEvent<typeof multiValue>) => {
      const {
        target: {
          value
        }
      } = event;
      setMultiValue(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value);
    };
    const options = ['one', 'two', 'three', 'four', 'five', 'six'];
    const renderValue = (selected: typeof multiValue) => <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 0.5
    }}>
        {selected.map(value => <Chip key={value} label={value} />)}
      </Box>;
    return <TextField id="multiple-chip" select SelectProps={{
      multiple: true,
      onChange: handleChange,
      renderValue: renderValue
    }} value={multiValue} {...args}>
        {options.map(option => <MenuItem key={option} value={option}>
            {option}
          </MenuItem>)}
      </TextField>;
  },
  args: {
    label: 'MultiSelect'
  }
}`,...(B=(R=f.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const Tt=["_TextField","_States","_Sizes","_WithIcon","_PasswordField","_Select","_MultiSelect"];export{f as _MultiSelect,m as _PasswordField,c as _Select,p as _Sizes,u as _States,s as _TextField,d as _WithIcon,Tt as __namedExportsOrder,yt as default};
//# sourceMappingURL=TextField.stories-a22946a6.js.map
