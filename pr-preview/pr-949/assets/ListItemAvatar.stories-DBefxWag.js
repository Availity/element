import{j as t}from"./iframe-BEwKysCr.js";import{I as m}from"./index-DgXerHVi.js";import{A as n}from"./index-DAQWqx8r.js";import{U as o,h as p}from"./index-BKyxZB2f.js";import{G as a}from"./index-C4sW_QjN.js";import{T as d}from"./index-BYEJAIjN.js";import{L as s}from"./ListItemAvatar-DK3fCd4J.js";import{L as c,a as l}from"./ListItemText-BxqCOm1C.js";import{L as u}from"./ListItem-D21-0GbR.js";import{L}from"./ListItemButton-JDgqIWCB.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-BB9H-X4e.js";import"./memoTheme-DRAFqHbg.js";import"./styled-Bg0-_ABf.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-DKnYqpgE.js";import"./useTimeout-CgoAjxgp.js";import"./TransitionGroupContext-pIYTZL6v.js";import"./useForkRef-DOnOtXA5.js";import"./useEventCallback-CrQ8pL3N.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BsydgvXb.js";import"./Tooltip-hIdC-Elu.js";import"./useTheme-GtZOwaC6.js";import"./useSlot-BiH5AaTw.js";import"./mergeSlotProps-DrnO3OcF.js";import"./useControlled-SqHPXcV4.js";import"./getReactElementRef-CS040HVY.js";import"./Portal-CDUk8pyx.js";import"./utils-kGYhSz9o.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CytfctCW.js";import"./Button-dWZGUH58.js";import"./index-CB3VoyWC.js";import"./index-5x18DLk4.js";import"./___vite-browser-external_commonjs-proxy-BeBneEXX.js";import"./index-CY8VLdQ2.js";import"./Avatar-CfNR5wn7.js";import"./createSvgIcon-BBwf9uD1.js";import"./SvgIcon-BCBu9Peg.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-3XwYnqya.js";import"./Grid-BlMGH9aP.js";import"./isMuiElement-Ds6j6Ubo.js";import"./styled-nNR7mMu5.js";import"./Stack-CkUGtwqW.js";import"./Container-CSrQBmhf.js";import"./Typography-DdaiLWH8.js";import"./List-DPCyJ7f3.js";import"./ListItemText-BHm2K1U_.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-CWA_Zl05.js";import"./ListItemButton-B_Tk9fbk.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
