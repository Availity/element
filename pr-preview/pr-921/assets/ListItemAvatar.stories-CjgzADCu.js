import{j as t}from"./iframe-D__S4UWJ.js";import{I as m}from"./index-CSzUZNdV.js";import{A as n}from"./index-DewHDtw1.js";import{U as o,h as p}from"./index-DhycCYh-.js";import{G as a}from"./index-DMk5qu1-.js";import{T as d}from"./index-DoXDZQMb.js";import{L as s}from"./ListItemAvatar--Je-Z_pN.js";import{L as c,a as l}from"./ListItemText--ccORMyq.js";import{L as u}from"./ListItem-BV4bxLfR.js";import{L}from"./ListItemButton-Zsar10j8.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-CiiYXVhS.js";import"./useTheme-CFaiP_LB.js";import"./styled-D9hsOvpf.js";import"./memoTheme-BV959hj8.js";import"./useSlot-O8ollNDw.js";import"./mergeSlotProps-D3BIdMsf.js";import"./useForkRef-BqPQmHw4.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-92omNL17.js";import"./useControlled-jwoPGZ3a.js";import"./useEventCallback-DJS3GGm_.js";import"./getReactElementRef-CXYGkVyS.js";import"./Portal-DQUO7uTD.js";import"./utils-qh6k9bbM.js";import"./TransitionGroupContext-y7HMp-IG.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BwqG8d0v.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CNhmLG-N.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Ci_mfbwX.js";import"./CircularProgress-haj7VCd3.js";import"./Button-CFqvl5Id.js";import"./index-C4VUnf3P.js";import"./index-CBSryq4n.js";import"./___vite-browser-external_commonjs-proxy-Cq4iaMOo.js";import"./index-Cr0Duiqm.js";import"./Avatar-Kxoifjff.js";import"./createSvgIcon-CjZPmBcj.js";import"./SvgIcon-XbFZbbsX.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-BOn3j62W.js";import"./Grid-BBYwbGJ2.js";import"./isMuiElement-BbpHSvRS.js";import"./styled-Bi8w4HDu.js";import"./Stack-CGHwgn-1.js";import"./Container-B4RgbXyO.js";import"./Typography-jktlZrXz.js";import"./List-BzNi2ci2.js";import"./ListItemText-xGpWUmt-.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-C7i1elRv.js";import"./ListItemButton-6uvn8AY0.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: (args: ListItemAvatarProps) => <ListItemAvatar {...args}>
      <Avatar size="m">
        <UserIcon />
      </Avatar>
    </ListItemAvatar>
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Grid container spacing={8}>
      <Grid size={{
      xs: 12,
      sm: 6
    }}>
        <Typography variant="h6" component="div" id="users-default-spacing-header">
          Default Spacing
        </Typography>
        <List aria-labelledby="users-default-spacing-header">
          {[0, 1, 2, 3].map(value => <ListItem key={value} disablePadding secondaryAction={<IconButton title="message">
                  <MailIcon />
                </IconButton>}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar size="m">
                    <UserIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="List item" secondary="Secondary" />
              </ListItemButton>
            </ListItem>)}
        </List>
      </Grid>
      <Grid size={{
      xs: 12,
      sm: 6
    }}>
        <Typography variant="h6" component="div" id="users-dense-spacing-header">
          Dense Spacing
        </Typography>
        <List dense aria-labelledby="users-dense-spacing-header">
          {[4, 5, 6, 7].map(value => <ListItem key={value} disablePadding secondaryAction={<IconButton title="message">
                  <MailIcon />
                </IconButton>}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar size="m">
                    <UserIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="List item" secondary="Secondary" />
              </ListItemButton>
            </ListItem>)}
        </List>
      </Grid>
    </Grid>
}`,...i.parameters?.docs?.source}}};const gt=["_ListItemAvatar","_UserList"];export{e as _ListItemAvatar,i as _UserList,gt as __namedExportsOrder,It as default};
