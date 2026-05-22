import{j as t}from"./iframe-CEMXsp8C.js";import{I as m}from"./index-CwlIgXTJ.js";import{A as n}from"./index-Crb-nP4B.js";import{U as o,h as p}from"./index-D94lOHFj.js";import{G as a}from"./index-DIoqnUOe.js";import{T as d}from"./index-NjRHlmkG.js";import{L as s}from"./ListItemAvatar-Bx3cbd0p.js";import{L as c,a as l}from"./ListItemText-bhSSUtQ_.js";import{L as u}from"./ListItem-C5MxCV1l.js";import{L}from"./ListItemButton-Cnc8Gb2X.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-DE_9rsm0.js";import"./useTheme-DmimCZ1K.js";import"./styled-qsRty7dq.js";import"./memoTheme-l-GP-bwx.js";import"./useSlot-CsbKhATt.js";import"./mergeSlotProps-CZJ2E7Ux.js";import"./useForkRef-DoG2Adio.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-Dr5vw9MW.js";import"./useControlled-BuTFob83.js";import"./useEventCallback-DFupxdy5.js";import"./getReactElementRef-7aOdyAnj.js";import"./Portal-Cd1GL2Ny.js";import"./utils-uO-Y6Lu-.js";import"./TransitionGroupContext-CFI9AaDj.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Uj4Ej5E1.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CI45TlqX.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DV3wZvw5.js";import"./CircularProgress-C6UU3hYL.js";import"./Button-BggChkC7.js";import"./index-tKRfahf_.js";import"./index-mtCs71Oj.js";import"./___vite-browser-external_commonjs-proxy-Cuc_yKOi.js";import"./index-CAtWx5sm.js";import"./_toKey-BkjVo4KL.js";import"./Avatar-BXC-GRc4.js";import"./createSvgIcon-f84r-UoO.js";import"./SvgIcon-nYHR5krO.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./Box-BEsP6iEE.js";import"./Grid-DNEcM-zX.js";import"./isMuiElement-D0FqNR9x.js";import"./styled-Dz3b5a5M.js";import"./Stack-Ct51BpAL.js";import"./Container-DBKsfXDc.js";import"./Typography-aAxGDRe7.js";import"./List-C7cGWOto.js";import"./ListItemText-BBEvMRmA.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem--p2oHoV6.js";import"./ListItemButton-DiwcGOFH.js";const gt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
