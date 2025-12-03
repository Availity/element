import{j as t}from"./iframe-D4l0qtta.js";import{I as m}from"./index-CzvPe9hU.js";import{A as n}from"./index-CJBlRAeu.js";import{U as o,g as p}from"./index-B-RlsP5T.js";import{G as a}from"./index-BpTvn-wv.js";import{T as d}from"./index-CsS4JCzl.js";import{L as s}from"./ListItemAvatar-CQvzxBjw.js";import{L as c,a as l}from"./ListItemText-BjBMLJur.js";import{L as u}from"./ListItem-DaKfk1A1.js";import{L}from"./ListItemButton-D38f9D9N.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-CWqA7bV3.js";import"./useTheme-CeD1owOb.js";import"./styled-BTFFsjyJ.js";import"./memoTheme-BA7dV9ce.js";import"./useSlot-D-iz2SxY.js";import"./mergeSlotProps-DF_C76Yp.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Dd_PEYLR.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-tDfAfQSP.js";import"./useControlled-Cq9ik7Uv.js";import"./useEventCallback-BZanBeRj.js";import"./getReactElementRef-CBOb2zug.js";import"./Portal-D2eOL5uX.js";import"./utils-C5eKUPpq.js";import"./TransitionGroupContext-CoIben92.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CDGpK8qC.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-vTRylTTB.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-caw8p1XZ.js";import"./CircularProgress-CNlJ1A1Z.js";import"./Button-c5qr7CJB.js";import"./index-VY7D4fU8.js";import"./index-C-DxDp19.js";import"./___vite-browser-external_commonjs-proxy-xaDo7viE.js";import"./index-DuRQpI0H.js";import"./_toKey-Da4UATOv.js";import"./Avatar-BYXU87lu.js";import"./createSvgIcon-0ZTEW-tI.js";import"./SvgIcon-Domhqj7B.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Box-CbXkJEEm.js";import"./Grid-AzzeqWvx.js";import"./styled-CK-eMcBj.js";import"./isMuiElement-CH7W9SW2.js";import"./Stack-DeWONcZO.js";import"./Container-Cbdyqd46.js";import"./Typography-DQo__xQb.js";import"./List-CMRknLMF.js";import"./ListItemText-BQmZ2pA8.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-CukKKvDI.js";import"./ListItemButton-C4c-BtbB.js";const zt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};var h,x,I;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: ListItemAvatarProps) => <ListItemAvatar {...args}>
      <Avatar size="m">
        <UserIcon />
      </Avatar>
    </ListItemAvatar>
}`,...(I=(x=e.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var g,y,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const Bt=["_ListItemAvatar","_UserList"];export{e as _ListItemAvatar,i as _UserList,Bt as __namedExportsOrder,zt as default};
