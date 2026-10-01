import{j as t}from"./iframe-BfiSjCZE.js";import{I as m}from"./index-BnEi8s_n.js";import{A as n}from"./index-Bz3t_iKe.js";import{U as o,h as p}from"./index-CnlcVsMi.js";import{G as a}from"./index-DXU92sR7.js";import{T as d}from"./index-Ditxfwx6.js";import{L as s}from"./ListItemAvatar-C6-UhpVQ.js";import{L as c,a as l}from"./ListItemText-CmlS19dT.js";import{L as u}from"./ListItem-iO6xUXNQ.js";import{L}from"./ListItemButton-2rcRI_Ma.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-CFfT0ndL.js";import"./memoTheme-Bf2lNlfa.js";import"./styled-B9LoXHeR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-B0Rj5enX.js";import"./useTimeout-Dvw-KAbd.js";import"./TransitionGroupContext-BprlU7j-.js";import"./useForkRef-KHwM-Xb0.js";import"./useEventCallback-BRDDRqyT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DFM5h0gz.js";import"./Tooltip-DQOY4bTe.js";import"./useTheme-CyCmmmWE.js";import"./useSlot-BvJ3REjy.js";import"./mergeSlotProps-d8P6odjW.js";import"./useControlled-DuHd5Dfi.js";import"./getReactElementRef-DrqUH2UJ.js";import"./Portal-1iQSKTOk.js";import"./utils-CZVImzMM.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DsKdZe-B.js";import"./Button-CWR2xa5V.js";import"./index-BHDw3JNc.js";import"./index-ClgzThDV.js";import"./___vite-browser-external_commonjs-proxy-Dzcmey56.js";import"./index-CY8VLdQ2.js";import"./Avatar-DDCKEAHL.js";import"./createSvgIcon-DV4tT70v.js";import"./SvgIcon-pfgupZ4n.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-CRTcjAl_.js";import"./Grid-C2RK_1Jw.js";import"./isMuiElement-CIl3go_L.js";import"./styled-Bty96-Ys.js";import"./Stack-ggz2xYsp.js";import"./Container-B6cEEQtr.js";import"./Typography-C4HmXqwR.js";import"./List-DSZlyKTP.js";import"./ListItemText-DqoTqX35.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-_p0GOM5M.js";import"./ListItemButton-BYy9aHAr.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
