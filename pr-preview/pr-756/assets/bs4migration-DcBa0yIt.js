import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as r}from"./index-XODwqvNS.js";import{M as l}from"./index-BXFAf5J2.js";import"./index-ChsGqxH_.js";import"./index-BgYLq7fD.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./iframe-CaI-5eMc.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function o(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"BS4 Migration/Upload"}),`
`,e.jsx(n.h1,{id:"upload-migration",children:"Upload Migration"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Upload"})," component from ",e.jsx(n.code,{children:"@availity/upload"})," and ",e.jsx(n.code,{children:"@availity/form-upload"})," has been renamed to the ",e.jsx(n.code,{children:"FileSelector"})," component. It still uses ",e.jsx(n.code,{children:"@availity/upload-core"})," package to do the lifting, however, we have renamed, removed, and added some things."]}),`
`,e.jsx(n.p,{children:"For more in depth component information, visit:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://design.availity.com/2e36e50c7/p/121639-file-selector",rel:"nofollow",children:"Availity Design Documentation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"./?path=/docs/components-file-selector-file-selector--docs",children:"Component Documentation"})}),`
`]}),`
`,e.jsx(n.h2,{id:"key-differences-not-exhaustive-list",children:"Key Differences (not exhaustive list)"}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsx(n.h4,{id:"-new",children:"✅ New"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onDrop"}),": this prop serves as an ",e.jsx(n.code,{children:"onChange"})," callback. Use it to get access to the files and the change event"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"disableRemove"}),": used to prevent removing the file from the list"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"validator"}),": allows for custom validation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"customFileRow"}),": pass in your own component to be used in the FileList"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"queryOptions"}),": options for the ",e.jsx(n.code,{children:"useQuery"})," hook"]}),`
`]}),`
`,e.jsx(n.h4,{id:"️-changed",children:"⚠️ Changed"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"max"})," -> ",e.jsx(n.code,{children:"maxFiles"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"showFileDrop"})," -> ",e.jsx(n.code,{children:"enableDropArea"})]}),`
`]}),`
`,e.jsx(n.h4,{id:"-removed",children:"🚫 Removed"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onFileUpload"}),": this prop has been removed in favor of adding ",e.jsx(n.code,{children:"onProgress"}),", ",e.jsx(n.code,{children:"onSuccess"}),", and ",e.jsx(n.code,{children:"onError"}),". Previously, you were required to add these functions yourself. Now they can be passed directly to the component"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"buttonText"})," (use children prop instead)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"buttonClassName"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"dropZoneText"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"component"})}),`
`]}),`
`,e.jsx(n.h3,{id:"form-management",children:"Form Management"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The FileSelector uses ",e.jsx(n.code,{children:"react-hook-form"})," instead of ",e.jsx(n.code,{children:"Formik"})]}),`
`,e.jsxs(n.li,{children:["Must wrap component with FormProvider from ",e.jsx(n.code,{children:"react-hook-form"})]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"react-hook-form"})," provider maintains the state of the selected files. It does not use ",e.jsx(n.code,{children:"@availity/upload-core"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"code-examples",children:"Code Examples"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"availity-react"})," Example:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Upload } from '@availity/form-upload';
import { Form } from '@availity/form';

const UploadForm = () => (
  <Form initialValues={{ fileUpload: [] }} onSubmit={(values) => console.log(values)}>
    <Upload
      name="fileUpload"
      clientId="my-client-id"
      bucketId="my-bucket-id"
      customerId="my-customer-id"
      maxSize={5 * 1024 * 1024}
      multiple={true}
      allowedFileTypes={['.pdf', '.doc', '.docx']}
    />
  </Form>
);
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@availity/element"})," Example:"]}),`
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
`]})]})}function f(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{f as default};
