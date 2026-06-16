import{j as t}from"./iframe-Cyg9aVcX.js";import{I as m}from"./index-h-exa6rv.js";import{A as n}from"./index-BH_3ryHZ.js";import{U as o,h as p}from"./index-PRHxF3E5.js";import{G as a}from"./index-DUYfXBKq.js";import{T as d}from"./index-BvOEaAPF.js";import{L as s}from"./ListItemAvatar-CiRZ4uj4.js";import{L as c,a as l}from"./ListItemText-s_tlk3uA.js";import{L as u}from"./ListItem-EnSnAeVK.js";import{L}from"./ListItemButton-BDGNGENm.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-B872xQRW.js";import"./useTheme-CzQvHrc-.js";import"./styled-Bd0VbO2U.js";import"./memoTheme-jifZnr2J.js";import"./useSlot-BxXD7OXK.js";import"./mergeSlotProps-cvNGDztE.js";import"./useForkRef-DU61cGWF.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-D6StvTbU.js";import"./useControlled-LzVIFy4V.js";import"./useEventCallback-C8dig9Cp.js";import"./getReactElementRef-CtSLxyS5.js";import"./Portal-CbV_9_tw.js";import"./utils-B1U3sbvV.js";import"./TransitionGroupContext-Bf2CmkMl.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-D3SvR_Jp.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D_0lSByq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BvuHtZ4U.js";import"./CircularProgress-DgTEISy3.js";import"./Button-BmGuU9Jv.js";import"./index-BJLRp70o.js";import"./index-jBj9nha1.js";import"./___vite-browser-external_commonjs-proxy-CZBD6-14.js";import"./index-CiELgXtT.js";import"./Avatar-2WHL4dj6.js";import"./createSvgIcon-C4GbkCiK.js";import"./SvgIcon-yyAmYjGv.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-DlTv5Oab.js";import"./Grid-ss4buRXG.js";import"./isMuiElement-D3GE3m2r.js";import"./styled-JRnDCPkO.js";import"./Stack-BB9tt9ZR.js";import"./Container-6TunXfMs.js";import"./Typography-fPTXF0ua.js";import"./List-BhseiF0d.js";import"./ListItemText-BWnjniRk.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-ACIqvBxs.js";import"./ListItemButton-QFG_hdzx.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
