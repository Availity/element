import{j as t}from"./iframe-CWp6xAJi.js";import{I as m}from"./index-Bxm1lbI1.js";import{A as n}from"./index-DNID8_sb.js";import{U as o,g as p}from"./index-buZDR1ob.js";import{G as a}from"./index-DiK5u2m6.js";import{T as d}from"./index-BJBbOM60.js";import{L as s}from"./ListItemAvatar-IsyE-T-T.js";import{L as c,a as l}from"./ListItemText-Cv88bTuG.js";import{L as u}from"./ListItem-hz41wTtJ.js";import{L}from"./ListItemButton--a3j9T_z.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-C9q2MrGF.js";import"./useTheme-DHWCGmhz.js";import"./styled-BbzXfeov.js";import"./memoTheme-Cd48oeI4.js";import"./useSlot-DyNQWwC6.js";import"./mergeSlotProps-D_m3hd0U.js";import"./useForkRef-3LhxE-jP.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-YuGHwSAC.js";import"./useControlled-D9oaenaI.js";import"./useEventCallback-DWzQfpRP.js";import"./getReactElementRef-C_Avcpz3.js";import"./Portal-v_NAREGo.js";import"./utils-D4ENFMIW.js";import"./TransitionGroupContext-DXm2NhTQ.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DzjUqkkU.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BcXRPXis.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-QvXOsOsa.js";import"./CircularProgress-a2FiPD69.js";import"./Button-DheGOcXb.js";import"./index-CdDy2ze1.js";import"./index-D0YYC-dU.js";import"./___vite-browser-external_commonjs-proxy-OyBOwfD9.js";import"./index-BCW1wysz.js";import"./_toKey-Bjg_s0Hk.js";import"./Avatar-S17osLYj.js";import"./createSvgIcon-BPSi4ajd.js";import"./SvgIcon-BE17mmZt.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Box-C01JMt70.js";import"./Grid-BEi4nMA-.js";import"./isMuiElement-CXCicdtK.js";import"./styled-Ck6GK9xN.js";import"./Stack-DilTTonM.js";import"./Container-CHapUF_w.js";import"./Typography-DAHmtciD.js";import"./List-BpYrKy3Y.js";import"./ListItemText-DhdbzcP8.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-B7zL5XT4.js";import"./ListItemButton-Bdida2kh.js";const gt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const yt=["_ListItemAvatar","_UserList"];export{e as _ListItemAvatar,i as _UserList,yt as __namedExportsOrder,gt as default};
