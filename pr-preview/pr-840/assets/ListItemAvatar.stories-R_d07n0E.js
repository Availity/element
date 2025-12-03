import{j as t}from"./iframe-L2WfQCwc.js";import{I as m}from"./index-Dn592ewG.js";import{A as n}from"./index-DZXZoQrA.js";import{U as o,g as p}from"./index-CSnqgGqw.js";import{G as a}from"./index-jgvtu0vB.js";import{T as d}from"./index-CQSGbpAT.js";import{L as s}from"./ListItemAvatar-B2bDeq95.js";import{L as c,a as l}from"./ListItemText-CRhVlS-f.js";import{L as u}from"./ListItem-FiPg6tj9.js";import{L}from"./ListItemButton-C86xCf8b.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BMsQv-ox.js";import"./useTheme-X_Qa8Dhp.js";import"./styled-BnTbP4z1.js";import"./memoTheme-DbVnS5NV.js";import"./useSlot-DIvU7LRB.js";import"./mergeSlotProps-DHVHFrS4.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C3tscFOR.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-CpICOsEx.js";import"./useControlled-BwGYVh51.js";import"./useEventCallback-CrctvfCx.js";import"./getReactElementRef-BWc-HwFQ.js";import"./Portal-B8Bei1bh.js";import"./utils-B5nq23mn.js";import"./TransitionGroupContext-yrVXEs3b.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-B_VhlgSD.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BicFpcJT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DCYuzXhR.js";import"./CircularProgress-B0WBDXJs.js";import"./Button-B1u8B3-l.js";import"./index-DZMUvtd-.js";import"./index-DcPcEC4T.js";import"./___vite-browser-external_commonjs-proxy-BGdEQkiI.js";import"./index-DuRQpI0H.js";import"./_toKey-DuWRNRhf.js";import"./Avatar-CgF2MsCJ.js";import"./createSvgIcon-CN7Wy4aL.js";import"./SvgIcon-B1vwUV3N.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Box-CX0N0ctd.js";import"./Grid-B587iyjg.js";import"./styled-cdoMrI2T.js";import"./isMuiElement-SRHHNfX0.js";import"./Stack-BhxFzEo9.js";import"./Container-0A1GRnLt.js";import"./Typography-caGtC1xp.js";import"./List-D2he6eDF.js";import"./ListItemText-_8CGIS8I.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-9cHvvtWV.js";import"./ListItemButton-Bt-Mrabt.js";const zt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};var h,x,I;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
