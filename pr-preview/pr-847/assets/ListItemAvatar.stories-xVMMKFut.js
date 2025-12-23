import{j as t}from"./iframe-B9UmYm9a.js";import{I as m}from"./index--sXbh2PD.js";import{A as n}from"./index-BMG-bew0.js";import{U as o,g as p}from"./index-YD2oNNLd.js";import{G as a}from"./index-D7gUouFh.js";import{T as d}from"./index-BLWdvMhu.js";import{L as s}from"./ListItemAvatar-DIfjHW0x.js";import{L as c,a as l}from"./ListItemText-Dt3rk5cF.js";import{L as u}from"./ListItem-XjZ2uhNr.js";import{L}from"./ListItemButton-C9qw0UbP.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-Cq5UdYzB.js";import"./useTheme-T4vxBpQ_.js";import"./styled-DoXLytZI.js";import"./memoTheme-D_NWO3Sf.js";import"./useSlot-CR5yVO5D.js";import"./mergeSlotProps-BiSAcbtH.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CxMGEvhU.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-BY4Ptw2I.js";import"./useControlled-CNkUV8JJ.js";import"./useEventCallback-DHGbg9uZ.js";import"./getReactElementRef-BfoHU7AI.js";import"./Portal-QZjT-NjO.js";import"./utils-eGNVq-HS.js";import"./TransitionGroupContext-DbiiX3No.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C_80d6ZX.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BJqVFicY.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DqL2pmKa.js";import"./CircularProgress-DuOgkEjt.js";import"./Button-Bc3m4P2S.js";import"./index--5WVHpke.js";import"./index-DuamcORg.js";import"./___vite-browser-external_commonjs-proxy-By73sLVP.js";import"./index-CMETJfmn.js";import"./_toKey-RoSGLSoY.js";import"./Avatar-BjTglkxA.js";import"./createSvgIcon-DD78qtxD.js";import"./SvgIcon-ML3dO570.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Box-Bn4lUdip.js";import"./Grid-uZx4aDYj.js";import"./styled-CJz0EzFO.js";import"./isMuiElement-Cw-OmkyD.js";import"./Stack-DzpHRCHq.js";import"./Container-B2IKB7A7.js";import"./Typography-BTbXiqY0.js";import"./List-w0232vmf.js";import"./ListItemText-DSaLuo2p.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-CZBBt7rc.js";import"./ListItemButton-CHjWd19r.js";const zt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};var h,x,I;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
