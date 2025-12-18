import{j as t}from"./iframe-BgIiq-du.js";import{I as m}from"./index-CEJHTNJk.js";import{A as n}from"./index-DS_z_Y2C.js";import{U as o,g as p}from"./index-DDWPjCym.js";import{G as a}from"./index-BbN5E_zC.js";import{T as d}from"./index-TsQmzoTZ.js";import{L as s}from"./ListItemAvatar-C8IKYKEB.js";import{L as c,a as l}from"./ListItemText-BpARkI-y.js";import{L as u}from"./ListItem-q-Ua5MLS.js";import{L}from"./ListItemButton-C5p8S5cp.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-ZBvV1JRk.js";import"./useTheme-D1y-VmtJ.js";import"./styled-nLr0G4t_.js";import"./memoTheme-BUFmT7AM.js";import"./useSlot-EdtQUYAt.js";import"./mergeSlotProps-CnVkUNbm.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DMJLoebf.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-BqNIrHgl.js";import"./useControlled-BtJ2k5T0.js";import"./useEventCallback-BIchpltM.js";import"./getReactElementRef-CoLPcd7a.js";import"./Portal-DTFxnUfG.js";import"./utils-NnkRphE_.js";import"./TransitionGroupContext-CQbv1oLy.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C3d2_4qf.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-ByM6u0PW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Cb3z3UZq.js";import"./CircularProgress-DMUtFszr.js";import"./Button-CxUn3cs_.js";import"./index-BdQccBBF.js";import"./index-CiE-CXrO.js";import"./___vite-browser-external_commonjs-proxy-BjMzHjy9.js";import"./index-Chk9juOj.js";import"./_toKey-D3ErCz-H.js";import"./Avatar-kQji2QhN.js";import"./createSvgIcon-ibTAZZq3.js";import"./SvgIcon-O7DiaTLk.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Box-Bqm_9Atf.js";import"./Grid-BxagjAZA.js";import"./styled-D4IfxCmy.js";import"./isMuiElement-CdT2rXyX.js";import"./Stack-L7a-IdF6.js";import"./Container-DQV0JO0Z.js";import"./Typography-BSAr1ZxE.js";import"./List-BBSN2ySS.js";import"./ListItemText-DNIo0OrU.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-B-8VKVb-.js";import"./ListItemButton-_RPgOlA6.js";const zt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};var h,x,I;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
