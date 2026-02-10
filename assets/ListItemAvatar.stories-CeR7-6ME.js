import{j as t}from"./iframe-DPWyg_sE.js";import{I as m}from"./index-WUbIbMUB.js";import{A as n}from"./index-o3Vxsn9B.js";import{U as o,g as p}from"./index-HgfBgIyk.js";import{G as a}from"./index-klW-QR3s.js";import{T as d}from"./index-rY20fRa0.js";import{L as s}from"./ListItemAvatar-9uaaiSdq.js";import{L as c,a as l}from"./ListItemText-B0ZRWOBK.js";import{L as u}from"./ListItem-D4FgJtx7.js";import{L}from"./ListItemButton-C-ba68Tf.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-CdOjvbM3.js";import"./useTheme-7tDQkz1C.js";import"./styled-Cx4UoaTx.js";import"./memoTheme-CvhDbT8x.js";import"./useSlot-BxXiaFQD.js";import"./mergeSlotProps-CVICHJ3a.js";import"./useForkRef-CQj222cR.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-RvN-OPdu.js";import"./useControlled-wCcL1r_0.js";import"./useEventCallback-jcG2qnaO.js";import"./getReactElementRef-x8Lx8RXT.js";import"./Portal-D5nwTdpC.js";import"./utils-BB7LdJ51.js";import"./TransitionGroupContext-Dbv33dTP.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-LUJJL6zM.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BF9Np9Lj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DwZSi7dI.js";import"./CircularProgress-9Tec-y6j.js";import"./Button-BBTQggAb.js";import"./index-CA39NvIm.js";import"./index-DVaEuPEv.js";import"./___vite-browser-external_commonjs-proxy-BHnCw5vx.js";import"./index-BKQXVhQw.js";import"./Avatar-_8gjON9X.js";import"./createSvgIcon-kD6OJaqd.js";import"./SvgIcon-BLZY0MiZ.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Box-BW7Ma-QQ.js";import"./Grid-BOsdlhg5.js";import"./styled-D3AT7-A0.js";import"./isMuiElement-BiKTnabE.js";import"./Stack-BKgbUtNe.js";import"./Container-NqiDyIZZ.js";import"./Typography-DAlbupBm.js";import"./List-Rzw7CuXQ.js";import"./ListItemText-DztwqxsQ.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-CVEhj7R3.js";import"./ListItemButton-BqoGm7Ah.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
