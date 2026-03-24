import{j as t}from"./iframe-BXw3gXzi.js";import{I as m}from"./index-DejzIRML.js";import{A as n}from"./index-Cntn8DKF.js";import{U as o,g as p}from"./index-DQ-Pw2vZ.js";import{G as a}from"./index-tCOiXdlf.js";import{T as d}from"./index-DgW2N-xw.js";import{L as s}from"./ListItemAvatar-NehixXwA.js";import{L as c,a as l}from"./ListItemText-DquaicZy.js";import{L as u}from"./ListItem-BuKbqdgV.js";import{L}from"./ListItemButton-_6R-_DdV.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-ByULunc2.js";import"./useTheme-BMbLtIQ2.js";import"./styled-B4C1j5cm.js";import"./memoTheme-Cun1OYGu.js";import"./useSlot-ChptDOQ0.js";import"./mergeSlotProps-CH0acCqg.js";import"./useForkRef-C2Z_35PR.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-0uXpumKy.js";import"./useControlled-B4VTwyPs.js";import"./useEventCallback-3YhfTi0L.js";import"./getReactElementRef-DHOcIADn.js";import"./Portal-7KnvOddD.js";import"./utils-xtkVmQdP.js";import"./TransitionGroupContext-M8heGJda.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-yzZ17Wp2.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DeurSYdO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BTnZicAm.js";import"./CircularProgress-DhFZnFeX.js";import"./Button-BgBpxWh8.js";import"./index-D-R_J93y.js";import"./index-ujimlIq_.js";import"./___vite-browser-external_commonjs-proxy-FWM20rQt.js";import"./index-CziuDJRf.js";import"./_toKey-WKv7aBz5.js";import"./Avatar-C-WoYuxO.js";import"./createSvgIcon--3tSNQ0H.js";import"./SvgIcon-WyGfIbWv.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Box-BM1JqmYM.js";import"./Grid-BGtXNav_.js";import"./isMuiElement-HwGtkGEy.js";import"./styled-C8dNPj49.js";import"./Stack-BuTN3X4b.js";import"./Container-BCT1HrQN.js";import"./Typography-BaC1f153.js";import"./List-Cs9MPw4u.js";import"./ListItemText-cDTppnIJ.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-D2F8cmtL.js";import"./ListItemButton-DqOatX-4.js";const gt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const yt=["_ListItemAvatar","_UserList"];export{e as _ListItemAvatar,i as _UserList,yt as __namedExportsOrder,gt as default};
