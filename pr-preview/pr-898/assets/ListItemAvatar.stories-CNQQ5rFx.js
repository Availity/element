import{j as t}from"./iframe-Wk3enkn_.js";import{I as m}from"./index-pyii_x3t.js";import{A as n}from"./index-BoRTsg97.js";import{U as o,g as p}from"./index-a2BAU8hi.js";import{G as a}from"./index-CV9srtxl.js";import{T as d}from"./index-CNr7z3HO.js";import{L as s}from"./ListItemAvatar-BsoVuz8j.js";import{L as c,a as l}from"./ListItemText-DEZa3l00.js";import{L as u}from"./ListItem-C0UPauD4.js";import{L}from"./ListItemButton-B3AC_Re4.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-BR4Ffd1U.js";import"./useTheme-CmRoqaFD.js";import"./styled-BmTYHnh6.js";import"./memoTheme-Caj5A1s7.js";import"./useSlot-JMUv4BXp.js";import"./mergeSlotProps-NkzDZpmj.js";import"./useForkRef-yXYQNRja.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-BCOPmfCQ.js";import"./useControlled-2F9gTxQc.js";import"./useEventCallback-B7JQiyR1.js";import"./getReactElementRef-Cnge9CgM.js";import"./Portal-CCkMzpr1.js";import"./utils-tb6sxdlZ.js";import"./TransitionGroupContext-CwOxOLGn.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BfCrVpCA.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C6xLK3w0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Qsi_pa_1.js";import"./CircularProgress-n4f4P4WA.js";import"./Button-C074Gfa_.js";import"./index-BZOO7YAB.js";import"./index-CCiKlUX9.js";import"./___vite-browser-external_commonjs-proxy-D6GNdSUz.js";import"./index-DrPJM3MV.js";import"./_toKey-CQFtmbJp.js";import"./Avatar-DX7amOcv.js";import"./createSvgIcon-q6AyRDli.js";import"./SvgIcon-C-x4Imun.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Box-DL-v_noe.js";import"./Grid-DdfbYMl5.js";import"./isMuiElement-DVgXTGQo.js";import"./styled-BnyQvlXI.js";import"./Stack-8J7VIz0q.js";import"./Container-ChUN_I-o.js";import"./Typography-CLtqYzwP.js";import"./List-DVxafNt_.js";import"./ListItemText-iWGBEy8M.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-CEHXhZ3n.js";import"./ListItemButton-DPv3I9T9.js";const gt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
