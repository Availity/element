import{j as t}from"./iframe-Dv1Hb7kF.js";import{I as m}from"./index-BBTP1ICE.js";import{A as n}from"./index-DiMSpNX3.js";import{U as o,g as p}from"./index-B9y9IGGa.js";import{G as a}from"./index-B87WwVT5.js";import{T as d}from"./index-B7n_TIRx.js";import{L as s}from"./ListItemAvatar-CWj81m7E.js";import{L as c,a as l}from"./ListItemText-D0ZI12-B.js";import{L as u}from"./ListItem-BGnzwNW-.js";import{L}from"./ListItemButton-DK7QmGQP.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-johHX3Tw.js";import"./useTheme-CGsP9Gxx.js";import"./styled-89sVFKyy.js";import"./memoTheme-BBZRIDpe.js";import"./useSlot-D3-97Bpj.js";import"./mergeSlotProps-CVQXFPJk.js";import"./useForkRef-DHvmsRje.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-CU6v0sK-.js";import"./useControlled-wUW2FFSG.js";import"./useEventCallback-BE-Xh8QX.js";import"./getReactElementRef-87-1wWv5.js";import"./Portal-nZmp6a4c.js";import"./utils-BsA11HdC.js";import"./TransitionGroupContext-C2v-exTz.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-8Sv9aFcC.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-X5Y4CM4M.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B7Edy8zQ.js";import"./CircularProgress-D7Y0JvGB.js";import"./Button-B4ml1k34.js";import"./index-CzAnwH0P.js";import"./index-DcDvbE2l.js";import"./___vite-browser-external_commonjs-proxy-D8ypgdq-.js";import"./index-DACw6K-J.js";import"./_toKey-BTEnA2Hx.js";import"./Avatar-CLVI5iPQ.js";import"./createSvgIcon-cwUD_L_o.js";import"./SvgIcon-5pvqgcrC.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Box-BHuPsdf_.js";import"./Grid-DHp-nl__.js";import"./isMuiElement-CfSIe_7M.js";import"./styled-VmFmZdM9.js";import"./Stack-Cs6IioTg.js";import"./Container-BOWYat-a.js";import"./Typography-Lwv6roC7.js";import"./List-ClfHumox.js";import"./ListItemText-DYjcySoA.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-D1bVf1mw.js";import"./ListItemButton-CBsChYWg.js";const gt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
