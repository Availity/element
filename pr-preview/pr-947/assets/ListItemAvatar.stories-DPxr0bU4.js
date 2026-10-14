import{j as t}from"./iframe-C7RYpRRO.js";import{I as m}from"./index-C-TAFGmA.js";import{A as n}from"./index-6m-rxOUC.js";import{U as o,h as p}from"./index-B0i75ydy.js";import{G as a}from"./index-C2dcAPuD.js";import{T as d}from"./index-BnSCHJ_C.js";import{L as s}from"./ListItemAvatar-CElXkj7X.js";import{L as c,a as l}from"./ListItemText-qzuJfYFN.js";import{L as u}from"./ListItem-BVUUdJhl.js";import{L}from"./ListItemButton-Bu4EIhTO.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-DUEQnTYy.js";import"./memoTheme-DZ9vOlqG.js";import"./styled-Cqgr8yLU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-YfnvzWnB.js";import"./useTimeout-IWs7fXER.js";import"./TransitionGroupContext-D50vcWaO.js";import"./useForkRef-mY6jA1_e.js";import"./useEventCallback-BmDadX9V.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DRusqeVx.js";import"./Tooltip-By5WBZwq.js";import"./useTheme-WpQOCtdc.js";import"./useSlot-lfX05XTl.js";import"./mergeSlotProps-BkPIbwBi.js";import"./useControlled-C5e-G2Uo.js";import"./getReactElementRef-CzYjVf0K.js";import"./Portal-B-Fuv61-.js";import"./utils-BrOTTAGC.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CyQLJvs1.js";import"./Button-DYbxeNEo.js";import"./index-BiONWhux.js";import"./index-BXxND2oO.js";import"./___vite-browser-external_commonjs-proxy-JNcaBvwg.js";import"./index-CY8VLdQ2.js";import"./Avatar-BIX25jGY.js";import"./createSvgIcon-Dc4WGqJQ.js";import"./SvgIcon-DZsvZcJW.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-DobRJWDd.js";import"./Grid-52szHxD-.js";import"./isMuiElement-Do9YpkA9.js";import"./styled-Cn_UBHgZ.js";import"./Stack-D9VD4k0X.js";import"./Container-Bhb68_To.js";import"./Typography-heIaV1nZ.js";import"./List-BcqSLVqi.js";import"./ListItemText-1T62o2QM.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-Du2eHYM3.js";import"./ListItemButton-AFnr5QFz.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
