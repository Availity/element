import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as r}from"./index-XODwqvNS.js";import{M as s,b as o}from"./index-BErLAjug.js";import"./index-ChsGqxH_.js";import"./index-BgYLq7fD.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./iframe-wAWtUfNp.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"BS4 Migration/Button"}),`
`,e.jsx(n.h1,{id:"button-migration",children:"Button Migration"}),`
`,e.jsx(n.p,{children:"This migration guide is just an overview. For more in depth component information, visit:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://design.availity.com/2e36e50c7/p/54f663-button",rel:"nofollow",children:"Availity Design Documentation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://mui.com/material-ui/react-button/",rel:"nofollow",children:"MUI Documentation"})}),`
`]}),`
`,e.jsx(n.h2,{id:"key-differences-not-exhaustive-list",children:"Key Differences (not exhaustive list)"}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsx(n.h4,{id:"️-changed",children:"⚠️ Changed"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"color"})," Per UX, the available colors for a button have changed, notably the removal of success and error colors."]}),`
`]}),`
`,e.jsx(n.h4,{id:"-removed",children:"🚫 Removed"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"outline"})," while mui moves this option into the ",e.jsx(n.code,{children:"variant"})," prop, per UX this variant has also been removed going forward."]}),`
`]}),`
`,e.jsx(n.h3,{id:"other",children:"Other"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"UX has updated the guidelines for when to use which color. Refer to design docs for more information."}),`
`]}),`
`,e.jsx(n.h2,{id:"code-examples",children:"Code Examples"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"reactstrap"}),"/",e.jsx(n.code,{children:"availity-react"})," Example:"]}),`
`,e.jsx(o,{code:`
import { Button } from 'reactstrap';

const ReactstrapButton = () => (
  <Button
    color="primary"
    size="lg"
    outline
    block
  >
    I'm a Button
  </Button>
);
`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@availity/element"})," Example:"]}),`
`,e.jsx(o,{code:`
import { Button } from '@availity/element';

const MUIButton = () => (
  <Button
    color="primary"
    size="large"
    variant="outlined"
    fullWidth
  >
    I'm a Button
  </Button>
);
`})]})}function v(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{v as default};
