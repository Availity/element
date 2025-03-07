import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{useMDXComponents as r}from"./index-CfSBfIZi.js";import{M as l,b as t}from"./index-DMsY1Svh.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DK5hvbbG.js";import"./index-BEx9gAkE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";function o(i){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"BS4 Migration/Component"}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Copy file into package"})}),`
`,e.jsx(n.h1,{id:"component-migration",children:"Component Migration"}),`
`,e.jsx(n.p,{children:"This migration guide is just an overview. For more in depth component information, visit:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://design.availity.com/2e36e50c7/p/77f9e0-components/b/7234bb",rel:"nofollow",children:"Availity Design Documentation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://mui.com/material-ui/react-button/",rel:"nofollow",children:"MUI Documentation"})}),`
`]}),`
`,e.jsx(n.h2,{id:"key-differences-not-exhaustive-list",children:"Key Differences (not exhaustive list)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Changed",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"oldRSProp"})," -> ",e.jsx(n.code,{children:"newMUIProp"})," ~1:1 relationship from Reactstrap to MUI"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["New",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"newMUIProp"})," that users will likely need or should be aware of"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Removed",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"oldRSProp"})," that is not utilized and has no equivalent/relative in MUI"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Other",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"List unexpected behavioral differences or other gotchas"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"code-examples",children:"Code Examples"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"reactstrap"}),"/",e.jsx(n.code,{children:"availity-react"})," Example:"]}),`
`,e.jsx(t,{code:`
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
`,e.jsx(t,{code:`
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
`})]})}function j(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{j as default};
