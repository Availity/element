import{j as t}from"./iframe-C9_PxSGQ.js";import{I as m}from"./index-ButV5MJr.js";import{A as n}from"./index-DIP1usag.js";import{U as o,h as p}from"./index-Ddg0Heb3.js";import{G as a}from"./index-Cwp1bTGK.js";import{T as d}from"./index-Bwm7V2AF.js";import{L as s}from"./ListItemAvatar-Dwc1_3xk.js";import{L as c,a as l}from"./ListItemText-qHsQotTh.js";import{L as u}from"./ListItem-BtbNrqZk.js";import{L}from"./ListItemButton-CfP6V0Em.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-FRBJUwm-.js";import"./useTheme-BHbpGC30.js";import"./styled-B-vqXkzy.js";import"./memoTheme-BxvcW3UF.js";import"./useSlot-B-bGbgrQ.js";import"./mergeSlotProps-DQ8_Kw8O.js";import"./useForkRef-CmIALVnC.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-BMn8x6pQ.js";import"./useControlled-BGxEnoNZ.js";import"./useEventCallback-DieoYw-U.js";import"./getReactElementRef-on-DwLqm.js";import"./Portal-Ct4gHjrk.js";import"./utils-8dHd4F9E.js";import"./TransitionGroupContext-BZ4pLHPO.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BDX3RUX-.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BjLNslZW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-k4M9aDLt.js";import"./CircularProgress-vDDdOi_d.js";import"./Button-DtK3QmjS.js";import"./index-DD4KIobM.js";import"./index-Ckji6gEQ.js";import"./___vite-browser-external_commonjs-proxy-BxZYR8lA.js";import"./index-B9N7h3aW.js";import"./Avatar-TXI1WfdH.js";import"./createSvgIcon-DoDU4gSx.js";import"./SvgIcon-FGOQRPT3.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-DwMYriWl.js";import"./Grid-AdyG_hrd.js";import"./isMuiElement-BE5icW1i.js";import"./styled-v5MGqYmj.js";import"./Stack-BEdSkyO_.js";import"./Container-DSjJo15B.js";import"./Typography-B7ymJCK8.js";import"./List-DWo7-1hB.js";import"./ListItemText-DnzkHJnB.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-B_QPbcIF.js";import"./ListItemButton-uFf9-uG0.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
