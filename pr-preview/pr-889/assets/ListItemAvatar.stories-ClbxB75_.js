import{j as t}from"./iframe-DRsKaZoV.js";import{I as m}from"./index-B2IJrd5x.js";import{A as n}from"./index-B_AQZhss.js";import{U as o,g as p}from"./index-BpFZIt2g.js";import{G as a}from"./index-CGwbp9eO.js";import{T as d}from"./index-CwkjCgy5.js";import{L as s}from"./ListItemAvatar-Cko44ThF.js";import{L as c,a as l}from"./ListItemText-De2tS5Hj.js";import{L as u}from"./ListItem-Bj_TndEJ.js";import{L}from"./ListItemButton-fGc9zmBW.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-BkcHQcF9.js";import"./useTheme-C1O811uL.js";import"./styled-DO91FIEC.js";import"./memoTheme-olSsBjA8.js";import"./useSlot-DNM0KLoM.js";import"./mergeSlotProps-BURl53KS.js";import"./useForkRef-LQtjIIgV.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-C--q8J9W.js";import"./useControlled-kFa1Yq00.js";import"./useEventCallback-Bu60zwDR.js";import"./getReactElementRef-BQu0zR55.js";import"./Portal-D6re67WF.js";import"./utils-DcRyR5pI.js";import"./TransitionGroupContext-BL3wvAVn.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-D3Llr-h-.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DtO7gEQ8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CTgQ_by3.js";import"./CircularProgress-CYts75uW.js";import"./Button-CfQxP6eB.js";import"./index-DxRsnPiJ.js";import"./index-C_R1jHQO.js";import"./___vite-browser-external_commonjs-proxy-DktWiFg1.js";import"./index-gM6fV40Q.js";import"./_toKey-B9m6adjy.js";import"./Avatar-BshkwBHN.js";import"./createSvgIcon-DdCwdPBR.js";import"./SvgIcon-Dpxjd7uT.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Box-C-WaElnX.js";import"./Grid-MQYUDPdn.js";import"./isMuiElement-BnPWmSJy.js";import"./styled-vffCohJ0.js";import"./Stack-BxJBBr6k.js";import"./Container-BgUm-9tp.js";import"./Typography-DeM8j2MH.js";import"./List-NT7j0dtQ.js";import"./ListItemText-Dfr94_3R.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-DYMd1E3n.js";import"./ListItemButton-Bl3HeMQ4.js";const gt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
