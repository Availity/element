import{j as e}from"./jsx-runtime-CcL-W3nW.js";import{useMDXComponents as c}from"./index-CfSBfIZi.js";import"./index-DcWiA9TO.js";import{M as m,d as p,e as a}from"./index-DcQGBnFc.js";import"./index-DXGSQb0h.js";import{a as h}from"./index-ZQ24UO7u.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Cf9vrsRZ.js";import"./index-BEx9gAkE.js";import"./index-BedKbVpA.js";import"./index-DrFu-skq.js";function n(r){const t={a:"a",code:"code",h1:"h1",p:"p",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Design System/Theme/Default/Colors"}),`
`,e.jsx(t.h1,{id:"colors",children:"Colors"}),`
`,e.jsxs(t.p,{children:["Colors for ",e.jsx(t.code,{children:"light"})," theme."]}),`
`,e.jsxs(t.p,{children:["Listed colors are directly available through the ",e.jsx(t.code,{children:"sx"})," property for select properties (see ",e.jsx(t.a,{href:"https://mui.com/system/properties/",rel:"nofollow",children:"MUI System Properties Documentation"}),")"]}),`
`,e.jsxs(t.p,{children:["e.g. ",e.jsx(t.code,{children:"sx={{ bgcolor: 'primary.main' }}"})]}),`
`,e.jsx(p,{children:Object.entries(h.palette).map(([i,s])=>{let o=typeof s=="object"?s:{[i]:s};if(o=Object.fromEntries(Object.entries(o).filter(([d,l])=>isNaN(l))),JSON.stringify(o)!=="{}")return e.jsx(a,{title:i,colors:{...o}})})})]})}function N(r={}){const{wrapper:t}={...c(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{N as default};
