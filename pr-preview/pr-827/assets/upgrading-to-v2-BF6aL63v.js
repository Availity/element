import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-DawnV9gJ.js";import"./DocsRenderer-CFRXHY34-DhydvFSI.js";import{M as l}from"./index-Dfj954Tz.js";import"./index-BSuoOqEd.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./iframe-C800xLGB.js";import"./client-DFMpBjsa.js";import"./index-CCz_6dyq.js";import"./index-CRBziY_1.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(n){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Upgrading to v2"}),`
`,e.jsx(i.h2,{id:"upgrading-to-element-v2",children:"Upgrading to Element v2"}),`
`,e.jsxs(i.p,{children:["Element v2 introduces major upgrades to ",e.jsx(i.code,{children:"@mui/material"})," v7 and ",e.jsx(i.code,{children:"@mui/x-*"}),` v8. For a
comprehensive list of the changes made see`]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsxs(i.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v7/",rel:"nofollow",children:[e.jsx(i.code,{children:"@mui/material"})," Upgrade to v7 Guide"]})}),`
`,e.jsx(i.li,{children:e.jsxs(i.a,{href:"https://mui.com/x/migration/migration-pickers-v7/",rel:"nofollow",children:[e.jsx(i.code,{children:"@mui/x-date-pickers"})," Migration from v7 to v8"]})}),`
`,e.jsx(i.li,{children:e.jsxs(i.a,{href:"https://mui.com/x/migration/migration-tree-view-v7/",rel:"nofollow",children:[e.jsx(i.code,{children:"@mui/x-tree-view"})," Migration from v7 to v8"]})}),`
`]}),`
`,e.jsx(i.h3,{id:"critical-changes",children:"Critical Changes"}),`
`,e.jsx(i.h4,{id:"react-upgrade-and-dependency-coordination",children:"React Upgrade and Dependency Coordination"}),`
`,e.jsxs(i.p,{children:[`By default the material packages will use v19 of react, however if using a lower version of react a resolution will need to be
set for the corresponding version of `,e.jsx(i.code,{children:"react-is"}),". See the MUI notes on ",e.jsx(i.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v7/#react-18-and-below",rel:"nofollow",children:"React 18 and below"})]}),`
`,e.jsx(i.h3,{id:"potential-impact-changes",children:"Potential Impact Changes"}),`
`,e.jsx(i.p,{children:"These changes may affect your application depending on component usage:"}),`
`,e.jsx(i.h4,{id:"component-specific-changes",children:"Component-Specific Changes"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://mui.com/x/migration/migration-pickers-v7/",rel:"nofollow",children:"Datepicker"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://mui.com/x/migration/migration-pickers-v7/",rel:"nofollow",children:"New DOM structure for the field"}),` moves away from the old text input. The new section list input is more accessible,
but removes any `,e.jsx(i.code,{children:"placeholder"})," from the field. If you are passing your own ",e.jsx(i.code,{children:"TextField"})," you will need to swap to a ",e.jsx(i.code,{children:"PickersTextField"}),"."]}),`
`,e.jsx(i.li,{children:e.jsxs(i.a,{href:"https://mui.com/x/migration/migration-pickers-v7/#treat-partially-filled-date-as-null-in-onchange",rel:"nofollow",children:["Treat partially filled date as ",e.jsx(i.code,{children:"null"})," in ",e.jsx(i.code,{children:"onChange"})]})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://mui.com/x/migration/migration-pickers-v7/#deprecate-the-disableopenpicker-prop",rel:"nofollow",children:"disableOpenPicker prop deprecated"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://mui.com/x/migration/migration-pickers-v7/#do-not-pass-the-date-object-as-a-generic",rel:"nofollow",children:"Do not pass the date object as a generic"})}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:["FileSelector/FileSelector2",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"isCloud"})," is true by default"]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:["LoadingButton",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["LoadingButton pattern now matches Button, removing the ",e.jsx(i.code,{children:"variant"})," prop"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i.h4,{id:"removed-internals",children:"Removed Internals"}),`
`,e.jsx(i.p,{children:"We are cleaning up our exports to no longer include internal utils/components"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Alert: ",e.jsx(i.code,{children:"AlertIcons"})]}),`
`,e.jsxs(i.li,{children:["Autocomplete: ",e.jsx(i.code,{children:"fetchCodes"}),", ",e.jsx(i.code,{children:"handleGetCodesOptionLabel"}),", ",e.jsx(i.code,{children:"fetchOrgs"}),", ",e.jsx(i.code,{children:"handleGetOrgOptionLabel"}),", ",e.jsx(i.code,{children:"fetchProviders"}),", ",e.jsx(i.code,{children:"handleGetProviderOptionLabel"}),", ",e.jsx(i.code,{children:"Code"})," type, ",e.jsx(i.code,{children:"Organization"})," type, ",e.jsx(i.code,{children:"Provider"})," type"]}),`
`,e.jsxs(i.li,{children:["Dialog: ",e.jsx(i.code,{children:"CloseButtonSlot"})]}),`
`,e.jsxs(i.li,{children:["FileSelector: ",e.jsx(i.code,{children:"outerBoxStyles"}),", ",e.jsx(i.code,{children:"innerBoxStyles"}),", ",e.jsx(i.code,{children:"createCounter"}),", ",e.jsx(i.code,{children:"DropzoneContainer"}),", ",e.jsx(i.code,{children:"formatFileTooLarge"}),", ",e.jsx(i.code,{children:"CLOUD_URL"})]}),`
`,e.jsxs(i.li,{children:["Form Utils: ",e.jsx(i.code,{children:"InputPropOverrides"}),", ",e.jsx(i.code,{children:"SearchByContainer"}),", ",e.jsx(i.code,{children:"SelectDivider"}),", ",e.jsx(i.code,{children:"SelectExpandIcon"}),", ",e.jsx(i.code,{children:"SelectPropOverrides"}),", ",e.jsx(i.code,{children:"SelectAccessibilityOverrides"})]}),`
`,e.jsxs(i.li,{children:["Spaces: ",e.jsx(i.code,{children:"INITIAL_STATE"})]}),`
`]}),`
`,e.jsx(i.h3,{id:"non-impact-changes",children:"Non-Impact Changes"}),`
`,e.jsx(i.p,{children:"The following changes should not require any action:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v7/#deprecated-apis-removed",rel:"nofollow",children:"Deprecated APIs removed"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"",children:"Dialog onBackdropClick prop removal"})}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v7/#grid-and-grid2-renamed",rel:"nofollow",children:"Grid and Grid2 renamed"})," - see ",e.jsx(i.code,{children:"element"})," v1 codemods"]}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://mui.com/material-ui/migration/upgrade-to-v7/#tablepaginationactions-types-import-path-changed",rel:"nofollow",children:"TablePaginationActions types import path changed"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://mui.com/x/migration/migration-tree-view-v7/#%E2%9C%85-use-simple-tree-view-instead-of-tree-view",rel:"nofollow",children:"Use Simple Tree View instead of Tree View"})}),`
`]})]})}function f(n={}){const{wrapper:i}={...o(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{f as default};
