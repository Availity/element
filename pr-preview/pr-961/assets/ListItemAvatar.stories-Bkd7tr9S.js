import{j as t}from"./iframe-7yTZJyI8.js";import{I as m}from"./index-BAPd2OJx.js";import{A as n}from"./index-CQfUABBT.js";import{U as o,h as p}from"./index-LWy-RhUk.js";import{G as a}from"./index-DoZlsXSq.js";import{T as d}from"./index-Fm3BvXJg.js";import{L as s}from"./ListItemAvatar-B2NS4wvK.js";import{L as c,a as l}from"./ListItemText-Czlnrl-P.js";import{L as u}from"./ListItem-FFwwkLJS.js";import{L}from"./ListItemButton-KYVjyhm9.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-ffMIHdaJ.js";import"./memoTheme-CIMTQhyT.js";import"./styled-BMlFG2th.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-DlKrHxyr.js";import"./useTimeout-DDTRmv4f.js";import"./TransitionGroupContext-BVN7PaEo.js";import"./useForkRef-CH4SD_Tq.js";import"./useEventCallback-B8agtspF.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CFzFWCR0.js";import"./Tooltip-BDwmcAHG.js";import"./useTheme-BQI76UIF.js";import"./useSlot-CCUJR_Dn.js";import"./mergeSlotProps-D3aTQwfn.js";import"./useControlled-C9ki-RMb.js";import"./getReactElementRef-BidH7fq7.js";import"./Portal-B1bcjcbG.js";import"./utils-C-JIMqUV.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-EhI9vhRh.js";import"./Button-BK3WQXmQ.js";import"./index-e3xISyZQ.js";import"./index-7SoByLum.js";import"./___vite-browser-external_commonjs-proxy-C8gZ9b-f.js";import"./index-CY8VLdQ2.js";import"./Avatar-BKjMsRKI.js";import"./createSvgIcon-D2n64X_N.js";import"./SvgIcon-BfOELIkm.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-BsPtR0uw.js";import"./Grid-CKHq_-iw.js";import"./isMuiElement-BI6Pjydy.js";import"./styled-Cs8_Hcz2.js";import"./Stack-CZJNS7pW.js";import"./Container-CJPQZB9X.js";import"./Typography-Bz3seEIw.js";import"./List-CRcTwWHL.js";import"./ListItemText-DZnQqm2H.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-PS3yrmAN.js";import"./ListItemButton-S2k2C7MC.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
