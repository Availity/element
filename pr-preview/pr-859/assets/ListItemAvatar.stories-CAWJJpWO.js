import{j as t}from"./iframe-C1vntzAX.js";import{I as m}from"./index-BuDjrn_R.js";import{A as n}from"./index-Drwt7gZh.js";import{U as o,g as p}from"./index-CDQPidku.js";import{G as a}from"./index-B1BPaPLx.js";import{T as d}from"./index-BaatzM2V.js";import{L as s}from"./ListItemAvatar-BLtZXlkO.js";import{L as c,a as l}from"./ListItemText-B_bXZkBZ.js";import{L as u}from"./ListItem-BbAzO_sJ.js";import{L}from"./ListItemButton-DEMW12Ba.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-CVSMh7i1.js";import"./useTheme-vaQlFbmr.js";import"./styled-CpL5pW3T.js";import"./memoTheme-B-OyMYhz.js";import"./useSlot-BmDgUDTi.js";import"./mergeSlotProps-B_ZZvCmf.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DLYnPViW.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-Dtp_2qQ3.js";import"./useControlled-DMvVP-hg.js";import"./useEventCallback-D85fiQCE.js";import"./getReactElementRef-Bv2ENe3N.js";import"./Portal-CG1k2SoH.js";import"./utils-3uAZdIAp.js";import"./TransitionGroupContext-cDoqgCSl.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-B-xFDx91.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-qkSs6g8Y.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-COQRfLrd.js";import"./CircularProgress-Drsym3OL.js";import"./Button-CbKLSFYP.js";import"./index-DWjiW5pu.js";import"./index-DzPuaxbl.js";import"./___vite-browser-external_commonjs-proxy-DIzVb-LC.js";import"./index-_GNUiS2s.js";import"./_toKey-Bwqez8zt.js";import"./Avatar-D6zGMm_B.js";import"./createSvgIcon-OHXdYWDp.js";import"./SvgIcon-CgejwYEH.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Box-DpOTPtKg.js";import"./Grid-Cq8hrZqV.js";import"./styled-BjeYOfVm.js";import"./isMuiElement-DtGZmajx.js";import"./Stack-CGWfFhJY.js";import"./Container-Bfu4tgfO.js";import"./Typography-D6jUB3HO.js";import"./List-DDwJcFVG.js";import"./ListItemText-Ch2ynjVO.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-BNr9ofpI.js";import"./ListItemButton-v7Bm33s8.js";const yt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const vt=["_ListItemAvatar","_UserList"];export{e as _ListItemAvatar,i as _UserList,vt as __namedExportsOrder,yt as default};
