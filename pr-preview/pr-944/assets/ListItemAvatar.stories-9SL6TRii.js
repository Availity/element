import{j as t}from"./iframe-DPgvn2UU.js";import{I as m}from"./index-CeFSOpBV.js";import{A as n}from"./index-CaDKo1UD.js";import{U as o,h as p}from"./index-DkMl2Zw_.js";import{G as a}from"./index-DiNwh75D.js";import{T as d}from"./index-Bj2mBLrK.js";import{L as s}from"./ListItemAvatar-DGqVDgcx.js";import{L as c,a as l}from"./ListItemText-DTnwBJlv.js";import{L as u}from"./ListItem-d56WAPtv.js";import{L}from"./ListItemButton-DwABwrOP.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-B7NJWIp-.js";import"./memoTheme-BYph2ZTv.js";import"./styled-Bnkr7D-c.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-C05RGSI7.js";import"./useTimeout-b550rnFU.js";import"./TransitionGroupContext-CFlHgrGu.js";import"./useForkRef-B_9E6GXl.js";import"./useEventCallback-DBIic8Ex.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C6YfH4n8.js";import"./Tooltip-YOgdBn5B.js";import"./useTheme-B7kQ5Jap.js";import"./useSlot-DpB6mlqQ.js";import"./mergeSlotProps-DRvPt2A_.js";import"./useControlled-BRfcL8pA.js";import"./getReactElementRef-vJH3QVIN.js";import"./Portal-DRuBdp-z.js";import"./utils-CA9pXuzB.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-BkILu-KG.js";import"./Button-BYYLdAXe.js";import"./index-Coy1nEZO.js";import"./index-CFHPeqeG.js";import"./___vite-browser-external_commonjs-proxy-DchKfydG.js";import"./index-CY8VLdQ2.js";import"./Avatar-BSb3nf-P.js";import"./createSvgIcon-CVdeguJ_.js";import"./SvgIcon-Bq0V0STh.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-BlDR6l9l.js";import"./Grid-DrKODsgE.js";import"./isMuiElement-CIfsBfEF.js";import"./styled-CiHxTfSE.js";import"./Stack-Br7WCR6b.js";import"./Container-CIN8FyKG.js";import"./Typography-CPTozpuv.js";import"./List-BJ31Te5w.js";import"./ListItemText-CVwAjpAi.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-CHgJP0Bn.js";import"./ListItemButton-RpHHDBcr.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
