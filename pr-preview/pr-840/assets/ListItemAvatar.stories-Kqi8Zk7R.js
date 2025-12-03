import{j as t}from"./iframe-B-IDRs1c.js";import{I as m}from"./index-CT2WTVvP.js";import{A as n}from"./index-_2WuYEce.js";import{U as o,g as p}from"./index-B8qzEHL-.js";import{G as a}from"./index-y3bL_tnv.js";import{T as d}from"./index-DQtlh_Xd.js";import{L as s}from"./ListItemAvatar-Betj0WN6.js";import{L as c,a as l}from"./ListItemText-CNz76LP_.js";import{L as u}from"./ListItem-_nhEm7x_.js";import{L}from"./ListItemButton-F569yyeT.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-CSSVlh_J.js";import"./useTheme-BCGo3_gR.js";import"./styled-7JhYMRam.js";import"./memoTheme-CE8Ve8p3.js";import"./useSlot-BDZruxXA.js";import"./mergeSlotProps-C8D8DcHH.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-ClLnv_Rm.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-B5Lb3nSx.js";import"./useControlled-c6loq-MY.js";import"./useEventCallback-cI9q2pBc.js";import"./getReactElementRef-DTxB74xF.js";import"./Portal-Br3wST_n.js";import"./utils-BDyqiFkI.js";import"./TransitionGroupContext-FoUS5PCq.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CfOviytx.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BX_62obP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BRBh8179.js";import"./CircularProgress-DIITlzvm.js";import"./Button-BTxgxpDX.js";import"./index-CWYX1l8J.js";import"./index-BXMplU3R.js";import"./___vite-browser-external_commonjs-proxy-N8USPokE.js";import"./index-DuRQpI0H.js";import"./_toKey-CS9IHmAM.js";import"./Avatar-BTyFnLuP.js";import"./createSvgIcon-D0KAL-_d.js";import"./SvgIcon-Dnen4Kai.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Box-D7mgUtfD.js";import"./Grid-CzlSEqG7.js";import"./styled-BXVIoFq6.js";import"./isMuiElement-Cvcy1-u-.js";import"./Stack-BQlzlOuL.js";import"./Container-DiLdPN9q.js";import"./Typography-qhH8cReh.js";import"./List-DqzcvQFO.js";import"./ListItemText-C6_jXxTY.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-DDNVUeDL.js";import"./ListItemButton-Co_-7Gbu.js";const zt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};var h,x,I;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
