import{j as t}from"./iframe-D39zpO5D.js";import{I as m}from"./index-CT8p7-xb.js";import{A as n}from"./index-Cpho0T0G.js";import{U as o,h as p}from"./index-LJlq2DD9.js";import{G as a}from"./index-BHfSa4RT.js";import{T as d}from"./index-CIttbvMR.js";import{L as s}from"./ListItemAvatar-37RCjQmy.js";import{L as c,a as l}from"./ListItemText-BpOI_arW.js";import{L as u}from"./ListItem-g75C2mcx.js";import{L}from"./ListItemButton-Cf5Y1ott.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-1y7-X1Ns.js";import"./memoTheme-DS1Qd1tD.js";import"./styled-DVn78CF9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-C5qFdqG6.js";import"./useTimeout-DkqtJI-P.js";import"./TransitionGroupContext-iGlL40r0.js";import"./useForkRef-DNCE6AYe.js";import"./useEventCallback-CTE8ZTt3.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DZf4mQi8.js";import"./Tooltip-T0tiLXY7.js";import"./useTheme-Q_YzHohC.js";import"./useSlot-BR7cWQ8J.js";import"./mergeSlotProps-hvpDzkoH.js";import"./useControlled-Dc7tfWw6.js";import"./getReactElementRef-BiLy3DMf.js";import"./Portal-D0_VnBDB.js";import"./utils-BiqFTD-G.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CHrZTrOT.js";import"./Button-BxFiSb--.js";import"./index-Iv_LGCnt.js";import"./index-BqziHakW.js";import"./___vite-browser-external_commonjs-proxy-BUL4XQWM.js";import"./index-CnpWGRvj.js";import"./Avatar-DPatp9mp.js";import"./createSvgIcon-CXilsj0Y.js";import"./SvgIcon-DrCHR_XG.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-MvPvGRqH.js";import"./Grid-sUXan3gB.js";import"./isMuiElement-B_WcrTr3.js";import"./styled-D2W9iR9V.js";import"./Stack-DtFT-rmC.js";import"./Container-Bg9CFWCo.js";import"./Typography-lHvxoPWM.js";import"./List-C3S5OFLg.js";import"./ListItemText-D9h1c5am.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-CtcXxluY.js";import"./ListItemButton-p4erLw_W.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
