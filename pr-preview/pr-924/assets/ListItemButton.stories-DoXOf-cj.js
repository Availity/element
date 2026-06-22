import{j as e,r as C}from"./iframe-DHkqGgbi.js";import{I as a}from"./IconButton-D5Zzj5BR.js";import{S as c}from"./StatusChip-CjGR9XCJ.js";import{C as y}from"./Checkbox-SLnKfcRZ.js";import{D as B}from"./Actions-BhLIra-T.js";import{c as k,M as m}from"./Common-BLIi_r9Z.js";import{F as P}from"./Files-DPkNiRxm.js";import{B as j}from"./Box-BS7pU1R3.js";import{G as g}from"./Grid-ArAcPf9E.js";import{T as S}from"./Typography-BunlOy3h.js";import{L as l,a as i}from"./ListItemText-37IJWKLL.js";import{L as n}from"./ListItem-C9La2qlS.js";import{L as s}from"./ListItemButton-CEPbt4Mh.js";import{L as d}from"./ListItemIcon-G3CHHo63.js";import{L as p}from"./ListItemStatusCard-BSRKlv7B.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-YeMRA4-y.js";import"./useTheme-DTNKpojL.js";import"./styled-BFLY3dn7.js";import"./memoTheme-vxEZSkJ8.js";import"./useSlot-CAeYipRU.js";import"./mergeSlotProps-Dp8H4ez1.js";import"./useForkRef-B4h6zx_x.js";import"./generateUtilityClass-BtcU_pBl.js";import"./generateUtilityClasses-DDbjFgb8.js";import"./useTimeout-Bjfnw5AG.js";import"./useControlled-DlDi1BKb.js";import"./useEventCallback-LtXdtY4h.js";import"./getReactElementRef-BRoKhHqU.js";import"./Grow-CwxupgJl.js";import"./utils-BQBkKAg6.js";import"./TransitionGroupContext-3E4Xv_Lx.js";import"./Popper-BUehIlZq.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-CtpwjVP0.js";import"./useSlotProps-CZQ_I0Kw.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-DmdwZwcg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BwqJJF5q.js";import"./CircularProgress-D39cxiof.js";import"./Chip-C_iVTTlh.js";import"./createSvgIcon-BS4jmzRl.js";import"./SvgIcon-D9Y7JiS_.js";import"./Checkbox-CuHdIdkj.js";import"./SwitchBase-BwOio7J8.js";import"./useFormControl-ZgfjO4em.js";import"./mergeSlotProps-BNZZW_n2.js";import"./FaSvgIcon-BtkjvlUV.js";import"./faMagnifyingGlass-DEVYYJwr.js";import"./Box-DMMQfXcC.js";import"./Grid-BLry6rK7.js";import"./isMuiElement-Bo_RUhfi.js";import"./styled-HR_WeqBB.js";import"./Typography-i96SYvKe.js";import"./List-BX9VmHQj.js";import"./ListItemText-BhFYDiMU.js";import"./listItemTextClasses-D_J2aVaO.js";import"./ListItem-BBQ7zaEs.js";import"./ListItemButton-B4nAFGwX.js";import"./ListItemIcon-K0NW90wF.js";import"./listItemIconClasses-BWL98Y3T.js";const Fe={title:"Components/List/ListItemButton",component:s,tags:["autodocs"],argTypes:{centerRipple:{table:{disable:!0}},disableRipple:{table:{disable:!0}},disableTouchRipple:{table:{disable:!0}},focusRipple:{table:{disable:!0}},TouchRippleProps:{table:{disable:!0}},touchRippleRef:{table:{disable:!0}}}},x={render:r=>e.jsx(s,{...r}),args:{children:"This text is a child of ListItemButton"}},I={render:()=>e.jsx(j,{children:e.jsxs(l,{children:[e.jsx(n,{disablePadding:!0,children:e.jsx(s,{children:e.jsx(i,{primary:"Default"})})}),e.jsx(n,{disablePadding:!0,children:e.jsxs(s,{selected:!0,children:[e.jsx(d,{children:e.jsx(k,{})}),e.jsx(i,{primary:"Selected"})]})}),e.jsx(n,{disablePadding:!0,children:e.jsxs(s,{className:"Mui-focusVisible",children:[e.jsx(d,{children:e.jsx(P,{})}),e.jsx(i,{primary:"Focused"})]})}),e.jsx(n,{disablePadding:!0,children:e.jsx(s,{disabled:!0,children:e.jsx(i,{primary:"Disabled"})})})]})})},u={render:()=>e.jsx(j,{component:"nav","aria-label":"mailbox folders",sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:e.jsxs(l,{children:[e.jsx(n,{disablePadding:!0,children:e.jsxs(s,{children:[e.jsx(d,{children:e.jsx(k,{})}),e.jsx(i,{primary:"Inbox"})]})}),e.jsx(n,{disablePadding:!0,children:e.jsxs(s,{children:[e.jsx(d,{children:e.jsx(P,{})}),e.jsx(i,{primary:"Drafts"})]})}),e.jsx(n,{disablePadding:!0,children:e.jsx(s,{children:e.jsx(i,{primary:"Trash"})})}),e.jsx(n,{disablePadding:!0,children:e.jsx(s,{component:"a",href:"#folder-list",children:e.jsx(i,{primary:"Spam"})})})]})})},h={render:()=>{const[r,T]=C.useState([0]),f=t=>()=>{const o=r.indexOf(t),L=[...r];o===-1?L.push(t):L.splice(o,1),T(L)};return e.jsxs(g,{container:!0,spacing:8,children:[e.jsxs(g,{size:{xs:12,sm:6},children:[e.jsx(S,{variant:"h6",component:"div",id:"selectable-default-spacing-header",children:"Default Spacing"}),e.jsx(l,{"aria-labelledby":"selectable-default-spacing-header",children:[0,1,2,3].map(t=>{const o=`checkbox-list-label-${t}`;return e.jsx(n,{disablePadding:!0,secondaryAction:e.jsx(a,{edge:"end",title:"delete",children:e.jsx(B,{fontSize:"xsmall"})}),children:e.jsxs(s,{role:void 0,onClick:f(t),selected:r.indexOf(t)!==-1,children:[e.jsx(d,{children:e.jsx(y,{edge:"start",checked:r.indexOf(t)!==-1,tabIndex:-1,inputProps:{"aria-labelledby":o}})}),e.jsx(i,{id:o,primary:`List item ${t+1}`,secondary:"Secondary"})]})},t)})})]}),e.jsxs(g,{size:{xs:12,sm:6},children:[e.jsx(S,{variant:"h6",component:"div",id:"selectable-dense-spacing-header",children:"Dense Spacing"}),e.jsx(l,{dense:!0,"aria-labelledby":"selectable-dense-spacing-header",children:[4,5,6,7].map(t=>{const o=`checkbox-list-label-${t}`;return e.jsx(n,{disablePadding:!0,secondaryAction:e.jsx(a,{edge:"end",title:"delete",children:e.jsx(B,{fontSize:"xsmall"})}),children:e.jsxs(s,{role:void 0,onClick:f(t),selected:r.indexOf(t)!==-1,children:[e.jsx(d,{children:e.jsx(y,{edge:"start",checked:r.indexOf(t)!==-1,tabIndex:-1,inputProps:{"aria-labelledby":o}})}),e.jsx(i,{id:o,primary:`List item ${t+1}`,secondary:"Secondary"})]})},t)})})]})]})}},b={render:()=>e.jsx(j,{sx:{width:"100%",bgcolor:"background.paper"},children:e.jsxs(l,{"aria-label":"list",children:[e.jsx(p,{disablePadding:!0,color:"success",secondaryAction:e.jsx(a,{title:"More Actions",children:e.jsx(m,{fontSize:"xsmall"})}),children:e.jsxs(s,{children:[e.jsx(i,{children:"Item"}),e.jsx(c,{color:"success",label:"Approved"})]})}),e.jsx(p,{disablePadding:!0,color:"warning",secondaryAction:e.jsx(a,{title:"More Actions",children:e.jsx(m,{fontSize:"xsmall"})}),children:e.jsxs(s,{children:[e.jsx(i,{children:"Item"}),e.jsx(c,{color:"warning",label:"Pending"})]})}),e.jsx(p,{disablePadding:!0,color:"error",secondaryAction:e.jsx(a,{title:"More Actions",children:e.jsx(m,{fontSize:"xsmall"})}),children:e.jsxs(s,{children:[e.jsx(i,{children:"Item"}),e.jsx(c,{color:"error",label:"Denied"})]})}),e.jsx(p,{disablePadding:!0,color:"success",secondaryAction:e.jsx(a,{title:"More Actions",children:e.jsx(m,{fontSize:"xsmall"})}),children:e.jsxs(s,{children:[e.jsx(i,{children:"Item"}),e.jsx(c,{color:"success",label:"Approved"})]})})]})})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (args: ListItemButtonProps) => <ListItemButton {...args} />,
  args: {
    children: 'This text is a child of ListItemButton'
  }
}`,...x.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Default" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton selected>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Selected" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="Mui-focusVisible">
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Focused" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton disabled>
            <ListItemText primary="Disabled" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
}`,...I.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Box component="nav" aria-label="mailbox folders" sx={{
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper'
  }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Trash" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#folder-list">
            <ListItemText primary="Spam" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState([0]);
    const handleToggle = (value: number) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setChecked(newChecked);
    };
    return <Grid container spacing={8}>
        <Grid size={{
        xs: 12,
        sm: 6
      }}>
          <Typography variant="h6" component="div" id="selectable-default-spacing-header">
            Default Spacing
          </Typography>
          <List aria-labelledby="selectable-default-spacing-header">
            {[0, 1, 2, 3].map(value => {
            const labelId = \`checkbox-list-label-\${value}\`;
            return <ListItem key={value} disablePadding secondaryAction={<IconButton edge="end" title="delete">
                      <DeleteIcon fontSize="xsmall" />
                    </IconButton>}>
                  <ListItemButton role={undefined} onClick={handleToggle(value)} selected={checked.indexOf(value) !== -1}>
                    <ListItemIcon>
                      <Checkbox edge="start" checked={checked.indexOf(value) !== -1} tabIndex={-1} inputProps={{
                    'aria-labelledby': labelId
                  }} />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={\`List item \${value + 1}\`} secondary="Secondary" />
                  </ListItemButton>
                </ListItem>;
          })}
          </List>
        </Grid>
        <Grid size={{
        xs: 12,
        sm: 6
      }}>
          <Typography variant="h6" component="div" id="selectable-dense-spacing-header">
            Dense Spacing
          </Typography>
          <List dense aria-labelledby="selectable-dense-spacing-header">
            {[4, 5, 6, 7].map(value => {
            const labelId = \`checkbox-list-label-\${value}\`;
            return <ListItem key={value} disablePadding secondaryAction={<IconButton edge="end" title="delete">
                      <DeleteIcon fontSize="xsmall" />
                    </IconButton>}>
                  <ListItemButton role={undefined} onClick={handleToggle(value)} selected={checked.indexOf(value) !== -1}>
                    <ListItemIcon>
                      <Checkbox edge="start" checked={checked.indexOf(value) !== -1} tabIndex={-1} inputProps={{
                    'aria-labelledby': labelId
                  }} />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={\`List item \${value + 1}\`} secondary="Secondary" />
                  </ListItemButton>
                </ListItem>;
          })}
          </List>
        </Grid>
      </Grid>;
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: '100%',
    bgcolor: 'background.paper'
  }}>
      <List aria-label="list">
        <ListItemStatusCard disablePadding color="success" secondaryAction={<IconButton title="More Actions">
              <MoreVerticalIcon fontSize="xsmall" />
            </IconButton>}>
          <ListItemButton>
            <ListItemText>Item</ListItemText>
            <StatusChip color="success" label="Approved" />
          </ListItemButton>
        </ListItemStatusCard>
        <ListItemStatusCard disablePadding color="warning" secondaryAction={<IconButton title="More Actions">
              <MoreVerticalIcon fontSize="xsmall" />
            </IconButton>}>
          <ListItemButton>
            <ListItemText>Item</ListItemText>
            <StatusChip color="warning" label="Pending" />
          </ListItemButton>
        </ListItemStatusCard>
        <ListItemStatusCard disablePadding color="error" secondaryAction={<IconButton title="More Actions">
              <MoreVerticalIcon fontSize="xsmall" />
            </IconButton>}>
          <ListItemButton>
            <ListItemText>Item</ListItemText>
            <StatusChip color="error" label="Denied" />
          </ListItemButton>
        </ListItemStatusCard>
        <ListItemStatusCard disablePadding color="success" secondaryAction={<IconButton title="More Actions">
              <MoreVerticalIcon fontSize="xsmall" />
            </IconButton>}>
          <ListItemButton>
            <ListItemText>Item</ListItemText>
            <StatusChip color="success" label="Approved" />
          </ListItemButton>
        </ListItemStatusCard>
      </List>
    </Box>
}`,...b.parameters?.docs?.source}}};const Ge=["_ListItemButton","_States","_FolderList","_Selectable","_InteractiveStatusCards"];export{u as _FolderList,b as _InteractiveStatusCards,x as _ListItemButton,h as _Selectable,I as _States,Ge as __namedExportsOrder,Fe as default};
