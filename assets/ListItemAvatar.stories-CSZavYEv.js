import{j as t}from"./iframe-TaNZkFdX.js";import{I as m}from"./index-B97OVu1W.js";import{A as n}from"./index-BVow5goW.js";import{U as o,h as p}from"./index-DQOdSWXL.js";import{G as a}from"./index-BDHwWUp_.js";import{T as d}from"./index-CvI2ruD5.js";import{L as s}from"./ListItemAvatar-BpnSbB0Q.js";import{L as c,a as l}from"./ListItemText-B6bjw2IJ.js";import{L as u}from"./ListItem-DY6EexdF.js";import{L}from"./ListItemButton-Ca8Qfc5u.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-Bj0GebPw.js";import"./memoTheme-DWNFUNe8.js";import"./styled-B4LT_xKE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-hN41DD3n.js";import"./useTimeout-6mINgJ0s.js";import"./TransitionGroupContext-DNirSs3q.js";import"./useForkRef-BWA77Ou0.js";import"./useEventCallback-Mv5Tf1uh.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-UQNWqsj-.js";import"./Tooltip-NifhenR9.js";import"./useTheme-BwMLg3Cm.js";import"./useSlot-C54pGJsm.js";import"./mergeSlotProps-I1tu7yOe.js";import"./useControlled-DvjtXf7N.js";import"./getReactElementRef-CAOV2LsM.js";import"./Portal-bQbDJznY.js";import"./utils-DLs5F192.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DaoY2z77.js";import"./Button-BwGYoRWi.js";import"./index-D0ROOKOz.js";import"./index-B_tcZaAt.js";import"./___vite-browser-external_commonjs-proxy-BZtc6z5Q.js";import"./index-CY8VLdQ2.js";import"./Avatar-C8i-tZSO.js";import"./createSvgIcon-gxV3qIoY.js";import"./SvgIcon-DJOFM4ge.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-B6-W-G0J.js";import"./Grid-CXWUeHQh.js";import"./isMuiElement-D3gl8ezB.js";import"./styled-Dk8RL2_h.js";import"./Stack-CHbD9DWZ.js";import"./Container-Bw0hRcvj.js";import"./Typography-01frBhx_.js";import"./List-B95bCbeF.js";import"./ListItemText-DhawQRok.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-BebHqOCw.js";import"./ListItemButton-CpKWHcdG.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
