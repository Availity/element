import{j as t}from"./iframe-DdGJyqAg.js";import{I as m}from"./index-C--XPrtb.js";import{A as n}from"./index-Cxi-j7EP.js";import{U as o,g as p}from"./index-DcoLq1GP.js";import{G as a}from"./index-VAodLW9S.js";import{T as d}from"./index-CvYPRyok.js";import{L as s}from"./ListItemAvatar-JfmKnOuF.js";import{L as c,a as l}from"./ListItemText-BCpVeCC-.js";import{L as u}from"./ListItem-BwoWVIOU.js";import{L}from"./ListItemButton-DPZvKvXY.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-Cpc2Ys61.js";import"./useTheme-Cv4lKaq_.js";import"./styled-DZNwGmaG.js";import"./memoTheme-zSpKnFub.js";import"./useSlot-eMa7p3Q9.js";import"./mergeSlotProps-DPHtdEFZ.js";import"./useForkRef-B5TSGzbi.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-Cz_VOQaa.js";import"./useControlled-JTS7gCiC.js";import"./useEventCallback-CPaQ5FLe.js";import"./getReactElementRef-cwdxe4es.js";import"./Portal-B-KSdahe.js";import"./utils-CgujwDzQ.js";import"./TransitionGroupContext-DXcWZkFx.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BJSVq7mD.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BE3A75mF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CFis8PXN.js";import"./CircularProgress-lWH1rXDR.js";import"./Button-hwETKy73.js";import"./index-BvIUS6Oo.js";import"./index-CrIdewm5.js";import"./___vite-browser-external_commonjs-proxy-DBR-zej2.js";import"./index-D9N9sMnM.js";import"./_toKey-CN9ZoP-r.js";import"./Avatar-CVP835At.js";import"./createSvgIcon-DK_4S9NY.js";import"./SvgIcon-C8uI1pQt.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Box-CoFPB8Zy.js";import"./Grid-DZe0cyy5.js";import"./styled-Zzv4A2is.js";import"./isMuiElement-DDjJU4Hv.js";import"./Stack-VReAszZR.js";import"./Container-Dqr8G4iZ.js";import"./Typography-DLXtgzgf.js";import"./List-CL4x-icz.js";import"./ListItemText-BsCxe1tr.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-CXdOPZHx.js";import"./ListItemButton-B5Bwi5km.js";const gt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
