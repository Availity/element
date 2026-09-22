import{j as t}from"./iframe-DKvnFaXU.js";import{I as m}from"./index-goOPcPYN.js";import{A as n}from"./index-DMSXuUmX.js";import{U as o,h as p}from"./index-Dp9gWiw7.js";import{G as a}from"./index-DbDO0Ft_.js";import{T as d}from"./index-CDeQa_Ov.js";import{L as s}from"./ListItemAvatar-CDBKk97e.js";import{L as c,a as l}from"./ListItemText-iM23EN0U.js";import{L as u}from"./ListItem-BEAfteAu.js";import{L}from"./ListItemButton-CCeBqlbM.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-Dk2wxJIq.js";import"./memoTheme-CqfCSJ2X.js";import"./styled-CmsEx6_f.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-t7rDwPbd.js";import"./useTimeout-CHMS-cR8.js";import"./TransitionGroupContext-Ywi-MhlW.js";import"./useForkRef-BZiVfW-q.js";import"./useEventCallback-BMp-rMhG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-1gU5OTOX.js";import"./Tooltip-D9ZPYqEU.js";import"./useTheme-CSDDNwq2.js";import"./useSlot-CCglkhUf.js";import"./mergeSlotProps-DgX6bSST.js";import"./useControlled-DXzaWELJ.js";import"./getReactElementRef-CqgsFiRl.js";import"./Portal-D0mCJoig.js";import"./utils-Bp7Prb7W.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DYzgJZQm.js";import"./Button-CcwmilXM.js";import"./index-Ds1bBKID.js";import"./index-zW81wbG9.js";import"./___vite-browser-external_commonjs-proxy-D0Uf09dU.js";import"./index-CY8VLdQ2.js";import"./Avatar-BnloKn4v.js";import"./createSvgIcon-2KwAvjFg.js";import"./SvgIcon-CXEooahZ.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-D54lZQNO.js";import"./Grid-BqSQzKdl.js";import"./isMuiElement-B9gvf1iq.js";import"./styled-vqTvL8XB.js";import"./Stack-Ddupjr1g.js";import"./Container-Dg7zSU0F.js";import"./Typography-D7JJPpmc.js";import"./List-BGKHL79p.js";import"./ListItemText-DjqAdgQT.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-B4Kdh5_u.js";import"./ListItemButton-Cfy3MerU.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
