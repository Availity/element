import{j as t}from"./iframe-CrDI7sKE.js";import{I as m}from"./index-D1nVldbn.js";import{A as n}from"./index-EjxM4qkl.js";import{U as o,h as p}from"./index-B75hp5XN.js";import{G as a}from"./index-BtTxkIqf.js";import{T as d}from"./index-DnW44yA8.js";import{L as s}from"./ListItemAvatar-Dn_ApR5T.js";import{L as c,a as l}from"./ListItemText-D5KhtvEZ.js";import{L as u}from"./ListItem-CCK-eP7a.js";import{L}from"./ListItemButton-9Cfld_qc.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-COXIliVf.js";import"./memoTheme-1eSCZRav.js";import"./styled-CqKFH6eA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-Lw6uESYo.js";import"./useTimeout-B0l-dQbr.js";import"./TransitionGroupContext-Bo9v56k3.js";import"./useForkRef-BfO6-t9P.js";import"./useEventCallback-D4QkonYW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DKP2WMPH.js";import"./Tooltip-BYMj-RjT.js";import"./useTheme-e92JqNOn.js";import"./useSlot--sris71t.js";import"./mergeSlotProps-C73UPCQk.js";import"./useControlled-C0OF1VAF.js";import"./getReactElementRef-d6gO3Pyv.js";import"./Portal-DJpfMgk6.js";import"./utils-BWKdc28P.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cihilg2w.js";import"./Button-C68buGXp.js";import"./index-DZxmlms1.js";import"./index-B41T07YE.js";import"./___vite-browser-external_commonjs-proxy-B0N8KlEf.js";import"./index-CzBJOeop.js";import"./Avatar-D6hqOEm6.js";import"./createSvgIcon-B259oLuI.js";import"./SvgIcon-Db1uzRw5.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-BKdDafZT.js";import"./Grid-B7k0uIkV.js";import"./isMuiElement-CplrA1Xb.js";import"./styled-B5mLmA23.js";import"./Stack-BQFWbwCa.js";import"./Container-QJP-imy5.js";import"./Typography-BB__VVHi.js";import"./List-CTjmGkg1.js";import"./ListItemText-b2kD7Dc5.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-FMB8KZpN.js";import"./ListItemButton-CsYl2vos.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
