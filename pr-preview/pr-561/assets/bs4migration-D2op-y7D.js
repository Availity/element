import{j as n}from"./jsx-runtime-CcL-W3nW.js";import{useMDXComponents as r}from"./index-CfSBfIZi.js";import{M as s,b as o}from"./index-D8lhJGvc.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DGcjME2k.js";import"./index-BEx9gAkE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";function i(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"BS4 Migration/Button"}),`
`,n.jsx(e.h1,{id:"button-migration",children:"Button Migration"}),`
`,n.jsx(e.p,{children:"This migration guide is just an overview. For more in depth component information, visit:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://design.availity.com/2e36e50c7/p/54f663-button",rel:"nofollow",children:"Availity Design Documentation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://mui.com/material-ui/react-button/",rel:"nofollow",children:"MUI Documentation"})}),`
`]}),`
`,n.jsx(e.h2,{id:"key-differences-not-exhaustive-list",children:"Key Differences (not exhaustive list)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Changed",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Per UX, the available colors for a button have changed, notably the removal of success and error colors."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Removed",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"outline"})," while mui moves this option into the ",n.jsx(e.code,{children:"variant"})," prop, per UX this variant has also been removed going forward."]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Other",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"UX has updated the guidelines for when to use which color. Refer to design docs for more information."}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"code-examples",children:"Code Examples"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"reactstrap"}),"/",n.jsx(e.code,{children:"availity-react"})," Example:"]}),`
`,n.jsx(o,{code:`
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
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"@availity/element"})," Example:"]}),`
`,n.jsx(o,{code:`
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
`})]})}function j(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{j as default};
