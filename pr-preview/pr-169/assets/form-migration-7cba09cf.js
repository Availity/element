import{a as o,j as r,F as a}from"./jsx-runtime-a3bcee63.js";import"./chunk-PCJTTTQV-42dcefe9.js";import{M as c}from"./index-9fe81f14.js";import{u as t}from"./index-da4379a2.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-e75254ab.js";import"../sb-preview/runtime.js";import"./react-18-b9b6ed02.js";import"./index-8a077077.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./_baseFor-53bad3ef.js";import"./index-e9d7ebdf.js";import"./_initCloneObject-31384e14.js";import"./index-356e4a49.js";function i(n){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",a:"a"},t(),n.components);return r(a,{children:[o(c,{title:"BS4 Migration/Form Migration"}),`
`,o(e.h1,{id:"form-migration",children:"Form Migration"}),`
`,r(e.p,{children:["For the ",o(e.code,{children:"@availity/element"}),` components, we have chosen to move away from
`,o(e.code,{children:"formik"})," in favor of ",o(e.code,{children:"react-hook-form"}),`. For exiting forms utilizing
`,o(e.code,{children:"@availity/react"})," and ",o(e.code,{children:"formik"}),", some refactor is required."]}),`
`,r(e.h2,{id:"why-react-hook-form",children:["Why ",o(e.code,{children:"react-hook-form"}),"?"]}),`
`,r(e.p,{children:[`After a successful internal implementation of an extremely long and
complicated form using `,o(e.code,{children:"react-hook-form"}),`, we decided to move forward with
it. `,o(e.code,{children:"react-hook-form"}),` is very lightweight and flexible. It also boasts a
large community and is actively and regularly supported.`]}),`
`,o(e.h2,{id:"installation",children:"Installation"}),`
`,o(e.pre,{children:o(e.code,{className:"language-sh",children:`npm install react-hook-form
`})}),`
`,o(e.p,{children:"OR"}),`
`,o(e.pre,{children:o(e.code,{className:"language-sh",children:`yarn add react-hook-form
`})}),`
`,o(e.h2,{id:"usage",children:"Usage"}),`
`,r(e.p,{children:["At the moment, @availity/element does not export a ",o(e.code,{children:"<Form />"}),` component.
Instead, use the native `,o(e.code,{children:"<form>"})," element. You can then use ",o(e.code,{children:"react-hook-form"}),`'s
`,o(e.code,{children:"useForm"})," hook to manage your form."]}),`
`,r(e.p,{children:["You can find some examples ",o(e.a,{href:"/docs/layouts-form--docs",children:"here"}),"."]})]})}function j(n={}){const{wrapper:e}=Object.assign({},t(),n.components);return e?o(e,Object.assign({},n,{children:o(i,n)})):i(n)}export{j as default};
//# sourceMappingURL=form-migration-7cba09cf.js.map
