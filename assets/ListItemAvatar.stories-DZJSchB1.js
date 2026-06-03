import{j as t}from"./iframe-C9Q7A5ra.js";import{I as m}from"./index-Cb9JJsiN.js";import{A as n}from"./index-BmwdQaLj.js";import{U as o,h as p}from"./index-CyBTe91T.js";import{G as a}from"./index-0hLAGvby.js";import{T as d}from"./index-BeyzD6Q3.js";import{L as s}from"./ListItemAvatar-I2Quo7H7.js";import{L as c,a as l}from"./ListItemText-DEY9V5GY.js";import{L as u}from"./ListItem-C5cTzdbt.js";import{L}from"./ListItemButton-BjjeExOw.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-Dxz12tat.js";import"./useTheme-DiIVsm9U.js";import"./styled-0UczSNXk.js";import"./memoTheme-YF5MtDv6.js";import"./useSlot--WqN-Xj_.js";import"./mergeSlotProps-UhsM3zsz.js";import"./useForkRef-B8T8EBOK.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-BpXHY--n.js";import"./useControlled-__FO7R_p.js";import"./useEventCallback-LHv8CayF.js";import"./getReactElementRef-D2IRer1N.js";import"./Portal-1jOXhtNE.js";import"./utils-BZDXaftX.js";import"./TransitionGroupContext-DyV0aRJH.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Osd4OcEu.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DZcoIB4U.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B3rBS9gF.js";import"./CircularProgress-CPrPE9Sw.js";import"./Button-CeTzgLEE.js";import"./index-UVINGYSN.js";import"./index-B9trg_F0.js";import"./___vite-browser-external_commonjs-proxy-gNskwvVU.js";import"./index-BxB72Ewe.js";import"./_toKey-CJoTaFB0.js";import"./Avatar-B8p77-7l.js";import"./createSvgIcon-CHtzqaAD.js";import"./SvgIcon-CzclMxo5.js";import"./faCircleArrowRight-7IGXStlb.js";import"./faUser-wrn0edYp.js";import"./Box-BiOrU6MK.js";import"./Grid-CzHxH48g.js";import"./isMuiElement-BgeoDj0f.js";import"./styled-CCY5CIG6.js";import"./Stack-DyDlGsHv.js";import"./Container-CbMFSBjO.js";import"./Typography-DxUywEUK.js";import"./List-zrL7hhVU.js";import"./ListItemText-BzTsV-rm.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-DFGVgndx.js";import"./ListItemButton-Rf56j_Y7.js";const gt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
