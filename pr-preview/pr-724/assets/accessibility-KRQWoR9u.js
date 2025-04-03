import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{useMDXComponents as t}from"./index-CfSBfIZi.js";import"./DocsRenderer-CFRXHY34-C9k33k1W.js";import{M as s}from"./index-BNBZ_PGF.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CfsbhKmf.js";import"./client-BqYpGkAY.js";import"./index-BEx9gAkE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";const a=""+new URL("storybook_accessibility-f65wF0_E.png",import.meta.url).href;function o(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Accessibility"}),`
`,e.jsx(n.h1,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@availity/element"}),` library is built with accessibility in mind.
Specifically, we are following the 508 compliance guidelines. However,
it's important to note that simply using `,e.jsx(n.code,{children:"@availity/element"}),` does not
guarantee your app's compliance with 508 guidelines. It gives you a
head start. As you implement the components, you will need to ensure your
compliance based on your implementation. This guide will provide some
pointers on how you can monitor and maintain 508 compliance in your app.`]}),`
`,e.jsx(n.h2,{id:"what-is-508-compliance",children:"What is 508 compliance?"}),`
`,e.jsx(n.p,{children:`508 compliance is adherence to a set of standards outlined in Section 508
of the Rehabilitation Act of 1973. These standards, maintained by the
U.S. Access Board, are in place to ensure information and communication
technology is accessible to people with disabilities.`}),`
`,e.jsx(n.p,{children:`Section 508 is based off of the Web Content Accessibility Guidelines (WCAG)
published by the Web Accessibility Initiative (WAI) of the World Wide Web
Consortium (W3C). The version of the guidelines we are following is WCAG
2.1 and the level we are aiming for AA.`}),`
`,e.jsx(n.h2,{id:"how-did-we-test-for-508-compliance",children:"How did we test for 508 compliance?"}),`
`,e.jsxs(n.p,{children:["The components within ",e.jsx(n.code,{children:"@availity/element"}),` are designed from the beginning
in collaboration with the UX team and with 508 compliance in mind.`]}),`
`,e.jsxs(n.p,{children:[`After development, we use three tools to test individual components for 508
compliance. First, we use `,e.jsx(n.a,{href:"https://storybook.js.org/addons/@storybook/addon-a11y",rel:"nofollow",children:"Storybook's addon-a11y"}),`.
You can see the results of these scans for each component within `,e.jsx(n.a,{href:"https://availity.github.io/element/?path=/docs/element--docs",rel:"nofollow",children:"Storybook"}),`
on the Accessibility tab.`]}),`
`,e.jsx("img",{src:a}),`
`,e.jsx(n.p,{children:"We also scan each component using the WAVE extension and Level Access's Access Assistant."}),`
`,e.jsx(n.h2,{id:"how-can-i-ensure-508-compliance-in-my-app",children:"How can I ensure 508 compliance in my app?"}),`
`,e.jsxs(n.p,{children:["Scanning your app using the ",e.jsx(n.a,{href:"https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh",rel:"nofollow",children:"WAVE extension"}),`
and `,e.jsx(n.a,{href:"https://chromewebstore.google.com/detail/continuum-explorer/pgkgokkkoamjdmbnegbedepbhbgecplj",rel:"nofollow",children:"Continuum Explorer"}),`
is a good way to test for 508 compliance. They will identify issues and,
in some cases, suggest a remediation path.`]}),`
`,e.jsxs(n.p,{children:[`In general it is important to use native html elements whenever possible
and for their intended purposes. When not possible, ensure you are using
the correct `,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA",rel:"nofollow",children:"ARIA roles and attributes"}),"."]})]})}function w(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{w as default};
