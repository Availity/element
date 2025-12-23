import{j as t}from"./iframe-BOqhEPj6.js";import{I as m}from"./index-CQw0a6ar.js";import{A as n}from"./index-Dqqlp9yw.js";import{U as o,g as p}from"./index-DX6yAWWK.js";import{G as a}from"./index-DMdqsLqb.js";import{T as d}from"./index-C8WQ3P9P.js";import{L as s}from"./ListItemAvatar-CzphAiQL.js";import{L as c,a as l}from"./ListItemText-DMVRLMKL.js";import{L as u}from"./ListItem-B6SrbS0k.js";import{L}from"./ListItemButton-C_jrZPuP.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DKIHpwU2.js";import"./useTheme-s5qe_7AX.js";import"./styled-ClQgRsdc.js";import"./memoTheme-BYC15E_2.js";import"./useSlot-B469CtEr.js";import"./mergeSlotProps-sNcrx_r5.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D87wou6e.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-CKtuW5yl.js";import"./useControlled-CmW8DIBb.js";import"./useEventCallback-BHkbNqwn.js";import"./getReactElementRef-DF_NnWMb.js";import"./Portal-Cx3wFGpK.js";import"./utils-CDaWu4n1.js";import"./TransitionGroupContext-TO625Yxj.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-DnEE7xuk.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-BP3VjvuD.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C7cVXKAH.js";import"./CircularProgress-Xg5tMO8-.js";import"./Button-BDF2rRxm.js";import"./index-BnQMcvUu.js";import"./index-CGqRv4RY.js";import"./___vite-browser-external_commonjs-proxy-BIEiDzEk.js";import"./index-vabkworu.js";import"./_toKey-DhmaiSd7.js";import"./Avatar-DGHET5nT.js";import"./createSvgIcon-BzRll-a0.js";import"./SvgIcon-BlVGnbba.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Box-CIHxGpEh.js";import"./Grid-BJc_wFud.js";import"./styled-BY2Q14_8.js";import"./isMuiElement-FBus6K6C.js";import"./Stack-DPaZpNJF.js";import"./Container-Ck_72FoA.js";import"./Typography-DCSeVpBd.js";import"./List-B_DaY4Qf.js";import"./ListItemText-DyTe-qc5.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-C8FJHUrX.js";import"./ListItemButton-D4QJmm4C.js";const zt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};var h,x,I;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
