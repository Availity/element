import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{useMDXComponents as r}from"./index-CfSBfIZi.js";import{M as d}from"./index-CTSQPo6g.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Dyt9Hnsg.js";import"./index-BEx9gAkE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";function i(o){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"BS4 Migration/Upload"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Upload"})," component from ",e.jsx(n.code,{children:"@availity/upload"})," and ",e.jsx(n.code,{children:"@availity/form-upload"})," has been renamed to the ",e.jsx(n.code,{children:"FileSelector"})," component. It still uses ",e.jsx(n.code,{children:"@availity/upload-core"})," package to do the lifting, however, we have renamed, removed, and added some things."]}),`
`,e.jsx(n.h2,{id:"basic-usage-changes",children:"Basic Usage Changes"}),`
`,e.jsx(n.h3,{id:"before-upload-component",children:"Before (Upload component):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Upload } from '@availity/form-upload';
import { Formik, Field } from 'formik';

const UploadForm = () => (
  <Formik initialValues={{ fileUpload: [] }} onSubmit={(values) => console.log(values)}>
    <Form>
      <Field
        name="fileUpload"
        component={Upload}
        clientId="my-client-id"
        bucketId="my-bucket-id"
        customerId="my-customer-id"
        maxSize={5 * 1024 * 1024}
        multiple={true}
        allowedFileTypes={['.pdf', '.doc', '.docx']}
      />
    </Form>
  </Formik>
);
`})}),`
`,e.jsx(n.h3,{id:"after-fileselector-component",children:"After (FileSelector component):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { FileSelector } from '@availity/mui-file-selector';
import { FormProvider, useForm } from 'react-hook-form';

const UploadForm = () => {
  const methods = useForm({
    defaultValues: {
      fileUpload: [],
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FileSelector
          name="fileUpload"
          clientId="my-client-id"
          bucketId="my-bucket-id"
          customerId="my-customer-id"
          maxSize={5 * 1024 * 1024}
          maxFiles={5}
          multiple={true}
          allowedFileTypes={['.pdf', '.doc', '.docx']}
        />
      </form>
    </FormProvider>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"key-changes",children:"Key Changes"}),`
`,e.jsx(n.h3,{id:"form-management",children:"Form Management"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The FileSelector uses ",e.jsx(n.code,{children:"react-hook-form"})," instead of ",e.jsx(n.code,{children:"Formik"})]}),`
`,e.jsxs(n.li,{children:["Must wrap component with FormProvider from ",e.jsx(n.code,{children:"react-hook-form"})]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"react-hook-form"})," provider maintains the state of the selected files. It does not use ",e.jsx(n.code,{children:"@availity/upload-core"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"props-changes",children:"Props changes"}),`
`,e.jsx(n.p,{children:"Here's a quick look at some of the changes relating to props. Check out our docs for more information about each prop."}),`
`,e.jsx(n.h4,{id:"new",children:"New"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onDrop"}),". This prop is our way of letting you hook into the"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"disableRemove"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"validator"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"customFileRow"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"queryOptions"})}),`
`]}),`
`,e.jsx(n.h4,{id:"renamed",children:"Renamed"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"max"})," -> ",e.jsx(n.code,{children:"maxFiles"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"showFileDrop"})," -> ",e.jsx(n.code,{children:"enableDropArea"})]}),`
`]}),`
`,e.jsx(n.h4,{id:"removed",children:"Removed"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onFileUpload"}),": this prop has been removed in favor of adding ",e.jsx(n.code,{children:"onProgress"}),", ",e.jsx(n.code,{children:"onSuccess"}),", and ",e.jsx(n.code,{children:"onError"}),". Previously, you were required to add these functions yourself. Now they can be passed directly to the component"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"buttonText"})," (use children prop instead)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"buttonClassName"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"dropZoneText"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"component"})}),`
`]}),`
`,e.jsx(n.h2,{id:"additional-considerations",children:"Additional Considerations"}),`
`,e.jsx(n.h3,{id:"error-handling",children:"Error Handling"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The new component provides more detailed error feedback"}),`
`,e.jsx(n.li,{children:"Errors are displayed using Element Alert components"}),`
`,e.jsx(n.li,{children:"Custom error handling can be implemented through the validator prop"}),`
`]}),`
`,e.jsx(n.h3,{id:"file-list-display",children:"File List Display"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Files are now displayed in a MUI List component"}),`
`,e.jsx(n.li,{children:"Can be customized using the customFileRow prop"}),`
`,e.jsx(n.li,{children:"Shows upload progress and status more clearly"}),`
`]}),`
`,e.jsx(n.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Improved keyboard navigation"}),`
`,e.jsx(n.li,{children:"Better screen reader support"}),`
`,e.jsx(n.li,{children:"Clear focus indicators"}),`
`]})]})}function j(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{j as default};
