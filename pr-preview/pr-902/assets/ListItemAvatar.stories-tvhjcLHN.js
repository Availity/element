import{j as t}from"./iframe-hulqVKFa.js";import{I as m}from"./index-CWJdyCdu.js";import{A as n}from"./index-1UV-6h2B.js";import{U as o,g as p}from"./index-CFZ7DghX.js";import{G as a}from"./index-BlNR_NWf.js";import{T as d}from"./index-PP9CmKdi.js";import{L as s}from"./ListItemAvatar-B0YRd_HZ.js";import{L as c,a as l}from"./ListItemText-DAX-Whj6.js";import{L as u}from"./ListItem-8ePcUwtz.js";import{L}from"./ListItemButton-5HuzW-vh.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-CwFATdR1.js";import"./useTheme-C7AUirRA.js";import"./styled-CYnX6RAa.js";import"./memoTheme-B_nCzl8M.js";import"./useSlot-CalbLJ3n.js";import"./mergeSlotProps-C6UhvrC4.js";import"./useForkRef-BQz3TnTQ.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-Bim6OzXz.js";import"./useControlled-maN10Goq.js";import"./useEventCallback-IcKGM0BT.js";import"./getReactElementRef-DCfmlyG2.js";import"./Portal-BqpYj0TQ.js";import"./utils-CqZ-bN0c.js";import"./TransitionGroupContext-DQUbB_yy.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CO5Qh0k_.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D52dKoJw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-2bDflI9o.js";import"./CircularProgress-p22Pqfnj.js";import"./Button-BD9YMHcT.js";import"./index-CKDMRTl1.js";import"./index-D23EGe5u.js";import"./___vite-browser-external_commonjs-proxy-DNDhTIwV.js";import"./index-BoMQfRhQ.js";import"./_toKey-CGmVVdEL.js";import"./Avatar-BhcMNHtu.js";import"./createSvgIcon-MyKUcFFT.js";import"./SvgIcon-i9gddw4o.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Box-CyvodRNS.js";import"./Grid-CPl8rXDT.js";import"./isMuiElement-B2zjcqD7.js";import"./styled-QvSbzdTE.js";import"./Stack-B2rPYqjB.js";import"./Container-CNnb763M.js";import"./Typography-COHcSKH7.js";import"./List-CHNmHfLH.js";import"./ListItemText-BN1C0dnn.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-Cly2J3bu.js";import"./ListItemButton-BxAZ_xQw.js";const gt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
