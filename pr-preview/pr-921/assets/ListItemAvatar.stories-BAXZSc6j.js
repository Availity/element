import{j as t}from"./iframe-3dkTY0jX.js";import{I as m}from"./index-B-aFmFgv.js";import{A as n}from"./index-nXaA4A37.js";import{U as o,h as p}from"./index-CuTsacvC.js";import{G as a}from"./index-DIxClpYS.js";import{T as d}from"./index-C6l436Fc.js";import{L as s}from"./ListItemAvatar-DgjIDdcq.js";import{L as c,a as l}from"./ListItemText-CHrhw_vv.js";import{L as u}from"./ListItem-BMUUHMcF.js";import{L}from"./ListItemButton-C5IJJSHy.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-gP38pAtd.js";import"./useTheme-DqSWHq5v.js";import"./styled-DpUmhVNm.js";import"./memoTheme-ClYOyAcO.js";import"./useSlot-rqG-d0ju.js";import"./mergeSlotProps-DA590uQB.js";import"./useForkRef-D98SVFOp.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-C1Q0-pFI.js";import"./useControlled-BRptJIgz.js";import"./useEventCallback-DqxbtF2b.js";import"./getReactElementRef-D5Pt6kS1.js";import"./Portal-COcgB0Km.js";import"./utils-q4WRQ2GW.js";import"./TransitionGroupContext-CenxJGkC.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-cunvSKS2.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-NndX5job.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CGwtNBxW.js";import"./CircularProgress-BLVqZX76.js";import"./Button-llKR0QUB.js";import"./index-BlL9977D.js";import"./index-InsQLx3y.js";import"./___vite-browser-external_commonjs-proxy-XgDoKZSQ.js";import"./index-CmY9jp0R.js";import"./Avatar-DLtQOhvC.js";import"./createSvgIcon-BvVOPXpo.js";import"./SvgIcon-iH6sJxt7.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-8YbrThzE.js";import"./Grid-CLckDB5v.js";import"./isMuiElement-Bd2bXImB.js";import"./styled-BLuOjd1d.js";import"./Stack-C6U2vEDQ.js";import"./Container-DbHjUNkP.js";import"./Typography-BaJfZ2Cx.js";import"./List-DjzIYyb1.js";import"./ListItemText-P_JCIPB8.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-DRdF9mGJ.js";import"./ListItemButton-DA68EArc.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
