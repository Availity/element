import{j as t}from"./iframe-DKPLEfLw.js";import{I as m}from"./index-BFdrycj9.js";import{A as n}from"./index-CvPnLa1g.js";import{U as o,g as p}from"./index-WRElMkUo.js";import{G as a}from"./index-Dn59n-rN.js";import{T as d}from"./index-B_gHUUTW.js";import{L as s}from"./ListItemAvatar-DF4qS_Q0.js";import{L as c,a as l}from"./ListItemText-ucBMGMRS.js";import{L as u}from"./ListItem-CBkx5lBh.js";import{L}from"./ListItemButton-HEe8gngI.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-CV3fhIPH.js";import"./useTheme-9F3p9Qod.js";import"./styled-DmVvl1cy.js";import"./memoTheme-DCtqnaOZ.js";import"./useSlot-BRbtrhUo.js";import"./mergeSlotProps-DczvM8iT.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BBFL5x5N.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./generateUtilityClass-BtcU_pBl.js";import"./useTimeout-C_Ka5Mcj.js";import"./useControlled-RZIZY8-C.js";import"./useEventCallback-DDVZojhm.js";import"./getReactElementRef-BnAyG0-a.js";import"./Portal-DsulJ7FL.js";import"./utils-BvzjqUtG.js";import"./TransitionGroupContext-PAkUv-tF.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-RoKiuIH8.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-8Ec7VkLh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-ChXh0SoD.js";import"./CircularProgress-QNpYF3E0.js";import"./Button-DWZjJ-VR.js";import"./index-zNtTlnyx.js";import"./index-D0RdvGWv.js";import"./___vite-browser-external_commonjs-proxy-C7XsORAh.js";import"./index-BZbS_W-l.js";import"./_toKey-CghGTOo7.js";import"./Avatar-KQYKQ4AH.js";import"./createSvgIcon-vtaDbQWp.js";import"./SvgIcon-FjAnPN_Y.js";import"./faCircleArrowRight-B87giHcC.js";import"./faUser-meEUFR5-.js";import"./Box-CZdlnD3e.js";import"./Grid-Bc7_QC4M.js";import"./styled-Wz6Z4Uga.js";import"./isMuiElement-Bob4bJgN.js";import"./Stack-ClwGR_Ch.js";import"./Container-DJ1Q8iJN.js";import"./Typography-BTTsir7-.js";import"./List-BjcIUzlW.js";import"./ListItemText-jLZTmKiD.js";import"./listItemTextClasses-CiRxluPw.js";import"./ListItem-zmLDzAOM.js";import"./ListItemButton-Bze0AQjY.js";const zt={title:"Components/List/ListItemAvatar",component:s,tags:["autodocs"],argTypes:{children:{control:!1}}},e={render:r=>t.jsx(s,{...r,children:t.jsx(n,{size:"m",children:t.jsx(o,{})})})},i={render:()=>t.jsxs(a,{container:!0,spacing:8,children:[t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-default-spacing-header",children:"Default Spacing"}),t.jsx(c,{"aria-labelledby":"users-default-spacing-header",children:[0,1,2,3].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]}),t.jsxs(a,{size:{xs:12,sm:6},children:[t.jsx(d,{variant:"h6",component:"div",id:"users-dense-spacing-header",children:"Dense Spacing"}),t.jsx(c,{dense:!0,"aria-labelledby":"users-dense-spacing-header",children:[4,5,6,7].map(r=>t.jsx(u,{disablePadding:!0,secondaryAction:t.jsx(m,{title:"message",children:t.jsx(p,{})}),children:t.jsxs(L,{children:[t.jsx(s,{children:t.jsx(n,{size:"m",children:t.jsx(o,{})})}),t.jsx(l,{primary:"List item",secondary:"Secondary"})]})},r))})]})]})};var h,x,I;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
