import{j as t}from"./iframe-P-I-t7s_.js";import{I as m}from"./index-BOqcfzn9.js";import{A as n}from"./index-BAVCVzT7.js";import{U as o,g as p}from"./index-C3cy06cM.js";import{G as a}from"./index-DGaASH14.js";import{T as d}from"./index-DWh3JVg2.js";import{L as s}from"./ListItemAvatar-C4fMJRJ8.js";import{L as c,a as l}from"./ListItemText-CciaynG7.js";import{L as u}from"./ListItem-BXvFJDJa.js";import{L}from"./ListItemButton-PDRuOlE9.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-kyKJtl96.js";import"./useTheme-BPf64W-X.js";import"./styled-DNi79hKI.js";import"./memoTheme-Bi3jfVWD.js";import"./useSlot-DY-xq6aU.js";import"./mergeSlotProps-CDm4lxrI.js";import"./useForkRef-B5SqA4pZ.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-Dzhca5Jx.js";import"./useControlled-Cqclzim-.js";import"./useEventCallback-DAYatbRK.js";import"./getReactElementRef-DFgmZ0uJ.js";import"./Portal-_y01gIKP.js";import"./utils-DTqcJog-.js";import"./TransitionGroupContext-Dvdi4lCr.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-Cx6Yk_v4.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BTlhtNIa.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-P5TjO14T.js";import"./CircularProgress-BRuGXxty.js";import"./Button-xw2JRpr3.js";import"./index-Cc847Osj.js";import"./index-DdsUWlQe.js";import"./___vite-browser-external_commonjs-proxy-DDlQnjAM.js";import"./index-BdjU-ADR.js";import"./_toKey-CwF_HlVq.js";import"./Avatar-BC1KK1Fc.js";import"./createSvgIcon-JwEd2gcS.js";import"./SvgIcon-DmOXCSGB.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Box-BCYJimk9.js";import"./Grid-DUqLWWvo.js";import"./styled-Cp0DTD0x.js";import"./isMuiElement-DIafhdSN.js";import"./Stack-JGFv5pEs.js";import"./Container-8zPEfJs6.js";import"./Typography-BFwAhjnY.js";import"./List-C_3Uxwtv.js";import"./ListItemText-eMXl8Yl5.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-B8NH5nWV.js";import"./ListItemButton-CxedZmjY.js";const gt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
