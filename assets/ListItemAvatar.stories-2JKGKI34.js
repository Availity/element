import{j as t}from"./iframe-Bzxq4khQ.js";import{I as m}from"./index-HZB2unx2.js";import{A as n}from"./index-YiMwJaVI.js";import{U as o,h as p}from"./index-C1aSd5b5.js";import{G as a}from"./index-DXLpfNz7.js";import{T as d}from"./index-CErBQ4Jd.js";import{L as s}from"./ListItemAvatar-DtcklX7A.js";import{L as c,a as l}from"./ListItemText-B35gDoCR.js";import{L as u}from"./ListItem-BaPuc7LP.js";import{L}from"./ListItemButton-DFh42sak.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip--PgUuozR.js";import"./useTheme-CLJ35KcV.js";import"./styled-BSgFKBik.js";import"./memoTheme-CkAjAg3h.js";import"./useSlot-cTDCwMnT.js";import"./mergeSlotProps-BP1q_mR2.js";import"./useForkRef-CyBmAmq2.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-D8n7EMSe.js";import"./useControlled-BxlFJ8nt.js";import"./useEventCallback-Zn8Kx7hu.js";import"./getReactElementRef-C4G1HZdF.js";import"./Portal-DrMzc0O0.js";import"./utils-BhtHTj_i.js";import"./TransitionGroupContext-4l5GgSIy.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Dxsb08A1.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CbyRNbtW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-mnH_3Wha.js";import"./CircularProgress-OhY0Ky5x.js";import"./Button-COtcAXVl.js";import"./index-pD7x_zqN.js";import"./index-CUQsHTQm.js";import"./___vite-browser-external_commonjs-proxy-C1hYxkYC.js";import"./index-BLcjZxhx.js";import"./Avatar-D4O1VANm.js";import"./createSvgIcon-Bd4vIYa-.js";import"./SvgIcon-DbWIKXvI.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-Bmi0pHZf.js";import"./Grid-DBmnTLkS.js";import"./isMuiElement-BFlpbPNJ.js";import"./styled-zIwGk7GA.js";import"./Stack-C6SNpi-l.js";import"./Container-C5W7aLU7.js";import"./Typography-B9ybtieC.js";import"./List-C9h_lLEy.js";import"./ListItemText-CFFlPj0j.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-MSX9hLd_.js";import"./ListItemButton-CHj3kiRE.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
