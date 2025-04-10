import{j as p}from"./jsx-runtime-BTJTZTIL.js";import{r as E}from"./index-BgYLq7fD.js";import{A as n}from"./Autocomplete-DnlkVf2K.js";import{c as w}from"./Autocomplete-D1g4r_hX.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-BccnGwOY.js";import"./index-DKqB6pip.js";import"./index-DJKl12U0.js";import"./index-Bp9oCidm.js";import"./faCircleArrowRight-B14F5Piw.js";import"./faUser-D77uLSLS.js";import"./faSortDown-BIc1sKK4.js";import"./SvgIcon-CiBNlF9H.js";import"./generateUtilityClass-BeVSWKCg.js";import"./identifier-CudAVvBZ.js";import"./memoTheme-CpoNRPWX.js";import"./styled-CKuRQFSa.js";import"./DefaultPropsProvider-CWkNlXkE.js";import"./generateUtilityClasses-whvyra8-.js";import"./index-DnNfvsmq.js";import"./Tooltip-CIyLwlBA.js";import"./index-DyJdRKzS.js";import"./useTheme-Cx1wRXKO.js";import"./useTheme-Ib01SJ3a.js";import"./useSlot-1VRyIerd.js";import"./resolveComponentProps-CCNxqvxI.js";import"./useForkRef-Dz4aGlyk.js";import"./useTimeout-iC_34LsC.js";import"./useEnhancedEffect-j2zQLnYm.js";import"./useControlled-DxC1uCGX.js";import"./useId-DIK8ekB4.js";import"./getReactElementRef-Df0xbma2.js";import"./Portal-C2J4q3Ji.js";import"./utils-tFrEP9Vf.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./TransitionGroupContext-BKlA24Pm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BmqT0tgx.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D_kG6RhR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D97P5WV0.js";import"./emotion-react.browser.esm-v7Jm8XFw.js";import"./CircularProgress-fcRSDrpN.js";import"./Button-yLAd6_L_.js";import"./LoadingButton-Cl76w144.js";import"./faCheck-BUdkY9Qv.js";import"./FormLabel-BDxB3zbH.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-t_-EwZHM.js";import"./OutlinedInput-B93mfhOp.js";import"./isHostComponent-DVu5iVWx.js";import"./index-DfraP8LW.js";import"./extendSxProp-BY7TjwKM.js";import"./utils-DoM3o7-Q.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Select-IoH-6RCp.js";import"./Menu-GaZ6ImQN.js";import"./Popover-CQBNnNRW.js";import"./Paper-4P5FqKie.js";import"./Modal-CezAubrN.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-TXxSV-j9.js";import"./Fade-BCUt9uX4.js";import"./List-eXGzl-Dz.js";import"./createSvgIcon-BWWwXn7v.js";import"./FormControlLabel-BzV1MzKU.js";import"./Typography-COSof5sR.js";import"./Switch-CyD42d4W.js";import"./SwitchBase-CYtmyT40.js";import"./RadioGroup-CZeO-sCM.js";import"./Box-Dv31mJKI.js";import"./Divider-DJW73rZ3.js";import"./dividerClasses-0g4QmK6Y.js";import"./Stack-qbqOHiMo.js";import"./styled-Dbr83ACF.js";import"./useThemeProps-Do5o_sjG.js";import"./TextField-DBCIsg8u.js";import"./FormControl-BpN01e6f.js";import"./isMuiElement-DiOAsJE6.js";import"./Grid2-JMPt1-k0.js";import"./Close-_BvKU_hM.js";import"./usePreviousProps-DrPGTKoq.js";import"./Chip-BprfrhNF.js";import"./ListSubheader-CTxWtyL5.js";const R=["Python","JavaScript","C#","Java","Go","SQL","PHP","Swift","Ruby","R","Rust","TypeScript","C++","MATLAB","Objective-C","CSS","HTML","Kotlin","Perl"],Te={title:"Form Components/Autocomplete/Autocomplete",component:n,tags:["autodocs"],args:{options:["Option 1","Option 2","Option 3","Option 4","Option 5"],id:"example"},argTypes:{multiple:{table:{disable:!0}}}},a={render:r=>p.jsx(n,{...r}),args:{FieldProps:{label:"Autocomplete",helperText:"Helper Text",fullWidth:!1}}},m={render:r=>p.jsx(n,{...r}),args:{FieldProps:{label:"Single Select",helperText:"Helper Text",fullWidth:!1}}},u={render:r=>p.jsx(n,{...r}),args:{FieldProps:{label:"Multi Select",helperText:"Helper Text",fullWidth:!1},multiple:!0}},k=w(),c={render:()=>{const[r,t]=E.useState(null),l=[{inputValue:"option1",title:"Option 1"},{inputValue:"option2",title:"Option 2"}],H=(e,o)=>{typeof o=="string"?t({title:o}):o&&o.inputValue?t({title:o.inputValue}):t(o)},_=e=>typeof e=="string"?e:e.inputValue?e.inputValue:e.title,v=(e,o)=>{const s=k(e,o),{inputValue:i}=o,j=e.some(M=>i===M.title);return i!==""&&!j&&s.push({inputValue:i,title:`Add "${i}"`}),s},W=(e,o)=>{const{key:s,...i}=e;return p.jsx("li",{...i,children:o.title},s)};return p.jsx(n,{freeSolo:!0,value:r,options:l,getOptionLabel:_,onChange:H,FieldProps:{label:"FreeSolo Select",helperText:"Helper Text",fullWidth:!1},filterOptions:v,renderOption:W})}},d={render:()=>{const r=R.map(t=>({firstLetter:t[0].toUpperCase(),title:t}));return p.jsx(n,{options:r.sort((t,l)=>-l.firstLetter.localeCompare(t.firstLetter)),groupBy:t=>t.firstLetter,getOptionLabel:t=>t.title,FieldProps:{label:"FreeSolo Select",helperText:"Helper Text",fullWidth:!1}})}};var f,g,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(C=(P=d.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};const Ve=["_Autocomplete","_Single","_Multi","_FreeSolo","_Grouped"];export{a as _Autocomplete,c as _FreeSolo,d as _Grouped,u as _Multi,m as _Single,Ve as __namedExportsOrder,Te as default};
