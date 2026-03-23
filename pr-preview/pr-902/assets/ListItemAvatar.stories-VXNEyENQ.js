import{j as t}from"./iframe-DvcXWkGI.js";import{I as m}from"./index-O15mV2IG.js";import{A as n}from"./index-Ci38VOmP.js";import{U as o,g as p}from"./index-63S9eLZS.js";import{G as a}from"./index-lKF-mYBi.js";import{T as d}from"./index-C1KFV9tz.js";import{L as s}from"./ListItemAvatar-DxL5nSUo.js";import{L as c,a as l}from"./ListItemText-B6UFAzQV.js";import{L as u}from"./ListItem-D95Plgy0.js";import{L}from"./ListItemButton-BCkWs46X.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-CA4xVq51.js";import"./useTheme-BDjWybQB.js";import"./styled-DjkE2l0O.js";import"./memoTheme-C00_9AbM.js";import"./useSlot-DrWGT-0c.js";import"./mergeSlotProps-C-IYj7GK.js";import"./useForkRef-DXhMi9Fu.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-BLAqdi1l.js";import"./useControlled-CWsku3Ua.js";import"./useEventCallback-jEehnAW2.js";import"./getReactElementRef-CyXa0GT6.js";import"./Portal-BJf12Rly.js";import"./utils-CXX3yobC.js";import"./TransitionGroupContext-DxPJb2_E.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BYEe1XOi.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C6_QWXQy.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CI7etmmo.js";import"./CircularProgress-CsILiYUE.js";import"./Button-EYXZSfHT.js";import"./index-Cjyj5nZi.js";import"./index-CaTv9UPc.js";import"./___vite-browser-external_commonjs-proxy-GEXFNNnv.js";import"./index-CM3fg1Ej.js";import"./_toKey-DAWZYGE2.js";import"./Avatar-B4uMQAro.js";import"./createSvgIcon-JaHuofy7.js";import"./SvgIcon-Co17_fug.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Box-D0PWnwSE.js";import"./Grid-B-VOZSOw.js";import"./isMuiElement-BM04y7u2.js";import"./styled-1evKp3Hp.js";import"./Stack-BWYDbKiS.js";import"./Container-Dwn77WAc.js";import"./Typography-CbbFdRSD.js";import"./List-UiPSZZQ2.js";import"./ListItemText-C6ko2iY9.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-Wpbiez9k.js";import"./ListItemButton-D9KfKoHv.js";const gt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
