import { Datepicker, DatepickerProps } from '@availity/mui-datepicker';
import { useFormContext, RegisterOptions, FieldValues } from 'react-hook-form';

type ControlledDatepickerProps = DatepickerProps & {
  name: string;
  registerOptions?: RegisterOptions<FieldValues, string>;
};

// export const ControlledDatepickerProps = ({ name, registerOptions, ...rest }: ControlledDatepickerProps) => {
//   const { register } = useFormContext();
//   // return <Datepicker {...rest} {...register(name, registerOptions)} />;
// };
