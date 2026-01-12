import{j as t}from"./iframe-BZz3QcUV.js";import{I as m}from"./index-B314xkb7.js";import{A as n}from"./index-CD6K2d-C.js";import{U as o,g as p}from"./index-DVq5OAtC.js";import{G as a}from"./index-Vz6FX8E2.js";import{T as d}from"./index-ClM7p1ER.js";import{L as s}from"./ListItemAvatar-pxaHS6sM.js";import{L as c,a as l}from"./ListItemText-BvQ_pymz.js";import{L as u}from"./ListItem-DtvJl6rg.js";import{L}from"./ListItemButton-BoSsmN7r.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-BWJHZRl6.js";import"./useTheme-B7Cqxh2G.js";import"./styled-BM-ddlS9.js";import"./memoTheme-Bs2nn0CZ.js";import"./useSlot-r4YEcyId.js";import"./mergeSlotProps-B23xrLHr.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CqxV8UPS.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-DLwU38Ef.js";import"./useControlled-DdT90daF.js";import"./useEventCallback-BVOh0J-M.js";import"./getReactElementRef-Bpvbu8Ov.js";import"./Portal-Zp5JyzDe.js";import"./utils-BgvT_xZo.js";import"./TransitionGroupContext-9H431pbn.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DFvf-0uJ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cw2IKBAQ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DOxBZg-r.js";import"./CircularProgress-SMz0iZ9M.js";import"./Button-Cp--sx01.js";import"./index-DiX5wH3J.js";import"./index-ChEw8Ly-.js";import"./___vite-browser-external_commonjs-proxy-Dln5QaD1.js";import"./index-BhnKf5D0.js";import"./_toKey-CDTJfhSv.js";import"./Avatar-Duq3-mW7.js";import"./createSvgIcon-CpO6BPRg.js";import"./SvgIcon-DKZWjmjR.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Box-BOg-vuMP.js";import"./Grid-1nQ5vvaE.js";import"./styled-DdCwn5Ke.js";import"./isMuiElement-BdI-HeXQ.js";import"./Stack-DLX-eFuT.js";import"./Container-DqMY3rTf.js";import"./Typography-dKvhZPmN.js";import"./List-BiE2s1yi.js";import"./ListItemText-IqL92u7D.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-Cy0EOO0Q.js";import"./ListItemButton-DHrWzNXT.js";const yt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const vt=["_ListItemAvatar","_UserList"];export{e as _ListItemAvatar,i as _UserList,vt as __namedExportsOrder,yt as default};
