import{j as p}from"./jsx-runtime-CcL-W3nW.js";import{r as E}from"./index-DcWiA9TO.js";import{A as n}from"./Autocomplete-D43PO9dd.js";import{c as w}from"./Autocomplete-_uyW3nrN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D69ufRNP.js";import"./index-BlC5JLGo.js";import"./index-DMWJB0MK.js";import"./index-BDqO7SwG.js";import"./faUser-CAcveCor.js";import"./SvgIcon-DfAk99tL.js";import"./generateUtilityClass-DELP8s2G.js";import"./identifier-CenlGZaM.js";import"./memoTheme-CIpOTVoB.js";import"./styled-wZqJTO_n.js";import"./DefaultPropsProvider-LCKMq1Iv.js";import"./generateUtilityClasses-duJ5YrlI.js";import"./index-DSGElAqY.js";import"./Tooltip-BNHD4B5V.js";import"./index-nos-0K8U.js";import"./useTheme-Cf-RAc4Y.js";import"./useTheme-DwYC2ms6.js";import"./useSlot-CaH4cQiJ.js";import"./resolveComponentProps-D4XT56l6.js";import"./useForkRef-BVrIj09m.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./getReactElementRef-AnOffBoZ.js";import"./Portal-D32Mdiva.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DE50rPTb.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DGohL5ME.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Ctwr4_Dd.js";import"./emotion-react.browser.esm-BKUJyPAt.js";import"./CircularProgress-D2topXWR.js";import"./Button-C-tuTFv-.js";import"./LoadingButton-BK9aMQRn.js";import"./faCheck-B05F4ORy.js";import"./Select-Dt0UCwxY.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-68oiojFJ.js";import"./Menu-BU9jXi-3.js";import"./Popover-CSXcjUnK.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-DoDJPSvm.js";import"./Modal-B_4-9GXq.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-4xfgJS0q.js";import"./Fade-DlB6bWB0.js";import"./List-BRpAtMOZ.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-BzSwLqYD.js";import"./OutlinedInput-BeuFtjMr.js";import"./index-BKNdG2lN.js";import"./extendSxProp-w61GJfY-.js";import"./FormLabel-CZFypZnO.js";import"./FormControlLabel-CImDabQe.js";import"./Typography-Dw3TlP36.js";import"./Switch-CXk7mhi6.js";import"./SwitchBase-CHDa-0k7.js";import"./RadioGroup-B7AA9dKi.js";import"./Box-DR5TX31P.js";import"./Divider-Dys0WftY.js";import"./dividerClasses-C6lHB_qP.js";import"./Stack-BPYMGdgv.js";import"./styled-CIC6PLSI.js";import"./useThemeProps-BAwiOWAz.js";import"./TextField-DnlxDaFs.js";import"./FormControl-BhCdTdWt.js";import"./isMuiElement-DAzOCCHH.js";import"./Close-B57SlfWx.js";import"./usePreviousProps-BYCwus4J.js";import"./Chip-CjjfMMY_.js";import"./ListSubheader-3rOeDSM0.js";const R=["Python","JavaScript","C#","Java","Go","SQL","PHP","Swift","Ruby","R","Rust","TypeScript","C++","MATLAB","Objective-C","CSS","HTML","Kotlin","Perl"],ge={title:"Form Components/Autocomplete/Autocomplete",component:n,tags:["autodocs"],args:{options:["Option 1","Option 2","Option 3","Option 4","Option 5"],id:"example"},argTypes:{multiple:{table:{disable:!0}}}},a={render:r=>p.jsx(n,{...r}),args:{FieldProps:{label:"Autocomplete",helperText:"Helper Text",fullWidth:!1}}},m={render:r=>p.jsx(n,{...r}),args:{FieldProps:{label:"Single Select",helperText:"Helper Text",fullWidth:!1}}},u={render:r=>p.jsx(n,{...r}),args:{FieldProps:{label:"Multi Select",helperText:"Helper Text",fullWidth:!1},multiple:!0}},k=w(),c={render:()=>{const[r,t]=E.useState(null),l=[{inputValue:"option1",title:"Option 1"},{inputValue:"option2",title:"Option 2"}],H=(e,o)=>{typeof o=="string"?t({title:o}):o&&o.inputValue?t({title:o.inputValue}):t(o)},_=e=>typeof e=="string"?e:e.inputValue?e.inputValue:e.title,v=(e,o)=>{const s=k(e,o),{inputValue:i}=o,j=e.some(M=>i===M.title);return i!==""&&!j&&s.push({inputValue:i,title:`Add "${i}"`}),s},W=(e,o)=>{const{key:s,...i}=e;return p.jsx("li",{...i,children:o.title},s)};return p.jsx(n,{freeSolo:!0,value:r,options:l,getOptionLabel:_,onChange:H,FieldProps:{label:"FreeSolo Select",helperText:"Helper Text",fullWidth:!1},filterOptions:v,renderOption:W})}},d={render:()=>{const r=R.map(t=>({firstLetter:t[0].toUpperCase(),title:t}));return p.jsx(n,{options:r.sort((t,l)=>-l.firstLetter.localeCompare(t.firstLetter)),groupBy:t=>t.firstLetter,getOptionLabel:t=>t.title,FieldProps:{label:"FreeSolo Select",helperText:"Helper Text",fullWidth:!1}})}};var f,g,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Autocomplete {...args} />,
  args: {
    FieldProps: {
      label: 'Autocomplete',
      helperText: 'Helper Text',
      fullWidth: false
    }
  }
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var S,O,h;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Autocomplete {...args} />,
  args: {
    FieldProps: {
      label: 'Single Select',
      helperText: 'Helper Text',
      fullWidth: false
    }
  }
}`,...(h=(O=m.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};var T,V,b;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Autocomplete {...args} />,
  args: {
    FieldProps: {
      label: 'Multi Select',
      helperText: 'Helper Text',
      fullWidth: false
    },
    multiple: true
  }
}`,...(b=(V=u.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var L,A,F;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(A=c.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var y,P,C;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(C=(P=d.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};const xe=["_Autocomplete","_Single","_Multi","_FreeSolo","_Grouped"];export{a as _Autocomplete,c as _FreeSolo,d as _Grouped,u as _Multi,m as _Single,xe as __namedExportsOrder,ge as default};
