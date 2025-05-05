import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{useMDXComponents as n}from"./index-XODwqvNS.js";import"./DocsRenderer-CFRXHY34-ExxRatWW.js";import{M as o}from"./index-D-bhrr3p.js";import"./index-ChsGqxH_.js";import"./index-BgYLq7fD.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./iframe-Dpz4eX-H.js";import"./client-DQNj1uEJ.js";import"./index-DdXvKv-Q.js";import"./index-Bxu_udwM.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const l=""+new URL("storybook_accessibility-f65wF0_E.png",import.meta.url).href,r=""+new URL("level_access_accessibility-DM_o5Zp9.png",import.meta.url).href;function s(t){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Accessibility"}),`
`,e.jsx(i.h1,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"@availity/element"}),` library is built with accessibility in mind. All
components and examples are written to follow US accessibility guidelines. However,
it's important to note that simply using `,e.jsx(i.code,{children:"@availity/element"}),` does not
guarantee your app's compliance with these guidelines. It gives you a
head start. As you implement the components, you will need to ensure your
compliance based on your implementation - components are used as intended
and that larger page patterns keep accessiblity in mind. Testing will need
to be done at the page level to check these larger patterns, i.e. unique
regions and names on the page, not embedding tables, not overusing aria
attributes, etc.`]}),`
`,e.jsx(i.h2,{id:"what-is-accessibilitysection-508-compliance",children:"What is Accessibility/Section 508 Compliance?"}),`
`,e.jsx(i.p,{children:`Accessibility in the United States is adherence to a set of standards outlined in Section 508
of the Rehabilitation Act of 1973. These standards, maintained by the
U.S. Access Board, are in place to ensure information and communication
technology is accessible to people with disabilities.`}),`
`,e.jsx(i.p,{children:`Section 508 is based off of the Web Content Accessibility Guidelines (WCAG)
published by the Web Accessibility Initiative (WAI) of the World Wide Web
Consortium (W3C). The version of the guidelines we are following is WCAG
2.1 and the level we are aiming for AA.`}),`
`,e.jsx(i.h2,{id:"how-did-we-test-for-508-compliance",children:"How did we test for 508 compliance?"}),`
`,e.jsxs(i.p,{children:["The components within ",e.jsx(i.code,{children:"@availity/element"}),` are designed from the beginning
in collaboration with our UX team and with 508 compliance in mind.`]}),`
`,e.jsxs(i.p,{children:[`After development, we use two tools to test individual components for 508
compliance. First, we use `,e.jsx(i.a,{href:"https://storybook.js.org/addons/@storybook/addon-a11y",rel:"nofollow",children:"Storybook's addon-a11y"}),`,
which internally relies on the AXE testing engine.
You can see the results of these scans for each component within `,e.jsx(i.a,{href:"https://availity.github.io/element/?path=/docs/element--docs",rel:"nofollow",children:"Storybook"}),`
on the Accessibility tab.`]}),`
`,e.jsx("img",{src:l,alt:"example accessibility testing results with storybook accessibility tab"}),`
`,e.jsx(i.p,{children:`Secondly, Availity uses the suite of accessibility testing tools from
Level Access for more in depth testing and reporting. This is truly what
Availity refers to as our source of truth when it comes to accessibility
testing and remediation. Internally we use Level Access not only for the
quick scans, but also for extensive manual testing, reporting,
and our annual accessibility audits from the Level Access team.`}),`
`,e.jsx("img",{src:r,alt:"example accessibility testing results with level access extension"}),`
`,e.jsx(i.h2,{id:"how-can-i-ensure-508-compliance-in-my-app",children:"How can I ensure 508 compliance in my app?"}),`
`,e.jsx(i.h3,{id:"approved-testing-tools",children:"Approved Testing tools"}),`
`,e.jsx(i.p,{children:"Availity recommends two testing tools for quick scans of applications"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["AXE - ",e.jsx(i.a,{href:"https://www.deque.com/axe/browser-extensions",rel:"nofollow",children:"DevTools Extension"})]}),`
`,e.jsxs(i.li,{children:["Level Access - the ",e.jsx(i.a,{href:"https://client.levelaccess.com/hc/en-us/articles/18183852987671-Install-the-Level-Access-browser-extension",rel:"nofollow",children:"Level Access Extension"}),`
has a `,e.jsx(i.code,{children:"Quick Scan"}),` option that does not require a Level Access account.
It divides found issues into two categories: confirmed violations and
issues that need review. If an issue needs review it is up to the
accessibility tester to read the possible issue and see if that issue applies.
More often than not the "needs review" issues end up being non-issues, but
require a human to confirm.`]}),`
`]}),`
`,e.jsx(i.h3,{id:"what-if-i-want-to-use-other-testing-tools",children:"What if I want to use other testing tools?"}),`
`,e.jsx(i.p,{children:`In theory, the more testing tools the better but our experience has shown
this leads to many false positives in testing. There are multiple patterns
and solutions for every accessibility problem, and different testing tools
will have different (oftentimes conflicting) preferred solutions. We have
come across a few scenarios already where it is impossible to satisfy
multiple tool requirements because of these conflicts.`}),`
`,e.jsxs(i.p,{children:[`Since internally we use Level Access and Storybook uses Axe, those are the
two we are aligning with and recommend for use with `,e.jsx(i.code,{children:"@availity/element"}),"."]}),`
`,e.jsx(i.h3,{id:"other-resources",children:"Other Resources"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://www.digitala11y.com/products/color/",rel:"nofollow",children:"Color Contrast Checker"})," - useful for absolutely positioned elements that cannot determine background."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://www.w3.org/WAI/ARIA/apg/",rel:"nofollow",children:"ARIA Authoring Practices Guide"})," - published by w3 and the official guide for accessibility patterns and usage."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/Availity/element/issues/212",rel:"nofollow",children:"Element Accessibility Issue Tracker"})," - where we're tracking larger accessibility issues and document possible false positives."]}),`
`]})]})}function j(t={}){const{wrapper:i}={...n(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(s,{...t})}):s(t)}export{j as default};
