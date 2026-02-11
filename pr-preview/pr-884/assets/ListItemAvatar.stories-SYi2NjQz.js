import{j as t}from"./iframe-BVv6e2Np.js";import{I as m}from"./index-CAgTxRUA.js";import{A as n}from"./index-C_RuDoow.js";import{U as o,g as p}from"./index-B4G_w09r.js";import{G as a}from"./index-BqnVqtTN.js";import{T as d}from"./index-D3ium1T7.js";import{L as s}from"./ListItemAvatar-ur5wuapk.js";import{L as c,a as l}from"./ListItemText-Cji2jQ7t.js";import{L as u}from"./ListItem-Wfnnygm5.js";import{L}from"./ListItemButton-DjMztGvF.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-DzBLv92b.js";import"./useTheme-DDxdviwK.js";import"./styled-Bn_uYMrA.js";import"./memoTheme-PshU1uu8.js";import"./useSlot-Dio4nhmD.js";import"./mergeSlotProps-C-9V1pWD.js";import"./useForkRef-QN_ofJ4G.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-VBRAECgQ.js";import"./useControlled-D2of93L0.js";import"./useEventCallback-emf-njXD.js";import"./getReactElementRef-Dy4ZaQ26.js";import"./Portal-BwoQ5t2b.js";import"./utils-D_B0tNMS.js";import"./TransitionGroupContext-CL5aD017.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DYhjeFex.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BcGJMyaC.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BmS5gOfS.js";import"./CircularProgress-Pj_uAnf5.js";import"./Button-DHfmf7R6.js";import"./index-B5sPRumM.js";import"./index-CzR1A3M5.js";import"./___vite-browser-external_commonjs-proxy-BF3gtoG_.js";import"./index-CFz_hkBg.js";import"./_toKey-C0b-dJUL.js";import"./Avatar-B8r6fHsF.js";import"./createSvgIcon-qSa5VTtT.js";import"./SvgIcon-DdboHVfF.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Box-DerM4oMw.js";import"./Grid-Bt9ySBei.js";import"./styled-CBIa6Uon.js";import"./isMuiElement-Cd1iR6Ah.js";import"./Stack-C99HnkMn.js";import"./Container-BDZyOzn-.js";import"./Typography-DXGXRPqa.js";import"./List-Bg0xhiqI.js";import"./ListItemText-CypomJ2x.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-DouseP-o.js";import"./ListItemButton--bZbrj71.js";const gt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
