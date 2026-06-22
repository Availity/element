import{j as e,M as o}from"./iframe-D9VxGUXm.js";import{useMDXComponents as r}from"./index-yiWAZKXg.js";import"./preload-helper-Dab_6GC_.js";function i(s){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Upgrading/Upgrading to v3"}),`
`,e.jsx(n.h2,{id:"upgrading-to-element-v3",children:"Upgrading to Element v3"}),`
`,e.jsxs(n.p,{children:["Element v3 modernizes the build and development toolchain. Packages are now published as ",e.jsx(n.strong,{children:"ESM-only"})," and the minimum Node.js version has been raised."]}),`
`,e.jsx(n.h3,{id:"breaking-changes",children:"Breaking Changes"}),`
`,e.jsx(n.h4,{id:"nodejs-22-required",children:"Node.js 22+ Required"}),`
`,e.jsx(n.p,{children:"Node.js 20 is no longer supported. Update your project to Node.js 22 or 24."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Check your version
node --version

# If using fnm
fnm install 24
fnm use 24
`})}),`
`,e.jsx(n.h4,{id:"esm-only-packages",children:"ESM-Only Packages"}),`
`,e.jsxs(n.p,{children:["All ",e.jsx(n.code,{children:"@availity/element"})," and ",e.jsx(n.code,{children:"@availity/mui-*"})," packages are now published as ES modules only. CommonJS ",e.jsx(n.code,{children:"require()"})," is no longer supported."]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["If you're using standard ",e.jsx(n.code,{children:"import"})," syntax, no changes are needed."]})}),`
`,e.jsxs(n.p,{children:["If you have any dynamic ",e.jsx(n.code,{children:"require()"})," calls referencing these packages, switch to dynamic ",e.jsx(n.code,{children:"import()"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- const { Button } = require('@availity/element');
+ const { Button } = await import('@availity/element');
`})}),`
`,e.jsx(n.h4,{id:"test-configuration",children:"Test Configuration"}),`
`,e.jsxs(n.p,{children:["The internal test runner has moved from Jest to Vitest. This does ",e.jsx(n.strong,{children:"not"})," affect consumers unless you are importing test utilities from element packages."]}),`
`,e.jsxs(n.p,{children:["If your project uses Jest and encounters transform errors with ",e.jsx(n.code,{children:"@availity"})," packages (because they are now ESM), add them to your transform ignore list:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// jest.config.js
module.exports = {
  transformIgnorePatterns: [
    'node_modules/(?!(@availity|axios)/)'
  ],
};
`})}),`
`,e.jsxs(n.p,{children:["Or in ",e.jsx(n.code,{children:"@availity/workflow"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// workflow.js
config.development.jestOverrides = {
  transformIgnorePatterns: [
    'node_modules/(?!(@availity|axios)/)'
  ],
};
`})}),`
`,e.jsx(n.p,{children:"If using Vitest, no additional configuration is needed."}),`
`,e.jsx(n.h3,{id:"non-breaking-changes",children:"Non-Breaking Changes"}),`
`,e.jsx(n.p,{children:"These changes are internal and should not require any action from consumers:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Build tooling migrated from Jest to Vitest"}),`
`,e.jsx(n.li,{children:"ESLint upgraded from v8 (legacy config) to v9 (flat config)"}),`
`,e.jsx(n.li,{children:"Internal build output changed from dual CJS/ESM to ESM-only"}),`
`,e.jsx(n.li,{children:"TypeScript target updated to ESNext"}),`
`,e.jsx(n.li,{children:"Dependency versions updated (React 19.2.7, MUI 7.3.11)"}),`
`]})]})}function l(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{l as default};
