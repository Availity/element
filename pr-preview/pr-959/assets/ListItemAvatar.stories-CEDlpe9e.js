import{j as t}from"./iframe-La0hozmm.js";import{I as m}from"./index-CT5mpeGo.js";import{A as n}from"./index-BRFUf4Eb.js";import{U as o,h as p}from"./index-D89vBAiO.js";import{G as a}from"./index-eHZf6pHN.js";import{T as d}from"./index-OkwykyCM.js";import{L as s}from"./ListItemAvatar-CTDumi7a.js";import{L as c,a as l}from"./ListItemText-C_7Cbc-Q.js";import{L as u}from"./ListItem-V744CPtM.js";import{L}from"./ListItemButton-a3yMCCCm.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-BEf7IA6l.js";import"./memoTheme-CzcgztNR.js";import"./styled-06PLk0qx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-RNjBI3PY.js";import"./useTimeout-CjP9kdgI.js";import"./TransitionGroupContext-Db3Z6NMb.js";import"./useForkRef-CYgSXLxN.js";import"./useEventCallback-CkMNQS0_.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DKXLIFka.js";import"./Tooltip-DDgYhS1x.js";import"./useTheme-D5kgDNuB.js";import"./useSlot-nKi4u3tI.js";import"./mergeSlotProps-CfiUOF2K.js";import"./useControlled-DV2EMPBp.js";import"./getReactElementRef-TIeMXNsW.js";import"./Portal-QPUTbchU.js";import"./utils-C_Yf081A.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-o4xrbGrj.js";import"./Button-x0oW_Zme.js";import"./index-y8X2dNNL.js";import"./index-ClM2XKlh.js";import"./___vite-browser-external_commonjs-proxy-D0Oqq-kF.js";import"./index-CY8VLdQ2.js";import"./Avatar-ClSEQOUl.js";import"./createSvgIcon-CogVIOis.js";import"./SvgIcon-BIfisKmW.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-B4jhZySH.js";import"./Grid-DTxUT0NX.js";import"./isMuiElement-VxhL7QTS.js";import"./styled-99JPjMFe.js";import"./Stack-COfd3H0w.js";import"./Container-Bl6cg8Xd.js";import"./Typography-F8uVoBR9.js";import"./List-B0CpRJrl.js";import"./ListItemText-dwUx_OSg.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-CMz8eT5d.js";import"./ListItemButton-DkPqLdVh.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
