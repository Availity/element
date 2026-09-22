import{j as t}from"./iframe-QKKiXGe2.js";import{I as m}from"./index-Dx_zFY-v.js";import{A as n}from"./index-BWlS9MmG.js";import{U as o,h as p}from"./index-C-csxGdp.js";import{G as a}from"./index-DmDUxSlw.js";import{T as d}from"./index-p3f1BLXv.js";import{L as s}from"./ListItemAvatar-CpLK1VXN.js";import{L as c,a as l}from"./ListItemText-BF06pyqO.js";import{L as u}from"./ListItem-KTi7LQiq.js";import{L}from"./ListItemButton-DlWVki3k.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-SAs9Di6J.js";import"./memoTheme-CZ6h3Fbh.js";import"./styled-CQy7SchW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-BjGfF1Y_.js";import"./useTimeout-DkvHtZOb.js";import"./TransitionGroupContext-CAofQ-AT.js";import"./useForkRef-GKR9CYz5.js";import"./useEventCallback-KenlF9RE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BAVpeqhg.js";import"./Tooltip-BYG0wW6K.js";import"./useTheme-CobnQWC-.js";import"./useSlot-DRcEuyBg.js";import"./mergeSlotProps-C7lIBrBK.js";import"./useControlled-BjERoBEC.js";import"./getReactElementRef-DpOU19qE.js";import"./Portal-JL7agaji.js";import"./utils-Dh1OrGpA.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CqRX49VI.js";import"./Button-B0ZWu58J.js";import"./index-BnWYiYcP.js";import"./index-Dxvresu9.js";import"./___vite-browser-external_commonjs-proxy-DZSMJcrl.js";import"./index-CY8VLdQ2.js";import"./Avatar-D01uQ_SU.js";import"./createSvgIcon-Bm4mBUxC.js";import"./SvgIcon-D3LX6zM9.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-DS6KTGM7.js";import"./Grid-BWZayuEN.js";import"./isMuiElement-BPsBBR2z.js";import"./styled-CL_ITmKE.js";import"./Stack-vCt2ORwh.js";import"./Container-B58issDp.js";import"./Typography-lfATY7Ds.js";import"./List-jtBebsxm.js";import"./ListItemText-h1ilGe7E.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-Bj4lgYmR.js";import"./ListItemButton-aqMalOkO.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
