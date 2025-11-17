import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-DawnV9gJ.js";import"./DocsRenderer-CFRXHY34-D407014x.js";import{M as l}from"./index-rPqxEjSI.js";import"./index-BSuoOqEd.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./iframe-CjYT83Dq.js";import"./client-DFMpBjsa.js";import"./index-CCz_6dyq.js";import"./index-CRBziY_1.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Upgrading to v2"}),`
`,e.jsx(n.h2,{id:"upgrading-to-element-v2",children:"Upgrading to Element v2"}),`
`,e.jsxs(n.p,{children:["Element v2 introduces major upgrades to ",e.jsx(n.code,{children:"@mui/material"})," v7 and ",e.jsx(n.code,{children:"@mui/x-*"}),` v8. For a
comprehensive list of the changes made see`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v7/",rel:"nofollow",children:[e.jsx(n.code,{children:"@mui/material"})," Upgrade to v7 Guide"]})}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://mui.com/x/migration/migration-pickers-v7/",rel:"nofollow",children:[e.jsx(n.code,{children:"@mui/x-date-pickers"})," Migration from v7 to v8"]})}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://mui.com/x/migration/migration-tree-view-v7/",rel:"nofollow",children:[e.jsx(n.code,{children:"@mui/x-tree-view"})," Migration from v7 to v8"]})}),`
`]}),`
`,e.jsx(n.h3,{id:"critical-changes",children:"Critical Changes"}),`
`,e.jsx(n.h4,{id:"react-upgrade-and-dependency-coordination",children:"React Upgrade and Dependency Coordination"}),`
`,e.jsxs(n.p,{children:[`By default the material packages will use v19 of react, however if using a lower version of react a resolution will need to be
set for the corresponding version of `,e.jsx(n.code,{children:"react-is"}),". See the MUI notes on ",e.jsx(n.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v7/#react-18-and-below",rel:"nofollow",children:"React 18 and below"})]}),`
`,e.jsx(n.h3,{id:"potential-impact-changes",children:"Potential Impact Changes"}),`
`,e.jsx(n.p,{children:"These changes may affect your application depending on component usage:"}),`
`,e.jsx(n.h4,{id:"component-specific-changes",children:"Component-Specific Changes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://mui.com/x/migration/migration-pickers-v7/",rel:"nofollow",children:"Datepicker"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://mui.com/x/migration/migration-pickers-v7/",rel:"nofollow",children:"New DOM structure for the field"})," moves away from the old text input. The new section list input is more accessible, but removes any ",e.jsx(n.code,{children:"placeholder"})," from the field."]}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://mui.com/x/migration/migration-pickers-v7/#treat-partially-filled-date-as-null-in-onchange",rel:"nofollow",children:["Treat partially filled date as ",e.jsx(n.code,{children:"null"})," in ",e.jsx(n.code,{children:"onChange"})]})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://mui.com/x/migration/migration-pickers-v7/#deprecate-the-disableopenpicker-prop",rel:"nofollow",children:"disableOpenPicker prop deprecated"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://mui.com/x/migration/migration-pickers-v7/#do-not-pass-the-date-object-as-a-generic",rel:"nofollow",children:"Do not pass the date object as a generic"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["LoadingButton",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["LoadingButton pattern now matches Button, removing the ",e.jsx(n.code,{children:"variant"})," prop"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h4,{id:"removed-internals",children:"Removed Internals"}),`
`,e.jsx(n.p,{children:"We are cleaning up our exports to no longer include internal utils/components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Alert: ",e.jsx(n.code,{children:"AlertIcons"})]}),`
`,e.jsxs(n.li,{children:["Autocomplete: ",e.jsx(n.code,{children:"fetchCodes"}),", ",e.jsx(n.code,{children:"handleGetCodesOptionLabel"}),", ",e.jsx(n.code,{children:"fetchOrgs"}),", ",e.jsx(n.code,{children:"handleGetOrgOptionLabel"}),", ",e.jsx(n.code,{children:"fetchProviders"}),", ",e.jsx(n.code,{children:"handleGetProviderOptionLabel"}),", ",e.jsx(n.code,{children:"Code"})," type, ",e.jsx(n.code,{children:"Organization"})," type, ",e.jsx(n.code,{children:"Provider"})," type"]}),`
`,e.jsxs(n.li,{children:["Dialog: ",e.jsx(n.code,{children:"CloseButtonSlot"})]}),`
`,e.jsxs(n.li,{children:["FileSelector: ",e.jsx(n.code,{children:"outerBoxStyles"}),", ",e.jsx(n.code,{children:"innerBoxStyles"}),", ",e.jsx(n.code,{children:"createCounter"}),", ",e.jsx(n.code,{children:"DropzoneContainer"}),", ",e.jsx(n.code,{children:"formatFileTooLarge"}),", ",e.jsx(n.code,{children:"CLOUD_URL"})]}),`
`,e.jsxs(n.li,{children:["Form Utils: ",e.jsx(n.code,{children:"InputPropOverrides"}),", ",e.jsx(n.code,{children:"SearchByContainer"}),", ",e.jsx(n.code,{children:"SelectDivider"}),", ",e.jsx(n.code,{children:"SelectExpandIcon"}),", ",e.jsx(n.code,{children:"SelectPropOverrides"}),", ",e.jsx(n.code,{children:"SelectAccessibilityOverrides"})]}),`
`,e.jsxs(n.li,{children:["Spaces: ",e.jsx(n.code,{children:"INITIAL_STATE"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"non-impact-changes",children:"Non-Impact Changes"}),`
`,e.jsx(n.p,{children:"The following changes should not require any action:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v7/#deprecated-apis-removed",rel:"nofollow",children:"Deprecated APIs removed"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"",children:"Dialog onBackdropClick prop removal"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v7/#grid-and-grid2-renamed",rel:"nofollow",children:"Grid and Grid2 renamed"})," - see ",e.jsx(n.code,{children:"element"})," v1 codemods"]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v7/#tablepaginationactions-types-import-path-changed",rel:"nofollow",children:"TablePaginationActions types import path changed"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://mui.com/x/migration/migration-tree-view-v7/#%E2%9C%85-use-simple-tree-view-instead-of-tree-view",rel:"nofollow",children:"Use Simple Tree View instead of Tree View"})}),`
`]})]})}function f(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{f as default};
