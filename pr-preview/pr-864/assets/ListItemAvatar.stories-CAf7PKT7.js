import{j as t}from"./iframe-CFnK--5_.js";import{I as m}from"./index-JryDx5j_.js";import{A as n}from"./index-iTRUPimV.js";import{U as o,g as p}from"./index-B8FQNIIr.js";import{G as a}from"./index-CTUH8f9W.js";import{T as d}from"./index-BeLzzgii.js";import{L as s}from"./ListItemAvatar-D3Lavbhm.js";import{L as c,a as l}from"./ListItemText-cLxAJfzX.js";import{L as u}from"./ListItem-BfKZccuQ.js";import{L}from"./ListItemButton-Chm1_pTe.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-D7zb4Xpv.js";import"./useTheme-BUU7R_-h.js";import"./styled-B_SR2Ytp.js";import"./memoTheme-DHqcPMUG.js";import"./useSlot-Bcbuphfr.js";import"./mergeSlotProps-CjkbnSEr.js";import"./useForkRef-Di9rDSJ_.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-C_X7UAwn.js";import"./useControlled-QCqU36h_.js";import"./useEventCallback-CAGgRosr.js";import"./getReactElementRef-guKTxCdd.js";import"./Portal-By2AWbtS.js";import"./utils-DAiY7LDj.js";import"./TransitionGroupContext-D3GUir9f.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-3SA_4L0x.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DDlS7gn-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BaxBneFE.js";import"./CircularProgress-DUyilEJx.js";import"./Button-CFFdP_-2.js";import"./index-qsLlyiUT.js";import"./index-DSDLHfht.js";import"./___vite-browser-external_commonjs-proxy-DcVX7utr.js";import"./index-BhKrGy8e.js";import"./_toKey-CDTDXh5w.js";import"./Avatar-CkTJwm2K.js";import"./createSvgIcon-BW1yD8n1.js";import"./SvgIcon-BS2_Q9nG.js";import"./faCircleArrowRight-DD93uDiF.js";import"./faUser-5enrXuLZ.js";import"./Box-CzpKZwgR.js";import"./Grid-sJL0YzUx.js";import"./styled-0UPDl72R.js";import"./isMuiElement-CSdCdkNb.js";import"./Stack-B65FEu5Y.js";import"./Container-H7u83N50.js";import"./Typography-CAi-X6a_.js";import"./List-C3NHgsZM.js";import"./ListItemText-DZIT6f5F.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-CaRCtufE.js";import"./ListItemButton-BeGjG4_i.js";const gt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
