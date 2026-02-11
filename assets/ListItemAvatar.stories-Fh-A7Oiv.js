import{j as t}from"./iframe-D1NCSytB.js";import{I as m}from"./index-BPnk7Q5j.js";import{A as n}from"./index-BFGphchk.js";import{U as o,g as p}from"./index-BYdlpT-l.js";import{G as a}from"./index-D9eAXuXP.js";import{T as d}from"./index-B2ZGVgz2.js";import{L as s}from"./ListItemAvatar-CDKzDzdp.js";import{L as c,a as l}from"./ListItemText-BNNLhhiR.js";import{L as u}from"./ListItem-CVWS2l3O.js";import{L}from"./ListItemButton-DtSj-ISV.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-C79jCpae.js";import"./useTheme-D3cMIjr1.js";import"./styled-BbCZmQsA.js";import"./memoTheme-DOGX_B28.js";import"./useSlot-D1NHtjkn.js";import"./mergeSlotProps-DlDajhlR.js";import"./useForkRef-BpGj9yaf.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-Bh_i1JKi.js";import"./useControlled-Czfb1u9c.js";import"./useEventCallback-C8LcGziW.js";import"./getReactElementRef-D8NIfLKv.js";import"./Portal-DSDwhvGd.js";import"./utils-DI3cRngQ.js";import"./TransitionGroupContext-BkHkrwff.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-WTXiNqL0.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cqago1eB.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BAUCY_Oi.js";import"./CircularProgress-DKmuW22e.js";import"./Button-Dci9Exp7.js";import"./index-DMXoL4NT.js";import"./index-CDT2XznO.js";import"./___vite-browser-external_commonjs-proxy-B_7I49U2.js";import"./index-D_jJce5O.js";import"./_toKey-jcx_TBNt.js";import"./Avatar-Bb-TjPgE.js";import"./createSvgIcon-BJL25Yge.js";import"./SvgIcon-B4wc5_NU.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Box-Dk8U9NOX.js";import"./Grid-CLUwk8Cn.js";import"./styled-DdVDvF5f.js";import"./isMuiElement-DU2Yi2t-.js";import"./Stack-BQ77EqZr.js";import"./Container-CFpNJvgv.js";import"./Typography-BWjvtf8i.js";import"./List-BopVit6a.js";import"./ListItemText-B-4kVrwD.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-Csd6Qm5F.js";import"./ListItemButton-RRiXjXqP.js";const gt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
