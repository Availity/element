import{F as c,a as w,R as V}from"./RadioGroup-BogPRRDq.js";import{j as n}from"./jsx-runtime-CcL-W3nW.js";import{b as q,E as I}from"./index-BTr7iyfv.js";import{F as T,S}from"./Select-hLZ2S4VH.js";import{r as b}from"./index-DcWiA9TO.js";import{a as x}from"./Input-CM9P-rNg.js";import{S as k}from"./Stack-BcsM4Vc0.js";import{s as u}from"./styled-CF1hcdwO.js";import{D as C}from"./Divider-jUONNV4j.js";import{f as l}from"./faCheck-B05F4ORy.js";import{S as g}from"./Switch-BqVUWLaW.js";try{c.displayName="FormGroup",c.__docgenInfo={description:`\`FormGroup\` wraps controls such as \`Checkbox\` and \`Switch\`.
It provides compact row layout.
For the \`Radio\`, you should be using the \`RadioGroup\` component instead of this one.

Demos:

- [Checkbox](https://mui.com/material-ui/react-checkbox/)
- [Switch](https://mui.com/material-ui/react-switch/)

API:

- [FormGroup API](https://mui.com/material-ui/api/form-group/)`,displayName:"FormGroup",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<FormGroupClasses>"}},row:{defaultValue:{value:"false"},description:"Display group of elements in a compact row.",name:"row",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}}}catch{}const m=({children:e,...t})=>n.jsxs(T,{...t,children:[n.jsx(q,{sx:{marginRight:"4px"},titleAccess:"Error","aria-hidden":!1}),e]});try{m.displayName="FormHelperText",m.__docgenInfo={description:"",displayName:"FormHelperText",props:{children:{defaultValue:null,description:"The content of the component.\n\nIf `' '` is provided, the component reserves one line height for displaying a future message.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<FormHelperTextClasses> & Partial<ClassNameMap<never>>"}},disabled:{defaultValue:null,description:"If `true`, the helper text should be displayed in a disabled state.",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"If `true`, helper text should be displayed in an error state.",name:"error",required:!1,type:{name:"boolean"}},filled:{defaultValue:null,description:"If `true`, the helper text should use filled classes key.",name:"filled",required:!1,type:{name:"boolean"}},focused:{defaultValue:null,description:"If `true`, the helper text should use focused classes key.",name:"focused",required:!1,type:{name:"boolean"}},margin:{defaultValue:null,description:"If `dense`, will adjust vertical spacing. This is normally obtained via context from\nFormControl.",name:"margin",required:!1,type:{name:'"dense"'}},required:{defaultValue:null,description:"If `true`, the helper text should use required classes key.",name:"required",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},variant:{defaultValue:null,description:"The variant to use.",name:"variant",required:!1,type:{name:'OverridableStringUnion<"filled" | "outlined" | "standard", FormHelperTextPropsVariantOverrides>'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLParagraphElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const f=e=>n.jsx(w,{...e,size:"small"});try{f.displayName="Radio",f.__docgenInfo={description:"",displayName:"Radio",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<RadioClasses>"}},onChange:{defaultValue:null,description:"Callback fired when the state is changed.\n@param event The event source of the callback.\nYou can pull out the new value by accessing `event.target.value` (string).\nYou can pull out the new checked state by accessing `event.target.checked` (boolean).",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, checked: boolean) => void"}},defaultChecked:{defaultValue:null,description:"The default checked state. Use when the component is not controlled.",name:"defaultChecked",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The id of the `input` element.",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},value:{defaultValue:null,description:"The value of the component. The DOM API casts this to a string.",name:"value",required:!1,type:{name:"unknown"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"<RadioButtonIcon />"},description:"The icon to display when the component is unchecked.",name:"icon",required:!1,type:{name:"ReactNode"}},required:{defaultValue:{value:"false"},description:"If `true`, the `input` element is required.",name:"required",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},inputProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"Ref<any>"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},edge:{defaultValue:{value:"false"},description:`If given, uses a negative margin to counteract the padding on one
side (this is often helpful for aligning the left or right
side of the icon with content above or below, without ruining the border
size and shape).`,name:"edge",required:!1,type:{name:'false | "start" | "end"'}},checked:{defaultValue:null,description:"If `true`, the component is checked.",name:"checked",required:!1,type:{name:"boolean"}},checkedIcon:{defaultValue:{value:"<RadioButtonIcon checked />"},description:"The icon to display when the component is checked.",name:"checkedIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const h=b.forwardRef(({children:e,...t},a)=>n.jsx(V,{...t,ref:a,children:e}));try{h.displayName="RadioGroup",h.__docgenInfo={description:"",displayName:"RadioGroup",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<FormGroupClasses>"}},defaultValue:{defaultValue:null,description:"The default value. Use when the component is not controlled.",name:"defaultValue",required:!1,type:{name:"any"}},onChange:{defaultValue:null,description:`Callback fired when a radio button is selected.
@param event The event source of the callback.
@param value The value of the selected radio button.
You can pull out the new value by accessing \`event.target.value\` (string).`,name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, value: string) => void"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},value:{defaultValue:null,description:"Value of the selected radio button. The DOM API casts this to a string.",name:"value",required:!1,type:{name:"any"}},name:{defaultValue:null,description:`The name used to reference the value of the control.
If you don't provide this prop, it falls back to a randomly generated name.`,name:"name",required:!1,type:{name:"string"}},row:{defaultValue:{value:"false"},description:"Display group of elements in a compact row.",name:"row",required:!1,type:{name:"boolean"}}}}}catch{}const i=u(C,{name:"MuiSelect",slot:"AvEndAdornmentDivider",overridesResolver:(e,t)=>t.avEndAdornmentDivider})({}),r=u(I,{name:"MuiSelect",slot:"AvExpandIcon",overridesResolver:(e,t)=>t.avExpandIcon})({}),E=e=>n.jsxs(k,{...e,direction:"row",sx:{height:"100%",top:"unset!important"},children:[n.jsx(i,{orientation:"vertical",className:"MuiSelect-avEndAdornmentDivider"}),n.jsx(r,{className:"MuiSelect-avExpandIcon"})]}),o={IconComponent:E,...x},s=(e,t,a)=>{if(t&&a===void 0){const d=()=>{t(!0)},p=()=>{t(!1)};return e?{onOpen:d,onClose:p}:{onOpen:d,onClose:p,SelectDisplayProps:{"aria-controls":""}}}return a?{}:{SelectDisplayProps:{"aria-controls":""}}},y=e=>{const[t,a]=b.useState(!1);return n.jsx(S,{...e,...o,...s(t,a,e==null?void 0:e.open)})};try{i.displayName="SelectDivider",i.__docgenInfo={description:"",displayName:"SelectDivider",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<DividerClasses> & Partial<ClassNameMap<never>>"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLHRElement>"}},variant:{defaultValue:{value:"'fullWidth'"},description:"The variant to use.",name:"variant",required:!1,type:{name:'OverridableStringUnion<"fullWidth" | "inset" | "middle", DividerPropsVariantOverrides>'}},textAlign:{defaultValue:{value:"'center'"},description:"The text alignment.",name:"textAlign",required:!1,type:{name:'"center" | "left" | "right"'}},orientation:{defaultValue:{value:"'horizontal'"},description:"The component orientation.",name:"orientation",required:!1,type:{name:'"horizontal" | "vertical"'}},absolute:{defaultValue:{value:"false"},description:"Absolutely position the element.",name:"absolute",required:!1,type:{name:"boolean"}},flexItem:{defaultValue:{value:"false"},description:"If `true`, a vertical divider will have the correct height when used in flex container.\n(By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)",name:"flexItem",required:!1,type:{name:"boolean"}},light:{defaultValue:{value:"false"},description:"If `true`, the divider will have a lighter color.\n@deprecated Use <Divider sx={{ opacity: 0.6 }} /> (or any opacity or color) instead. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"light",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}try{r.displayName="SelectExpandIcon",r.__docgenInfo={description:"",displayName:"SelectExpandIcon",props:{classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<SvgIconClasses> & Partial<ClassNameMap<never>>"}},children:{defaultValue:null,description:"Node passed into the SVG element.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},color:{defaultValue:{value:"'inherit'"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
You can use the \`htmlColor\` prop to apply a color attribute to the SVG element.`,name:"color",required:!1,type:{name:'OverridableStringUnion<"disabled" | "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | "action", SvgIconPropsColorOverrides>'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<SVGSVGElement>"}},fontSize:{defaultValue:{value:"'inherit'"},description:"The fontSize applied to the icon.",name:"fontSize",required:!1,type:{name:'"small" | "inherit" | "medium" | "large" | "xxsmall" | "xsmall" | "xlarge"'}},shapeRendering:{defaultValue:null,description:`The shape-rendering attribute. The behavior of the different options is described on the
[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
If you are having issues with blurry icons you should investigate this prop.`,name:"shapeRendering",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},viewBox:{defaultValue:{value:"'0 0 24 24'"},description:`Allows you to redefine what the coordinates without units mean inside an SVG element.
For example, if the SVG element is 500 (width) by 200 (height),
and you pass viewBox="0 0 50 20",
this means that the coordinates inside the SVG will go from the top left corner (0,0)
to bottom right (50,20) and each unit will be worth 10px.`,name:"viewBox",required:!1,type:{name:"string"}},htmlColor:{defaultValue:null,description:"Applies a color attribute to the SVG element.",name:"htmlColor",required:!1,type:{name:"string"}},inheritViewBox:{defaultValue:{value:"false"},description:"If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`\nprop will be ignored.\nUseful when you want to reference a custom `component` and have `SvgIcon` pass that\n`component`'s viewBox to the root node.",name:"inheritViewBox",required:!1,type:{name:"boolean"}},titleAccess:{defaultValue:null,description:`Provides a human-readable title for the element that contains it.
https://www.w3.org/TR/SVG-access/#Equivalent`,name:"titleAccess",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}try{o.displayName="SelectPropOverrides",o.__docgenInfo={description:"Availity predefined overrides for Select component",displayName:"SelectPropOverrides",props:{}}}catch{}try{s.displayName="SelectAccessibilityOverrides",s.__docgenInfo={description:"Accessibility additions to resolve Level Access violations. Requires tracking of open state for updates.",displayName:"SelectAccessibilityOverrides",props:{}}}catch{}try{y.displayName="Select",y.__docgenInfo={description:"",displayName:"Select",props:{fullWidth:{defaultValue:{value:"false"},description:"If `true`, the `input` will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"The size of the component.",name:"size",required:!1,type:{name:'OverridableStringUnion<"small" | "medium", InputBasePropsSizeOverrides>'}},classes:{defaultValue:{value:"{}"},description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<SelectClasses>"}},defaultValue:{defaultValue:null,description:"The default value. Use when the component is not controlled.",name:"defaultValue",required:!1,type:{name:"unknown"}},onChange:{defaultValue:null,description:"Callback fired when a menu item is selected.\n@param event The event source of the callback.\nYou can pull out the new value by accessing `event.target.value` (any).\n**Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.\n@param child The react element that was selected when `native` is `false` (default).",name:"onChange",required:!1,type:{name:"(event: SelectChangeEvent<unknown>, child: ReactNode) => void"}},children:{defaultValue:null,description:"The option elements to populate the select with.\nCan be some `MenuItem` when `native` is false and `option` when `native` is true.\n\n⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.",name:"children",required:!1,type:{name:"ReactNode"}},autoFocus:{defaultValue:null,description:"If `true`, the `input` element is focused during the first mount.",name:"autoFocus",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The `id` of the wrapper element or the `select` element when `native`.",name:"id",required:!1,type:{name:"string"}},color:{defaultValue:null,description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
The prop defaults to the value (\`'primary'\`) inherited from the parent FormControl component.`,name:"color",required:!1,type:{name:'OverridableStringUnion<"primary" | "secondary" | "error" | "info" | "success" | "warning", InputBasePropsColorOverrides>'}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},onBlur:{defaultValue:null,description:"Callback fired when the `input` is blurred.\n\nNotice that the first argument (event) might be undefined.",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},onInvalid:{defaultValue:null,description:"Callback fired when the `input` doesn't satisfy its constraints.",name:"onInvalid",required:!1,type:{name:"FormEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>"}},input:{defaultValue:null,description:"An `Input` element; does not have to be a material-ui specific `Input`.",name:"input",required:!1,type:{name:"ReactElement<unknown, any>"}},label:{defaultValue:null,description:"See [OutlinedInput#label](https://mui.com/material-ui/api/outlined-input/#props)\nThe label of the `input`. It is only used for layout. The actual labelling\nis handled by `InputLabel`.",name:"label",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"If `true`, the component is disabled.\nThe prop defaults to the value (`false`) inherited from the parent FormControl component.",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:`It prevents the user from changing the value of the field
(not from interacting with the field).`,name:"readOnly",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},autoComplete:{defaultValue:null,description:`This prop helps users to fill forms faster, especially on mobile devices.
The name can be confusing, as it's more like an autofill.
You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).`,name:"autoComplete",required:!1,type:{name:"string"}},multiple:{defaultValue:{value:"false"},description:"If `true`, `value` must be an array and the menu will support multiple selections.",name:"multiple",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback fired when the component requests to be closed.\nUse it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).\n@param event The event source of the callback.",name:"onClose",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>) => void"}},onOpen:{defaultValue:null,description:"Callback fired when the component requests to be opened.\nUse it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).\n@param event The event source of the callback.",name:"onOpen",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>) => void"}},open:{defaultValue:null,description:"If `true`, the component is shown.\nYou can only use it when the `native` prop is `false` (default).",name:"open",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The `input` value. Providing an empty string will select no options.\nSet to an empty string `''` if you don't want any of the available options to be selected.\n\nIf the value is an object it must have reference equality with the option in order to be selected.\nIf the value is not an object, the string representation must match with the string representation of the option in order to be selected.",name:"value",required:!1,type:{name:"unknown"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"If `dense`, will adjust vertical spacing. This is normally obtained via context from\nFormControl.\nThe prop defaults to the value (`'none'`) inherited from the parent FormControl component.",name:"margin",required:!1,type:{name:'"none" | "dense"'}},error:{defaultValue:null,description:"If `true`, the `input` will indicate an error.\nThe prop defaults to the value (`false`) inherited from the parent FormControl component.",name:"error",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"If `true`, the `input` element is required.\nThe prop defaults to the value (`false`) inherited from the parent FormControl component.",name:"required",required:!1,type:{name:"boolean"}},inputProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.\nWhen `native` is `true`, the attributes are applied on the `select` element.",name:"inputProps",required:!1,type:{name:"InputBaseComponentProps"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"Ref<any>"}},multiline:{defaultValue:{value:"false"},description:"If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.",name:"multiline",required:!1,type:{name:"boolean"}},rows:{defaultValue:null,description:"Number of rows to display when multiline option is set to true.",name:"rows",required:!1,type:{name:"string | number"}},maxRows:{defaultValue:null,description:"Maximum number of rows to display when multiline option is set to true.",name:"maxRows",required:!1,type:{name:"string | number"}},minRows:{defaultValue:null,description:"Minimum number of rows to display when multiline option is set to true.",name:"minRows",required:!1,type:{name:"string | number"}},type:{defaultValue:{value:"'text'"},description:"Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).",name:"type",required:!1,type:{name:"string"}},disableInjectingGlobalStyles:{defaultValue:{value:"false"},description:"If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.\nThis option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.",name:"disableInjectingGlobalStyles",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:null,description:"End `InputAdornment` for this component.",name:"endAdornment",required:!1,type:{name:"ReactNode"}},inputComponent:{defaultValue:{value:"'input'"},description:"The component used for the `input` element.\nEither a string to use a HTML element or a component.",name:"inputComponent",required:!1,type:{name:"ElementType<InputBaseComponentProps, keyof IntrinsicElements>"}},renderSuffix:{defaultValue:null,description:"",name:"renderSuffix",required:!1,type:{name:'(state: { disabled?: boolean; error?: boolean; filled?: boolean; focused?: boolean; margin?: "none" | "dense" | "normal"; required?: boolean; startAdornment?: ReactNode; }) => ReactNode'}},startAdornment:{defaultValue:null,description:"Start `InputAdornment` for this component.",name:"startAdornment",required:!1,type:{name:"ReactNode"}},disableUnderline:{defaultValue:{value:`false
false`},description:"If `true`, the input will not have an underline.\nIf `true`, the `input` will not have an underline.",name:"disableUnderline",required:!1,type:{name:"boolean"}},autoWidth:{defaultValue:{value:"false"},description:"If `true`, the width of the popover will automatically be set according to the items inside the\nmenu, otherwise it will be at least the width of the select input.",name:"autoWidth",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"false"},description:"If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).\nYou can only use it when the `native` prop is `false` (default).",name:"defaultOpen",required:!1,type:{name:"boolean"}},displayEmpty:{defaultValue:{value:"false"},description:`If \`true\`, a value is displayed even if no items are selected.

In order to display a meaningful value, a function can be passed to the \`renderValue\` prop which
returns the value to be displayed when no items are selected.

⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
The label should either be hidden or forced to a shrunk state.`,name:"displayEmpty",required:!1,type:{name:"boolean"}},IconComponent:{defaultValue:{value:"ArrowDropDownIcon"},description:"The icon that displays the arrow.",name:"IconComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},labelId:{defaultValue:null,description:`The ID of an element that acts as an additional label. The Select will
be labelled by the additional label and the selected value.`,name:"labelId",required:!1,type:{name:"string"}},MenuProps:{defaultValue:null,description:"Props applied to the [`Menu`](https://mui.com/material-ui/api/menu/) element.",name:"MenuProps",required:!1,type:{name:"Partial<MenuProps>"}},native:{defaultValue:{value:"false"},description:"If `true`, the component uses a native `select` element.",name:"native",required:!1,type:{name:"boolean"}},renderValue:{defaultValue:null,description:"Render the selected value.\nYou can only use it when the `native` prop is `false` (default).\n@param value The `value` provided to the component.\n@returns",name:"renderValue",required:!1,type:{name:"(value: unknown) => ReactNode"}},SelectDisplayProps:{defaultValue:null,description:"Props applied to the clickable div element.",name:"SelectDisplayProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement>"}}}}}catch{}try{SelectChangeEvent.displayName="SelectChangeEvent",SelectChangeEvent.__docgenInfo={description:"The change can be caused by different kind of events.\nThe type of event depends on what caused the change.\nFor example, when the browser auto-fills the `Select` you'll receive a `React.ChangeEvent`.",displayName:"SelectChangeEvent",props:{}}}catch{}const _=u(g,{name:"AvSwitchCheckedIcon",slot:"root"})(({theme:e})=>({"& .Mui-checked":{"+ .MuiSwitch-track":{borderRadius:22/2,"&::before":{content:'""',position:"absolute",top:"50%",transform:"translateY(-50%)",width:12,height:12,backgroundImage:`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 ${l.width} ${l.height}"><path fill="${encodeURIComponent(e.palette.getContrastText(e.palette.primary.main))}" d="${l.svgPathData}"/></svg>')`}}}})),v=({showCheckedIcon:e,...t})=>e&&t.size==="small"?n.jsx(_,{...t}):n.jsx(g,{...t});try{v.displayName="Switch",v.__docgenInfo={description:"",displayName:"Switch",props:{showCheckedIcon:{defaultValue:null,description:"When size is set to `small`, setting `showCheckedIcon` to `true` will display a checkmark in the track when the switch is checked.",name:"showCheckedIcon",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense switch styling.",name:"size",required:!1,type:{name:'OverridableStringUnion<"small" | "medium", SwitchPropsSizeOverrides>'}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<SwitchClasses>"}},onChange:{defaultValue:null,description:"Callback fired when the state is changed.\n@param event The event source of the callback.\nYou can pull out the new value by accessing `event.target.value` (string).\nYou can pull out the new checked state by accessing `event.target.checked` (boolean).",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>, checked: boolean) => void"}},defaultChecked:{defaultValue:null,description:"The default checked state. Use when the component is not controlled.",name:"defaultChecked",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The id of the `input` element.",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},color:{defaultValue:{value:"'primary'"},description:`The color of the component.
It supports both default and custom theme colors, which can be added as shown in the
[palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).`,name:"color",required:!1,type:{name:'OverridableStringUnion<"primary" | "secondary" | "error" | "info" | "success" | "warning" | "default", SwitchPropsColorOverrides>'}},disabled:{defaultValue:null,description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},value:{defaultValue:null,description:`The value of the component. The DOM API casts this to a string.
The browser uses "on" as the default value.`,name:"value",required:!1,type:{name:"unknown"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"The icon to display when the component is unchecked.",name:"icon",required:!1,type:{name:"ReactNode"}},required:{defaultValue:{value:"false"},description:"If `true`, the `input` element is required.",name:"required",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},inputProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},inputRef:{defaultValue:null,description:"Pass a ref to the `input` element.",name:"inputRef",required:!1,type:{name:"Ref<any>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"HTMLInputTypeAttribute"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},edge:{defaultValue:{value:"false"},description:`If given, uses a negative margin to counteract the padding on one
side (this is often helpful for aligning the left or right
side of the icon with content above or below, without ruining the border
size and shape).`,name:"edge",required:!1,type:{name:'false | "start" | "end"'}},checked:{defaultValue:null,description:"If `true`, the component is checked.",name:"checked",required:!1,type:{name:"boolean"}}}}}catch{}export{m as F,f as R,y as S,h as a,v as b};
