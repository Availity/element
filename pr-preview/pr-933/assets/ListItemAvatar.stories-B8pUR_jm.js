import{j as t}from"./iframe-CgyQHDht.js";import{I as m}from"./index-5azouwn6.js";import{A as n}from"./index-CaChcSCD.js";import{U as o,h as p}from"./index-6_aePX59.js";import{G as a}from"./index-BiQy1AHR.js";import{T as d}from"./index-Au96FvEp.js";import{L as s}from"./ListItemAvatar-7alXGlBi.js";import{L as c,a as l}from"./ListItemText-CmvLBMgH.js";import{L as u}from"./ListItem-CIzAMuCl.js";import{L}from"./ListItemButton-C1AZ0A2f.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-M-Sr99uW.js";import"./memoTheme-9z4HOxEW.js";import"./styled-CeAqJ-c9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-BeOu4eYa.js";import"./useTimeout-B7u63TVX.js";import"./TransitionGroupContext-CbCiCZin.js";import"./useForkRef-DvvK-eiI.js";import"./useEventCallback-v1-mseXg.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-OvvKtsaM.js";import"./Tooltip-0ZBCaLdQ.js";import"./useTheme-DBOW2iGc.js";import"./useSlot-BI63qm8Z.js";import"./mergeSlotProps-DEDO0PDp.js";import"./useControlled-DSiBAGka.js";import"./getReactElementRef-DSOw1wXb.js";import"./Portal-Cv3ZG74Z.js";import"./utils-i6pe6p9D.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-D00sgM-L.js";import"./Button-D8e6tdaf.js";import"./index-Cqj_0nzu.js";import"./index-6LTLb7jJ.js";import"./___vite-browser-external_commonjs-proxy-QXeNOFjN.js";import"./index-DePoTdZz.js";import"./Avatar-DA2f7NhA.js";import"./createSvgIcon-CyM8AHy5.js";import"./SvgIcon-D8liJDyc.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-BxdWl5-L.js";import"./Grid-BNO3N1YM.js";import"./isMuiElement-BaNoNC5Q.js";import"./styled-Dvv_Oh9D.js";import"./Stack-oqPb14Ks.js";import"./Container-s8QyPm16.js";import"./Typography-yiHubm7E.js";import"./List-DixvLrk0.js";import"./ListItemText-DE1FvmLW.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-BoZfq3-e.js";import"./ListItemButton-ChUo3SEy.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
