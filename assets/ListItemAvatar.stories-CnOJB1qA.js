import{j as t}from"./iframe-Cwe65xm_.js";import{I as m}from"./index-B70TfKNL.js";import{A as n}from"./index-DNEVuiOB.js";import{U as o,h as p}from"./index-Dwd1T5KI.js";import{G as a}from"./index-GEX0zvPr.js";import{T as d}from"./index-D9T6YpUv.js";import{L as s}from"./ListItemAvatar-Dz0AC781.js";import{L as c,a as l}from"./ListItemText-BniXsAMZ.js";import{L as u}from"./ListItem-BkJGrmxM.js";import{L}from"./ListItemButton-C0x2Up_n.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-DXMour_H.js";import"./useTheme-ClD_legM.js";import"./styled-DQU8Bodb.js";import"./memoTheme-JTO0J2AE.js";import"./useSlot-DT6vlKow.js";import"./mergeSlotProps-DptD_Py-.js";import"./useForkRef-B3dE_Xi9.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-B979BKpc.js";import"./useControlled-B5htf0na.js";import"./useEventCallback-Cus8kDUU.js";import"./getReactElementRef-BO3eeWP1.js";import"./Portal-MprWoh0y.js";import"./utils-E62tsqSg.js";import"./TransitionGroupContext-DfpprYK4.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CHdu95RH.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CLwVH8iN.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B2MrdNo3.js";import"./CircularProgress-Gl2vZfvX.js";import"./Button-BPlwCXwF.js";import"./index-CCWtWTEb.js";import"./index-BhplCRAi.js";import"./___vite-browser-external_commonjs-proxy-DEtnVKx2.js";import"./index-po9FdVlG.js";import"./Avatar-DbKp0Qgb.js";import"./createSvgIcon-BCdDg_61.js";import"./SvgIcon-DVcTXB35.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-DUWM_zX0.js";import"./Grid-XXlh0rR0.js";import"./isMuiElement-CFlSzKZl.js";import"./styled-Drm9UKpq.js";import"./Stack-CRAKFpNP.js";import"./Container-Bu5eEzkf.js";import"./Typography-CwzEaEbc.js";import"./List-CdxcmJFC.js";import"./ListItemText-DNNDZsTj.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-M0fhg35A.js";import"./ListItemButton-DP54dbB0.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
