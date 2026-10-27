import{j as t}from"./iframe-DUa_E2nK.js";import{I as m}from"./index-CS_NebII.js";import{A as n}from"./index-Cc-44pdV.js";import{U as o,h as p}from"./index-BevA4mtD.js";import{G as a}from"./index-CpWANY3x.js";import{T as d}from"./index-C4ikLYbZ.js";import{L as s}from"./ListItemAvatar-BqglpOtc.js";import{L as c,a as l}from"./ListItemText-DBKrXZJb.js";import{L as u}from"./ListItem-eqYMg8x-.js";import{L}from"./ListItemButton-CB7E9GXS.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-BifEyGUq.js";import"./memoTheme-Bo6NThYL.js";import"./styled-D3Muh4M2.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-Bug9d4_R.js";import"./useTimeout-CVWqITqM.js";import"./TransitionGroupContext-CaPdAk9s.js";import"./useForkRef-CxpHUqnO.js";import"./useEventCallback-BMK6R2Pt.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bzposo0O.js";import"./Tooltip-Bq-dRAZk.js";import"./useTheme-D2wrQY5U.js";import"./useSlot-DlELlrwU.js";import"./mergeSlotProps-CEo301sU.js";import"./useControlled-mPNvpXlD.js";import"./getReactElementRef-ReUsDlEE.js";import"./Portal-DK6E0QaG.js";import"./utils-9zA4k4wE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cc5Sw607.js";import"./Button-CbV8DhMK.js";import"./index-6lyooZqo.js";import"./index-CjPTx4A6.js";import"./___vite-browser-external_commonjs-proxy-CTXS35BP.js";import"./index-CY8VLdQ2.js";import"./Avatar-CE4cWe20.js";import"./createSvgIcon-BrmPcgFj.js";import"./SvgIcon-BewdDvzO.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-BO8RQHnM.js";import"./Grid-BjkaeTm4.js";import"./isMuiElement-CAErNZ9l.js";import"./styled-DfLAYXD9.js";import"./Stack-BXnO2vhe.js";import"./Container-D09iA6_m.js";import"./Typography-BemmhR83.js";import"./List-BU73CZkQ.js";import"./ListItemText-BKR0YLeU.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-BW8pyGOj.js";import"./ListItemButton-noP_wE99.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
