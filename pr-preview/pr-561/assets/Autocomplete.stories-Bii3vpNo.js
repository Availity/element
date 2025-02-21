import{j as p}from"./jsx-runtime-CcL-W3nW.js";import{r as E}from"./index-DcWiA9TO.js";import{A as n}from"./Autocomplete-dknOqRV_.js";import{c as w}from"./Autocomplete-DlvytMGW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DaRMplxe.js";import"./index-BPVUk_cQ.js";import"./index-DMWJB0MK.js";import"./index--IoBtPgS.js";import"./faCircleArrowRight-fEvkKBkH.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./SvgIcon-BS-p1eoC.js";import"./generateUtilityClass-Bqc1qv72.js";import"./createTheme-CKCRSfxM.js";import"./memoTheme-DvanvhnP.js";import"./styled-Dbr85gFc.js";import"./DefaultPropsProvider-CIAoFptl.js";import"./generateUtilityClasses-DyVAdLaw.js";import"./index-CDwEgPAM.js";import"./Tooltip-eF_7lzc5.js";import"./index-nos-0K8U.js";import"./useTheme-ChS1Y5Lw.js";import"./useTheme-BUEqHFQV.js";import"./useSlot-DO4SmqlR.js";import"./resolveComponentProps-BiTA-uKg.js";import"./useForkRef-BVrIj09m.js";import"./useTimeout-B8wmcRZV.js";import"./useEnhancedEffect-D2f2tbda.js";import"./useControlled-WdbyInBW.js";import"./useId-DszduLV4.js";import"./getReactElementRef-AnOffBoZ.js";import"./Portal-CKWfQBCE.js";import"./utils-D5ZkK9XY.js";import"./objectWithoutPropertiesLoose-CAYKN5F1.js";import"./TransitionGroupContext-D-IBNIfW.js";import"./index-BEx9gAkE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cuv6gcjd.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-v3cBwN0V.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DQZrtVrL.js";import"./emotion-react.browser.esm-rTq5AsO6.js";import"./CircularProgress-BHFEuwTi.js";import"./Button-B22iKlEO.js";import"./LoadingButton-B6FUrH4t.js";import"./faCheck-B05F4ORy.js";import"./Select-Bh3HlTBm.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-68oiojFJ.js";import"./Menu-BNF0dZPe.js";import"./Popover-DJDHQo2S.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Paper-CvfFJp8a.js";import"./Modal-CzgY4V0Y.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-B9IVkNZn.js";import"./Fade-DbM47FxC.js";import"./List-Ce1NCs06.js";import"./utils-DoM3o7-Q.js";import"./createSvgIcon-IUeEQzFc.js";import"./OutlinedInput-DUFM6NiM.js";import"./index-D-S2KyN4.js";import"./extendSxProp-BKaoT_Qt.js";import"./FormLabel-DrJE-ijH.js";import"./FormControlLabel-DLlzi5Ft.js";import"./Typography-Cng4iL4p.js";import"./Switch-6eDJgjyT.js";import"./SwitchBase-DPjFJeLH.js";import"./RadioGroup-DLgS-ogh.js";import"./Box-BAeL439g.js";import"./Divider-D_YJaRgz.js";import"./dividerClasses-Dy0fxzds.js";import"./Stack-C5Zrd0Q6.js";import"./styled-C36SNKZX.js";import"./useThemeProps-YZ7_EcgO.js";import"./TextField-D_phNllt.js";import"./FormControl-DxHQf2_s.js";import"./isMuiElement-DAzOCCHH.js";import"./Close-L9RbW_Po.js";import"./usePreviousProps-BYCwus4J.js";import"./Chip-CBOHQDsU.js";import"./ListSubheader-Bw6Q0Eqn.js";const R=["Python","JavaScript","C#","Java","Go","SQL","PHP","Swift","Ruby","R","Rust","TypeScript","C++","MATLAB","Objective-C","CSS","HTML","Kotlin","Perl"],Se={title:"Form Components/Autocomplete/Autocomplete",component:n,tags:["autodocs"],args:{options:["Option 1","Option 2","Option 3","Option 4","Option 5"],id:"example"},argTypes:{multiple:{table:{disable:!0}}}},a={render:r=>p.jsx(n,{...r}),args:{FieldProps:{label:"Autocomplete",helperText:"Helper Text",fullWidth:!1}}},m={render:r=>p.jsx(n,{...r}),args:{FieldProps:{label:"Single Select",helperText:"Helper Text",fullWidth:!1}}},u={render:r=>p.jsx(n,{...r}),args:{FieldProps:{label:"Multi Select",helperText:"Helper Text",fullWidth:!1},multiple:!0}},k=w(),c={render:()=>{const[r,t]=E.useState(null),l=[{inputValue:"option1",title:"Option 1"},{inputValue:"option2",title:"Option 2"}],H=(e,o)=>{typeof o=="string"?t({title:o}):o&&o.inputValue?t({title:o.inputValue}):t(o)},_=e=>typeof e=="string"?e:e.inputValue?e.inputValue:e.title,v=(e,o)=>{const s=k(e,o),{inputValue:i}=o,j=e.some(M=>i===M.title);return i!==""&&!j&&s.push({inputValue:i,title:`Add "${i}"`}),s},W=(e,o)=>{const{key:s,...i}=e;return p.jsx("li",{...i,children:o.title},s)};return p.jsx(n,{freeSolo:!0,value:r,options:l,getOptionLabel:_,onChange:H,FieldProps:{label:"FreeSolo Select",helperText:"Helper Text",fullWidth:!1},filterOptions:v,renderOption:W})}},d={render:()=>{const r=R.map(t=>({firstLetter:t[0].toUpperCase(),title:t}));return p.jsx(n,{options:r.sort((t,l)=>-l.firstLetter.localeCompare(t.firstLetter)),groupBy:t=>t.firstLetter,getOptionLabel:t=>t.title,FieldProps:{label:"FreeSolo Select",helperText:"Helper Text",fullWidth:!1}})}};var f,g,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(C=(P=d.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};const Oe=["_Autocomplete","_Single","_Multi","_FreeSolo","_Grouped"];export{a as _Autocomplete,c as _FreeSolo,d as _Grouped,u as _Multi,m as _Single,Oe as __namedExportsOrder,Se as default};
