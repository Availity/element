import{j as t}from"./iframe-HTo88Qah.js";import{I as m}from"./index-aYiA4GaY.js";import{A as n}from"./index-9BvMBY-F.js";import{U as o,g as p}from"./index-Bp1v9Z_f.js";import{G as a}from"./index-jajfa-T1.js";import{T as d}from"./index-BHAyuMBH.js";import{L as s}from"./ListItemAvatar-DbedfzKv.js";import{L as c,a as l}from"./ListItemText-DfWYSFiN.js";import{L as u}from"./ListItem-BfSUxOwm.js";import{L}from"./ListItemButton-de39ajYw.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-AdliQAtR.js";import"./useTheme-CndemxDm.js";import"./styled-DjA2FMTv.js";import"./memoTheme-BOsLVKQV.js";import"./useSlot-O7mjHfs3.js";import"./mergeSlotProps-CVeY9kVm.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D-SriJrD.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-BzMKXnUG.js";import"./useControlled-DAZnMUbd.js";import"./useEventCallback-skU3gh-c.js";import"./getReactElementRef-BupWyWHg.js";import"./Portal-CpErzDB6.js";import"./utils-C06-OhnX.js";import"./TransitionGroupContext-B9ftAZaO.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cf38pxn0.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DZMzYKiR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B5t8kESg.js";import"./CircularProgress-DZY0-sNj.js";import"./Button-CyUxXAKO.js";import"./index-B6HxZE-P.js";import"./index-BChK4n1_.js";import"./___vite-browser-external_commonjs-proxy-BEWzl12g.js";import"./index-DG28nJkc.js";import"./_toKey-BWs6lgW2.js";import"./Avatar-BDAk4idF.js";import"./createSvgIcon-y0t4CXxH.js";import"./SvgIcon-E7njoD0w.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Box-D0j4-ZsT.js";import"./Grid-rOUx4HQp.js";import"./styled-qrQLN9Aj.js";import"./isMuiElement-dEqiUdHL.js";import"./Stack-BWf0eeeY.js";import"./Container-Cb74vs7z.js";import"./Typography-BCaLwMk6.js";import"./List-CmTfMQOa.js";import"./ListItemText-a43NiqAq.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-BxRP3fEK.js";import"./ListItemButton-D-e_udsy.js";const zt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};var h,x,I;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
