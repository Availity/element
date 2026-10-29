import{j as t}from"./iframe-CLut6yOe.js";import{I as m}from"./index-DNgDR8tQ.js";import{A as n}from"./index-D2uF_6VC.js";import{U as o,h as p}from"./index-CxuuQ7ms.js";import{G as a}from"./index-BGYc3edq.js";import{T as d}from"./index-DmhD3hPK.js";import{L as s}from"./ListItemAvatar-CNi4dmar.js";import{L as c,a as l}from"./ListItemText-Cihs_302.js";import{L as u}from"./ListItem-YapuiQNK.js";import{L}from"./ListItemButton-B8haL9sD.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-MKfAwX3T.js";import"./memoTheme-BCZ6py50.js";import"./styled-B56iE4qf.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-B4AmE_nS.js";import"./useTimeout-DSf2abi9.js";import"./TransitionGroupContext-CxTk-KXz.js";import"./useForkRef-CW7nwTzV.js";import"./useEventCallback-BXl50wnQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cb3dAqoX.js";import"./Tooltip-20BxdW9m.js";import"./useTheme-uzqIZvgA.js";import"./useSlot-C8ASSSxZ.js";import"./mergeSlotProps-BoE-e40D.js";import"./useControlled-BMhEC-vi.js";import"./getReactElementRef-CPIcGi-m.js";import"./Portal-buqhKvPN.js";import"./utils-CY0-o-M4.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BphsLqn6.js";import"./Button-CO7SGq6S.js";import"./index-DFAe1byy.js";import"./index-BcLWcqBp.js";import"./___vite-browser-external_commonjs-proxy-6v6UwKt5.js";import"./index-CY8VLdQ2.js";import"./Avatar-CQUwe_Ge.js";import"./createSvgIcon-BcCXBLY5.js";import"./SvgIcon-Dd51Rz_D.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-KcVtg1pO.js";import"./Grid-CiYph9Ji.js";import"./isMuiElement-CAAIFwhI.js";import"./styled-qS0Yrwc6.js";import"./Stack-C0CMzs2G.js";import"./Container-DKVcPtkF.js";import"./Typography-BLWoaJn_.js";import"./List-Ed_p2skf.js";import"./ListItemText-DF5OcMH0.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-COQ1gZB6.js";import"./ListItemButton-DJlIdtEv.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
