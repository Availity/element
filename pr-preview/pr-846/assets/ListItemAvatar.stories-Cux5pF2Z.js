import{j as t}from"./iframe-uHgbxI5K.js";import{I as m}from"./index-BovvASnm.js";import{A as n}from"./index-CrnX4a7D.js";import{U as o,g as p}from"./index-CUd5PmZT.js";import{G as a}from"./index-BzyIUxG9.js";import{T as d}from"./index-v9QuSlC7.js";import{L as s}from"./ListItemAvatar-DaEEzq0b.js";import{L as c,a as l}from"./ListItemText-CdMmV0Tp.js";import{L as u}from"./ListItem-DlKXu-mt.js";import{L}from"./ListItemButton-CSB1vYja.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-sNbil-gw.js";import"./useTheme-CtIbOmqo.js";import"./styled-8YbhM9a0.js";import"./memoTheme-oX4ulD_d.js";import"./useSlot-DoiGXRjP.js";import"./mergeSlotProps-Muvz4q9m.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BQsEeVXe.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-CnBSTBeY.js";import"./useControlled-kFiMxWUJ.js";import"./useEventCallback-1jk_qbz7.js";import"./getReactElementRef-WEJqQMPe.js";import"./Portal-DdZjlCce.js";import"./utils-Cj1f_ISK.js";import"./TransitionGroupContext-D0JdioPb.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BTIA_7et.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CXBoVS4j.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DWgIiiPw.js";import"./CircularProgress-DxKRrnZT.js";import"./Button-D_ToZGbA.js";import"./index-CUWrOnCM.js";import"./index-BxzGDXEn.js";import"./___vite-browser-external_commonjs-proxy-CKpKa60-.js";import"./index-BN1Luz_F.js";import"./_toKey-4s8ZQHs-.js";import"./Avatar-CQnLt3p5.js";import"./createSvgIcon-BmijsGhR.js";import"./SvgIcon-C1fws6HS.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Box-CGtHD5r9.js";import"./Grid-CoybaeI6.js";import"./styled-sJpgZ5yK.js";import"./isMuiElement-DF8mSHc6.js";import"./Stack-DRfNMs7N.js";import"./Container-CyeFbR1g.js";import"./Typography-BUwJzphg.js";import"./List-CeL-YZlm.js";import"./ListItemText-D3ui8RX9.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-DxYGjGW_.js";import"./ListItemButton-DG4qa_-r.js";const zt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};var h,x,I;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
