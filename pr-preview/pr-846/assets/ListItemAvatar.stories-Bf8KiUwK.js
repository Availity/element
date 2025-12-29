import{j as t}from"./iframe-XJ8rUARQ.js";import{I as m}from"./index-Bfg0IfXb.js";import{A as n}from"./index-BETeeRoX.js";import{U as o,g as p}from"./index-Bic9pcsq.js";import{G as a}from"./index-BiP5P7M1.js";import{T as d}from"./index-CMxAEhwf.js";import{L as s}from"./ListItemAvatar-DW75SrRE.js";import{L as c,a as l}from"./ListItemText-z4LIKkj5.js";import{L as u}from"./ListItem-CQUhEd9H.js";import{L}from"./ListItemButton-CL6TMMSr.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-CFosmsmO.js";import"./useTheme-DdE3jScQ.js";import"./styled-DH1bohWY.js";import"./memoTheme-q27Lu1jJ.js";import"./useSlot-BQnc1wiW.js";import"./mergeSlotProps-B1UYo6hf.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-k_WY5UDV.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-CHPWgY-X.js";import"./useControlled-XnLwGYQ0.js";import"./useEventCallback-BDPMWXz1.js";import"./getReactElementRef-CA2jWjUI.js";import"./Portal-xufODOBH.js";import"./utils-Bu5_zceD.js";import"./TransitionGroupContext-BLsjMo91.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-ClBThUbu.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CSeSeZKT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CgzYzVmi.js";import"./CircularProgress-DHokMmGN.js";import"./Button-jNyCdmKh.js";import"./index-D0PoHtwb.js";import"./index-0JyjbUyi.js";import"./___vite-browser-external_commonjs-proxy-Bbvn4Lk3.js";import"./index-B_QiQ0h7.js";import"./_toKey-Bc2BYSdO.js";import"./Avatar-CYk1EFb7.js";import"./createSvgIcon-CZFbIjHx.js";import"./SvgIcon-gs9ZPknn.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Box-qW0uta-Y.js";import"./Grid-Dk4fwvMn.js";import"./styled-BwErFkk7.js";import"./isMuiElement-bpXde_gu.js";import"./Stack-DBw9MoVN.js";import"./Container-D0WZR6MW.js";import"./Typography-DLCURa9h.js";import"./List-BH13I8v0.js";import"./ListItemText-lKFFXxz5.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-Bn9MwyKw.js";import"./ListItemButton-B_cVVRHc.js";const zt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};var h,x,I;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
