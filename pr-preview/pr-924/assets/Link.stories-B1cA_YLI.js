import{j as r}from"./iframe-D9VxGUXm.js";import{S as l}from"./MuiSystemProperties-CtLr4Jcz.js";import{L as e}from"./Link-CE5d5_gL.js";import"./preload-helper-Dab_6GC_.js";import"./Common-BJBtPzYe.js";import"./faMagnifyingGlass-DEVYYJwr.js";import"./FaSvgIcon-CwoOr0og.js";import"./SvgIcon-Bgb2NC38.js";import"./memoTheme-CUWoCynM.js";import"./styled-D8Xb_hHx.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./Link-Ch49g_Y_.js";import"./useTheme-B41ItSj5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Typography-mI_XzOBj.js";import"./isFocusVisible-B8k4qzLc.js";const c=[...l,"align"],P={title:"Components/Link/Link",component:e,tags:["autodocs"],parameters:{docs:{controls:{exclude:c},description:{component:"Simple link component that renders an `<a>` tag with the href formatted to leverage loadApp so the link gets loaded inside the home page's iframe\n\n> Built on top of `Typography`, a CSS utility, the `Link` component also supports all [system properties](https://mui.com/system/properties/). They are omitted for brevity, but can be used as props directly on the component."}},canvas:{controls:{exclude:c}}},args:{href:"#"}},a={render:t=>r.jsx(e,{...t}),args:{loadApp:!0,children:"This text is a child of Link"}},n={render:()=>r.jsxs("div",{children:[r.jsx(e,{href:"#",gutterBottom:!0,children:"Medium standalone link (default)"}),r.jsx("br",{}),r.jsx(e,{href:"#",gutterBottom:!0,variant:"body2",children:"Small standalone link"}),r.jsx("br",{}),r.jsx(e,{href:"#",gutterBottom:!0,variant:"inherit",children:"Inline link"})]})},o={render:t=>r.jsx(e,{...t,loadApp:!1,target:"_blank"}),args:{children:"Link opens in new window"}},p={render:t=>r.jsx(e,{...t,loadApp:!1,target:"_blank",iconPosition:"end"}),args:{children:"Link opens in new window"}},d={render:t=>r.jsx(e,{...t,href:"https://github.com/Availity",target:"_blank"}),args:{children:"Availity Github"}},i={render:t=>r.jsx(e,{...t,href:"/public/apps/portal-app"}),args:{children:"Portal App"}},s={render:()=>r.jsxs("div",{children:[r.jsx(e,{href:"#",gutterBottom:!0,children:"Link 1"}),r.jsx("br",{}),r.jsx(e,{href:"#",gutterBottom:!0,children:"Link 2"}),r.jsx("br",{}),r.jsx(e,{href:"#",gutterBottom:!0,children:"Link 3"}),r.jsx("br",{}),r.jsx(e,{href:"#",gutterBottom:!0,children:"Link 4"}),r.jsx("br",{}),r.jsx(e,{href:"#",gutterBottom:!0,children:"Link 5"}),r.jsx("br",{}),r.jsx(e,{href:"#",gutterBottom:!0,children:"Link 6"}),r.jsx("br",{})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args: LinkProps) => <Link {...args} />,
  args: {
    loadApp: true,
    children: 'This text is a child of Link'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <Link href="#" gutterBottom>
        Medium standalone link (default)
      </Link>
      <br />
      <Link href="#" gutterBottom variant="body2">
        Small standalone link
      </Link>
      <br />
      <Link href="#" gutterBottom variant="inherit">
        Inline link
      </Link>
    </div>
}`,...n.parameters?.docs?.source},description:{story:"Inline styling is achieved with the `inherit` variant.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: LinkProps) => <Link {...args} loadApp={false} target="_blank" />,
  args: {
    children: 'Link opens in new window'
  }
}`,...o.parameters?.docs?.source},description:{story:"The `OpenInNewIcon` has an accessible name to tell screenreaders that it opens in a new window.",...o.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: LinkProps) => <Link {...args} loadApp={false} target="_blank" iconPosition="end" />,
  args: {
    children: 'Link opens in new window'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args: LinkProps) => <Link {...args} href="https://github.com/Availity" target="_blank" />,
  args: {
    children: 'Availity Github'
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: LinkProps) => <Link {...args} href="/public/apps/portal-app" />,
  args: {
    children: 'Portal App'
  }
}`,...i.parameters?.docs?.source},description:{story:"Inspect the link to see the `loadApp` url transformation in action.",...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <Link href="#" gutterBottom>
        Link 1
      </Link>
      <br />
      <Link href="#" gutterBottom>
        Link 2
      </Link>
      <br />
      <Link href="#" gutterBottom>
        Link 3
      </Link>
      <br />
      <Link href="#" gutterBottom>
        Link 4
      </Link>
      <br />
      <Link href="#" gutterBottom>
        Link 5
      </Link>
      <br />
      <Link href="#" gutterBottom>
        Link 6
      </Link>
      <br />
    </div>
}`,...s.parameters?.docs?.source},description:{story:"The `gutterBottom` prop achieves correct spacing for a list of links.",...s.parameters?.docs?.description}}};const I=["_Link","_Variants","_NewWindow","_NewWindowEndIcon","_AbsoluteUrl","_RelativeUrl","_Lists"];export{d as _AbsoluteUrl,a as _Link,s as _Lists,o as _NewWindow,p as _NewWindowEndIcon,i as _RelativeUrl,n as _Variants,I as __namedExportsOrder,P as default};
