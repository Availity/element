import{j as e,a as A}from"./jsx-runtime-390e5fc8.js";import{r as h}from"./index-570b25c1.js";import{S as B,h as O,i as N}from"./index-a07a0c42.js";import{I as W}from"./index-5bd1ab51.js";import{I as z,F as D,a as j,S as U}from"./index-72a39936.js";import{T as Y}from"./TextField-1d0ea3d4.js";import{S as $}from"./Stack-385eaa90.js";import{I as R}from"./InputAdornment-cfb27f94.js";import{M as f}from"./MenuItem-96352df4.js";import{B as G}from"./Box-7f261278.js";import{C as J}from"./Chip-a33b6866.js";import"./_commonjsHelpers-042e6b4d.js";import"./faCircleArrowRight-5066acd3.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-f3e07af8.js";import"./createTheme-e6b56ddb.js";import"./clsx-8416b751.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-285a8f6c.js";import"./styled-78cd751f.js";import"./generateUtilityClasses-2915a045.js";import"./Button-bf5d864a.js";import"./ButtonBase-da7ceb67.js";import"./emotion-react.browser.esm-69a15469.js";import"./TransitionGroupContext-c71596b3.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-7c526765.js";import"./useTheme-b3699c65.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./useSlotProps-1710581f.js";import"./utils-1ac07bae.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-e1c52fea.js";import"./LoadingButton-d30fce51.js";import"./extends-90dea224.js";import"./CircularProgress-c55bac56.js";import"./index-9681c8ff.js";import"./FormControlLabel-4f099345.js";import"./utils-3d35716f.js";import"./Typography-125528da.js";import"./extendSxProp-4d42c058.js";import"./FormLabel-4f2fd2fa.js";import"./isMuiElement-6907f060.js";import"./FormHelperText-5982fdaa.js";import"./Divider-bf202c30.js";import"./dividerClasses-17e5b451.js";import"./Select-116e5b4c.js";import"./react-is.production.min-a192e302.js";import"./Menu-523b7b51.js";import"./Backdrop-c0ceeda2.js";import"./ownerWindow-698471fc.js";import"./createChainedFunction-0bab83cf.js";import"./Paper-adaa179d.js";import"./createSvgIcon-c7fbf131.js";import"./OutlinedInput-08476f7f.js";import"./GlobalStyles-bb3c5388.js";import"./styled-d8af9a46.js";const a=h.forwardRef((t,l)=>{const{InputProps:o,helpTopicId:g,InputLabelProps:i,FormHelperTextProps:b,SelectProps:r,...n}=t;return e(Y,{...n,InputProps:{...o,...z},InputLabelProps:{component:D,helpTopicId:g,shrink:!0,...i},FormHelperTextProps:{component:j,...b},SelectProps:{...r,...U},ref:l})});try{a.displayName="TextField",a.__docgenInfo={description:"",displayName:"TextField",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<TextFieldClasses>"}},children:{defaultValue:null,description:`The content of the component.
@ignore`,name:"children",required:!1,type:{name:"ReactNode"}},color:{defaultValue:{value:"'primary'"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).`,name:"color",required:!1,type:{name:'"primary" | "secondary" | "error" | "info" | "success" | "warning"'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},label:{defaultValue:null,description:"The label content.",name:"label",required:!1,type:{name:"ReactNode"}},select:{defaultValue:{value:"false"},description:"Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.\nIf this option is set you must pass the options of the select as children.",name:"select",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The id of the `input` element.\nUse this prop to make `label` and `helperText` accessible for screen readers.",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).",name:"type",required:!1,type:{name:"HTMLInputTypeAttribute"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},onChange:{defaultValue:null,description:"Callback fired when the value is changed.\n@param event The event source of the callback.\nYou can pull out the new value by accessing `event.target.value` (string).\n@param event The event source of the callback.\nYou can pull out the new value by accessing `event.target.value` (string).\n@param event The event source of the callback.\nYou can pull out the new value by accessing `event.target.value` (string).",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"If `true`, the label is displayed in an error state.",name:"error",required:!1,type:{name:"boolean"}},margin:{defaultValue:{value:"'none'"},description:"If `dense` or `normal`, will adjust vertical spacing of this and contained components.",name:"margin",required:!1,type:{name:'"none" | "dense" | "normal"'}},defaultValue:{defaultValue:null,description:"The default value. Use when the component is not controlled.",name:"defaultValue",required:!1,type:{name:"unknown"}},placeholder:{defaultValue:null,description:"The short hint displayed in the `input` before the user enters a value.",name:"placeholder",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"The size of the component.",name:"size",required:!1,type:{name:'"small" | "medium"'}},autoFocus:{defaultValue:{value:"false"},description:"If `true`, the `input` element is focused during the first mount.",name:"autoFocus",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The value of the `input` element, required for a controlled component.",name:"value",required:!1,type:{name:"unknown"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the input will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},inputProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.",name:"inputProps",required:!1,type:{name:"InputBaseComponentProps"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"Ref<any>"}},required:{defaultValue:{value:"false"},description:"If `true`, the label is displayed as required and the `input` element is required.",name:"required",required:!1,type:{name:"boolean"}},InputProps:{defaultValue:null,description:"Props applied to the Input element.\nIt will be a [`FilledInput`](/material-ui/api/filled-input/),\n[`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)\ncomponent depending on the `variant` prop value.",name:"InputProps",required:!1,type:{name:"InputProps & (Partial<InputProps> | Partial<OutlinedInputProps> | Partial<FilledInputProps>)"}},focused:{defaultValue:null,description:"If `true`, the component is displayed in focused state.",name:"focused",required:!1,type:{name:"boolean"}},hiddenLabel:{defaultValue:{value:"false"},description:"If `true`, the label is hidden.\nThis is used to increase density for a `FilledInput`.\nBe sure to add `aria-label` to the `input` element.",name:"hiddenLabel",required:!1,type:{name:"boolean"}},autoComplete:{defaultValue:null,description:`This prop helps users to fill forms faster, especially on mobile devices.
The name can be confusing, as it's more like an autofill.
You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).`,name:"autoComplete",required:!1,type:{name:"string"}},FormHelperTextProps:{defaultValue:null,description:"Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.",name:"FormHelperTextProps",required:!1,type:{name:'FormHelperTextOwnProps & CommonProps & Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "key" | keyof HTMLAttributes<...>> & { ...; }, "className" | ... 10 more ... | "focused"> & { ...; } & Partial<...>'}},helperText:{defaultValue:null,description:"The helper text content.",name:"helperText",required:!1,type:{name:"ReactNode"}},InputLabelProps:{defaultValue:null,description:"Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.\nPointer events like `onClick` are enabled if and only if `shrink` is `true`.",name:"InputLabelProps",required:!1,type:{name:"{ helpTopicId?: string; } & LabelHTMLAttributes<HTMLLabelElement> & FormLabelOwnProps & CommonProps & Omit<...> & { ...; } & Partial<...>"}},multiline:{defaultValue:{value:"false"},description:"If `true`, a `textarea` element is rendered instead of an input.",name:"multiline",required:!1,type:{name:"boolean"}},rows:{defaultValue:null,description:"Number of rows to display when multiline option is set to true.",name:"rows",required:!1,type:{name:"string | number"}},maxRows:{defaultValue:null,description:"Maximum number of rows to display when multiline option is set to true.",name:"maxRows",required:!1,type:{name:"string | number"}},minRows:{defaultValue:null,description:"Minimum number of rows to display when multiline option is set to true.",name:"minRows",required:!1,type:{name:"string | number"}},SelectProps:{defaultValue:null,description:"Props applied to the [`Select`](/material-ui/api/select/) element.",name:"SelectProps",required:!1,type:{name:"SelectProps & Partial<SelectProps<unknown>>"}},helpTopicId:{defaultValue:null,description:"Adds `FieldHelpIcon` next to the label (should not be within label for accessibility)",name:"helpTopicId",required:!1,type:{name:"string"}}}}}catch{}const nt={title:"Components/TextField/TextField",component:a,tags:["autodocs"],args:{helperText:"Helper Text"},argTypes:{helperText:{type:"string"}}},s={render:t=>e(a,{...t}),args:{label:"Field Label",id:"test",helpTopicId:"123"}},u={render:t=>A($,{direction:"row",spacing:1,children:[e(a,{label:"Default",id:"default",...t}),e(a,{label:"Focused",id:"Focused",focused:!0,...t}),e(a,{label:"Error",id:"error",error:!0,...t}),e(a,{label:"Disabled",id:"disabled",disabled:!0,...t})]}),args:{margin:"normal"}},p={render:()=>e(a,{label:"With Icon",id:"search",InputProps:{startAdornment:e(R,{position:"start",children:e(B,{})})}})},d={render:()=>{const[t,l]=h.useState(!1);return e(a,{type:t?"text":"password",label:"Password",id:"password",InputProps:{endAdornment:e(R,{position:"end",children:e(W,{title:"password visibility",onClick:()=>l(o=>!o),edge:"end",size:"small",children:t?e(O,{}):e(N,{})})})}})}},m={render:t=>{const[l,o]=h.useState("");return A(a,{value:l,select:!0,SelectProps:{onChange:i=>{o(i.target.value)}},...t,children:[e(f,{value:10,children:"10"}),e(f,{value:20,children:"20"}),e(f,{value:30,children:"30"})]})},args:{label:"Select"}},c={render:t=>{const[l,o]=h.useState([]);return e(a,{id:"multiple-chip",select:!0,SelectProps:{multiple:!0,onChange:r=>{const{target:{value:n}}=r;o(typeof n=="string"?n.split(","):n)},renderValue:r=>e(G,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:r.map(n=>e(J,{label:n},n))})},value:l,...t,children:["one","two","three","four","five","six"].map(r=>e(f,{value:r,children:r},r))})},args:{label:"MultiSelect"}};var y,T,I;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: TextFieldProps) => <TextField {...args} />,
  args: {
    label: 'Field Label',
    id: 'test',
    helpTopicId: '123'
  }
}`,...(I=(T=s.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var v,P,x;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: TextFieldProps) => <Stack direction="row" spacing={1}>
      <TextField label="Default" id="default" {...args} />
      <TextField label="Focused" id="Focused" focused {...args} />
      <TextField label="Error" id="error" error {...args} />
      <TextField label="Disabled" id="disabled" disabled {...args} />
    </Stack>,
  args: {
    margin: 'normal'
  }
}`,...(x=(P=u.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var w,S,V;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <TextField label="With Icon" id="search" InputProps={{
    startAdornment: <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
  }} />
}`,...(V=(S=p.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var F,q,C;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [showPassword, setShowPassword] = useState(false);
    return <TextField type={showPassword ? 'text' : 'password'} label="Password" id="password" InputProps={{
      endAdornment: <InputAdornment position="end">
              <IconButton title="password visibility" onClick={() => setShowPassword(prev => !prev)} edge="end" size="small">
                {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
              </IconButton>
            </InputAdornment>
    }} />;
  }
}`,...(C=(q=d.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var M,H,L;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var E,k,_;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(_=(k=c.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};const lt=["_TextField","_States","_WithIcon","_PasswordField","_Select","_MultiSelect"];export{c as _MultiSelect,d as _PasswordField,m as _Select,u as _States,s as _TextField,p as _WithIcon,lt as __namedExportsOrder,nt as default};
//# sourceMappingURL=TextField.stories-0746f99b.js.map
