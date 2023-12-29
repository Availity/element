import{a as n,j as i,F as s}from"./jsx-runtime-a3bcee63.js";import"./chunk-PCJTTTQV-5d453a50.js";import{M as a}from"./index-d99372d3.js";import{u as r}from"./index-da4379a2.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-ccb90fa8.js";import"../sb-preview/runtime.js";import"./react-18-b9b6ed02.js";import"./index-8a077077.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-16f43d9e.js";import"./_baseFor-53bad3ef.js";import"./index-e9d7ebdf.js";import"./_initCloneObject-31384e14.js";import"./index-356e4a49.js";const l=""+new URL("storybook_accessibility-7d010ae2.png",import.meta.url).href;function t(o){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",a:"a"},r(),o.components);return i(s,{children:[n(a,{title:"Accessibility"}),`
`,n(e.h1,{id:"accessibility",children:"Accessibility"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"@availity/element"}),` library is built with accessibility in mind.
Specifically, we are following the 508 compliance guidelines. However,
it's important to note that simply using `,n(e.code,{children:"@availity/element"}),` does not
guarantee your app's compliance with 508 guidelines. It gives you a
head start. As you implement the components, you will need to ensure your
compliance based on your implementation. This guide will provide some
pointers on how you can monitor and maintain 508 compliance in your app.`]}),`
`,n(e.h2,{id:"what-is-508-compliance",children:"What is 508 compliance?"}),`
`,n(e.p,{children:`508 compliance is adherence to a set of standards outlined in Section 508
of the Rehabilitation Act of 1973. These standards, maintained by the
U.S. Access Board, are in place to ensure information and communication
technology is accessible to people with disabilities.`}),`
`,n(e.p,{children:`Section 508 is based off of the Web Content Accessibility Guidelines (WCAG)
published by the Web Accessibility Initiative (WAI) of the World Wide Web
Consortium (W3C). The version of the guidelines we are following is WCAG
2.1 and the level we are aiming for AA.`}),`
`,n(e.h2,{id:"how-did-we-test-for-508-compliance",children:"How did we test for 508 compliance?"}),`
`,i(e.p,{children:["The components within ",n(e.code,{children:"@availity/element"}),` are designed from the beginning
in collaboration with the UX team and with 508 compliance in mind.`]}),`
`,i(e.p,{children:[`After development, we use three tools to test individual components for 508
compliance. First, we use `,n(e.a,{href:"https://storybook.js.org/addons/@storybook/addon-a11y",target:"_blank",rel:"nofollow noopener noreferrer",children:"Storybook's addon-a11y"}),`.
You can see the results of these scans for each component within `,n(e.a,{href:"https://availity.github.io/element/?path=/docs/element--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"Storybook"}),`
on the Accessibility tab.`]}),`
`,n("img",{src:l}),`
`,n(e.p,{children:"We also scan each component using the WAVE extension and Level Access's Access Assistant."}),`
`,n(e.h2,{id:"how-can-i-ensure-508-compliance-in-my-app",children:"How can I ensure 508 compliance in my app?"}),`
`,i(e.p,{children:["Scanning your app using the ",n(e.a,{href:"https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh",target:"_blank",rel:"nofollow noopener noreferrer",children:"WAVE extension"}),`
and `,n(e.a,{href:"https://chromewebstore.google.com/detail/continuum-explorer/pgkgokkkoamjdmbnegbedepbhbgecplj",target:"_blank",rel:"nofollow noopener noreferrer",children:"Continuum Explorer"}),`
is a good way to test for 508 compliance. They will identify issues and,
in some cases, suggest a remediation path.`]}),`
`,i(e.p,{children:[`In general it is important to use native html elements whenever possible
and for their intended purposes. When not possible, ensure you are using
the correct `,n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA",target:"_blank",rel:"nofollow noopener noreferrer",children:"ARIA roles and attributes"}),"."]})]})}function C(o={}){const{wrapper:e}=Object.assign({},r(),o.components);return e?n(e,Object.assign({},o,{children:n(t,o)})):t(o)}export{C as default};
//# sourceMappingURL=accessibility-66dee6a3.js.map
