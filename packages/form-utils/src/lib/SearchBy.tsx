import { FormGroup, FormGroupProps, FormLabel } from '..';
import { Stack } from '@availity/mui-layout';
import { styled } from '@mui/material/styles';

export type SearchByFormGroupProps = {
  /** The id of the `searchBy` field. _Needed to accessibly link provided label to searchBy field._ */
  searchById: string;
  /** The label of the `searchBy` field. */
  searchByLabel?: string;
} & FormGroupProps


export const SearchByContainer = styled(FormGroup, {
  name: 'AvSearchBy',
  slot: 'root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  // TODO v7: check if Autocomplete fullWidth bug is fixed https://github.com/mui/material-ui/issues/36841
  '.MuiAutocomplete-root, .MuiAutocomplete-fullWidth': {
    width: 'auto'
  },
  '.MuiFormControl-fullWidth': {
    flex: 1
  },
  '& :is(.MuiFormControl-root, .MuiAutocomplete-root):not(:is(.MuiFormControl-root, .MuiAutocomplete-root):first-of-type)': {
    '.MuiInputBase-root': {
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
      marginLeft: '-1px'
    }
  },
  '& :is(.MuiFormControl-root, .MuiAutocomplete-root):not(:is(.MuiFormControl-root, .MuiAutocomplete-root):last-of-type)': {
    '.MuiInputBase-root': {
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0
    }
  }
}));

/** A wrapper for the search/searchby multi-input pattern.
 *
 * _Will only work with full fields (`TextField`, `Autocomplete`). If building a custom field, ensure it's wrapped in a `FormControl`.
 * The "Search By" field id must be passed as the FormGroup supplies the label. See [TextField documentation](https://availity.github.io/element/?path=/docs/form-components-textfield-textfield--docs) for additional steps if using `select` instead of `Autocomplete`._
 */
export const SearchByFormGroup = ({children, searchById, searchByLabel = 'Search By', ...rest}: SearchByFormGroupProps) => (
  <SearchByContainer {...rest}>
    <FormLabel htmlFor={searchById}>{searchByLabel}</FormLabel>
    <Stack direction="row">
      {children}
    </Stack>
  </SearchByContainer>
);