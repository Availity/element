import{j as t}from"./iframe-DF1q2aaL.js";import{I as m}from"./index-D2mEmfXN.js";import{A as n}from"./index-2-S6i4-I.js";import{U as o,g as p}from"./index-DJNX-Iyq.js";import{G as a}from"./index-DCToeNHS.js";import{T as d}from"./index-Q8RjvuCg.js";import{L as s}from"./ListItemAvatar-EiiYmL-4.js";import{L as c,a as l}from"./ListItemText-CV0XZVVS.js";import{L as u}from"./ListItem-MZbe2pkj.js";import{L}from"./ListItemButton-C5bYoyu7.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BXhUmSeH.js";import"./useTheme-C0GFliqz.js";import"./styled-CFEXa4qH.js";import"./memoTheme-BD6H9365.js";import"./useSlot-CQvSmYnu.js";import"./mergeSlotProps-BnmzE4jq.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D-TFDBL_.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-CJLBifOK.js";import"./useControlled-C2txOzyk.js";import"./useEventCallback-C9NbUrxX.js";import"./getReactElementRef-Cr3R6gAV.js";import"./Portal-CbFePWP9.js";import"./utils-BdM8s10D.js";import"./TransitionGroupContext-DTdRQeqO.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-B0ZOsC4g.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-K-5rBd1A.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D5OUD9Sm.js";import"./CircularProgress-DkK8nyO-.js";import"./Button-B9ufjNyc.js";import"./index-YlfiJdep.js";import"./index-CNpGYZ4b.js";import"./___vite-browser-external_commonjs-proxy-BDFX1rAg.js";import"./index-BmlCcuES.js";import"./_toKey-zNE1Oh7L.js";import"./Avatar-DAFcJX4s.js";import"./createSvgIcon-DzcieuLS.js";import"./SvgIcon-DB8Z1ZTq.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Box-CIJZFnEp.js";import"./Grid-BQHRv1eX.js";import"./styled-PDED6P24.js";import"./isMuiElement-Q-8wUiYz.js";import"./Stack--jn-4dia.js";import"./Container-CTcWCZH6.js";import"./Typography-cWmdXt40.js";import"./List-D-4vELaV.js";import"./ListItemText-DI8Yji61.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-BuK2A0D0.js";import"./ListItemButton-PY32p_UG.js";const zt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};var h,x,I;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
