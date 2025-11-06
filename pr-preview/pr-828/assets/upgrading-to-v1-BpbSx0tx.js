import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as o}from"./index-XODwqvNS.js";import"./DocsRenderer-CFRXHY34-C-ansq5m.js";import{M as s}from"./index-CK5JGGrE.js";import"./index-ChsGqxH_.js";import"./index-BgYLq7fD.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./iframe-C-gpLYgv.js";import"./client-DQNj1uEJ.js";import"./index-DdXvKv-Q.js";import"./index-Bxu_udwM.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Upgrading to v1"}),`
`,e.jsx(n.h2,{id:"upgrading-to-element-v1",children:"Upgrading to Element v1"}),`
`,e.jsxs(n.p,{children:[`Element v1 introduces a major upgrade to Material UI v6. This guide outlines
the breaking changes and provides migration tools to ensure a smooth
transition. We've developed custom codemods based on Material UI's
official migration tools to automate many of the required changes. For a
comporehensive list of the changes made in MUI v6 see
`,e.jsx(n.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v6/",rel:"nofollow",children:"Material UI's Upgrade to v6 Guide"}),"."]}),`
`,e.jsx(n.h3,{id:"critical-changes",children:"Critical Changes"}),`
`,e.jsx(n.p,{children:"These changes will more than likely affect your application:"}),`
`,e.jsx(n.h4,{id:"grid-component-updates",children:"Grid Component Updates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Size Props"}),": Renamed the ",e.jsx(n.code,{children:"xs"}),", ",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"md"}),", ",e.jsx(n.code,{children:"lg"}),", and ",e.jsx(n.code,{children:"xl"})," props to unified size prop"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Offset Props"}),": Renamed the ",e.jsx(n.code,{children:"xsOffset"}),", ",e.jsx(n.code,{children:"smOffset"}),", ",e.jsx(n.code,{children:"mdOffset"}),", ",e.jsx(n.code,{children:"lgOffset"}),", and ",e.jsx(n.code,{children:"xlOffset"})," props to unified offset prop"]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Use this codemod to migrate to the new props:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx @availity/mui-codemod@latest v1.0.0/grid-v2-props <path/to/folder>
`})}),`
`,e.jsxs(n.p,{children:["To migrate manually, see ",e.jsx(n.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v6/#grid2",rel:"nofollow",children:"Material UI's documentation"}),"."]}),`
`,e.jsx(n.h3,{id:"potential-impact-changes",children:"Potential Impact Changes"}),`
`,e.jsx(n.p,{children:"These changes may affect your application depending on component usage:"}),`
`,e.jsx(n.h4,{id:"component-specific-changes",children:"Component-Specific Changes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v6/#accordion",rel:"nofollow",children:"Accordion"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Summary wrapped in an ",e.jsx(n.code,{children:"h3"})," heading element"]}),`
`,e.jsx(n.li,{children:"Summary as a button html structure changes"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v6/#autocomplete",rel:"nofollow",children:"Autocomplete"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Modified ",e.jsx(n.code,{children:"onInputChange"})," callback behavior"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v6/#chip",rel:"nofollow",children:"Chip"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Updated focus handling mechanics"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v6/#divider",rel:"nofollow",children:"Divider"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Changed vertical orientation to a ",e.jsx(n.code,{children:"<div>"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v6/#grid2",rel:"nofollow",children:"Grid"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Removed ",e.jsx(n.code,{children:"disableEqualOverflow"})," prop"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Modified item spacing behavior"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v6/#typography",rel:"nofollow",children:"Typography"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Removed color prop"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h4,{id:"non-impact-changes",children:"Non-Impact Changes"}),`
`,e.jsx(n.p,{children:"The following changes should not require any action:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v6/#umd-bundle-removed",rel:"nofollow",children:"Removal of UMD bundle"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v6/#grid2",rel:"nofollow",children:"Grid2 unstable prefix removal"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v6/#button-with-loading-state",rel:"nofollow",children:"Button loading state removed from Lab"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v6/#listitem",rel:"nofollow",children:"ListItem deprecated props removal"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v6/#usemediaquery-types",rel:"nofollow",children:"useMediaQuery type modifications"})}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"optional-future-proofing",children:"Optional Future-Proofing"}),`
`,e.jsxs(n.p,{children:["Material UI v6 deprecates system props in the ",e.jsx(n.code,{children:"Box"}),", ",e.jsx(n.code,{children:"Typography"}),", ",e.jsx(n.code,{children:"Link"}),`,
`,e.jsx(n.code,{children:"Grid"}),", ",e.jsx(n.code,{children:"Stack"})," components. Deprecated props include: ",e.jsx(n.code,{children:"mt"}),", ",e.jsx(n.code,{children:"bgcolor"}),`, and
similar styling props. While not required for Element v1, early migration
can be done via codemod:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx @availity/mui-codemod@latest v1.0.0/system-props <path/to/folder>
`})}),`
`,e.jsxs(n.p,{children:["For More information see ",e.jsx(n.a,{href:"https://mui.com/material-ui/migration/migrating-from-deprecated-apis/#system-props",rel:"nofollow",children:"Material UI's Migrating From Deprecated APIs Guide"}),"."]})]})}function v(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{v as default};
