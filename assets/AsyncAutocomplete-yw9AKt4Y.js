import{j as C}from"./jsx-runtime-CcL-W3nW.js";import{r as p}from"./index-DcWiA9TO.js";import{A as S}from"./Autocomplete-DWMJlShB.js";import{u as I}from"./useInfiniteQuery-BlwNwEaC.js";const A=(a,o)=>{const[i,r]=p.useState("");return p.useEffect(()=>{const s=setTimeout(()=>{r(a)},o);return()=>{clearTimeout(s)}},[a]),i},f=({loadOptions:a,limit:o=50,queryKey:i,ListboxProps:r,queryOptions:s,watchParams:b,debounceTimeout:g=350,FieldProps:t,onInputChange:d,...y})=>{const[v,m]=p.useState(""),T=e=>{var n;m(e.target.value),(n=t==null?void 0:t.InputProps)!=null&&n.onChange&&t.InputProps.onChange(e)},c=A(v,g),{isLoading:O,isFetching:h,data:l,hasNextPage:q,fetchNextPage:V}=I({queryKey:[i,o,c,b],queryFn:async({pageParam:e=0})=>a(e,o,c),staleTime:1e4,getNextPageParam:e=>e.hasMore?e.offset+o:!1,...s}),w=l!=null&&l.pages?l.pages.map(e=>e.options).flat():[],x=(e,n,u)=>{u==="clear"&&m(e.target.value),d&&d(e,n,u)};return C.jsx(S,{...y,onInputChange:x,FieldProps:{...t,InputProps:{...t==null?void 0:t.InputProps,onChange:T}},loading:h,options:w,ListboxProps:{...r,onScroll:async e=>{const n=e.currentTarget;n.scrollHeight-(n.scrollTop+n.clientHeight)<=5&&!O&&!h&&q&&V()}}})};try{f.displayName="AsyncAutocomplete",f.__docgenInfo={description:"",displayName:"AsyncAutocomplete",props:{loadOptions:{defaultValue:null,description:"Function that is called to fetch the options for the list. Returns a promise with options, hasMore, and offset",name:"loadOptions",required:!0,type:{name:"(offset: number, limit: number, inputValue?: string) => Promise<{ options: Option[]; hasMore: boolean; offset: number; }>"}},queryKey:{defaultValue:null,description:`The key used by
@tanstack /react-query to cache the response`,name:"queryKey",required:!0,type:{name:"string"}},limit:{defaultValue:{value:"50"},description:"The number of options to request from the api",name:"limit",required:!1,type:{name:"number"}},queryOptions:{defaultValue:null,description:"Config options for the useInfiniteQuery hook",name:"queryOptions",required:!1,type:{name:"UseInfiniteQueryOptions<{ options: Option[]; hasMore: boolean; offset: number; }, unknown, { options: Option[]; hasMore: boolean; offset: number; }, { options: Option[]; hasMore: boolean; offset: number; }, QueryKey>"}},watchParams:{defaultValue:null,description:"Object of parameters used for the cacheKey. Options are re-refetched when a value in the object changes",name:"watchParams",required:!1,type:{name:"Record<string, unknown>"}},debounceTimeout:{defaultValue:{value:"350"},description:"Time to wait before searching with the input value typed into the component",name:"debounceTimeout",required:!1,type:{name:"number"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<AutocompleteClasses>"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}},defaultValue:{defaultValue:{value:"props.multiple ? [] : null"},description:"The default value. Use when the component is not controlled.",name:"defaultValue",required:!1,type:{name:"AutocompleteValue<Option, Multiple, DisableClearable, FreeSolo>"}},id:{defaultValue:null,description:`This prop is used to help implement the accessibility logic.
If you don't provide an id it will fall back to a randomly generated one.`,name:"id",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`Callback fired when the value changes.
@param event The event source of the callback.
@param value The new value of the component.
@param reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
@param details`,name:"onChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, value: AutocompleteValue<Option, Multiple, DisableClearable, FreeSolo>, reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<...>) => void"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"(event: KeyboardEvent<HTMLDivElement> & { defaultMuiPrevented?: boolean; }) => void"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"Partial<AutocompleteSlots>"}},onClose:{defaultValue:null,description:'Callback fired when the popup requests to be closed.\nUse in controlled mode (see open).\n@param event The event source of the callback.\n@param reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.',name:"onClose",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, reason: AutocompleteCloseReason) => void"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:`The value of the autocomplete.

The value must have reference equality with the option in order to be selected.
You can customize the equality behavior with the \`isOptionEqualToValue\` prop.`,name:"value",required:!1,type:{name:"AutocompleteValue<Option, Multiple, DisableClearable, FreeSolo>"}},ChipProps:{defaultValue:null,description:"Props applied to the [`Chip`](https://mui.com/material-ui/api/chip/) element.\n@deprecated Use `slotProps.chip` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"ChipProps",required:!1,type:{name:'ChipOwnProps & CommonProps & Omit<any, "children" | "className" | "style" | "classes" | "color" | "sx" | "variant" | "label" | "tabIndex" | "disabled" | ... 6 more ... | "skipFocusWhenDisabled"> & { ...; }'}},disablePortal:{defaultValue:{value:"false"},description:"If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.",name:"disablePortal",required:!1,type:{name:"boolean"}},getLimitTagsText:{defaultValue:{value:"(more) => `+${more}`"},description:"The label to display when the tags are truncated (`limitTags`).\n@param more The number of truncated tags.\n@returns",name:"getLimitTagsText",required:!1,type:{name:"(more: number) => ReactNode"}},ListboxComponent:{defaultValue:{value:"'ul'"},description:"The component used to render the listbox.\n@deprecated Use `slotProps.listbox.component` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"ListboxComponent",required:!1,type:{name:"JSXElementConstructor<HTMLAttributes<HTMLElement>>"}},ListboxProps:{defaultValue:null,description:"Props applied to the Listbox element.\n@deprecated Use `slotProps.listbox` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.",name:"ListboxProps",required:!1,type:{name:"HTMLAttributes<HTMLUListElement> & { sx?: SxProps<Theme>; ref?: Ref<Element>; }"}},loadingText:{defaultValue:{value:"'Loading…'"},description:`Text to display when in a loading state.

For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).`,name:"loadingText",required:!1,type:{name:"ReactNode"}},limitTags:{defaultValue:{value:"-1"},description:"The maximum number of tags that will be visible when not focused.\nSet `-1` to disable the limit.",name:"limitTags",required:!1,type:{name:"number"}},noOptionsText:{defaultValue:{value:"'No options'"},description:`Text to display when there are no options.

For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).`,name:"noOptionsText",required:!1,type:{name:"ReactNode"}},readOnly:{defaultValue:{value:"false"},description:"If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.",name:"readOnly",required:!1,type:{name:"boolean"}},renderGroup:{defaultValue:null,description:`Render the group.
@param params The group to render.
@returns`,name:"renderGroup",required:!1,type:{name:"(params: AutocompleteRenderGroupParams) => ReactNode"}},renderOption:{defaultValue:null,description:`Render the option, use \`getOptionLabel\` by default.
@param props The props to apply on the li element.
@param option The option to render.
@param state The state of each option.
@param ownerState The state of the Autocomplete component.
@returns`,name:"renderOption",required:!1,type:{name:"(props: HTMLAttributes<HTMLLIElement> & { key: any; }, option: Option, state: AutocompleteRenderOptionState, ownerState: AutocompleteOwnerState<...>) => ReactNode"}},renderTags:{defaultValue:null,description:`Render the selected value.
@param value The \`value\` provided to the component.
@param getTagProps A tag props getter.
@param ownerState The state of the Autocomplete component.
@returns`,name:"renderTags",required:!1,type:{name:"(value: Option[], getTagProps: AutocompleteRenderGetTagProps, ownerState: AutocompleteOwnerState<Option, Multiple, DisableClearable, FreeSolo, ChipComponent>) => ReactNode"}},unstable_classNamePrefix:{defaultValue:{value:"'Mui'"},description:"@internal The prefix of the state class name, temporary for Joy UI",name:"unstable_classNamePrefix",required:!1,type:{name:"string"}},unstable_isActiveElementInListbox:{defaultValue:null,description:`@internal Temporary for Joy UI because the parent listbox is the document object
TODO v6: Normalize the logic and remove this param.`,name:"unstable_isActiveElementInListbox",required:!1,type:{name:"(listbox: RefObject<HTMLElement>) => boolean"}},autoComplete:{defaultValue:{value:"false"},description:"If `true`, the portion of the selected suggestion that the user hasn't typed,\nknown as the completion string, appears inline after the input cursor in the textbox.\nThe inline completion string is visually highlighted and has a selected state.",name:"autoComplete",required:!1,type:{name:"boolean"}},autoHighlight:{defaultValue:{value:"false"},description:"If `true`, the first option is automatically highlighted.",name:"autoHighlight",required:!1,type:{name:"boolean"}},autoSelect:{defaultValue:{value:"false"},description:`If \`true\`, the selected option becomes the value of the input
when the Autocomplete loses focus unless the user chooses
a different option or changes the character string in the input.

When using the \`freeSolo\` mode, the typed value will be the input value
if the Autocomplete loses focus without highlighting an option.`,name:"autoSelect",required:!1,type:{name:"boolean"}},blurOnSelect:{defaultValue:{value:"false"},description:"Control if the input should be blurred when an option is selected:\n\n- `false` the input is not blurred.\n- `true` the input is always blurred.\n- `touch` the input is blurred after a touch event.\n- `mouse` the input is blurred after a mouse event.",name:"blurOnSelect",required:!1,type:{name:'boolean | "mouse" | "touch"'}},clearOnBlur:{defaultValue:{value:"!props.freeSolo"},description:"If `true`, the input's text is cleared on blur if no value is selected.\n\nSet it to `true` if you want to help the user enter a new value.\nSet it to `false` if you want to help the user resume their search.",name:"clearOnBlur",required:!1,type:{name:"boolean"}},clearOnEscape:{defaultValue:{value:"false"},description:"If `true`, clear all values when the user presses escape and the popup is closed.",name:"clearOnEscape",required:!1,type:{name:"boolean"}},componentName:{defaultValue:null,description:"The component name that is using this hook. Used for warnings.",name:"componentName",required:!1,type:{name:"string"}},disableClearable:{defaultValue:{value:"false"},description:"If `true`, the input can't be cleared.",name:"disableClearable",required:!1,type:{name:"boolean"}},disableCloseOnSelect:{defaultValue:{value:"false"},description:"If `true`, the popup won't close when a value is selected.",name:"disableCloseOnSelect",required:!1,type:{name:"boolean"}},filterOptions:{defaultValue:{value:"createFilterOptions()"},description:`A function that determines the filtered options to be rendered on search.
@param options The options to render.
@param state The state of the component.
@returns`,name:"filterOptions",required:!1,type:{name:"(options: Option[], state: FilterOptionsState<Option>) => Option[]"}},filterSelectedOptions:{defaultValue:{value:"false"},description:"If `true`, hide the selected options from the list box.",name:"filterSelectedOptions",required:!1,type:{name:"boolean"}},freeSolo:{defaultValue:{value:"false"},description:"If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.",name:"freeSolo",required:!1,type:{name:"boolean"}},getOptionDisabled:{defaultValue:null,description:`Used to determine the disabled state for a given option.
@param option The option to test.
@returns`,name:"getOptionDisabled",required:!1,type:{name:"(option: Option) => boolean"}},getOptionKey:{defaultValue:null,description:`Used to determine the key for a given option.
This can be useful when the labels of options are not unique (since labels are used as keys by default).
@param option The option to get the key for.
@returns`,name:"getOptionKey",required:!1,type:{name:"(option: Option | AutocompleteFreeSoloValueMapping<FreeSolo>) => string | number"}},getOptionLabel:{defaultValue:{value:"(option) => option.label ?? option"},description:`Used to determine the string value for a given option.
It's used to fill the input (and the list box options if \`renderOption\` is not provided).

If used in free solo mode, it must accept both the type of the options and a string.
@param option
@returns`,name:"getOptionLabel",required:!1,type:{name:"(option: Option | AutocompleteFreeSoloValueMapping<FreeSolo>) => string"}},groupBy:{defaultValue:null,description:`If provided, the options will be grouped under the returned string.
The groupBy value is also used as the text for group headings when \`renderGroup\` is not provided.
@param option The Autocomplete option.
@returns`,name:"groupBy",required:!1,type:{name:"(option: Option) => string"}},inputValue:{defaultValue:null,description:"The input value.",name:"inputValue",required:!1,type:{name:"string"}},isOptionEqualToValue:{defaultValue:null,description:`Used to determine if the option represents the given value.
Uses strict equality by default.
⚠️ Both arguments need to be handled, an option can only match with one value.
@param option The option to test.
@param value The value to test against.
@returns`,name:"isOptionEqualToValue",required:!1,type:{name:"(option: Option, value: Option) => boolean"}},multiple:{defaultValue:{value:"false"},description:"If `true`, `value` must be an array and the menu will support multiple selections.",name:"multiple",required:!1,type:{name:"boolean"}},onHighlightChange:{defaultValue:null,description:'Callback fired when the highlight option changes.\n@param event The event source of the callback.\n@param option The highlighted option.\n@param reason Can be: `"keyboard"`, `"auto"`, `"mouse"`, `"touch"`.',name:"onHighlightChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, option: Option, reason: AutocompleteHighlightChangeReason) => void"}},onInputChange:{defaultValue:null,description:'Callback fired when the input value changes.\n@param event The event source of the callback.\n@param value The new value of the text input.\n@param reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`, `"blur"`, `"selectOption"`, `"removeOption"`',name:"onInputChange",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>, value: string, reason: AutocompleteInputChangeReason) => void"}},onOpen:{defaultValue:null,description:`Callback fired when the popup requests to be opened.
Use in controlled mode (see open).
@param event The event source of the callback.`,name:"onOpen",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>) => void"}},open:{defaultValue:null,description:"If `true`, the component is shown.",name:"open",required:!1,type:{name:"boolean"}},FieldProps:{defaultValue:null,description:"Props applied to the `TextField` component",name:"FieldProps",required:!1,type:{name:"TextFieldProps"}}}}}catch{}export{f as A};
