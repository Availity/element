export const missingRHFprops = {
  name: {
    description: 'Unique name of your input.',
  },
  deps: {
    description: 'Validation will be triggered for the dependent inputs, it only limited to register api not trigger.',
  },
  max: {
    description: 'The maximum value to accept for this input.',
  },
  maxLength: {
    description: 'The maximum length of the value to accept for this input.',
  },
  min: {
    description: 'The minimum value to accept for this input.',
  },
  minLength: {
    description: 'The minimum length of the value to accept for this input.',
  },
  pattern: {
    description: 'The regex pattern for the input.',
  },
  shouldUnregister: {
    description:
      'Input will be unregistered after unmount and defaultValues will be removed as well. Note: this prop should be avoided when using with useFieldArray as unregister function gets called after input unmount/remount and reorder.',
  },
  required: {
    description:
      'A Boolean which, if true, indicates that the input must have a value before the form can be submitted. You can assign a string to return an error message in the errors object. Note: This config aligns with web constrained API for required input validation, for object or array type of input use validate function instead.',
  },
};
