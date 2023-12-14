import{j as y,F as T,a}from"./jsx-runtime-a3bcee63.js";import{r as x}from"./index-570b25c1.js";import{T as V}from"./index-f5626941.js";import{S as q,a as S}from"./index-50383046.js";import{M as w}from"./IconButton-3fd19b93.js";import{M as C}from"./Autocomplete-e4071c8e.js";import"./_commonjsHelpers-042e6b4d.js";import"./TextField-e8a3b764.js";import"./createTheme-3fee607a.js";import"./clsx-b831246b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./styled-523cb007.js";import"./useThemeProps-98dc6282.js";import"./generateUtilityClasses-b58f947a.js";import"./FormLabel-d63492ff.js";import"./utils-3d35716f.js";import"./isMuiElement-6907f060.js";import"./useId-6f4bfce0.js";import"./Select-a4487aaa.js";import"./react-is.production.min-a192e302.js";import"./Menu-5950de0d.js";import"./useTheme-c07bb8e7.js";import"./Popover-3b512651.js";import"./Modal-a1db681c.js";import"./Backdrop-4a58ec86.js";import"./utils-1ac07bae.js";import"./TransitionGroupContext-c71596b3.js";import"./index-8a077077.js";import"./useForkRef-153a0a89.js";import"./objectWithoutPropertiesLoose-b6174fb2.js";import"./ownerDocument-613eb639.js";import"./ownerWindow-03d1c82d.js";import"./useEventCallback-e1b9edb9.js";import"./useEnhancedEffect-460150e6.js";import"./useSlotProps-039d2b0a.js";import"./createChainedFunction-0bab83cf.js";import"./Grow-8a00b99f.js";import"./Paper-389d56e7.js";import"./debounce-517eeb3c.js";import"./useControlled-9b1271e0.js";import"./createSvgIcon-ca656bec.js";import"./SvgIcon-075b1db6.js";import"./OutlinedInput-0cb1099f.js";import"./GlobalStyles-5f9800bb.js";import"./emotion-react.browser.esm-b00e6d55.js";import"./FormHelperText-e428b621.js";import"./index-9681c8ff.js";import"./index-53288845.js";import"./faCircleArrowRight-f69b7367.js";import"./faMagnifyingGlass-482fd726.js";import"./index-6cb0af17.js";import"./Button-af0ca45f.js";import"./ButtonBase-44753119.js";import"./useIsFocusVisible-5e7b1ff1.js";import"./Tooltip-cae7e212.js";import"./LoadingButton-1ec35b70.js";import"./extends-90dea224.js";import"./CircularProgress-96ade162.js";import"./Box-51bd3ea0.js";import"./extendSxProp-b1abb964.js";import"./FormControlLabel-1ceb9da1.js";import"./Typography-f453bb5c.js";import"./Stack-3fcb8940.js";import"./styled-5c6c15e1.js";import"./Divider-2d957b7a.js";import"./dividerClasses-871b72e6.js";import"./Close-41aa9caa.js";import"./usePreviousProps-9cd3673d.js";import"./Chip-e09b065a.js";const O=x.forwardRef((e,i)=>y(T,{children:[a(q,{orientation:"vertical",className:"MuiSelect-avEndAdornmentDivider"}),a(w,{...e,ref:i})]})),o=({FieldProps:e,...i})=>{const b={fullWidth:!0,size:"small"},v=t=>({InputProps:{...e==null?void 0:e.InputProps,...t==null?void 0:t.InputProps},inputProps:{...e==null?void 0:e.inputProps,...t==null?void 0:t.inputProps}});return a(C,{renderInput:t=>a(V,{...t,...v(t),...e}),popupIcon:a(S,{className:"MuiSelect-avExpandIcon"}),slotProps:{popupIndicator:{component:O}},...i,...b})};try{o.displayName="Autocomplete",o.__docgenInfo={description:"",displayName:"Autocomplete",props:{FieldProps:{defaultValue:null,description:"Props applied to the `TextField` component",name:"FieldProps",required:!1,type:{name:"TextFieldProps"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AutocompleteClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},defaultValue:{defaultValue:{value:"props.multiple ? [] : null"},description:"The default value. Use when the component is not controlled.",name:"defaultValue",required:!1,type:{name:"AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>"}},id:{defaultValue:null,description:`This prop is used to help implement the accessibility logic.
If you don't provide an id it will fall back to a randomly generated one.`,name:"id",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`Callback fired when the value changes.
@param event The event source of the callback.
@param value The new value of the component.
@param reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
@param details`,name:"onChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, value: AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>, reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<...>) => void"}},onClose:{defaultValue:null,description:'Callback fired when the popup requests to be closed.\nUse in controlled mode (see open).\n@param event The event source of the callback.\n@param reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.',name:"onClose",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, reason: AutocompleteCloseReason) => void"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:`The value of the autocomplete.

The value must have reference equality with the option in order to be selected.
You can customize the equality behavior with the \`isOptionEqualToValue\` prop.`,name:"value",required:!1,type:{name:"AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!1,type:{name:"boolean"}},ChipProps:{defaultValue:null,description:"Props applied to the [`Chip`](/material-ui/api/chip/) element.",name:"ChipProps",required:!1,type:{name:'ChipOwnProps & CommonProps & Omit<any, "variant" | "color" | "classes" | "className" | "style" | "children" | "sx" | "label" | "tabIndex" | "icon" | ... 6 more ... | "skipFocusWhenDisabled"> & { ...; }'}},disablePortal:{defaultValue:{value:"false"},description:"If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.",name:"disablePortal",required:!1,type:{name:"boolean"}},getLimitTagsText:{defaultValue:{value:"(more) => `+${more}`"},description:"The label to display when the tags are truncated (`limitTags`).\n@param more The number of truncated tags.\n@returns",name:"getLimitTagsText",required:!1,type:{name:"(more: number) => ReactNode"}},ListboxComponent:{defaultValue:{value:"'ul'"},description:"The component used to render the listbox.",name:"ListboxComponent",required:!1,type:{name:"JSXElementConstructor<HTMLAttributes<HTMLElement>>"}},ListboxProps:{defaultValue:null,description:"Props applied to the Listbox element.",name:"ListboxProps",required:!1,type:{name:"HTMLAttributes<HTMLUListElement> & { sx?: SxProps<Theme>; ref?: Ref<Element>; }"}},loading:{defaultValue:{value:"false"},description:"If `true`, the component is in a loading state.\nThis shows the `loadingText` in place of suggestions (only if there are no suggestions to show, e.g. `options` are empty).",name:"loading",required:!1,type:{name:"boolean"}},loadingText:{defaultValue:{value:"'Loading…'"},description:`Text to display when in a loading state.

For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).`,name:"loadingText",required:!1,type:{name:"ReactNode"}},limitTags:{defaultValue:{value:"-1"},description:"The maximum number of tags that will be visible when not focused.\nSet `-1` to disable the limit.",name:"limitTags",required:!1,type:{name:"number"}},noOptionsText:{defaultValue:{value:"'No options'"},description:`Text to display when there are no options.

For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).`,name:"noOptionsText",required:!1,type:{name:"ReactNode"}},readOnly:{defaultValue:{value:"false"},description:"If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.",name:"readOnly",required:!1,type:{name:"boolean"}},renderGroup:{defaultValue:null,description:`Render the group.
@param params The group to render.
@returns`,name:"renderGroup",required:!1,type:{name:"(params: AutocompleteRenderGroupParams) => ReactNode"}},renderOption:{defaultValue:null,description:`Render the option, use \`getOptionLabel\` by default.
@param props The props to apply on the li element.
@param option The option to render.
@param state The state of each option.
@param ownerState The state of the Autocomplete component.
@returns`,name:"renderOption",required:!1,type:{name:"(props: HTMLAttributes<HTMLLIElement>, option: T, state: AutocompleteRenderOptionState, ownerState: AutocompleteOwnerState<T, Multiple, DisableClearable, FreeSolo, ChipComponent>) => ReactNode"}},renderTags:{defaultValue:null,description:`Render the selected value.
@param value The \`value\` provided to the component.
@param getTagProps A tag props getter.
@param ownerState The state of the Autocomplete component.
@returns`,name:"renderTags",required:!1,type:{name:"(value: T[], getTagProps: AutocompleteRenderGetTagProps, ownerState: AutocompleteOwnerState<T, Multiple, DisableClearable, FreeSolo, ChipComponent>) => ReactNode"}},unstable_classNamePrefix:{defaultValue:{value:"'Mui'"},description:"@internal The prefix of the state class name, temporary for Joy UI",name:"unstable_classNamePrefix",required:!1,type:{name:"string"}},unstable_isActiveElementInListbox:{defaultValue:null,description:`@internal Temporary for Joy UI because the parent listbox is the document object
TODO v6: Normalize the logic and remove this param.`,name:"unstable_isActiveElementInListbox",required:!1,type:{name:"(listbox: RefObject<HTMLElement>) => boolean"}},autoComplete:{defaultValue:{value:"false"},description:"If `true`, the portion of the selected suggestion that has not been typed by the user,\nknown as the completion string, appears inline after the input cursor in the textbox.\nThe inline completion string is visually highlighted and has a selected state.",name:"autoComplete",required:!1,type:{name:"boolean"}},autoHighlight:{defaultValue:{value:"false"},description:"If `true`, the first option is automatically highlighted.",name:"autoHighlight",required:!1,type:{name:"boolean"}},autoSelect:{defaultValue:{value:"false"},description:`If \`true\`, the selected option becomes the value of the input
when the Autocomplete loses focus unless the user chooses
a different option or changes the character string in the input.

When using \`freeSolo\` mode, the typed value will be the input value
if the Autocomplete loses focus without highlighting an option.`,name:"autoSelect",required:!1,type:{name:"boolean"}},blurOnSelect:{defaultValue:{value:"false"},description:"Control if the input should be blurred when an option is selected:\n\n- `false` the input is not blurred.\n- `true` the input is always blurred.\n- `touch` the input is blurred after a touch event.\n- `mouse` the input is blurred after a mouse event.",name:"blurOnSelect",required:!1,type:{name:'boolean | "touch" | "mouse"'}},clearOnBlur:{defaultValue:{value:"!props.freeSolo"},description:"If `true`, the input's text is cleared on blur if no value is selected.\n\nSet to `true` if you want to help the user enter a new value.\nSet to `false` if you want to help the user resume their search.",name:"clearOnBlur",required:!1,type:{name:"boolean"}},clearOnEscape:{defaultValue:{value:"false"},description:"If `true`, clear all values when the user presses escape and the popup is closed.",name:"clearOnEscape",required:!1,type:{name:"boolean"}},componentName:{defaultValue:null,description:"The component name that is using this hook. Used for warnings.",name:"componentName",required:!1,type:{name:"string"}},disableClearable:{defaultValue:{value:"false"},description:"If `true`, the input can't be cleared.",name:"disableClearable",required:!1,type:{name:"boolean"}},disableCloseOnSelect:{defaultValue:{value:"false"},description:"If `true`, the popup won't close when a value is selected.",name:"disableCloseOnSelect",required:!1,type:{name:"boolean"}},disableListWrap:{defaultValue:{value:"false"},description:"If `true`, the list box in the popup will not wrap focus.",name:"disableListWrap",required:!1,type:{name:"boolean"}},filterOptions:{defaultValue:{value:"createFilterOptions()"},description:`A function that determines the filtered options to be rendered on search.
@param options The options to render.
@param state The state of the component.
@returns`,name:"filterOptions",required:!1,type:{name:"(options: T[], state: FilterOptionsState<T>) => T[]"}},filterSelectedOptions:{defaultValue:{value:"false"},description:"If `true`, hide the selected options from the list box.",name:"filterSelectedOptions",required:!1,type:{name:"boolean"}},freeSolo:{defaultValue:{value:"false"},description:"If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.",name:"freeSolo",required:!1,type:{name:"boolean"}},getOptionDisabled:{defaultValue:null,description:`Used to determine the disabled state for a given option.
@param option The option to test.
@returns`,name:"getOptionDisabled",required:!1,type:{name:"(option: T) => boolean"}},getOptionLabel:{defaultValue:{value:"(option) => option.label ?? option"},description:`Used to determine the string value for a given option.
It's used to fill the input (and the list box options if \`renderOption\` is not provided).

If used in free solo mode, it must accept both the type of the options and a string.
@param option
@returns`,name:"getOptionLabel",required:!1,type:{name:"(option: T | AutocompleteFreeSoloValueMapping<FreeSolo>) => string"}},groupBy:{defaultValue:null,description:`If provided, the options will be grouped under the returned string.
The groupBy value is also used as the text for group headings when \`renderGroup\` is not provided.
@param options The options to group.
@returns`,name:"groupBy",required:!1,type:{name:"(option: T) => string"}},inputValue:{defaultValue:null,description:"The input value.",name:"inputValue",required:!1,type:{name:"string"}},isOptionEqualToValue:{defaultValue:null,description:`Used to determine if the option represents the given value.
Uses strict equality by default.
⚠️ Both arguments need to be handled, an option can only match with one value.
@param option The option to test.
@param value The value to test against.
@returns`,name:"isOptionEqualToValue",required:!1,type:{name:"(option: T, value: T) => boolean"}},multiple:{defaultValue:{value:"false"},description:"If `true`, `value` must be an array and the menu will support multiple selections.",name:"multiple",required:!1,type:{name:"boolean"}},onHighlightChange:{defaultValue:null,description:'Callback fired when the highlight option changes.\n@param event The event source of the callback.\n@param option The highlighted option.\n@param reason Can be: `"keyboard"`, `"auto"`, `"mouse"`, `"touch"`.',name:"onHighlightChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, option: T, reason: AutocompleteHighlightChangeReason) => void"}},onInputChange:{defaultValue:null,description:'Callback fired when the input value changes.\n@param event The event source of the callback.\n@param value The new value of the text input.\n@param reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.',name:"onInputChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, value: string, reason: AutocompleteInputChangeReason) => void"}},onOpen:{defaultValue:null,description:`Callback fired when the popup requests to be opened.
Use in controlled mode (see open).
@param event The event source of the callback.`,name:"onOpen",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>) => void"}},options:{defaultValue:null,description:"Array of options.",name:"options",required:!0,type:{name:"readonly T[]"}}}}}catch{}const ze={title:"Components/Autocomplete/Autocomplete",component:o,tags:["autodocs"],args:{options:["1","2","3","4","5"]},argTypes:{multiple:{table:{disable:!0}}}},n={render:e=>a(o,{...e}),args:{FieldProps:{label:"Autocomplete",helperText:"Helper Text",fullWidth:!1}}},l={render:e=>a(o,{...e}),args:{FieldProps:{label:"Single Select",helperText:"Helper Text",fullWidth:!1}}},r={render:e=>a(o,{...e}),args:{FieldProps:{label:"Multi Select",helperText:"Helper Text",fullWidth:!1},multiple:!0}};var s,p,u;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <Autocomplete {...args} />,
  args: {
    FieldProps: {
      label: 'Autocomplete',
      helperText: 'Helper Text',
      fullWidth: false
    }
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,m,c;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Autocomplete {...args} />,
  args: {
    FieldProps: {
      label: 'Single Select',
      helperText: 'Helper Text',
      fullWidth: false
    }
  }
}`,...(c=(m=l.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var h,f,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Autocomplete {...args} />,
  args: {
    FieldProps: {
      label: 'Multi Select',
      helperText: 'Helper Text',
      fullWidth: false
    },
    multiple: true
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const Be=["_Autocomplete","_Single","_Multi"];export{n as _Autocomplete,r as _Multi,l as _Single,Be as __namedExportsOrder,ze as default};
//# sourceMappingURL=Autocomplete.stories-9100b0a7.js.map
