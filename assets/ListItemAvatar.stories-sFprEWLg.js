import{j as t}from"./iframe-G1mPJgBf.js";import{I as m}from"./index-L2w0xRVx.js";import{A as n}from"./index-UNnctpfM.js";import{U as o,h as p}from"./index-J2aZCtZS.js";import{G as a}from"./index-Dd7L_VAv.js";import{T as d}from"./index-BohNTKzF.js";import{L as s}from"./ListItemAvatar-CGME6a5o.js";import{L as c,a as l}from"./ListItemText-apEYGN3P.js";import{L as u}from"./ListItem-Y_bb2TFJ.js";import{L}from"./ListItemButton--65iWy53.js";import"./preload-helper-PPVm8Dsz.js";import"./IconButton-Bcnv2CeG.js";import"./memoTheme-ClxxX8JT.js";import"./styled-Bu4wmneT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./ButtonBase-B5xaXwjS.js";import"./useTimeout-EKZwYL1w.js";import"./TransitionGroupContext-F733By2L.js";import"./useForkRef-BD2h0Jdv.js";import"./useEventCallback-C728JWJX.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CUukeIT7.js";import"./Tooltip-DQJZ8sfi.js";import"./useTheme-D1p8Kaqq.js";import"./useSlot-DeTGMu9w.js";import"./mergeSlotProps-D9Hi5YzQ.js";import"./useControlled-_wEooLXW.js";import"./getReactElementRef-D1QwtblH.js";import"./Portal-D2NuCJSx.js";import"./utils-CV6P-8oh.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-C0zVRdHz.js";import"./Button-ByjTqYnc.js";import"./index-CEiGyhSD.js";import"./index-DIoy5QMF.js";import"./___vite-browser-external_commonjs-proxy-BbC5ecPs.js";import"./index-CGWJm4Tl.js";import"./Avatar-BqOaHGrE.js";import"./createSvgIcon-BAr3_gQH.js";import"./SvgIcon-CTlX2w7Q.js";import"./faCircleArrowRight-B9UHrVR2.js";import"./faUser-BPZKYm75.js";import"./Box-B9x9TWbS.js";import"./Grid-DzK1vDYp.js";import"./isMuiElement-CksqsLPP.js";import"./styled-DkfJ6ssg.js";import"./Stack-baAEBtk1.js";import"./Container-v7PawbDd.js";import"./Typography-DNGzJ1Ro.js";import"./List-NPmmzPN-.js";import"./ListItemText-jcsfnc8F.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-DuPv2T26.js";import"./ListItemButton-DiCLuspN.js";const It={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
