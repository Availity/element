import{a as f,j as e}from"./jsx-runtime-390e5fc8.js";import{r as x}from"./index-570b25c1.js";import{W as q,E as V,h as E}from"./index-0545ccef.js";import{I as H}from"./index-df90da3e.js";import{a as C,I as L}from"./index-e2b59590.js";import{F as A}from"./FormControl-e8c4f774.js";import{I as c}from"./InputAdornment-4738448d.js";import{F as M}from"./FormHelperText-4ba98590.js";import"./_commonjsHelpers-042e6b4d.js";import"./faCircleArrowRight-45fe0977.js";import"./faMagnifyingGlass-482fd726.js";import"./SvgIcon-6af4d5b9.js";import"./clsx.m-fb33c42b.js";import"./createTheme-4dc6b23f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./useThemeProps-bb804320.js";import"./styled-d0245a8f.js";import"./generateUtilityClasses-145aac4e.js";import"./Button-03854916.js";import"./ButtonBase-ae02db0a.js";import"./emotion-react.browser.esm-325397be.js";import"./useForkRef-153a0a89.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./useEnhancedEffect-460150e6.js";import"./Tooltip-d34c04c4.js";import"./useTheme-108b79b5.js";import"./ownerDocument-613eb639.js";import"./index-8a077077.js";import"./useSlotProps-ff3a8657.js";import"./isHostComponent-73d6e646.js";import"./utils-78dc3aa5.js";import"./useControlled-9b1271e0.js";import"./useId-6f4bfce0.js";import"./IconButton-8720a92d.js";import"./LoadingButton-5b331dfb.js";import"./index-9681c8ff.js";import"./Box-a5c2ee7f.js";import"./extendSxProp-fa3ab054.js";import"./FormControlLabel-ecc014e3.js";import"./utils-3d35716f.js";import"./Typography-9728a9c9.js";import"./FormLabel-513408a3.js";import"./OutlinedInput-db8225ea.js";import"./ownerWindow-698471fc.js";import"./GlobalStyles-4d8fa0fc.js";import"./isMuiElement-9a8390c4.js";const S={sx:{padding:"8px 8px"}},_={sx:{padding:"16px 8px"}},P={marginRight:"4px",paddingTop:"4px"},r=x.forwardRef(({error:t,helperText:a,id:n,label:o,startAdornment:s,endAdornment:d,required:v,size:u,...p},F)=>{const I=`${n}-label`,m=`${n}-helper-text`;return f(A,{size:"small",children:[o&&e(C,{id:I,htmlFor:n,required:v,error:!!t,disabled:p.disabled,children:o}),e(L,{inputRef:F,id:n,"aria-describedby":m,error:!!t,inputProps:u==="medium"?_:S,startAdornment:s?e(c,{position:"start",children:s}):void 0,endAdornment:d?e(c,{position:"end",children:d}):void 0,size:u,...p}),f(M,{id:m,error:t,children:[t&&e(q,{sx:P}),a]})]})});r.displayName="TextField";try{r.displayName="TextField",r.__docgenInfo={description:"",displayName:"TextField",props:{label:{defaultValue:null,description:"The label of the `input`. It is only used for layout. The actual labelling\nis handled by `InputLabel`.",name:"label",required:!1,type:{name:"ReactNode"}},id:{defaultValue:null,description:"The id of the `input` element.",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:{value:"'text'"},description:"Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).",name:"type",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},onBlur:{defaultValue:null,description:"Callback fired when the `input` is blurred.\n\nNotice that the first argument (event) might be undefined.",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},onChange:{defaultValue:null,description:"Callback fired when the value is changed.\n@param event The event source of the callback.\nYou can pull out the new value by accessing `event.target.value` (string).",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},onInvalid:{defaultValue:null,description:"Callback fired when the `input` doesn't satisfy its constraints.",name:"onInvalid",required:!1,type:{name:"FormEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},disabled:{defaultValue:null,description:"If `true`, the component is disabled.\nThe prop defaults to the value (`false`) inherited from the parent FormControl component.",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"If `true`, the `input` will indicate an error.\nThe prop defaults to the value (`false`) inherited from the parent FormControl component.",name:"error",required:!1,type:{name:"boolean"}},margin:{defaultValue:null,description:"If `dense`, will adjust vertical spacing. This is normally obtained via context from\nFormControl.\nThe prop defaults to the value (`'none'`) inherited from the parent FormControl component.",name:"margin",required:!1,type:{name:'"none" | "dense"'}},defaultValue:{defaultValue:null,description:"The default value. Use when the component is not controlled.",name:"defaultValue",required:!1,type:{name:"unknown"}},placeholder:{defaultValue:null,description:"The short hint displayed in the `input` before the user enters a value.",name:"placeholder",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"The size of the component.",name:"size",required:!1,type:{name:'"small" | "medium"'}},autoFocus:{defaultValue:null,description:"If `true`, the `input` element is focused during the first mount.",name:"autoFocus",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The value of the `input` element, required for a controlled component.",name:"value",required:!1,type:{name:"unknown"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"Ref<any>"}},readOnly:{defaultValue:null,description:`It prevents the user from changing the value of the field
(not from interacting with the field).`,name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"If `true`, the `input` element is required.\nThe prop defaults to the value (`false`) inherited from the parent FormControl component.",name:"required",required:!1,type:{name:"boolean"}},autoComplete:{defaultValue:null,description:`This prop helps users to fill forms faster, especially on mobile devices.
The name can be confusing, as it's more like an autofill.
You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).`,name:"autoComplete",required:!1,type:{name:"string"}},endAdornment:{defaultValue:null,description:"End `InputAdornment` for this component.",name:"endAdornment",required:!1,type:{name:"ReactNode"}},renderSuffix:{defaultValue:null,description:"",name:"renderSuffix",required:!1,type:{name:'(state: { disabled?: boolean; error?: boolean; filled?: boolean; focused?: boolean; margin?: "none" | "dense" | "normal"; required?: boolean; startAdornment?: ReactNode; }) => ReactNode'}},rows:{defaultValue:null,description:"Number of rows to display when multiline option is set to true.",name:"rows",required:!1,type:{name:"string | number"}},maxRows:{defaultValue:null,description:"Maximum number of rows to display when multiline option is set to true.",name:"maxRows",required:!1,type:{name:"string | number"}},minRows:{defaultValue:null,description:"Minimum number of rows to display when multiline option is set to true.",name:"minRows",required:!1,type:{name:"string | number"}},startAdornment:{defaultValue:null,description:"Start `InputAdornment` for this component.",name:"startAdornment",required:!1,type:{name:"ReactNode"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}}}}}catch{}const He={title:"Components/TextField/TextField",component:r,tags:["autodocs"]},l={render:t=>e(r,{...t}),args:{label:"Field Label",id:"test"}},i={render:t=>{const[a,n]=x.useState(!1);return e(r,{...t,type:a?"text":"password",id:"password",endAdornment:e(H,{title:"password visibility toggle",onClick:()=>n(o=>!o),children:a?e(V,{}):e(E,{})})})},args:{label:"Password"}};var h,y,b;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: TextFieldProps) => <TextField {...args} />,
  args: {
    label: 'Field Label',
    id: 'test'
  }
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var g,T,w;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: TextFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);
    return <TextField {...args} type={showPassword ? 'text' : 'password'} id="password" endAdornment={<IconButton title="password visibility toggle" onClick={() => setShowPassword(prev => !prev)}>
            {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
          </IconButton>} />;
  },
  args: {
    label: 'Password'
  }
}`,...(w=(T=i.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const Ce=["_TextField","_PasswordField"];export{i as _PasswordField,l as _TextField,Ce as __namedExportsOrder,He as default};
//# sourceMappingURL=TextField.stories-4e728dd0.js.map
