import{j as t}from"./iframe-DNfpO8Rq.js";import{I as m}from"./index-DN_R5H2f.js";import{A as n}from"./index-JJq6SiFO.js";import{U as o,g as p}from"./index-BcmMVDWe.js";import{G as a}from"./index-ClTf_1DV.js";import{T as d}from"./index-DGdNccvd.js";import{L as s}from"./ListItemAvatar-Ds_06bPQ.js";import{L as c,a as l}from"./ListItemText-DC47vFC3.js";import{L as u}from"./ListItem-BDnaHw0F.js";import{L}from"./ListItemButton-DHBLc93M.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-B3COV0pN.js";import"./useTheme-ChvAJH3t.js";import"./styled-Sw3aRR2D.js";import"./memoTheme-B-zz_BUk.js";import"./useSlot-C-w8GshL.js";import"./mergeSlotProps-D2aT8sWY.js";import"./useForkRef-BEoZ4oWN.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-DYZny39l.js";import"./useControlled-C3q2PKrI.js";import"./useEventCallback-Cty6Llwj.js";import"./getReactElementRef-CLhxke3N.js";import"./Portal-r7W1nGba.js";import"./utils-SDoQ5BJm.js";import"./TransitionGroupContext-BRbpeLOF.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DDNYhqkV.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-ERuDSHkW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CF5Cip_l.js";import"./CircularProgress-BsdZW6N9.js";import"./Button-UPAXXDe3.js";import"./index-DHVDfHlf.js";import"./index-DZbn_7Ge.js";import"./___vite-browser-external_commonjs-proxy-Bw8sMFhz.js";import"./index-3w9JKd-b.js";import"./_toKey-BGyEGFDq.js";import"./Avatar-GY0_fuT8.js";import"./createSvgIcon-COwWNPU9.js";import"./SvgIcon-wfbC-1tw.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Box-BG966X3W.js";import"./Grid-Cny3WeXp.js";import"./styled-u8_9JzuP.js";import"./isMuiElement-DJ9IZ7LZ.js";import"./Stack-BjTTdI7a.js";import"./Container-DLf6AVaH.js";import"./Typography-bSWIGKwV.js";import"./List-PCdh5O9l.js";import"./ListItemText-D8VIzvdU.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-D2iXTT7r.js";import"./ListItemButton-st8bfxBM.js";const gt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
