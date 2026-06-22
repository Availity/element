import{j as t}from"./iframe-BcpGFM79.js";import{I as m}from"./IconButton-BQJBDMuu.js";import{A as n}from"./Avatar-BCKj8BfY.js";import{U as o,c as p}from"./Common-IWC_xwUh.js";import{G as a}from"./Grid-CobFFp4x.js";import{T as d}from"./Typography-giEvkJi7.js";import{L as c,a as l}from"./ListItemText-DYatpBBO.js";import{L as u}from"./ListItem-DOGQuEKR.js";import{L as s}from"./ListItemAvatar-CjcxnZLi.js";import{L}from"./ListItemButton-DNnjAHQm.js";import"./preload-helper-Dab_6GC_.js";import"./Tooltip-CGfPTNyc.js";import"./useTheme-DjrtHLeH.js";import"./styled-YELB7PbO.js";import"./memoTheme-CUR-_UQu.js";import"./useSlot-COYLd7Pd.js";import"./mergeSlotProps-Y-QEFSGT.js";import"./useForkRef-BE9Mh8bk.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-D7cMLa2k.js";import"./useControlled-B1x_m4Ao.js";import"./useEventCallback-B998UMHo.js";import"./getReactElementRef-ksE6JIsb.js";import"./Grow-DgKR5Z9h.js";import"./utils-CX-dufza.js";import"./TransitionGroupContext-DMVjCYVP.js";import"./Popper-77inD8mp.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-D0YnE6km.js";import"./useSlotProps-wCHKs8ch.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-bOxsf80n.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DuPW9E1K.js";import"./CircularProgress-B0VZoizd.js";import"./index-C61jAYVP.js";import"./index-CRoIuHYP.js";import"./___vite-browser-external_commonjs-proxy-DixCwXJd.js";import"./index-CZ2YJDe3.js";import"./createSvgIcon-D6BcWLqc.js";import"./SvgIcon-DwHLgNU7.js";import"./faMagnifyingGlass-DEVYYJwr.js";import"./FaSvgIcon-CT_rBCtN.js";import"./Grid-DtKUTAQi.js";import"./isMuiElement-IVbgCQ7T.js";import"./styled-CAzon1OD.js";import"./Typography-D2_Tvhdq.js";import"./List-B4tdnm47.js";import"./ListItemText-D2lFU16a.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-Dmso8slv.js";import"./ListItemButton-BLKqOqXG.js";const Lt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ht=["_ListItemAvatar","_UserList"];export{e as _ListItemAvatar,i as _UserList,ht as __namedExportsOrder,Lt as default};
