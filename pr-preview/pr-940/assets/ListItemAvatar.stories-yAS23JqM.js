import{j as t}from"./iframe-Cn9qPtrp.js";import{I as m}from"./index-BIlLMFwD.js";import{A as n}from"./index-DPaux46B.js";import{U as o,h as p}from"./index-DWYQ4eQk.js";import{G as a}from"./index-CyKw9SYR.js";import{T as d}from"./index-D2wuP2WF.js";import{L as s}from"./ListItemAvatar-DE_U0N7f.js";import{L as c,a as l}from"./ListItemText-CvxPVwVO.js";import{L as u}from"./ListItem-B1dl_PWG.js";import{L}from"./ListItemButton-BSgthfqq.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-BEbO5w96.js";import"./memoTheme-6yds69P_.js";import"./styled-D2CDconu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-2oFpmJBY.js";import"./useTimeout-BoQb9RDS.js";import"./TransitionGroupContext-CFwcVVqT.js";import"./useForkRef-Dq6ZsqmR.js";import"./useEventCallback-CiCWuPbq.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DAUt--dg.js";import"./Tooltip-DKs25lhA.js";import"./useTheme-B6YVOUYP.js";import"./useSlot-Cknh0r9X.js";import"./mergeSlotProps-Bjka9Klf.js";import"./useControlled-BIT0kvxY.js";import"./getReactElementRef-6Fd7mh7z.js";import"./Portal-BWZt9Zv4.js";import"./utils-BlV9er3y.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-yJhFLJQp.js";import"./Button-Cp2YlGAc.js";import"./index-C15uwsx2.js";import"./index-M7nj2U81.js";import"./___vite-browser-external_commonjs-proxy-CwPU4RYd.js";import"./index-CY8VLdQ2.js";import"./Avatar-pHPrMp6o.js";import"./createSvgIcon-CK6UXRVe.js";import"./SvgIcon-LXn_mqm4.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-CeYPkCsw.js";import"./Grid-BbGFtGav.js";import"./isMuiElement-DcGc7pTf.js";import"./styled-DhBMIDqB.js";import"./Stack-DmctAkNR.js";import"./Container-y4mOFKcU.js";import"./Typography-CDKB6cUx.js";import"./List-CDFvHcS1.js";import"./ListItemText-BMd41l-T.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-RPh5vvDY.js";import"./ListItemButton-CKVBw3cV.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
