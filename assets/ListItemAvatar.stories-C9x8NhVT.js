import{j as t}from"./iframe-C99277Jn.js";import{I as m}from"./index-BLVZqh54.js";import{A as n}from"./index-rFSz0zg1.js";import{U as o,h as p}from"./index-DBNEVM-X.js";import{G as a}from"./index-y3fpgOs1.js";import{T as d}from"./index-FIATZ7h1.js";import{L as s}from"./ListItemAvatar-BEuOXXMt.js";import{L as c,a as l}from"./ListItemText-Rs0ozO1Z.js";import{L as u}from"./ListItem-BAh4Dmi7.js";import{L}from"./ListItemButton-_OvrqcMx.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-1HJoGAor.js";import"./useTheme-rB5ljihk.js";import"./styled-BSyyF-nm.js";import"./memoTheme-BcCvxPZB.js";import"./useSlot-C5dpIhsV.js";import"./mergeSlotProps-BBhrXk0t.js";import"./useForkRef-Co0kt0JD.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-Dw4BvZaa.js";import"./useControlled-DV2QdfFp.js";import"./useEventCallback-BvtgHlfy.js";import"./getReactElementRef-Bs67iJIN.js";import"./Portal-rCUOv2ZO.js";import"./utils-DQTgiKe9.js";import"./TransitionGroupContext-ByqVrO43.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CQi1oJfT.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-GExIkIsQ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B6dKL5Sm.js";import"./CircularProgress-DWs2PQSt.js";import"./Button-D7NhHobB.js";import"./index-BjYhjIdM.js";import"./index-D0-rmQLG.js";import"./___vite-browser-external_commonjs-proxy-B3BvfgAL.js";import"./index-CqGaOivi.js";import"./_toKey-Brw-ZAfO.js";import"./Avatar-4BVeLztb.js";import"./createSvgIcon-Cab5rVDr.js";import"./SvgIcon-BaWfF9je.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./Box-XJPq1vP8.js";import"./Grid-iRC4uFdh.js";import"./isMuiElement-nAYICNXy.js";import"./styled-CKZ50tVK.js";import"./Stack-DydGXCUI.js";import"./Container-CFzAHwrR.js";import"./Typography-ZltxThzN.js";import"./List-DBdeSu6E.js";import"./ListItemText-B6BJOt8j.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-BbzKvuAm.js";import"./ListItemButton-lzPgpwQR.js";const gt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const yt=["_ListItemAvatar","_UserList"];export{e as _ListItemAvatar,i as _UserList,yt as __namedExportsOrder,gt as default};
