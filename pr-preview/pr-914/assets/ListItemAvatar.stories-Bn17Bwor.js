import{j as t}from"./iframe-BAio8bRO.js";import{I as m}from"./index-Cu3Q3wdb.js";import{A as n}from"./index-_f1nh24e.js";import{U as o,h as p}from"./index-D6CmWoDY.js";import{G as a}from"./index-q0NfFQ9-.js";import{T as d}from"./index-CvE6eDwb.js";import{L as s}from"./ListItemAvatar-BoBIQwDa.js";import{L as c,a as l}from"./ListItemText-BL1Wae8K.js";import{L as u}from"./ListItem-DuGGBbeG.js";import{L}from"./ListItemButton-BJ9dI_xO.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-hIKEgUI5.js";import"./useTheme-BlST_Otk.js";import"./styled-BVlyzXC0.js";import"./memoTheme-B5Zw--p6.js";import"./useSlot-BVjxSlY9.js";import"./mergeSlotProps-CmGkLNGM.js";import"./useForkRef-DNDPTA8R.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-BkgJttAJ.js";import"./useControlled-BkSKTHhF.js";import"./useEventCallback-9-WTFaLk.js";import"./getReactElementRef-C8WT4AXt.js";import"./Portal-DtZMvnVy.js";import"./utils-LXi-Tlok.js";import"./TransitionGroupContext-DZhFA06X.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CFXUmX-_.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Cgj-zrzq.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Ae9hTywr.js";import"./CircularProgress-DwO4_zrq.js";import"./Button-CfkShIuN.js";import"./index-CeF8IBRN.js";import"./index-RudpxiCl.js";import"./___vite-browser-external_commonjs-proxy-fC2KNp90.js";import"./index-cDutZPbR.js";import"./index-DcNlVx-A.js";import"./_toKey-Cn80klBW.js";import"./Avatar-B8-NTwyB.js";import"./createSvgIcon-BHdN4xjz.js";import"./SvgIcon-tye3QKHe.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./Box-D9uuWVv-.js";import"./Grid-t7gGqywk.js";import"./isMuiElement-AydbSc-U.js";import"./styled-EJoH7QSk.js";import"./Stack-bN5r8_lU.js";import"./Container-CV_lDoo_.js";import"./Typography-BPUxSRI8.js";import"./List-BfAeB2nv.js";import"./ListItemText-DG0YDJha.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-Dq-G0tjR.js";import"./ListItemButton-BylExyNe.js";const yt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
