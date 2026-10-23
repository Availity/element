import{j as t}from"./iframe-DM2JG2Wv.js";import{I as m}from"./index-DQYiNEqx.js";import{A as n}from"./index-BWOS_Z2D.js";import{U as o,h as p}from"./index-DV4r8BJd.js";import{G as a}from"./index-Dro33RKh.js";import{T as d}from"./index-DASKwMqe.js";import{L as s}from"./ListItemAvatar-qfvRArTM.js";import{L as c,a as l}from"./ListItemText-DvRo1jCU.js";import{L as u}from"./ListItem-DPBHibw0.js";import{L}from"./ListItemButton-CUFWSsWl.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-Bj7e_4ur.js";import"./memoTheme-BeNhxrAF.js";import"./styled-DsG-VtUm.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-FpBSGXSw.js";import"./useTimeout-DDDxsICF.js";import"./TransitionGroupContext-BViK_5QW.js";import"./useForkRef--lBTfT4q.js";import"./useEventCallback-B8_sGVJg.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D7bBmSyx.js";import"./Tooltip-Ff-XGBQt.js";import"./useTheme-BIdTJdU8.js";import"./useSlot-CtcofBwJ.js";import"./mergeSlotProps-Dz0ZGrQB.js";import"./useControlled-4UyvroS3.js";import"./getReactElementRef-gsi1wQpy.js";import"./Portal-DFUf67sY.js";import"./utils-B1H1HspZ.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-6BpQXPqS.js";import"./Button-p88YkSSM.js";import"./index-DUd7HCfU.js";import"./index-Dhw4AyUI.js";import"./___vite-browser-external_commonjs-proxy-Dtep4sfn.js";import"./index-CY8VLdQ2.js";import"./Avatar-CKwPRsjX.js";import"./createSvgIcon-CxStVnnE.js";import"./SvgIcon-C29JSttG.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-Cqyd88nw.js";import"./Grid-CX1e7vz2.js";import"./isMuiElement-B6N371AV.js";import"./styled-Bf965zM_.js";import"./Stack-D8O8MXVX.js";import"./Container-I8b0yq_j.js";import"./Typography-Cb49bwUU.js";import"./List-lGfDTeyH.js";import"./ListItemText-BMoWtET_.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-CFVIXhQQ.js";import"./ListItemButton-AnDNhM_M.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
