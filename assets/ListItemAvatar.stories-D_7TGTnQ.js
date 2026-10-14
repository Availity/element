import{j as t}from"./iframe-BxUHITI1.js";import{I as m}from"./index-Cxy_eo2a.js";import{A as n}from"./index-Cy8ZiL6c.js";import{U as o,h as p}from"./index-D7Z8d6Jb.js";import{G as a}from"./index-BMhl3l0u.js";import{T as d}from"./index-DdUtkmNt.js";import{L as s}from"./ListItemAvatar-n9mBgyGJ.js";import{L as c,a as l}from"./ListItemText-BkrcHllO.js";import{L as u}from"./ListItem-DhQoAZ9t.js";import{L}from"./ListItemButton-2glyPH7I.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-B68upYna.js";import"./memoTheme-CzoHsl9a.js";import"./styled-CpGjzToy.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-DsL-5Cn7.js";import"./useTimeout-DAfKtcD8.js";import"./TransitionGroupContext-l3bxEgIQ.js";import"./useForkRef-lvxB79U5.js";import"./useEventCallback-C37BR1tG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DLAhFeVr.js";import"./Tooltip-DZz3XPMm.js";import"./useTheme-D1EEqNP3.js";import"./useSlot-B7qqTYAC.js";import"./mergeSlotProps-MHJ1SX4K.js";import"./useControlled-Bgh5sVCP.js";import"./getReactElementRef-CgE3Obh2.js";import"./Portal-uHNWHw4F.js";import"./utils-Bx4IaHxc.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CkGYMLCU.js";import"./Button-iASAD3CE.js";import"./index-DsZ_7dTV.js";import"./index-DmTj5jVV.js";import"./___vite-browser-external_commonjs-proxy-BcA6VPFJ.js";import"./index-CY8VLdQ2.js";import"./Avatar-BfkZ2MVP.js";import"./createSvgIcon-RiBZe8zy.js";import"./SvgIcon-BZhbNLcx.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-dmaYfFtJ.js";import"./Grid-CYb8qmsK.js";import"./isMuiElement-D7EX6TJ1.js";import"./styled-dRg2RBwo.js";import"./Stack-CFpqy-T3.js";import"./Container-CqfIskg6.js";import"./Typography-BPEZnd-f.js";import"./List-DdRjpWGh.js";import"./ListItemText-BlnYILVA.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-D0QrK9DK.js";import"./ListItemButton-C_j_VSC2.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
