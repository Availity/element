import{j as i}from"./jsx-runtime-CcL-W3nW.js";import{T as h}from"./index-BtPDELIe.js";import{L as x}from"./index-eH-KrvaH.js";import{s as o}from"./styled-CF1hcdwO.js";import"./index-DcWiA9TO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Typography-CvSvtD2a.js";import"./generateUtilityClass-CVWqFxsA.js";import"./identifier-Dtqimryx.js";import"./index-f0Aa_BgU.js";import"./extendSxProp-B5AgUjQT.js";import"./DefaultPropsProvider-_cNB_dWy.js";import"./useTheme-C2CrmYKc.js";import"./emotion-react.browser.esm-CU7ej9d2.js";import"./memoTheme-D-rVhYRp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClasses-BGOCnVj7.js";import"./index-4AU0IlPL.js";import"./faCircleArrowRight-BeBmJtPK.js";import"./faUser-DXPB7Q64.js";import"./faSortDown-nq-jkck6.js";import"./SvgIcon-DSdWmKAH.js";import"./Link-DYJ9uraP.js";import"./useTheme-DUkCvbx_.js";import"./isFocusVisible-B8k4qzLc.js";const g=o("div",{name:"AvDisclaimer",slot:"root",overridesResolver:(e,r)=>[r.root,e.accent&&r.accent,e.dense&&r.dense]})({}),D=o(h,{name:"AvDisclaimer",slot:"header"})(({ownerState:e})=>({marginBottom:e.dense?"4px":"8px"})),v=o(x,{name:"AvDisclaimer",slot:"link"})(({ownerState:e})=>({marginTop:e.dense?"8px":"16px",display:"block"})),a=({accent:e=!0,dense:r=!1,description:f,headerText:s,link:l,...y})=>{let n="body1",d="h5";r&&(n="body2",d="h6");const m={dense:r};return i.jsxs(g,{accent:e,dense:r,...y,children:[s&&i.jsx(D,{variant:d,ownerState:m,color:"text.secondary",children:s}),i.jsx(h,{variant:n,color:"text.secondary",children:f}),l&&i.jsx(v,{ownerState:m,...l,iconPosition:"end",variant:n})]})};try{a.displayName="Disclaimer",a.__docgenInfo={description:"",displayName:"Disclaimer",props:{headerText:{defaultValue:null,description:"The text to display in the header",name:"headerText",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"The text to display in the body",name:"description",required:!0,type:{name:"ReactNode"}},link:{defaultValue:null,description:"The link to display",name:"link",required:!1,type:{name:"LinkProps"}},accent:{defaultValue:{value:"true"},description:"If true, the warning accent display on the left",name:"accent",required:!1,type:{name:"boolean"}},dense:{defaultValue:{value:"false"},description:"If true, the Disclaimer displays with less padding",name:"dense",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The id of the element",name:"id",required:!1,type:{name:"string"}}}}}catch{}const M={title:"Components/Disclaimer/Disclaimer",component:a,tags:["autodocs"]},t={render:e=>i.jsx(a,{...e}),args:{description:"A description about the disclaimer.",headerText:"This is a header",link:{href:"#",children:"A link",target:"_blank"}}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: DisclaimerProps) => <Disclaimer {...args} />,
  args: {
    description: 'A description about the disclaimer.',
    headerText: 'This is a header',
    link: {
      href: '#',
      children: 'A link',
      target: '_blank'
    }
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const Q=["_Disclaimer"];export{t as _Disclaimer,Q as __namedExportsOrder,M as default};
