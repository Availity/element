import{j as t}from"./iframe-ujVaYq5z.js";import{I as m}from"./index-612CGizF.js";import{A as n}from"./index-BHMYLkGY.js";import{U as o,h as p}from"./index-CiMK-E4X.js";import{G as a}from"./index-BOD_Negu.js";import{T as d}from"./index-sKyEjHXt.js";import{L as s}from"./ListItemAvatar-CS7HHsQJ.js";import{L as c,a as l}from"./ListItemText-DQIQFF7Z.js";import{L as u}from"./ListItem-DHA45gri.js";import{L}from"./ListItemButton-D6cLOCL8.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-MZkZlGxG.js";import"./memoTheme-CdGwTPP7.js";import"./styled-B-xCudEP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-iPF5PiZW.js";import"./useTimeout-NHks1NG8.js";import"./TransitionGroupContext-4IQuvIV5.js";import"./useForkRef-DbBKzesF.js";import"./useEventCallback-Ckojbqp4.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-see__pNb.js";import"./Tooltip-5f47SB-B.js";import"./useTheme-CRyXlIuJ.js";import"./useSlot-Bx_FYgWG.js";import"./mergeSlotProps-KSZa1rpd.js";import"./useControlled-BffgEsp1.js";import"./getReactElementRef-SADr8eSm.js";import"./Portal-C9J_EaUY.js";import"./utils-JnhbsWr6.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-zhwYHJyp.js";import"./Button-CHVL5mlZ.js";import"./index-uj7JhNjZ.js";import"./index-Cb4NnpQ-.js";import"./___vite-browser-external_commonjs-proxy-D7JR7UKq.js";import"./index-T5OSBaAP.js";import"./Avatar-CT7D-d7p.js";import"./createSvgIcon-C0cHZWti.js";import"./SvgIcon-DXUCDQE8.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-Cl1E5OD4.js";import"./Grid-CvbP1FC1.js";import"./isMuiElement-rsUHqA_z.js";import"./styled-VPzH8ng9.js";import"./Stack-CQconrOZ.js";import"./Container-Bu0A8KYF.js";import"./Typography-BNx6-4zj.js";import"./List-CjBQExuh.js";import"./ListItemText-CgW9bPyR.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-C0t8ykV4.js";import"./ListItemButton-DilwI-5h.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
