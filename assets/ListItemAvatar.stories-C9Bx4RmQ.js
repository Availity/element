import{j as t}from"./iframe-DTpfCdTP.js";import{I as m}from"./index-q1MxSMZt.js";import{A as n}from"./index-BfygurBS.js";import{U as o,g as p}from"./index-DFihowQv.js";import{G as a}from"./index-BdlJaXZ1.js";import{T as d}from"./index-B6j2B8Pp.js";import{L as s}from"./ListItemAvatar-LeIPQdoY.js";import{L as c,a as l}from"./ListItemText-BZL6O_3q.js";import{L as u}from"./ListItem-BXt8N46N.js";import{L}from"./ListItemButton-C2x0QpQB.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-uiVSuhLb.js";import"./useTheme-jT65VjN1.js";import"./styled-JKD3wrB9.js";import"./memoTheme-D8G-akul.js";import"./useSlot-h1Ycty7Q.js";import"./mergeSlotProps-BJk609iI.js";import"./useForkRef-Dez1FBmj.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-BG483csS.js";import"./useControlled-BQlebmQ3.js";import"./useEventCallback-5DZSu_H1.js";import"./getReactElementRef-Bdxo8MI5.js";import"./Portal-Ghvglbwf.js";import"./utils-vs6bWRab.js";import"./TransitionGroupContext-DugTcswx.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BBfgcS2b.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C1za8a59.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-TqCu7TYl.js";import"./CircularProgress-eXewDO5k.js";import"./Button-CuRegif2.js";import"./index-BvAqAliB.js";import"./index-B7sGnkLd.js";import"./___vite-browser-external_commonjs-proxy-DYx3DAeD.js";import"./index-BTctTnrC.js";import"./_toKey-D2wodF39.js";import"./Avatar-C9kPbfox.js";import"./createSvgIcon-DXGDQ1gJ.js";import"./SvgIcon-CZ5jOsa4.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Box-DTAenaTM.js";import"./Grid-cSi6T3Qn.js";import"./styled-TJsrHN39.js";import"./isMuiElement-DL6gjngF.js";import"./Stack-Dc_aLgSc.js";import"./Container-BggHV1YK.js";import"./Typography-OfK4w6vl.js";import"./List-CSqXqE4r.js";import"./ListItemText-B4-ADpd3.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-CCP1Dyt4.js";import"./ListItemButton-DWvwFX5C.js";const gt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
