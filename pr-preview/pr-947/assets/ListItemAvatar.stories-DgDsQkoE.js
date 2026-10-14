import{j as t}from"./iframe-Dc8rhMFy.js";import{I as m}from"./index-Dd1sCRm8.js";import{A as n}from"./index-B5zA0Ybj.js";import{U as o,h as p}from"./index-DY0QHs1w.js";import{G as a}from"./index-5t25iiun.js";import{T as d}from"./index-j2N_GGzH.js";import{L as s}from"./ListItemAvatar-3gbg1syZ.js";import{L as c,a as l}from"./ListItemText-DjCef5fe.js";import{L as u}from"./ListItem-WEdwlAP8.js";import{L}from"./ListItemButton-BW5icTcd.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-CeH7M-cn.js";import"./memoTheme-S-5nuklg.js";import"./styled-BGT3xm4Q.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-CqO9c84b.js";import"./useTimeout-CrdWGjXP.js";import"./TransitionGroupContext-BFqd1JBl.js";import"./useForkRef-udrkS_SI.js";import"./useEventCallback-BaT-rbGb.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-FGVI2lRz.js";import"./Tooltip-y8JW-hsI.js";import"./useTheme-CAn2KvKi.js";import"./useSlot-3a7eddsl.js";import"./mergeSlotProps-kSQUyWpp.js";import"./useControlled-g2ws-rib.js";import"./getReactElementRef-Dso64NKM.js";import"./Portal-jMetYcmF.js";import"./utils-D7u3O4jf.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Bnd3aa5q.js";import"./Button-D07KqWD2.js";import"./index-CVAcvEgZ.js";import"./index-zYdcEWB1.js";import"./___vite-browser-external_commonjs-proxy-BalxyFdc.js";import"./index-CY8VLdQ2.js";import"./Avatar-Cqs27Myn.js";import"./createSvgIcon-CArSjKuJ.js";import"./SvgIcon-BxrpqK7J.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-BeA7Astr.js";import"./Grid-CK3PRshc.js";import"./isMuiElement-DClEETsS.js";import"./styled-Bni-voJ-.js";import"./Stack-CFoc2Kye.js";import"./Container-B259nuZR.js";import"./Typography-B_IwZxWJ.js";import"./List-CCvWDakc.js";import"./ListItemText-eMQW8zpb.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-jkEGsZyY.js";import"./ListItemButton-CEBwdvxA.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
