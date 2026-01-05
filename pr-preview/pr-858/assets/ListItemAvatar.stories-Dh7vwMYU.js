import{j as t}from"./iframe-Tg5E9Q0V.js";import{I as m}from"./index-x-cZi-nY.js";import{A as n}from"./index-1cmwN81g.js";import{U as o,g as p}from"./index-D8INjewo.js";import{G as a}from"./index-D4DEAloD.js";import{T as d}from"./index-CAbAbsxX.js";import{L as s}from"./ListItemAvatar-iySIBKl3.js";import{L as c,a as l}from"./ListItemText-Dur7Bu-I.js";import{L as u}from"./ListItem-eHU-n0jT.js";import{L}from"./ListItemButton-BsI5Wgt3.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BTI4GCPp.js";import"./useTheme-D2PM0NC9.js";import"./styled-CkQGWiXZ.js";import"./memoTheme-CSHka9uN.js";import"./useSlot-DWYsP92Q.js";import"./mergeSlotProps-BNNCTn4N.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-B_DO_dbH.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-CYbYxV9r.js";import"./useControlled-BcdiiQVx.js";import"./useEventCallback-pJVTgRiD.js";import"./getReactElementRef-B8vpBm8c.js";import"./Portal-CbAAOrpG.js";import"./utils-BChu3r4-.js";import"./TransitionGroupContext-cQD0tQZD.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-S7vQ2L8Q.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cl7hs1iw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CCTLTRt8.js";import"./CircularProgress-xXUbWWTu.js";import"./Button-CDV9x4x4.js";import"./index-BawvJ9vE.js";import"./index-HS0VMrul.js";import"./___vite-browser-external_commonjs-proxy-BsJk-Vbm.js";import"./index-ByAKUpTB.js";import"./_toKey-DDhoPzzc.js";import"./Avatar-DvyOY7cv.js";import"./createSvgIcon-BlU2wZ3P.js";import"./SvgIcon-of2VfktU.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Box-BsChB_Op.js";import"./Grid-GpGmgKJU.js";import"./styled-CQuv9sTF.js";import"./isMuiElement-DRHNiz3q.js";import"./Stack-DMT1dotB.js";import"./Container-f8pbHfI3.js";import"./Typography-BcRYJcKe.js";import"./List-Dgv4nz0z.js";import"./ListItemText-CCSUYC6k.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-BNuKXCzk.js";import"./ListItemButton-Ctff7EUJ.js";const zt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};var h,x,I;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: ListItemAvatarProps) => <ListItemAvatar {...args}>
      <Avatar size="m">
        <UserIcon />
      </Avatar>
    </ListItemAvatar>
}`,...(I=(x=e.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var g,y,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const Bt=["_ListItemAvatar","_UserList"];export{e as _ListItemAvatar,i as _UserList,Bt as __namedExportsOrder,zt as default};
