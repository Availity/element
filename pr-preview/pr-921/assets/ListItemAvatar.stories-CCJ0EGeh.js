import{j as t}from"./iframe-DV02LU8f.js";import{I as m}from"./index-DgtuzQHk.js";import{A as n}from"./index-DnAIWa5M.js";import{U as o,h as p}from"./index-B2ndQJTP.js";import{G as a}from"./index-DN1f2VGk.js";import{T as d}from"./index-D2YoiO12.js";import{L as s}from"./ListItemAvatar-D1cWVATh.js";import{L as c,a as l}from"./ListItemText-KNIXi9hs.js";import{L as u}from"./ListItem-DYfRyLhI.js";import{L}from"./ListItemButton-DrlOP2kc.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-BOv4Ws7L.js";import"./useTheme-Y2xcdKFi.js";import"./styled-rnNWEicw.js";import"./memoTheme-DH1tDBpV.js";import"./useSlot-Hu3W-cCE.js";import"./mergeSlotProps-Bc2Oi4bk.js";import"./useForkRef-BwPtyht0.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-7haRoRjC.js";import"./useControlled-DL5wIsJx.js";import"./useEventCallback-DerujR8C.js";import"./getReactElementRef-COC2CLEL.js";import"./Portal-PMyfFMaG.js";import"./utils-CvzJUHOJ.js";import"./TransitionGroupContext-BxFEbXtm.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Dtx0TQHB.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-D4Hw4OQf.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DyVkVOcL.js";import"./CircularProgress-CAVNnpCq.js";import"./Button-3YflG3_Z.js";import"./index-CLj9BeNZ.js";import"./index-DA8EpHv8.js";import"./___vite-browser-external_commonjs-proxy-BXbXV1ez.js";import"./index-BkQ2mEsN.js";import"./Avatar-CP5NuoRC.js";import"./createSvgIcon-ClgyEN0Z.js";import"./SvgIcon-BicIoovE.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-SeXXrj1o.js";import"./Grid-CAt1Mh8-.js";import"./isMuiElement-Bod-d1Ly.js";import"./styled-TfTHS2wg.js";import"./Stack-BwJgyjvk.js";import"./Container-C-cbttNX.js";import"./Typography-BZigmqh7.js";import"./List-B86gDMtC.js";import"./ListItemText-DremmAaN.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-Bb3dAkJE.js";import"./ListItemButton-BzOCRJmp.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
