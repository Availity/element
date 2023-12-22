import{a as n,j as o,F as i}from"./jsx-runtime-a3bcee63.js";import"./chunk-PCJTTTQV-a3c4d1c5.js";import{M as c}from"./index-5b9a731e.js";import{u as a}from"./index-da4379a2.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-4de3a6f7.js";import"../sb-preview/runtime.js";import"./react-18-b9b6ed02.js";import"./index-8a077077.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./_baseFor-53bad3ef.js";import"./index-e9d7ebdf.js";import"./_initCloneObject-31384e14.js";import"./index-356e4a49.js";function t(r){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},a(),r.components);return o(i,{children:[n(c,{title:"BS4 Migration/Form Migration"}),`
`,n(e.h1,{id:"form-migration",children:"Form Migration"}),`
`,o(e.p,{children:["For the ",n(e.code,{children:"@availity/element"}),` components, we have chosen to move away from
`,n(e.code,{children:"formik"})," in favor of ",n(e.code,{children:"react-hook-form"}),`. For exiting forms utilizing
`,n(e.code,{children:"@availity/react"})," and ",n(e.code,{children:"formik"}),", some refactor is required."]}),`
`,o(e.h2,{id:"why-react-hook-form",children:["Why ",n(e.code,{children:"react-hook-form"}),"?"]}),`
`,o(e.p,{children:[`After a successful internal implementation of an extremely long and
complicated form using `,n(e.code,{children:"react-hook-form"}),`, we decided to move forward with
it. `,n(e.code,{children:"react-hook-form"}),` is very lightweight and flexible. It also boasts a
large community and is actively and regularly supported.`]}),`
`,n(e.h2,{id:"installation",children:"Installation"}),`
`,n(e.pre,{children:n(e.code,{className:"language-sh",children:`npm install react-hook-form
`})}),`
`,n(e.p,{children:"OR"}),`
`,n(e.pre,{children:n(e.code,{className:"language-sh",children:`yarn add react-hook-form
`})}),`
`,n(e.h2,{id:"usage",children:"Usage"}),`
`,o(e.p,{children:["At the moment, @availity/element does not export a ",n(e.code,{children:"<Form />"}),` component.
Instead, use the native `,n(e.code,{children:"<form>"}),` element. You can then use
`,n(e.code,{children:"react-hook-form"}),"'s ",n(e.code,{children:"useForm"}),` hook to manage your form. Below is the same
form implemented in `,n(e.code,{children:"formik"})," and rewritten in react-hook-form."]}),`
`,o(e.h3,{id:"example-feedback-form-component-with-formik-and-availityreact",children:["Example: Feedback Form component with ",n(e.code,{children:"formik"})," and ",n(e.code,{children:"@availity/react"})]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`import React, { useRef } from 'react';
import { Form, Field } from '@availity/form';
import { Button } from 'reactstrap';

export const FeedbackForm = () => {
  const ref = useRef();
  return (
    <Form
      innerRef={ref}
      aria-label="Feedback Form"
      role="form"
      onKeyDown={({ key }) => key === 'Escape' && onClose()}
      initialValues={{
        feedback: undefined,
      }}
      validationSchema={yup.object().shape({
        feedback: yup.string().max(200, 'Feedback cannot exceed 200 characters.').required('This field is required.'),
      })}
      {...formProps}
      onSubmit={(values) => sendFeedback(values)}
    >
      <Field type="textarea" name="feedback" label="Feedback" />
      <Button
        onKeyDown={({ key, shiftKey }) => {
          if (key === 'Enter') {
            ref.current.submitForm();
          }
          if (key === 'Tab' && !shiftKey && !modal) {
            onClose();
          }
        }}
        type="submit"
      >
        Send Feedback
      </Button>
    </Form>
  );
};
`})}),`
`,o(e.h3,{id:"example-feedback-form-component-with-react-hook-form-and-availityelement",children:["Example: Feedback form component with ",n(e.code,{children:"react-hook-form"})," and ",n(e.code,{children:"@availity/element"})]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { TextField } from '@availity/mui-text-field
import { LoadingButton } from '@availity/mui-button';


export const FeedbackForm = () => {

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    defaultValues: {feedback: ""}
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('feedback', {
          required: 'This field is required',
          maxLength: { value: 200, message: 'This field must not exceed 200 characters' },
        })}
        label="Feedback"
        inputProps={{ 'aria-required': 'true' }}
        InputLabelProps={{
          component: FormLabel,
          required: true,
        }}
        helperText={errors.feedback?.message || 'Max 200 characters'}
        error={!!errors.feedback}
      />
      <LoadingButton loading={loading} type="submit" variant="contained">
        Send Feedback
      </LoadingButton>
    </form>
  )
}
`})}),`
`,o(e.p,{children:["You can find more working examples of react-hook-form ",n(e.a,{href:"/docs/layouts-form--docs",children:"here"}),"."]})]})}function S(r={}){const{wrapper:e}=Object.assign({},a(),r.components);return e?n(e,Object.assign({},r,{children:n(t,r)})):t(r)}export{S as default};
//# sourceMappingURL=form-migration-f06b5f5e.js.map
