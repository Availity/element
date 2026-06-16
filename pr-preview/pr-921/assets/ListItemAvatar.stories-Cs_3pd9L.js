import{j as t}from"./iframe-DbrIJLQi.js";import{I as m}from"./index-BviXD-l_.js";import{A as n}from"./index-bndVoh-C.js";import{U as o,h as p}from"./index-BV8EXEzP.js";import{G as a}from"./index-D9nQZvQo.js";import{T as d}from"./index-uxKHXzQl.js";import{L as s}from"./ListItemAvatar-CRxNWQTr.js";import{L as c,a as l}from"./ListItemText-DSU_86Ab.js";import{L as u}from"./ListItem-BRydrsBH.js";import{L}from"./ListItemButton-BQaxaYnf.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-Dj2v8eaN.js";import"./useTheme-DYW2Qal8.js";import"./styled-7I1Qt9E3.js";import"./memoTheme-CYnUbeeS.js";import"./useSlot-ucEwirIM.js";import"./mergeSlotProps-D6Q6z-MA.js";import"./useForkRef-xHQCOq-i.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-0bEjAxlE.js";import"./useControlled-DZAExesg.js";import"./useEventCallback-GRDf_Mdq.js";import"./getReactElementRef-CTToKV8F.js";import"./Portal-CRDltpFP.js";import"./utils-C3QXpwtY.js";import"./TransitionGroupContext-bpHC9icU.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CHkbcgjp.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-FVSq3BNJ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BHclRNV-.js";import"./CircularProgress-HcGcr7gk.js";import"./Button-CzxszAvI.js";import"./index-eGgQknTF.js";import"./index-DncEkrls.js";import"./___vite-browser-external_commonjs-proxy-DxbviS0p.js";import"./index-CfcGBtrm.js";import"./Avatar-DNdq5Hyx.js";import"./createSvgIcon-GCeLsGHA.js";import"./SvgIcon-DkLovEvc.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-ddZNUx2x.js";import"./Grid-D3_qV-Fz.js";import"./isMuiElement-2h_sD4kS.js";import"./styled-DMMrRL0j.js";import"./Stack-H1A63kiw.js";import"./Container-B1a9E6oy.js";import"./Typography-CJOV5VVW.js";import"./List-C1_gwHJu.js";import"./ListItemText-CJ90UnIg.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-CZWXm-VG.js";import"./ListItemButton-9WX_ai2d.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
