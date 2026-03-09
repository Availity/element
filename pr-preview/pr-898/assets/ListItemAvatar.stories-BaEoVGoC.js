import{j as t}from"./iframe-N02SuUfm.js";import{I as m}from"./index-BvsDSmAk.js";import{A as n}from"./index-D3K6550D.js";import{U as o,g as p}from"./index-lxra371Y.js";import{G as a}from"./index-BFybfeE7.js";import{T as d}from"./index-CW7Igu-9.js";import{L as s}from"./ListItemAvatar-CkJ23ky_.js";import{L as c,a as l}from"./ListItemText-C4ZyNZku.js";import{L as u}from"./ListItem-PAnE9Xh7.js";import{L}from"./ListItemButton-C5sQ8sRY.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-CQFd6bN6.js";import"./useTheme-CBomFZYP.js";import"./styled-uecMoX7Y.js";import"./memoTheme-DMlCkTbp.js";import"./useSlot-CYr36xh7.js";import"./mergeSlotProps-BGDsmNTV.js";import"./useForkRef-C8fPM8y1.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-CejRPUTA.js";import"./useControlled-RyKq5As7.js";import"./useEventCallback-CZlMSRL0.js";import"./getReactElementRef-DLbY8hGf.js";import"./Portal-BvewvNxS.js";import"./utils-CJrkpLOG.js";import"./TransitionGroupContext-DaLiAsRr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BDT4gqxX.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cq9St4jZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Cit_CnSx.js";import"./CircularProgress-DkicU_0c.js";import"./Button-I7Afgrab.js";import"./index-Czj-Ny1w.js";import"./index-BsTcntRr.js";import"./___vite-browser-external_commonjs-proxy-ClC8u-HF.js";import"./index-waB1V5N9.js";import"./_toKey-CsRLVhVE.js";import"./Avatar-DPlSLdjl.js";import"./createSvgIcon-quS1Xx-W.js";import"./SvgIcon-BTj78AGP.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Box-Ben8ewWC.js";import"./Grid-DiVgGJyw.js";import"./isMuiElement-C9a6bZCj.js";import"./styled-CbtJmbVm.js";import"./Stack-fkRAdSBn.js";import"./Container-BEjGGen4.js";import"./Typography-DFwTx7H5.js";import"./List-YU4EJ10j.js";import"./ListItemText-Cz_3pVP-.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-BOvSPU-r.js";import"./ListItemButton-mxSH-inX.js";const gt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
