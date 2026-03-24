import{j as t}from"./iframe-BP-fstPH.js";import{I as m}from"./index-CUBSMbdA.js";import{A as n}from"./index-BpqlYv86.js";import{U as o,g as p}from"./index-Ds-ZEgLG.js";import{G as a}from"./index-DDACpU55.js";import{T as d}from"./index-DTL1DK_k.js";import{L as s}from"./ListItemAvatar-fFiys0Kb.js";import{L as c,a as l}from"./ListItemText-_2DqG-nP.js";import{L as u}from"./ListItem-CT4v8O2v.js";import{L}from"./ListItemButton-DlOqZ6h9.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-CFDxDxIS.js";import"./useTheme-8xMS95AC.js";import"./styled-QS_6ePhI.js";import"./memoTheme-CBW4mAKK.js";import"./useSlot-AMpyQgX8.js";import"./mergeSlotProps-CZ6XbOjr.js";import"./useForkRef-kN7FeyJY.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-aFoefsbK.js";import"./useControlled-C1wvNNpf.js";import"./useEventCallback--hrt0XPn.js";import"./getReactElementRef-rCjbZXAY.js";import"./Portal-DXb3wffR.js";import"./utils-ct7xOGzP.js";import"./TransitionGroupContext-CBWt0gZQ.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-B35r-AKt.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CG0C3HM8.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CN3Lj4mC.js";import"./CircularProgress-CgtN00kw.js";import"./Button-Bi9jGuft.js";import"./index-BNFZ0-Ru.js";import"./index-BXvH0f4F.js";import"./___vite-browser-external_commonjs-proxy-BQY9STBd.js";import"./index-DhqxClRF.js";import"./_toKey-DtgcOQ7H.js";import"./Avatar-BdTruj5Y.js";import"./createSvgIcon-CdaKSufU.js";import"./SvgIcon-BNSNkhkk.js";import"./faCircleArrowRight-Bwu2D-Ak.js";import"./faUser-wrn0edYp.js";import"./Box-yuve2Yeg.js";import"./Grid-FUwIxOgZ.js";import"./isMuiElement-DVbYF-_U.js";import"./styled-CP91GCBe.js";import"./Stack-DimDvg5e.js";import"./Container-iJP50oB2.js";import"./Typography-BMazaI8i.js";import"./List-BJHgVsR-.js";import"./ListItemText-DQTxoBZc.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-Du-nDakx.js";import"./ListItemButton-CtfjguZc.js";const gt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
