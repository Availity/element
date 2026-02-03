import{j as t}from"./iframe-DyOisw3p.js";import{I as m}from"./index-CJEk8w79.js";import{A as n}from"./index-CMWW-Un7.js";import{U as o,g as p}from"./index-BIYW56wV.js";import{G as a}from"./index-DOLuYYYn.js";import{T as d}from"./index-ZUZeQ6ON.js";import{L as s}from"./ListItemAvatar-DbPk4GpV.js";import{L as c,a as l}from"./ListItemText-B8VlLBeY.js";import{L as u}from"./ListItem-D5rbjraR.js";import{L}from"./ListItemButton-BWBkrO2N.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-3XPWX8ag.js";import"./useTheme-BZ9q4WY8.js";import"./styled-DlFKYmu8.js";import"./memoTheme-ClQmTMaA.js";import"./useSlot-DsPkR1Hp.js";import"./mergeSlotProps-ixnHwvJm.js";import"./useForkRef-BtdJvb-F.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-BCyZYTVL.js";import"./useControlled-L_7kh0l2.js";import"./useEventCallback-B6KJfX3V.js";import"./getReactElementRef-Ce2cv_v4.js";import"./Portal-B0VFW4sd.js";import"./utils-4feg5QSW.js";import"./TransitionGroupContext-CUZzTcDE.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CMD2axpv.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CgX6RyGO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BEmwhJpH.js";import"./CircularProgress-CyhGhsVo.js";import"./Button-Do4OGzvj.js";import"./index-DN4PVeR-.js";import"./index-DgrfaDhn.js";import"./___vite-browser-external_commonjs-proxy-QrxNotP1.js";import"./index-DUQu9Lss.js";import"./_toKey-DpYDFcYF.js";import"./Avatar-pf8KpsaP.js";import"./createSvgIcon-Qu4Q4I06.js";import"./SvgIcon-BXtElNvn.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Box-CT_Tx_FO.js";import"./Grid-D_aaW8Iu.js";import"./styled-lupBF2MK.js";import"./isMuiElement-BDDMqoU0.js";import"./Stack-Ch0vDCre.js";import"./Container-DQWs-8OX.js";import"./Typography-Ds2SQ99O.js";import"./List-CwjiyNio.js";import"./ListItemText-RFL4QpSA.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-P99BFK4C.js";import"./ListItemButton-DNDdgCdD.js";const gt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
