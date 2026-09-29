import{j as t}from"./iframe-CEHPhfh-.js";import{I as m}from"./index-BiRTiuFa.js";import{A as n}from"./index-BJ-Kf5BE.js";import{U as o,h as p}from"./index-tILHWvZu.js";import{G as a}from"./index-DYWaDwbT.js";import{T as d}from"./index-Bao5kwzm.js";import{L as s}from"./ListItemAvatar-gfAPpsKS.js";import{L as c,a as l}from"./ListItemText-Bob12Lm4.js";import{L as u}from"./ListItem-wYVsn1XK.js";import{L}from"./ListItemButton-Dl9gZ3jg.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-DFv4hPcI.js";import"./memoTheme-CIUXmmP3.js";import"./styled-surM00hH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-Bi9yKj0d.js";import"./useTimeout-C36QQqY4.js";import"./TransitionGroupContext-KFjAD8lx.js";import"./useForkRef-CUwhrb4S.js";import"./useEventCallback-BjU86bqT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DIulSjrJ.js";import"./Tooltip-BwegOhQ3.js";import"./useTheme-B_yH_tF0.js";import"./useSlot-CGHriRRK.js";import"./mergeSlotProps-DqsR1CiL.js";import"./useControlled-CuNUqud6.js";import"./getReactElementRef-BKZTuICO.js";import"./Portal-BAyfuJxK.js";import"./utils-Dqw6COyO.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CX3w_7Yv.js";import"./Button-DCMVSOfW.js";import"./index-BFKNcTNX.js";import"./index-ChMXBR0c.js";import"./___vite-browser-external_commonjs-proxy-B-zXSXgP.js";import"./index-CY8VLdQ2.js";import"./Avatar-ByO5IgS0.js";import"./createSvgIcon-DM21giQZ.js";import"./SvgIcon-CRmvg5rp.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-JfKqa7ps.js";import"./Grid-BWykgrcb.js";import"./isMuiElement-B3XjmQiv.js";import"./styled-Z7vS--HU.js";import"./Stack-kFyJTz_L.js";import"./Container-WyARCUam.js";import"./Typography-CJQmKVEQ.js";import"./List-DTUSYVMO.js";import"./ListItemText-CRnaLJYk.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-Dl5hMFCj.js";import"./ListItemButton-B0NXo_4P.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
