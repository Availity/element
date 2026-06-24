import{j as t}from"./iframe-D77h7lRS.js";import{I as m}from"./index-DfVYTiZj.js";import{A as n}from"./index-CxVy-aC9.js";import{U as o,h as p}from"./index-CquEWAAI.js";import{G as a}from"./index-DKJ5gtoF.js";import{T as d}from"./index-VLdNb8Nf.js";import{L as s}from"./ListItemAvatar-BY09RgTc.js";import{L as c,a as l}from"./ListItemText-DAtjnQSN.js";import{L as u}from"./ListItem-DHQN2dyA.js";import{L}from"./ListItemButton-C-KWuF_F.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-BhKuATOF.js";import"./useTheme-CWKAY9AZ.js";import"./styled-CDvIACaW.js";import"./memoTheme-DqX_R3KK.js";import"./useSlot-BBYvJbSe.js";import"./mergeSlotProps-qLX7lv7e.js";import"./useForkRef-SW3gFaM3.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-BjR7jkxB.js";import"./useControlled-BR2YzmEr.js";import"./useEventCallback-d4rGFhnJ.js";import"./getReactElementRef-BIPFoYsf.js";import"./Portal-DtDkDNee.js";import"./utils-CC74677U.js";import"./TransitionGroupContext-DCGSqGsz.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-uX8RgR0A.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CCSNmYsA.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-D6ESZVYa.js";import"./CircularProgress-Bxr3-rHo.js";import"./Button-CJwJUbvG.js";import"./index-Cwh8nxUP.js";import"./index-B040VruN.js";import"./___vite-browser-external_commonjs-proxy-8XJy59YQ.js";import"./index-CmwOJNE2.js";import"./Avatar-BEY5rMNj.js";import"./createSvgIcon-BLoD-eFu.js";import"./SvgIcon-CnEcCUNg.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-o7XdZc8G.js";import"./Grid-hgY9dIJR.js";import"./isMuiElement-Blipuvld.js";import"./styled-BMl8GMRY.js";import"./Stack-CP02Z4Z2.js";import"./Container-BclAzrCm.js";import"./Typography-Bljyylya.js";import"./List-R8dOKo6P.js";import"./ListItemText-BAxtGW3l.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-D8SCdzJq.js";import"./ListItemButton-BhlA7sHy.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
