import{j as t}from"./iframe-ClyInPD8.js";import{I as m}from"./index-Cl8nDLSA.js";import{A as n}from"./index-Cz6D5pso.js";import{U as o,h as p}from"./index-W6CH2PNc.js";import{G as a}from"./index-zd_NREJJ.js";import{T as d}from"./index-BS5Ax9ph.js";import{L as s}from"./ListItemAvatar-CteFTVvx.js";import{L as c,a as l}from"./ListItemText-BeIjSfYa.js";import{L as u}from"./ListItem-Bm5ioE0C.js";import{L}from"./ListItemButton-BRHek8Bp.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-3p_Hzj1M.js";import"./memoTheme-CULMZTzm.js";import"./styled-D7PoFJCi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-CL-JJlq6.js";import"./useTimeout-Bv1knD6m.js";import"./TransitionGroupContext-DtZ8GaDC.js";import"./useForkRef-CWYhWoid.js";import"./useEventCallback-CQShbQqM.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cfnaefvx.js";import"./Tooltip-D3BuTBo3.js";import"./useTheme-Cf-PtNfg.js";import"./useSlot-D46kf6z6.js";import"./mergeSlotProps-DRm6mdtU.js";import"./useControlled-CId5aZ2_.js";import"./getReactElementRef-Cs8-_4yh.js";import"./Portal-6M9c9Gfh.js";import"./utils-DIFk0nuU.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-D2_jX090.js";import"./Button-C1rBrVEa.js";import"./index-0GE0S2-b.js";import"./index-CDDPJt8D.js";import"./___vite-browser-external_commonjs-proxy-4ZAXEZ6z.js";import"./index-CY8VLdQ2.js";import"./Avatar-fPqNZZim.js";import"./createSvgIcon-C9dBkbUF.js";import"./SvgIcon-DfVeW2fT.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-eNTJbR1-.js";import"./Grid-CgIe3-7e.js";import"./isMuiElement-Bh35qceP.js";import"./styled-XkY1prTM.js";import"./Stack-nuzf0IeA.js";import"./Container-DALlxZP3.js";import"./Typography-D3903seB.js";import"./List-CeyWtXC0.js";import"./ListItemText-eUy7uA-w.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-BBqDaM38.js";import"./ListItemButton-BTtY4DbV.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
