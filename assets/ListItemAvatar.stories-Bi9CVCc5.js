import{j as t}from"./iframe-_UUIOQuH.js";import{I as m}from"./index-TC4m-Pq9.js";import{A as n}from"./index-B9RcD_0C.js";import{U as o,h as p}from"./index-C64ixpTy.js";import{G as a}from"./index-BtEaczgi.js";import{T as d}from"./index-ZH-6PAbo.js";import{L as s}from"./ListItemAvatar-DdKQknW-.js";import{L as c,a as l}from"./ListItemText-7ktPQZa7.js";import{L as u}from"./ListItem-CuJ5OD2F.js";import{L}from"./ListItemButton-8kkaRZ8t.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-CUKPhxxE.js";import"./memoTheme-CIZa69Jr.js";import"./styled-b9_l-4u0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-B29bExhs.js";import"./useTimeout-CpXLyJm7.js";import"./TransitionGroupContext-BWER5STN.js";import"./useForkRef-Ds0id4pA.js";import"./useEventCallback-C78AkP7O.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DrYD12o3.js";import"./Tooltip-BIzLnAgn.js";import"./useTheme-CMhvYveJ.js";import"./useSlot-CykKJjN_.js";import"./mergeSlotProps-BdoUtTwz.js";import"./useControlled-De2ikPKN.js";import"./getReactElementRef-C0bnOj0D.js";import"./Portal-CM-iumOR.js";import"./utils-CA__7Tjr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Ceux9c--.js";import"./Button-BOTNYh0S.js";import"./index-CVIUoUuq.js";import"./index-DpN0Z2Me.js";import"./___vite-browser-external_commonjs-proxy-BQo9Raix.js";import"./index-DzHtvXsL.js";import"./Avatar-DFuurcAL.js";import"./createSvgIcon-4iIpqybs.js";import"./SvgIcon-Bp4jKyt3.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-B5h19-4r.js";import"./Grid-CC4gnOAh.js";import"./isMuiElement-WWIYAN0M.js";import"./styled-D33n_PsO.js";import"./Stack-DyYrotpf.js";import"./Container-Abk-Ppxh.js";import"./Typography-6OKQ2qDF.js";import"./List-C4OA8wB0.js";import"./ListItemText-DIFnwoxG.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-5xDtyFH0.js";import"./ListItemButton-J7CK_y7h.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
