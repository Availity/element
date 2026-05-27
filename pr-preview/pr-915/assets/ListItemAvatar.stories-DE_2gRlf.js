import{j as t}from"./iframe-BeW-ShBa.js";import{I as m}from"./index-B-GrkHTI.js";import{A as n}from"./index-DtX85gZr.js";import{U as o,h as p}from"./index-BKqV-UiY.js";import{G as a}from"./index-CcUAtZIu.js";import{T as d}from"./index-BSsohYFg.js";import{L as s}from"./ListItemAvatar-i58AhnTN.js";import{L as c,a as l}from"./ListItemText-DQ3_NYty.js";import{L as u}from"./ListItem-w1CVzvUe.js";import{L}from"./ListItemButton-DMf26xzA.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-UPiMyfZ8.js";import"./useTheme-BPzLpLU0.js";import"./styled-E0CmYcz3.js";import"./memoTheme-Dx1_-nEN.js";import"./useSlot-BhPPWLJz.js";import"./mergeSlotProps-CGqoVYOm.js";import"./useForkRef-Bgl7H4kw.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-Da9tNn-P.js";import"./useControlled-BpXRfpPn.js";import"./useEventCallback-6Uyg9fGx.js";import"./getReactElementRef-BjNvvstO.js";import"./Portal-BPMEmQxN.js";import"./utils-CvRtdEc9.js";import"./TransitionGroupContext-BUF6kaGb.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-ghuGdCEB.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BvJM40or.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Z8KwVcKF.js";import"./CircularProgress-CiOpdtGa.js";import"./Button-BwdPpmvm.js";import"./index-DLnvtUdw.js";import"./index-DMVu9gap.js";import"./___vite-browser-external_commonjs-proxy-CtUXk23B.js";import"./index-BgBxCtiF.js";import"./_toKey-DMT_zmqL.js";import"./Avatar-Co7WRl77.js";import"./createSvgIcon-BpCrnFel.js";import"./SvgIcon-C3Z68du4.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./Box-BJjonoMC.js";import"./Grid-D-BmDj5R.js";import"./isMuiElement-Gc_4vFE3.js";import"./styled-C6cy5gNq.js";import"./Stack-CkM3UncO.js";import"./Container-CuzKFum9.js";import"./Typography-C3HO5zSq.js";import"./List-C1Y1JpKl.js";import"./ListItemText-DdpvKt4j.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-DhQxlW72.js";import"./ListItemButton-CrXWdrdZ.js";const gt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
