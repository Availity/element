import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  ThemeProvider,
  TextField,
  Input,
  CodesAutocomplete,
  Autocomplete,
  Datepicker,
  AsyncAutocomplete,
  Checkbox,
  FieldHelpIcon,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  RequiredKey,
  Switch,
  Select,
  FormControl,
  FormGroup,
} from '@availity/element';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const options= ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

// Fields

export const AutocompleteExample = () => (
  <QueryClientProvider client={client}>
    <ThemeProvider>
      <Autocomplete options={options} FieldProps={{label:"Autocomplete", helperText:"Help Text"}}/>
    </ThemeProvider>
  </QueryClientProvider>
);

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const loadOptions = async (offset: number, limit: number) => {await sleep(10000); return({options: [], hasMore: false, offset: 0})};

export const AsyncAutocompleteExample = () => (
  <QueryClientProvider client={client}>
    <ThemeProvider>
      <AsyncAutocomplete FieldProps={{label:"Async Autocomplete", helperText:"Help Text"}} queryKey='example' loadOptions={loadOptions}/>
    </ThemeProvider>
  </QueryClientProvider>
);

export const CodesAutocompleteExample = () => (
  <QueryClientProvider client={client}>
    <ThemeProvider>
      <CodesAutocomplete
        list= 'ABC'
        FieldProps= {{
          label: 'Code Select',
          helperText: 'Select a code from the list',
          placeholder: 'Select...',
          fullWidth: false,
        }}
        limit= {15}
      />
    </ThemeProvider>
  </QueryClientProvider>
);

export const DatepickerExample = () => (
  <ThemeProvider>
    <Datepicker label="Datepicker" FieldProps={{helperText:"Help Text"}}/>
  </ThemeProvider>
);

export const TextFieldExample = () => (
  <ThemeProvider>
    <TextField label="Text Field" helperText="Help Text"/>
  </ThemeProvider>
);


// Form Utils

export const CheckboxExample = () => (
  <ThemeProvider>
    <Checkbox/>
  </ThemeProvider>
);

export const FieldHelpIconExample = () => (
  <ThemeProvider>
    <FieldHelpIcon helpTopicId="123"/>
  </ThemeProvider>
);

export const FormControlExample = () => (
  <ThemeProvider>
    <FormControl error>
      <FormLabel htmlFor="input">Label</FormLabel>
      <Input inputProps={{ id: 'input' }} />
      <FormHelperText>Error Text</FormHelperText>
    </FormControl>
  </ThemeProvider>
);

export const FormControlLabelExample = () => (
  <ThemeProvider>
    <FormControlLabel label="FormControlLabel" control={<Checkbox/>}/>
  </ThemeProvider>
);

export const FormGroupExample = () => (
  <ThemeProvider>
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel control={<Checkbox />} label="Label 2" />
      <FormControlLabel disabled control={<Checkbox />} label="Label 3" />
    </FormGroup>
  </ThemeProvider>
);

export const FormHelperTextExample = () => (
  <ThemeProvider>
    <FormHelperText>Help Text</FormHelperText>
  </ThemeProvider>
);

export const FormLabelExample = () => (
  <ThemeProvider>
    <FormLabel required helpTopicId="123">FormLabel</FormLabel>
  </ThemeProvider>
);

export const InputExample = () => (
  <ThemeProvider>
    <Input/>
  </ThemeProvider>
);

export const RadioExample = () => (
  <ThemeProvider>
    <Radio/>
  </ThemeProvider>
);

export const RadioGroupExample = () => (
  <ThemeProvider>
    <RadioGroup>
      <FormControlLabel value="one" control={<Radio />} label="Radio One" />
      <FormControlLabel value="two" control={<Radio />} label="Radio Two" helpTopicId="1234" />
      <FormControlLabel value="three" control={<Radio />} label="Radio Three" />
    </RadioGroup>
  </ThemeProvider>
);

export const RequiredKeyExample = () => (
  <ThemeProvider>
    <RequiredKey/>
  </ThemeProvider>
);

export const SelectExample = () => (
  <ThemeProvider>
    <Select/>
  </ThemeProvider>
);

export const SwitchExample = () => (
  <ThemeProvider>
    <Switch/>
  </ThemeProvider>
);
