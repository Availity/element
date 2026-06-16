import{j as t}from"./iframe-D9ubqhJK.js";import{I as m}from"./index-h4r-WnWl.js";import{A as n}from"./index-BF_d07Pi.js";import{U as o,h as p}from"./index-DNmhIX6F.js";import{G as a}from"./index-hzcYFh1I.js";import{T as d}from"./index-jvKCwEAF.js";import{L as s}from"./ListItemAvatar-B_YiIlnu.js";import{L as c,a as l}from"./ListItemText-CW8edAVV.js";import{L as u}from"./ListItem-Dlg10b_S.js";import{L}from"./ListItemButton-BEMoxQCA.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-DJtaByj1.js";import"./useTheme-Bs7bia1b.js";import"./styled-DXiPKtQZ.js";import"./memoTheme-CgUpfGaw.js";import"./useSlot-dFBWOBaM.js";import"./mergeSlotProps-CUVj2Ixj.js";import"./useForkRef-CFXiLCEz.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-TLxlWLEl.js";import"./useControlled-BMamuY7F.js";import"./useEventCallback-BOUt7crc.js";import"./getReactElementRef-MrxWZY03.js";import"./Portal-HXWOitc9.js";import"./utils-C9L-o1yc.js";import"./TransitionGroupContext-By53oEia.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Bfn47NpZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-CdRgNr67.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CmaElg-P.js";import"./CircularProgress-BW1moUPm.js";import"./Button-C6KYraw-.js";import"./index-DGvLPLx7.js";import"./index-Bxqf2OpG.js";import"./___vite-browser-external_commonjs-proxy-DwG-mvXL.js";import"./index-DtUrJ1Wx.js";import"./Avatar-DtzTjzZA.js";import"./createSvgIcon-9Ro74DHR.js";import"./SvgIcon-DlrnpruC.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-Bn9CddAr.js";import"./Grid-XUldnHEv.js";import"./isMuiElement-CNzi3ipk.js";import"./styled-B7Z91F3L.js";import"./Stack-CGmSesTx.js";import"./Container-vLztGkDr.js";import"./Typography-CmwrtNIv.js";import"./List-BzQZ4-oj.js";import"./ListItemText-CRRq82bz.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-C17mg8V9.js";import"./ListItemButton-CyAPolZq.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
