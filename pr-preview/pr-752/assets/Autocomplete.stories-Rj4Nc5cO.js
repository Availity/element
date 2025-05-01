import{j as i}from"./jsx-runtime-BTJTZTIL.js";import{r as k}from"./index-BgYLq7fD.js";import{A as p}from"./Autocomplete-CjVTJCKF.js";import{e as J}from"./index-YXU10wut.js";import{T as U}from"./index-CiN-zn2K.js";import{c as $}from"./index-CmMPo3bx.js";import{I as K}from"./InputAdornment-D5eTYx4L.js";import{c as Q}from"./Autocomplete-Dm71EoBJ.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./IconButton-BFylt634.js";import"./generateUtilityClass-GxznSYtt.js";import"./identifier-CHUoN9pF.js";import"./memoTheme-BLrvrRyo.js";import"./styled-FZfCzBz5.js";import"./DefaultPropsProvider-ArLX9SCD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-aotQgNYZ.js";import"./useId-DIK8ekB4.js";import"./ButtonBase-DwAEbHIm.js";import"./useTimeout-iC_34LsC.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./emotion-react.browser.esm-DW5OmoQI.js";import"./useForkRef-Dz4aGlyk.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-o1goEU37.js";import"./index-DJKl12U0.js";import"./index-k9OtkSpc.js";import"./Tooltip-Xh9QA514.js";import"./index-DyJdRKzS.js";import"./useTheme-BGaXYmwe.js";import"./useTheme-CVByJb8R.js";import"./useSlot-qvYlW2UV.js";import"./resolveComponentProps-XMphxBSb.js";import"./useControlled-DxC1uCGX.js";import"./getReactElementRef-Df0xbma2.js";import"./Portal-DEVqEMA6.js";import"./utils-tFrEP9Vf.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DT0tbkWv.js";import"./Button-DrYdciQ0.js";import"./LoadingButton-C6EjcQI6.js";import"./index-DmY_4rvh.js";import"./Box-BU2WakPM.js";import"./extendSxProp-BZnzVrgj.js";import"./Grid2-BbvvmKhh.js";import"./styled-CsKbBpC_.js";import"./isMuiElement-DiOAsJE6.js";import"./useThemeProps-BNBLMFIr.js";import"./Stack-2ILcP_1D.js";import"./Container-DvcsWH8C.js";import"./faCheck-BUdkY9Qv.js";import"./Select-D8Pqa1Dd.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-t_-EwZHM.js";import"./Menu-BUIr0rCt.js";import"./Popover-DNs0CrC2.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-zGtC1N39.js";import"./Modal-BSor9Am9.js";import"./Backdrop-DwIksyfj.js";import"./Fade-rL0rk9XF.js";import"./List-CN2yCDHK.js";import"./OutlinedInput-ClKDCKpR.js";import"./index-Df15702_.js";import"./createSvgIcon-DK1T27V3.js";import"./SvgIcon-D3xe1wVB.js";import"./FormControlLabel-NrRuXsuu.js";import"./Typography-geKghQyJ.js";import"./Switch-BMNMooHv.js";import"./SwitchBase-DpeF2ikX.js";import"./RadioGroup-CGGGzwtq.js";import"./Divider-CE8hkX1u.js";import"./dividerClasses-Cy3VQ5Zc.js";import"./TextField-Dbm3e8rv.js";import"./FormControl-eNKWX08Y.js";import"./faCircleArrowRight-B14F5Piw.js";import"./faUser-D77uLSLS.js";import"./faSortDown-BIc1sKK4.js";import"./Close-9bLEWkOn.js";import"./usePreviousProps-DrPGTKoq.js";import"./Chip-H5O1l7tv.js";import"./ListSubheader-BX_8zoPk.js";const q=["Python","JavaScript","C#","Java","Go","SQL","PHP","Swift","Ruby","R","Rust","TypeScript","C++","MATLAB","Objective-C","CSS","HTML","Kotlin","Perl"],jt={title:"Form Components/Autocomplete/Autocomplete",component:p,tags:["autodocs"],args:{options:["Option 1","Option 2","Option 3","Option 4","Option 5"],id:"example"},argTypes:{multiple:{table:{disable:!0}}}},m={render:t=>i.jsx(p,{...t}),args:{FieldProps:{label:"Autocomplete",helperText:"Helper Text",fullWidth:!1}}},u={render:t=>i.jsx(p,{...t}),args:{FieldProps:{label:"Single Select",helperText:"Helper Text",fullWidth:!1}}},c={render:t=>i.jsx(p,{...t}),args:{FieldProps:{label:"Multi Select",helperText:"Helper Text",fullWidth:!1},multiple:!0}},z=Q(),d={render:()=>{const[t,e]=k.useState(null),l=[{inputValue:"option1",title:"Option 1"},{inputValue:"option2",title:"Option 2"}],I=(r,o)=>{typeof o=="string"?e({title:o}):o&&o.inputValue?e({title:o.inputValue}):e(o)},G=r=>typeof r=="string"?r:r.inputValue?r.inputValue:r.title,M=(r,o)=>{const a=z(r,o),{inputValue:n}=o,w=r.some(R=>n===R.title);return n!==""&&!w&&a.push({inputValue:n,title:`Add "${n}"`}),a},E=(r,o)=>{const{key:a,...n}=r;return i.jsx("li",{...n,children:o.title},a)};return i.jsx(p,{freeSolo:!0,value:t,options:l,getOptionLabel:G,onChange:I,FieldProps:{label:"FreeSolo Select",helperText:"Helper Text",fullWidth:!1},filterOptions:M,renderOption:E})}},f={render:()=>{const t=q.map(e=>({firstLetter:e[0].toUpperCase(),title:e}));return i.jsx(p,{options:t.sort((e,l)=>-l.firstLetter.localeCompare(e.firstLetter)),groupBy:e=>e.firstLetter,getOptionLabel:e=>e.title,FieldProps:{label:"FreeSolo Select",helperText:"Helper Text",fullWidth:!1}})}},s={render:()=>{const t=["Parameter 1","Parameter 2","Parameter 3"];return i.jsxs(J,{searchById:"searchby",children:[i.jsx(p,{id:"searchby",options:t,FieldProps:{fullWidth:!1}}),i.jsx(U,{id:"search",placeholder:"search",InputProps:{startAdornment:i.jsx(K,{position:"start",component:"label",htmlFor:"search",children:i.jsx($,{"aria-hidden":!1,titleAccess:"search"})})}})]})}};var h,g,x;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Autocomplete {...args} />,
  args: {
    FieldProps: {
      label: 'Autocomplete',
      helperText: 'Helper Text',
      fullWidth: false
    }
  }
}`,...(x=(g=m.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var S,y,O;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Autocomplete {...args} />,
  args: {
    FieldProps: {
      label: 'Single Select',
      helperText: 'Helper Text',
      fullWidth: false
    }
  }
}`,...(O=(y=u.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var b,F,T;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Autocomplete {...args} />,
  args: {
    FieldProps: {
      label: 'Multi Select',
      helperText: 'Helper Text',
      fullWidth: false
    },
    multiple: true
  }
}`,...(T=(F=c.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var A,P,V;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Option | null>(null);
    const options: Option[] = [{
      inputValue: 'option1',
      title: 'Option 1'
    }, {
      inputValue: 'option2',
      title: 'Option 2'
    }];
    const onChange = (_event: any, newValue: Option) => {
      if (typeof newValue === 'string') {
        setValue({
          title: newValue
        });
      } else if (newValue && newValue.inputValue) {
        // Create a new value from the user input
        setValue({
          title: newValue.inputValue
        });
      } else {
        setValue(newValue);
      }
    };
    const getOptionLabel = (option: Option) => {
      // Value selected with enter, right from the input
      if (typeof option === 'string') {
        return option;
      }
      // Add "xxx" option created dynamically
      if (option.inputValue) {
        return option.inputValue;
      }
      // Regular option
      return option.title;
    };
    const filterOptions = (options: Option[], params: FilterOptionsState<Option>) => {
      const filtered = filter(options, params);
      const {
        inputValue
      } = params;
      // Suggest the creation of a new value
      const isExisting = options.some(option => inputValue === option.title);
      if (inputValue !== '' && !isExisting) {
        filtered.push({
          inputValue,
          title: \`Add "\${inputValue}"\`
        });
      }
      return filtered;
    };
    const renderOption = (props: React.HTMLAttributes<HTMLLIElement>, option: Option) => {
      const {
        key,
        ...optionProps
      } = props;
      return <li key={key} {...optionProps}>
          {option.title}
        </li>;
    };
    return <Autocomplete freeSolo value={value} options={options} getOptionLabel={getOptionLabel} onChange={onChange} FieldProps={{
      label: 'FreeSolo Select',
      helperText: 'Helper Text',
      fullWidth: false
    }} filterOptions={filterOptions} renderOption={renderOption} />;
  }
}`,...(V=(P=d.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var L,_,B;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const options = languages.map(option => {
      const firstLetter = option[0].toUpperCase();
      return {
        firstLetter,
        title: option
      };
    });
    return <Autocomplete options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))} groupBy={option => option.firstLetter} getOptionLabel={option => option.title} FieldProps={{
      label: 'FreeSolo Select',
      helperText: 'Helper Text',
      fullWidth: false
    }} />;
  }
}`,...(B=(_=f.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var j,C,H,W,v;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const searchByOptions = ['Parameter 1', 'Parameter 2', 'Parameter 3'];
    return <SearchByFormGroup searchById="searchby">
        <Autocomplete id="searchby" options={searchByOptions} FieldProps={{
        fullWidth: false
      }} />
        <TextField id="search" placeholder="search" InputProps={{
        startAdornment: <InputAdornment position="start" component="label" htmlFor="search">
                <SearchIcon aria-hidden={false} titleAccess="search" />
              </InputAdornment>
      }} />
      </SearchByFormGroup>;
  }
}`,...(H=(C=s.parameters)==null?void 0:C.docs)==null?void 0:H.source},description:{story:'Wrap the fields in a `SearchByFormGroup` from the [@availity/mui-form-utils](./?path=/docs/form-components-formutils-introduction--docs) package for our combined search by styles.\n\nThe "Search By" field id must be passed as the FormGroup supplies the label.',...(v=(W=s.parameters)==null?void 0:W.docs)==null?void 0:v.description}}};const Ct=["_Autocomplete","_Single","_Multi","_FreeSolo","_Grouped","_SearchBy"];export{m as _Autocomplete,d as _FreeSolo,f as _Grouped,c as _Multi,s as _SearchBy,u as _Single,Ct as __namedExportsOrder,jt as default};
