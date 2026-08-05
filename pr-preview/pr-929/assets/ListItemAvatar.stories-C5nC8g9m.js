import{j as t}from"./iframe-Cnf77ZIg.js";import{I as m}from"./index-BbhRJntT.js";import{A as n}from"./index-DGB_W3F6.js";import{U as o,h as p}from"./index-CCvoZ_po.js";import{G as a}from"./index-ORdrVCt-.js";import{T as d}from"./index-qa_smkpe.js";import{L as s}from"./ListItemAvatar-DoruGY65.js";import{L as c,a as l}from"./ListItemText-DPwLCBih.js";import{L as u}from"./ListItem-DS0TX-hn.js";import{L}from"./ListItemButton-DcMm-DzF.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-RxJZvyE-.js";import"./useTheme-fbZoBAbS.js";import"./styled-D7PTo4Yf.js";import"./memoTheme-rtNk9j34.js";import"./useSlot-UCTcrF1q.js";import"./mergeSlotProps-CtuEIw1c.js";import"./useForkRef-CwrFiSR5.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-DDbT1lIl.js";import"./useControlled-CSfvqfPH.js";import"./useEventCallback-C-Qx89z1.js";import"./getReactElementRef-CMOtQl0I.js";import"./Portal-_ErOQT1L.js";import"./utils-C9oXke8q.js";import"./TransitionGroupContext-PCEy4ISN.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-9tgtsXjP.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-De56WQhg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Cb27w-UN.js";import"./CircularProgress-DjiS4vOo.js";import"./Button-B1EPaR8-.js";import"./index-CsFiSTiB.js";import"./index-BlDkkMZd.js";import"./___vite-browser-external_commonjs-proxy-Dxxm6Cdx.js";import"./index-BIVoh9iT.js";import"./Avatar-4fKqf0Da.js";import"./createSvgIcon-C5tcB9_e.js";import"./SvgIcon-D8TdQCTz.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-ChPufWLv.js";import"./Grid-CrhtQkIm.js";import"./isMuiElement-DBtd91O4.js";import"./styled-BdiKer14.js";import"./Stack-CAuZPL_Y.js";import"./Container-Bpufyj5a.js";import"./Typography-C7kdML4f.js";import"./List-B-VVle_u.js";import"./ListItemText-CAYRXe-D.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-CbdB0zo6.js";import"./ListItemButton-qWPtNQyp.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
