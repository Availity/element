import{j as t}from"./iframe-B3KH45W1.js";import{I as m}from"./IconButton-UjBwLmV3.js";import{A as n}from"./Avatar-Dtrd0Edn.js";import{U as o,c as p}from"./Common-BAorCfPo.js";import{G as a}from"./Grid-BlezGjUJ.js";import{T as d}from"./Typography-k07kEcGa.js";import{L as c,a as l}from"./ListItemText-Cd4FTIvT.js";import{L as u}from"./ListItem-G2pZh8lq.js";import{L as s}from"./ListItemAvatar-DUR3xAtk.js";import{L}from"./ListItemButton-_eHcJi-8.js";import"./preload-helper-Dab_6GC_.js";import"./Tooltip-BBnoBBLv.js";import"./useTheme-Ds4SDsFm.js";import"./styled-B89GBRvi.js";import"./memoTheme-DWwRHojM.js";import"./useSlot-DGd0VXU6.js";import"./mergeSlotProps--7hXBDn0.js";import"./useForkRef-C1kAtY37.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-BS1Rp5sI.js";import"./useControlled-cbOgjwu_.js";import"./useEventCallback-CVbD2IC6.js";import"./getReactElementRef-CBNP7eUh.js";import"./Grow-iiG6wjq6.js";import"./utils-BQeXEgW_.js";import"./TransitionGroupContext-CAm2K2SY.js";import"./Popper-Bmyzhh-s.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CUL18StY.js";import"./useSlotProps-CXce_cAS.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-Dv3tzyaZ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DgN9Oijw.js";import"./CircularProgress-BSNAtS4j.js";import"./index-CM5pd_V5.js";import"./index-DN9vLoIX.js";import"./___vite-browser-external_commonjs-proxy-BJRxm24Q.js";import"./index-CZPtvi5C.js";import"./createSvgIcon-CP7Sjzln.js";import"./SvgIcon-DDVH-xS0.js";import"./faMagnifyingGlass-DEVYYJwr.js";import"./FaSvgIcon-DUC6Q4wv.js";import"./Grid-CXe_6B0b.js";import"./isMuiElement-BGMciLL0.js";import"./styled-CG3DpTjV.js";import"./Typography-D3qZBRmm.js";import"./List-DafW6Lb2.js";import"./ListItemText--eWSTHXa.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-cHfXQOwj.js";import"./ListItemButton-CN3O_RjO.js";const Lt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ht=["_ListItemAvatar","_UserList"];export{e as _ListItemAvatar,i as _UserList,ht as __namedExportsOrder,Lt as default};
