import{j as t}from"./iframe-Cv4YEYCT.js";import{I as m}from"./index-C6B9H3-6.js";import{A as n}from"./index-DzdZcfUl.js";import{U as o,g as p}from"./index-CNJpAeel.js";import{G as a}from"./index-bB8uZqWv.js";import{T as d}from"./index-Cy8ZwHJB.js";import{L as s}from"./ListItemAvatar-BsrgtMoD.js";import{L as c,a as l}from"./ListItemText-D4D6mm-X.js";import{L as u}from"./ListItem-CiZKRGfO.js";import{L}from"./ListItemButton-D1eqJAvb.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DdwYWGQa.js";import"./useTheme-yn0WqvlF.js";import"./styled-BjYrgzj8.js";import"./memoTheme-pu_-LVrP.js";import"./useSlot-DM3XJHLF.js";import"./mergeSlotProps-bXMVHHr9.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Cy9-wLDX.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-S5FMYS9P.js";import"./useControlled-DotOmqWu.js";import"./useEventCallback-Dezg1Jp2.js";import"./getReactElementRef-Cucsv-xJ.js";import"./Portal-HdFRzq7f.js";import"./utils-CC-nVGrC.js";import"./TransitionGroupContext-ReV1kAll.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DpLQsBTB.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-y4oP_Qzi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Te2dWPfF.js";import"./CircularProgress-4dbP_wqt.js";import"./Button-CxHqlBlz.js";import"./index-Cp61hPs1.js";import"./index-BrHZs0_A.js";import"./___vite-browser-external_commonjs-proxy-D8UIT_1F.js";import"./index-uYP5-W9N.js";import"./_toKey-Dft4WnKN.js";import"./Avatar-X4vbv6-I.js";import"./createSvgIcon-anG-4vyn.js";import"./SvgIcon-RzgLEiZ2.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Box-GX48hKKC.js";import"./Grid-CuYwHY7F.js";import"./styled-Cz-jNn-e.js";import"./isMuiElement-C4Xkg-Fl.js";import"./Stack-BZ8fB6iW.js";import"./Container-Ceu7L51X.js";import"./Typography-BHaCpI2A.js";import"./List-5gkoo-vG.js";import"./ListItemText-b9NfhXVA.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-CBmYWmnW.js";import"./ListItemButton-BZR-FNCV.js";const zt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};var h,x,I;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: ListItemAvatarProps) => <ListItemAvatar {...args}>
      <Avatar size="m">
        <UserIcon />
      </Avatar>
    </ListItemAvatar>
}`,...(I=(x=e.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var g,y,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const Bt=["_ListItemAvatar","_UserList"];export{e as _ListItemAvatar,i as _UserList,Bt as __namedExportsOrder,zt as default};
